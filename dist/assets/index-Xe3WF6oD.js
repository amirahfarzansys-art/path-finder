(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))u(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const x of r.addedNodes)x.tagName==="LINK"&&x.rel==="modulepreload"&&u(x)}).observe(document,{childList:!0,subtree:!0});function m(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function u(s){if(s.ep)return;s.ep=!0;const r=m(s);fetch(s.href,r)}})();const E={title:"راه‌بان",phone:"09149850613"},L=[{icon:"car_crash",title:"یدک‌کش نیسان چرخ‌گیر",description:"حمل تخصصی با سیستم چرخ‌گیر هیدرولیک بدون آسیب به خودرو.",price:4e5},{icon:"precision_manufacturing",title:"جرثقیل و جابجایی سنگین",description:"جابجایی ماشین‌های سنگین، تجهیزات صنعتی و بارهای خاص با جرثقیل تخصصی.",price:6e5},{icon:"build",title:"مکانیک سیار",description:"عیب‌یابی و تعمیرات در محل.",price:25e4},{icon:"battery_charging_full",title:"امداد باطری",description:"باطری به باطری سریع و تست دینام.",price:18e4}],B=[{id:1,image:"/images/accidents/accident-1.jpg",title:"تصادف دو خودرویی",description:"برخورد دو خودروی سواری در شرایط برفی",accidentType:"برخورد جلو به عقب",location:"اتوبان شاهین دژ",time:"14:30",date:"1403/12/15",roadConditions:"برفی و لیس",vehiclesInvolved:"2 خودرو سواری",severity:"متوسط",equipmentUsed:"یدک‌کش چرخ‌گیر",weather:"برفی",lighting:"روشنایی کافی"},{id:2,image:"/images/accidents/accident-2.jpg",title:"وسیله خارج از جاده",description:"خروج خودرو از جاده در شرایط لیس",accidentType:"خروج از جاده",location:"جاده شاهین دژ به ارومیه",time:"10:15",date:"1403/11/20",roadConditions:"یخی و لیس",vehiclesInvolved:"1 خودرو سواری",severity:"سبک",equipmentUsed:"جرثقیل و یدک‌کش",weather:"یخی",lighting:"نور طبیعی"},{id:3,image:"/images/accidents/accident-3.jpg",title:"برخورد با مانع",description:"برخورد خودرو به درخت در شرایط بارانی",accidentType:"برخورد با مانع",location:"جاده شاهین دژ به تبریز",time:"18:45",date:"1403/10/05",roadConditions:"بارانی و لغزنده",vehiclesInvolved:"1 خودرو سواری",severity:"شدید",equipmentUsed:"جرثقیل تخصصی",weather:"بارانی",lighting:"چراغ‌های خودرو"},{id:4,image:"/images/accidents/accident-4.jpg",title:"تصادف شبانه",description:"تصادف شبانه در اتوبان شاهین دژ",accidentType:"برخورد جانبی",location:"اتوبان شاهین دژ",time:"23:10",date:"1403/09/12",roadConditions:"خشک و مناسب",vehiclesInvolved:"2 خودرو سواری",severity:"متوسط",equipmentUsed:"یدک‌کش چرخ‌گیر",weather:"صاف",lighting:"چراغ‌های اتوبان"}],_=[{name:"سارا قنبری",car:"کیا سراتو",text:"توی اتوبان گیر کرده بودم و خیلی استرس داشتم. امدادگر خیلی با اخلاق بود و با احتیاط کامل ماشین رو تا نمایندگی حمل کردن. ممنون از تیم خوبتون."},{name:"مریم احمدی",car:"سمند سورن",text:"واقعاً از سرعت عملشون غافلگیر شدم. کمتر از ۱۵ دقیقه رسیدن و نیسانشون خیلی تمیز و مجهز بود. چرخ‌گیرشون هیچ صدمه‌ای به سپرم نزد."},{name:"محمد کریمی",car:"تویوتا کرولا",text:"قیمتشون دقیقاً همونی بود که پشت تلفن گفتن. تجهیزاتشون بسیار مدرن بود و راننده نیسان خیلی مسلط بود. امنیت خودرو کاملاً حفظ شد."}],T=[{city:"شاهین دژ",eta:"15 دقیقه"},{city:"محمودآباد (محمودجیق)",eta:"25 دقیقه"},{city:"کشاورز",eta:"35 دقیقه"},{city:"میاندوآب",eta:"75 دقیقه"},{city:"بوکان",eta:"60 دقیقه"},{city:"تکاب",eta:"85 دقیقه"}],q={ratePerKm:15e3,baseFee:5e4,minDistance:1,maxDistance:100},I=[{question:"هزینه امداد خودرو در شاهین دژ چقدر است؟",answer:"هزینه امداد خودرو در شاهین دژ بسته به نوع خدمت و فاصله متفاوت است. برای یدک‌کش چرخ‌گیر از 400,000 تومان شروع می‌شود و برای جرثقیل از 600,000 تومان. همچنین هزینه حمل بر اساس فاصله محاسبه می‌شود (15,000 تومان به ازای هر کیلومتر به علاوه 50,000 تومان هزینه پایه)."},{question:"زمان رسیدن امدادگر به محل حادثه چقدر است؟",answer:"در شاهین دژ معمولاً کمتر از 15 دقیقه، در محمودآباد 25 دقیقه، در کشاورز 35 دقیقه و در مناطق دورتر تا 85 دقیقه زمان لازم است. این زمان بسته به شرایط جاده و ترافیک ممکن است متفاوت باشد."},{question:"آیا خدمات شما 24 ساعته است؟",answer:"بله، خدمات امداد خودرو راه‌بان در شاهین دژ به صورت 24 ساعته و هفت روز هفته فعال است. همیشه در خدمت شما هستیم."},{question:"چه نوع خودروهایی را می‌توانید امداد کنید؟",answer:"ما می‌توانیم تمام انواع خودروهای سواری، وانت، نیسان، ون و حتی ماشین‌های سنگین و تجهیزات صنعتی را با استفاده از یدک‌کش چرخ‌گیر و جرثقیل تخصصی امداد کنیم."},{question:"آیا در شرایط بارانی و برفی هم فعالیت دارید؟",answer:"بله، تیم ما با تجهیزات مدرن و راننده‌های مجرب در تمام شرایط آب و هوایی از جمله باران، برف و یخ فعالیت دارد و آماده ارائه خدمات است."},{question:"هزینه باطری به باطری چقدر است؟",answer:"هزینه باطری به باطری و تست دینام در شاهین دژ 180,000 تومان است. این خدمت به صورت فوری و در محل انجام می‌شود."},{question:"آیا خدمات پنچرگیری نیز ارائه می‌دهید؟",answer:"بله، خدمات پنچرگیری تخصصی با تعویض لاستیک و تجهیزات مدرن در شاهین دژ ارائه می‌شود. هزینه این خدمت 150,000 تومان است."},{question:"چگونه می‌توانم با شما تماس بگیرم؟",answer:"می‌توانید با شماره 09149850613 تماس بگیرید یا از طریق فرم تماس در سایت درخواست خود را ثبت کنید. همچنین از طریق واتساپ و شبکه‌های اجتماعی نیز در خدمت شما هستیم."}],A=[{id:1,title:"نحوه رفتار در حوادث رانندگی و اهمیت امداد فوری",summary:"در این مقاله به بررسی اهمیت رفتار صحیح در حوادث رانندگی و نیاز به امداد فوری می‌پردازیم.",content:`حوادث رانندگی می‌تواند در هر لحظه و در هر جایی رخ دهد. مهمترین نکته در این شرایط، حفظ خونسردی و انجام اقدامات اولیه صحیح است. در این مقاله به بررسی مراحل لازم برای رفتار در حوادث رانندگی و اهمیت تماس فوری با امدادگران تخصصی می‌پردازیم.

### مراحل اولیه در صورت وقوع تصادف

1. **حفظ آرامش**: اولین و مهمترین اقدام حفظ آرامش است. استرس و ترس می‌تواند باعث تصمیم‌گیری اشتباه شود.

2. **بررسی وضعیت**: پس از حفظ آرامش، وضعیت خود و سایر افراد درگیر در حادثه را بررسی کنید.

3. **علامت دادن**: اگر در جاده هستید، فوراً از علامت خطر (مثل مثلث هشدار) استفاده کنید تا خودروهای عبوری از خطر مطلع شوند.

4. **تماس با امداد**: سریعترین راه برای کاهش خسارات، تماس با امدادگران تخصصی است. در شاهین دژ، تیم راه‌بان با تجهیزات مدرن و راننده‌های مجرب آماده ارائه خدمات 24 ساعته است.

### اهمیت امداد فوری

امداد فوری نه تنها باعث کاهش خسارات مالی می‌شود، بلکه می‌تواند جان افراد را نیز نجات دهد. تیم‌های امداد تخصصی با دانش و تجربه کافی می‌توانند:

- خطرات احتمالی را شناسایی کنند
- اقدامات اولیه پزشکی را انجام دهند
- خودرو را به ایمن‌ترین شکل ممکن جابجا کنند
- از بروز حوادث ثانویه جلوگیری کنند

### خدمات امداد خودرو راه‌بان در شاهین دژ

تیم راه‌بان با بیش از 10 سال تجربه در زمینه امداد خودرو، خدمات زیر را ارائه می‌دهد:

- یدک‌کش چرخ‌گیر با تجهیزات مدرن
- جرثقیل و جابجایی سنگین
- مکانیک سیار
- امداد باطری و تست دینام
- پنچرگیری تخصصی

تمامی خدمات ما با قیمت شفاف و بدون هیچ هزینه پنهانی ارائه می‌شود. برای دریافت خدمات، کافیست با شماره 09149850613 تماس بگیرید.

### نکات مهم برای رانندگان

1. **آماده باش دائم**: همیشه شماره تماس امدادگران تخصصی را در دسترس داشته باشید.
2. **تجهیزات ایمنی**: مثلث هشدار، کیت اولیه، وسایل نورانی و ابزار تعویض لاستیک را در خودرو داشته باشید.
3. **بیمه مناسب**: از بیمه‌هایی استفاده کنید که خدمات امداد خودرو را نیز پوشش می‌دهند.
4. **آموزش اولیه**: حداقل دانش اولیه پزشکی و نحوه رفتار در حوادث را فرا بگیرید.

### سخن پایانی

حوادث رانندگی می‌تواند برای هر کسی رخ دهد. مهمترین نکته این است که با آمادگی و آگاهی کافی، بتوانیم خسارات را به حداقل برسانیم. استفاده از خدمات امداد تخصصی مانند راه‌بان در شاهین دژ، بهترین انتخاب برای کاهش خسارات و افزایش ایمنی است.

برای اطلاعات بیشتر و دریافت خدمات، با ما تماس بگیرید.`,date:"1403/12/15",author:"تیم تخصصی راه‌بان",category:"امداد و ایمنی",tags:["تصادف","امداد فوری","ایمنی رانندگی","شاهین دژ"]},{id:2,title:"آموزش رانندگی در شرایط جاده‌های برفی و یخی",summary:"راهنمای جامع برای رانندگی ایمن در شرایط سخت جاده‌های برفی و یخی شاهین دژ.",content:`شاهین دژ با آب و هوای سرد و برفی زمستان، نیاز به رانندگی ماهرانه و آگاهانه دارد. در این مقاله به بررسی نکات مهم برای رانندگی ایمن در شرایط جاده‌های برفی و یخی می‌پردازیم.

### آماده‌سازی خودرو برای شرایط برفی

قبل از حرکت در شرایط برفی، موارد زیر را بررسی کنید:

1. **لاستیک مناسب**: از لاستیک زمستانی یا لاستیک با میخ استفاده کنید.
2. **مایع شیشه‌شویی**: مایع شیشه‌شویی ضد یخ استفاده کنید.
3. **باتری سالم**: باتری خودرو را بررسی کنید.
4. **شیشه‌ها**: شیشه‌ها را کاملاً تمیز و بدون یخ و برف نگه دارید.
5. **چراغ‌ها**: تمام چراغ‌های خودرو را بررسی و تمیز کنید.

### نکات رانندگی در جاده‌های برفی

1. **سرعت مناسب**: سرعت خود را با شرایط جاده تنظیم کنید. در جاده‌های برفی و یخی، سرعت بیش از حد بسیار خطرناک است.

2. **فاصله توقف**: فاصله توقف در جاده‌های لیس بسیار بیشتر است. فاصله ایمن بیشتری با خودروی جلویی حفظ کنید.

3. **تحرک ناگهانی**: از ترمز، گاز و فرمان دادن ناگهانی خودداری کنید. حرکات ناگهانی می‌تواند باعث لیز خوردن خودرو شود.

4. **شیب‌ها**: در شیب‌ها از ترمز استفاده نکنید. سرعت خودرو را با گیربکس کنترل کنید.

5. **چرخ‌دنده**: در شرایط لیس، از چرخ‌دنده‌های سنگین‌تر استفاده کنید تا کنترل بیشتری داشته باشید.

### اقدامات در صورت لیز خوردن خودرو

اگر خودرو لیز خورد:

1. **آرام باشید**: وارد پانیک نشوید.
2. **فرمان را رها نکنید**: فرمان را محکم نگه دارید.
3. **جهت مورد نظر**: فرمان را به سمتی که می‌خواهید خودرو برود بچرخانید.
4. **از ترمز خودداری کنید**: ترمز کردن می‌تواند وضعیت را بدتر کند.

### خدمات امداد خودرو راه‌بان در شرایط برفی

تیم راه‌بان با تجربه سالیان در شرایط آب و هوایی سخت شاهین دژ، آماده ارائه خدمات زیر است:

- **یدک‌کش چرخ‌گیر**: با سیستم چرخ‌گیر هیدرولیک برای جابجایی ایمن خودروها
- **جرثقیل تخصصی**: برای خروج خودروهای گیر کرده از جاده
- **مکانیک سیار**: عیب‌یابی و تعمیرات در محل
- **امداد باطری**: باطری به باطری سریع در شرایط سرد
- **پنچرگیری**: تعویض لاستیک در شرایط برف و یخ

### نکات مهم برای رانندگی در شرایط برفی

1. **حرکت آرام**: حرکات ناگهانی می‌تواند باعث لیز خوردن شود.
2. **استفاده از چراغ‌ها**: در شرایط کم‌نور و برف از چراغ‌های مناسب استفاده کنید.
3. **مسیرهای اصلی**: تا حد امکان از مسیرهای اصلی و پاک شده استفاده کنید.
4. **آماده باش**: همیشه شماره تماس امدادگران تخصصی را در دسترس داشته باشید.

### سخن پایانی

رانندگی در شرایط برفی و یخی نیاز به مهارت و آگاهی خاصی دارد. با رعایت نکات ایمنی و استفاده از تجهیزات مناسب، می‌توانید خطرات را به حداقل برسانید. در صورت بروز هرگونه مشکل، تیم راه‌بان در شاهین دژ آماده ارائه خدمات 24 ساعته است.

برای دریافت خدمات امداد خودرو در شرایط برفی، با شماره 09149850613 تماس بگیرید.`,date:"1403/12/10",author:"تیم تخصصی راه‌بان",category:"آموزش رانندگی",tags:["برف","یخ","رانندگی ایمن","شاهین دژ","آموزش"]},{id:3,title:"اهمیت استفاده از یدک‌کش چرخ‌گیر در امداد خودرو",summary:"چرا یدک‌کش چرخ‌گیر بهترین انتخاب برای امداد خودرو است و چه مزایایی دارد؟",content:`یدک‌کش چرخ‌گیر یکی از پیشرفته‌ترین و ایمن‌ترین روش‌ها برای امداد خودرو است. در این مقاله به بررسی مزایای استفاده از یدک‌کش چرخ‌گیر و اهمیت آن در امداد خودرو می‌پردازیم.

### مزایای یدک‌کش چرخ‌گیر

1. **حفاظت از خودرو**: سیستم چرخ‌گیر هیدرولیک بدون ایجاد آسیب به شاسی و بدنه خودرو، آن را جابجا می‌کند.

2. **امنیت بالا**: خودرو به صورت کاملاً ایمن و ثابت حمل می‌شود و از بروز حوادث ثانویه جلوگیری می‌کند.

3. **سرعت عملیات**: عملیات امداد با یدک‌کش چرخ‌گیر بسیار سریعتر از روش‌های سنتی انجام می‌شود.

4. **قابلیت استفاده در تمام شرایط**: این سیستم در تمام شرایط جاده‌ای از جمله برف، یخ، باران و جاده‌های لیس کاربرد دارد.

5. **کاهش هزینه‌ها**: با جلوگیری از آسیب به خودرو، هزینه‌های تعمیرات بعدی به حداقل می‌رسد.

### تفاوت یدک‌کش چرخ‌گیر با روش‌های سنتی

| ویژگی | یدک‌کش چرخ‌گیر | روش سنتی (قلاب) |
|--------|------------------|------------------|
| آسیب به خودرو | ندارد | احتمال آسیب به شاسی |
| امنیت حمل | بسیار بالا | متوسط |
| سرعت عملیات | بسیار سریع | کند |
| هزینه عملیات | مناسب | پایین (اما با هزینه‌های جانبی) |
| قابلیت استفاده | تمام شرایط | محدود |

### موارد استفاده از یدک‌کش چرخ‌گیر

- **تصادفات رانندگی**: برای جابجایی خودروهای تصادف کرده
- **مشکلات مکانیکی**: خودروهای با مشکلات مکانیکی شدید
- **خروج از جاده**: خودروهای گیر کرده در کنار جاده
- **مشکلات الکتریکی**: خودروهای با مشکلات باتری و سیستم الکتریکی
- **پنچر شدید**: در مواردی که تعویض لاستیک امکان‌پذیر نیست

### خدمات یدک‌کش چرخ‌گیر راه‌بان در شاهین دژ

تیم راه‌بان با نیسان‌های مجهز به سیستم چرخ‌گیر هیدرولیک، خدمات زیر را ارائه می‌دهد:

- **امداد فوری**: رسیدن به محل حادثه در کمترین زمان ممکن
- **تجهیزات مدرن**: استفاده از جدیدترین تجهیزات یدک‌کش چرخ‌گیر
- **راننده‌های مجرب**: راننده‌های با تجربه و ماهر
- **قیمت شفاف**: بدون هیچ هزینه پنهانی
- **پوشش گسترده**: خدمات در شاهین دژ و مناطق اطراف

### نکات مهم قبل از استفاده از یدک‌کش چرخ‌گیر

1. **بررسی شرایط خودرو**: اطمینان از اینکه خودرو قابلیت حمل با چرخ‌گیر را دارد.
2. **بررسی شرایط جاده**: اطمینان از اینکه شرایط جاده مناسب برای عملیات است.
3. **استفاده از تجهیزات ایمنی**: استفاده از علائم هشدار و چراغ‌های خطر.
4. **تماس با تیم تخصصی**: استفاده از تیم‌های تخصصی با تجربه.

### سخن پایانی

یدک‌کش چرخ‌گیر بهترین انتخاب برای امداد خودرو است که هم ایمنی بالایی دارد و هم از آسیب به خودرو جلوگیری می‌کند. استفاده از این سیستم توسط تیم‌های تخصصی مانند راه‌بان در شاهین دژ، بهترین راه برای امداد خودرو در شرایط مختلف است. برای دریافت خدمات یدک‌کش چرخ‌گیر، با شماره 09149850613 تماس بگیرید.`,date:"1403/12/05",author:"تیم تخصصی راه‌بان",category:"امداد خودرو",tags:["یدک‌کش چرخ‌گیر","امداد خودرو","ایمنی","شاهین دژ"]}],p={hero:E,services:L,gallery:B,testimonials:_,coverage:T,calculator:q,faq:I,articles:A},C=p.services;function K(){return`
    <section class="py-24 bg-gradient-to-br from-primary/5 to-transparent" id="calculator">
        <div class="max-w-7xl mx-auto px-4">
            <div class="text-center mb-16">
                <span class="text-primary font-bold tracking-widest uppercase text-sm">محاسبه سریع هزینه</span>
                <h2 class="text-3xl md:text-4xl font-bold mt-2 mb-4 text-slate-900 dark:text-white">ماژول محاسبه هزینه امداد</h2>
                <div class="h-1.5 w-24 bg-primary mx-auto rounded-full"></div>
                <p class="text-slate-600 dark:text-slate-400 mt-4">هزینه خدمات امداد خودرو شاهین دژ رو به صورت لحظه‌ای محاسبه کنید</p>
            </div>
            
            <div class="bg-white dark:bg-card-dark rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-white/5">
                <div class="grid md:grid-cols-2 gap-8">
                    <div>
                        <h3 class="text-lg font-bold mb-4 text-slate-900 dark:text-white">انتخاب خدمات</h3>
                        <div class="space-y-4">
                            ${C.map(e=>`
                                <label class="flex items-center justify-between p-4 border border-gray-200 dark:border-white/10 rounded-lg cursor-pointer hover:bg-gray-50 dark:hover:bg-white/5 transition-colors service-item" data-price="${e.price}">
                                    <div class="flex items-center gap-3">
                                        <input type="checkbox" class="w-4 h-4 text-primary bg-gray-100 border-gray-300 rounded focus:ring-primary focus:ring-2">
                                        <div>
                                            <span class="font-medium text-slate-900 dark:text-white">${e.title}</span>
                                            <p class="text-sm text-slate-500 dark:text-slate-400">${e.description}</p>
                                        </div>
                                    </div>
                                    <span class="text-primary font-bold whitespace-nowrap">${e.price} تومان</span>
                                </label>
                            `).join("")}
                        </div>
                    </div>
                    
                    <div>
                        <h3 class="text-lg font-bold mb-4 text-slate-900 dark:text-white">محاسبه فاصله</h3>
                        <div class="space-y-4">
                            <div>
                                <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">مسافت (کیلومتر)</label>
                                <input type="number" id="distance-input" min="1" max="100" value="10" 
                                    class="w-full px-4 py-2 border border-gray-300 dark:border-white/20 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-slate-800 text-slate-900 dark:text-white">
                            </div>
                            
                            <div class="bg-gray-50 dark:bg-white/5 rounded-lg p-4">
                                <div class="flex justify-between items-center mb-2">
                                    <span class="text-slate-600 dark:text-slate-400">هزینه خدمات انتخاب شده:</span>
                                    <span id="services-total" class="font-bold text-slate-900 dark:text-white">0 تومان</span>
                                </div>
                                <div class="flex justify-between items-center mb-2">
                                    <span class="text-slate-600 dark:text-slate-400">هزینه حمل بر اساس فاصله:</span>
                                    <span id="distance-cost" class="font-bold text-slate-900 dark:text-white">0 تومان</span>
                                </div>
                                <div class="flex justify-between items-center pt-2 border-t border-gray-200 dark:border-white/10">
                                    <span class="text-lg font-bold text-slate-900 dark:text-white">جمع کل:</span>
                                    <span id="total-cost" class="text-2xl font-black text-primary">0 تومان</span>
                                </div>
                            </div>
                            
                            <div class="grid grid-cols-2 gap-4">
                                <button id="calculate-btn" 
                                    class="bg-primary hover:bg-accent text-slate-900 font-bold py-3 px-6 rounded-lg transition-all transform hover:scale-105">
                                    محاسبه هزینه
                                </button>
                                <button id="reset-btn" 
                                    class="bg-gray-200 dark:bg-white/10 text-slate-700 dark:text-slate-300 font-bold py-3 px-6 rounded-lg hover:bg-gray-300 dark:hover:bg-white/20 transition-colors">
                                    پاک کردن
                                </button>
                            </div>
                            
                            <div id="result-message" class="mt-4 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg hidden">
                                <p class="text-green-700 dark:text-green-300 font-medium">✅ پیشنهاد قیمت شما آماده است!</p>
                                <p class="text-green-600 dark:text-green-400 text-sm mt-1">هزینه کل: <span id="final-amount" class="font-bold"></span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  `}const D=p.coverage;function P(){return`
  <section class="py-24 bg-white dark:bg-background-dark transition-colors overflow-hidden" id="coverage">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <span class="text-primary font-bold tracking-widest uppercase text-sm">پوشش سراسری شاهین دژ</span>
                <h2 class="text-3xl md:text-4xl font-bold mt-2 mb-4 text-slate-900 dark:text-white">در کمترین زمان در
                    کنار شما هستیم</h2>
                <div class="h-1.5 w-24 bg-primary mx-auto rounded-full"></div>
                <p class="text-slate-600 dark:text-slate-400 mt-4 max-w-2xl mx-auto">خدمات امداد خودرو شاهین دژ با اعزام فوری به تمام نقاط شهر و مناطق اطراف</p>
            </div>
            <div class="grid lg:grid-cols-3 gap-12 items-center">
                <div class="lg:col-span-2 relative">
                    <div
                        class="bg-slate-200 dark:bg-white/5 rounded-3xl p-4 shadow-2xl overflow-hidden aspect-[16/9] relative border-4 border-white/10">
                        <img alt="Service Area Map"
                            class="w-full h-full object-cover rounded-2xl opacity-80 dark:opacity-40"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBe1443kST08__thXmFz7U-Kt9jVQsOBVeDc-KKS3yRIqJPjuQID61nBk_vaCcJ81u6XoxvUFedA7Jw9vygLo4knl1rWWBAsvX4K5yNVQQkmTY3uKSukSpfCSbwri-OYkfVkXO1-C06VZK9pFuHJXfeXBJvzyZhKUObLgudStF6IKm7HBbx10pL9YLcPag33zTE7ejVlPbiPb27BclYgVn5EXRjJaAKFYzyH52M-7D5BfbXKZ04F_1d321tlzSlOEjPlYea-R888tY" />
                        <div class="absolute inset-0 bg-primary/10 mix-blend-overlay"></div>
                        <div class="map-pulse top-1/4 right-1/4"></div>
                        <div class="map-pulse top-1/2 right-1/3"></div>
                        <div class="map-pulse bottom-1/3 left-1/4"></div>
                        <div class="map-pulse top-1/3 left-1/2"></div>
                        <div
                            class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none">
                            <div
                                class="bg-slate-900/80 backdrop-blur-md px-6 py-3 rounded-full border border-primary/50 text-primary font-bold shadow-2xl">
                                پوشش سراسری شاهین دژ و حومه
                            </div>
                        </div>
                    </div>
                </div>
                <div class="space-y-6">
                    <h3 class="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
                        <span class="material-icons text-primary">my_location</span>
                        مناطق تحت پوشش فوری
                    </h3>
                    <div class="grid grid-cols-1 gap-4">
                        ${D.map(t=>`
                    <div class="flex items-center gap-4 bg-slate-50 dark:bg-card-dark p-4 rounded-xl border border-gray-100 dark:border-white/5 hover:border-primary transition-colors">
                        <div class="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                            <span class="material-icons text-sm">fiber_manual_record</span>
                        </div>
                        <span class="font-bold text-slate-900 dark:text-slate-100">${t.city}</span>
                        <span class="ms-auto text-slate-900 dark:text-slate-100">${t.eta}</span>
                    </div>
            `).join("")}
                    </div>
                    <div class="bg-primary/10 border border-primary/30 rounded-xl p-4">
                        <p class="text-primary font-bold text-sm">✅ اعزام فوری در کمتر از ۲۰ دقیقه</p>
                        <p class="text-slate-600 dark:text-slate-400 text-sm mt-2">خدمات ۲۴ ساعته شبانه‌روزی در تمام نقاط شاهین دژ و مناطق اطراف</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  `}const F=p.hero;function O(){return`
      <footer class="bg-slate-900 dark:bg-black border-t border-white/5 pt-20 pb-28 transition-colors" id="contact">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid md:grid-cols-4 gap-12 mb-16">
                <div class="col-span-1 md:col-span-2">
                    <div class="flex items-center gap-2 mb-6">
                        <div class="rounded-lg">
                            <img src="logo.png" alt="Logo" class="w-12 h-12">
                        </div>
                        <span class="text-xl font-bold tracking-tight text-white">امداد خودرو <span
                                class="text-primary">راه‌بان</span></span>
                    </div>
                    <p class="text-slate-400 leading-relaxed mb-6 max-w-md">
                        بهترین خدمات امداد خودرو و یدک‌کش شاهین دژ با کادری مجرب و سابقه بیش از ۱۰ سال در زمینه امداد جاده‌ای، 
                        آماده خدمت‌رسانی به شما همشهریان عزیز در تمام ساعات شبانه‌روز می‌باشد. ایمنی خودروی شما اولویت ماست.
                    </p>
                    <div class="flex gap-4">
                        <a class="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-slate-900 transition-all text-slate-400 group"
                            href="#">
                            <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24">
                                <path
                                    d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z">
                                </path>
                            </svg>
                        </a>
                    </div>
                </div>
                <div>
                    <h4 class="text-white font-bold mb-6">دسترسی سریع</h4>
                    <ul class="space-y-4 text-slate-400">
                        <li><a class="hover:text-primary transition-colors" href="#">صفحه اصلی</a></li>
                        <li><a class="hover:text-primary transition-colors" href="#pricing-services">خدمات و قیمت‌ها</a>
                        </li>
                        <li><a class="hover:text-primary transition-colors" href="#coverage">محدوده پوشش</a></li>
                    </ul>
                </div>
                <div>
                    <h4 class="text-white font-bold mb-6">اطلاعات تماس</h4>
                    <ul class="space-y-4 text-slate-400">
                        <li class="flex items-start gap-3">
                            <span class="material-icons text-primary text-sm mt-1">location_on</span>
                            <span>شهید بهشتی، شاهین دژ، آذربایجان غربی</span>
                        </li>
                        <li class="flex items-center gap-3">
                            <span class="material-icons text-primary text-sm">phone</span>
                            <span dir="ltr">${F.phone}</span>
                        </li>
                        <li class="flex items-center gap-3">
                            <span class="material-icons text-primary text-sm">access_time</span>
                            <span>خدمات شبانه‌روزی (۷ روز هفته)</span>
                        </li>
                        <li class="flex items-center gap-3">
                            <span class="material-icons text-primary text-sm">local_shipping</span>
                            <span>امداد خودرو و یدک‌کش شاهین دژ</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-4">
                <p class="text-slate-500 text-sm">© ۱۴۰۴ تمامی حقوق مادی و معنوی برای مجموعه امداد راه‌بان محفوظ
                    است.</p>
                <div class="flex gap-6">
                    <img alt="Trust Badge 1"
                        class="h-12 w-12 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all rounded bg-white/5 p-1"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcZbPrbooeSG9L09vixx_mkkLx5gk-EgmezVRCVxJOHyXVW4WEe385MMg-Yz21lHSpBqNNt1NEmUo9obw80XC9eK4pFiEPk7yAPgqE79JhtWUGK23R9FfbgEr4hPWq-5-gmNJ36kBIzf1Sy9Ti0V0-Wda6Kch9RINts10Ie5ged6ZZS17KOLaju8JHlBBbuO0n2tiM7eh7tWAzXX-CrEY5d-yO65sHgcwOy2eAGfLaOTuZzJKJoWK_OD9Wmbr4H3NOpg1Au15K91o" />
                    <img alt="Trust Badge 2"
                        class="h-12 w-12 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all rounded bg-white/5 p-1"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBe1443kST08__thXmFz7U-Kt9jVQsOBVeDc-KKS3yRIqJPjuQID61nBk_vaCcJ81u6XoxvUFedA7Jw9vygLo4knl1rWWBAsvX4K5yNVQQkmTY3uKSukSpfCSbwri-OYkfVkXO1-C06VZK9pFuHJXfeXBJvzyZhKUObLgudStF6IKm7HBbx10pL9YLcPag33zTE7ejVlPbiPb27BclYgVn5EXRjJaAKFYzyH52M-7D5BfbXKZ04F_1d321tlzSlOEjPlYea-R888tY" />
                </div>
            </div>
        </div>
    </footer>
  `}const y=p.hero;function z(){return`
  <nav class="sticky top-0 z-50 bg-white/90 dark:bg-background-dark/90 backdrop-blur-md border-b border-primary/10 transition-colors">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center h-20">
                <div class="flex items-center gap-2">
                    <div class="rounded-lg">
                    <img src="logo.png" alt="Logo" class="w-12 h-12">
                    </div>
                    <span class="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">امداد خودرو <span
                            class="text-primary">${y.title}</span></span>
                </div>
                <div class="hidden md:flex items-center space-x space-x-8">
                    <a class="text-slate-700 dark:text-slate-200 hover:text-primary transition-colors" href="#">صفحه
                        اصلی</a>
                    <a class="text-slate-700 dark:text-slate-200 hover:text-primary transition-colors"
                        href="#pricing-services">خدمات و قیمت‌ها</a>
                    <a class="text-slate-700 dark:text-slate-200 hover:text-primary transition-colors"
                        href="#coverage">محدوده پوشش</a>
                </div>
                <div class="flex items-center gap-4">
                    <button
                        id="theme-toggle"
                        class="theme-toggle-btn p-2 rounded-full bg-slate-100 dark:bg-white/10 text-slate-700 dark:text-primary hover:bg-slate-200 dark:hover:bg-white/20 transition-all flex items-center justify-center"
                        title="تغییر حالت نمایش">
                        <span class="material-icons sun">light_mode</span>
                        <span class="material-icons moon">dark_mode</span>
                    </button>
                    <a class="hidden sm:flex items-center gap-2 bg-primary hover:bg-accent text-slate-900 font-bold py-2 px-6 rounded-lg transition-all transform hover:scale-105"
                        href="tel:${y.phone}">
                        <span class="material-icons">phone_in_talk</span>
                        <span>${y.phone}</span>
                    </a>
                    <button class="md:hidden text-slate-900 dark:text-white">
                        <span class="material-icons text-3xl">menu</span>
                    </button>
                </div>
            </div>
        </div>
    </nav>
  `}const X=p.hero;function J(){return`
  <header class="relative overflow-hidden min-h-[85vh] flex items-center">
        <div class="absolute inset-0 z-0">
            <img alt="Nissan Towing Truck Service" class="w-full h-full object-cover"
                src="hero.webp" alt="Hero Image"/>
            <div class="absolute inset-0 bg-gradient-to-l from-black via-black/80 to-transparent"></div>
        </div>
        <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div class="max-w-2xl">
                <div
                    class="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-primary/20 text-primary border border-primary/30 mb-6">
                    <span class="relative flex h-3 w-3">
                        <span
                            class="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                        <span class="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                    </span>
                    <span class="text-sm font-semibold">پاسخگویی شبانه‌روزی (۲۴/۷)</span>
                </div>
                <h1 class="text-4xl md:text-6xl font-black leading-tight mb-6 text-white">
                    بهترین امداد خودرو و یدک‌کش <br />
                    <span class="text-primary underline decoration-primary/30 underline-offset-8">شاهین دژ
                        شبانه‌روزی</span>
                </h1>
                <p class="text-xl text-slate-300 mb-10 leading-relaxed max-w-xl">
                    حمل خودرو با مدرن‌ترین تجهیزات چرخ‌گیر بدون کوچکترین آسیب به خودروی شما. اعزام فوری به تمام
                    نقاط شاهین دژ و حومه در کمتر از ۲۰ دقیقه.
                </p>
                <div class="flex flex-col sm:flex-row gap-4">
                    <a class="flex items-center justify-center gap-3 bg-primary hover:bg-accent text-slate-900 text-xl font-black py-5 px-10 rounded-xl transition-all shadow-xl shadow-primary/20 group"
                        href="tel:${X.phone}">
                        <span class="material-icons group-hover:rotate-12 transition-transform">call</span>
                        تماس فوری با امداد
                    </a>
                    <a class="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 py-5 px-10 rounded-xl transition-all"
                        href="#pricing-services">
                        مشاهده لیست قیمت‌ها
                    </a>
                </div>
            </div>
        </div>
    </header>
  `}function Y(e){return`
    <div class="bg-white dark:bg-card-dark p-8 rounded-2xl shadow-sm flex flex-col">
      
      <div class="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
        <span class="material-symbols-outlined text-primary text-4xl">
          ${e.icon}
        </span>
      </div>

      <h3 class="text-xl font-bold mb-4">${e.title}</h3>

      <p class="text-slate-600 dark:text-slate-400 mb-8 flex-grow">
        ${e.description}
      </p>

      <div class="border-t border-gray-100 dark:border-white/5 pt-6 mt-auto">
        <span class="text-sm text-slate-500 dark:text-slate-400 block mb-1">شروع قیمت از:</span>
        <span class="text-2xl font-black text-primary">
          ${e.price.toLocaleString()} 
          <span class="text-sm font-normal text-slate-500 dark:text-slate-400">تومان</span>
        </span>
      </div>

    </div>
  `}function R(){return`
    <section class="py-24" id="pricing-services">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-16">
          <span class="text-primary font-bold tracking-widest uppercase text-sm">خدمات تخصصی ما</span>
          <h2 class="text-3xl md:text-4xl font-bold mt-2 mb-4 text-slate-900 dark:text-white">خدمات امداد خودرو شاهین دژ</h2>
          <div class="h-1.5 w-24 bg-primary mx-auto rounded-full"></div>
          <p class="text-slate-600 dark:text-slate-400 mt-4 max-w-2xl mx-auto">بهترین خدمات امداد خودرو و یدک‌کش در شاهین دژ با اعزام فوری و قیمت شفاف</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          ${p.services.map(t=>Y(t)).join("")}
        </div>
      </div>
    </section>
  `}const k=p.hero;function V(){return`
  <div
        class="fixed bottom-0 left-0 right-0 z-50 bg-slate-900/95 dark:bg-black/95 backdrop-blur-lg border-t border-primary/20 shadow-[0_-10px_40px_-15px_rgba(244,192,37,0.3)] transition-colors">
        <div class="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between gap-4">
            <div class="flex items-center gap-4">
                <div class="bg-primary p-3 rounded-xl animate-bounce">
                    <span class="material-icons text-slate-900 text-3xl font-bold">phone_in_talk</span>
                </div>
                <div class="hidden sm:block">
                    <p class="text-primary text-xs font-bold uppercase tracking-wider mb-1">امداد خودرو شاهین دژ ۲۴ ساعته</p>
                    <p class="text-white text-xl font-black">${k.phone}</p>
                </div>
            </div>
            <a class="flex-grow sm:flex-grow-0 bg-primary hover:bg-accent text-slate-900 font-black py-3 px-8 rounded-xl flex items-center justify-center gap-3 transition-transform hover:scale-[1.02] active:scale-95 shadow-lg shadow-primary/20"
                href="tel:${k.phone}">
                <span class="material-icons">flash_on</span>
                <span>اعزام فوری امدادگر شاهین دژ</span>
            </a>
            <div class="hidden md:flex items-center gap-2 text-slate-400 text-sm">
                <span class="relative flex h-2 w-2">
                    <span
                        class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                    <span class="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                زمان اعزام: زیر ۲۰ دقیقه در شاهین دژ
            </div>
        </div>
    </div>
    <div class="fixed inset-0 z-[100] bg-black/90 hidden items-center justify-center p-4 target:flex" id="lightbox">
        <a class="absolute inset-0 cursor-default" href="#gallery"></a>
        <div class="relative max-w-5xl w-full">
            <img alt="Enlarged Fleet Image" class="w-full h-auto rounded-lg shadow-2xl" id="lightbox-img"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKO9f5eEJuqpCR9dhiJ11oG0-TiJlHNsHScXF9fJk42mGxf5JaVIcD5DWilS9Q8V7tcpPjiweOv11ZagIdz7T8yJr8aYML41ljr2lIfF6f6v9lUa6Z-H2e6tdk7tR-Iqfo2KSMGiqz8jlSjP5L-52Dm2d91XTUMWqSRBIxYSo_pAqoQjXiiiifYpkFuuaU3gzZa4dYL6BFJi6_1kcsZvVMhZMdYKpuckeAMiRlQOt6ra5vBYoFvRsnFVk0srSCjZQ1DFGHLOYIGR4" />
            <a class="absolute -top-12 left-0 text-white hover:text-primary transition-colors" href="#gallery">
                <span class="material-icons text-4xl">close</span>
            </a>
        </div>
    </div>
  `}function M(e){return`
        <div class="bg-white dark:bg-card-dark p-8 rounded-2xl shadow-lg border-r-4 border-primary relative transition-colors">
            <div class="absolute -top-4 -right-4 bg-primary text-background-dark w-10 h-10 rounded-full flex items-center justify-center shadow-lg">
                <span class="material-icons">format_quote</span>
            </div>
            <div class="flex items-center gap-4 mb-6">
                <div class="w-12 h-12 bg-slate-100 dark:bg-white/10 rounded-full flex items-center justify-center">
                    <span class="material-icons text-slate-400">person</span>
                </div>
                <div>
                    <h4 class="font-bold text-slate-900 dark:text-white">${e.name}</h4>
                    <span class="text-sm text-slate-500 dark:text-slate-400">${e.car}</span>
                </div>
            </div>
            <p class="text-slate-600 dark:text-slate-300 italic leading-relaxed">${e.text}</p>
        </div>
  `}const H=p.testimonials;function U(){return`
      <section class="py-24 bg-slate-50 dark:bg-background-dark/50 transition-colors" id="testimonials">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <span class="text-primary font-bold tracking-widest uppercase text-sm">رضایت مشتریان شاهین دژ</span>
                <h2 class="text-3xl md:text-4xl font-bold mt-2 mb-4 text-slate-900 dark:text-white">نظرات مشتریان</h2>
                <div class="h-1.5 w-24 bg-primary mx-auto rounded-full"></div>
                <p class="text-slate-600 dark:text-slate-400 mt-4 max-w-2xl mx-auto">رضایت مشتریان ما در شاهین دژ گواهی بر کیفیت خدمات امداد خودرو راه‌بان</p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">${H.map(t=>M(t)).join("")}</div>
        </div>
    </section>
  `}const W=p.gallery;function N(){return`
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
          ${W.map(e=>Z(e)).join("")}
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
  `}function Z(e){return`
    <div class="gallery-card bg-white dark:bg-card-dark rounded-2xl shadow-lg overflow-hidden border border-gray-100 dark:border-white/5 group" 
         data-type="${e.accidentType}" 
         data-conditions="${e.roadConditions}" 
         data-severity="${e.severity}">
      
      <!-- تصویر -->
      <div class="relative overflow-hidden">
        <img src="${e.image}" 
             alt="${e.title}" 
             class="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300 cursor-pointer"
             onclick="openGalleryModal(${e.id})"
             onerror="this.onerror=null; this.src='/images/default-gallery.jpg'; this.alt='تصویر پیش‌فرض';">
        
        <!-- overlay -->
        <div class="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
          <span class="text-white font-bold text-lg opacity-0 group-hover:opacity-100 transition-opacity">مشاهده بیشتر</span>
        </div>
      </div>

      <!-- اطلاعات -->
      <div class="p-6">
        <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-2">${e.title}</h3>
        <p class="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-3">${e.description}</p>
        
        <!-- مشخصات تصادف -->
        <div class="space-y-2">
          <div class="flex justify-between text-xs text-slate-500 dark:text-slate-400">
            <span class="font-medium">نوع تصادف:</span>
            <span>${e.accidentType}</span>
          </div>
          <div class="flex justify-between text-xs text-slate-500 dark:text-slate-400">
            <span class="font-medium">محل:</span>
            <span>${e.location}</span>
          </div>
          <div class="flex justify-between text-xs text-slate-500 dark:text-slate-400">
            <span class="font-medium">زمان:</span>
            <span>${e.time}</span>
          </div>
          <div class="flex justify-between text-xs text-slate-500 dark:text-slate-400">
            <span class="font-medium">شدت:</span>
            <span class="severity-badge ${Q(e.severity)}">${e.severity}</span>
          </div>
        </div>

        <!-- تجهیزات استفاده شده -->
        <div class="mt-4 pt-3 border-t border-gray-100 dark:border-white/5">
          <div class="flex items-center justify-between">
            <span class="text-xs text-slate-500 dark:text-slate-400 font-medium">تجهیزات:</span>
            <span class="text-sm text-primary font-bold">${e.equipmentUsed}</span>
          </div>
        </div>
      </div>
    </div>
  `}function Q(e){switch(e){case"سبک":return"bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300";case"متوسط":return"bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300";case"شدید":return"bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300";default:return"bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300"}}const G=p.faq;function ee(){return`
    <section class="py-24 bg-gray-50 dark:bg-gray-800" id="faq">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-16">
          <span class="text-primary font-bold tracking-widest uppercase text-sm">سوالات متداول</span>
          <h2 class="text-3xl md:text-4xl font-bold mt-2 mb-4 text-slate-900 dark:text-white">پرسش‌های رایج شما</h2>
          <div class="h-1.5 w-24 bg-primary mx-auto rounded-full"></div>
          <p class="text-slate-600 dark:text-slate-400 mt-4">پاسخ به مهم‌ترین سوالات شما در مورد خدمات امداد خودرو</p>
        </div>

        <div class="grid gap-6">
          ${G.map((e,t)=>te(e,t)).join("")}
        </div>
      </div>
    </section>
  `}function te(e,t){return`
    <div class="bg-white dark:bg-card-dark rounded-xl shadow-sm border border-gray-100 dark:border-white/5 overflow-hidden">
      <button class="w-full px-6 py-4 text-right flex justify-between items-center focus:outline-none group" onclick="toggleFAQ(${t})" aria-expanded="false" aria-controls="faq-answer-${t}">
        <span class="text-lg font-semibold text-slate-900 dark:text-white">${e.question}</span>
        <span class="text-primary group-hover:text-accent transition-colors transform rotate-0 transition-transform duration-300">
          <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </span>
      </button>
      <div id="faq-answer-${t}" class="px-6 py-4 text-slate-600 dark:text-slate-400 border-t border-gray-100 dark:border-white/5 hidden">
        ${e.answer}
      </div>
    </div>
  `}const ae=p.articles;function se(){return`
    <section class="py-24" id="articles">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-16">
          <span class="text-primary font-bold tracking-widest uppercase text-sm">مقالات آموزشی</span>
          <h2 class="text-3xl md:text-4xl font-bold mt-2 mb-4 text-slate-900 dark:text-white">مقالات و مطالب آموزشی</h2>
          <div class="h-1.5 w-24 bg-primary mx-auto rounded-full"></div>
          <p class="text-slate-600 dark:text-slate-400 mt-4">مقالات آموزشی و اطلاعات مفید در مورد ایمنی رانندگی و امداد خودرو</p>
        </div>

        <!-- فیلترها -->
        <div class="mb-8 flex flex-wrap gap-4">
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
        </div>

        <!-- مقالات -->
        <div id="articles-grid" class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          ${ae.map(e=>re(e)).join("")}
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
  `}function re(e){return`
    <article class="bg-white dark:bg-card-dark rounded-2xl shadow-lg overflow-hidden border border-gray-100 dark:border-white/5 group hover:shadow-xl transition-shadow duration-300">
      <div class="aspect-video overflow-hidden">
        <div class="w-full h-full bg-gradient-to-br from-primary/20 to-transparent flex items-center justify-center">
          <span class="text-4xl font-bold text-primary/80">${e.title.charAt(0)}</span>
        </div>
      </div>
      
      <div class="p-6">
        <div class="flex items-center justify-between mb-3">
          <span class="text-xs text-primary font-semibold bg-primary/10 px-2 py-1 rounded-full">${e.category}</span>
          <span class="text-xs text-slate-500 dark:text-slate-400">${e.date}</span>
        </div>
        
        <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-primary transition-colors">
          ${e.title}
        </h3>
        
        <p class="text-slate-600 dark:text-slate-400 mb-4 line-clamp-3">${e.summary}</p>
        
        <div class="flex flex-wrap gap-2 mb-4">
          ${e.tags.map(t=>`<span class="text-xs text-slate-500 dark:text-slate-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">${t}</span>`).join("")}
        </div>
        
        <div class="flex items-center justify-between">
          <span class="text-sm text-slate-500 dark:text-slate-400">نویسنده: ${e.author}</span>
          <button class="text-primary hover:text-accent font-semibold text-sm" onclick="openArticleModal(${e.id})">
            مطالعه کامل مقاله →
          </button>
        </div>
      </div>
    </article>
  `}function ne(){return`
    ${z()}
    ${J()}
    ${R()}
    ${K()}

    ${N()}
    ${ee()}
    ${se()}
    ${U()}
    ${P()}
    ${O()}
    ${V()}
  `}const S="site-theme";function w(e){const t=document.documentElement;e==="dark"?t.classList.add("dark"):t.classList.remove("dark"),oe(),localStorage.setItem(S,e)}function ie(){const e=localStorage.getItem(S);if(e)w(e);else{const t=window.matchMedia("(prefers-color-scheme: dark)").matches;w(t?"dark":"light")}}function le(){const e=document.documentElement.classList.contains("dark");w(e?"light":"dark")}function oe(){const e=document.documentElement.classList.contains("dark");document.querySelector(".sun")?.classList.toggle("hidden",e),document.querySelector(".moon")?.classList.toggle("hidden",!e)}const de="modulepreload",ce=function(e){return"/path-finder/"+e},$={},pe=function(t,m,u){let s=Promise.resolve();if(m&&m.length>0){let i=function(o){return Promise.all(o.map(a=>Promise.resolve(a).then(g=>({status:"fulfilled",value:g}),g=>({status:"rejected",reason:g}))))};var x=i;document.getElementsByTagName("link");const n=document.querySelector("meta[property=csp-nonce]"),l=n?.nonce||n?.getAttribute("nonce");s=i(m.map(o=>{if(o=ce(o),o in $)return;$[o]=!0;const a=o.endsWith(".css"),g=a?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${g}`))return;const d=document.createElement("link");if(d.rel=a?"stylesheet":de,a||(d.as="script"),d.crossOrigin="",d.href=o,l&&d.setAttribute("nonce",l),document.head.appendChild(d),a)return new Promise((c,b)=>{d.addEventListener("load",c),d.addEventListener("error",()=>b(new Error(`Unable to preload CSS for ${o}`)))})}))}function r(n){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=n,window.dispatchEvent(l),!l.defaultPrevented)throw n}return s.then(n=>{for(const l of n||[])l.status==="rejected"&&r(l.reason);return t().catch(r)})};function xe(e={}){const{immediate:t=!1,onNeedRefresh:m,onOfflineReady:u,onRegistered:s,onRegisteredSW:r,onRegisterError:x}=e;let n,l;const i=async(a=!0)=>{await l};async function o(){if("serviceWorker"in navigator){if(n=await pe(async()=>{const{Workbox:a}=await import("./workbox-window.prod.es5-BIl4cyR9.js");return{Workbox:a}},[]).then(({Workbox:a})=>new a("/path-finder/sw.js",{scope:"/path-finder/",type:"classic"})).catch(a=>{x?.(a)}),!n)return;n.addEventListener("activated",a=>{(a.isUpdate||a.isExternal)&&window.location.reload()}),n.addEventListener("installed",a=>{a.isUpdate||u?.()}),n.register({immediate:t}).then(a=>{r?r("/path-finder/sw.js",a):s?.(a)}).catch(a=>{x?.(a)})}}return l=o(),i}const j=p;async function me(){ie();const e=document.querySelector("#app");e&&(e.innerHTML=`
    ${ne()}
  `,xe({immediate:!0}),ue(),await ge())}function ue(){const e=document.querySelector("#theme-toggle");e&&e.addEventListener("click",le)}async function ge(){const e=document.querySelectorAll('.service-item input[type="checkbox"]'),t=document.getElementById("distance-input"),m=document.getElementById("calculate-btn"),u=document.getElementById("reset-btn"),s=document.getElementById("services-total"),r=document.getElementById("distance-cost"),x=document.getElementById("total-cost"),n=document.getElementById("result-message"),l=document.getElementById("final-amount");let i;i=j.calculator||{ratePerKm:15e3,baseFee:5e4,minDistance:1,maxDistance:100};let o=j.services||[];function a(){let c=0;return e.forEach((b,v)=>{if(b.checked){const f=o[v],h=f?f.price:0;c+=h}}),c}function g(c){return c<i.minDistance?i.baseFee:c*i.ratePerKm+i.baseFee}function d(){const c=a(),b=t.value.trim(),v=parseInt(b,10);if(isNaN(v)||v<i.minDistance||v>i.maxDistance){t.value=i.minDistance.toString();return}const f=g(v),h=c+f;s&&(s.innerText=c.toLocaleString()+" تومان"),r&&(r.innerText=f.toLocaleString()+" تومان"),x&&(x.innerText=h.toLocaleString()+" تومان"),h>0?(n&&n.classList.remove("hidden"),l&&(l.innerText=h.toLocaleString()+" تومان")):n&&n.classList.add("hidden")}m.addEventListener("click",d),u.addEventListener("click",()=>{e.forEach(c=>c.checked=!1),t.value=i.minDistance.toString(),n.classList.add("hidden"),d()}),e.forEach(c=>{c.addEventListener("change",d)}),t.addEventListener("input",d),t.min=i.minDistance.toString(),t.max=i.maxDistance.toString(),t.value=i.minDistance.toString(),d()}me();
