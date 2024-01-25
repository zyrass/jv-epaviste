<template>
    <div class="alert">
        <p>{{ message }}</p>
    </div>
</template>

<script setup lang="ts">
const { message } = defineProps(['message']);
</script>

<style scoped>
.alert {
    background-color: var(--danger-1);
    color: var(--gray-1);
    padding: 10px;
    margin: 10px;
    text-align: center;
}
</style>
