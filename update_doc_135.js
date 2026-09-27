const fs = require('fs');

const docId = 'doc_135';

const newTranslations = {
  "ur": {
    "name": "اردو",
    "dir": "rtl",
    "docName": "بلدیاتی لائسنس کا فیصلہ",
    "lines": [
      { "label": "تفصیلات", "value": "جمہوریہ عربیہ سوریہ (شام) - وزارت مقامی انتظام و ماحولیات - محافظہ ریف دمشق - مجلس قصبہ السیدہ زینب۔" },
      { "label": "فیصلہ نمبر", "value": "121 /" },
      { "label": "پس منظر / بنیاد", "value": "قانون مجریہ نمبر 172 برائے سال 1956ء، نوٹری پبلک ببّیلا کے ہاں درج شدہ عہد نامہ، ایگزیکٹو بیورو کا فیصلہ، ٹیکنیکل آفس کی معائنہ رپورٹ، اور سیکیورٹی کلیئرنس نمبر 8/22973 (سال 2008) کی بنیاد پر۔" },
      { "label": "دفعہ 1 (فیصلہ)", "value": "جمہوریہ اسلامی پاکستان کی شہری محترمہ نصرت فاطمہ نقوی کو جائیداد / ریئل اسٹیٹ پلاٹ نمبر {286} واقع علاقہ قبر الست (السیدہ زینب) میں \"فواد نیٹ\" کے تجارتی نام سے انٹرنیٹ و ٹیلی کام کیفے کا کاروبار چلانے کے لیے عارضی لائسنس کی باقاعدہ اجازت دی جاتی ہے۔" },
      { "label": "دفعہ 2", "value": "اس فیصلے پر عمل درآمد کے لیے متعلقہ اداروں کو مطلع کیا جائے۔" },
      { "label": "مقام و تاریخِ اجراء", "value": "السیدہ زینب، بتاریخ 14 اگست 2008ء۔" },
      { "label": "دستخط کنندگان", "value": "اکاؤنٹنٹ ایڈمنسٹریشن: انور بدران | صدر مجلس قصبہ السیدہ زینب: احمد عنوز (سرکاری مہر اور ٹکٹیں منسلک ہیں)۔" }
    ]
  },
  "en": {
    "name": "English",
    "dir": "ltr",
    "docName": "Municipal Licensing Decision",
    "lines": [
      { "label": "Details", "value": "Syrian Arab Republic - Ministry of Local Administration and Environment - Damascus Countryside Governorate - Sayyidah Zaynab Village Council." },
      { "label": "Decision No.", "value": "121 /" },
      { "label": "Background / Basis", "value": "Based on Municipalities Law No. 172 of 1956, Notary Public undertaking, Executive Bureau Decision, Technical Office inspection, and Security Clearance No. 8/22973 (Year 2008)." },
      { "label": "Article 1 (Decision)", "value": "A temporary license is granted to Mrs. Nusrat Fatima Naqvi, a citizen of the Islamic Republic of Pakistan, for the real estate property No. {286} located in the Qabr Essit area, to practice the trade/business of an Internet and Telecommunications Café under the trade name \"Fouad Net\"." },
      { "label": "Article 2", "value": "This decision shall be circulated to the relevant authorities for execution." },
      { "label": "Place & Date of Issue", "value": "Sayyidah Zaynab, on 14 / 8 / 2008." },
      { "label": "Signatories", "value": "Administrative Accountant: Anwar Badran | Head of Sayyidah Zaynab Village Council: Ahmad Anouz (Official seal and revenue stamps attached)." }
    ]
  },
  "ar": {
    "name": "العربية",
    "dir": "rtl",
    "docName": "قرار ترخيص بلدي",
    "lines": [
      { "label": "تفاصيل", "value": "الجمهورية العربية السورية - وزارة الإدارة المحلية والبيئة - محافظة ريف دمشق - مجلس بلدة السيدة زينب." },
      { "label": "رقم القرار", "value": "121 /" },
      { "label": "الخلفية / الأساس", "value": "بناءً على قانون البلديات رقم 172 لعام 1956، وتعهد الكاتب بالعدل في ببيلا، وقرار المكتب التنفيذي، وتقرير الكشف الفني، والموافقة الأمنية رقم 8/22973 (لعام 2008)." },
      { "label": "المادة 1 (القرار)", "value": "يُمنح ترخيص مؤقت للسيدة نصرت فاطمة نقوي، من مواطني جمهورية باكستان الإسلامية، في العقار رقم {286} الكائن في منطقة قبر الست، لمزاولة مهنة مقهى إنترنت واتصالات تحت الاسم التجاري \"فؤاد نت\"." },
      { "label": "المادة 2", "value": "يُبلغ هذا القرار لمن يلزم لتنفيذه." },
      { "label": "مكان وتاريخ الإصدار", "value": "السيدة زينب، بتاريخ 14 / 8 / 2008." },
      { "label": "الموقعون", "value": "المحاسب الإداري: أنور بدران | رئيس مجلس بلدة السيدة زينب: أحمد عنوز (مرفق الختم الرسمي والطوابع المالية)." }
    ]
  },
  "fa": {
    "name": "فارسی",
    "dir": "rtl",
    "docName": "تصمیم مجوز شهرداری",
    "lines": [
      { "label": "جزئیات", "value": "جمهوری عربی سوریه - وزارت اداره محلی و محیط زیست - استانداری حومه دمشق - شورای روستای سیده زینب." },
      { "label": "شماره تصمیم", "value": "۱۲۱ /" },
      { "label": "پیش‌زمینه / مبنا", "value": "بر اساس قانون شهرداری‌ها شماره ۱۷۲ مصوب ۱۹۵۶، تعهدنامه سردفتر اسناد رسمی در ببیلا، تصمیم هیئت اجرایی، گزارش بازرسی دفتر فنی، و تأییدیه امنیتی شماره ۸/۲۲۹۷۳ (سال ۲۰۰۸)." },
      { "label": "ماده ۱ (تصمیم)", "value": "مجوز موقت به خانم نصرت فاطمه نقوی، تبعه جمهوری اسلامی پاکستان، برای ملک شماره {۲۸۶} واقع در منطقه قبر الست، جهت راه‌اندازی کسب و کار کافه اینترنت و مخابرات با نام تجاری \"فواد نت\" اعطا می‌شود." },
      { "label": "ماده ۲", "value": "این تصمیم برای اجرا به مراجع ذیربط ابلاغ می‌شود." },
      { "label": "مکان و تاریخ صدور", "value": "سیده زینب، مورخ ۱۴ / ۸ / ۲۰۰۸." },
      { "label": "امضاکنندگان", "value": "حسابدار اداری: انور بدران | رئیس شورای روستای سیده زینب: احمد عنوز (مهر رسمی و تمبرهای مالیاتی پیوست شده است)." }
    ]
  },
  "es": {
    "name": "Español",
    "dir": "ltr",
    "docName": "Decisión de Licencia Municipal",
    "lines": [
      { "label": "Detalles", "value": "República Árabe Siria - Ministerio de Administración Local y Medio Ambiente - Gobernación de Damasco Rural - Consejo de la Aldea Sayyidah Zaynab." },
      { "label": "No. de Decisión", "value": "121 /" },
      { "label": "Antecedentes / Base", "value": "Con base en la Ley de Municipalidades No. 172 de 1956, compromiso ante Notario Público, Decisión de la Oficina Ejecutiva, inspección de la Oficina Técnica, y Aprobación de Seguridad No. 8/22973 (Año 2008)." },
      { "label": "Artículo 1 (Decisión)", "value": "Se otorga una licencia temporal a la Sra. Nusrat Fatima Naqvi, ciudadana de la República Islámica de Pakistán, para la propiedad inmobiliaria No. {286} ubicada en el área de Qabr Essit, para ejercer el comercio/negocio de un Cibercafé y Telecomunicaciones bajo el nombre comercial \"Fouad Net\"." },
      { "label": "Artículo 2", "value": "Esta decisión será distribuida a las autoridades pertinentes para su ejecución." },
      { "label": "Lugar y Fecha de Emisión", "value": "Sayyidah Zaynab, el 14 / 8 / 2008." },
      { "label": "Firmantes", "value": "Contador Administrativo: Anwar Badran | Jefe del Consejo de la Aldea Sayyidah Zaynab: Ahmad Anouz (Sello oficial y timbres fiscales adjuntos)." }
    ]
  }
};

const data = JSON.parse(fs.readFileSync('documents_data.json', 'utf8'));
const docIndex = data.findIndex(d => d.id === docId);

if (docIndex !== -1) {
  data[docIndex].translations = newTranslations;
  data[docIndex].category = 'business'; 
  fs.writeFileSync('documents_data.json', JSON.stringify(data, null, 2));
  console.log("Updated doc_135 successfully");
} else {
  console.log("Doc not found");
}
