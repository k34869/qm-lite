<template>
    <router-view v-slot="{ Component }" :exclude="[ 'SongListDetails' ]">
        <transition name="fade" mode="out-in">
            <keep-alive :exclude="[ 'SongListDetails' ]">
                <component :is="$route.name === '歌单详情' ? Component : SongList" :id="$route.params.id" />
            </keep-alive>
        </transition>
    </router-view>
</template>

<script setup>
import SongList from '@/components/SongList.vue'

defineOptions({
    name: 'SongList'
})
</script>