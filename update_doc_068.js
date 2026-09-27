const fs = require('fs');

const docId = 'doc_068';

const newTranslations = {
  "ur": {
    "name": "اردو",
    "dir": "rtl",
    "docName": "شامی محکمہ جنرل انٹیلی جنس کا خط (رہائشی اجازت نامہ)",
    "lines": [
      { "label": "Details", "value": "شامی عرب جمہوریہ - جنرل انٹیلی جنس ڈائریکٹوریٹ - برانچ 300." },
      { "label": "تاریخ", "value": "11 جولائی 2000." },
      { "label": "بنام", "value": "برانچ ہجرت محافظہ دمشق." },
      { "label": "موضوع", "value": "پاکستانی قومیت کی حامل نصرت چوہدری نقوی، ان کے والد سید محمد، والدہ مہر بانو، اور ان کے بچے جاوید، ہاجرہ، اور جواد حیدر." },
      { "label": "مضمون", "value": "انہیں مطلوبہ رہائشی کارڈ جاری کرنے کی منظوری دی جاتی ہے." },
      { "label": "Details", "value": "(جنرل انٹیلی جنس ڈائریکٹوریٹ کے ڈائریکٹر کے دستخط اور مہر)." }
    ]
  },
  "en": {
    "name": "English",
    "dir": "ltr",
    "docName": "Letter from Syrian General Intelligence (Residency Approval)",
    "lines": [
      { "label": "Details", "value": "Syrian Arab Republic - General Intelligence Directorate - Branch 300." },
      { "label": "Date", "value": "11 / 07 / 2000." },
      { "label": "To", "value": "Damascus Governorate Immigration Branch." },
      { "label": "Subject", "value": "Pakistani national Nusrat Choudhry Naqvi, her father Syed Muhammad, her mother Mehr Bano, and her children Javed, Hajer, and Jawad Haider." },
      { "label": "Content", "value": "Approval to grant them the required residence cards." },
      { "label": "Details", "value": "(Signed and stamped by the Director of General Intelligence Directorate)." }
    ]
  },
  "ar": {
    "name": "العربية",
    "dir": "rtl",
    "docName": "رسالة من المخابرات العامة السورية (موافقة إقامة)",
    "lines": [
      { "label": "تفاصيل", "value": "الجمهورية العربية السورية - إدارة المخابرات العامة - الفرع 300." },
      { "label": "التاريخ", "value": "11 / 07 / 2000." },
      { "label": "إلى", "value": "فرع الهجرة في محافظة دمشق." },
      { "label": "الموضوع", "value": "المواطنة الباكستانية نصرت شودري نقوي، والدها سيد محمد، والدتها مهر بانو، وأبناؤها جاويد وهاجر وجواد حيدر." },
      { "label": "المضمون", "value": "الموافقة على منحهم بطاقات الإقامة المطلوبة." },
      { "label": "تفاصيل", "value": "(موقع ومختوم من قبل مدير إدارة المخابرات العامة)." }
    ]
  },
  "fa": {
    "name": "فارسی",
    "dir": "rtl",
    "docName": "نامه اداره اطلاعات عمومی سوریه (تأییدیه اقامت)",
    "lines": [
      { "label": "جزئیات", "value": "جمهوری عربی سوریه - اداره اطلاعات عمومی - شعبه ۳۰۰." },
      { "label": "تاریخ", "value": "۱۱ / ۰۷ / ۲۰۰۰." },
      { "label": "به", "value": "شعبه مهاجرت استانداری دمشق." },
      { "label": "موضوع", "value": "تبعه پاکستانی نصرت چوهدری نقوی، پدرش سید محمد، مادرش مهر بانو و فرزندانش جاوید، هاجر و جواد حیدر." },
      { "label": "مضمون", "value": "تأیید برای اعطای کارت‌های اقامت مورد نیاز به آن‌ها." },
      { "label": "جزئیات", "value": "(با امضا و مهر مدیر اداره اطلاعات عمومی)." }
    ]
  },
  "es": {
    "name": "Español",
    "dir": "ltr",
    "docName": "Carta de la Inteligencia General Siria (Aprobación de Residencia)",
    "lines": [
      { "label": "Detalles", "value": "República Árabe Siria - Dirección General de Inteligencia - Rama 300." },
      { "label": "Fecha", "value": "11 / 07 / 2000." },
      { "label": "Para", "value": "Rama de Inmigración de la Gobernación de Damasco." },
      { "label": "Asunto", "value": "Nacional paquistaní Nusrat Choudhry Naqvi, su padre Syed Muhammad, su madre Mehr Bano y sus hijos Javed, Hajer y Jawad Haider." },
      { "label": "Contenido", "value": "Aprobación para otorgarles las tarjetas de residencia requeridas." },
      { "label": "Detalles", "value": "(Firmado y sellado por el Director de la Dirección General de Inteligencia)." }
    ]
  }
};

const data = JSON.parse(fs.readFileSync('documents_data.json', 'utf8'));
const docIndex = data.findIndex(d => d.id === docId);

if (docIndex !== -1) {
  data[docIndex].translations = newTranslations;
  data[docIndex].category = 'residency'; 
  fs.writeFileSync('documents_data.json', JSON.stringify(data, null, 2));
  console.log("Updated doc_068 successfully");
} else {
  console.log("Doc not found");
}
