const admin = require('firebase-admin');
const fs = require('fs');

// تحميل إعدادات الإشعارات
const notifications = JSON.parse(fs.readFileSync('notifications.json', 'utf8'));

// تهيئة Firebase
const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);
admin.initializeApp({ credential: admin.credential.cert(serviceAccount) });

// تحديد الساعة الحالية
const now = new Date();
const hour = now.getUTCHours();
const minute = now.getUTCMinutes();

async function sendToTopic(title, body, image) {
    const message = {
        notification: { title, body, image },
        android: {
            notification: {
                icon: 'ic_notification',
                color: '#6366f1',
                click_action: 'FLUTTER_NOTIFICATION_CLICK'
            }
        },
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
        },
        topic: 'all-users'
    };

    try {
        const res = await admin.messaging().send(message);
        console.log('✅ Notification sent:', res);
    } catch (e) {
        console.error('❌ Error:', e);
    }
}

async function main() {
    // إشعار التحديث
    if (notifications.update && notifications.update.enabled) {
        await sendToTopic(
            notifications.update.title,
            notifications.update.body,
            notifications.update.image
        );
        console.log('✅ Update notification sent');
        return;
    }

    // إشعارات التذكير حسب الوقت
    for (const reminder of notifications.reminders) {
        if (!reminder.enabled) continue;
        if (reminder.hour === hour && (reminder.minute || 0) === minute) {
            await sendToTopic(reminder.title, reminder.body, reminder.image);
            console.log(`✅ Reminder sent: ${reminder.title}`);
        }
    }
}

main();
