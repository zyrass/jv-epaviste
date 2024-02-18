<script setup lang="ts">
import Navbar from './components/Navbar.vue';
</script>

<template>
    <header class="h-14 fixed w-full z-50">
        <Navbar />
    </header>
    <main>
        <router-view v-slot="{ Component }">
            <Transition appear mode="out-in" name="animePage">
                <KeepAlive include="Contact">
                    <Component :is="Component" />
                </KeepAlive>
            </Transition>
        </router-view>
    </main>
    <footer
        class="flex-auto bg-slate-950 grid grid-cols-1 py-8 sm:grid-cols-2 lg:py-16"
    >
        <div
            class="visible bg-[url('@/assets/images/logo.svg')] bg-cover bg-center border-8 rounded border-slate-700 bg-gray-100 h-48 w-80 mx-auto lg:h-56 lg:w-96"
        ></div>

        <div
            class="flex flex-col justify-evenly py-6 items-center text-slate-50 gap-2"
        >
            <span>
                <small>
                    &copy; Copyright 2024-2027 - tous droits réservés
                </small>
            </span>

            <small
                class="text-sky-400 font-mono text-lg underline underline-offset-2"
            >
                <routerLink to="/mentions-legales">
                    Mentions Légales
                </routerLink>
            </small>

            <small
                >Site réalisé par Mr
                <span class="text-red-400">GUILLON Alain</span></small
            >
        </div>
    </footer>
</template>

<style lang="css">
.animePage-enter-from {
    opacity: 0;
}
.animePage-enter-to {
    opacity: 1;
}
.animePage-enter-active {
    transition: all 0.4s ease-in-out;
}
</style>
