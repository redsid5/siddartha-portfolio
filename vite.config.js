import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        resume: resolve(__dirname, 'resume.html'),
        sid: resolve(__dirname, 'sid.html'),
      },
    },
  },
});
