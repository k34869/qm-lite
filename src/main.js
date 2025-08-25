import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/global.css'
import 'vue3-carousel/carousel.css'
import 'mdui/mdui.css'

createApp(App).use(router).mount('#app')
