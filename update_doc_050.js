const fs = require('fs');

const docId = 'doc_050';

const newTranslations = {
  "ur": {
    "name": "اردو",
    "dir": "rtl",
    "docName": "جنرل پاور آف اٹارنی (وکالتِ عامہ - دبئی)",
    "lines": [
      { "label": "دستاویز", "value": "جنرل پاور آف اٹارنی (توكيل عام - عام وکالت نامہ)۔" },
      { "label": "موکل (گروہِ اول)", "value": "محمود عبداللہ علی (اماراتی شہری، پاسپورٹ اور اقامہ نمبر 11040828 مورخہ 10/11/2000 تک کارآمد)۔" },
      { "label": "وکیل (مقررہ شخص)", "value": "محترمہ نصرت فاطمہ بنت سید محمد نقوی، زوجہ غلام سرور (حاملہ پاسپورٹ نمبر 754587)۔" },
      { "label": "اختیارات", "value": "محترمہ نصرت فاطمہ کو یہ عام وکالت دی گئی ہے کہ وہ ان کے نام سے یا دوسروں کے ساتھ شراکت میں کوئی بھی تجارتی کمپنی قائم کریں، شراکت داری کے معاہدوں پر دستخط کریں، تمام کاروباری اداروں کا انتظام سنبھالیں، اشیاء کی خرید و فروخت کریں، بینکوں کے امور انجام دیں، تمام سرکاری محکموں (وزارتِ محنت، بلدیات، پولیس، عدالتوں وغیرہ) میں نمائندگی کریں اور تمام انتظامی و مالی معاملات کی مجاز ہوں۔" },
      { "label": "تاریخِ تصدیق", "value": "22 نومبر 1997۔" },
      { "label": "Details", "value": "(محمود عبداللہ علی اور متعلقہ دفتری حکام کے دستخط اور مہر)۔" }
    ]
  },
  "en": {
    "name": "English",
    "dir": "ltr",
    "docName": "General Power of Attorney (Dubai)",
    "lines": [
      { "label": "Document", "value": "General Power of Attorney (توكيل عام)." },
      { "label": "Principal", "value": "Mahmoud Abdullah Ali (UAE National, holding passport no. ... and residency no. 11040828 valid until 10/11/2000)." },
      { "label": "Agent (Appointed Person)", "value": "Mrs. Nusrat Fatima bint Syed Muhammad Naqvi, wife of Ghulam Sarwar (holding passport no. 754587)." },
      { "label": "Scope", "value": "Appointing Mrs. Nusrat Fatima as a general agent/manager to establish or enter any commercial companies in her name or in partnership with others, sign partnership contracts, manage businesses, buy/sell goods, handle banking transactions, deal with government departments (Ministry of Labor, Ministries, Municipalities, Police, Courts, etc.), and manage all financial and administrative affairs." },
      { "label": "Date of Authentication", "value": "22 November 1997." },
      { "label": "Details", "value": "(Signed and stamped by Mahmoud Abdullah Ali and the notary authorities)." }
    ]
  },
  "ar": {
    "name": "العربية",
    "dir": "rtl",
    "docName": "وكالة عامة (دبي)",
    "lines": [
      { "label": "الوثيقة", "value": "وكالة عامة." },
      { "label": "الموكل", "value": "محمود عبد الله علي (مواطن إماراتي، يحمل جواز سفر... وإقامة رقم 11040828 صالحة حتى 10/11/2000)." },
      { "label": "الوكيل", "value": "السيدة نصرت فاطمة بنت سيد محمد نقوي، زوجة غلام سرور (حاملة جواز سفر رقم 754587)." },
      { "label": "الصلاحيات", "value": "توكيل السيدة نصرت فاطمة كوكيل/مدير عام لتأسيس أو الدخول في أي شركات تجارية باسمها أو بالشراكة مع آخرين، وتوقيع عقود الشراكة، وإدارة الأعمال التجارية، وبيع/شراء البضائع، وإجراء المعاملات المصرفية، ومراجعة الدوائر الحكومية (وزارة العمل، الوزارات، البلديات، الشرطة، المحاكم، إلخ)، وإدارة كافة الشؤون المالية والإدارية." },
      { "label": "تاريخ التصديق", "value": "22 نوفمبر 1997." },
      { "label": "تفاصيل", "value": "(توقيع وختم محمود عبد الله علي والجهات المختصة)." }
    ]
  },
  "fa": {
    "name": "فارسی",
    "dir": "rtl",
    "docName": "وکالت‌نامه عمومی (دبی)",
    "lines": [
      { "label": "سند", "value": "وکالت‌نامه عمومی (توكيل عام)." },
      { "label": "موکل", "value": "محمود عبدالله علی (شهروند امارات، دارنده گذرنامه... و اقامت شماره ۱۱۰۴۰۸۲۸ معتبر تا ۱۰/۱۱/۲۰۰۰)." },
      { "label": "وکیل (شخص تعیین شده)", "value": "خانم نصرت فاطمه بنت سید محمد نقوی، همسر غلام سرور (دارنده گذرنامه شماره ۷۵۴۵۸۷)." },
      { "label": "اختیارات", "value": "تعیین خانم نصرت فاطمه به عنوان وکیل/مدیر کل برای تأسیس یا ورود به هرگونه شرکت تجاری به نام خود یا با مشارکت دیگران، امضای قراردادهای مشارکت، مدیریت مشاغل، خرید/فروش کالا، انجام امور بانکی، مراجعه به ادارات دولتی (وزارت کار، وزارتخانه‌ها، شهرداری‌ها، پلیس، دادگاه‌ها و غیره) و مدیریت کلیه امور مالی و اداری." },
      { "label": "تاریخ تأیید", "value": "۲۲ نوامبر ۱۹۹۷." },
      { "label": "جزئیات", "value": "(امضا و مهر محمود عبدالله علی و مراجع رسمی)." }
    ]
  },
  "es": {
    "name": "Español",
    "dir": "ltr",
    "docName": "Poder General (Dubái)",
    "lines": [
      { "label": "Documento", "value": "Poder General (توكيل عام)." },
      { "label": "Poderdante", "value": "Mahmoud Abdullah Ali (Nacional de EAU, con pasaporte no. ... y residencia no. 11040828 válida hasta el 10/11/2000)." },
      { "label": "Apoderado (Persona Designada)", "value": "Sra. Nusrat Fatima bint Syed Muhammad Naqvi, esposa de Ghulam Sarwar (titular del pasaporte no. 754587)." },
      { "label": "Alcance", "value": "Nombrar a la Sra. Nusrat Fatima como agente/gerente general para establecer o ingresar a cualquier empresa comercial a su nombre o en asociación con otros, firmar contratos de asociación, gestionar negocios, comprar/vender bienes, manejar transacciones bancarias, tratar con departamentos gubernamentales (Ministerio de Trabajo, Ministerios, Municipalidades, Policía, Tribunales, etc.) y gestionar todos los asuntos financieros y administrativos." },
      { "label": "Fecha de Autenticación", "value": "22 de noviembre de 1997." },
      { "label": "Detalles", "value": "(Firmado y sellado por Mahmoud Abdullah Ali y las autoridades notariales)." }
    ]
  }
};

const data = JSON.parse(fs.readFileSync('documents_data.json', 'utf8'));
const docIndex = data.findIndex(d => d.id === docId);

if (docIndex !== -1) {
  data[docIndex].translations = newTranslations;
  data[docIndex].category = 'business'; 
  fs.writeFileSync('documents_data.json', JSON.stringify(data, null, 2));
  console.log("Updated doc_050 successfully");
} else {
  console.log("Doc not found");
}
