const admin = require('firebase-admin');
const fs = require('fs');

// ===== 1. قراءة وفك تشفير حساب الخدمة =====
let serviceAccount;
try {
    const raw = process.env.FIREBASE_SERVICE_ACCOUNT;
    const cleaned = raw.trim().replace(/[\u0000-\u001F\u007F-\u009F]/g, '');
    serviceAccount = JSON.parse(cleaned);
    if (serviceAccount.private_key) {
        serviceAccount.private_key = serviceAccount.private_key.replace(/\\n/g, '\n');
    }
    console.log('✅ Service account parsed successfully');
} catch(e) {
    console.error('❌ Failed to parse service account:', e.message);
    process.exit(1);
}

// ===== 2. قراءة ملف الإشعارات =====
let notifications;
try {
    notifications = JSON.parse(fs.readFileSync('notifications.json', 'utf8'));
    console.log('✅ Notifications file loaded');
} catch(e) {
    console.error('❌ Failed to read notifications.json:', e.message);
    process.exit(1);
}

// ===== 3. تهيئة Firebase =====
admin.initializeApp({ credential: admin.credential.cert(serviceAccount) });
const db = admin.firestore();
console.log('✅ Firebase initialized');

// ===== 4. الحصول على الوقت الحالي (توقيت السيرفر) =====
const now = new Date();
const hour = now.getHours();      // ✅ يستخدم توقيت السيرفر المحلي
const minute = now.getMinutes();
console.log(`⏰ Server time: ${hour}:${minute}`);

// ===== 5. جلب جميع التوكنات من Firestore =====
async function getAllTokens() {
    try {
        const snapshot = await db.collection('fcmTokens').get();
        const tokens = snapshot.docs.map(doc => doc.data().token).filter(Boolean);
        console.log(`📱 Found ${tokens.length} tokens in Firestore`);
        return tokens;
    } catch(e) {
        console.error('❌ Error fetching tokens:', e.message);
        return [];
    }
}

// ===== 6. إرسال الإشعارات للمستخدمين =====
async function sendToTokens(tokens, title, body, image) {
    if (tokens.length === 0) {
        console.log('⚠️ No tokens found');
        return;
    }

    console.log(`📤 Sending notification to ${tokens.length} device(s)...`);
    console.log(`📢 Title: "${title}"`);
    console.log(`📝 Body: "${body}"`);

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

    // إرسال على دفعات (كل دفعة 500 جهاز)
    const batchSize = 500;
    let totalSent = 0;
    let totalFailed = 0;

    for (let i = 0; i < messages.length; i += batchSize) {
        const batch = messages.slice(i, i + batchSize);
        console.log(`📦 Sending batch ${Math.floor(i/batchSize) + 1}/${Math.ceil(messages.length/batchSize)}...`);
        
        try {
            const res = await admin.messaging().sendEach(batch);
            console.log(`✅ Batch sent: ${res.successCount} successful, ${res.failureCount} failed`);
            totalSent += res.successCount;
            totalFailed += res.failureCount;

            // احذف الـ tokens الفاشلة (الأجهزة غير النشطة)
            for (let j = 0; j < res.responses.length; j++) {
                if (!res.responses[j].success) {
                    const failedToken = batch[j].token;
                    try {
                        await db.collection('fcmTokens').doc(failedToken).delete();
                        console.log(`🗑️ Removed invalid token: ${failedToken.substring(0, 20)}...`);
                    } catch(e) {
                        console.log('⚠️ Could not delete token:', e.message);
                    }
                }
            }
        } catch(e) {
            console.error('❌ Error sending batch:', e.message);
        }
    }

    console.log(`📊 Summary: ✅ ${totalSent} successful, ❌ ${totalFailed} failed`);
}

// ===== 7. الدالة الرئيسية =====
async function main() {
    console.log('🚀 Starting notification process...');
    
    const tokens = await getAllTokens();
    
    // التحقق من وجود إشعار تحديث
    if (notifications.update && notifications.update.enabled) {
        console.log('📢 Sending update notification...');
        await sendToTokens(tokens, notifications.update.title, notifications.update.body, notifications.update.image);
        return;
    }

    // البحث عن إشعار مطابق للوقت الحالي
    let sent = false;
    for (const reminder of notifications.reminders) {
        if (!reminder.enabled) continue;
        
        // مقارنة الساعة والدقيقة مع الوقت الحالي
        if (reminder.hour === hour && (reminder.minute || 0) === minute) {
            console.log(`📢 Time matched! Sending: ${reminder.title}`);
            await sendToTokens(tokens, reminder.title, reminder.body, reminder.image);
            sent = true;
        }
    }

    if (!sent) {
        console.log(`ℹ️ No reminders match current time (${hour}:${minute})`);
        
        // للتجربة: إرسال قسري إذا طلبنا FORCE_SEND
        if (process.env.FORCE_SEND === 'true') {
            console.log('🧪 FORCE_SEND is true - sending test notification...');
            const first = notifications.reminders.find(r => r.enabled);
            if (first) {
                await sendToTokens(tokens, first.title, first.body, first.image);
            } else {
                console.log('⚠️ No enabled reminders found for force send');
            }
        }
    }
    
    console.log('✅ Notification process completed');
}

// ===== 8. تشغيل الدالة الرئيسية =====
main().catch(e => { 
    console.error('❌ Fatal error:', e); 
    process.exit(1); 
});
