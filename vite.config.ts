import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
    base: '/path-finder/',
    build: {
        outDir: 'dist',
        assetsDir: 'assets',
        sourcemap: false
    },
    plugins: [
        tailwindcss(),
    ],
})