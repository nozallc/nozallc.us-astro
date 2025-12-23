// @ts-check
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
	adapter: cloudflare({
		// Cloudflare Pages Functions for advanced routing
		mode: 'advanced'
	}),
	output: 'static',
	// Image optimization settings
	image: {
		service: {
			entrypoint: 'astro/assets/services/noop'
		},
		remotePatterns: []
	},
	// Build optimization
	build: {
		inlineStylesheets: 'auto',
		assets: '_astro'
	},
	// Development settings
	vite: {
		build: {
			minify: 'esbuild',
			cssCodeSplit: true,
			rollupOptions: {
				output: {
					manualChunks: {
						'vendor-animations': ['src/styles/animations.css']
					}
				}
			}
		},
		ssr: {
			external: ['svgo']
		}
	},
	// Enable prefetching for better performance
	prefetch: {
		prefetchAll: true
	}
});
