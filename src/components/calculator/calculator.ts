import rawData from '../../data/site-data.json'
import type { Service } from '../../types/site'

const data = rawData.services as Service[];

export function renderCalculator(): string {
    return `
    <section class="py-24 bg-gradient-to-br from-primary/5 to-transparent" id="calculator">
        <div class="max-w-7xl mx-auto px-4">
            <div class="text-center mb-16">
                <span class="text-primary font-bold tracking-widest uppercase text-sm">محاسبه سریع هزینه</span>
                <h2 class="text-3xl md:text-4xl font-bold mt-2 mb-4 text-slate-900 dark:text-white">ماژول محاسبه هزینه امداد</h2>
                <div class="h-1.5 w-24 bg-primary mx-auto rounded-full"></div>
                <p class="text-slate-600 dark:text-slate-400 mt-4">هزینه خدمات امداد خودرو شاهین دژ رو به صورت لحظه‌ای محاسبه کنید</p>
            </div>
            
            <div class="bg-white dark:bg-card-dark rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-white/5">
                <div class="grid md:grid-cols-2 gap-8">
                    <div>
                        <h3 class="text-lg font-bold mb-4 text-slate-900 dark:text-white">انتخاب خدمات</h3>
                        <div class="space-y-4">
                            ${data.map(service => `
                                <label class="flex items-center justify-between p-4 border border-gray-200 dark:border-white/10 rounded-lg cursor-pointer hover:bg-gray-50 dark:hover:bg-white/5 transition-colors service-item" data-price="${service.price}">
                                    <div class="flex items-center gap-3">
                                        <input type="checkbox" class="w-4 h-4 text-primary bg-gray-100 border-gray-300 rounded focus:ring-primary focus:ring-2">
                                        <div>
                                            <span class="font-medium text-slate-900 dark:text-white">${service.title}</span>
                                            <p class="text-sm text-slate-500 dark:text-slate-400">${service.description}</p>
                                        </div>
                                    </div>
                                    <span class="text-primary font-bold whitespace-nowrap">${service.price} تومان</span>
                                </label>
                            `).join('')}
                        </div>
                    </div>
                    
                    <div>
                        <h3 class="text-lg font-bold mb-4 text-slate-900 dark:text-white">محاسبه فاصله</h3>
                        <div class="space-y-4">
                            <div>
                                <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">مسافت (کیلومتر)</label>
                                <input type="number" id="distance-input" min="1" max="100" value="10" 
                                    class="w-full px-4 py-2 border border-gray-300 dark:border-white/20 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-slate-800 text-slate-900 dark:text-white">
                            </div>
                            
                            <div class="bg-gray-50 dark:bg-white/5 rounded-lg p-4">
                                <div class="flex justify-between items-center mb-2">
                                    <span class="text-slate-600 dark:text-slate-400">هزینه خدمات انتخاب شده:</span>
                                    <span id="services-total" class="font-bold text-slate-900 dark:text-white">0 تومان</span>
                                </div>
                                <div class="flex justify-between items-center mb-2">
                                    <span class="text-slate-600 dark:text-slate-400">هزینه حمل بر اساس فاصله:</span>
                                    <span id="distance-cost" class="font-bold text-slate-900 dark:text-white">0 تومان</span>
                                </div>
                                <div class="flex justify-between items-center pt-2 border-t border-gray-200 dark:border-white/10">
                                    <span class="text-lg font-bold text-slate-900 dark:text-white">جمع کل:</span>
                                    <span id="total-cost" class="text-2xl font-black text-primary">0 تومان</span>
                                </div>
                            </div>
                            
                            <div class="grid grid-cols-2 gap-4">
                                <button id="calculate-btn" 
                                    class="bg-primary hover:bg-accent text-slate-900 font-bold py-3 px-6 rounded-lg transition-all transform hover:scale-105">
                                    محاسبه هزینه
                                </button>
                                <button id="reset-btn" 
                                    class="bg-gray-200 dark:bg-white/10 text-slate-700 dark:text-slate-300 font-bold py-3 px-6 rounded-lg hover:bg-gray-300 dark:hover:bg-white/20 transition-colors">
                                    پاک کردن
                                </button>
                            </div>
                            
                            <div id="result-message" class="mt-4 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg hidden">
                                <p class="text-green-700 dark:text-green-300 font-medium">✅ پیشنهاد قیمت شما آماده است!</p>
                                <p class="text-green-600 dark:text-green-400 text-sm mt-1">هزینه کل: <span id="final-amount" class="font-bold"></span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  `
}