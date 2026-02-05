import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            ssr: 'resources/js/ssr.js', // <-- AJOUTE CETTE LIGNE
            refresh: true,
        }),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
        tailwindcss(), // <-- AJOUTER LE PLUGIN ICI
    ],
    resolve: {
        alias: {
            // Création d'un alias '@' pour pointer vers resources/js
            // Très utile pour les imports profonds
            '@': path.resolve(__dirname, './resources/js'),
        },
    },
});