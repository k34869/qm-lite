<template>
    <div class="song-list-cover" :class="type">
        <img class="cover" :src="src" />
        <span class="visit-num">{{ formatNumber(visitNumber) }}</span>
    </div>
</template>

<script setup>
import { formatNumber } from '@/utils/formatNumber'
defineProps({
    src: String,
    type: {
        type: String,
        default: 'default'
    },
    visitNumber: Number
})
</script>

<style scoped>
.song-list-cover {
    position: relative;
    width: 28vw;
    height: 28vw;
    border-radius: 1.5vw;
    box-shadow: var(--mdui-elevation-level2);
}

.song-list-cover::after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    height: 85%;
    background-color: rgba(190, 190, 190, 0.5);
}

.song-list-cover.album::after {
    right: -2.5vw;
    width: 70%;
    border-radius: 50%;
    z-index: -1;
}

.song-list-cover.default::after {
    right: -2.2vw;
    width: 3vw;
    border-radius: 0 2vw 2vw 0;
    z-index: -1;
}

.song-list-cover .cover {
    width: 100%;
    height: 100%;
    border-radius: 1.5vw;
    overflow: hidden;
}

.song-list-cover .visit-num {
    position: absolute;
    bottom: 1.5vw;
    background-color: rgba(128, 128, 128, 0.4);
    left: 1.4vw;
    font-size: 2.8vw;
    border-radius: 1vw;
    padding: 0.2vw 0.8vw;
    color: rgb(230, 225, 229);
    font-weight: bold;
}
</style>