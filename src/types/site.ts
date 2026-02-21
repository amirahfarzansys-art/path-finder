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
    id: number // شناسه منحصر به فرد تصویر
    image: string // مسیر یا URL تصویر
    title: string // عنوان تصویر
    description: string // توضیحات تصویر
    accidentType: string // نوع تصادف
    location: string // محل وقوع حادثه
    time: string // زمان وقوع
    date: string // تاریخ وقوع
    roadConditions: string // شرایط جاده
    vehiclesInvolved: string // وسایل نقلیه درگیر
    severity: string // شدت تصادف
    equipmentUsed: string // تجهیزات استفاده شده
    weather: string // شرایط آب و هوایی
    lighting: string // شرایط روشنایی
}

export interface FAQ {
    question: string // متن سوال
    answer: string // متن پاسخ
}

export interface Article {
    id: number // شناسه منحصر به فرد مقاله
    title: string // عنوان مقاله
    summary: string // خلاصه مقاله
    content: string // محتوای کامل مقاله
    date: string // تاریخ انتشار
    author: string // نویسنده مقاله
    category: string // دسته‌بندی مقاله
    tags: string[] // برچسب‌های مقاله
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