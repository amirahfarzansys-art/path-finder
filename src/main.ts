import { renderCoverage } from './components/coverage'
import { renderFooter } from './components/footer'
import { renderGallery } from './components/gallery'
import { renderHeader } from './components/header'
import { renderHero } from './components/hero'
import { renderServices } from './components/services'
import { renderStickyCall } from './components/sticky-call'
import { renderTestimonials } from './components/testimonials'
import './style.css'

export function renderApp() {
  const app = document.querySelector('#app')!

  app.innerHTML = `
    ${renderHeader()}
    ${renderHero()}
    ${renderServices()}
    ${renderGallery()}
    ${renderTestimonials()}
    ${renderCoverage()}
    ${renderFooter()}
    ${renderStickyCall()}
  `
}

renderApp();