const fs = require('fs');

const docId = 'doc_185';

const newTranslations = {
  "ur": {
    "name": "اردو",
    "dir": "rtl",
    "docName": "نکاح نامے کا باضابطہ انگریزی ترجمہ",
    "lines": [
      { "label": "مقام", "value": "شام پیلس ہوٹل، دمشق – پوسٹ بکس نمبر 7570، شام" },
      { "label": "سرنامہ", "value": "بسم اللہ الرحمن الرحیم | عقدِ نکاح (شادی کا باضابطہ معاہدہ)" },
      { "label": "دولہا کا نام", "value": "نوجوان: غلام سرور ولد فضل کریم – (پاکستان)" },
      { "label": "دلہن کا نام", "value": "محترمہ نصرت فاطمہ بنت سید محمد نقوی – (پاکستان)" },
      { "label": "مہر", "value": "پچاس ہزار (50,000) عراقی دینار (غیر مقبوض / موخر)۔" },
      { "label": "اقرار نامہ", "value": "\"فریقین (دولہا اور دلہن) کے مابین گواہوں کے روبرو اس عقدِ نکاح پر باہمی رضامندی طے پا گئی ہے؛ اور اللہ تعالیٰ بہترین گواہ ہے۔\"" },
      { "label": "دستخط", "value": "دلہن کا سرپرست / وکیل: حاج شیخ عبد الرحمن الخیر (دستخط شدہ) | دولہا کے دستخط: دستخط موجود ہیں | دلہن کے دستخط: دستخط موجود ہیں" },
      { "label": "گواہانِ نکاح", "value": "نذیر التیناوی (دستخط) | محمد عبد الستار البلوط (دستخط) | محمد خیر التیناوی (دستخط)" },
      { "label": "توثیقات و تصدیقی مراحل", "value": "معاون وزیر برائے شہری امور، وزارتِ داخلہ شام کی موجودگی میں کارروائی مکمل ہوئی (دستخط و مہر) | وزارتِ خارجہ شام سے باضابطہ تصدیق (31 مارچ 1984ء) | سفارت خانہ پاکستان، دمشق شام (25 اپریل 1984ء) | سفارت خانہ متحدہ عرب امارات، دمشق (29 اپریل 1984ء) | قونصل خانہ جمہوریہ سوریہ، دبئی (8 اگست 1984ء) | حکومتِ دبئی کی توثیق (14 اگست 1984ء) | وزارتِ خارجہ متحدہ عرب امارات کی توثیق (19 اگست 1984ء) | قانونی مترجم کی تصدیق: ابراہیم الحورانی، مصدقہ مترجم دمشق، بتاریخ 4 جون 2012ء۔" }
    ]
  },
  "en": {
    "name": "English",
    "dir": "ltr",
    "docName": "Official English Translation of Marriage Contract",
    "lines": [
      { "label": "Location", "value": "Cham Palace Hotel, Damascus – P.O. Box 7570, Syria" },
      { "label": "Header", "value": "In the Name of God, The Beneficent, The Merciful | Marriage Contract" },
      { "label": "Bridegroom", "value": "Name of Bridegroom: Young man: Ghulam Sarwar son of Fadel Karim – (Pakistan)" },
      { "label": "Bride", "value": "Name of Bride: Mrs. Nusrat Fatima, daughter of Syed Mohammad Naqvi – (Pakistan)" },
      { "label": "Dowry", "value": "Dowry (Mahr): Fifty thousand (50,000) Iraqi Dinars (unreceived / deferred)." },
      { "label": "Declaration", "value": "\"It has been agreed between the bride and bridegroom to this marriage before witnesses; and God is the best witness.\"" },
      { "label": "Signatures", "value": "Sponsor / Guardian of Bride: Haj Sheikh Abdulrahman Al-Kheir (Signature) | Bridegroom: Signature | Bride: Signature" },
      { "label": "Witnesses", "value": "Witnesses (شهود): Nazir Tinawi (Signature) | Mhd. Abdulsattar Balout (Signature) | Mhd. Kheir Tinawi (Signature)" },
      { "label": "Endorsements", "value": "Executed in presence of: Deputy-minister of Ministry of Interior for Civil Affairs in Syria (Signature & Seal) | Certified by: Ministry of Foreign Affairs in Syria (31/03/1984) | Embassy of Pakistan in Damascus, Syria (25/4/1984) | Embassy of U.A.E. in Damascus (29/4/1984) | Consulate General of Syria in Dubai (8/8/1984) | Government of Dubai (14/8/1984) | Ministry of Foreign Affairs in U.A.E. (19/8/1984) | Certified by Sworn Translator: Ibrahim H. Hourany, Damascus, June 4th, 2012." }
    ]
  },
  "ar": {
    "name": "العربية",
    "dir": "rtl",
    "docName": "ترجمة إنجليزية رسمية لعقد الزواج",
    "lines": [
      { "label": "المكان", "value": "فندق الشام، دمشق - ص.ب 7570، سوريا" },
      { "label": "الترويسة", "value": "بسم الله الرحمن الرحيم | عقد زواج" },
      { "label": "العريس", "value": "اسم العريس: الشاب: غلام سرور بن فضل كريم – (باكستان)" },
      { "label": "العروس", "value": "اسم العروس: السيدة نصرت فاطمة بنت سيد محمد نقوي – (باكستان)" },
      { "label": "المهر", "value": "خمسون ألف (50,000) دينار عراقي (غير مقبوض / مؤجل)." },
      { "label": "الإقرار", "value": "\"تم الاتفاق بين العريس والعروس على هذا الزواج بحضور الشهود؛ والله خير الشاهدين.\"" },
      { "label": "التوقيعات", "value": "ولي / وكيل العروس: الحاج الشيخ عبد الرحمن الخير (توقيع) | العريس: توقيع | العروس: توقيع" },
      { "label": "الشهود", "value": "نذير التيناوي (توقيع) | محمد عبد الستار البلوط (توقيع) | محمد خير التيناوي (توقيع)" },
      { "label": "التصديقات", "value": "تم العقد بحضور: معاون وزير الداخلية للشؤون المدنية في سوريا (توقيع وختم) | مصدق من: وزارة الخارجية السورية (31/03/1984) | سفارة باكستان في دمشق، سوريا (25/4/1984) | سفارة دولة الإمارات في دمشق (29/4/1984) | القنصلية العامة السورية في دبي (8/8/1984) | حكومة دبي (14/8/1984) | وزارة الخارجية في دولة الإمارات (19/8/1984) | مصدق من المترجم المحلف: إبراهيم الحوراني، دمشق، 4 يونيو 2012." }
    ]
  },
  "fa": {
    "name": "فارسی",
    "dir": "rtl",
    "docName": "ترجمه رسمی انگلیسی عقدنامه",
    "lines": [
      { "label": "مکان", "value": "هتل شام، دمشق – صندوق پستی ۷۵۷۰، سوریه" },
      { "label": "سربرگ", "value": "بسم الله الرحمن الرحیم | عقدنامه (قرارداد ازدواج)" },
      { "label": "داماد", "value": "نام داماد: جوان: غلام سرور فرزند فضل کریم – (پاکستان)" },
      { "label": "عروس", "value": "نام عروس: خانم نصرت فاطمه دختر سید محمد نقوی – (پاکستان)" },
      { "label": "مهریه", "value": "پنجاه هزار (۵۰,۰۰۰) دینار عراق (غیر مقبوض / عندالمطالبه)." },
      { "label": "اقرارنامه", "value": "\"بین عروس و داماد برای این ازدواج در حضور شاهدان توافق حاصل شد؛ و خداوند بهترین گواهان است.\"" },
      { "label": "امضاها", "value": "ولی / وکیل عروس: حاج شیخ عبدالرحمن الخیر (امضا) | داماد: امضا | عروس: امضا" },
      { "label": "شاهدان", "value": "نذیر التیناوی (امضا) | محمد عبدالستار البلوط (امضا) | محمد خیر التیناوی (امضا)" },
      { "label": "تأییدیه‌ها", "value": "تنظیم شده در حضور: معاون وزیر کشور در امور مدنی سوریه (امضا و مهر) | تأیید شده توسط: وزارت امور خارجه سوریه (۳۱/۰۳/۱۹۸۴) | سفارت پاکستان در دمشق، سوریه (۲۵/۴/۱۹۸۴) | سفارت امارات متحده عربی در دمشق (۲۹/۴/۱۹۸۴) | سرکنسولگری سوریه در دبی (۸/۸/۱۹۸۴) | دولت دبی (۱۴/۸/۱۹۸۴) | وزارت امور خارجه امارات متحده عربی (۱۹/۸/۱۹۸۴) | تأیید شده توسط مترجم رسمی: ابراهیم الحورانی، دمشق، ۴ ژوئن ۲۰۱۲." }
    ]
  },
  "es": {
    "name": "Español",
    "dir": "ltr",
    "docName": "Traducción Oficial al Inglés del Contrato de Matrimonio",
    "lines": [
      { "label": "Ubicación", "value": "Hotel Cham Palace, Damasco – Apartado de Correos 7570, Siria" },
      { "label": "Encabezado", "value": "En el Nombre de Dios, el Clemente, el Misericordioso | Contrato de Matrimonio" },
      { "label": "Novio", "value": "Nombre del novio: Joven: Ghulam Sarwar hijo de Fadel Karim – (Pakistán)" },
      { "label": "Novia", "value": "Nombre de la novia: Sra. Nusrat Fatima hija de Syed Mohammad Naqvi – (Pakistán)" },
      { "label": "Dote", "value": "Dote (Mahr): Cincuenta mil (50.000) dinares iraquíes (no recibidos / aplazados)." },
      { "label": "Declaración", "value": "\"Se ha acordado entre la novia y el novio este matrimonio ante testigos; y Dios es el mejor testigo.\"" },
      { "label": "Firmas", "value": "Patrocinador / Tutor de la novia: Haj Sheikh Abdulrahman Al-Kheir (Firma) | Novio: Firma | Novia: Firma" },
      { "label": "Testigos", "value": "Testigos: Nazir Tinawi (Firma) | Mhd. Abdulsattar Balout (Firma) | Mhd. Kheir Tinawi (Firma)" },
      { "label": "Refrendos", "value": "Ejecutado en presencia de: Viceministro del Ministerio del Interior para Asuntos Civiles en Siria (Firma y Sello) | Certificado por: Ministerio de Asuntos Exteriores en Siria (31/03/1984) | Embajada de Pakistán en Damasco, Siria (25/4/1984) | Embajada de los E.A.U. en Damasco (29/4/1984) | Consulado General de Siria en Dubái (8/8/1984) | Gobierno de Dubái (14/8/1984) | Ministerio de Asuntos Exteriores de los E.A.U. (19/8/1984) | Certificado por Traductor Jurado: Ibrahim H. Hourany, Damasco, 4 de junio de 2012." }
    ]
  }
};

const data = JSON.parse(fs.readFileSync('documents_data.json', 'utf8'));
const docIndex = data.findIndex(d => d.id === docId);

if (docIndex !== -1) {
  data[docIndex].translations = newTranslations;
  data[docIndex].imageUrl = "https://res.cloudinary.com/b7xbeztp/image/upload/v1790360751/image185.jpg";
  data[docIndex].category = 'personal'; 
  fs.writeFileSync('documents_data.json', JSON.stringify(data, null, 2));
  console.log("Updated doc_185 successfully");
} else {
  console.log("Doc not found");
}
