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
    "revision": "838d4b3a09a33f66fc4fcf90013a8000"
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
    "revision": "d6c5d1446109eca1613c415f462b1457"
  },
  {
    "url": "images/icons/icon-144x144.png",
    "revision": "7e3b99470da314d7207b0b3b101a60a2"
  },
  {
    "url": "images/icons/icon-152x152.png",
    "revision": "7d413cec92f2a4819ade5b998116e8b9"
  },
  {
    "url": "images/icons/icon-192x192.png",
    "revision": "ece9bd432cb282e24c31b9dbffe29571"
  },
  {
    "url": "images/icons/icon-384x384.png",
    "revision": "b1ca68e226a5038b21c874d6980f04f6"
  },
  {
    "url": "images/icons/icon-512x512.png",
    "revision": "b5ef65364e535e14e9be3f4447488dec"
  },
  {
    "url": "images/icons/icon-72x72.png",
    "revision": "7e6e4011b7fbab31e024f168b887b743"
  },
  {
    "url": "images/icons/icon-96x96.png",
    "revision": "7444e204668bafdf83be81ebfea66fba"
  },
  {
    "url": "images/ring.jpg",
    "revision": "069ec2d54ece65c660ce9b70d2a556ec"
  },
  {
    "url": "index.html",
    "revision": "a6c1ddfa1b74e913599040b0513a1fe1"
  },
  {
    "url": "js/app.js",
    "revision": "eb6cb70c7758f9d5d70bd48a2d8160a1"
  },
  {
    "url": "js/vue.min.js",
    "revision": "47220dbcb227dd1b39a1013bafc03a1c"
  },
  {
    "url": "js/vue2-filters.min.js",
    "revision": "b84bc84243022023abd208bf0aeeb4dd"
  }
]);