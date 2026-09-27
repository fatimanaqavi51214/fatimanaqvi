const fs = require('fs');

const docId = 'doc_159';

const newTranslations = {
  "ur": {
    "name": "اردو",
    "dir": "rtl",
    "docName": "بلدیہ دبئی - سائٹ پلان و کاؤنٹر درخواست",
    "lines": [
      { "label": "سربراہ", "value": "بلدیہ دبئی – کاؤنٹر و ٹرانزیکشن سینٹر (مرکز المعاملات) | کاؤنٹر / ڈیسک نمبر: 1 | سیریل نمبر: 4" },
      { "label": "نام اور تفصیلات", "value": "نام: نصرت فاطمہ | تفصیلات: اراضی / پلاٹ سائٹ کی جانچ اور احاطہ بندی کی بابت کارروائی (العویر روڈ)۔" },
      { "label": "بلدیاتی شرط", "value": "\"یہ زمین دس (10) سال کی مدت کے لیے کرائے پر دی گئی ہے، بشرطیکہ جاری ہونے کی تاریخ سے دو ماہ کے اندر اندر اس کے گرد چاردیواری (فینسنگ/باڑ) مکمل کر لی جائے۔ — ڈائریکٹر بلدیہ دبئی\"" },
      { "label": "اندراج نمبر 1", "value": "تاریخ: 20 اپریل 1978ء | پلاٹ نمبر: B-319 | مالک / الاٹی کا نام: نصرت فاطمہ نقوی | پلاٹ کا سائز: 400 × 200 فٹ | کل رقبہ: 79,600 مربع فٹ (لگ بھگ 80,000 مربع فٹ)" },
      { "label": "اندراج نمبر 2", "value": "تاریخ: 20 اپریل 1978ء | پلاٹ نمبر: B-320 | مالک کا نام: سید رجب الرفاعی | پلاٹ کا سائز: 400 × 400 فٹ | کل رقبہ: 160,000 مربع فٹ" },
      { "label": "نقشے کی تکنیکی معلومات", "value": "ادارہ: بلدیہ دبئی – خریطہ موقعیہ (سائٹ پلان) | مقام / بلاک: العویر روڈ (نئے اسٹوریج شیڈز / گودام ایریا) | ٹاؤن پلان شیٹ نمبر: 204 | پیمانہ (اسکیل): 1:2000 | قانونی حیثیت: لیز / کرایہ داری (Rented)" }
    ]
  },
  "en": {
    "name": "English",
    "dir": "ltr",
    "docName": "Dubai Municipality - Site Plan & Counter Application",
    "lines": [
      { "label": "Header", "value": "Dubai Municipality Counter (بلدية دبي – مركز المعاملات) | Desk No.: 1 | Serial No.: 4" },
      { "label": "Name & Particulars", "value": "Name: Nusrat Fatima (نصرة فاطمة) | Particulars: Application regarding plot site / storage plot details (Awir Road)." },
      { "label": "Official Municipal Clause", "value": "\"This land is leased for a period of ten (10) years, provided that it is enclosed with a fence within two months from its date. — Director of Municipality\"" },
      { "label": "Entry 1", "value": "Date: 20/4/78 | Plot No.: B-319 | Owner's Name: Nosrat Fatima Naqwa (Nusrat Fatima Naqvi) | Plot Size: 400' x 200' | Area: 79,600 Sq. Ft. (approx. 80,000 sq ft)" },
      { "label": "Entry 2", "value": "Date: 20/4/78 | Plot No.: B-320 | Owner's Name: Sayed Rajab Al-Rifai | Plot Size: 400' x 400' | Area: 160,000 Sq. Ft." },
      { "label": "Title Block", "value": "Authority: Dubai Municipality (بلدية دبي) – Site Plan (خريطة موقعية) | Location/Block: Awir Road (New Storage Sheds) | Town Plan Sheet No.: 204 | Scale: 1:2000 | Form of Title: Rented / Leased" }
    ]
  },
  "ar": {
    "name": "العربية",
    "dir": "rtl",
    "docName": "بلدية دبي - مخطط الموقع وطلب المركز",
    "lines": [
      { "label": "الترويسة", "value": "بلدية دبي – مركز المعاملات | رقم المكتب: 1 | الرقم التسلسلي: 4" },
      { "label": "الاسم والتفاصيل", "value": "الاسم: نصرة فاطمة | التفاصيل: طلب بخصوص موقع الأرض / تفاصيل أرض التخزين (طريق العوير)." },
      { "label": "الشرط البلدي", "value": "\"تؤجر هذه الأرض لمدة عشر (10) سنوات، شريطة أن يتم تسويرها خلال شهرين من تاريخه. — مدير البلدية\"" },
      { "label": "الإدخال رقم 1", "value": "التاريخ: 20/4/78 | رقم القطعة: B-319 | اسم المالك: نصرت فاطمة نقوي | مساحة القطعة: 400 × 200 قدم | المساحة الإجمالية: 79,600 قدم مربع (حوالي 80,000 قدم مربع)" },
      { "label": "الإدخال رقم 2", "value": "التاريخ: 20/4/78 | رقم القطعة: B-320 | اسم المالك: سيد رجب الرفاعي | مساحة القطعة: 400 × 400 قدم | المساحة الإجمالية: 160,000 قدم مربع" },
      { "label": "معلومات المخطط", "value": "الجهة: بلدية دبي – خريطة موقعية | الموقع/البلوك: طريق العوير (مستودعات التخزين الجديدة) | رقم ورقة تخطيط المدينة: 204 | المقياس: 1:2000 | الحالة القانونية: إيجار / مؤجرة" }
    ]
  },
  "fa": {
    "name": "فارسی",
    "dir": "rtl",
    "docName": "شهرداری دبی - پلان سایت و درخواست باجه",
    "lines": [
      { "label": "سربرگ", "value": "شهرداری دبی - مرکز معاملات | باجه شماره: ۱ | شماره سریال: ۴" },
      { "label": "نام و جزئیات", "value": "نام: نصرت فاطمه | جزئیات: درخواست مربوط به سایت زمین / جزئیات زمین انبار (جاده العویر)." },
      { "label": "شرط رسمی شهرداری", "value": "\"این زمین برای مدت ده (۱۰) سال اجاره داده می‌شود، مشروط بر اینکه ظرف دو ماه از تاریخ صدور حصارکشی شود. — مدیر شهرداری\"" },
      { "label": "ورودی شماره ۱", "value": "تاریخ: ۲۰/۴/۷۸ | شماره قطعه: B-319 | نام مالک: نصرت فاطمه نقوی | ابعاد قطعه: ۴۰۰ × ۲۰۰ فوت | مساحت کل: ۷۹,۶۰۰ فوت مربع (حدود ۸۰,۰۰۰ فوت مربع)" },
      { "label": "ورودی شماره ۲", "value": "تاریخ: ۲۰/۴/۷۸ | شماره قطعه: B-320 | نام مالک: سید رجب الرفاعی | ابعاد قطعه: ۴۰۰ × ۴۰۰ فوت | مساحت کل: ۱۶۰,۰۰۰ فوت مربع" },
      { "label": "مشخصات پلان", "value": "مرجع: شهرداری دبی - نقشه موقعیت (پلان سایت) | موقعیت/بلوک: جاده العویر (انبارهای جدید ذخیره‌سازی) | شماره شیت نقشه‌کشی شهری: ۲۰۴ | مقیاس: ۱:۲۰۰۰ | وضعیت قانونی: اجاره‌ای" }
    ]
  },
  "es": {
    "name": "Español",
    "dir": "ltr",
    "docName": "Municipalidad de Dubái - Plano de Ubicación y Solicitud de Ventanilla",
    "lines": [
      { "label": "Encabezado", "value": "Municipalidad de Dubái - Centro de Transacciones | Escritorio No.: 1 | No. de Serie: 4" },
      { "label": "Nombre y Detalles", "value": "Nombre: Nusrat Fatima | Detalles: Solicitud con respecto al sitio de la parcela / detalles de la parcela de almacenamiento (Carretera Awir)." },
      { "label": "Cláusula Municipal", "value": "\"Este terreno se arrienda por un período de diez (10) años, siempre que se cerque dentro de los dos meses posteriores a su fecha. — Director de la Municipalidad\"" },
      { "label": "Entrada 1", "value": "Fecha: 20/4/78 | Lote No.: B-319 | Nombre del Propietario: Nusrat Fatima Naqvi | Tamaño del Lote: 400' x 200' | Área: 79,600 pies cuadrados (aprox. 80,000 pies cuadrados)" },
      { "label": "Entrada 2", "value": "Fecha: 20/4/78 | Lote No.: B-320 | Nombre del Propietario: Sayed Rajab Al-Rifai | Tamaño del Lote: 400' x 400' | Área: 160,000 pies cuadrados" },
      { "label": "Bloque de Título", "value": "Autoridad: Municipalidad de Dubái – Plano del Sitio | Ubicación/Bloque: Carretera Awir (Nuevos cobertizos de almacenamiento) | Número de Hoja del Plano de la Ciudad: 204 | Escala: 1:2000 | Estado Legal: Alquilado / Arrendado" }
    ]
  }
};

const data = JSON.parse(fs.readFileSync('documents_data.json', 'utf8'));
const docIndex = data.findIndex(d => d.id === docId);

if (docIndex !== -1) {
  data[docIndex].translations = newTranslations;
  data[docIndex].category = 'property'; 
  fs.writeFileSync('documents_data.json', JSON.stringify(data, null, 2));
  console.log("Updated doc_159 successfully");
} else {
  console.log("Doc not found");
}
