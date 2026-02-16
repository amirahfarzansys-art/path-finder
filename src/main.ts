import './style.css'
import { renderAppHtml } from './app'
import { initTheme, toggleTheme } from './utils/theme'
import { registerSW } from 'virtual:pwa-register'

export function mountApp() {
  initTheme()

  const app = document.querySelector('#app')
  if (!app) return

  app.innerHTML = `
    ${renderAppHtml()}
  `
  registerSW({ immediate: true })
  setupThemeToggle()
}

function setupThemeToggle() {
  const btn = document.querySelector('#theme-toggle')

  if (btn) {
    btn.addEventListener('click', toggleTheme)
  }
}