const fs = require('fs');

const docId = 'doc_197';

const newTranslations = {
  "ur": {
    "name": "اردو",
    "dir": "rtl",
    "docName": "حکومتِ پنجاب – ڈیتھ سرٹیفکیٹ (وفات سرٹیفکیٹ)",
    "lines": [
      { "label": "سرنامہ", "value": "حکومتِ پنجاب، پاکستان | وفات سرٹیفکیٹ (Death Certificate) | سی آر ایم ایس نمبر: D352116-12-0171 | فارم نمبر: L11449203 | نوعیتِ وفات: نارمل / طبعی" },
      { "label": "درخواست دہندہ کے کوائف", "value": "درخواست دہندہ کا نام: فواد حیدر | شناختی کارڈ نمبر: 9130601081723 | متوفی سے رشتہ: والد | پتہ: مکان نمبر 136، بلاک نمبر ای-2، محلہ جوہر ٹاؤن، شہر لاہور، تحصیل لاہور، ضلع لاہور" },
      { "label": "متوفی کے کوائف", "value": "متوفی کا نام: غلام سرور | شناختی کارڈ نمبر: 3420245646599 | والد کا نام: فضل کریم | تاریخِ پیدائش: یکم جنوری 1942ء | جنس: مرد | مذہب: اسلام | جائے وفات: ہسپتال | تاریخِ وفات: 31 اکتوبر 2005ء | تاریخِ تدفین: 31 اکتوبر 2005ء | وجہِ موت: طبعی (Natural)" },
      { "label": "تدفین و اندراج کے کوائف", "value": "تدفین کنندہ: سجاد سرور (شناختی کارڈ نمبر: 3520104876897) – قریبی رشتہ دار | قبرستان کا نام: کوٹلہ عرب، کھاریاں | تاریخِ اندراج: 18 اکتوبر 2012ء | تاریخِ اجراء: 10 مارچ 2014ء | جاری کنندہ: سیکرٹری یونین کونسل (116)، جوہر ٹاؤن، لاہور (دستخط و مہر شدہ)" }
    ]
  },
  "en": {
    "name": "English",
    "dir": "ltr",
    "docName": "Death Certificate - Government of Punjab",
    "lines": [
      { "label": "Header", "value": "Government of the Punjab, Pakistan | Death Certificate (وفات سرٹیفکیٹ) | CRMS No.: D352116-12-0171 | Form No.: L11449203 | Nature of Death: Normal" },
      { "label": "Applicant Details", "value": "Applicant Name: Fawad Haider | Applicant CNIC: 9130601081723 | Relation with Deceased: Father | Address: House #: 136, Block #: E-2, Johar Town, City: Lahore, Tehsil: Lahore, District: Lahore" },
      { "label": "Deceased Details", "value": "Deceased Name: GHULAM SARWAR | CNIC: 3420245646599 | Father's Name: FAZAL KARIM | Date of Birth: 01-01-1942 | Sex: Male | Religion: Islam | Place of Death: Hospital | Date of Death: 31-10-2005 | Date of Burial: 31-10-2005 | Reason of Death: Natural" },
      { "label": "Burial & Registration Info", "value": "Burial Arranged By: Sajjad Sarwar (CNIC: 3520104876897) – Blood Relation | Graveyard Name: Kotla Arab Kharian | Entry Date: 18-10-2012 | Issue Date: 10-03-2014 | Issuing Authority: Secretary Union Council 116, Johar Town, Lahore (Signed & Stamped)" }
    ]
  },
  "ar": {
    "name": "العربية",
    "dir": "rtl",
    "docName": "شهادة وفاة - حكومة البنجاب",
    "lines": [
      { "label": "الترويسة", "value": "حكومة البنجاب، باكستان | شهادة وفاة | رقم CRMS: D352116-12-0171 | رقم النموذج: L11449203 | طبيعة الوفاة: عادي" },
      { "label": "بيانات مقدم الطلب", "value": "اسم مقدم الطلب: فؤاد حيدر | رقم الهوية الوطنية: 9130601081723 | صلة القرابة بالمتوفى: أب | العنوان: منزل رقم 136، بلوك E-2، حي جوهر تاون، مدينة لاهور، تحصيل لاهور، منطقة لاهور" },
      { "label": "بيانات المتوفى", "value": "اسم المتوفى: غلام سرور | رقم الهوية: 3420245646599 | اسم الأب: فضل كريم | تاريخ الميلاد: 01-01-1942 | الجنس: ذكر | الديانة: الإسلام | مكان الوفاة: مستشفى | تاريخ الوفاة: 31-10-2005 | تاريخ الدفن: 31-10-2005 | سبب الوفاة: طبيعي" },
      { "label": "معلومات الدفن والتسجيل", "value": "مُرتب الدفن: سجاد سرور (رقم الهوية: 3520104876897) – صلة قرابة بالدم | اسم المقبرة: كوتلا عرب خاريهان | تاريخ التسجيل: 18-10-2012 | تاريخ الإصدار: 10-03-2014 | جهة الإصدار: سكرتير المجلس النقابي 116، جوهر تاون، لاهور (موقع ومختوم)" }
    ]
  },
  "fa": {
    "name": "فارسی",
    "dir": "rtl",
    "docName": "گواهی فوت - حکومت پنجاب",
    "lines": [
      { "label": "سربرگ", "value": "حکومت پنجاب، پاکستان | گواهی فوت | شماره CRMS: D352116-12-0171 | شماره فرم: L11449203 | نوع فوت: عادی" },
      { "label": "مشخصات متقاضی", "value": "نام متقاضی: فواد حیدر | شماره کارت ملی: 9130601081723 | نسبت با متوفی: پدر | آدرس: خانه پلاک ۱۳۶، بلوک E-2، محله جوهر تاون، شهر لاهور، بخش لاهور، شهرستان لاهور" },
      { "label": "مشخصات متوفی", "value": "نام متوفی: غلام سرور | شماره کارت ملی: 3420245646599 | نام پدر: فضل کریم | تاریخ تولد: ۰۱-۰۱-۱۹۴۲ | جنسیت: مرد | دین: اسلام | محل فوت: بیمارستان | تاریخ فوت: ۳۱-۱۰-۲۰۰۵ | تاریخ خاکسپاری: ۳۱-۱۰-۲۰۰۵ | علت فوت: طبیعی" },
      { "label": "اطلاعات خاکسپاری و ثبت", "value": "ترتیب‌دهنده خاکسپاری: سجاد سرور (شماره کارت ملی: 3520104876897) – نسبت خونی | نام قبرستان: کوتله عرب کھاریاں | تاریخ ثبت: ۱۸-۱۰-۲۰۱۲ | تاریخ صدور: ۱۰-۰۳-۲۰۱۴ | مرجع صادرکننده: منشی شورای اتحادیه ۱۱۶، جوهر تاون، لاهور (امضا و مهر شده)" }
    ]
  },
  "es": {
    "name": "Español",
    "dir": "ltr",
    "docName": "Certificado de Defunción - Gobierno de Punjab",
    "lines": [
      { "label": "Encabezado", "value": "Gobierno de Punjab, Pakistán | Certificado de Defunción | No. CRMS: D352116-12-0171 | No. de Formulario: L11449203 | Naturaleza de la Defunción: Normal" },
      { "label": "Datos del Solicitante", "value": "Nombre del Solicitante: Fawad Haider | CNIC del Solicitante: 9130601081723 | Relación con el Difunto: Padre | Dirección: Casa No. 136, Bloque E-2, Johar Town, Ciudad: Lahore, Tehsil: Lahore, Distrito: Lahore" },
      { "label": "Datos del Difunto", "value": "Nombre del Difunto: GHULAM SARWAR | CNIC: 3420245646599 | Nombre del Padre: FAZAL KARIM | Fecha de Nacimiento: 01-01-1942 | Sexo: Masculino | Religión: Islam | Lugar de Defunción: Hospital | Fecha de Defunción: 31-10-2005 | Fecha de Entierro: 31-10-2005 | Razón de la Defunción: Natural" },
      { "label": "Información de Entierro", "value": "Entierro Organizado Por: Sajjad Sarwar (CNIC: 3520104876897) – Relación de Sangre | Nombre del Cementerio: Kotla Arab Kharian | Fecha de Registro: 18-10-2012 | Fecha de Emisión: 10-03-2014 | Autoridad Emisora: Secretario del Consejo Sindical 116, Johar Town, Lahore (Firmado y Sellado)" }
    ]
  }
};

const data = JSON.parse(fs.readFileSync('documents_data.json', 'utf8'));
const docIndex = data.findIndex(d => d.id === docId);

if (docIndex !== -1) {
  data[docIndex].translations = newTranslations;
  data[docIndex].imageUrl = "https://res.cloudinary.com/b7xbeztp/image/upload/v1790360757/image197.jpg";
  data[docIndex].category = 'official'; 
  fs.writeFileSync('documents_data.json', JSON.stringify(data, null, 2));
  console.log("Updated doc_197 successfully");
} else {
  console.log("Doc not found");
}
