export interface Hero {
    title: string // عنوان اصلی در بخش هرو
    subtitle: string // توضیح کوتاه زیر عنوان اصلی
    ctaText: string // متن دکمه تماس فوری
    phone: string // شماره تماس برای تماس فوری
}

export interface Service {
    icon: string // نام آیکون از مجموعه آیکون‌های استفاده شده در سایت
    title: string // عنوان سرویس (مثلاً "باتری‌ساز")
    description: string // توضیح کوتاه درباره سرویس
    price: number // هزینه پایه برای این سرویس به تومان
}

export interface Testimonial {
    name: string // نام مشتری
    car: string // مدل خودرو
    text: string // متن نظر مشتری
}

export interface GalleryItem {
    image: string // مسیر یا URL تصویر
    alt: string // متن جایگزین برای تصویر
}

export interface Coverage {
    city: string // نام شهر یا منطقه تحت پوشش
    eta: string // زمان تقریبی رسیدن امدادگر به محل حادثه (مثلاً "30 دقیقه")
}

export interface CalculatorConfig {
    ratePerKm: number // هزینه حمل بر اساس هر کیلومتر
    baseFee: number // هزینه پایه برای هر سرویس
    minDistance: number // حداقل فاصله قابل محاسبه
    maxDistance: number // حداکثر فاصله قابل محاسبه
}

/*
هزینه حمل = (فاصله × ratePerKm) + baseFee
جمع کل = هزینه خدمات انتخاب شده + هزینه حمل 
*/