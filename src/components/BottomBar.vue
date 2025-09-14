<template>
    <div class="bottom-bar">
        <mini-music-player />
        <mdui-tabs :value="$route.name" full-width>
            <mdui-tab v-for="e in tabs" :value="e.name" :icon="e.icon" @click="$router.replace({ name: e.name })">
                {{ e.name }}
            </mdui-tab>
        </mdui-tabs>
    </div>
</template>

<script setup>
import 'mdui/components/tabs.js';
import 'mdui/components/tab.js';
import MiniMusicPlayer from './MiniMusicPlayer.vue';

const tabs = [
    {
        name: '首页',
        icon: 'home'
    },
    {
        name: '我的',
        icon: 'account_circle'
    }
]
</script>

<style scoped>
mdui-tabs {
    margin-top: 0;
    transition: margin-top 0.1s;

    mdui-tab {
        border-bottom: 2px solid rgb(var(--mdui-color-surface));
        z-index: 9;
    }
}
</style>