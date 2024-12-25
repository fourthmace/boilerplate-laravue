import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    resolve: {
        alias: {
            'vue': 'vue/dist/vue.esm-bundler.js',  // Alias Vue untuk mendukung runtime template compiler
        },
    },
    plugins: [
        laravel({
            input: ['resources/ts/app.ts', 'resources/css/app.css'],
            refresh: true,
        }),
        vue(),
    ],
});
