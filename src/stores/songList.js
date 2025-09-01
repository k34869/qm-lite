import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useSongList = defineStore('songList', () => {
    const songList = ref({})
    return {
        songList
    }
})