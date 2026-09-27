const fs = require('fs');

const docId = 'doc_195';

const newTranslations = {
  "ur": {
    "name": "اردو",
    "dir": "rtl",
    "docName": "قونصل خانہ جنرل پاکستان دبئی – تصدیق نامۂ کوائف (پاسپورٹ تصدیق)",
    "lines": [
      { "label": "سرنامہ", "value": "بسم اللہ الرحمن الرحیم | قونصل خانہ جنرل پاکستان، دبئی (متحدہ عرب امارات) | پوسٹ بکس نمبر: 340 | تاریخ: 2 فروری 1999ء" },
      { "label": "تصدیق", "value": "\"تصدیق کی جاتی ہے کہ قونصل خانہ جنرل پاکستان، دبئی کے ریکارڈ اور سائل کے پاسپورٹ نمبر C754587 (جاری کردہ دمشق بتاریخ 29 دسمبر 1996ء) کے مطابق درج ذیل کوائف درست پائے گئے ہیں:\"" },
      { "label": "کوائف", "value": "نام: مسٹر فواد حیدر | والد کا نام: غلام سرور چودھری | والدہ کا نام: نصرت فاطمہ | تاریخِ پیدائش: 26 ستمبر 1992ء | مقامِ پیدائش: لاہور – پاکستان | قومیت: پاکستانی | مذہب: اسلام | پیشہ: طالب علم (Student) | ازدواجی حیثیت: غیر شادی شدہ | رہائشی پتہ: مزہ الجبل 7/1 دمشق – شام / مکان نمبر 108-بی، گلبرگ، لاہور – پاکستان" },
      { "label": "قانونی وضاحت", "value": "\"یہ سرٹیفکیٹ اپنی جانب سے کسی قانونی ذمہ داری کو قبول کیے بغیر، سائل کی ذاتی درخواست پر جاری کیا جا رہا ہے۔\"" },
      { "label": "دستخط کنندہ", "value": "(سید افضال حسین شاہ) قونصلر آفیسر" }
    ]
  },
  "en": {
    "name": "English",
    "dir": "ltr",
    "docName": "Passport Verification Certificate by Pakistan Consulate Dubai",
    "lines": [
      { "label": "Header", "value": "In the Name of God, The Beneficent, The Merciful | Consulate General of Pakistan, Dubai (U.A.E.) | P.O. Box No. 340 | Date: 02 February 1999" },
      { "label": "Declaration", "value": "\"Certified that we, the Consulate General of Pakistan, Dubai, found the following details are correct as per the Passport No. C754587 of the applicant, issued from Damascus on 29 Dec: 1996:\"" },
      { "label": "Details", "value": "Name: Mr. Fuwad Haider | Father's Name: Ghulam Sarwar Chaudhary | Mother's Name: Nusrat Fatima | Date of Birth: 26 September 1992 | Place of Birth: Lahore – Pakistan | Nationality: Pakistani | Religion: Islam | Profession: Student | Family Status: Unmarried | Residence: Mezzeh Jabal 7/1 Damascus – Syria / H.No. 108-B, Gulberg, Lahore – Pakistan" },
      { "label": "Disclaimer", "value": "\"This certificate is being issued without taking any responsibility on our part, upon the request of the applicant.\"" },
      { "label": "Signatory", "value": "(Syed Afzal Hussain Shah) Consular Officer" }
    ]
  },
  "ar": {
    "name": "العربية",
    "dir": "rtl",
    "docName": "شهادة تصديق بيانات من القنصلية العامة لباكستان بدبي",
    "lines": [
      { "label": "الترويسة", "value": "بسم الله الرحمن الرحيم | القنصلية العامة لباكستان، دبي (الإمارات العربية المتحدة) | ص.ب: 340 | التاريخ: 02 فبراير 1999" },
      { "label": "إقرار", "value": "\"نشهد نحن القنصلية العامة لباكستان في دبي بأن التفاصيل التالية صحيحة وفقاً لجواز سفر مقدم الطلب رقم C754587 الصادر من دمشق بتاريخ 29 ديسمبر 1996:\"" },
      { "label": "البيانات", "value": "الاسم: السيد فؤاد حيدر | اسم الأب: غلام سرور تشودري | اسم الأم: نصرت فاطمة | تاريخ الميلاد: 26 سبتمبر 1992 | مكان الميلاد: لاهور – باكستان | الجنسية: باكستاني | الديانة: الإسلام | المهنة: طالب | الحالة العائلية: أعزب | الإقامة: مزة جبل 7/1 دمشق – سوريا / منزل رقم 108-ب، غلبرغ، لاهور – باكستان" },
      { "label": "إخلاء مسؤولية", "value": "\"تُصدر هذه الشهادة دون تحمل أية مسؤولية من جانبنا، وذلك بناءً على طلب مقدم الطلب.\"" },
      { "label": "الموقع", "value": "(سيد أفضال حسين شاه) مسؤول قنصلي" }
    ]
  },
  "fa": {
    "name": "فارسی",
    "dir": "rtl",
    "docName": "گواهی تأیید مشخصات از سرکنسولگری پاکستان در دبی",
    "lines": [
      { "label": "سربرگ", "value": "بسم الله الرحمن الرحیم | سرکنسولگری پاکستان، دبی (امارات متحده عربی) | صندوق پستی: ۳۴۰ | تاریخ: ۰۲ فوریه ۱۹۹۹" },
      { "label": "گواهی", "value": "\"بدین‌وسیله گواهی می‌شود که ما، سرکنسولگری پاکستان در دبی، تأیید می‌کنیم مشخصات زیر مطابق با گذرنامه شماره C754587 متقاضی، صادره از دمشق در تاریخ ۲۹ دسامبر ۱۹۹۶ صحیح می‌باشد:\"" },
      { "label": "مشخصات", "value": "نام: آقای فواد حیدر | نام پدر: غلام سرور چوهدری | نام مادر: نصرت فاطمه | تاریخ تولد: ۲۶ سپتامبر ۱۹۹۲ | محل تولد: لاهور – پاکستان | ملیت: پاکستانی | دین: اسلام | شغل: دانش‌آموز | وضعیت تأهل: مجرد | محل اقامت: مزه جبل ۷/۱ دمشق – سوریه / خانه پلاک 108-B، گلبرگ، لاهور – پاکستان" },
      { "label": "سلب مسئولیت", "value": "\"این گواهی بدون قبول هیچ‌گونه مسئولیتی از جانب ما، و صرفاً بنا به درخواست متقاضی صادر شده است.\"" },
      { "label": "امضاکننده", "value": "(سید افضال حسین شاه) افسر کنسولی" }
    ]
  },
  "es": {
    "name": "Español",
    "dir": "ltr",
    "docName": "Certificado de Verificación de Datos del Consulado General de Pakistán en Dubái",
    "lines": [
      { "label": "Encabezado", "value": "En el Nombre de Dios, el Clemente, el Misericordioso | Consulado General de Pakistán, Dubái (E.A.U.) | Apartado de Correos No. 340 | Fecha: 02 de febrero de 1999" },
      { "label": "Declaración", "value": "\"Se certifica que nosotros, el Consulado General de Pakistán en Dubái, encontramos que los siguientes detalles son correctos según el Pasaporte No. C754587 del solicitante, emitido en Damasco el 29 de diciembre de 1996:\"" },
      { "label": "Detalles", "value": "Nombre: Sr. Fuwad Haider | Nombre del Padre: Ghulam Sarwar Chaudhary | Nombre de la Madre: Nusrat Fatima | Fecha de Nacimiento: 26 de septiembre de 1992 | Lugar de Nacimiento: Lahore – Pakistán | Nacionalidad: Pakistaní | Religión: Islam | Profesión: Estudiante | Estado Civil: Soltero | Residencia: Mezzeh Jabal 7/1 Damasco – Siria / Casa No. 108-B, Gulberg, Lahore – Pakistán" },
      { "label": "Descargo", "value": "\"Este certificado se expide sin asumir ninguna responsabilidad por nuestra parte, a petición del solicitante.\"" },
      { "label": "Firmante", "value": "(Syed Afzal Hussain Shah) Funcionario Consular" }
    ]
  }
};

const data = JSON.parse(fs.readFileSync('documents_data.json', 'utf8'));
const docIndex = data.findIndex(d => d.id === docId);

if (docIndex !== -1) {
  data[docIndex].translations = newTranslations;
  data[docIndex].imageUrl = "https://res.cloudinary.com/b7xbeztp/image/upload/v1790360755/image195.jpg";
  data[docIndex].category = 'official'; 
  fs.writeFileSync('documents_data.json', JSON.stringify(data, null, 2));
  console.log("Updated doc_195 successfully");
} else {
  console.log("Doc not found");
}
