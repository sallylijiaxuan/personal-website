import { defineConfig } from 'vite';
import { fileURLToPath } from 'node:url';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        echo: fileURLToPath(new URL('./projects/echo/index.html', import.meta.url)),
        brattle: fileURLToPath(new URL('./projects/brattle/index.html', import.meta.url)),
        kava: fileURLToPath(new URL('./projects/kava/index.html', import.meta.url)),
        wetrack: fileURLToPath(new URL('./projects/wetrack/index.html', import.meta.url)),
        tabby: fileURLToPath(new URL('./projects/tabby/index.html', import.meta.url)),
        home: fileURLToPath(new URL('./index.html', import.meta.url)),
        focuspet: fileURLToPath(new URL('./projects/focuspet/index.html', import.meta.url)),
        quickMeal: fileURLToPath(new URL('./projects/quick-meal/index.html', import.meta.url)),
      },
    },
  },
});
