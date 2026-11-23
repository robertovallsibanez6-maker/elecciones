// Cambia VERSION al actualizar datos para que los móviles descarguen la nueva versión.
const VERSION = "29n-v3";
const SHELL = ["./", "index.html", "style.css", "app.js", "data.js", "discapacidad.js", "manifest.webmanifest", "icon-192.png", "icon-512.png", "apple-touch-icon.png", "fonts/anybody.woff2", "fonts/public-sans.woff2"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== VERSION).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
// Red primero (para que las apps ya instaladas reciban las actualizaciones), caché si no hay conexión.
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  const url = new URL(e.request.url);
  if (url.origin !== self.location.origin) return;
  e.respondWith(
    fetch(url.href, { cache: "no-cache" }).then(res => {
      if (res.ok) { const copy = res.clone(); caches.open(VERSION).then(c => c.put(e.request, copy)).catch(() => {}); }
      return res;
    }).catch(() => caches.match(e.request, { ignoreSearch: true }).then(r => r || caches.match("index.html")))
  );
});
