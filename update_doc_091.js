const fs = require('fs');

const docId = 'doc_091';

const newTranslations = {
  "ur": {
    "name": "اردو",
    "dir": "rtl",
    "docName": "شامی بلدیہ کا تعمیراتی اجازت نامہ",
    "lines": [
      { "label": "دستاویز", "value": "تعمیراتی اجازت نامہ (رخصة بناء)." },
      { "label": "تفصیلات", "value": "بلدیہ کی طرف سے جاری کردہ سرکاری تعمیراتی لائسنس، جس میں فیس، تعمیراتی رقبہ اور تعمیراتی ہدایات درج ہیں." },
      { "label": "تاریخ", "value": "2008." },
      { "label": "Details", "value": "(بلدیاتی انجینئرنگ اور لائسنسنگ حکام کے دستخط اور مہروں کے ساتھ)." }
    ]
  },
  "en": {
    "name": "English",
    "dir": "ltr",
    "docName": "Syrian Municipality Building Permit",
    "lines": [
      { "label": "Document", "value": "Building Permit (رخصة بناء)." },
      { "label": "Details", "value": "Official construction license issued by the municipality for property development, detailing fees, construction areas, and structural guidelines." },
      { "label": "Date", "value": "2008." },
      { "label": "Details", "value": "(Signed and stamped by municipal engineering and licensing authorities)." }
    ]
  },
  "ar": {
    "name": "العربية",
    "dir": "rtl",
    "docName": "رخصة بناء من البلدية السورية",
    "lines": [
      { "label": "الوثيقة", "value": "رخصة بناء." },
      { "label": "تفاصيل", "value": "رخصة بناء رسمية صادرة عن البلدية للتطوير العقاري، توضح الرسوم، ومساحات البناء، والإرشادات الإنشائية." },
      { "label": "التاريخ", "value": "2008." },
      { "label": "تفاصيل", "value": "(موقعة ومختومة من قبل دوائر الهندسة والتراخيص البلدية)." }
    ]
  },
  "fa": {
    "name": "فارسی",
    "dir": "rtl",
    "docName": "پروانه ساختمان شهرداری سوریه",
    "lines": [
      { "label": "سند", "value": "پروانه ساختمان (رخصة بناء)." },
      { "label": "جزئیات", "value": "مجوز رسمی ساخت و ساز صادر شده توسط شهرداری برای توسعه ملک، با ذکر هزینه‌ها، مساحت‌های ساخت و ساز و دستورالعمل‌های ساختاری." },
      { "label": "تاریخ", "value": "۲۰۰۸." },
      { "label": "جزئیات", "value": "(با امضا و مهر مقامات مهندسی و صدور مجوز شهرداری)." }
    ]
  },
  "es": {
    "name": "Español",
    "dir": "ltr",
    "docName": "Permiso de Construcción de la Municipalidad Siria",
    "lines": [
      { "label": "Documento", "value": "Permiso de Construcción (رخصة بناء)." },
      { "label": "Detalles", "value": "Licencia oficial de construcción emitida por la municipalidad para el desarrollo de la propiedad, detallando tarifas, áreas de construcción y pautas estructurales." },
      { "label": "Fecha", "value": "2008." },
      { "label": "Detalles", "value": "(Firmado y sellado por las autoridades municipales de ingeniería y licencias)." }
    ]
  }
};

const data = JSON.parse(fs.readFileSync('documents_data.json', 'utf8'));
const docIndex = data.findIndex(d => d.id === docId);

if (docIndex !== -1) {
  data[docIndex].translations = newTranslations;
  data[docIndex].category = 'property'; 
  fs.writeFileSync('documents_data.json', JSON.stringify(data, null, 2));
  console.log("Updated doc_091 successfully");
} else {
  console.log("Doc not found");
}
