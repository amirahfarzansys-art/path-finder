import './style.css'
import { renderAppHtml } from './app'
import { initTheme, toggleTheme } from './utils/theme'

export function mountApp() {
  initTheme()

  const app = document.querySelector('#app')
  if (!app) return

  app.innerHTML = `
    ${renderAppHtml()}
  `

  setupThemeToggle()
}

function setupThemeToggle() {
  const btn = document.querySelector('#theme-toggle')

  if (btn) {
    btn.addEventListener('click', toggleTheme)
  }
}