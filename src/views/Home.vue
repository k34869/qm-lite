<template>
    <div>
        <SearchInput :input="false" label="搜索你想找的音乐" @click="$router.push({ name: '搜索' })" />
        <Banner :banners-data="banners" />
        <Playlist class="columns-fixed" :playlist-data="playlist" />
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Banner from '../components/Banner.vue'
import Playlist from '../components/Playlist.vue'
import SearchInput from '../components/SearchInput.vue'
import { getRecBanners } from '../api/banner.js'
import { getRecPlaylist } from '../api/playList.js'

const banners = ref({ result: -1 })
const playlist = ref({ result: -1 })


onMounted(() => {
    // 获取轮播图
    getRecBanners()
        .then(data => {
            banners.value = data
        })
    // 获取推荐歌单
    getRecPlaylist()
        .then(data => {
            playlist.value = data
        })
})
</script>

<style scoped>

</style>