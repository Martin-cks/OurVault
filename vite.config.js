import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  // Load env file based on `mode` (dev/production)
  
  return {
    plugins: [react()],
    server: {
      port: 5173,
      open: true
    },
  };
});