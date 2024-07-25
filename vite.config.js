// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: "/RainVain/",
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Listen on all IP addresses
    port: 3000,      // Specify the port you want to use
  }
});
