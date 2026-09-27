const fs = require('fs');

const docId = 'doc_064';

const newTranslations = {
  "ur": {
    "name": "اردو",
    "dir": "rtl",
    "docName": "شامی محکمہ سیاسی سیکیورٹی کا خط (پراپرٹی رجسٹریشن کی اجازت)",
    "lines": [
      { "label": "Details", "value": "شامی عرب جمہوریہ - وزارتِ داخلہ - محکمہ سیاسی سیکیورٹی." },
      { "label": "حوالہ", "value": "آپ کے خط نمبر 102/4/5 مورخہ 16/10/1989 کے جواب میں، سیدہ زینب کے رئیل اسٹیٹ علاقے میں واقع جائیدادوں نمبر 282، 283 اور 284 کو محترمہ نصرت فاطمہ دختر سید محمد نقوی (پاکستانی قومیت) کے نام رجسٹر کرنے میں کوئی سیاسی سیکیورٹی مانع یا رکاوٹ نہیں ہے." },
      { "label": "Details", "value": "(سرکاری سیکیورٹی حکام کے دستخط اور مہر کے ساتھ)." }
    ]
  },
  "en": {
    "name": "English",
    "dir": "ltr",
    "docName": "Letter from Syrian Political Security (Property Registration Approval)",
    "lines": [
      { "label": "Details", "value": "Syrian Arab Republic - Ministry of Interior - Department of Political Security." },
      { "label": "Reference", "value": "In response to your letter no. 102/4/5 dated 16/10/1989, there is no political security impediment that prevents registering properties nos. 282, 283, and 284 in the Sayyida Zainab real estate region under the name of Mrs. Nusrat Fatima, daughter of Syed Muhammad Naqvi (Pakistani national)." },
      { "label": "Details", "value": "(Signed and stamped by official security directorate authorities)." }
    ]
  },
  "ar": {
    "name": "العربية",
    "dir": "rtl",
    "docName": "رسالة من الأمن السياسي السوري (الموافقة على تسجيل العقارات)",
    "lines": [
      { "label": "تفاصيل", "value": "الجمهورية العربية السورية - وزارة الداخلية - إدارة الأمن السياسي." },
      { "label": "إشارة", "value": "رداً على كتابكم رقم 102/4/5 المؤرخ في 16/10/1989، لا يوجد أي مانع من الناحية الأمنية السياسية يحول دون تسجيل العقارات أرقام 282 و 283 و 284 في منطقة السيدة زينب العقارية باسم السيدة نصرت فاطمة ابنة سيد محمد نقوي (باكستانية الجنسية)." },
      { "label": "تفاصيل", "value": "(موقع ومختوم من قبل سلطات مديرية الأمن الرسمية)." }
    ]
  },
  "fa": {
    "name": "فارسی",
    "dir": "rtl",
    "docName": "نامه امنیت سیاسی سوریه (مجوز ثبت ملک)",
    "lines": [
      { "label": "جزئیات", "value": "جمهوری عربی سوریه - وزارت کشور - اداره امنیت سیاسی." },
      { "label": "عطف به", "value": "در پاسخ به نامه شماره ۱۰۲/۴/۵ مورخ ۱۶/۱۰/۱۹۸۹ شما، هیچ‌گونه مانع امنیتی و سیاسی برای ثبت املاک شماره ۲۸۲، ۲۸۳ و ۲۸۴ واقع در منطقه ملکی سیده زینب به نام خانم نصرت فاطمه فرزند سید محمد نقوی (تبعه پاکستان) وجود ندارد." },
      { "label": "جزئیات", "value": "(با امضا و مهر مقامات رسمی اداره امنیت)." }
    ]
  },
  "es": {
    "name": "Español",
    "dir": "ltr",
    "docName": "Carta de la Seguridad Política Siria (Aprobación de Registro de Propiedad)",
    "lines": [
      { "label": "Detalles", "value": "República Árabe Siria - Ministerio del Interior - Departamento de Seguridad Política." },
      { "label": "Referencia", "value": "En respuesta a su carta no. 102/4/5 de fecha 16/10/1989, no hay impedimento de seguridad política que impida registrar las propiedades nos. 282, 283 y 284 en la región inmobiliaria de Sayyida Zainab a nombre de la Sra. Nusrat Fatima, hija de Syed Muhammad Naqvi (nacional paquistaní)." },
      { "label": "Detalles", "value": "(Firmado y sellado por las autoridades oficiales de la dirección de seguridad)." }
    ]
  }
};

const data = JSON.parse(fs.readFileSync('documents_data.json', 'utf8'));
const docIndex = data.findIndex(d => d.id === docId);

if (docIndex !== -1) {
  data[docIndex].translations = newTranslations;
  data[docIndex].category = 'property'; 
  fs.writeFileSync('documents_data.json', JSON.stringify(data, null, 2));
  console.log("Updated doc_064 successfully");
} else {
  console.log("Doc not found");
}
