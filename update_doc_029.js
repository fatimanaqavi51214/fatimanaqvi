const fs = require('fs');

const docId = 'doc_029';

const newTranslations = {
  "ur": {
    "name": "اردو",
    "dir": "rtl",
    "docName": "عجمان میونسپلٹی - پروفیشنل لائسنس (1990)",
    "lines": [
      { "label": "Details", "value": "متحدہ عرب امارات - عجمان میونسپلٹی" },
      { "label": "دستاویز", "value": "پروفیشنل لائسنس (رخصة مهنية)" },
      { "label": "شراکت داروں (Partners) کے نام", "value": "راشد احمد سیف راشد الحمرانی (قومیت: اماراتی) \nنصرت فاطمہ سید محمد نقوی (قومیت: پاکستانی)" },
      { "label": "کاروبار کا نام/قسم", "value": "ریسٹورنٹ (مطعم)" },
      { "label": "تاریخِ اجراء", "value": "7 جولائی 1990" },
      { "label": "تاریخِ تنسیخ", "value": "6 جولائی 1991" }
    ]
  },
  "en": {
    "name": "English",
    "dir": "ltr",
    "docName": "Ajman Municipality - Professional Licence (1990)",
    "lines": [
      { "label": "Details", "value": "United Arab Emirates - Ajman Municipality" },
      { "label": "Document", "value": "Professional Licence (رخصة مهنية)" },
      { "label": "Names of Partners", "value": "Rashid Ahmed Saif Rashid Al Hamrani (Nationality: UAE) \nNusrat Fatima Syed Muhammad Naqvi (Nationality: Pakistani)" },
      { "label": "Trade Name", "value": "Restaurant (مطعم)" },
      { "label": "Date of Issue", "value": "07 / 07 / 1990" },
      { "label": "Date of Expiry", "value": "06 / 07 / 1991" }
    ]
  },
  "ar": {
    "name": "العربية",
    "dir": "rtl",
    "docName": "بلدية عجمان - رخصة مهنية (1990)",
    "lines": [
      { "label": "تفاصيل", "value": "الإمارات العربية المتحدة - بلدية عجمان" },
      { "label": "الوثيقة", "value": "رخصة مهنية" },
      { "label": "أسماء الشركاء", "value": "راشد أحمد سيف راشد الحمراني (الجنسية: إماراتي) \nنصرت فاطمة سيد محمد نقوي (الجنسية: باكستانية)" },
      { "label": "الاسم التجاري/النشاط", "value": "مطعم" },
      { "label": "تاريخ الإصدار", "value": "07 / 07 / 1990" },
      { "label": "تاريخ الانتهاء", "value": "06 / 07 / 1991" }
    ]
  },
  "fa": {
    "name": "فارسی",
    "dir": "rtl",
    "docName": "شهرداری عجمان - مجوز حرفه‌ای (۱۹۹۰)",
    "lines": [
      { "label": "جزئیات", "value": "امارات متحده عربی - شهرداری عجمان" },
      { "label": "سند", "value": "مجوز حرفه‌ای (رخصة مهنية)" },
      { "label": "نام شرکا", "value": "راشد احمد سیف راشد الحمرانی (ملیت: اماراتی) \nنصرت فاطمه سید محمد نقوی (ملیت: پاکستانی)" },
      { "label": "نام تجاری", "value": "رستوران (مطعم)" },
      { "label": "تاریخ صدور", "value": "۰۷ / ۰۷ / ۱۹۹۰" },
      { "label": "تاریخ انقضا", "value": "۰۶ / ۰۷ / ۱۹۹۱" }
    ]
  },
  "es": {
    "name": "Español",
    "dir": "ltr",
    "docName": "Municipalidad de Ajmán - Licencia Profesional (1990)",
    "lines": [
      { "label": "Detalles", "value": "Emiratos Árabes Unidos - Municipalidad de Ajmán" },
      { "label": "Documento", "value": "Licencia Profesional (رخصة مهنية)" },
      { "label": "Nombres de los Socios", "value": "Rashid Ahmed Saif Rashid Al Hamrani (Nacionalidad: EAU) \nNusrat Fatima Syed Muhammad Naqvi (Nacionalidad: Paquistaní)" },
      { "label": "Nombre Comercial", "value": "Restaurante (مطعم)" },
      { "label": "Fecha de Emisión", "value": "07 / 07 / 1990" },
      { "label": "Fecha de Vencimiento", "value": "06 / 07 / 1991" }
    ]
  }
};

const data = JSON.parse(fs.readFileSync('documents_data.json', 'utf8'));
const docIndex = data.findIndex(d => d.id === docId);

if (docIndex !== -1) {
  data[docIndex].translations = newTranslations;
  data[docIndex].category = 'business'; 
  fs.writeFileSync('documents_data.json', JSON.stringify(data, null, 2));
  console.log("Updated doc_029 successfully");
} else {
  console.log("Doc not found");
}
