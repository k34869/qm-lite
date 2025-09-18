<template>
    <div class="background">
        <div class="background-blur" :style="style"></div>
        <div class="background-mask"></div>
    </div>
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
.background {
    .background-blur {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-repeat: no-repeat;
        background-size: contain;
        backdrop-filter: opacity(1);
        filter: blur(63px) contrast(0.6) saturate(2.5);
        z-index: -1;
    }

    .background-mask {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: rgb(20, 18, 24);
        z-index: -2;
    }
}
</style>