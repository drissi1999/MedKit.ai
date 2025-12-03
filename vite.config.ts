import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Ensure assets resolve correctly on GitHub Pages (served from /MedKit.ai/)
  base: '/MedKit.ai/',
  server: {
    port: 3001,
    host: true,
  },
})
