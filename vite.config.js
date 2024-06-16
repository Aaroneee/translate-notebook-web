import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from "path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    // 配置路径别名
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  // 配置前端服务地址和端口
  server: {
    host: '0.0.0.0',
    port: 20241,
    // 是否开启 https
    https: false,
    proxy: {
      '/api': {
        target: 'http://localhost:2024/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '') // 不可以省略rewrite
      }
    },
  },
})
