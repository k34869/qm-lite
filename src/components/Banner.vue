<template>
    <Carousel :="carouselConfig" items-to-show="1">
        <template v-if="bannersData.result === -1">
            <Slide>
                <div class="carousel-item">
                    <div class="banner-loading skeleton"></div>
                </div>
            </Slide>
        </template>
        <template v-else>
            <Slide v-for="e in bannersData.data">
                <div class="carousel-item">
                    <img :src="e.picUrl" class="banner-pic">
                </div>
            </Slide>
        </template>
        <template v-if="bannersData.result !== -1" #addons>
            <Pagination />
        </template>
    </Carousel>
</template>

<script setup>
import { Carousel, Slide, Pagination } from 'vue3-carousel'

defineProps({
    bannersData: Object
})

const carouselConfig = {
    itemsToShow: 2.5,
    wrapAround: true,
    gap: 15,
    autoplay: 4800,
}
</script>

<style lang="scss" scoped>
.carousel-item {
    width: 100%;
    border-radius: 1.5vw;
    overflow: hidden;
    height: 37vw;

    .banner-loading {
        width: 100%;
        height: 100%;
    }

    .banner-pic {
        width: 100%;
        border-radius: 1.5vw;
        background-color: gray;
    }
}
</style>