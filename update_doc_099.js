const fs = require('fs');

const docId = 'doc_099';

const newTranslations = {
  "ur": {
    "name": "اردو",
    "dir": "rtl",
    "docName": "پاکستانی پاسپورٹ کا قانونی عربی ترجمہ (2023)",
    "lines": [
      { "label": "Details", "value": "اسلامی جمہوریہ پاکستان - پاسپورٹ." },
      { "label": "پاسپورٹ نمبر", "value": "DT8452184." },
      { "label": "نام", "value": "فاطمہ." },
      { "label": "لقب (خاندانی نام)", "value": "نصرت." },
      { "label": "قومیت", "value": "پاکستانی." },
      { "label": "تاریخِ پیدائش", "value": "1 جنوری 1958." },
      { "label": "جائے پیدائش", "value": "کراچی، پاکستان." },
      { "label": "شوہر کا نام", "value": "غلام سرور." },
      { "label": "تاریخِ اجراء", "value": "9 اکتوبر 2023." },
      { "label": "تاریخِ تنسیخ", "value": "8 اکتوبر 2033." },
      { "label": "Details", "value": "(حلف یافتہ مترجم کی طرف سے درست ترجمے کی تصدیق)." }
    ]
  },
  "en": {
    "name": "English",
    "dir": "ltr",
    "docName": "Legal Arabic Translation of Pakistani Passport (2023)",
    "lines": [
      { "label": "Details", "value": "Islamic Republic of Pakistan - Passport." },
      { "label": "Passport No", "value": "DT8452184." },
      { "label": "Name", "value": "Fatima." },
      { "label": "Surname", "value": "Nusrat." },
      { "label": "Nationality", "value": "Pakistani." },
      { "label": "Date of Birth", "value": "01 / 01 / 1958." },
      { "label": "Place of Birth", "value": "Karachi, Pakistan." },
      { "label": "Husband's Name", "value": "Ghulam Sarwar." },
      { "label": "Date of Issue", "value": "09 / 10 / 2023." },
      { "label": "Date of Expiry", "value": "08 / 10 / 2033." },
      { "label": "Details", "value": "(Certified as a true translation of the attached text by the sworn translator)." }
    ]
  },
  "ar": {
    "name": "العربية",
    "dir": "rtl",
    "docName": "ترجمة عربية قانونية لجواز سفر باكستاني (2023)",
    "lines": [
      { "label": "تفاصيل", "value": "جمهورية باكستان الإسلامية - جواز سفر." },
      { "label": "رقم الجواز", "value": "DT8452184." },
      { "label": "الاسم", "value": "فاطمة." },
      { "label": "الكنية (اسم العائلة)", "value": "نصرت." },
      { "label": "الجنسية", "value": "باكستانية." },
      { "label": "تاريخ الولادة", "value": "01 / 01 / 1958." },
      { "label": "مكان الولادة", "value": "كراتشي، باكستان." },
      { "label": "اسم الزوج", "value": "غلام سرور." },
      { "label": "تاريخ الإصدار", "value": "09 / 10 / 2023." },
      { "label": "تاريخ الانتهاء", "value": "08 / 10 / 2033." },
      { "label": "تفاصيل", "value": "(ترجمة دقيقة ومصدقة للنص المرفق من قبل المترجم المحلف)." }
    ]
  },
  "fa": {
    "name": "فارسی",
    "dir": "rtl",
    "docName": "ترجمه قانونی عربی گذرنامه پاکستانی (۲۰۲۳)",
    "lines": [
      { "label": "جزئیات", "value": "جمهوری اسلامی پاکستان - گذرنامه." },
      { "label": "شماره گذرنامه", "value": "DT8452184." },
      { "label": "نام", "value": "فاطمه." },
      { "label": "نام خانوادگی", "value": "نصرت." },
      { "label": "ملیت", "value": "پاکستانی." },
      { "label": "تاریخ تولد", "value": "۰۱ / ۰۱ / ۱۹۵۸." },
      { "label": "مکان تولد", "value": "کراچی، پاکستان." },
      { "label": "نام همسر", "value": "غلام سرور." },
      { "label": "تاریخ صدور", "value": "۰۹ / ۱۰ / ۲۰۲۳." },
      { "label": "تاریخ انقضا", "value": "۰۸ / ۱۰ / ۲۰۳۳." },
      { "label": "جزئیات", "value": "(گواهی صحت ترجمه متن پیوست توسط مترجم رسمی)." }
    ]
  },
  "es": {
    "name": "Español",
    "dir": "ltr",
    "docName": "Traducción Legal al Árabe del Pasaporte Paquistaní (2023)",
    "lines": [
      { "label": "Detalles", "value": "República Islámica de Pakistán - Pasaporte." },
      { "label": "No. de Pasaporte", "value": "DT8452184." },
      { "label": "Nombre", "value": "Fatima." },
      { "label": "Apellido", "value": "Nusrat." },
      { "label": "Nacionalidad", "value": "Paquistaní." },
      { "label": "Fecha de Nacimiento", "value": "01 / 01 / 1958." },
      { "label": "Lugar de Nacimiento", "value": "Karachi, Pakistán." },
      { "label": "Nombre del Esposo", "value": "Ghulam Sarwar." },
      { "label": "Fecha de Emisión", "value": "09 / 10 / 2023." },
      { "label": "Fecha de Vencimiento", "value": "08 / 10 / 2033." },
      { "label": "Detalles", "value": "(Certificado como una traducción fiel del texto adjunto por el traductor jurado)." }
    ]
  }
};

const data = JSON.parse(fs.readFileSync('documents_data.json', 'utf8'));
const docIndex = data.findIndex(d => d.id === docId);

if (docIndex !== -1) {
  data[docIndex].translations = newTranslations;
  data[docIndex].category = 'personal'; 
  fs.writeFileSync('documents_data.json', JSON.stringify(data, null, 2));
  console.log("Updated doc_099 successfully");
} else {
  console.log("Doc not found");
}
