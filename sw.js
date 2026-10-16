// Network-first: always show the latest notes when online, fall back to the
// cached copy when offline. Every file the app loads gets cached on the way.
const CACHE = 'study-notes-v1';

self.addEventListener('install', () => self.skipWaiting());

self.addEventListener('activate', event => {
    event.waitUntil((async () => {
        const keys = await caches.keys();
        await Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)));
        await self.clients.claim();
    })());
});

self.addEventListener('fetch', event => {
    const { request } = event;
    if (request.method !== 'GET' || new URL(request.url).origin !== self.location.origin) return;
    event.respondWith((async () => {
        try {
            const response = await fetch(request);
            if (response.ok) {
                const cache = await caches.open(CACHE);
                cache.put(request, response.clone());
            }
            return response;
        } catch (err) {
            const cached = await caches.match(request, { ignoreSearch: true });
            if (cached) return cached;
            throw err;
        }
    })());
});
