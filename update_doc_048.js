const fs = require('fs');

const docId = 'doc_048';

const newTranslations = {
  "ur": {
    "name": "اردو",
    "dir": "rtl",
    "docName": "جائیداد کی صلح اور فلاحی مرکز کا معاہدہ (1983)",
    "lines": [
      { "label": "عنوان", "value": "مذہبی اور فلاحی پروجیکٹ کے لیے جائیداد کی صلح اور منتقلی کا معاہدہ۔" },
      { "label": "تاریخ", "value": "5 / 04 / 1362 (شمسی ہجری) بمطابق 1983" },
      { "label": "Details", "value": "یہ دستاویز محترمہ نصرت فاطمہ نقوی (حاملہ پاسپورٹ نمبر 091547 صادرہ دبئی، پاکستانی قومیت) اور جناب سید احمد فہری (حضرت امام خمینی کے شام و لبنان میں نمائندے) اور ہلال احمر ایران کے درمیان سیدہ زینب کے قریب واقع زمین کے ٹکڑے (محضر نمبر 64، رقبہ 44,166.50 مربع میٹر) پر یتیم خانہ، ہسپتال اور اسلامی مرکز قائم کرنے کے معاہدے سے متعلق ہے۔" },
      { "label": "Details", "value": "(دستخط: نصرت فاطمہ نقوی، جناب فہری اور گواہان)۔" }
    ]
  },
  "en": {
    "name": "English",
    "dir": "ltr",
    "docName": "Property Reconciliation & Charitable Center Agreement (1983)",
    "lines": [
      { "label": "Title", "value": "Property Reconciliation and Transfer Agreement for a Religious/Charitable Project." },
      { "label": "Date", "value": "05 / 04 / 1362 (Hijri/Solar) corresponding to 1983." },
      { "label": "Details", "value": "This document records the agreement involving Mrs. Nusrat Fatima Naqvi (holding passport no. 091547 issued in Dubai, Pakistani national) regarding a plot of land located in the Nashab region, Damascus Governorate, near the shrine of Sayyida Zainab (Plot No. 64, area 44,166.50 square meters) in coordination with Mr. Sayed Ahmad Fahri (representative of Imam Khomeini in Syria and Lebanon) and the Iranian Red Crescent for establishing an orphanage, hospital, and Islamic center." },
      { "label": "Details", "value": "(Signed by Nusrat Fatima Naqvi, Mr. Fahri, and witnesses)." }
    ]
  },
  "ar": {
    "name": "العربية",
    "dir": "rtl",
    "docName": "صلح عقاري واتفاقية مركز خيري (1983)",
    "lines": [
      { "label": "العنوان", "value": "اتفاقية صلح عقاري ونقل ملكية لمشروع ديني/خيري." },
      { "label": "التاريخ", "value": "05 / 04 / 1362 (هجري شمسي) الموافق 1983." },
      { "label": "تفاصيل", "value": "توثق هذه الوثيقة الاتفاق المبرم مع السيدة نصرت فاطمة نقوي (حاملة جواز سفر رقم 091547 صادر من دبي، الجنسية باكستانية) بخصوص قطعة أرض تقع في منطقة النشابية بمحافظة دمشق، بالقرب من مقام السيدة زينب (محضر رقم 64، مساحة 44,166.50 متر مربع) بالتنسيق مع السيد أحمد فهري (ممثل الإمام الخميني في سوريا ولبنان) والهلال الأحمر الإيراني لإنشاء دار أيتام، ومستشفى، ومركز إسلامي." },
      { "label": "تفاصيل", "value": "(توقيع: نصرت فاطمة نقوي، السيد فهري، والشهود)." }
    ]
  },
  "fa": {
    "name": "فارسی",
    "dir": "rtl",
    "docName": "صلح ملکی و قرارداد مرکز خیریه (۱۹۸۳)",
    "lines": [
      { "label": "عنوان", "value": "توافق‌نامه صلح و انتقال ملک برای یک پروژه مذهبی/خیریه." },
      { "label": "تاریخ", "value": "۰۵ / ۰۴ / ۱۳۶۲ (هجری شمسی) برابر با ۱۹۸۳." },
      { "label": "جزئیات", "value": "این سند ثبت‌کننده توافقی است که شامل خانم نصرت فاطمه نقوی (دارنده گذرنامه شماره ۰۹۱۵۴۷ صادره در دبی، تبعه پاکستان) در خصوص قطعه زمینی واقع در منطقه نشابیه، استان دمشق، نزدیک حرم سیده زینب (پلاک شماره ۶۴، مساحت ۴۴,۱۶۶.۵۰ متر مربع) با هماهنگی آقای سید احمد فهری (نماینده امام خمینی در سوریه و لبنان) و هلال احمر ایران برای تأسیس پرورشگاه، بیمارستان و مرکز اسلامی می‌باشد." },
      { "label": "جزئیات", "value": "(با امضای نصرت فاطمه نقوی، آقای فهری و شاهدان)." }
    ]
  },
  "es": {
    "name": "Español",
    "dir": "ltr",
    "docName": "Acuerdo de Conciliación de Propiedad y Centro Benéfico (1983)",
    "lines": [
      { "label": "Título", "value": "Acuerdo de Conciliación y Transferencia de Propiedad para un Proyecto Religioso/Benéfico." },
      { "label": "Fecha", "value": "05 / 04 / 1362 (Hégira/Solar) correspondiente a 1983." },
      { "label": "Detalles", "value": "Este documento registra el acuerdo que involucra a la Sra. Nusrat Fatima Naqvi (titular del pasaporte no. 091547 emitido en Dubái, nacional paquistaní) con respecto a una parcela de tierra ubicada en la región de Nashab, Gobernación de Damasco, cerca del santuario de Sayyida Zainab (Parcela No. 64, área 44,166.50 metros cuadrados) en coordinación con el Sr. Sayed Ahmad Fahri (representante del Imam Jomeini en Siria y Líbano) y la Media Luna Roja Iraní para establecer un orfanato, un hospital y un centro islámico." },
      { "label": "Detalles", "value": "(Firmado por Nusrat Fatima Naqvi, el Sr. Fahri y testigos)." }
    ]
  }
};

const data = JSON.parse(fs.readFileSync('documents_data.json', 'utf8'));
const docIndex = data.findIndex(d => d.id === docId);

if (docIndex !== -1) {
  data[docIndex].translations = newTranslations;
  data[docIndex].category = 'property'; 
  fs.writeFileSync('documents_data.json', JSON.stringify(data, null, 2));
  console.log("Updated doc_048 successfully");
} else {
  console.log("Doc not found");
}
