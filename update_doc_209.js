const fs = require('fs');
const file = 'E:/2.maan-jee-website/documents_data.json';
const data = JSON.parse(fs.readFileSync(file, 'utf8'));
const docIndex = data.findIndex(d => d.id === 'doc_209');

if (docIndex !== -1) {
  data[docIndex].imageUrl = "https://res.cloudinary.com/b7xbeztp/image/upload/v1790360757/image209.jpg";
  data[docIndex].translations = {
    ur: {
      name: "اردو",
      dir: "rtl",
      docName: "وزارتِ عدل شام – باضابطہ پاور آف اٹارنی برائے بیعِ جائیداد (وکالة لبیع عقار)",
      lines: [
        { label: "Details", value: "جمہوریہ عربیہ سوریہ – وزارتِ انصاف (وزارة العدل) - نوٹری پبلک (الكاتب بالعدل)، ببّیلا" },
        { label: "خاص نمبر", value: "188" },
        { label: "عام نمبر", value: "3380" },
        { label: "رجسٹر نمبر", value: "551" },
        { label: "عنوان", value: "پاور آف اٹارنی برائے فروختِ جائیداد (وکالۂ بیعِ عقار)" },
        { label: "موکل (اختیار دینے والا)", value: "میں، مندرجہ ذیل دستخط کنندہ، علی احمد الصعاف، ولد احمد، والدہ کا نام جمیلہ، تاریخِ پیدائش 1952ء، حامل شناختی کارڈ نمبر 339 جاری کردہ دفترِ نفوس المعضمیہ بتاریخ 13/12/1999ء؛ بحیثیت وکیل و مختار برائے اپارٹمنٹ واقع چوتھی منزل، ریئل اسٹیٹ پلاٹ نمبر 797، علاقہ قبر الست (السیدہ زینب)؛" },
        { label: "وکیل / مختار (جسے اختیار دیا گیا)", value: "آج کی تاریخ میں، مکمل شرعی و قانونی ہوش و حواس کی اہلیت کے ساتھ، میں نے محترمہ نصرت فاطمہ نقوی، دختر سید محمد، والدہ کا نام مریم بانو، تاریخِ پیدائش 1958ء، حامل پاکستانی پاسپورٹ نمبر 456761 جاری کردہ دمشق بتاریخ 29/8/1998ء کو اپنا باضابطہ و قانونی مختارِ خاص مقرر کیا ہے؛" },
        { label: "تفویض کردہ اختیارات", value: "تاکہ وہ علاقہ قبر الست (السیدہ زینب) کے ریئل اسٹیٹ پلاٹ نمبر 797 میں چوتھی منزل پر واقع مکمل اپارٹمنٹ کو فروخت کرنے، اس کی قانونی منتقلی (فراغ) اور رجسٹریشن کروانے کے لیے میری طرف سے مکمل نمائندہ ہوں۔ وہ اس جائیداد کو جس کے نام چاہیں فروخت کر سکتی ہیں، حتیٰ کہ اگر وہ چاہیں تو اپنی ذاتی ملکیت میں منتقل کر سکتی ہیں، اپنی مرضی کی قیمت پر، اور اس تمام عمل میں میری ذاتی موجودگی کی کوئی ضرورت نہیں ہوگی۔ انہیں تمام متعلقہ سرکاری محکموں، لینڈ رجسٹری کے دفاتر کے روبرو پیش ہونے، بیع و فراغ کا اقرار کرنے، رقم وصول کرنے، رسید جاری کرنے، ملکیتی اسناد وصول و تقسیم کرنے، ٹیکس و بلدیاتی واجبات کلیئر کروانے، تصحیحِ اوصاف، اور اس جائیداد سے متعلق تمام تر انتظامی و قانونی کارروائی مکمل کرنے کا پورا اختیار ہوگا۔ نیز انہیں یہ تمام یا جزوی اختیارات کسی تیسرے شخص کو تفویض (Sub-delegate) کرنے کا بھی مکمل حق حاصل ہوگا۔" },
        { label: "موکل کا انگوٹھا و دستخط", value: "علی الصعاف (ثبت شدہ)" },
        { label: "نوٹری پبلک کی قانونی توثیق", value: "نوٹری پبلک ببّیلا نے قانونی فیس اور اسٹامپ ڈیوٹی کی وصولی کے بعد اس دستاویز کو باضابطہ تصدیق کر کے اپنے رجسٹر میں درج کیا۔" },
        { label: "اندراج نمبر", value: "014922" }
      ]
    },
    en: {
      name: "English",
      dir: "ltr",
      docName: "Syrian Arab Republic – Ministry of Justice - Power of Attorney for Real Estate Sale",
      lines: [
        { label: "Details", value: "Notary Public in Babbila (الكاتب بالعدل في ببيلا)" },
        { label: "Special No. (الرقم الخاص)", value: "188" },
        { label: "General No. (الرقم العام)", value: "3380" },
        { label: "Register (السجل)", value: "551" },
        { label: "Title", value: "Power of Attorney for Real Estate Sale (وكالة لبيع عقار)" },
        { label: "Principal (الموكل)", value: "I, the undersigned, Ali Ahmad As-Saaf, son of Ahmad, mother's name Jamila, born in 1952, holder of Identity Card No. 339 issued by the Civil Registry of Al-Mu'adamiyah on 13/12/1999; acting in my capacity as attorney for Mr. [...] under Power of Attorney No. [...] regarding the fourth floor / apartment in plot No. 797, Qabr Essit area;" },
        { label: "Agent / Appointed Attorney (الوكيل)", value: "On this day and date, while in full legal and mental capacity, I have appointed Mrs. Nusrat Fatima Naqvi, daughter of Syed Mohammad, mother's name Maryam Bano, born in 1958, holder of Pakistani Passport No. 456761 issued in Damascus on 29/8/1998;" },
        { label: "Granted Authorities & Powers", value: "To represent me and act on my behalf in selling, legally transferring (Faragh), and registering the entire property / apartment on the fourth floor located in the Qabr Essit real estate zone, to whomever she wishes, including to herself if she desires, for the price she deems appropriate, without requiring my presence. She is fully authorized to represent me before all competent authorities and land registry departments; acknowledge sale, conveyance, and receipt of purchase price; deliver title deeds; process all related formalities, clearances, tax settlements, and applications for building and renovation permits; rectify real estate specifications; and execute all procedures required to give full effect to this power of attorney, with the explicit right to delegate these powers in whole or in part to third parties." },
        { label: "Principal's Signature & Thumb Impression", value: "Ali As-Saaf (Affixed)" },
        { label: "Notary Public Attestation", value: "Formally authenticated, verified, and recorded in the official registers by the Notary Public of Babbila upon payment of all legal stamp duties and statutory fees." },
        { label: "Registration Entry No.", value: "014922" }
      ]
    },
    ar: {
      name: "العربية",
      dir: "rtl",
      docName: "وزارة العدل السورية – وكالة لبيع عقار",
      lines: [
        { label: "تفاصيل", value: "الكاتب بالعدل في ببيلا" },
        { label: "الرقم الخاص", value: "188" },
        { label: "الرقم العام", value: "3380" },
        { label: "السجل", value: "551" },
        { label: "الموضوع", value: "وكالة لبيع عقار" },
        { label: "الموكل", value: "أنا الموقع أدناه علي أحمد الصعاف بن أحمد والدته جميلة تولد 1952 يحمل بطاقة شخصية رقم 339 أمانة المعضمية 13/12/1999؛ بصفتي وكيلاً عن السيد [...] بموجب الوكالة رقم [...] بخصوص الطابق الرابع / شقة في المحضر رقم 797 منطقة قبر الست؛" },
        { label: "الوكيل", value: "بهذا اليوم والتاريخ وأنا بكامل الأهلية القانونية والشرعية، قد وكلت السيدة نصرت فاطمة نقوي بنت سيد محمد والدتها مريم بانو تولد 1958 تحمل جواز سفر باكستاني رقم 456761 صادر في دمشق بتاريخ 29/8/1998؛" },
        { label: "الصلاحيات الممنوحة", value: "لينوب عني ويقوم مقامي ببيع وإفراغ وتسجيل كامل العقار / الشقة في الطابق الرابع الكائن في منطقة قبر الست العقارية لمن يشاء ولمن يرغب وحتى لنفسه بالثمن الذي يراه مناسباً وبدون حضورنا... وله حق توكيل الغير بكل أو ببعض ما وكل به." },
        { label: "توقيع وبصمة الموكل", value: "علي الصعاف" },
        { label: "توثيق الكاتب بالعدل", value: "تم التوثيق والمصادقة والتسجيل في السجلات الرسمية من قبل الكاتب بالعدل في ببيلا بعد استيفاء الرسوم القانونية." },
        { label: "رقم الإيصال", value: "014922" }
      ]
    }
  };
  fs.writeFileSync(file, JSON.stringify(data, null, 2));
  console.log('Successfully updated doc_209');
} else {
  console.log('Error: doc_209 not found');
}
