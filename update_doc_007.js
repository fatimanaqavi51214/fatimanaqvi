const fs = require('fs');

const docId = 'doc_007';

const newTranslations = {
  "ur": {
    "name": "اردو",
    "dir": "rtl",
    "docName": "پاکستانی سفارت خانے کا سرٹیفکیٹ (2009)",
    "lines": [
      { "label": "Details", "value": "سفارت خانہ اسلامی جمہوریہ پاکستان، دمشق" },
      { "label": "تاریخ", "value": "26 فروری 2009" },
      { "label": "نام", "value": "نصرت فاطمہ" },
      { "label": "قومیت", "value": "پاکستانی" },
      { "label": "پیشہ", "value": "وکیل (محامية)" },
      { "label": "رہائش کی جگہ", "value": "مزہ جبل، دمشق" },
      { "label": "Details", "value": "(لاہل زاہد علی، کونسلر کے دستخط)" }
    ]
  },
  "en": {
    "name": "English",
    "dir": "ltr",
    "docName": "Certificate of Pakistani Embassy (2009)",
    "lines": [
      { "label": "Details", "value": "Embassy of the Islamic Republic of Pakistan, Damascus" },
      { "label": "Date", "value": "26 / 02 / 2009" },
      { "label": "Document", "value": "Civil Extract (اخراج قيد نفوس)" },
      { "label": "Name", "value": "Nusrat Fatima" },
      { "label": "Nationality", "value": "Pakistani" },
      { "label": "Profession", "value": "Lawyer (محامية)" },
      { "label": "Place of Residence", "value": "Mezzeh Jabal, Damascus" },
      { "label": "Details", "value": "(Signed by Lahel Zahid Ali, Counsellor)" }
    ]
  },
  "ar": {
    "name": "العربية",
    "dir": "rtl",
    "docName": "شهادة من السفارة الباكستانية (2009)",
    "lines": [
      { "label": "تفاصيل", "value": "سفارة جمهورية باكستان الإسلامية، دمشق" },
      { "label": "التاريخ", "value": "26 / 02 / 2009" },
      { "label": "الوثيقة", "value": "إخراج قيد نفوس" },
      { "label": "الاسم", "value": "نصرت فاطمة" },
      { "label": "الجنسية", "value": "باكستانية" },
      { "label": "المهنة", "value": "محامية" },
      { "label": "مكان الإقامة", "value": "مزة جبل، دمشق" },
      { "label": "تفاصيل", "value": "(توقيع لاهل زاهد علي، مستشار)" }
    ]
  },
  "fa": {
    "name": "فارسی",
    "dir": "rtl",
    "docName": "گواهی سفارت پاکستان (۲۰۰۹)",
    "lines": [
      { "label": "جزئیات", "value": "سفارت جمهوری اسلامی پاکستان، دمشق" },
      { "label": "تاریخ", "value": "۲۶ / ۰۲ / ۲۰۰۹" },
      { "label": "سند", "value": "گواهی ثبت احوال (اخراج قيد نفوس)" },
      { "label": "نام", "value": "نصرت فاطمه" },
      { "label": "ملیت", "value": "پاکستانی" },
      { "label": "شغل", "value": "وکیل (محامية)" },
      { "label": "محل سکونت", "value": "مزه جبل، دمشق" },
      { "label": "جزئیات", "value": "(با امضای لاهل زاهد علی، مشاور)" }
    ]
  },
  "es": {
    "name": "Español",
    "dir": "ltr",
    "docName": "Certificado de la Embajada de Pakistán (2009)",
    "lines": [
      { "label": "Detalles", "value": "Embajada de la República Islámica de Pakistán, Damasco" },
      { "label": "Fecha", "value": "26 / 02 / 2009" },
      { "label": "Documento", "value": "Extracto Civil (اخراج قيد نفوس)" },
      { "label": "Nombre", "value": "Nusrat Fatima" },
      { "label": "Nacionalidad", "value": "Paquistaní" },
      { "label": "Profesión", "value": "Abogada (محامية)" },
      { "label": "Lugar de Residencia", "value": "Mezzeh Jabal, Damasco" },
      { "label": "Detalles", "value": "(Firmado por Lahel Zahid Ali, Consejero)" }
    ]
  }
};

const data = JSON.parse(fs.readFileSync('documents_data.json', 'utf8'));
const docIndex = data.findIndex(d => d.id === docId);

if (docIndex !== -1) {
  data[docIndex].translations = newTranslations;
  data[docIndex].category = 'embassy'; // Set category as requested
  fs.writeFileSync('documents_data.json', JSON.stringify(data, null, 2));
  console.log("Updated doc_007 successfully");
} else {
  console.log("Doc not found");
}
