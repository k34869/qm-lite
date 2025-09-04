<template>
    <h3 class="plate-1">{{ name }}</h3>
    <div class="warp-playlist" v-bind="$attrs">
        <template v-if="playlistData.result === -1">
            <div class="item" v-for="i in 12" :key="i">
                <div class="cover skeleton"></div>
                <span class="title-loading skeleton"></span>
            </div>
        </template>
        <template v-else>
            <div class="item waves-effect waves-light" v-for="e in playlistData.data.list" @click="$router.push({ path: '/song-list/' + e.content_id })">
                <img :src="e.cover" class="cover" />
                <mdui-badge class="listen-num">{{ formatNumber(e.listen_num) }}</mdui-badge>
                <span class="title">{{ e.title }}</span>
            </div>
        </template>
    </div>
</template>

<script setup>
import 'mdui/components/badge.js';
import { formatNumber } from '../utils/formatNumber.js'

defineProps({
    name: String,
    playlistData: Object
})
</script>

<style lang="scss" scoped>
.plate-1 {
    margin: 7.7vw 2.5vw 2.7vw 2.5vw;
    font-size: 4.8vw;
}

.warp-playlist {
    position: relative;
    left: -15px;
    width: 100vw;
    padding: 1.3vw 4.2vw;
    display: grid;
    grid-template-columns: repeat(3, 28vw);
    grid-template-rows: repeat(auto-fit, auto);
    justify-content: center;
    row-gap: 5vw;
    column-gap: 3.3vw;

    &.columns-fixed {
        overflow-x: scroll;
        grid-template-columns: repeat(6, 27.7vw);
        grid-template-rows: repeat(2, auto);
        justify-content: initial;
    }

    .item {
        position: relative;
        width: 27.7vw;
        overflow: hidden;

        .listen-num {
            position: absolute;
            top: 24.8vw;
            left: 0;
            font-size: 2.8vw;
            padding: 5px 10px;
            height: 5vw;
        }

        .cover {
            width: 27.7vw;
            height: 27.7vw;
            border-radius: 2.7vw;
        }

        .title {
            font-size: 3.7vw;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            white-space: normal;
            margin-top: 2.6vw;
        }

        .title-loading {
            display: block;
            border-radius: 2.7vw;
            width: 100%;
            height: 10.5vw;
            margin-top: 2.6vw;
        }
    }
}
</style>