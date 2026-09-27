const fs = require('fs');

const docId = 'doc_041';

const newTranslations = {
  "ur": {
    "name": "اردو",
    "dir": "rtl",
    "docName": "شامی عدالت کا عدالتی درخواست نامہ",
    "lines": [
      { "label": "Details", "value": "شامی عرب جمہوریہ - وزارتِ عدل" },
      { "label": "بنام", "value": "مقامِ قاضیِ اولِ بدايہ مدنیِ محترم" },
      { "label": "مقدمہ (پیش کرنے والے)", "value": "نصرت فاطمہ اور فواد حیدر (دمشق)" },
      { "label": "موضوع", "value": "وکیل محمد زکی النوری کی تقرری کی منظوری کی درخواست، بغیر کسی حلف یافتہ مترجم کے حضور کے، کیونکہ ہم عربی زبان روانی سے بولتے ہیں۔" },
      { "label": "تاریخ", "value": "یکم اکتوبر 2018" },
      { "label": "Details", "value": "(اس پر سرکاری عدالتی مہریں اور جج کے ریمارکس درج ہیں کہ درخواست گزار عربی زبان روانی سے بولتی ہیں)" }
    ]
  },
  "en": {
    "name": "English",
    "dir": "ltr",
    "docName": "Syrian Court Judicial Application",
    "lines": [
      { "label": "Details", "value": "Syrian Arab Republic - Ministry of Justice" },
      { "label": "To", "value": "The First Judge of the Civil Court of First Instance" },
      { "label": "Applicant", "value": "Nusrat Fatima and Fouad Haider (Damascus)" },
      { "label": "Subject", "value": "Request for approval to appoint lawyer Mr. Muhammad Zaki Al-Nouri without the presence of a sworn translator, given that we speak Arabic fluently." },
      { "label": "Date", "value": "01 / 10 / 2018" },
      { "label": "Details", "value": "(Includes official court stamps and judge's notes confirming fluency in Arabic)" }
    ]
  },
  "ar": {
    "name": "العربية",
    "dir": "rtl",
    "docName": "طلب قضائي للمحكمة السورية",
    "lines": [
      { "label": "تفاصيل", "value": "الجمهورية العربية السورية - وزارة العدل" },
      { "label": "إلى", "value": "مقام قاضي البداية المدنية الأول المحترم" },
      { "label": "مقدم الطلب", "value": "نصرت فاطمة وفؤاد حيدر (دمشق)" },
      { "label": "الموضوع", "value": "طلب الموافقة على توكيل المحامي الأستاذ محمد زكي النوري دون حضور مترجم محلف، نظراً لأننا نتحدث اللغة العربية بطلاقة." },
      { "label": "التاريخ", "value": "01 / 10 / 2018" },
      { "label": "تفاصيل", "value": "(يتضمن أختام المحكمة الرسمية وملاحظات القاضي التي تؤكد الطلاقة في اللغة العربية)" }
    ]
  },
  "fa": {
    "name": "فارسی",
    "dir": "rtl",
    "docName": "درخواست قضایی دادگاه سوریه",
    "lines": [
      { "label": "جزئیات", "value": "جمهوری عربی سوریه - وزارت دادگستری" },
      { "label": "به", "value": "قاضی اول دادگاه بدوی مدنی" },
      { "label": "متقاضی", "value": "نصرت فاطمه و فواد حیدر (دمشق)" },
      { "label": "موضوع", "value": "درخواست تأیید برای تعیین وکیل آقای محمد زکی النوری بدون حضور مترجم قسم‌خورده، با توجه به اینکه ما به زبان عربی مسلط هستیم." },
      { "label": "تاریخ", "value": "۰۱ / ۱۰ / ۲۰۱۸" },
      { "label": "جزئیات", "value": "(شامل مهرهای رسمی دادگاه و یادداشت‌های قاضی مبنی بر تسلط به زبان عربی است)" }
    ]
  },
  "es": {
    "name": "Español",
    "dir": "ltr",
    "docName": "Solicitud Judicial del Tribunal Sirio",
    "lines": [
      { "label": "Detalles", "value": "República Árabe Siria - Ministerio de Justicia" },
      { "label": "Para", "value": "El Primer Juez del Tribunal Civil de Primera Instancia" },
      { "label": "Solicitante", "value": "Nusrat Fatima y Fouad Haider (Damasco)" },
      { "label": "Asunto", "value": "Solicitud de aprobación para nombrar al abogado Sr. Muhammad Zaki Al-Nouri sin la presencia de un traductor jurado, dado que hablamos árabe con fluidez." },
      { "label": "Fecha", "value": "01 / 10 / 2018" },
      { "label": "Detalles", "value": "(Incluye sellos oficiales del tribunal y notas del juez que confirman la fluidez en árabe)" }
    ]
  }
};

const data = JSON.parse(fs.readFileSync('documents_data.json', 'utf8'));
const docIndex = data.findIndex(d => d.id === docId);

if (docIndex !== -1) {
  data[docIndex].translations = newTranslations;
  data[docIndex].category = 'personal'; 
  fs.writeFileSync('documents_data.json', JSON.stringify(data, null, 2));
  console.log("Updated doc_041 successfully");
} else {
  console.log("Doc not found");
}
