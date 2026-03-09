importScripts('https://www.gstatic.com/firebasejs/10.7.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.0/firebase-messaging-compat.js');

// ===== FIREBASE INIT =====
firebase.initializeApp({
    apiKey: "AIzaSyBUqx2f4jmg-XSshWA_AcDSMPcttPPBs_E",
    authDomain: "cinelingua-d4c2b.firebaseapp.com",
    projectId: "cinelingua-d4c2b",
    storageBucket: "cinelingua-d4c2b.firebasestorage.app",
    messagingSenderId: "569970499890",
    appId: "1:569970499890:web:9cf03df25e37745d44f72b"
});

const messaging = firebase.messaging();
const CACHE_NAME = 'cinelingua-v2'; // حدثنا الإصدار عشان يخزن الصفحات الجديدة

// ===== FIREBASE BACKGROUND MESSAGING =====
messaging.onBackgroundMessage(payload => {
    const { title, body, image } = payload.notification;
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
            { action: 'open',  title: '📚 تعلم الآن' },
            { action: 'close', title: 'لاحقاً' }
        ]
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

// ===== INSTALL EVENT - CACHE ALL PAGES =====
self.addEventListener('install', (event) => {
    console.log('✅ Service Worker installing...');
    self.skipWaiting();
    
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll([
                '/',
                '/index.html',
                '/lessons.html',
                '/stories.html',
                '/tenses.html',
                '/quiz.html',
                '/download.html',
                '/offline.html',
                '/manifest.json',
                'https://i.postimg.cc/J4xdc62M/20260305-233826.png',
                'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap',
                'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css'
            ]).catch(error => {
                console.log('⚠️ Some files failed to cache:', error);
            });
        })
    );
});

// ===== ACTIVATE EVENT - CLEAN OLD CACHES =====
self.addEventListener('activate', (event) => {
    event.waitUntil(
        (async () => {
            await self.clients.claim();
            
            const cacheKeys = await caches.keys();
            const oldCaches = cacheKeys.filter(key => key !== CACHE_NAME);
            await Promise.all(oldCaches.map(key => caches.delete(key)));
            
            if ('periodicSync' in self.registration) {
                try {
                    await self.registration.periodicSync.register('cinelingua-sync', {
                        minInterval: 60 * 60 * 1000
                    });
                    console.log('✅ Periodic sync registered');
                } catch (error) {
                    console.log('❌ Periodic sync not supported:', error);
                }
            }
        })()
    );
});

// ===== FETCH EVENT - SERVE FROM CACHE =====
self.addEventListener('fetch', (event) => {
    if (event.request.method !== 'GET') return;
    
    event.respondWith(
        caches.match(event.request)
            .then((cachedResponse) => {
                if (cachedResponse) {
                    return cachedResponse;
                }
                
                return fetch(event.request).then((networkResponse) => {
                    if (networkResponse && networkResponse.status === 200) {
                        const responseToCache = networkResponse.clone();
                        caches.open(CACHE_NAME).then((cache) => {
                            cache.put(event.request, responseToCache);
                        });
                    }
                    return networkResponse;
                });
            })
            .catch(() => {
                if (event.request.mode === 'navigate') {
                    return caches.match('/offline.html');
                }
            })
    );
});

// ===== PERIODIC SYNC EVENT =====
self.addEventListener('periodicsync', (event) => {
    if (event.tag === 'cinelingua-sync') {
        event.waitUntil(
            (async () => {
                console.log('🔄 Background sync running...');
                
                try {
                    const clients = await self.clients.matchAll();
                    clients.forEach(client => {
                        client.postMessage({
                            type: 'BACKGROUND_SYNC',
                            timestamp: Date.now()
                        });
                    });
                    
                    await updateContent();
                } catch (error) {
                    console.log('Background sync error:', error);
                }
            })()
        );
    }
});

// ===== UPDATE CONTENT =====
async function updateContent() {
    try {
        const response = await fetch('/notifications.json');
        const data = await response.json();
        
        if (data.update?.enabled) {
            self.registration.showNotification(data.update.title || '📚 تحديث جديد!', {
                body: data.update.body || 'تمت إضافة محتوى جديد',
                icon: 'https://i.postimg.cc/J4xdc62M/20260305-233826.png',
                badge: 'https://i.postimg.cc/J4xdc62M/20260305-233826.png',
                tag: 'content-update'
            });
        }
    } catch (error) {
        console.log('Update failed:', error);
    }
                                               }
