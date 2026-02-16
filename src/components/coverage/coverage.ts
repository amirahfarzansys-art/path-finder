import rawData from '../../data/site-data.json'
import type { Coverage } from '../../types/site'

const coverage = rawData.coverage as Coverage[]

export function renderCoverage(): string {
    const items = coverage
        .map(c => `
                    <div class="flex items-center gap-4 bg-slate-50 dark:bg-card-dark p-4 rounded-xl border border-gray-100 dark:border-white/5 hover:border-primary transition-colors">
                        <div class="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                            <span class="material-icons text-sm">fiber_manual_record</span>
                        </div>
                        <span class="font-bold text-slate-900 dark:text-slate-100">${c.city}</span>
                        <span class="ms-auto text-slate-900 dark:text-slate-100">${c.eta}</span>
                    </div>
            `)
        .join('')
    return `
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
                        ${items}
                    </div>
                   
                </div>
            </div>
        </div>
    </section>
  `
}