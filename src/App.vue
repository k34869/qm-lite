<template>
    <mdui-layout :class="{ topHide: isHide.top, bottomHide: isHide.bottom }">
        <mdui-top-app-bar class="fixed">
            <TopBar />
        </mdui-top-app-bar>

        <mdui-layout-main>
            <router-view v-slot="{ Component }">
                <transition name="fade" mode="out-in">
                    <keep-alive :include="include">
                        <component :is="Component" :key="key" />
                    </keep-alive>
                </transition>
            </router-view>
        </mdui-layout-main>

        <mdui-bottom-app-bar class="fixed">
            <BottomBar />
        </mdui-bottom-app-bar>
    </mdui-layout>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import 'mdui/components/layout.js'
import 'mdui/components/layout-main.js'
import 'mdui/components/top-app-bar.js'
import 'mdui/components/bottom-app-bar.js'
import TopBar from '@/components/TopBar.vue'
import BottomBar from '@/components/BottomBar.vue'

const route = useRoute()

const isHide = computed(() => {
    if (/^(搜索|歌单|专辑|查看歌手|歌单详情)$/.test(route.name)) {
        return { top: true, bottom: true }
    } else if (/^(排行|分类歌单|歌手)$/.test(route.name)) {
        return { top: false, bottom: true }
    } else {
        return { top: false, bottom: false }
    }
})

const key = computed(() => {
    if (/歌单/.test(route.name)) {
        return route.params.id
    } else {
        return undefined
    }
})

const include = computed(() => {
    if (/^(首页|我的)$/.test(route.name)) {
        return ['首页', '我的']
    } else if (/^(分类歌单)$/.test(route.name)) {
        return ['首页', '我的', '分类歌单']
    } else {
        return undefined
    }
})
</script>

<style scoped>
mdui-layout {
    mdui-top-app-bar {
        height: calc(65px + var(--safe-area-inset-top));
        padding-top: var(--safe-area-inset-top);
    }

    mdui-bottom-app-bar {
        display: block !important;
        height: auto !important;
        padding-bottom: var(--safe-area-inset-bottom);
        background-color: rgb(var(--mdui-color-surface));
        z-index: 1;
    }

    mdui-layout-main {
        width: 100%;
        padding: 0 !important;
        margin-top: calc(66px + var(--safe-area-inset-top));
        padding-bottom: var(--safe-area-inset-bottom);
        transition: margin-top 0.3s ease;
    }

    &.topHide {
        mdui-top-app-bar {
            transform: translateY(calc(-65px - var(--safe-area-inset-top)));
        }

        mdui-layout-main {
            margin-top: var(--safe-area-inset-top);
        }
    }

    &.bottomHide {
        mdui-bottom-app-bar {
            transform: translateY(calc(65px + var(--safe-area-inset-top)));
        }
    }
}
</style>
