const fs = require('fs');

const docId = 'doc_199';

const newTranslations = {
  "ur": {
    "name": "اردو",
    "dir": "rtl",
    "docName": "پبلک اسٹیبلشمنٹ فار ہاؤسنگ شام – تصدیقِ رقبہ رہائش گاہ",
    "lines": [
      { "label": "سرنامہ", "value": "جمہوریہ عربیہ سوریہ (شام) | پبلک اسٹیبلشمنٹ فار ہاؤسنگ (المؤسسة العامة للإسكان) | نمبر: 8184 / ... | تاریخ: دسمبر 2011ء" },
      { "label": "بخدمت", "value": "بخدمت جناب: محافظہ دمشق (صوبائی انتظامیہ دمشق)" },
      { "label": "متن (حصہ اول)", "value": "\"درخواست / مکتوب نمبر 3119/و۔ع بتاریخ 30 نومبر 2011ء کے حوالے سے، جو کہ محترمہ نصرت فاطمہ نقوی کی جانب سے عمارت نمبر 7/1 واقع دمشق الجدیدہ (نیو دمشق) میں فلیٹ/رہائش گاہ نمبر 1 کے رقبے کی باضابطہ تصدیق کے لیے پیش کی گئی تھی۔ ہم درج ذیل تفصیل بیان کرتے ہیں:\"" },
      { "label": "متن (حصہ دوم)", "value": "\"مذکورہ رہائشی فلیٹ کا کل رقبہ 114 مربع میٹر (ایک سو چودہ مربع میٹر) ہے اور یہ عمارت کے دوسرے تہہ خانے (سیکنڈ بیسمنٹ / القبو الثاني) میں واقع ہے۔ برائے مطلع و ملاحظہ فرمائیں۔\"" },
      { "label": "دستخط کنندہ", "value": "ڈائریکٹر جنرل، پبلک اسٹیبلشمنٹ فار ہاؤسنگ | انجینئر سہیل عبد اللطیف (دستخط شدہ اور سرکاری مہر ثبت ہے)" }
    ]
  },
  "en": {
    "name": "English",
    "dir": "ltr",
    "docName": "Syrian Public Establishment for Housing - Residence Area Certification",
    "lines": [
      { "label": "Header", "value": "Syrian Arab Republic | Public Establishment for Housing (المؤسسة العامة للإسكان) | Number: 8184 / ... | Date: 2011 / 12 / ..." },
      { "label": "To", "value": "Damascus Governorate (إلى محافظة دمشق)" },
      { "label": "Content P1", "value": "\"With reference to letter No. 3119/W.A. dated 30/11/2011, submitted by Mrs. Nusrat Fatima Naqvi, requesting specification of the area of residence No. 1 in Building 7/1, located in the New Damascus (دمشق الجديدة) area. We hereby state the following:\"" },
      { "label": "Content P2", "value": "\"The area of the aforementioned residential apartment is 114 m² (one hundred and fourteen square meters), and it is located on the second basement level (القبو الثاني). Kindly be informed.\"" },
      { "label": "Signatory", "value": "Director General of the Public Establishment for Housing | Eng. Suhail Abdul Latif (Signed & Officially Stamped)" }
    ]
  },
  "ar": {
    "name": "العربية",
    "dir": "rtl",
    "docName": "المؤسسة العامة للإسكان السورية – تصديق مساحة السكن",
    "lines": [
      { "label": "الترويسة", "value": "الجمهورية العربية السورية | المؤسسة العامة للإسكان | الرقم: 8184 / ... | التاريخ: 2011 / 12 / ..." },
      { "label": "إلى", "value": "محافظة دمشق" },
      { "label": "النص (الجزء الأول)", "value": "\"إشارة إلى الكتاب رقم 3119/و.ع تاريخ 30/11/2011، المقدم من السيدة نصرت فاطمة نقوي، المتضمن طلب بيان مساحة المسكن رقم 1 في البناء 7/1 الكائن في منطقة دمشق الجديدة. نبين ما يلي:\"" },
      { "label": "النص (الجزء الثاني)", "value": "\"مساحة الشقة السكنية المذكورة هي 114 م2 (مائة وأربعة عشر متراً مربعاً)، وتقع في القبو الثاني. يرجى الاطلاع.\"" },
      { "label": "الموقع", "value": "المدير العام للمؤسسة العامة للإسكان | المهندس سهيل عبد اللطيف (موقع وممهور بالختم الرسمي)" }
    ]
  },
  "fa": {
    "name": "فارسی",
    "dir": "rtl",
    "docName": "مؤسسه عمومی مسکن سوریه - گواهی متراژ محل اقامت",
    "lines": [
      { "label": "سربرگ", "value": "جمهوری عربی سوریه | مؤسسه عمومی مسکن (المؤسسة العامة للإسكان) | شماره: ۸۱۸۴ / ... | تاریخ: ۲۰۱۱ / ۱۲ / ..." },
      { "label": "به", "value": "استانداری دمشق (محافظة دمشق)" },
      { "label": "متن (بخش اول)", "value": "\"عطف به نامه شماره ۳۱۱۹/و.ع مورخ ۳۰/۱۱/۲۰۱۱، ارائه‌شده توسط خانم نصرت فاطمه نقوی، مبنی بر درخواست تعیین مساحت واحد مسکونی شماره ۱ در ساختمان ۷/۱، واقع در منطقه دمشق جدید (دمشق الجدیدة). بدین‌وسیله موارد زیر را اعلام می‌داریم:\"" },
      { "label": "متن (بخش دوم)", "value": "\"مساحت آپارتمان مسکونی مذکور ۱۱۴ متر مربع (یکصد و چهارده متر مربع) می‌باشد و در زیرزمین دوم (القبو الثانی) واقع شده است. جهت استحضار تقدیم می‌گردد.\"" },
      { "label": "امضاکننده", "value": "مدیر کل مؤسسه عمومی مسکن | مهندس سهیل عبداللطیف (امضا و مهر رسمی شده)" }
    ]
  },
  "es": {
    "name": "Español",
    "dir": "ltr",
    "docName": "Establecimiento Público de Vivienda de Siria - Certificación de Área de Residencia",
    "lines": [
      { "label": "Encabezado", "value": "República Árabe Siria | Establecimiento Público de Vivienda (المؤسسة العامة للإسكان) | Número: 8184 / ... | Fecha: 2011 / 12 / ..." },
      { "label": "A", "value": "Gobernación de Damasco (محافظة دمشق)" },
      { "label": "Contenido P1", "value": "\"Con referencia a la carta No. 3119/W.A. de fecha 30/11/2011, presentada por la Sra. Nusrat Fatima Naqvi, solicitando la especificación del área de la residencia No. 1 en el Edificio 7/1, ubicado en el área de Nueva Damasco (دمشق الجديدة). Por la presente declaramos lo siguiente:\"" },
      { "label": "Contenido P2", "value": "\"El área del mencionado apartamento residencial es de 114 m² (ciento catorce metros cuadrados), y se encuentra en el segundo nivel del sótano (القبو الثاني). Queden debidamente informados.\"" },
      { "label": "Firmante", "value": "Director General del Establecimiento Público de Vivienda | Ing. Suhail Abdul Latif (Firmado y Sellado Oficialmente)" }
    ]
  }
};

const data = JSON.parse(fs.readFileSync('documents_data.json', 'utf8'));
const docIndex = data.findIndex(d => d.id === docId);

if (docIndex !== -1) {
  data[docIndex].translations = newTranslations;
  data[docIndex].imageUrl = "https://res.cloudinary.com/b7xbeztp/image/upload/v1790360755/image199.jpg";
  data[docIndex].category = 'official'; 
  fs.writeFileSync('documents_data.json', JSON.stringify(data, null, 2));
  console.log("Updated doc_199 successfully");
} else {
  console.log("Doc not found");
}
