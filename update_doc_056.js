const fs = require('fs');

const docId = 'doc_056';

const newTranslations = {
  "ur": {
    "name": "اردو",
    "dir": "rtl",
    "docName": "ایرانی سفیر کا سفارشی خط (شام سے اسپین کے سفیر کے نام)",
    "lines": [
      { "label": "Details", "value": "سفارت خانہ جمہوری اسلامی ایران، دمشق." },
      { "label": "تاریخ", "value": "12 / 07 / 138X." },
      { "label": "بنام", "value": "جناب آقای شفتی، سفیر محترم جمہوری اسلامی ایران - مادرید." },
      { "label": "موضوع", "value": "محترمہ نصرت فاطمہ نقوی کا تعارف جو کہ پاکستانی شیعہ خیرات کرنے والی خاتون ہیں اور اسپین میں فلاحی اور خیراتی کاموں کا ارادہ رکھتی ہیں۔ ان کے ساتھ ممکنہ تعاون کا شکریہ ادا کیا جائے گا." },
      { "label": "Details", "value": "(دستخط: محسن شیخ الاسلام، سفیر جمہوری اسلامی ایران - دمشق)." }
    ]
  },
  "en": {
    "name": "English",
    "dir": "ltr",
    "docName": "Recommendation Letter from Iranian Ambassador (Damascus to Madrid)",
    "lines": [
      { "label": "Details", "value": "Embassy of the Islamic Republic of Iran, Damascus." },
      { "label": "Date", "value": "12 / 07 / 138X." },
      { "label": "To", "value": "Mr. Shafti, Ambassador of the Islamic Republic of Iran in Madrid." },
      { "label": "Content", "value": "Introducing Mrs. Nusrat Fatima Naqvi as a charitable Pakistani Shia who intends to undertake benevolent and charitable activities in Spain. Any possible cooperation with her will be highly appreciated." },
      { "label": "Details", "value": "(Signed by Mohsen Sheikh al-Islam, Ambassador of the Islamic Republic of Iran, Damascus)." }
    ]
  },
  "ar": {
    "name": "العربية",
    "dir": "rtl",
    "docName": "خطاب توصية من السفير الإيراني (من دمشق إلى سفير إسبانيا)",
    "lines": [
      { "label": "تفاصيل", "value": "سفارة جمهورية إيران الإسلامية، دمشق." },
      { "label": "التاريخ", "value": "12 / 07 / 138X." },
      { "label": "إلى", "value": "السيد شفتي، سفير جمهورية إيران الإسلامية في مدريد." },
      { "label": "الموضوع", "value": "تقديم السيدة نصرت فاطمة نقوي باعتبارها سيدة شيعية باكستانية محبة للخير، وتعتزم القيام بأعمال خيرية وإنسانية في إسبانيا. ونقدر أي تعاون محتمل معها." },
      { "label": "تفاصيل", "value": "(توقيع: محسن شيخ الإسلام، سفير جمهورية إيران الإسلامية، دمشق)." }
    ]
  },
  "fa": {
    "name": "فارسی",
    "dir": "rtl",
    "docName": "توصیه‌نامه از سفیر ایران (از دمشق به سفیر در مادرید)",
    "lines": [
      { "label": "جزئیات", "value": "سفارت جمهوری اسلامی ایران، دمشق." },
      { "label": "تاریخ", "value": "۱۲ / ۰۷ / ۱۳۸X." },
      { "label": "به", "value": "جناب آقای شفتی، سفیر محترم جمهوری اسلامی ایران در مادرید." },
      { "label": "موضوع", "value": "معرفی خانم نصرت فاطمه نقوی به عنوان بانوی خیر شیعه پاکستانی که قصد انجام امور خیریه و عام‌المنفعه در اسپانیا را دارند. پیشاپیش از هرگونه همکاری احتمالی با ایشان قدردانی می‌شود." },
      { "label": "جزئیات", "value": "(با امضای محسن شیخ الاسلام، سفیر جمهوری اسلامی ایران، دمشق)." }
    ]
  },
  "es": {
    "name": "Español",
    "dir": "ltr",
    "docName": "Carta de Recomendación del Embajador Iraní (Damasco a Madrid)",
    "lines": [
      { "label": "Detalles", "value": "Embajada de la República Islámica de Irán, Damasco." },
      { "label": "Fecha", "value": "12 / 07 / 138X." },
      { "label": "Para", "value": "Sr. Shafti, Embajador de la República Islámica de Irán en Madrid." },
      { "label": "Asunto", "value": "Presentación de la Sra. Nusrat Fatima Naqvi como una caritativa chiíta paquistaní que tiene la intención de emprender actividades benéficas y caritativas en España. Se agradecerá enormemente cualquier posible cooperación con ella." },
      { "label": "Detalles", "value": "(Firmado por Mohsen Sheikh al-Islam, Embajador de la República Islámica de Irán, Damasco)." }
    ]
  }
};

const data = JSON.parse(fs.readFileSync('documents_data.json', 'utf8'));
const docIndex = data.findIndex(d => d.id === docId);

if (docIndex !== -1) {
  data[docIndex].translations = newTranslations;
  data[docIndex].category = 'embassy'; 
  fs.writeFileSync('documents_data.json', JSON.stringify(data, null, 2));
  console.log("Updated doc_056 successfully");
} else {
  console.log("Doc not found");
}
