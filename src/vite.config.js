import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    react(),tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'My Vite App',
        short_name: 'ViteApp',
        start_url: '/',
        display: 'standalone',
      },
      workbox: {
        offlineGoogleAnalytics: true,
      },
    }),
  ],
  base: '/PatCare/',
});
