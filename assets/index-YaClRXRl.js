(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function c(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(e){if(e.ep)return;e.ep=!0;const a=c(e);fetch(e.href,a)}})();const d={title:"راه‌بان",phone:"09123456789"},p=[{icon:"car_crash",title:"یدک‌کش نیسان چرخ‌گیر",description:"حمل تخصصی با سیستم چرخ‌گیر هیدرولیک بدون آسیب به خودرو.",price:"400,000"},{icon:"build",title:"مکانیک سیار",description:"عیب‌یابی و تعمیرات در محل.",price:"250,000"},{icon:"battery_charging_full",title:"امداد باطری",description:"باطری به باطری سریع و تست دینام.",price:"180,000"},{icon:"tire_repair",title:"پنچرگیری",description:"تعویض لاستیک و پنچرگیری تخصصی.",price:"150,000"}],x=[{name:"سارا قنبری",car:"کیا سراتو",text:"توی اتوبان گیر کرده بودم و خیلی استرس داشتم. امدادگر خیلی با اخلاق بود و با احتیاط کامل ماشین رو تا نمایندگی حمل کردن. ممنون از تیم خوبتون."},{name:"مریم احمدی",car:"سمند سورن",text:"واقعاً از سرعت عملشون غافلگیر شدم. کمتر از ۱۵ دقیقه رسیدن و نیسانشون خیلی تمیز و مجهز بود. چرخ‌گیرشون هیچ صدمه‌ای به سپرم نزد."},{name:"محمد کریمی",car:"تویوتا کرولا",text:"قیمتشون دقیقاً همونی بود که پشت تلفن گفتن. تجهیزاتشون بسیار مدرن بود و راننده نیسان خیلی مسلط بود. امنیت خودرو کاملاً حفظ شد."}],m=[{city:"شاهین دژ",eta:"15 دقیقه"},{city:"محمودآباد (محمودجیق)",eta:"25 دقیقه"},{city:"کشاورز",eta:"35 دقیقه"},{city:"میاندوآب",eta:"75 دقیقه"},{city:"بوکان",eta:"60 دقیقه"},{city:"تکاب",eta:"85 دقیقه"}],r={hero:d,services:p,testimonials:x,coverage:m},g=r.coverage;function u(){return`
  <section class="py-24 bg-white dark:bg-background-dark transition-colors overflow-hidden" id="coverage">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <span class="text-primary font-bold tracking-widest uppercase text-sm">محدوده پوشش‌دهی</span>
                <h2 class="text-3xl md:text-4xl font-bold mt-2 mb-4 text-slate-900 dark:text-white">در کمترین زمان در
                    کنار شما هستیم</h2>
                <div class="h-1.5 w-24 bg-primary mx-auto rounded-full"></div>
            </div>
            <div class="grid lg:grid-cols-3 gap-12 items-center">
                <div class="lg:col-span-2 relative">
                    <div
                        class="bg-slate-200 dark:bg-white/5 rounded-3xl p-4 shadow-2xl overflow-hidden aspect-[16/9] relative border-4 border-white/10">
                        <img alt="Service Area Map"
                            class="w-full h-full object-cover rounded-2xl opacity-80 dark:opacity-40"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBe1443kST08__thXmFz7U-Kt9jVQsOBVeDc-KKS3yRIqJPjuQID61nBk_vaCcJ81u6XoxvUFedA7Jw9vygLo4knl1rWWBAsvX4K5yNVQQkmTY3uKSukSpfCSbwri-OYkfVkXO1-C06VZK9pFuHJXfeXBJvzyZhKUObLgudStF6IKm7HBbx10pL9YLcPag33zTE7ejVlPbiPb27BclYgVn5EXRjJaAKFYzyH52M-7D5BfbXKZ04F_1d321tlzSlOEjPlYea-R888tY" />
                        <div class="absolute inset-0 bg-primary/10 mix-blend-overlay"></div>
                        <div class="map-pulse top-1/4 right-1/4"></div>
                        <div class="map-pulse top-1/2 right-1/3"></div>
                        <div class="map-pulse bottom-1/3 left-1/4"></div>
                        <div class="map-pulse top-1/3 left-1/2"></div>
                        <div
                            class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none">
                            <div
                                class="bg-slate-900/80 backdrop-blur-md px-6 py-3 rounded-full border border-primary/50 text-primary font-bold shadow-2xl">
                                پوشش سراسری شاهین دژ و حومه
                            </div>
                        </div>
                    </div>
                </div>
                <div class="space-y-6">
                    <h3 class="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
                        <span class="material-icons text-primary">my_location</span>
                        مناطق تحت پوشش فوری
                    </h3>
                    <div class="grid grid-cols-1 gap-4">
                        ${g.map(s=>`
                    <div class="flex items-center gap-4 bg-slate-50 dark:bg-card-dark p-4 rounded-xl border border-gray-100 dark:border-white/5 hover:border-primary transition-colors">
                        <div class="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                            <span class="material-icons text-sm">fiber_manual_record</span>
                        </div>
                        <span class="font-bold text-slate-900 dark:text-slate-100">${s.city}</span>
                        <span class="ms-auto text-slate-900 dark:text-slate-100">${s.eta}</span>
                    </div>
            `).join("")}
                    </div>
                   
                </div>
            </div>
        </div>
    </section>
  `}const v=r.hero;function f(){return`
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
                        امداد راه‌بان با کادری مجرب و سابقه بیش از ۱۰ سال در زمینه امداد جاده‌ای، آماده
                        خدمت‌رسانی به شما همشهریان عزیز در تمام ساعات شبانه‌روز می‌باشد. ایمنی خودروی شما اولویت ماست.
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
                            <span>آذربایجان غربی٫ شهرستان شاهین دژ</span>
                        </li>
                        <li class="flex items-center gap-3">
                            <span class="material-icons text-primary text-sm">phone</span>
                            <span dir="ltr">${v.phone}</span>
                        </li>
                        <li class="flex items-center gap-3">
                            <span class="material-icons text-primary text-sm">access_time</span>
                            <span>خدمات شبانه‌روزی (۷ روز هفته)</span>
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
  `}const i=r.hero;function b(){return`
  <nav class="sticky top-0 z-50 bg-white/90 dark:bg-background-dark/90 backdrop-blur-md border-b border-primary/10 transition-colors">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center h-20">
                <div class="flex items-center gap-2">
                    <div class="rounded-lg">
                    <img src="logo.png" alt="Logo" class="w-12 h-12">
                    </div>
                    <span class="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">امداد خودرو <span
                            class="text-primary">${i.title}</span></span>
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
                        class="theme-toggle-btn p-2 rounded-full bg-slate-100 dark:bg-white/10 text-slate-700 dark:text-primary hover:bg-slate-200 dark:hover:bg-white/20 transition-all flex items-center justify-center"
                        onclick="document.documentElement.classList.toggle('dark')" title="تغییر حالت نمایش">
                        <span class="material-icons sun">light_mode</span>
                        <span class="material-icons moon">dark_mode</span>
                    </button>
                    <a class="hidden sm:flex items-center gap-2 bg-primary hover:bg-accent text-slate-900 font-bold py-2 px-6 rounded-lg transition-all transform hover:scale-105"
                        href="tel:${i.phone}">
                        <span class="material-icons">phone_in_talk</span>
                        <span>${i.phone}</span>
                    </a>
                    <button class="md:hidden text-slate-900 dark:text-white">
                        <span class="material-icons text-3xl">menu</span>
                    </button>
                </div>
            </div>
        </div>
    </nav>
  `}const h=r.hero;function y(){return`
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
                    امداد خودرو و یدک‌کش <br />
                    <span class="text-primary underline decoration-primary/30 underline-offset-8">نیسان
                        شبانه‌روزی</span>
                </h1>
                <p class="text-xl text-slate-300 mb-10 leading-relaxed max-w-xl">
                    حمل خودرو با مدرن‌ترین تجهیزات چرخ‌گیر بدون کوچکترین آسیب به خودروی شما. اعزام فوری به تمام
                    نقاط شهر در کمتر از ۲۰ دقیقه.
                </p>
                <div class="flex flex-col sm:flex-row gap-4">
                    <a class="flex items-center justify-center gap-3 bg-primary hover:bg-accent text-slate-900 text-xl font-black py-5 px-10 rounded-xl transition-all shadow-xl shadow-primary/20 group"
                        href="tel:${h.phone}">
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
  `}function w(t){return`
    <div class="bg-white dark:bg-card-dark p-8 rounded-2xl shadow-sm flex flex-col">
      
      <div class="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
        <span class="material-symbols-outlined text-primary text-4xl">
          ${t.icon}
        </span>
      </div>

      <h3 class="text-xl font-bold mb-4">${t.title}</h3>

      <p class="text-slate-600 dark:text-slate-400 mb-8 flex-grow">
        ${t.description}
      </p>

      <div class="border-t border-gray-100 dark:border-white/5 pt-6 mt-auto">
      <span class="text-sm text-slate-500 dark:text-slate-400 block mb-1">شروع قیمت از:</span>
        <span class="text-2xl font-black text-primary">
          ${t.price} 
          <span class="text-sm font-normal text-slate-500 dark:text-slate-400">تومان</span>
        </span>
      </div>

    </div>
  `}function k(){return`
    <section class="py-24" id="pricing-services">
      <div class="max-w-7xl mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          ${r.services.map(s=>w(s)).join("")}
        </div>
      </div>
    </section>
  `}const n=r.hero;function j(){return`
  <div
        class="fixed bottom-0 left-0 right-0 z-50 bg-slate-900/95 dark:bg-black/95 backdrop-blur-lg border-t border-primary/20 shadow-[0_-10px_40px_-15px_rgba(244,192,37,0.3)] transition-colors">
        <div class="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between gap-4">
            <div class="flex items-center gap-4">
                <div class="bg-primary p-3 rounded-xl animate-bounce">
                    <span class="material-icons text-slate-900 text-3xl font-bold">phone_in_talk</span>
                </div>
                <div class="hidden sm:block">
                    <p class="text-primary text-xs font-bold uppercase tracking-wider mb-1">تماس اضطراری ۲۴ ساعته</p>
                    <p class="text-white text-xl font-black">${n.phone}</p>
                </div>
            </div>
            <a class="flex-grow sm:flex-grow-0 bg-primary hover:bg-accent text-slate-900 font-black py-3 px-8 rounded-xl flex items-center justify-center gap-3 transition-transform hover:scale-[1.02] active:scale-95 shadow-lg shadow-primary/20"
                href="tel:${n.phone}">
                <span class="material-icons">flash_on</span>
                <span>اعزام فوری امدادگر</span>
            </a>
            <div class="hidden md:flex items-center gap-2 text-slate-400 text-sm">
                <span class="relative flex h-2 w-2">
                    <span
                        class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                    <span class="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                زمان انتظار: زیر ۲۰ دقیقه
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
  `}function _(t){return`
        <div class="bg-white dark:bg-card-dark p-8 rounded-2xl shadow-lg border-r-4 border-primary relative transition-colors">
            <div class="absolute -top-4 -right-4 bg-primary text-background-dark w-10 h-10 rounded-full flex items-center justify-center shadow-lg">
                <span class="material-icons">format_quote</span>
            </div>
            <div class="flex items-center gap-4 mb-6">
                <div class="w-12 h-12 bg-slate-100 dark:bg-white/10 rounded-full flex items-center justify-center">
                    <span class="material-icons text-slate-400">person</span>
                </div>
                <div>
                    <h4 class="font-bold text-slate-900 dark:text-white">${t.name}</h4>
                    <span class="text-sm text-slate-500 dark:text-slate-400">${t.car}</span>
                </div>
            </div>
            <p class="text-slate-600 dark:text-slate-300 italic leading-relaxed">${t.text}</p>
        </div>
  `}const S=r.testimonials;function B(){return`
      <section class="py-24 bg-slate-50 dark:bg-background-dark/50 transition-colors" id="testimonials">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <span class="text-primary font-bold tracking-widest uppercase text-sm">رضایت شما افتخار ماست</span>
                <h2 class="text-3xl md:text-4xl font-bold mt-2 mb-4 text-slate-900 dark:text-white">نظرات مشتریان</h2>
                <div class="h-1.5 w-24 bg-primary mx-auto rounded-full"></div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">${S.map(s=>_(s)).join("")}</div>
        </div>
    </section>
  `}function K(){const t=document.querySelector("#app");t.innerHTML=`
    ${b()}
    ${y()}
    ${k()}
  
    ${B()}
    ${u()}
    ${f()}
    ${j()}
  `}K();
