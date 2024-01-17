importScripts("mathhelp/algebra.js");
importScripts("mathhelp/calculus.js");
importScripts("mathhelp/trigonometry.js");

const sw = new UVServiceWorker();
let userKey = new URL(location).searchParams.get("userkey");

self.addEventListener("fetch", (event) => event.respondWith(sw.fetch(event)));
