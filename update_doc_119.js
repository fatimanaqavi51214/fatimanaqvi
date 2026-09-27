const fs = require('fs');

const docId = 'doc_119';

const newTranslations = {
  "ur": {
    "name": "اردو",
    "dir": "rtl",
    "docName": "رئیل اسٹیٹ سروے اور زمین کا نقشہ (اصل عربی مسودہ)",
    "lines": [
      { "label": "دستاویز", "value": "رئیل اسٹیٹ کا نقشہ اور رقبے کی تفصیل (اصل عربی مسودہ)۔" },
      { "label": "تفصیلات", "value": "ہاتھ سے بنا ہوا خاکہ جس میں پراپرٹی نمبر 284 اور اس کے اطراف کے رقبے اور پیمائش درج ہیں۔" },
      { "label": "مضمون", "value": "زمین کی طبعی نوعیت کے مطابق ذیلی حصوں کے رقبے (جیسے 284/1 = 2088.00، 284/2 = 2017.00 وغیرہ) کا حساب لگایا گیا ہے۔" },
      { "label": "ماہر", "value": "رئیل اسٹیٹ کے ماہر عدنان الخلیل کی طرف سے تیار اور تصدیق شدہ۔" }
    ]
  },
  "en": {
    "name": "English",
    "dir": "ltr",
    "docName": "Real Estate Survey and Land Map (Original Arabic Draft)",
    "lines": [
      { "label": "Document", "value": "Real Estate Map and Surface Area Calculation (Arabic Original)." },
      { "label": "Details", "value": "Hand-drawn plan showing property subdivisions and dimensions for parcel no. 284 and surrounding areas." },
      { "label": "Content", "value": "Mentions the calculated surface areas of subdivisions (e.g., 284/1 = 2088.00, 284/2 = 2017.00, etc.) according to the physical nature of the land." },
      { "label": "Expert", "value": "Organized and verified by real estate expert Adnan Al Khalil." }
    ]
  },
  "ar": {
    "name": "العربية",
    "dir": "rtl",
    "docName": "مسح عقاري وخريطة أراضٍ (المسودة العربية الأصلية)",
    "lines": [
      { "label": "الوثيقة", "value": "خريطة عقارية وحساب المساحة (الأصل العربي)." },
      { "label": "تفاصيل", "value": "مخطط مرسوم باليد يوضح الأقسام الفرعية للعقار والأبعاد للقطعة رقم 284 والمناطق المحيطة." },
      { "label": "المضمون", "value": "يذكر المساحات المحسوبة للأقسام الفرعية (مثل 284/1 = 2088.00، 284/2 = 2017.00، الخ) وفقاً للطبيعة المادية للأرض." },
      { "label": "الخبير", "value": "تم إعداده والتحقق منه من قبل الخبير العقاري عدنان الخليل." }
    ]
  },
  "fa": {
    "name": "فارسی",
    "dir": "rtl",
    "docName": "نقشه برداری املاک و مستغلات و نقشه زمین (پیش‌نویس اصلی عربی)",
    "lines": [
      { "label": "سند", "value": "نقشه ملکی و محاسبه مساحت (نسخه اصلی عربی)." },
      { "label": "جزئیات", "value": "پلان دست‌کشیده که زیربخش‌های ملک و ابعاد قطعه شماره ۲۸۴ و مناطق اطراف را نشان می‌دهد." },
      { "label": "مضمون", "value": "مساحت محاسبه شده زیربخش‌ها (مانند ۲۸۴/۱ = ۲۰۸۸.۰۰، ۲۸۴/۲ = ۲۰۱۷.۰۰ و غیره) را با توجه به ماهیت فیزیکی زمین ذکر می‌کند." },
      { "label": "کارشناس", "value": "تهیه و تأیید شده توسط کارشناس املاک، عدنان الخلیل." }
    ]
  },
  "es": {
    "name": "Español",
    "dir": "ltr",
    "docName": "Estudio de Bienes Raíces y Mapa de Terreno (Borrador Original en Árabe)",
    "lines": [
      { "label": "Documento", "value": "Mapa de Bienes Raíces y Cálculo de Superficie (Original en Árabe)." },
      { "label": "Detalles", "value": "Plano dibujado a mano que muestra las subdivisiones de la propiedad y las dimensiones de la parcela no. 284 y áreas circundantes." },
      { "label": "Contenido", "value": "Menciona las superficies calculadas de las subdivisiones (por ejemplo, 284/1 = 2088.00, 284/2 = 2017.00, etc.) de acuerdo con la naturaleza física del terreno." },
      { "label": "Experto", "value": "Organizado y verificado por el experto en bienes raíces Adnan Al Khalil." }
    ]
  }
};

const data = JSON.parse(fs.readFileSync('documents_data.json', 'utf8'));
const docIndex = data.findIndex(d => d.id === docId);

if (docIndex !== -1) {
  data[docIndex].translations = newTranslations;
  data[docIndex].category = 'property'; 
  fs.writeFileSync('documents_data.json', JSON.stringify(data, null, 2));
  console.log("Updated doc_119 successfully");
} else {
  console.log("Doc not found");
}
