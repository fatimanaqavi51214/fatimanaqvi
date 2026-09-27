const fs = require('fs');

const docId = 'doc_060';

const newTranslations = {
  "ur": {
    "name": "اردو",
    "dir": "rtl",
    "docName": "شامی وزارتِ داخلہ - محکمہ سیاسی سیکیورٹی کا خط",
    "lines": [
      { "label": "Details", "value": "شامی عرب جمہوریہ - وزارتِ داخلہ - محکمہ سیاسی سیکیورٹی۔" },
      { "label": "مضمون", "value": "خط نمبر 102/4/5 مورخہ 16-10-1989 کے حوالے سے تصدیق کی جاتی ہے کہ سیدہ زینب کے رئیل اسٹیٹ علاقے میں واقع جائیدادوں نمبر 282، 283 اور 284 کی رجسٹریشن میں کسی قسم کی سیاسی رکاوٹ یا ممانعت نہیں ہے، جو کہ محترمہ نصرت فاطمہ دختر مرحوم سید محمد نقوی (پاکستانی قومیت) کی ملکیت ہیں۔" },
      { "label": "Details", "value": "(بارسلونا کے حلف یافتہ مترجم کامل سلیم منصور کی تصدیق شدہ کاپی، مورخہ 3 اگست 2004)۔" }
    ]
  },
  "en": {
    "name": "English",
    "dir": "ltr",
    "docName": "Letter from Syrian Ministry of Interior - Political Security Dept.",
    "lines": [
      { "label": "Details", "value": "Syrian Arab Republic - Ministry of Interior - Department of Political Security." },
      { "label": "Content", "value": "With reference to letter no. 102/4/5 dated 16-10-1989, there is no political impediment regarding the registration of real estate properties nos. 282, 283, and 284 located in the Sayyida Zainab real estate region, belonging to Mrs. Nusrat Fatima, daughter of late Syed Mohamed Naqvi, of Pakistani nationality." },
      { "label": "Details", "value": "(Certified translation by Kamel Salim Mansour in Barcelona, dated August 3, 2004)." }
    ]
  },
  "ar": {
    "name": "العربية",
    "dir": "rtl",
    "docName": "رسالة من وزارة الداخلية السورية - إدارة الأمن السياسي",
    "lines": [
      { "label": "تفاصيل", "value": "الجمهورية العربية السورية - وزارة الداخلية - إدارة الأمن السياسي." },
      { "label": "المضمون", "value": "بالإشارة إلى الكتاب رقم 102/4/5 المؤرخ في 16-10-1989، لا يوجد أي مانع سياسي من تسجيل العقارات أرقام 282 و 283 و 284 الواقعة في المنطقة العقارية بالسيدة زينب، والعائدة ملكيتها للسيدة نصرت فاطمة ابنة المرحوم سيد محمد نقوي، باكستانية الجنسية." },
      { "label": "تفاصيل", "value": "(نسخة مترجمة ومصدقة من قبل المترجم المحلف كامل سلیم منصور في برشلونة، بتاريخ 3 أغسطس 2004)." }
    ]
  },
  "fa": {
    "name": "فارسی",
    "dir": "rtl",
    "docName": "نامه وزارت کشور سوریه - اداره امنیت سیاسی",
    "lines": [
      { "label": "جزئیات", "value": "جمهوری عربی سوریه - وزارت کشور - اداره امنیت سیاسی." },
      { "label": "مضمون", "value": "پیرو نامه شماره ۱۰۲/۴/۵ مورخ ۱۶-۱۰-۱۹۸۹، گواهی می‌شود که هیچ‌گونه مانع سیاسی برای ثبت املاک شماره ۲۸۲، ۲۸۳ و ۲۸۴ واقع در منطقه ملکی سیده زینب، متعلق به خانم نصرت فاطمه فرزند مرحوم سید محمد نقوی (تبعه پاکستان) وجود ندارد." },
      { "label": "جزئیات", "value": "(نسخه ترجمه شده و تأیید شده توسط کامل سلیم منصور، مترجم رسمی در بارسلونا، مورخ ۳ اوت ۲۰۰۴)." }
    ]
  },
  "es": {
    "name": "Español",
    "dir": "ltr",
    "docName": "Carta del Ministerio del Interior de Siria - Dpto. de Seguridad Política",
    "lines": [
      { "label": "Detalles", "value": "República Árabe Siria - Ministerio del Interior - Departamento de Seguridad Política." },
      { "label": "Contenido", "value": "Con referencia a la carta no. 102/4/5 de fecha 16-10-1989, no existe impedimento político alguno con respecto al registro de las propiedades inmobiliarias nos. 282, 283 y 284 ubicadas en la región inmobiliaria de Sayyida Zainab, pertenecientes a la Sra. Nusrat Fatima, hija del difunto Syed Mohamed Naqvi, de nacionalidad paquistaní." },
      { "label": "Detalles", "value": "(Traducción certificada por Kamel Salim Mansour en Barcelona, fechada el 3 de agosto de 2004)." }
    ]
  }
};

const data = JSON.parse(fs.readFileSync('documents_data.json', 'utf8'));
const docIndex = data.findIndex(d => d.id === docId);

if (docIndex !== -1) {
  data[docIndex].translations = newTranslations;
  data[docIndex].category = 'property'; 
  fs.writeFileSync('documents_data.json', JSON.stringify(data, null, 2));
  console.log("Updated doc_060 successfully");
} else {
  console.log("Doc not found");
}
