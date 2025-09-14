<template>
    <div class="progress" v-if="topcate === -1">
        <mdui-circular-progress></mdui-circular-progress>
    </div>
    <div v-else class="wrap">
        <h3 class="title">QQ音乐排行榜</h3>
        <template v-for="e in topcate">
            <h3 class="cate-title">
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
    </div>
</template>

<script setup>
import { ref } from 'vue'
import 'mdui/components/icon.js'
import 'mdui/components/circular-progress.js'
import { formatNumber } from '@/utils/formatNumber.js'
import { getTopCate } from '@/api/topCate.js'

const topcate = ref(-1)

getTopCate()
    .then(({ data }) => {
        topcate.value = data
    })
</script>

<style lang="scss" scoped>
.title {
    text-align: center;
    font-size: 5.4vw;
    margin: 1.2vw 20px 0.8vw 20px;
}

.wrap {
    padding-bottom: 3.8vw;
}

.cate-title {
    margin: 5.8vw 5.2vw 3.2vw 5.2vw;
    font-size: 4.8vw;
}

.warp-top-cate {
    display: grid;
    grid-template-columns: repeat(3, 30.2vw);
    justify-content: center;
    gap: 1.8vw;

    .item {
        position: relative;
        box-shadow: var(--mdui-elevation-level2);
        border-radius: 1.3vw;
        background-color: rgb(var(--mdui-color-surface-container));
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