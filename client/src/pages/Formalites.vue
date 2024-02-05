<script setup lang="ts"></script>

<template>
    <article class="mt-14">
        <header
            class="bg-slate-900 h-44 flex items-center justify-center sm:h-56 md:h-72"
        >
            <h1
                class="text-yellow-200 flex flex-col gap-4 items-center sm:gap-5 md:gap-6"
            >
                <i class="fas fa-file-alt text-4xl sm:text-5xl md:text-6xl"></i>
                <span
                    class="text-3xl sm:text-4xl md:text-5xl text-white text-center"
                    >Formalités Administratives</span
                >
            </h1>
        </header>

        <!-- CONTAINER -->
        <div class="container mx-auto">
            <section>
                <!-- Conditions -->
                <div class="grid grid-cols-1 p-4 md:p-8 lg:p-12 xl:p-16">
                    <h2 class="text-xl font-bold">
                        <i class="fas fa-list-alt text-sky-500"></i> -
                        Conditions
                    </h2>

                    <p class="pb-4">
                        <small>
                            Veuillez prendre connaissance des conditions
                            requises pour toute demande d'enlèvement de véhicule
                            hors d'usage.
                        </small>
                    </p>

                    <div
                        class="grid grid-cols-1 h-fit md:grid-cols-3 md:gap-4 lg:grid-cols-2 xl:grid-cols-2 lg:gap-8 xl:gap-16"
                    >
                        <ul class="*:pl-2 *:mb-4 col-span-2 lg:col-span-1">
                            <li>
                                Veuillez compléter le formulaire de cession de
                                véhicule, disponible sur le site officiel du
                                service public à l'adresse suivante&nbsp;
                                <a
                                    class="text-sky-600 font-bold"
                                    href="https://www.service-public.fr/simulateur/calcul/15776"
                                    >https://Service-public.fr/simulateur/calcul/15776</a
                                >.<br />
                                <strong class="text-red-600">
                                    Notez que je peux le faire directement sur
                                    place pour vous facilitez les démarches.
                                </strong>
                            </li>
                            <li>
                                <strong
                                    >Certificat d'Immatriculation (Carte
                                    Grise)</strong
                                >
                                : Assurez-vous de posséder le certificat
                                d'immatriculation du véhicule, communément
                                appelé carte grise.
                            </li>
                            <li>
                                <strong>Copie de Pièce d'Identité</strong> : Il
                                est nécessaire de fournir une copie de votre
                                pièce d'identité valide.
                            </li>
                            <li>
                                <strong>Certificat de Non-Gage</strong> :
                                Obtenez un certificat de non-gage depuis le site
                                du Ministère de l'Intérieur français, accessible
                                via le lien suivant
                                <a
                                    class="text-sky-600 font-bold"
                                    href="https://siv.interieur.gouv.fr/map-usg-ui/do/accueil_certificat"
                                    >https://siv.interieur.gouv.fr/map-usg-ui/do/accueil_certificat</a
                                >.
                            </li>
                        </ul>
                        <div
                            class="bg-[url('@/assets/images/autos/auto-portrait.webp')] min-h-96 bg-center bg-cover"
                        ></div>
                    </div>
                </div>

                <!-- Enlèvement -->
                <div class="grid grid-cols-1 p-4 md:p-8 lg:p-12 xl:p-16">
                    <h2 class="text-xl font-bold">
                        <i class="fas fa-truck-pickup text-sky-500"></i> -
                        Enlèvement
                    </h2>

                    <p class="col-span-2 pb-8">
                        Lors de l'enlèvement du véhicule, veuillez vous assurer
                        de respecter les points suivants
                    </p>

                    <div
                        class="grid grid-cols-1 h-fit md:grid-cols-3 md:gap-4 lg:grid-cols-2 xl:grid-cols-2 lg:gap-8 xl:gap-16"
                    >
                        <div
                            class="bg-[url('@/assets/images/autos/auto-night.webp')] min-h-96 bg-center bg-cover"
                        ></div>

                        <ol class="*:pl-2 *:mb-4 col-span-2 lg:col-span-1">
                            <li>
                                <strong
                                    >Barrage de la Carte Grise pour
                                    Cession</strong
                                >
                                : Au moment de l'intervention, la carte grise
                                doit être barrée spécifiquement pour la cession
                                et être destinée à la destruction. Elle doit
                                comporter la mention « cédée le XX/XX/XXX à
                                XXhXX», écrite de façon lisible et inaltérable.
                            </li>
                            <li>
                                <strong>Signature du Propriétaire</strong> : La
                                carte grise barrée doit être signée par le
                                propriétaire du véhicule.
                                <strong>C'est une obligation légale</strong>
                            </li>
                            <li>
                                <strong
                                    >Remise des Documents à l'Épaviste</strong
                                >
                                : Fournissez le certificat de non-gage et la
                                copie de votre pièce d'identité à l'épaviste.
                                Ces documents sont essentiels pour que
                                l'épaviste puisse transporter votre épave vers
                                un centre VHU agréé, tout en garantissant que le
                                véhicule n'est sujet à aucune restriction
                                administrative mentionnée dans le certificat de
                                non-gage.
                            </li>
                        </ol>
                    </div>
                </div>
            </section>

            <!-- SATISFACTION -->
            <section
                class="h-44 bg-gray-200 p-6 text-black flex flex-col justify-evenly items-center"
            >
                <routerLink
                    class="bg-yellow-400 uppercase hover:bg-yellow-600 max-w-96 rounded mx-auto px-6 py-4 text-center font-bold shadow-sm"
                    to="/contact"
                >
                    Contactez-nous
                </routerLink>
                <span class="font-bold text-slate-900">
                    <i class="fas fa-thumbs-up text-2xl"></i>
                    Satisfaction Garantie à 100%
                </span>
            </section>

            <!-- INFO -->
            <section
                class="h-fit bg-slate-700 px-2 py-8 text-white flex flex-col gap-4 justify-evenly *:first-letter:text-xl *:first-letter:text-yellow-200 *:first-letter:pr-1 *:w-3/4 lg:*:w-2/4 *:mx-auto"
            >
                <p class="">
                    Mon réseau d'épavistes professionnels est à votre
                    disposition pour offrir une solution efficace et rapide pour
                    l'enlèvement de votre véhicule en fin de vie vers un centre
                    VHU agréé.
                </p>
                <p>
                    Nos spécialistes interviennent promptement, tout en
                    garantissant le respect strict des normes de sécurité et en
                    assurant une totale transparence tout au long du processus.
                </p>
            </section>
        </div>
    </article>
</template>

<style scoped lang="css"></style>
