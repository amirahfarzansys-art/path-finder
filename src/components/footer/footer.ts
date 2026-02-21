import rawData from '../../data/site-data.json'
import type { Hero } from '../../types/site'

const data = rawData.hero as Hero

export function renderFooter(): string {
    return `
      <footer class="bg-slate-900 dark:bg-black border-t border-white/5 pt-20 pb-28 transition-colors" id="contact">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid md:grid-cols-4 gap-12 mb-16">
                <div class="col-span-1 md:col-span-2">
                    <div class="flex items-center gap-2 mb-6">
                        <div class="rounded-lg">
                            <img src="logo.png" alt="Logo" class="w-12 h-12">
                        </div>
                        <span class="text-xl font-bold tracking-tight text-white">امداد خودرو <span
                                class="text-primary">راه‌بان</span></span>
                    </div>
                    <p class="text-slate-400 leading-relaxed mb-6 max-w-md">
                        بهترین خدمات امداد خودرو و یدک‌کش شاهین دژ با کادری مجرب و سابقه بیش از ۱۰ سال در زمینه امداد جاده‌ای، 
                        آماده خدمت‌رسانی به شما همشهریان عزیز در تمام ساعات شبانه‌روز می‌باشد. ایمنی خودروی شما اولویت ماست.
                    </p>
                    <div class="flex gap-4">
                        <a class="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-slate-900 transition-all text-slate-400 group"
                            href="#">
                            <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24">
                                <path
                                    d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z">
                                </path>
                            </svg>
                        </a>
                    </div>
                </div>
                <div>
                    <h4 class="text-white font-bold mb-6">دسترسی سریع</h4>
                    <ul class="space-y-4 text-slate-400">
                        <li><a class="hover:text-primary transition-colors" href="#">صفحه اصلی</a></li>
                        <li><a class="hover:text-primary transition-colors" href="#pricing-services">خدمات و قیمت‌ها</a>
                        </li>
                        <li><a class="hover:text-primary transition-colors" href="#coverage">محدوده پوشش</a></li>
                    </ul>
                </div>
                <div>
                    <h4 class="text-white font-bold mb-6">اطلاعات تماس</h4>
                    <ul class="space-y-4 text-slate-400">
                        <li class="flex items-start gap-3">
                            <span class="material-icons text-primary text-sm mt-1">location_on</span>
                            <span>شهید بهشتی، شاهین دژ، آذربایجان غربی</span>
                        </li>
                        <li class="flex items-center gap-3">
                            <span class="material-icons text-primary text-sm">phone</span>
                            <span dir="ltr">${data.phone}</span>
                        </li>
                        <li class="flex items-center gap-3">
                            <span class="material-icons text-primary text-sm">access_time</span>
                            <span>خدمات شبانه‌روزی (۷ روز هفته)</span>
                        </li>
                        <li class="flex items-center gap-3">
                            <span class="material-icons text-primary text-sm">local_shipping</span>
                            <span>امداد خودرو و یدک‌کش شاهین دژ</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-4">
                <p class="text-slate-500 text-sm">© ۱۴۰۴ تمامی حقوق مادی و معنوی برای مجموعه امداد راه‌بان محفوظ
                    است.</p>
                <div class="flex gap-6">
                    <img alt="Trust Badge 1"
                        class="h-12 w-12 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all rounded bg-white/5 p-1"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcZbPrbooeSG9L09vixx_mkkLx5gk-EgmezVRCVxJOHyXVW4WEe385MMg-Yz21lHSpBqNNt1NEmUo9obw80XC9eK4pFiEPk7yAPgqE79JhtWUGK23R9FfbgEr4hPWq-5-gmNJ36kBIzf1Sy9Ti0V0-Wda6Kch9RINts10Ie5ged6ZZS17KOLaju8JHlBBbuO0n2tiM7eh7tWAzXX-CrEY5d-yO65sHgcwOy2eAGfLaOTuZzJKJoWK_OD9Wmbr4H3NOpg1Au15K91o" />
                    <img alt="Trust Badge 2"
                        class="h-12 w-12 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all rounded bg-white/5 p-1"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBe1443kST08__thXmFz7U-Kt9jVQsOBVeDc-KKS3yRIqJPjuQID61nBk_vaCcJ81u6XoxvUFedA7Jw9vygLo4knl1rWWBAsvX4K5yNVQQkmTY3uKSukSpfCSbwri-OYkfVkXO1-C06VZK9pFuHJXfeXBJvzyZhKUObLgudStF6IKm7HBbx10pL9YLcPag33zTE7ejVlPbiPb27BclYgVn5EXRjJaAKFYzyH52M-7D5BfbXKZ04F_1d321tlzSlOEjPlYea-R888tY" />
                </div>
            </div>
        </div>
    </footer>
  `
}
