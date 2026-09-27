const fs = require('fs');

const docId = 'doc_169';

const newTranslations = {
  "ur": {
    "name": "اردو",
    "dir": "rtl",
    "docName": "ڈیتھ سرٹیفکیٹ - وزارتِ صحت عراق",
    "lines": [
      { "label": "سربراہ", "value": "جمہوریہ عراق – وزارتِ صحت | شعبہ شماریاتِ صحت و پیدائش و اموات | ڈیتھ سرٹیفکیٹ (موت کا باضابطہ تصدیق نامہ)" },
      { "label": "سرٹیفکیٹ کی تفصیلات", "value": "سرٹیفکیٹ نمبر: 245 | تاریخِ اجراء: 11 مئی 1980ء" },
      { "label": "متوفی کے کوائف", "value": "متوفی کا نام و ولدیت: سید محمد نقوی | عمر: 56 سال | جنس: مرد | قومیت: پاکستانی | مذہب: مسلمان | پیشہ: تاجر (Merchant) | ازدواجی حیثیت: شادی شدہ" },
      { "label": "رہائش اور وفات", "value": "مستقل پتہ: المشراق، علاقہ نمبر: 7، گلی نمبر: 22، مکان نمبر: 18 | تاریخِ وفات: 4 مئی 1980ء | مقامِ وفات: دبئی – متحدہ عرب امارات" },
      { "label": "والدین اور اطلاع دہندہ", "value": "والد کا نام: محسن | والدہ کا نام: صفیہ غفوری | وفات کی اطلاع دہندہ: شمشیر حیدر (رشتہ: متوفی کا بیٹا)" },
      { "label": "طبی وجوہات", "value": "سببِ وفات: دل کا دورہ / حرکتِ قلب بند ہونا (Heart Failure) | تصدیق کنندہ معالج: ڈاکٹر رامی کرم (دستخط شدہ)" },
      { "label": "قانونی مترجم کی توثیق", "value": "عربی سے انگریزی میں قانونی مترجم کا تصدیق شدہ ترجمہ، جس پر عراقی وزارتِ خارجہ/سفارتی اسٹامپ اور باضابطہ مہریں ثبت ہیں۔" }
    ]
  },
  "en": {
    "name": "English",
    "dir": "ltr",
    "docName": "Death Certificate - Ministry of Health Iraq",
    "lines": [
      { "label": "Header", "value": "Republic of Iraq – Ministry of Health | Live & Health Statistic Department | Certificate of Death" },
      { "label": "Certificate Details", "value": "Certificate No.: 245 | Date of Issue: 11/05/1980" },
      { "label": "Deceased Particulars", "value": "Name & Surname of the Deceased: SAYED MOHAMMED NAKAVI | Age: 56 Years | Sex: Male | Nationality: Pakistani | Religion: Muslim | Profession: Merchant (Business/Trade) | Marital Status: Married" },
      { "label": "Residence and Death", "value": "Permanent Address: Al-Meshraq, Region: 7, Lane: 22, House: 18 | Date of Death: 04/05/1980 | Place of Death: Dubai – U.A.E." },
      { "label": "Parents & Informer", "value": "Father's Name: Mohsen | Mother's Name: Safia Ghafouri | Informer of Death: Shamshir Haidar (Relationship: His Son)" },
      { "label": "Medical Cause", "value": "Cause of Death: Heart Failure | Certifying Physician: Dr. Rami Karam (Signed)" },
      { "label": "Translator's Attestation", "value": "Officially translated from Arabic by a certified Sworn Translator (Attested with Iraqi Consular stamps and Sworn Translator seal)." }
    ]
  },
  "ar": {
    "name": "العربية",
    "dir": "rtl",
    "docName": "شهادة وفاة - وزارة الصحة العراقية",
    "lines": [
      { "label": "الترويسة", "value": "الجمهورية العراقية – وزارة الصحة | مديرية الإحصاء الصحي والحياتي | شهادة وفاة" },
      { "label": "تفاصيل الشهادة", "value": "رقم الشهادة: 245 | تاريخ الإصدار: 11/05/1980" },
      { "label": "بيانات المتوفى", "value": "اسم المتوفى ولقبه: سيد محمد نقوي | العمر: 56 سنة | الجنس: ذكر | الجنسية: باكستاني | الديانة: مسلم | المهنة: تاجر | الحالة الاجتماعية: متزوج" },
      { "label": "الإقامة والوفاة", "value": "العنوان الدائم: المشراق، محلة: 7، زقاق: 22، دار: 18 | تاريخ الوفاة: 04/05/1980 | مكان الوفاة: دبي – الإمارات العربية المتحدة" },
      { "label": "الوالدان والمبلغ", "value": "اسم الأب: محسن | اسم الأم: صفية غفوري | المبلغ عن الوفاة: شمشير حيدر (صلة القرابة: ابنه)" },
      { "label": "الأسباب الطبية", "value": "سبب الوفاة: فشل في عضلة القلب | الطبيب المصادق: د. رامي كرم (موقع)" },
      { "label": "مصادقة المترجم", "value": "مترجم رسمياً من العربية بواسطة مترجم محلف معتمد (مصدق بطوابع قنصلية عراقية وختم المترجم المحلف)." }
    ]
  },
  "fa": {
    "name": "فارسی",
    "dir": "rtl",
    "docName": "گواهی فوت - وزارت بهداشت عراق",
    "lines": [
      { "label": "سربرگ", "value": "جمهوری عراق - وزارت بهداشت | اداره آمار حیاتی و بهداشتی | گواهی فوت" },
      { "label": "جزئیات گواهی", "value": "شماره گواهی: ۲۴۵ | تاریخ صدور: ۱۱/۰۵/۱۹۸۰" },
      { "label": "مشخصات متوفی", "value": "نام و نام خانوادگی متوفی: سید محمد نقوی | سن: ۵۶ سال | جنسیت: مرد | ملیت: پاکستانی | دین: مسلمان | شغل: تاجر | وضعیت تأهل: متأهل" },
      { "label": "محل سکونت و فوت", "value": "آدرس دائم: المشراق، منطقه: ۷، کوچه: ۲۲، پلاک: ۱۸ | تاریخ فوت: ۰۴/۰۵/۱۹۸۰ | محل فوت: دبی – امارات متحده عربی" },
      { "label": "والدین و اطلاع‌دهنده", "value": "نام پدر: محسن | نام مادر: صفیه غفوری | اطلاع‌دهنده فوت: شمشیر حیدر (نسبت: پسرش)" },
      { "label": "علت پزشکی", "value": "علت فوت: نارسایی قلبی | پزشک تأییدکننده: دکتر رامی کرم (امضا شده)" },
      { "label": "تأییدیه مترجم", "value": "به طور رسمی از عربی توسط مترجم رسمی قسم‌خورده ترجمه شده است (ممهور به تمبرهای کنسولی عراق و مهر مترجم رسمی)." }
    ]
  },
  "es": {
    "name": "Español",
    "dir": "ltr",
    "docName": "Certificado de Defunción - Ministerio de Salud de Irak",
    "lines": [
      { "label": "Encabezado", "value": "República de Irak – Ministerio de Salud | Departamento de Estadística Vital y de Salud | Certificado de Defunción" },
      { "label": "Detalles del Certificado", "value": "Certificado No.: 245 | Fecha de Emisión: 11/05/1980" },
      { "label": "Datos del Fallecido", "value": "Nombre y Apellidos del Fallecido: SAYED MOHAMMED NAKAVI | Edad: 56 Años | Sexo: Masculino | Nacionalidad: Paquistaní | Religión: Musulmán | Profesión: Comerciante | Estado Civil: Casado" },
      { "label": "Residencia y Fallecimiento", "value": "Dirección Permanente: Al-Meshraq, Región: 7, Callejón: 22, Casa: 18 | Fecha de Defunción: 04/05/1980 | Lugar de Defunción: Dubái – E.A.U." },
      { "label": "Padres e Informante", "value": "Nombre del Padre: Mohsen | Nombre de la Madre: Safia Ghafouri | Informante de la Defunción: Shamshir Haidar (Relación: Su Hijo)" },
      { "label": "Causa Médica", "value": "Causa de Defunción: Insuficiencia Cardíaca | Médico Certificador: Dr. Rami Karam (Firmado)" },
      { "label": "Certificación del Traductor", "value": "Traducido oficialmente del árabe por un Traductor Jurado certificado (Certificado con sellos consulares iraquíes y sello del Traductor Jurado)." }
    ]
  }
};

const data = JSON.parse(fs.readFileSync('documents_data.json', 'utf8'));
const docIndex = data.findIndex(d => d.id === docId);

if (docIndex !== -1) {
  data[docIndex].translations = newTranslations;
  data[docIndex].category = 'personal'; 
  fs.writeFileSync('documents_data.json', JSON.stringify(data, null, 2));
  console.log("Updated doc_169 successfully");
} else {
  console.log("Doc not found");
}
