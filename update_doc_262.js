const fs = require('fs');
const file = 'E:/2.maan-jee-website/documents_data.json';
const data = JSON.parse(fs.readFileSync(file, 'utf8'));
const docIndex = data.findIndex(d => d.id === 'doc_262');

if (docIndex !== -1) {
  data[docIndex].imageUrl = "https://res.cloudinary.com/b7xbeztp/image/upload/v1790360768/image262.jpg";
  data[docIndex].translations = {
    ur: {
      name: "اردو",
      dir: "rtl",
      docName: "بارسلونا (اسپین) کا پبلک ٹرانسپورٹ کارڈ",
      lines: [
        { label: "کارڈ کا نام", value: "Targeta Rosa Metropolitana (مفت میٹروپولیٹن پنک کارڈ - Gratuïta)" },
        { label: "نیٹ ورک", value: "AMB Mobilitat (بارسلونا میٹرو، بس، ٹرام اور لوکل ٹرین نیٹ ورک)" },
        { label: "حامل کارڈ کا نام", value: "FATIMA NUSRAT (فاطمہ نصرت)" },
        { label: "شہر / علاقہ", value: "BADALONA (بادالونا، بارسلونا)" },
        { label: "اسپین کا فارنر شناختی نمبر (NIE)", value: "X6850143F" },
        { label: "میعاد (ایکسپائری)", value: "31/05/2022ء تک کارآمد" },
        { label: "کارڈ سیریل نمبر", value: "2469111" }
      ]
    },
    en: {
      name: "English",
      dir: "ltr",
      docName: "Barcelona (Spain) Public Transport Card",
      lines: [
        { label: "Card Name", value: "Targeta Rosa Metropolitana (Free Metropolitan Pink Card - Gratuïta)" },
        { label: "Network", value: "AMB Mobilitat (Barcelona Metro, Bus, Tram, and Local Train Network)" },
        { label: "Cardholder Name", value: "FATIMA NUSRAT" },
        { label: "City / Area", value: "BADALONA (Barcelona)" },
        { label: "Spanish Foreigner ID Number (NIE)", value: "X6850143F" },
        { label: "Expiry Date", value: "Valid until 31/05/2022" },
        { label: "Card Serial Number", value: "2469111" }
      ]
    },
    ar: {
      name: "العربية",
      dir: "rtl",
      docName: "بطاقة النقل العام في برشلونة (إسبانيا)",
      lines: [
        { label: "اسم البطاقة", value: "Targeta Rosa Metropolitana (البطاقة الوردية الحضرية المجانية - Gratuïta)" },
        { label: "الشبكة", value: "AMB Mobilitat (مترو برشلونة، الحافلات، الترام وشبكة القطارات المحلية)" },
        { label: "اسم حامل البطاقة", value: "FATIMA NUSRAT (فاطمة نصرت)" },
        { label: "المدينة / المنطقة", value: "BADALONA (بادالونا، برشلونة)" },
        { label: "رقم تعريف الأجنبي في إسبانيا (NIE)", value: "X6850143F" },
        { label: "تاريخ الانتهاء", value: "صالحة حتى 31/05/2022" },
        { label: "الرقم التسلسلي للبطاقة", value: "2469111" }
      ]
    }
  };
  fs.writeFileSync(file, JSON.stringify(data, null, 2));
  console.log('Successfully updated doc_262');
} else {
  // if not found, push it
  const newDoc = {
    id: 'doc_262',
    imageUrl: "https://res.cloudinary.com/b7xbeztp/image/upload/v1790360768/image262.jpg",
    translations: {
      ur: {
        name: "اردو",
        dir: "rtl",
        docName: "بارسلونا (اسپین) کا پبلک ٹرانسپورٹ کارڈ",
        lines: [
          { label: "کارڈ کا نام", value: "Targeta Rosa Metropolitana (مفت میٹروپولیٹن پنک کارڈ - Gratuïta)" },
          { label: "نیٹ ورک", value: "AMB Mobilitat (بارسلونا میٹرو، بس، ٹرام اور لوکل ٹرین نیٹ ورک)" },
          { label: "حامل کارڈ کا نام", value: "FATIMA NUSRAT (فاطمہ نصرت)" },
          { label: "شہر / علاقہ", value: "BADALONA (بادالونا، بارسلونا)" },
          { label: "اسپین کا فارنر شناختی نمبر (NIE)", value: "X6850143F" },
          { label: "میعاد (ایکسپائری)", value: "31/05/2022ء تک کارآمد" },
          { label: "کارڈ سیریل نمبر", value: "2469111" }
        ]
      },
      en: {
        name: "English",
        dir: "ltr",
        docName: "Barcelona (Spain) Public Transport Card",
        lines: [
          { label: "Card Name", value: "Targeta Rosa Metropolitana (Free Metropolitan Pink Card - Gratuïta)" },
          { label: "Network", value: "AMB Mobilitat (Barcelona Metro, Bus, Tram, and Local Train Network)" },
          { label: "Cardholder Name", value: "FATIMA NUSRAT" },
          { label: "City / Area", value: "BADALONA (Barcelona)" },
          { label: "Spanish Foreigner ID Number (NIE)", value: "X6850143F" },
          { label: "Expiry Date", value: "Valid until 31/05/2022" },
          { label: "Card Serial Number", value: "2469111" }
        ]
      },
      ar: {
        name: "العربية",
        dir: "rtl",
        docName: "بطاقة النقل العام في برشلونة (إسبانيا)",
        lines: [
          { label: "اسم البطاقة", value: "Targeta Rosa Metropolitana (البطاقة الوردية الحضرية المجانية - Gratuïta)" },
          { label: "الشبكة", value: "AMB Mobilitat (مترو برشلونة، الحافلات، الترام وشبكة القطارات المحلية)" },
          { label: "اسم حامل البطاقة", value: "FATIMA NUSRAT (فاطمة نصرت)" },
          { label: "المدينة / المنطقة", value: "BADALONA (بادالونا، برشلونة)" },
          { label: "رقم تعريف الأجنبي في إسبانيا (NIE)", value: "X6850143F" },
          { label: "تاريخ الانتهاء", value: "صالحة حتى 31/05/2022" },
          { label: "الرقم التسلسلي للبطاقة", value: "2469111" }
        ]
      }
    }
  };
  data.push(newDoc);
  fs.writeFileSync(file, JSON.stringify(data, null, 2));
  console.log('Successfully added doc_262');
}
