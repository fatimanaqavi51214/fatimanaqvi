const fs = require('fs');

const data = JSON.parse(fs.readFileSync('documents_data.json', 'utf8'));

const updates = [
  {
    id: 'doc_015',
    category: 'embassy',
    translations: {
      "ur": {
        "name": "اردو",
        "dir": "rtl",
        "docName": "شناختی سرٹیفکیٹ برائے شوہر (1998)",
        "lines": [
          { "label": "Details", "value": "سفارت خانہ اسلامی جمہوریہ پاکستان، دمشق" },
          { "label": "تاریخ", "value": "11 مارچ 1998" },
          { "label": "دستاویز", "value": "شناختی سرٹیفکیٹ (اخراج قيد نفوس)" },
          { "label": "نام", "value": "غلام سرور (محترمہ کے شوہر)" },
          { "label": "والد کا نام", "value": "فضل کریم" },
          { "label": "والدہ کا نام", "value": "سردار بی بی" },
          { "label": "جائے اور تاریخ پیدائش", "value": "گجرات، 1 مئی 1942" },
          { "label": "قومیت", "value": "پاکستانی" },
          { "label": "پیشہ", "value": "تاجر (Businessman)" },
          { "label": "ازدواجی حیثیت", "value": "شادی شدہ" },
          { "label": "رہائش کی جگہ", "value": "مزہ جبل، دمشق" },
          { "label": "دستاویز جاری کرنے کی وجہ", "value": "شام کا دورہ (زيارة سوريا)" },
          { "label": "Details", "value": "(ایس۔ ضیاء الدین علی، کونسلر کے دستخط)" }
        ]
      },
      "en": {
        "name": "English",
        "dir": "ltr",
        "docName": "Civil Extract for Husband (1998)",
        "lines": [
          { "label": "Details", "value": "Embassy of the Islamic Republic of Pakistan, Damascus" },
          { "label": "Date", "value": "11 / 03 / 1998" },
          { "label": "Document", "value": "Civil Extract (اخراج قيد نفوس)" },
          { "label": "Name", "value": "Ghulam Sarwar" },
          { "label": "Father's Name", "value": "Fazal Karim" },
          { "label": "Mother's Name", "value": "Sardar Bibi" },
          { "label": "Place and Date of Birth", "value": "Gujrat, 01/05/1942" },
          { "label": "Nationality", "value": "Pakistani" },
          { "label": "Profession", "value": "Businessman (تاجر)" },
          { "label": "Marital Status", "value": "Married (متزوج)" },
          { "label": "Place of Residence", "value": "Mezzeh Jabal, Damascus" },
          { "label": "Reason for Issuance", "value": "Visit to Syria (زيارة سوريا)" },
          { "label": "Details", "value": "(Signed by S. Ziauddin Ali, Counsellor)" }
        ]
      },
      "ar": {
        "name": "العربية",
        "dir": "rtl",
        "docName": "إخراج قيد نفوس للزوج (1998)",
        "lines": [
          { "label": "تفاصيل", "value": "سفارة جمهورية باكستان الإسلامية، دمشق" },
          { "label": "التاريخ", "value": "11 / 03 / 1998" },
          { "label": "الوثيقة", "value": "إخراج قيد نفوس" },
          { "label": "الاسم", "value": "غلام سرور" },
          { "label": "اسم الأب", "value": "فضل كريم" },
          { "label": "اسم الأم", "value": "سردار بي بي" },
          { "label": "مكان وتاريخ الولادة", "value": "جوجرات، 01/05/1942" },
          { "label": "الجنسية", "value": "باكستانية" },
          { "label": "المهنة", "value": "تاجر" },
          { "label": "الحالة الاجتماعية", "value": "متزوج" },
          { "label": "مكان الإقامة", "value": "مزة جبل، دمشق" },
          { "label": "سبب الإصدار", "value": "زيارة سوريا" },
          { "label": "تفاصيل", "value": "(توقيع س. ضياء الدين علي، مستشار)" }
        ]
      },
      "fa": {
        "name": "فارسی",
        "dir": "rtl",
        "docName": "گواهی ثبت احوال برای همسر (۱۹۹۸)",
        "lines": [
          { "label": "جزئیات", "value": "سفارت جمهوری اسلامی پاکستان، دمشق" },
          { "label": "تاریخ", "value": "۱۱ / ۰۳ / ۱۹۹۸" },
          { "label": "سند", "value": "گواهی ثبت احوال (اخراج قيد نفوس)" },
          { "label": "نام", "value": "غلام سرور" },
          { "label": "نام پدر", "value": "فضل کریم" },
          { "label": "نام مادر", "value": "سردار بی بی" },
          { "label": "مکان و تاریخ تولد", "value": "گجرات، ۰۱/۰۵/۱۹۴۲" },
          { "label": "ملیت", "value": "پاکستانی" },
          { "label": "شغل", "value": "تاجر" },
          { "label": "وضعیت تأهل", "value": "متاهل (متزوج)" },
          { "label": "محل سکونت", "value": "مزه جبل، دمشق" },
          { "label": "دلیل صدور", "value": "سفر به سوریه (زيارة سوريا)" },
          { "label": "جزئیات", "value": "(با امضای س. ضیاء الدین علی، مشاور)" }
        ]
      },
      "es": {
        "name": "Español",
        "dir": "ltr",
        "docName": "Extracto Civil para Esposo (1998)",
        "lines": [
          { "label": "Detalles", "value": "Embajada de la República Islámica de Pakistán, Damasco" },
          { "label": "Fecha", "value": "11 / 03 / 1998" },
          { "label": "Documento", "value": "Extracto Civil (اخراج قيد نفوس)" },
          { "label": "Nombre", "value": "Ghulam Sarwar" },
          { "label": "Nombre del Padre", "value": "Fazal Karim" },
          { "label": "Nombre de la Madre", "value": "Sardar Bibi" },
          { "label": "Lugar y Fecha de Nacimiento", "value": "Gujrat, 01/05/1942" },
          { "label": "Nacionalidad", "value": "Paquistaní" },
          { "label": "Profesión", "value": "Hombre de negocios (تاجر)" },
          { "label": "Estado Civil", "value": "Casado (متزوج)" },
          { "label": "Lugar de Residencia", "value": "Mezzeh Jabal, Damasco" },
          { "label": "Razón de Emisión", "value": "Visita a Siria (زيارة سوريا)" },
          { "label": "Detalles", "value": "(Firmado por S. Ziauddin Ali, Consejero)" }
        ]
      }
    }
  }
];

updates.forEach(update => {
  const idx = data.findIndex(d => d.id === update.id);
  if (idx !== -1) {
    data[idx].translations = update.translations;
    data[idx].category = update.category;
    console.log(`Updated ${update.id}`);
  }
});

fs.writeFileSync('documents_data.json', JSON.stringify(data, null, 2));
console.log("Updates complete.");
