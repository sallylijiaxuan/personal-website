import { defineConfig } from 'vite';
import { fileURLToPath } from 'node:url';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        home: fileURLToPath(new URL('./index.html', import.meta.url)),
        focuspet: fileURLToPath(new URL('./projects/focuspet/index.html', import.meta.url)),
        quickMeal: fileURLToPath(new URL('./projects/quick-meal/index.html', import.meta.url)),
      },
    },
  },
});
