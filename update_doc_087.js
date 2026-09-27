const fs = require('fs');

const docId = 'doc_087';

const newTranslations = {
  "ur": {
    "name": "اردو",
    "dir": "rtl",
    "docName": "شامی بلدیہ / انتظامیہ کی درخواست (پراپرٹی نمبر 284)",
    "lines": [
      { "label": "دستاویز", "value": "قبر السٹ میں جائیداد کے پارسل نمبر 284 سے متعلق درخواست۔" },
      { "label": "درخواست گزار", "value": "نصرت فاطمہ (پاکستانی شہری)۔" },
      { "label": "تاریخ", "value": "12 دسمبر 1989۔" },
      { "label": "Details", "value": "(سرکاری بلدیاتی مہروں اور دستخطوں کے ساتھ)۔" }
    ]
  },
  "en": {
    "name": "English",
    "dir": "ltr",
    "docName": "Syrian Municipality Application (Property No. 284)",
    "lines": [
      { "label": "Document", "value": "Property Inquiry/Application regarding land parcel no. 284 in Qabr Al-Sit." },
      { "label": "Applicant", "value": "Nusrat Fatima (Pakistani national)." },
      { "label": "Date", "value": "December 12, 1989." },
      { "label": "Details", "value": "(Includes official municipal stamps and signatures)." }
    ]
  },
  "ar": {
    "name": "العربية",
    "dir": "rtl",
    "docName": "طلب إلى البلدية السورية (العقار رقم 284)",
    "lines": [
      { "label": "الوثيقة", "value": "استعلام/طلب عقاري بخصوص قطعة الأرض رقم 284 في منطقة قبر الست." },
      { "label": "مقدم الطلب", "value": "نصرت فاطمة (مواطنة باكستانية)." },
      { "label": "التاريخ", "value": "12 ديسمبر 1989." },
      { "label": "تفاصيل", "value": "(يتضمن أختام وتواقيع بلدية رسمية)." }
    ]
  },
  "fa": {
    "name": "فارسی",
    "dir": "rtl",
    "docName": "درخواست شهرداری سوریه (ملک شماره ۲۸۴)",
    "lines": [
      { "label": "سند", "value": "استعلام/درخواست ملکی در خصوص قطعه زمین شماره ۲۸۴ در منطقه قبر الست." },
      { "label": "درخواست‌کننده", "value": "نصرت فاطمه (شهروند پاکستانی)." },
      { "label": "تاریخ", "value": "۱۲ دسامبر ۱۹۸۹." },
      { "label": "جزئیات", "value": "(شامل مهرها و امضاهای رسمی شهرداری)." }
    ]
  },
  "es": {
    "name": "Español",
    "dir": "ltr",
    "docName": "Solicitud a la Municipalidad Siria (Propiedad No. 284)",
    "lines": [
      { "label": "Documento", "value": "Consulta/Solicitud de propiedad con respecto a la parcela de tierra no. 284 en Qabr Al-Sit." },
      { "label": "Solicitante", "value": "Nusrat Fatima (Nacional paquistaní)." },
      { "label": "Fecha", "value": "12 de diciembre de 1989." },
      { "label": "Detalles", "value": "(Incluye sellos y firmas municipales oficiales)." }
    ]
  }
};

const data = JSON.parse(fs.readFileSync('documents_data.json', 'utf8'));
const docIndex = data.findIndex(d => d.id === docId);

if (docIndex !== -1) {
  data[docIndex].translations = newTranslations;
  data[docIndex].category = 'property'; 
  fs.writeFileSync('documents_data.json', JSON.stringify(data, null, 2));
  console.log("Updated doc_087 successfully");
} else {
  console.log("Doc not found");
}
