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
    if (serviceAccount.private_key)
        serviceAccount.private_key = serviceAccount.private_key.replace(/\\n/g, '\n');
    console.log('✅ Service account parsed, project:', serviceAccount.project_id);
} catch(e) {
    console.error('❌ Parse error:', e.message);
    process.exit(1);
}

let notifications;
try {
    notifications = JSON.parse(fs.readFileSync('notifications.json', 'utf8'));
    console.log('✅ notifications.json loaded');
} catch(e) {
    console.error('❌ notifications.json error:', e.message);
    process.exit(1);
}

try {
    admin.initializeApp({ credential: admin.credential.cert(serviceAccount) });
    console.log('✅ Firebase initialized');
} catch(e) {
    console.error('❌ Firebase init failed:', e.message);
    process.exit(1);
}

// ✅ توقيت مصر (UTC+2) — يتكيف مع التوقيت الصيفي تلقائياً
const now = new Date();
const egyptTime = new Date(now.toLocaleString('en-US', { timeZone: 'Africa/Cairo' }));
const hour   = egyptTime.getHours();
const minute = egyptTime.getMinutes();
console.log(`⏰ UTC: ${now.getUTCHours()}:${String(now.getUTCMinutes()).padStart(2,'0')}`);
console.log(`🇪🇬 Egypt: ${hour}:${String(minute).padStart(2,'0')}`);

async function getAllTokens() {
    try {
        const db = admin.firestore();
        const snapshot = await db.collection('fcmTokens').get();
        const tokens = snapshot.docs.map(doc => doc.data().token).filter(Boolean);
        // إزالة التكرار
        const unique = [...new Set(tokens)];
        console.log(`📱 ${snapshot.docs.length} tokens → ${unique.length} unique`);
        return unique;
    } catch(e) {
        console.error('❌ Error fetching tokens:', e.message);
        return [];
    }
}

async function sendToTokens(tokens, title, body, image, hour) {
    if (!tokens.length) { console.log('⚠️ No tokens'); return; }
    console.log(`📤 Sending "${title}" to ${tokens.length} device(s)`);

    const tag = `cinelingua-${hour}`;

    const messages = tokens.map(token => ({
        token,
        notification: { title, body },
        webpush: {
            notification: {
                title, body,
                icon:  'https://i.postimg.cc/J4xdc62M/20260305-233826.png',
                badge: 'https://i.postimg.cc/J4xdc62M/20260305-233826.png',
                image: image || 'https://i.postimg.cc/J4xdc62M/20260305-233826.png',
                tag,         // ✅ نفس الـ tag = لا تكرار
                renotify: false,
                dir: 'rtl',
                vibrate: [200, 100, 200],
                actions: [
                    { action: 'open',  title: '📚 تعلم الآن' },
                    { action: 'close', title: 'لاحقاً' }
                ]
            },
            fcm_options: { link: 'https://cinelingua.netlify.app/' }
        },
        // نرسل الـ hour كـ data للـ SW يستخدمه في الـ tag
        data: { hour: String(hour) }
    }));

    const batchSize = 500;
    let totalSent = 0, totalFailed = 0;

    for (let i = 0; i < messages.length; i += batchSize) {
        const batch = messages.slice(i, i + batchSize);
        try {
            const res = await admin.messaging().sendEach(batch);
            totalSent   += res.successCount;
            totalFailed += res.failureCount;
            console.log(`✅ Batch: ${res.successCount} ok, ${res.failureCount} failed`);

            // احذف التوكنات الفاشلة
            for (let j = 0; j < res.responses.length; j++) {
                if (!res.responses[j].success) {
                    const errCode = res.responses[j].error?.code;
                    if (['messaging/invalid-registration-token',
                         'messaging/registration-token-not-registered'].includes(errCode)) {
                        try {
                            await admin.firestore().collection('fcmTokens').doc(batch[j].token).delete();
                            console.log('🗑️ Deleted invalid token');
                        } catch(e) {}
                    }
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

    // إشعار تحديث — أولوية قصوى
    if (notifications.update?.enabled) {
        console.log('📢 Sending update notification...');
        await sendToTokens(tokens,
            notifications.update.title,
            notifications.update.body,
            notifications.update.image,
            'update'
        );
        return;
    }

    // ✅ إشعارات مجدولة — يطابق الساعة فقط
    let sent = false;
    for (const reminder of (notifications.reminders || [])) {
        if (!reminder.enabled) continue;
        if (reminder.hour === hour) {
            console.log(`📢 Matched hour ${hour} → "${reminder.title}"`);
            await sendToTokens(tokens, reminder.title, reminder.body, reminder.image, hour);
            sent = true;
            break; // أرسل واحد فقط لكل وقت
        }
    }

    if (!sent) {
        console.log(`ℹ️ No reminder matches Egypt hour ${hour} — skipping.`);
        // ❌ حذفنا FORCE_SEND تماماً — لا إرسال إذا ما طابق
    }

    console.log('✅ Done');
}

main().catch(e => { console.error('❌ Fatal:', e); process.exit(1); });
