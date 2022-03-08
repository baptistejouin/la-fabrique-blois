import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'
import prismic from '@/prismic'
import '../node_modules/tiny-slider/dist/tiny-slider.css'
import '@/assets/sass/app.scss'

createApp(App).use(router).use(prismic).mount('#app')
