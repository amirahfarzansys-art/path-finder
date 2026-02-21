import rawData from '../../data/site-data.json'
import type { Hero } from '../../types/site'

const data = rawData.hero as Hero

export function renderHero(): string {
    return `
  <header class="relative overflow-hidden min-h-[85vh] flex items-center">
        <div class="absolute inset-0 z-0">
            <img alt="Nissan Towing Truck Service" class="w-full h-full object-cover"
                src="hero.webp" alt="Hero Image"/>
            <div class="absolute inset-0 bg-gradient-to-l from-black via-black/80 to-transparent"></div>
        </div>
        <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div class="max-w-2xl">
                <div
                    class="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-primary/20 text-primary border border-primary/30 mb-6">
                    <span class="relative flex h-3 w-3">
                        <span
                            class="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                        <span class="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                    </span>
                    <span class="text-sm font-semibold">پاسخگویی شبانه‌روزی (۲۴/۷)</span>
                </div>
                <h1 class="text-4xl md:text-6xl font-black leading-tight mb-6 text-white">
                    بهترین امداد خودرو و یدک‌کش <br />
                    <span class="text-primary underline decoration-primary/30 underline-offset-8">شاهین دژ
                        شبانه‌روزی</span>
                </h1>
                <p class="text-xl text-slate-300 mb-10 leading-relaxed max-w-xl">
                    حمل خودرو با مدرن‌ترین تجهیزات چرخ‌گیر بدون کوچکترین آسیب به خودروی شما. اعزام فوری به تمام
                    نقاط شاهین دژ و حومه در کمتر از ۲۰ دقیقه.
                </p>
                <div class="flex flex-col sm:flex-row gap-4">
                    <a class="flex items-center justify-center gap-3 bg-primary hover:bg-accent text-slate-900 text-xl font-black py-5 px-10 rounded-xl transition-all shadow-xl shadow-primary/20 group"
                        href="tel:${data.phone}">
                        <span class="material-icons group-hover:rotate-12 transition-transform">call</span>
                        تماس فوری با امداد
                    </a>
                    <a class="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 py-5 px-10 rounded-xl transition-all"
                        href="#pricing-services">
                        مشاهده لیست قیمت‌ها
                    </a>
                </div>
            </div>
        </div>
    </header>
  `
}
