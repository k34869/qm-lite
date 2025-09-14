<template>
    <div class="wrap">
        <div class="mask" @click="$router.back()"></div>
        <div class="singers">
            <div class="head-title">查看歌手</div>
            <hr>
            <mdui-list>
                <mdui-list-item v-for="e in data" :key="e">
                    <div class="item" slot="custom">
                        <div class="avater">
                            <img :src="'//y.qq.com/music/photo_new/T001R500x500M000' + e.mid + '.jpg?max_age=2592000'" onerror="this.src = '../../../T001_0.jpg'" />
                        </div>
                        <div class="name">{{ e.name }}</div>
                    </div>
                </mdui-list-item>
            </mdui-list>
            <hr>
            <div class="cancel waves-effect waves-light" @click="$router.back()">取消</div>
        </div>
    </div>
</template>

<script setup>
import 'mdui/components/list.js';
import 'mdui/components/list-item.js';
import {onActivated, onDeactivated} from "vue";

defineProps({
    data: Array
})

onActivated(() => {
    document.body.style.overflow = 'hidden'
})

onDeactivated(() => {
    document.body.style.overflow = 'visible'
})
</script>

<style scoped lang="scss">
.wrap {
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    z-index: 5;
}

.mask {
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    backdrop-filter: brightness(0.5);
    z-index: 5;
}

.singers {
    position: fixed;
    left: 0;
    bottom: 0;
    background-color: rgb(var(--mdui-color-surface-container));
    box-shadow: var(--mdui-elevation-level2);
    border-radius: 2.6vw 2.6vw 0 0;
    z-index: 6;

    .head-title {
        height: 10.4vw;
        line-height: 10.4vw;
        padding-left: 4.2vw;
        font-size: 3.8vw;
        color: rgb(var(--mdui-color-on-surface-variant));
    }

    .item {
        width: 100vw;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding: 1.8vw 3.2vw;

        .avater {
            width: 12.6vw;
            height: 12.6vw;
            border-radius: 50%;
            overflow: hidden;

            img {
                width: 100%;
                height: 100%;
            }
        }

        .name {
            font-size: 4.4vw;
            padding: 0 2.8vw;
        }
    }

    .cancel {
        width: 100vw;
        height: 12.4vw;
        line-height: 12.4vw;
        text-align: center;
        font-size: 4vw;
    }
}
</style>