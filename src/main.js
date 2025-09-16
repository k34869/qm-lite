import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from "pinia-plugin-persistedstate"
import App from './App.vue'
import router from './router'
import '@/assets/css/global.css'
import '@/assets/js/waves.js'
import 'mdui/mdui.css'
import 'swiper/css'
import { App as NativeApp } from '@capacitor/app'
import { ScreenOrientation } from '@capacitor/screen-orientation'
import { enableSafeArea } from '@/utils/SafeArea.js'
import { createMusicPlayer } from '@/hooks/useMusicPlayer.js'

// 启动 Android 安全区域( 注入 CSS 变量 --safe-area )
enableSafeArea()

// 开启设备硬件返回功能
NativeApp.addListener('backButton', ({ canGoBack }) => {
    if (canGoBack) {
        router.back()
    } else {
        NativeApp.minimizeApp()
    }
})

// 锁定设备屏幕方向: portrait
ScreenOrientation.lock({ orientation: 'portrait' })

createApp(App)
    .use(router)
    .use(
        createPinia()
            .use(piniaPluginPersistedstate)
    )
    .mount('#app')

createMusicPlayer()