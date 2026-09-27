const fs = require('fs');

const docId = 'doc_117';

const newTranslations = {
  "ur": {
    "name": "اردو",
    "dir": "rtl",
    "docName": "شامی پبلک پراسیکیوشن کے نام درخواست (بجلی کا میٹر چوری ہونے کی رپورٹ)",
    "lines": [
      { "label": "تفصیلات", "value": "شامی عرب جمہوریہ - وزارتِ عدل۔" },
      { "label": "بنام", "value": "پبلک پراسیکیوشن (استغاثہ)، بابيلا۔" },
      { "label": "درخواست گزار", "value": "نصرت فاطمہ بنت سید محمد نقوی (والدہ: مہر بانو نقوی، پیدائش 1958، پاکستان)۔" },
      { "label": "موضوع", "value": "بجلی کے میٹر کی چوری۔" },
      { "label": "مضمون", "value": "جناب، 10 مئی 2019 کو جب میں سیدہ زینب کے علاقے میں واقع اپنے گھر واپس آئی تو دیکھا کہ بجلی کا میٹر چوری ہو چکا ہے۔ اس لیے میں یہ درخواست پیش کر رہی ہوں تاکہ آپ اسے متعلقہ پولیس اسٹیشن بھیجیں اور ضروری قانونی کارروائی / رپورٹ درج کی جا سکے۔" },
      { "label": "تاریخ", "value": "7 جولائی 2019۔" },
      { "label": "سرکاری کارروائی / نوٹ", "value": "یہ درخواست تفتیش اور نتائج سے آگاہ کرنے کے لیے بابيلا پولیس اسٹیشن کی طرف ریفر کی جاتی ہے۔ (سربراہ پبلک پراسیکیوشن بابيلا کے دستخط کے ساتھ)۔" }
    ]
  },
  "en": {
    "name": "English",
    "dir": "ltr",
    "docName": "Application to Syrian Public Prosecution (Stolen Electricity Meter Report)",
    "lines": [
      { "label": "Details", "value": "Syrian Arab Republic - Ministry of Justice." },
      { "label": "To", "value": "The Public Prosecution in Babila." },
      { "label": "Applicant", "value": "Nusrat Fatima bint Syed Muhammad Naqvi (Mother: Mehr Bano Naqvi, born 1958 in Pakistan)." },
      { "label": "Subject", "value": "Theft of an electricity meter." },
      { "label": "Content", "value": "Sir, on 10/05/2019, upon returning to my house located in the Sayyida Zainab area, I found that the electricity meter had been stolen. Therefore, I submit this request, hoping your esteemed self will refer my request to the police station to file the necessary official report." },
      { "label": "Date", "value": "07 / 07 / 2019." },
      { "label": "Official Action/Note", "value": "Referred to the Babila district police station to instruct an investigation and properly inform us of the results. (Signed by the Head of Public Prosecution in Babila)." }
    ]
  },
  "ar": {
    "name": "العربية",
    "dir": "rtl",
    "docName": "طلب للنيابة العامة السورية (بلاغ عن سرقة عداد كهرباء)",
    "lines": [
      { "label": "تفاصيل", "value": "الجمهورية العربية السورية - وزارة العدل." },
      { "label": "إلى", "value": "النيابة العامة في ببيلا." },
      { "label": "مقدم الطلب", "value": "نصرت فاطمة بنت سيد محمد نقوي (الأم: مهر بانو نقوي، مواليد 1958، باكستان)." },
      { "label": "الموضوع", "value": "سرقة عداد كهرباء." },
      { "label": "المضمون", "value": "سيدي، بتاريخ 10/05/2019، عند عودتي إلى منزلي الكائن في منطقة السيدة زينب، وجدت أن عداد الكهرباء قد سُرق. لذا، أقدم هذا الطلب آملاً من سيادتكم إحالته إلى مخفر الشرطة لعمل الضبط الرسمي اللازم." },
      { "label": "التاريخ", "value": "07 / 07 / 2019." },
      { "label": "إجراء رسمي/ملاحظة", "value": "يُحال إلى مخفر شرطة منطقة ببيلا للإيعاز بالتحقيق وإعلامنا بالنتائج أصولاً. (موقع من قبل رئيس النيابة العامة في ببيلا)." }
    ]
  },
  "fa": {
    "name": "فارسی",
    "dir": "rtl",
    "docName": "درخواست به دادستانی عمومی سوریه (گزارش سرقت کنتور برق)",
    "lines": [
      { "label": "جزئیات", "value": "جمهوری عربی سوریه - وزارت دادگستری." },
      { "label": "به", "value": "دادستانی عمومی در ببیلا." },
      { "label": "درخواست‌کننده", "value": "نصرت فاطمه فرزند سید محمد نقوی (مادر: مهر بانو نقوی، متولد ۱۹۵۸ در پاکستان)." },
      { "label": "موضوع", "value": "سرقت کنتور برق." },
      { "label": "مضمون", "value": "جناب، در تاریخ ۱۰/۰۵/۲۰۱۹، هنگام بازگشت به خانه‌ام واقع در منطقه سیده زینب، متوجه شدم که کنتور برق به سرقت رفته است. لذا این درخواست را ارائه می‌دهم و امیدوارم که آن مقام محترم، درخواست مرا برای تشکیل پرونده رسمی لازم به ایستگاه پلیس ارجاع دهند." },
      { "label": "تاریخ", "value": "۰۷ / ۰۷ / ۲۰۱۹." },
      { "label": "اقدام رسمی/یادداشت", "value": "ارجاع به ایستگاه پلیس منطقه ببیلا برای دستور تحقیق و اطلاع‌رسانی مناسب نتایج به ما. (با امضای رئیس دادستانی عمومی در ببیلا)." }
    ]
  },
  "es": {
    "name": "Español",
    "dir": "ltr",
    "docName": "Solicitud al Ministerio Público Sirio (Reporte de Robo de Medidor de Electricidad)",
    "lines": [
      { "label": "Detalles", "value": "República Árabe Siria - Ministerio de Justicia." },
      { "label": "Para", "value": "El Ministerio Público en Babila." },
      { "label": "Solicitante", "value": "Nusrat Fatima bint Syed Muhammad Naqvi (Madre: Mehr Bano Naqvi, nacida en 1958 en Pakistán)." },
      { "label": "Asunto", "value": "Robo de un medidor de electricidad." },
      { "label": "Contenido", "value": "Señor, el 10/05/2019, al regresar a mi casa ubicada en el área de Sayyida Zainab, encontré que el medidor de electricidad había sido robado. Por lo tanto, presento esta solicitud, esperando que su estimada persona remita mi solicitud a la estación de policía para presentar el informe oficial necesario." },
      { "label": "Fecha", "value": "07 / 07 / 2019." },
      { "label": "Acción Oficial/Nota", "value": "Remitido a la estación de policía del distrito de Babila para instruir una investigación e informarnos debidamente de los resultados. (Firmado por el Jefe del Ministerio Público en Babila)." }
    ]
  }
};

const data = JSON.parse(fs.readFileSync('documents_data.json', 'utf8'));
const docIndex = data.findIndex(d => d.id === docId);

if (docIndex !== -1) {
  data[docIndex].translations = newTranslations;
  data[docIndex].category = 'personal'; 
  fs.writeFileSync('documents_data.json', JSON.stringify(data, null, 2));
  console.log("Updated doc_117 successfully");
} else {
  console.log("Doc not found");
}
