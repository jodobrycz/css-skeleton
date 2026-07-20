import { defineConfig } from 'vite';

export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        // Moderní Sass API (bez ní Vite používá zastaralé legacy JS API)
        api: 'modern-compiler',
      },
    },
  },
  server: {
    port: 3000,
    open: true,
    watch: {
      usePolling: true,
      interval: 100,
    },
  },
});
