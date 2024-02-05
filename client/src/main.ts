import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import { routes } from './router/routes';
import './style.css';

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to) {
        if (to.hash) {
            return {
                el: to.hash, // Correspond à un hash toto.html#un_titre
                top: 60, // Créé un offset qui permet de ne pas être sous une navbar
                behavior: 'smooth',
            };
        } else {
            return {
                top: 0,
            };
        }
    },
});
const app = createApp(App);

app.use(router);
app.mount('#app');

// Enregistrement du Service Worker
if ('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register('/service-worker.js')
        .then(function (registration) {
            console.log(
                'Service Worker enregistré avec succès, scope:',
                registration.scope,
            );
        })
        .catch(function (error) {
            console.log("L'enregistrement du Service Worker a échoué:", error);
        });
}
