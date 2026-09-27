const fs = require('fs');

const docId = 'doc_097';

const newTranslations = {
  "ur": {
    "name": "اردو",
    "dir": "rtl",
    "docName": "سپیشل پاور آف اٹارنی کا ہسپانوی ترجمہ",
    "lines": [
      { "label": "دستاویز", "value": "سپیشل پاور آف اٹارنی (خصوصی مختار نامہ)." },
      { "label": "مختار / وکیل", "value": "محترمہ نصرت فاطمہ نقوی (پاکستانی، پیدائش 1958، پاسپورٹ نمبر 278276K)، جو کہ پرانے مختار ناموں کی بنیاد پر جائیداد کے دیگر مالکان کی طرف سے بطور مجاز نمائندہ (Proxy) کام کر رہی ہیں." },
      { "label": "موضوع", "value": "قبر السٹ کے علاقے میں واقع پراپرٹیز نمبر 282 اور 283 کے کل 2400 میں سے 400 حصص کو دمشق میں اسلامی جمہوریہ ایران کے سفارت خانے (سیدہ زینب میں آلِ رسول کے فائدے کے لیے) کو بلا معاوضہ اور ناقابلِ تنسیخ طور پر ہدیہ / عطیہ کرنا." },
      { "label": "تاریخ", "value": "26 اپریل 1994." },
      { "label": "Details", "value": "(بارسلونا کے حلف یافتہ مترجم کامل سلیم منصور کی تصدیق شدہ کاپی، مورخہ 3 اگست 2004)." }
    ]
  },
  "en": {
    "name": "English",
    "dir": "ltr",
    "docName": "Spanish Translation of Special Power of Attorney",
    "lines": [
      { "label": "Document", "value": "Special Power of Attorney (Poder Especial)." },
      { "label": "Principal/Proxy", "value": "Mrs. Nusrat Fatima Naqvi (Pakistani national, born 1958, passport no. 278276K issued on 26-09-1996), acting as an authorized proxy for multiple property owners based on prior powers of attorney." },
      { "label": "Subject", "value": "Irrevocably donating 400 shares (out of 2400) of properties nos. 282 and 283 located in the Qabr Al-Sit (Kabr Essit) real estate region to the Embassy of the Islamic Republic of Iran in Damascus (for the benefit of the descendants of the Prophet in Sayyida Zainab) as a free gift without financial compensation." },
      { "label": "Date", "value": "April 26, 1994." },
      { "label": "Details", "value": "(Certified translation by Kamel Salim Mansour in Barcelona, dated August 3, 2004)." }
    ]
  },
  "ar": {
    "name": "العربية",
    "dir": "rtl",
    "docName": "ترجمة إسبانية لوكالة خاصة",
    "lines": [
      { "label": "الوثيقة", "value": "وكالة خاصة." },
      { "label": "الموكل/الوكيل", "value": "السيدة نصرت فاطمة نقوي (مواطنة باكستانية، تولد 1958، جواز سفر رقم 278276K صادر في 26-09-1996)، تتصرف كوكيل مفوض عن العديد من مالكي العقارات بناءً على وكالات سابقة." },
      { "label": "الموضوع", "value": "هبة لا رجعة فيها لـ 400 سهم (من أصل 2400) من العقارين رقم 282 و 283 الواقعة في منطقة قبر الست العقارية إلى سفارة جمهورية إيران الإسلامية في دمشق (لصالح آل البيت في السيدة زينب) كهدية مجانية دون مقابل مادي." },
      { "label": "التاريخ", "value": "26 أبريل 1994." },
      { "label": "تفاصيل", "value": "(نسخة مترجمة ومصدقة من قبل المترجم المحلف كامل سلیم منصور في برشلونة، بتاريخ 3 أغسطس 2004)." }
    ]
  },
  "fa": {
    "name": "فارسی",
    "dir": "rtl",
    "docName": "ترجمه اسپانیایی وکالت‌نامه خاص",
    "lines": [
      { "label": "سند", "value": "وکالت‌نامه خاص (پاور آف اتورنی ویژه)." },
      { "label": "موکل/وکیل", "value": "خانم نصرت فاطمه نقوی (تبعه پاکستان، متولد ۱۹۵۸، گذرنامه شماره ۲۷۸۲۷۶K صادره در ۲۶-۰۹-۱۹۹۶)، که بر اساس وکالت‌نامه‌های قبلی به عنوان نماینده مجاز از طرف مالکان متعدد ملک عمل می‌کند." },
      { "label": "موضوع", "value": "اهدای غیرقابل فسخ ۴۰۰ سهم (از ۲۴۰۰ سهم) از املاک شماره ۲۸۲ و ۲۸۳ واقع در منطقه ملکی قبر الست به سفارت جمهوری اسلامی ایران در دمشق (به نفع خاندان پیامبر در سیده زینب) به عنوان یک هدیه رایگان بدون غرامت مالی." },
      { "label": "تاریخ", "value": "۲۶ آوریل ۱۹۹۴." },
      { "label": "جزئیات", "value": "(نسخه ترجمه شده و تأیید شده توسط کامل سلیم منصور، مترجم رسمی در بارسلونا، مورخ ۳ اوت ۲۰۰۴)." }
    ]
  },
  "es": {
    "name": "Español",
    "dir": "ltr",
    "docName": "Traducción al Español del Poder Especial",
    "lines": [
      { "label": "Documento", "value": "Poder Especial." },
      { "label": "Poderdante/Apoderado", "value": "Sra. Nusrat Fatima Naqvi (nacional paquistaní, nacida en 1958, pasaporte no. 278276K emitido el 26-09-1996), actuando como apoderada autorizada de múltiples propietarios en base a poderes notariales previos." },
      { "label": "Asunto", "value": "Donar irrevocablemente 400 acciones (de 2400) de las propiedades nos. 282 y 283 ubicadas en la región inmobiliaria de Qabr Al-Sit (Kabr Essit) a la Embajada de la República Islámica de Irán en Damasco (para beneficio de los descendientes del Profeta en Sayyida Zainab) como una donación gratuita sin compensación financiera." },
      { "label": "Fecha", "value": "26 de abril de 1994." },
      { "label": "Detalles", "value": "(Traducción certificada por Kamel Salim Mansour en Barcelona, fechada el 3 de agosto de 2004)." }
    ]
  }
};

const data = JSON.parse(fs.readFileSync('documents_data.json', 'utf8'));
const docIndex = data.findIndex(d => d.id === docId);

if (docIndex !== -1) {
  data[docIndex].translations = newTranslations;
  data[docIndex].category = 'property'; 
  fs.writeFileSync('documents_data.json', JSON.stringify(data, null, 2));
  console.log("Updated doc_097 successfully");
} else {
  console.log("Doc not found");
}
