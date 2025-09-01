<template>
    <div class="bg-blur" :style="style"></div>
    <div class="mask"></div>
</template>

<script setup>
const props = defineProps({
    url: String,
    size: String,
    position: String
})

const style = {
    backgroundImage: `url(${props.url})`,
    backgroundSize: props.size,
    backgroundPosition: props.position
}
</script>

<style scoped>
.bg-blur {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    background-repeat: no-repeat;
    background-size: contain;
    backdrop-filter: opacity(1);
    filter: blur(63px) contrast(0.6) saturate(2.5);
    z-index: -1;
}

.mask {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgb(20, 18, 24);
    z-index: -2;
}
</style>