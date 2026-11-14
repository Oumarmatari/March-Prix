const CACHE_NAME = "marche-prix-v1";
const APP_SHELL = [
  "./",
  "./index.html",
  "./style.css",
  "./data.js",
  "./script.js",
  "./manifest.json",
  "./icon-192.png",
  "./icon-512.png",
  "./product-placeholder.svg",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(APP_SHELL))
      .then(() => self.skipWaiting()),
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => Promise.all(
        cacheNames
          .filter((cacheName) => cacheName.startsWith("marche-prix-") && cacheName !== CACHE_NAME)
          .map((cacheName) => caches.delete(cacheName)),
      ))
      .then(() => self.clients.claim()),
  );
});

self.addEventListener("fetch", (event) => {
  const request = event.request;
  if (request.method !== "GET") return;

  const requestUrl = new URL(request.url);

  if (request.destination === "image" && requestUrl.origin !== self.location.origin) {
    event.respondWith(
      caches.open(CACHE_NAME).then(async (cache) => {
        const cachedResponse = await cache.match(request);
        if (cachedResponse) return cachedResponse;

        let response;
        try {
          response = await fetch(request);
        } catch (error) {
          const fallbackUrl = new URL("./product-placeholder.svg", self.registration.scope);
          const fallback = await cache.match(fallbackUrl.href);
          if (fallback) return fallback;
          throw error;
        }

        if (response.ok || response.type === "opaque") {
          try {
            await cache.put(request, response.clone());
          } catch (error) {
            console.warn("Impossible de mettre l’image en cache hors connexion :", error);
          }
        }
        return response;
      }),
    );
    return;
  }

  if (requestUrl.origin !== self.location.origin) return;

  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request).catch(async () => (
        await caches.match(request)
        || await caches.match(new URL("./index.html", self.registration.scope).href)
      )),
    );
    return;
  }

  event.respondWith(
    caches.match(request).then((cachedResponse) => cachedResponse || fetch(request)),
  );
});
