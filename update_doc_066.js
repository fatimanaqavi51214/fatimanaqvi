const fs = require('fs');

const docId = 'doc_066';

const newTranslations = {
  "ur": {
    "name": "اردو",
    "dir": "rtl",
    "docName": "شامی وزارتِ عدل - عدالت کا فیصلہ برائے تثبییتِ بیع",
    "lines": [
      { "label": "Details", "value": "شامی عرب جمہوریہ - وزارتِ عدل - عدالتی فیصلہ." },
      { "label": "مقدمہ کا عنوان", "value": "تثبییتِ بیع (خرید و فروخت کی تصدیق)." },
      { "label": "مدعی", "value": "نصرت فاطمہ نقوی (ممثلہ وکیل یوسف میرو)." },
      { "label": "مدعی علیہ", "value": "خالد بن عزت (ممتل وکیل خلیل ظریف)." },
      { "label": "فیصلہ", "value": "عدالت حکم دیتی ہے کہ مدعی (نصرت فاطمہ) کی طرف سے دمشق کے گردونواح کے علاقے قبر السٹ میں واقع پراپرٹی نمبر 460 کی خریداری درست ہے اور اسے ریئل اسٹیٹ رجسٹر میں مدعی کے نام پر منتقل اور درج کیا جائے." },
      { "label": "تاریخ", "value": "22 مارچ 2007." },
      { "label": "Details", "value": "(جج اور اسسٹنٹ کے دستخط اور مہر)." }
    ]
  },
  "en": {
    "name": "English",
    "dir": "ltr",
    "docName": "Syrian Ministry of Justice - Court Ruling for Sale Confirmation",
    "lines": [
      { "label": "Details", "value": "Syrian Arab Republic - Ministry of Justice - Court Ruling." },
      { "label": "Case Title", "value": "Confirmation of Sale (تثبيت بيع)." },
      { "label": "Plaintiff", "value": "Nusrat Fatima Naqvi (represented by lawyer Youssef Mirou)." },
      { "label": "Defendant", "value": "Khaled bin Ezzat (represented by lawyer Khalil Zuraif)." },
      { "label": "Details", "value": "The court rules to confirm the plaintiff's purchase of the fractional shares from property no. 460 in Qabr Al-Sit region, Damascus countryside, and orders the registration of the property in the real estate registry in the name of the plaintiff." },
      { "label": "Date", "value": "22/03/2007." },
      { "label": "Details", "value": "(Signed by the Judge and Assistant)." }
    ]
  },
  "ar": {
    "name": "العربية",
    "dir": "rtl",
    "docName": "وزارة العدل السورية - قرار محكمة بتثبيت بيع",
    "lines": [
      { "label": "تفاصيل", "value": "الجمهورية العربية السورية - وزارة العدل - قرار محكمة." },
      { "label": "عنوان الدعوى", "value": "تثبيت بيع." },
      { "label": "الجهة المدعية", "value": "نصرت فاطمة نقوي (يمثلها المحامي يوسف ميرو)." },
      { "label": "الجهة المدعى عليها", "value": "خالد بن عزت (يمثله المحامي خليل ظريف)." },
      { "label": "القرار", "value": "تقرر المحكمة تثبيت شراء المدعية (نصرت فاطمة) للحصص السهمية من العقار رقم 460 في منطقة قبر الست بريف دمشق، وتأمر بتسجيل العقار في السجل العقاري باسم الجهة المدعية." },
      { "label": "التاريخ", "value": "22/03/2007." },
      { "label": "تفاصيل", "value": "(موقع من قبل القاضي والمساعد)." }
    ]
  },
  "fa": {
    "name": "فارسی",
    "dir": "rtl",
    "docName": "وزارت دادگستری سوریه - حکم دادگاه برای تثبیت بیع",
    "lines": [
      { "label": "جزئیات", "value": "جمهوری عربی سوریه - وزارت دادگستری - حکم دادگاه." },
      { "label": "عنوان پرونده", "value": "تثبیت فروش (تثبيت بيع)." },
      { "label": "خواهان", "value": "نصرت فاطمه نقوی (با وکالت یوسف میرو)." },
      { "label": "خوانده", "value": "خالد بن عزت (با وکالت خلیل ظریف)." },
      { "label": "حکم", "value": "دادگاه حکم به تأیید خرید سهم‌الارث از ملک شماره ۴۶۰ واقع در منطقه قبر الست در حومه دمشق توسط خواهان می‌دهد و دستور ثبت ملک در دفتر املاک و مستغلات به نام خواهان را صادر می‌کند." },
      { "label": "تاریخ", "value": "۲۲/۰۳/۲۰۰۷." },
      { "label": "جزئیات", "value": "(با امضای قاضی و دستیار)." }
    ]
  },
  "es": {
    "name": "Español",
    "dir": "ltr",
    "docName": "Ministerio de Justicia Sirio - Fallo del Tribunal para Confirmación de Venta",
    "lines": [
      { "label": "Detalles", "value": "República Árabe Siria - Ministerio de Justicia - Fallo del Tribunal." },
      { "label": "Título del Caso", "value": "Confirmación de Venta (تثبيت بيع)." },
      { "label": "Demandante", "value": "Nusrat Fatima Naqvi (representada por el abogado Youssef Mirou)." },
      { "label": "Demandado", "value": "Khaled bin Ezzat (representado por el abogado Khalil Zuraif)." },
      { "label": "Fallo", "value": "El tribunal falla para confirmar la compra de la demandante de las acciones fraccionarias de la propiedad no. 460 en la región de Qabr Al-Sit, zona rural de Damasco, y ordena el registro de la propiedad en el registro de bienes raíces a nombre de la demandante." },
      { "label": "Fecha", "value": "22/03/2007." },
      { "label": "Detalles", "value": "(Firmado por el Juez y el Asistente)." }
    ]
  }
};

const data = JSON.parse(fs.readFileSync('documents_data.json', 'utf8'));
const docIndex = data.findIndex(d => d.id === docId);

if (docIndex !== -1) {
  data[docIndex].translations = newTranslations;
  data[docIndex].category = 'property'; 
  fs.writeFileSync('documents_data.json', JSON.stringify(data, null, 2));
  console.log("Updated doc_066 successfully");
} else {
  console.log("Doc not found");
}
