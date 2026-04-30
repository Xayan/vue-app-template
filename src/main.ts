import { createApp } from 'vue'
import type { Component } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import * as RekaUI from 'reka-ui'

const app = createApp(App)

// Register Reka UI components globally
Object.entries(RekaUI).forEach(([name, component]) => {
  if (typeof component === 'object' && component !== null) {
    app.component(name, component as Component)
  }
})

app.use(router).mount('#app')
