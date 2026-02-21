import rawData from '../../data/site-data.json'
import type { Hero } from '../../types/site'

const data = rawData.hero as Hero

export function renderStickyCall(): string {
    return `
  <div
        class="fixed bottom-0 left-0 right-0 z-50 bg-slate-900/95 dark:bg-black/95 backdrop-blur-lg border-t border-primary/20 shadow-[0_-10px_40px_-15px_rgba(244,192,37,0.3)] transition-colors">
        <div class="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between gap-4">
            <div class="flex items-center gap-4">
                <div class="bg-primary p-3 rounded-xl animate-bounce">
                    <span class="material-icons text-slate-900 text-3xl font-bold">phone_in_talk</span>
                </div>
                <div class="hidden sm:block">
                    <p class="text-primary text-xs font-bold uppercase tracking-wider mb-1">امداد خودرو شاهین دژ ۲۴ ساعته</p>
                    <p class="text-white text-xl font-black">${data.phone}</p>
                </div>
            </div>
            <a class="flex-grow sm:flex-grow-0 bg-primary hover:bg-accent text-slate-900 font-black py-3 px-8 rounded-xl flex items-center justify-center gap-3 transition-transform hover:scale-[1.02] active:scale-95 shadow-lg shadow-primary/20"
                href="tel:${data.phone}">
                <span class="material-icons">flash_on</span>
                <span>اعزام فوری امدادگر شاهین دژ</span>
            </a>
            <div class="hidden md:flex items-center gap-2 text-slate-400 text-sm">
                <span class="relative flex h-2 w-2">
                    <span
                        class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                    <span class="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                زمان اعزام: زیر ۲۰ دقیقه در شاهین دژ
            </div>
        </div>
    </div>
    <div class="fixed inset-0 z-[100] bg-black/90 hidden items-center justify-center p-4 target:flex" id="lightbox">
        <a class="absolute inset-0 cursor-default" href="#gallery"></a>
        <div class="relative max-w-5xl w-full">
            <img alt="Enlarged Fleet Image" class="w-full h-auto rounded-lg shadow-2xl" id="lightbox-img"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKO9f5eEJuqpCR9dhiJ11oG0-TiJlHNsHScXF9fJk42mGxf5JaVIcD5DWilS9Q8V7tcpPjiweOv11ZagIdz7T8yJr8aYML41ljr2lIfF6f6v9lUa6Z-H2e6tdk7tR-Iqfo2KSMGiqz8jlSjP5L-52Dm2d91XTUMWqSRBIxYSo_pAqoQjXiiiifYpkFuuaU3gzZa4dYL6BFJi6_1kcsZvVMhZMdYKpuckeAMiRlQOt6ra5vBYoFvRsnFVk0srSCjZQ1DFGHLOYIGR4" />
            <a class="absolute -top-12 left-0 text-white hover:text-primary transition-colors" href="#gallery">
                <span class="material-icons text-4xl">close</span>
            </a>
        </div>
    </div>
  `
}
