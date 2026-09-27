const fs = require('fs');

const docId = 'doc_074';

const newTranslations = {
  "ur": {
    "name": "اردو",
    "dir": "rtl",
    "docName": "شامی رہائشی کارڈ کا انگریزی ترجمہ (2007)",
    "lines": [
      { "label": "Details", "value": "شامی عرب جمہوریہ - وزارتِ داخلہ - محکمہ ہجرت و پاسپورٹ." },
      { "label": "دستاویز", "value": "عارضی رہائشی کارڈ (مستقل رہائش کی بنیاد پر)." },
      { "label": "خاندانی نام", "value": "چوہدری (CHAUDHRY)." },
      { "label": "نام", "value": "نصرت فاطمہ." },
      { "label": "والد کا نام", "value": "سید محمد نقوی." },
      { "label": "والدہ کا نام", "value": "مہر بانو." },
      { "label": "جائے اور تاریخِ پیدائش", "value": "1958ء." },
      { "label": "قومیت", "value": "پاکستانی." },
      { "label": "رہائش کی اجازت", "value": "15 جنوری 2007ء سے 14 جنوری 2008ء تک." },
      { "label": "پتہ", "value": "پلاٹ نمبر 7، بلڈنگ نمبر 50، مزہ جبل، دمشق." },
      { "label": "Details", "value": "(حلف یافتہ مترجم حسین المیر بکیر کی تصدیق شدہ کاپی، مورخہ 01 اکتوبر 2007)." }
    ]
  },
  "en": {
    "name": "English",
    "dir": "ltr",
    "docName": "English Translation of Syrian Residence Card (2007)",
    "lines": [
      { "label": "Details", "value": "Syrian Arab Republic - Ministry of Interior - Immigration & Passports Department." },
      { "label": "Document", "value": "Temporary Residence Card." },
      { "label": "Surname", "value": "CHAUDHRY." },
      { "label": "Name", "value": "Nusrat Fatima." },
      { "label": "Father's Name", "value": "Sayyed Muhammad NAQAWI." },
      { "label": "Mother's Name", "value": "Mahrabano." },
      { "label": "Place & Date of Birth", "value": "1958 AD." },
      { "label": "Nationality", "value": "Pakistani." },
      { "label": "Permanent Residence / Authorized Stay", "value": "From January 15th, 2007 AD to January 14th, 2008 AD." },
      { "label": "Address", "value": "Lot No. /7/, Building No. /50/, Mazzah Jabal, Damascus." },
      { "label": "Details", "value": "(Certified translation by sworn translator Hussein al-Mir Bakeer, dated October 01, 2007)." }
    ]
  },
  "ar": {
    "name": "العربية",
    "dir": "rtl",
    "docName": "ترجمة إنجليزية لبطاقة إقامة سورية (2007)",
    "lines": [
      { "label": "تفاصيل", "value": "الجمهورية العربية السورية - وزارة الداخلية - إدارة الهجرة والجوازات." },
      { "label": "الوثيقة", "value": "بطاقة إقامة مؤقتة." },
      { "label": "الكنية", "value": "تشودري." },
      { "label": "الاسم", "value": "نصرت فاطمة." },
      { "label": "اسم الأب", "value": "سيد محمد نقوي." },
      { "label": "اسم الأم", "value": "مهر بانو." },
      { "label": "مكان وتاريخ الولادة", "value": "1958 م." },
      { "label": "الجنسية", "value": "باكستانية." },
      { "label": "مدة الإقامة المسموحة", "value": "من 15 يناير 2007 إلى 14 يناير 2008." },
      { "label": "العنوان", "value": "مقسّم رقم /7/، بناء رقم /50/، مزة جبل، دمشق." },
      { "label": "تفاصيل", "value": "(ترجمة مصدقة من قبل المترجم المحلف حسين المير بكير، بتاريخ 01 أكتوبر 2007)." }
    ]
  },
  "fa": {
    "name": "فارسی",
    "dir": "rtl",
    "docName": "ترجمه انگلیسی کارت اقامت سوریه (۲۰۰۷)",
    "lines": [
      { "label": "جزئیات", "value": "جمهوری عربی سوریه - وزارت کشور - اداره گذرنامه و مهاجرت." },
      { "label": "سند", "value": "کارت اقامت موقت." },
      { "label": "نام خانوادگی", "value": "چوهدری." },
      { "label": "نام", "value": "نصرت فاطمه." },
      { "label": "نام پدر", "value": "سید محمد نقوی." },
      { "label": "نام مادر", "value": "مهر بانو." },
      { "label": "مکان و تاریخ تولد", "value": "۱۹۵۸ میلادی." },
      { "label": "ملیت", "value": "پاکستانی." },
      { "label": "مدت اقامت مجاز", "value": "از ۱۵ ژانویه ۲۰۰۷ تا ۱۴ ژانویه ۲۰۰۸." },
      { "label": "آدرس", "value": "پلاک شماره /۷/، ساختمان شماره /۵۰/، مزه جبل، دمشق." },
      { "label": "جزئیات", "value": "(ترجمه تأیید شده توسط مترجم رسمی حسین المیر بکیر، مورخ ۰۱ اکتبر ۲۰۰۷)." }
    ]
  },
  "es": {
    "name": "Español",
    "dir": "ltr",
    "docName": "Traducción al Inglés de la Tarjeta de Residencia Siria (2007)",
    "lines": [
      { "label": "Detalles", "value": "República Árabe Siria - Ministerio del Interior - Departamento de Inmigración y Pasaportes." },
      { "label": "Documento", "value": "Tarjeta de Residencia Temporal." },
      { "label": "Apellido", "value": "CHAUDHRY." },
      { "label": "Nombre", "value": "Nusrat Fatima." },
      { "label": "Nombre del Padre", "value": "Sayyed Muhammad NAQAWI." },
      { "label": "Nombre de la Madre", "value": "Mahrabano." },
      { "label": "Lugar y Fecha de Nacimiento", "value": "1958 d.C." },
      { "label": "Nacionalidad", "value": "Paquistaní." },
      { "label": "Estancia Autorizada", "value": "Del 15 de enero de 2007 al 14 de enero de 2008." },
      { "label": "Dirección", "value": "Lote No. /7/, Edificio No. /50/, Mezzeh Jabal, Damasco." },
      { "label": "Detalles", "value": "(Traducción certificada por el traductor jurado Hussein al-Mir Bakeer, con fecha 01 de octubre de 2007)." }
    ]
  }
};

const data = JSON.parse(fs.readFileSync('documents_data.json', 'utf8'));
const docIndex = data.findIndex(d => d.id === docId);

if (docIndex !== -1) {
  data[docIndex].translations = newTranslations;
  data[docIndex].category = 'residency'; 
  fs.writeFileSync('documents_data.json', JSON.stringify(data, null, 2));
  console.log("Updated doc_074 successfully");
} else {
  console.log("Doc not found");
}
