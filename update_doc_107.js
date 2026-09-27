const fs = require('fs');

const docId = 'doc_107';

const newTranslations = {
  "ur": {
    "name": "اردو",
    "dir": "rtl",
    "docName": "حتمی بیع نامہ (عقد بيع قطعي - شام، 1996)",
    "lines": [
      { "label": "دستاویز", "value": "حتمی بیع نامہ (عقد بيع قطعي)." },
      { "label": "فریقِ اول (بیچنے والا)", "value": "خالد...." },
      { "label": "فریقِ دوم (خریدار)", "value": "نصرت فاطمہ نقوی بنت سید محمد، جن کا پاکستانی پاسپورٹ نمبر 278276K ہے (اجراء 20 ستمبر 1996)." },
      { "label": "موضوع", "value": "قبر السٹ کے علاقے میں واقع پراپرٹی نمبر 286/12 کے حصص کی حتمی خرید و فروخت کا معاہدہ." },
      { "label": "قیمت", "value": "325,000 شامی پاؤنڈز (تین لاکھ پچیس ہزار شامی لیرہ)." },
      { "label": "تاریخ", "value": "20 نومبر 1996." },
      { "label": "Details", "value": "(فریقین اور گواہوں کے دستخط موجود ہیں)." }
    ]
  },
  "en": {
    "name": "English",
    "dir": "ltr",
    "docName": "Final Sales Contract (عقد بيع قطعي - Syria, 1996)",
    "lines": [
      { "label": "Document", "value": "Final Sales Contract (عقد بيع قطعي)." },
      { "label": "First Party (Seller)", "value": "Khaled...." },
      { "label": "Second Party (Buyer)", "value": "Nusrat Fatima Naqvi bint Syed Muhammad, holding Pakistani passport no. 278276K issued on 20/09/1996." },
      { "label": "Subject", "value": "Final purchase of shares from property no. 286/12 in the Qabr Al-Sit region." },
      { "label": "Price", "value": "325,000 Syrian Pounds (Three hundred and twenty-five thousand Syrian Pounds)." },
      { "label": "Date", "value": "20 / 11 / 1996." },
      { "label": "Details", "value": "(Signed by First Party, Second Party, and witnesses)." }
    ]
  },
  "ar": {
    "name": "العربية",
    "dir": "rtl",
    "docName": "عقد بيع قطعي (سوريا، 1996)",
    "lines": [
      { "label": "الوثيقة", "value": "عقد بيع قطعي." },
      { "label": "الفريق الأول (البائع)", "value": "خالد...." },
      { "label": "الفريق الثاني (المشتري)", "value": "نصرت فاطمة نقوي بنت سيد محمد، تحمل جواز سفر باكستاني رقم 278276K صادر في 20/09/1996." },
      { "label": "الموضوع", "value": "شراء نهائي لحصص من العقار رقم 286/12 في منطقة قبر الست." },
      { "label": "السعر", "value": "325,000 ليرة سورية (ثلاثمائة وخمسة وعشرون ألف ليرة سورية)." },
      { "label": "التاريخ", "value": "20 نوفمبر 1996." },
      { "label": "تفاصيل", "value": "(موقع من قبل الفريق الأول والفريق الثاني والشهود)." }
    ]
  },
  "fa": {
    "name": "فارسی",
    "dir": "rtl",
    "docName": "قرارداد فروش قطعی (عقد بيع قطعي - سوریه، ۱۹۹۶)",
    "lines": [
      { "label": "سند", "value": "قرارداد نهایی فروش (عقد بيع قطعي)." },
      { "label": "طرف اول (فروشنده)", "value": "خالد...." },
      { "label": "طرف دوم (خریدار)", "value": "نصرت فاطمه نقوی فرزند سید محمد، دارنده گذرنامه پاکستانی شماره ۲۷۸۲۷۶K صادره در ۲۰/۰۹/۱۹۹۶." },
      { "label": "موضوع", "value": "خرید نهایی سهام از ملک شماره ۲۸۶/۱۲ در منطقه قبر الست." },
      { "label": "قیمت", "value": "۳۲۵,۰۰۰ لیره سوریه (سیصد و بیست و پنج هزار لیره سوریه)." },
      { "label": "تاریخ", "value": "۲۰ نوامبر ۱۹۹۶." },
      { "label": "جزئیات", "value": "(با امضای طرف اول، طرف دوم و شهود)." }
    ]
  },
  "es": {
    "name": "Español",
    "dir": "ltr",
    "docName": "Contrato de Venta Final (عقد بيع قطعي - Siria, 1996)",
    "lines": [
      { "label": "Documento", "value": "Contrato de Venta Final (عقد بيع قطعي)." },
      { "label": "Primera Parte (Vendedor)", "value": "Khaled...." },
      { "label": "Segunda Parte (Comprador)", "value": "Nusrat Fatima Naqvi bint Syed Muhammad, con pasaporte paquistaní no. 278276K emitido el 20/09/1996." },
      { "label": "Asunto", "value": "Compra final de acciones de la propiedad no. 286/12 en la región de Qabr Al-Sit." },
      { "label": "Precio", "value": "325,000 Libras Sirias (Trescientos veinticinco mil Libras Sirias)." },
      { "label": "Fecha", "value": "20 de noviembre de 1996." },
      { "label": "Detalles", "value": "(Firmado por la Primera Parte, Segunda Parte y testigos)." }
    ]
  }
};

const data = JSON.parse(fs.readFileSync('documents_data.json', 'utf8'));
const docIndex = data.findIndex(d => d.id === docId);

if (docIndex !== -1) {
  data[docIndex].translations = newTranslations;
  data[docIndex].category = 'property'; 
  fs.writeFileSync('documents_data.json', JSON.stringify(data, null, 2));
  console.log("Updated doc_107 successfully");
} else {
  console.log("Doc not found");
}
