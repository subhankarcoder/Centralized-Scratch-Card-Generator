import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'next-scratchcard': 'next-scratchcard/dist/index.js', // or specify the correct path to the entry file
    },
  },
});
