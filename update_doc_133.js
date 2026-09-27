const fs = require('fs');

const docId = 'doc_133';

const newTranslations = {
  "ur": {
    "name": "اردو",
    "dir": "rtl",
    "docName": "خصوصی شرائط برائے ادائیگی و فنشنگ",
    "lines": [
      { "label": "ادائیگی کی خصوصی شرائط", "value": "\"...شامی لیرا، فریق اول کی جانب سے فریق دوم جناب علی الصعاف کو ادا کیے گئے، جس کی پوری ذمہ داری و عہد ان کے ذمے ہے۔ بجلی کے میٹر اور اس کے اخراجات کی بابت طے شدہ ذمہ داری کے تحت ادائیگی کی جائے گی...\"" },
      { "label": "فریق اول", "value": "نصرت فاطمہ (دستخط شدہ)" },
      { "label": "فریق دوم", "value": "علی الصعاف (دستخط شدہ)" },
      { "label": "گواہ و تاریخ", "value": "گواہ: مرتضیٰ الحسین (دستخط شدہ) | تاریخ: 28 فروری 2000ء" },
      { "label": "فنشنگ و سجاوٹ کی شرائط", "value": "(یہ باضابطہ چیک لسٹ ہے جو عموماً فلیٹ کی تیاری اور ہینڈ اوور کی تفصیل کے لیے خالی چھوڑی گئی ہے): رنگ و روغن (پینٹ)، لکڑی کا کام، پورسلین و ٹائلز، باتھ روم کا سامان و فٹنگز، کچن، بجلی کا کام، سینیٹری کا سامان۔" },
      { "label": "ادائیگیوں کا جدول", "value": "(اقساط، تاریخ اور وصول کنندہ کے دستخط کا جدول دستاویز میں خالی موجود ہے)۔" }
    ]
  },
  "en": {
    "name": "English",
    "dir": "ltr",
    "docName": "Special Payment & Finishing Terms",
    "lines": [
      { "label": "Special Payment Conditions", "value": "\"...Syrian Pounds, paid by the First Party to the Second Party, Mr. Ali As-Saaf, under his responsibility and undertaking. Regarding the electricity, it is undertaken to pay the electricity fees/meter as per the agreed terms...\"" },
      { "label": "First Party", "value": "Nusrat Fatima (Signed)" },
      { "label": "Second Party", "value": "Ali As-Saaf (Signed)" },
      { "label": "Witness & Date", "value": "Witness: Mourtada Al-Hussein (Signed) | Date: 28 / 2 / 2000" },
      { "label": "Finishing Specifications", "value": "(Standard blank checklist form for property handover finishes, left unfilled): Paint, Woodwork / Carpentry, Porcelain / Ceramic, Bathroom fixtures & accessories, Kitchen, Electricity, Sanitary fittings." },
      { "label": "Installment Deliveries Table", "value": "(Table with columns for installments, date, and signature – left unfilled)." }
    ]
  },
  "ar": {
    "name": "العربية",
    "dir": "rtl",
    "docName": "شروط خاصة للدفع والكسوة",
    "lines": [
      { "label": "شروط خاصة للدفع", "value": "\"...ليرة سورية، دفعت من قبل الفريق الأول إلى الفريق الثاني، السيد علي الصعاف، على مسؤوليته وتعهده. وفيما يخص الكهرباء، يُتعهد بدفع رسوم/عداد الكهرباء وفقاً للشروط المتفق عليها...\"" },
      { "label": "الفريق الأول", "value": "نصرت فاطمة (موقعة)" },
      { "label": "الفريق الثاني", "value": "علي الصعاف (موقع)" },
      { "label": "الشاهد والتاريخ", "value": "الشاهد: مرتضى الحسين (موقع) | التاريخ: 28 / 2 / 2000" },
      { "label": "شروط الكسوة", "value": "(نموذج قائمة تحقق فارغ قياسي لتشطيبات تسليم العقار، تُرك فارغاً): دهان، خشب / نجارة، بورسلان / سيراميك، حمام ومحتوياته، مطبخ، كهرباء، صحية." },
      { "label": "جدول التسليمات", "value": "(جدول بأعمدة للأقساط والتاريخ والتوقيع - تُرك فارغاً)." }
    ]
  },
  "fa": {
    "name": "فارسی",
    "dir": "rtl",
    "docName": "شرایط ویژه پرداخت و نازک‌کاری",
    "lines": [
      { "label": "شرایط ویژه پرداخت", "value": "\"...لیره سوریه، پرداخت شده توسط طرف اول به طرف دوم، آقای علی الصعاف، تحت مسئولیت و تعهد وی. در مورد برق، تعهد می‌شود که هزینه‌ها/کنتور برق طبق شرایط توافق شده پرداخت شود...\"" },
      { "label": "طرف اول", "value": "نصرت فاطمه (امضا شده)" },
      { "label": "طرف دوم", "value": "علی الصعاف (امضا شده)" },
      { "label": "شاهد و تاریخ", "value": "شاهد: مرتضی الحسین (امضا شده) | تاریخ: ۲۸ / ۲ / ۲۰۰۰" },
      { "label": "مشخصات نازک‌کاری", "value": "(فرم چک لیست خالی استاندارد برای نازک‌کاری تحویل ملک، که خالی گذاشته شده است): رنگ، کار چوب / نجاری، پرسلان / سرامیک، لوازم و ملحقات حمام، آشپزخانه، برق، لوازم بهداشتی." },
      { "label": "جدول تحویل اقساط", "value": "(جدول با ستون‌هایی برای اقساط، تاریخ و امضا - خالی گذاشته شده است)." }
    ]
  },
  "es": {
    "name": "Español",
    "dir": "ltr",
    "docName": "Condiciones Especiales de Pago y Acabados",
    "lines": [
      { "label": "Condiciones Especiales de Pago", "value": "\"...Libras Sirias, pagadas por la Primera Parte a la Segunda Parte, el Sr. Ali As-Saaf, bajo su responsabilidad y compromiso. Con respecto a la electricidad, se compromete a pagar las tarifas/medidor de electricidad según los términos acordados...\"" },
      { "label": "Primera Parte", "value": "Nusrat Fatima (Firmada)" },
      { "label": "Segunda Parte", "value": "Ali As-Saaf (Firmada)" },
      { "label": "Testigo y Fecha", "value": "Testigo: Mourtada Al-Hussein (Firmado) | Fecha: 28 / 2 / 2000" },
      { "label": "Especificaciones de Acabados", "value": "(Formulario estándar de lista de verificación en blanco para acabados de entrega de propiedad, dejado en blanco): Pintura, Carpintería / Madera, Porcelana / Cerámica, Accesorios y grifería de baño, Cocina, Electricidad, Accesorios sanitarios." },
      { "label": "Tabla de Entregas a Plazos", "value": "(Tabla con columnas para plazos, fecha y firma – dejada en blanco)." }
    ]
  }
};

const data = JSON.parse(fs.readFileSync('documents_data.json', 'utf8'));
const docIndex = data.findIndex(d => d.id === docId);

if (docIndex !== -1) {
  data[docIndex].translations = newTranslations;
  data[docIndex].category = 'property'; 
  fs.writeFileSync('documents_data.json', JSON.stringify(data, null, 2));
  console.log("Updated doc_133 successfully");
} else {
  console.log("Doc not found");
}
