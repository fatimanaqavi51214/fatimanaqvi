const fs = require('fs');

const data = JSON.parse(fs.readFileSync('documents_data.json', 'utf8'));

const updates = [
  {
    id: 'doc_009',
    category: 'embassy',
    translations: {
      "ur": {
        "name": "اردو",
        "dir": "rtl",
        "docName": "پاکستانی سفارت خانے کا سرٹیفکیٹ برائے شوہر (1998)",
        "lines": [
          { "label": "Details", "value": "سفارت خانہ اسلامی جمہوریہ پاکستان، دمشق" },
          { "label": "تاریخ", "value": "11 مارچ 1998" },
          { "label": "نام", "value": "غلام سرور" },
          { "label": "قومیت", "value": "پاکستانی" },
          { "label": "پیشہ", "value": "تاجر (Businessman)" },
          { "label": "رہائش کی جگہ", "value": "مزہ جبل، دمشق" },
          { "label": "Details", "value": "(ایس۔ ضیاء الدین علی، کونسلر کے دستخط)" }
        ]
      },
      "en": {
        "name": "English",
        "dir": "ltr",
        "docName": "Pakistani Embassy Certificate for Husband (1998)",
        "lines": [
          { "label": "Details", "value": "Embassy of the Islamic Republic of Pakistan, Damascus" },
          { "label": "Date", "value": "11 / 03 / 1998" },
          { "label": "Name", "value": "Ghulam Sarwar" },
          { "label": "Nationality", "value": "Pakistani" },
          { "label": "Profession", "value": "Businessman (تاجر)" },
          { "label": "Place of Residence", "value": "Mezzeh Jabal, Damascus" },
          { "label": "Details", "value": "(Signed by S. Ziauddin Ali, Counsellor)" }
        ]
      },
      "ar": {
        "name": "العربية",
        "dir": "rtl",
        "docName": "شهادة السفارة الباكستانية للزوج (1998)",
        "lines": [
          { "label": "تفاصيل", "value": "سفارة جمهورية باكستان الإسلامية، دمشق" },
          { "label": "التاريخ", "value": "11 / 03 / 1998" },
          { "label": "الاسم", "value": "غلام سرور" },
          { "label": "الجنسية", "value": "باكستانية" },
          { "label": "المهنة", "value": "تاجر" },
          { "label": "مكان الإقامة", "value": "مزة جبل، دمشق" },
          { "label": "تفاصيل", "value": "(توقيع س. ضياء الدين علي، مستشار)" }
        ]
      },
      "fa": {
        "name": "فارسی",
        "dir": "rtl",
        "docName": "گواهی سفارت پاکستان برای همسر (۱۹۹۸)",
        "lines": [
          { "label": "جزئیات", "value": "سفارت جمهوری اسلامی پاکستان، دمشق" },
          { "label": "تاریخ", "value": "۱۱ / ۰۳ / ۱۹۹۸" },
          { "label": "نام", "value": "غلام سرور" },
          { "label": "ملیت", "value": "پاکستانی" },
          { "label": "شغل", "value": "تاجر" },
          { "label": "محل سکونت", "value": "مزه جبل، دمشق" },
          { "label": "جزئیات", "value": "(با امضای س. ضیاء الدین علی، مشاور)" }
        ]
      },
      "es": {
        "name": "Español",
        "dir": "ltr",
        "docName": "Certificado de la Embajada de Pakistán para Esposo (1998)",
        "lines": [
          { "label": "Detalles", "value": "Embajada de la República Islámica de Pakistán, Damasco" },
          { "label": "Fecha", "value": "11 / 03 / 1998" },
          { "label": "Nombre", "value": "Ghulam Sarwar" },
          { "label": "Nacionalidad", "value": "Paquistaní" },
          { "label": "Profesión", "value": "Hombre de negocios (تاجر)" },
          { "label": "Lugar de Residencia", "value": "Mezzeh Jabal, Damasco" },
          { "label": "Detalles", "value": "(Firmado por S. Ziauddin Ali, Consejero)" }
        ]
      }
    }
  },
  {
    id: 'doc_011',
    category: 'personal',
    translations: {
      "ur": {
        "name": "اردو",
        "dir": "rtl",
        "docName": "دبئی ڈرائیونگ لائسنس",
        "lines": [
          { "label": "Details", "value": "متحدہ عرب امارات - وزارتِ داخلہ - دبئی" },
          { "label": "دستاویز", "value": "ڈرائیونگ لائسنس (رخصة سوق)" },
          { "label": "مکمل نام", "value": "نصرت فاطمہ غلام سرور" },
          { "label": "قومیت", "value": "پاکستانی" },
          { "label": "پیشہ", "value": "مینیجر (مديرة) (یہ ثابت کرتا ہے کہ یو اے ای حکومت کے ریکارڈ میں ان کا عہدہ مینیجر کا تھا)" }
        ]
      },
      "en": {
        "name": "English",
        "dir": "ltr",
        "docName": "Dubai Driving License",
        "lines": [
          { "label": "Details", "value": "United Arab Emirates - Ministry of Interior - Dubai" },
          { "label": "Document", "value": "Driving License (رخصة سوق)" },
          { "label": "Full Name", "value": "Nusrat Fatima Ghulam Sarwar" },
          { "label": "Nationality", "value": "Pakistani" },
          { "label": "Profession", "value": "Manager (مديرة) (This proves that in the UAE Government records, her designation was Manager)" }
        ]
      },
      "ar": {
        "name": "العربية",
        "dir": "rtl",
        "docName": "رخصة قيادة دبي",
        "lines": [
          { "label": "تفاصيل", "value": "الإمارات العربية المتحدة - وزارة الداخلية - دبي" },
          { "label": "الوثيقة", "value": "رخصة سوق" },
          { "label": "الاسم الكامل", "value": "نصرت فاطمة غلام سرور" },
          { "label": "الجنسية", "value": "باكستانية" },
          { "label": "المهنة", "value": "مديرة (وهذا يثبت أن منصبها في سجلات حكومة الإمارات كان مديرة)" }
        ]
      },
      "fa": {
        "name": "فارسی",
        "dir": "rtl",
        "docName": "گواهینامه رانندگی دبی",
        "lines": [
          { "label": "جزئیات", "value": "امارات متحده عربی - وزارت کشور - دبی" },
          { "label": "سند", "value": "گواهینامه رانندگی (رخصة سوق)" },
          { "label": "نام کامل", "value": "نصرت فاطمه غلام سرور" },
          { "label": "ملیت", "value": "پاکستانی" },
          { "label": "شغل", "value": "مدیر (مديرة) (این ثابت می‌کند که در سوابق دولت امارات، سمت وی مدیر بوده است)" }
        ]
      },
      "es": {
        "name": "Español",
        "dir": "ltr",
        "docName": "Licencia de Conducir de Dubái",
        "lines": [
          { "label": "Detalles", "value": "Emiratos Árabes Unidos - Ministerio del Interior - Dubái" },
          { "label": "Documento", "value": "Licencia de Conducir (رخصة سوق)" },
          { "label": "Nombre Completo", "value": "Nusrat Fatima Ghulam Sarwar" },
          { "label": "Nacionalidad", "value": "Paquistaní" },
          { "label": "Profesión", "value": "Gerente (مديرة) (Esto prueba que en los registros del Gobierno de los EAU, su cargo era Gerente)" }
        ]
      }
    }
  },
  {
    id: 'doc_013',
    category: 'embassy',
    translations: {
      "ur": {
        "name": "اردو",
        "dir": "rtl",
        "docName": "پاکستانی سفارت خانے کا سرٹیفکیٹ - 2009",
        "lines": [
          { "label": "Details", "value": "سفارت خانہ اسلامی جمہوریہ پاکستان، دمشق" },
          { "label": "تاریخ", "value": "26 فروری 2009" },
          { "label": "دستاویز", "value": "شناختی سرٹیفکیٹ (اخراج قيد نفوس)" },
          { "label": "Details", "value": "پاکستانی سفارت خانہ دمشق اس بات کی تصدیق کرتا ہے کہ ذیل میں دی گئی معلومات درست ہیں اور متعلقہ شخص کے پاسپورٹ نمبر 691068... (جاری کردہ میڈرڈ بتاریخ 14 ستمبر 2006) کے عین مطابق ہیں۔" },
          { "label": "نام اور شہرت", "value": "نصرت فاطمہ" },
          { "label": "والد کا نام", "value": "سید محمد نقوی" },
          { "label": "والدہ کا نام", "value": "مہر بانو نقوی" },
          { "label": "جائے اور سالِ پیدائش", "value": "پاکستان، 1958" },
          { "label": "قومیت", "value": "پاکستانی" },
          { "label": "پیشہ", "value": "وکیل (محامية)" },
          { "label": "ازدواجی حیثیت", "value": "شادی شدہ" },
          { "label": "مذہب", "value": "مسلمان" },
          { "label": "رہائش کی جگہ", "value": "مزہ جبل / دمشق" },
          { "label": "دستاویز جاری کرنے کی وجہ", "value": "سرکاری معاملات / کارروائی (معاملات دولة)" },
          { "label": "Details", "value": "(زاہد علی، کونسلر، سفارت خانہ پاکستان دمشق کے دستخط)\n(نوٹ: اس دستاویز پر درخواست گزار کی تصویر اور شامی وزارتِ خارجہ کی تصدیقی مہر موجود ہے)" }
        ]
      },
      "en": {
        "name": "English",
        "dir": "ltr",
        "docName": "Embassy Certificate - 2009",
        "lines": [
          { "label": "Details", "value": "EMBASSY OF THE ISLAMIC REPUBLIC OF PAKISTAN, Damascus" },
          { "label": "Date", "value": "26 / 02 / 2009" },
          { "label": "Document", "value": "Civil Extract (إخراج قيد نفوس)" },
          { "label": "Details", "value": "The Pakistani Embassy in Damascus certifies that the information detailed below is correct and matches the passport of the concerned person, No. 691068... issued in Madrid on 14/09/2006." },
          { "label": "Name and Surname", "value": "Nusrat Fatima" },
          { "label": "Father's Name", "value": "Syed Muhammad Naqvi" },
          { "label": "Mother's Name", "value": "Mehar Bano Naqvi" },
          { "label": "Place and Year of Birth", "value": "Pakistan, 1958" },
          { "label": "Nationality", "value": "Pakistani" },
          { "label": "Profession", "value": "Lawyer (محامية)" },
          { "label": "Marital Status", "value": "Married" },
          { "label": "Religion", "value": "Muslim" },
          { "label": "Place of Residence", "value": "Mezzeh Jabal / Damascus" },
          { "label": "Reason for Issuance", "value": "State / Official Transactions (معاملات دولة)" },
          { "label": "Details", "value": "(Signed by Zahid Ali, Counsellor, Embassy of Pakistan, Damascus)\n(Note: Document bears the applicant's photograph and authentication stamp from the Syrian Ministry of Foreign Affairs)" }
        ]
      },
      "ar": {
        "name": "العربية",
        "dir": "rtl",
        "docName": "شهادة السفارة الباكستانية - 2009",
        "lines": [
          { "label": "تفاصيل", "value": "سفارة جمهورية باكستان الإسلامية، دمشق" },
          { "label": "التاريخ", "value": "26 / 02 / 2009" },
          { "label": "الوثيقة", "value": "إخراج قيد نفوس" },
          { "label": "تفاصيل", "value": "تشهد السفارة الباكستانية في دمشق أن المعلومات المفصلة أدناه صحيحة ومطابقة لجواز سفر الشخص المعني، رقم 691068... الصادر في مدريد بتاريخ 14/09/2006." },
          { "label": "الاسم والشهرة", "value": "نصرت فاطمة" },
          { "label": "اسم الأب", "value": "سيد محمد نقوي" },
          { "label": "اسم الأم", "value": "مهر بانو نقوي" },
          { "label": "مكان وسنة الولادة", "value": "باكستان، 1958" },
          { "label": "الجنسية", "value": "باكستانية" },
          { "label": "المهنة", "value": "محامية" },
          { "label": "الحالة الاجتماعية", "value": "متزوجة" },
          { "label": "الديانة", "value": "مسلمة" },
          { "label": "مكان الإقامة", "value": "مزة جبل / دمشق" },
          { "label": "سبب الإصدار", "value": "معاملات دولة" },
          { "label": "تفاصيل", "value": "(توقيع زاهد علي، مستشار سفارة باكستان، دمشق)\n(ملاحظة: تحمل الوثيقة صورة مقدم الطلب وختم تصديق من وزارة الخارجية السورية)" }
        ]
      },
      "fa": {
        "name": "فارسی",
        "dir": "rtl",
        "docName": "گواهی سفارت پاکستان - ۲۰۰۹",
        "lines": [
          { "label": "جزئیات", "value": "سفارت جمهوری اسلامی پاکستان، دمشق" },
          { "label": "تاریخ", "value": "۲۶ / ۰۲ / ۲۰۰۹" },
          { "label": "سند", "value": "گواهی ثبت احوال (إخراج قيد نفوس)" },
          { "label": "جزئیات", "value": "سفارت پاکستان در دمشق گواهی می‌دهد که اطلاعات مشروح زیر صحیح بوده و با گذرنامه شخص مربوطه، شماره ۶۹۱۰۶۸... صادر شده در مادرید به تاریخ ۱۴/۰۹/۲۰۰۶ مطابقت دارد." },
          { "label": "نام و نام خانوادگی", "value": "نصرت فاطمه" },
          { "label": "نام پدر", "value": "سید محمد نقوی" },
          { "label": "نام مادر", "value": "مهر بانو نقوی" },
          { "label": "مکان و سال تولد", "value": "پاکستان، ۱۹۵۸" },
          { "label": "ملیت", "value": "پاکستانی" },
          { "label": "شغل", "value": "وکیل (محامية)" },
          { "label": "وضعیت تأهل", "value": "متاهل" },
          { "label": "دین", "value": "مسلمان" },
          { "label": "محل سکونت", "value": "مزه جبل / دمشق" },
          { "label": "دلیل صدور", "value": "معاملات دولتی (معاملات دولة)" },
          { "label": "جزئیات", "value": "(با امضای زاهد علی، مشاور سفارت پاکستان، دمشق)\n(توجه: سند دارای عکس متقاضی و مهر تأیید از وزارت امور خارجه سوریه است)" }
        ]
      },
      "es": {
        "name": "Español",
        "dir": "ltr",
        "docName": "Certificado de la Embajada de Pakistán - 2009",
        "lines": [
          { "label": "Detalles", "value": "EMBAJADA DE LA REPÚBLICA ISLÁMICA DE PAKISTÁN, Damasco" },
          { "label": "Fecha", "value": "26 / 02 / 2009" },
          { "label": "Documento", "value": "Extracto Civil (إخراج قيد نفوس)" },
          { "label": "Detalles", "value": "La Embajada de Pakistán en Damasco certifica que la información detallada a continuación es correcta y coincide con el pasaporte de la persona en cuestión, No. 691068... emitido en Madrid el 14/09/2006." },
          { "label": "Nombre y Apellidos", "value": "Nusrat Fatima" },
          { "label": "Nombre del Padre", "value": "Syed Muhammad Naqvi" },
          { "label": "Nombre de la Madre", "value": "Mehar Bano Naqvi" },
          { "label": "Lugar y Año de Nacimiento", "value": "Pakistán, 1958" },
          { "label": "Nacionalidad", "value": "Paquistaní" },
          { "label": "Profesión", "value": "Abogada (محامية)" },
          { "label": "Estado Civil", "value": "Casada" },
          { "label": "Religión", "value": "Musulmana" },
          { "label": "Lugar de Residencia", "value": "Mezzeh Jabal / Damasco" },
          { "label": "Razón de Emisión", "value": "Transacciones Estatales / Oficiales (معاملات دولة)" },
          { "label": "Detalles", "value": "(Firmado por Zahid Ali, Consejero, Embajada de Pakistán, Damasco)\n(Nota: El documento lleva la fotografía del solicitante y el sello de autenticación del Ministerio de Relaciones Exteriores de Siria)" }
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
console.log("All updates complete.");
