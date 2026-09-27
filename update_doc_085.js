const fs = require('fs');

const docId = 'doc_085';

const newTranslations = {
  "ur": {
    "name": "اردو",
    "dir": "rtl",
    "docName": "شامی جائیداد کی ملکیت اور اکاؤنٹ کا بیان (بیانِ ملکیت)",
    "lines": [
      { "label": "دستاویز", "value": "جائیداد کی ملکیت کا بیان (بيان ملكية)۔" },
      { "label": "مالک", "value": "نصرت فاطمہ بنت سید محمد نقوی۔" },
      { "label": "تفصیلات", "value": "دمشق کے علاقے الجدید میں اپارٹمنٹ نمبر 1/7 کی ملکیت، جس میں زمین اور باغیچے کے حصے بھی شامل ہیں۔" },
      { "label": "تاریخ", "value": "18 مئی 2007 (شامی وزارتِ خارجہ اور قونصلر ڈائریکٹوریٹ سے تصدیق شدہ)۔" }
    ]
  },
  "en": {
    "name": "English",
    "dir": "ltr",
    "docName": "Syrian Property Ownership Statement",
    "lines": [
      { "label": "Document", "value": "Property Ownership Statement (بيان ملكية)." },
      { "label": "Owner", "value": "Nusrat Fatima bint Syed Muhammad Naqvi." },
      { "label": "Details", "value": "Ownership of apartment no. 1/7 in Al-Jadida, Damascus, along with land and garden shares." },
      { "label": "Date", "value": "May 18, 2007 (authenticated by the Syrian Ministry of Foreign Affairs and Consular Directorate)." }
    ]
  },
  "ar": {
    "name": "العربية",
    "dir": "rtl",
    "docName": "بيان ملكية عقار في سوريا",
    "lines": [
      { "label": "الوثيقة", "value": "بيان ملكية." },
      { "label": "المالك", "value": "نصرت فاطمة بنت سيد محمد نقوي." },
      { "label": "تفاصيل", "value": "ملكية الشقة رقم 1/7 في الجديدة، دمشق، مع حصص من الأرض والحديقة." },
      { "label": "التاريخ", "value": "18 مايو 2007 (مصدق من وزارة الخارجية السورية وإدارة الشؤون القنصلية)." }
    ]
  },
  "fa": {
    "name": "فارسی",
    "dir": "rtl",
    "docName": "بیانیه مالکیت ملک در سوریه",
    "lines": [
      { "label": "سند", "value": "بیانیه مالکیت (بيان ملكية)." },
      { "label": "مالک", "value": "نصرت فاطمه فرزند سید محمد نقوی." },
      { "label": "جزئیات", "value": "مالکیت آپارتمان شماره ۱/۷ در الجدیده، دمشق، به همراه سهام زمین و باغ." },
      { "label": "تاریخ", "value": "۱۸ مه ۲۰۰۷ (تأیید شده توسط وزارت امور خارجه سوریه و اداره کنسولی)." }
    ]
  },
  "es": {
    "name": "Español",
    "dir": "ltr",
    "docName": "Declaración de Propiedad Siria",
    "lines": [
      { "label": "Documento", "value": "Declaración de Propiedad (بيان ملكية)." },
      { "label": "Propietario", "value": "Nusrat Fatima bint Syed Muhammad Naqvi." },
      { "label": "Detalles", "value": "Propiedad del apartamento no. 1/7 en Al-Jadida, Damasco, junto con cuotas de terreno y jardín." },
      { "label": "Fecha", "value": "18 de mayo de 2007 (autenticado por el Ministerio de Asuntos Exteriores de Siria y la Dirección Consular)." }
    ]
  }
};

const data = JSON.parse(fs.readFileSync('documents_data.json', 'utf8'));
const docIndex = data.findIndex(d => d.id === docId);

if (docIndex !== -1) {
  data[docIndex].translations = newTranslations;
  data[docIndex].category = 'property'; 
  fs.writeFileSync('documents_data.json', JSON.stringify(data, null, 2));
  console.log("Updated doc_085 successfully");
} else {
  console.log("Doc not found");
}
