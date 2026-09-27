const fs = require('fs');

const docId = 'doc_151';

const newTranslations = {
  "ur": {
    "name": "اردو",
    "dir": "rtl",
    "docName": "وزارتِ عدل - درخواست برائے نفاذِ ڈگری",
    "lines": [
      { "label": "تفصیلات", "value": "جمہوریہ عربیہ سوریہ – وزارتِ انصاف (وزارة العدل) | محکمہ نفاذِ عدالتی احکامات (ڈائریکٹوریٹ آف ایگزیکیوشن)، ببّیلا" },
      { "label": "موضوع", "value": "درخواست برائے نفاذِ عدالتی ڈگری / وصولی واجبات و حقوق" },
      { "label": "درخواست دہندہ (ڈگری دار)", "value": "نام: نصرت فاطمہ نقوی دختر سید محمد | قانونی پتہ: وساطت دفتر وکیل ایڈووکیٹ عبد الرحیم حوکر" },
      { "label": "مدعا علیہان (جن کے خلاف ڈگری ہے)", "value": "1. محمد خرمہ ولد علی، رہائشی السیدہ زینب | 2. مصطفیٰ خرمہ ولد علی، رہائشی السیدہ زینب" },
      { "label": "عدالتی فیصلے اور ڈگری کی تفصیل", "value": "حکم / ڈگری نمبر: 4/154، جاری کردہ بتاریخ 19 اپریل 1994ء از سول کورٹ (محكمة الصلح المدنية)، ببّیلا۔ حیثیت: یہ عدالتی فیصلہ حتمی اور قطعی قانونی درجہ حاصل کر چکا ہے۔" },
      { "label": "استدعا", "value": "1. آپ کے محکمے کے ذریعے قانون کے مطابق اس فیصلے کا فوری نفاذ اور عمل درآمد کروایا جائے۔ 2. عدالتی و انتظامی فیسیں اور تمام تر اخراجات مدعا علیہان پر عائد کیے جائیں۔" },
      { "label": "تاریخِ پیشی", "value": "22 ستمبر 1998ء" },
      { "label": "دستخط کنندہ", "value": "دستخط سائلہ / ڈگری دار: نصرت فاطمہ (وزارت عدل کے سرکاری عدالتی اسٹامپ اور مہر ثبت ہے)۔" }
    ]
  },
  "en": {
    "name": "English",
    "dir": "ltr",
    "docName": "Judicial Execution Petition",
    "lines": [
      { "label": "Details", "value": "Syrian Arab Republic – Ministry of Justice | Execution Directorate of Babbila" },
      { "label": "Subject", "value": "Application for Execution of Judgment / Debt Recovery" },
      { "label": "Execution Applicant", "value": "Name: Nusrat Fatima Naqvi, daughter of Syed Mohammad | Legal Address: At the office of Attorney Abdul Rahim Houkar" },
      { "label": "Judgment Debtors", "value": "1. Mohammad Khurma, son of Ali, residing in Sayyidah Zaynab | 2. Mustafa Khurma, son of Ali, residing in Sayyidah Zaynab" },
      { "label": "Judgment Details", "value": "Judgment No.: 4/154, issued on 19/4/1994 by the Civil Conciliation Court of Babbila. Legal Status: The judgment has acquired final and absolute legal force." },
      { "label": "Execution Requested", "value": "1. Complete enforcement and execution through your department in accordance with the law. 2. Order the judgment debtors to bear all legal costs, court fees, and expenses." },
      { "label": "Filing Date", "value": "22 / 9 / 1998" },
      { "label": "Applicant Signature", "value": "Nusrat Fatima (Official stamps and judicial revenue stamps affixed)." }
    ]
  },
  "ar": {
    "name": "العربية",
    "dir": "rtl",
    "docName": "طلب تنفيذ حكم قضائي",
    "lines": [
      { "label": "تفاصيل", "value": "الجمهورية العربية السورية – وزارة العدل | دائرة التنفيذ في ببيلا" },
      { "label": "الموضوع", "value": "طلب تنفيذ حكم / تحصيل سندات دين" },
      { "label": "طالب التنفيذ", "value": "الاسم: نصرت فاطمة نقوي بنت سيد محمد | العنوان القانوني: بواسطة مكتب المحامي عبد الرحيم حوكر" },
      { "label": "المحكوم عليه", "value": "1. محمد خرمة بن علي، مقيم في السيدة زينب | 2. مصطفى خرمة بن علي، مقيم في السيدة زينب" },
      { "label": "تفاصيل الحكم", "value": "رقم الحكم: 4/154، صادر بتاريخ 19/4/1994 عن محكمة الصلح المدنية في ببيلا. الوضع القانوني: اكتسب الحكم درجة قطعية." },
      { "label": "الطلب", "value": "1. التنفيذ الكامل من خلال دائرتكم وفقاً للقانون. 2. إلزام المحكوم عليهما بكافة المصاريف والرسوم والنفقات القانونية." },
      { "label": "تاريخ التقديم", "value": "22 / 9 / 1998" },
      { "label": "توقيع مقدم الطلب", "value": "نصرت فاطمة (الأختام الرسمية وطوابع وزارة العدل مرفقة)." }
    ]
  },
  "fa": {
    "name": "فارسی",
    "dir": "rtl",
    "docName": "درخواست اجرای حکم قضایی",
    "lines": [
      { "label": "جزئیات", "value": "جمهوری عربی سوریه - وزارت دادگستری | اداره اجرای احکام ببیلا" },
      { "label": "موضوع", "value": "درخواست برای اجرای حکم / وصول بدهی" },
      { "label": "متقاضی اجرا", "value": "نام: نصرت فاطمه نقوی فرزند سید محمد | آدرس قانونی: از طریق دفتر وکیل عبدالرحیم حوکر" },
      { "label": "محکوم علیهم", "value": "۱. محمد خرمه فرزند علی، ساکن سیده زینب | ۲. مصطفی خرمه فرزند علی، ساکن سیده زینب" },
      { "label": "جزئیات حکم", "value": "شماره حکم: ۴/۱۵۴، صادر شده در تاریخ ۱۹/۴/۱۹۹۴ توسط دادگاه صلح مدنی ببیلا. وضعیت قانونی: این حکم قطعی شده است." },
      { "label": "درخواست اجرا", "value": "۱. اجرای کامل از طریق اداره شما مطابق با قانون. ۲. الزام محکوم علیهم به پرداخت تمام هزینه‌ها و مخارج قانونی." },
      { "label": "تاریخ تشکیل پرونده", "value": "۲۲ / ۹ / ۱۹۹۸" },
      { "label": "امضای متقاضی", "value": "نصرت فاطمه (مهرهای رسمی و تمبرهای دادگستری الصاق شده است)." }
    ]
  },
  "es": {
    "name": "Español",
    "dir": "ltr",
    "docName": "Petición de Ejecución Judicial",
    "lines": [
      { "label": "Detalles", "value": "República Árabe Siria – Ministerio de Justicia | Dirección de Ejecución de Babbila" },
      { "label": "Asunto", "value": "Solicitud de Ejecución de Sentencia / Recuperación de Deuda" },
      { "label": "Solicitante de Ejecución", "value": "Nombre: Nusrat Fatima Naqvi, hija de Syed Mohammad | Dirección Legal: En la oficina del Abogado Abdul Rahim Houkar" },
      { "label": "Deudores por Sentencia", "value": "1. Mohammad Khurma, hijo de Ali, residente en Sayyidah Zaynab | 2. Mustafa Khurma, hijo de Ali, residente en Sayyidah Zaynab" },
      { "label": "Detalles de la Sentencia", "value": "Sentencia No.: 4/154, emitida el 19/4/1994 por el Tribunal de Conciliación Civil de Babbila. Estado Legal: La sentencia ha adquirido fuerza legal definitiva y absoluta." },
      { "label": "Ejecución Solicitada", "value": "1. Cumplimiento y ejecución completos a través de su departamento de acuerdo con la ley. 2. Ordenar a los deudores por sentencia que asuman todos los costos legales, honorarios judiciales y gastos." },
      { "label": "Fecha de Presentación", "value": "22 / 9 / 1998" },
      { "label": "Firma del Solicitante", "value": "Nusrat Fatima (Sellos oficiales y timbres fiscales judiciales adheridos)." }
    ]
  }
};

const data = JSON.parse(fs.readFileSync('documents_data.json', 'utf8'));
const docIndex = data.findIndex(d => d.id === docId);

if (docIndex !== -1) {
  data[docIndex].translations = newTranslations;
  data[docIndex].category = 'property'; 
  fs.writeFileSync('documents_data.json', JSON.stringify(data, null, 2));
  console.log("Updated doc_151 successfully");
} else {
  console.log("Doc not found");
}
