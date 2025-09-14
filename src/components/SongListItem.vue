<template>
    <mdui-list-item>
        <div class="song-list-item" slot="custom">
            <div class="song-list-item-num" :class="{ not: isVoid(serialNumber) }">{{ serialNumber }}</div>
            <div class="song-list-item-content">
                <div class="song-list-item-headline" v-html="headline"></div>
                <div class="song-list-item-description" v-html="description"></div>
            </div>
            <mdui-button-icon icon="more_vert"></mdui-button-icon>
        </div>
    </mdui-list-item>
</template>

<script setup>
import { isVoid } from '@/utils/utils.js'

defineProps({
    serialNumber: Number,
    headline: String,
    description: String
})
</script>

<style scoped>
.song-list-item {
    position: relative;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 2.2vw 0;
}

.song-list-item .song-list-item-num {
    width: 15vw;
    height: 12vw;
    font-size: 4vw;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
}

.song-list-item .song-list-item-num.not {
    width: 5vw;
}

.song-list-item .song-list-item-content {
    width: 70vw;
}

.song-list-item .song-list-item-content .song-list-item-headline {
    font-size: 4.2vw;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    white-space: normal;
    color: rgb(var(--mdui-color-on-surface));
}

.song-list-item .song-list-item-content .song-list-item-description {
    font-size: 3.4vw;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    white-space: normal;
    color: rgb(var(--mdui-color-on-surface-variant));
}
     
.song-list-item mdui-button-icon[icon=more_vert] {
    position: absolute;
    right: 15px;
    font-size: 6.2vw;
    width: 10.2vw;
    height: 10.2vw;
}
</style>