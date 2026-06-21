/* Šikuta 4n6 — service worker v1.12
   HTML: network-first (online = vždy najnovšie, offline = z cache).
   Ostatné: cache-first. */
var C='sikuta4n6-v112b';
var ASSETS=['./','./index.html','./manifest.json',
  './icons/apple-touch-icon.png','./icons/android-chrome-192x192.png',
  './icons/android-chrome-512x512.png','./icons/favicon-32x32.png','./icons/favicon-16x16.png'];

self.addEventListener('install',function(e){
  self.skipWaiting();
  e.waitUntil(caches.open(C).then(function(c){
    return Promise.all(ASSETS.map(function(u){ return c.add(u).catch(function(){}); }));
  }));
});
self.addEventListener('activate',function(e){
  e.waitUntil(Promise.all([
    self.clients.claim(),
    caches.keys().then(function(ks){ return Promise.all(ks.map(function(k){ if(k!==C) return caches.delete(k); })); })
  ]));
});
self.addEventListener('fetch',function(e){
  var req=e.request; if(req.method!=='GET') return;
  if(req.mode==='navigate'){
    e.respondWith(
      fetch(req).then(function(resp){
        caches.open(C).then(function(c){ try{ c.put('./index.html',resp.clone()); }catch(_){ } });
        return resp;
      }).catch(function(){ return caches.match('./index.html').then(function(r){ return r||caches.match('./'); }); })
    );
    return;
  }
  e.respondWith(
    caches.match(req).then(function(r){
      return r || fetch(req).then(function(resp){
        caches.open(C).then(function(c){ try{ c.put(req,resp.clone()); }catch(_){ } });
        return resp;
      }).catch(function(){ return r; });
    })
  );
});
