const fs = require('fs');

const docId = 'doc_115';

const newTranslations = {
  "ur": {
    "name": "اردو",
    "dir": "rtl",
    "docName": "عجمان چیمبر آف کامرس - ممبرشپ سرٹیفکیٹ (1987)",
    "lines": [
      { "label": "تفصیلات", "value": "عجمان چیمبر آف کامرس اینڈ انڈسٹری - متحدہ عرب امارات۔" },
      { "label": "دستاویز", "value": "سال 1987 کا ممبرشپ رجسٹریشن سرٹیفکیٹ۔" },
      { "label": "رجسٹرڈ نام", "value": "مطعم الطعمہ (ریسٹورنٹ)۔" },
      { "label": "کاروبار کی نوعیت", "value": "ریسٹورنٹ کی سرگرمی۔" },
      { "label": "کلاس", "value": "تیسری کیٹیگری (Third Class)۔" },
      { "label": "پتہ", "value": "شیخ راشد بن حمید سٹریٹ، عجمان۔" },
      { "label": "شراکت داروں کی قومیت", "value": "اماراتی / پاکستانی۔" },
      { "label": "تاریخِ اجراء", "value": "20 مئی 1987۔" },
      { "label": "تاریخِ تنسیخ", "value": "24 مارچ 1988۔" }
    ]
  },
  "en": {
    "name": "English",
    "dir": "ltr",
    "docName": "Ajman Chamber of Commerce - Membership Certificate (1987)",
    "lines": [
      { "label": "Details", "value": "Ajman Chamber of Commerce and Industry - United Arab Emirates." },
      { "label": "Document", "value": "Membership Registration Certificate for the year 1987." },
      { "label": "Registered Name", "value": "Al-Ta'ma Restaurant (مطعم الطعمة)." },
      { "label": "Activity", "value": "Restaurant." },
      { "label": "Class", "value": "Third Class." },
      { "label": "Address", "value": "Sheikh Rashid bin Humaid Street, Ajman." },
      { "label": "Nationality of Partners", "value": "UAE / Pakistan." },
      { "label": "Date of Issue", "value": "20 / 05 / 1987." },
      { "label": "Valid Until", "value": "24 / 03 / 1988." }
    ]
  },
  "ar": {
    "name": "العربية",
    "dir": "rtl",
    "docName": "غرفة تجارة عجمان - شهادة عضوية (1987)",
    "lines": [
      { "label": "تفاصيل", "value": "غرفة تجارة وصناعة عجمان - الإمارات العربية المتحدة." },
      { "label": "الوثيقة", "value": "شهادة تسجيل عضوية لعام 1987." },
      { "label": "الاسم التجاري", "value": "مطعم الطعمة." },
      { "label": "النشاط", "value": "مطعم." },
      { "label": "الدرجة", "value": "الدرجة الثالثة." },
      { "label": "العنوان", "value": "شارع الشيخ راشد بن حميد، عجمان." },
      { "label": "جنسية الشركاء", "value": "إماراتية / باكستانية." },
      { "label": "تاريخ الإصدار", "value": "20 / 05 / 1987." },
      { "label": "صالح لغاية", "value": "24 / 03 / 1988." }
    ]
  },
  "fa": {
    "name": "فارسی",
    "dir": "rtl",
    "docName": "اتاق بازرگانی عجمان - گواهی عضویت (۱۹۸۷)",
    "lines": [
      { "label": "جزئیات", "value": "اتاق بازرگانی و صنایع عجمان - امارات متحده عربی." },
      { "label": "سند", "value": "گواهی ثبت عضویت برای سال ۱۹۸۷." },
      { "label": "نام ثبت شده", "value": "رستوران الطعمه (مطعم الطعمة)." },
      { "label": "فعالیت", "value": "رستوران." },
      { "label": "درجه", "value": "درجه سه." },
      { "label": "آدرس", "value": "خیابان شیخ راشد بن حمید، عجمان." },
      { "label": "ملیت شرکا", "value": "اماراتی / پاکستانی." },
      { "label": "تاریخ صدور", "value": "۲۰ / ۰۵ / ۱۹۸۷." },
      { "label": "اعتبار تا", "value": "۲۴ / ۰۳ / ۱۹۸۸." }
    ]
  },
  "es": {
    "name": "Español",
    "dir": "ltr",
    "docName": "Cámara de Comercio de Ajman - Certificado de Membresía (1987)",
    "lines": [
      { "label": "Detalles", "value": "Cámara de Comercio e Industria de Ajman - Emiratos Árabes Unidos." },
      { "label": "Documento", "value": "Certificado de Registro de Membresía para el año 1987." },
      { "label": "Nombre Registrado", "value": "Restaurante Al-Ta'ma (مطعم الطعمة)." },
      { "label": "Actividad", "value": "Restaurante." },
      { "label": "Clase", "value": "Tercera Clase." },
      { "label": "Dirección", "value": "Calle Sheikh Rashid bin Humaid, Ajman." },
      { "label": "Nacionalidad de los Socios", "value": "EAU / Pakistán." },
      { "label": "Fecha de Emisión", "value": "20 / 05 / 1987." },
      { "label": "Válido Hasta", "value": "24 / 03 / 1988." }
    ]
  }
};

const data = JSON.parse(fs.readFileSync('documents_data.json', 'utf8'));
const docIndex = data.findIndex(d => d.id === docId);

if (docIndex !== -1) {
  data[docIndex].translations = newTranslations;
  data[docIndex].category = 'business'; 
  fs.writeFileSync('documents_data.json', JSON.stringify(data, null, 2));
  console.log("Updated doc_115 successfully");
} else {
  console.log("Doc not found");
}
