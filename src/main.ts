import { renderCoverage } from './components/coverage/coverage'
import { renderFooter } from './components/footer/footer'
// import { renderGallery } from './components/gallery'
import { renderHeader } from './components/header/header'
import { renderHero } from './components/hero/hero'
import { renderServices } from './components/services/services'
import { renderStickyCall } from './components/sticky-call/sticky-call'
import { renderTestimonials } from './components/testimonial/testimonials'
import './style.css'
import { initTheme, toggleTheme } from './utils/theme'

initTheme();
export function renderApp() {
  const app = document.querySelector('#app')!

  app.innerHTML = `
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

export function setupThemeToggle() {
  const btn = document.querySelector('#theme-toggle')

  if (btn) {
    btn.addEventListener('click', toggleTheme)
  }
}

initTheme();
renderApp();
setupThemeToggle();