<template>
    <div>
        <div v-if="songList === -1" class="progress">
            <mdui-circular-progress></mdui-circular-progress>
        </div>
        <div v-else>
            <Background :url="songList.logo" size="100% 62vw" />
            <div class="play-list-header">
                <div class="play-list-type">
                    歌单
                </div>
                <div class="play-list-header-cols flex f-sa-center">
                    <SongListCover :src="songList.logo" :visit-number="songList.visitnum" />
                    <div class="play-list-header-rows">
                        <div class="play-list-header-title line-hide-1">
                            {{ songList.dissname }}
                        </div>
                        <div class="play-list-header-nick flex f-fs-center">
                            <img class="avater" :src="songList.headurl" />
                            <div class="play-list-header-nick-name">{{ songList.nickname }}</div>
                        </div>
                        <div class="play-list-header-toolbar flex f-sb">
                            <mdui-button icon="favorite_border" variant="text">收藏</mdui-button>
                            <mdui-button icon="share" variant="text" @click="Share.share({ title: songList.dissname, text: songList.dissname, url: `https://y.qq.com/n/ryqq/playlist/${$route.params.id}` })">分享</mdui-button>
                        </div>
                    </div>
                </div>
                <div class="play-list-header-description line-hide-2" v-html="songList.desc.replaceAll('\\n', '<br>')"
                    @click="$router.push({ path: $route.path + '/detail' })"></div>
            </div>
            <SongListMain :song-list="songList.songlist" />
        </div>
        <router-view v-slot="{ Component }">
            <transition name="fade3" mode="out-in">
                <keep-alive>
                    <component :is="Component" :data="songList" />
                </keep-alive>
            </transition>
        </router-view>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import 'mdui/components/button.js'
import 'mdui/components/circular-progress.js'
import Background from '@/components/Background.vue'
import SongListCover from '@/components/SongListCover.vue'
import SongListMain from '@/components/SongListMain.vue'
import { getSongList } from '@/api/songList.js'
import { Share } from '@capacitor/share'

const route = useRoute()
const songList = ref(-1)

getSongList(route.params.id)
    .then(({ data }) => {
        songList.value = data
    })
</script>

<style scoped>
.play-list-type {
    padding: 2.6vw 0 1vw 0;
    text-align: center;
    color: rgb(230, 225, 229);
    font-size: 4.5vw;
    font-weight: bold;
}

.play-list-header {
    position: relative;
    padding-bottom: 4.2vw;

    .play-list-header-cols {
        height: auto;
        min-height: 38vw;
        overflow: hidden;

        .play-list-header-title {
            position: relative;
            width: 50vw;
            height: 8vw;
            line-height: 8vw;
            text-align: center;
            color: rgb(230, 225, 229);
            font-size: 4vw;
            z-index: 5;
        }

        .play-list-header-nick {
            width: 50vw;
            margin: 2.8vw 3.2vw;

            .avater {
                width: 6vw;
                height: 6vw;
                border-radius: 50%;
            }

            .play-list-header-nick-name {
                font-size: 3.3vw;
                margin-left: 1.5vw;
                color: rgb(230, 225, 229);
            }
        }

        .play-list-header-toolbar {
            width: 50vw;
            margin-top: 2.6vw;

            mdui-button {
                width: 22vw;
                height: 9vw;
                font-size: 4vw;
                color: rgb(230, 225, 229);
            }
        }
    }
}

.play-list-header-description {
    width: 100%;
    font-size: 3.5vw;
    color: rgb(230, 225, 229);
    padding: 0 5.2vw;
}
</style>
