 import { defineConfig } from 'vite';

export default defineConfig({
  base: '/panda-calorie-tracker/',

  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
      },
    },
  },
});
