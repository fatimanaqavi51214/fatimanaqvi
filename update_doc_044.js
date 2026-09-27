const fs = require('fs');

const docId = 'doc_044';

const newTranslations = {
  "ur": {
    "name": "اردو",
    "dir": "rtl",
    "docName": "وزارتِ امورِ اسلامیہ (ابوظہبی) کا خط",
    "lines": [
      { "label": "Details", "value": "متحدہ عرب امارات - وزارتِ امورِ اسلامیہ و اوقاف، ابوظہبی" },
      { "label": "تاریخ", "value": "31 جولائی 1979" },
      { "label": "بنام", "value": "عزت مآب ڈائریکٹر محکمہ سٹی پلاننگ، ابوظہبی" },
      { "label": "Details", "value": "ہمیں یہ بتاتے ہوئے خوشی ہو رہی ہے کہ محترمہ نصرت نقوی دختر سید محمد نقوی، الشہامہ کے علاقے میں (مکانات نمبر 558 سے 566 کے عوض) ایک مسجد اور مرکز کی تعمیر کا ارادہ رکھتی ہیں، جس میں وضو خانہ، کارکنوں کی رہائش، خواتین کے لیے نماز کا حصہ، قرآن سکھانے کا سکول اور احاطہ شامل ہے۔\n\nلہذا، ہم شکر گزار ہوں گے اگر آپ متعلقہ محکموں کو مذکورہ علاقے میں 400x400 فٹ زمین مختص کرنے کی ہدایت جاری کریں۔" },
      { "label": "Details", "value": "(بارسلونا کے حلف یافتہ مترجم کامل سلیم منصور کی تصدیق شدہ ترجمہ کاپی، مورخہ 30 اگست 2004)" }
    ]
  },
  "en": {
    "name": "English",
    "dir": "ltr",
    "docName": "Letter from Ministry of Islamic Affairs (Abu Dhabi)",
    "lines": [
      { "label": "Details", "value": "United Arab Emirates - Ministry of Islamic Affairs and Endowments, Abu Dhabi" },
      { "label": "Date", "value": "31-07-1979" },
      { "label": "To", "value": "H.E. Director of the City Planning Department of Abu Dhabi" },
      { "label": "Details", "value": "We are pleased to inform you that Mrs. Nusrat Naqwi, daughter of Sayed Mohammad Naqvi, proposes to build a mosque and a center consisting of an ablution hall, workers' residence, women's prayer section, Quran teaching school, and a surrounding fence in the Al-Chahameh region, in exchange for houses numbered 558 to 566.\n\nTherefore, we would appreciate it if you could instruct the competent departments to allocate a land of 400x400 feet in the aforementioned region." },
      { "label": "Details", "value": "(Certified translation by Kamel Salim Mansour, sworn translator in Barcelona, dated August 30, 2004)" }
    ]
  },
  "ar": {
    "name": "العربية",
    "dir": "rtl",
    "docName": "رسالة من وزارة الشؤون الإسلامية (أبو ظبي)",
    "lines": [
      { "label": "تفاصيل", "value": "الإمارات العربية المتحدة - وزارة الشؤون الإسلامية والأوقاف، أبو ظبي" },
      { "label": "التاريخ", "value": "31-07-1979" },
      { "label": "إلى", "value": "سعادة مدير إدارة تخطيط المدن في أبو ظبي" },
      { "label": "تفاصيل", "value": "يسرنا إبلاغكم بأن السيدة نصرت نقوي، ابنة السيد محمد نقوي، تعتزم بناء مسجد ومركز يتكون من قاعة للوضوء، وسكن للعمال، وقسم صلاة للنساء، ومدرسة لتعليم القرآن الكريم، وسور محيط في منطقة الشهامة، مقابل المنازل من رقم 558 إلى 566.\n\nلذا، نكون شاكرين لو تفضلتم بتوجيه الإدارات المختصة لتخصيص قطعة أرض مساحتها 400×400 قدم في المنطقة المذكورة." },
      { "label": "تفاصيل", "value": "(نسخة مترجمة ومصدقة من قبل المترجم المحلف كامل سليم منصور في برشلونة، بتاريخ 30 أغسطس 2004)" }
    ]
  },
  "fa": {
    "name": "فارسی",
    "dir": "rtl",
    "docName": "نامه از وزارت امور اسلامی (ابوظبی)",
    "lines": [
      { "label": "جزئیات", "value": "امارات متحده عربی - وزارت امور اسلامی و اوقاف، ابوظبی" },
      { "label": "تاریخ", "value": "۳۱-۰۷-۱۹۷۹" },
      { "label": "به", "value": "جناب مدیر اداره برنامه‌ریزی شهری ابوظبی" },
      { "label": "جزئیات", "value": "با کمال مسرت به اطلاع می‌رسانیم که خانم نصرت نقوی، فرزند سید محمد نقوی، در نظر دارد مسجدی و مرکزی شامل وضوخانه، محل اقامت کارگران، بخش نماز بانوان، مدرسه آموزش قرآن و حصار محیطی در منطقه الشهامه (در ازای خانه‌های شماره ۵۵۸ تا ۵۶۶) بنا کند.\n\nبنابراین، موجب امتنان خواهد بود چنانچه به بخش‌های مربوطه دستور دهید زمینی به مساحت ۴۰۰ در ۴۰۰ فوت در منطقه مذکور اختصاص دهند." },
      { "label": "جزئیات", "value": "(ترجمه تأیید شده توسط کامل سلیم منصور، مترجم رسمی در بارسلونا، مورخ ۳۰ اوت ۲۰۰۴)" }
    ]
  },
  "es": {
    "name": "Español",
    "dir": "ltr",
    "docName": "Carta del Ministerio de Asuntos Islámicos (Abu Dabi)",
    "lines": [
      { "label": "Detalles", "value": "Emiratos Árabes Unidos - Ministerio de Asuntos Islámicos y Dotaciones, Abu Dabi" },
      { "label": "Fecha", "value": "31-07-1979" },
      { "label": "Para", "value": "S.E. Director del Departamento de Planificación Urbana de Abu Dabi" },
      { "label": "Detalles", "value": "Nos complace informarle que la Sra. Nusrat Naqwi, hija del Sr. Sayed Mohammad Naqvi, propone construir una mezquita y un centro que consta de una sala de abluciones, residencia para trabajadores, sección de oración para mujeres, escuela de enseñanza del Corán y un cerco perimetral en la región de Al-Chahameh, a cambio de las casas numeradas del 558 al 566.\n\nPor lo tanto, le agradeceríamos que instruyera a los departamentos competentes para asignar un terreno de 400x400 pies en la región mencionada." },
      { "label": "Detalles", "value": "(Traducción certificada por Kamel Salim Mansour, traductor jurado en Barcelona, fechada el 30 de agosto de 2004)" }
    ]
  }
};

const data = JSON.parse(fs.readFileSync('documents_data.json', 'utf8'));
const docIndex = data.findIndex(d => d.id === docId);

if (docIndex !== -1) {
  data[docIndex].translations = newTranslations;
  data[docIndex].category = 'embassy'; 
  fs.writeFileSync('documents_data.json', JSON.stringify(data, null, 2));
  console.log("Updated doc_044 successfully");
} else {
  console.log("Doc not found");
}
