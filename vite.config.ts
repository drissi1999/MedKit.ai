import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/ai-medkit-vitrine/', // For GitHub Pages
  server: {
    port: 3001,
    host: true
  },
  build: {
    outDir: 'dist'
  }
})
