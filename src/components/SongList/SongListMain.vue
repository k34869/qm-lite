<template>
    <div class="song-list-main">
        <SearchInput label="搜索音乐" @input="input()" />
        <div class="song-list-main-contrl">
            <div class="item waves-effect waves-light br-10">
                <mdui-icon name="play_circle"></mdui-icon>
                <span class="name">全部播放({{ songList.length }})</span>
            </div>
            <div class="item">
                <mdui-button-icon icon="checklist"></mdui-button-icon>
            </div>
        </div>
        <mdui-list>
            <SongListItem v-for="(e, i) in songList" :headline="e.songname" :description="description(e.albumname, e.albumdesc)" :serial-number="i + 1" />
        </mdui-list>
    </div>
</template>

<script setup>
import { reactive, computed } from 'vue'
import 'mdui/components/list.js';
import 'mdui/components/list-item.js';
import 'mdui/components/button-icon.js';
import SearchInput from '@/components/Search/SearchInput.vue';
import SongListItem from '@/components/SongList/SongListItem.vue'
import { staticClone } from '@/utils/utils.js'

const props = defineProps({
    songList: Object
})

const description = (albumname, albumdesc) => albumname + ( (albumdesc === '') ? ('') : (' / ' + albumdesc) )


const filter = (key) => {
    const filterSongList = props.songList.forEach((e) => {
        const filterSongList = []
        const isSongName = e.songname.includes(key)
        const isAlbumname = e.albumname.includes(key)
        const isAlbumdesc = e.albumdesc.includes(key)
        if (isSongName) {
            e.songname = e.songname.split(key).join('<b class="mark">' + key + '</b>')
        }
        if (isAlbumname) {
            e.albumname = e.albumname.split(key).join('<b class="mark">' + key + '</b>')
        }
        if (isAlbumdesc) {
            e.albumdesc = e.albumdesc.split(key).join('<b class="mark">' + key + '</b>')
        }
        if (isSongName || isAlbumname || isAlbumdesc) {
            filterSongList.push(e)
        }
    })
    return filterSongList
}
</script>

<style scoped>
.song-list-main {
    background-color: rgb(var(--mdui-color-surface));
    min-height: calc(100vh - 61.6vw);
    padding: 10px 15px;
    width: 100vw;
    position: relative;
    left: -15px;
}

.song-list-main .song-list-main-contrl {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 12vw;
}

.song-list-main .song-list-main-contrl .item {
    display: flex;
    align-items: center;
}

.song-list-main .song-list-main-contrl .item.waves-effect {
    padding: 0.8vw 1.5vw 0.8vw 0.6vw;
}

.song-list-main .song-list-main-contrl .item mdui-icon {
    font-size: 5.8vw;
    color: rgb(var(--mdui-color-primary));
}

.song-list-main .song-list-main-contrl .item mdui-button-icon {
    width: 9.6vw;
    height: 9.6vw;
    font-size: 6.2vw;
}

.song-list-main .song-list-main-contrl .item .name {
    margin-left: 1.2vw;
    font-size: 4vw;
}

.song-list-main mdui-list {
    position: relative;
    left: -15px;
    width: 100vw;
}
</style>
