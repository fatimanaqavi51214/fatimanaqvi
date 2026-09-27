const fs = require('fs');

const docId = 'doc_042';

const newTranslations = {
  "ur": {
    "name": "اردو",
    "dir": "rtl",
    "docName": "ایرانی سفارت خانے کی تصدیق (دمشق)",
    "lines": [
      { "label": "Details", "value": "سفارت خانہ جمہوری اسلامی ایران، دمشق - قونصلر امور" },
      { "label": "Details", "value": "یہ تصدیق کی جاتی ہے کہ محترمہ نصرت فاطمہ بنت سید محمد... کے دستخط، جو اس دستاویز میں علامت (X) سے مشخص کیے گئے ہیں، درست ہیں، اور متن کے مندرجات کی تصدیق کیے بغیر صرف دستخط کی تصدیق کی جاتی ہے۔" },
      { "label": "نمبر", "value": "20" },
      { "label": "تاریخ", "value": "25 / 04 / 1362" },
      { "label": "Details", "value": "(امیر علیزادہ نور کے دستخط اور مہر)" }
    ]
  },
  "en": {
    "name": "English",
    "dir": "ltr",
    "docName": "Iranian Embassy Attestation (Damascus)",
    "lines": [
      { "label": "Details", "value": "Embassy of the Islamic Republic of Iran, Damascus - Consular Affairs" },
      { "label": "Details", "value": "This is to certify the authenticity of the signature of Mrs. Nusrat Fatima, d/o Syed Muhammad... marked with an (X) on this document, without verifying the contents of the text." },
      { "label": "Number", "value": "20" },
      { "label": "Date", "value": "25 / 04 / 1462 (Hijri/Solar equivalent)" },
      { "label": "Details", "value": "(Signed and stamped by Amir Alizadeh Noor)" }
    ]
  },
  "ar": {
    "name": "العربية",
    "dir": "rtl",
    "docName": "تصديق السفارة الإيرانية (دمشق)",
    "lines": [
      { "label": "تفاصيل", "value": "سفارة جمهورية إيران الإسلامية، دمشق - الشؤون القنصلية" },
      { "label": "تفاصيل", "value": "يشهد هذا بصحة توقيع السيدة نصرت فاطمة بنت سيد محمد... والمميز بعلامة (X) على هذه الوثيقة، دون المصادقة على محتويات النص." },
      { "label": "الرقم", "value": "20" },
      { "label": "التاريخ", "value": "25 / 04 / 1362" },
      { "label": "تفاصيل", "value": "(توقيع وختم أمير علي زاده نور)" }
    ]
  },
  "fa": {
    "name": "فارسی",
    "dir": "rtl",
    "docName": "تأییدیه سفارت ایران (دمشق)",
    "lines": [
      { "label": "جزئیات", "value": "سفارت جمهوری اسلامی ایران، دمشق - امور کنسولی" },
      { "label": "جزئیات", "value": "بدین وسیله گواهی می‌شود که امضای خانم نصرت فاطمه بنت سید محمد... که با علامت (X) در این سند مشخص شده است، صحت دارد و این تأیید بدون بررسی محتویات متن می‌باشد." },
      { "label": "شماره", "value": "۲۰" },
      { "label": "تاریخ", "value": "۲۵ / ۰۴ / ۱۳۶۲" },
      { "label": "جزئیات", "value": "(با امضا و مهر امیر علیزاده نور)" }
    ]
  },
  "es": {
    "name": "Español",
    "dir": "ltr",
    "docName": "Certificación de la Embajada de Irán (Damasco)",
    "lines": [
      { "label": "Detalles", "value": "Embajada de la República Islámica de Irán, Damasco - Asuntos Consulares" },
      { "label": "Detalles", "value": "Por la presente se certifica la autenticidad de la firma de la Sra. Nusrat Fatima, hija de Syed Muhammad... marcada con una (X) en este documento, sin verificar el contenido del texto." },
      { "label": "Número", "value": "20" },
      { "label": "Fecha", "value": "25 / 04 / 1462 (Equivalente Hégira/Solar)" },
      { "label": "Detalles", "value": "(Firmado y sellado por Amir Alizadeh Noor)" }
    ]
  }
};

const data = JSON.parse(fs.readFileSync('documents_data.json', 'utf8'));
const docIndex = data.findIndex(d => d.id === docId);

if (docIndex !== -1) {
  data[docIndex].translations = newTranslations;
  data[docIndex].category = 'embassy'; 
  fs.writeFileSync('documents_data.json', JSON.stringify(data, null, 2));
  console.log("Updated doc_042 successfully");
} else {
  console.log("Doc not found");
}
