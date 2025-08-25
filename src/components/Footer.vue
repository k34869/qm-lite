<template>
    <mdui-tabs :value="$route.name" full-width>
        <mdui-tab value="首页" icon="home" @click="$router.replace({ name: '首页' })">
            主页
        </mdui-tab>
        <mdui-tab value="排行" icon="bar_chart" @click="$router.replace({ name: '排行' })">
            排行
        </mdui-tab>
        <mdui-tab value="分类" icon="category" @click="$router.replace({ name: '分类' })">
            分类
        </mdui-tab>
        <mdui-tab value="我的" icon="account_circle" @click="$router.replace({ name: '我的' })">
            我的
        </mdui-tab>
    </mdui-tabs>
</template>

<script setup>
import 'mdui/components/tabs.js';
import 'mdui/components/tab.js';
</script>

<style scoped>

</style>