import type { Config } from 'tailwindcss'
import forms from '@tailwindcss/forms'
import containerQueries from '@tailwindcss/container-queries'

export default {
    content: [
        './index.html',
        './src/**/*.{ts,tsx,js,jsx}'
    ],
    theme: {
        extend: {},
    },
    plugins: [
        forms,
        containerQueries
    ],
} satisfies Config
