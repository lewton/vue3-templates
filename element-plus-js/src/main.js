import { createApp } from 'vue'
import 'element-plus/theme-chalk/el-loading.css'
import 'element-plus/theme-chalk/el-message.css'
// import 'element-plus/theme-chalk/el-message-box.css'
import App from './App.vue'
import router from './router'
import store from './stores'

const app = createApp(App)

app.use(store)
app.use(router)

app.mount('#app')
