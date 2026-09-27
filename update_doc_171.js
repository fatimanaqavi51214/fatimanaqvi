const fs = require('fs');

const docId = 'doc_171';

const newTranslations = {
  "ur": {
    "name": "اردو",
    "dir": "rtl",
    "docName": "ہسپانوی ترجمہ برائے وزارتِ داخلہ شام",
    "lines": [
      { "label": "سربراہ", "value": "کے۔ ایم۔ العربی – مصدقہ و قانونی مترجمین، بارسلونا، اسپین" },
      { "label": "محکمہ جات", "value": "جمہوریہ عربیہ سوریہ (شام) | وزارتِ داخلہ | ڈپارٹمنٹ آف پولیٹیکل سیکیورٹی (شعبۂ سیاسی تحفظ)" },
      { "label": "کلیئرنس کا متن", "value": "\"آپ کے مکتوب نمبر 102/4/5 بتاریخ 16 اکتوبر 1989ء کے جواب میں مطلع کیا جاتا ہے کہ علاقہ السیدہ زینب میں واقع ریئل اسٹیٹ پلاٹ نمبر 282، 283 اور 284 کی باضابطہ رجسٹریشن اور انتقالِ ملکیت کے ضمن میں کوئی سیاسی یا سیکیورٹی رکاوٹ موجود نہیں ہے، جو کہ پاکستانی شہریت کی حامل محترمہ نصرت فاطمہ دختر سید محمد نقوی کی ملکیت ہیں۔ (اصل عربی دستاویز پر کمانڈر پولیٹیکل سیکیورٹی کے دستخط اور باضابطہ مہر موجود ہے)۔\"" },
      { "label": "قانونی مترجم کی تصدیق", "value": "\"میں، کامل سلیم منصور (مصدقہ قانونی مترجم برائے عربی زبان)، تصدیق کرتا ہوں کہ درج بالا تحریر عربی زبان کی اصل دستاویز کا ہسپانوی زبان میں مکمل اور ہو بہو ترجمہ ہے۔ بمقام بارسلونا، بتاریخ 3 اگست 2004ء۔\" (دستخط و مہر قانونی مترجم، بارسلونا)" },
      { "label": "اردو تحریر (نوٹ)", "value": "\"دمشق میں مختلف نمبر کے پلاٹ کی اجازت ہے۔ سی آئی ڈی دمشق\"" }
    ]
  },
  "en": {
    "name": "English",
    "dir": "ltr",
    "docName": "Spanish Translation for Ministry of Interior Syria",
    "lines": [
      { "label": "Header", "value": "K.M. al-arabi, s.l. – Sworn Interpretations & Translations, Public Relations, Barcelona" },
      { "label": "Departments", "value": "Syrian Arab Republic | Ministry of Interior | Department of Political Security" },
      { "label": "Clearance Text", "value": "\"With reference to your letter No. 102/4/5 dated 16-10-1989, there is no political objection/impediment regarding the registration of the real estate properties numbered 282, 283, and 284, located in the Sayda Zineb (Sayyidah Zaynab) real estate zone, belonging to Mrs. Nusrat Fátima, daughter of Don Sayed Mohamed Naqvi, of Pakistani nationality. (There is a signature of the Commander of the Political Security Department and an official seal).\"" },
      { "label": "Translator’s Certification", "value": "\"Mr. Kamel Salim Mansour, Sworn Arabic Translator and Interpreter, certifies that the above is a faithful and complete translation into Spanish of a document drafted in Arabic. In Barcelona, August 3, 2004.\" (Signed & Stamped by Kamel Salim Mansour, Sworn Translator, Barcelona)" },
      { "label": "Handwritten Note", "value": "\"دمشق میں مختلف نمبر کے پلاٹ کی اجازت ہے۔ سی آئی ڈی دمشق\" (Approval for various numbered plots in Damascus. CID Damascus)" }
    ]
  },
  "ar": {
    "name": "العربية",
    "dir": "rtl",
    "docName": "ترجمة إسبانية لوزارة الداخلية السورية",
    "lines": [
      { "label": "الترويسة", "value": "كي إم العربي – ترجمة محلفة وعلاقات عامة، برشلونة، إسبانيا" },
      { "label": "الإدارات", "value": "الجمهورية العربية السورية | وزارة الداخلية | إدارة الأمن السياسي" },
      { "label": "نص الموافقة", "value": "\"إشارة إلى كتابكم رقم 102/4/5 بتاريخ 16-10-1989، لا يوجد مانع سياسي من تسجيل العقارات أرقام 282، 283، و284 الواقعة في منطقة السيدة زينب العقارية، العائدة للسيدة نصرت فاطمة ابنة السيد محمد نقوي، التي تحمل الجنسية الباكستانية. (يوجد توقيع لقائد إدارة الأمن السياسي وختم رسمي).\"" },
      { "label": "تصديق المترجم القانوني", "value": "\"أشهد أنا كامل سليم منصور، مترجم محلف للغة العربية، أن ما ورد أعلاه هو ترجمة أمينة وكاملة إلى الإسبانية لوثيقة مكتوبة باللغة العربية. في برشلونة، 3 أغسطس 2004.\" (توقيع وختم المترجم المحلف كامل سليم منصور، برشلونة)" },
      { "label": "ملاحظة مكتوبة بخط اليد", "value": "\"موافقة على قطع أراض بأرقام مختلفة في دمشق. الأمن الجنائي بدمشق\"" }
    ]
  },
  "fa": {
    "name": "فارسی",
    "dir": "rtl",
    "docName": "ترجمه اسپانیایی برای وزارت کشور سوریه",
    "lines": [
      { "label": "سربرگ", "value": "ک.م. العربی - ترجمه رسمی و روابط عمومی، بارسلونا، اسپانیا" },
      { "label": "بخش‌ها", "value": "جمهوری عربی سوریه | وزارت کشور | اداره امنیت سیاسی" },
      { "label": "متن ترخیص", "value": "\"عطف به نامه شماره ۱۰۲/۴/۵ مورخ ۱۶-۱۰-۱۹۸۹، هیچ‌گونه ممانعت سیاسی/امنیتی در خصوص ثبت املاک شماره ۲۸۲، ۲۸۳ و ۲۸۴ واقع در منطقه سیده زینب، متعلق به خانم نصرت فاطمه فرزند سید محمد نقوی، تبعه پاکستان وجود ندارد. (امضای فرمانده اداره امنیت سیاسی و مهر رسمی وجود دارد).\"" },
      { "label": "تأییدیه مترجم", "value": "\"آقای کامل سلیم منصور، مترجم رسمی عربی، گواهی می‌دهد که متن فوق ترجمه دقیق و کامل به زبان اسپانیایی از سندی است که به زبان عربی تنظیم شده است. در بارسلونا، ۳ اوت ۲۰۰۴.\" (امضا و مهر شده توسط کامل سلیم منصور، مترجم رسمی، بارسلونا)" },
      { "label": "یادداشت دست‌نویس", "value": "\"دمشق میں مختلف نمبر کے پلاٹ کی اجازت ہے۔ سی آئی ڈی دمشق\" (اجازه برای قطعات مختلف در دمشق. اداره آگاهی دمشق)" }
    ]
  },
  "es": {
    "name": "Español",
    "dir": "ltr",
    "docName": "Traducción al Español para el Ministerio del Interior de Siria",
    "lines": [
      { "label": "Encabezado", "value": "K.M. al-arabi, s.l. – Traducciones e Interpretaciones Juradas, Relaciones Públicas, Barcelona" },
      { "label": "Departamentos", "value": "República Árabe Siria | Ministerio del Interior | Departamento de Seguridad Política" },
      { "label": "Texto de Autorización", "value": "\"En referencia a su carta No. 102/4/5 fechada el 16-10-1989, no hay objeción/impedimento político con respecto al registro de las propiedades inmobiliarias numeradas 282, 283 y 284, ubicadas en la zona inmobiliaria de Sayda Zineb (Sayyidah Zaynab), pertenecientes a la Sra. Nusrat Fátima, hija de Don Sayed Mohamed Naqvi, de nacionalidad paquistaní. (Hay una firma del Comandante del Departamento de Seguridad Política y un sello oficial).\"" },
      { "label": "Certificación del Traductor", "value": "\"El Sr. Kamel Salim Mansour, Traductor e Intérprete Jurado de Árabe, certifica que lo anterior es una traducción fiel y completa al español de un documento redactado en árabe. En Barcelona, 3 de agosto de 2004.\" (Firmado y Sellado por Kamel Salim Mansour, Traductor Jurado, Barcelona)" },
      { "label": "Nota Manuscrita", "value": "\"دمشق میں مختلف نمبر کے پلاٹ کی اجازت ہے۔ سی آئی ڈی دمشق\" (Aprobación para varias parcelas numeradas en Damasco. CID Damasco)" }
    ]
  }
};

const data = JSON.parse(fs.readFileSync('documents_data.json', 'utf8'));
const docIndex = data.findIndex(d => d.id === docId);

if (docIndex !== -1) {
  data[docIndex].translations = newTranslations;
  data[docIndex].category = 'property'; 
  fs.writeFileSync('documents_data.json', JSON.stringify(data, null, 2));
  console.log("Updated doc_171 successfully");
} else {
  console.log("Doc not found");
}
