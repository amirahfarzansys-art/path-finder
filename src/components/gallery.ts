export function renderGallery(): string {
    return `
      <section class="py-24 bg-white dark:bg-background-dark transition-colors" id="gallery">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <span class="text-primary font-bold tracking-widest uppercase text-sm">گالری تصاویر</span>
                <h2 class="text-3xl md:text-4xl font-bold mt-2 mb-4 text-slate-900 dark:text-white">تجهیزات مدرن و
                    ناوگان مجهز ما</h2>
                <div class="h-1.5 w-24 bg-primary mx-auto rounded-full mb-6"></div>
                <p class="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                    مشاهده ناوگان نیسان‌های مجهز به چرخ‌گیر هیدرولیک و تجهیزات پیشرفته امدادی. ما به نظافت و کارایی
                    تجهیزات خود اهمیت می‌دهیم.
                </p>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div class="relative group overflow-hidden rounded-2xl aspect-video cursor-pointer gallery-item">
                    <img alt="Nissan Tow Truck Action"
                        class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9klLRaU2pielWQ_ucfLksIWuZzxFUly2bKwLZBTqOJHhWo6dYPbq6wsjUPGq6qcZg5Bx7i11CxZzE0_cfcG4iTZZ85YQmb4Qg7JstRiBO42R3Lud4FH0uFtoKwJknfJgU-6t0IbWZAK-CKyBf6izfebuH20HA2iqyRDzJTzD-tqjBSBz7oU4MbB4lPwSKyZ5_0KPh8M3qxe6zL4gIfAJAwnCDPuHMlc99PLcg1lZUO0fg-OvKXbfV8SJiYxP4ToBy291KsTSPO5Y" />
                    <div
                        class="absolute inset-0 bg-background-dark/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center flex-col text-white overlay">
                        <span class="material-icons text-primary text-4xl mb-2">zoom_in</span>
                        <span class="font-bold">نیسان چرخ‌گیر در حال خدمت</span>
                    </div>
                </div>
                <div class="relative group overflow-hidden rounded-2xl aspect-video cursor-pointer gallery-item">
                    <img alt="Fleet Maintenance"
                        class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDAn81qqrvMRQK3DZkJbfjGu6p09RqOm3JqpkYYY8aHwE3rL6dMeCMLGF6F7DYSFA8xZH7ORGsHMeSsjBfB18RHugoAkVVRagSxJaAIYVMiTwpQrxrck4Ubnx0huEawLZOws74guAio96fdqJ1swykTFNAzYNINZYSXGklu-hOT-nyeXJdlFJE8oxMGbMjyPTPmT_iYpbNvA3cTbHmOWSPdpD889B-i0nPVlKr1EU6TPG3EqXejOF--9MkAQF_yyScp98D1Y_7M7c8" />
                    <div
                        class="absolute inset-0 bg-background-dark/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center flex-col text-white overlay">
                        <span class="material-icons text-primary text-4xl mb-2">zoom_in</span>
                        <span class="font-bold">ناوگان نوسازی شده</span>
                    </div>
                </div>
                <div class="relative group overflow-hidden rounded-2xl aspect-video cursor-pointer gallery-item">
                    <img alt="Equipment Close-up"
                        class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcZbPrbooeSG9L09vixx_mkkLx5gk-EgmezVRCVxJOHyXVW4WEe385MMg-Yz21lHSpBqNNt1NEmUo9obw80XC9eK4pFiEPk7yAPgqE79JhtWUGK23R9FfbgEr4hPWq-5-gmNJ36kBIzf1Sy9Ti0V0-Wda6Kch9RINts10Ie5ged6ZZS17KOLaju8JHlBBbuO0n2tiM7eh7tWAzXX-CrEY5d-yO65sHgcwOy2eAGfLaOTuZzJKJoWK_OD9Wmbr4H3NOpg1Au15K91o" />
                    <div
                        class="absolute inset-0 bg-background-dark/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center flex-col text-white overlay">
                        <span class="material-icons text-primary text-4xl mb-2">zoom_in</span>
                        <span class="font-bold">تجهیزات هیدرولیک ایمن</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
  `
}