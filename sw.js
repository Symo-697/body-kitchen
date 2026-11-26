// Offline support. Pages load from the network first (so updates show up right away)
// and fall back to the cached copy when there's no connection.
const CACHE = "body-kitchen-v86i";
const SHELL = ["./", "index.html", "manifest.webmanifest", "icon-180.png", "icon-192.png", "icon-512.png"];
self.addEventListener("install", e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL))); self.skipWaiting(); });
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))));
  self.clients.claim();
});
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  const isPage = e.request.mode === "navigate" || e.request.url.endsWith("/index.html") || e.request.url.endsWith("/");
  if (isPage) {
    // Network first, but never wait more than 4 s on a weak connection: show the saved copy instead
    // (the fresh one still lands in the cache for next time).
    const net = fetch(e.request, { cache: "no-store" })
      .then(res => { if (res.ok) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(e.request, copy)); } return res; });
    const cached = () => caches.match(e.request).then(r => r || caches.match("index.html"));
    const timeout = new Promise(r => setTimeout(r, 4000)).then(cached);
    e.respondWith(Promise.race([net.catch(cached), timeout.then(r => r || net)]).then(r => r || net));
    e.waitUntil(net.catch(() => {}));
    return;
  }
  e.respondWith(caches.match(e.request).then(cached => cached || fetch(e.request).then(res => {
    if (res.ok) caches.open(CACHE).then(c => c.put(e.request, res.clone()));
    return res;
  })));
});
