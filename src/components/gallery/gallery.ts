import rawData from '../../data/site-data.json'
import type { GalleryItem } from '../../types/site'

const galleryData = rawData.gallery as GalleryItem[]

export function renderGallery(): string {
  return `
    <section class="py-24" id="gallery">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-16">
          <span class="text-primary font-bold tracking-widest uppercase text-sm">گالری تصاویر</span>
          <h2 class="text-3xl md:text-4xl font-bold mt-2 mb-4 text-slate-900 dark:text-white">حوادث و خدمات انجام شده</h2>
          <div class="h-1.5 w-24 bg-primary mx-auto rounded-full"></div>
          <p class="text-slate-600 dark:text-slate-400 mt-4">مشاهده تصاویر از حوادث مختلف و نحوه امداد رسانی تخصصی ما</p>
        </div>

        <!-- فیلترها -->
        <div class="mb-8 flex flex-wrap gap-4">
          <div class="flex-1 min-w-[200px]">
            <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">نوع تصادف</label>
            <select id="filter-type" class="w-full px-4 py-2 border border-gray-300 dark:border-white/20 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white">
              <option value="">همه انواع</option>
              <option value="برخورد جلو به عقب">برخورد جلو به عقب</option>
              <option value="خروج از جاده">خروج از جاده</option>
              <option value="برخورد با مانع">برخورد با مانع</option>
              <option value="برخورد جانبی">برخورد جانبی</option>
            </select>
          </div>
          
          <div class="flex-1 min-w-[200px]">
            <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">شرایط جاده</label>
            <select id="filter-conditions" class="w-full px-4 py-2 border border-gray-300 dark:border-white/20 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white">
              <option value="">همه شرایط</option>
              <option value="برفی و لیس">برفی و لیس</option>
              <option value="یخی و لیس">یخی و لیس</option>
              <option value="بارانی و لغزنده">بارانی و لغزنده</option>
              <option value="خشک و مناسب">خشک و مناسب</option>
            </select>
          </div>

          <div class="flex-1 min-w-[200px]">
            <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">شدت تصادف</label>
            <select id="filter-severity" class="w-full px-4 py-2 border border-gray-300 dark:border-white/20 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white">
              <option value="">همه شدت‌ها</option>
              <option value="سبک">سبک</option>
              <option value="متوسط">متوسط</option>
              <option value="شدید">شدید</option>
            </select>
          </div>
        </div>

        <!-- گالری تصاویر -->
        <div id="gallery-grid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          ${galleryData.map(item => renderGalleryCard(item)).join('')}
        </div>

        <!-- پیام هنگامی که نتیجه‌ای یافت نشد -->
        <div id="no-results" class="hidden text-center py-12">
          <div class="text-slate-500 dark:text-slate-400 text-lg">تصویری با این مشخصات یافت نشد</div>
          <button id="clear-filters" class="mt-4 bg-primary hover:bg-accent text-white font-bold py-2 px-4 rounded-lg transition-colors">
            پاک کردن فیلترها
          </button>
        </div>
      </div>
    </section>
  `
}

function renderGalleryCard(item: GalleryItem): string {
  return `
    <div class="gallery-card bg-white dark:bg-card-dark rounded-2xl shadow-lg overflow-hidden border border-gray-100 dark:border-white/5 group" 
         data-type="${item.accidentType}" 
         data-conditions="${item.roadConditions}" 
         data-severity="${item.severity}">
      
      <!-- تصویر -->
      <div class="relative overflow-hidden">
        <img src="${item.image}" 
             alt="${item.title}" 
             class="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300 cursor-pointer"
             onclick="openGalleryModal(${item.id})"
             onerror="this.onerror=null; this.src='/images/default-gallery.jpg'; this.alt='تصویر پیش‌فرض';">
        
        <!-- overlay -->
        <div class="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
          <span class="text-white font-bold text-lg opacity-0 group-hover:opacity-100 transition-opacity">مشاهده بیشتر</span>
        </div>
      </div>

      <!-- اطلاعات -->
      <div class="p-6">
        <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-2">${item.title}</h3>
        <p class="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-3">${item.description}</p>
        
        <!-- مشخصات تصادف -->
        <div class="space-y-2">
          <div class="flex justify-between text-xs text-slate-500 dark:text-slate-400">
            <span class="font-medium">نوع تصادف:</span>
            <span>${item.accidentType}</span>
          </div>
          <div class="flex justify-between text-xs text-slate-500 dark:text-slate-400">
            <span class="font-medium">محل:</span>
            <span>${item.location}</span>
          </div>
          <div class="flex justify-between text-xs text-slate-500 dark:text-slate-400">
            <span class="font-medium">زمان:</span>
            <span>${item.time}</span>
          </div>
          <div class="flex justify-between text-xs text-slate-500 dark:text-slate-400">
            <span class="font-medium">شدت:</span>
            <span class="severity-badge ${getSeverityClass(item.severity)}">${item.severity}</span>
          </div>
        </div>

        <!-- تجهیزات استفاده شده -->
        <div class="mt-4 pt-3 border-t border-gray-100 dark:border-white/5">
          <div class="flex items-center justify-between">
            <span class="text-xs text-slate-500 dark:text-slate-400 font-medium">تجهیزات:</span>
            <span class="text-sm text-primary font-bold">${item.equipmentUsed}</span>
          </div>
        </div>
      </div>
    </div>
  `
}

function getSeverityClass(severity: string): string {
  switch (severity) {
    case 'سبک': return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300'
    case 'متوسط': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300'
    case 'شدید': return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300'
    default: return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'
  }
}

// اسکریپت فیلترها (به صورت inline برای سادگی)
export function addGalleryScripts(): string {
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
    </script>
  `
}