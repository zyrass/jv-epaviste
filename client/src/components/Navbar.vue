<template>
    <nav id="navbar">
        <span class="title">jv-epaviste.fr</span>
        <span class="phone">06 46 89 65 78</span>
        <div id="menu-toggle" @click="toggleMenu">
            <span class="hamburger-line" :class="{ active: isMenuOpen }"></span>
            <span class="hamburger-line" :class="{ active: isMenuOpen }"></span>
            <span class="hamburger-line" :class="{ active: isMenuOpen }"></span>
        </div>
        <div v-if="isMenuOpen" id="menu-content">
            <div class="menu-links">
                <routerLink @click="isMenuOpen = !isMenuOpen" to="/">
                    <i class="fas fa-home"></i> Accueil</routerLink
                >
                <routerLink
                    @click="isMenuOpen = !isMenuOpen"
                    to="/enlevement-epave"
                    ><i class="fas fa-truck"></i> Enlèvement Epave</routerLink
                >
                <routerLink
                    @click="isMenuOpen = !isMenuOpen"
                    to="/formalites-administratives"
                    ><i class="fas fa-file-alt"></i> Formalités
                    Administratives</routerLink
                >
                <routerLink
                    @click="isMenuOpen = !isMenuOpen"
                    to="/rachat-metaux"
                    ><i class="fas fa-coins"></i> Rachat Métaux</routerLink
                >
                <routerLink @click="isMenuOpen = !isMenuOpen" to="/contact"
                    ><i class="fas fa-envelope"></i> Contact</routerLink
                >
                <!-- Autres liens -->
            </div>
            <div class="status">
                Actuellement
                <span
                    :class="{
                        isOpen: openStatus === 'ouvert',
                        isClose: openStatus === 'fermé',
                    }"
                >
                    {{ openStatus }}
                </span>

                <div class="horaires">
                    <h3>Horaires d'ouverture</h3>
                    <p>
                        <strong>7 jours sur 7</strong><br />
                        <span
                            >⏰ De <span class="heure">7 h 00</span> à
                            <span class="heure">20 h 00</span></span
                        >
                    </p>
                </div>
            </div>
            <div class="menu-logo">
                <img :src="Logo" alt="Logo jv-epaviste.fr" />
            </div>
        </div>
    </nav>
</template>

<script setup lang="ts">
import Logo from '@/assets/images/logo.svg';
import { ref, computed } from 'vue';

// Ouverture du menu
const isMenuOpen = ref(false);
const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
};

// Afficher Ouvert ou Fermé
const isOpen = computed(() => {
    const now = new Date();
    const day = now.getDay(); // 0 = Dimanche, 1 = Lundi, ..., 6 = Samedi
    const hour = now.getHours(); // Heure actuelle

    // Les heures d'ouverture sont de 7h à 21h, du lundi (1) au dimanche (0)
    return day >= 0 && day <= 6 && hour >= 7 && hour < 20;
});
const openStatus = computed(() => {
    return isOpen.value ? 'ouvert' : 'fermé';
});
</script>

<style lang="scss">
#navbar {
    position: fixed;
    width: 100vw;
    background-color: #222222;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 54px;
    z-index: 1000;

    span {
        &.title {
            font-size: calc(0.8rem + 1vmin);
            color: var(--gray-1);
            margin-left: 1rem;
        }
        &.phone {
            font-size: calc(0.8rem + 1vmin);
            color: var(--warning-1);
        }
    }

    #menu-toggle {
        cursor: pointer;
        position: relative;
        width: 30px;
        height: 25px;
        margin-right: 2rem;

        .hamburger-line {
            // position: absolute; /* Position absolue pour que les lignes puissent être superposées */
            // left: 0;
            // right: 0;
            // margin-left: auto;
            // margin-right: auto;
            // top: 50%; /* Centrage vertical */
            // width: 100%;
            // height: 3px;
            // transition: all 0.3s ease;
            // transform-origin: center; /* Assurez-vous que la rotation se fait autour du centre */
            // background-color: var(--gray-1);
            position: absolute;
            width: 100%; /* Étant en absolute ça revient à dire que la hauteur est à 35px */
            height: 2px;
            border-radius: 4px;
            background-color: #fff;
            left: 0;
            transition: all 0.3 ease-in-out;

            &:nth-child(1) {
                top: 0;
            }
            &:nth-child(2) {
                top: 10px;
            }
            &:nth-child(3) {
                top: 20px;
            }
        }

        /* Animation pour l'icône active (croix) */
        /* Transformation pour la première ligne */
        .hamburger-line.active:nth-child(1) {
            transform: rotate(45deg);
            top: 10px;
        }

        /* Cacher la deuxième ligne */
        .hamburger-line.active:nth-child(2) {
            opacity: 0;
        }

        /* Transformation pour la troisième ligne */
        .hamburger-line.active:nth-child(3) {
            transform: rotate(-45deg);
            top: 10px;
        }
    }
}

#menu-content {
    position: fixed;
    top: 53px;
    right: 0;
    width: 80%;
    height: calc(100% - 53px);
    background: var(--dark-2);
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0px 10px 10px;

    .menu-links {
        width: 100%;
        margin-bottom: 5px;
        padding-top: 10px;
        a {
            background-color: var(--gray-3);
            margin: 5px;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            text-decoration: none;
            color: var(--gray-1);
            padding: 10px 0;
            transition: all 0.3s ease-in-out;
            font-size: 0.8rem;

            &:hover {
                background-color: var(--gray-1);
                color: var(--gray-3);
            }

            i {
                padding: 0 15px;
            }
        }
    }

    .status {
        margin: 1rem 0;
    }

    table {
        font-size: small;
        margin: 1rem auto;
        border-collapse: collapse;
        background-color: var(--gray-1);
        width: 100%;
        color: var(--dark-2);
        thead {
            text-transform: uppercase;
            tr {
                th {
                    border: 1px solid var(--dark-1);
                    padding: 5px 0;
                    background-color: var(--gray-3);
                    color: var(--gray-1);
                }
            }
        }
        tbody {
            tr {
                border: 1px solid var(--dark-1);
                td {
                    border: 1px solid var(--dark-1);
                    padding: 5px;
                    &:first-child {
                        text-align: left;
                    }
                    &:not(:first-child) {
                        text-align: center;
                    }
                }
            }
        }
    }

    .menu-logo {
        // Styles pour le logo en bas du menu
        background-color: var(--dark-2);
        display: flex;
        align-items: center;
        justify-content: center;
        img {
            height: 200px;
            padding-bottom: 50px;
            // filter: invert(0.5) sepia(1) saturate(5) hue-rotate(180deg); // blue
            filter: invert(0.9) sepia(0) saturate(1) hue-rotate(255deg); // blue
        }
    }
}

.isClose {
    color: var(--danger-1);
}
.isOpen {
    color: var(--success-1);
}

.horaires {
    text-align: center;
    margin: 20px 0;
    background-color: var(--dark-3);
    padding: 2rem 0;
    box-shadow: inset 0 0 100px var(--dark-1);
    border: 2px solid var(--gray-1);
    border-radius: 5px;

    h3 {
        color: var(--gray-1);
        font-weight: 700;
    }

    p {
        strong,
        span {
            color: var(--gray-2);
        }
    }

    .heure {
        font-size: 1.2em;
        color: var(--success-1);
    }
}
</style>
