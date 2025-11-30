import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  css: {
    modules: {
      localsConvention: 'camelCase',
    },
  },
  server: {
    host: '0.0.0.0',
    port: 5173,
    allowedHosts: ['localhost', 'dev.ohi-stin-camunda-nai-ston-erota.site'],
  },
});
