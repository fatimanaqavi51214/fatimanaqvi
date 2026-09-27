const fs = require('fs');
const file = 'E:/2.maan-jee-website/documents_data.json';
const data = JSON.parse(fs.readFileSync(file, 'utf8'));
const docIndex = data.findIndex(d => d.id === 'doc_199');

if (docIndex !== -1) {
  data[docIndex].imageUrl = 'https://res.cloudinary.com/b7xbeztp/image/upload/v1790360755/image199.jpg';
  data[docIndex].translations = {
    ur: {
      name: 'اردو',
      dir: 'rtl',
      docName: 'پبلک اسٹیبلشمنٹ فار ہاؤسنگ شام – تصدیقِ رقبہ رہائش گاہ',
      lines: [
        { label: 'Details', value: 'جمہوریہ عربیہ سوریہ (شام) - پبلک اسٹیبلشمنٹ فار ہاؤسنگ (المؤسسة العامة للإسكان)' },
        { label: 'نمبر', value: '8184 / ...' },
        { label: 'تاریخ', value: 'دسمبر 2011ء' },
        { label: 'بخدمت جناب', value: 'محافظہ دمشق (صوبائی انتظامیہ دمشق)' },
        { label: 'Details', value: 'درخواست / مکتوب نمبر 3119/و۔ع بتاریخ 30 نومبر 2011ء کے حوالے سے، جو کہ محترمہ نصرت فاطمہ نقوی کی جانب سے عمارت نمبر 7/1 واقع دمشق الجدیدہ (نیو دمشق) میں فلیٹ/رہائش گاہ نمبر 1 کے رقبے کی باضابطہ تصدیق کے لیے پیش کی گئی تھی۔ ہم درج ذیل تفصیل بیان کرتے ہیں: مذکورہ رہائشی فلیٹ کا کل رقبہ 114 مربع میٹر (ایک سو چودہ مربع میٹر) ہے اور یہ عمارت کے دوسرے تہہ خانے (سیکنڈ بیسمنٹ / القبو الثاني) میں واقع ہے۔ برائے مطلع و ملاحظہ فرمائیں۔' },
        { label: 'دستخط کنندہ', value: 'ڈائریکٹر جنرل، پبلک اسٹیبلشمنٹ فار ہاؤسنگ - انجینئر سہیل عبد اللطیف (دستخط شدہ اور سرکاری مہر ثبت ہے)' }
      ]
    },
    en: {
      name: 'English',
      dir: 'ltr',
      docName: 'Public Establishment for Housing Syria – Area Confirmation',
      lines: [
        { label: 'Details', value: 'Syrian Arab Republic - Public Establishment for Housing (المؤسسة العامة للإسكان)' },
        { label: 'Number', value: '8184 / ...' },
        { label: 'Date', value: '2011 / 12 / ...' },
        { label: 'Addressed To', value: 'Damascus Governorate (إلى محافظة دمشق)' },
        { label: 'Details', value: 'With reference to letter No. 3119/W.A. dated 30/11/2011, submitted by Mrs. Nusrat Fatima Naqvi, requesting specification of the area of residence No. 1 in Building 7/1, located in the New Damascus (دمشق الجديدة) area. We hereby state the following: The area of the aforementioned residential apartment is 114 m² (one hundred and fourteen square meters), and it is located on the second basement level (القبو الثاني). Kindly be informed.' },
        { label: 'Signatory', value: 'Director General of the Public Establishment for Housing - Eng. Suhail Abdul Latif (Signed & Officially Stamped)' }
      ]
    },
    ar: {
      name: 'العربية',
      dir: 'rtl',
      docName: 'المؤسسة العامة للإسكان سوريا – تصديق مساحة المسكن',
      lines: [
        { label: 'تفاصيل', value: 'الجمهورية العربية السورية - المؤسسة العامة للإسكان' },
        { label: 'الرقم', value: '8184 / ...' },
        { label: 'التاريخ', value: '2011 / 12 / ...' },
        { label: 'إلى', value: 'محافظة دمشق' },
        { label: 'تفاصيل', value: 'إشارة إلى الكتاب رقم 3119/و.ع تاريخ 30/11/2011 المقدم من السيدة نصرت فاطمة نقوي، بطلب بيان مساحة المسكن رقم 1 في البناء 7/1 الكائن في منطقة دمشق الجديدة. نبين ما يلي: مساحة الشقة السكنية المذكورة هي 114 م² (مائة وأربعة عشر متراً مربعاً)، وتقع في القبو الثاني. يرجى الاطلاع.' },
        { label: 'الموقع', value: 'المدير العام للمؤسسة العامة للإسكان - المهندس سهيل عبد اللطيف (موقع وممهور بخاتم رسمي)' }
      ]
    },
    fa: {
      name: 'فارسی',
      dir: 'rtl',
      docName: 'سازمان عمومی مسکن سوریه – تأییدیه مساحت مسکن',
      lines: [
        { label: 'جزئیات', value: 'جمهوری عربی سوریه - سازمان عمومی مسکن (المؤسسة العامة للإسكان)' },
        { label: 'شماره', value: '8184 / ...' },
        { label: 'تاریخ', value: '2011 / 12 / ...' },
        { label: 'گیرنده', value: 'استانداری دمشق (إلى محافظة دمشق)' },
        { label: 'جزئیات', value: 'با اشاره به نامه شماره 3119/و.ع مورخ 30/11/2011 ارائه شده توسط خانم نصرت فاطمه نقوی، مبنی بر درخواست تعیین مساحت مسکن شماره 1 در ساختمان 7/1 واقع در منطقه دمشق الجدیده. بدینوسیله موارد زیر را اعلام می‌داریم: مساحت آپارتمان مسکونی مذکور 114 متر مربع (یکصد و چهارده متر مربع) می‌باشد و در زیرزمین دوم (القبو الثاني) قرار دارد. جهت استحضار.' },
        { label: 'امضاکننده', value: 'مدیرکل سازمان عمومی مسکن - مهندس سهیل عبداللطیف (امضا و مهر رسمی)' }
      ]
    },
    es: {
      name: 'Español',
      dir: 'ltr',
      docName: 'Establecimiento Público de Vivienda Siria – Confirmación de Área',
      lines: [
        { label: 'Detalles', value: 'República Árabe Siria - Establecimiento Público de Vivienda (المؤسسة العامة للإسكان)' },
        { label: 'Número', value: '8184 / ...' },
        { label: 'Fecha', value: '2011 / 12 / ...' },
        { label: 'Dirigido A', value: 'Gobernación de Damasco (إلى محافظة دمشق)' },
        { label: 'Detalles', value: 'En referencia a la carta No. 3119/W.A. de fecha 30/11/2011, presentada por la Sra. Nusrat Fatima Naqvi, solicitando la especificación del área de la residencia No. 1 en el Edificio 7/1, ubicado en el área de Nueva Damasco (دمشق الجديدة). Por la presente declaramos lo siguiente: El área del apartamento residencial mencionado es de 114 m² (ciento catorce metros cuadrados), y está ubicado en el segundo sótano (القبو الثاني). Para su información.' },
        { label: 'Firmante', value: 'Director General del Establecimiento Público de Vivienda - Ing. Suhail Abdul Latif (Firmado y Sellado Oficialmente)' }
      ]
    }
  };
  fs.writeFileSync(file, JSON.stringify(data, null, 2));
  console.log('Successfully updated doc_199');
} else {
  console.log('Error: doc_199 not found');
}
