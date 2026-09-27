const fs = require('fs');

const docId = 'doc_005';

const newTranslations = {
  "ur": {
    "name": "اردو",
    "dir": "rtl",
    "docName": "پاکستانی سفارت خانے کا پرانا سرٹیفکیٹ (1998)",
    "lines": [
      { "label": "Details", "value": "سفارت خانہ اسلامی جمہوریہ پاکستان، دمشق" },
      { "label": "تاریخ", "value": "11 فروری 1998" },
      { "label": "دستاویز", "value": "شناختی سرٹیفکیٹ (اخراج قید نفوس)" },
      { "label": "Details", "value": "پاکستانی سفارت خانہ دمشق اس بات کی تصدیق کرتا ہے کہ ذیل میں دی گئی معلومات درست ہیں اور متعلقہ شخص کے پاسپورٹ کے عین مطابق ہیں۔" },
      { "label": "نام", "value": "نصرت فاطمہ نقوی" },
      { "label": "والد کا نام", "value": "سید محمد نقوی" },
      { "label": "تاریخ اور جائے پیدائش", "value": "کراچی، 1958" },
      { "label": "قومیت", "value": "پاکستانی" },
      { "label": "پیشہ", "value": "وکیل (محامية)" },
      { "label": "رہائش کی جگہ", "value": "دمشق، مزہ جبل" },
      { "label": "دستاویز جاری کرنے کی وجہ", "value": "شامی محکمہ امیگریشن و پاسپورٹ کے لیے" },
      { "label": "Details", "value": "(کونسلر، پاکستانی سفارت خانہ کے دستخط)" }
    ]
  },
  "en": {
    "name": "English",
    "dir": "ltr",
    "docName": "Old Certificate of Pakistani Embassy (1998)",
    "lines": [
      { "label": "Details", "value": "Embassy of the Islamic Republic of Pakistan, Damascus" },
      { "label": "Date", "value": "11 / 02 / 1998" },
      { "label": "Document", "value": "Civil Extract (اخراج قيد نفوس)" },
      { "label": "Details", "value": "The Pakistani Embassy in Damascus certifies that the information detailed below is correct and matches the passport of the concerned person..." },
      { "label": "Name", "value": "Nusrat Fatima Naqvi" },
      { "label": "Father's Name", "value": "Syed Muhammad Naqvi" },
      { "label": "Place and Year of Birth", "value": "Karachi, 1958" },
      { "label": "Nationality", "value": "Pakistani" },
      { "label": "Profession", "value": "Lawyer (محامية)" },
      { "label": "Place of Residence", "value": "Damascus, Mezzeh Jabal" },
      { "label": "Reason for Issuance", "value": "Syrian Department of Immigration and Passports" },
      { "label": "Details", "value": "(Signed by Counsellor, Embassy of Pakistan, Damascus)" }
    ]
  },
  "ar": {
    "name": "العربية",
    "dir": "rtl",
    "docName": "شهادة قديمة من السفارة الباكستانية (1998)",
    "lines": [
      { "label": "تفاصيل", "value": "سفارة جمهورية باكستان الإسلامية، دمشق" },
      { "label": "التاريخ", "value": "11 / 02 / 1998" },
      { "label": "الوثيقة", "value": "إخراج قيد نفوس" },
      { "label": "تفاصيل", "value": "تشهد السفارة الباكستانية في دمشق أن المعلومات المفصلة أدناه صحيحة ومطابقة لجواز سفر الشخص المعني..." },
      { "label": "الاسم", "value": "نصرت فاطمة نقوي" },
      { "label": "اسم الأب", "value": "سيد محمد نقوي" },
      { "label": "مكان وسنة الولادة", "value": "كراتشي، 1958" },
      { "label": "الجنسية", "value": "باكستانية" },
      { "label": "المهنة", "value": "محامية" },
      { "label": "مكان الإقامة", "value": "دمشق، مزة جبل" },
      { "label": "سبب الإصدار", "value": "لدائرة الهجرة والجوازات السورية" },
      { "label": "تفاصيل", "value": "(توقيع مستشار سفارة باكستان، دمشق)" }
    ]
  },
  "fa": {
    "name": "فارسی",
    "dir": "rtl",
    "docName": "گواهی قدیمی سفارت پاکستان (۱۹۹۸)",
    "lines": [
      { "label": "جزئیات", "value": "سفارت جمهوری اسلامی پاکستان، دمشق" },
      { "label": "تاریخ", "value": "۱۱ / ۰۲ / ۱۹۹۸" },
      { "label": "سند", "value": "گواهی ثبت احوال (اخراج قيد نفوس)" },
      { "label": "جزئیات", "value": "سفارت پاکستان در دمشق گواهی می‌دهد که اطلاعات مشروح زیر صحیح بوده و با گذرنامه شخص مربوطه مطابقت دارد..." },
      { "label": "نام", "value": "نصرت فاطمه نقوی" },
      { "label": "نام پدر", "value": "سید محمد نقوی" },
      { "label": "مکان و سال تولد", "value": "کراچی، ۱۹۵۸" },
      { "label": "ملیت", "value": "پاکستانی" },
      { "label": "شغل", "value": "وکیل (محامية)" },
      { "label": "محل سکونت", "value": "دمشق، مزه جبل" },
      { "label": "دلیل صدور", "value": "اداره مهاجرت و گذرنامه سوریه" },
      { "label": "جزئیات", "value": "(با امضای مشاور، سفارت پاکستان، دمشق)" }
    ]
  },
  "es": {
    "name": "Español",
    "dir": "ltr",
    "docName": "Certificado Antiguo de la Embajada de Pakistán (1998)",
    "lines": [
      { "label": "Detalles", "value": "Embajada de la República Islámica de Pakistán, Damasco" },
      { "label": "Fecha", "value": "11 / 02 / 1998" },
      { "label": "Documento", "value": "Extracto Civil (اخراج قيد نفوس)" },
      { "label": "Detalles", "value": "La Embajada de Pakistán en Damasco certifica que la información detallada a continuación es correcta y coincide con el pasaporte de la persona en cuestión..." },
      { "label": "Nombre", "value": "Nusrat Fatima Naqvi" },
      { "label": "Nombre del Padre", "value": "Syed Muhammad Naqvi" },
      { "label": "Lugar y Año de Nacimiento", "value": "Karachi, 1958" },
      { "label": "Nacionalidad", "value": "Paquistaní" },
      { "label": "Profesión", "value": "Abogada (محامية)" },
      { "label": "Lugar de Residencia", "value": "Damasco, Mezzeh Jabal" },
      { "label": "Razón de Emisión", "value": "Departamento de Inmigración y Pasaportes de Siria" },
      { "label": "Detalles", "value": "(Firmado por el Consejero, Embajada de Pakistán, Damasco)" }
    ]
  }
};

const data = JSON.parse(fs.readFileSync('documents_data.json', 'utf8'));
const docIndex = data.findIndex(d => d.id === docId);

if (docIndex !== -1) {
  data[docIndex].translations = newTranslations;
  fs.writeFileSync('documents_data.json', JSON.stringify(data, null, 2));
  console.log("Updated doc_005 successfully");
} else {
  console.log("Doc not found");
}
