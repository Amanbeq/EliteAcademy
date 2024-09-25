import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import sass from 'sass'
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@api': path.resolve('src/api'),
      '@store': path.resolve('src/store'),
      '@components': path.resolve('src/components'),
      '@pages': path.resolve('src/pages'),
      '@redux': path.resolve('src/redux'),
      '@shared': path.resolve('src/shared'),
      '@ui': path.resolve('src/ui'),
      '@images': path.resolve('src/images'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        implementation: sass,
      },
    },
  },
});
