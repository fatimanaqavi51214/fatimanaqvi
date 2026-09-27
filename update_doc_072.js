const fs = require('fs');

const docId = 'doc_072';

const newTranslations = {
  "ur": {
    "name": "اردو",
    "dir": "rtl",
    "docName": "شامی وزارتِ عدل - منسوخیِ وکالت نامہ (قانونی نوٹس)",
    "lines": [
      { "label": "Details", "value": "شامی عرب جمہوریہ - وزارتِ عدل - نوٹری پبلک." },
      { "label": "جانب سے نوٹس دہندہ", "value": "نصرت فاطمہ دختر سید محمد نقوی، والدہ مہر بانو، تولد 1958." },
      { "label": "موضوع", "value": "بار ایسوسی ایشن دمشق میں ریکارڈ نمبر 415 مورخہ 05/01/1995 کے تحت درج شدہ پہلے کے تمام وکالت ناموں کی منسوخی." },
      { "label": "مضمون", "value": "اس نوٹس کے ذریعے باضابطہ طور پر اعلان کیا جاتا ہے کہ اس سے قبل دیے گئے تمام وکالت نامے منسوخ تصور ہوں، اور اس تاریخ کے بعد اس پر عمل کرنے والا خود قانونی ذمہ داری اٹھائے گا." },
      { "label": "دستخط", "value": "نصرت فاطمہ." }
    ]
  },
  "en": {
    "name": "English",
    "dir": "ltr",
    "docName": "Syrian Ministry of Justice - Revocation of Power of Attorney",
    "lines": [
      { "label": "Details", "value": "Syrian Arab Republic - Ministry of Justice - Notary Public." },
      { "label": "From the Notifier", "value": "Nusrat Fatima, d/o Syed Muhammad Naqvi, mother Mehr Bano, born in 1958." },
      { "label": "Subject", "value": "Revocation of Power of Attorney (منسوخیِ وکالت نامہ) previously registered at the Bar Association in Damascus under record no. 415 on 05/01/1995." },
      { "label": "Content", "value": "Direct notice to cancel and revoke the aforementioned power of attorney entirely, warning that any action taken under it after this date will carry legal responsibility." },
      { "label": "Signature", "value": "Nusrat Fatima." }
    ]
  },
  "ar": {
    "name": "العربية",
    "dir": "rtl",
    "docName": "وزارة العدل السورية - إلغاء وكالة (إنذار قانوني)",
    "lines": [
      { "label": "تفاصيل", "value": "الجمهورية العربية السورية - وزارة العدل - الكاتب بالعدل." },
      { "label": "من المنذر", "value": "نصرت فاطمة ابنة سيد محمد نقوي، الأم مهر بانو، تولد 1958." },
      { "label": "الموضوع", "value": "عزل وإلغاء وكالة مسجلة سابقاً لدى نقابة المحامين بدمشق تحت رقم السجل 415 بتاريخ 05/01/1995." },
      { "label": "المضمون", "value": "إنذار مباشر لإلغاء وعزل الوكالة المذكورة أعلاه بالكامل، مع التحذير بأن أي إجراء يتم بموجبها بعد هذا التاريخ سيتحمل فاعله المسؤولية القانونية." },
      { "label": "التوقيع", "value": "نصرت فاطمة." }
    ]
  },
  "fa": {
    "name": "فارسی",
    "dir": "rtl",
    "docName": "وزارت دادگستری سوریه - ابطال وکالت‌نامه (اخطار قانونی)",
    "lines": [
      { "label": "جزئیات", "value": "جمهوری عربی سوریه - وزارت دادگستری - سردفتر اسناد رسمی." },
      { "label": "از طرف اخطار دهنده", "value": "نصرت فاطمه فرزند سید محمد نقوی، مادر مهر بانو، متولد ۱۹۵۸." },
      { "label": "موضوع", "value": "ابطال و فسخ وکالت‌نامه‌ای که پیشتر در کانون وکلای دمشق تحت شماره ثبت ۴۱۵ در تاریخ ۰۵/۰۱/۱۹۹۵ به ثبت رسیده است." },
      { "label": "مضمون", "value": "اخطار مستقیم برای لغو و ابطال کامل وکالت‌نامه مذکور، با هشدار به اینکه هرگونه اقدام تحت آن پس از این تاریخ، مسئولیت قانونی در پی خواهد داشت." },
      { "label": "امضا", "value": "نصرت فاطمه." }
    ]
  },
  "es": {
    "name": "Español",
    "dir": "ltr",
    "docName": "Ministerio de Justicia Sirio - Revocación de Poder (Aviso Legal)",
    "lines": [
      { "label": "Detalles", "value": "República Árabe Siria - Ministerio de Justicia - Notario Público." },
      { "label": "Del Notificante", "value": "Nusrat Fatima, hija de Syed Muhammad Naqvi, madre Mehr Bano, nacida en 1958." },
      { "label": "Asunto", "value": "Revocación de Poder (عزل وكالة) registrado previamente en el Colegio de Abogados de Damasco bajo el número de registro 415 el 05/01/1995." },
      { "label": "Contenido", "value": "Aviso directo para cancelar y revocar el poder mencionado en su totalidad, advirtiendo que cualquier acción tomada bajo el mismo después de esta fecha conllevará responsabilidad legal." },
      { "label": "Firma", "value": "Nusrat Fatima." }
    ]
  }
};

const data = JSON.parse(fs.readFileSync('documents_data.json', 'utf8'));
const docIndex = data.findIndex(d => d.id === docId);

if (docIndex !== -1) {
  data[docIndex].translations = newTranslations;
  data[docIndex].category = 'personal'; 
  fs.writeFileSync('documents_data.json', JSON.stringify(data, null, 2));
  console.log("Updated doc_072 successfully");
} else {
  console.log("Doc not found");
}
