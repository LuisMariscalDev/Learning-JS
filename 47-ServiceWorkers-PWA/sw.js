const nombreCache = 'apv-1';
const archivos = [
    '/',
    './index.html',
    './error.html',
    './css/bootstrap.css',
    './css/styles.css',
    './js/app.js',
    './js/apv.js'
]


// Cuando se instala el service worker
self.addEventListener('install', e => {
    console.log('Instalando el service Worker');

    e.waitUntil(
        caches.open(nombreCache)
            .then( cache => {
                console.log('cacheando');
                cache.addAll(archivos);
            })
    )
});

// Activar el Service Worker
self.addEventListener('activate', e => {
    console.log('Service Worker Activado');

    console.log(e);
});

// Evento fetch para descargar archivos estatico
self.addEventListener('fetch', e => {
    console.log('Fetch...', e);

    e.respondWith(
        caches.match(e.request)
            .then( respuestaCache => {
                return respuestaCache;
            } )
            .catch( () => caches.match('/error.html'))
    )
})