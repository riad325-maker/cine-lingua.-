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

// ✅ نظام الإصدار الذكي - غير الرقم ده كل ما ترفع تحديث جديد للموقع
const CACHE_VERSION = '2.0.0';  // ⚠️ مهم: غير الرقم ده لأي رقم تاني لو حبيت تجبر تحديث شامل
const CACHE_NAME = `cinelingua-${CACHE_VERSION}`;
const DYNAMIC_CACHE = `cinelingua-dynamic-${CACHE_VERSION}`;

// قائمة الملفات الأساسية - إزاي تشتغل بدون نت
const STATIC_ASSETS = [
    '/',
    '/index.html',
    '/lessons.html',
    '/stories.html',
    '/tenses.html',
    '/quiz.html',
    '/download.html',
    '/offline.html',
    '/manifest.json',
    '/style.css',
    '/translation.js',
    '/settings.js',
    '/theme.js',
    '/notifications.json',
    'https://i.postimg.cc/J4xdc62M/20260305-233826.png',
    'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css'
];

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

// ===== INSTALL EVENT - CACHE STATIC ASSETS =====
self.addEventListener('install', (event) => {
    console.log(`✅ Service Worker ${CACHE_NAME} installing...`);
    
    // Force the waiting service worker to become the active service worker
    self.skipWaiting();
    
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log('📦 Caching static assets...');
            return cache.addAll(STATIC_ASSETS).catch(error => {
                console.log('⚠️ Some files failed to cache:', error);
                // Don't fail the install if one asset fails
            });
        })
    );
});

// ===== ACTIVATE EVENT - CLEAN OLD CACHES =====
self.addEventListener('activate', (event) => {
    event.waitUntil(
        (async () => {
            // Take control of all clients immediately
            await self.clients.claim();
            
            // Clean up old caches (keep only current version)
            const cacheKeys = await caches.keys();
            const oldCaches = cacheKeys.filter(key => 
                key.startsWith('cinelingua-') && key !== CACHE_NAME && key !== DYNAMIC_CACHE
            );
            
            if (oldCaches.length > 0) {
                console.log('🧹 Removing old caches:', oldCaches);
                await Promise.all(oldCaches.map(key => caches.delete(key)));
            }
            
            console.log(`✅ Service Worker ${CACHE_NAME} activated!`);
            
            // Tell all clients to reload if there's a new version
            const clients = await self.clients.matchAll();
            clients.forEach(client => {
                client.postMessage({
                    type: 'NEW_VERSION_AVAILABLE',
                    version: CACHE_VERSION
                });
            });
            
            // Register periodic sync if supported
            if ('periodicSync' in self.registration) {
                try {
                    await self.registration.periodicSync.register('cinelingua-sync', {
                        minInterval: 60 * 60 * 1000 // 1 hour
                    });
                    console.log('✅ Periodic sync registered');
                } catch (error) {
                    console.log('❌ Periodic sync not supported:', error);
                }
            }
        })()
    );
});

// ===== FETCH EVENT - SMART CACHING STRATEGY =====
self.addEventListener('fetch', (event) => {
    // Only handle GET requests
    if (event.request.method !== 'GET') return;
    
    // For HTML pages - use Network First, then Cache (ensures updates are seen)
    if (event.request.mode === 'navigate' || 
        (event.request.url.includes('.html') && !event.request.url.includes('offline'))) {
        
        event.respondWith(
            fetch(event.request)
                .then((networkResponse) => {
                    // If network successful, update cache and return
                    if (networkResponse && networkResponse.status === 200) {
                        const responseToCache = networkResponse.clone();
                        caches.open(DYNAMIC_CACHE).then((cache) => {
                            cache.put(event.request, responseToCache);
                        });
                    }
                    return networkResponse;
                })
                .catch(() => {
                    // If network fails, serve from cache
                    return caches.match(event.request).then(cachedResponse => {
                        if (cachedResponse) {
                            return cachedResponse;
                        }
                        // If not in cache, serve offline page
                        return caches.match('/offline.html');
                    });
                })
        );
        return;
    }
    
    // For static assets (CSS, JS, Images, Fonts) - use Cache First, then Network
    event.respondWith(
        caches.match(event.request)
            .then((cachedResponse) => {
                if (cachedResponse) {
                    // Return cached version and update in background
                    // This ensures fast loading while keeping cache fresh
                    updateCacheInBackground(event.request);
                    return cachedResponse;
                }
                
                // Not in cache, fetch from network
                return fetch(event.request).then((networkResponse) => {
                    if (networkResponse && networkResponse.status === 200) {
                        const responseToCache = networkResponse.clone();
                        caches.open(DYNAMIC_CACHE).then((cache) => {
                            cache.put(event.request, responseToCache);
                        });
                    }
                    return networkResponse;
                });
            })
            .catch(() => {
                // If both cache and network fail
                if (event.request.url.includes('.html')) {
                    return caches.match('/offline.html');
                }
                return new Response('Offline', { status: 503, statusText: 'Service Unavailable' });
            })
    );
});

// Helper function to update cache in background
function updateCacheInBackground(request) {
    caches.open(DYNAMIC_CACHE).then((cache) => {
        fetch(request).then((networkResponse) => {
            if (networkResponse && networkResponse.status === 200) {
                cache.put(request, networkResponse);
            }
        }).catch(() => {});
    });
}

// ===== PERIODIC SYNC EVENT =====
self.addEventListener('periodicsync', (event) => {
    if (event.tag === 'cinelingua-sync') {
        event.waitUntil(
            (async () => {
                console.log('🔄 Background sync running...');
                
                try {
                    // Notify all clients
                    const clients = await self.clients.matchAll();
                    clients.forEach(client => {
                        client.postMessage({
                            type: 'BACKGROUND_SYNC',
                            timestamp: Date.now()
                        });
                    });
                    
                    // Check for content updates
                    await checkForUpdates();
                    
                    // Update dynamic cache in background
                    await updateDynamicCache();
                    
                } catch (error) {
                    console.log('Background sync error:', error);
                }
            })()
        );
    }
});

// ===== CHECK FOR CONTENT UPDATES =====
async function checkForUpdates() {
    try {
        // Try to fetch the main page to check for updates
        const response = await fetch('/?nocache=' + Date.now(), { cache: 'no-store' });
        
        if (response && response.status === 200) {
            // Check if we have a version header or something
            // For now, just update the cache
            const cache = await caches.open(DYNAMIC_CACHE);
            await cache.put('/', response.clone());
            
            // Check for notifications.json
            const notifResponse = await fetch('/notifications.json?nocache=' + Date.now(), { cache: 'no-store' });
            if (notifResponse && notifResponse.status === 200) {
                const data = await notifResponse.clone().json();
                
                if (data.update?.enabled) {
                    self.registration.showNotification(data.update.title || '📚 تحديث جديد!', {
                        body: data.update.body || 'تمت إضافة محتوى جديد',
                        icon: 'https://i.postimg.cc/J4xdc62M/20260305-233826.png',
                        badge: 'https://i.postimg.cc/J4xdc62M/20260305-233826.png',
                        tag: 'content-update',
                        actions: [
                            { action: 'refresh', title: '🔄 تحديث الآن' },
                            { action: 'later', title: '⏰ لاحقاً' }
                        ]
                    });
                }
                
                await cache.put('/notifications.json', notifResponse);
            }
        }
    } catch (error) {
        console.log('Update check failed:', error);
    }
}

// ===== UPDATE DYNAMIC CACHE =====
async function updateDynamicCache() {
    try {
        const cache = await caches.open(DYNAMIC_CACHE);
        const requests = await cache.keys();
        
        // Update each cached item in background
        requests.forEach(async (request) => {
            if (request.url.includes('riad325r-maker')) {
                try {
                    const response = await fetch(request.url, { cache: 'no-store' });
                    if (response && response.status === 200) {
                        await cache.put(request, response);
                    }
                } catch (error) {
                    // Ignore network errors during background update
                }
            }
        });
    } catch (error) {
        console.log('Dynamic cache update failed:', error);
    }
}

// ===== MESSAGE EVENT - HANDLE CLIENT MESSAGES =====
self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
        self.skipWaiting();
    }
    
    if (event.data && event.data.type === 'CHECK_VERSION') {
        event.ports[0].postMessage({
            version: CACHE_VERSION
        });
    }
});
