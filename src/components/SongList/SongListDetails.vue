<template>
    <div>
        <Background :url="songList.logo" size="cover" position="center" />
        <div class="song-list-details">
            <SongListCover :src="songList.logo" :visit-number="songList.visitnum" />
            <div class="song-list-title">{{ songList.dissname }}</div>
            <div class="song-list-details-nick">
                <img class="avater" :src="songList.headurl" />
                <div class="song-list-details-nick-name">{{ songList.nickname }}</div>
            </div>
            <div class="song-list-details-description" v-html="songList.desc.replaceAll('\\n', '<br>')"></div>
        </div>
    </div>
</template>

<script setup>
import Background from '@/components/Background.vue';
import SongListCover from '@/components/SongList/SongListCover.vue';
import { useSongList } from '@/stores/songList.js'

const { songList } = useSongList()
</script>

<style scoped>
.song-list-details .song-list-cover {
    transform: scale(1.25);
}

.song-list-details {
    display: grid;
    grid-template-columns: auto;
    justify-content: center;
    justify-items: center;
    padding: 12.5vw 3.5vw;
}

.song-list-details .song-list-title {
    height: 8vw;
    line-height: 8vw;
    margin-top: 7.4vw;
    color: rgb(230, 225, 229);
    font-size: 4.2vw;
    z-index: 5;
}

.song-list-details .song-list-details-nick {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 2.8vw 3.2vw;
}

.song-list-details .song-list-details-nick .avater {
    width: 6vw;
    height: 6vw;
    border-radius: 50%;
}

.song-list-details .song-list-details-nick .song-list-details-nick-name {
    font-size: 3.4vw;
    margin-left: 1.5vw;
    color: rgb(230, 225, 229);
}

.song-list-details .song-list-details-description {
    font-size: 3.6vw;
    color: rgb(230, 225, 229);
    margin: 2.2vw 0;
}
</style>
