<template>
    <div v-if="songList.result === -1" class="progress">
        <mdui-circular-progress></mdui-circular-progress>
    </div>
    <div v-else>
        <Background :url="songList.data.logo" size="100% 62vw" />
        <div class="song-list-header">
            <div class="song-list-type">
                歌单
            </div>
            <div class="song-list-header-cols">
                <SongListCover :src="songList.data.logo" :visit-number="songList.data.visitnum" />
                <div class="song-list-header-rows">
                    <div class="song-list-header-title">
                        {{ songList.data.dissname }}
                    </div>
                    <div class="song-list-header-nick">
                        <img class="avater" :src="songList.data.headurl" />
                        <div class="song-list-header-nick-name">{{ songList.data.nickname }}</div>
                    </div>
                    <div class="song-list-header-toolbar">
                        <mdui-button icon="favorite_border" variant="text">收藏</mdui-button>
                        <mdui-button icon="share" variant="text">分享</mdui-button>
                    </div>
                </div>
            </div>
            <div class="song-list-header-description" v-html="songList.data.desc" @click="$router.push({ path: $route.path + '/details' })"></div>
        </div>
        <SongListMain :song-list="songList.data.songlist" />
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import 'mdui/components/button.js';
import 'mdui/components/circular-progress.js'
import Background from '@/components/Background.vue';
import SongListCover from '@/components/SongList/SongListCover.vue'
import SongListMain from '@/components/SongList/SongListMain.vue'
import { getSongList } from '@/api/songList.js'
import { useSongList } from '@/stores/songList.js'

const store = useSongList()

const props = defineProps({
    id: String
})

const songList = ref({ result: -1 })

onMounted(() => {
    getSongList(props.id)
        .then((data) => {
            songList.value = data
            store.songList = data?.data
        })
})
</script>

<style scoped>
.song-list-type {
    padding: 1vw 2.2vw;
    text-align: center;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    white-space: normal;
    overflow: hidden;
    color: rgb(230, 225, 229);
    font-size: 4.5vw;
}

.song-list-header {
    position: relative;
    padding-bottom: 4.2vw;
}

.song-list-header .song-list-header-cols {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: auto;
    min-height: 38vw;
    overflow: hidden;
}

.song-list-header .song-list-header-cols .song-list-header-title {
    position: relative;
    width: 50vw;
    height: 8vw;
    line-height: 8vw;
    text-align: center;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    white-space: normal;
    overflow: hidden;
    color: rgb(230, 225, 229);
    font-size: 4vw;
    z-index: 5;
}

.song-list-header .song-list-header-cols .song-list-header-nick {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 2.8vw 3.2vw;
}

.song-list-header .song-list-header-cols .song-list-header-nick .avater {
    width: 6vw;
    height: 6vw;
    border-radius: 50%;
}

.song-list-header .song-list-header-cols .song-list-header-nick .song-list-header-nick-name {
    font-size: 3.3vw;
    margin-left: 1.5vw;
    color: rgb(230, 225, 229);
}

.song-list-header .song-list-header-cols .song-list-header-toolbar {
    width: 50vw;
    margin-top: 2.6vw 0;
    display: flex;
    justify-content: space-between;
}

.song-list-header .song-list-header-cols .song-list-header-toolbar mdui-button {
    width: 22vw;
    height: 9vw;
    font-size: 4vw;
    color: rgb(230, 225, 229);
}

.song-list-header-description {
    width: 100%;
    font-size: 3.5vw;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    white-space: normal;
    overflow: hidden;
    color: rgb(230, 225, 229);
    padding: 0 4vw;
}
</style>