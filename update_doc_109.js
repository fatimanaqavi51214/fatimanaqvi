const fs = require('fs');

const docId = 'doc_109';

const newTranslations = {
  "ur": {
    "name": "اردو",
    "dir": "rtl",
    "docName": "وزارتِ امورِ اسلامیہ (ابوظہبی) کا خط - مسجد اور فلاحی مرکز (کاپی 1)",
    "lines": [
      { "label": "تفصیلات", "value": "متحدہ عرب امارات - وزارتِ امورِ اسلامیہ و اوقاف، ابوظہبی۔" },
      { "label": "تاریخ", "value": "31 جولائی 1979۔" },
      { "label": "بنام", "value": "ڈائریکٹر محکمہ سٹی پلاننگ، ابوظہبی۔" },
      { "label": "مضمون", "value": "آپ کو مطلع کیا جاتا ہے کہ محترمہ نصرت نقوی بنت سید محمد نقوی نے الشہامہ کے علاقے میں (مکانات نمبر 558 سے 566 کے سامنے) ایک مسجد اور ایک کمپلیکس تعمیر کرنے کی درخواست دی ہے، جس میں کارکنوں کی رہائش، وضو خانہ، خواتین کے لیے نماز کی جگہ، حفظِ قرآن کا مرکز اور کمپلیکس کی چار دیواری شامل ہے۔ ہم امید کرتے ہیں کہ آپ متعلقہ محکمے کو مذکورہ علاقے میں 400 ضرب 400 فٹ زمین مختص کرنے کی ہدایت جاری کریں گے۔" },
      { "label": "دستخط", "value": "(وزارتِ امورِ اسلامیہ و اوقاف کے انڈر سیکرٹری کی مہر اور دستخط کے ساتھ)۔" }
    ]
  },
  "en": {
    "name": "English",
    "dir": "ltr",
    "docName": "Ministry of Islamic Affairs (Abu Dhabi) Letter - Mosque & Welfare Center (Copy 1)",
    "lines": [
      { "label": "Details", "value": "United Arab Emirates - Ministry of Islamic Affairs and Endowments, Abu Dhabi." },
      { "label": "Date", "value": "31 / 07 / 1979." },
      { "label": "To", "value": "Mr. Director of Town Planning Department, Abu Dhabi." },
      { "label": "Content", "value": "Please be informed that Mrs. Nusrat Naqvi bint Syed Muhammad Naqvi has applied to us to build a mosque and a complex containing accommodation for workers, an ablution area, a prayer hall for women, a Quran memorization center, and a wall around the complex in the Al-Shahama area facing houses numbered (558 to 566). We hope you will kindly instruct the competent authority to allocate a plot of land measuring 400 x 400 feet in the aforementioned area." },
      { "label": "Signature", "value": "(Signed and stamped by the Undersecretary of the Ministry of Islamic Affairs and Endowments)." }
    ]
  },
  "ar": {
    "name": "العربية",
    "dir": "rtl",
    "docName": "رسالة وزارة الشؤون الإسلامية (أبوظبي) - مسجد ومركز خيري (نسخة 1)",
    "lines": [
      { "label": "تفاصيل", "value": "الإمارات العربية المتحدة - وزارة الشؤون الإسلامية والأوقاف، أبوظبي." },
      { "label": "التاريخ", "value": "31 / 07 / 1979." },
      { "label": "إلى", "value": "السيد مدير دائرة تخطيط المدن، أبوظبي." },
      { "label": "المضمون", "value": "نعلمكم بأن السيدة نصرت نقوي بنت سيد محمد نقوي قد تقدمت إلينا بطلب لبناء مسجد ومجمع يضم سكناً للعمال، ومكاناً للوضوء، ومصلى للنساء، ومركزاً لتحفيظ القرآن، وسوراً حول المجمع في منطقة الشهامة مقابل المنازل المرقمة (558 إلى 566). نأمل منكم التفضل بتوجيه الجهة المختصة بتخصيص قطعة أرض بمساحة 400 × 400 قدم في المنطقة المذكورة." },
      { "label": "التوقيع", "value": "(موقع ومختوم من قبل وكيل وزارة الشؤون الإسلامية والأوقاف)." }
    ]
  },
  "fa": {
    "name": "فارسی",
    "dir": "rtl",
    "docName": "نامه وزارت امور اسلامی (ابوظبی) - مسجد و مرکز خیریه (نسخه ۱)",
    "lines": [
      { "label": "جزئیات", "value": "امارات متحده عربی - وزارت امور اسلامی و اوقاف، ابوظبی." },
      { "label": "تاریخ", "value": "۳۱ / ۰۷ / ۱۹۷۹." },
      { "label": "به", "value": "مدیر اداره شهرسازی، ابوظبی." },
      { "label": "مضمون", "value": "به اطلاع می‌رساند که خانم نصرت نقوی فرزند سید محمد نقوی برای ساخت یک مسجد و مجتمعی شامل محل اسکان کارگران، وضوخانه، نمازخانه بانوان، مرکز حفظ قرآن و دیواری در اطراف مجتمع در منطقه الشهامه روبروی خانه‌های شماره (۵۵۸ تا ۵۶۶) به ما درخواست داده است. امیدواریم به مقام ذیصلاح دستور دهید تا قطعه زمینی به مساحت ۴۰۰ در ۴۰۰ فوت در منطقه مذکور تخصیص دهند." },
      { "label": "امضا", "value": "(با امضا و مهر معاون وزارت امور اسلامی و اوقاف)." }
    ]
  },
  "es": {
    "name": "Español",
    "dir": "ltr",
    "docName": "Carta del Ministerio de Asuntos Islámicos (Abu Dabi) - Mezquita y Centro de Bienestar (Copia 1)",
    "lines": [
      { "label": "Detalles", "value": "Emiratos Árabes Unidos - Ministerio de Asuntos Islámicos y Dotaciones, Abu Dabi." },
      { "label": "Fecha", "value": "31 / 07 / 1979." },
      { "label": "Para", "value": "Sr. Director del Departamento de Planificación Urbana, Abu Dabi." },
      { "label": "Contenido", "value": "Le informamos que la Sra. Nusrat Naqvi bint Syed Muhammad Naqvi ha solicitado construir una mezquita y un complejo que contiene alojamiento para trabajadores, un área de ablución, una sala de oración para mujeres, un centro de memorización del Corán y un muro alrededor del complejo en el área de Al-Shahama frente a las casas numeradas (558 a 566). Esperamos que tenga a bien instruir a la autoridad competente para asignar una parcela de tierra de 400 x 400 pies en el área mencionada." },
      { "label": "Firma", "value": "(Firmado y sellado por el Subsecretario del Ministerio de Asuntos Islámicos y Dotaciones)." }
    ]
  }
};

const data = JSON.parse(fs.readFileSync('documents_data.json', 'utf8'));
const docIndex = data.findIndex(d => d.id === docId);

if (docIndex !== -1) {
  data[docIndex].translations = newTranslations;
  data[docIndex].category = 'business'; 
  fs.writeFileSync('documents_data.json', JSON.stringify(data, null, 2));
  console.log("Updated doc_109 successfully");
} else {
  console.log("Doc not found");
}
