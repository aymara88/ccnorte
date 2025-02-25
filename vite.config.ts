import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/ccnorte/", // 👈 Add this line (replace with your actual repo name)
  build: {
    outDir: "dist"
  }
})
