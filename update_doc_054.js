const fs = require('fs');

const docId = 'doc_054';

const newTranslations = {
  "ur": {
    "name": "اردو",
    "dir": "rtl",
    "docName": "ایرانی ثقافتی مرکز کا سفارشی خط (دمشق سے میڈرڈ)",
    "lines": [
      { "label": "ادارہ", "value": "سازمان فرہنگ و ارتباطات اسلامی - رایزنی فرہنگی جمہوری اسلامی ایران، دمشق." },
      { "label": "تاریخ", "value": "19 / 02 / 1431 (ہجری شمسی)." },
      { "label": "بنام", "value": "جناب آقای عبد خدایی، رایزن محترم فرہنگی جمہوری اسلامی ایران در مادرید." },
      { "label": "موضوع", "value": "محترمہ نصرت فاطمہ نقوی (ساکن پاکستان و مقیم شام) کا تعارف۔ وہ اہل بیت (ع) کے مکتب کی ترویج میں سرگرم ہیں اور اسپین میں مقیم شیعوں کے حالات کو بہتر بنانے، حسینیہ یا اسکول کی تاسیس کے لیے سرمایہ کاری کرنا چاہتی ہیں۔ آپ سے تعاون اور رہنمائی کی درخواست کی جاتی ہے." },
      { "label": "Details", "value": "(دستخط: ڈاکٹر محمد علی آذرشب، رایزن فرہنگی سفارت جمہوری اسلامی ایران، دمشق)." }
    ]
  },
  "en": {
    "name": "English",
    "dir": "ltr",
    "docName": "Recommendation Letter from Iranian Cultural Center",
    "lines": [
      { "label": "Organization", "value": "Islamic Culture and Relations Organization - Cultural Attache of the Islamic Republic of Iran, Damascus." },
      { "label": "Date", "value": "19 / 02 / 1431 (Hijri/Solar)." },
      { "label": "To", "value": "Mr. Abd Khodaei, Cultural Counselor of the Islamic Republic of Iran in Madrid." },
      { "label": "Content", "value": "Introducing Mrs. Nusrat Fatima Naqvi, a Pakistani national who resides in Syria and is active in promoting the culture and school of Ahl al-Bayt (AS). She wishes to organize the situation of Shias residing in Spain by establishing a Hussainia, school, or other investments, and requests the cultural attache's guidance and support." },
      { "label": "Details", "value": "(Signed by Dr. Mohammad Ali Azarshab, Cultural Counselor, Damascus)." }
    ]
  },
  "ar": {
    "name": "العربية",
    "dir": "rtl",
    "docName": "خطاب توصية من المركز الثقافي الإيراني",
    "lines": [
      { "label": "المؤسسة", "value": "رابطة الثقافة والعلاقات الإسلامية - المستشارية الثقافية لجمهورية إيران الإسلامية، دمشق." },
      { "label": "التاريخ", "value": "19 / 02 / 1431 (هجري شمسي)." },
      { "label": "إلى", "value": "السيد عبد خدائي، المستشار الثقافي لجمهورية إيران الإسلامية في مدريد." },
      { "label": "الموضوع", "value": "تقديم السيدة نصرت فاطمة نقوي (من باكستان ومقيمة في سوريا)، وهي ناشطة في نشر ثقافة ومدرسة أهل البيت (ع). وترغب في تحسين أوضاع الشيعة المقيمين في إسبانيا من خلال الاستثمار في إنشاء حسينية أو مدرسة، وتطلب تعاونكم وتوجيهاتكم." },
      { "label": "تفاصيل", "value": "(توقيع: د. محمد علي آذرشب، المستشار الثقافي، سفارة جمهورية إيران الإسلامية، دمشق)." }
    ]
  },
  "fa": {
    "name": "فارسی",
    "dir": "rtl",
    "docName": "معرفی‌نامه از رایزنی فرهنگی ایران",
    "lines": [
      { "label": "سازمان", "value": "سازمان فرهنگ و ارتباطات اسلامی - رایزنی فرهنگی جمهوری اسلامی ایران، دمشق." },
      { "label": "تاریخ", "value": "۱۹ / ۰۲ / ۱۴۳۱ (هجری شمسی)." },
      { "label": "به", "value": "جناب آقای عبد خدایی، رایزن محترم فرهنگی جمهوری اسلامی ایران در مادرید." },
      { "label": "موضوع", "value": "معرفی خانم نصرت فاطمه نقوی (تبعه پاکستان و مقیم سوریه) که در ترویج فرهنگ و مکتب اهل بیت (ع) فعال می‌باشند. ایشان تمایل دارند برای ساماندهی وضعیت شیعیان مقیم اسپانیا از طریق تأسیس حسینیه، مدرسه یا سایر سرمایه‌گذاری‌ها اقدام نمایند و خواستار راهنمایی و همکاری شما هستند." },
      { "label": "جزئیات", "value": "(با امضای دکتر محمد علی آذرشب، رایزن فرهنگی سفارت جمهوری اسلامی ایران، دمشق)." }
    ]
  },
  "es": {
    "name": "Español",
    "dir": "ltr",
    "docName": "Carta de Recomendación del Centro Cultural Iraní",
    "lines": [
      { "label": "Organización", "value": "Organización de Cultura y Relaciones Islámicas - Agregado Cultural de la República Islámica de Irán, Damasco." },
      { "label": "Fecha", "value": "19 / 02 / 1431 (Hégira/Solar)." },
      { "label": "Para", "value": "Sr. Abd Khodaei, Consejero Cultural de la República Islámica de Irán en Madrid." },
      { "label": "Asunto", "value": "Presentación de la Sra. Nusrat Fatima Naqvi, de nacionalidad paquistaní y residente en Siria, quien participa activamente en la promoción de la cultura y la escuela de Ahl al-Bayt (AS). Ella desea organizar la situación de los chiítas residentes en España mediante el establecimiento de una Hussainia, escuela u otras inversiones, y solicita la orientación y el apoyo del agregado cultural." },
      { "label": "Detalles", "value": "(Firmado por el Dr. Mohammad Ali Azarshab, Consejero Cultural, Damasco)." }
    ]
  }
};

const data = JSON.parse(fs.readFileSync('documents_data.json', 'utf8'));
const docIndex = data.findIndex(d => d.id === docId);

if (docIndex !== -1) {
  data[docIndex].translations = newTranslations;
  data[docIndex].category = 'embassy'; 
  fs.writeFileSync('documents_data.json', JSON.stringify(data, null, 2));
  console.log("Updated doc_054 successfully");
} else {
  console.log("Doc not found");
}
