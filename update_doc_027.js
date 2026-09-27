const fs = require('fs');

const docId = 'doc_027';

const newTranslations = {
  "ur": {
    "name": "اردو",
    "dir": "rtl",
    "docName": "دبئی میونسپلٹی - ہیلتھ سرٹیفکیٹ (1990)",
    "lines": [
      { "label": "Details", "value": "دبئی میونسپلٹی - پبلک ہیلتھ اینڈ میڈیکل سروسز سیکشن" },
      { "label": "دستاویز", "value": "میڈیکل سرٹیفکیٹ (شهادة طبية)" },
      { "label": "تاریخ", "value": "23 اپریل 1990" },
      { "label": "نام", "value": "نصرت فاطمہ سید محمد نقوی" },
      { "label": "قومیت", "value": "پاکستانی" },
      { "label": "عمر", "value": "32 سال" },
      { "label": "پیشہ", "value": "مینیجر (مديرة)" },
      { "label": "پاسپورٹ نمبر", "value": "414781" },
      { "label": "نتیجہ", "value": "صحت مند / فٹ (لائق)" },
      { "label": "Details", "value": "(نوٹ: یہ ثابت کرتا ہے کہ 1990 میں بھی ان کا سرکاری عہدہ دبئی میں ایک مینیجر کا تھا۔)" }
    ]
  },
  "en": {
    "name": "English",
    "dir": "ltr",
    "docName": "Dubai Municipality - Health Certificate (1990)",
    "lines": [
      { "label": "Details", "value": "Dubai Municipality - Public Health and Medical Services Section" },
      { "label": "Document", "value": "Medical Certificate (شهادة طبية)" },
      { "label": "Date", "value": "23 / 04 / 1990" },
      { "label": "Name", "value": "Nusrat Fatima Syed Muhammad Naqvi" },
      { "label": "Nationality", "value": "Pakistani" },
      { "label": "Age", "value": "32 years" },
      { "label": "Profession", "value": "Manager (مديرة)" },
      { "label": "Passport No", "value": "414781" },
      { "label": "Result", "value": "Fit (لائق)" },
      { "label": "Details", "value": "(Note: This proves that even in 1990, her official designation in Dubai was a Manager.)" }
    ]
  },
  "ar": {
    "name": "العربية",
    "dir": "rtl",
    "docName": "بلدية دبي - شهادة صحية (1990)",
    "lines": [
      { "label": "تفاصيل", "value": "بلدية دبي - قسم الصحة العامة والخدمات الطبية" },
      { "label": "الوثيقة", "value": "شهادة طبية" },
      { "label": "التاريخ", "value": "23 / 04 / 1990" },
      { "label": "الاسم", "value": "نصرت فاطمة سيد محمد نقوي" },
      { "label": "الجنسية", "value": "باكستانية" },
      { "label": "العمر", "value": "32 سنة" },
      { "label": "المهنة", "value": "مديرة" },
      { "label": "رقم الجواز", "value": "414781" },
      { "label": "النتيجة", "value": "لائق" },
      { "label": "تفاصيل", "value": "(ملاحظة: هذا يثبت أنه حتى في عام 1990، كان منصبها الرسمي في دبي مديرة.)" }
    ]
  },
  "fa": {
    "name": "فارسی",
    "dir": "rtl",
    "docName": "شهرداری دبی - گواهی بهداشت (۱۹۹۰)",
    "lines": [
      { "label": "جزئیات", "value": "شهرداری دبی - بخش بهداشت عمومی و خدمات پزشکی" },
      { "label": "سند", "value": "گواهی پزشکی (شهادة طبية)" },
      { "label": "تاریخ", "value": "۲۳ / ۰۴ / ۱۹۹۰" },
      { "label": "نام", "value": "نصرت فاطمه سید محمد نقوی" },
      { "label": "ملیت", "value": "پاکستانی" },
      { "label": "سن", "value": "۳۲ سال" },
      { "label": "شغل", "value": "مدیر (مديرة)" },
      { "label": "شماره گذرنامه", "value": "۴۱۴۷۸۱" },
      { "label": "نتیجه", "value": "سالم / متناسب (لائق)" },
      { "label": "جزئیات", "value": "(توجه: این ثابت می‌کند که حتی در سال ۱۹۹۰، سمت رسمی او در دبی مدیر بوده است.)" }
    ]
  },
  "es": {
    "name": "Español",
    "dir": "ltr",
    "docName": "Municipalidad de Dubái - Certificado de Salud (1990)",
    "lines": [
      { "label": "Detalles", "value": "Municipalidad de Dubái - Sección de Salud Pública y Servicios Médicos" },
      { "label": "Documento", "value": "Certificado Médico (شهادة طبية)" },
      { "label": "Fecha", "value": "23 / 04 / 1990" },
      { "label": "Nombre", "value": "Nusrat Fatima Syed Muhammad Naqvi" },
      { "label": "Nacionalidad", "value": "Paquistaní" },
      { "label": "Edad", "value": "32 años" },
      { "label": "Profesión", "value": "Gerente (مديرة)" },
      { "label": "Pasaporte No", "value": "414781" },
      { "label": "Resultado", "value": "Apto (لائق)" },
      { "label": "Detalles", "value": "(Nota: Esto prueba que incluso en 1990, su cargo oficial en Dubái era Gerente.)" }
    ]
  }
};

const data = JSON.parse(fs.readFileSync('documents_data.json', 'utf8'));
const docIndex = data.findIndex(d => d.id === docId);

if (docIndex !== -1) {
  data[docIndex].translations = newTranslations;
  data[docIndex].category = 'personal'; 
  fs.writeFileSync('documents_data.json', JSON.stringify(data, null, 2));
  console.log("Updated doc_027 successfully");
} else {
  console.log("Doc not found");
}
