<template>
    <div class="container">
        <h1><i class="fa-solid fa-scale-balanced"></i> - Mentions Légales</h1>
        <fieldset>
            <legend>Identité de l'entreprise</legend>
            <dl>
                <dt>Noms commerciaux</dt>
                <dd>M JEROME VIGOUREUX</dd>
                <dt>Téléphone</dt>
                <dd>06 46 89 65 78</dd>
                <dt>Date création entreprise</dt>
                <dd>08-04-2015</dd>
                <dt>Numéro SIREN</dt>
                <dd>810802926</dd>
                <dt>Numéro SIRET (siège)</dt>
                <dd>81080292600016</dd>
                <dt>Convention collective déduite</dt>
                <dd>Industries et commerce de la récupération (637)</dd>
                <dt>Adresse postale</dt>
                <dd>RUE FRANKLIN 69120 VAULX-EN-VELIN</dd>
                <dt>Activité principale déclarée</dt>
                <dd>
                    Récupération de ferrailles sans transformation, transport de
                    véhicules épaves VHU pour destruction
                </dd>
            </dl>
            <i class="fa-solid fa-address-card"></i>
        </fieldset>

        <hr />

        <fieldset>
            <legend>Info' sur l'hébergeur</legend>
            <dl>
                <dt>Nom</dt>
                <dd>OVH</dd>
                <dt>Téléphone</dt>
                <dd>1007</dd>
                <dt>Adresse postale</dt>
                <dd>2 RUE KELLERMANN 59100 ROUBAIX</dd>
            </dl>
            <i class="fa-solid fa-server"></i>
        </fieldset>

        <hr />

        <fieldset>
            <legend>Responsable du site</legend>
            <dl>
                <dt>Nom</dt>
                <dd>M GUILLON ALAIN</dd>
                <dt>Téléphone</dt>
                <dd>07.88.05.40.95</dd>
                <dt>Adresse postale</dt>
                <dd>Situé sur Meyzieu</dd>
                <dt>Diplôme</dt>
                <dd>
                    <ul>
                        <li>Développeur Fullstack</li>
                        <li>
                            Technicien de maintenance informatique micro et
                            réseaux
                        </li>
                    </ul>
                </dd>
                <dt>Formation actuellement</dt>
                <dd>Expert en cybersécurité à l'IT-Akademy (bac+5)</dd>
            </dl>
            <i class="fa-solid fa-code"></i>
        </fieldset>
    </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.container {
    width: 100%;
    margin: 25px;
    text-align: left;
    color: var(--gray-3);
}

h1,
h2 {
    text-align: center;
    padding-bottom: 25px;
}

h2 {
    padding-top: 12px;
}

fieldset {
    border: 2px solid var(--gray-3);
    border-radius: 5px;
    padding: 5px 20px;
    margin: 12px 1em 20px;
    position: relative;
    z-index: 0;
    legend {
        padding: 0 10px;
        color: var(--danger-1);
        font-weight: bold;
        font-size: 1.2em;
    }

    dl {
        margin: 0;
        padding: 0;
    }

    dt {
        font-weight: bold;
        color: #0066cc;
        margin-top: 10px;
    }

    dd {
        margin-left: 20px;
        margin-bottom: 10px;
    }
    i {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 200px;
        opacity: 0.1;
    }
}

p {
    margin-bottom: 15px;
    color: var(--dark-1);
}
</style>
