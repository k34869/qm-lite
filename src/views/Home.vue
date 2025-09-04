<template>
    <div class="home-page">
        <SearchInput class="w1" :disable-input="true" label="搜索你想找的音乐" @click="$router.push({ name: '搜索' })" />
        <Banners :data="banners" />
        <div class="plate-list">
            <div class="item waves-effect waves-light br-10" v-for="e in plateList" @click="$router.push({ name: e.name })">
                <mdui-icon :name="e.icon"></mdui-icon>
                <span class="name">{{ e.name }}</span>
            </div>
        </div>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <!-- <SongList /> -->
        <!-- <Playlist name="达人歌单" class="columns-fixed" :playlist-data="playlist" /> -->
    </div>
</template>

<script setup>
import { ref } from 'vue'
import Banners from '@/components/Banners.vue'
import Playlist from '@/components/Playlist.vue'
import SearchInput from '@/components/SearchInput.vue'
import SongList from '@/components/Home/SongList.vue'
import { getRecBanners } from '@/api/banner.js'
import { getRecPlaylist } from '@/api/playList.js'

const banners = ref(-1)
const playlist = ref({ result: -1 })

const plateList = [
    {
        name: '排行榜',
        icon: 'bar_chart'
    },
    {
        name: '歌单分类',
        icon: 'interests'
    },
    {
        name: '歌手分类',
        icon: 'category'
    },
    {
        name: '新歌新碟',
        icon: 'disc_full'
    }
]

getRecBanners()
    .then(({ data }) => {
        banners.value = data
    })

// getRecPlaylist()
//     .then(data => {
//         playlist.value = data
//     })
</script>

<style scoped>
.w1 {
    margin-bottom: 3.5vw;
}

.plate-list {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 10px 15px;
}

.plate-list .item {
    text-align: center;
    padding: 1vw 0.2vw;
}

.plate-list .item mdui-icon {
    width: 100%;
    font-size: 7.6vw;
    color: rgb(var(--mdui-color-primary));
}

.plate-list .name {
    font-size: 3.6vw;
}
</style>