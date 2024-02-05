<template>
    <nav
        class="bg-slate-950 h-full flex items-center justify-between xl:justify-around"
    >
        <div
            class="bg-[url('@/assets/images/logo.svg')] bg-cover bg-center bg-white h-14 w-28"
        ></div>
        <small
            class="text-green-400 font-bold sm:text-sm mx-2 lg:text-lg lg:mx-0"
            >06 46 89 65 78</small
        >

        <!-- Bouton visible sur mobile -->
        <button
            v-if="windowWidth <= 992"
            class="bg-slate-50 rounded-md p-2 mr-4 hover:bg-slate-100 focus:bg-slate-200"
            popovertarget="menu"
            popovertargetaction="show"
        >
            <img
                class="h-5"
                src="@/assets/images/Hamburger_icon.svg"
                alt="Icon hamburger"
            />
        </button>

        <!-- Menu visible sur résolutions plus grandes -->
        <div
            class="*:text-white focus:*:text-black h-full flex"
            v-if="windowWidth > 992"
        >
            <routerLink
                to="/"
                exact
                class="nav-link py-2 px-6 lg:px-4 self-center hover:bg-slate-200 focus:bg-yellow-400 active:bg-yellow-200"
                >Accueil</routerLink
            >
            <routerLink
                to="/enlevement-epave"
                class="py-2 px-6 lg:px-4 self-center hover:bg-slate-200 hover:text-black focus:bg-yellow-400 active:bg-yellow-200"
                >Enlèvement Epave</routerLink
            >
            <routerLink
                to="/formalites-administratives"
                class="py-2 px-6 lg:px-4 self-center hover:bg-slate-200 hover:text-black focus:bg-yellow-400 active:bg-yellow-200"
                >Formalités Administratives</routerLink
            >
            <routerLink
                to="/rachat-metaux"
                class="py-2 px-6 lg:px-4 self-center hover:bg-slate-200 hover:text-black focus:bg-yellow-400 active:bg-yellow-200"
                >Rachat Métaux</routerLink
            >
            <routerLink
                to="/contact"
                class="py-2 px-6 lg:px-4 self-center hover:bg-slate-200 hover:text-black focus:bg-yellow-400 active:bg-yellow-200"
            >
                Contact</routerLink
            >
        </div>

        <!-- Menu visible exlusivement sur téléphone, jusqu'à prendre en charge les tablettes -->
        <Transition appear>
            <div
                id="menu"
                popover
                role="menu"
                class="fixed min-h-screen flex flex-col justify-between left-auto bg-slate-950 mb-4"
                v-if="windowWidth <= 992"
            >
                <div class="menu-links flex-col flex gap-y-2 py-4 px-2">
                    <div class="self-end">
                        <button
                            v-if="windowWidth <= 992"
                            class="bg-slate-50 size-8 rounded-md mb-2 mr-2 justify-center flex items-center hover:bg-slate-100 focus:bg-slate-200"
                            popovertarget="menu"
                            popovertargetaction="hide"
                        >
                            <img
                                class="h-5"
                                src="@/assets/images/cross_icon.svg"
                                alt="Icon hamburger"
                            />
                        </button>
                    </div>
                    <!-- Bouton visible sur mobile -->

                    <routerLink
                        to="/"
                        class="bg-slate-700 text-sky-50 p-2 capitalize"
                        ><i class="fas fa-home text-yellow-200 pl-2 mr-4"></i>
                        Accueil</routerLink
                    >
                    <routerLink
                        to="/enlevement-epave"
                        class="bg-slate-700 text-sky-50 p-2 capitalize"
                        ><i class="fas fa-truck text-yellow-200 pl-2 mr-4"></i>
                        Enlèvement Epave</routerLink
                    >
                    <routerLink
                        to="/formalites-administratives"
                        class="bg-slate-700 text-slate-100 p-2 capitalize"
                        ><i
                            class="fas fa-file-alt text-yellow-200 pl-2 mr-4"
                        ></i>
                        Formalités Administratives</routerLink
                    >
                    <routerLink
                        to="/rachat-metaux"
                        class="bg-slate-700 text-slate-100 p-2 capitalize"
                        ><i class="fas fa-coins text-yellow-200 pl-2 mr-4"></i>
                        Rachat Métaux</routerLink
                    >
                    <routerLink
                        to="/contact"
                        class="bg-slate-700 text-slate-100 p-2 capitalize"
                        ><i
                            class="fas fa-envelope text-yellow-200 pl-2 mr-4"
                        ></i>
                        Contact</routerLink
                    >
                    <!-- Autres liens -->
                </div>
                <div
                    class="status text-white flex flex-col justify-center items-center"
                >
                    <div class="my-6">
                        <span class="mr-2">Actuellement</span>
                        <span
                            :class="{
                                'text-green-500': openStatus === 'ouvert',
                                'text-red-500': openStatus === 'fermé',
                            }"
                            class=""
                        >
                            {{ openStatus }}
                        </span>
                    </div>

                    <div
                        class="bg-slate-950 p-4 sm:p-5 mx-auto text-center mb-6 border border-white rounded-xl shadow-lg"
                    >
                        <h3 class="text-xl">Horaires d'ouverture</h3>
                        <p>
                            <strong>7 jours sur 7</strong><br />
                            <span>
                                ⏰ De
                                <span class="text-sky-400">
                                    <strong>7 h 00</strong>
                                </span>
                                à
                                <span class="text-sky-400">
                                    <strong>20 h 00</strong> </span
                                >.
                            </span>
                        </p>
                    </div>
                </div>
                <div
                    class="h-52 w-full sm:h-60 mx-auto bg-[url('@/assets/images/logo.svg')] bg-white bg-cover bg-center"
                ></div>
            </div>
        </Transition>
    </nav>
</template>

<script setup lang="ts">
import { onBeforeUnmount } from 'vue';
import { onMounted } from 'vue';
import { ref } from 'vue';
import { computed } from 'vue';

// Afficher Ouvert ou Fermé
// Les heures d'ouverture sont de 7h à 20h, du lundi (1) au dimanche (0)
const isOpen = computed(() => {
    const now = new Date();
    const day = now.getDay(); // 0 = Dimanche, 1 = Lundi, ..., 6 = Samedi
    const hour = now.getHours(); // Heure actuelle

    // Les heures d'ouverture sont de 7h à 20h, du lundi (1) au dimanche (0)
    return day >= 0 && day <= 6 && hour >= 7 && hour < 20;
});

const openStatus = computed(() => {
    return isOpen.value ? 'ouvert' : 'fermé';
});

const windowWidth = ref(window.innerWidth);

const updateWindowWidth = () => (windowWidth.value = window.innerWidth);
onMounted(() => {
    window.addEventListener('resize', updateWindowWidth);
});

onBeforeUnmount(() => {
    window.removeEventListener('resize', updateWindowWidth);
});
</script>

<style lang="css">
/* @use '@/assets/scss/components/navbar.scss' as *; */

#menu {
    width: 300px;
    height: 100%;

    /*  undo popover styles  */
    border: none;
    padding: 0;
    margin: 0;
    left: auto;

    /*  animate  */
    transition:
        translate 0.5s ease-out,
        display 0.5s ease-out allow-discrete,
        overlay 0.5s ease-out allow-discrete;
    translate: 250px 0;
}

#menu::backdrop {
    opacity: 0;
    background: rgba(0, 0, 0, 0.5);
    transition: opacity 0.5s;
}

#menu:popover-open {
    translate: 0 0;
}
#menu:popover-open::backdrop {
    opacity: 1;
}

@media screen and (max-width: 992px) {
    #menu {
        width: 300px;
        translate: 350px 0;
    }
}

.nav-link {
    /* Styles par défaut pour les liens de navigation */
    color: #333 !important;
    --tw-bg-opacity: 1;
    background-color: rgb(250 204 21 / var(--tw-bg-opacity));
}

.nav-link.active {
    --tw-bg-opacity: 1;
    background-color: rgb(250 204 21 / var(--tw-bg-opacity));
}
</style>
