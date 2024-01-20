<script setup lang="ts"></script>

<template>
    <div class="container">
        <article>
            <header>
                <h1>Formalités Administratives</h1>
            </header>

            <h2>
                <i class="fas fa-list-alt"></i> - Veuillez prendre connaissance
                des conditions requises pour toute demande d'enlèvement de
                véhicule hors d'usage
            </h2>

            <ul>
                <li>
                    Veuillez compléter le formulaire de cession de véhicule,
                    disponible sur le site officiel du service public à
                    l'adresse suivante
                    <a
                        class="link"
                        href="https://www.service-public.fr/simulateur/calcul/15776"
                        >https://Service-public.fr/simulateur/calcul/15776</a
                    >.<br />
                    <strong>
                        Notez que nous pouvons le faire directement sur place
                        pour vous facilitez les démarches.
                    </strong>
                </li>
                <li>
                    <strong>Certificat d'Immatriculation (Carte Grise)</strong>
                    : Assurez-vous de posséder le certificat d'immatriculation
                    du véhicule, communément appelé carte grise.
                </li>
                <li>
                    <strong>Copie de Pièce d'Identité</strong> : Il est
                    nécessaire de fournir une copie de votre pièce d'identité
                    valide.
                </li>
                <li>
                    <strong>Certificat de Non-Gage</strong> : Obtenez un
                    certificat de non-gage depuis le site du Ministère de
                    l'Intérieur français, accessible via le lien suivant
                    <a
                        href="https://siv.interieur.gouv.fr/map-usg-ui/do/accueil_certificat"
                        >https://siv.interieur.gouv.fr/map-usg-ui/do/accueil_certificat</a
                    >.
                </li>
            </ul>

            <h3>
                <i class="fas fa-truck-pickup"></i> - Lors de l'enlèvement du
                véhicule, veuillez vous assurer de respecter les points suivants
            </h3>

            <ol type="1">
                <li>
                    <strong>Barrage de la Carte Grise pour Cession</strong> : Au
                    moment de l'intervention, la carte grise doit être barrée
                    spécifiquement pour la cession et être destinée à la
                    destruction. Elle doit comporter la mention « cédée le
                    XX/XX/XXX à XXhXX», écrite de façon lisible et inaltérable.
                </li>
                <li>
                    <strong>Signature du Propriétaire</strong> : La carte grise
                    barrée doit être signée par le propriétaire du véhicule.
                    <strong>C'est une obligation légale</strong>
                </li>
                <li>
                    <strong>Remise des Documents à l'Épaviste</strong> :
                    Fournissez le certificat de non-gage et la copie de votre
                    pièce d'identité à l'épaviste. Ces documents sont essentiels
                    pour que l'épaviste puisse transporter votre épave vers un
                    centre VHU agréé, tout en garantissant que le véhicule n'est
                    sujet à aucune restriction administrative mentionnée dans le
                    certificat de non-gage.
                </li>
            </ol>

            <hr />

            <div class="satisfaction">
                <routerLink to="/contact">Enlever une épave ?</routerLink>
                <span
                    ><i class="fas fa-thumbs-up"></i> Satisfaction Garantie à
                    100%</span
                >
            </div>

            <div class="info">
                <p>
                    Notre vaste réseau d'épavistes professionnels est à votre
                    disposition pour offrir une solution efficace et rapide pour
                    l'enlèvement de votre véhicule en fin de vie vers un centre
                    VHU agréé.
                </p>
                <p>
                    Nos spécialistes interviennent promptement, tout en
                    garantissant le respect strict des normes de sécurité et en
                    assurant une totale transparence tout au long du processus.
                </p>
            </div>
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

header {
    width: 100vw;
    color: var(--gray-1);
    height: 200px;
    display: flex;
    align-items: center;
    text-align: center;
    background-color: var(--gray-3);
}

h1 {
    text-shadow: 0 0 10px var(--dark-1);
}

h2,
h3 {
    padding: 1em 1em 0;
    font-weight: 700;
}

ul {
    list-style-type: square;
    padding: 1rem 1.5rem 0;

    li {
        margin-left: 1em;
        padding: 0.5em 1em;

        a {
            color: var(--primary-1);
        }
    }
}

ul {
    margin-bottom: 2em;
}

ol {
    padding: 1rem 3rem 0;
    margin: 1em 0 3rem;
    max-width: 700px;
    position: relative;

    &::before {
        content: '';
        width: 0.5rem;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background: var(--gray-3);
        z-index: -1;
    }

    li {
        padding: 0.5rem 1.5rem 1rem;
        border-radius: 0.5rem;
        background: var(--gray-2);
        color: var(--dark-1);
    }

    li + li {
        margin-top: 1rem;
    }
}

::marker {
    font-weight: 900;
    color: var(--gray-3);
    font-size: 1.5rem;
}

.satisfaction {
    height: 250px;
    padding: 3em;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;

    span {
        font-size: 1.3rem;
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

.info {
    background: var(--gray-3);
    padding: 2em;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    p {
        color: var(--gray-1);
        &:first-child {
            margin-bottom: 1em;
        }
    }
}
</style>
