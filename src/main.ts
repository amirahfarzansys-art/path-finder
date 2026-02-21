import './style.css'
import { renderAppHtml } from './app'
import { initTheme, toggleTheme } from './utils/theme'
import { registerSW } from 'virtual:pwa-register'
import rawData from './data/site-data.json';

const data = rawData as any;


export async function mountApp() {
  initTheme()

  const app = document.querySelector('#app')
  if (!app) return

  app.innerHTML = `
    ${renderAppHtml()}
  `
  registerSW({ immediate: true })
  setupThemeToggle()
  await setupCalculator()
}

function setupThemeToggle() {
  const btn = document.querySelector('#theme-toggle')

  if (btn) {
    btn.addEventListener('click', toggleTheme)
  }
}

// ماژول محاسبه هزینه امداد خودرو شاهین دژ
async function setupCalculator(): Promise<void> {
  const checkboxes = document.querySelectorAll('.service-item input[type="checkbox"]') as NodeListOf<HTMLInputElement>;
  const distanceInput = document.getElementById('distance-input') as HTMLInputElement;
  const calculateBtn = document.getElementById('calculate-btn') as HTMLButtonElement;
  const resetBtn = document.getElementById('reset-btn') as HTMLButtonElement;
  const servicesTotalEl = document.getElementById('services-total') as HTMLElement;
  const distanceCostEl = document.getElementById('distance-cost') as HTMLElement;
  const totalCostEl = document.getElementById('total-cost') as HTMLElement;
  const resultMessage = document.getElementById('result-message') as HTMLElement;
  const finalAmount = document.getElementById('final-amount') as HTMLElement;

  // بارگیری تنظیمات از فایل داده‌ها
  let calculatorConfig: { ratePerKm: number; baseFee: number; minDistance: number; maxDistance: number };

  calculatorConfig = data.calculator || {
    ratePerKm: 15000,
    baseFee: 50000,
    minDistance: 1,
    maxDistance: 100
  };

  // بارگیری خدمات از JSON
  let servicesData: Array<{ price: number }> = data.services || [];

  // محاسبه هزینه خدمات انتخاب شده
  function calculateServicesTotal(): number {
    let total = 0;
    checkboxes.forEach((checkbox, index) => {
      if (checkbox.checked) {
        const service = servicesData[index];
        const price = service ? service.price : 0;
        total += price;
      }
    });
    return total;
  }

  // محاسبه هزینه حمل بر اساس فاصله
  function calculateDistanceCost(distance: number): number {
    if (distance < calculatorConfig.minDistance) {
      return calculatorConfig.baseFee;
    }
    return (distance * calculatorConfig.ratePerKm) + calculatorConfig.baseFee;
  }

  // به‌روزرسانی نمایش هزینه‌ها
  function updateDisplay(): void {
    const servicesTotal = calculateServicesTotal();
    const distanceStr = distanceInput.value.trim();
    const distance = parseInt(distanceStr, 10);

    // اعتبارسنجی فاصله
    if (isNaN(distance) || distance < calculatorConfig.minDistance || distance > calculatorConfig.maxDistance) {
      distanceInput.value = calculatorConfig.minDistance.toString();
      return;
    }

    const distanceCost = calculateDistanceCost(distance);
    const total = servicesTotal + distanceCost;

    // به‌روزرسانی متن‌ها با استفاده از innerText برای اطمینان از نمایش صحیح
    if (servicesTotalEl) servicesTotalEl.innerText = servicesTotal.toLocaleString() + ' تومان';
    if (distanceCostEl) distanceCostEl.innerText = distanceCost.toLocaleString() + ' تومان';
    if (totalCostEl) totalCostEl.innerText = total.toLocaleString() + ' تومان';

    // نمایش پیام نتیجه
    if (total > 0) {
      if (resultMessage) resultMessage.classList.remove('hidden');
      if (finalAmount) finalAmount.innerText = total.toLocaleString() + ' تومان';
    } else {
      if (resultMessage) resultMessage.classList.add('hidden');
    }
  }

  // محاسبه دستی
  calculateBtn.addEventListener('click', updateDisplay);

  // پاک کردن فرم
  resetBtn.addEventListener('click', () => {
    checkboxes.forEach(checkbox => checkbox.checked = false);
    distanceInput.value = calculatorConfig.minDistance.toString();
    resultMessage.classList.add('hidden');
    updateDisplay();
  });

  // محاسبه خودکار هنگام تغییر انتخابات یا فاصله
  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', updateDisplay);
  });

  distanceInput.addEventListener('input', updateDisplay);

  // تنظیمات اولیه
  distanceInput.min = calculatorConfig.minDistance.toString();
  distanceInput.max = calculatorConfig.maxDistance.toString();
  distanceInput.value = calculatorConfig.minDistance.toString();
  updateDisplay();
}
