import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import fonts from 'vite-plugin-fonts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue({ reactivityTransform: true }),
    fonts({
      google: {
        families: [{ name: 'Inter', styles: 'wght@300;400;500;600;700' }],
      },
    })],
})
