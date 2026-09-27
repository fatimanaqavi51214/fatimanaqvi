const fs = require('fs');

const docId = 'doc_139';

const newTranslations = {
  "ur": {
    "name": "اردو",
    "dir": "rtl",
    "docName": "بلدیاتی فیس چالان و تعمیری پرمٹ",
    "lines": [
      { "label": "تفصیلات", "value": "جمہوریہ عربیہ سوریہ – بلدیہ و کونسل السیدہ زینب۔" },
      { "label": "زون اور پلاٹ", "value": "ریئل اسٹیٹ زون: قبر الست | پلاٹ نمبر: 5/282 (یا ملحقہ)۔" },
      { "label": "رسید نمبر و تاریخ", "value": "216422 بتاریخ 10 دسمبر 1994ء۔" },
      { "label": "بلدیاتی فیسوں کی تفصیل", "value": "تعمیراتی فیس: 27,984 شامی لیرا | چاردیواری کی فیس: 4,021 شامی لیرا | اشغال فیس: 111,994 شامی لیرا | 10 فیصد اسکول ٹیکس: 5,045 شامی لیرا | 5 فیصد مقامی ایڈمنسٹریشن فیس: 2,522 شامی لیرا | کل وصول شدہ بلدیاتی فیس: 61,552 شامی لیرا (مختلف کٹوتیوں اور ذیلی فیسوں کے ساتھ)۔" },
      { "label": "اجازت نامہ اور شرائطِ تعمیر", "value": "متعلقہ شخص کو سیدہ زینب میں واقع پلاٹ پر بلڈنگ پلان کے مطابق مخصوص منزلوں کی تعمیر کی باقاعدہ اجازت دی جاتی ہے۔ تعمیر دورانِ کار ٹیکنیکل آفس کی تمام شرائط، روڈ ایکسز سے ضروری فاصلے (7 میٹر) اور سڑک کی کشادگی کے لیے مخصوص جگہ (2 میٹر) چھوڑنے کی پابند ہوگی۔" },
      { "label": "تعمیراتی سائٹ کا نقشہ", "value": "نقشے میں سمتِ شمال، گلیوں اور سڑکوں کا جال، ملحقہ پلاٹ نمبر 284 اور حدود کی مکمل پیمائشیں دکھائی گئی ہیں۔" },
      { "label": "سرکاری دستخط و تصدیق", "value": "ٹیکنیکل شعبہ کے سربراہ، سروے انجینئر اور کونسل کی سرکاری مہریں بتاریخ دسمبر 1994ء ثبت ہیں۔" }
    ]
  },
  "en": {
    "name": "English",
    "dir": "ltr",
    "docName": "Building Permit & Municipal Fees Assessment",
    "lines": [
      { "label": "Details", "value": "Syrian Arab Republic – Municipal Directorate / Sayyidah Zaynab Council." },
      { "label": "Zone & Plot", "value": "Real Estate Zone: Qabr Essit | Plot No.: 5/282 (or adjacent)." },
      { "label": "Receipt No. & Date", "value": "216422 dated 10/12/1994." },
      { "label": "Municipal Fees Breakdown", "value": "Building Fee: 27,984 SYP | Fence Fee: 4,021 SYP | Occupation Fee: 111,994 SYP | 10% School Support Tax: 5,045 SYP | 5% Local Administration Fee: 2,522 SYP | Total Assessed Fees: 61,552 Syrian Pounds (with detailed aggregates)." },
      { "label": "Permit Text & Site Conditions", "value": "Permission is granted to Mr. [...] for the construction of a building consisting of multiple floors on the designated property in the Sayyidah Zaynab area. Construction must comply fully with technical department specifications, setback requirements from the main road axis (7 meters), and road widening lines (2 meters)." },
      { "label": "Site Sketch", "value": "Shows north arrow, road grid, adjacent properties (plot 284, 282), site contours, and certified boundary marks." },
      { "label": "Official Signatures", "value": "Signed by the Head of the Technical Department, Surveying Engineer, and attested by the Municipal Council stamps dated December 1994." }
    ]
  },
  "ar": {
    "name": "العربية",
    "dir": "rtl",
    "docName": "إيصال رسوم بلدية ورخصة بناء",
    "lines": [
      { "label": "تفاصيل", "value": "الجمهورية العربية السورية – مديرية البلدية / مجلس السيدة زينب." },
      { "label": "المنطقة والعقار", "value": "منطقة عقارية: قبر الست | رقم المحضر: 5/282 (أو المجاور)." },
      { "label": "رقم وتاريخ الإيصال", "value": "216422 بتاريخ 10/12/1994." },
      { "label": "تفصيل الرسوم البلدية", "value": "رسم البناء: 27,984 ل.س | رسم السياق: 4,021 ل.س | رسم الإشغال: 111,994 ل.س | ضريبة دعم المدارس 10%: 5,045 ل.س | رسم إدارة محلية 5%: 2,522 ل.س | إجمالي الرسوم: 61,552 ليرة سورية." },
      { "label": "نص الرخصة وشروط البناء", "value": "يُسمح للسيد [...] ببناء طوابق متعددة على العقار المذكور في منطقة السيدة زينب. يجب أن يلتزم البناء بشروط الدائرة الفنية والتراجع عن محور الطريق الرئيسي (7 أمتار) وخطوط توسيع الطريق (متران)." },
      { "label": "مخطط الموقع", "value": "يوضح سهم الشمال، وشبكة الطرق، والعقارات المجاورة (رقم 284، 282)، وقياسات الحدود الكاملة." },
      { "label": "التواقيع الرسمية", "value": "موقع من قبل رئيس الدائرة الفنية ومهندس المساحة، ومصدق بأختام مجلس البلدية بتاريخ ديسمبر 1994." }
    ]
  },
  "fa": {
    "name": "فارسی",
    "dir": "rtl",
    "docName": "قبض عوارض شهرداری و پروانه ساختمانی",
    "lines": [
      { "label": "جزئیات", "value": "جمهوری عربی سوریه - اداره شهرداری / شورای سیده زینب." },
      { "label": "منطقه و پلاک", "value": "منطقه املاک: قبر الست | شماره پلاک: ۵/۲۸۲ (یا مجاور)." },
      { "label": "شماره و تاریخ قبض", "value": "۲۱۶۴۲۲ مورخ ۱۰/۱۲/۱۹۹۴." },
      { "label": "جزئیات عوارض شهرداری", "value": "عوارض ساختمان: ۲۷,۹۸۴ لیره سوریه | عوارض حصار: ۴,۰۲۱ لیره سوریه | عوارض اشغال: ۱۱۱,۹۹۴ لیره سوریه | مالیات ۱۰٪ حمایت از مدارس: ۵,۰۴۵ لیره سوریه | عوارض ۵٪ اداره محلی: ۲,۵۲۲ لیره سوریه | کل عوارض ارزیابی شده: ۶۱,۵۵۲ لیره سوریه." },
      { "label": "متن پروانه و شرایط ساخت", "value": "به آقای [...] اجازه داده می‌شود ساختمانی با چندین طبقه در ملک مشخص شده در منطقه سیده زینب احداث کند. ساخت و ساز باید به طور کامل با مشخصات بخش فنی، الزامات عقب‌نشینی از محور جاده اصلی (۷ متر) و خطوط تعریض جاده (۲ متر) مطابقت داشته باشد." },
      { "label": "کروکی سایت", "value": "نشان‌دهنده فلش شمال، شبکه جاده‌ها، املاک مجاور (پلاک ۲۸۴، ۲۸۲)، و ابعاد کامل مرزها است." },
      { "label": "امضاهای رسمی", "value": "با امضای رئیس بخش فنی، مهندس نقشه‌بردار، و تأیید شده با مهرهای شورای شهر مورخ دسامبر ۱۹۹۴." }
    ]
  },
  "es": {
    "name": "Español",
    "dir": "ltr",
    "docName": "Recibo de Tasas Municipales y Permiso de Construcción",
    "lines": [
      { "label": "Detalles", "value": "República Árabe Siria – Dirección Municipal / Consejo de Sayyidah Zaynab." },
      { "label": "Zona y Lote", "value": "Zona Inmobiliaria: Qabr Essit | Lote No.: 5/282 (o adyacente)." },
      { "label": "Nº de Recibo y Fecha", "value": "216422 de fecha 10/12/1994." },
      { "label": "Desglose de Tasas Municipales", "value": "Tasa de Construcción: 27,984 SYP | Tasa de Cerca: 4,021 SYP | Tasa de Ocupación: 111,994 SYP | 10% Impuesto de Apoyo Escolar: 5,045 SYP | 5% Tasa de Administración Local: 2,522 SYP | Tasas Totales Evaluadas: 61,552 Libras Sirias." },
      { "label": "Texto del Permiso y Condiciones", "value": "Se otorga permiso al Sr. [...] para la construcción de un edificio que consta de múltiples pisos en la propiedad designada en el área de Sayyidah Zaynab. La construcción debe cumplir plenamente con las especificaciones del departamento técnico, los requisitos de retranqueo desde el eje de la carretera principal (7 metros) y las líneas de ensanchamiento de la carretera (2 metros)." },
      { "label": "Croquis del Sitio", "value": "Muestra la flecha del norte, la red de carreteras, las propiedades adyacentes (lotes 284, 282) y las marcas de límites certificadas." },
      { "label": "Firmas Oficiales", "value": "Firmado por el Jefe del Departamento Técnico, Ingeniero Topógrafo, y atestiguado por los sellos del Consejo Municipal de fecha diciembre de 1994." }
    ]
  }
};

const data = JSON.parse(fs.readFileSync('documents_data.json', 'utf8'));
const docIndex = data.findIndex(d => d.id === docId);

if (docIndex !== -1) {
  data[docIndex].translations = newTranslations;
  data[docIndex].category = 'property'; 
  fs.writeFileSync('documents_data.json', JSON.stringify(data, null, 2));
  console.log("Updated doc_139 successfully");
} else {
  console.log("Doc not found");
}
