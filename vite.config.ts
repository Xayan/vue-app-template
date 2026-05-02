import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'
import { visualizer } from 'rollup-plugin-visualizer'
import { defineConfig, type PluginOption } from 'vite'

// https://vite.dev/config/
export default defineConfig(({ mode: _mode }) => ({
  server: {
    port: 5173,
    allowedHosts: true,
  },
  plugins: [
    vue(),
    visualizer({
      open: true,
      filename: 'dist/stats.html',
      template: 'treemap',
    }) as PluginOption,
  ].filter(Boolean),
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
}))
