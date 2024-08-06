import './assets/style.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

//importing nprogress bar css
import 'nprogress/nprogress.css'

const app = createApp(App)

import { inject } from '@vercel/analytics'
inject()

app.use(createPinia())
app.use(router)

app.mount('#app')
