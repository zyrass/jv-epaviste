<script setup lang="ts">
import { onMounted, ref, nextTick } from 'vue';
import {
    LMap,
    LTileLayer,
    LMarker,
    LPopup,
    LGeoJson,
} from '@vue-leaflet/vue-leaflet';
import { Feature, Geometry, GeoJsonProperties } from 'geojson';
import * as L from 'leaflet';
import { Icon, PathOptions, StyleFunction } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import geoJsonData from '../assets/scripts/dataGeoJson.json';

import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png';
import iconUrl from 'leaflet/dist/images/marker-icon.png';
import shadowUrl from 'leaflet/dist/images/marker-shadow.png';

const responseGeoJsonData = geoJsonData as GeoJSON.GeoJsonObject;

Icon.Default.mergeOptions({
    iconRetinaUrl,
    iconUrl,
    shadowUrl,
});

// Définir une interface pour les options de L.geoJSON
interface GeoJsonOptions extends GeoJSON.GeoJsonObject {
    style?: (
        feature: GeoJSON.Feature<GeoJSON.Geometry, GeoJSON.GeoJsonProperties>,
    ) => object;
    onEachFeature?: (
        feature: GeoJSON.Feature<GeoJSON.Geometry, GeoJSON.GeoJsonProperties>,
        layer: L.Layer,
    ) => void;
}

const zoom = 7;

// Interface pour définir la structure des données des marqueurs
interface MarkerData {
    name: string;
    coords: [number, number]; // Tuple de deux nombres pour latitude et longitude
    description: string;
    shadowPane: string;
    title: string;
    alt: string;
}

// Référence à la carte Leaflet
const map = ref<L.Map | null>(null);

// Données des marqueurs
const markersData: MarkerData[] = [
    {
        name: 'Rhône',
        coords: [45.743089515799184, 4.851837158203126],
        description:
            'Déplacement rapide<br><span style="color: green;">moins de 24h</span>',
        shadowPane: 'shadowPane',
        title: 'Rhône',
        alt: 'Rhône',
    }, // Lyon pour le Rhône
    {
        name: 'Isère',
        coords: [45.188529, 5.724524],
        description:
            'Déplacement possible sur rendez-vous<br><span style="color: crimson;">max 48h</span>',
        shadowPane: 'shadowPane',
        title: 'Isère',
        alt: 'Isère',
    }, // Grenoble pour l'Isère
    {
        name: 'Ain',
        coords: [46.205167, 5.225501],
        description:
            'Déplacement possible sur rendez-vous<br><span style="color: crimson;">max 48h</span>',
        shadowPane: 'shadowPane',
        title: 'Ain',
        alt: 'Ain',
    }, // Bourg-en-Bresse pour l'Ain
];

// Fonction pour styliser les régions sur la carte
function style(
    feature: Feature<Geometry, GeoJsonProperties>,
): PathOptions | undefined {
    if (feature) {
        if (feature && feature.properties?.nom === 'Rhône') {
            return {
                weight: 3,
                opacity: 0.7,
                color: '#222',
                dashArray: '3',
                fillOpacity: 0.3,
                fillColor: '#ff0000',
            };
        } else if (feature && feature.properties?.nom === 'Isère') {
            return {
                weight: 3,
                opacity: 0.7,
                color: '#222',
                dashArray: '3',
                fillOpacity: 0.3,
                fillColor: '#FED976',
            };
        } else if (feature && feature.properties?.nom === 'Ain') {
            return {
                weight: 3,
                opacity: 0.7,
                color: '#222',
                dashArray: '3',
                fillOpacity: 0.3,
                fillColor: 'blue ',
            };
        }
        // console.log({ properties: feature.properties });
    } else {
        // Retourner un style par défaut si properties est null ou inexistant
        return {
            // ... style par défaut
        };
    }
}

// Fonction appelée lors du déplacement de la carte
function onMapMove() {
    if (map.value) {
        const center = map.value.getCenter();
        console.log(`Latitude: ${center.lat}, Longitude: ${center.lng}`);
        // Vous pouvez également afficher ces coordonnées dans votre interface utilisateur
    }
}

// Fonction exécutée après le rendu initial
onMounted(async () => {
    await nextTick();

    // Initialisation de la carte Leaflet
    map.value = L.map('map').setView([45.75455153454797, 5.361328125], 7); // Coordonnées de Lyon

    // Vérifiez d'abord si la carte n'est pas déjà initialisée
    if (map.value) {
        map.value.addEventListener('moveend', onMapMove); // Écoute du déplacement de la carte
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 18,
            attribution:
                '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        }).addTo(map.value as L.Map);

        // Ajout des marqueurs sur la carte
        markersData.forEach((marker) => {
            L.marker(marker.coords)
                .addTo(map.value as L.Map)
                .bindPopup(
                    `<strong>${marker.name}</strong><br><br>${marker.description}`,
                );
        });

        // Ajout des données GeoJSON à la carte avec stylisation
        // Utiliser l'interface dans la création de la couche GeoJSON
        L.geoJSON(geoJsonData as GeoJsonOptions, {
            style: style as StyleFunction<GeoJsonProperties>, // Utiliser style comme StyleFunction,
        }).addTo(map.value as L.Map);
    }
});
</script>

<template>
    <article class="mt-14">
        <header
            class="bg-slate-900 h-44 flex items-center justify-center sm:h-56 md:h-72"
        >
            <h1
                class="text-yellow-200 flex flex-col gap-4 items-center sm:gap-5 md:gap-6"
            >
                <i
                    class="fas fa-car-crash text-4xl sm:text-5xl md:text-6xl"
                ></i>
                <span class="text-3xl sm:text-4xl md:text-5xl text-white"
                    >Enlèvement d'Épaves</span
                >
            </h1>
        </header>

        <!-- CONTAINER -->
        <div class="container py-4 mx-auto sm:py-5 md:py-6 lg:py-8 xl:py-9">
            <section class="pb-4 px-4 sm:px-8 sm:pb-8 w-fit">
                <h2 class="my-4 text-xl py-2 font-bold">
                    <i class="fa-solid fa-question text-sky-500"></i> - Comment
                    ça marche ?
                </h2>
                <p>
                    L'enlèvement d'épaves est un processus simple et rapide avec
                    JV Epaviste. Suivez ces étapes pour dire adieu à votre vieux
                    véhicule en toute sécurité.
                </p>

                <div class="my-4 sm:my-8">
                    <ol
                        class="grid grid-cols-1 gap-4 *:bg-slate-100 hover:*:bg-slate-200 sm:grid-cols-2 sm:gap-6"
                    >
                        <li
                            class="first:mt-0 border p-2 rounded shadow-sm sm:shadow-none"
                        >
                            <h3 class="text-md pb-2 font-bold">
                                <i
                                    class="fas fa-phone-alt text-sky-400 mr-4"
                                ></i>
                                <strong>Contactez-nous :</strong>
                            </h3>
                            <p class="text-sm">
                                Remplissez notre formulaire en ligne ou
                                appelez-nous directement. Nous planifierons un
                                rendez-vous selon votre convenance, que vous
                                soyez dans le Rhône, l'Ain ou l'Isère.
                            </p>
                        </li>
                        <li class="border p-2 rounded shadow-sm sm:shadow-none">
                            <h3 class="text-md pb-2 font-bold">
                                <i class="fas fa-tools text-sky-400 mr-4"></i>
                                <strong>Préparation du véhicule :</strong>
                            </h3>
                            <p class="text-sm">
                                Assurez-vous que le véhicule est accessible et
                                que tous les objets personnels ont été retirés.
                            </p>
                        </li>
                        <li class="border p-2 rounded shadow-sm sm:shadow-none">
                            <h3 class="text-md pb-2 font-bold">
                                <i
                                    class="fas fa-truck-moving text-sky-400 mr-4"
                                ></i>
                                <strong>Rendez-vous sur place :</strong>
                            </h3>
                            <p class="text-sm">
                                Notre équipe professionnelle se rendra à
                                l'adresse indiquée pour évaluer l'état de
                                l'épave.
                            </p>
                        </li>
                        <li class="border p-2 rounded shadow-sm sm:shadow-none">
                            <h3 class="text-md pb-2 font-bold">
                                <i class="fas fa-recycle text-sky-400 mr-4"></i>
                                <strong>Enlèvement et recyclage :</strong>
                            </h3>
                            <p class="text-sm">
                                Nous enlevons l'épave et nous occupons de toutes
                                les démarches pour son recyclage écologique.
                            </p>
                        </li>
                        <li class="border p-2 rounded shadow-sm sm:shadow-none">
                            <h3 class="text-md pb-2 font-bold">
                                <i
                                    class="fas fa-file-alt text-sky-400 mr-4"
                                ></i>
                                <strong>Certificat de destruction :</strong>
                            </h3>
                            <p class="text-sm">
                                Vous recevrez un certificat de destruction,
                                preuve que votre véhicule a été traité
                                conformément à la réglementation.
                            </p>
                        </li>
                    </ol>
                </div>
            </section>
        </div>
        <div id="map" style="height: calc(50vh - 53px); width: 100vw">
            <l-map
                ref="map"
                :zoom="zoom"
                :center="[45.75455153454797, 5.361328125]"
            >
                <l-tile-layer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    layer-type="base"
                    name="OpenStreetMap"
                ></l-tile-layer>
                <!-- Ajout des marqueurs sur la carte -->
                <l-marker
                    v-for="(marker, index) in markersData"
                    :key="index"
                    :lat-lng="marker.coords"
                >
                    <l-popup>
                        <strong>{{ marker.name }}</strong>
                        <br /><br />
                        {{ marker.description }}
                    </l-popup>
                </l-marker>

                <!-- Ajout des données GeoJSON à la carte avec stylisation -->
                <l-geo-json
                    :geojson="responseGeoJsonData"
                    :options="{ style: style }"
                ></l-geo-json>
            </l-map>
        </div>
        <div
            class="h-80 bg-[url('@/assets/images/autos/auto-train.webp')] bg-center bg-no-repeat lg:h-96 bg-cover"
        ></div>
    </article>
</template>

<style scoped lang="css"></style>
