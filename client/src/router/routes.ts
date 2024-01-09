import { RouteRecordRaw } from 'vue-router';
import HomePage from '../pages/HomePage.vue';
import EnlevementEpaves from '../pages/EnlevementEpave.vue';
import Formalites from '../pages/Formalites.vue';
import RachatMetaux from '../pages/RachatMetaux.vue';
import Contact from '../pages/Contact.vue';
import NotFound from '../pages/NotFound.vue';

export const routes: RouteRecordRaw[] = [
    { path: '/', component: HomePage },
    { path: '/enlevement-epave', component: EnlevementEpaves },
    { path: '/formalites-administratives', component: Formalites },
    { path: '/rachat-metaux', component: RachatMetaux },
    { path: '/contact', component: Contact },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
];
