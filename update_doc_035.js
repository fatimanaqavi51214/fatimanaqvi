const fs = require('fs');

const docId = 'doc_035';

const newTranslations = {
  "ur": {
    "name": "اردو",
    "dir": "rtl",
    "docName": "دبئی پروفیشنل لائسنس - بلاک فیکٹری (1977)",
    "lines": [
      { "label": "Details", "value": "دبئی میونسپلٹی" },
      { "label": "دستاویز", "value": "سال 1975 کا ٹریڈ لائسنس" },
      { "label": "مالک کا نام", "value": "سید محمد محسن نقوی" },
      { "label": "مینیجر یا مجاز نمائندے کا نام", "value": "نصرت فاطمہ نقوی (اسم المدير او الوكيل المفوض)" },
      { "label": "کاروبار کا نام", "value": "الرافدین ٹریڈنگ کمپنی (شركة الرافدين للتجارة)" },
      { "label": "کاروبار کی قسم", "value": "جنرل ٹریڈنگ (تجارة عامة)" },
      { "label": "تاریخِ تنسیخ", "value": "31 دسمبر 1975" },
      { "label": "Details", "value": "(نوٹ: یہ دستاویز ثابت کرتی ہے کہ وہ 1975 میں ایک تجارتی کمپنی کی باضابطہ مینیجر اور مجاز نمائندہ (Authorized Representative) کے طور پر کام کر رہی تھیں۔)" }
    ]
  },
  "en": {
    "name": "English",
    "dir": "ltr",
    "docName": "Dubai Professional License - Block Factory (1977)",
    "lines": [
      { "label": "Details", "value": "Dubai Municipality" },
      { "label": "Document", "value": "Trade Licence (رخصة تجارية) for the year 1975" },
      { "label": "Name of Proprietor", "value": "Syed Muhammad Mohsin Naqvi" },
      { "label": "Name of Resident Manager or Representative", "value": "Nusrat Fatima Naqvi (اسم المدير او الوكيل المفوض)" },
      { "label": "Name of Trade", "value": "Al Rafidain Trading Co. (شركة الرافدين للتجارة)" },
      { "label": "Type of Business", "value": "General Trading (تجارة عامة)" },
      { "label": "Expiry Date", "value": "31 December 1975" },
      { "label": "Details", "value": "(Note: This document proves that in 1975 she was working as the official manager and Authorized Representative of a trading company.)" }
    ]
  },
  "ar": {
    "name": "العربية",
    "dir": "rtl",
    "docName": "رخصة مهنية دبي - مصنع طابوق (1977)",
    "lines": [
      { "label": "تفاصيل", "value": "بلدية دبي" },
      { "label": "الوثيقة", "value": "رخصة تجارية لعام 1975" },
      { "label": "اسم المالك", "value": "سيد محمد محسن نقوي" },
      { "label": "اسم المدير أو الوكيل المفوض", "value": "نصرت فاطمة نقوي" },
      { "label": "الاسم التجاري", "value": "شركة الرافدين للتجارة" },
      { "label": "نوع العمل", "value": "تجارة عامة" },
      { "label": "تاريخ الانتهاء", "value": "31 ديسمبر 1975" },
      { "label": "تفاصيل", "value": "(ملاحظة: تثبت هذه الوثيقة أنها كانت تعمل كمديرة رسمية ووكيل مفوض لشركة تجارية في عام 1975.)" }
    ]
  },
  "fa": {
    "name": "فارسی",
    "dir": "rtl",
    "docName": "مجوز حرفه‌ای دبی - کارخانه بلوک (۱۹۷۷)",
    "lines": [
      { "label": "جزئیات", "value": "شهرداری دبی" },
      { "label": "سند", "value": "مجوز تجاری (رخصة تجارية) برای سال ۱۹۷۵" },
      { "label": "نام مالک", "value": "سید محمد محسن نقوی" },
      { "label": "نام مدیر یا نماینده مجاز", "value": "نصرت فاطمه نقوی (اسم المدير او الوكيل المفوض)" },
      { "label": "نام تجاری", "value": "شرکت تجاری الرافدین (شركة الرافدين للتجارة)" },
      { "label": "نوع کسب و کار", "value": "تجارت عمومی (تجارة عامة)" },
      { "label": "تاریخ انقضا", "value": "۳۱ دسامبر ۱۹۷۵" },
      { "label": "جزئیات", "value": "(توجه: این سند ثابت می‌کند که در سال ۱۹۷۵ وی به عنوان مدیر رسمی و نماینده مجاز یک شرکت تجاری مشغول به کار بوده است.)" }
    ]
  },
  "es": {
    "name": "Español",
    "dir": "ltr",
    "docName": "Licencia Profesional de Dubái - Fábrica de Bloques (1977)",
    "lines": [
      { "label": "Detalles", "value": "Municipalidad de Dubái" },
      { "label": "Documento", "value": "Licencia Comercial (رخصة تجارية) para el año 1975" },
      { "label": "Nombre del Propietario", "value": "Syed Muhammad Mohsin Naqvi" },
      { "label": "Nombre del Gerente o Representante", "value": "Nusrat Fatima Naqvi (اسم المدير او الوكيل المفوض)" },
      { "label": "Nombre Comercial", "value": "Al Rafidain Trading Co. (شركة الرافدين للتجارة)" },
      { "label": "Tipo de Negocio", "value": "Comercio General (تجارة عامة)" },
      { "label": "Fecha de Vencimiento", "value": "31 de diciembre de 1975" },
      { "label": "Detalles", "value": "(Nota: Este documento prueba que en 1975 trabajaba como gerente oficial y representante autorizada de una empresa comercial.)" }
    ]
  }
};

const data = JSON.parse(fs.readFileSync('documents_data.json', 'utf8'));
const docIndex = data.findIndex(d => d.id === docId);

if (docIndex !== -1) {
  data[docIndex].translations = newTranslations;
  data[docIndex].category = 'business'; 
  fs.writeFileSync('documents_data.json', JSON.stringify(data, null, 2));
  console.log("Updated doc_035 successfully");
} else {
  console.log("Doc not found");
}
