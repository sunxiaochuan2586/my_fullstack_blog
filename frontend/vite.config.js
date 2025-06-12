import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // 选项写法
      '/api': {
        target: 'http://127.0.0.1:5000', // 目标后端服务地址
        changeOrigin: true,             // 需要虚拟主机站点
      }
    }
  }
})