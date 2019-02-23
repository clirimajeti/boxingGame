importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.0.0-rc.3/workbox-sw.js");

// Cache the Google Fonts stylesheets with a stale-while-revalidate strategy.
workbox.routing.registerRoute(
    /^https:\/\/fonts\.googleapis\.com/,
    workbox.strategies.staleWhileRevalidate({
      cacheName: 'google-fonts-stylesheets',
    })
  );
  
  // Cache the underlying font files with a cache-first strategy for 1 year.
  workbox.routing.registerRoute(
    /^https:\/\/fonts\.gstatic\.com/,
    workbox.strategies.cacheFirst({
      cacheName: 'google-fonts-webfonts',
      plugins: [
        new workbox.cacheableResponse.Plugin({
          statuses: [0, 200],
        }),
        new workbox.expiration.Plugin({
          maxAgeSeconds: 60 * 60 * 24 * 365,
          maxEntries: 30,
        }),
      ],
    })
  );



workbox.precaching.precacheAndRoute([
  {
    "url": "css/bootstrap.min.css",
    "revision": "d8796d5008db5343437cb4e6c269d471"
  },
  {
    "url": "css/style.css",
    "revision": "f973f30d83fca20e59c3c46d9a217876"
  },
  {
    "url": "images/bag-burst.png",
    "revision": "135414266eb08be3bdf5269053fd6c00"
  },
  {
    "url": "images/bag.png",
    "revision": "ef753770e96dade093ea0c1873c9d8da"
  },
  {
    "url": "images/icons/icon-128x128.png",
    "revision": "e9099eb8dabeba70905c1b3a02ca67ae"
  },
  {
    "url": "images/icons/icon-144x144.png",
    "revision": "2ac1a651bb2a7884ab9daccabedf7ae5"
  },
  {
    "url": "images/icons/icon-152x152.png",
    "revision": "004202a6d5a23c8140d7a360cb55c9fc"
  },
  {
    "url": "images/icons/icon-192x192.png",
    "revision": "9c12c54978c4955145c8bd192b58aee4"
  },
  {
    "url": "images/icons/icon-384x384.png",
    "revision": "2252c3af2519eadf22bbe5d2e103131e"
  },
  {
    "url": "images/icons/icon-512x512.png",
    "revision": "a2608978a0a364c79f12a86598279f11"
  },
  {
    "url": "images/icons/icon-72x72.png",
    "revision": "619fc6acdcfa0e24471e599958595125"
  },
  {
    "url": "images/icons/icon-96x96.png",
    "revision": "7ac6c50c6b31d1857ab3320afb3af57b"
  },
  {
    "url": "images/ring.jpg",
    "revision": "474c0241fa01aae6321916180cb78179"
  },
  {
    "url": "index.html",
    "revision": "0ddfe65268561cb633c1ecb6c7ca42f7"
  },
  {
    "url": "js/app.js",
    "revision": "6a9f9136982c899356918fedde0e8397"
  },
  {
    "url": "js/vue.min.js",
    "revision": "baa2f3e9801a1924119f400d8046e56a"
  },
  {
    "url": "js/vue2-filters.min.js",
    "revision": "b84bc84243022023abd208bf0aeeb4dd"
  }
]);