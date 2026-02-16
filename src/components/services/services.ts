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
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          ${cards}
        </div>
      </div>
    </section>
  `
}