const CACHE_NAME = "quizApplicationCache"

const filesToCache = [
  "/",
  "index.html",
  "manifest.json",
  "https://pro.fontawesome.com/releases/v5.10.0/css/all.css",
  "/static/media/hand_mobile.jpg",
  "/quiz2.svg",
]

// Install SW
this.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      cache.addAll(filesToCache)
    })
  )
})

// Listen for requests
this.addEventListener("fetch", (event) => {
  if (!navigator.onLine) {
    event.respondWith(
      caches.match(event.request).then((resp) => {
        if (resp) {
          return resp
        }
      })
    )
  }
})

// Activate the SW
this.addEventListener("activate", (event) => {
  const cacheWhiteList = []
  cacheWhiteList.push(CACHE_NAME)

  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhiteList.includes(cacheName)) {
            return caches.delete(cacheName)
          }
        })
      )
    )
  )
})
