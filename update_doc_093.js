const fs = require('fs');

const docId = 'doc_093';

const newTranslations = {
  "ur": {
    "name": "اردو",
    "dir": "rtl",
    "docName": "بلدیہ کا رئیل اسٹیٹ معائنہ اور تفتیشی رپورٹ (پراپرٹی نمبر 284)",
    "lines": [
      { "label": "دستاویز", "value": "قبر السٹ میں پراپرٹی نمبر 284 سے متعلق بلدیاتی معائنے کی رپورٹ." },
      { "label": "تفصیلات", "value": "جائیداد کے کل رقبے (13,429 مربع میٹر)، عام املاک کے لیے منقطع ہونے والے حصے (تقریباً 6,791 مربع میٹر) اور باقی ماندہ رقبے (تقریباً 6,638 مربع میٹر) کی نشاندہی جو کہ تعمیراتی اجازت نامے کے لیے افراز (تقسیم) کی محتاج ہے." },
      { "label": "دستخط", "value": "سربراہ تکنیکی دفتر (محمد ہشام البیاع) اور بلدیہ کے سربراہ." }
    ]
  },
  "en": {
    "name": "English",
    "dir": "ltr",
    "docName": "Municipal Inspection and Investigation Report (Property No. 284)",
    "lines": [
      { "label": "Document", "value": "Municipal Inspection Report regarding property no. 284 in Qabr Al-Sit." },
      { "label": "Details", "value": "Mentions the total area of the property (13,429 sq.m.), public road deductions (approx. 6,791 sq.m.), and the remaining area (approx. 6,638 sq.m.) requiring subdivision to obtain a building permit." },
      { "label": "Signatures", "value": "Head of the Technical Office (Muhammad Hisham Al-Bayaa) and Head of the Municipality." }
    ]
  },
  "ar": {
    "name": "العربية",
    "dir": "rtl",
    "docName": "تقرير كشف وتفتيش عقاري من البلدية (العقار رقم 284)",
    "lines": [
      { "label": "الوثيقة", "value": "تقرير كشف من البلدية بخصوص العقار رقم 284 في منطقة قبر الست." },
      { "label": "تفاصيل", "value": "يذكر المساحة الإجمالية للعقار (13,429 متر مربع)، والاستقطاعات للطرق العامة (حوالي 6,791 متر مربع)، والمساحة المتبقية (حوالي 6,638 متر مربع) التي تتطلب إفرازاً (تقسيماً) للحصول على رخصة بناء." },
      { "label": "التواقيع", "value": "رئيس المكتب الفني (محمد هشام البياع) ورئيس البلدية." }
    ]
  },
  "fa": {
    "name": "فارسی",
    "dir": "rtl",
    "docName": "گزارش بازرسی و معاینه ملکی شهرداری (ملک شماره ۲۸۴)",
    "lines": [
      { "label": "سند", "value": "گزارش بازرسی شهرداری در خصوص ملک شماره ۲۸۴ در منطقه قبر الست." },
      { "label": "جزئیات", "value": "ذکر مساحت کل ملک (۱۳,۴۲۹ متر مربع)، کسورات جاده‌های عمومی (حدود ۶,۷۹۱ متر مربع) و مساحت باقیمانده (حدود ۶,۶۳۸ متر مربع) که برای دریافت پروانه ساختمان نیاز به تفکیک دارد." },
      { "label": "امضاها", "value": "رئیس دفتر فنی (محمد هشام البیاع) و رئیس شهرداری." }
    ]
  },
  "es": {
    "name": "Español",
    "dir": "ltr",
    "docName": "Informe de Inspección e Investigación Municipal (Propiedad No. 284)",
    "lines": [
      { "label": "Documento", "value": "Informe de Inspección Municipal sobre la propiedad no. 284 en Qabr Al-Sit." },
      { "label": "Detalles", "value": "Menciona el área total de la propiedad (13,429 metros cuadrados), deducciones por vías públicas (aprox. 6,791 metros cuadrados), y el área restante (aprox. 6,638 metros cuadrados) que requiere subdivisión para obtener un permiso de construcción." },
      { "label": "Firmas", "value": "Jefe de la Oficina Técnica (Muhammad Hisham Al-Bayaa) y Jefe de la Municipalidad." }
    ]
  }
};

const data = JSON.parse(fs.readFileSync('documents_data.json', 'utf8'));
const docIndex = data.findIndex(d => d.id === docId);

if (docIndex !== -1) {
  data[docIndex].translations = newTranslations;
  data[docIndex].category = 'property'; 
  fs.writeFileSync('documents_data.json', JSON.stringify(data, null, 2));
  console.log("Updated doc_093 successfully");
} else {
  console.log("Doc not found");
}
