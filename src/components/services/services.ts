import rawData from '../../data/site-data.json'
import type { Service } from '../../types/site'
import { renderServiceCard } from './service-card'

export function renderServices(): string {
  const cards = rawData.services
    .map((service: Service) => renderServiceCard(service))
    .join('')

  return `
    <section class="py-24" id="pricing-services">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-16">
          <span class="text-primary font-bold tracking-widest uppercase text-sm">خدمات تخصصی ما</span>
          <h2 class="text-3xl md:text-4xl font-bold mt-2 mb-4 text-slate-900 dark:text-white">خدمات امداد خودرو شاهین دژ</h2>
          <div class="h-1.5 w-24 bg-primary mx-auto rounded-full"></div>
          <p class="text-slate-600 dark:text-slate-400 mt-4 max-w-2xl mx-auto">بهترین خدمات امداد خودرو و یدک‌کش در شاهین دژ با اعزام فوری و قیمت شفاف</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          ${cards}
        </div>
      </div>
    </section>
  `
}
