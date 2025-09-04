<template>
    <mdui-layout :class="{ hIsHide: isHide.h, fIsHide: isHide.f }">
        <mdui-top-app-bar class="layout-header">
            <Header />
        </mdui-top-app-bar>

        <mdui-layout-main class="layout-main">
            <router-view v-slot="{ Component }" :exclude="['Search', 'SongList']">
                <transition name="fade" mode="out-in">
                    <keep-alive :exclude="['Search', 'SongList']">
                        <component :is="Component" />
                    </keep-alive>
                </transition>
            </router-view>
        </mdui-layout-main>

        <mdui-bottom-app-bar class="layout-footer">
            <Footer />
        </mdui-bottom-app-bar>
    </mdui-layout>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router'
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import 'mdui/components/layout.js';
import 'mdui/components/top-app-bar.js';
import 'mdui/components/bottom-app-bar.js';

const route = useRoute()

const isHide = computed(() => {
    if (route.name === '搜索' || route.name === '歌单') {
        return { h: true, f: true }
    } else if (route.name === '排行榜') {
        return { h: false, f: true }
    } else {
        return { h: false, f: false }
    }
})
</script>

<style scoped>
.layout-header {
    height: 65px;
}

mdui-layout {
    padding-top: constant(safe-area-inset-top);
    padding-top: env(safe-area-inset-top);
    padding-bottom: constant(safe-area-inset-bottom);
    padding-bottom: env(safe-area-inset-bottom);
    padding-left: constant(safe-area-inset-left);
    padding-left: env(safe-area-inset-left);
    padding-right: constant(safe-area-inset-right);
    padding-right: env(safe-area-inset-right);
}

mdui-layout.hIsHide .layout-header {
    transform: translateY(-65px);
}

mdui-layout.fIsHide .layout-footer {
    transform: translateY(64px);
}

mdui-layout.hIsHide .layout-main {
    margin-top: 0;
}


.layout-header,
.layout-footer {
    position: fixed !important;
    width: 100%;
    transition: transform 0.3s ease;
}

.layout-footer {
    display: block !important;
    height: auto !important;
}

.layout-main {
    width: 100%;
    margin-top: 66px;
    transition: margin-top 0.3s ease;
}
</style>
