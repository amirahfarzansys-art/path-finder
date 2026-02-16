import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'

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
        VitePWA({
            registerType: 'autoUpdate',
            includeAssets: ['favicon.ico'],
            manifest: {
                name: 'امداد خودرو راه‌بان',
                short_name: 'راه‌بان',
                description: 'مداد خودرو راه‌بان خدمات ۲۴ ساعته یدک‌کش و مکانیک سیار در شاهین دژ و حومه با اعزام سریع و قیمت شفاف',
                theme_color: '#0f172a',
                background_color: '#0f172a',
                display: 'standalone',
                start_url: '/path-finder/',
                scope: '/path-finder/',
                lang: 'fa',
                dir: 'rtl',
                icons: [
                    {
                        src: '/path-finder/pwa-192.png',
                        sizes: '192x192',
                        type: 'image/png'
                    },
                    {
                        src: '/path-finder/pwa-512.png',
                        sizes: '512x512',
                        type: 'image/png'
                    }
                ]
            }
        })
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