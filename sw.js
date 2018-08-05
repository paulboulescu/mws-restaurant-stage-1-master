
// name of the current cache
var staticCacheName = 'cache_v01';
// list of URLs to be cached
var urlsToCache = [
  '/',
  '/index.html',
  '/restaurant.html',
  '/css/styles.css',
  '/js/dbhelper.js',
  '/js/main.js',
  '/js/restaurant_info.js'
];

// when 'install' event is triggerd
self.addEventListener('install', function(event) {
  // and all install steps are performed
  event.waitUntil(
    // opens or creates a new chache
    caches.open(staticCacheName)  
      .then(function(cache) {
        // adds to cache the list of files
        return cache.addAll(urlsToCache);
      })
  );
});

// when 'activate' event is triggerd
self.addEventListener('activate', function(event) {
  event.waitUntil(
    // all caches are retrieved
    caches.keys().then(function(cacheNames) {
      // and for each
      return Promise.all(
        // we filter
        cacheNames.filter(function(cacheName){
          // selecting those different than the current cache
          return cacheName != staticCacheName;
        }).map(function(cacheName) {
            // and we delete them
            return caches.delete(cacheName);
          })
      );
    })
  )
});

// when 'fetch' event is triggered
self.addEventListener('fetch', function(event){
  event.respondWith(
    // the current cache is opened
    caches.open(staticCacheName).then(function(cache) {
      // we try to fetch the requested response from the internet
      return fetch(event.request).then(function(response) {
          // if we succeed, we add it to cache
          cache.put(event.request, response.clone());
          // and we return it to be used by the app
          return response;
      }).catch(function(){
        // if we don't succeed, we try to take it from the cache
        return caches.match(event.request);
      });
    })
  );
})