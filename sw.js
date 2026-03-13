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

const CACHE_VERSION = '1.3.2';
const CACHE_NAME    = `cinelingua-${CACHE_VERSION}`;
const DYNAMIC_CACHE = `cinelingua-dynamic-${CACHE_VERSION}`;
const BASE = '/cine-lingua.-';

const STATIC_ASSETS = [
    BASE + '/',
    BASE + '/index.html',
    BASE + '/lessons.html',
    BASE + '/stories.html',
    BASE + '/tenses.html',
    BASE + '/quiz.html',
    BASE + '/download.html',
    BASE + '/offline.html',
    BASE + '/manifest.json',
    BASE + '/notifications.json',
    BASE + '/beginner-data.js',
    BASE + '/intermediate-data.js',
    BASE + '/advanced-data.js',
    BASE + '/stories-data.js',
    BASE + '/tenses-data.js',
    BASE + '/words-data.js',
    BASE + '/verbs-data.js',
    BASE + '/grammar-data.js',
    'https://i.postimg.cc/J4xdc62M/20260305-233826.png',
    'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css'
];

// ===== FCM BACKGROUND =====
// FCM يعرض الإشعار — نمنع التكرار بـ tag
messaging.onBackgroundMessage(payload => {
    console.log('[SW] Background message:', payload);
    const { title, body, image } = payload.notification || {};
    if (!title) return;

    const tag = `cinelingua-${payload.data?.hour || 'msg'}`;

    self.registration.getNotifications({ tag }).then(existing => {
        if (existing.length > 0) {
            console.log('[SW] Blocked duplicate:', tag);
            return;
        }
        self.registration.showNotification(title, {
            body,
            icon:  'https://i.postimg.cc/J4xdc62M/20260305-233826.png',
            badge: 'https://i.postimg.cc/J4xdc62M/20260305-233826.png',
            image: image || 'https://i.postimg.cc/J4xdc62M/20260305-233826.png',
            dir: 'rtl', lang: 'ar',
            vibrate: [200, 100, 200, 100, 200],
            tag,
            renotify: false,
            actions: [
                { action: 'open',  title: '📚 تعلم الآن' },
                { action: 'close', title: 'لاحقاً' }
            ]
        });
    });
});

// ===== NOTIFICATION CLICK =====
self.addEventListener('notificationclick', event => {
    event.notification.close();
    if (event.action === 'close') return;
    const url = 'https://riad325r-maker.github.io/cine-lingua.-/';
    event.waitUntil(
        clients.matchAll({ type: 'window', includeUncontrolled: true }).then(list => {
            for (const c of list) {
                if (c.url.includes('riad325r-maker') && 'focus' in c) return c.focus();
            }
            return clients.openWindow(url);
        })
    );
});

// ===== INSTALL =====
self.addEventListener('install', event => {
    self.skipWaiting();
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache =>
            Promise.allSettled(
                STATIC_ASSETS.map(url =>
                    cache.add(url).catch(err => console.warn('Failed:', url, err))
                )
            )
        )
    );
});

// ===== ACTIVATE =====
self.addEventListener('activate', event => {
    event.waitUntil((async () => {
        await self.clients.claim();
        const keys = await caches.keys();
        const old = keys.filter(k => k.startsWith('cinelingua-') && k !== CACHE_NAME && k !== DYNAMIC_CACHE);
        if (old.length) await Promise.all(old.map(k => caches.delete(k)));
        const allClients = await self.clients.matchAll({ includeUncontrolled: true });
        allClients.forEach(c => c.postMessage({ type: 'NEW_VERSION', version: CACHE_VERSION }));
    })());
});

// ===== FETCH =====
self.addEventListener('fetch', event => {
    if (event.request.method !== 'GET') return;
    const url = event.request.url;

    if (event.request.mode === 'navigate' || url.endsWith('.html')) {
        event.respondWith(
            fetch(event.request)
                .then(res => {
                    if (res && res.status === 200)
                        caches.open(CACHE_NAME).then(c => c.put(event.request, res.clone()));
                    return res;
                })
                .catch(async () => {
                    const cached = await caches.match(event.request);
                    return cached || caches.match(BASE + '/offline.html');
                })
        );
        return;
    }

    event.respondWith(
        caches.match(event.request).then(cached => {
            if (cached) { refreshInBackground(event.request); return cached; }
            return fetch(event.request).then(res => {
                if (res && res.status === 200)
                    caches.open(DYNAMIC_CACHE).then(c => c.put(event.request, res.clone()));
                return res;
            }).catch(() => {
                if (url.endsWith('.html')) return caches.match(BASE + '/offline.html');
                return new Response('Offline', { status: 503 });
            });
        })
    );
});

function refreshInBackground(request) {
    fetch(request).then(res => {
        if (res && res.status === 200)
            caches.open(DYNAMIC_CACHE).then(c => c.put(request, res));
    }).catch(() => {});
}

// ===== MESSAGE =====
self.addEventListener('message', event => {
    if (event.data?.type === 'SKIP_WAITING') self.skipWaiting();
    if (event.data?.type === 'CHECK_VERSION') event.ports[0]?.postMessage({ version: CACHE_VERSION });
});
