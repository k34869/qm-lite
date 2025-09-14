<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import 'mdui/components/chip.js'
import { getSingerCate } from '@/api/singerCate.js'
import { getSingerList } from '@/api/singerList.js'

const singerCate = ref(-1)
const singerList = ref(-1)
const pageNo = ref(1)
const fetchStats = ref(true)
const currentSelect = ref({
    area: {
        id: -100,
        name: '全部'
    },
    genre: {
        id: -100,
        name: '全部'
    },
    index: {
        id: -100,
        name: '热门'
    },
    sex: {
        id: -100,
        name: '全部'
    }
})

const loadList = (key, value) => {
    if (key && value) {
        singerList.value = -1
        currentSelect.value[key] = value
    }
    getSingerList(currentSelect.value)
        .then(({ data }) => {
            singerList.value = data.list
        })
}

loadList()

const handleScroll = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop
    const clientHeight = document.documentElement.clientHeight
    const scrollHeight = document.documentElement.scrollHeight

    if (scrollTop + clientHeight >= scrollHeight - 10 && fetchStats.value) {
        fetchStats.value = false
        pageNo.value++
        getSingerList(currentSelect.value, pageNo.value)
            .then(({ data }) => {
                fetchStats.value = true
                singerList.value = singerList.value.concat(data.list)
            })
            .catch(() => {
                fetchStats.value = true
            })
    }
}

getSingerCate()
    .then(({ data }) => {
        singerCate.value = data
    })


onMounted(() => {
    window.addEventListener("scroll", handleScroll)
})

onBeforeUnmount(() => {
    window.removeEventListener("scroll", handleScroll)
})
</script>

<template>
    <div class="wrap-singers" v-if="singerCate !== -1">
        <div class="singers-filter">
            <div class="singers-filter-type" v-for="(t, k) in singerCate">
                <mdui-chip v-for="e in t" elevated @click="loadList(k, e)"
                    :class="{ active: currentSelect[k].id === e.id }">{{ e.name }}</mdui-chip>
            </div>
        </div>
        <div class="loading" v-if="singerList === -1">
            <mdui-circular-progress></mdui-circular-progress>
        </div>
        <div class="singers" v-else>
            <div class="singer waves-effect waves-light" v-for="e in singerList">
                <div class="singer-head-image">
                    <img :src="e.singer_pic" onerror="this.src = '../../T001_0.jpg'" />
                </div>
                <div class="singer-name line-hide-3">{{ e.singer_name }}</div>
            </div>
        </div>
        <div class="loading" v-if="fetchStats === false">
            <mdui-circular-progress></mdui-circular-progress>
        </div>
    </div>
</template>

<style scoped>
.wrap-singers {
    padding-bottom: 15.8vw;
    
    .singers-filter {
        padding: 1.8vw 3.3vw;

        .singers-filter-type {
            padding: 1.2vw 0;

            mdui-chip {
                margin: 0 0.8vw;

                &.active {
                    background-color: rgb(var(--mdui-color-primary));
                    color: rgb(var(--mdui-color-surface));
                }
            }
        }
    }

    .singers {
        display: grid;
        grid-template-columns: repeat(2, 45vw);
        grid-template-rows: repeat(auto-fit, auto);
        justify-content: center;
        row-gap: 5vw;
        column-gap: 3.3vw;
        margin-top: 1.2vw;

        .singer {
            display: flex;
            align-items: center;

            .singer-head-image {
                width: 22vw;
                height: 22vw;
                border-radius: 50%;
                overflow: hidden;
                margin: 0.8vw 1.6vw;
                box-shadow: var(--mdui-elevation-level2);

                img {
                    width: 100%;
                    height: 100%;
                }
            }

            .singer-name {
                width: 19.4vw;
                font-size: 3.8vw
            }
        }
    }

    .loading {
        display: flex;
        justify-content: center;
        padding: 3.8vw 0;
    }
}
</style>