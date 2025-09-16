<template>
    <div class="wrap">
        <h3 class="name" v-show="name">{{ name }}</h3>
        <div v-if="type === '歌单'" class="playlist" v-bind="$attrs" ref="playlist">
            <template v-if="data === -1">
                <div class="item" v-for="i in 12" :key="i">
                    <div class="cover skeleton"></div>
                    <span class="title-loading skeleton"></span>
                </div>
            </template>
            <template v-else>
                <div class="item waves-effect waves-light" v-for="e in data"
                    @click="$router.push({ path: '/songlist/' + e.content_id })">
                    <img :src="e.cover" class="cover" />
                    <mdui-badge class="listen-num">{{ formatNumber(e.listen_num) }}</mdui-badge>
                    <span class="title line-hide-2">{{ e.title }}</span>
                </div>
            </template>
        </div>
        <div v-if="type === '专辑'" class="playlist" v-bind="$attrs">
            <template v-if="data === -1">
                <div class="item album" v-for="i in 8" :key="i">
                    <div class="cover skeleton album"></div>
                    <span class="title-loading skeleton"></span>
                </div>
            </template>
            <template v-else>
                <div class="item waves-effect waves-light album" v-for="e in data" @click="goToAlbumPage(e)">
                    <img :src="'//y.qq.com/music/photo_new/T002R300x300M000' + e.mid + '_1.jpg?max_age=2592000'"
                        class="cover album" />
                    <mdui-badge class="release-time">{{ e.release_time }}</mdui-badge>
                    <span class="title album line-hide-1">{{ e.name }}</span>
                    <span class="singer line-hide-1" style="color: rgb(var(--mdui-color-primary)); font-size: 3.2vw">{{
                        e.singers.map((s) => s.name).join('/') }}</span>
                </div>
            </template>
        </div>
        <div v-if="type === '分类歌单'" class="playlist rows-3" v-bind="$attrs" ref="playlist">
            <template v-if="data === -1">
                <div class="item" v-for="i in 12" :key="i">
                    <div class="cover skeleton"></div>
                    <span class="title-loading skeleton"></span>
                </div>
            </template>
            <template v-else>
                <div class="item waves-effect waves-light" v-for="e in data"
                    @click="$router.push({ path: '/playlist/' + e.dissid })">
                    <img :src="e.imgurl" class="cover" />
                    <mdui-badge class="listen-num">{{ formatNumber(e.listennum) }}</mdui-badge>
                    <span class="title line-hide-2">{{ e.dissname }}</span>
                </div>
            </template>
        </div>
    </div>
</template>

<script setup>
import { onActivated, onDeactivated, useTemplateRef, ref } from 'vue'
import { useRouter } from 'vue-router'
import { formatNumber } from '@/utils/formatNumber.js'
import 'mdui/components/badge.js';

const scorllLeft = ref(0)
const router = useRouter()
const playlist = useTemplateRef('playlist')

defineProps({
    name: String,
    type: String,
    data: [Array, Number]
})

const goToAlbumPage = (data) => {
    sessionStorage.album = JSON.stringify(data)
    router.push({ path: '/album/' + data.mid })
}

onDeactivated(() => {
    if (playlist.value) {
        scorllLeft.value = playlist.value.scrollLeft
    }
})

onActivated(() => {
    if (playlist.value) {
        playlist.value.scrollLeft = scorllLeft.value
    }
})
</script>

<style scoped>
.name {
    margin: 5.2vw 20px 2.7vw 20px;
    font-size: 4.8vw;
}

.playlist {
    position: relative;
    width: 100vw;
    display: grid;
    grid-template-columns: repeat(2, 45vw);
    grid-template-rows: repeat(auto-fit, auto);
    justify-content: center;
    row-gap: 5vw;
    column-gap: 3.3vw;
    padding: 5px 15px;

    &.rows-3 {
        grid-template-columns: repeat(3, 27.7vw);
    }

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

        &.album {
            width: 45vw;
        }

        .listen-num {
            position: absolute;
            top: 24.8vw;
            left: 0;
            font-size: 2.8vw;
            padding: 5px 10px;
            height: 5vw;
        }

        .release-time {
            position: absolute;
            top: 40vw;
            right: 0;
            font-size: 2.8vw;
            padding: 5px 10px;
            height: 5vw;
            opacity: 0.8;
        }

        .cover {
            width: 27.7vw;
            height: 27.7vw;
            border-radius: 2.7vw;

            &.album {
                width: 45vw;
                height: 45vw;
            }
        }

        .title {
            font-size: 3.7vw;
            margin-top: 2.6vw;

            &.album {
                margin-top: 1vw;
                -webkit-line-clamp: 1;
            }
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