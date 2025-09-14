<template>
    <div>
        <div v-if="songList === -1" class="progress">
            <mdui-circular-progress></mdui-circular-progress>
        </div>
        <div v-else>
            <Background :url="'//y.qq.com/music/photo_new/T002R300x300M000' + albumInfo.mid + '_1.jpg?max_age=2592000'" size="100% 62vw" />
            <div class="song-list-header">
                <div class="song-list-type">
                    专辑
                </div>
                <div class="song-list-header-cols">
                    <SongListCover :src="'//y.qq.com/music/photo_new/T002R300x300M000' + albumInfo.mid + '_1.jpg?max_age=2592000'" type="album" :release-time="albumInfo.release_time" />
                    <div class="song-list-header-rows">
                        <div class="song-list-header-title">
                            <div class="content">{{ albumInfo.name }}</div>
                        </div>
                        <div class="song-list-header-nick" @click="$router.push({ path: $route.path + '/singers' })">
                            <img v-for="e in albumInfo.singers" class="avater" :src="'//y.qq.com/music/photo_new/T001R500x500M000' + e.mid + '.jpg?max_age=2592000'" onerror="this.src = '../../T001_0.jpg'" />
                            <div class="song-list-header-nick-name">{{ albumInfo.singers.map((s) => s.name).join('/') }}</div>
                        </div>
                        <div class="song-list-header-toolbar">
                            <mdui-button icon="favorite_border" variant="text">收藏</mdui-button>
                            <mdui-button icon="share" variant="text">分享</mdui-button>
                        </div>
                    </div>
                </div>
            </div>
            <SongListMain :song-list="songList.list" type="专辑" />
        </div>
        <router-view v-slot="{ Component }">
            <transition name="fade2" mode="out-in">
                <keep-alive>
                    <component :is="Component" :data="albumInfo.singers" />
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
import { getAlbumSongs } from '@/api/albumSongs.js'

defineOptions({
    name: 'AlbumSongList'
})

const albumInfo = ref(-1)
const songList = ref(-1)
albumInfo.value = JSON.parse(sessionStorage.album)

getAlbumSongs(useRoute().params.id)
    .then(({ data }) => {
        songList.value = data
    })
</script>

<style lang="scss" scoped>
@import "../assets/scss/flex";
@import "../assets/scss/lineHidden";
$color: rgb(230, 225, 229);

.song-list-type {
    padding: 2.6vw 0 1vw 0;
    text-align: center;
    @include lineHidden;
    color: $color;
    font-size: 4.5vw;
    font-weight: bold;
}

.song-list-header {
    position: relative;
    padding-bottom: 4.2vw;

    .song-list-header-cols {
        @include flex(space-around, center);
        height: auto;
        min-height: 48vw;
        overflow: hidden;

        .song-list-header-title {
            position: relative;
            width: 50vw;
            height: 8vw;
            line-height: 8vw;
            text-align: center;
            @include lineHidden;
            color: $color;
            font-size: 4vw;
            z-index: 5;

            .content {
                transition: background-color 0.1s;
            }

            &:hover {
                overflow: visible;

                .content {
                    position: absolute;
                    left: 0;
                    right: 0;
                    margin: auto;
                    background-color: rgba(37, 37, 37, 0.6);
                    border-radius: 2.2vw;
                }
            }
        }

        .song-list-header-nick {
            max-width: 50vw;
            @include flex(flex-start, center);
            margin: 2.8vw 3.2vw;

            .avater {
                width: 6vw;
                height: 6vw;
                border-radius: 50%;
            }

            .song-list-header-nick-name {
                font-size: 3.3vw;
                margin-left: 1.5vw;
                color: $color;
            }
        }

        .song-list-header-toolbar {
            width: 50vw;
            margin-top: 2.6vw;
            @include flex(space-between);

            mdui-button {
                width: 22vw;
                height: 9vw;
                font-size: 4vw;
                color: $color;
            }
        }
    }
}
</style>
