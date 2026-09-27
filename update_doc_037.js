const fs = require('fs');

const docId = 'doc_037';

const newTranslations = {
  "ur": {
    "name": "اردو",
    "dir": "rtl",
    "docName": "شامی سندِ اقامہ (2001)",
    "lines": [
      { "label": "Details", "value": "شامی عرب جمہوریہ - وزارتِ داخلہ - داخلی سلامتی کی فورسز" },
      { "label": "دستاویز", "value": "سند اقامہ (رہائشی سرٹیفکیٹ)" },
      { "label": "نام", "value": "نصرت فاطمہ نقوی بنت سید محمد، والدہ: مہر بانو" },
      { "label": "جائے اور سالِ پیدائش", "value": "کراچی، 1958" },
      { "label": "پتہ", "value": "دمشق، مزہ جبل، عمر الخیام سٹریٹ، بلڈنگ نمبر 1/7، اپارٹمنٹ نمبر 1" },
      { "label": "تاریخ", "value": "26 فروری 2001" },
      { "label": "Details", "value": "(مزہ جبل کے مختار خضر سمیر درویش اور دمشق گورنریٹ سے تصدیق شدہ)" }
    ]
  },
  "en": {
    "name": "English",
    "dir": "ltr",
    "docName": "Syrian Residence Certificate (2001)",
    "lines": [
      { "label": "Details", "value": "Syrian Arab Republic - Ministry of Interior - Internal Security Forces" },
      { "label": "Document", "value": "Residence Certificate (سند إقامة)" },
      { "label": "Name", "value": "Nusrat Fatima Naqvi bint Syed Muhammad, Mother: Mehar Bano" },
      { "label": "Place and Year of Birth", "value": "Karachi, 1958" },
      { "label": "Address", "value": "Damascus, Mezzeh Jabal, Omar Al-Khayyam Street, Building No. 1/7, Apartment No. 1" },
      { "label": "Date", "value": "February 26, 2001" },
      { "label": "Details", "value": "(Authenticated by the Mukhtar of Mezzeh Jabal, Khader Samir Darwish, and the Damascus Governorate)" }
    ]
  },
  "ar": {
    "name": "العربية",
    "dir": "rtl",
    "docName": "سند إقامة سوري (2001)",
    "lines": [
      { "label": "تفاصيل", "value": "الجمهورية العربية السورية - وزارة الداخلية - قوى الأمن الداخلي" },
      { "label": "الوثيقة", "value": "سند إقامة" },
      { "label": "الاسم", "value": "نصرت فاطمة نقوي بنت سيد محمد، الأم: مهر بانو" },
      { "label": "مكان وسنة الولادة", "value": "كراتشي، 1958" },
      { "label": "العنوان", "value": "دمشق، مزة جبل، شارع عمر الخيام، بناء رقم 1/7، شقة رقم 1" },
      { "label": "التاريخ", "value": "26 شباط/فبراير 2001" },
      { "label": "تفاصيل", "value": "(مصدق من مختار مزة جبل، خضر سمير درويش، ومحافظة دمشق)" }
    ]
  },
  "fa": {
    "name": "فارسی",
    "dir": "rtl",
    "docName": "گواهی اقامت سوریه (۲۰۰۱)",
    "lines": [
      { "label": "جزئیات", "value": "جمهوری عربی سوریه - وزارت کشور - نیروهای امنیت داخلی" },
      { "label": "سند", "value": "گواهی اقامت (سند إقامة)" },
      { "label": "نام", "value": "نصرت فاطمه نقوی بنت سید محمد، مادر: مهر بانو" },
      { "label": "مکان و سال تولد", "value": "کراچی، ۱۹۵۸" },
      { "label": "آدرس", "value": "دمشق، مزه جبل، خیابان عمر خیام، ساختمان شماره ۱/۷، آپارتمان شماره ۱" },
      { "label": "تاریخ", "value": "۲۶ فوریه ۲۰۰۱" },
      { "label": "جزئیات", "value": "(تأیید شده توسط مختار مزه جبل، خضر سمیر درویش و استانداری دمشق)" }
    ]
  },
  "es": {
    "name": "Español",
    "dir": "ltr",
    "docName": "Certificado de Residencia Siria (2001)",
    "lines": [
      { "label": "Detalles", "value": "República Árabe Siria - Ministerio del Interior - Fuerzas de Seguridad Interna" },
      { "label": "Documento", "value": "Certificado de Residencia (سند إقامة)" },
      { "label": "Nombre", "value": "Nusrat Fatima Naqvi bint Syed Muhammad, Madre: Mehar Bano" },
      { "label": "Lugar y Año de Nacimiento", "value": "Karachi, 1958" },
      { "label": "Dirección", "value": "Damasco, Mezzeh Jabal, Calle Omar Al-Khayyam, Edificio No. 1/7, Apartamento No. 1" },
      { "label": "Fecha", "value": "26 de febrero de 2001" },
      { "label": "Detalles", "value": "(Autenticado por el Mukhtar de Mezzeh Jabal, Khader Samir Darwish, y la Gobernación de Damasco)" }
    ]
  }
};

const data = JSON.parse(fs.readFileSync('documents_data.json', 'utf8'));
const docIndex = data.findIndex(d => d.id === docId);

if (docIndex !== -1) {
  data[docIndex].translations = newTranslations;
  data[docIndex].category = 'residency'; 
  fs.writeFileSync('documents_data.json', JSON.stringify(data, null, 2));
  console.log("Updated doc_037 successfully");
} else {
  console.log("Doc not found");
}
