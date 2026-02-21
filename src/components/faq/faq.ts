import rawData from '../../data/site-data.json'
import type { FAQ } from '../../types/site'

const faqData = rawData.faq as FAQ[]

export function renderFAQ(): string {
  return `
    <section class="py-24 bg-gray-50 dark:bg-gray-800" id="faq">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-16">
          <span class="text-primary font-bold tracking-widest uppercase text-sm">سوالات متداول</span>
          <h2 class="text-3xl md:text-4xl font-bold mt-2 mb-4 text-slate-900 dark:text-white">پرسش‌های رایج شما</h2>
          <div class="h-1.5 w-24 bg-primary mx-auto rounded-full"></div>
          <p class="text-slate-600 dark:text-slate-400 mt-4">پاسخ به مهم‌ترین سوالات شما در مورد خدمات امداد خودرو</p>
        </div>

        <div class="grid gap-6">
          ${faqData.map((item, index) => renderFAQItem(item, index)).join('')}
        </div>
      </div>
    </section>
  `
}

function renderFAQItem(item: FAQ, index: number): string {
  return `
    <div class="bg-white dark:bg-card-dark rounded-xl shadow-sm border border-gray-100 dark:border-white/5 overflow-hidden">
      <button class="w-full px-6 py-4 text-right flex justify-between items-center focus:outline-none group" onclick="toggleFAQ(${index})" aria-expanded="false" aria-controls="faq-answer-${index}">
        <span class="text-lg font-semibold text-slate-900 dark:text-white">${item.question}</span>
        <span class="text-primary group-hover:text-accent transition-colors transform rotate-0 transition-transform duration-300">
          <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </span>
      </button>
      <div id="faq-answer-${index}" class="px-6 py-4 text-slate-600 dark:text-slate-400 border-t border-gray-100 dark:border-white/5 hidden">
        ${item.answer}
      </div>
    </div>
  `
}

// اسکریپت مدیریت FAQ
export function addFAQScripts(): string {
  return `
    <script>
      function toggleFAQ(index) {
        const answer = document.getElementById('faq-answer-' + index);
        const button = document.querySelector('button[aria-controls="faq-answer-' + index + '"]');
        const isOpen = answer.classList.contains('hidden');
        
        if (isOpen) {
          answer.classList.remove('hidden');
          answer.classList.add('block');
          button.setAttribute('aria-expanded', 'true');
        } else {
          answer.classList.remove('block');
          answer.classList.add('hidden');
          button.setAttribute('aria-expanded', 'false');
        }
      }
    </script>
  `;
}
