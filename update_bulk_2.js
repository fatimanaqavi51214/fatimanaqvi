const fs = require('fs');

const data = JSON.parse(fs.readFileSync('documents_data.json', 'utf8'));

const updates = [
  {
    id: 'doc_033',
    category: 'business',
    translations: {
      "ur": {
        "name": "اردو",
        "dir": "rtl",
        "docName": "دبئی میونسپلٹی - ٹریڈ لائسنس (1975)",
        "lines": [
          { "label": "Details", "value": "دبئی میونسپلٹی" },
          { "label": "دستاویز", "value": "سال 1975 کا تجارتی لائسنس (رخصة تجارية)" },
          { "label": "مالک کا نام", "value": "سید محمد محسن نقوی" },
          { "label": "مینیجر یا مجاز نمائندے کا نام", "value": "نصرت فاطمہ نقوی (اسم المدير أو الوكيل المفوض: نصرت فاطمة نقوي)" },
          { "label": "کاروبار کا نام", "value": "الرافدین ٹریڈنگ کمپنی (شركة الرافدين للتجارة)" },
          { "label": "کاروبار کی قسم", "value": "جنرل ٹریڈنگ (تجارة عامة)" },
          { "label": "کاروبار کا پتہ", "value": "پوسٹ بکس 1609، دبئی" },
          { "label": "تاریخِ تنسیخ", "value": "31 دسمبر 1975" },
          { "label": "Details", "value": "(نوٹ: یہ دستاویز اس بات کا واضح ثبوت ہے کہ محترمہ نصرت فاطمہ 1975 میں دبئی میں \"الرافدین ٹریڈنگ کمپنی\" کی باضابطہ مینیجر اور مجاز نمائندہ (Authorized Manager/Representative) کے طور پر فرائض انجام دے رہی تھیں۔)" }
        ]
      },
      "en": {
        "name": "English",
        "dir": "ltr",
        "docName": "Dubai Municipality - Trade Licence (1975)",
        "lines": [
          { "label": "Details", "value": "Dubai Municipality" },
          { "label": "Document", "value": "Trade Licence (رخصة تجارية) for the year 1975" },
          { "label": "Name of Proprietor", "value": "Syed Muhammad Mohsin Naqvi" },
          { "label": "Name of Resident Manager or Representative", "value": "Nusrat Fatima Naqvi (اسم المدير أو الوكيل المفوض: نصرت فاطمة نقوي)" },
          { "label": "Name of Trade", "value": "Al Rafidain Trading Co. (شركة الرافدين للتجارة)" },
          { "label": "Type of Business", "value": "General Trading (تجارة عامة)" },
          { "label": "Principal Place of Business", "value": "P.O. Box 1609, Dubai" },
          { "label": "Expiry Date", "value": "31 December 1975" },
          { "label": "Details", "value": "(Note: This document is clear proof that in 1975, Ms. Nusrat Fatima was performing her duties as the Authorized Manager/Representative of \"Al Rafidain Trading Co.\" in Dubai.)" }
        ]
      },
      "ar": {
        "name": "العربية",
        "dir": "rtl",
        "docName": "بلدية دبي - رخصة تجارية (1975)",
        "lines": [
          { "label": "تفاصيل", "value": "بلدية دبي" },
          { "label": "الوثيقة", "value": "رخصة تجارية لعام 1975" },
          { "label": "اسم المالك", "value": "سيد محمد محسن نقوي" },
          { "label": "اسم المدير أو الوكيل المفوض", "value": "نصرت فاطمة نقوي" },
          { "label": "الاسم التجاري", "value": "شركة الرافدين للتجارة" },
          { "label": "نوع العمل", "value": "تجارة عامة" },
          { "label": "عنوان العمل", "value": "صندوق بريد 1609، دبي" },
          { "label": "تاريخ الانتهاء", "value": "31 ديسمبر 1975" },
          { "label": "تفاصيل", "value": "(ملاحظة: هذه الوثيقة دليل واضح على أن السيدة نصرت فاطمة كانت تمارس مهامها كمديرة رسمية ووكيل مفوض لشركة الرافدين للتجارة في دبي عام 1975.)" }
        ]
      },
      "fa": {
        "name": "فارسی",
        "dir": "rtl",
        "docName": "شهرداری دبی - مجوز تجاری (۱۹۷۵)",
        "lines": [
          { "label": "جزئیات", "value": "شهرداری دبی" },
          { "label": "سند", "value": "مجوز تجاری (رخصة تجارية) برای سال ۱۹۷۵" },
          { "label": "نام مالک", "value": "سید محمد محسن نقوی" },
          { "label": "نام مدیر یا نماینده مجاز", "value": "نصرت فاطمه نقوی" },
          { "label": "نام تجاری", "value": "شرکت تجاری الرافدین (شركة الرافدين للتجارة)" },
          { "label": "نوع کسب و کار", "value": "تجارت عمومی (تجارة عامة)" },
          { "label": "آدرس محل کار", "value": "صندوق پستی ۱۶۰۹، دبی" },
          { "label": "تاریخ انقضا", "value": "۳۱ دسامبر ۱۹۷۵" },
          { "label": "جزئیات", "value": "(توجه: این سند دلیل روشنی است بر اینکه خانم نصرت فاطمه در سال ۱۹۷۵ به عنوان مدیر رسمی و نماینده مجاز شرکت تجاری الرافدین در دبی مشغول به کار بوده است.)" }
        ]
      },
      "es": {
        "name": "Español",
        "dir": "ltr",
        "docName": "Municipalidad de Dubái - Licencia Comercial (1975)",
        "lines": [
          { "label": "Detalles", "value": "Municipalidad de Dubái" },
          { "label": "Documento", "value": "Licencia Comercial (رخصة تجارية) para el año 1975" },
          { "label": "Nombre del Propietario", "value": "Syed Muhammad Mohsin Naqvi" },
          { "label": "Nombre del Gerente o Representante", "value": "Nusrat Fatima Naqvi" },
          { "label": "Nombre Comercial", "value": "Al Rafidain Trading Co. (شركة الرافدين للتجارة)" },
          { "label": "Tipo de Negocio", "value": "Comercio General (تجارة عامة)" },
          { "label": "Lugar Principal de Negocios", "value": "P.O. Box 1609, Dubái" },
          { "label": "Fecha de Vencimiento", "value": "31 de diciembre de 1975" },
          { "label": "Detalles", "value": "(Nota: Este documento es una prueba clara de que en 1975, la Sra. Nusrat Fatima cumplía sus funciones como Gerente Oficial y Representante Autorizada de la \"Al Rafidain Trading Co.\" en Dubái.)" }
        ]
      }
    }
  },
  {
    id: 'doc_035',
    category: 'business',
    translations: {
      "ur": {
        "name": "اردو",
        "dir": "rtl",
        "docName": "دبئی میونسپلٹی - پروفیشنل لائسنس (1977)",
        "lines": [
          { "label": "Details", "value": "دبئی میونسپلٹی" },
          { "label": "دستاویز", "value": "سال 1977 کا پروفیشنل لائسنس (رخصة مهنية)" },
          { "label": "نام", "value": "نصرت فاطمہ نقوی" },
          { "label": "پاسپورٹ اور قومیت", "value": "177189، پاکستانی" },
          { "label": "پیشے کی قسم", "value": "جنرل ڈیکور (ديكور عام)" },
          { "label": "کاروبار کا نام", "value": "الرافدین جنرل ڈیکور کمپنی (شركة الرافدين للديكورات العامة)" },
          { "label": "تاریخِ اجراء", "value": "16 دسمبر 1977" }
        ]
      },
      "en": {
        "name": "English",
        "dir": "ltr",
        "docName": "Dubai Municipality - Professional License (1977)",
        "lines": [
          { "label": "Details", "value": "Dubai Municipality" },
          { "label": "Document", "value": "Professional License (رخصة مهنية) for the year 1977" },
          { "label": "Name", "value": "Nusrat Fatima Naqvi" },
          { "label": "Passport and Nationality", "value": "177189, Pakistani" },
          { "label": "Type of Profession", "value": "General Decor (ديكور عام)" },
          { "label": "Trade Name", "value": "Al Rafidain General Decor Company (شركة الرافدين للديكورات العامة)" },
          { "label": "Date of Issue", "value": "16 December 1977" }
        ]
      },
      "ar": {
        "name": "العربية",
        "dir": "rtl",
        "docName": "بلدية دبي - رخصة مهنية (1977)",
        "lines": [
          { "label": "تفاصيل", "value": "بلدية دبي" },
          { "label": "الوثيقة", "value": "رخصة مهنية لعام 1977" },
          { "label": "الاسم", "value": "نصرت فاطمة نقوي" },
          { "label": "الجواز والجنسية", "value": "177189، باكستانية" },
          { "label": "نوع المهنة", "value": "ديكور عام" },
          { "label": "الاسم التجاري", "value": "شركة الرافدين للديكورات العامة" },
          { "label": "تاريخ الإصدار", "value": "16 ديسمبر 1977" }
        ]
      },
      "fa": {
        "name": "فارسی",
        "dir": "rtl",
        "docName": "شهرداری دبی - مجوز حرفه‌ای (۱۹۷۷)",
        "lines": [
          { "label": "جزئیات", "value": "شهرداری دبی" },
          { "label": "سند", "value": "مجوز حرفه‌ای (رخصة مهنية) برای سال ۱۹۷۷" },
          { "label": "نام", "value": "نصرت فاطمه نقوی" },
          { "label": "گذرنامه و ملیت", "value": "۱۷۷۱۸۹، پاکستانی" },
          { "label": "نوع حرفه", "value": "دکوراسیون عمومی (ديكور عام)" },
          { "label": "نام تجاری", "value": "شرکت دکوراسیون عمومی الرافدین (شركة الرافدين للديكورات العامة)" },
          { "label": "تاریخ صدور", "value": "۱۶ دسامبر ۱۹۷۷" }
        ]
      },
      "es": {
        "name": "Español",
        "dir": "ltr",
        "docName": "Municipalidad de Dubái - Licencia Profesional (1977)",
        "lines": [
          { "label": "Detalles", "value": "Municipalidad de Dubái" },
          { "label": "Documento", "value": "Licencia Profesional (رخصة مهنية) para el año 1977" },
          { "label": "Nombre", "value": "Nusrat Fatima Naqvi" },
          { "label": "Pasaporte y Nacionalidad", "value": "177189, Paquistaní" },
          { "label": "Tipo de Profesión", "value": "Decoración General (ديكور عام)" },
          { "label": "Nombre Comercial", "value": "Compañía de Decoración General Al Rafidain (شركة الرافدين للديكورات العامة)" },
          { "label": "Fecha de Emisión", "value": "16 de diciembre de 1977" }
        ]
      }
    }
  }
];

updates.forEach(update => {
  const idx = data.findIndex(d => d.id === update.id);
  if (idx !== -1) {
    data[idx].translations = update.translations;
    data[idx].category = update.category;
    console.log(`Updated ${update.id}`);
  }
});

fs.writeFileSync('documents_data.json', JSON.stringify(data, null, 2));
console.log("Updates complete.");
