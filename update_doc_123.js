const fs = require('fs');

const docId = 'doc_123';

const newTranslations = {
  "ur": {
    "name": "اردو",
    "dir": "rtl",
    "docName": "جائیداد کی رجسٹریشن کی درخواست",
    "lines": [
      { "label": "پتہ/مقام", "value": "1/2 کے مطابق رقبہ اور جائیداد جو \"الکہربا\" کے علاقے میں واقع ہے – \"دہرہ الملک\" کے سامنے اور وکیل عبدالرحیم عقاب کا دفتر – مرج السیناء الفیحاء – مرکزی ضلع 4، نمبر 9 ہ 30/365/2223، ہمارے مقرر کردہ وکیل برائے تمام اطلاع، بذات خود اور غیر حاضری میں۔" },
      { "label": "پس منظر", "value": "اس سے قبل، میں نے بطور وکیل اور اختیار نامہ، جائیداد نمبر 284، مرحومہ زینب قیر السیت کا حصہ خریدا تھا، جس کا کل رقبہ 12,000/2,400 حصے ہے، اور باقی حصے مرحومہ کے ورثاء کو مختص ہوئے، جائیداد نمبر 1983، ایک نجی معاہدے کے مطابق جس کی تصدیق نوٹری عدل بیمیلا نے کی۔ میں نے وزارت میں اپنے موکل کے نام پر اس حصے کی رجسٹریشن کی درخواست جمع کرائی ہے، اور یہ درخواست آپ کی وزارت کے دیوان میں نمبر 738/4/5/1 مورخہ 1/10/1985 کے تحت درج ہو چکی ہے۔" },
      { "label": "تاخیر کی وجہ", "value": "دمشق کے گورنری کی طرف سے 13/3/1990 کو نئی ہدایات جاری ہونے کے بعد، ٹیلیگرام نمبر 990/401، ملک سے باہر طویل موجودگی کی وجہ سے لین دین مکمل ہونے میں تاخیر ہوئی۔" },
      { "label": "درخواست", "value": "چونکہ میں اس حصے کو جائیداد نمبر 284 قیر السیت البلاغہ کے نام پر رجسٹر کروانا چاہتا ہوں، جس کا رقبہ 12,000/2,400 حصے ہیں، اور رقبہ 4,671 مربع میٹر ہے، جائیداد کی رجسٹریشن کے مطابق۔ میں درخواست کرتا ہوں کہ اس جائیداد کو میرے موکل کے نام پر جائیداد کے رجسٹر میں رجسٹر کرنے کی منظوری دی جائے۔" },
      { "label": "تاریخ و دستخط", "value": "دمشق، 20/7/1994۔ نام: فاطمہ قبانچی۔ (مہر اور دستخط)" },
      { "label": "نچلا حصہ (فارم)", "value": "بنام محترم صدرِ رئیل اسٹیٹ رجسٹری۔ میں درخواست کرتا ہوں کہ مرحوم کا حصہ میرے نام پر رجسٹر کیا جائے۔ میں درخواست کرتا ہوں کہ وارث کا حصہ وارث کے نام پر رجسٹر کیا جائے۔ جائیداد کی رجسٹریشن وارث کی طرف سے مطلوب ہے۔ تاریخ: 1/8/1985۔ دستخط درخواست گزار۔" }
    ]
  },
  "en": {
    "name": "English",
    "dir": "ltr",
    "docName": "Property Registration Request",
    "lines": [
      { "label": "Address/Location", "value": "1/2 Corresponding to the area and the property located in the \"Al-Kahraba\" area – opposite the \"Dahra Al-Mulk\" and the office of the lawyer Abdul Rahim Oqab – Marj Al-Sinaa Al-Faihaa – Central District 4, No. 9 H 30/365/2223, our appointed attorney for all notification, both in person and in absentia." },
      { "label": "Background", "value": "Previously, I purchased, by proxy and power of attorney, the property No. 284, the share of the late Zainab Qir Al-Sitt, with a total area of 12,000/2,400 shares, and the rest of the shares were allocated to the heirs of the deceased, the property No. 1983, according to a private contract authenticated by the notary Adel Bimila. I have submitted a request to register this share in the name of my client at the Ministry, and this request has been recorded at the Diwan of your Ministry under No. 738/4/5/1 dated 1/10/1985." },
      { "label": "Reason for Delay", "value": "The completion of the transaction was delayed after the issuance of the new instructions from the governorate of Damascus, dated 13/3/1990, telegram No. 990/401, due to its long existence outside the country." },
      { "label": "Request", "value": "Whereas I wish to register this share in the name of the property No. 284 Qir Al-Sitt Al-Balagha, amounting to 12,000/2,400 shares, with an area of 4,671 square meters, according to the real estate registration. I request approval to register this property in the name of my client in the real estate registry." },
      { "label": "Date & Signature", "value": "Damascus, 20/7/1994. Name: Fatinah Qabbani. (Stamp and Signature)" },
      { "label": "Lower Section (Form)", "value": "To the Honorable President of the Real Estate Registry. I request that the share of the deceased be registered in my name. I request that the share of the heir be registered in the name of the heir. The real estate registration is requested by the heir. Dated: 1/8/1985. Signature of the applicant." }
    ]
  },
  "ar": {
    "name": "العربية",
    "dir": "rtl",
    "docName": "طلب تسجيل عقاري",
    "lines": [
      { "label": "العنوان/الموقع", "value": "1/2 بموجب المساحة والعقار الكائن في منطقة \"الكهرباء\" – مقابل \"ضهرة الملك\" ومكتب المحامي عبد الرحيم عقاب – مرج الصناعة الفيحاء – المنطقة المركزية 4، رقم 9 هـ 30/365/2223، وكيلنا المعين لجميع التبليغات بالذات وبالغياب." },
      { "label": "الخلفية", "value": "سابقاً، اشتريت بصفتي وكيلاً العقار رقم 284 حصة المرحومة زينب قبر الست، بمساحة إجمالية قدرها 12000/2400 سهم، وتم تخصيص باقي السهام لورثة المرحومة، العقار رقم 1983، بموجب عقد خاص مصدق من الكاتب بالعدل عادل ببيلا. وقد قدمت طلباً لتسجيل هذه الحصة باسم موكلي في الوزارة، وسجل الطلب في ديوان وزارتكم برقم 738/4/5/1 تاريخ 1/10/1985." },
      { "label": "سبب التأخير", "value": "تأخر إنجاز المعاملة بعد صدور التعليمات الجديدة من محافظة دمشق تاريخ 13/3/1990 البرقية رقم 990/401 بسبب وجوده الطويل خارج البلاد." },
      { "label": "الطلب", "value": "حيث أنني أرغب في تسجيل هذه الحصة باسم العقار رقم 284 قبر الست البلاغة، البالغة 12000/2400 سهم بمساحة 4671 متراً مربعاً وفقاً للقيود العقارية. أرجو الموافقة على تسجيل هذا العقار باسم موكلي في السجل العقاري." },
      { "label": "التاريخ والتوقيع", "value": "دمشق، 20/7/1994. الاسم: فاتنة قباني. (مهر وتوقيع)" },
      { "label": "القسم السفلي (نموذج)", "value": "إلى السيد رئيس السجل العقاري المحترم. أطلب تسجيل حصة المرحوم باسمي. أطلب تسجيل حصة الوارث باسم الوارث. التسجيل العقاري مطلوب من قبل الوارث. التاريخ: 1/8/1985. توقيع مقدم الطلب." }
    ]
  },
  "fa": {
    "name": "فارسی",
    "dir": "rtl",
    "docName": "درخواست ثبت ملک",
    "lines": [
      { "label": "آدرس/مکان", "value": "۱/۲ مطابق مساحت و ملک واقع در منطقه \"الکهربا\" - روبروی \"ضهره الملک\" و دفتر وکیل عبدالرحیم عقاب - مرج الصناعه الفیحاء - منطقه مرکزی ۴، شماره ۹ هـ ۳۰/۳۶۵/۲۲۲۳، وکیل تعیین شده ما برای کلیه ابلاغ‌ها، چه حضوری و چه غیابی." },
      { "label": "پیش‌زمینه", "value": "پیش از این، من به عنوان وکیل، ملک شماره ۲۸۴، سهم مرحومه زینب قبر الست را با مساحت کل ۱۲۰۰۰/۲۴۰۰ سهم خریداری کردم و بقیه سهام به ورثه مرحومه اختصاص یافت، ملک شماره ۱۹۸۳، بر اساس یک قرارداد خصوصی که توسط سردفتر عادل ببیلا تأیید شده است. من درخواستی برای ثبت این سهم به نام موکلم در وزارتخانه ارائه داده‌ام و این درخواست در دیوان وزارت شما به شماره ۷۳۸/۴/۵/۱ مورخ ۱/۱۰/۱۹۸۵ ثبت شده است." },
      { "label": "دلیل تأخیر", "value": "تکمیل معامله پس از صدور دستورالعمل‌های جدید استانداری دمشق مورخ ۱۳/۳/۱۹۹۰، تلگرام شماره ۹۹۰/۴۰۱ به دلیل حضور طولانی مدت در خارج از کشور به تعویق افتاد." },
      { "label": "درخواست", "value": "از آنجایی که من می‌خواهم این سهم را به نام ملک شماره ۲۸۴ قبر الست البلاغه، بالغ بر ۱۲۰۰۰/۲۴۰۰ سهم به مساحت ۴۶۷۱ متر مربع طبق ثبت املاک به ثبت برسانم. تقاضای موافقت با ثبت این ملک به نام موکلم در دفتر املاک را دارم." },
      { "label": "تاریخ و امضا", "value": "دمشق، ۲۰/۷/۱۹۹۴. نام: فاتنه قبانی. (مهر و امضا)" },
      { "label": "بخش پایینی (فرم)", "value": "به رئیس محترم ثبت اسناد و املاک. درخواست دارم سهم متوفی به نام من ثبت شود. درخواست دارم سهم وارث به نام وارث ثبت شود. ثبت ملک توسط وارث درخواست شده است. تاریخ: ۱/۸/۱۹۸۵. امضای درخواست‌کننده." }
    ]
  },
  "es": {
    "name": "Español",
    "dir": "ltr",
    "docName": "Solicitud de Registro de Propiedad",
    "lines": [
      { "label": "Dirección/Ubicación", "value": "1/2 Correspondiente al área y a la propiedad ubicada en la zona de \"Al-Kahraba\" – frente a \"Dahra Al-Mulk\" y la oficina del abogado Abdul Rahim Oqab – Marj Al-Sinaa Al-Faihaa – Distrito Central 4, No. 9 H 30/365/2223, nuestro abogado designado para toda notificación, tanto en persona como en ausencia." },
      { "label": "Antecedentes", "value": "Anteriormente, compré, por poder y procuración, la propiedad No. 284, la parte de la difunta Zainab Qir Al-Sitt, con un área total de 12,000/2,400 acciones, y el resto de las acciones se asignaron a los herederos de la difunta, la propiedad No. 1983, según un contrato privado autenticado por el notario Adel Bimila. He presentado una solicitud para registrar esta parte a nombre de mi cliente en el Ministerio, y esta solicitud ha sido registrada en el Diwan de su Ministerio con el No. 738/4/5/1 de fecha 1/10/1985." },
      { "label": "Motivo del Retraso", "value": "La finalización de la transacción se retrasó tras la emisión de las nuevas instrucciones de la gobernación de Damasco, con fecha 13/3/1990, telegrama No. 990/401, debido a su larga existencia fuera del país." },
      { "label": "Solicitud", "value": "Considerando que deseo registrar esta parte a nombre de la propiedad No. 284 Qir Al-Sitt Al-Balagha, que asciende a 12,000/2,400 acciones, con un área de 4,671 metros cuadrados, según el registro de la propiedad. Solicito aprobación para registrar esta propiedad a nombre de mi cliente en el registro de la propiedad." },
      { "label": "Fecha y Firma", "value": "Damasco, 20/7/1994. Nombre: Fatinah Qabbani. (Sello y Firma)" },
      { "label": "Sección Inferior (Formulario)", "value": "Al Honorable Presidente del Registro de la Propiedad. Solicito que la parte del difunto se registre a mi nombre. Solicito que la parte del heredero se registre a nombre del heredero. El registro de la propiedad es solicitado por el heredero. Fecha: 1/8/1985. Firma del solicitante." }
    ]
  }
};

const data = JSON.parse(fs.readFileSync('documents_data.json', 'utf8'));
const docIndex = data.findIndex(d => d.id === docId);

if (docIndex !== -1) {
  data[docIndex].translations = newTranslations;
  data[docIndex].category = 'property'; 
  fs.writeFileSync('documents_data.json', JSON.stringify(data, null, 2));
  console.log("Updated doc_123 successfully");
} else {
  console.log("Doc not found");
}
