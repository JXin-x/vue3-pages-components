import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ui from '../packages/index'

const app = createApp(App)

app.use(router)
app.use(ui)

app.mount('#app')
