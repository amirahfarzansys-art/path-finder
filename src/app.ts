import { renderCoverage } from './components/coverage/coverage'
import { renderFooter } from './components/footer/footer'
// import { renderGallery } from './components/gallery'
import { renderHeader } from './components/header/header'
import { renderHero } from './components/hero/hero'
import { renderServices } from './components/services/services'
import { renderStickyCall } from './components/sticky-call/sticky-call'
import { renderTestimonials } from './components/testimonial/testimonials'

export function renderAppHtml(): string {
  return `
    ${renderHeader()}
    ${renderHero()}
    ${renderServices()}
  
    ${renderTestimonials()}
    ${renderCoverage()}
    ${renderFooter()}
    ${renderStickyCall()}
  `
  // ${renderGallery()}
}


