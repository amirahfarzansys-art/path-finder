import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
    // For GitHub Pages you can set BASE=/path-finder/ before building.
    // For normal servers leave BASE=/ (default) so asset URLs resolve correctly.
    base: process.env.BASE || '/',
    build: {
        outDir: 'dist',
        assetsDir: 'client/assets',
        sourcemap: false
    },
    plugins: [
        tailwindcss(),
    ],
})