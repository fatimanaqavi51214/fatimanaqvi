const fs = require('fs');

const docId = 'doc_189';

const newTranslations = {
  "ur": {
    "name": "اردو",
    "dir": "rtl",
    "docName": "سفارتی و حکومتی تصدیقات کا صفحہ / پشتِ نکاح نامہ",
    "lines": [
      { "label": "سرنامہ", "value": "سفارتی و قانونی توثیقات اور تصدیقی مہروں کا سلسلہ:" },
      { "label": "1. وزارتِ خارجہ شام", "value": "1. وزارتِ خارجہ – جمہوریہ عربیہ سوریہ (شام): \"دستاویز کے مندرجات کی ذمہ داری قبول کیے بغیر، دستخط اور مہر کی باضابطہ تصدیق کی جاتی ہے۔\" دمشق، 31 مارچ 1984ء | از ڈائریکٹر کونسلر افیئرز: نزار حداد (دستخط و سرکاری مہر)۔" },
      { "label": "2. سفارت خانہ پاکستان", "value": "2. سفارت خانہ پاکستان، دمشق: \"شامی وزارتِ خارجہ کی مہر کی تصدیق کی جاتی ہے۔\" | دستخط کنندہ: توحید احمد، فرسٹ سیکرٹری، سفارت خانہ پاکستان دمشق | بتاریخ: 25 اپریل 1984ء (سرکاری مہر ثبت ہے)۔" },
      { "label": "3. سفارت خانہ یو اے ای", "value": "3. سفارت خانہ متحدہ عرب امارات، دمشق – شعبۂ قونصلر: نمبر: 650/4/84، تاریخ: 29 اپریل 1984ء | \"وزارتِ خارجہ شام کی مہر اور دستخط کی تصدیق کی جاتی ہے، مندرجات کی ذمہ داری لیے بغیر۔\" | دستخط: احمد علی الملح، قونصل، سفارت خانہ یو اے ای (سرکاری مہر منسلک)۔" },
      { "label": "4. قونصل خانہ شام دبئی", "value": "4. قونصل خانہ جمہوریہ سوریہ، دبئی: دمشق میں یو اے ای سفارت خانے کی تصدیق، زیرِ تصدیق نمبر 1242 بتاریخ 8 اگست 1984ء (دستخط و مہر شدہ)۔" },
      { "label": "5. حکومتِ دبئی", "value": "5. حکومتِ دبئی – دفتر / دیوانِ حاکم (دائرة الحاكم): \"مندرجات کی ذمہ داری لیے بغیر، وزارت خارجہ اور قونصل خانے کے دستخط و مہر کی تصدیق کی جاتی ہے۔\" | بتاریخ: 14 اگست 1984ء | دستخط برائے ڈائریکٹر عدالت ہائے دبئی: امین الشریف (حکومتِ دبئی کی سرکاری مہر ثبت ہے)۔" },
      { "label": "6. قونصل خانہ پاکستان دبئی", "value": "6. قونصل خانہ جنرل پاکستان، دبئی: تاریخ: 9 اگست 1984ء (باضابطہ دستخط اور قونصلر مہر)۔" },
      { "label": "7. وزارتِ خارجہ یو اے ای", "value": "7. وزارتِ خارجہ – حکومتِ متحدہ عرب امارات: \"وزارتِ خارجہ متحدہ عرب امارات کے تحت دستخط و مہر کی حتمی تصدیق کی جاتی ہے۔\" | تاریخ: 19 اگست 1984ء (100 درہم مالیت کی ریونیو ٹکٹیں چسپاں ہیں اور باضابطہ مہر لگی ہوئی ہے)" }
    ]
  },
  "en": {
    "name": "English",
    "dir": "ltr",
    "docName": "Attestation and Authentication Seals Chain",
    "lines": [
      { "label": "Header", "value": "Attestation and Authentication Seals Chain:" },
      { "label": "1. MFA Syria", "value": "1. Ministry of Foreign Affairs – Syrian Arab Republic: \"The authenticity of the signature and seal is hereby certified without assuming responsibility for the contents of the document.\" Damascus, 31 March 1984 | For the Director of the Consular Department: Nizar Haddad (Signed & Stamped)." },
      { "label": "2. Embassy of Pakistan", "value": "2. Embassy of Pakistan, Damascus: \"Syrian Foreign Office seal at 'A' attested.\" | Signed by: Tohéed Ahmad, First Secretary, Embassy of Pakistan, Damascus | Date: 25/4/1984 (Official Seal Affixed)." },
      { "label": "3. Embassy of UAE", "value": "3. Embassy of the United Arab Emirates, Damascus – Consular Section: Ref. No.: 650/4/84, Date: 29/4/1984 | \"The authenticity of the seal and signature of the Syrian Ministry of Foreign Affairs is certified without assuming responsibility for the contents.\" | Signed by the Consul: Ahmad Ali Al-Milh (Official UAE Embassy Seal Affixed)." },
      { "label": "4. Syrian Consulate Dubai", "value": "4. Consulate General of the Syrian Arab Republic, Dubai: Authenticating the signature of the UAE Embassy in Damascus, under verification No. 1242 dated 8/8/1984 (Signed & Stamped)." },
      { "label": "5. Govt of Dubai", "value": "5. Government of Dubai – The Ruler's Court (دائرة الحاكم): \"The authenticity of the signature and seal of the Syrian Ministry of Foreign Affairs / Syrian Consulate is certified without responsibility for the contents.\" | Date: 14 August 1984 | Signed on behalf of the Courts Director / Legal Advisor: Amin Al-Sharif (Official Seal of Government of Dubai Affixed)." },
      { "label": "6. Pakistan Consulate Dubai", "value": "6. Consulate General of Pakistan, Dubai: Dated: 09 AUG 1984 (Signed and Stamped with Official Consular Seal)." },
      { "label": "7. MFA UAE", "value": "7. Ministry of Foreign Affairs – Government of UAE: \"Seal and signature of the Ministry of Foreign Affairs / Government of UAE is hereby attested.\" | Dated: 19/8/1984 (Revenue Stamps of 100 Dirhams Affixed & Stamped)." }
    ]
  },
  "ar": {
    "name": "العربية",
    "dir": "rtl",
    "docName": "سلسلة أختام التصديق والتوثيق",
    "lines": [
      { "label": "الترويسة", "value": "سلسلة أختام التصديق والتوثيق:" },
      { "label": "1. وزارة الخارجية السورية", "value": "1. وزارة الخارجية – الجمهورية العربية السورية: \"نصادق على صحة الخاتم والتوقيع دون أية مسؤولية تجاه المحتويات.\" دمشق، 31 مارس 1984 | عن مدير الإدارة القنصلية: نزار حداد (موقع ومختوم)." },
      { "label": "2. سفارة باكستان", "value": "2. سفارة باكستان، دمشق: \"تم التصديق على ختم وزارة الخارجية السورية.\" | الموقع: توحيد أحمد، السكرتير الأول، سفارة باكستان، دمشق | التاريخ: 25/4/1984 (ممهور بالختم الرسمي)." },
      { "label": "3. سفارة الإمارات", "value": "3. سفارة دولة الإمارات العربية المتحدة، دمشق – القسم القنصلي: رقم المرجع: 650/4/84، التاريخ: 29/4/1984 | \"نصادق على صحة ختم وتوقيع وزارة الخارجية السورية دون مسؤولية تجاه المحتويات.\" | توقيع القنصل: أحمد علي الملح (ممهور بالختم الرسمي لسفارة الإمارات)." },
      { "label": "4. القنصلية السورية بدبي", "value": "4. القنصلية العامة للجمهورية العربية السورية، دبي: تصديق توقيع سفارة الإمارات بدمشق، تحت رقم التصديق 1242 بتاريخ 8/8/1984 (موقع ومختوم)." },
      { "label": "5. حكومة دبي", "value": "5. حكومة دبي – ديوان الحاكم (دائرة الحاكم): \"نصادق على صحة توقيع وختم وزارة الخارجية السورية / القنصلية السورية دون مسؤولية عن المحتويات.\" | التاريخ: 14 أغسطس 1984 | وقع نيابة عن مدير المحاكم / المستشار القانوني: أمين الشريف (ممهور بالختم الرسمي لحكومة دبي)." },
      { "label": "6. قنصلية باكستان بدبي", "value": "6. القنصلية العامة لباكستان، دبي: التاريخ: 9 أغسطس 1984 (موقع ومختوم بالختم القنصلي الرسمي)." },
      { "label": "7. وزارة الخارجية الإماراتية", "value": "7. وزارة الخارجية – حكومة دولة الإمارات العربية المتحدة: \"يصادق على ختم وتوقيع وزارة الخارجية / حكومة الإمارات.\" | التاريخ: 19/8/1984 (ممهور ومختوم بطوابع مالية بقيمة 100 درهم)." }
    ]
  },
  "fa": {
    "name": "فارسی",
    "dir": "rtl",
    "docName": "سلسله مهرهای تأیید و تصدیق",
    "lines": [
      { "label": "سربرگ", "value": "سلسله مهرهای تأیید و تصدیق:" },
      { "label": "۱. وزارت امور خارجه سوریه", "value": "۱. وزارت امور خارجه – جمهوری عربی سوریه: \"صحت امضا و مهر بدون هیچگونه مسئولیتی در قبال محتویات سند تأیید می‌شود.\" دمشق، ۳۱ مارس ۱۹۸۴ | از طرف مدیر اداره کنسولی: نزار حداد (امضا و مهر شده)." },
      { "label": "۲. سفارت پاکستان", "value": "۲. سفارت پاکستان، دمشق: \"مهر وزارت امور خارجه سوریه تأیید شد.\" | امضاکننده: توحید احمد، دبیر اول، سفارت پاکستان، دمشق | تاریخ: ۲۵/۴/۱۹۸۴ (ممهور به مهر رسمی)." },
      { "label": "۳. سفارت امارات", "value": "۳. سفارت امارات متحده عربی، دمشق – بخش کنسولی: شماره مرجع: ۶۵۰/۴/۸۴، تاریخ: ۲۹/۴/۱۹۸۴ | \"صحت مهر و امضای وزارت امور خارجه سوریه بدون هیچگونه مسئولیتی در قبال محتویات تأیید می‌شود.\" | امضای کنسول: احمد علی الملح (ممهور به مهر رسمی سفارت امارات)." },
      { "label": "۴. سرکنسولگری سوریه در دبی", "value": "۴. سرکنسولگری جمهوری عربی سوریه، دبی: تأیید امضای سفارت امارات در دمشق، تحت شماره تأییدیه ۱۲۴۲ مورخ ۸/۸/۱۹۸۴ (امضا و مهر شده)." },
      { "label": "۵. دولت دبی", "value": "۵. دولت دبی – دیوان حاکم (دائرة الحاکم): \"صحت امضا و مهر وزارت امور خارجه سوریه / کنسولگری سوریه بدون هیچگونه مسئولیتی در قبال محتویات تأیید می‌شود.\" | تاریخ: ۱۴ اوت ۱۹۸۴ | امضا به نیابت از مدیر دادگاه‌ها / مشاور حقوقی: امین الشریف (ممهور به مهر رسمی دولت دبی)." },
      { "label": "۶. سرکنسولگری پاکستان در دبی", "value": "۶. سرکنسولگری پاکستان، دبی: تاریخ: ۹ اوت ۱۹۸۴ (امضا و ممهور به مهر رسمی کنسولی)." },
      { "label": "۷. وزارت امور خارجه امارات", "value": "۷. وزارت امور خارجه – دولت امارات متحده عربی: \"مهر و امضای وزارت امور خارجه / دولت امارات تأیید می‌شود.\" | تاریخ: ۱۹/۸/۱۹۸۴ (ممهور به تمبرهای مالیاتی به ارزش ۱۰۰ درهم و مهر شده)." }
    ]
  },
  "es": {
    "name": "Español",
    "dir": "ltr",
    "docName": "Cadena de Sellos de Atestación y Autenticación",
    "lines": [
      { "label": "Encabezado", "value": "Cadena de Sellos de Atestación y Autenticación:" },
      { "label": "1. MAE Siria", "value": "1. Ministerio de Asuntos Exteriores – República Árabe Siria: \"Por la presente se certifica la autenticidad de la firma y el sello sin asumir responsabilidad por el contenido del documento.\" Damasco, 31 de marzo de 1984 | Por el Director del Departamento Consular: Nizar Haddad (Firmado y Sellado)." },
      { "label": "2. Embajada de Pakistán", "value": "2. Embajada de Pakistán, Damasco: \"Sello del Ministerio de Asuntos Exteriores Sirio atestado.\" | Firmado por: Tohéed Ahmad, Primer Secretario, Embajada de Pakistán, Damasco | Fecha: 25/4/1984 (Sello Oficial Estampado)." },
      { "label": "3. Embajada de los E.A.U.", "value": "3. Embajada de los Emiratos Árabes Unidos, Damasco – Sección Consular: Ref. No.: 650/4/84, Fecha: 29/4/1984 | \"Se certifica la autenticidad del sello y la firma del Ministerio de Asuntos Exteriores Sirio sin asumir responsabilidad por el contenido.\" | Firmado por el Cónsul: Ahmad Ali Al-Milh (Sello Oficial de la Embajada de los E.A.U. Estampado)." },
      { "label": "4. Consulado Sirio Dubái", "value": "4. Consulado General de la República Árabe Siria, Dubái: Autenticando la firma de la Embajada de los E.A.U. en Damasco, bajo verificación No. 1242 de fecha 8/8/1984 (Firmado y Sellado)." },
      { "label": "5. Gobierno de Dubái", "value": "5. Gobierno de Dubái – Tribunal del Gobernante (دائرة الحاكم): \"Se certifica la autenticidad de la firma y el sello del Ministerio de Asuntos Exteriores Sirio / Consulado Sirio sin responsabilidad por el contenido.\" | Fecha: 14 de agosto de 1984 | Firmado en nombre del Director de Tribunales / Asesor Legal: Amin Al-Sharif (Sello Oficial del Gobierno de Dubái Estampado)." },
      { "label": "6. Consulado Pakistán Dubái", "value": "6. Consulado General de Pakistán, Dubái: Fecha: 09 AGO 1984 (Firmado y Sellado con Sello Consular Oficial)." },
      { "label": "7. MAE E.A.U.", "value": "7. Ministerio de Asuntos Exteriores – Gobierno de los E.A.U.: \"Sello y firma del Ministerio de Asuntos Exteriores / Gobierno de los E.A.U. debidamente atestado.\" | Fecha: 19/8/1984 (Sellos de Ingresos de 100 Dirhams Estampados y Sellados)." }
    ]
  }
};

const data = JSON.parse(fs.readFileSync('documents_data.json', 'utf8'));
const docIndex = data.findIndex(d => d.id === docId);

if (docIndex !== -1) {
  data[docIndex].translations = newTranslations;
  data[docIndex].imageUrl = "https://res.cloudinary.com/b7xbeztp/image/upload/v1790360753/image189.jpg";
  data[docIndex].category = 'official'; 
  fs.writeFileSync('documents_data.json', JSON.stringify(data, null, 2));
  console.log("Updated doc_189 successfully");
} else {
  console.log("Doc not found");
}
