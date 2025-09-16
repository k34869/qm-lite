<template>
    <div class="cate-wrap">
        <div class="tabs" v-show="$route.name === '分类歌单'">
            <mdui-tabs :value="currentCate.id" variant="primary">
                <mdui-tab :value="e.id" v-for="e in cates.$state" @click="loadList(e)">{{ e.name }}</mdui-tab>
            </mdui-tabs>
            <mdui-icon name="dehaze"></mdui-icon>
        </div>
        <h3 class="name">{{ currentCate.name }}</h3>
        <List type="分类歌单" :data="playlist" />
        <div class="loading" v-if="fetchStats === false">
            <mdui-circular-progress></mdui-circular-progress>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import 'mdui/components/tabs.js';
import 'mdui/components/tab.js';
import 'mdui/components/circular-progress.js';
import List from '@/components/GridList.vue';
import { getCateSongList } from '@/api/cateSongList.js'
import { useCates } from '@/stores/catesStack.js'

defineOptions({
    name: '分类歌单'
})

const cates = useCates()
const currentCate = ref({
    name: '全部',
    id: 10000000
})
const playlist = ref(-1)
const pageNo = ref(1)
const fetchStats = ref(true)

const loadList = (cate) => {
    if (cate) {
        window.scrollTo({ top: 0 })
        playlist.value = -1
        currentCate.value = cate
    }
    getCateSongList(cate)
        .then(({ data }) => {
            playlist.value = data.list
        })
}

loadList()

const handleScroll = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop
    const clientHeight = document.documentElement.clientHeight
    const scrollHeight = document.documentElement.scrollHeight

    if (scrollTop + clientHeight >= scrollHeight - 10 && fetchStats.value) {
        fetchStats.value = false
        const options = {
            id: currentCate.value.id,
            pageNo: ++pageNo.value
        }
        getCateSongList(options)
            .then(({ data }) => {
                fetchStats.value = true
                playlist.value = playlist.value.concat(data.list)
            })
            .catch(() => {
                fetchStats.value = true
            })
    }
}

onMounted(() => {
    window.addEventListener("scroll", handleScroll)
})

onBeforeUnmount(() => {
    window.removeEventListener("scroll", handleScroll)
})
</script>

<style scoped>
.cate-wrap {
    padding-top: 12vw;
    padding-bottom: 15.8vw;

    .name {
        margin: 5.2vw 20px 2.7vw 20px;
        font-size: 4.8vw;
    }

    .tabs {
        height: 12.8vw;
        overflow: hidden;
        position: fixed;
        z-index: 11;
        top: calc(65px + var(--safe-area-inset-top));

        mdui-tabs {
            position: relative;
            width: 100vw;
            overflow-x: scroll;
            padding-right: 14.2vw;

            mdui-tab {
                height: 12.8vw;
                flex-shrink: 0;
                border-bottom: 2px solid rgb(var(--mdui-color-surface));
                z-index: 9;

                &::part(label) {
                    font-size: 3.8vw;
                }
            }
        }

        mdui-icon[name=dehaze] {
            position: absolute;
            right: 0;
            top: 0;
            z-index: 10;
            width: 14.2vw;
            height: 12.8vw;
            line-height: 12.8vw;
            text-align: center;
            font-size: 5.8vw;
            background-color: rgb(var(--mdui-color-surface));
        }
    }

    .loading {
        display: flex;
        justify-content: center;
        padding: 3.8vw 0;
    }
}
</style>