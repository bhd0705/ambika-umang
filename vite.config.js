import { defineConfig } from 'vite'

// Vercel serves from the domain root — use "/".
// For Apache subpath deploys, build with: VITE_BASE_PATH=/cards/192026/ npm run build
export default defineConfig({
  base: process.env.VITE_BASE_PATH || '/',
  server: {
    port: 5173,
    open: true,
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
})
