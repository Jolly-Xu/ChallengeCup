import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// 引入公共css
import './assets/css/common.css'



const app = createApp(App)
app.use(router)
app.mount('#app')
