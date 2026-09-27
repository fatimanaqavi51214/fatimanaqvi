const fs = require('fs');

const docId = 'doc_161';

const newTranslations = {
  "ur": {
    "name": "اردو",
    "dir": "rtl",
    "docName": "بلدیہ دبئی - بلڈنگ پلان برائے الرمول",
    "lines": [
      { "label": "سربراہ اور نقشے کا عنوان", "value": "بلدیہ دبئی – تعمیری نقشہ (Building Plan) | بلاک / علاقہ: الرمول (Al Ramool) | تاریخ: 25 مئی 1975ء | پلاٹ نمبر: G.51" },
      { "label": "منظور شدہ تعمیراتی مقصد", "value": "\"طے شدہ نقشے و ڈیزائن کے مطابق شو روم، دفاتر اور اسٹور/گودام کی تعمیر کی اجازت دی جاتی ہے۔\"" },
      { "label": "پلاٹ کی تفصیلی معلومات", "value": "مالک / الاٹی کا نام: نصرت فاطمہ نقوی | نوعیتِ حق: کرایہ داری / لیز (Rented) | سائٹ پلان کی تاریخ: 6 مئی 1975ء | ٹاؤن پلان شیٹ نمبر: 53 | پیمانہ (Scale): 1:2000 | پلاٹ کا کل رقبہ: 40,000 مربع فٹ | بلڈنگ پرمٹ نمبر و تاریخ: پرمٹ نمبر 3230 بتاریخ 26 مئی 1975ء" },
      { "label": "سرکاری عملہ", "value": "معائنہ کار: ساجد | نقشہ نگار: وی۔ مادھون | جانچ پڑتال: دستخط شدہ" }
    ]
  },
  "en": {
    "name": "English",
    "dir": "ltr",
    "docName": "Dubai Municipality - Building Plan for Al Ramool",
    "lines": [
      { "label": "Header & Drawing Title", "value": "Dubai Municipality (بلدية دبي) – Building Plan | Block: Al Ramool | Date: 25.5.1975 | Plot No.: G.51" },
      { "label": "Approval & Permitted Purpose", "value": "\"Erect and show room, offices and store according to design.\"" },
      { "label": "Technical Title Box", "value": "Owner of Title: Nosrat Fatima Naqwai (Nusrat Fatima Naqvi) | Form of Title: Rented / Leased | Site/Affection Plan Dated: 6.5.1975 | Town Plan Sheet No.: 53 | Scale: 1:2000 | Land Area: 40,000 Sq. Ft. | Building Permit No. & Date: 3230 dated 26.5.1975" },
      { "label": "Official Staff", "value": "Inspected by: Sajid | Drawn by: V. Madhavan | Checked by: Signed" }
    ]
  },
  "ar": {
    "name": "العربية",
    "dir": "rtl",
    "docName": "بلدية دبي - مخطط البناء لمنطقة الرمول",
    "lines": [
      { "label": "الترويسة وعنوان المخطط", "value": "بلدية دبي – مخطط البناء | البلوك/المنطقة: الرمول | التاريخ: 25.5.1975 | رقم القطعة: G.51" },
      { "label": "الموافقة والغرض المصرح به", "value": "\"إقامة صالة عرض ومكاتب ومستودع وفقاً للتصميم.\"" },
      { "label": "صندوق الملكية الفني", "value": "اسم المالك: نصرت فاطمة نقوي | نوع الملكية: إيجار / مؤجرة | تاريخ مخطط الموقع: 6.5.1975 | ورقة تخطيط المدينة رقم: 53 | المقياس: 1:2000 | مساحة الأرض: 40,000 قدم مربع | رقم وتاريخ رخصة البناء: 3230 بتاريخ 26.5.1975" },
      { "label": "الموظفون الرسميون", "value": "تم التفتيش بواسطة: ساجد | رسم بواسطة: ف. مادهافان | تم التدقيق: موقع" }
    ]
  },
  "fa": {
    "name": "فارسی",
    "dir": "rtl",
    "docName": "شهرداری دبی - نقشه ساختمان برای الرمول",
    "lines": [
      { "label": "سربرگ و عنوان نقشه", "value": "شهرداری دبی - نقشه ساختمان | بلوک: الرمول | تاریخ: ۲۵/۵/۱۹۷۵ | شماره پلاک: G.51" },
      { "label": "تأییدیه و هدف مجاز", "value": "\"احداث نمایشگاه، دفاتر و انبار طبق طراحی.\"" },
      { "label": "مشخصات فنی ملک", "value": "نام مالک: نصرت فاطمه نقوی | نوع مالکیت: اجاره‌ای | تاریخ پلان سایت: ۶/۵/۱۹۷۵ | شماره شیت نقشه‌کشی شهری: ۵۳ | مقیاس: ۱:۲۰۰۰ | مساحت زمین: ۴۰,۰۰۰ فوت مربع | شماره و تاریخ پروانه ساختمان: ۳۲۳۰ مورخ ۲۶/۵/۱۹۷۵" },
      { "label": "کارکنان رسمی", "value": "بازرس: ساجد | نقشه‌کش: و. مادهاوان | بررسی شده توسط: امضا شده" }
    ]
  },
  "es": {
    "name": "Español",
    "dir": "ltr",
    "docName": "Municipalidad de Dubái - Plano de Construcción para Al Ramool",
    "lines": [
      { "label": "Encabezado y Título del Plano", "value": "Municipalidad de Dubái (بلدية دبي) – Plano de Construcción | Bloque: Al Ramool | Fecha: 25.5.1975 | Lote No.: G.51" },
      { "label": "Aprobación y Propósito Permitido", "value": "\"Erigir sala de exposición, oficinas y almacén de acuerdo al diseño.\"" },
      { "label": "Cuadro de Título Técnico", "value": "Nombre del Propietario: Nosrat Fatima Naqwai (Nusrat Fatima Naqvi) | Forma de Propiedad: Alquilado / Arrendado | Fecha del Plano del Sitio: 6.5.1975 | Hoja del Plano de la Ciudad No.: 53 | Escala: 1:2000 | Área del Terreno: 40,000 pies cuadrados | Permiso de Construcción No. y Fecha: 3230 de fecha 26.5.1975" },
      { "label": "Personal Oficial", "value": "Inspeccionado por: Sajid | Dibujado por: V. Madhavan | Comprobado por: Firmado" }
    ]
  }
};

const data = JSON.parse(fs.readFileSync('documents_data.json', 'utf8'));
const docIndex = data.findIndex(d => d.id === docId);

if (docIndex !== -1) {
  data[docIndex].translations = newTranslations;
  data[docIndex].category = 'property'; 
  fs.writeFileSync('documents_data.json', JSON.stringify(data, null, 2));
  console.log("Updated doc_161 successfully");
} else {
  console.log("Doc not found");
}
