import rawData from '../../data/site-data.json'
import type { Article } from '../../types/site'

const articlesData = rawData.articles as Article[]

export function renderArticles(): string {
  return `
    <section class="py-24" id="articles">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-16">
          <span class="text-primary font-bold tracking-widest uppercase text-sm">مقالات آموزشی</span>
          <h2 class="text-3xl md:text-4xl font-bold mt-2 mb-4 text-slate-900 dark:text-white">مقالات و مطالب آموزشی</h2>
          <div class="h-1.5 w-24 bg-primary mx-auto rounded-full"></div>
          <p class="text-slate-600 dark:text-slate-400 mt-4">مقالات آموزشی و اطلاعات مفید در مورد ایمنی رانندگی و امداد خودرو</p>
        </div>

        <!-- فیلترها -->
        <!-- <div class="mb-8 flex flex-wrap gap-4">
          <div class="flex-1 min-w-[200px]">
            <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">دسته‌بندی</label>
            <select id="filter-category" class="w-full px-4 py-2 border border-gray-300 dark:border-white/20 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white">
              <option value="">همه دسته‌بندی‌ها</option>
              <option value="امداد و ایمنی">امداد و ایمنی</option>
              <option value="آموزش رانندگی">آموزش رانندگی</option>
              <option value="تجهیزات امداد">تجهیزات امداد</option>
            </select>
          </div> 
          
          <div class="flex-1 min-w-[200px]">
            <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">جستجو</label>
            <input type="text" id="search-input" placeholder="جستجو در مقالات..." 
                   class="w-full px-4 py-2 border border-gray-300 dark:border-white/20 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white">
          </div>
        </div>-->

        <!-- مقالات -->
        <div id="articles-grid" class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          ${articlesData.map(article => renderArticleCard(article)).join('')}
        </div>

        <!-- پیام هنگامی که نتیجه‌ای یافت نشد -->
        <div id="no-articles" class="hidden text-center py-12">
          <div class="text-slate-500 dark:text-slate-400 text-lg">مقاله‌ای با این مشخصات یافت نشد</div>
          <button id="clear-filters-articles" class="mt-4 bg-primary hover:bg-accent text-white font-bold py-2 px-4 rounded-lg transition-colors">
            پاک کردن فیلترها
          </button>
        </div>
      </div>
    </section>
  `
}

function renderArticleCard(article: Article): string {
  return `
    <article class="bg-white dark:bg-card-dark rounded-2xl shadow-lg overflow-hidden border border-gray-100 dark:border-white/5 group hover:shadow-xl transition-shadow duration-300">
      <div class="aspect-video overflow-hidden">
        <div class="w-full h-full bg-gradient-to-br from-primary/20 to-transparent flex items-center justify-center">
          <span class="text-4xl font-bold text-primary/80">${article.title.charAt(0)}</span>
        </div>
      </div>
      
      <div class="p-6">
        <div class="flex items-center justify-between mb-3">
          <span class="text-xs text-primary font-semibold bg-primary/10 px-2 py-1 rounded-full">${article.category}</span>
          <span class="text-xs text-slate-500 dark:text-slate-400">${article.date}</span>
        </div>
        
        <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-primary transition-colors">
          ${article.title}
        </h3>
        
        <p class="text-slate-600 dark:text-slate-400 mb-4 line-clamp-3">${article.summary}</p>
        
        <div class="flex flex-wrap gap-2 mb-4">
          ${article.tags.map(tag => `<span class="text-xs text-slate-500 dark:text-slate-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">${tag}</span>`).join('')}
        </div>
        
        <div class="flex items-center justify-between">
          <span class="text-sm text-slate-500 dark:text-slate-400">نویسنده: ${article.author}</span>
          <button class="text-primary hover:text-accent font-semibold text-sm" onclick="openArticleModal(${article.id})">
            مطالعه کامل مقاله →
          </button>
        </div>
      </div>
    </article>
  `
}

// اسکریپت مدیریت مقالات
export function addArticlesScripts(): string {
  return `
    <script>
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
  `
}