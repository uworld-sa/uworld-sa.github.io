self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open('v1').then(function(cache) {
            return cache.addAll([
                '/index.html',
                '/hw12.js',
                '/style.css'
            ]);
        })
    );
});
self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(resp) {
            return resp || fetch(event.request).then(function(response) {
                let responseClone = response.clone();
                caches.open('v1').then(function(cache) {
                    cache.put(event.request, responseClone);
                });

                return response;
            });
        }).catch(function() {
            //return caches.match('/sw-test/gallery/myLittleVader.jpg');
        })
    );
});