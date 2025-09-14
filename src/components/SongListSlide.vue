<template>
    <div class="warp">
        <h3 class="name">{{ name }}</h3>
        <template v-if="data === -1">
            <Swiper :slidesPerView="'auto'" :centeredSlides="true">
                <SwiperSlide style="width: 91.4vw;">
                    <div class="carousel-item">
                        <div v-for="rows in 3" :key="rows">
                            <div class="song-list-item flex f-fs-center" slot="custom">
                                <div class="song-list-item-cover skeleton flex f-center"></div>
                                <div class="song-list-item-content loding skeleton"></div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </template>
        <template v-else>
            <Swiper :slidesPerView="'auto'" :centeredSlides="true">
                <SwiperSlide v-for="(cols, oi) in data" :key="oi" style="width: 91.4vw;">
                    <div class="carousel-item">
                        <mdui-list>
                            <mdui-list-item v-for="(rows, ii) in cols" :key="ii">
                                <div class="song-list-item flex f-fs-center" slot="custom">
                                    <div class="song-list-item-cover flex f-center">
                                        <img
                                            :src="'//y.qq.com/music/photo_new/T002R300x300M000' + rows.album.pmid + '.jpg?max_age=2592000'" />
                                    </div>
                                    <div class="song-list-item-content">
                                        <div class="song-list-item-headline line-hide-1"
                                            v-html="`${rows.title} ${rows.subtitle}`"></div>
                                        <div class="song-list-item-description line-hide-1"
                                            v-html="`<span style='color: rgb(var(--mdui-color-primary))'>${rows.singer.map((e) => e.name).join('/')}</span> ${rows.singer.length > 0 ? '|' : ''} ${rows.album.name}`">
                                        </div>
                                    </div>
                                </div>
                            </mdui-list-item>
                        </mdui-list>
                    </div>
                </SwiperSlide>
            </Swiper>
        </template>
    </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'mdui/components/list.js';
import 'mdui/components/list-item.js';

defineProps({
    name: String,
    data: [Array, Number]
})
</script>

<style scoped>
.warp {
    position: relative;
    width: 100vw;
}

.name {
    margin: 5.2vw 20px 2.7vw 20px;
    font-size: 4.8vw;
}

.carousel-item {
    width: 100%;
    border-radius: 1.5vw;
    height: 54.5vw;
}

.song-list-item {
    position: relative;
    padding: 1.3vw 1vw;

    .song-list-item-cover {
        width: 15vw;
        height: 15vw;
        font-size: 4vw;
        margin-right: 3.2vw;
        border-radius: 2vw;
        overflow: hidden;
        font-weight: bold;
        background-color: rgb(var(--mdui-color-surface-container));

        img {
            width: 100%;
            height: 100%;
        }
    }

    .song-list-item-content {
        width: 66vw;

        &.loding {
            height: 7.6vw;
            background-color: rgb(var(--mdui-color-surface-container));
        }

        .song-list-item-headline {
            font-size: 4.2vw;
            color: rgb(var(--mdui-color-on-surface));
        }

        .song-list-item-description {
            font-size: 3.4vw;
            color: rgb(var(--mdui-color-on-surface-variant));
        }
    }
}
</style>