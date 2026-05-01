import * as RekaUI from 'reka-ui'
import type { Component } from 'vue'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './style.css'

const app = createApp(App)

// Register Reka UI components globally
Object.entries(RekaUI).forEach(([name, component]) => {
  if (typeof component === 'object' && component !== null) {
    app.component(name, component as Component)
  }
})

app.use(router).mount('#app')
