importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.5.4/workbox-sw.js');

// Cache images
workbox.routing.registerRoute(
  ({request}) => request.destination === 'image',
  new workbox.strategies.NetworkFirst()
);

// Cache HTML, CSS, JS
workbox.routing.registerRoute(
  ({request}) => 
    request.destination === 'document' ||
    request.destination === 'script' ||
    request.destination === 'style',
  new workbox.strategies.StaleWhileRevalidate()
);
