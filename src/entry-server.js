import { renderAppHtml } from './app'

/**
 * @param {string} _url
 * @returns {Promise<{ html: string, head?: string }>}
 */
export async function render(_url) {
  return {
    html: renderAppHtml(),
    head: '',
  }
}


