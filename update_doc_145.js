const fs = require('fs');

const docId = 'doc_145';

const newTranslations = {
  "ur": {
    "name": "اردو",
    "dir": "rtl",
    "docName": "سفارت خانہ پاکستان دمشق کا سفارتی مراسلہ",
    "lines": [
      { "label": "تفصیلات", "value": "سفارت خانہ پاکستان، پوسٹ بکس نمبر 9284، دمشق، شام | دفترِ سفیرِ پاکستان" },
      { "label": "خط نمبر اور تاریخ", "value": "خط نمبر: Amb. 1/1/2009 | تاریخ: یکم جون 2011ء" },
      { "label": "مکتوب الیہ", "value": "عزت مآب جناب احمد عرنوس، نائب وزیرِ خارجہ، وزارتِ خارجہ و امورِ تارکینِ وطن، جمہوریہ عربیہ سوریہ، دمشق۔" },
      { "label": "القاب", "value": "عالی جناب، السلام علیکم" },
      { "label": "مضمون", "value": "\"ایک معزز پاکستانی خاتون محترمہ نصرت فاطمہ دختر سید محمد نقوی سال 1975ء سے شام میں مقیم ہیں۔ وہ ایک کاروباری خاتون ہیں اور السیدہ زینب (سلام اللہ علیہا) کے علاقے میں ان کی جائیداد اور مزہ الجدیدہ میں ایک عمارت واقع ہے۔ ان کے شوہر غلام سرور چوہدری کا عرصہ قبل انتقال ہو چکا ہے۔ موصوفہ نے اپنی کچھ زمین السیدہ زینب کے علاقے میں وزارتِ اوقاف کو عطیہ کی تھی اور اس سلسلے میں 15,000 امریکی ڈالر کا مالی تعاون بھی پیش کیا تھا۔ انہوں نے شکایت درج کروائی ہے کہ ان کے خاتون ہونے کا ناجائز فائدہ اٹھاتے ہوئے کچھ افراد انہیں دھوکہ دے رہے ہیں اور غیر قانونی طور پر ان کی املاک پر زبردستی قبضہ کرنے کی کوششوں میں مصروف ہیں۔\"" },
      { "label": "درخواست", "value": "\"التماس ہے کہ شامی قوانین کے تحت ان کی جان اور املاک کو مکمل اور مناسب قانونی تحفظ فراہم کیا جائے۔ ان کی جائیداد سے متعلقہ دستاویزات اس مراسلے کے ساتھ منسلک ہیں۔ عالی جناب، میری جانب سے انتہائی احترام اور دلی نیک خواہشات قبول فرمائیں۔\"" },
      { "label": "دستخط کنندہ", "value": "(نوابزادہ امین اللہ خان رئیسانی) سفیرِ پاکستان، دمشق (سفارت خانہ پاکستان کی سرکاری مہر ثبت ہے)" }
    ]
  },
  "en": {
    "name": "English",
    "dir": "ltr",
    "docName": "Diplomatic Missive from the Embassy of Pakistan, Damascus",
    "lines": [
      { "label": "Header", "value": "Embassy of Pakistan, P.O. Box No. 9284, Damascus, Syria | Office of the Ambassador" },
      { "label": "Reference No. & Date", "value": "Reference No.: Amb. 1/1/2009 | Date: 1st June 2011" },
      { "label": "Recipient", "value": "H.E. Mr. Ahmed Arnous, Deputy Foreign Minister, Ministry of Foreign Affairs & Expatriates, Syrian Arab Republic, Damascus." },
      { "label": "Salutation", "value": "Excellency, Assalam-o-Alaikum" },
      { "label": "Content", "value": "\"A Pakistani lady namely Ms. Nasrat Fatima d/o Sayed Muhammad Naqvi is residing in Syria from 1975. She is a business woman and has property near Sayyeda Zainab (RA) area and one building in Mezzeh al-Jadeeda. Her husband Ghulam Sarwar Chaudhary died a long time ago. She has also donated some of her land to Ministry of Awqaf in Sayyeda Zainab (RA) area and also contributed US$15,000/- in this regard. She has complained that because she is a lady, some people are cheating her and forcibly trying to grab her property unlawfully.\"" },
      { "label": "Request", "value": "\"It is requested that she may please be given proper protection of her life and her property according to the Syrian laws. Documents relating to her property are attached. Please accept, Excellency, the assurances of my highest consideration.\"" },
      { "label": "Signatory", "value": "(Nawabzada Aminullah Khan Raisani) Ambassador of Pakistan, Damascus (Official Embassy Seal Affixed)" }
    ]
  },
  "ar": {
    "name": "العربية",
    "dir": "rtl",
    "docName": "رسالة دبلوماسية من سفارة باكستان، دمشق",
    "lines": [
      { "label": "الترويسة", "value": "سفارة باكستان، ص.ب 9284، دمشق، سوريا | مكتب السفير" },
      { "label": "المرجع والتاريخ", "value": "رقم المرجع: Amb. 1/1/2009 | التاريخ: 1 يونيو 2011" },
      { "label": "المرسل إليه", "value": "معالي السيد أحمد عرنوس، نائب وزير الخارجية، وزارة الخارجية والمغتربين، الجمهورية العربية السورية، دمشق." },
      { "label": "التحية", "value": "صاحب السعادة، السلام عليكم" },
      { "label": "المضمون", "value": "\"تقيم السيدة الباكستانية نصرت فاطمة ابنة سيد محمد نقوي في سوريا منذ عام 1975. وهي سيدة أعمال ولها ممتلكات بالقرب من منطقة السيدة زينب (ع) ومبنى في المزة الجديدة. توفي زوجها غلام سرور شودري منذ فترة طويلة. وقد تبرعت بجزء من أرضها لوزارة الأوقاف في منطقة السيدة زينب (ع) وساهمت بمبلغ 15,000 دولار أمريكي في هذا الصدد. وقد اشتكت من أن بعض الأشخاص يستغلون كونها امرأة ويحاولون خداعها والاستيلاء على ممتلكاتها بالقوة بشكل غير قانوني.\"" },
      { "label": "الطلب", "value": "\"نرجو التكرم بتوفير الحماية اللازمة لحياتها وممتلكاتها وفقاً للقوانين السورية. الوثائق المتعلقة بممتلكاتها مرفقة. تفضلوا، صاحب السعادة، بقبول فائق الاحترام والتقدير.\"" },
      { "label": "الموقع", "value": "(نواب زادة أمين الله خان رئيساني) سفير باكستان، دمشق (ممهور بختم السفارة الرسمي)" }
    ]
  },
  "fa": {
    "name": "فارسی",
    "dir": "rtl",
    "docName": "نامه دیپلماتیک از سفارت پاکستان، دمشق",
    "lines": [
      { "label": "سربرگ", "value": "سفارت پاکستان، صندوق پستی ۹۲۸۴، دمشق، سوریه | دفتر سفیر" },
      { "label": "شماره مرجع و تاریخ", "value": "شماره مرجع: Amb. 1/1/2009 | تاریخ: ۱ ژوئن ۲۰۱۱" },
      { "label": "گیرنده", "value": "عالیجناب آقای احمد عرنوس، معاون وزیر امور خارجه، وزارت امور خارجه و مهاجرین، جمهوری عربی سوریه، دمشق." },
      { "label": "عنوان", "value": "عالیجناب، السلام علیکم" },
      { "label": "مضمون", "value": "\"یک خانم پاکستانی به نام خانم نصرت فاطمه فرزند سید محمد نقوی از سال ۱۹۷۵ در سوریه اقامت دارد. او یک تاجر است و املاکی در نزدیکی منطقه سیده زینب (س) و یک ساختمان در مزه الجدیده دارد. همسرش غلام سرور چودری مدت‌ها پیش درگذشته است. او همچنین بخشی از زمین خود را در منطقه سیده زینب (س) به وزارت اوقاف اهدا کرده و مبلغ ۱۵,۰۰۰ دلار آمریکا در این زمینه کمک کرده است. وی شکایت کرده که چون یک زن است، برخی افراد در حال فریب دادن او و تلاش برای تصاحب غیرقانونی املاکش به زور هستند.\"" },
      { "label": "درخواست", "value": "\"درخواست می‌شود که طبق قوانین سوریه، حفاظت مناسب از جان و مال او صورت گیرد. اسناد مربوط به املاک وی ضمیمه شده است. عالیجناب، بالاترین احترامات مرا پذیرا باشید.\"" },
      { "label": "امضاکننده", "value": "(نواب‌زاده امین‌الله خان رئیسانی) سفیر پاکستان، دمشق (ممهور به مهر رسمی سفارت)" }
    ]
  },
  "es": {
    "name": "Español",
    "dir": "ltr",
    "docName": "Misiva Diplomática de la Embajada de Pakistán, Damasco",
    "lines": [
      { "label": "Encabezado", "value": "Embajada de Pakistán, Apartado Postal No. 9284, Damasco, Siria | Oficina del Embajador" },
      { "label": "Nº de Referencia y Fecha", "value": "Referencia: Amb. 1/1/2009 | Fecha: 1 de junio de 2011" },
      { "label": "Destinatario", "value": "S.E. Sr. Ahmed Arnous, Viceministro de Relaciones Exteriores, Ministerio de Relaciones Exteriores y Expatriados, República Árabe Siria, Damasco." },
      { "label": "Saludo", "value": "Excelencia, Assalam-o-Alaikum" },
      { "label": "Contenido", "value": "\"Una dama paquistaní llamada Sra. Nasrat Fatima, hija de Sayed Muhammad Naqvi, reside en Siria desde 1975. Es una mujer de negocios y tiene propiedades cerca de la zona de Sayyeda Zainab (RA) y un edificio en Mezzeh al-Jadeeda. Su marido Ghulam Sarwar Chaudhary falleció hace mucho tiempo. También ha donado parte de su terreno al Ministerio de Awqaf en la zona de Sayyeda Zainab (RA) y ha contribuido con 15.000 dólares estadounidenses a este respecto. Se ha quejado de que, por ser mujer, algunas personas la están engañando e intentando arrebatarle su propiedad por la fuerza e ilegalmente.\"" },
      { "label": "Solicitud", "value": "\"Se solicita que se le brinde la debida protección a su vida y a su propiedad de acuerdo con las leyes sirias. Se adjuntan documentos relacionados con su propiedad. Sírvase aceptar, Excelencia, las seguridades de mi más alta consideración.\"" },
      { "label": "Firmante", "value": "(Nawabzada Aminullah Khan Raisani) Embajador de Pakistán, Damasco (Sello oficial de la Embajada adherido)" }
    ]
  }
};

const data = JSON.parse(fs.readFileSync('documents_data.json', 'utf8'));
const docIndex = data.findIndex(d => d.id === docId);

if (docIndex !== -1) {
  data[docIndex].translations = newTranslations;
  data[docIndex].category = 'embassy'; 
  fs.writeFileSync('documents_data.json', JSON.stringify(data, null, 2));
  console.log("Updated doc_145 successfully");
} else {
  console.log("Doc not found");
}
