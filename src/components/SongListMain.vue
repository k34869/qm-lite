<template>
    <div class="song-list-main">
        <SearchInput class="w1" label="搜索音乐" v-model="searchKey" @clearInput="searchKey = ''" />
        <div class="song-list-main-contrl flex f-sb-center">
            <template v-if="!searchKey">
                <div class="item waves-effect waves-light br-10 flex f-a-center">
                    <mdui-icon name="play_circle"></mdui-icon>
                    <span class="name">全部播放({{ songList.length }})</span>
                </div>
                <div class="item flex f-a-center">
                    <mdui-button-icon icon="checklist"></mdui-button-icon>
                </div>
            </template>
            <template v-else>
                <div class="item hint flex f-a-center">
                    包含"{{ searchKey }}"的歌曲
                </div>
            </template>
        </div>
        <mdui-list v-if="type === '歌单'">
            <div v-show="!searchKey">
                <SongListItem v-once v-for="(e, i) in songList" :headline="e.songname" :description="description(e.albumname, e.albumdesc)" :serial-number="i + 1" />
            </div>
            <SongListItem v-for="(e, i) in filterSongList" :headline="e.songname" :description="description(e.albumname, e.albumdesc)" :serial-number="i + 1" />
        </mdui-list>
        <mdui-list v-if="type === '专辑'">
            <div v-show="!searchKey">
                <SongListItem v-once v-for="(e, i) in songList" :headline="e.title" :description="description(e.singer.map((s) => s.name).join('-'), e.subtitle)" :serial-number="i + 1" />
            </div>
            <SongListItem v-for="(e, i) in filterSongList" :headline="e.title" :description="description(e.singer.map((s) => s.name).join('-'), e.subtitle)" :serial-number="i + 1" />
        </mdui-list>
    </div>
</template>

<script setup>
import { ref, computed, toRaw } from 'vue'
import 'mdui/components/list.js'
import 'mdui/components/list-item.js'
import 'mdui/components/button-icon.js'
import SearchInput from '@/components/SearchInput.vue'
import SongListItem from '@/components/SongListItem.vue'

const props = defineProps({
    songList: [ Array, Number ],
    type: {
        type: String,
        default: '歌单'
    }
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
            if (props.type === '歌单') {
                const isIncludes = e.songname.toLowerCase().includes(searchKey.value.toLowerCase()) ||
                    e.albumname.toLowerCase().includes(searchKey.value.toLowerCase()) ||
                    e.albumdesc.toLowerCase().includes(searchKey.value.toLowerCase())
                if (isIncludes) {
                    cloneSongList.value[i].songname = e.songname.replace(reg, `<span class="mark">$1</span>`)
                    cloneSongList.value[i].albumname = e.albumname.replace(reg, `<span class="mark">$1</span>`)
                    cloneSongList.value[i].albumdesc = e.albumdesc.replace(reg, `<span class="mark">$1</span>`)
                    filterSongList.push(cloneSongList.value[i])
                }
            } else if (props.type === '专辑') {
                const isIncludes = e.title.toLowerCase().includes(searchKey.value.toLowerCase()) ||
                    e.subtitle.toLowerCase().includes(searchKey.value.toLowerCase())
                if (isIncludes) {
                    cloneSongList.value[i].title = e.title.replace(reg, `<span class="mark">$1</span>`)
                    cloneSongList.value[i].subtitle = e.subtitle.replace(reg, `<span class="mark">$1</span>`)
                    filterSongList.push(cloneSongList.value[i])
                }
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
    position: relative;
    padding: 10px 15px;
    width: 100vw;
    min-height: calc(100vh - 61.6vw);
    background-color: rgb(var(--mdui-color-surface));

    .song-list-main-contrl {
        height: 12vw;
        
        .item {
            &.hint {
                font-size: 4vw;
                padding: 0 1.5vw;
                color: rgb(var(--mdui-color-on-surface-variant));
            }

            &.waves-effect {
                padding: 0.8vw 1.5vw 0.8vw 0.6vw;
            }

            mdui-icon {
                font-size: 5.8vw;
                color: rgb(var(--mdui-color-primary));
            }

            mdui-button-icon {
                width: 9.6vw;
                height: 9.6vw;
                font-size: 6.2vw;
            }

            .name {
                margin-left: 1.2vw;
                font-size: 4vw;
            }
        }
    }

    mdui-list {
        position: relative;
        left: -15px;
        width: 100vw;
    }
}
</style>
