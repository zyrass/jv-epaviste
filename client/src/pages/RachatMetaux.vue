<script setup lang="ts"></script>

<template>
    <article class="mt-14">
        <header
            class="bg-slate-900 h-44 flex items-center justify-center sm:h-56 md:h-72"
        >
            <h1
                class="text-yellow-200 flex flex-col gap-4 items-center sm:gap-5 md:gap-6"
            >
                <i class="fas fa-recycle text-4xl sm:text-5xl md:text-6xl"></i>
                <span
                    class="text-3xl sm:text-4xl md:text-5xl text-white text-center"
                    >Rachat Métaux</span
                >
            </h1>
        </header>

        <!-- CONTAINER -->
        <div class="container mx-auto">
            <section>
                <!-- Conditions -->
                <div
                    class="grid grid-cols-1 sm:grid-cols-2 gap-2 p-4 md:p-8 lg:p-12 xl:p-16"
                >
                    <h2 class="text-xl font-bold sm:col-span-2">
                        <i class="fas fa-handshake text-sky-500"></i> - Mon
                        Engagement
                    </h2>

                    <p class="py-4 sm:col-span-1">
                        <small>
                            <strong> Spécialistes du rachat de métaux, </strong>
                            <br />continuellement je suis à la recherche de
                            matériaux à recycler. Je propose des tarifs
                            compétitifs pour une large gamme de métaux.
                        </small>
                    </p>

                    <div
                        class="bg-[url('@/assets/images/handshake.webp')] h-44 bg-center bg-cover sm:col-span-1"
                    ></div>

                    <h2 class="text-xl font-bold my-4 sm:col-span-2">
                        <i class="fas fa-magnet text-sky-500"></i> - Métaux
                        Rachetés
                    </h2>
                    <div
                        class="bg-[url('@/assets/images/metaux.webp')] h-96 bg-center bg-cover sm:col-span-1"
                    ></div>
                    <ul class="*:pl-2 *:mb-4 sm:col-span-1">
                        <li><strong>Cuivre</strong></li>
                        <li><strong>Aluminium</strong></li>
                        <li><strong>Fer</strong></li>
                        <li><strong>Plomb</strong> et <strong>Zinc</strong></li>
                        <li>
                            <strong>Inox</strong> et
                            <strong>Alliages spéciaux</strong>
                        </li>
                    </ul>

                    <h2 class="text-xl font-bold my-4 sm:col-span-2">
                        <i class="fas fa-envelope text-sky-500"></i> -
                        Contactez-nous pour une offre personnalisée
                    </h2>

                    <p class="sm:col-span-2">
                        <small>
                            <strong>Gagnez du temps !</strong> <br />Si vous
                            possédez des ressources mentionnées précédemment,
                            que vous ne souhaitez plus utiliser, veuillez nous
                            contacter en cliquant sur le bouton ci-dessous.
                            <span
                                >Vous serez redirigez sur notre page de
                                contact.</span
                            ></small
                        >
                        <br />
                        <RouterLink
                            class="inline-block bg-yellow-400 uppercase hover:bg-yellow-600 max-w-96 rounded my-4 mx-auto px-6 py-4 text-center font-bold shadow-sm"
                            to="/contact"
                        >
                            Cliquez ici
                        </RouterLink>
                    </p>
                </div>
            </section>
        </div>
    </article>
</template>

<style scoped lang="css"></style>
