import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import { routes } from './router/routes';

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savePosition) {
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
