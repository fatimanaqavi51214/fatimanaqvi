const fs = require('fs');

const docId = 'doc_089';

const newTranslations = {
  "ur": {
    "name": "اردو",
    "dir": "rtl",
    "docName": "رئیل اسٹیٹ سروے اور زمین کا نقشہ",
    "lines": [
      { "label": "دستاویز", "value": "رئیل اسٹیٹ کا نقشہ اور رقبے کی تفصیل (پراپرٹی نمبر 283، 284 اور اس کے اطراف کا پلان)۔" },
      { "label": "تفصیلات", "value": "نصرت فاطمہ نقوی غلام سرور چوہدری کی ملکیت کے ذیلی حصوں کے رقبے درج ہیں۔ (مثلاً 284/1 = 2088.00 وغیرہ)" },
      { "label": "ماہر", "value": "رئیل اسٹیٹ کے ماہر عدنان الخلیل کا تیار کردہ نقشہ۔" }
    ]
  },
  "en": {
    "name": "English",
    "dir": "ltr",
    "docName": "Real Estate Survey and Land Map",
    "lines": [
      { "label": "Document", "value": "Real Estate Map and Surface Area Calculation (Plan for property no. 283, 284 and surrounding areas)." },
      { "label": "Details", "value": "Mentions the surface areas of subdivisions (e.g., 284/1 = 2088.00, 284/2 = 2017.00, etc.) belonging to Nusrat Fatima Nakawi Ghalan Srour Chaudhry." },
      { "label": "Expert", "value": "Organized by real estate expert Adnan Al Khalil." }
    ]
  },
  "ar": {
    "name": "العربية",
    "dir": "rtl",
    "docName": "مسح عقاري وخريطة أراضٍ",
    "lines": [
      { "label": "الوثيقة", "value": "خريطة عقارية وحساب المساحة (مخطط للعقارين رقم 283 و 284 والمناطق المحيطة)." },
      { "label": "تفاصيل", "value": "يذكر مساحات الأقسام الفرعية (مثل 284/1 = 2088.00، الخ) العائدة لملكية نصرت فاطمة نقوي غلام سرور تشودري." },
      { "label": "الخبير", "value": "تم إعداد المخطط من قبل الخبير العقاري عدنان الخليل." }
    ]
  },
  "fa": {
    "name": "فارسی",
    "dir": "rtl",
    "docName": "نقشه برداری املاک و مستغلات و نقشه زمین",
    "lines": [
      { "label": "سند", "value": "نقشه ملکی و محاسبه مساحت (پلان املاک شماره ۲۸۳ و ۲۸۴ و مناطق اطراف)." },
      { "label": "جزئیات", "value": "مساحت زیربخش‌ها (مانند ۲۸۴/۱ = ۲۰۸۸.۰۰ و غیره) متعلق به نصرت فاطمه نقوی غلام سرور چوهدری ذکر شده است." },
      { "label": "کارشناس", "value": "تهیه شده توسط کارشناس املاک، عدنان الخلیل." }
    ]
  },
  "es": {
    "name": "Español",
    "dir": "ltr",
    "docName": "Estudio de Bienes Raíces y Mapa de Terreno",
    "lines": [
      { "label": "Documento", "value": "Mapa de Bienes Raíces y Cálculo de Superficie (Plano para la propiedad no. 283, 284 y áreas circundantes)." },
      { "label": "Detalles", "value": "Menciona las superficies de las subdivisiones (por ejemplo, 284/1 = 2088.00, 284/2 = 2017.00, etc.) pertenecientes a Nusrat Fatima Nakawi Ghalan Srour Chaudhry." },
      { "label": "Experto", "value": "Organizado por el experto en bienes raíces Adnan Al Khalil." }
    ]
  }
};

const data = JSON.parse(fs.readFileSync('documents_data.json', 'utf8'));
const docIndex = data.findIndex(d => d.id === docId);

if (docIndex !== -1) {
  data[docIndex].translations = newTranslations;
  data[docIndex].category = 'property'; 
  fs.writeFileSync('documents_data.json', JSON.stringify(data, null, 2));
  console.log("Updated doc_089 successfully");
} else {
  console.log("Doc not found");
}
