const CACHE_NAME = 'cine-lingua-v2';
const urlsToCache = [
  'https://riad325r-maker.github.io/cine-lingua.-/',
  '/index.html',
  '/lessons.html',
  '/stories.html',
  '/tenses.html',
  '/quiz.html',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css',
  'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap',
  'https://unpkg.com/aos@2.3.1/dist/aos.css',
  'https://unpkg.com/aos@2.3.1/dist/aos.js'
];

self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return Promise.allSettled(
        urlsToCache.map(url => cache.add(url).catch(() => {}))
      );
    })
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

// ===== Push Notifications =====
self.addEventListener('push', event => {
  let data = {
    title: 'CineLingua 🎓',
    body: 'لديك تذكير جديد!',
    icon: 'https://i.postimg.cc/J4xdc62M/20260305-233826.png'
  };
  try { if (event.data) data = { ...data, ...event.data.json() }; } catch (e) {}

  event.waitUntil(
    self.registration.showNotification(data.title, {
      body: data.body,
      icon: data.icon,
      badge: 'https://i.postimg.cc/J4xdc62M/20260305-233826.png',
      dir: 'rtl', lang: 'ar',
      vibrate: [200, 100, 200],
      tag: 'cinelingua-notif',
      renotify: true,
      data: { url: 'https://riad325r-maker.github.io/cine-lingua.-/' }
    })
  );
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
