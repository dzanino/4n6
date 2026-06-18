/* Šikuta 4n6 — service worker pre offline (cache-first) */
var C = 'sikuta4n6-v13'; // Zmenil som verziu na v13, aby sa aktualizoval cache

self.addEventListener('install', function(e) {
  self.skipWaiting();
  e.waitUntil(
    caches.open(C).then(function(c) {
      return c.addAll([
        './',
        './index.html',
        './manifest.json',
        './styles.css',
        './script.js',
        // Ikony z favicon.io
        './icons/android-chrome-192x192.png',
        './icons/android-chrome-512x512.png',
        './icons/apple-touch-icon.png',
        './icons/favicon-16x16.png',
        './icons/favicon-32x32.png',
        './icons/favicon-48x48.png',
        './icons/favicon-64x64.png'
      ]).catch(function() {});
    })
  );
});

self.addEventListener('activate', function(e) {
  e.waitUntil(
    Promise.all([
      self.clients.claim(),
      caches.keys().then(function(ks) {
        return Promise.all(
          ks.map(function(k) {
            if (k !== C) return caches.delete(k);
          })
        );
      })
    ])
  );
});

self.addEventListener('fetch', function(e) {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    caches.match(e.request).then(function(r) {
      return r || fetch(e.request).then(function(resp) {
        return caches.open(C).then(function(c) {
          try { c.put(e.request, resp.clone()); } catch (_) {}
          return resp;
        });
      }).catch(function() {
        return caches.match('./index.html');
      });
    })
  );
});
