<script setup lang="ts"></script>

<template>
    <div class="container">
        <h1>Oops!</h1>
        <p>Cette page n'existe pas</p>
    </div>
</template>

<style scoped lang="scss">
.container {
    width: 100%;
    height: calc(100vh - 56px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    background-color: var(--danger-1);
    z-index: 0;
    box-shadow: 0 0 100px var(--dark-2) inset;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-image: url('@/assets/images/autos/auto-2.webp');
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        opacity: 0.2;
        z-index: -1;
    }

    h1,
    p {
        z-index: 2;
    }

    h1 {
        font-size: 100px;
        color: var(--gray-1);
        text-shadow: 0 0 10px var(--dark-1);
        padding-bottom: 4rem;
        font-weight: 900;
    }
    p {
        font-style: italic;
        font-weight: 400;
        letter-spacing: 2.5px;
        background-color: var(--gray-1);
        width: 100%;
        padding: 1rem;
        box-shadow: 0 1px 15px var(--dark-1), 0 -1px 15px var(--dark-1);
    }
}
</style>
