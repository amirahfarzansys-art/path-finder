import { renderAppHtml, renderArticlePage } from './app'

/**
 * @param {string} _url
 * @returns {Promise<{ html: string, head?: string }>}
 */
export async function render(_url) {
  // simple routing: if path starts with /articles/ we'll render the detail page
  if (_url.startsWith('/articles/')) {
    const parts = _url.split('/');
    const id = parts[2] || '';
    return {
      html: renderArticlePage(id),
      head: '',
    }
  }

  return {
    html: renderAppHtml(),
    head: '',
  }
}


