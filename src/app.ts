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
import { renderArticleDetail } from './components/article-detail/article-detail'

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
  `
}

// تابع رندر صفحه مقاله
export function renderArticlePage(articleId: string): string {
  return `
    ${renderHeader()}
    ${renderArticleDetail(articleId)}
    ${renderFooter()}
    ${renderStickyCall()}
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
      document.getElementById('filter-type').addEventListener('change', filterGallery);
      document.getElementById('filter-conditions').addEventListener('change', filterGallery);
      document.getElementById('filter-severity').addEventListener('change', filterGallery);
      document.getElementById('clear-filters').addEventListener('click', () => {
        document.getElementById('filter-type').value = '';
        document.getElementById('filter-conditions').value = '';
        document.getElementById('filter-severity').value = '';
        filterGallery();
      });
      
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
      
      // اضافه کردن event listeners
      document.getElementById('filter-category').addEventListener('change', filterArticles);
      document.getElementById('search-input').addEventListener('input', filterArticles);
      document.getElementById('clear-filters-articles').addEventListener('click', () => {
        document.getElementById('filter-category').value = '';
        document.getElementById('search-input').value = '';
        filterArticles();
      });
      
      // تابع باز کردن مودال مقاله (placeholder)
      window.openArticleModal = function(id) {
        alert('مقاله شماره ' + id + ' انتخاب شد\\n(این قسمت نیاز به پیاده‌سازی مودال یا صفحه مقاله دارد)');
      };
    </script>
    ${addFAQScripts()}
  `
}


