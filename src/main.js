import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import './assets/global.scss'
import { createPinia } from 'pinia'


createApp(App).use(createPinia()).mount('#app')
