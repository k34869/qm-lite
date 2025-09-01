<template>
    <template v-if="topcate.result === -1">
        <div class="progress">
            <mdui-circular-progress></mdui-circular-progress>
        </div>
    </template>
    <template v-else>
        <h3 class="plate">QQ音乐排行榜</h3>
        <template v-for="e in topcate.data">
            <h3 class="title">
                {{ e.title }}
            </h3>
            <div class="warp-top-cate">
                <template v-for="e2 in e.list">
                    <div class="item" v-if="e2.label !== 'MV榜'">
                        <img :src="e2.picUrl" class="bg-pic">
                        <span class="listen-num">{{ formatNumber(e2.listenNum) }}</span>
                    </div>
                </template>
            </div>
        </template>
    </template>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import 'mdui/components/icon.js'
import 'mdui/components/circular-progress.js'
import { formatNumber } from '../utils/formatNumber.js'
import { getTopCate } from '../api/topCate.js'

const topcate = ref({ result: -1 })

onMounted(() => {
    getTopCate()
        .then(data => {
            topcate.value = data
        })
})
</script>

<style lang="scss" scoped>
.plate {
    text-align: center;
    font-size: 5.4vw;
    margin-top: 1vw;
    margin-bottom: 0.5vw;
}

.title {
    margin: 5.8vw 2.5vw 2.2vw 2.5vw;
    font-size: 4.6vw;
}

.warp-top-cate {
    display: grid;
    grid-template-columns: repeat(3, auto);
    justify-content: center;
    gap: 1.8vw;

    .item {
        position: relative;
        width: 29.5vw;
        height: 29.5vw;
        box-shadow: var(--mdui-elevation-level2);
        border-radius: 1.3vw;
        background-color: grey;
        overflow: hidden;

        .bg-pic {
            width: 100%;
            height: 100%;
        }

        .listen-num {
            position: absolute;
            bottom: 1.5vw;
            left: 1.4vw;
            font-size: 2.8vw;
            color: rgb(230, 225, 229);
            font-weight: bold;
        }
    }
}
</style>