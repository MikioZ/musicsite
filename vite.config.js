import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  "vite-plugin-inspect": "^0.7.25",
  "vite-plugin-vue-inspector": "^3.4.1",
})
