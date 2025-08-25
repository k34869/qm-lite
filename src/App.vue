<template>
    <mdui-layout :class="{ hide: isHide }">
        <mdui-top-app-bar class="layout-header">
            <Header />
        </mdui-top-app-bar>

        <mdui-layout-main class="layout-main">
            <router-view v-slot="{ Component }" :exclude="[ 'Search' ]">
                <transition name="fade" mode="out-in">
                    <keep-alive :exclude="[ 'Search' ]">
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
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router'
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import 'mdui/components/layout.js';
import 'mdui/components/top-app-bar.js';
import 'mdui/components/bottom-app-bar.js';

const route = useRoute()
const isHide = ref(false)

watch(() => route.fullPath, (newPath) => {
    if (newPath === '/search') {
        isHide.value = true
    } else {
        isHide.value = false
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

mdui-layout.hide .layout-header {
    transform: translateY(-65px);
}

mdui-layout.hide .layout-footer {
    transform: translateY(64px);
}

mdui-layout.hide .layout-main {
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
    padding-bottom: 80px !important;
    width: 100%;
    margin-top: 66px;
    padding: 10px 15px;
    transition: margin-top 0.3s ease;
}
</style>
