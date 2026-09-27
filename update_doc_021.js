const fs = require('fs');

const docId = 'doc_021';

const newTranslations = {
  "ur": {
    "name": "اردو",
    "dir": "rtl",
    "docName": "شامی رہائشی کارڈ (اصل عربی دستاویز)",
    "lines": [
      { "label": "Details", "value": "شامی عرب جمہوریہ - وزارتِ داخلہ - محکمہ ہجرت و پاسپورٹ." },
      { "label": "خاندانی نام", "value": "چوہدری (CHOODARIY)." },
      { "label": "نام", "value": "نصرت فاطمہ." },
      { "label": "والد کا نام", "value": "سید محمد نقوی." },
      { "label": "والدہ کا نام", "value": "مہر بانو." },
      { "label": "جائے اور تاریخِ پیدائش", "value": "1958، پاکستان." },
      { "label": "قومیت", "value": "پاکستانی." },
      { "label": "رہائش کی وجہ", "value": "مستقل رہائش." },
      { "label": "اجازت یافتہ مدت", "value": "15 جولائی 2002 سے 14 جولائی 2008 تک." },
      { "label": "پتہ", "value": "مزہ جبل، دمشق." }
    ]
  },
  "en": {
    "name": "English",
    "dir": "ltr",
    "docName": "Syrian Residence Card (Original Arabic Document)",
    "lines": [
      { "label": "Details", "value": "Syrian Arab Republic - Ministry of Interior - Department of Immigration and Passports." },
      { "label": "Surname", "value": "CHOODARIY." },
      { "label": "Name", "value": "Nusrat Fatima." },
      { "label": "Father's Name", "value": "Syed Muhammad Naqvi." },
      { "label": "Mother's Name", "value": "Mehar Bano." },
      { "label": "Place & Date of Birth", "value": "1958, Pakistan." },
      { "label": "Nationality", "value": "Pakistani." },
      { "label": "Reason for Stay", "value": "Permanent Residence." },
      { "label": "Authorized Stay", "value": "From July 15, 2002, to July 14, 2008." },
      { "label": "Address", "value": "Mezzeh Jabal, Damascus." }
    ]
  },
  "ar": {
    "name": "العربية",
    "dir": "rtl",
    "docName": "بطاقة إقامة سورية (الوثيقة الأصلية بالعربية)",
    "lines": [
      { "label": "تفاصيل", "value": "الجمهورية العربية السورية - وزارة الداخلية - إدارة الهجرة والجوازات." },
      { "label": "الكنية", "value": "تشودري." },
      { "label": "الاسم", "value": "نصرت فاطمة." },
      { "label": "اسم الأب", "value": "سيد محمد نقوي." },
      { "label": "اسم الأم", "value": "مهر بانو." },
      { "label": "مكان وتاريخ الولادة", "value": "1958، باكستان." },
      { "label": "الجنسية", "value": "باكستانية." },
      { "label": "سبب الإقامة", "value": "إقامة دائمة." },
      { "label": "مدة الإقامة المسموحة", "value": "من 15 يوليو 2002 إلى 14 يوليو 2008." },
      { "label": "العنوان", "value": "مزة جبل، دمشق." }
    ]
  },
  "fa": {
    "name": "فارسی",
    "dir": "rtl",
    "docName": "کارت اقامت سوریه (سند اصلی عربی)",
    "lines": [
      { "label": "جزئیات", "value": "جمهوری عربی سوریه - وزارت کشور - اداره گذرنامه و مهاجرت." },
      { "label": "نام خانوادگی", "value": "چوهدری." },
      { "label": "نام", "value": "نصرت فاطمه." },
      { "label": "نام پدر", "value": "سید محمد نقوی." },
      { "label": "نام مادر", "value": "مهر بانو." },
      { "label": "مکان و تاریخ تولد", "value": "۱۹۵۸، پاکستان." },
      { "label": "ملیت", "value": "پاکستانی." },
      { "label": "دلیل اقامت", "value": "اقامت دائم." },
      { "label": "مدت اقامت مجاز", "value": "از ۱۵ ژوئیه ۲۰۰۲ تا ۱۴ ژوئیه ۲۰۰۸." },
      { "label": "آدرس", "value": "مزه جبل، دمشق." }
    ]
  },
  "es": {
    "name": "Español",
    "dir": "ltr",
    "docName": "Tarjeta de Residencia Siria (Documento Original en Árabe)",
    "lines": [
      { "label": "Detalles", "value": "República Árabe Siria - Ministerio del Interior - Departamento de Inmigración y Pasaportes." },
      { "label": "Apellido", "value": "CHOODARIY." },
      { "label": "Nombre", "value": "Nusrat Fatima." },
      { "label": "Nombre del Padre", "value": "Syed Muhammad Naqvi." },
      { "label": "Nombre de la Madre", "value": "Mehar Bano." },
      { "label": "Lugar y Fecha de Nacimiento", "value": "1958, Pakistán." },
      { "label": "Nacionalidad", "value": "Paquistaní." },
      { "label": "Motivo de la Estancia", "value": "Residencia Permanente." },
      { "label": "Estancia Autorizada", "value": "Del 15 de julio de 2002 al 14 de julio de 2008." },
      { "label": "Dirección", "value": "Mezzeh Jabal, Damasco." }
    ]
  }
};

const data = JSON.parse(fs.readFileSync('documents_data.json', 'utf8'));
const docIndex = data.findIndex(d => d.id === docId);

if (docIndex !== -1) {
  data[docIndex].translations = newTranslations;
  data[docIndex].category = 'residency'; 
  fs.writeFileSync('documents_data.json', JSON.stringify(data, null, 2));
  console.log("Updated doc_021 successfully");
} else {
  console.log("Doc not found");
}
