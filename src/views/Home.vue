<template>
    <div class="home-page">
        <SearchInput class="w1" :disable-input="true" label="搜索你想找的音乐" @click="$router.push({ name: '搜索' })" />
        <Banners :data="banners" />
        <div class="plate-list flex f-sa-center">
            <div class="item waves-effect waves-light br-10" v-for="e in plateList"
                @click="$router.push({ name: e.name })">
                <mdui-icon :name="e.icon"></mdui-icon>
                <span class="name">{{ e.name }}</span>
            </div>
        </div>
        <SongListSilde name="最新歌曲" :data="newSongs" />
        <List name="达人歌单" type="歌单" class="columns-fixed" :data="playlist" />
        <List name="最新专辑" type="专辑" :data="album" />
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from "vue-router"
import Banners from '@/components/Banners.vue'
import SongListSilde from '@/components/SongListSlide.vue'
import SearchInput from '@/components/SearchInput.vue'
import List from '@/components/GridList.vue'
import { getRecBanners } from '@/api/banner.js'
import { getNewSongs } from '@/api/newSongs.js'
import { getRecPlaylist } from '@/api/playList.js'
import { getNewAlbum } from '@/api/newAlbum.js'
import { chunkArray } from '@/utils/utils.js'

const router = useRouter()

defineOptions({
    name: '首页'
})

const banners = ref(-1)
const newSongs = ref(-1)
const playlist = ref(-1)
const album = ref(-1)

const plateList = [
    {
        name: '排行',
        icon: 'bar_chart'
    },
    {
        name: '分类歌单',
        icon: 'interests'
    },
    {
        name: '歌手',
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

getNewSongs()
    .then(({ data }) => {
        newSongs.value = chunkArray(data.list.slice(0, 18), 3)
    })

getRecPlaylist()
    .then(({ data }) => {
        playlist.value = data.list
    })

getNewAlbum()
    .then(({ data }) => {
        album.value = data.list.slice(0, 8)
    })
</script>

<style lang="scss" scoped>
.home-page {
    padding-bottom: calc(70px + 18vw);
}

.w1 {
    margin: 1vw 15px 3.5vw 15px;
}

.plate-list {
    padding: 5px 15px;

    .item {
        text-align: center;
        padding: 1vw 0.2vw;

        mdui-icon {
            width: 100%;
            font-size: 7.6vw;
            color: rgb(var(--mdui-color-primary));
        }
    }

    .name {
        font-size: 3.6vw;
    }
}
</style>