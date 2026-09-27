const fs = require('fs');

const docId = 'doc_062';

const newTranslations = {
  "ur": {
    "name": "اردو",
    "dir": "rtl",
    "docName": "حتمی بیع نامہ (عقد بيع قطعي - شام، 1996)",
    "lines": [
      { "label": "دستاویز", "value": "حتمی بیع نامہ (عقد بيع قطعي)۔" },
      { "label": "فریقِ اول", "value": "فروخت کنندہ (دمشق کا رہائشی)۔" },
      { "label": "فریقِ دوم (خریدار)", "value": "نصرت فاطمہ نقوی دختر سید محمد، والدہ مہر بانو، پیدائش کراچی 1958، مقیم مزہ جبل، دمشق۔" },
      { "label": "موضوع", "value": "سیدہ زینب میں واقع زمین کے ایک ٹکڑے کی باضابطہ اور حتمی خرید و فروخت کا معاہدہ۔" },
      { "label": "تاریخ", "value": "20 نومبر 1996۔" },
      { "label": "Details", "value": "(فریقین اور گواہوں کے دستخط کے ساتھ)۔" }
    ]
  },
  "en": {
    "name": "English",
    "dir": "ltr",
    "docName": "Final Sales Contract (Syria, 1996)",
    "lines": [
      { "label": "Document", "value": "Final Sales Contract (عقد بيع قطعي)." },
      { "label": "First Party", "value": "Seller from Damascus." },
      { "label": "Second Party", "value": "Nusrat Fatima Naqvi, daughter of Syed Muhammad, mother Mehr Bano, born in Karachi 1958, residing in Mezzeh Jabal, Damascus." },
      { "label": "Subject", "value": "Final purchase of a verified plot of land in Sayyida Zainab for a specified amount in Syrian Pounds." },
      { "label": "Date", "value": "20 / 11 / 1996." },
      { "label": "Details", "value": "(Signed by both parties and witnesses)." }
    ]
  },
  "ar": {
    "name": "العربية",
    "dir": "rtl",
    "docName": "عقد بيع قطعي (سوريا، 1996)",
    "lines": [
      { "label": "الوثيقة", "value": "عقد بيع قطعي." },
      { "label": "الطرف الأول", "value": "البائع من دمشق." },
      { "label": "الطرف الثاني (المشتري)", "value": "نصرت فاطمة نقوي، ابنة سيد محمد، الأم مهر بانو، تولد كراتشي 1958، مقيمة في مزة جبل، دمشق." },
      { "label": "الموضوع", "value": "شراء نهائي لقطعة أرض تم التحقق منها في السيدة زينب مقابل مبلغ محدد بالليرات السورية." },
      { "label": "التاريخ", "value": "20 / 11 / 1996." },
      { "label": "تفاصيل", "value": "(موقع من قبل الطرفين والشهود)." }
    ]
  },
  "fa": {
    "name": "فارسی",
    "dir": "rtl",
    "docName": "قرارداد فروش قطعی (سوریه، ۱۹۹۶)",
    "lines": [
      { "label": "سند", "value": "قرارداد فروش قطعی (عقد بيع قطعي)." },
      { "label": "طرف اول", "value": "فروشنده از دمشق." },
      { "label": "طرف دوم (خریدار)", "value": "نصرت فاطمه نقوی، فرزند سید محمد، مادر مهر بانو، متولد کراچی ۱۹۵۸، مقیم مزه جبل، دمشق." },
      { "label": "موضوع", "value": "خرید نهایی یک قطعه زمین تأیید شده در سیده زینب در ازای مبلغ مشخصی به لیره سوریه." },
      { "label": "تاریخ", "value": "۲۰ / ۱۱ / ۱۹۹۶." },
      { "label": "جزئیات", "value": "(با امضای طرفین و شاهدان)." }
    ]
  },
  "es": {
    "name": "Español",
    "dir": "ltr",
    "docName": "Contrato de Venta Final (Siria, 1996)",
    "lines": [
      { "label": "Documento", "value": "Contrato de Venta Final (عقد بيع قطعي)." },
      { "label": "Primera Parte", "value": "Vendedor de Damasco." },
      { "label": "Segunda Parte", "value": "Nusrat Fatima Naqvi, hija de Syed Muhammad, madre Mehr Bano, nacida en Karachi 1958, residente en Mezzeh Jabal, Damasco." },
      { "label": "Asunto", "value": "Compra final de una parcela verificada en Sayyida Zainab por una cantidad especificada en Libras Sirias." },
      { "label": "Fecha", "value": "20 / 11 / 1996." },
      { "label": "Detalles", "value": "(Firmado por ambas partes y testigos)." }
    ]
  }
};

const data = JSON.parse(fs.readFileSync('documents_data.json', 'utf8'));
const docIndex = data.findIndex(d => d.id === docId);

if (docIndex !== -1) {
  data[docIndex].translations = newTranslations;
  data[docIndex].category = 'property'; 
  fs.writeFileSync('documents_data.json', JSON.stringify(data, null, 2));
  console.log("Updated doc_062 successfully");
} else {
  console.log("Doc not found");
}
