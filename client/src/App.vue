<script setup lang="ts"></script>

<template>
    <header>
        <nav>
            <ul>
                <routerLink to="/">Accueil</routerLink>
                <routerLink to="/enlevement-epave">Enlèvement Epave</routerLink>
                <routerLink to="/formalites-administrative"
                    >Formalités Administratives</routerLink
                >
                <routerLink to="/rachat-metaux">Rachat Métaux</routerLink>
                <routerLink to="/contact">Contact</routerLink>
            </ul>
        </nav>
    </header>
    <main>
        <h1>Site en cours de fabrication</h1>
        <hr />
        <router-view></router-view>
        <hr />
    </main>
    <footer>
        <span>&copy; Copyright 2024-2027 - tous droits réservés</span>
        <span
            >Site réalisé par Mr GUILLON Alain (Développeur fullstack et
            Alternant RSSI)</span
        >
    </footer>
</template>

<style scoped></style>
