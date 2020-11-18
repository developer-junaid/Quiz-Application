var CACHE_NAME = "websiteCache"
var urlsToCache = [
  "/static/js/bundle.js",
  "/static/js/main.chunk.js",
  "/static/js/1.chunk.js",
  "manifest.json",
  "https://opentdb.com/api_category.php",
  // "/static/js/0.chunk.js",
  "index.html",
  "/",
]

self.addEventListener("install", function (event) {
  // Perform install steps
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then(function (cache) {
        console.log("Opened cache")
        return cache.addAll(urlsToCache)
      })
      .catch((err) => {
        console.log(err)
      })
  )
})

self.addEventListener("fetch", function (event) {
  if (!navigator.onLine) {
    event.respondWith(
      caches.match(event.request).then(function (response) {
        // Cache hit - return response
        if (response) {
          return response
        }
        let requestUrl = event.request.clone()
        fetch(requestUrl)
      })
    )
  }
})
