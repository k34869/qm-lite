<template>
    <div class="wrap flex f-sb-center">
        <div class="app-name">{{ $route.name }}</div>
        <div class="logo flex f-center">
            <mdui-icon name='music_note'></mdui-icon>
        </div>
    </div>
</template>

<script setup>
import 'mdui/components/button-icon.js'
</script>

<style scoped>
.wrap {
    position: relative;
    width: 100%;
    height: 65px;
    padding: 10px 20px;

    .app-name {
        padding-bottom: 8px;
        margin-left: 10px;
        font-weight: bold;
        font-size: 18px;
        border-bottom: 2px solid rgb(var(--mdui-color-primary));
        border-bottom-left-radius: 1px;
        border-bottom-right-radius: 1px;
    }

    .logo {
        background-color: rgb(var(--mdui-color-primary));
        border-radius: 50px;
        width: 30px;
        height: 30px;
        text-align: center;
    }
}

mdui-icon[name=music_note] {
    background-color: rgb(var(--mdui-color-primary));
    color: rgb(var(--mdui-color-on-error));
    border-radius: 50px;
}
</style>