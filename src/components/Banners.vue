<template>
    <div class="wrap">
        <template v-if="data === -1">
            <div class="carousel-item">
                <div class="picture skeleton"></div>
            </div>
        </template>
        <template v-else>
            <Swiper :pagination="true" :modules="[Pagination, Autoplay]" :autoplay="{ delay: 4800 }" :loop="true">
                <SwiperSlide v-for="e in data">
                    <div class="carousel-item">
                        <img :src="e.picUrl" class="picture">
                    </div>
                </SwiperSlide>
            </Swiper>
        </template>
    </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css/pagination'

defineProps({
    data: [Array, Number]
})
</script>

<style scoped>
.wrap {
    width: 100vw;
    margin-bottom: 2.2vw;
}

.carousel-item {
    width: 100%;
    padding: 0 15px;
    height: 37vw;

    .picture {
        border-radius: 1.5vw;
        overflow: hidden;
        width: 100%;
        height: 100%;
    }
}

.swiper {
    width: 100%;
    height: 100%;
}
</style>