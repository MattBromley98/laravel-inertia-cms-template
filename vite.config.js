import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import {svelte} from "@sveltejs/vite-plugin-svelte"
import dynamicImportVars from '@rollup/plugin-dynamic-import-vars';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            ssr: "resources/js/ssr.js",
            refresh: true,
        }),
        svelte({
            compilerOptions: {
                hydratable: true,
            },
        }),
    ],
    // build: {
    //     rollupOptions: {
    //         output: {
    //             format: 'cjs',
    //         }
    //     }
    // },
    esbuild: {
        supported: {
            'top-level-await': true
        }
    }
});
