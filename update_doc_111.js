const fs = require('fs');

const docId = 'doc_111';

const newTranslations = {
  "ur": {
    "name": "اردو",
    "dir": "rtl",
    "docName": "حکومتِ دبئی - محکمہ اوقاف و امورِ اسلامیہ (1981)",
    "lines": [
      { "label": "تفصیلات", "value": "حکومتِ دبئی - محکمہ اوقاف و امورِ اسلامیہ." },
      { "label": "تاریخ", "value": "1981." },
      { "label": "بنام", "value": "محکمۂ اوقافِ جعفریہ." },
      { "label": "مضمون", "value": "محترمہ نصرت فاطمہ بنت سید محمد کے پاس شام میں زمین کا ایک ٹکڑا ہے، اور اس پروجیکٹ کے لیے عطیات (چندہ) جمع کرنے کی غرض سے سماجی امور اور اوقاف کی منظوری درکار ہے۔ چونکہ یہ خاندان ایک طویل عرصے سے دبئی میں مقیم ہے اور اپنی کمیونٹی سے عطیات جمع کرنے کے حوالے سے جانا جاتا ہے... لہذا، براہِ کرم اس معاملے کا جائزہ لیں اور جو مناسب سمجھیں وہ اقدام کریں۔ آپ کا شکریہ۔" },
      { "label": "دستخط", "value": "(ڈائریکٹر محکمہ اوقاف و امورِ اسلامیہ کے دستخط اور مہر)." }
    ]
  },
  "en": {
    "name": "English",
    "dir": "ltr",
    "docName": "Government of Dubai - Department of Awqaf and Islamic Affairs (1981)",
    "lines": [
      { "label": "Details", "value": "Government of Dubai - Department of Awqaf and Islamic Affairs." },
      { "label": "Date", "value": "1981." },
      { "label": "To", "value": "Messrs. Jaafaria Awqaf Department." },
      { "label": "Content", "value": "Mrs. Nusrat Fatima bint Syed Muhammad has a plot of land in Syria, and this project requires the approval of Social Affairs and Endowments to collect donations. Given that this family has been residing in Dubai for a long time and is known for collecting donations from their community... Therefore, please study the matter and take whatever action you deem appropriate. Thank you." },
      { "label": "Signature", "value": "(Signed and stamped by the Director of Awqaf and Islamic Affairs)." }
    ]
  },
  "ar": {
    "name": "العربية",
    "dir": "rtl",
    "docName": "حكومة دبي - دائرة الأوقاف والشؤون الإسلامية (1981)",
    "lines": [
      { "label": "تفاصيل", "value": "حكومة دبي - دائرة الأوقاف والشؤون الإسلامية." },
      { "label": "التاريخ", "value": "1981." },
      { "label": "إلى", "value": "السادة إدارة الأوقاف الجعفرية." },
      { "label": "المضمون", "value": "السيدة نصرت فاطمة بنت سيد محمد تمتلك قطعة أرض في سوريا، ويحتاج هذا المشروع إلى موافقة الشؤون الاجتماعية والأوقاف لجمع التبرعات. وبما أن هذه العائلة تقيم في دبي منذ فترة طويلة ومعروفة بجمع التبرعات من أبناء طائفتهم... لذا، يرجى التكرم بدراسة الموضوع واتخاذ ما ترونه مناسباً. ولكم الشكر." },
      { "label": "التوقيع", "value": "(موقع ومختوم من قبل مدير الأوقاف والشؤون الإسلامية)." }
    ]
  },
  "fa": {
    "name": "فارسی",
    "dir": "rtl",
    "docName": "دولت دبی - اداره اوقاف و امور اسلامی (۱۹۸۱)",
    "lines": [
      { "label": "جزئیات", "value": "دولت دبی - اداره اوقاف و امور اسلامی." },
      { "label": "تاریخ", "value": "۱۹۸۱." },
      { "label": "به", "value": "آقایان اداره اوقاف جعفریه." },
      { "label": "مضمون", "value": "خانم نصرت فاطمه فرزند سید محمد قطعه زمینی در سوریه دارد و این پروژه برای جمع‌آوری کمک‌های مردمی نیاز به تأیید امور اجتماعی و اوقاف دارد. با توجه به اینکه این خانواده مدت زیادی است که در دبی سکونت دارند و به جمع‌آوری کمک‌های مردمی از جامعه خود شهرت دارند... لذا خواهشمند است موضوع را بررسی کرده و هر اقدامی را که مناسب می‌دانید انجام دهید. با تشکر." },
      { "label": "امضا", "value": "(با امضا و مهر مدیر اوقاف و امور اسلامی)." }
    ]
  },
  "es": {
    "name": "Español",
    "dir": "ltr",
    "docName": "Gobierno de Dubái - Departamento de Awqaf y Asuntos Islámicos (1981)",
    "lines": [
      { "label": "Detalles", "value": "Gobierno de Dubái - Departamento de Awqaf y Asuntos Islámicos." },
      { "label": "Fecha", "value": "1981." },
      { "label": "Para", "value": "Señores del Departamento de Awqaf Jaafaria." },
      { "label": "Contenido", "value": "La Sra. Nusrat Fatima bint Syed Muhammad tiene una parcela de tierra en Siria, y este proyecto requiere la aprobación de Asuntos Sociales y Dotaciones para recaudar donaciones. Dado que esta familia ha estado residiendo en Dubái durante mucho tiempo y es conocida por recaudar donaciones de su comunidad... Por lo tanto, por favor estudie el asunto y tome la acción que considere apropiada. Gracias." },
      { "label": "Firma", "value": "(Firmado y sellado por el Director de Awqaf y Asuntos Islámicos)." }
    ]
  }
};

const data = JSON.parse(fs.readFileSync('documents_data.json', 'utf8'));
const docIndex = data.findIndex(d => d.id === docId);

if (docIndex !== -1) {
  data[docIndex].translations = newTranslations;
  data[docIndex].category = 'business'; 
  fs.writeFileSync('documents_data.json', JSON.stringify(data, null, 2));
  console.log("Updated doc_111 successfully");
} else {
  console.log("Doc not found");
}
