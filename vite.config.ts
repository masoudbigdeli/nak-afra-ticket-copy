import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  base: '/',
  plugins: [
    react(),
    // VitePWA({
    //   strategies: 'injectManifest',
    //   injectManifest: {
    //     // globPatterns: ['**/*.{js,css,html,ico,png,svg'],
    //     swSrc: './src/sw.js'
    //   },
    //   srcDir: 'src',
    //   filename: 'sw.js',
    //   registerType: 'autoUpdate',
    //   devOptions: {
    //     enabled: true,
    //     type: 'module'
    //   }
    // })
  ],
  server: {
    open: true,
    port: 3000
  },
})
