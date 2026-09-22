# عدسة — مدونة تصوير (React + React Router)

## التشغيل
1. npm install
2. npm run dev

## الداتا
ملف `public/posts.json` ده مؤقت بس.
نزّلي الملف الحقيقي من لينك التاسك واستبدليه بيه.
الكود بيقرا الحقول دي من كل تدوينة:
id, title, excerpt, content, image, category, author, date
لو الملف الحقيقي أسماء حقوله مختلفة، غيّريها في
`src/components/PostCard.jsx` و `src/pages/BlogDetails.jsx`.
بيقبل array عادي أو object شكله { "posts": [...] }.

## التصميم
تصميم داكن (near-black) + لون برتقالي واحد كـ accent + خط Cairo،
على نفس روح الموقع المرجعي في التاسك، واتجاه الصفحة RTL بالكامل.

## الصفحات
/            الرئيسية
/blog        بحث + فلترة بالتصنيف (chips) + عرض شبكي/قائمة + صفحات (6 لكل صفحة)
/blog/:id    تفاصيل المقال
*            404
