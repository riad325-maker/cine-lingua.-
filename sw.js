/**
 * CineLingua Service Worker v2.0
 * Improved caching and offline performance
 */

const CACHE_VERSION = '2.1.0';
const STATIC_CACHE = `cinelingua-static-${CACHE_VERSION}`;
const DYNAMIC_CACHE = `cinelingua-dynamic-${CACHE_VERSION}`;
const BASE = '/cine-lingua.-'; // Match your GitHub Pages subpath if applicable

const ASSETS_TO_CACHE = [
    '/',
    '/index.html',
    '/lessons.html',
    '/stories.html',
    '/tenses.html',
    '/quiz.html',
    '/verbs.html',
    '/grammar.html',
    '/download.html',
    '/offline.html',
    '/style.css',
    '/core.js',
    '/translation.js',
    '/manifest.json',
    '/beginner-data.js',
    '/intermediate-data.js',
    '/advanced-data.js',
    '/stories-data.js',
    '/tenses-data.js',
    '/verbs-data.js',
    '/grammar-data.js',
    '/quiz-data.js',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css',
    'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap',
    'https://unpkg.com/aos@2.3.1/dist/aos.css',
    'https://unpkg.com/aos@2.3.1/dist/aos.js',
    'https://i.postimg.cc/J4xdc62M/20260305-233826.png'
].map(url => url.startsWith('http') ? url : (BASE + url).replace(/\/+/g, '/'));

// ===== INSTALL EVENT =====
self.addEventListener('install', event => {
    self.skipWaiting();
    event.waitUntil(
        caches.open(STATIC_CACHE).then(cache => {
            console.log('[SW] Pre-caching static assets');
            return cache.addAll(ASSETS_TO_CACHE);
        })
    );
});

// ===== ACTIVATE EVENT =====
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(keys => {
            return Promise.all(
                keys.filter(key => key !== STATIC_CACHE && key !== DYNAMIC_CACHE)
                    .map(key => caches.delete(key))
            );
        }).then(() => self.clients.claim())
    );
});

// ===== FETCH EVENT (Stale-While-Revalidate Strategy) =====
self.addEventListener('fetch', event => {
    if (event.request.method !== 'GET') return;

    const url = new URL(event.request.url);

    // Skip non-HTTP(S) schemes (like chrome-extension)
    if (!['http:', 'https:'].includes(url.protocol)) return;

    event.respondWith(
        caches.match(event.request).then(cachedResponse => {
            const fetchPromise = fetch(event.request).then(networkResponse => {
                if (networkResponse && networkResponse.status === 200) {
                    const responseToCache = networkResponse.clone();
                    caches.open(DYNAMIC_CACHE).then(cache => {
                        cache.put(event.request, responseToCache);
                    });
                }
                return networkResponse;
            }).catch(() => {
                // If network fails and no cache, show offline page for navigation requests
                if (event.request.mode === 'navigate') {
                    return caches.match(BASE + '/offline.html');
                }
            });

            return cachedResponse || fetchPromise;
        })
    );
});

// ===== PUSH NOTIFICATIONS =====
self.addEventListener('push', event => {
    let data = { title: 'CineLingua', body: 'حان وقت درسك اليومي! 📚' };
    try {
        if (event.data) data = event.data.json();
    } catch (e) {}

    const options = {
        body: data.body,
        icon: 'https://i.postimg.cc/J4xdc62M/20260305-233826.png',
        badge: 'https://i.postimg.cc/J4xdc62M/20260305-233826.png',
        vibrate: [100, 50, 100],
        data: { url: BASE + '/index.html' }
    };

    event.waitUntil(
        self.registration.showNotification(data.title, options)
    );
});

self.addEventListener('notificationclick', event => {
    event.notification.close();
    event.waitUntil(
        clients.matchAll({ type: 'window' }).then(windowClients => {
            for (let client of windowClients) {
                if (client.url === event.notification.data.url && 'focus' in client) {
                    return client.focus();
                }
            }
            if (clients.openWindow) {
                return clients.openWindow(event.notification.data.url);
            }
        })
    );
});
