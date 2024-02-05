<template>
    <div
        class="mx-4 500 py-2 px-4 my-8 w-max-80 shadow-lg sm:w-96 sm:mx-auto md:mx-16"
        :class="[
            getTypeClass(typeInfo),
            getHeightClass(heightInfo),
            getwidthClass(widthInfo),
        ]"
        :style="{ height: computedHeight, width: computedWidth }"
    >
        <p>
            <small>{{ message }}</small>
        </p>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const { message, typeInfo, heightInfo, widthInfo } = defineProps([
    'message',
    'typeInfo',
    'heightInfo',
    'widthInfo',
]);

const computedHeight = computed(() => `${heightInfo}px`);
const computedWidth = computed(() => `${widthInfo}%`);

// Fonction pour obtenir la classe en fonction du type d'alerte
const getTypeClass = (type: string) => {
    return `alert-${type}`;
};
const getHeightClass = (height: number) => {
    return `${height}px`;
};
const getwidthClass = (width: number) => {
    return `${width}px`;
};
</script>

<style scoped lang="css">
.alert-info {
    --tw-bg-opacity: 1;
    background-color: rgb(186 230 253 / var(--tw-bg-opacity));
    border-left: 8px solid rgb(7 89 133 / var(--tw-bg-opacity));
    color: rgb(7 89 133 / var(--tw-bg-opacity));
}
.alert-success {
    --tw-bg-opacity: 1;
    background-color: rgb(187 247 208 / var(--tw-bg-opacity));
    border-left: 8px solid rgb(21 128 61 / var(--tw-bg-opacity));
    color: rgb(21 128 61 / var(--tw-bg-opacity));
}
.alert-warning {
    --tw-bg-opacity: 1;
    background-color: rgb(254 240 138 / var(--tw-bg-opacity));
    border-left: 8px solid rgb(161 98 7 / var(--tw-bg-opacity));
    color: rgb(161 98 7 / var(--tw-bg-opacity));
}
.alert-danger {
    --tw-bg-opacity: 1;
    background-color: rgb(254 202 202 / var(--tw-bg-opacity));
    border-left: 8px solid rgb(185 28 28 / var(--tw-bg-opacity));
    color: rgb(185 28 28 / var(--tw-bg-opacity));
}
</style>
