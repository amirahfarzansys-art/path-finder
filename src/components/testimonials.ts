export function renderTestimonials(): string {
    return `
      <section class="py-24 bg-slate-50 dark:bg-background-dark/50 transition-colors" id="testimonials">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <span class="text-primary font-bold tracking-widest uppercase text-sm">رضایت شما افتخار ماست</span>
                <h2 class="text-3xl md:text-4xl font-bold mt-2 mb-4 text-slate-900 dark:text-white">نظرات مشتریان</h2>
                <div class="h-1.5 w-24 bg-primary mx-auto rounded-full"></div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div
                    class="bg-white dark:bg-card-dark p-8 rounded-2xl shadow-lg border-r-4 border-primary relative transition-colors">
                    <div
                        class="absolute -top-4 -right-4 bg-primary text-background-dark w-10 h-10 rounded-full flex items-center justify-center shadow-lg">
                        <span class="material-icons">format_quote</span>
                    </div>
                    <div class="flex items-center gap-4 mb-6">
                        <div
                            class="w-12 h-12 bg-slate-100 dark:bg-white/10 rounded-full flex items-center justify-center">
                            <span class="material-icons text-slate-400">person</span>
                        </div>
                        <div>
                            <h4 class="font-bold text-slate-900 dark:text-white">رضا احمدی</h4>
                            <span class="text-sm text-slate-500 dark:text-slate-400">پژو ۲۰۷</span>
                        </div>
                    </div>
                    <p class="text-slate-600 dark:text-slate-300 italic leading-relaxed">
                        "واقعاً از سرعت عملشون غافلگیر شدم. کمتر از ۱۵ دقیقه رسیدن و نیسانشون خیلی تمیز و مجهز بود.
                        چرخ‌گیرشون هیچ صدمه‌ای به سپرم نزد."
                    </p>
                </div>
                <div
                    class="bg-white dark:bg-card-dark p-8 rounded-2xl shadow-lg border-r-4 border-primary relative transition-colors">
                    <div
                        class="absolute -top-4 -right-4 bg-primary text-background-dark w-10 h-10 rounded-full flex items-center justify-center shadow-lg">
                        <span class="material-icons">format_quote</span>
                    </div>
                    <div class="flex items-center gap-4 mb-6">
                        <div
                            class="w-12 h-12 bg-slate-100 dark:bg-white/10 rounded-full flex items-center justify-center">
                            <span class="material-icons text-slate-400">person</span>
                        </div>
                        <div>
                            <h4 class="font-bold text-slate-900 dark:text-white">سارا سلیمانی</h4>
                            <span class="text-sm text-slate-500 dark:text-slate-400">کیا سراتو</span>
                        </div>
                    </div>
                    <p class="text-slate-600 dark:text-slate-300 italic leading-relaxed">
                        "توی اتوبان گیر کرده بودم و خیلی استرس داشتم. امدادگر خیلی با اخلاق بود و با احتیاط کامل ماشین
                        رو تا نمایندگی حمل کردن. ممنون از تیم خوبتون."
                    </p>
                </div>
                <div
                    class="bg-white dark:bg-card-dark p-8 rounded-2xl shadow-lg border-r-4 border-primary relative transition-colors">
                    <div
                        class="absolute -top-4 -right-4 bg-primary text-background-dark w-10 h-10 rounded-full flex items-center justify-center shadow-lg">
                        <span class="material-icons">format_quote</span>
                    </div>
                    <div class="flex items-center gap-4 mb-6">
                        <div
                            class="w-12 h-12 bg-slate-100 dark:bg-white/10 rounded-full flex items-center justify-center">
                            <span class="material-icons text-slate-400">person</span>
                        </div>
                        <div>
                            <h4 class="font-bold text-slate-900 dark:text-white">محمد کریمی</h4>
                            <span class="text-sm text-slate-500 dark:text-slate-400">تویوتا کرولا</span>
                        </div>
                    </div>
                    <p class="text-slate-600 dark:text-slate-300 italic leading-relaxed">
                        "قیمتشون دقیقاً همونی بود که پشت تلفن گفتن. تجهیزاتشون بسیار مدرن بود و راننده نیسان خیلی مسلط
                        بود. امنیت خودرو کاملاً حفظ شد."
                    </p>
                </div>
            </div>
        </div>
    </section>
  `
}