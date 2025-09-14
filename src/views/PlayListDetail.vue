<template>
    <div class="wrap">
        <Background :url="data.logo" size="cover" position="center" />
        <div class="song-list-detail">
            <SongListCover :src="data.logo" :visit-number="data.visitnum" />
            <div class="song-list-title">{{ data.dissname }}</div>
            <div class="song-list-detail-nick flex f-fs-center">
                <img class="avater" :src="data.headurl" />
                <div class="song-list-detail-nick-name">{{ data.nickname }}</div>
            </div>
            <div class="song-list-detail-description" v-html="data.desc.replaceAll('\\n', '<br>')"></div>
        </div>
    </div>
</template>

<script setup>
import { onActivated, onDeactivated } from "vue";
import Background from '@/components/Background.vue';
import SongListCover from '@/components/SongListCover.vue';

defineProps({
    data: {
        type: [ Object, Number ],
        default: -1
    }
})

onActivated(() => {
    document.body.style.overflow = 'hidden'
})

onDeactivated(() => {
    document.body.style.overflow = 'visible'
})
</script>

<style scoped>
.wrap {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    min-height: 100vh;
}

.song-list-detail {
    width: 100vw;
    display: grid;
    grid-template-columns: auto;
    justify-content: center;
    justify-items: center;
    padding: 15.5vw 3.5vw;

    .song-list-cover {
        transform: scale(1.25);
    }

    .song-list-title {
        height: 8vw;
        line-height: 8vw;
        margin-top: 7.4vw;
        color: rgb(230, 225, 229);
        font-size: 4.2vw;
        z-index: 5;
    }

    .song-list-detail-nick {
        margin: 2.8vw 3.2vw;

        .avater {
            width: 6vw;
            height: 6vw;
            border-radius: 50%;
        }

        .song-list-detail-nick-name {
            font-size: 3.4vw;
            margin-left: 1.5vw;
            color: rgb(230, 225, 229);
        }
    }

    .song-list-detail-description {
        font-size: 3.6vw;
        color: rgb(230, 225, 229);
        padding: 2.2vw 2.6vw;
        width: 90vw;
    }
}
</style>
