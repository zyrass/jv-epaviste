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
    <div class="container">
        <article>
            <header>
                <h1>
                    <i class="fas fa-car-crash"></i>
                    <div>Enlèvement d'Épaves</div>
                </h1>
            </header>
            <section id="procedure">
                <h2>Comment ça marche ?</h2>
                <p>
                    L'enlèvement d'épaves est un processus simple et rapide avec
                    JV Epaviste. Suivez ces étapes pour dire adieu à votre vieux
                    véhicule en toute sécurité :
                </p>
                <ol>
                    <ol>
                        <li>
                            <h3>
                                <i class="fas fa-phone-alt"></i>
                                <strong>Contactez-nous :</strong>
                            </h3>
                            Remplissez notre formulaire en ligne ou appelez-nous
                            directement. Nous planifierons un rendez-vous selon
                            votre convenance, que vous soyez dans le Rhône,
                            l'Ain ou l'Isère.
                        </li>
                        <li>
                            <h3>
                                <i class="fas fa-tools"></i>
                                <strong>Préparation du véhicule :</strong>
                            </h3>
                            Assurez-vous que le véhicule est accessible et que
                            tous les objets personnels ont été retirés.
                        </li>
                        <li>
                            <h3>
                                <i class="fas fa-truck-moving"></i>
                                <strong>Rendez-vous sur place :</strong>
                            </h3>
                            Notre équipe professionnelle se rendra à l'adresse
                            indiquée pour évaluer l'état de l'épave.
                        </li>
                        <li>
                            <h3>
                                <i class="fas fa-recycle"></i>
                                <strong>Enlèvement et recyclage :</strong>
                            </h3>
                            Nous enlevons l'épave et nous occupons de toutes les
                            démarches pour son recyclage écologique.
                        </li>
                        <li>
                            <h3>
                                <i class="fas fa-file-alt"></i>
                                <strong>Certificat de destruction :</strong>
                            </h3>
                            Vous recevrez un certificat de destruction, preuve
                            que votre véhicule a été traité conformément à la
                            réglementation.
                        </li>
                    </ol>
                </ol>
            </section>
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
                        :geojson="geoJsonData as GeoJSON.GeoJsonObject"
                        :options="{ style: style }"
                    ></l-geo-json>
                </l-map>
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

    header {
        width: 100vw;
        color: var(--gray-1);
        height: 200px;
        display: flex;
        align-items: center;
        text-align: center;
        background-color: var(--gray-3);

        h1 {
            text-shadow: 0 0 10px var(--dark-1);
            text-transform: uppercase;
            height: 100%;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-evenly;

            i {
                color: var(--warning-1);
            }

            span {
                height: 70%;
            }

            div {
                height: 30%;
            }
        }
    }
}

h2,
h3 {
    padding: 0;
    font-weight: 700;
}

article {
    section {
        padding: 3rem 1rem 0;

        p {
            padding-top: 2rem 0 1em;
            letter-spacing: 1.6px;
        }

        .div-age {
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: var(--success-1);
            color: var(--gray-1);
            font-size: 1.5rem;
            font-weight: bold;
            margin: 1rem 0;
            padding: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        ol {
            padding: 1rem 0.5rem 0;
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

                h3 {
                    margin-bottom: 1rem;
                }

                i {
                    padding-right: 0.5rem;
                    color: var(--primary-1);
                }
                strong {
                    text-transform: uppercase;
                }
            }

            li + li {
                margin-top: 1rem;
            }
        }
    }
}
</style>
