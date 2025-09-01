import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import './assets/css/global.css'
import 'vue3-carousel/carousel.css'
import 'mdui/mdui.css'
import '@/assets/js/waves.js'

createApp(App).use(router).use(createPinia()).mount('#app')
