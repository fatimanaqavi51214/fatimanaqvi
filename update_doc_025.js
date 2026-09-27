const fs = require('fs');

const docId = 'doc_025';

const newTranslations = {
  "ur": {
    "name": "اردو",
    "dir": "rtl",
    "docName": "پاکستانی سفارت خانے کا سرٹیفکیٹ (2013)",
    "lines": [
      { "label": "Details", "value": "سفارت خانہ اسلامی جمہوریہ پاکستان، دمشق" },
      { "label": "تاریخ", "value": "13 ستمبر 2013" },
      { "label": "دستاویز", "value": "شناختی سرٹیفکیٹ (اخراج قيد نفوس)" },
      { "label": "نام", "value": "نصرت فاطمہ" },
      { "label": "والد کا نام", "value": "سید محمد نقوی" },
      { "label": "والدہ کا نام", "value": "مہر بانو نقوی" },
      { "label": "تاریخِ پیدائش", "value": "1958" },
      { "label": "قومیت", "value": "پاکستانی" },
      { "label": "پیشہ", "value": "وکیل اور رئیل اسٹیٹ تاجر (محامية وتجارة عقارات)" },
      { "label": "ازدواجی حیثیت", "value": "شادی شدہ" },
      { "label": "رہائش کی جگہ", "value": "مزہ جبل، دمشق" },
      { "label": "دستاویز جاری کرنے کی وجہ", "value": "جنرل ٹریڈنگ (تجارة عامة)" },
      { "label": "Details", "value": "(محمد ذیشان احمد، فرسٹ سیکرٹری کے دستخط اور مہر)" }
    ]
  },
  "en": {
    "name": "English",
    "dir": "ltr",
    "docName": "Certificate of Pakistani Embassy (2013)",
    "lines": [
      { "label": "Details", "value": "Embassy of the Islamic Republic of Pakistan, Damascus" },
      { "label": "Date", "value": "13 / 09 / 2013" },
      { "label": "Document", "value": "Civil Extract (إخراج قيد نفوس)" },
      { "label": "Name", "value": "Nusrat Fatima" },
      { "label": "Father's Name", "value": "Syed Muhammad Naqvi" },
      { "label": "Mother's Name", "value": "Mehar Bano Naqvi" },
      { "label": "Date of Birth", "value": "1958" },
      { "label": "Nationality", "value": "Pakistani" },
      { "label": "Profession", "value": "Lawyer and Real Estate Trader (محامية وتجارة عقارات)" },
      { "label": "Marital Status", "value": "Married" },
      { "label": "Place of Residence", "value": "Mezzeh Jabal, Damascus" },
      { "label": "Reason for Issuance", "value": "General Trading (تجارة عامة)" },
      { "label": "Details", "value": "(Signed by Muhammad Zeeshan Ahmed, First Secretary)" }
    ]
  },
  "ar": {
    "name": "العربية",
    "dir": "rtl",
    "docName": "شهادة من السفارة الباكستانية (2013)",
    "lines": [
      { "label": "تفاصيل", "value": "سفارة جمهورية باكستان الإسلامية، دمشق" },
      { "label": "التاريخ", "value": "13 / 09 / 2013" },
      { "label": "الوثيقة", "value": "إخراج قيد نفوس" },
      { "label": "الاسم", "value": "نصرت فاطمة" },
      { "label": "اسم الأب", "value": "سيد محمد نقوي" },
      { "label": "اسم الأم", "value": "مهر بانو نقوي" },
      { "label": "سنة الولادة", "value": "1958" },
      { "label": "الجنسية", "value": "باكستانية" },
      { "label": "المهنة", "value": "محامية وتجارة عقارات" },
      { "label": "الحالة الاجتماعية", "value": "متزوجة" },
      { "label": "مكان الإقامة", "value": "مزة جبل، دمشق" },
      { "label": "سبب الإصدار", "value": "تجارة عامة" },
      { "label": "تفاصيل", "value": "(توقيع محمد ذيشان أحمد، سكرتير أول)" }
    ]
  },
  "fa": {
    "name": "فارسی",
    "dir": "rtl",
    "docName": "گواهی سفارت پاکستان (۲۰۱۳)",
    "lines": [
      { "label": "جزئیات", "value": "سفارت جمهوری اسلامی پاکستان، دمشق" },
      { "label": "تاریخ", "value": "۱۳ / ۰۹ / ۲۰۱۳" },
      { "label": "سند", "value": "گواهی ثبت احوال (إخراج قيد نفوس)" },
      { "label": "نام", "value": "نصرت فاطمه" },
      { "label": "نام پدر", "value": "سید محمد نقوی" },
      { "label": "نام مادر", "value": "مهر بانو نقوی" },
      { "label": "سال تولد", "value": "۱۹۵۸" },
      { "label": "ملیت", "value": "پاکستانی" },
      { "label": "شغل", "value": "وکیل و تاجر املاک (محامية وتجارة عقارات)" },
      { "label": "وضعیت تأهل", "value": "متاهل" },
      { "label": "محل سکونت", "value": "مزه جبل، دمشق" },
      { "label": "دلیل صدور", "value": "تجارت عمومی (تجارة عامة)" },
      { "label": "جزئیات", "value": "(با امضای محمد ذیشان احمد، دبیر اول)" }
    ]
  },
  "es": {
    "name": "Español",
    "dir": "ltr",
    "docName": "Certificado de la Embajada de Pakistán (2013)",
    "lines": [
      { "label": "Detalles", "value": "Embajada de la República Islámica de Pakistán, Damasco" },
      { "label": "Fecha", "value": "13 / 09 / 2013" },
      { "label": "Documento", "value": "Extracto Civil (إخراج قيد نفوس)" },
      { "label": "Nombre", "value": "Nusrat Fatima" },
      { "label": "Nombre del Padre", "value": "Syed Muhammad Naqvi" },
      { "label": "Nombre de la Madre", "value": "Mehar Bano Naqvi" },
      { "label": "Año de Nacimiento", "value": "1958" },
      { "label": "Nacionalidad", "value": "Paquistaní" },
      { "label": "Profesión", "value": "Abogada y Comerciante de Bienes Raíces (محامية وتجارة عقارات)" },
      { "label": "Estado Civil", "value": "Casada" },
      { "label": "Lugar de Residencia", "value": "Mezzeh Jabal, Damasco" },
      { "label": "Razón de Emisión", "value": "Comercio General (تجارة عامة)" },
      { "label": "Detalles", "value": "(Firmado por Muhammad Zeeshan Ahmed, Primer Secretario)" }
    ]
  }
};

const data = JSON.parse(fs.readFileSync('documents_data.json', 'utf8'));
const docIndex = data.findIndex(d => d.id === docId);

if (docIndex !== -1) {
  data[docIndex].translations = newTranslations;
  data[docIndex].category = 'embassy'; 
  fs.writeFileSync('documents_data.json', JSON.stringify(data, null, 2));
  console.log("Updated doc_025 successfully");
} else {
  console.log("Doc not found");
}
