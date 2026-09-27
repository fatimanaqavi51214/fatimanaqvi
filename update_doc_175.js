const fs = require('fs');

const docId = 'doc_175';

const newTranslations = {
  "ur": {
    "name": "اردو",
    "dir": "rtl",
    "docName": "وزارتِ صنعت شام - صنعتی لائسنس کا وزارتی فیصلہ",
    "lines": [
      { "label": "سرنامہ", "value": "جمہوریہ عربیہ سوریہ – وزارتِ صنعت (شام) | وزارتی فیصلہ نمبر: 1890 /" },
      { "label": "فیصلے کی بنیاد", "value": "وزیرِ صنعت: صنعتی تنظیم و حوصلہ افزائی سے متعلق قوانین مجریہ نمبر 21 (1958ء) اور 82 (1959ء) کی بنیاد پر؛ قانون سازی کے صدارتی حکم نامے نمبر 51 (2006ء) کی روشنی میں؛ لائسنسنگ کمیٹی کی سفارش مجریہ اجلاس نمبر 13 بتاریخ 05/07/2010ء کے پیشِ نظر؛ باضابطہ ہدایات نمبر 4239/ص/4/2/3 بتاریخ 21/8/1994ء کے تحت؛ مندرجہ ذیل فیصلہ صادر کرتے ہیں:" },
      { "label": "دفعہ 1", "value": "محترمہ نصرت فاطمہ نقوی کو صوبہ ریف دمشق میں تانبے و پیتل کی روایتی و دستکاری اشیاء (تلواریں، مجسمے، گلدان وغیرہ) بنانے کا صنعتی کارخانہ قائم کرنے کا باضابطہ لائسنس جاری کیا جاتا ہے۔ درخواست نمبر 3293 بتاریخ یکم جولائی 2010ء کے مطابق کارخانے کی مشینری درج ذیل آلات پر مشتمل ہوگی: ایکسینٹرک پریس (2 عدد)، دھاتی سانچے (4 عدد)، فکسڈ ڈرل مشین، ایئر کمپریسر، ملمع کاری کا ٹینک (پلیٹنگ ٹینک)، ڈبل گرائنڈنگ مشین، اور تپش کی بھٹی۔ پیداواری صلاحیت: 8 گھنٹے کی شفٹ کے مطابق، جس میں خام مال کا استعمال سختی کے ساتھ کارخانے کی حدود کے اندر ہی کیا جائے گا۔" },
      { "label": "دفعہ 2", "value": "یہ لائسنس صرف صنعتی منظوری ہے، جو مالک کو دیگر متعلقہ وزارتوں اور بلدیات کے ضروری پرمٹ حاصل کرنے سے مستثنیٰ قرار نہیں دیتا۔" },
      { "label": "دفعہ 3", "value": "یہ فیصلہ جاری ہونے کی تاریخ سے نافذ العمل ہوگا اور اس کی تکمیل کے لیے ایک سال کی مدت مقرر ہے۔" },
      { "label": "اجراء اور دستخط", "value": "مقام و تاریخِ اجراء: دمشق، بتاریخ 6 جولائی 2010ء | وزیرِ صنعت: ڈاکٹر انجینئر فؤاد عیسیٰ الجونی (دستخط برائے وزیر: نائب وزیرِ صنعت، ڈاکٹر انجینئر رشا العید) | (وزارتِ صنعت کی باضابطہ مہر ثبت ہے)" }
    ]
  },
  "en": {
    "name": "English",
    "dir": "ltr",
    "docName": "Syrian Arab Republic – Ministry of Industry Ministerial Decision",
    "lines": [
      { "label": "Header", "value": "Syrian Arab Republic – Ministry of Industry | Ministerial Decision No.: 1890 /" },
      { "label": "Basis of Decision", "value": "The Minister of Industry, Based on the provisions of Laws No. 21 of 1958 and 82 of 1959 regarding industrial regulation and promotion; Based on Legislative Decree No. 51 of 2006; In view of the Licensing Committee Recommendation session No. 13 dated 05/07/2010; Based on instructions No. 4239/S/4/2/3 dated 21/8/1994; Decides the following:" },
      { "label": "Article 1", "value": "A license is granted to Mrs. Nusrat Fatima Naqvi to establish an industrial facility for manufacturing copper and brass handicrafts/products (swords, statues, vases, etc.) in Rif Dimashq Governorate. The industrial machinery and equipment listed under application No. 3293 dated 01/07/2010 include: Eccentric press (2 units), metal molds (4 units), stationary drilling machine, air compressor with transformable drill, plating tank, double grinding bench, and heating furnace. Production Capacity (8-hour shift): As assessed by Rif Dimashq Directorate of Industry, utilizing raw materials exclusively inside the establishment." },
      { "label": "Article 2", "value": "This license is purely industrial and does not exempt the applicant from obtaining other necessary municipal and governmental permits." },
      { "label": "Article 3", "value": "This decision takes effect from the date of issuance and remains valid for execution within one year." },
      { "label": "Issue Date & Signatory", "value": "Issued at Damascus on: 06 / 07 / 2010 | Minister of Industry: Dr. Eng. Fouad Issa Al-Jouni (Signed on his behalf by Deputy Minister of Industry, Dr. Eng. Rasha Al-Id) | (Official Seal of the Ministry of Industry Affixed)" }
    ]
  },
  "ar": {
    "name": "العربية",
    "dir": "rtl",
    "docName": "قرار وزاري بترخيص صناعي - وزارة الصناعة السورية",
    "lines": [
      { "label": "الترويسة", "value": "الجمهورية العربية السورية – وزارة الصناعة | قرار وزاري رقم: 1890 /" },
      { "label": "بناءً على", "value": "وزير الصناعة، بناءً على أحكام القانونين رقم 21 لعام 1958 و 82 لعام 1959 بشأن التنظيم والتشجيع الصناعي؛ وبناءً على المرسوم التشريعي رقم 51 لعام 2006؛ وبناءً على توصية لجنة الترخيص بجلستها رقم 13 تاريخ 05/07/2010؛ وبناءً على التعليمات رقم 4239/ص/4/2/3 تاريخ 21/8/1994؛ يقرر ما يلي:" },
      { "label": "المادة 1", "value": "يُرخص للسيدة نصرت فاطمة نقوي إقامة منشأة صناعية لصنع منتجات وحرف يدوية من النحاس الأصفر والأحمر (سيوف، تماثيل، مزهريات، إلخ) في محافظة ريف دمشق. الآلات والمعدات الصناعية المذكورة في الطلب رقم 3293 تاريخ 01/07/2010 تشمل: مكبس لامركزي (عدد 2)، قوالب معدنية (عدد 4)، مقدح ثابت، ضاغط هواء مع مقدح يتحول، حوض طلاء، مجلخة مزدوجة، وفرن تحمية. الطاقة الإنتاجية (وردية 8 ساعات): كما قدرتها مديرية صناعة ريف دمشق، مع حصر استخدام المواد الأولية داخل المنشأة." },
      { "label": "المادة 2", "value": "هذا الترخيص صناعي بحت ولا يعفي صاحب العلاقة من الحصول على التراخيص الأخرى اللازمة من البلديات والجهات الحكومية." },
      { "label": "المادة 3", "value": "يعتبر هذا القرار نافذاً من تاريخ صدوره، وتبقى مدة تنفيذه سنة واحدة." },
      { "label": "تاريخ الإصدار والموقع", "value": "صدر في دمشق بتاريخ: 06 / 07 / 2010 | وزير الصناعة: الدكتور المهندس فؤاد عيسى الجوني (وقع نيابة عنه معاون وزير الصناعة، الدكتورة المهندسة رشا العيد) | (ممهور بختم رسمي لوزارة الصناعة)" }
    ]
  },
  "fa": {
    "name": "فارسی",
    "dir": "rtl",
    "docName": "تصمیم‌نامه وزارتی مجوز صنعتی - وزارت صنعت سوریه",
    "lines": [
      { "label": "سربرگ", "value": "جمهوری عربی سوریه – وزارت صنعت | تصمیم‌نامه وزارتی شماره: ۱۸۹۰ /" },
      { "label": "بر اساس", "value": "وزیر صنعت، بر اساس مفاد قوانین شماره ۲۱ مصوب ۱۹۵۸ و ۸۲ مصوب ۱۹۵۹ در خصوص تنظیم و تشویق صنعتی؛ بر اساس فرمان تقنینی شماره ۵۱ مصوب ۲۰۰۶؛ با توجه به توصیه کمیته صدور مجوز در جلسه شماره ۱۳ مورخ ۰۵/۰۷/۲۰۱۰؛ بر اساس دستورالعمل شماره ۴۲۳۹/ص/۴/۲/۳ مورخ ۲۱/۸/۱۹۹۴؛ موارد زیر را مقرر می‌دارد:" },
      { "label": "ماده ۱", "value": "به خانم نصرت فاطمه نقوی مجوز تأسیس یک واحد صنعتی برای تولید صنایع دستی و محصولات مسی و برنجی (شمشیر، مجسمه، گلدان و غیره) در استان ریف دمشق اعطا می‌گردد. ماشین‌آلات و تجهیزات صنعتی ذکر شده در درخواست شماره ۳۲۹۳ مورخ ۰۱/۰۷/۲۰۱۰ شامل: پرس خارج از مرکز (۲ عدد)، قالب‌های فلزی (۴ عدد)، دستگاه مته ثابت، کمپرسور هوا با مته قابل تبدیل، مخزن آبکاری، دستگاه سنگ‌زنی دوطرفه، و کوره حرارتی. ظرفیت تولید (شیفت ۸ ساعته): طبق ارزیابی اداره صنعت ریف دمشق، با استفاده انحصاری از مواد اولیه در داخل واحد." },
      { "label": "ماده ۲", "value": "این مجوز صرفاً صنعتی بوده و متقاضی را از دریافت سایر مجوزهای لازم شهری و دولتی معاف نمی‌کند." },
      { "label": "ماده ۳", "value": "این تصمیم‌نامه از تاریخ صدور نافذ است و برای اجرای آن یک سال مهلت تعیین شده است." },
      { "label": "تاریخ صدور و امضاکننده", "value": "صادر شده در دمشق به تاریخ: ۰۶ / ۰۷ / ۲۰۱۰ | وزیر صنعت: دکتر مهندس فؤاد عیسی الجونی (به نیابت از ایشان امضا شد توسط معاون وزیر صنعت، دکتر مهندس رشا العید) | (ممهور به مهر رسمی وزارت صنعت)" }
    ]
  },
  "es": {
    "name": "Español",
    "dir": "ltr",
    "docName": "Decisión Ministerial de Licencia Industrial - Ministerio de Industria de Siria",
    "lines": [
      { "label": "Encabezado", "value": "República Árabe Siria – Ministerio de Industria | Decisión Ministerial No.: 1890 /" },
      { "label": "Base de la Decisión", "value": "El Ministro de Industria, con base en las disposiciones de las Leyes No. 21 de 1958 y 82 de 1959 sobre regulación y promoción industrial; con base en el Decreto Legislativo No. 51 de 2006; en vista de la Recomendación del Comité de Licencias sesión No. 13 de fecha 05/07/2010; con base en las instrucciones No. 4239/S/4/2/3 de fecha 21/8/1994; Decide lo siguiente:" },
      { "label": "Artículo 1", "value": "Se otorga licencia a la Sra. Nusrat Fatima Naqvi para establecer una instalación industrial para la fabricación de artesanías/productos de cobre y latón (espadas, estatuas, jarrones, etc.) en la Gobernación de Rif Dimashq. La maquinaria y equipo industrial enumerados en la solicitud No. 3293 de fecha 01/07/2010 incluyen: Prensa excéntrica (2 unidades), moldes de metal (4 unidades), taladro estacionario, compresor de aire con taladro transformable, tanque de enchapado, banco de amolar doble y horno de calentamiento. Capacidad de Producción (turno de 8 horas): Según la evaluación de la Dirección de Industria de Rif Dimashq, utilizando materias primas exclusivamente dentro del establecimiento." },
      { "label": "Artículo 2", "value": "Esta licencia es puramente industrial y no exime al solicitante de obtener otros permisos municipales y gubernamentales necesarios." },
      { "label": "Artículo 3", "value": "Esta decisión entra en vigor a partir de la fecha de su emisión y sigue siendo válida para su ejecución dentro de un año." },
      { "label": "Fecha de Emisión y Firmante", "value": "Emitido en Damasco el: 06 / 07 / 2010 | Ministro de Industria: Dr. Ing. Fouad Issa Al-Jouni (Firmado en su nombre por el Viceministro de Industria, Dr. Ing. Rasha Al-Id) | (Sello Oficial del Ministerio de Industria Estampado)" }
    ]
  }
};

const data = JSON.parse(fs.readFileSync('documents_data.json', 'utf8'));
const docIndex = data.findIndex(d => d.id === docId);

if (docIndex !== -1) {
  data[docIndex].translations = newTranslations;
  data[docIndex].imageUrl = "https://res.cloudinary.com/b7xbeztp/image/upload/v1790360750/image175.jpg";
  data[docIndex].category = 'official'; 
  fs.writeFileSync('documents_data.json', JSON.stringify(data, null, 2));
  console.log("Updated doc_175 successfully");
} else {
  console.log("Doc not found");
}
