import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'
import router from './Router'
import { createPinia } from 'pinia'

const pinia= createPinia();

createApp(App)
.use(pinia)
.use(router) 
.mount('#app')
