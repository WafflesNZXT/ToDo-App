self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("todo-cache").then(cache => {
      return cache.addAll([
        "/",
        "/index.html",
        "/index.css",
        "/index.js",
        "/manifest.json",
        "/assets/icon-100.png",
        "/assets/icon-150.png",
        "/assets/icon-250.png",
        "/assets/icon-500.png"
      ]);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
