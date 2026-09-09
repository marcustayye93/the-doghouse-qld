import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Preview builds set VITE_PREVIEW_BASE=/the-doghouse-qld/ ; production defaults to '/'.
  base: process.env.VITE_PREVIEW_BASE || '/',
})
