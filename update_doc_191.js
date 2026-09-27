const fs = require('fs');

const docId = 'doc_191';

const newTranslations = {
  "ur": {
    "name": "اردو",
    "dir": "rtl",
    "docName": "اندراجِ وفات سرٹیفکیٹ (Death Registration Certificate)",
    "lines": [
      { "label": "سرنامہ", "value": "حکومتِ پنجاب، پاکستان | اندراجِ وفات سرٹیفکیٹ (Death Registration Certificate) | سی آر ایم ایس نمبر (CRMS No): D352116-12-0171" },
      { "label": "متوفی کے کوائف", "value": "نام: غلام سرور | قومیت: پاکستانی | مذہب: اسلام | شناختی کارڈ نمبر: 9-4564659-34202 | تاریخِ پیدائش: یکم جنوری 1942ء | جنس: مرد | تاریخِ وفات: 31 اکتوبر 2005ء | تاریخِ تدفین / آخری رسومات: 31 اکتوبر 2005ء | جائے وفات: ہسپتال | وجہ و کیفیتِ وفات: قدرتی / نارمل | جائے تدفین: کوٹلہ عرب، کھاریاں" },
      { "label": "والدین کی معلومات", "value": "والد کا نام: فضل کریم | والدہ کا نام: سردار بی بی" },
      { "label": "پتہ", "value": "رہائشی پتہ: مکان نمبر 136، بلاک ای-2، محلہ جوہر ٹاؤن، شہر لاہور کینٹ | تحصیل: لاہور کینٹ | ضلع: لاہور" },
      { "label": "درخواست دہندہ کے کوائف", "value": "نام: فواد حیدر | متوفی سے رشتہ: بیٹا | شناختی کارڈ نمبر: 3-0108172-91306" },
      { "label": "تدفین کی تصدیق کنندہ", "value": "نام: سجاد سرور | متوفی سے رشتہ: بیٹا | شناختی کارڈ نمبر: 7-0487689-35201" },
      { "label": "ریکارڈ و اجراء کی تفصیل", "value": "تاریخِ اندراج: 18 اکتوبر 2012ء | تاریخِ اجراء: 5 اپریل 2017ء | اندراج کا اسٹیٹس: نارمل | جاری کنندہ: سیکرٹری یونین کونسل، لاہور (دستخط و سرکاری مہر شدہ) | بارکوڈ نمبر: 30060910065608" }
    ]
  },
  "en": {
    "name": "English",
    "dir": "ltr",
    "docName": "Death Registration Certificate",
    "lines": [
      { "label": "Header", "value": "Government of Punjab, Pakistan | Death Registration Certificate | CRMS No: D352116-12-0171" },
      { "label": "Deceased Details", "value": "Name: Ghulam Sarwar | Nationality: Pakistani | Religion: Islam | CNIC No: 34202-4564659-9 | Date of Birth: 1st January 1942 | Gender: Male | Date of Death: 31st October 2005 | Date of Burial / Final Rites: 31st October 2005 | Place of Death: Hospital | Cause / Nature of Death: Natural / Normal | Place of Burial: Kotla Arab, Kharian" },
      { "label": "Parents Details", "value": "Father's Name: Fazal Karim | Mother's Name: Sardar Bibi" },
      { "label": "Address", "value": "Residential Address: House No. 136, Block E-2, Mohalla Johar Town, City Lahore Cantt | Tehsil: Lahore Cantt | District: Lahore" },
      { "label": "Applicant Details", "value": "Name: Fawad Haider | Relationship with Deceased: Son | CNIC No: 91306-0108172-3" },
      { "label": "Certifier of Burial", "value": "Name: Sajjad Sarwar | Relationship with Deceased: Son | CNIC No: 35201-0487689-7" },
      { "label": "Record Details", "value": "Date of Registration: 18th October 2012 | Date of Issue: 5th April 2017 | Registration Status: Normal | Issuer: Secretary Union Council, Lahore (Signed & Officially Stamped) | Barcode No: 30060910065608" }
    ]
  },
  "ar": {
    "name": "العربية",
    "dir": "rtl",
    "docName": "شهادة تسجيل الوفاة",
    "lines": [
      { "label": "الترويسة", "value": "حكومة البنجاب، باكستان | شهادة تسجيل الوفاة | رقم CRMS: D352116-12-0171" },
      { "label": "بيانات المتوفى", "value": "الاسم: غلام سرور | الجنسية: باكستاني | الديانة: الإسلام | رقم الهوية الوطنية: 9-4564659-34202 | تاريخ الميلاد: 1 يناير 1942 | الجنس: ذكر | تاريخ الوفاة: 31 أكتوبر 2005 | تاريخ الدفن / المراسم الأخيرة: 31 أكتوبر 2005 | مكان الوفاة: مستشفى | سبب وحالة الوفاة: طبيعي / عادي | مكان الدفن: كوتلا عرب، خاريهان" },
      { "label": "معلومات الوالدين", "value": "اسم الأب: فضل كريم | اسم الأم: سردار بي بي" },
      { "label": "العنوان", "value": "العنوان السكني: منزل رقم 136، بلوك إي-2، حي جوهر تاون، مدينة لاهور كانت | التحصيل (المركز): لاهور كانت | المنطقة: لاهور" },
      { "label": "بيانات مقدم الطلب", "value": "الاسم: فؤاد حيدر | صلة القرابة بالمتوفى: ابن | رقم الهوية الوطنية: 3-0108172-91306" },
      { "label": "مصدق الدفن", "value": "الاسم: سجاد سرور | صلة القرابة بالمتوفى: ابن | رقم الهوية الوطنية: 7-0487689-35201" },
      { "label": "تفاصيل السجل", "value": "تاريخ التسجيل: 18 أكتوبر 2012 | تاريخ الإصدار: 5 أبريل 2017 | حالة التسجيل: عادي | جهة الإصدار: سكرتير المجلس النقابي، لاهور (موقع ومختوم رسمياً) | رقم الباركود: 30060910065608" }
    ]
  },
  "fa": {
    "name": "فارسی",
    "dir": "rtl",
    "docName": "گواهی ثبت فوت",
    "lines": [
      { "label": "سربرگ", "value": "حکومت پنجاب، پاکستان | گواهی ثبت فوت | شماره CRMS: D352116-12-0171" },
      { "label": "مشخصات متوفی", "value": "نام: غلام سرور | ملیت: پاکستانی | دین: اسلام | شماره کارت ملی: 9-4564659-34202 | تاریخ تولد: ۱ ژانویه ۱۹۴۲ | جنسیت: مرد | تاریخ فوت: ۳۱ اکتبر ۲۰۰۵ | تاریخ خاکسپاری / مراسم نهایی: ۳۱ اکتبر ۲۰۰۵ | محل فوت: بیمارستان | علت و وضعیت فوت: طبیعی / عادی | محل خاکسپاری: کوتله عرب، کھاریاں" },
      { "label": "اطلاعات والدین", "value": "نام پدر: فضل کریم | نام مادر: سردار بی بی" },
      { "label": "آدرس", "value": "آدرس مسکونی: خانه پلاک ۱۳۶، بلوک E-2، محله جوهر تاون، شهر لاهور کانت | بخش: لاهور کانت | شهرستان: لاهور" },
      { "label": "متقاضی", "value": "نام: فواد حیدر | نسبت با متوفی: پسر | شماره کارت ملی: 3-0108172-91306" },
      { "label": "تأییدکننده خاکسپاری", "value": "نام: سجاد سرور | نسبت با متوفی: پسر | شماره کارت ملی: 7-0487689-35201" },
      { "label": "جزئیات ثبت و صدور", "value": "تاریخ ثبت: ۱۸ اکتبر ۲۰۱۲ | تاریخ صدور: ۵ آوریل ۲۰۱۷ | وضعیت ثبت: عادی | صادرکننده: منشی شورای اتحادیه، لاهور (امضا و مهر رسمی شده) | شماره بارکد: 30060910065608" }
    ]
  },
  "es": {
    "name": "Español",
    "dir": "ltr",
    "docName": "Certificado de Registro de Defunción",
    "lines": [
      { "label": "Encabezado", "value": "Gobierno de Punjab, Pakistán | Certificado de Registro de Defunción | No. CRMS: D352116-12-0171" },
      { "label": "Datos del Difunto", "value": "Nombre: Ghulam Sarwar | Nacionalidad: Pakistaní | Religión: Islam | No. de CNIC: 34202-4564659-9 | Fecha de Nacimiento: 1 de enero de 1942 | Género: Masculino | Fecha de Defunción: 31 de octubre de 2005 | Fecha de Entierro / Últimos Ritos: 31 de octubre de 2005 | Lugar de Defunción: Hospital | Causa / Naturaleza de la Defunción: Natural / Normal | Lugar de Entierro: Kotla Arab, Kharian" },
      { "label": "Datos de los Padres", "value": "Nombre del Padre: Fazal Karim | Nombre de la Madre: Sardar Bibi" },
      { "label": "Dirección", "value": "Dirección Residencial: Casa No. 136, Bloque E-2, Mohalla Johar Town, Ciudad de Lahore Cantt | Tehsil: Lahore Cantt | Distrito: Lahore" },
      { "label": "Solicitante", "value": "Nombre: Fawad Haider | Relación con el Difunto: Hijo | No. de CNIC: 91306-0108172-3" },
      { "label": "Certificador del Entierro", "value": "Nombre: Sajjad Sarwar | Relación con el Difunto: Hijo | No. de CNIC: 35201-0487689-7" },
      { "label": "Detalles del Registro", "value": "Fecha de Registro: 18 de octubre de 2012 | Fecha de Emisión: 5 de abril de 2017 | Estado de Registro: Normal | Emisor: Secretario del Consejo Sindical, Lahore (Firmado y Sellado Oficialmente) | No. de Código de Barras: 30060910065608" }
    ]
  }
};

const data = JSON.parse(fs.readFileSync('documents_data.json', 'utf8'));
const docIndex = data.findIndex(d => d.id === docId);

if (docIndex !== -1) {
  data[docIndex].translations = newTranslations;
  data[docIndex].imageUrl = "https://res.cloudinary.com/b7xbeztp/image/upload/v1790360752/image191.jpg";
  data[docIndex].category = 'official'; 
  fs.writeFileSync('documents_data.json', JSON.stringify(data, null, 2));
  console.log("Updated doc_191 successfully");
} else {
  console.log("Doc not found");
}
