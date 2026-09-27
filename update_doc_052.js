const fs = require('fs');

const docId = 'doc_052';

const newTranslations = {
  "ur": {
    "name": "اردو",
    "dir": "rtl",
    "docName": "حتمی بیع نامہ (عقد بيع قطعي - شام)",
    "lines": [
      { "label": "دستاویز", "value": "حتمی بیع نامہ (عقد بيع قطعي)" },
      { "label": "فریقِ اول", "value": "دمشق کا فروخت کنندہ" },
      { "label": "فریقِ دوم (خریدار)", "value": "نصرت فاطمہ دختر سید محمد، والدہ مہر بانو، پیدائش کراچی 1958، مقیم دمشق" },
      { "label": "موضوع", "value": "سیدہ زینب میں واقع زمین کے ٹکڑے (محضر نمبر 44) کی باضابطہ خرید و فروخت کا معاہدہ، طے شدہ شامی پاؤنڈز کی رقم کے عوض" },
      { "label": "تاریخ", "value": "28 فروری 2003" },
      { "label": "Details", "value": "(فریقین اور گواہوں کے دستخط اور سرکاری تصدیق کے ساتھ)" }
    ]
  },
  "en": {
    "name": "English",
    "dir": "ltr",
    "docName": "Final Sales Contract (Syria)",
    "lines": [
      { "label": "Document", "value": "Final Sales Contract (عقد بيع قطعي)" },
      { "label": "First Party", "value": "Selling party from Damascus" },
      { "label": "Second Party", "value": "Nusrat Fatima, daughter of Syed Muhammad, mother Mehr Bano, born in Karachi 1958, residing in Damascus" },
      { "label": "Subject", "value": "Final sale and purchase of a plot of land located in Sayyida Zainab, plot number 44, matching official survey records, for a specified amount in Syrian Pounds" },
      { "label": "Date", "value": "28 / 02 / 2003" },
      { "label": "Details", "value": "(Signed by both parties, witnesses, and authenticated by official authorities)" }
    ]
  },
  "ar": {
    "name": "العربية",
    "dir": "rtl",
    "docName": "عقد بيع قطعي (سوريا)",
    "lines": [
      { "label": "الوثيقة", "value": "عقد بيع قطعي" },
      { "label": "الطرف الأول", "value": "الطرف البائع من دمشق" },
      { "label": "الطرف الثاني (المشتري)", "value": "نصرت فاطمة بنت سيد محمد، الأم مهر بانو، تولد كراتشي 1958، مقيمة في دمشق" },
      { "label": "الموضوع", "value": "عقد بيع وشراء قطعي لقطعة أرض تقع في السيدة زينب، محضر رقم 44، مطابقة للسجلات العقارية الرسمية، مقابل مبلغ محدد بالليرات السورية" },
      { "label": "التاريخ", "value": "28 / 02 / 2003" },
      { "label": "تفاصيل", "value": "(موقع من قبل الطرفين والشهود، ومصدق من الجهات الرسمية)" }
    ]
  },
  "fa": {
    "name": "فارسی",
    "dir": "rtl",
    "docName": "قرارداد فروش قطعی (سوریه)",
    "lines": [
      { "label": "سند", "value": "قرارداد فروش قطعی (عقد بيع قطعي)" },
      { "label": "طرف اول", "value": "طرف فروشنده از دمشق" },
      { "label": "طرف دوم (خریدار)", "value": "نصرت فاطمه فرزند سید محمد، مادر مهر بانو، متولد کراچی ۱۹۵۸، مقیم دمشق" },
      { "label": "موضوع", "value": "خرید و فروش قطعی یک قطعه زمین واقع در سیده زینب، پلاک شماره ۴۴، مطابق با سوابق رسمی ثبت اسناد، در ازای مبلغ مشخصی به لیره سوریه" },
      { "label": "تاریخ", "value": "۲۸ / ۰۲ / ۲۰۰۳" },
      { "label": "جزئیات", "value": "(با امضای طرفین، شاهدان و تأیید مراجع رسمی)" }
    ]
  },
  "es": {
    "name": "Español",
    "dir": "ltr",
    "docName": "Contrato de Venta Final (Siria)",
    "lines": [
      { "label": "Documento", "value": "Contrato de Venta Final (عقد بيع قطعي)" },
      { "label": "Primera Parte", "value": "Parte vendedora de Damasco" },
      { "label": "Segunda Parte", "value": "Nusrat Fatima, hija de Syed Muhammad, madre Mehr Bano, nacida en Karachi 1958, residente en Damasco" },
      { "label": "Asunto", "value": "Compraventa final de una parcela de tierra ubicada en Sayyida Zainab, parcela número 44, que coincide con los registros oficiales de topografía, por una cantidad especificada en Libras Sirias" },
      { "label": "Fecha", "value": "28 / 02 / 2003" },
      { "label": "Detalles", "value": "(Firmado por ambas partes, testigos y autenticado por autoridades oficiales)" }
    ]
  }
};

const data = JSON.parse(fs.readFileSync('documents_data.json', 'utf8'));
const docIndex = data.findIndex(d => d.id === docId);

if (docIndex !== -1) {
  data[docIndex].translations = newTranslations;
  data[docIndex].category = 'property'; 
  fs.writeFileSync('documents_data.json', JSON.stringify(data, null, 2));
  console.log("Updated doc_052 successfully");
} else {
  console.log("Doc not found");
}
