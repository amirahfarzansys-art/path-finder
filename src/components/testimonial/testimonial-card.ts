import type { Testimonial } from '../../types/site'

export function renderTestimonialCard(t: Testimonial): string {
    return `
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
  `
}