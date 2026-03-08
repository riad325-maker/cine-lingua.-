const admin = require('firebase-admin');

// فك تشفير service account
const serviceAccount = JSON.parse(
  Buffer.from(process.env.FIREBASE_SERVICE_ACCOUNT, 'base64').toString()
);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

async function sendNotification() {
  const message = {
    notification: {
      title: '🎬 CineLingua',
      body: 'وقت جلسة تعلمك اليومية! 📚'
    },
    topic: 'all-users',
    webpush: {
      notification: {
        icon: 'https://i.postimg.cc/J4xdc62M/20260305-233826.png',
        badge: 'https://i.postimg.cc/J4xdc62M/20260305-233826.png',
        vibrate: [200, 100, 200],
        actions: [
          { action: 'open', title: '📚 تعلم الآن' },
          { action: 'close', title: 'لاحقاً' }
        ]
      }
    }
  };

  try {
    const response = await admin.messaging().send(message);
    console.log('✅ تم الإرسال:', response);
  } catch (error) {
    console.error('❌ خطأ:', error);
    process.exit(1);
  }
}

sendNotification();
