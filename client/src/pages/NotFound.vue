<script setup lang="ts"></script>

<template>
    <article class="bg-red-800 flex-auto h-screen mt-14 flex flex-col pt-20  justify-start items-center">
        <h1 class="text-9xl mb-20 text-red-300">404</h1>
        <p class="bg-slate-100 p-10 opacity-95 w-full text-center">
            la page que vous avez demandée est introuvable.

            <div class="text-sky-400 font-bold my-8 text-center ">
                <RouterLink to="/" class="py-8">Retour à la page d'accueil</RouterLink>
            </div>
        </p>
        <div class="bg-[url('@/assets/images/autos/auto-2.webp')] h-full bg-cover w-full bg-center"></div>

    </article>
</template>

<style scoped lang="css">
/*/ @use '@/assets/scss/main.scss' as *;
// article {
//     width: 100%;
//     height: 100%;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
//     position: relative;
//     background-color: $danger-1;
//     z-index: 0;
//     box-shadow: 0 0 100px $black-1 inset;

//     &::before {
//         content: '';
//         position: absolute;
//         top: 0;
//         left: 0;
//         right: 0;
//         bottom: 0;
//         background-image: url('@/assets/images/autos/auto-2.webp');
//         background-position: center;
//         background-repeat: no-repeat;
//         background-size: cover;
//         opacity: 0.2;
//         z-index: -1;
//     }

//     h1,
//     p {
//         z-index: 2;
//     }

//     h1 {
//         font-size: 90px;
//         color: $gray-3;
//         text-shadow: 0 0 10px $black-1;
//         padding-bottom: 4rem;
//         font-weight: 900;
//     }
//     p {
//         text-align: center;
//         font-style: italic;
//         font-weight: 400;
//         background-color: $gray-3;
//         width: 100%;
//         padding: 1rem;
//         box-shadow: 0 1px 15px $black-1, 0 -1px 15px $black-1;

//         div {
//             margin: 2rem 0;
//             a {
//                 background-color: $info-1;
//                 color: $white;
//                 padding: 1rem 2rem;
//                 margin: 1rem 0;
//                 border: 1px solid $black-3;
//             }
//         }
//     }
// }*/
</style>
