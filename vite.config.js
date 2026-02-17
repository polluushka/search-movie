import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/search-movie/'
  // base: process.env.NODE_ENV === 'production' ? '/search-movie/' : '/'

})
