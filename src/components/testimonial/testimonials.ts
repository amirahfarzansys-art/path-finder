import rawData from '../../data/site-data.json'
import type { Testimonial } from '../../types/site'
import { renderTestimonialCard } from './testimonial-card'

const testimonials = rawData.testimonials as Testimonial[]

export function renderTestimonials(): string {
    const items = testimonials
        .map(t => renderTestimonialCard(t))
        .join('')
    return `
      <section class="py-24 bg-slate-50 dark:bg-background-dark/50 transition-colors" id="testimonials">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <span class="text-primary font-bold tracking-widest uppercase text-sm">رضایت شما افتخار ماست</span>
                <h2 class="text-3xl md:text-4xl font-bold mt-2 mb-4 text-slate-900 dark:text-white">نظرات مشتریان</h2>
                <div class="h-1.5 w-24 bg-primary mx-auto rounded-full"></div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">${items}</div>
        </div>
    </section>
  `
}