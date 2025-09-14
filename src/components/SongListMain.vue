<template>
    <div class="song-list-main">
        <SearchInput class="w1" label="搜索音乐" v-model="searchKey" @clearInput="searchKey = ''" />
        <div class="song-list-main-contrl">
            <template v-if="!searchKey">
                <div class="item waves-effect waves-light br-10">
                    <mdui-icon name="play_circle"></mdui-icon>
                    <span class="name">全部播放({{ songList.length }})</span>
                </div>
                <div class="item">
                    <mdui-button-icon icon="checklist"></mdui-button-icon>
                </div>
            </template>
            <template v-else>
                <div class="item hint">
                    包含"{{ searchKey }}"的歌曲
                </div>
            </template>
        </div>
        <mdui-list>
            <div v-show="!searchKey">
                <SongListItem v-once v-for="(e, i) in songList" :headline="e.songname" :description="description(e.albumname, e.albumdesc)" :serial-number="i + 1" />
            </div>
            <SongListItem v-for="(e, i) in filterSongList" :headline="e.songname" :description="description(e.albumname, e.albumdesc)" :serial-number="i + 1" />
        </mdui-list>
    </div>
</template>

<script setup>
import { ref, computed, toRaw } from 'vue'
import 'mdui/components/list.js';
import 'mdui/components/list-item.js';
import 'mdui/components/button-icon.js';
import SearchInput from '@/components/SearchInput.vue';
import SongListItem from '@/components/SongList/SongListItem.vue'

const props = defineProps({
    songList: Object
})
const cloneSongList = ref(
    structuredClone(toRaw(props.songList))
)
const description = (albumname, albumdesc) => albumname + (!albumname || !albumdesc ? '' : ' / ') + albumdesc
const searchKey = ref('')

const filterSongList = computed(() => {
    const filterSongList = []
    if (!searchKey.value) {
        return filterSongList
    }
    const reg = new RegExp(`(${searchKey.value})`, "gi");
    props.songList
        .forEach((e, i) => {
            const isIncludes = e.songname.toLowerCase().includes(searchKey.value.toLowerCase()) ||
            e.albumname.toLowerCase().includes(searchKey.value.toLowerCase()) ||
            e.albumdesc.toLowerCase().includes(searchKey.value.toLowerCase())
            if (isIncludes) {
                cloneSongList.value[i].songname = e.songname.replace(reg, `<span class="mark">$1</span>`)
                cloneSongList.value[i].albumname = e.albumname.replace(reg, `<span class="mark">$1</span>`)
                cloneSongList.value[i].albumdesc = e.albumdesc.replace(reg, `<span class="mark">$1</span>`)
                filterSongList.push(cloneSongList.value[i])
            }
        })
    return filterSongList
})
</script>

<style scoped>
.w1 {
    margin-bottom: 1.8vw;
}

.song-list-main {
    background-color: rgb(var(--mdui-color-surface));
    min-height: calc(100vh - 61.6vw);
    padding: 10px 15px;
    width: 100vw;
    position: relative;
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

.song-list-main .song-list-main-contrl .item.hint {
    font-size: 4vw;
    padding: 0 1.5vw;
    color: rgb(var(--mdui-color-on-surface-variant));
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
