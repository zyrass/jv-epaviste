<script setup lang="ts">
import Navbar from './components/Navbar.vue';
</script>

<template>
    <header>
        <Navbar />
    </header>
    <main>
        <router-view v-slot="{ Component }">
            <Transition appear mode="out-in" name="animePage">
                <Component :is="Component" />
            </Transition>
        </router-view>
    </main>
    <footer>
        <span
            ><small
                >&copy; Copyright 2024-2027 - tous droits réservés</small
            ></span
        >
        <span
            ><small>
                <routerLink to="/mentions-legales">Mentions Légales</routerLink>
            </small>
        </span>
        <span>
            <small>Site réalisé par Mr GUILLON Alain</small>
        </span>
    </footer>
</template>

<style lang="scss">
@use './assets/scss/main.scss' as *;

header {
    width: 100vw;
}
main {
    padding: 0;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
}

.animePage-enter-from {
    opacity: 0;
}
.animePage-enter-to {
    opacity: 1;
}
.animePage-enter-active {
    transition: all 0.4s ease-in-out;
}

footer {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: var(--dark-2);
    height: 100%;
    padding: 10px;

    span {
        color: var(--gray-2);
    }

    a {
        color: var(--success-1);
    }
}
</style>
