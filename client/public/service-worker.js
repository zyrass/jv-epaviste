// Nom du cache (à changer pour forcer la mise à jour du cache)
const CACHE_NAME = 'jv-epaviste-cache-v1';

// Liste des ressources à mettre en cache
const urlsToCache = [
    '/',
    '/index.html',
    // Spécifiez d'autres ressources nécessaires ici
    '/styles/main.css',
    '/script/main.js',
    '/images/logo.png',
    '/manifest.json',
    '/icon-192x192.png',
    '/icon-512x512.png',
];

// Installation du service worker et mise en cache des ressources
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log('Fichiers mis en cache');
            return cache.addAll(urlsToCache);
        }),
    );
});

// Gestion des requêtes pour récupérer les ressources du cache
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            // La ressource est dans le cache
            if (response) {
                return response;
            }

            // La ressource n'est pas dans le cache, la requête est effectuée normalement
            return fetch(event.request);
        }),
    );
});

// Activation du service worker et nettoyage des anciens caches
self.addEventListener('activate', (event) => {
    const cacheWhitelist = [CACHE_NAME];

    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheWhitelist.indexOf(cacheName) === -1) {
                        // Supprimer les caches qui ne sont pas dans la liste blanche
                        return caches.delete(cacheName);
                    }
                }),
            );
        }),
    );
});
