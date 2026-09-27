const fs = require('fs');

const docId = 'doc_147';

const newTranslations = {
  "ur": {
    "name": "اردو",
    "dir": "rtl",
    "docName": "درخواست و انتقالِ اراضی",
    "lines": [
      { "label": "لیٹر ہیڈ", "value": "ڈائریکٹوریٹ آف لینڈ رجسٹری (محکمہ اراضی)، الملیحہ | بنام: محکمہ اراضی / لینڈ رجسٹری ڈائریکٹوریٹ" },
      { "label": "حوالہ جات", "value": "ڈائری / جنرل رجسٹر نمبر: 577 | سلسلہ وار نمبر: 16796 | ریئل اسٹیٹ زون: قبر الست (السیدہ زینب)" },
      { "label": "سائل اور التماس", "value": "درخواست گزار: علی الصعاف | مدعا / درخواست: قبر الست میں واقع جائیداد کے قانونی انتقالِ ملکیت (فراغ / بیع کی باضابطہ منتقلی) کی کارروائی اور اندراج کی استدعا۔" },
      { "label": "زمین و رجسٹری کا اندراج", "value": "پلاٹ نمبر: 1006 / قبر الست (یا متعلقہ حوالہ) | مالک کا نام: علی الصعاف | حصص کی تفصیل: رقبے کے حصص (2400 کل حصص میں سے حصہ داری)" },
      { "label": "نوٹ و تصدیق", "value": "دفتری ریکارڈ اور منتقلی کی توثیقی تحریر، بمعہ فنانشل اور ریئل اسٹیٹ اسٹامپ ٹکٹیں اور باضابطہ مہر۔" }
    ]
  },
  "en": {
    "name": "English",
    "dir": "ltr",
    "docName": "Land Registry Application & Cadastral Record",
    "lines": [
      { "label": "Header", "value": "Land Registry Directorate in Al-Mleha | Addressed to: Land Registry Directorate" },
      { "label": "References", "value": "Reference / Journal No.: 577 | Serial No.: 16796 | Real Estate Zone: Qabr Essit" },
      { "label": "Applicant & Request", "value": "Submitted by: Ali As-Saaf | Request: To record the legal title transfer/alienation (Faragh) of the property located in Qabr Essit." },
      { "label": "Property Details", "value": "Property / Plot No.: 1006 / Qabr Essit (or as referenced) | Owner Name: Ali As-Saaf | Share Details: Recorded share (2400 shares base)." },
      { "label": "Endorsement", "value": "Includes handwritten endorsements regarding registry journal entries and title conveyance, with an official registration stamp and revenue stamps affixed." }
    ]
  },
  "ar": {
    "name": "العربية",
    "dir": "rtl",
    "docName": "طلب تسجيل عقاري وسجل مساحي",
    "lines": [
      { "label": "الترويسة", "value": "دائرة المصالح العقارية في المليحة | إلى دائرة المصالح العقارية" },
      { "label": "المراجع", "value": "رقم السجل/اليومية: 577 | الرقم التسلسلي: 16796 | المنطقة العقارية: قبر الست" },
      { "label": "مقدم الطلب والموضوع", "value": "مقدم من: علي الصعاف | الطلب: تسجيل نقل الملكية القانونية (فراغ) للعقار الواقع في قبر الست." },
      { "label": "تفاصيل العقار", "value": "رقم العقار/المحضر: 1006 / قبر الست | اسم المالك: علي الصعاف | تفاصيل الحصة: الحصة المسجلة (2400 سهم أساس)." },
      { "label": "المصادقات", "value": "تتضمن إشارات مكتوبة بخط اليد بخصوص قيود السجل ونقل الملكية، مع ختم التسجيل الرسمي وطوابع مالية وعقارية ملصقة." }
    ]
  },
  "fa": {
    "name": "فارسی",
    "dir": "rtl",
    "docName": "درخواست ثبت اسناد و املاک و سوابق کاداستر",
    "lines": [
      { "label": "سربرگ", "value": "اداره ثبت اسناد و املاک در الملیحه | خطاب به: اداره ثبت اسناد و املاک" },
      { "label": "مراجع", "value": "شماره مرجع / روزنامه: ۵۷۷ | شماره سریال: ۱۶۷۹۶ | منطقه املاک: قبر الست" },
      { "label": "متقاضی و درخواست", "value": "ارائه شده توسط: علی الصعاف | درخواست: برای ثبت انتقال مالکیت قانونی (فراغ) ملک واقع در قبر الست." },
      { "label": "جزئیات ملک", "value": "شماره ملک / پلاک: ۱۰۰۶ / قبر الست (یا طبق ارجاع) | نام مالک: علی الصعاف | جزئیات سهم: سهم ثبت شده (۲۴۰۰ سهم پایه)." },
      { "label": "تأییدیه‌ها", "value": "شامل تأییدیه‌های دست‌نویس در مورد ثبت‌های دفتر روزنامه ثبت و انتقال مالکیت، به همراه مهر رسمی ثبت و تمبرهای مالیاتی الصاق شده است." }
    ]
  },
  "es": {
    "name": "Español",
    "dir": "ltr",
    "docName": "Solicitud de Registro de la Propiedad y Registro Catastral",
    "lines": [
      { "label": "Encabezado", "value": "Dirección de Registro de la Propiedad en Al-Mleha | Dirigido a: Dirección de Registro de la Propiedad" },
      { "label": "Referencias", "value": "Referencia / Diario No.: 577 | No. de Serie: 16796 | Zona Inmobiliaria: Qabr Essit" },
      { "label": "Solicitante y Petición", "value": "Presentado por: Ali As-Saaf | Solicitud: Registrar la transferencia/enajenación del título legal (Faragh) de la propiedad ubicada en Qabr Essit." },
      { "label": "Detalles de la Propiedad", "value": "Propiedad / Lote No.: 1006 / Qabr Essit (o según se haga referencia) | Nombre del Propietario: Ali As-Saaf | Detalles de las Acciones: Acción registrada (base de 2400 acciones)." },
      { "label": "Endosos", "value": "Incluye endosos manuscritos con respecto a las entradas del diario de registro y la transmisión de títulos, con un sello de registro oficial y timbres fiscales adheridos." }
    ]
  }
};

const data = JSON.parse(fs.readFileSync('documents_data.json', 'utf8'));
const docIndex = data.findIndex(d => d.id === docId);

if (docIndex !== -1) {
  data[docIndex].translations = newTranslations;
  data[docIndex].category = 'property'; 
  fs.writeFileSync('documents_data.json', JSON.stringify(data, null, 2));
  console.log("Updated doc_147 successfully");
} else {
  console.log("Doc not found");
}
