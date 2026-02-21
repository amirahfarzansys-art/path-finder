import type { Service } from "../../types/site";

export function renderServiceCard(service: Service): string {
  return `
    <div class="bg-white dark:bg-card-dark p-8 rounded-2xl shadow-sm flex flex-col">
      
      <div class="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
        <span class="material-symbols-outlined text-primary text-4xl">
          ${service.icon}
        </span>
      </div>

      <h3 class="text-xl font-bold mb-4">${service.title}</h3>

      <p class="text-slate-600 dark:text-slate-400 mb-8 flex-grow">
        ${service.description}
      </p>

      <div class="border-t border-gray-100 dark:border-white/5 pt-6 mt-auto">
        <span class="text-sm text-slate-500 dark:text-slate-400 block mb-1">شروع قیمت از:</span>
        <span class="text-2xl font-black text-primary">
          ${service.price.toLocaleString()} 
          <span class="text-sm font-normal text-slate-500 dark:text-slate-400">تومان</span>
        </span>
      </div>

    </div>
  `
}
