const fs = require('fs');

const langs = ['ar', 'en', 'es', 'fa', 'ur'];

for (const lang of langs) {
  const filePath = `app/${lang}/category/[slug]/page.js`;
  if (fs.existsSync(filePath)) {
    let txt = fs.readFileSync(filePath, 'utf8');
    
    if (!txt.includes("'letters': {")) {
      // Find the last key in categoryTitles and append 'letters'
      txt = txt.replace(
        /'visas': \{.*\},/,
        `'visas': { ur: 'ویزا جات', en: 'Visas', ar: 'تأشيرات', fa: 'ویزاها', es: 'Visas' },\n  'letters': { ur: 'شخصیات کے لیٹر', en: 'Letters from Personalities', ar: 'رسائل الشخصيات', fa: 'نامه‌های شخصیت‌ها', es: 'Cartas de Personalidades' },`
      );
      fs.writeFileSync(filePath, txt, 'utf8');
      console.log(`Updated ${filePath}`);
    } else {
      console.log(`Already updated ${filePath}`);
    }
  }
}
