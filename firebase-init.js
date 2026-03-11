// ===== CineLingua — Firebase Init (يضاف لكل الصفحات) =====

const firebaseConfig = {
    apiKey: "AIzaSyBUqx2f4jmg-XSshWA_AcDSMPcttPPBs_E",
    authDomain: "cinelingua-d4c2b.firebaseapp.com",
    projectId: "cinelingua-d4c2b",
    storageBucket: "cinelingua-d4c2b.firebasestorage.app",
    messagingSenderId: "569970499890",
    appId: "1:569970499890:web:9cf03df25e37745d44f72b"
};

const VAPID_KEY = "BCf33TmM6clsgVH480Qxh0K0NY1PrTAAFIQwO1MOS4g2vMXuqrAicgl2cu2UFYLEYTgrQlgSS95vwydvrISXfXA";

// تهيئة Firebase مرة واحدة فقط
if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);

let messaging = null;

try {
    messaging = firebase.messaging();

    // استقبال الإشعارات لما التطبيق مفتوح
    messaging.onMessage(payload => {
        const { title, body } = payload.notification || {};
        if (!title) return;
        navigator.serviceWorker.ready.then(reg => {
            reg.showNotification(title, {
                body,
                icon: 'https://i.postimg.cc/J4xdc62M/20260305-233826.png',
                badge: 'https://i.postimg.cc/J4xdc62M/20260305-233826.png',
                dir: 'rtl', lang: 'ar',
                vibrate: [200, 100, 200],
                tag: 'cinelingua-notif'
            });
        });
    });
} catch (e) {
    console.log('Firebase messaging not supported:', e.message);
}

// ===== حفظ التوكن في Firestore =====
async function getAndSaveFCMToken() {
    try {
        if (!messaging) return;
        if (Notification.permission !== 'granted') return;

        const token = await messaging.getToken({ vapidKey: VAPID_KEY });
        if (!token) return;

        const db = firebase.firestore();
        await db.collection('fcmTokens').doc(token).set({
            token,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            lastSeen:  firebase.firestore.FieldValue.serverTimestamp(),
            page: window.location.pathname  // نعرف من أي صفحة سجّل
        }, { merge: true });  // merge: لا يحذف بيانات قديمة

        console.log('✅ FCM Token saved to Firestore');
    } catch (e) {
        console.log('⚠️ Could not save token:', e.message);
    }
}

// ===== تشغيل عند تحميل الصفحة =====
window.addEventListener('load', () => {
    // لو عنده إذن مسبق — نحدث التوكن مباشرة
    if (Notification.permission === 'granted') {
        setTimeout(getAndSaveFCMToken, 3000);
    }
});

// ===== دالة عامة تستدعى بعد الموافقة على الإشعارات =====
window.saveFCMTokenAfterPermission = function() {
    if (Notification.permission === 'granted') {
        getAndSaveFCMToken();
    }
};
