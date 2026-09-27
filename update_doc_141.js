const fs = require('fs');

const docId = 'doc_141';

const newTranslations = {
  "ur": {
    "name": "اردو",
    "dir": "rtl",
    "docName": "ابوظہبی وزارتِ اوقاف کا مصدقہ ہسپانوی ترجمہ",
    "lines": [
      { "label": "لیٹر ہیڈ", "value": "کے۔ ایم۔ العربی – قانونی و تصدیق شدہ ترجمہ سروسز، بارسلونا، اسپین | عربی ہاتھ کی تحریر: \"وزارة الشؤون الإسلامية والأوقاف، أبو ظبي\"" },
      { "label": "تفصیلات", "value": "متحدہ عرب امارات - وزارتِ اسلامی امور و اوقاف | فون: 323200 | پوسٹ بکس: 2272 – ابوظہبی" },
      { "label": "تاریخ", "value": "31 جولائی 1979ء" },
      { "label": "بخدمت جناب", "value": "محترم ڈائریکٹر صاحب، محکمہ شہری منصوبہ بندی (سٹی پلاننگ ڈپارٹمنٹ)، ابوظہبی" },
      { "label": "مضمون", "value": "آپ کو مطلع کرتے ہوئے ہمیں مسرت ہو رہی ہے کہ محترمہ نصرت نقوی دختر سید محمد نقوی، الشہامہ کے علاقے میں مکانات نمبر 558 تا 566 کے عوض ایک مسجد اور اسلامی مرکز تعمیر کرنے کا ارادہ رکھتی ہیں، جس میں وضو خانہ، ملازمین کی رہائش، خواتین کا مصلیٰ، قرآن کریم کی تدریس کا مدرسہ اور احاطہ شامل ہوگا۔ مندرجہ بالا امور کے پیش نظر، التماس ہے کہ متعلقہ مجاز شعبوں کو مذکورہ بالا علاقے میں 400 × 400 فٹ کے رقبے کا پلاٹ متعین اور مختص کرنے کے احکامات جاری فرمائیں۔" },
      { "label": "دستخط کنندہ", "value": "نمائندہ وزارتِ اوقاف (وزارت اسلامی امور و اوقاف کی باضابطہ مہر ثبت ہے)" },
      { "label": "نقل برائے اطلاع (CC)", "value": "سربراہ شعبہ نگرانی مساجد، ایڈمنسٹریٹو ڈائریکٹر، فائل مسجد، ریکارڈ / آرکائیو" },
      { "label": "قانونی مترجم کی تصدیق", "value": "\"میں، کامل سلیم منصور (مصدقہ قانونی مترجم برائے عربی زبان)، تصدیق کرتا ہوں کہ درج بالا تحریر عربی زبان کی اصل دستاویز کا ہسپانوی زبان میں مکمل اور درست ترجمہ ہے۔ بمقام بارسلونا، بتاریخ 30 اگست 2004ء۔\" (دستخط و مہر قانونی مترجم، بارسلونا)" }
    ]
  },
  "en": {
    "name": "English",
    "dir": "ltr",
    "docName": "Certified Spanish Translation of Abu Dhabi Ministry of Awqaf Document",
    "lines": [
      { "label": "Header", "value": "K.M. al-arabi, s.l. – Sworn Interpretations & Translations, Public Relations, Barcelona | Hand-written note in Arabic: Ministry of Islamic Affairs & Endowments, Abu Dhabi" },
      { "label": "Details", "value": "United Arab Emirates - Ministry of Islamic Affairs and Endowments | Tel: 323200 | P.O. Box: 2272 – Abu Dhabi" },
      { "label": "Date", "value": "31-07-1979" },
      { "label": "To", "value": "His Excellency, Director of the City Planning Department of Abu Dhabi" },
      { "label": "Content", "value": "We are pleased to inform you that Mrs. NUSRAT NAQWI, daughter of Sayed Mohammad Naqvi, intends to build a mosque and a community center comprising an ablution area, workers' residence, a women's prayer section, a Quranic teaching school, and a surrounding enclosure in the Al Shahama area, in exchange for houses numbered 558 to 566. In view of the above, we would be pleased if you would instruct the competent services to demarcate a plot of land measuring 400 x 400 feet in the aforementioned region." },
      { "label": "Signatory", "value": "Representative of the Ministry (Official seal of the Ministry of Islamic Affairs and Endowments affixed)" },
      { "label": "CC", "value": "Head of the Mosque Control Department, Administrative Director, Mosque Case File, Archives" },
      { "label": "Translator Certification", "value": "Mr. Kamel Salim Mansour, Sworn Arabic Translator and Interpreter, certifies that the above is a faithful and complete translation into Spanish of a document drafted in Arabic. Executed in Barcelona on August 30, 2004. (Signed & Stamped)" }
    ]
  },
  "ar": {
    "name": "العربية",
    "dir": "rtl",
    "docName": "ترجمة إسبانية معتمدة لوثيقة وزارة الأوقاف بأبوظبي",
    "lines": [
      { "label": "الترويسة", "value": "كي إم العربي - ترجمة محلفة وعلاقات عامة، برشلونة | ملاحظة بخط اليد: \"وزارة الشؤون الإسلامية والأوقاف، أبو ظبي\"" },
      { "label": "تفاصيل", "value": "الإمارات العربية المتحدة - وزارة الشؤون الإسلامية والأوقاف | هاتف: 323200 | ص.ب: 2272 – أبوظبي" },
      { "label": "التاريخ", "value": "31-07-1979" },
      { "label": "إلى", "value": "سعادة مدير دائرة تخطيط المدن، أبوظبي" },
      { "label": "المضمون", "value": "يسرنا أن نعلمكم بأن السيدة نصرت نقوي ابنة سيد محمد نقوي، تنوي بناء مسجد ومركز اجتماعي يضم مكاناً للوضوء وسكناً للعمال ومصلى للنساء ومدرسة لتعليم القرآن الكريم وسوراً محيطاً في منطقة الشهامة مقابل المنازل المرقمة 558 إلى 566. بناءً على ما سبق، نأمل منكم التفضل بتوجيه الجهات المختصة بتخصيص قطعة أرض بمساحة 400 × 400 قدم في المنطقة المذكورة." },
      { "label": "الموقع", "value": "ممثل الوزارة (ممهور بختم وزارة الشؤون الإسلامية والأوقاف)" },
      { "label": "نسخة إلى", "value": "رئيس قسم مراقبة المساجد، المدير الإداري، ملف المسجد، الأرشيف" },
      { "label": "تصديق المترجم", "value": "\"يشهد السيد كامل سليم منصور، مترجم عربي محلف، أن ما ورد أعلاه هو ترجمة أمينة وكاملة إلى الإسبانية لوثيقة مكتوبة بالعربية. حُررت في برشلونة في 30 أغسطس 2004.\" (موقع ومختوم)" }
    ]
  },
  "fa": {
    "name": "فارسی",
    "dir": "rtl",
    "docName": "ترجمه رسمی اسپانیایی سند وزارت اوقاف ابوظبی",
    "lines": [
      { "label": "سربرگ", "value": "ک.م. العربی - ترجمه رسمی و روابط عمومی، بارسلونا | یادداشت دست‌نویس عربی: \"وزارة الشؤون الإسلامية والأوقاف، أبو ظبي\"" },
      { "label": "جزئیات", "value": "امارات متحده عربی - وزارت امور اسلامی و اوقاف | تلفن: ۳۲۳۲۰۰ | صندوق پستی: ۲۲۷۲ – ابوظبی" },
      { "label": "تاریخ", "value": "۳۱-۰۷-۱۹۷۹" },
      { "label": "به", "value": "جناب مدیر اداره شهرسازی، ابوظبی" },
      { "label": "مضمون", "value": "خوشوقتیم به اطلاع برسانیم که خانم نصرت نقوی فرزند سید محمد نقوی قصد دارد مسجدی و یک مرکز اجتماعی شامل وضوخانه، محل اسکان کارگران، نمازخانه بانوان، مدرسه آموزش قرآن و یک دیوار احاطه‌کننده در منطقه الشهامه در ازای خانه‌های شماره ۵۵۸ تا ۵۶۶ احداث کند. با توجه به موارد فوق، تقاضا داریم به بخش‌های مربوطه دستور دهید تا قطعه زمینی به مساحت ۴۰۰ × ۴۰۰ فوت را در منطقه مذکور تخصیص دهند." },
      { "label": "امضاکننده", "value": "نماینده وزارتخانه (ممهور به مهر رسمی وزارت امور اسلامی و اوقاف)" },
      { "label": "رونوشت به", "value": "رئیس بخش کنترل مساجد، مدیر اداری، پرونده مسجد، آرشیو" },
      { "label": "تأییدیه مترجم", "value": "\"آقای کامل سلیم منصور، مترجم رسمی عربی، گواهی می‌دهد که متن فوق ترجمه دقیق و کامل به زبان اسپانیایی از سندی است که به زبان عربی تنظیم شده است. انجام شده در بارسلونا در ۳۰ اوت ۲۰۰۴.\" (امضا و مهر شده)" }
    ]
  },
  "es": {
    "name": "Español",
    "dir": "ltr",
    "docName": "Traducción Oficial al Español del Documento del Ministerio de Awqaf de Abu Dabi",
    "lines": [
      { "label": "Encabezado", "value": "K.M. al-arabi, s.l. – Traducciones e Interpretaciones Juradas, Relaciones Públicas, Barcelona | Nota manuscrita en árabe: Ministerio de Asuntos Islámicos y Dotaciones, Abu Dabi" },
      { "label": "Detalles", "value": "Emiratos Árabes Unidos - Ministerio de Asuntos Islámicos y Dotaciones | Tel: 323200 | Apartado Postal: 2272 – Abu Dabi" },
      { "label": "Fecha", "value": "31-07-1979" },
      { "label": "Para", "value": "Su Excelencia, Director del Departamento de Planificación Urbana de Abu Dabi" },
      { "label": "Contenido", "value": "Nos complace informarle que la Sra. NUSRAT NAQWI, hija de Sayed Mohammad Naqvi, tiene la intención de construir una mezquita y un centro comunitario que comprende un área de ablución, residencia de trabajadores, una sección de oración para mujeres, una escuela de enseñanza del Corán y un recinto circundante en el área de Al Shahama, a cambio de las casas numeradas del 558 al 566. En vista de lo anterior, nos complacería que instruyera a los servicios competentes para demarcar una parcela de tierra de 400 x 400 pies en la región mencionada." },
      { "label": "Firmante", "value": "Representante del Ministerio (Sello oficial del Ministerio de Asuntos Islámicos y Dotaciones adherido)" },
      { "label": "CC", "value": "Jefe del Departamento de Control de Mezquitas, Director Administrativo, Archivo del Caso de la Mezquita, Archivos" },
      { "label": "Certificación del Traductor", "value": "\"El Sr. Kamel Salim Mansour, Traductor e Intérprete Jurado de Árabe, certifica que lo anterior es una traducción fiel y completa al español de un documento redactado en árabe. Ejecutado en Barcelona el 30 de agosto de 2004.\" (Firmado y Sellado)" }
    ]
  }
};

const data = JSON.parse(fs.readFileSync('documents_data.json', 'utf8'));
const docIndex = data.findIndex(d => d.id === docId);

if (docIndex !== -1) {
  data[docIndex].translations = newTranslations;
  data[docIndex].category = 'business'; 
  fs.writeFileSync('documents_data.json', JSON.stringify(data, null, 2));
  console.log("Updated doc_141 successfully");
} else {
  console.log("Doc not found");
}
