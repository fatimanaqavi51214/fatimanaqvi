const fs = require('fs');

const docId = 'doc_023';

const newTranslations = {
  "ur": {
    "name": "اردو",
    "dir": "rtl",
    "docName": "شامی سندِ اقامہ - سیدہ زینب (1998)",
    "lines": [
      { "label": "Details", "value": "شامی عرب جمہوریہ - وزارتِ داخلہ" },
      { "label": "دستاویز", "value": "سند اقامہ (رہائشی سرٹیفکیٹ)" },
      { "label": "حلفیہ بیان", "value": "میں، جس کے دستخط ذیل میں ہیں، نصرت فاطمہ نقوی بنت سید محمد... پیدائش کراچی 1958، اقرار کرتی ہوں کہ میں فی الحال قصبہ سیدہ زینب، الدردارہ سٹریٹ، نقوی بلڈنگ (بناية نقوي) کے پہلے فلور پر مقیم ہوں۔" },
      { "label": "تاریخ", "value": "29 اپریل 1998" },
      { "label": "Details", "value": "(اس پر سیدہ زینب کے مختار اور محکمہ پولیس کی تصدیقی مہریں ہیں)۔ (نوٹ: اس سرٹیفکیٹ میں واضح طور پر رہائش کی جگہ \"نقوی بلڈنگ\" لکھی ہے، جو سیدہ زینب میں ان کی ذاتی جائیداد کو ثابت کرنے کا ایک اور دستاویزی ثبوت ہے)۔" }
    ]
  },
  "en": {
    "name": "English",
    "dir": "ltr",
    "docName": "Syrian Residence Certificate - Sayyida Zainab (1998)",
    "lines": [
      { "label": "Details", "value": "Syrian Arab Republic - Ministry of Interior" },
      { "label": "Document", "value": "Residence Certificate (سند إقامة)" },
      { "label": "Declaration", "value": "I, the undersigned, Nusrat Fatima Naqvi bin Syed Muhammad... born in Karachi 1958, declare that I currently reside in the town of Sayyida Zainab, Al-Dardara street, Naqvi Building (بناية نقوي), first floor." },
      { "label": "Date", "value": "29 April 1998" },
      { "label": "Details", "value": "(Authenticated by the Mukhtar of Sayyida Zainab town and Police Directorate)\n(Note: This certificate explicitly states the place of residence as \"Naqvi Building\", providing further documentary evidence of their personal property in Sayyida Zainab.)" }
    ]
  },
  "ar": {
    "name": "العربية",
    "dir": "rtl",
    "docName": "سند إقامة سوري - السيدة زينب (1998)",
    "lines": [
      { "label": "تفاصيل", "value": "الجمهورية العربية السورية - وزارة الداخلية" },
      { "label": "الوثيقة", "value": "سند إقامة" },
      { "label": "إقرار", "value": "أنا الموقع أدناه، نصرت فاطمة نقوي بنت سيد محمد... تولد كراتشي 1958، أقر بأنني أقيم حالياً في بلدة السيدة زينب، شارع الدردارة، بناية نقوي، الطابق الأول." },
      { "label": "التاريخ", "value": "29 نيسان/أبريل 1998" },
      { "label": "تفاصيل", "value": "(يحمل أختام التصديق من مختار بلدة السيدة زينب ومديرية الشرطة)\n(ملاحظة: تنص هذه الشهادة صراحةً على أن مكان الإقامة هو \"بناية نقوي\"، مما يوفر دليلاً وثائقياً إضافياً على ملكيتهم الخاصة في السيدة زينب.)" }
    ]
  },
  "fa": {
    "name": "فارسی",
    "dir": "rtl",
    "docName": "گواهی اقامت سوریه - سیده زینب (۱۹۹۸)",
    "lines": [
      { "label": "جزئیات", "value": "جمهوری عربی سوریه - وزارت کشور" },
      { "label": "سند", "value": "گواهی اقامت (سند إقامة)" },
      { "label": "اظهاریه", "value": "اینجانب امضاکننده زیر، نصرت فاطمه نقوی بنت سید محمد... متولد کراچی ۱۹۵۸، گواهی می‌دهم که در حال حاضر در شهرک سیده زینب، خیابان الدرداره، ساختمان نقوی (بناية نقوي)، طبقه اول ساکن هستم." },
      { "label": "تاریخ", "value": "۲۹ آوریل ۱۹۹۸" },
      { "label": "جزئیات", "value": "(دارای مهرهای تأیید مختار شهرک سیده زینب و اداره پلیس است)\n(توجه: این گواهی به صراحت محل سکونت را \"ساختمان نقوی\" ذکر می‌کند که مدرک مستند دیگری بر مالکیت شخصی آن‌ها در سیده زینب است.)" }
    ]
  },
  "es": {
    "name": "Español",
    "dir": "ltr",
    "docName": "Certificado de Residencia Siria - Sayyida Zainab (1998)",
    "lines": [
      { "label": "Detalles", "value": "República Árabe Siria - Ministerio del Interior" },
      { "label": "Documento", "value": "Certificado de Residencia (سند إقامة)" },
      { "label": "Declaración", "value": "Yo, el abajo firmante, Nusrat Fatima Naqvi bin Syed Muhammad... nacido en Karachi 1958, declaro que resido actualmente en la ciudad de Sayyida Zainab, calle Al-Dardara, Edificio Naqvi (بناية نقوي), primer piso." },
      { "label": "Fecha", "value": "29 de abril de 1998" },
      { "label": "Detalles", "value": "(Autenticado por el Mukhtar de la ciudad de Sayyida Zainab y la Dirección de Policía)\n(Nota: Este certificado indica explícitamente el lugar de residencia como \"Edificio Naqvi\", proporcionando más evidencia documental de su propiedad personal en Sayyida Zainab.)" }
    ]
  }
};

const data = JSON.parse(fs.readFileSync('documents_data.json', 'utf8'));
const docIndex = data.findIndex(d => d.id === docId);

if (docIndex !== -1) {
  data[docIndex].translations = newTranslations;
  data[docIndex].category = 'residency'; 
  fs.writeFileSync('documents_data.json', JSON.stringify(data, null, 2));
  console.log("Updated doc_023 successfully");
} else {
  console.log("Doc not found");
}
