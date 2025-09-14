import { ref, reactive } from 'vue' 
import { parseLyrics } from '@/utils/parseLyrics.js'

const isPlaying = ref(false)
const duration = ref(0)
const currentTime = ref(0)
const audio = new Audio()
const lyrics = reactive({
    currentIndex: 0
})

function updateLyricIndex(currentTime) {
    for (let i = 0; i < lyrics.content.length; i++) {
        if (currentTime > lyrics.content[i].startSeconds && currentTime < lyrics.content[i].endSeconds) {
            lyrics.currentIndex = i
            break
        }
    }
}

function createMusicPlayer(options = {}) {
    const { url, currentTime: cTime, lyric } = options
    
    if (url) {
        audio.src = url
    }

    if (lyric) {
        lyrics.content = parseLyrics(lyric)
    }

    audio.addEventListener('loadedmetadata', () => {
        duration.value = audio.duration
    })

    audio.addEventListener('timeupdate', () => {
        if (lyrics.content) {
            if (audio.currentTime > lyrics.content[lyrics.currentIndex + 1].startSeconds && audio.currentTime < lyrics.content[lyrics.currentIndex + 1].endSeconds) {
                lyrics.currentIndex++
            }
        }
        
        currentTime.value = audio.currentTime
    })

    audio.addEventListener('ended', () => {
        currentTime.value = 0
        isPlaying.value = false
    })

    if (cTime) {
        audio.currentTime = cTime
    }
}

function togglePlay() {
    if (!audio.src) {
        return
    }
    if (isPlaying.value) {
        audio.pause()
    } else {
        audio.play()
    }
    isPlaying.value = !isPlaying.value
}

function changeSource(url, isPlay = false) {
    audio.src = url
    if (isPlay) {
        audio.play()
        isPlaying.value = isPlay
    }
}

function timeUpdate(time) {
    if (lyrics.content) {
        updateLyricIndex(time)
    }
    audio.currentTime = time
}

function useMusicPlayer() {
    return {
        isPlaying,
        duration,
        currentTime,
        togglePlay,
        changeSource,
        timeUpdate,
        lyrics
    }
}

export {
    useMusicPlayer,
    createMusicPlayer
}