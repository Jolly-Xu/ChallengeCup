import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// 引入公共css
import './assets/css/common.css'

// 引入element
import installElementPlus from "./plugins/element"


const app = createApp(App)
app.use(router)
installElementPlus(app)
app.mount('#app')
