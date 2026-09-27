const fs = require('fs');

const docId = 'doc_039';

const newTranslations = {
  "ur": {
    "name": "اردو",
    "dir": "rtl",
    "docName": "پاکستانی سفارت خانے کا سرٹیفکیٹ (2016)",
    "lines": [
      { "label": "Details", "value": "سفارت خانہ اسلامی جمہوریہ پاکستان، دمشق" },
      { "label": "دستاویز", "value": "شناختی سرٹیفکیٹ (اخراج قيد نفوس)" },
      { "label": "حوالہ نمبر", "value": "DT8452182" },
      { "label": "تاریخ", "value": "17 مارچ 2016" },
      { "label": "Details", "value": "دمشق میں پاکستان کا سفارت خانہ تصدیق کرتا ہے کہ ذیل میں دی گئی تفصیلات درست ہیں اور درخواست گزار کے پاسپورٹ نمبر DT8452182 (مؤرخہ 17 مارچ 2016) کے مطابق ہیں:" },
      { "label": "نام اور خاندانی نام", "value": "نصرت فاطمہ" },
      { "label": "والد کا نام", "value": "سید محمد نقوی" },
      { "label": "والدہ کا نام", "value": "مہر بانو نقوی" },
      { "label": "جائے اور تاریخِ پیدائش", "value": "1 جنوری 1958، کراچی" },
      { "label": "قومیت", "value": "پاکستانی" },
      { "label": "پیشہ", "value": "وکیل اور رئیل اسٹیٹ تاجر (محامية وتجارة عقارات)" },
      { "label": "ازدواجی حیثیت", "value": "شادی شدہ" },
      { "label": "مذہب", "value": "مسلمان" },
      { "label": "رہائش کی جگہ", "value": "مزہ، دمشق" },
      { "label": "دستاویز جاری کرنے کی وجہ", "value": "ڈرائیونگ لائسنس کی تجدید (تجديد شهادة السواقة)" },
      { "label": "Details", "value": "(دستخط اور مہر)\n(محمد اعظم بیہان)\nہیڈ آف چانسری\nسفارت خانہ پاکستان، دمشق" }
    ]
  },
  "en": {
    "name": "English",
    "dir": "ltr",
    "docName": "Certificate of Pakistani Embassy (2016)",
    "lines": [
      { "label": "Details", "value": "Embassy of the Islamic Republic of Pakistan, Damascus" },
      { "label": "Document", "value": "Civil Extract (إخراج قيد نفوس)" },
      { "label": "Reference Number", "value": "DT8452182" },
      { "label": "Date", "value": "17 / 03 / 2016" },
      { "label": "Details", "value": "The Embassy of Pakistan in Damascus certifies that the details given below are correct and match the passport of the applicant, No. DT8452182 issued on 17/03/2016." },
      { "label": "Name and Surname", "value": "Nusrat Fatima" },
      { "label": "Father's Name", "value": "Syed Muhammad Naqvi" },
      { "label": "Mother's Name", "value": "Mehar Bano Naqvi" },
      { "label": "Place and Date of Birth", "value": "01 / 01 / 1958, Karachi" },
      { "label": "Nationality", "value": "Pakistani" },
      { "label": "Profession", "value": "Lawyer and Real Estate Trader (محامية وتجارة عقارات)" },
      { "label": "Marital Status", "value": "Married" },
      { "label": "Religion", "value": "Muslim" },
      { "label": "Place of Residence", "value": "Mezzeh, Damascus" },
      { "label": "Reason for Issuance", "value": "Renewal of Driving License (تجديد شهادة السواقة)" },
      { "label": "Details", "value": "(Signed and Stamped)\n(Muhammad Azam Bihan)\nHead of Chancery\nEmbassy of Pakistan, Damascus" }
    ]
  },
  "ar": {
    "name": "العربية",
    "dir": "rtl",
    "docName": "شهادة من السفارة الباكستانية (2016)",
    "lines": [
      { "label": "تفاصيل", "value": "سفارة جمهورية باكستان الإسلامية، دمشق" },
      { "label": "الوثيقة", "value": "إخراج قيد نفوس" },
      { "label": "الرقم المرجعي", "value": "DT8452182" },
      { "label": "التاريخ", "value": "17 / 03 / 2016" },
      { "label": "تفاصيل", "value": "تشهد سفارة باكستان في دمشق أن التفاصيل المذكورة أدناه صحيحة ومطابقة لجواز سفر مقدم الطلب رقم DT8452182 الصادر في 17/03/2016." },
      { "label": "الاسم والكنية", "value": "نصرت فاطمة" },
      { "label": "اسم الأب", "value": "سيد محمد نقوي" },
      { "label": "اسم الأم", "value": "مهر بانو نقوي" },
      { "label": "مكان وتاريخ الولادة", "value": "01 / 01 / 1958، كراتشي" },
      { "label": "الجنسية", "value": "باكستانية" },
      { "label": "المهنة", "value": "محامية وتجارة عقارات" },
      { "label": "الحالة الاجتماعية", "value": "متزوجة" },
      { "label": "الديانة", "value": "مسلمة" },
      { "label": "مكان الإقامة", "value": "مزة، دمشق" },
      { "label": "سبب الإصدار", "value": "تجديد شهادة السواقة" },
      { "label": "تفاصيل", "value": "(موقع ومختوم)\n(محمد أعظم بيهان)\nرئيس ديوان السفارة\nسفارة باكستان، دمشق" }
    ]
  },
  "fa": {
    "name": "فارسی",
    "dir": "rtl",
    "docName": "گواهی سفارت پاکستان (۲۰۱۶)",
    "lines": [
      { "label": "جزئیات", "value": "سفارت جمهوری اسلامی پاکستان، دمشق" },
      { "label": "سند", "value": "گواهی ثبت احوال (إخراج قيد نفوس)" },
      { "label": "شماره مرجع", "value": "DT8452182" },
      { "label": "تاریخ", "value": "۱۷ / ۰۳ / ۲۰۱۶" },
      { "label": "جزئیات", "value": "سفارت پاکستان در دمشق گواهی می‌دهد که مشخصات ذکر شده در زیر صحیح بوده و با گذرنامه متقاضی به شماره DT8452182 صادره در تاریخ ۱۷/۰۳/۲۰۱۶ مطابقت دارد." },
      { "label": "نام و نام خانوادگی", "value": "نصرت فاطمه" },
      { "label": "نام پدر", "value": "سید محمد نقوی" },
      { "label": "نام مادر", "value": "مهر بانو نقوی" },
      { "label": "مکان و تاریخ تولد", "value": "۰۱ / ۰۱ / ۱۹۵۸، کراچی" },
      { "label": "ملیت", "value": "پاکستانی" },
      { "label": "شغل", "value": "وکیل و تاجر املاک (محامية وتجارة عقارات)" },
      { "label": "وضعیت تأهل", "value": "متاهل" },
      { "label": "دین", "value": "مسلمان" },
      { "label": "محل سکونت", "value": "مزه، دمشق" },
      { "label": "دلیل صدور", "value": "تمدید گواهینامه رانندگی (تجديد شهادة السواقة)" },
      { "label": "جزئیات", "value": "(مهر و امضا شده)\n(محمد اعظم بیهان)\nرئیس دفتر سفارت\nسفارت پاکستان، دمشق" }
    ]
  },
  "es": {
    "name": "Español",
    "dir": "ltr",
    "docName": "Certificado de la Embajada de Pakistán (2016)",
    "lines": [
      { "label": "Detalles", "value": "Embajada de la República Islámica de Pakistán, Damasco" },
      { "label": "Documento", "value": "Extracto Civil (إخراج قيد نفوس)" },
      { "label": "Número de Referencia", "value": "DT8452182" },
      { "label": "Fecha", "value": "17 / 03 / 2016" },
      { "label": "Detalles", "value": "La Embajada de Pakistán en Damasco certifica que los detalles proporcionados a continuación son correctos y coinciden con el pasaporte de la solicitante, No. DT8452182 emitido el 17/03/2016." },
      { "label": "Nombre y Apellidos", "value": "Nusrat Fatima" },
      { "label": "Nombre del Padre", "value": "Syed Muhammad Naqvi" },
      { "label": "Nombre de la Madre", "value": "Mehar Bano Naqvi" },
      { "label": "Lugar y Fecha de Nacimiento", "value": "01 / 01 / 1958, Karachi" },
      { "label": "Nacionalidad", "value": "Paquistaní" },
      { "label": "Profesión", "value": "Abogada y Comerciante de Bienes Raíces (محامية وتجارة عقارات)" },
      { "label": "Estado Civil", "value": "Casada" },
      { "label": "Religión", "value": "Musulmana" },
      { "label": "Lugar de Residencia", "value": "Mezzeh, Damasco" },
      { "label": "Razón de Emisión", "value": "Renovación de la Licencia de Conducir (تجديد شهادة السواقة)" },
      { "label": "Detalles", "value": "(Firmado y Sellado)\n(Muhammad Azam Bihan)\nJefe de Cancillería\nEmbajada de Pakistán, Damasco" }
    ]
  }
};

const data = JSON.parse(fs.readFileSync('documents_data.json', 'utf8'));
const docIndex = data.findIndex(d => d.id === docId);

if (docIndex !== -1) {
  data[docIndex].translations = newTranslations;
  data[docIndex].category = 'embassy'; 
  fs.writeFileSync('documents_data.json', JSON.stringify(data, null, 2));
  console.log("Updated doc_039 successfully");
} else {
  console.log("Doc not found");
}
