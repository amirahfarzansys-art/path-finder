import rawData from '../../data/site-data.json'
import type { Hero } from '../../types/site'

const data = rawData.hero as Hero

export function renderHeader(): string {
    return `
  <nav class="sticky top-0 z-50 bg-white/90 dark:bg-background-dark/90 backdrop-blur-md border-b border-primary/10 transition-colors">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center h-20">
                <div class="flex items-center gap-2">
                    <div class="rounded-lg">
                    <img src="logo.png" alt="Logo" class="w-12 h-12">
                    </div>
                    <span class="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">امداد خودرو <span
                            class="text-primary">${data.title}</span></span>
                </div>
                <div class="hidden md:flex items-center space-x space-x-8">
                    <a class="text-slate-700 dark:text-slate-200 hover:text-primary transition-colors" href="#">صفحه
                        اصلی</a>
                    <a class="text-slate-700 dark:text-slate-200 hover:text-primary transition-colors"
                        href="#pricing-services">خدمات و قیمت‌ها</a>
                    <a class="text-slate-700 dark:text-slate-200 hover:text-primary transition-colors"
                        href="#coverage">محدوده پوشش</a>
                </div>
                <div class="flex items-center gap-4">
                    <button
                        id="theme-toggle"
                        class="theme-toggle-btn p-2 rounded-full bg-slate-100 dark:bg-white/10 text-slate-700 dark:text-primary hover:bg-slate-200 dark:hover:bg-white/20 transition-all flex items-center justify-center"
                        title="تغییر حالت نمایش">
                        <span class="material-icons sun">light_mode</span>
                        <span class="material-icons moon">dark_mode</span>
                    </button>
                    <a class="hidden sm:flex items-center gap-2 bg-primary hover:bg-accent text-slate-900 font-bold py-2 px-6 rounded-lg transition-all transform hover:scale-105"
                        href="tel:${data.phone}">
                        <span class="material-icons">phone_in_talk</span>
                        <span>${data.phone}</span>
                    </a>
                    <button class="md:hidden text-slate-900 dark:text-white">
                        <span class="material-icons text-3xl">menu</span>
                    </button>
                </div>
            </div>
        </div>
    </nav>
  `
}