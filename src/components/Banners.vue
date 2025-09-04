<template>
    <div class="wrap">
        <Carousel :="{ itemsToShow: 1, wrapAround: true, gap: 0, autoplay: 4800 }">
            <template v-if="data === -1">
                <Slide>
                    <div class="carousel-item"></div>
                </Slide>
            </template>
            <template v-else>
                <Slide v-for="e in data">
                    <div class="carousel-item">
                        <img :src="e.picUrl" class="picture">
                    </div>
                </Slide>
            </template>
            <template v-if="data !== -1" #addons>
                <Pagination />
            </template>
        </Carousel>
    </div>
</template>

<script setup>
import { Carousel, Slide, Pagination } from 'vue3-carousel'

defineProps({
    data: [ Array, Number ]
})
</script>

<style scoped>
.wrap {
    width: 100vw;
}

.carousel-item {
    width: 100%;
    margin: 0 15px;
    border-radius: 1.5vw;
    overflow: hidden;
    height: 37vw;
    background-color: rgb(var(--mdui-color-surface-container));
}

.carousel-item .picture {
    width: 100%;
    height: 100%;
}
</style>