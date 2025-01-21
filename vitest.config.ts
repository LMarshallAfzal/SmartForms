// import { resolve } from 'path';
import { defineConfig } from "vitest/config";
import { svelte } from "@sveltejs/vite-plugin-svelte";

export default defineConfig({
    plugins: [svelte({ hot: !process.env.VITEST })],
    test: {
        globals: true,
        environment: "jsdom",
        setupFiles: ["./vitest-setup.js"],
        // alias: [
        //     { find: '$app', replacement: resolve(__dirname, './src/lib/__tests__/__mocks__/app') },
        //     { find: '$lib', replacement: resolve(__dirname, './src/lib') },
        // ]
    },
});
