const CACHE_NAME = '4n6-cache-v1';

// Zoznam súborov, ktoré sa majú cacheovať
const urlsToCache = [
  '/',                          // Domovská stránka
  '/index.html',                // Hlavný HTML súbor
  '/manifest.json',             // Manifest pre PWA
  '/styles.css',                // CSS súbor (ak existuje)
  '/script.js',                 // JavaScript súbor (ak existuje)
  // Ikony z favicon.io
  '/icons/android-chrome-192x192.png',
  '/icons/android-chrome-512x512.png',
  '/icons/apple-touch-icon.png',
  '/icons/favicon-16x16.png',
  '/icons/favicon-32x32.png',
  '/icons/favicon-48x48.png',
  '/icons/favicon-64x64.png'
];

// Inštalácia Service Worker (ukladá súbory do cache)
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

// Načítanie súborov z cache (ak sú dostupné)
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request); // Ak nie je v cache, stiahni z internetu
      })
  );
});

// Aktualizácia Service Worker (vymaže staré cache)
self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME]; // Zoznam povolených cache
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName); // Vymaže staré cache
          }
        })
      );
    })
  );
});
