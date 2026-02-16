const THEME_KEY = 'site-theme'

export type Theme = 'light' | 'dark'

export function applyTheme(theme: Theme) {
    const html = document.documentElement

    if (theme === 'dark') {
        html.classList.add('dark')
    } else {
        html.classList.remove('dark')
    }
    updateThemeIcons()
    localStorage.setItem(THEME_KEY, theme)
}

export function initTheme() {
    const savedTheme = localStorage.getItem(THEME_KEY) as Theme | null

    if (savedTheme) {
        applyTheme(savedTheme)
    } else {
        // اگر تم ذخیره نشده بود → بر اساس سیستم کاربر
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
        applyTheme(prefersDark ? 'dark' : 'light')
    }
}

export function toggleTheme() {
    const isDark = document.documentElement.classList.contains('dark')
    applyTheme(isDark ? 'light' : 'dark')
}

export function updateThemeIcons() {
    const isDark = document.documentElement.classList.contains('dark')

    document.querySelector('.sun')?.classList.toggle('hidden', isDark)
    document.querySelector('.moon')?.classList.toggle('hidden', !isDark)
}
