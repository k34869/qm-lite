<template>
    <mdui-tabs :value="$route.name" full-width>
        <mdui-tab v-for="e in tabs" :value="e.name" :icon="e.icon" @click="$router.replace({ name: e.name })">
            {{ e.name }}
        </mdui-tab>
    </mdui-tabs>
</template>

<script setup>
import 'mdui/components/tabs.js';
import 'mdui/components/tab.js';

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