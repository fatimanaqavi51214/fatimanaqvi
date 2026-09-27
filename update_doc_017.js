const fs = require('fs');

const docId = 'doc_017';

const newTranslations = {
  "ur": {
    "name": "اردو",
    "dir": "rtl",
    "docName": "دبئی ڈرائیونگ لائسنس",
    "lines": [
      { "label": "Details", "value": "متحدہ عرب امارات - وزارتِ داخلہ - دبئی" },
      { "label": "دستاویز", "value": "ڈرائیونگ لائسنس (رخصة سوق)" },
      { "label": "مکمل نام", "value": "نصرت فاطمہ غلام سرور" },
      { "label": "قومیت", "value": "پاکستانی" },
      { "label": "پیشہ", "value": "مینیجر (مديرة) (یہ سرکاری طور پر ثابت کرتا ہے کہ دبئی حکومت کے ریکارڈ میں ان کا عہدہ مینیجر کا تھا)۔" }
    ]
  },
  "en": {
    "name": "English",
    "dir": "ltr",
    "docName": "Dubai Driving License",
    "lines": [
      { "label": "Details", "value": "United Arab Emirates - Ministry of Interior - Dubai" },
      { "label": "Document", "value": "Driving License (رخصة سوق)" },
      { "label": "Full Name", "value": "Nusrat Fatima Ghulam Sarwar" },
      { "label": "Nationality", "value": "Pakistani" },
      { "label": "Profession", "value": "Manager (مديرة)" }
    ]
  },
  "ar": {
    "name": "العربية",
    "dir": "rtl",
    "docName": "رخصة قيادة دبي",
    "lines": [
      { "label": "تفاصيل", "value": "الإمارات العربية المتحدة - وزارة الداخلية - دبي" },
      { "label": "الوثيقة", "value": "رخصة سوق" },
      { "label": "الاسم الكامل", "value": "نصرت فاطمة غلام سرور" },
      { "label": "الجنسية", "value": "باكستانية" },
      { "label": "المهنة", "value": "مديرة (وهذا يثبت رسمياً أن منصبها في سجلات حكومة دبي كان مديرة)." }
    ]
  },
  "fa": {
    "name": "فارسی",
    "dir": "rtl",
    "docName": "گواهینامه رانندگی دبی",
    "lines": [
      { "label": "جزئیات", "value": "امارات متحده عربی - وزارت کشور - دبی" },
      { "label": "سند", "value": "گواهینامه رانندگی (رخصة سوق)" },
      { "label": "نام کامل", "value": "نصرت فاطمه غلام سرور" },
      { "label": "ملیت", "value": "پاکستانی" },
      { "label": "شغل", "value": "مدیر (مديرة) (این رسماً ثابت می‌کند که در سوابق دولت دبی، سمت وی مدیر بوده است)." }
    ]
  },
  "es": {
    "name": "Español",
    "dir": "ltr",
    "docName": "Licencia de Conducir de Dubái",
    "lines": [
      { "label": "Detalles", "value": "Emiratos Árabes Unidos - Ministerio del Interior - Dubái" },
      { "label": "Documento", "value": "Licencia de Conducir (رخصة سوق)" },
      { "label": "Nombre Completo", "value": "Nusrat Fatima Ghulam Sarwar" },
      { "label": "Nacionalidad", "value": "Paquistaní" },
      { "label": "Profesión", "value": "Gerente (مديرة) (Esto prueba oficialmente que en los registros del Gobierno de Dubái, su cargo era Gerente)." }
    ]
  }
};

const data = JSON.parse(fs.readFileSync('documents_data.json', 'utf8'));
const docIndex = data.findIndex(d => d.id === docId);

if (docIndex !== -1) {
  data[docIndex].translations = newTranslations;
  data[docIndex].category = 'personal'; // Updating to personal
  fs.writeFileSync('documents_data.json', JSON.stringify(data, null, 2));
  console.log("Updated doc_017 successfully");
} else {
  console.log("Doc not found");
}
