importScripts('https://www.gstatic.com/firebasejs/10.7.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyDSSNRMVpKv4B92DwZ87vqFEyvQx7vWNaA",
  authDomain: "cinelingua-32f98.firebaseapp.com",
  projectId: "cinelingua-32f98",
  storageBucket: "cinelingua-32f98.firebasestorage.app",
  messagingSenderId: "346573960366",
  appId: "1:346573960366:web:a1e4af94d40998df10a93f"
});

const messaging = firebase.messaging();

const CACHE_NAME = 'cine-lingua-v3';
const urlsToCache = [
  'https://riad325r-maker.github.io/cine-lingua.-/',
  '/index.html', '/lessons.html', '/stories.html', '/tenses.html', '/quiz.html'
];

self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache =>
      Promise.allSettled(urlsToCache.map(url => cache.add(url).catch(() => {})))
    )
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request)
      .then(response => {
        const clone = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        return response;
      })
      .catch(() => caches.match(event.request))
  );
});

// إشعارات Firebase في الخلفية
messaging.onBackgroundMessage(payload => {
  const { title, body, icon } = payload.notification || {};
  self.registration.showNotification(title || 'CineLingua 🎓', {
    body: body || 'لديك رسالة جديدة!',
    icon: icon || 'https://i.postimg.cc/J4xdc62M/20260305-233826.png',
    badge: 'https://i.postimg.cc/J4xdc62M/20260305-233826.png',
    dir: 'rtl', lang: 'ar',
    vibrate: [200, 100, 200],
    tag: 'firebase-notif',
    renotify: true,
    data: { url: 'https://riad325r-maker.github.io/cine-lingua.-/' }
  });
});

self.addEventListener('notificationclick', event => {
  event.notification.close();
  const url = event.notification.data?.url || 'https://riad325r-maker.github.io/cine-lingua.-/';
  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then(list => {
      for (const c of list) {
        if (c.url.includes('riad325r-maker') && 'focus' in c) return c.focus();
      }
      return clients.openWindow(url);
    })
  );
});
