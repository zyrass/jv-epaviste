import { RouteRecordRaw } from 'vue-router';
import HomePage from '../pages/HomePage.vue';
import EnlevementEpaves from '../pages/HomePage.vue';
import Formalites from '../pages/HomePage.vue';
import RachatMetaux from '../pages/HomePage.vue';
import Contact from '../pages/HomePage.vue';
import NotFound from '../pages/HomePage.vue';

export const routes: RouteRecordRaw[] = [
    { path: '/', component: HomePage },
    { path: '/enlevement-epave', component: EnlevementEpaves },
    { path: '/formalite', component: Formalites },
    { path: '/rachat-metaux', component: RachatMetaux },
    { path: '/contact', component: Contact },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
];
