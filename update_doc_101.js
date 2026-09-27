const fs = require('fs');

const docId = 'doc_101';

const newTranslations = {
  "ur": {
    "name": "اردو",
    "dir": "rtl",
    "docName": "خصوصی مختار نامہ / زمین کے عطیے کا اصل عربی مسودہ (1994)",
    "lines": [
      { "label": "دستاویز", "value": "خصوصی مختار نامہ / عطیہ نامہ (سند توكيل خاص)." },
      { "label": "مختار / وکیل", "value": "نصرت فاطمہ بنت سید محمد نقوی، پاکستانی پاسپورٹ ہولڈر، جو کہ پچھلے مختار ناموں کی بنیاد پر مختلف افراد کی قانونی نمائندہ ہیں." },
      { "label": "موضوع", "value": "بطور مجاز نمائندہ، وہ قبر السٹ میں واقع پراپرٹیز نمبر 282 اور 283 کے کل 2400 میں سے اپنے زیرِ انتظام تمام 400 حصص دمشق میں اسلامی جمہوریہ ایران کے سفارت خانے (سیدہ زینب میں مجمع اہل بیت کے فائدے کے لیے) کو ہدیہ / عطیہ کرتی ہیں۔ یہ ایک مفت اور ناقابلِ واپسی ہبہ (Gift) ہے جس کا کوئی مالی معاوضہ نہیں لیا گیا." },
      { "label": "تاریخ", "value": "26 اپریل 1994." },
      { "label": "Details", "value": "(نصرت فاطمہ کے دستخط اور بابيلا کے نوٹری پبلک کی سرکاری و مالیاتی مہروں کے ساتھ تصدیق شدہ). (نوٹ: یہ دستاویز دراصل ہسپانوی ترجمے والی دستاویز کا اوریجنل عربی مسودہ ہے جس کا ترجمہ سپین میں کروایا گیا تھا)." }
    ]
  },
  "en": {
    "name": "English",
    "dir": "ltr",
    "docName": "Original Arabic Draft of Special POA / Deed of Donation (1994)",
    "lines": [
      { "label": "Document", "value": "Special Power of Attorney / Deed of Donation (سند توكيل خاص)." },
      { "label": "Principal/Agent", "value": "Nusrat Fatima bint Syed Muhammad Naqvi, holding a Pakistani passport, acting as a legal proxy for several individuals based on previous powers of attorney." },
      { "label": "Subject", "value": "As the authorized agent, she formally donates her entire share of 400 shares (out of 2400) from properties nos. 282 and 283 in Qabr Al-Sit, to the Embassy of the Islamic Republic of Iran in Damascus (for the Ahl al-Bayt complex in Sayyida Zainab). This is a free and irrevocable gift without any financial compensation." },
      { "label": "Date", "value": "26 / 04 / 1994." },
      { "label": "Details", "value": "(Signed by Nusrat Fatima and authenticated by the Notary Public in Babila, with financial and administrative stamps at the bottom). (Note: This is the original Arabic document of the Spanish translation translated in Spain)." }
    ]
  },
  "ar": {
    "name": "العربية",
    "dir": "rtl",
    "docName": "النسخة العربية الأصلية لوكالة خاصة / عقد هبة (1994)",
    "lines": [
      { "label": "الوثيقة", "value": "وكالة خاصة / عقد هبة (سند توكيل خاص)." },
      { "label": "الموكل/الوكيل", "value": "نصرت فاطمة بنت سيد محمد نقوي، تحمل جواز سفر باكستاني، وتتصرف كوكيل قانوني لعدة أفراد بناءً على وكالات سابقة." },
      { "label": "الموضوع", "value": "بصفتها الوكيل المفوض، تتبرع رسمياً بكامل حصتها البالغة 400 سهم (من أصل 2400) من العقارين رقم 282 و 283 في قبر الست، إلى سفارة جمهورية إيران الإسلامية في دمشق (لصالح مجمع أهل البيت في السيدة زينب). وهذه هبة مجانية ولا رجعة فيها دون أي مقابل مادي." },
      { "label": "التاريخ", "value": "26 أبريل 1994." },
      { "label": "تفاصيل", "value": "(موقعة من قبل نصرت فاطمة ومصدقة من الكاتب بالعدل في ببيلا، مع أختام مالية وإدارية في الأسفل). (ملاحظة: هذه الوثيقة هي النسخة العربية الأصلية للترجمة الإسبانية التي تمت في إسبانيا)." }
    ]
  },
  "fa": {
    "name": "فارسی",
    "dir": "rtl",
    "docName": "نسخه اصلی عربی وکالت‌نامه خاص / سند اهدا (۱۹۹۴)",
    "lines": [
      { "label": "سند", "value": "وکالت‌نامه خاص / سند اهدا (سند توكيل خاص)." },
      { "label": "موکل/وکیل", "value": "نصرت فاطمه فرزند سید محمد نقوی، دارنده گذرنامه پاکستانی، که بر اساس وکالت‌نامه‌های قبلی به عنوان نماینده قانونی چندین فرد عمل می‌کند." },
      { "label": "موضوع", "value": "به عنوان نماینده مجاز، ایشان رسماً تمام ۴۰۰ سهم خود (از ۲۴۰۰ سهم) از املاک شماره ۲۸۲ و ۲۸۳ در قبر الست را به سفارت جمهوری اسلامی ایران در دمشق (به نفع مجتمع اهل بیت در سیده زینب) اهدا می‌کند. این یک هدیه رایگان و غیرقابل فسخ بدون هیچ‌گونه غرامت مالی است." },
      { "label": "تاریخ", "value": "۲۶ آوریل ۱۹۹۴." },
      { "label": "جزئیات", "value": "(با امضای نصرت فاطمه و تأیید سردفتر اسناد رسمی در ببیلا، همراه با مهرهای مالی و اداری در پایین). (توجه: این سند در واقع نسخه اصلی عربی همان ترجمه اسپانیایی است که در اسپانیا ترجمه شده است)." }
    ]
  },
  "es": {
    "name": "Español",
    "dir": "ltr",
    "docName": "Borrador Original en Árabe del Poder Especial / Escritura de Donación (1994)",
    "lines": [
      { "label": "Documento", "value": "Poder Especial / Escritura de Donación (سند توكيل خاص)." },
      { "label": "Poderdante/Agente", "value": "Nusrat Fatima bint Syed Muhammad Naqvi, titular de un pasaporte paquistaní, actuando como apoderada legal de varias personas en base a poderes notariales previos." },
      { "label": "Asunto", "value": "Como agente autorizada, dona formalmente la totalidad de sus 400 acciones (de 2400) de las propiedades nos. 282 y 283 en Qabr Al-Sit, a la Embajada de la República Islámica de Irán en Damasco (para el complejo Ahl al-Bayt en Sayyida Zainab). Esta es una donación gratuita e irrevocable sin compensación financiera." },
      { "label": "Fecha", "value": "26 de abril de 1994." },
      { "label": "Detalles", "value": "(Firmado por Nusrat Fatima y autenticado por el Notario Público en Babila, con sellos financieros y administrativos en la parte inferior). (Nota: Este documento es el original en árabe de la traducción al español realizada en España)." }
    ]
  }
};

const data = JSON.parse(fs.readFileSync('documents_data.json', 'utf8'));
const docIndex = data.findIndex(d => d.id === docId);

if (docIndex !== -1) {
  data[docIndex].translations = newTranslations;
  data[docIndex].category = 'property'; 
  fs.writeFileSync('documents_data.json', JSON.stringify(data, null, 2));
  console.log("Updated doc_101 successfully");
} else {
  console.log("Doc not found");
}
