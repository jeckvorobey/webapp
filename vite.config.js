import { defineConfig } from 'vite'
import {fileURLToPath, URL} from 'node:url';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/webapp/',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@img': fileURLToPath(new URL('./src/assets/images', import.meta.url)),
    },
  },
})
