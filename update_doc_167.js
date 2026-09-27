const fs = require('fs');

const docId = 'doc_167';

const newTranslations = {
  "ur": {
    "name": "اردو",
    "dir": "rtl",
    "docName": "حکومتِ شارجہ - دیوان امیری کا دفتری مراسلہ",
    "lines": [
      { "label": "سربراہ", "value": "حکومتِ شارجہ – الدیوان الامیری (دیوانِ حاکمِ شارجہ) | پوسٹ بکس نمبر 1 – شارجہ | تاریخ: 12 مئی 1976ء" },
      { "label": "بخدمت", "value": "برادرِ محترم: جناب علی بن سالم المزروعی، حفظہ اللہ" },
      { "label": "خط کا متن", "value": "\"سلامِ مسنون کے بعد، اس خط کی حامل خاتون، محترمہ نصرت، دبئی میں فیکٹری کا لائسنس رکھتی ہیں اور وہ اپنی اس فیکٹری کی ایک نئی برانچ شارجہ میں قائم کرنا چاہتی ہیں، یا اپنی فیکٹری یہاں منتقل کرنے کا ارادہ رکھتی ہیں۔ لہٰذا التماس ہے کہ اس ضمن میں جو بھی قانونی اور مناسب کارروائی ہو، وہ عمل میں لائی جائے۔ آپ کے تعاون کے بے حد شکر گزار ہیں۔\"" },
      { "label": "دستخط کنندہ", "value": "احمد [...] / حسن المزروعی (دستخط شدہ) | (حکومت شارجہ کے دیوان امیری کا باضابطہ مونوگرام اور مہر)" }
    ]
  },
  "en": {
    "name": "English",
    "dir": "ltr",
    "docName": "Government of Sharjah - Dewan Al-Amiri Official Missive",
    "lines": [
      { "label": "Header", "value": "Government of Sharjah – Dewan Al-Amiri (Ruler's Court) | P.O. Box 1 – Sharjah | Date: 12 / 5 / 1976" },
      { "label": "Addressed to", "value": "Respected Brother Ali bin Salim Al-Mazroui, May God protect him" },
      { "label": "Letter Content", "value": "\"Greetings, The bearer of this letter, Mrs. Nusrat, holds a factory license in Dubai and wishes to open a new branch of the factory in the Emirate of Sharjah, or transfer the factory here. Therefore, you are kindly requested to take whatever action you deem appropriate in this regard. With many thanks.\"" },
      { "label": "Signatory", "value": "Ahmad [...] / Hassan Al-Mazroui (Signed) | (Official Emblem and letterhead of Dewan Al-Amiri, Government of Sharjah)" }
    ]
  },
  "ar": {
    "name": "العربية",
    "dir": "rtl",
    "docName": "حكومة الشارقة - رسالة رسمية من الديوان الأميري",
    "lines": [
      { "label": "الترويسة", "value": "حكومة الشارقة – الديوان الأميري | ص.ب 1 – الشارقة | التاريخ: 12 / 5 / 1976" },
      { "label": "إلى", "value": "الأخ المحترم علي بن سالم المزروعي، حفظه الله" },
      { "label": "نص الرسالة", "value": "\"تحية طيبة وبعد، حاملة هذا الكتاب السيدة نصرت، تمتلك رخصة مصنع في دبي وترغب في فتح فرع جديد للمصنع في إمارة الشارقة، أو نقل المصنع إلى هنا. لذا نرجو منكم اتخاذ ما ترونه مناسباً من إجراءات بهذا الخصوص. ولكم جزيل الشكر.\"" },
      { "label": "الموقع", "value": "أحمد [...] / حسن المزروعي (موقع) | (الشعار الرسمي والترويسة للديوان الأميري، حكومة الشارقة)" }
    ]
  },
  "fa": {
    "name": "فارسی",
    "dir": "rtl",
    "docName": "دولت شارجه - نامه رسمی دیوان امیری",
    "lines": [
      { "label": "سربرگ", "value": "دولت شارجه - دیوان امیری | صندوق پستی ۱ - شارجه | تاریخ: ۱۲ / ۵ / ۱۹۷۶" },
      { "label": "به", "value": "برادر محترم علی بن سالم المزروعی، حفظه الله" },
      { "label": "متن نامه", "value": "\"با سلام، حامل این نامه خانم نصرت، دارای مجوز کارخانه در دبی هستند و تمایل دارند شعبه جدیدی از کارخانه را در امارت شارجه افتتاح کنند یا کارخانه را به اینجا منتقل نمایند. بنابراین از شما خواهشمندیم هر اقدامی را که در این زمینه مناسب می‌دانید انجام دهید. با تشکر فراوان.\"" },
      { "label": "امضاکننده", "value": "احمد [...] / حسن المزروعی (امضا شده) | (نشان رسمی و سربرگ دیوان امیری، دولت شارجه)" }
    ]
  },
  "es": {
    "name": "Español",
    "dir": "ltr",
    "docName": "Gobierno de Sharjah - Misiva Oficial del Dewan Al-Amiri",
    "lines": [
      { "label": "Encabezado", "value": "Gobierno de Sharjah – Dewan Al-Amiri (Corte del Gobernante) | Apartado Postal 1 – Sharjah | Fecha: 12 / 5 / 1976" },
      { "label": "Dirigido a", "value": "Respetado Hermano Ali bin Salim Al-Mazroui, Que Dios lo proteja" },
      { "label": "Contenido de la Carta", "value": "\"Saludos, La portadora de esta carta, la Sra. Nusrat, posee una licencia de fábrica en Dubái y desea abrir una nueva sucursal de la fábrica en el Emirato de Sharjah, o transferir la fábrica aquí. Por lo tanto, se le solicita amablemente que tome cualquier medida que considere apropiada a este respecto. Con muchas gracias.\"" },
      { "label": "Firmante", "value": "Ahmad [...] / Hassan Al-Mazroui (Firmado) | (Emblema oficial y membrete del Dewan Al-Amiri, Gobierno de Sharjah)" }
    ]
  }
};

const data = JSON.parse(fs.readFileSync('documents_data.json', 'utf8'));
const docIndex = data.findIndex(d => d.id === docId);

if (docIndex !== -1) {
  data[docIndex].translations = newTranslations;
  data[docIndex].category = 'business'; 
  fs.writeFileSync('documents_data.json', JSON.stringify(data, null, 2));
  console.log("Updated doc_167 successfully");
} else {
  console.log("Doc not found");
}
