<template>
    <div class="wrap-mini-player">
        <div class="mini-player">
            <div class="mini-player-start">
                <div class="mini-player-cover">
                    <img
                        src="//music-file.y.qq.com/songlist/user/owEFowck7eSk7v/68bfa0a7/gQyXyVLBwXY-0BwPzcEh4n_90e2c.jpg?imageView2/4/w/600/h/600" />
                </div>
                <div class="mini-player-title line-hide-1">半点心半点心半点心半点心半点心半点心半点心半点心半点心半点心半点心半点心</div>
            </div>
            <div class="mini-player-ctrl">
                <div class="mini-player-ctrl-button button">
                    <mdui-button-icon :icon="isPlaying ? 'pause' : 'play_arrow'" @click="togglePlay"></mdui-button-icon>
                </div>
                <div class="mini-player-playlist-button button">
                    <mdui-button-icon icon='queue_music'></mdui-button-icon>
                </div>
            </div>
        </div>
        <mdui-linear-progress :value="currentTime" :max="duration"></mdui-linear-progress>
    </div>
</template>

<script setup>
import 'mdui/components/button-icon.js';
import 'mdui/components/linear-progress.js';
import { useMusicPlayer } from '@/hooks/useMusicPlayer.js'
const { isPlaying, currentTime, duration, changeSource, togglePlay } = useMusicPlayer()

const url = 'https://ws6.stream.qqmusic.qq.com/O400003uoBy92OPNeY.ogg?guid=6221191250&vkey=D579697190590E01CB8BE22A9389D3D3508F7851BF3276B634658CFACFD6E54AA9D748E82121B7B5322AA31C555ECC52F289F9A528D0EE4B__v21563fd8e&uin=1152921505154818312&fromtag=120532&src=O400002BjbEz0mW9yT.ogg'

changeSource(url, true)
</script>

<style scoped>
.wrap-mini-player {
    position: relative;

    mdui-linear-progress {
        position: absolute;
        bottom: 0;
        left: 0;
        height: 0.6vw;
    }

    .mini-player {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .mini-player-start {
            display: flex;
            align-items: center;

            .mini-player-cover {
                width: 13.6vw;
                height: 13.6vw;
                border-radius: 2.2vw;
                overflow: hidden;
                margin: 1.2vw 2.2vw 1.6vw 2.2vw;

                img {
                    width: 100%;
                    height: 100%;
                }
            }

            .mini-player-title {
                font-size: 3.8vw;
                width: 55.6vw;
                padding-bottom: 0.8vw;
            }
        }

        .mini-player-ctrl {
            display: flex;
            justify-content: space-around;
            align-items: center;

            .button {
                margin: 0 1.2vw;
            }
        }
    }
}
</style>


<!-- <script setup>
import { ref } from 'vue'
import { useMusicPlayer, createMusicPlayer } from '@/hooks/useMusicPlayer.js'
import { formatTime } from '@/utils/formatTime.js'

const { isPlaying, currentTime, duration, timeUpdate, lyrics, togglePlay } = useMusicPlayer()

const src = ref('https://ws6.stream.qqmusic.qq.com/O400001hdC5c39wwBJ.ogg?guid=6587833821&vkey=09A201FFFBEAA7D47810A3F62335796690BEDA399270823C334F7108DAF34ACE92538CDF2531E108E4FA063A3B2B4276191E701ACF61131D__v2ba74030&uin=1152921505154818312&fromtag=120532')

createMusicPlayer({ url: src.value })

const seek = () => {
    timeUpdate(currentTime.value)
}

</script> -->