const fs = require('fs');

const docId = 'doc_083';

const newTranslations = {
  "ur": {
    "name": "اردو",
    "dir": "rtl",
    "docName": "شامی گورنر (محافظِ دمشق) کے نام درخواست",
    "lines": [
      { "label": "بنام", "value": "جناب محافظِ دمشق المحترم." },
      { "label": "جانب سے", "value": "نصرت فاطمہ، پاکستانی شہری." },
      { "label": "موضوع", "value": "پراپرٹی نمبر 284 کے سلسلے میں درخواست، جس میں ماسٹر پلان اور نقشے کے مطابق عام مفاد (پبلک یوٹیلیٹی) کے لیے زمین کا کچھ حصہ صوابدیدی طور پر دینے یا اس کی موافقت کا اظہار کیا گیا ہے." },
      { "label": "تاریخ", "value": "14 اگست 1992." },
      { "label": "Details", "value": "(دستخط: نصرت فاطمہ)." }
    ]
  },
  "en": {
    "name": "English",
    "dir": "ltr",
    "docName": "Request to the Governor of Damascus",
    "lines": [
      { "label": "To", "value": "H.E. The Governor of Damascus." },
      { "label": "From", "value": "Nusrat Fatima, Pakistani national." },
      { "label": "Subject", "value": "Request regarding property no. 284, expressing readiness to cede a portion of the land for public utility/general benefit in accordance with the master plan and structural alignment of the property." },
      { "label": "Date", "value": "August 14, 1992." },
      { "label": "Details", "value": "(Signed by Nusrat Fatima)." }
    ]
  },
  "ar": {
    "name": "العربية",
    "dir": "rtl",
    "docName": "طلب إلى محافظ دمشق",
    "lines": [
      { "label": "إلى", "value": "السيد محافظ دمشق المحترم." },
      { "label": "من", "value": "نصرت فاطمة، مواطنة باكستانية." },
      { "label": "الموضوع", "value": "طلب بخصوص العقار رقم 284، يعبر عن الاستعداد للتنازل عن جزء من الأرض للمنفعة العامة وفقاً للمخطط التنظيمي والتوجيه الهيكلي للعقار." },
      { "label": "التاريخ", "value": "14 أغسطس 1992." },
      { "label": "تفاصيل", "value": "(توقيع: نصرت فاطمة)." }
    ]
  },
  "fa": {
    "name": "فارسی",
    "dir": "rtl",
    "docName": "درخواست از استاندار دمشق",
    "lines": [
      { "label": "به", "value": "جناب استاندار محترم دمشق." },
      { "label": "از طرف", "value": "نصرت فاطمه، شهروند پاکستانی." },
      { "label": "موضوع", "value": "درخواست مربوط به ملک شماره ۲۸۴، مبنی بر اعلام آمادگی برای واگذاری بخشی از زمین برای منافع عمومی مطابق با طرح جامع و نقشه ساختاری ملک." },
      { "label": "تاریخ", "value": "۱۴ اوت ۱۹۹۲." },
      { "label": "جزئیات", "value": "(با امضای نصرت فاطمه)." }
    ]
  },
  "es": {
    "name": "Español",
    "dir": "ltr",
    "docName": "Solicitud al Gobernador de Damasco",
    "lines": [
      { "label": "Para", "value": "S.E. El Gobernador de Damasco." },
      { "label": "De", "value": "Nusrat Fatima, nacional paquistaní." },
      { "label": "Asunto", "value": "Solicitud con respecto a la propiedad no. 284, expresando disposición para ceder una parte de la tierra para utilidad pública/beneficio general de acuerdo con el plan maestro y la alineación estructural de la propiedad." },
      { "label": "Fecha", "value": "14 de agosto de 1992." },
      { "label": "Detalles", "value": "(Firmado por Nusrat Fatima)." }
    ]
  }
};

const data = JSON.parse(fs.readFileSync('documents_data.json', 'utf8'));
const docIndex = data.findIndex(d => d.id === docId);

if (docIndex !== -1) {
  data[docIndex].translations = newTranslations;
  data[docIndex].category = 'property'; 
  fs.writeFileSync('documents_data.json', JSON.stringify(data, null, 2));
  console.log("Updated doc_083 successfully");
} else {
  console.log("Doc not found");
}
