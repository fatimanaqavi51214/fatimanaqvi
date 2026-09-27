const fs = require('fs');

const docId = 'doc_137';

const newTranslations = {
  "ur": {
    "name": "اردو",
    "dir": "rtl",
    "docName": "باہمی معاہدہ برائے تقسیم و تخصیصِ اراضی",
    "lines": [
      { "label": "فریقین", "value": "1. مصطفیٰ خرمہ (رہائشی ببّیلا)۔\n2. نصرت فاطمہ نقوی (حامل پاکستانی پاسپورٹ)۔" },
      { "label": "پس منظر", "value": "محمد خرمہ اور مصطفیٰ خرمہ کی ریئل اسٹیٹ پلاٹ نمبر 284 واقع قبر الست (سیدہ زینب) میں ملکیت کی رو سے، جو کہ ببّیلا کے نوٹری پبلک کے پاس رجسٹرڈ پاور آف اٹارنی نمبر 18/26001 بتاریخ 9 جون 1982ء کے تحت حاصل شدہ ہے۔" },
      { "label": "تقسیم کی تفصیلات", "value": "ذیلی حصہ نمبر 1 (1/284): نصرت فاطمہ نقوی کے نام مختص کیا گیا۔\nذیلی حصہ نمبر 2 (2/284): محمد اور مصطفیٰ (پسران علی خرمہ) کے نام باہمی برابر حصے کی بنیاد پر مختص کیا گیا۔" },
      { "label": "شرائط", "value": "یہ تخصیص و تقسیم قطعی اور حتمی ہے۔ ہر فریق کو اپنے مختص کردہ حصے پر مکمل مالکانہ اختیارات، قانونی افراز (علیحدگی)، لائسنس کا حصول اور سرکاری دفاتر میں نمائندگی کے حقوق شامل ہیں۔" },
      { "label": "دستخط اور خاکہ", "value": "دستخط کنندگان: محمد خرمہ، مصطفیٰ خرمہ، نصرت فاطمہ نقوی۔ نقشے میں راستۂ السیدہ زینب، قطعات 1/284 اور 2/284 اور حدود کی نشان دہی موجود ہے۔" }
    ]
  },
  "en": {
    "name": "English",
    "dir": "ltr",
    "docName": "Private Agreement for Land Allocation and Division",
    "lines": [
      { "label": "Parties", "value": "1. Mustafa Khurma (Resident of Babbila).\n2. Nusrat Fatima Naqvi (Holder of Pakistani Passport)." },
      { "label": "Background", "value": "Under the ownership held by Mohammad Khurma and Mustafa Khurma in real estate plot No. 284 located in Qabr Essit area, pursuant to Power of Attorney No. 26001/18 registered with the Notary Public of Babbila dated 9/6/1982." },
      { "label": "Division Details", "value": "Divided Share 1 (1/284): Allocated to Nusrat Fatima Naqvi.\nDivided Share 2 (2/284): Allocated to Mohammad and Mustafa, sons of the late Ali Khurma, equally divided between them." },
      { "label": "Terms", "value": "This division and allocation is agreed upon amicably, definitively, and irrevocably. Each party holds full legal right and power over their allocated portion, including subdivision, licensing, and administrative representation." },
      { "label": "Signatures & Sketch", "value": "Signatures: Mohammad Khurma, Mustafa Khurma, Nusrat Fatima Naqvi. Site Sketch indicates plot layout, road towards Sayyidah Zaynab, demarcated sections 1/284 and 2/284." }
    ]
  },
  "ar": {
    "name": "العربية",
    "dir": "rtl",
    "docName": "اتفاقية خاصة لفرز وتخصيص الأراضي",
    "lines": [
      { "label": "الأطراف", "value": "1. مصطفى خرمة (مقيم في ببيلا).\n2. نصرت فاطمة نقوي (تحمل جواز سفر باكستاني)." },
      { "label": "الخلفية", "value": "بموجب الملكية العائدة لمحمد خرمة ومصطفى خرمة في العقار رقم 284 بمنطقة قبر الست، بموجب الوكالة رقم 26001/18 المسجلة لدى الكاتب بالعدل في ببيلا بتاريخ 9/6/1982." },
      { "label": "تفاصيل القسمة", "value": "القسمة الأولى (1/284): خُصصت لنصرت فاطمة نقوي.\nالقسمة الثانية (2/284): خُصصت لمحمد ومصطفى، ولدي المرحوم علي خرمة، مقسمة بينهما بالتساوي." },
      { "label": "الشروط", "value": "هذا الفرز والتخصيص قطعي ونهائي ولا رجعة فيه. يحق لكل طرف التصرف الكامل في حصته المخصصة، بما في ذلك الفرز والترخيص والتمثيل الإداري." },
      { "label": "التوقيع والمخطط", "value": "التواقيع: محمد خرمة، مصطفى خرمة، نصرت فاطمة نقوي. يوضح المخطط تخطيط القطعة، الطريق المؤدي إلى السيدة زينب، والأقسام المحددة 1/284 و 2/284." }
    ]
  },
  "fa": {
    "name": "فارسی",
    "dir": "rtl",
    "docName": "توافق‌نامه خصوصی تخصیص و تقسیم اراضی",
    "lines": [
      { "label": "طرفین", "value": "۱. مصطفی خرمه (ساکن ببیلا).\n۲. نصرت فاطمه نقوی (دارنده گذرنامه پاکستانی)." },
      { "label": "پیش‌زمینه", "value": "تحت مالکیت محمد خرمه و مصطفی خرمه در قطعه زمین شماره ۲۸۴ واقع در منطقه قبر الست، بر اساس وکالتنامه شماره ۲۶۰۰۱/۱۸ ثبت شده در سردفتر اسناد رسمی ببیلا مورخ ۹/۶/۱۹۸۲." },
      { "label": "جزئیات تقسیم", "value": "سهم تقسیم شده ۱ (۱/۲۸۴): به نصرت فاطمه نقوی اختصاص یافت.\nسهم تقسیم شده ۲ (۲/۲۸۴): به محمد و مصطفی، پسران مرحوم علی خرمه، به طور مساوی بین آنها اختصاص یافت." },
      { "label": "شرایط", "value": "این تقسیم و تخصیص به صورت دوستانه، قطعی و غیرقابل برگشت توافق شده است. هر یک از طرفین حق و اختیار کامل قانونی نسبت به سهم اختصاص یافته خود را دارند، از جمله تفکیک، اخذ مجوز و نمایندگی اداری." },
      { "label": "امضا و کروکی", "value": "امضاها: محمد خرمه، مصطفی خرمه، نصرت فاطمه نقوی. کروکی سایت نشان‌دهنده چیدمان قطعه، جاده به سمت سیده زینب، و بخش‌های مشخص شده ۱/۲۸۴ و ۲/۲۸۴ است." }
    ]
  },
  "es": {
    "name": "Español",
    "dir": "ltr",
    "docName": "Acuerdo Privado de Asignación y División de Tierras",
    "lines": [
      { "label": "Partes", "value": "1. Mustafa Khurma (Residente de Babbila).\n2. Nusrat Fatima Naqvi (Titular de Pasaporte Paquistaní)." },
      { "label": "Antecedentes", "value": "Bajo la propiedad de Mohammad Khurma y Mustafa Khurma en la parcela inmobiliaria No. 284 ubicada en el área de Qabr Essit, de conformidad con el Poder Notarial No. 26001/18 registrado en la Notaría Pública de Babbila con fecha 9/6/1982." },
      { "label": "Detalles de la División", "value": "Parte Dividida 1 (1/284): Asignada a Nusrat Fatima Naqvi.\nParte Dividida 2 (2/284): Asignada a Mohammad y Mustafa, hijos del difunto Ali Khurma, dividida en partes iguales entre ellos." },
      { "label": "Términos", "value": "Esta división y asignación se acuerda de manera amistosa, definitiva e irrevocable. Cada parte tiene pleno derecho y poder legal sobre su parte asignada, incluida la subdivisión, las licencias y la representación administrativa." },
      { "label": "Firmas y Croquis", "value": "Firmas: Mohammad Khurma, Mustafa Khurma, Nusrat Fatima Naqvi. El croquis del sitio indica el diseño de la parcela, el camino hacia Sayyidah Zaynab, y las secciones demarcadas 1/284 y 2/284." }
    ]
  }
};

const data = JSON.parse(fs.readFileSync('documents_data.json', 'utf8'));
const docIndex = data.findIndex(d => d.id === docId);

if (docIndex !== -1) {
  data[docIndex].translations = newTranslations;
  data[docIndex].category = 'property'; 
  fs.writeFileSync('documents_data.json', JSON.stringify(data, null, 2));
  console.log("Updated doc_137 successfully");
} else {
  console.log("Doc not found");
}
