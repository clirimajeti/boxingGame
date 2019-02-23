/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.0.0-rc.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "css/bootstrap.min.css",
    "revision": "d8796d5008db5343437cb4e6c269d471"
  },
  {
    "url": "css/style.css",
    "revision": "96dbac4a309eef7afe276c18c7c276ed"
  },
  {
    "url": "img/bag-burst.png",
    "revision": "135414266eb08be3bdf5269053fd6c00"
  },
  {
    "url": "img/bag.png",
    "revision": "ef753770e96dade093ea0c1873c9d8da"
  },
  {
    "url": "img/ring.jpg",
    "revision": "474c0241fa01aae6321916180cb78179"
  },
  {
    "url": "index.html",
    "revision": "58875062d4314145cbb2353aa2328f8b"
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
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
