import { renderCalculator } from './components/calculator/calculator'
import { renderCoverage } from './components/coverage/coverage'
import { renderFooter } from './components/footer/footer'
import { renderHeader } from './components/header/header'
import { renderHero } from './components/hero/hero'
import { renderServices } from './components/services/services'
import { renderStickyCall } from './components/sticky-call/sticky-call'
import { renderTestimonials } from './components/testimonial/testimonials'
import { renderGallery } from './components/gallery/gallery'
import { renderFAQ, addFAQScripts } from './components/faq/faq'
import { renderArticles } from './components/articles/articles'
import { renderArticleDetail, addArticleDetailScripts } from './components/article-detail/article-detail'

export function renderAppHtml(): string {
  return `
    ${renderHeader()}
    ${renderHero()}
    ${renderServices()}
    ${renderCalculator()}

    ${renderGallery()}
    ${renderFAQ()}
    ${renderArticles()}
    ${renderTestimonials()}
    ${renderCoverage()}
    ${renderFooter()}
    ${renderStickyCall()}

    ${renderAppScripts()}
  `
}

// تابع رندر صفحه مقاله
export function renderArticlePage(articleId: string): string {
  return `
    ${renderHeader()}
    ${renderArticleDetail(articleId)}
    ${renderFooter()}
    ${renderStickyCall()}

    ${renderAppScripts()}
    ${addArticleDetailScripts()}
  `
}

// اسکریپت‌های اصلی
export function renderAppScripts(): string {
  return `
    <script>
      // فیلتر گالری
      function filterGallery() {
        const typeFilter = document.getElementById('filter-type').value;
        const conditionsFilter = document.getElementById('filter-conditions').value;
        const severityFilter = document.getElementById('filter-severity').value;
        
        const cards = document.querySelectorAll('.gallery-card');
        let visibleCount = 0;
        
        cards.forEach(card => {
          const type = card.dataset.type;
          const conditions = card.dataset.conditions;
          const severity = card.dataset.severity;
          
          const typeMatch = !typeFilter || type === typeFilter;
          const conditionsMatch = !conditionsFilter || conditions === conditionsFilter;
          const severityMatch = !severityFilter || severity === severityFilter;
          
          if (typeMatch && conditionsMatch && severityMatch) {
            card.style.display = 'block';
            visibleCount++;
          } else {
            card.style.display = 'none';
          }
        });
        
        const noResults = document.getElementById('no-results');
        if (visibleCount === 0) {
          noResults.classList.remove('hidden');
        } else {
          noResults.classList.add('hidden');
        }
      }
      
      // اضافه کردن event listeners
      const _type = document.getElementById('filter-type');
      const _conds = document.getElementById('filter-conditions');
      const _sev = document.getElementById('filter-severity');
      const _clr = document.getElementById('clear-filters');
      if (_type) _type.addEventListener('change', filterGallery);
      if (_conds) _conds.addEventListener('change', filterGallery);
      if (_sev) _sev.addEventListener('change', filterGallery);
      if (_clr) {
        _clr.addEventListener('click', () => {
          if (_type) (_type as HTMLInputElement).value = '';
          if (_conds) (_conds as HTMLInputElement).value = '';
          if (_sev) (_sev as HTMLInputElement).value = '';
          filterGallery();
        });
      }
      
      // تابع باز کردن مودال (placeholder)
      window.openGalleryModal = function(id) {
        alert('تصویر شماره ' + id + ' انتخاب شد\\n(این قسمت نیاز به پیاده‌سازی مودال دارد)');
      };

      // فیلتر مقالات
      function filterArticles() {
        const categoryFilter = document.getElementById('filter-category').value;
        const searchFilter = document.getElementById('search-input').value.toLowerCase();
        
        const cards = document.querySelectorAll('.group');
        let visibleCount = 0;
        
        cards.forEach(card => {
          const category = card.querySelector('.text-primary').textContent;
          const title = card.querySelector('h3').textContent.toLowerCase();
          const summary = card.querySelector('p').textContent.toLowerCase();
          const tags = Array.from(card.querySelectorAll('.bg-gray-100')).map(tag => tag.textContent.toLowerCase());
          
          const categoryMatch = !categoryFilter || category === categoryFilter;
          const searchMatch = !searchFilter || 
            title.includes(searchFilter) || 
            summary.includes(searchFilter) || 
            tags.some(tag => tag.includes(searchFilter));
          
          if (categoryMatch && searchMatch) {
            card.style.display = 'block';
            visibleCount++;
          } else {
            card.style.display = 'none';
          }
        });
        
        const noResults = document.getElementById('no-articles');
        if (visibleCount === 0) {
          noResults.classList.remove('hidden');
        } else {
          noResults.classList.add('hidden');
        }
      }
      
      // اضافه کردن event listeners در صورت موجود بودن
      const _cat = document.getElementById('filter-category');
      const _search = document.getElementById('search-input');
      const _clear = document.getElementById('clear-filters-articles');
      if (_cat) _cat.addEventListener('change', filterArticles);
      if (_search) _search.addEventListener('input', filterArticles);
      if (_clear) {
        _clear.addEventListener('click', () => {
          if (_cat) (_cat as HTMLInputElement).value = '';
          if (_search) (_search as HTMLInputElement).value = '';
          filterArticles();
        });
      }
      
      // تغییر به صفحه جزئیات مقاله (در صورتی که هنوز از تابع استفاده شود)
      window.openArticleModal = function(id) {
        const base = import.meta.env.BASE_URL || '/';
        window.location.href = base + 'articles/' + id;
      };
    </script>
    ${addFAQScripts()}
  `
}


