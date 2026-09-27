const fs = require('fs');

const docId = 'doc_058';

const newTranslations = {
  "ur": {
    "name": "اردو",
    "dir": "rtl",
    "docName": "مجمع جہانی اہل بیت (ع) کے نام عطیہ و ہدیہ کا خط (1994)",
    "lines": [
      { "label": "بنام", "value": "حجت الاسلام و المسلمین آقای شیخ محمد ہادیانی، نمائندہ مجمع جہانی اہل بیت (ع) در سوریہ۔" },
      { "label": "مضمون", "value": "محترمہ نصرت فاطمہ نقوی (پاکستانی قومیت، دختر مرحوم سید محمد نقوی) کی طرف سے پیشکش ہے کہ وہ 4,000 مربع میٹر رقبے پر مشتمل زمین (جس کی مالیت 4,000,000 شامی پاؤنڈ ہے) مجمع جہانی اہل بیت (ع) کو شام میں ہدیہ کرتی ہیں تاکہ وہاں لائبریری، ریڈنگ روم، مہمان خانہ اور دفتر کی عمارت تعمیر کی جا سکے۔ یہ شرط ہے کہ مورخہ 11/04/1372 سے ایک سال کے اندر تعمیراتی کام شروع کیا جائے گا۔" },
      { "label": "تاریخ", "value": "25 / 01 / 1394" },
      { "label": "Details", "value": "(دستخط: نصرت فاطمہ نقوی)" }
    ]
  },
  "en": {
    "name": "English",
    "dir": "ltr",
    "docName": "Donation/Gift Letter to World Assembly of Ahl al-Bayt (1994)",
    "lines": [
      { "label": "To", "value": "Hojatoleslam Sheikh Muhammad Hadiyani, Representative of the World Assembly of Ahl al-Bayt (AS) in Syria." },
      { "label": "Content", "value": "Mrs. Nusrat Fatima Naqvi (Pakistani national, daughter of late Syed Muhammad Naqvi) gifts a plot of land with an area of 4,000 square meters, valued at 4,000,000 Syrian Pounds, to the World Assembly of Ahl al-Bayt (AS) in Syria. The land is to be used for constructing a building comprising a library, reading room, guesthouse, and office for the Assembly, provided that construction starts within one year from 04/11/1372 (solar date)." },
      { "label": "Date", "value": "25 / 01 / 1394 (Solar Hijri)." },
      { "label": "Details", "value": "(Signed by Nusrat Fatima Naqvi)." }
    ]
  },
  "ar": {
    "name": "العربية",
    "dir": "rtl",
    "docName": "رسالة هبة وتبرع إلى المجمع العالمي لأهل البيت (1994)",
    "lines": [
      { "label": "إلى", "value": "حجة الإسلام والمسلمين الشيخ محمد هادياني، ممثل المجمع العالمي لأهل البيت (ع) في سوريا." },
      { "label": "المضمون", "value": "تتقدم السيدة نصرت فاطمة نقوي (باكستانية الجنسية، ابنة المرحوم سيد محمد نقوي) بالتبرع بقطعة أرض مساحتها 4,000 متر مربع، تقدر قيمتها بـ 4,000,000 ليرة سورية، إلى المجمع العالمي لأهل البيت (ع) في سوريا، وذلك لبناء مبنى يضم مكتبة، وقاعة قراءة، ودار ضيافة، ومكتباً للمجمع، شريطة أن يبدأ البناء خلال عام واحد من تاريخ 11/04/1372 (هجري شمسي)." },
      { "label": "التاريخ", "value": "25 / 01 / 1394 (هجري شمسي)." },
      { "label": "تفاصيل", "value": "(توقيع: نصرت فاطمة نقوي)." }
    ]
  },
  "fa": {
    "name": "فارسی",
    "dir": "rtl",
    "docName": "نامه اهدا و هدیه به مجمع جهانی اهل بیت (۱۹۹۴)",
    "lines": [
      { "label": "به", "value": "حجت‌الاسلام والمسلمین آقای شیخ محمد هادیانی، نماینده مجمع جهانی اهل بیت (ع) در سوریه." },
      { "label": "مضمون", "value": "خانم نصرت فاطمه نقوی (تبعه پاکستان، فرزند مرحوم سید محمد نقوی) قطعه زمینی به مساحت ۴,۰۰۰ متر مربع، به ارزش ۴,۰۰۰,۰۰۰ لیره سوریه را به مجمع جهانی اهل بیت (ع) در سوریه اهدا می‌کنند تا در آن ساختمانی شامل کتابخانه، قرائت‌خانه، مهمانسرا و دفتر مجمع احداث گردد، مشروط بر اینکه عملیات ساختمانی ظرف یک سال از تاریخ ۱۱/۰۴/۱۳۷۲ (هجری شمسی) آغاز شود." },
      { "label": "تاریخ", "value": "۲۵ / ۰۱ / ۱۳۹۴ (هجری شمسی)." },
      { "label": "جزئیات", "value": "(با امضای نصرت فاطمه نقوی)." }
    ]
  },
  "es": {
    "name": "Español",
    "dir": "ltr",
    "docName": "Carta de Donación/Regalo a la Asamblea Mundial de Ahl al-Bayt (1994)",
    "lines": [
      { "label": "Para", "value": "Hojatoleslam Sheikh Muhammad Hadiyani, Representante de la Asamblea Mundial de Ahl al-Bayt (AS) en Siria." },
      { "label": "Contenido", "value": "La Sra. Nusrat Fatima Naqvi (nacional paquistaní, hija del difunto Syed Muhammad Naqvi) dona una parcela de tierra con un área de 4,000 metros cuadrados, valorada en 4,000,000 Libras Sirias, a la Asamblea Mundial de Ahl al-Bayt (AS) en Siria. La tierra se utilizará para construir un edificio que constará de una biblioteca, sala de lectura, casa de huéspedes y oficina para la Asamblea, siempre que la construcción comience dentro de un año a partir del 04/11/1372 (fecha solar)." },
      { "label": "Fecha", "value": "25 / 01 / 1394 (Hégira Solar)." },
      { "label": "Detalles", "value": "(Firmado por Nusrat Fatima Naqvi)." }
    ]
  }
};

const data = JSON.parse(fs.readFileSync('documents_data.json', 'utf8'));
const docIndex = data.findIndex(d => d.id === docId);

if (docIndex !== -1) {
  data[docIndex].translations = newTranslations;
  data[docIndex].category = 'property'; 
  fs.writeFileSync('documents_data.json', JSON.stringify(data, null, 2));
  console.log("Updated doc_058 successfully");
} else {
  console.log("Doc not found");
}
