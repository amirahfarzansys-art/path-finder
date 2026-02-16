import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
    // For GitHub Pages you can set BASE=/path-finder/ before building.
    // For normal servers leave BASE=/ (default) so asset URLs resolve correctly.
    // base: process.env.BASE || '/',
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

// "scripts": {
//     "dev": "vite",
//     "start": "node server.js",
//     "build": "tsc && npm run build:client && npm run build:server",
//     "build:client": "vite build --outDir dist/client",
//     "build:server": "vite build --ssr src/entry-server.js --outDir dist/server",
//     "preview": "vite preview",
//     "deploy": "npm run build:client && gh-pages -d dist/client"
//   },