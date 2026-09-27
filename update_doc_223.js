const fs = require('fs');
const file = 'E:/2.maan-jee-website/documents_data.json';
const data = JSON.parse(fs.readFileSync(file, 'utf8'));
const docIndex = data.findIndex(d => d.id === 'doc_223');

if (docIndex !== -1) {
  data[docIndex].imageUrl = "https://res.cloudinary.com/b7xbeztp/image/upload/v1790360759/image223.jpg";
  data[docIndex].translations = {
    ur: {
      name: "اردو",
      dir: "rtl",
      docName: "وزارتِ انصاف شام – مختار نامۂ خاص (توکیل خاص)",
      lines: [
        { label: "Details", value: "جمہوریہ عربیہ سوریہ – وزارتِ انصاف (وزارة العدل) | نوٹری پبلک (الكاتب بالعدل)، ببّیلا" },
        { label: "خاص نمبر", value: "22" },
        { label: "عام نمبر", value: "2056" },
        { label: "رجسٹر نمبر", value: "787" },
        { label: "عنوان", value: "مختار نامۂ خاص (توکیل خاص / وکالۂ جائیداد)" },
        { label: "موکلہ (اختیار دینے والی)", value: "\"میں، مندرجہ ذیل دستخط کنندہ، نصرت فاطمہ، دختر سید محمد نقوی، والدہ کا نام مریم بانو، تاریخِ پیدائش 1958ء، قومیت پاکستانی، حامل پاسپورٹ نمبر 628276 جاری کردہ پاکستان بتاریخ 12/12/1996ء؛ اور بحیثیت وکیل و مختار برائے جناب محمد سیف الدین الحموی و دیگر مختار ناموں کی رو سے، نیز علاقہ قبر الست (السیدہ زینب) کے ریئل اسٹیٹ پلاٹ نمبر 282، 283 اور 284 کے کل 2400 حصص میں سے اپنے ملکیتی حصص کی مالک ہونے کی حیثیت سے؛\"" },
        { label: "مقرر کردہ قانونی وکیل / مختار", value: "میں نے ایڈووکیٹ عبد الرحیم حوکر کو اپنا باضابطہ قانونی وکیل اور مختارِ خاص مقرر کیا ہے؛" },
        { label: "تفویض کردہ اختیارات", value: "\"تاکہ موصوف تمام متعلقہ عدالتی، انتظامی اور سرکاری محکموں، لینڈ رجسٹری (المصالح العقارية)، بلدیات اور مالیاتی اداروں کے روبرو میری طرف سے پیش ہوں۔ انہیں مذکورہ پلاٹوں کی حد بندی، قانونی افراز (علیحدگی و تقسیم)، بیع و فراغ (انتقالِ ملکیت)، حصص کے اندراج، مقدمات دائر کرنے اور ان کی پیروی کرنے، ملکیتی اسناد وصول کرنے، ٹیکس و فیسیں ادا کرنے، اوصاف کی درستگی اور اس مختار نامے سے متعلق تمام قانونی امور پایۂ تکمیل تک پہنچانے کا مکمل اختیار حاصل ہوگا، نیز انہیں یہ اختیارات کسی تیسرے شخص کو تفویض کرنے کا بھی پورا حق حاصل ہے۔\"" },
        { label: "تاریخِ تحریر", value: "سال 1997ء" },
        { label: "موکلہ کا انگوٹھا و دستخط", value: "نصرت فاطمہ" },
        { label: "نوٹری پبلک کی تصدیق", value: "نوٹری پبلک ببّیلا نے قانونی فیس اور اسٹامپ ڈیوٹی کی وصولی کے بعد دستاویز کو باقاعدہ رجسٹر کیا اور سرکاری مہر ثبت کی۔" }
      ]
    },
    en: {
      name: "English",
      dir: "ltr",
      docName: "Ministry of Justice Syria – Special Power of Attorney",
      lines: [
        { label: "Details", value: "Syrian Arab Republic – Ministry of Justice | Notary Public in Babbila (الكاتب بالعدل في ببيلا)" },
        { label: "Special No.", value: "22" },
        { label: "General No.", value: "2056" },
        { label: "Register", value: "787" },
        { label: "Title", value: "Special Power of Attorney (توكيل خاص)" },
        { label: "Principal", value: "\"I, the undersigned, Nusrat Fatima, daughter of Sayed Mohammad Naqvi, mother's name Maryam Bano, born in 1958, Pakistani national, holder of Passport No. 628276 issued in Pakistan on 12/12/1996; And acting in my capacity as attorney for Mr. Mohammad Saifuddin Al-Hamwi under Power of Attorney No. 2400 in plot No. 782/283/284, Qabr Essit area, and in my capacity as co-owner in plots No. 282, 283, and 284 located in the Qabr Essit real estate zone;\"" },
        { label: "Appointed Attorney", value: "Have appointed Advocate Abdul Rahim Houkar;" },
        { label: "Granted Authorities & Powers", value: "\"To represent me and act on my behalf before all relevant judicial, administrative, and land registry departments (المصالح العقارية), municipal directorates, and financial departments. He is authorized to follow up on land demarcation, official subdivision (Ifraz), title transfers (Faragh), registration of property shares, filing and defending lawsuits, settling claims, receiving title deeds and official compensation, paying and clearing municipal and government fees, rectifying specifications, and carrying out all required legal procedures to give full effect to this power of attorney, with the full right to delegate these powers to third parties.\"" },
        { label: "Date", value: "... / ... / 1997" },
        { label: "Principal's Signature & Thumb Impression", value: "Nusrat Fatima" },
        { label: "Notary Public Attestation", value: "Duly verified, authenticated, and recorded in official books by the Notary Public of Babbila upon payment of all legal stamp duties and statutory fees." }
      ]
    },
    ar: {
      name: "العربية",
      dir: "rtl",
      docName: "وكالة خاصة",
      lines: [
        { label: "تفاصيل", value: "الجمهورية العربية السورية – وزارة العدل | الكاتب بالعدل في ببيلا" },
        { label: "الرقم الخاص", value: "22" },
        { label: "الرقم العام", value: "2056" },
        { label: "السجل", value: "787" },
        { label: "العنوان", value: "وكالة خاصة" },
        { label: "الموكلة", value: "\"أنا الموقعة أدناه نصرت فاطمة بنت سيد محمد نقوي والدتها مريم بانو تولد 1958 جنسية باكستانية أحمل جواز سفر رقم 628276 الصادر في باكستان بتاريخ 12/12/1996؛ وبصفتي وكيلة عن السيد محمد سيف الدين الحموي بموجب الوكالة رقم 2400 وبصفتي مالكة على الشيوع في العقارات رقم 282، 283 و 284 من منطقة قبر الست العقارية؛\"" },
        { label: "الوكيل", value: "وكلت المحامي عبد الرحيم حوكر؛" },
        { label: "الصلاحيات الممنوحة", value: "\"لينوب عني ويمثلني أمام كافة المحاكم والدوائر الإدارية والمصالح العقارية والبلديات والدوائر المالية. وله حق مراجعتها بخصوص التحديد والإفراز والفراغ وتسجيل الحصص العقارية ورفع الدعاوى ومتابعتها والصلح واستلام سندات التمليك ودفع الرسوم البلدية والحكومية وتصحيح الأوصاف وإجراء كل ما يلزم لتنفيذ هذه الوكالة، وله حق توكيل الغير بكل أو ببعض ما وكل به.\"" },
        { label: "التاريخ", value: "... / ... / 1997" },
        { label: "توقيع وبصمة الموكلة", value: "نصرت فاطمة" },
        { label: "توثيق الكاتب بالعدل", value: "تم التوثيق والتسجيل في السجلات الرسمية من قبل الكاتب بالعدل في ببيلا بعد استيفاء الرسوم القانونية والطوابع." }
      ]
    }
  };
  fs.writeFileSync(file, JSON.stringify(data, null, 2));
  console.log('Successfully updated doc_223');
} else {
  console.log('Error: doc_223 not found');
}
