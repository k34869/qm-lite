<template>
    <h3 class="plate-1">最新歌曲</h3>
    <div class="warp">
        <Carousel :="carouselConfig">
            <Slide v-for="e in 6">
                <div class="carousel-item">
                    <mdui-list>
                        <mdui-list-item v-for="e in 3">
                            <div class="song-list-item" slot="custom">
                                <div class="song-list-item-cover">
                                    <img
                                        src="http://qpic.y.qq.com/music_cover/7axJgSibuQNcws5JAbn8TT6sia6Kp4RxzupgNqibE3uibvg2hFRfoF2XXQ/300?n=1" />
                                </div>
                                <div class="song-list-item-content">
                                    <div class="song-list-item-headline" v-html="'名侦探柯南'"></div>
                                    <div class="song-list-item-description" v-html="'拉克斯酱豆腐了就爱上了对方'"></div>
                                </div>
                            </div>
                        </mdui-list-item>
                    </mdui-list>
                </div>
            </Slide>
        </Carousel>
    </div>
</template>

<script setup>
import { Carousel, Slide } from 'vue3-carousel'
import 'mdui/components/list.js';
import 'mdui/components/list-item.js';

const carouselConfig = {
    itemsToShow: 1.1,
    wrapAround: true,
    gap: 0
}
</script>

<style scoped>
.plate-1 {
    margin: 7.7vw 2.5vw 2.7vw 2.5vw;
    font-size: 4.8vw;
}

.warp {
    position: relative;
    left: -15px;
    width: 100vw;
}

.carousel-item {
    width: 100%;
    border-radius: 1.5vw;
    height: 47vw;
}

.song-list-item {
    position: relative;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 2.2vw 0;
}

.song-list-item .song-list-item-cover {
    width: 15vw;
    height: 12vw;
    font-size: 4vw;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
}

.song-list-item .song-list-item-cover img {
    width: 100%;
}

.song-list-item .song-list-item-num.not {
    width: 5vw;
}

.song-list-item .song-list-item-content {
    width: 70vw;
}

.song-list-item .song-list-item-content .song-list-item-headline {
    font-size: 4.2vw;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    white-space: normal;
    color: rgb(var(--mdui-color-on-surface));
}

.song-list-item .song-list-item-content .song-list-item-description {
    font-size: 3.4vw;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    white-space: normal;
    color: rgb(var(--mdui-color-on-surface-variant));
}

.song-list-item mdui-button-icon[icon=more_vert] {
    position: absolute;
    right: 15px;
    font-size: 6.2vw;
    width: 10.2vw;
    height: 10.2vw;
}
</style>