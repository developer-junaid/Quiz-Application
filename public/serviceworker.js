const CACHE_NAME = "quizApplicationCache"

const filesToCache = [
  "/static/media/hand_mobile.jpg",
  "/static/media/hand_mobile.8e00ea14.jpg",
  "/static/media/SourceSansPro-Regular.c1678b46.ttf",

  "/",
  "index.html",
  "manifest.json",

  "/static/js/main.chunk.js",
  "/static/js/bundle.js",
  "/static/js/1.chunk.js",

  "/web-fonts/css/all.min.css",

  "/static/media/SourceSansPro-Regular.ttf",

  "/images/quiz.svg",

  "/images/icon-192x192.png",

  "https://fonts.googleapis.com/icon?family=Material+Icons",

  "/web-fonts/webfonts/fa-solid-900.woff2",
  "/web-fonts/webfonts/6xK3dSBYKcSV-LCoeQqfX1RYOo3qOK7l.woff2",
  "/web-fonts/webfonts/fa-brands-400.woff2",
  "/web-fonts/web-fonts/webfonts/fa-brands-400.ttf",
  "/web-fonts/web-fonts/webfonts/fa-solid-900.ttf",
  "/web-fonts/web-fonts/webfonts/fa-brands-400.woff",
  "/web-fonts/web-fonts/webfonts/fa-solid-900.woff",
  "/web-fonts/web-fonts/webfonts/fa-brands-400.woff2",
  "/src/styles/fonts/SourceSansPro-Regular.ttf",
  "/web-fonts/web-fonts/webfonts/fa-solid-900.woff2",
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
