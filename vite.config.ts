import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import  VitePluginSitemap  from 'vite-plugin-sitemap';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePluginSitemap({
      hostname: 'https://astra-engineering.vercel.app', // Update with your actual site URL
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
