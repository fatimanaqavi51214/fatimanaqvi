const fs = require('fs');

const docId = 'doc_095';

const newTranslations = {
  "ur": {
    "name": "اردو",
    "dir": "rtl",
    "docName": "شامی عدالت کا فیصلہ برائے تثبییتِ بیع (پراپرٹی نمبر 286)",
    "lines": [
      { "label": "Details", "value": "شامی عرب جمہوریہ - وزارتِ عدل - بابيلا عدالت." },
      { "label": "دستاویز", "value": "خرید و فروخت کی تصدیق کا عدالتی فیصلہ (تثبيت بيع)." },
      { "label": "مدعی", "value": "نصرت فاطمہ دختر سید محمد نقوی (ممثلہ وکیل خلیل ظریف)." },
      { "label": "مدعی علیہ", "value": "مرتضی الوییس." },
      { "label": "موضوع", "value": "قبر السٹ کے علاقے میں پراپرٹی نمبر 286 کے حصص کی خریداری کی تصدیق اور ریئل اسٹیٹ رجسٹر میں مدعی کے نام پر اس کی رجسٹریشن کا حکم." },
      { "label": "Details", "value": "(عدالت کے صدر اور اسسٹنٹ کے دستخط کے ساتھ)." }
    ]
  },
  "en": {
    "name": "English",
    "dir": "ltr",
    "docName": "Syrian Court Ruling for Sale Confirmation (Property No. 286)",
    "lines": [
      { "label": "Details", "value": "Syrian Arab Republic - Ministry of Justice - Babila Court." },
      { "label": "Document", "value": "Court Ruling for Confirmation of Sale (تثبيت بيع)." },
      { "label": "Plaintiff", "value": "Nusrat Fatima, d/o Syed Muhammad Naqvi (represented by lawyer Khalil Zuraif)." },
      { "label": "Defendant", "value": "Morteza Al-Uwais." },
      { "label": "Subject", "value": "Confirmation of purchase of fractional shares from property no. 286 in Qabr Al-Sit region, and ordering the registration of the property in the real estate registry in the name of the plaintiff." },
      { "label": "Details", "value": "(Signed by the President and Assistant of the Court)." }
    ]
  },
  "ar": {
    "name": "العربية",
    "dir": "rtl",
    "docName": "قرار محكمة سورية بتثبيت بيع (العقار رقم 286)",
    "lines": [
      { "label": "تفاصيل", "value": "الجمهورية العربية السورية - وزارة العدل - محكمة ببيلا." },
      { "label": "الوثيقة", "value": "قرار محكمة بتثبيت بيع." },
      { "label": "الجهة المدعية", "value": "نصرت فاطمة، ابنة سيد محمد نقوي (يمثلها المحامي خليل ظريف)." },
      { "label": "الجهة المدعى عليها", "value": "مرتضى العويس." },
      { "label": "الموضوع", "value": "تثبيت شراء الحصص السهمية من العقار رقم 286 في منطقة قبر الست، والأمر بتسجيل العقار في السجل العقاري باسم الجهة المدعية." },
      { "label": "تفاصيل", "value": "(موقع من قبل رئيس المحكمة والمساعد)." }
    ]
  },
  "fa": {
    "name": "فارسی",
    "dir": "rtl",
    "docName": "حکم دادگاه سوریه برای تثبیت فروش (ملک شماره ۲۸۶)",
    "lines": [
      { "label": "جزئیات", "value": "جمهوری عربی سوریه - وزارت دادگستری - دادگاه ببیلا." },
      { "label": "سند", "value": "حکم دادگاه برای تأیید فروش (تثبیت بیع)." },
      { "label": "خواهان", "value": "نصرت فاطمه، فرزند سید محمد نقوی (با وکالت خلیل ظریف)." },
      { "label": "خوانده", "value": "مرتضی العویس." },
      { "label": "موضوع", "value": "تأیید خرید سهام خرد از ملک شماره ۲۸۶ در منطقه قبر الست، و دستور ثبت ملک در دفتر املاک و مستغلات به نام خواهان." },
      { "label": "جزئیات", "value": "(با امضای رئیس دادگاه و دستیار)." }
    ]
  },
  "es": {
    "name": "Español",
    "dir": "ltr",
    "docName": "Fallo de Tribunal Sirio para Confirmación de Venta (Propiedad No. 286)",
    "lines": [
      { "label": "Detalles", "value": "República Árabe Siria - Ministerio de Justicia - Tribunal de Babila." },
      { "label": "Documento", "value": "Fallo del Tribunal para Confirmación de Venta (تثبيت بيع)." },
      { "label": "Demandante", "value": "Nusrat Fatima, hija de Syed Muhammad Naqvi (representada por el abogado Khalil Zuraif)." },
      { "label": "Demandado", "value": "Morteza Al-Uwais." },
      { "label": "Asunto", "value": "Confirmación de compra de acciones fraccionarias de la propiedad no. 286 en la región de Qabr Al-Sit, y ordenando el registro de la propiedad en el registro de bienes raíces a nombre del demandante." },
      { "label": "Detalles", "value": "(Firmado por el Presidente y el Asistente del Tribunal)." }
    ]
  }
};

const data = JSON.parse(fs.readFileSync('documents_data.json', 'utf8'));
const docIndex = data.findIndex(d => d.id === docId);

if (docIndex !== -1) {
  data[docIndex].translations = newTranslations;
  data[docIndex].category = 'property'; 
  fs.writeFileSync('documents_data.json', JSON.stringify(data, null, 2));
  console.log("Updated doc_095 successfully");
} else {
  console.log("Doc not found");
}
