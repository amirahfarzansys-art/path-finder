import rawData from '../../data/site-data.json'
import type { Article } from '../../types/site'

const articlesData = rawData.articles as Article[]

// simple formatter to turn markdown-like text into HTML paragraphs/headings
function formatArticleContent(content: string): string {
  // split paragraphs on blank lines
  const paras = content.split(/\n\s*\n/);
  return paras.map(p => {
    // convert headings first
    let isHeading = false;
    let html = p
      .replace(/^### (.*)$/gm, (_, t) => { isHeading = true; return `<h3>${t}</h3>`; })
      .replace(/^## (.*)$/gm, (_, t) => { isHeading = true; return `<h2>${t}</h2>`; })
      .replace(/^# (.*)$/gm, (_, t) => { isHeading = true; return `<h1>${t}</h1>`; });

    // convert bold text and line breaks
    html = html
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\n/g, '<br>');

    // simple numbered lists: convert lines starting with digits to li items
    if (!isHeading) {
      const lines = html.split(/<br>/g);
      const listItems = lines.filter(l => /^\d+\.\s/.test(l));
      if (listItems.length) {
        html = html.replace(/(?:^|<br>)(\d+)\.\s([^<]+)/g, '<li>$2</li>');
        html = '<ol>' + html + '</ol>';
        return html;
      }
    }

    if (isHeading) {
      // headings already have their tags, do not wrap
      return html;
    }
    return `<p>${html}</p>`;
  }).join('');
}

export function renderArticleDetail(articleId: string): string {
  const article = articlesData.find(a => a.id.toString() === articleId)

  if (!article) {
    return `
      <section class="py-24" id="article-detail">
        <div class="max-w-4xl mx-auto px-4">
          <div class="text-center py-12">
            <h1 class="text-3xl font-bold text-slate-900 dark:text-white mb-4">مقاله یافت نشد</h1>
            <p class="text-slate-600 dark:text-slate-400">مقاله مورد نظر شما وجود ندارد یا حذف شده است.</p>
            <a href="${import.meta.env.BASE_URL}articles" class="mt-6 inline-block bg-primary hover:bg-accent text-white font-bold py-2 px-6 rounded-lg transition-colors">
              بازگشت به مقالات
            </a>
          </div>
        </div>
      </section>
    `
  }

  return `
    <section class="py-24" id="article-detail">
      <div class="max-w-4xl mx-auto px-4">
        <!-- دکمه بازگشت -->
        <div class="mb-8">
          <a href="${import.meta.env.BASE_URL}articles" class="inline-flex items-center text-primary hover:text-accent font-semibold">
            <svg class="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
            </svg>
            بازگشت به مقالات
          </a>
        </div>

        <!-- مقاله -->
        <article class="bg-white dark:bg-card-dark rounded-2xl shadow-lg overflow-hidden border border-gray-100 dark:border-white/5">
          <!-- هدر مقاله -->
          <div class="bg-gradient-to-br from-primary/10 to-transparent p-8">
            <div class="flex items-center justify-between mb-4">
              <span class="text-xs text-primary font-semibold bg-primary/10 px-3 py-1 rounded-full">${article.category}</span>
              <span class="text-xs text-slate-500 dark:text-slate-400">${article.date}</span>
            </div>
            
            <h1 class="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">${article.title}</h1>
            
            <div class="flex items-center justify-between">
              <div class="flex items-center space-x-4 space-x-reverse">
                <span class="text-sm text-slate-500 dark:text-slate-400">نویسنده: ${article.author}</span>
                <div class="flex flex-wrap gap-2">
                  ${article.tags.map(tag => `<span class="text-xs text-slate-500 dark:text-slate-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">${tag}</span>`).join('')}
                </div>
              </div>
            </div>
          </div>

          <!-- محتوای مقاله -->
          <div class="p-8">
            <div class="prose prose-lg max-w-none">
              ${formatArticleContent(article.content)}
            </div>
          </div>

          <!-- اشتراک گذاری -->
          <div class="border-t border-gray-100 dark:border-white/5 p-8">
            <h3 class="text-lg font-semibold text-slate-900 dark:text-white mb-4">اشتراک گذاری مقاله</h3>
            <div class="flex space-x-4">
              <a href="#" class="text-slate-500 hover:text-primary transition-colors">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" class="text-slate-500 hover:text-primary transition-colors">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
                </svg>
              </a>
              <a href="#" class="text-slate-500 hover:text-primary transition-colors">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.517v3.351z"/>
                </svg>
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>
  `
}

// اسکریپت مدیریت صفحه مقاله
export function addArticleDetailScripts(): string {
  return `
    <script>
      // تنظیمات اشتراک گذاری
      document.addEventListener('DOMContentLoaded', function() {
        const shareButtons = document.querySelectorAll('[href="#"]');
        shareButtons.forEach(button => {
          button.addEventListener('click', function(e) {
            e.preventDefault();
            alert('این قسمت نیاز به پیاده‌سازی اشتراک گذاری در شبکه‌های اجتماعی دارد');
          });
        });
      });
    </script>
  `
}