const fs = require('fs');
const file = 'E:/2.maan-jee-website/documents_data.json';
const data = JSON.parse(fs.readFileSync(file, 'utf8'));
const docIndex = data.findIndex(d => d.id === 'doc_219');

if (docIndex !== -1) {
  data[docIndex].imageUrl = "https://res.cloudinary.com/b7xbeztp/image/upload/v1790360759/image219.jpg";
  data[docIndex].translations = {
    ur: {
      name: "اردو",
      dir: "rtl",
      docName: "باضابطہ قانونی پاور آف اٹارنی / توکیل عام",
      lines: [
        { label: "Header", value: "بسم اللہ الرحمن الرحیم" },
        { label: "Title", value: "مختار نامۂ عام (جنرل پاور آف اٹارنی)" },
        { label: "Principal", value: "\"میں، مندرجہ ذیل دستخط کنندہ، محمود عبد اللہ علی، اماراتی شہری، حامل پاسپورٹ نمبر [...]، اس دستاویز کے ذریعے محترمہ نصرت فاطمہ بنت سید محمد نقوی، زوجہ غلام سرور چودھری، حامل پاسپورٹ نمبر 754587 اور اقامہ نمبر 21040828 (میعاد تا 2002ء) کو اپنا قانونی مختارِ عام مقرر کرتا ہوں۔" },
        { label: "Authority 1", value: "وہ میری طرف سے مکمل مجاز اور نمائندہ ہوں گی کہ وہ اپنے نام سے یا دوسروں کے ساتھ شراکت میں کوئی بھی کمپنی قائم کریں یا تجارتی کاروبار میں داخل ہوں۔ انہیں اپنی صوابدید کے مطابق شراکت داری کے معاہدات پر دستخط کرنے، متعلقہ اداروں سے ان کی توثیق و رجسٹریشن کروانے، اور تمام ضروری کارروائی نمٹانے کا مکمل اختیار حاصل ہوگا۔" },
        { label: "Authority 2", value: "موصوفہ کو اپنی ملکیت کے کسی بھی ادارے کو تکنیکی و انتظامی لحاظ سے چلانے، تیسرے فریق کے سامنے ان کی نمائندگی کرنے، معاہدات و دستاویزات پر دستخط کرنے، اشیاء و خدمات کی خرید و فروخت کرنے، وصولیاں و ادائیگیاں کرنے، رسیدیں اور برآت نامے جاری کرنے، واجب الادا رقوم کا مطالبہ اور وصولی کرنے، تھانوں اور پبلک پراسیکیوشن میں ادارے کے نام پر شکایات درج کروانے اور پیروی کرنے، عدالتی کارروائی کے لیے وکلاء کا تقرر یا معطلی کرنے، کرایے، فیسیں، ٹیکس، جرمانے اور یوٹیلیٹی بلز ادا کرنے، ملازمین و مزدوروں کی بھرتی و برطرفی اور ان کی اجرت طے کرنے، ملازمین کے اقامے اور ویزے بنوانے اور منسوخ کروانے، گاڑیوں کے تجارتی لائسنسز کے امور نمٹانے کا مکمل اختیار حاصل ہوگا۔ نیز وہ تمام تر وفاقی و مقامی سرکاری اور نیم سرکاری محکموں، بشمول وزارتِ محنت و سماجی بہبود، محکمہ پاسپورٹ و امیگریشن، بلدیات، چیمبر آف کامرس اینڈ انڈسٹری، بین الاقوامی ہوائی اڈے، محکمہ پانی و بجلی، لینڈ رجسٹری اور اقتصادی ترقی کے محکموں کے سامنے مکمل نمائندگی کا اختیار رکھیں گی۔" },
        { label: "Conclusion", value: "مختصر یہ کہ میری مختار کو وہ تمام تر مطلق شرعی و قانونی اختیارات تفویض کیے جاتے ہیں جو مذکورہ مقاصد کی تکمیل کے لیے ضروری ہوں۔ وہ ذاتی طور پر جو بھی کارروائی انجام دیں گی، میں اس کی مکمل تصدیق و توثیق کرتا ہوں۔\"" },
        { label: "Principal details", value: "موکل (اختیار دینے والا): محمود عبد اللہ علی | مالک: عسلی برائے اشیائے خور و نوش (سابقہ) / عسلی جنرل ٹریڈنگ (موجودہ) | پوسٹ بکس: 9232، دبئی – متحدہ عرب امارات" },
        { label: "Signatures & Stamps", value: "دستخط و مہریں: موکل کے باضابطہ دستخط، عسلی جنرل ٹریڈنگ کی مہر، اور نوٹری / قانونی توثیق کی مہریں بتاریخ 22/11/97۔" }
      ]
    },
    en: {
      name: "English",
      dir: "ltr",
      docName: "General Power of Attorney",
      lines: [
        { label: "Header", value: "In the Name of God, The Beneficent, The Merciful" },
        { label: "Title", value: "General Power of Attorney (توكيل عام)" },
        { label: "Principal", value: "\"I, the undersigned, Mahmoud Abdullah Ali, UAE national, holder of Passport No. [...], hereby appoint under this instrument Mrs. Nusrat Fatima daughter of Sayed Mohammad Naqvi, wife of Ghulam Sarwar Chaudhry, holder of Passport No. 754587 and Residency permit No. 21040828 (valid until 2002), as my true and lawful attorney." },
        { label: "Authority 1", value: "She is fully authorized to act on my behalf and represent me in establishing any company or entering into any commercial business in her own name or in partnership with others. She holds full authority to sign partnership agreements on terms she deems proper, endorse, authenticate, and register them with competent authorities, and carry out publication and clearance formalities." },
        { label: "Authority 2", value: "She is granted full authority to manage any establishments owned by her from technical and administrative perspectives, represent them before third parties, sign contracts, buy and sell goods and services, collect payments, issue receipts and discharges, claim and receive outstanding debts, file and follow up complaints before police stations and public prosecution offices, appoint and dismiss lawyers for legal claims, pay rents, taxes, fees, fines, and utility bills, disburse funds, hire and dismiss employees and laborers, determine their wages, process visas and residency permits for staff, inspect commercial and vehicle licenses, and represent the establishments before all federal, local, government, and quasi-government departments, including the Ministry of Labor and Social Affairs, Naturalization and Residency Departments, Municipalities, Chambers of Commerce and Industry, Civil Aviation, Electricity and Water Authorities, and Land and Economic Departments." },
        { label: "Conclusion", value: "In short, my attorney is granted full, absolute powers permitted by law and sharia to execute all necessary acts to achieve the aforementioned objectives. I ratify whatever she lawfully executes in this regard and request its formal attestation.\"" },
        { label: "Principal details", value: "Principal (الموكل): Mahmoud Abdullah Ali | Owner of Asali Foodstuff (formerly) / Asali General Trading (currently) | P.O. Box 9232, Dubai – U.A.E." },
        { label: "Signatures & Stamps", value: "Principal's signature, official stamp of Asali General Trading, and Notary/Legalization stamps dated 22/11/97." }
      ]
    },
    ar: {
      name: "العربية",
      dir: "rtl",
      docName: "وكالة عامة",
      lines: [
        { label: "البسملة", value: "بسم الله الرحمن الرحيم" },
        { label: "العنوان", value: "توكيل عام" },
        { label: "الموكل", value: "\"أنا الموقع أدناه محمود عبد الله علي، إماراتي الجنسية، أحمل جواز سفر رقم [...]، أوكل بموجب هذا السند السيدة نصرت فاطمة بنت سيد محمد نقوي زوجة غلام سرور شودري، تحمل جواز سفر رقم 754587 وإقامة رقم 21040828 (صالحة حتى 2002) لتكون وكيلتي الشرعية والقانونية." },
        { label: "الصلاحية 1", value: "ولها كامل الصلاحية في أن تنوب عني وتمثلني في تأسيس أية شركة أو الدخول في أي عمل تجاري باسمها أو بالشراكة مع آخرين. ولها مطلق الصلاحية في التوقيع على عقود الشراكة بالشروط التي تراها مناسبة، والتصديق عليها وتوثيقها وتسجيلها لدى الجهات المختصة والقيام بإجراءات النشر والتخليص." },
        { label: "الصلاحية 2", value: "كما منحتها الصلاحية التامة في إدارة أي مؤسسات تملكها من الناحية الفنية والإدارية وتمثيلها أمام الغير، وتوقيع العقود، وبيع وشراء البضائع والخدمات، وقبض المبالغ وإصدار الإيصالات وبراءات الذمة، والمطالبة واستيفاء الديون المترتبة، وتقديم ومتابعة الشكاوى أمام مراكز الشرطة والنيابة العامة، وتعيين وعزل المحامين في الدعاوى القانونية، ودفع الإيجارات والضرائب والرسوم والغرامات وفواتير الخدمات، وصرف الأموال، وتعيين وفصل الموظفين والعمال وتحديد أجورهم، وإنجاز المعاملات الخاصة بتأشيرات وإقامات العاملين، واستخراج ومتابعة التراخيص التجارية وتراخيص المركبات، وتمثيل المؤسسات أمام كافة الدوائر الاتحادية والمحلية والحكومية وشبه الحكومية بما في ذلك وزارة العمل والشؤون الاجتماعية، وإدارات الجنسية والإقامة، والبلديات، وغرف التجارة والصناعة، والطيران المدني، وهيئات الكهرباء والماء، ودوائر الأراضي والتنمية الاقتصادية." },
        { label: "الخلاصة", value: "وباختصار، منحت وكيلتي كافة الصلاحيات المطلقة المسموح بها قانوناً وشرعاً لإجراء كافة التصرفات اللازمة لتحقيق الأغراض المذكورة أعلاه. وأصادق على كل ما تقوم به قانوناً في هذا الشأن وأطلب توثيقه رسمياً.\"" },
        { label: "تفاصيل الموكل", value: "الموكل: محمود عبد الله علي | مالك عسلي للمواد الغذائية (سابقاً) / عسلي للتجارة العامة (حالياً) | ص.ب 9232، دبي - الإمارات العربية المتحدة" },
        { label: "التواقيع والأختام", value: "توقيع الموكل، الختم الرسمي لعسلي للتجارة العامة، وأختام الكاتب بالعدل / التصديق بتاريخ 22/11/97." }
      ]
    }
  };
  fs.writeFileSync(file, JSON.stringify(data, null, 2));
  console.log('Successfully updated doc_219');
} else {
  console.log('Error: doc_219 not found');
}
