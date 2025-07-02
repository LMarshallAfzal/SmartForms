import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess({ typescript: true }),
	kit: {
		adapter: adapter(),
		// Specify lib directory
		files: {
			lib: 'src/lib'
		}
	},
	// Configure package exports from lib directory
	package: {
		exports: (filepath) => {
			return filepath.startsWith('lib/');
		}
	}
};

export default config;
