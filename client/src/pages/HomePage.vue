<script setup lang="ts"></script>

<template>
    <div class="container">
        <article>
            <header>
                <h1>
                    <span>Épaviste</span>
                    <span>Ferrailleur</span>
                </h1>

                <p>
                    Service d'enlèvement d'épaves agréé VHU avec 8 ans
                    d'expérience, au service de
                    <span>l'Ain</span>, <span>l'Isère</span> et
                    <span>le Rhône</span>. Faites confiance à notre expertise
                    pour vous débarrasser de vos épaves en toute tranquillité.
                </p>

                <RouterLink to="/contact">Contactez-nous</RouterLink>
            </header>
            <section>
                <h2>
                    <i class="fas fa-handshake"></i> - Service d'épaviste VHU
                    pour un environnement propre
                </h2>
                <p>
                    Confiez-nous l'enlèvement de votre épave pour une
                    destruction respectueuse de l'environnement. En tant
                    qu'épaviste certifié, nous assurons le démontage, la
                    dépollution, et le recyclage des véhicules hors d'usage.
                </p>
                <h3>
                    <i class="fas fa-recycle"></i> - Choisir un épaviste agréé :
                    un acte responsable
                </h3>
                <p>
                    Faites appel à un professionnel agréé pour garantir la
                    conformité légale de l'enlèvement de votre épave et
                    contribuer à la protection de l'environnement. Nous offrons
                    également une assistance pour les démarches administratives.
                </p>
                <h3>
                    <i class="fas fa-car-crash"></i> - Préparation simplifiée de
                    l'enlèvement
                </h3>
                <p>
                    Nous facilitons la préparation de l'enlèvement de votre
                    épave. Il vous suffit de rassembler quelques documents clés
                    : le certificat de non-gage, une pièce d'identité valide, et
                    nous nous chargeons de remplir le formulaire Cerfa
                    n°15776*01 avec vous. Notre objectif est de rendre le
                    processus aussi simple et transparent que possible.
                </p>
                <h3>
                    <i class="fas fa-file-alt"></i> - Formalités administratives
                    prises en charge
                </h3>
                <p>
                    Avec JV-Épaviste, vous bénéficiez d'une assistance complète
                    pour toutes les démarches administratives. Suite à
                    l'enlèvement de l'épave, nous vous guidons et prenons en
                    charge les formalités auprès des autorités compétentes.
                    Profitez d'une expérience sans tracas, où le plus gros du
                    travail administratif est géré par nos soins.
                </p>
            </section>
            <div class="choice">
                <p>
                    Choisissez JV-Épaviste pour un enlèvement d'épaves
                    <span>gratuit</span>, <span>responsable</span> et
                    <span>conforme à la réglementation</span>, avec
                    <span>la garantie d'un accompagnement professionnel</span> à
                    chaque étape.
                </p>
            </div>
            <img
                src="@/assets/images/camion_jerome.webp"
                alt="Camion"
                class="truck_jerome"
            />
            <div>
                <p>
                    <span>06 46 89 65 78</span>
                    <small>
                        <span>7 jours sur 7</span>
                        <span>de 7 h 00 à 20 h 00</span>
                    </small>
                </p>
                <i class="fa-solid fa-phone"></i>
            </div>
        </article>
    </div>
</template>

<style scoped lang="scss">
.container {
    height: 100%;
    width: 100vw;
    text-align: left;
    color: var(--gray-3);
}

article {
    overflow: hidden;
    width: 100%;
    margin: 0 auto;
}

article {
    header {
        height: calc(100vh - 53px);
        position: relative;
        z-index: 1;
        background-color: var(--dark-1);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        &::before {
            content: '';
            display: block;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image: url('@/assets/images/autos/auto-1.webp');
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
            z-index: -1;
            opacity: 0.4;
        }

        h1 {
            font-size: 2.5rem;
            color: var(--gray-1);
            text-transform: uppercase;
            text-shadow: 0 0 20px var(--dark-1);
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            gap: 15px;
        }

        p {
            background-color: var(--gray-1);
            width: 90vw;
            padding: 1rem;
            opacity: 0.8;
            box-shadow: 0 0 5px var(--dark-1);
            color: var(--dark-1);

            span {
                color: var(--primary-1);
            }
        }

        a {
            background-color: var(--success-1);
            color: var(--gray-1);
            text-shadow: 0 0 4px var(--dark-3);
            text-transform: uppercase;
            font-weight: bold;
            padding: 12px 24px;
            border-radius: 4px;
            box-shadow: 0 1px 3px var(--dark-3);
            cursor: pointer;
        }
    }

    section {
        background-color: var(--gray-1);
        margin: 0 auto;
        padding: 4rem 2rem 2rem;

        h2 {
            margin-bottom: 2rem;
        }

        h3 {
            margin-top: 1rem;
            color: var(--gray-3);
        }

        h2,
        h3 {
            i {
                color: var(--success-2);
            }
        }

        p {
            padding: 1rem 0;
            color: var(--dark-1);
        }
    }

    .choice {
        padding: 3rem 2rem;
        background-color: var(--gray-3);
        color: var(--gray-1);

        span {
            color: var(--success-1);
            &:last-child {
                color: var(--warning-1);
            }
        }
    }
    .truck_jerome {
        filter: grayscale(69%);
    }
    div:last-child {
        padding: 4rem 2rem;
        background-color: var(--gray-1);
        position: relative;
        p {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            span {
                text-align: center;
                font-size: calc(2rem + 1vmin);
                font-weight: 900;
                color: var(--gray-3);
            }
            small {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: space-between;
                span {
                    font-size: calc(1rem + 1vmin);
                    color: var(--dark-1);
                }
            }
        }
        i {
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 150px;
            opacity: 0.2;
        }
    }
}
</style>
