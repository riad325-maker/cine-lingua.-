importScripts('https://www.gstatic.com/firebasejs/10.7.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.0/firebase-messaging-compat.js');

firebase.initializeApp({
    apiKey: "AIzaSyCvi0VCJv3j6p8ICT1f97TePwDXAazmQMw",
    authDomain: "cinelingua-fe7f1.firebaseapp.com",
    projectId: "cinelingua-fe7f1",
    storageBucket: "cinelingua-fe7f1.firebasestorage.app",
    messagingSenderId: "157697610841",
    appId: "1:157697610841:web:529db81f264e1a84ab0d48"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(payload => {
    const { title, body, image } = payload.notification || {};
    if (!title) return;
    self.registration.showNotification(title, {
        body,
        icon: 'https://i.postimg.cc/J4xdc62M/20260305-233826.png',
        badge: 'https://i.postimg.cc/J4xdc62M/20260305-233826.png',
        image: image || 'https://i.postimg.cc/J4xdc62M/20260305-233826.png',
        dir: 'rtl', lang: 'ar',
        vibrate: [200, 100, 200, 100, 200],
        tag: 'cinelingua-notif',
        renotify: true,
        actions: [
            { action: 'open', title: '📚 تعلم الآن' },
            { action: 'close', title: 'لاحقاً' }
        ]
    });
});
