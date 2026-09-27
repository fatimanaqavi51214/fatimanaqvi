const fs = require('fs');

const docId = 'doc_149';

const newTranslations = {
  "ur": {
    "name": "اردو",
    "dir": "rtl",
    "docName": "دستی رسید و معاہدۂ فسخ",
    "lines": [
      { "label": "عنوان", "value": "بسمہ تعالیٰ (اللہ کے نام سے)" },
      { "label": "رسید و اقرار نامہ", "value": "\"میں، مسمیٰ حاجی [...] عہدیدار / ذمہ دار سفارت خانہ اسلامی جمہوریہ ایران بمقام دمشق، تصدیق کرتا ہوں کہ رقم ستر ہزار ڈالر ($70,000) بمعہ پندرہ لاکھ شامی لیرا (1,500,000 SYP) (جو کل ملا کر ایک لاکھ ڈالر کے مساوی بنتی ہے)، جو کہ محترمہ نصرت خانم نقوی سے السیدہ زینب میں واقع ریئل اسٹیٹ پلاٹ نمبر 284 کی خریدی گئی زمین کے سودے کی منسوخی / تصفیے کی بابت ہے...\"" },
      { "label": "تاریخ", "value": "12 / 11 / 1404 ہجری شمسی، مطابق 12 اگست 1994ء" },
      { "label": "دستخط کنندگان", "value": "وصول کنندہ / ذمہ دار شخص (دستخط شدہ) | گواہ (شاہد): دستخط شدہ" },
      { "label": "رابطہ نمبرز", "value": "موبائل نمبر: 00989125359462 | نام: حاج ہادی سمنان | فون نمبر: 8892443" }
    ]
  },
  "en": {
    "name": "English",
    "dir": "ltr",
    "docName": "Financial Receipt & Cancellation Settlement",
    "lines": [
      { "label": "Header", "value": "In the Name of God (بسمه تعالی)" },
      { "label": "Receipt Statement", "value": "\"I, the undersigned, Hajji [...] responsible/official at the Embassy of the Islamic Republic of Iran in Damascus, acknowledge receipt of the amount of seventy thousand dollars ($70,000) and one million five hundred thousand Syrian Pounds (1,500,000 SYP) (equivalent in total to one hundred thousand dollars / $100,000), regarding the cancellation/settlement of the transaction of the purchased land of plot No. 284 in Sayyidah Zaynab from Mrs. Nusrat Khanum Naqvi...\"" },
      { "label": "Date", "value": "12 / 11 / 1404 (Hijri Shamsi) corresponding to 12 / 8 / 1994" },
      { "label": "Signatures", "value": "Recipient / Responsible Person (Signed) | Witness (Signed)" },
      { "label": "Contact Details", "value": "Phone No.: 00989125359462 | Name: Hajji Hadi Semnan | Local Phone: 8892443" }
    ]
  },
  "ar": {
    "name": "العربية",
    "dir": "rtl",
    "docName": "إيصال استلام وتسوية فسخ عقد",
    "lines": [
      { "label": "الترويسة", "value": "بسم الله تعالى" },
      { "label": "نص الإيصال", "value": "\"أنا الموقع أدناه، الحاج [...] المسؤول في سفارة جمهورية إيران الإسلامية في دمشق، أقر باستلام مبلغ سبعين ألف دولار (70,000$) ومليون وخمسمائة ألف ليرة سورية (1,500,000 ل.س) (ما يعادل إجمالاً مائة ألف دولار / 100,000$)، وذلك بخصوص فسخ/تسوية معاملة الأرض المشتراة في العقار رقم 284 في السيدة زينب من السيدة نصرت خانم نقوي...\"" },
      { "label": "التاريخ", "value": "12 / 11 / 1404 (هجري شمسي) الموافق 12 / 8 / 1994" },
      { "label": "التواقيع", "value": "المستلم / الشخص المسؤول (موقع) | الشاهد (موقع)" },
      { "label": "تفاصيل الاتصال", "value": "رقم الهاتف: 00989125359462 | الاسم: حاج هادي سمنان | الهاتف المحلي: 8892443" }
    ]
  },
  "fa": {
    "name": "فارسی",
    "dir": "rtl",
    "docName": "رسید مالی و تسویه فسخ معامله",
    "lines": [
      { "label": "سربرگ", "value": "بسمه تعالی" },
      { "label": "متن رسید", "value": "\"اینجانب امضاکننده زیر، حاجی [...] مسئول در سفارت جمهوری اسلامی ایران در دمشق، بدین‌وسیله دریافت مبلغ هفتاد هزار دلار (۷۰,۰۰۰$) و یک میلیون و پانصد هزار لیره سوریه (۱,۵۰۰,۰۰۰ لیره) (معادل مجموعاً یکصد هزار دلار / ۱۰۰,۰۰۰$) را بابت فسخ/تسویه معامله زمین خریداری شده در پلاک شماره ۲۸۴ در سیده زینب از خانم نصرت خانم نقوی تأیید می‌نمایم...\"" },
      { "label": "تاریخ", "value": "۱۲ / ۱۱ / ۱۴۰۴ (هجری شمسی) مصادف با ۱۲ / ۸ / ۱۹۹۴" },
      { "label": "امضاها", "value": "گیرنده / شخص مسئول (امضا شده) | شاهد (امضا شده)" },
      { "label": "اطلاعات تماس", "value": "شماره تلفن: ۰۰۹۸۹۱۲۵۳۵۹۴۶۲ | نام: حاج هادی سمنان | تلفن محلی: ۸۸۹۲۴۴۳" }
    ]
  },
  "es": {
    "name": "Español",
    "dir": "ltr",
    "docName": "Recibo Financiero y Liquidación de Cancelación",
    "lines": [
      { "label": "Encabezado", "value": "En el Nombre de Dios (بسمه تعالی)" },
      { "label": "Declaración del Recibo", "value": "\"Yo, el abajo firmante, Hajji [...] funcionario/responsable en la Embajada de la República Islámica de Irán en Damasco, acuso recibo de la cantidad de setenta mil dólares ($70,000) y un millón quinientas mil Libras Sirias (1,500,000 SYP) (equivalente en total a cien mil dólares / $100,000), con respecto a la cancelación/liquidación de la transacción de la tierra comprada del lote No. 284 en Sayyidah Zaynab de la Sra. Nusrat Khanum Naqvi...\"" },
      { "label": "Fecha", "value": "12 / 11 / 1404 (Hijri Shamsi) correspondiente al 12 / 8 / 1994" },
      { "label": "Firmas", "value": "Receptor / Persona Responsable (Firmado) | Testigo (Firmado)" },
      { "label": "Detalles de Contacto", "value": "Nº de Teléfono: 00989125359462 | Nombre: Hajji Hadi Semnan | Teléfono Local: 8892443" }
    ]
  }
};

const data = JSON.parse(fs.readFileSync('documents_data.json', 'utf8'));
const docIndex = data.findIndex(d => d.id === docId);

if (docIndex !== -1) {
  data[docIndex].translations = newTranslations;
  data[docIndex].category = 'property'; 
  fs.writeFileSync('documents_data.json', JSON.stringify(data, null, 2));
  console.log("Updated doc_149 successfully");
} else {
  console.log("Doc not found");
}
