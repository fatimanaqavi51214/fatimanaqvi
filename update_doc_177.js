const fs = require('fs');

const docId = 'doc_177';

const newTranslations = {
  "ur": {
    "name": "اردو",
    "dir": "rtl",
    "docName": "وزارتِ خارجہ شام کا مراسلہ بنام وزیر اعظم شام",
    "lines": [
      { "label": "سرنامہ", "value": "جمہوریہ عربیہ سوریہ (شام) - وزارتِ خارجہ – پروٹوکول ڈائریکٹوریٹ (انتظامیہ تشریفات) | نمبر: 88/8/236 (6080) | تاریخ: 28 اگست 2000ء" },
      { "label": "بنام", "value": "بخدمت جناب: ایوانِ وزیر اعظم (رئاسة مجلس الوزراء)" },
      { "label": "متن (پہلا حصہ)", "value": "\"دمشق میں واقع پاکستانی سفارت خانے کے مراسلے نمبر 23/2000 بتاریخ 12 اپریل 2000ء کی نقل اور اس کے ساتھ منسلک درخواست پیشِ خدمت ہے، جو کہ پاکستانی شہری محترمہ نصرت فاطمہ کی جانب سے محترم وزیر اعظم کے نام لکھی گئی ہے، جو سال 1983ء سے باقاعدہ و قانونی طور پر شام میں مقیم ہیں۔ موصوفہ نے التماس کی ہے کہ ان کی مرسڈیز گاڑی (ماڈل 1983ء) کے عارضی قیام/داخلے کے پرمٹ میں سابقہ توسیع کی میعاد ختم ہونے کی تاریخ (20 جولائی 1999ء) سے توسیع کی منظوری دی جائے، نیز اب تک کے تمام تر تاخیری جرمانے اور کسٹم ڈیوٹی معاف کی جائیں۔ انہوں نے وضاحت کی ہے کہ پرمٹ کی تجدید میں تاخیر ان کی علالت اور ملکی کسٹم قوانین سے لا علمی کی وجہ سے ہوئی۔\"" },
      { "label": "متن (دوسرا حصہ)", "value": "\"ان کی درخواست کے ساتھ وزارتِ خارجہ کے مراسلے نمبر 11 بتاریخ 25 جولائی 1982ء کی نقل منسلک ہے (جو وزارتِ اوقاف کے خط نمبر 1911/4/6 بتاریخ 7 فروری 1982ء کے حوالے سے ہے)، جس میں وزارتِ اوقاف کی جانب سے محترمہ نصرت کا شکریہ ادا کیا گیا ہے جنہوں نے سال 1982ء میں السیدہ زینب کے علاقے میں پچیس (25) ملین شامی لیرا مالیت کی اراضی حکومتِ شام کو بطور تحفہ/عطیہ پیش کی تھی، ساتھ ہی ان کی خرابئ صحت کی تصدیق کرنے والی میڈیکل رپورٹ بھی منسلک ہے۔\"" },
      { "label": "متن (تیسرا حصہ)", "value": "\"واضح رہے کہ دمشق میں متعین سفیرِ پاکستان نے بھی بذریعہ ٹیلیفون رابطہ کر کے محترمہ نصرت کی اس درخواست کو ہمدردانہ اور خصوصی بنیادوں پر منظور کرنے کی پرزور سفارش کی ہے۔ لہٰذا التماس ہے کہ یہ معاملہ عزت مآب وزیر اعظم کی خدمت میں پیش کیا جائے تاکہ محترمہ نصرت کے ان مخصوص حالات اور ان کے پیش کردہ عظیم عطیے کے پیشِ نظر، اور چونکہ یہ غلطی نیک نیتی کی بنیاد پر ہوئی ہے، مناسب احکامات صادر فرمائیں۔\"" },
      { "label": "دستخط و نقول", "value": "دستخط: وزیر خارجہ شام | ارسال برائے اطلاع: دفتر وزیر اعظم، ایڈمنسٹریٹو فائل، ریکارڈ پروٹوکول۔" }
    ]
  },
  "en": {
    "name": "English",
    "dir": "ltr",
    "docName": "Letter from Syrian Ministry of Foreign Affairs to Prime Minister",
    "lines": [
      { "label": "Header", "value": "Syrian Arab Republic - Ministry of Foreign Affairs – Department of Protocol | Number: 88/8/236 (6080) | Date: 28 / 8 / 2000" },
      { "label": "To", "value": "The Prime Ministry (Presidency of the Council of Ministers)" },
      { "label": "Content P1", "value": "\"Enclosed herewith is a copy of the Note Verbale from the Embassy of Pakistan in Damascus No. 23/2000 dated 12/4/2000, along with its attachment, which is a letter addressed to the Prime Minister from the Pakistani citizen, Mrs. Nusrat Fatima, residing in the Syrian Arab Republic regularly since 1983. She requests approval for the extension of the temporary admission period for her Mercedes 1983 model vehicle, effective from the expiry of its previous extension on 20/7/1999, along with exemption from all accumulated delay fines and customs fees up to date. She explains that the delay in extending its admission was due to her illness and unfamiliarity with the prevailing customs regulations.\"" },
      { "label": "Content P2", "value": "\"Attached to her letter is a copy of the letter of the Ministry of Foreign Affairs No. 11 dated 25/7/1982, referencing the letter of the Ministry of Awqaf No. 1911/4/6 dated 7/2/1982, which includes the thanks of the Ministry of Awqaf to Mrs. Nusrat for donating a piece of land valued at twenty-five (25) million Syrian Pounds as a gift to the Syrian Government in 1982 in the Sayyidah Zaynab area, along with a copy of the medical report explaining her former poor health condition.\"" },
      { "label": "Content P3", "value": "\"It is also noted that the Ambassador of the Islamic Republic of Pakistan in Damascus made a telephonic plea requesting that Mrs. Nusrat’s plea be favorably and exceptionally considered. Kindly submit this matter to the Prime Minister to issue the guidance deemed appropriate, in view of Mrs. Nusrat's special circumstances, particularly as she offered this donation and the violation occurred in good faith.\"" },
      { "label": "Signatory & Distribution", "value": "Signatory: Minister of Foreign Affairs | Distribution & Copies: Prime Ministry, Administrative File, Protocol Register." }
    ]
  },
  "ar": {
    "name": "العربية",
    "dir": "rtl",
    "docName": "مراسلة وزارة الخارجية السورية إلى رئاسة مجلس الوزراء",
    "lines": [
      { "label": "الترويسة", "value": "الجمهورية العربية السورية - وزارة الخارجية – إدارة المراسم | الرقم: 88/8/236 (6080) | التاريخ: 28 / 8 / 2000" },
      { "label": "إلى", "value": "رئاسة مجلس الوزراء" },
      { "label": "النص (الجزء الأول)", "value": "\"نرفق طيه صورة عن المذكرة الشفوية من سفارة باكستان بدمشق رقم 23/2000 وتاريخ 12/4/2000 ومرفقها الكتاب الموجه للسيد رئيس مجلس الوزراء من المواطنة الباكستانية السيدة نصرت فاطمة، المقيمة في الجمهورية العربية السورية بصورة نظامية منذ عام 1983. حيث تطلب الموافقة على تمديد فترة الإدخال المؤقت لسيارتها طراز مرسيدس 1983، اعتباراً من تاريخ انتهاء التمديد السابق في 20/7/1999، مع إعفائها من كافة غرامات التأخير والرسوم الجمركية المتراكمة حتى تاريخه. وتوضح أن التأخير في تمديد الإدخال كان بسبب مرضها وعدم إلمامها بالأنظمة الجمركية المرعية.\"" },
      { "label": "النص (الجزء الثاني)", "value": "\"ومرفق بكتابها صورة عن كتاب وزارة الخارجية رقم 11 تاريخ 25/7/1982 المبني على كتاب وزارة الأوقاف رقم 1911/4/6 تاريخ 7/2/1982، والذي يتضمن شكر وزارة الأوقاف للسيدة نصرت لقيامها بالتبرع بقطعة أرض بقيمة خمسة وعشرين (25) مليون ليرة سورية كهدية للحكومة السورية عام 1982 في منطقة السيدة زينب، بالإضافة إلى صورة عن التقرير الطبي الذي يوضح حالتها الصحية السيئة السابقة.\"" },
      { "label": "النص (الجزء الثالث)", "value": "\"كما يرجى العلم بأن سفير جمهورية باكستان الإسلامية بدمشق قد أجرى اتصالاً هاتفياً يلتمس فيه النظر في التماس السيدة نصرت بعين العطف والاستثناء. يرجى التفضل بعرض الموضوع على السيد رئيس مجلس الوزراء للتوجيه بما يراه مناسباً، بالنظر لظروف السيدة نصرت الخاصة، لا سيما وأنها قدمت هذا التبرع وأن المخالفة وقعت بحسن نية.\"" },
      { "label": "الموقع والتوزيع", "value": "الموقع: وزير الخارجية | التوزيع والنسخ: رئاسة مجلس الوزراء، الملف الإداري، سجل المراسم." }
    ]
  },
  "fa": {
    "name": "فارسی",
    "dir": "rtl",
    "docName": "نامه وزارت امور خارجه سوریه به نخست‌وزیری",
    "lines": [
      { "label": "سربرگ", "value": "جمهوری عربی سوریه - وزارت امور خارجه – اداره تشریفات | شماره: ۸۸/۸/۲۳۶ (۶۰۸۰) | تاریخ: ۲۸ / ۸ / ۲۰۰۰" },
      { "label": "به", "value": "نهاد نخست‌وزیری (ریاست شورای وزیران)" },
      { "label": "متن (بخش اول)", "value": "\"به پیوست نسخه‌ای از یادداشت شفاهی سفارت پاکستان در دمشق به شماره ۲۳/۲۰۰۰ مورخ ۱۲/۴/۲۰۰۰، به همراه ضمیمه آن، که نامه‌ای خطاب به نخست‌وزیر از طرف شهروند پاکستانی، خانم نصرت فاطمه، مقیم قانونی در جمهوری عربی سوریه از سال ۱۹۸۳ می‌باشد، ارسال می‌گردد. ایشان درخواست تأیید تمدید دوره ورود موقت خودروی مرسدس مدل ۱۹۸۳ خود را از تاریخ انقضای تمدید قبلی در ۲۰/۷/۱۹۹۹، به همراه معافیت از کلیه جریمه‌های تأخیر انباشته و عوارض گمرکی تا به امروز دارند. ایشان توضیح می‌دهند که تأخیر در تمدید ورود به دلیل بیماری و عدم آشنایی با مقررات گمرکی رایج بوده است.\"" },
      { "label": "متن (بخش دوم)", "value": "\"به ضمیمه نامه ایشان، نسخه‌ای از نامه وزارت امور خارجه به شماره ۱۱ مورخ ۲۵/۷/۱۹۸۲ ارجاع‌دهنده به نامه وزارت اوقاف به شماره ۱۹۱۱/۴/۶ مورخ ۷/۲/۱۹۸۲ پیوست است، که شامل تشکر وزارت اوقاف از خانم نصرت بابت اهدای قطعه زمینی به ارزش بیست و پنج (۲۵) میلیون لیره سوریه به عنوان هدیه به دولت سوریه در سال ۱۹۸۲ در منطقه السیده زینب، به همراه نسخه‌ای از گزارش پزشکی مبنی بر وضعیت نامساعد سلامتی گذشته ایشان می‌باشد.\"" },
      { "label": "متن (بخش سوم)", "value": "\"همچنین خاطرنشان می‌گردد که سفیر جمهوری اسلامی پاکستان در دمشق طی تماس تلفنی درخواست نمودند که تقاضای خانم نصرت با دید مساعد و به صورت استثنایی مورد بررسی قرار گیرد. خواهشمند است این موضوع به محضر نخست‌وزیر تقدیم گردد تا با توجه به شرایط خاص خانم نصرت، به ویژه از آنجا که ایشان این هدیه را تقدیم نموده‌اند و تخلف با حسن نیت رخ داده است، دستورات مقتضی صادر فرمایند.\"" },
      { "label": "امضاکننده و رونوشت", "value": "امضاکننده: وزیر امور خارجه | رونوشت و توزیع: نخست‌وزیری، پرونده اداری، دفتر ثبت تشریفات." }
    ]
  },
  "es": {
    "name": "Español",
    "dir": "ltr",
    "docName": "Carta del Ministerio de Asuntos Exteriores de Siria al Primer Ministro",
    "lines": [
      { "label": "Encabezado", "value": "República Árabe Siria - Ministerio de Asuntos Exteriores – Departamento de Protocolo | Número: 88/8/236 (6080) | Fecha: 28 / 8 / 2000" },
      { "label": "Para", "value": "La Presidencia del Consejo de Ministros (Primer Ministro)" },
      { "label": "Contenido P1", "value": "\"Se adjunta a la presente copia de la Nota Verbal de la Embajada de Pakistán en Damasco No. 23/2000 de fecha 12/4/2000, junto con su anexo, que es una carta dirigida al Primer Ministro por la ciudadana pakistaní, Sra. Nusrat Fatima, residente en la República Árabe Siria de manera regular desde 1983. Ella solicita la aprobación para la prórroga del período de admisión temporal de su vehículo Mercedes modelo 1983, efectivo desde el vencimiento de su prórroga anterior el 20/7/1999, junto con la exención de todas las multas por demora acumuladas y los aranceles aduaneros hasta la fecha. Explica que la demora en extender su admisión se debió a su enfermedad y al desconocimiento de las regulaciones aduaneras vigentes.\"" },
      { "label": "Contenido P2", "value": "\"Adjunta a su carta hay una copia de la carta del Ministerio de Asuntos Exteriores No. 11 de fecha 25/7/1982, que hace referencia a la carta del Ministerio de Awqaf No. 1911/4/6 de fecha 7/2/1982, que incluye el agradecimiento del Ministerio de Awqaf a la Sra. Nusrat por donar un terreno valorado en veinticinco (25) millones de libras sirias como regalo al Gobierno Sirio en 1982 en el área de Sayyidah Zaynab, junto con una copia del informe médico que explica su anterior mal estado de salud.\"" },
      { "label": "Contenido P3", "value": "\"También se señala que el Embajador de la República Islámica de Pakistán en Damasco hizo una petición telefónica solicitando que la solicitud de la Sra. Nusrat sea considerada de manera favorable y excepcional. Se ruega someter este asunto al Primer Ministro para que emita las directrices que considere apropiadas, en vista de las circunstancias especiales de la Sra. Nusrat, particularmente porque ella ofreció esta donación y la infracción ocurrió de buena fe.\"" },
      { "label": "Firmante y Copias", "value": "Firmante: Ministro de Asuntos Exteriores | Distribución y copias: Oficina del Primer Ministro, Archivo Administrativo, Registro de Protocolo." }
    ]
  }
};

const data = JSON.parse(fs.readFileSync('documents_data.json', 'utf8'));
const docIndex = data.findIndex(d => d.id === docId);

if (docIndex !== -1) {
  data[docIndex].translations = newTranslations;
  data[docIndex].imageUrl = "https://res.cloudinary.com/b7xbeztp/image/upload/v1790360750/image177.jpg";
  data[docIndex].category = 'official'; 
  fs.writeFileSync('documents_data.json', JSON.stringify(data, null, 2));
  console.log("Updated doc_177 successfully");
} else {
  console.log("Doc not found");
}
