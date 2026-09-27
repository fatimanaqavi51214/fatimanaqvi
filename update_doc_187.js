const fs = require('fs');

const docId = 'doc_187';

const newTranslations = {
  "ur": {
    "name": "اردو",
    "dir": "rtl",
    "docName": "اصل عربی دستخط شدہ نکاح نامہ",
    "lines": [
      { "label": "سرنامہ", "value": "فندق الشام (شام پیلس ہوٹل) – شارع میسلون، ص۔ ب 7570، دمشق، شام | \"بسم اللہ الرحمن الرحیم – یا علی مدد\"" },
      { "label": "عقدِ نکاح کے مندرجات", "value": "دولہا کا نام: نوجوان: غلام سرور ولد فضل کریم – پاکستان | دلہن کا نام: محترمہ نصرت فاطمہ بنت سید محمد نقوی" },
      { "label": "حق مہر", "value": "پچاس ہزار (50,000) عراقی دینار، غیر مقبوض (موخر)۔" },
      { "label": "معاہدہ", "value": "\"اس پر فریقین (عقد کرنے والوں) کے مابین گواہوں کے روبرو باہمی اتفاق رائے طے پایا؛ اور اللہ سبحانہ و تعالیٰ بہترین گواہ ہے۔\"" },
      { "label": "دستخط کنندگان", "value": "دولہا: غلام سرور (دستخط شدہ) | دلہن: نصرت فاطمہ (دستخط شدہ) | دلہن کے ولی / سرپرست: الحاج شیخ عبد الرحمن الخیر (دستخط شدہ)" },
      { "label": "گواہانِ نکاح", "value": "نذیر التیناوی (دستخط شدہ) | محمد عبد الستار البلوط (دستخط شدہ) | محمد خیر التیناوی (دستخط شدہ)" },
      { "label": "عدالتی و دفتری توثیقات", "value": "شامی جمہوریہ کے معاون وزیر برائے داخلی و شہری امور کی باضابطہ موجودگی میں تصدیق کی گئی۔ | شامی سرکاری ریونیو اسٹامپ، عدالتی و قونصلر مہریں ثبت ہیں۔" }
    ]
  },
  "en": {
    "name": "English",
    "dir": "ltr",
    "docName": "Original Arabic Signed Marriage Contract",
    "lines": [
      { "label": "Header", "value": "Cham Palace Hotel – Maysaloun Street, P.O. Box 7570, Damascus, Syria | \"In the Name of God, The Beneficent, The Merciful – Ya Ali Madad\"" },
      { "label": "Marriage Contract", "value": "Groom: The young man: Ghulam Sarwar son of Fazal Karim – Pakistan | Bride: Mrs. Nusrat Fatima daughter of Sayed Mohammad Naqvi" },
      { "label": "Dowry", "value": "Dowry (Mahr): Fifty thousand (50,000) Iraqi Dinars, unreceived / deferred." },
      { "label": "Declaration", "value": "\"Upon this, the agreement was concluded between the two parties before witnesses; and God Almighty is the Best of Witnesses.\"" },
      { "label": "Signatures", "value": "Groom: Ghulam Sarwar (Signed) | Bride: Nusrat Fatima (Signed) | Bride’s Guardian / Sponsor: Al-Haj Sheikh Abdulrahman Al-Kheir (Signed)" },
      { "label": "Witnesses", "value": "Witnesses (شهود الحال): Nazir Al-Tinawi (Signed) | Mohammad Abdulsattar Al-Balout (Signed) | Mohammad Kheir Al-Tinawi (Signed)" },
      { "label": "Legal Endorsements", "value": "Executed in the presence of the Assistant Minister of Interior for Civil Affairs, Syrian Arab Republic. | Official Syrian legal stamps, consular seals, and Ministry of Foreign Affairs attestations affixed." }
    ]
  },
  "ar": {
    "name": "العربية",
    "dir": "rtl",
    "docName": "عقد الزواج العربي الأصلي الموقع",
    "lines": [
      { "label": "الترويسة", "value": "فندق الشام - شارع ميسلون، ص.ب 7570، دمشق، سوريا | \"بسم الله الرحمن الرحيم - يا علي مدد\"" },
      { "label": "عقد الزواج", "value": "العريس: الشاب: غلام سرور بن فضل كريم – باكستان | العروس: السيدة نصرت فاطمة بنت سيد محمد نقوي" },
      { "label": "المهر", "value": "المهر: خمسون ألف (50,000) دينار عراقي، غير مقبوض (مؤجل)." },
      { "label": "الإقرار", "value": "\"على هذا تم الاتفاق بين الطرفين بحضور الشهود؛ والله سبحانه وتعالى خير الشاهدين.\"" },
      { "label": "الموقعون", "value": "العريس: غلام سرور (موقع) | العروس: نصرت فاطمة (موقعة) | ولي / وكيل العروس: الحاج الشيخ عبد الرحمن الخير (موقع)" },
      { "label": "الشهود", "value": "شهود الحال: نذير التيناوي (موقع) | محمد عبد الستار البلوط (موقع) | محمد خير التيناوي (موقع)" },
      { "label": "التصديقات القانونية", "value": "تم العقد بحضور معاون وزير الداخلية للشؤون المدنية، الجمهورية العربية السورية. | طوابع مالية سورية رسمية، أختام قنصلية، وتصديقات وزارة الخارجية ممهورة." }
    ]
  },
  "fa": {
    "name": "فارسی",
    "dir": "rtl",
    "docName": "اصل عقدنامه عربی امضا شده",
    "lines": [
      { "label": "سربرگ", "value": "هتل شام - خیابان میسلون، صندوق پستی ۷۵۷۰، دمشق، سوریه | \"بسم الله الرحمن الرحیم - یا علی مدد\"" },
      { "label": "مندرجات عقدنامه", "value": "داماد: جوان: غلام سرور فرزند فضل کریم – پاکستان | عروس: خانم نصرت فاطمه دختر سید محمد نقوی" },
      { "label": "مهریه", "value": "مهریه: پنجاه هزار (۵۰,۰۰۰) دینار عراق، غیر مقبوض (عندالمطالبه/مؤخر)." },
      { "label": "توافق‌نامه", "value": "\"بر این اساس بین طرفین در حضور شاهدان توافق حاصل شد؛ و خداوند سبحان بهترین گواهان است.\"" },
      { "label": "امضاکنندگان", "value": "داماد: غلام سرور (امضا شده) | عروس: نصرت فاطمه (امضا شده) | ولی / وکیل عروس: الحاج شیخ عبدالرحمن الخیر (امضا شده)" },
      { "label": "شاهدان عقد", "value": "شاهدان عقد (شهود الحال): نذیر التیناوی (امضا شده) | محمد عبدالستار البلوط (امضا شده) | محمد خیر التیناوی (امضا شده)" },
      { "label": "تأییدیه‌های حقوقی", "value": "در حضور معاون وزیر کشور در امور مدنی جمهوری عربی سوریه تنظیم و تأیید گردید. | تمبرهای رسمی مالیه سوریه، مهرهای کنسولی و تأییدیه‌های وزارت امور خارجه ممهور شده است." }
    ]
  },
  "es": {
    "name": "Español",
    "dir": "ltr",
    "docName": "Contrato de Matrimonio Original en Árabe Firmado",
    "lines": [
      { "label": "Encabezado", "value": "Hotel Cham Palace – Calle Maysaloun, Apartado de Correos 7570, Damasco, Siria | \"En el Nombre de Dios, el Clemente, el Misericordioso – Ya Ali Madad\"" },
      { "label": "Contrato de Matrimonio", "value": "Novio: El joven: Ghulam Sarwar hijo de Fazal Karim – Pakistán | Novia: Sra. Nusrat Fatima hija de Sayed Mohammad Naqvi" },
      { "label": "Dote", "value": "Dote (Mahr): Cincuenta mil (50.000) dinares iraquíes, no recibidos / aplazados." },
      { "label": "Declaración", "value": "\"Sobre esto, se concluyó el acuerdo entre las dos partes ante testigos; y Dios Todopoderoso es el Mejor de los Testigos.\"" },
      { "label": "Firmas", "value": "Novio: Ghulam Sarwar (Firmado) | Novia: Nusrat Fatima (Firmado) | Patrocinador / Tutor de la novia: Al-Haj Sheikh Abdulrahman Al-Kheir (Firmado)" },
      { "label": "Testigos", "value": "Testigos (شهود الحال): Nazir Al-Tinawi (Firmado) | Mohammad Abdulsattar Al-Balout (Firmado) | Mohammad Kheir Al-Tinawi (Firmado)" },
      { "label": "Refrendos Legales", "value": "Ejecutado en presencia del Viceministro del Interior para Asuntos Civiles, República Árabe Siria. | Sellos legales oficiales sirios, sellos consulares y atestaciones del Ministerio de Asuntos Exteriores estampados." }
    ]
  }
};

const data = JSON.parse(fs.readFileSync('documents_data.json', 'utf8'));
const docIndex = data.findIndex(d => d.id === docId);

if (docIndex !== -1) {
  data[docIndex].translations = newTranslations;
  data[docIndex].imageUrl = "https://res.cloudinary.com/b7xbeztp/image/upload/v1790360751/image187.jpg";
  data[docIndex].category = 'personal'; 
  fs.writeFileSync('documents_data.json', JSON.stringify(data, null, 2));
  console.log("Updated doc_187 successfully");
} else {
  console.log("Doc not found");
}
