import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  // relativo: funciona em qualquer nome de repositório no GitHub Pages
  base: './',
})
