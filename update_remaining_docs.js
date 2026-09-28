const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'documents_data.json');
const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

// 1. UPDATE doc_257
const idx257 = data.findIndex(d => d.id === 'doc_257');
if (idx257 !== -1) {
  data[idx257].imageUrl = "https://res.cloudinary.com/b7xbeztp/image/upload/v1790360769/image257.jpg";
  data[idx257].category = "property";
  data[idx257].translations = {
    ur: {
      name: "اردو",
      dir: "rtl",
      docName: "بیانِ ملکیّت (پراپرٹی اونرشپ سرٹیفکیٹ برائے رہائش گاہ دمشق الجدیدہ)",
      lines: [
        { label: "سائلہ", value: "نصرت فاطمہ بنت سید محمد نقوی" },
        { label: "موضوع", value: "عمارت نمبر 7/1، فلیٹ/رہائش گاہ نمبر 1، واقع دمشق الجدیدہ کے ملکیتی ثبوت اور کھاتے کی تصدیق کی درخواست۔" },
        { label: "بخدمت جناب", value: "ڈائریکٹوریٹ آف اکاؤنٹس و اسٹیٹ مینجمنٹ (مديرية الأملاك و المحاسبة)۔" },
        { label: "عمارت / سیکشن", value: "عمارت نمبر 7/1، گراؤنڈ فلور بمعہ باغیچہ (أرضي مع الحديقة)۔" },
        { label: "رہائش گاہ / فلیٹ نمبر", value: "1 (ایک)۔" },
        { label: "علاقہ / زون", value: "دمشق الجدیدہ (نیو دمشق)۔" },
        { label: "مالک", value: "نصرت فاطمہ دختر سید محمد نقوی۔" },
        { label: "ملکیتی حصہ و ثبوتِ خریداری", value: "مکمل حصہ (الکامل)، جو کہ خریداری معاہدہ نمبر 128 بتاریخ 10 نومبر 1982ء کے تحت خریدا گیا۔" },
        { label: "قانونی بوجھ / رکاوٹ", value: "کوئی قانونی بوجھ، رہن یا تنازع درج نہیں ہے (لا يوجد)۔" },
        { label: "پبلک ہاؤسنگ اسٹیبلشمنٹ کی توثیق", value: "\"محکمہ پبلک ہاؤسنگ کے دستخط و مہر کی باضابطہ تصدیق کی جاتی ہے، بغیر اس دستاویز کے مندرجات کی ذمہ داری قبول کیے۔\" دستخط سربراہ دیوان و ڈائریکٹر۔" },
        { label: "وزارتِ خارجہ شام کی مہر", value: "قونصلر شعبہ، دمشق، بتاریخ 18 مئی 2007ء (فیس وصولی اور باضابطہ مہر ثبت ہے)۔" },
        { label: "محکمہ اراضی و مالیات کی پڑتال", value: "\"دقق البيان\" (کوائف کی باضابطہ جانچ و تدقیق مکمل ہے)۔" }
      ]
    },
    en: {
      name: "English",
      dir: "ltr",
      docName: "Property Ownership Statement (Dimashq Al-Jadeeda Residence)",
      lines: [
        { label: "Applicant", value: "Nusrat Fatima d/o Sayed Mohammad Naqvi" },
        { label: "Subject", value: "Application for issuance of property ownership statement for Residence No. 1, Building No. 7/1, District: Mezzeh / Dimashq Al-Jadeeda." },
        { label: "Addressed to", value: "Accounts Directorate – Customer Accounting / Directorate of Properties (مديرية المحاسبة / مديرية الأملاك)." },
        { label: "Building / Section", value: "7/1, Ground floor with garden (أرضي مع الحديقة)." },
        { label: "Residence / Flat No.", value: "1 (One)." },
        { label: "Zone / Region", value: "Dimashq Al-Jadeeda (New Damascus)." },
        { label: "Owner", value: "Nusrat Fatima d/o Sayed Mohammad Naqvi." },
        { label: "Basis of Ownership", value: "Entire share (الكامل), purchased under Contract No. 128 dated 10/11/1982." },
        { label: "Encumbrances / Legal Notes", value: "Clear / None (لا يوجد)." },
        { label: "Public Housing Approval", value: "\"Certified as to the authenticity of the seal and signature of the Public Housing Establishment, without assuming responsibility for the contents of the document.\" Signed by Head of Bureau / Director." },
        { label: "Ministry of Foreign Affairs Stamp", value: "Consular Department, Damascus, 18 May 2007 (Fee receipt & consular seal affixed)." },
        { label: "Properties & Accounts Verification", value: "Verified and audited (دقق البيان)." }
      ]
    },
    ar: {
      name: "العربية",
      dir: "rtl",
      docName: "بيان ملكية عقارية (مسكن دمشق الجديدة)",
      lines: [
        { label: "مقدم الطلب", value: "نصرت فاطمة بنت سيد محمد نقوي" },
        { label: "الموضوع", value: "طلب منح بيان ملكية للمسكن رقم 1، العمارة 7/1، منطقة المزة / دمشق الجديدة." },
        { label: "إلى", value: "مديرية المحاسبة / محاسبة الزبائن / مديرية الأملاك." },
        { label: "العمارة / القسم", value: "7/1، طابق أرضي مع الحديقة." },
        { label: "رقم المسكن", value: "1 (واحد)." },
        { label: "المنطقة", value: "دمشق الجديدة." },
        { label: "المالك", value: "نصرت فاطمة بنت سيد محمد نقوي." },
        { label: "الحصة وسند التمليك", value: "الكامل، بموجب عقد الشراء رقم 128 تاريخ 10/11/1982." },
        { label: "الإشارات", value: "لا يوجد." },
        { label: "تصديق المؤسسة العامة للإسكان", value: "\"يصدق صحة خاتم وتوقيع المؤسسة العامة للإسكان دون تحمل أدنى مسؤولية عن محتوى الوثيقة.\" توقيع رئيس الديوان والمدير." },
        { label: "خاتم وزارة الخارجية السورية", value: "الإدارة القنصلية، دمشق، 18 أيار 2007 (إيصال الرسوم والخاتم القنصلي ممهور)." },
        { label: "تدقيق مديرية الأملاك", value: "دقق البيان." }
      ]
    },
    fa: {
      name: "فارسی",
      dir: "rtl",
      docName: "گواهی مالکیت ملک (مسکن دمشق الجدیده)",
      lines: [
        { label: "متقاضی", value: "نصرت فاطمه فرزند سید محمد نقوی" },
        { label: "موضوع", value: "درخواست صدور گواهی مالکیت برای واحد مسکونی شماره 1، ساختمان 7/1، منطقه مزه / دمشق الجدیده." },
        { label: "مخاطب", value: "اداره حسابداری و اداره املاک و مستغلات." },
        { label: "ساختمان / بخش", value: "7/1، همکف همراه با باغچه." },
        { label: "شماره واحد مسکونی", value: "1 (یک)." },
        { label: "منطقه", value: "دمشق الجدیده (دمشق نو)." },
        { label: "مالک", value: "نصرت فاطمه فرزند سید محمد نقوی." },
        { label: "سهم و سند مالکیت", value: "تمامیت سهم (شش‌دانگ)، طبق قرارداد خرید شماره 128 مورخ 10/11/1982." },
        { label: "محدودیت‌های قانونی و رهن", value: "فاقد هرگونه مانع و معارض (بدون اشاره یا رهن)." },
        { label: "تأییدیه سازمان مسکن دولتی", value: "\"صحت مهر و امضای سازمان دولتی مسکن مورد تأیید است، بدون تقبل مسئولیت در قبال مفاد سند.\" امضای رئیس دفتر و مدیر." },
        { label: "مهر وزارت امور خارجه سوریه", value: "اداره کنسولی، دمشق، 18 مه 2007 (رسید پرداخت و مهر رسمی کنسولی)." },
        { label: "بررسی و تطبیق اداره املاک", value: "بررسی و تطبیق کامل انجام شد (دقق البيان)." }
      ]
    },
    es: {
      name: "Español",
      dir: "ltr",
      docName: "Certificado de Propiedad Inmobiliaria (Residencia Dimashq Al-Jadeeda)",
      lines: [
        { label: "Solicitante", value: "Nusrat Fatima hija de Sayed Mohammad Naqvi" },
        { label: "Asunto", value: "Solicitud de emisión del certificado de propiedad para la Residencia N° 1, Edificio 7/1, Distrito: Mezzeh / Dimashq Al-Jadeeda." },
        { label: "Destinatario", value: "Dirección de Contabilidad / Dirección de Propiedades (مديرية المحاسبة / مديرية الأملاك)." },
        { label: "Edificio / Sección", value: "7/1, Planta baja con jardín." },
        { label: "N° de Vivienda", value: "1 (Uno)." },
        { label: "Zona / Distrito", value: "Dimashq Al-Jadeeda (Nueva Damasco)." },
        { label: "Propietaria", value: "Nusrat Fatima hija de Sayed Mohammad Naqvi." },
        { label: "Título de Propiedad", value: "Cuota total (completa), adquirida bajo el Contrato N° 128 con fecha 10/11/1982." },
        { label: "Cargas Legales", value: "Libre de gravámenes / Ninguna (لا يوجد)." },
        { label: "Aprobación de la Entidad de Vivienda", value: "\"Se certifica la autenticidad del sello y la firma de la Entidad Pública de Vivienda, sin asumir responsabilidad sobre el contenido del documento.\" Firmado por Jefe de Despacho / Director." },
        { label: "Sello del Ministerio de Asuntos Exteriores", value: "Departamento Consular, Damasco, 18 de mayo de 2007 (Sello consular y recibo de tasas fijados)." },
        { label: "Verificación de la Dirección de Propiedades", value: "Auditado y verificado (دقق البيان)." }
      ]
    }
  };
}

// 2. UPDATE doc_259
const idx259 = data.findIndex(d => d.id === 'doc_259');
if (idx259 !== -1) {
  data[idx259].imageUrl = "https://res.cloudinary.com/b7xbeztp/image/upload/v1790360769/image259.jpg";
  data[idx259].category = "property";
  data[idx259].translations = {
    ur: {
      name: "اردو",
      dir: "rtl",
      docName: "معاہدۂ بیع قطعی (حتمی بیع نامہ - السیدہ زینب اپارٹمنٹ)",
      lines: [
        { label: "فریق اول (بائع / بیچنے والا)", value: "علی الصعاف ولد احمد، والدہ: جمیلہ، پیدائش: بصرہ 1952ء، شناختی کارڈ نمبر: 22201949، رہائش: السیدہ زینب" },
        { label: "فریق دوم (مشتری / خریدنے والی)", value: "نصرت فاطمہ بنت سید محمد، والدہ: مہر بانو، پیدائش: کراچی 1958ء، اندراج رجسٹر غیر ملکی: 29/10/1996ء، رہائش: دمشق" },
        { label: "پہلی شق (بیع و قیمت)", value: "فریق اول نے فریق دوم کے ہاتھ حتمی و قطعی طور پر ریئل اسٹیٹ پلاٹ نمبر 797 واقع قبر الست (السیدہ زینب) میں واقع 5ویں منزل کا اپارٹمنٹ ملکِ خالص کے طور پر کل بدل بیس لاکھ (2,000,000) شامی لیرا میں فروخت کر دیا۔" },
        { label: "دوسری شق (قبولیت)", value: "فریق دوم نے مذکورہ جائیداد کو طے شدہ قیمت اور شرائط کے تحت خریدنا قبول کر لیا۔" },
        { label: "تیسری شق (ضمانت)", value: "فریق اول پابند ہے کہ وہ خریدی گئی جائیداد کو ہر قسم کے نزاع یا انتقالِ ملکیت (فراغ) میں مانع تمام رکاوٹوں سے پاک کر کے حوالے کرے۔" },
        { label: "چوتھی شق (قبضہ و اوصاف)", value: "تعمیراتی اوصاف اور ٹیکس کے ضوابط (اضافی اندراج کے مطابق قبضہ 1/4/2000ء کو سونپا جا چکا ہے)۔" },
        { label: "پانچویں و چھٹی شق (اطلاع و نادہندگی)", value: "رجسٹری ڈاک کے ذریعے اطلاع، بقایا رقم اور غیر حاضری پر نادہندگی کی شرائط۔" },
        { label: "ساتویں شق (انتقالِ اراضی)", value: "دمشق میں انتقالِ اراضی کے معاون دفتر کے سامنے 15 دن میں پیش ہو کر قانونی انتقال مکمل کرنے کی پابندی۔" },
        { label: "آٹھویں شق (ادائیگی)", value: "فریق دوم نے دستخط کے وقت طے شدہ قیمت کے مکمل بیس لاکھ (2,000,000) شامی لیرا نقد فریق اول کو ادا کر دیے ہیں۔" },
        { label: "نویں شق (ٹیکس و محصولات)", value: "قبضے سے قبل کے تمام ٹیکس فریق اول اور بعد کے جملہ اخراجات و ٹیکس فریق دوم کے ذمہ ہوں گے۔" },
        { label: "دسویں تا بارہویں شق (قانونی نوٹسز)", value: "عدالتی نوٹسز کے لیے مستقل پتہ، معاہدے کی دو اصل نقول کی تیاری، اور خلاف ورزی پر ہرجانے کی پابندی۔" },
        { label: "تاریخِ تحریر", value: "28 فروری 2000ء" },
        { label: "دستخط و گواہان", value: "دستخط فریق اول: علی الصعاف، دستخط فریق دوم: نصرت فاطمہ، گواہان: مرتضیٰ الحسینی، نزار اسعد" }
      ]
    },
    en: {
      name: "English",
      dir: "ltr",
      docName: "Final Sale Contract (Sayyidah Zaynab Apartment)",
      lines: [
        { label: "First Party (Seller)", value: "Ali As-Saaf s/o Ahmad, Mother: Jamila, Born: Al-Basrah 1952, ID: 22201949 (23/12/1996), Residing: Sayyidah Zaynab" },
        { label: "Second Party (Buyer)", value: "Nusrat Fatima d/o Syed Mohammad, Mother: Mehar Bano, Born: Karachi 1958, Foreigners' Registry Entry: 29/10/1996, Residing: Damascus" },
        { label: "Article 1 (Sale & Consideration)", value: "The First Party has sold irrevocably to the Second Party the apartment in plot No. 797, Qabr Essit (Sayyidah Zaynab), 5th floor, freehold (Milq), for a total consideration of 2,000,000 Syrian Pounds." },
        { label: "Article 2 (Acceptance)", value: "The Second Party has formally accepted the purchase based on the agreed price and terms." },
        { label: "Article 3 (Clear Title Guarantee)", value: "The First Party guarantees the handover of the premises free from encumbrances preventing ownership transfer (Faragh)." },
        { label: "Article 4 (Demarcation & Handover)", value: "Demarcation and handover terms (handover completed as recorded on 1/4/2000)." },
        { label: "Article 5 & 6 (Registration & Default)", value: "Timelines for registration, notification by registered post, and forfeiture conditions." },
        { label: "Article 7 (Land Registry Appearance)", value: "Obligation to appear before the land registry assistant in Damascus to finalize registration within 15 days of notification." },
        { label: "Article 8 (Full Payment)", value: "The Second Party has paid the entire sum of 2,000,000 Syrian Pounds in full to the First Party at the time of signing." },
        { label: "Article 9 (Taxes & Municipal Dues)", value: "Division of taxes and municipal obligations (pre-delivery to seller, post-delivery to buyer)." },
        { label: "Article 10-12 (Legal Notices & Execution)", value: "Domicile declaration, execution in duplicate, and liquidated damages in case of default." },
        { label: "Execution Date", value: "28 / 02 / 2000" },
        { label: "Signatories & Witnesses", value: "Seller: Ali As-Saaf, Buyer: Nusrat Fatima, Witnesses: Mourtada Al-Husseini, Nizar As'ad" }
      ]
    },
    ar: {
      name: "العربية",
      dir: "rtl",
      docName: "عقد بيع قطعي (شقة السيدة زينب)",
      lines: [
        { label: "الفريق الأول (البائع)", value: "علي الصعاف بن أحمد، والدته: جميلة، تولد: البصرة 1952، بطاقة شخصية: 22201949، المقيم: السيدة زينب" },
        { label: "الفريق الثاني (المشتري)", value: "نصرت فاطمة بنت سيد محمد، والدتها: مهر بانو، تولد: كراتشي 1958، سجل الأجانب: 29/10/1996، المقيمة: دمشق" },
        { label: "البند الأول (المبيع والثمن)", value: "باع الفريق الأول للفريق الثاني بيعاً باتاً قطعياً الشقة الكائنة في العقار 797 قبر الست (السيدة زينب)، الطابق الخامس، ملكاً صرفاً، بثمن إجمالي قدره مليونا (2,000,000) ليرة سورية." },
        { label: "البند الثاني (القبول)", value: "قبل الفريق الثاني الشراء بالثمن والشروط المتفق عليها." },
        { label: "البند الثالث (ضمان الفراغ)", value: "يضمن الفريق الأول تسليم المبيع خالياً من أي مانع يعيق الفراغ ونقل الملكية." },
        { label: "البند الرابع (التسليم)", value: "شروط التسليم والمواصفات (تم التسليم فعلياً بتاريخ 1/4/2000 بموجب الشرح المدون)." },
        { label: "البندان 5 و 6 (الإنذار والتسجيل)", value: "الإخطار بالبريد المسجل وشروط النكول والفسخ في حال التأخر." },
        { label: "البند السابع (الحضور للسجل العقاري)", value: "الالتزام بالحضور أمام معاون السجل العقاري بدمشق خلال 15 يوماً من الإخطار لإجراء الفراغ." },
        { label: "البند الثامن (الوفاء بالثمن)", value: "قبض الفريق الأول كامل الثمن البالغ 2,000,000 ليرة سورية نقداً وعداً عند التوقيع." },
        { label: "البند التاسع (الضرائب والرسوم)", value: "الضرائب السابقة للتسليم على البائع، واللاحقة على المشتري." },
        { label: "البنود 10-12 (الموطن والنسخ)", value: "تحديد الموطن المختار، تحرير العقد على نسختين أصليتين، والشرط الجزائي." },
        { label: "تاريخ العقد", value: "28 / 02 / 2000" },
        { label: "التواقيع والشهود", value: "البائع: علي الصعاف، المشتري: نصرت فاطمة، الشهود: مرتضى الحسيني، نزار أسعد" }
      ]
    },
    fa: {
      name: "فارسی",
      dir: "rtl",
      docName: "قرارداد قطعی بیع (مبایعه‌نامه آپارتمان سیده زینب)",
      lines: [
        { label: "طرف اول (فروشنده)", value: "علی الصعاف فرزند احمد، مادر: جمیله، متولد: بصره 1952، کارت شناسایی: 22201949، ساکن: سیده زینب" },
        { label: "طرف دوم (خریدار)", value: "نصرت فاطمه فرزند سید محمد، مادر: مهر بانو، متولد: کراچی 1958، ثبت اتباع خارجی: 29/10/1996، ساکن: دمشق" },
        { label: "ماده 1 (موضوع معامله و ثمن)", value: "طرف اول به صورت قطعی و غیرقابل رجوع، آپارتمان واقع در پلاک ثبتی 797 قبر الست (سیده زینب)، طبقه پنجم را به عنوان ملک خالص به قیمت دو میلیون (2,000,000) لیره سوری به طرف دوم فروخت." },
        { label: "ماده 2 (قبول معامله)", value: "طرف دوم خرید ملک را با شرایط و ثمن توافق شده قبول نمود." },
        { label: "ماده 3 (تضمین انتقال)", value: "طرف اول تضمین می‌نماید که ملک را بدون هرگونه مانع و معارض قانونی جهت انتقال رسمی تحویل دهد." },
        { label: "ماده 4 (تحویل مبیع)", value: "شرایط تحویل و اوصاف ساختمان (طبق یادداشت مندرج، ملک در تاریخ 1/4/2000 تحویل داده شده است)." },
        { label: "مواد 5 و 6 (ابلاغ و ثبت)", value: "ارسال اخطاریه از طریق پست سفارشی و مقررات عدم حضور و فسخ قرارداد." },
        { label: "ماده 7 (حضور در دفتر اسناد رسمی)", value: "تعهد به حضور در اداره ثبت اسناد دمشق ظرف مدت 15 روز کاری پس از ابلاغ جهت تنظیم سند رسمی." },
        { label: "ماده 8 (پرداخت کامل ثمن)", value: "طرف دوم تمام مبلغ معامله به ارزش دو میلیون (2,000,000) لیره سوری را به صورت نقدی در زمان امضا به طرف اول پرداخت کرد." },
        { label: "ماده 9 (مالیات‌ها و عوارض)", value: "مالیات‌های پیش از تحویل بر عهده فروشنده و هزینه‌ها و قبوض بعدی بر عهده خریدار است." },
        { label: "مواد 10 الی 12 (اقامتگاه و نسخه‌ها)", value: "تعیین اقامتگاه قانونی جهت ابلاغ قضایی، تنظیم قرارداد در دو نسخه اصلی و شروط خسارت." },
        { label: "تاریخ تنظیم", value: "28 فوریه 2000" },
        { label: "امضاها و شهود", value: "فروشنده: علی الصعاف، خریدار: نصرت فاطمه، شهود: مرتضی الحسینی، نزار اسعد" }
      ]
    },
    es: {
      name: "Español",
      dir: "ltr",
      docName: "Contrato Definitivo de Compraventa (Apartamento Sayyidah Zaynab)",
      lines: [
        { label: "Primera Parte (Vendedor)", value: "Ali As-Saaf, hijo de Ahmad, madre: Jamila, nacido en Basora 1952, DNI N°: 22201949, residente en Sayyidah Zaynab" },
        { label: "Segunda Parte (Compradora)", value: "Nusrat Fatima, hija de Syed Mohammad, madre: Mehar Bano, nacida en Karachi 1958, Registro de Extranjeros: 29/10/1996, residente en Damasco" },
        { label: "Artículo 1 (Venta y Precio)", value: "La Primera Parte vende de manera definitiva e irrevocable a la Segunda Parte el apartamento en la parcela N° 797, área de Qabr Essit (Sayyidah Zaynab), 5° piso, en plena propiedad, por un precio total acordado de dos millones (2.000.000) de libras sirias." },
        { label: "Artículo 2 (Aceptación)", value: "La Segunda Parte acepta la compra bajo el precio y las condiciones acordadas." },
        { label: "Artículo 3 (Garantía de Título Limpio)", value: "La Primera Parte garantiza la entrega del inmueble libre de gravámenes que impidan el traspaso formal de propiedad." },
        { label: "Artículo 4 (Entrega del Inmueble)", value: "Condiciones de delimitación y entrega (posesión entregada formalmente el 01/04/2000 según consta en el documento)." },
        { label: "Artículos 5 y 6 (Notificación y Registro)", value: "Plazos de formalización, notificación por correo certificado y condiciones en caso de incumplimiento." },
        { label: "Artículo 7 (Comparecencia Notarial)", value: "Obligación de comparecer ante la oficina del registro de la propiedad en Damasco dentro de los 15 días posteriores a la notificación." },
        { label: "Artículo 8 (Pago Total del Precio)", value: "La Segunda Parte ha abonado la totalidad de los 2.000.000 de libras sirias en efectivo a la Primera Parte al momento de la firma." },
        { label: "Artículo 9 (Impuestos y Tasas)", value: "Impuestos municipales previos a la entrega a cargo del vendedor; tributos posteriores a cargo de la compradora." },
        { label: "Artículos 10-12 (Domicilio y Ejemplares)", value: "Declaración de domicilio para notificaciones legales, formalización en dos ejemplares originales y cláusula penal." },
        { label: "Fecha de Firma", value: "28 de febrero de 2000" },
        { label: "Firmas y Testigos", value: "Vendedor: Ali As-Saaf, Compradora: Nusrat Fatima, Testigos: Mourtada Al-Husseini, Nizar As'ad" }
      ]
    }
  };
}

// 3. UPDATE doc_261
const idx261 = data.findIndex(d => d.id === 'doc_261');
if (idx261 !== -1) {
  data[idx261].imageUrl = "https://res.cloudinary.com/b7xbeztp/image/upload/v1790360769/image261.jpg";
  data[idx261].category = "personal";
  data[idx261].translations = {
    ur: {
      name: "اردو",
      dir: "rtl",
      docName: "حکومتی مکتوب دیوان الامیری شارجہ و کوائف شامی اقامہ",
      lines: [
        { label: "ادارہ", value: "دیوان الامیری، حکومتِ شارجہ (Govt. of Sharjah – Dewan Al-Amiri)، ڈاک بکس: 1، شارجہ" },
        { label: "تاریخ و نمبر", value: "سن 1976ء، بلا نمبر سرکاری مکتوب" },
        { label: "بنام", value: "خط بنام ڈائریکٹر / انچارج پولیس" },
        { label: "مکتوب کا مفہوم", value: "\"التماس ہے کہ اس خط کی حاملہ محترمہ نصرت کو اپنی شناختی دستاویزات / متعلقہ کاغذات پیش کرنے تک ضروری قانونی سہولت دی جائے اور مناسب کارروائی عمل میں لائی جائے۔\"" },
        { label: "دستخط", value: "دیوان الامیری کے مجاز افسر کے باضابطہ دستخط موجود ہیں۔" },
        { label: "شامی اقامہ کے کوائف", value: "وزارتِ داخلہ – نظامت برائے ہجرت و پاسپورٹ، عام اقامہ (إقامة عادية)" },
        { label: "نام و کنیت", value: "نصرت فاطمہ (NUSRAT FATIMA)" },
        { label: "تاریخِ پیدائش و جنس", value: "01/01/1958ء، مادہ / خاتون" },
        { label: "قومیت", value: "پاکستان (باكستان)" },
        { label: "قومی رجسٹریشن نمبر", value: "10202020000819" },
        { label: "قانونی پابندی", value: "ملازمت یا کام کرنے کی اجازت نہیں ہے (لا يسمح بمزاولة العمل)" }
      ]
    },
    en: {
      name: "English",
      dir: "ltr",
      docName: "Official Letter - Sharjah Emiri Court (Dewan Al-Amiri) & Syrian Residency",
      lines: [
        { label: "Authority", value: "Dewan Al-Amiri, Government of Sharjah (حكومة الشارقة - ديوان الأميري), P.O. Box: 1, Sharjah" },
        { label: "Date & Reference", value: "Year 1976, Unnumbered official letter" },
        { label: "Addressed To", value: "Director / In-charge of Police" },
        { label: "Letter Content & Translation", value: "\"Please be kind enough to grant legal accommodation/release to the bearer of this letter, Nusrat, until she presents her identity cards/documents, and kindly take appropriate action.\"" },
        { label: "Signatory", value: "Official seal and signature of the authorized officer of Dewan Al-Amiri." },
        { label: "Syrian Residency Particulars", value: "Ministry of Interior – Directorate of Migration and Passports (إدارة الهجرة والجوازات), Regular Residence (إقامة عادية)" },
        { label: "Holder Name", value: "NUSRAT FATIMA (نصرت فاطمہ)" },
        { label: "Date of Birth & Gender", value: "01/01/1958, Female" },
        { label: "Nationality", value: "Pakistan (باكستان)" },
        { label: "National Registration No.", value: "10202020000819" },
        { label: "Legal Condition", value: "Employment or work is not permitted (لا يسمح بمزاولة العمل)" }
      ]
    },
    ar: {
      name: "العربية",
      dir: "rtl",
      docName: "كتاب رسمي من ديوان الأميري بالشارقة وبيانات الإقامة السورية",
      lines: [
        { label: "الجهة الرسمية", value: "ديوان الأميري، حكومة الشارقة، ص.ب: 1، الشارقة" },
        { label: "التاريخ والرقم", value: "عام 1976م، كتاب رسمي بلا رقم" },
        { label: "الموجه إليه", value: "السيد مدير / مسؤول الشرطة المحترم" },
        { label: "نص الكتاب ومضمونه", value: "\"يرجى التكرم بالإفراج عن حاملة هذه الرسالة نصرة ... لحين إحضار بطاقة الوجوه / الأوراق ... ونرجو اتخاذ ما ترونه مناسباً.\"" },
        { label: "التوقيع", value: "توقيع وخاتم المسؤول المفوض بديوان الأميري." },
        { label: "بيانات الإقامة السورية", value: "وزارة الداخلية – إدارة الهجرة والجوازات، إقامة عادية" },
        { label: "الاسم والكنية", value: "نصرت فاطمة (NUSRAT FATIMA)" },
        { label: "تاريخ الولادة والجنس", value: "01/01/1958، أنثى" },
        { label: "الجنسية", value: "باكستان" },
        { label: "الرقم الوطني / القيد", value: "10202020000819" },
        { label: "الشرط القانوني", value: "لا يسمح بمزاولة العمل" }
      ]
    },
    fa: {
      name: "فارسی",
      dir: "rtl",
      docName: "نامه رسمی دیوان امیری شارجه و مشخصات اقامت سوریه",
      lines: [
        { label: "نهاد صادرکننده", value: "دیوان امیری، دولت شارجه، صندوق پستی: 1، شارجه" },
        { label: "تاریخ و شماره", value: "سال 1976 میلادی، نامه رسمی بدون شماره" },
        { label: "مخاطب", value: "ریاست / مسئول محترم پلیس" },
        { label: "مفاد نامه", value: "\"خواشمند است در خصوص آزادی حامل این نامه، سرکار خانم نصرت، تا زمان ارائه مدارک و اسناد هویتی تسهیلات لازم مبذول و اقدامات مقتضی صورت پذیرد.\"" },
        { label: "امضا", value: "امضا و مهر رسمی مقام مجاز دیوان امیری." },
        { label: "مشخصات کارت اقامت سوریه", value: "وزارت کشور – اداره کل مهاجرت و گذرنامه، اقامت عادی" },
        { label: "نام و نام خانوادگی", value: "نصرت فاطمه (NUSRAT FATIMA)" },
        { label: "تاریخ تولد و جنسیت", value: "01/01/1958، مؤنث" },
        { label: "تابعیت", value: "پاکستان" },
        { label: "شماره ثبت ملی", value: "10202020000819" },
        { label: "محدودیت قانونی", value: "اشتغال به کار مجاز نمی‌باشد (لا يسمح بمزاولة العمل)" }
      ]
    },
    es: {
      name: "Español",
      dir: "ltr",
      docName: "Oficio Oficial de la Corte Emiral de Sharjah y Datos de Residencia Siria",
      lines: [
        { label: "Organismo Emisor", value: "Dewan Al-Amiri (Corte Emiral), Gobierno de Sharjah, P.O. Box: 1, Sharjah" },
        { label: "Fecha y Número", value: "Año 1976, Oficio oficial sin número" },
        { label: "Destinatario", value: "Director / Responsable del Cuerpo de Policía" },
        { label: "Contenido del Oficio", value: "\"Se solicita amablemente conceder las facilidades oportunas y disponer la libertad de la portadora de esta carta, Dña. Nusrat, hasta la aportación de sus documentos de identidad pertinentes, procediendo conforme a derecho.\"" },
        { label: "Firma y Sello", value: "Firma y sello oficial del funcionario competente del Dewan Al-Amiri." },
        { label: "Datos de Residencia Siria", value: "Ministerio del Interior – Dirección de Migración y Pasaportes, Residencia Ordinaria" },
        { label: "Nombre y Apellidos", value: "NUSRAT FATIMA (نصرت فاطمہ)" },
        { label: "Fecha de Nacimiento y Sexo", value: "01/01/1958, Femenino" },
        { label: "Nacionalidad", value: "Pakistán (باكستان)" },
        { label: "N° de Registro Nacional", value: "10202020000819" },
        { label: "Condición Jurídica", value: "No está permitido ejercer actividad laboral (لا يسمح بمزاولة العمل)" }
      ]
    }
  };
}

fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
console.log('Successfully populated doc_257, doc_259, and doc_261 in all 5 languages!');
