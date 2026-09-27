const fs = require('fs');

const docId = 'doc_046';

const newTranslations = {
  "ur": {
    "name": "اردو",
    "dir": "rtl",
    "docName": "شامی جائیداد کی صلح (موافقت) کا دستاویز",
    "lines": [
      { "label": "دستاویز", "value": "دمشق میں پراپرٹی کی صلح یا معاہدے کا کاغذ۔" },
      { "label": "Details", "value": "یہ دستاویز دمشق کے علاقے سیدہ زینب میں واقع زمین کے ٹکڑے اور محترمہ نصرت فاطمہ نقوی کے معاملات سے متعلق ہے۔" },
      { "label": "تاریخ", "value": "14 مئی 1983 اور اس سے متعلقہ سرکاری حوالے" },
      { "label": "Details", "value": "(اس پر گواہوں کے دستخط اور سرکاری عدالتی مہریں موجود ہیں)۔" }
    ]
  },
  "en": {
    "name": "English",
    "dir": "ltr",
    "docName": "Syrian Property Reconciliation Document",
    "lines": [
      { "label": "Document", "value": "Property Reconciliation / Agreement Document in Damascus." },
      { "label": "Details", "value": "Details regarding the plot of land located in the area of Sayyida Zainab, Damascus, associated with the transactions of Nusrat Fatima Naqvi." },
      { "label": "Date", "value": "Mentioning 14/05/1983 and related official references." },
      { "label": "Details", "value": "(Includes signatures of witnesses and official judicial/governmental stamps)." }
    ]
  },
  "ar": {
    "name": "العربية",
    "dir": "rtl",
    "docName": "وثيقة صلح عقارية سورية",
    "lines": [
      { "label": "الوثيقة", "value": "وثيقة صلح أو اتفاق عقاري في دمشق." },
      { "label": "تفاصيل", "value": "تفاصيل تتعلق بقطعة الأرض الواقعة في منطقة السيدة زينب بدمشق، والمرتبطة بمعاملات السيدة نصرت فاطمة نقوي." },
      { "label": "التاريخ", "value": "تشير إلى 14/05/1983 والمراجع الرسمية ذات الصلة." },
      { "label": "تفاصيل", "value": "(تتضمن تواقيع الشهود وأختام قضائية/حكومية رسمية)." }
    ]
  },
  "fa": {
    "name": "فارسی",
    "dir": "rtl",
    "docName": "سند مصالحه ملکی سوریه",
    "lines": [
      { "label": "سند", "value": "سند مصالحه / توافق‌نامه ملکی در دمشق." },
      { "label": "جزئیات", "value": "جزئیات مربوط به قطعه زمینی واقع در منطقه سیده زینب، دمشق، که مرتبط با معاملات خانم نصرت فاطمه نقوی است." },
      { "label": "تاریخ", "value": "اشاره به ۱۴/۰۵/۱۹۸۳ و مراجع رسمی مرتبط." },
      { "label": "جزئیات", "value": "(شامل امضای شاهدان و مهرهای رسمی قضایی/دولتی می‌باشد)." }
    ]
  },
  "es": {
    "name": "Español",
    "dir": "ltr",
    "docName": "Documento de Conciliación de Propiedad Siria",
    "lines": [
      { "label": "Documento", "value": "Documento de Conciliación / Acuerdo de Propiedad en Damasco." },
      { "label": "Detalles", "value": "Detalles sobre la parcela de tierra ubicada en la zona de Sayyida Zainab, Damasco, asociada con las transacciones de Nusrat Fatima Naqvi." },
      { "label": "Fecha", "value": "Menciona el 14/05/1983 y referencias oficiales relacionadas." },
      { "label": "Detalles", "value": "(Incluye firmas de testigos y sellos judiciales/gubernamentales oficiales)." }
    ]
  }
};

const data = JSON.parse(fs.readFileSync('documents_data.json', 'utf8'));
const docIndex = data.findIndex(d => d.id === docId);

if (docIndex !== -1) {
  data[docIndex].translations = newTranslations;
  data[docIndex].category = 'property'; 
  fs.writeFileSync('documents_data.json', JSON.stringify(data, null, 2));
  console.log("Updated doc_046 successfully");
} else {
  console.log("Doc not found");
}
