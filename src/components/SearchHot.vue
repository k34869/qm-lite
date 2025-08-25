<template>
    <div class="plate-title">热门搜索</div>
    <div class="warp-search-hot">
        <template v-if="searchHot.result !== -1">
            <div class="item" v-for="(e, i) in searchHot.data">
                <span class="s-num" :class="{ hot: i === 0 }">{{ i + 1 }}</span>
                <span class="keyword">{{ e.k }}</span>
            </div>
        </template>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { getSearchHot } from '../api/searchHot.js'

const searchHot = ref({ result: -1 })

onMounted(() => {
    getSearchHot()
        .then(data => {
            searchHot.value = data
        })
})
</script>

<style lang="scss" scoped>
.plate-title {
    display: inline;
    padding: 1.3vw 0;
    font-size: 3.8vw;
    font-weight: bold;
    border-bottom: 2px solid rgb(var(--mdui-color-error));
    border-bottom-left-radius: 1px;
    border-bottom-right-radius: 1px;
    margin-left: 1.3vw;
}
.warp-search-hot {
    display: grid;
    margin-top: 6.9vw;
    grid-template-columns: repeat(2, auto);
    gap: 5vw 1.6vw;

    .item {
        font-size: 3.6vw;

        .s-num {
            color: grey;
            margin: 0 1.3vw;

            &.hot {
                color: orangered;
            }
        }
        .keyword {
            margin: 0 1.3vw;
        }
    }
}
</style>