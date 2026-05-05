import App from '@/App.vue'
import router from '@/router'
import '@/style.css'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { createApp } from 'vue'

const app = createApp(App)
const pinia = createPinia().use(piniaPluginPersistedstate)

app.use(router)
app.use(pinia)

app.mount('#app')
