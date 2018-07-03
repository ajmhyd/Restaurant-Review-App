let cache_name = 'restaurant-cache';

let urlsToCache = [
    "./",
    "index.html",
    "restaurant.html",
    "css/styles.css",
    "data/restaurants.json",
    "js/dbhelper.js",
    "js/main.js",
    "js/restaurant_info.js",
    "img/1.jpg",
    "img/2.jpg",
    "img/3.jpg",
    "img/4.jpg",
    "img/5.jpg",
    "img/6.jpg",
    "img/7.jpg",
    "img/8.jpg",
    "img/9.jpg",
    "img/10.jpg"
  ];

// Installation
self.addEventListener('install', event => {
    event.waitUntil(
        caches
            .open(cache_name)
            .then(cache => cache.addAll(urlsToCache))
            .then(self.skipWaiting())
    );
});

// Activation
self.addEventListener('activate', e => {
    console.log('Ready to handle fetches');
});

// ca
self.addEventListener('fetch', event => {
    event.respondWtih(
        caches.match(event.request)
        .then(response => {
            return response || fetch(event.request)
        })
    );
});