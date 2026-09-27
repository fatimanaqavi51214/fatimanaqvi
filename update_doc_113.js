const fs = require('fs');

const docId = 'doc_113';

const newTranslations = {
  "ur": {
    "name": "اردو",
    "dir": "rtl",
    "docName": "حکومتِ دبئی - دفترِ حاکمِ دبئی کا بلدیہ کے نام خط (1976)",
    "lines": [
      { "label": "تفصیلات", "value": "حکومتِ دبئی." },
      { "label": "تاریخ", "value": "25 دسمبر 1976." },
      { "label": "بنام", "value": "محترم ڈائریکٹر دبئی بلدیہ." },
      { "label": "مضمون", "value": "آداب و تسلیمات۔ محترمہ نصرت فاطمہ نقوی نے ایک صنعتی پروجیکٹ (انڈسٹریل پروجیکٹ) کے لیے زمین کے ایک ٹکڑے کی درخواست جمع کروائی ہے... ہماری گزارش ہے کہ آپ سرکاری قواعد و ضوابط کے مطابق اس پر ضروری کارروائی کریں۔" },
      { "label": "دستخط", "value": "(حاکمِ دبئی کے دفتر کی سرکاری مہر اور دستخط کے ساتھ)." }
    ]
  },
  "en": {
    "name": "English",
    "dir": "ltr",
    "docName": "Government of Dubai - Ruler's Court Letter to Municipality (1976)",
    "lines": [
      { "label": "Details", "value": "Government of Dubai." },
      { "label": "Date", "value": "25 / 12 / 1976." },
      { "label": "To", "value": "H.E. The Respected Director of Dubai Municipality." },
      { "label": "Content", "value": "Greetings. Mrs. Nusrat Fatima Naqvi has submitted a request for a plot of land for an industrial project... We request you to take the necessary action according to the official procedures/rules." },
      { "label": "Signature", "value": "(Stamped by the Office of His Highness the Ruler, Dubai, and signed)." }
    ]
  },
  "ar": {
    "name": "العربية",
    "dir": "rtl",
    "docName": "حكومة دبي - ديوان الحاكم رسالة إلى البلدية (1976)",
    "lines": [
      { "label": "تفاصيل", "value": "حكومة دبي." },
      { "label": "التاريخ", "value": "25 / 12 / 1976." },
      { "label": "إلى", "value": "سعادة مدير بلدية دبي المحترم." },
      { "label": "المضمون", "value": "تحية طيبة. تقدمت السيدة نصرت فاطمة نقوي بطلب للحصول على قطعة أرض لمشروع صناعي... نرجو منكم اتخاذ الإجراءات اللازمة وفقاً للأصول المرعية." },
      { "label": "التوقيع", "value": "(مختوم من قبل ديوان سمو الحاكم، دبي، وموقع)." }
    ]
  },
  "fa": {
    "name": "فارسی",
    "dir": "rtl",
    "docName": "دولت دبی - نامه دفتر حاکم دبی به شهرداری (۱۹۷۶)",
    "lines": [
      { "label": "جزئیات", "value": "دولت دبی." },
      { "label": "تاریخ", "value": "۲۵ / ۱۲ / ۱۹۷۶." },
      { "label": "به", "value": "مدیر محترم شهرداری دبی." },
      { "label": "مضمون", "value": "با سلام. خانم نصرت فاطمه نقوی درخواستی برای دریافت یک قطعه زمین جهت پروژه صنعتی ارائه کرده است... از شما خواهشمندیم طبق رویه‌ها/قوانین رسمی اقدامات لازم را انجام دهید." },
      { "label": "امضا", "value": "(ممهور به مهر دفتر اعلیحضرت حاکم، دبی، و امضا شده)." }
    ]
  },
  "es": {
    "name": "Español",
    "dir": "ltr",
    "docName": "Gobierno de Dubái - Carta del Tribunal del Gobernante a la Municipalidad (1976)",
    "lines": [
      { "label": "Detalles", "value": "Gobierno de Dubái." },
      { "label": "Fecha", "value": "25 / 12 / 1976." },
      { "label": "Para", "value": "S.E. El Respetado Director de la Municipalidad de Dubái." },
      { "label": "Contenido", "value": "Saludos. La Sra. Nusrat Fatima Naqvi ha presentado una solicitud de una parcela de tierra para un proyecto industrial... Le solicitamos que tome las medidas necesarias de acuerdo con los procedimientos/reglas oficiales." },
      { "label": "Firma", "value": "(Sellado por la Oficina de Su Alteza el Gobernante, Dubái, y firmado)." }
    ]
  }
};

const data = JSON.parse(fs.readFileSync('documents_data.json', 'utf8'));
const docIndex = data.findIndex(d => d.id === docId);

if (docIndex !== -1) {
  data[docIndex].translations = newTranslations;
  data[docIndex].category = 'business'; 
  fs.writeFileSync('documents_data.json', JSON.stringify(data, null, 2));
  console.log("Updated doc_113 successfully");
} else {
  console.log("Doc not found");
}
