import { createApp } from 'vue'
import App from './App.vue'
import Vant from 'vant';
import 'vant/lib/index.css';
import router from "@/router/index.js"

import '@/assets/iconfont/iconfont.js'

createApp(App).use(Vant).use(router).mount('#app')
