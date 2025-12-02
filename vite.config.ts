import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/MedKit.ai/',   // EXACT repo name, CASE SENSITIVE
})
