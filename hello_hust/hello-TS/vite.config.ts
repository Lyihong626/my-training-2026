import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  root: './src',
  server: {
    port: 3001,
    open: true,  // Vite 前端 React 项目
    proxy: {
      '/graphql': {
        target: 'http://localhost:3000',//NestJS 后端 GraphQL 服务（接口服务）
        changeOrigin: true,
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
});