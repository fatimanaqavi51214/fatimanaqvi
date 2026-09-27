const fs = require('fs');

const docId = 'doc_081';

const newTranslations = {
  "ur": {
    "name": "اردو",
    "dir": "rtl",
    "docName": "یوکرین کے نوٹری کی تصدیقی دستاویز (ترجمے کی تصدیق)",
    "lines": [
      { "label": "دستاویز", "value": "یوکرین کے شہر دونیتسک سے جاری کردہ ترجمے کی نوٹری تصدیق." },
      { "label": "مضمون", "value": "حلف یافتہ مترجم اے او سوکینا کے کیے گئے انگریزی سے یوکرینی زبان کے ترجمے کی درستگی کی تصدیق." },
      { "label": "تاریخ", "value": "13 اگست 2013." },
      { "label": "Details", "value": "(پرائیویٹ نوٹری ایویرینا ییوھینیا اناتولیونا کے دستخط اور مہر کے ساتھ)." }
    ]
  },
  "en": {
    "name": "English",
    "dir": "ltr",
    "docName": "Ukrainian Notary Certification (Translation Verification)",
    "lines": [
      { "label": "Document", "value": "Notarial Certification of Translation issued in Donetsk, Ukraine." },
      { "label": "Content", "value": "Certifying the accuracy of the English-to-Ukrainian translation performed by sworn translator A.O. Sorokina." },
      { "label": "Date", "value": "August 13, 2013." },
      { "label": "Details", "value": "(Signed and sealed by Private Notary Avera Yevhenia Anatoliivna)." }
    ]
  },
  "ar": {
    "name": "العربية",
    "dir": "rtl",
    "docName": "شهادة كاتب العدل الأوكراني (تصديق ترجمة)",
    "lines": [
      { "label": "الوثيقة", "value": "شهادة كاتب عدل لترجمة صادرة في دونيتسك، أوكرانيا." },
      { "label": "المضمون", "value": "التصديق على دقة الترجمة من الإنجليزية إلى الأوكرانية التي أجرتها المترجمة المحلفة أ. و. سوروكين." },
      { "label": "التاريخ", "value": "13 أغسطس 2013." },
      { "label": "تفاصيل", "value": "(موقعة ومختومة من قبل كاتب العدل الخاص أفيرا يفهينيا أناتوليفنا)." }
    ]
  },
  "fa": {
    "name": "فارسی",
    "dir": "rtl",
    "docName": "گواهی دفتر اسناد رسمی اوکراین (تأییدیه ترجمه)",
    "lines": [
      { "label": "سند", "value": "گواهی سردفتر اسناد رسمی برای ترجمه صادر شده در دونتسک، اوکراین." },
      { "label": "مضمون", "value": "تأیید صحت ترجمه انگلیسی به اوکراینی انجام شده توسط مترجم رسمی آ. او. سوروکینا." },
      { "label": "تاریخ", "value": "۱۳ اوت ۲۰۱۳." },
      { "label": "جزئیات", "value": "(با امضا و مهر سردفتر خصوصی آورا یوهنیا آناتولیونا)." }
    ]
  },
  "es": {
    "name": "Español",
    "dir": "ltr",
    "docName": "Certificación Notarial Ucraniana (Verificación de Traducción)",
    "lines": [
      { "label": "Documento", "value": "Certificación Notarial de Traducción emitida en Donetsk, Ucrania." },
      { "label": "Contenido", "value": "Certificación de la precisión de la traducción del inglés al ucraniano realizada por la traductora jurada A.O. Sorokina." },
      { "label": "Fecha", "value": "13 de agosto de 2013." },
      { "label": "Detalles", "value": "(Firmado y sellado por la Notaria Privada Avera Yevhenia Anatoliivna)." }
    ]
  }
};

const data = JSON.parse(fs.readFileSync('documents_data.json', 'utf8'));
const docIndex = data.findIndex(d => d.id === docId);

if (docIndex !== -1) {
  data[docIndex].translations = newTranslations;
  data[docIndex].category = 'personal'; 
  fs.writeFileSync('documents_data.json', JSON.stringify(data, null, 2));
  console.log("Updated doc_081 successfully");
} else {
  console.log("Doc not found");
}
