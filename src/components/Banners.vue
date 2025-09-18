<template>
    <div class="banners">
        <div v-if="data === -1" class="carousel-item">
            <div class="picture skeleton"></div>
        </div>
        <Swiper v-else :pagination="true" :modules="[Pagination, Autoplay]" :autoplay="{ delay: 4800 }" :loop="true">
            <SwiperSlide v-for="e in data">
                <div class="carousel-item" @click="$router.push({ path: `/album/003ryYZm47hg1r` })">
                    <img :src="e.picUrl" class="picture">
                </div>
            </SwiperSlide>
        </Swiper>
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
.banners {
    width: 100vw;
    margin-bottom: 2.2vw;

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
}
</style>