<template>
    <article class="mt-14">
        <header
            class="bg-slate-900 h-44 flex items-center justify-center sm:h-56 md:h-72"
        >
            <h1
                class="text-yellow-200 flex flex-col gap-4 items-center sm:gap-5 md:gap-6"
            >
                <i
                    class="fa-solid fa-scale-balanced text-4xl sm:text-5xl md:text-6xl"
                ></i>
                <span
                    class="text-3xl sm:text-4xl md:text-5xl text-white text-center"
                    >Mentions Légales</span
                >
            </h1>
        </header>
        <div class="container mx-auto lg:p-16">
            <section
                class="flex-auto p-4 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:p-8 lg:grid-cols-3"
            >
                <fieldset
                    class="border py-4 px-6 mx-auto rounded border-gray-900 bg-slate-100 relative"
                >
                    <legend
                        class="px-5 text-center text-slate-800 text-lg font-bold"
                    >
                        Identité de l'entreprise
                    </legend>
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
                            Récupération de ferrailles sans transformation,
                            transport de véhicules épaves VHU pour destruction
                        </dd>
                    </dl>
                    <i
                        class="fa-solid fa-address-card absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-9xl opacity-20 text-slate-800"
                    ></i>
                </fieldset>

                <fieldset
                    class="border py-4 px-6 mx-auto rounded border-gray-900 bg-green-100 relative"
                >
                    <legend
                        class="px-5 text-center text-green-800 text-lg font-bold"
                    >
                        Info' sur l'hébergeur
                    </legend>
                    <dl>
                        <dt>Nom</dt>
                        <dd>OVH</dd>
                        <dt>Téléphone</dt>
                        <dd>1007</dd>
                        <dt>Adresse postale</dt>
                        <dd>2 RUE KELLERMANN 59100 ROUBAIX</dd>
                    </dl>
                    <i
                        class="fa-solid fa-server absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-9xl opacity-20 text-green-800"
                    ></i>
                </fieldset>

                <fieldset
                    class="border py-4 px-6 mx-auto rounded border-gray-900 bg-sky-100 relative"
                >
                    <legend
                        class="px-5 text-center text-sky-800 text-lg font-bold"
                    >
                        Responsable du site
                    </legend>
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
                                    Technicien de maintenance informatique micro
                                    et réseaux
                                </li>
                            </ul>
                        </dd>
                        <dt>Formation actuellement</dt>
                        <dd>Expert en cybersécurité à l'IT-Akademy (bac+5)</dd>
                    </dl>
                    <i
                        class="fa-solid fa-code absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-9xl opacity-20 text-sky-800"
                    ></i>
                </fieldset>

                <fieldset
                    class="border py-4 px-6 mx-auto rounded border-gray-900 bg-red-100 relative lg:col-span-3"
                >
                    <legend
                        class="px-5 text-center text-red-800 text-lg font-bold"
                    >
                        RGPD
                    </legend>
                    <dl>
                        <dt>Responsable du traitement des données</dt>
                        <dd>JV-EPAVISTE</dd>
                        <dt>Finalité de la collecte de données</dt>
                        <dd>
                            Les données personnelles sont collectées dans le
                            seul but de contacter les utilisateurs en réponse à
                            leurs demandes ou pour fournir des informations sur
                            nos services.
                        </dd>
                        <dt>Base juridique de la collecte</dt>
                        <dd>Le consentement de l'utilisateur.</dd>
                        <dt>Types de données collectées</dt>
                        <dd>
                            Nous pouvons collecter des données telles que le
                            nom, l'adresse e-mail, le numéro de téléphone etc.
                        </dd>
                        <dt>Durée de conservation</dt>
                        <dd>
                            Les emails sont conservées aussi longtemps que
                            nécessaire pour répondre à la demande de
                            l'utilisateur ou pour respecter les obligations
                            légales.
                        </dd>
                        <dt>
                            Contact pour les questions liées à la vie privée
                        </dt>
                        <dd><strong>auto69120@gmail.com</strong></dd>
                        <dt>Cookies</dt>
                        <dd>
                            Nous utilisons des cookies à des fins d'analyse de
                            site Web.
                        </dd>
                    </dl>
                    <i
                        class="fa-solid fa-shield absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-9xl opacity-20 text-red-800"
                    ></i>
                </fieldset>
            </section>
        </div>
        <div
            class="h-80 bg-[url('@/assets/images/autos/bus-1.webp')] bg-center bg-no-repeat lg:h-96 bg-cover"
        ></div>

        <!--
            ===========================================================================
            A EDITER
            ===========================================================================
        -->
    </article>
</template>

<script setup lang="ts"></script>

<style scoped lang="css">
dt {
    font-weight: bold;
    color: #0066cc;
    margin-top: 10px;
}

dd {
    margin-left: 20px;
    margin-bottom: 10px;
}
</style>
