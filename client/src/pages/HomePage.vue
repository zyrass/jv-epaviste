<script setup lang="ts"></script>

<template>
    <article>
        <header
            class="min-h-screen mt-14 w-full bg-center bg-cover bg-[url(@/assets/images/autos/auto-bois.webp)] grid grid-cols-1 gap-2 items-center content-start"
        >
            <h1
                class="text-center flex flex-col mt-20 gap-1 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white"
            >
                <span class="text-amber-500 mb-5">Jérôme Vigoureux</span>

                <span>Épaviste</span>
                <span>Ferrailleur</span>
            </h1>

            <p
                class="w-3/4 mb-2 mx-auto p-4 md:p-6 lg:p-8 xl:p-10 rounded mt-8 bg-slate-200 opacity-90 md:w-10/12 lg:w-8/12 xl:w-6/12"
            >
                Jérôme VIGOUREUX à votre service pour tout type d'enlèvement
                d'épaves, <strong>agréé VHU</strong> avec
                <strong>8 ans d'expérience</strong>. Je me déplace dans
                <span class="text-sky-700"><strong>l'Ain</strong></span
                >, <span class="text-sky-700"><strong>l'Isère</strong></span> et
                <span class="text-sky-700"><strong>le Rhône</strong></span
                >.<br /><br />
                Faites moi confiance, je mets mon expertise pour vous permettre
                de débarrasser vos épaves en toute tranquillité.
            </p>

            <RouterLink
                to="/contact"
                class="mt-5 bg-yellow-400 uppercase hover:bg-yellow-600 max-w-96 rounded mx-auto px-6 py-4 text-center font-bold shadow-sm"
                >Contactez-nous</RouterLink
            >

            <a
                href="https://www.iubenda.com/privacy-policy/99528726"
                class="iubenda-black iubenda-noiframe iubenda-embed iubenda-noiframe"
                title="Politique de confidentialité "
                >Politique de confidentialité</a
            >
            <script type="text/javascript">
                (function (w, d) {
                    var loader = function () {
                        var s = d.createElement('script'),
                            tag = d.getElementsByTagName('script')[0];
                        s.src = 'https://cdn.iubenda.com/iubenda.js';
                        tag.parentNode.insertBefore(s, tag);
                    };
                    if (w.addEventListener) {
                        w.addEventListener('load', loader, false);
                    } else if (w.attachEvent) {
                        w.attachEvent('onload', loader);
                    } else {
                        w.onload = loader;
                    }
                })(window, document);
            </script>
            <a
                href="https://www.iubenda.com/privacy-policy/99528726/cookie-policy"
                class="iubenda-black iubenda-noiframe iubenda-embed iubenda-noiframe"
                title="Politique relative aux Cookies "
                >Politique relative aux Cookies</a
            >
            <script type="text/javascript">
                (function (w, d) {
                    var loader = function () {
                        var s = d.createElement('script'),
                            tag = d.getElementsByTagName('script')[0];
                        s.src = 'https://cdn.iubenda.com/iubenda.js';
                        tag.parentNode.insertBefore(s, tag);
                    };
                    if (w.addEventListener) {
                        w.addEventListener('load', loader, false);
                    } else if (w.attachEvent) {
                        w.attachEvent('onload', loader);
                    } else {
                        w.onload = loader;
                    }
                })(window, document);
            </script>
        </header>

        <!-- CONTAINER -->
        <div class="container py-4 mx-auto sm:py-5 md:py-6 lg:py-8 xl:py-9">
            <section class="pb-4 px-4 sm:px-8 sm:pb-8 w-fit">
                <h2 class="my-4 text-xl py-2 font-bold">
                    <i class="fas fa-handshake text-sky-500"></i> - Service
                    d'épaviste VHU pour un environnement propre
                </h2>
                <p class="text-sm mb-8">
                    Confiez-moi l'enlèvement de votre épave pour une destruction
                    respectueuse de l'environnement. En tant qu'épaviste
                    certifié, le m'assure du démontage, la dépollution, et le
                    recyclage des véhicules hors d'usage.
                </p>

                <div
                    class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-2 sm:gap-3 md:gap-4 lg:gap-5 xl:gap-5 *:bg-slate-100 hover:*:bg-slate-200"
                >
                    <div class="border rounded p-4 shadow-sm">
                        <h3 class="text-md py-2 font-bold">
                            <i class="fas fa-recycle text-sky-500"></i> -
                            Choisir un épaviste agréé : un acte responsable
                        </h3>
                        <p>
                            Faire appel à un professionnel agréé garantie la
                            conformité légale de l'enlèvement de votre épave et
                            contribue à la protection de l'environnement.<br /><br />
                            <span class="text-green-600"
                                >Je vous offre également une assistance pour les
                                démarches administratives</span
                            >.
                        </p>
                    </div>

                    <div class="border rounded p-4 shadow-sm">
                        <h3 class="text-md py-2 font-bold">
                            <i class="fas fa-recycle text-sky-500"></i> -
                            Préparation simplifiée de l'enlèvement
                        </h3>

                        <p>
                            Je vous facilite la préparation de l'enlèvement de
                            votre épave. Il vous suffit de rassembler quelques
                            documents clés :
                            <strong>le certificat de non-gage</strong>,
                            <strong>une pièce d'identité valide</strong>, et je
                            me charge de remplir le formulaire
                            <span class="text-red-400"
                                ><strong>Cerfa n°15776*01</strong></span
                            >
                            avec vous.<br /><br />
                            <span class="text-green-600"
                                >Mon objectif est de rendre le processus aussi
                                simple et transparent que possible.</span
                            >
                        </p>
                    </div>
                    <div
                        class="border rounded p-4 shadow-sm sm:col-span-2 xl:col-span-1"
                    >
                        <h3 class="text-md py-2 font-bold">
                            <i class="fas fa-file text-sky-500"></i>
                            - Formalités administratives prises en charge
                        </h3>
                        <p>
                            Avec JV-Épaviste, vous bénéficiez d'une assistance
                            complète pour toutes les démarches administratives.
                            Suite à l'enlèvement de l'épave, nous vous guidons
                            et prenons en charge les formalités auprès des
                            autorités compétentes. Profitez d'une expérience
                            sans tracas, où le plus gros du travail
                            administratif est géré par nos soins.
                        </p>
                    </div>
                </div>
            </section>

            <div
                class="mt-8 h-56 w-full flex items-center justify-center bg-slate-700"
            >
                <p
                    class="text-white px-8 md:w-3/4 lg:w-3/5 sm:text-center sm:text-lg sm:px-14"
                >
                    Choisissez JV-Épaviste pour un enlèvement d'épaves
                    <span class="text-green-400">gratuit</span>,
                    <span class="text-green-400">responsable</span> et
                    <span class="text-green-400"
                        >conforme à la réglementation</span
                    >, avec
                    <span class="text-yellow-400"
                        >la garantie d'un accompagnement professionnel</span
                    >
                    à chaque étape.
                </p>
            </div>
            <div
                class="bg-[url('@/assets/images/camion_jerome.webp')] h-72 bg-cover bg-top sm:h-80 md:h-96"
            ></div>
            <div
                class="h-60 flex items-center justify-normal w-full relative md:h-60"
            >
                <p class="flex flex-col items-center pr-4 w-full">
                    <span
                        class="text-4xl md:text-6xl mb-4 text-red-700 font-black"
                        >06 46 89 65 78</span
                    >
                    <small
                        class="flex flex-col items-center font-bold text-lg md:text-2xl"
                    >
                        <span>7 jours sur 7</span>
                        <span>de 7 h 00 à 20 h 00</span>
                    </small>
                </p>
                <i
                    class="fa-solid fa-phone absolute text-9xl opacity-30 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                ></i>
            </div>
        </div>
        <!-- FIN CONTAINER -->
    </article>
</template>

<style scoped lang="css"></style>
