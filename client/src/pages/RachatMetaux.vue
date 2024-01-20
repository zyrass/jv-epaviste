<script setup lang="ts"></script>

<template>
    <div class="container">
        <article>
            <header>
                <h1>
                    <i class="fas fa-recycle"></i>
                    <span>Rachat Métaux</span>
                </h1>
            </header>
            <section>
                <h2><i class="fas fa-handshake"></i> - Notre Engagement</h2>
                <p>
                    <strong> <em>Spécialistes du rachat de métaux</em> </strong
                    >, nous sommes continuellement à la recherche de matériaux à
                    recycler. Nous proposons des tarifs compétitifs pour une
                    large gamme de métaux.
                </p>
                <img
                    src="@/assets/images/handshake.webp"
                    alt="image of handshake"
                />

                <h2><i class="fas fa-magnet"></i> - Métaux Rachetés</h2>
                <dl>
                    <dt><strong>Cuivre</strong></dt>
                    <dd>Tuyauterie, câblage, et bobines</dd>

                    <dt><strong>Aluminium</strong></dt>
                    <dd>Jantes, châssis de fenêtres, et profilés</dd>

                    <dt><strong>Fer</strong></dt>
                    <dd>Poutrelles, ferrailles diverses</dd>

                    <dt><strong>Plomb</strong> et <strong>Zinc</strong></dt>
                    <dd>Toitures, batteries</dd>

                    <dt>
                        <strong>Inox</strong> et
                        <strong>Alliages spéciaux</strong>
                    </dt>
                    <dd>Éviers, plans de travail</dd>
                </dl>
                <img
                    src="@/assets/images/metaux.webp"
                    alt="image of handshake"
                />

                <h2><i class="fas fa-balance-scale"></i> - Conditions</h2>
                <p>
                    Chaque offre de rachat est étudiée avec soin. Nous prenons
                    en compte les <em>frais de déplacement</em> pour assurer que
                    l'opération soit économiquement viable pour les deux
                    parties.
                </p>
                <p class="rules">
                    Pour des raisons économiques, si le déplacement s'avère non
                    rentable, nous ne pourrons pas procéder au rachat.
                    <strong
                        >Notre objectif est d'assurer une transaction
                        avantageuse pour vous comme pour nous.</strong
                    >
                </p>
            </section>
            <footer>
                <p>
                    Pour plus d'informations ou pour obtenir une estimation,
                    <strong><a href="/contact">contactez-nous</a></strong> dès
                    aujourd'hui.
                </p>
            </footer>
        </article>
    </div>
</template>

<style scoped lang="scss">
.container {
    height: 100%;
    max-width: 100vw;
    text-align: left;
    color: var(--gray-3);
}

article {
    header {
        width: 100%;
        color: var(--gray-1);
        height: 200px;
        background-color: var(--gray-3);
    }

    h1 {
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-shadow: 0 0 10px var(--dark-1);
        text-transform: uppercase;

        i {
            font-size: 60px;
            margin-bottom: 2rem;
            color: var(--warning-1);
        }
    }

    section {
        padding: 1rem 1.5rem 3rem;

        h2 {
            margin: 1rem 0 1rem;
            i {
                color: var(--success-2);
            }
        }

        dl {
            dt::after {
                content: ' :';
                font-weight: 900;
            }
            dd {
                padding-left: 1rem;
                padding-bottom: 1rem;
            }
        }

        p {
            padding: 0 0 1rem;
            &:last-child {
                margin-top: 2rem;
                background-color: var(--danger-1);
                color: var(--gray-1);
                padding: 1rem;
                text-align: center;
                font-style: italic;
                font-weight: 900;
                box-shadow: inset 0 0 25px var(--dark-1),
                    0 0 7.5px var(--dark-1);
                border-radius: 4px;
                border: 1px solid var(--dark-2);
            }
        }
    }
}
</style>
