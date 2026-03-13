const admin = require('firebase-admin');
const fs = require('fs');

console.log('🚀 ===== STARTING =====');

if (!process.env.FIREBASE_SERVICE_ACCOUNT) {
    console.error('❌ FIREBASE_SERVICE_ACCOUNT is missing!');
    process.exit(1);
}

let serviceAccount;
try {
    const raw = process.env.FIREBASE_SERVICE_ACCOUNT.trim().replace(/[\u0000-\u001F\u007F-\u009F]/g, '');
    const decoded = Buffer.from(raw, 'base64').toString('utf8');
    serviceAccount = JSON.parse(decoded);
    if (serviceAccount.private_key) {
        serviceAccount.private_key = serviceAccount.private_key.replace(/\\n/g, '\n');
    }
    console.log('✅ Service account parsed');
    console.log('Project ID:', serviceAccount.project_id);
} catch(e) {
    console.error('❌ Parse error:', e.message);
    process.exit(1);
}

// قراءة ملف الإشعارات
let notifications;
try {
    if (!fs.existsSync('notifications.json')) {
        console.error('❌ notifications.json not found!');
        process.exit(1);
    }
    notifications = JSON.parse(fs.readFileSync('notifications.json', 'utf8'));
    console.log('✅ notifications.json loaded');
} catch(e) {
    console.error('❌ Failed to read notifications.json:', e.message);
    process.exit(1);
}

// تهيئة Firebase
try {
    admin.initializeApp({ credential: admin.credential.cert(serviceAccount) });
    console.log('✅ Firebase initialized');
} catch(e) {
    console.error('❌ Firebase init failed:', e.message);
    process.exit(1);
}

// ✅ الوقت بتوقيت مصر UTC+2
const now = new Date();
const egyptOffset = 2; // UTC+2
const egyptTime = new Date(now.getTime() + egyptOffset * 60 * 60 * 1000);
const hour = egyptTime.getUTCHours();
const minute = egyptTime.getUTCMinutes();
console.log(`⏰ UTC time: ${now.getUTCHours()}:${now.getUTCMinutes()}`);
console.log(`🇪🇬 Egypt time: ${hour}:${minute}`);

async function getAllTokens() {
    try {
        const db = admin.firestore();
        const snapshot = await db.collection('fcmTokens').get();
        const tokens = snapshot.docs.map(doc => doc.data().token).filter(Boolean);
        console.log(`📱 Found ${tokens.length} tokens`);
        return tokens;
    } catch(e) {
        console.error('❌ Error fetching tokens:', e.message);
        return [];
    }
}

async function sendToTokens(tokens, title, body, image) {
    if (!tokens.length) { console.log('⚠️ No tokens'); return; }

    console.log(`📤 Sending to ${tokens.length} device(s): "${title}"`);

    const messages = tokens.map(token => ({
        token,
        notification: { title, body },
        webpush: {
            notification: {
                title, body,
                icon: 'https://i.postimg.cc/J4xdc62M/20260305-233826.png',
                badge: 'https://i.postimg.cc/J4xdc62M/20260305-233826.png',
                image: image || 'https://i.postimg.cc/J4xdc62M/20260305-233826.png',
                dir: 'rtl',
                vibrate: [200, 100, 200],
                actions: [
                    { action: 'open', title: '📚 تعلم الآن' },
                    { action: 'close', title: 'لاحقاً' }
                ]
            },
            fcm_options: { link: 'https://riad325r-maker.github.io/cine-lingua.-/' }
        }
    }));

    const batchSize = 500;
    let totalSent = 0, totalFailed = 0;

    for (let i = 0; i < messages.length; i += batchSize) {
        const batch = messages.slice(i, i + batchSize);
        try {
            const res = await admin.messaging().sendEach(batch);
            totalSent += res.successCount;
            totalFailed += res.failureCount;
            console.log(`✅ Batch: ${res.successCount} ok, ${res.failureCount} failed`);

            for (let j = 0; j < res.responses.length; j++) {
                if (!res.responses[j].success) {
                    try {
                        await admin.firestore().collection('fcmTokens').doc(batch[j].token).delete();
                    } catch(e) {}
                }
            }
        } catch(e) {
            console.error('❌ Batch error:', e.message);
        }
    }
    console.log(`📊 Total: ✅ ${totalSent} sent, ❌ ${totalFailed} failed`);
}

async function main() {
    const tokens = await getAllTokens();

    // إشعار تحديث
    if (notifications.update?.enabled) {
        console.log('📢 Sending update notification...');
        await sendToTokens(tokens, notifications.update.title, notifications.update.body, notifications.update.image);
        return;
    }

    // إشعارات مجدولة
    let sent = false;
    for (const reminder of (notifications.reminders || [])) {
        if (!reminder.enabled) continue;
        if (reminder.hour === hour && (reminder.minute || 0) === minute) {
            console.log(`📢 Sending: ${reminder.title}`);
            await sendToTokens(tokens, reminder.title, reminder.body, reminder.image);
            sent = true;
        }
    }

    if (!sent) {
        console.log(`ℹ️ No reminders match Egypt time ${hour}:${minute}`);
        if (process.env.FORCE_SEND === 'true') {
            console.log('🧪 FORCE_SEND — sending first reminder...');
            const first = notifications.reminders?.find(r => r.enabled);
            if (first) await sendToTokens(tokens, first.title, first.body, first.image);
        }
    }

    console.log('✅ Done');
}

main().catch(e => { console.error('❌ Fatal:', e); process.exit(1); });
