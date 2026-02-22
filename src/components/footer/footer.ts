import rawData from '../../data/site-data.json'
import type { Footer } from '../../types/site';

const data = rawData.footer as Footer;

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
                        بهترین خدمات امداد خودرو و یدک‌کش راه‌بان شاهین دژ با کادری مجرب و سابقه بیش از ۱۰ سال در زمینه امداد جاده‌ای، 
                        آماده خدمت‌رسانی به شما همشهریان عزیز در تمام ساعات شبانه‌روز می‌باشد. ایمنی خودروی شما اولویت ماست.
                    </p>
                    <div class="flex gap-4">
                        <a class="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-slate-900 transition-all text-slate-400 group"
                            href="${data.instagram}" target="_blank" rel="noopener noreferrer" title="اینستاگرام">
                            <svg class="w-6 h-6 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M7.75 2C4.57 2 2 4.57 2 7.75v8.5C2 19.43 4.57 22 7.75 22h8.5C19.43 22 22 19.43 22 16.25v-8.5C22 4.57 19.43 2 16.25 2h-8.5zm0 2h8.5C18.55 4 20 5.45 20 7.75v8.5C20 18.55 18.55 20 16.25 20h-8.5C5.45 20 4 18.55 4 16.25v-8.5C4 5.45 5.45 4 7.75 4zm4.25 2.5A5.75 5.75 0 1 0 17.75 12 5.76 5.76 0 0 0 12 6.5zm0 2A3.75 3.75 0 1 1 8.25 12 3.76 3.76 0 0 1 12 8.5zm4.75-2.25a1.25 1.25 0 1 0 1.25 1.25 1.25 1.25 0 0 0-1.25-1.25z"/>
                            </svg>
                        </a>
                        <a class="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-slate-900 transition-all text-slate-400 group"
                            href="${data.telegram}" target="_blank" rel="noopener noreferrer" title="تلگرام">
                            <svg class="w-6 h-6 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M9.04 15.36l-.38 3.38c.54 0 .77-.23 1.04-.5l2.5-2.38 5.18 3.79c.95.52 1.63.25 1.88-.88l3.41-15.97c.33-1.52-.55-2.11-1.48-1.77L1.78 9.6c-1.46.57-1.44 1.39-.25 1.76l4.77 1.49L17.4 5.5c.52-.34 1-.15.61.19"/>
                            </svg>
                        </a>
                        <a class="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-slate-900 transition-all text-slate-400 group"
                            href="${data.whatsApp}" target="_blank" rel="noopener noreferrer" title="واتساپ">
                           <svg class="w-6 h-6 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2a10 10 0 0 0-8.64 15.06L2 22l5.12-1.34A10 10 0 1 0 12 2zm0 18a8 8 0 0 1-4.09-1.13l-.29-.17-3.04.8.81-2.97-.19-.3A8 8 0 1 1 12 20zm4.47-5.53c-.25-.12-1.48-.73-1.71-.82-.23-.08-.4-.12-.56.12-.17.25-.65.82-.8.99-.15.17-.3.19-.56.06-.25-.12-1.06-.39-2.02-1.25-.75-.67-1.26-1.5-1.41-1.75-.15-.25-.02-.38.11-.5.11-.11.25-.3.37-.45.12-.15.16-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.65.31-.22.25-.86.84-.86 2.05s.88 2.39 1 2.55c.12.17 1.73 2.64 4.19 3.7.58.25 1.03.4 1.38.51.58.18 1.1.15 1.51.09.46-.07 1.48-.6 1.69-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.17-.48-.29z"/>
                            </svg>
                        </a>
                        <a class="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-slate-900 transition-all text-slate-400 group"
                            href="${data.robika}" target="_blank" rel="noopener noreferrer" title="روبیکا">
                            <svg class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                                <!-- Outer circle -->
                                <circle cx="12" cy="12" r="10" fill="currentColor" opacity="0.15"></circle>

                                <!-- Stylized R -->
                                <path d="M8 7h4.5a3.5 3.5 0 010 7H10v3H8V7zm2 2v3h2.3a1.5 1.5 0 000-3H10zm3 5l3 3h-2.2l-2.3-2.3L13 14z"
                                      fill="currentColor">
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
                            <span>${data.address}</span>
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
                <!-- <div class="flex gap-6">
                    <img alt="Trust Badge 1"
                        class="h-12 w-12 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all rounded bg-white/5 p-1"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcZbPrbooeSG9L09vixx_mkkLx5gk-EgmezVRCVxJOHyXVW4WEe385MMg-Yz21lHSpBqNNt1NEmUo9obw80XC9eK4pFiEPk7yAPgqE79JhtWUGK23R9FfbgEr4hPWq-5-gmNJ36kBIzf1Sy9Ti0V0-Wda6Kch9RINts10Ie5ged6ZZS17KOLaju8JHlBBbuO0n2tiM7eh7tWAzXX-CrEY5d-yO65sHgcwOy2eAGfLaOTuZzJKJoWK_OD9Wmbr4H3NOpg1Au15K91o" />
                    <img alt="Trust Badge 2"
                        class="h-12 w-12 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all rounded bg-white/5 p-1"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBe1443kST08__thXmFz7U-Kt9jVQsOBVeDc-KKS3yRIqJPjuQID61nBk_vaCcJ81u6XoxvUFedA7Jw9vygLo4knl1rWWBAsvX4K5yNVQQkmTY3uKSukSpfCSbwri-OYkfVkXO1-C06VZK9pFuHJXfeXBJvzyZhKUObLgudStF6IKm7HBbx10pL9YLcPag33zTE7ejVlPbiPb27BclYgVn5EXRjJaAKFYzyH52M-7D5BfbXKZ04F_1d321tlzSlOEjPlYea-R888tY" />
                </div> -->
            </div>
        </div>
    </footer>
  `
}
