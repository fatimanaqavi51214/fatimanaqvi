const fs = require('fs');

const docId = 'doc_163';

const newTranslations = {
  "ur": {
    "name": "اردو",
    "dir": "rtl",
    "docName": "حکومتِ دبئی - دیوانِ حاکم کی باضابطہ منظوری",
    "lines": [
      { "label": "سربراہ", "value": "حکومتِ دبئی (Government of Dubai) | تاریخ: 25 دسمبر 1976ء" },
      { "label": "بخدمت جناب", "value": "محترم ڈائریکٹر صاحب، بلدیہ دبئی، دبئی" },
      { "label": "مضمون", "value": "\"سلامِ مسنون کے بعد، محترمہ نصرت فاطمہ نقوی نے ایک درخواست پیش کی ہے جس میں انہوں نے طے شدہ علاقے میں زمین لیز پر حاصل کرنے کی استدعا کی ہے، تاکہ وہاں صنعتی منصوبہ (انڈسٹریل پراجیکٹ) قائم کیا جا سکے یا اسے اسٹوریج/گودام اور لیبر رہائش (مزدوروں کے کوارٹرز) کے لیے استعمال میں لایا جا سکے۔ لہٰذا التماس ہے کہ مروجہ قانونی ضوابط اور طریقہ کار کے مطابق اس پر ضروری کارروائی عمل میں لائی جائے۔ ہمارا انتہائی احترام اور نیک تمنائیں قبول فرمائیں۔\"" },
      { "label": "دستخط کنندہ", "value": "احمد عبد اللہ الموسىٰ | دفترِ عالی جناب حاکمِ دبئی (دیوانِ حاکم) | (حکومتِ دبئی / دفترِ حاکم کی باضابطہ سرکاری مہر ثبت ہے)" }
    ]
  },
  "en": {
    "name": "English",
    "dir": "ltr",
    "docName": "Government of Dubai - Official Approval from Ruler's Court",
    "lines": [
      { "label": "Header", "value": "Government of Dubai (حكومة دبي) | Date: 25 / 12 / 1976" },
      { "label": "To", "value": "Respected Director of Dubai Municipality, Dubai" },
      { "label": "Content", "value": "\"Greetings, Mrs. Nusrat Fatima Naqvi has submitted an application requesting the lease of a piece of land in the agreed-upon area, in order to set up an industrial project or use it for storage purposes and worker accommodations. You are kindly requested to take the necessary measures in accordance with the established rules and regulations. Please accept our highest consideration and respect.\"" },
      { "label": "Signatory", "value": "Ahmad Abdullah Al-Moosa | Office of H.H. The Ruler (مكتب سمو الحاكم) | (Official Circular Seal of the Government of Dubai / Ruler's Office Affixed)" }
    ]
  },
  "ar": {
    "name": "العربية",
    "dir": "rtl",
    "docName": "حكومة دبي - الموافقة الرسمية من ديوان الحاكم",
    "lines": [
      { "label": "الترويسة", "value": "حكومة دبي | التاريخ: 25 / 12 / 1976" },
      { "label": "إلى", "value": "مدير بلدية دبي المحترم، دبي" },
      { "label": "المضمون", "value": "\"تحية طيبة وبعد، تقدمت السيدة نصرت فاطمة نقوي بطلب لاستئجار قطعة أرض في المنطقة المتفق عليها، من أجل إقامة مشروع صناعي أو استخدامها لأغراض التخزين وسكن العمال. يرجى التكرم باتخاذ الإجراءات اللازمة وفقاً للأنظمة والقوانين المتبعة. وتفضلوا بقبول فائق الاحترام والتقدير.\"" },
      { "label": "الموقع", "value": "أحمد عبد الله الموسى | مكتب سمو الحاكم | (ممهور بختم دائري رسمي لحكومة دبي / مكتب الحاكم)" }
    ]
  },
  "fa": {
    "name": "فارسی",
    "dir": "rtl",
    "docName": "دولت دبی - تأییدیه رسمی از دیوان حاکم",
    "lines": [
      { "label": "سربرگ", "value": "دولت دبی | تاریخ: ۲۵ / ۱۲ / ۱۹۷۶" },
      { "label": "به", "value": "جناب مدیر شهرداری دبی، دبی" },
      { "label": "مضمون", "value": "\"با سلام، خانم نصرت فاطمه نقوی درخواستی مبنی بر اجاره یک قطعه زمین در منطقه توافق شده ارائه داده‌اند تا در آن یک پروژه صنعتی احداث کنند یا از آن برای مقاصد ذخیره‌سازی و اقامتگاه کارگران استفاده کنند. از شما خواهشمندیم اقدامات لازم را مطابق با قوانین و مقررات تعیین شده انجام دهید. احترامات فایقه ما را پذیرا باشید.\"" },
      { "label": "امضاکننده", "value": "احمد عبدالله موسی | دفتر اعلیحضرت حاکم | (ممهور به مهر رسمی مدور دولت دبی / دفتر حاکم)" }
    ]
  },
  "es": {
    "name": "Español",
    "dir": "ltr",
    "docName": "Gobierno de Dubái - Aprobación Oficial de la Corte del Gobernante",
    "lines": [
      { "label": "Encabezado", "value": "Gobierno de Dubái (حكومة دبي) | Fecha: 25 / 12 / 1976" },
      { "label": "Para", "value": "Respetado Director del Municipio de Dubái, Dubái" },
      { "label": "Contenido", "value": "\"Saludos, La Sra. Nusrat Fatima Naqvi ha presentado una solicitud para el arrendamiento de un terreno en el área acordada, con el fin de establecer un proyecto industrial o usarlo para fines de almacenamiento y alojamiento de trabajadores. Se le solicita amablemente que tome las medidas necesarias de acuerdo con las reglas y regulaciones establecidas. Por favor, acepte nuestra más alta consideración y respeto.\"" },
      { "label": "Firmante", "value": "Ahmad Abdullah Al-Moosa | Oficina de S.A. el Gobernante (مكتب سمو الحاكم) | (Sello circular oficial del Gobierno de Dubái / Oficina del Gobernante adherido)" }
    ]
  }
};

const data = JSON.parse(fs.readFileSync('documents_data.json', 'utf8'));
const docIndex = data.findIndex(d => d.id === docId);

if (docIndex !== -1) {
  data[docIndex].translations = newTranslations;
  data[docIndex].category = 'business'; 
  fs.writeFileSync('documents_data.json', JSON.stringify(data, null, 2));
  console.log("Updated doc_163 successfully");
} else {
  console.log("Doc not found");
}
