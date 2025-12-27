// @ts-check
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  adapter: cloudflare({
    // Cloudflare Pages Functions for advanced routing
    mode: 'advanced',
  }),
  output: 'static',
  // Image optimization settings
  image: {
    service: {
      entrypoint: 'astro/assets/services/noop',
    },
    remotePatterns: [],
  },
  // Build optimization
  build: {
    inlineStylesheets: 'auto',
    assets: '_astro',
  },
  // Development settings
  vite: {
    build: {
      minify: 'esbuild',
      cssCodeSplit: true,
    },
  },
  // Enable prefetching for better performance
  prefetch: {
    prefetchAll: true,
  },
});
