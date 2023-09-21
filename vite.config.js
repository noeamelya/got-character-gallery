import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), 'prettier', 'eslint-plugin-prettier',],
  server: {
    open: true,
    port: 3000
  }
})