import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Use relative asset paths so the site renders correctly whether it's served
  // from the root domain or a sub-path (e.g., GitHub Pages).
  base: './',
  server: {
    port: 3001,
    host: true,
  },
})
