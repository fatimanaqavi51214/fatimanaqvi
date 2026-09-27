const fs = require('fs');

const docId = 'doc_003';

const newTranslations = {
  "ur": {
    "name": "اردو",
    "dir": "rtl",
    "docName": "شناختی سرٹیفکیٹ (اخراج قید نفوس)",
    "lines": [
      { "label": "Details", "value": "سفارت خانہ اسلامی جمہوریہ پاکستان، دمشق" },
      { "label": "تاریخ", "value": "13 فروری 2024" },
      { "label": "دستاویز", "value": "شناختی سرٹیفکیٹ (اخراج قید نفوس)" },
      { "label": "Details", "value": "پاکستانی سفارت خانہ دمشق اس بات کی تصدیق کرتا ہے کہ ذیل میں دی گئی معلومات درست ہیں اور متعلقہ شخص کے پاسپورٹ (جاری کردہ پاکستان بتاریخ 9 اکتوبر 2023) کے عین مطابق ہیں۔" },
      { "label": "نام", "value": "نصرت فاطمہ" },
      { "label": "والد کا نام", "value": "سید محمد نقوی" },
      { "label": "تاریخ اور جائے پیدائش", "value": "کراچی، 1 جنوری 1958" },
      { "label": "قومیت", "value": "پاکستانی" },
      { "label": "پیشہ", "value": "وکیل (محامية)" },
      { "label": "دستاویز جاری کرنے کی وجہ", "value": "قانونی کارروائی کے لیے (من أصل الإجراءات القانونية)" },
      { "label": "Details", "value": "(محمد سرفراز خان، قونصلر اسسٹنٹ کے دستخط اور مہر)" }
    ]
  },
  "en": {
    "name": "English",
    "dir": "ltr",
    "docName": "Civil Extract",
    "lines": [
      { "label": "Details", "value": "Embassy of the Islamic Republic of Pakistan, Damascus" },
      { "label": "Number", "value": "DT8452184" },
      { "label": "Date", "value": "13 / 02 / 2024" },
      { "label": "Document", "value": "Civil Extract (اخراج قيد نفوس)" },
      { "label": "Details", "value": "The Pakistani Embassy in Damascus certifies that the information detailed below is correct and matches the passport of the concerned person... issued in Pakistan on 09/10/2023." },
      { "label": "Name", "value": "Nusrat Fatima" },
      { "label": "Father's Name", "value": "Syed Muhammad Naqvi" },
      { "label": "Place and Date of Birth", "value": "Karachi, 01/01/1958" },
      { "label": "Nationality", "value": "Pakistani" },
      { "label": "Profession", "value": "Lawyer (محامية)" },
      { "label": "Reason for Issuance", "value": "For Legal Procedures (من أصل الإجراءات القانونية)" },
      { "label": "Details", "value": "(Signed by Muhammad Sarfaraz Khan, Consular Assistant)" }
    ]
  },
  "ar": {
    "name": "العربية",
    "dir": "rtl",
    "docName": "إخراج قيد نفوس",
    "lines": [
      { "label": "تفاصيل", "value": "سفارة جمهورية باكستان الإسلامية، دمشق" },
      { "label": "الرقم", "value": "DT8452184" },
      { "label": "التاريخ", "value": "13 / 02 / 2024" },
      { "label": "الوثيقة", "value": "إخراج قيد نفوس" },
      { "label": "تفاصيل", "value": "تشهد السفارة الباكستانية في دمشق أن المعلومات المفصلة أدناه صحيحة ومطابقة لجواز سفر الشخص المعني... الصادر في باكستان بتاريخ 09/10/2023." },
      { "label": "الاسم", "value": "نصرت فاطمة" },
      { "label": "اسم الأب", "value": "سيد محمد نقوي" },
      { "label": "مكان وتاريخ الولادة", "value": "كراتشي، 01/01/1958" },
      { "label": "الجنسية", "value": "باكستانية" },
      { "label": "المهنة", "value": "محامية" },
      { "label": "سبب الإصدار", "value": "من أجل الإجراءات القانونية" },
      { "label": "تفاصيل", "value": "(توقيع محمد سرفراز خان، مساعد قنصلي)" }
    ]
  },
  "fa": {
    "name": "فارسی",
    "dir": "rtl",
    "docName": "گواهی ثبت احوال",
    "lines": [
      { "label": "جزئیات", "value": "سفارت جمهوری اسلامی پاکستان، دمشق" },
      { "label": "شماره", "value": "DT8452184" },
      { "label": "تاریخ", "value": "۱۳ / ۰۲ / ۲۰۲۴" },
      { "label": "سند", "value": "گواهی ثبت احوال (اخراج قيد نفوس)" },
      { "label": "جزئیات", "value": "سفارت پاکستان در دمشق گواهی می‌دهد که اطلاعات مشروح زیر صحیح بوده و با گذرنامه شخص مربوطه... صادر شده در پاکستان به تاریخ ۰۹/۱۰/۲۰۲۳ مطابقت دارد." },
      { "label": "نام", "value": "نصرت فاطمه" },
      { "label": "نام پدر", "value": "سید محمد نقوی" },
      { "label": "مکان و تاریخ تولد", "value": "کراچی، ۰۱/۰۱/۱۹۵۸" },
      { "label": "ملیت", "value": "پاکستانی" },
      { "label": "شغل", "value": "وکیل (محامية)" },
      { "label": "دلیل صدور", "value": "برای مراحل قانونی (من أصل الإجراءات القانونية)" },
      { "label": "جزئیات", "value": "(با امضای محمد سرفراز خان، دستیار کنسولی)" }
    ]
  },
  "es": {
    "name": "Español",
    "dir": "ltr",
    "docName": "Extracto Civil",
    "lines": [
      { "label": "Detalles", "value": "Embajada de la República Islámica de Pakistán, Damasco" },
      { "label": "Número", "value": "DT8452184" },
      { "label": "Fecha", "value": "13 / 02 / 2024" },
      { "label": "Documento", "value": "Extracto Civil (اخراج قيد نفوس)" },
      { "label": "Detalles", "value": "La Embajada de Pakistán en Damasco certifica que la información detallada a continuación es correcta y coincide con el pasaporte de la persona en cuestión... emitido en Pakistán el 09/10/2023." },
      { "label": "Nombre", "value": "Nusrat Fatima" },
      { "label": "Nombre del Padre", "value": "Syed Muhammad Naqvi" },
      { "label": "Lugar y Fecha de Nacimiento", "value": "Karachi, 01/01/1958" },
      { "label": "Nacionalidad", "value": "Paquistaní" },
      { "label": "Profesión", "value": "Abogada (محامية)" },
      { "label": "Razón de Emisión", "value": "Para Procedimientos Legales (من أصل الإجراءات القانونية)" },
      { "label": "Detalles", "value": "(Firmado por Muhammad Sarfaraz Khan, Asistente Consular)" }
    ]
  }
};

const data = JSON.parse(fs.readFileSync('documents_data.json', 'utf8'));
const docIndex = data.findIndex(d => d.id === docId);

if (docIndex !== -1) {
  data[docIndex].translations = newTranslations;
  fs.writeFileSync('documents_data.json', JSON.stringify(data, null, 2));
  console.log("Updated doc_003 successfully");
} else {
  console.log("Doc not found");
}
