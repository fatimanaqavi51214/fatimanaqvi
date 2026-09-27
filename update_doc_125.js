const fs = require('fs');
const file = 'E:/2.maan-jee-website/documents_data.json';
const data = JSON.parse(fs.readFileSync(file, 'utf8'));
const docIndex = data.findIndex(d => d.id === 'doc_125');

if (docIndex !== -1) {
  data[docIndex].imageUrl = "https://res.cloudinary.com/b7xbeztp/image/upload/v1790360739/image125.jpg";
  data[docIndex].translations = {
    ur: {
      name: "اردو",
      dir: "rtl",
      docName: "معاہدۂ بیع قطعی (حتمی بیع نامہ)",
      lines: [
        { label: "Details", value: "فریقین دستخط کنندگان ذیل:" },
        { label: "فریق اول (بیچنے والا / بائع)", value: "مکمل نام: علی الصعاف | والد کا نام: احمد | والدہ کا نام: جمیلہ | مقام و تاریخِ پیدائش: بصرہ، 1952ء | شناختی کارڈ نمبر: نفوس المعضمیہ سے جاری کردہ، نمبر 22201949، بتاریخ: 23/12/1996ء | موجودہ رہائش: السیدہ زینب" },
        { label: "فریق دوم (خریدنے والی / مشتری)", value: "مکمل نام: نصرت فاطمہ | والد کا نام: سید محمد | والدہ کا نام: مہر بانو | مقام و تاریخِ پیدائش: کراچی، 1958ء | شناختی اندراج: غیر ملکیوں کے رجسٹر میں درج اندراج، بتاریخ: 29/10/1996ء | موجودہ رہائش: دمشق" },
        { label: "Details", value: "باہمی شرائط و مندرجات:" },
        { label: "پہلی شق", value: "فریق اول نے فریق دوم کے ہاتھ حتمی، قطعی اور ناقابلِ تنسیخ طور پر وہ اپارٹمنٹ فروخت کر دیا جو ریئل اسٹیٹ پلاٹ نمبر 797 واقع قبر الست (السیدہ زینب) میں واقع ہے، جو عمارت کی 5ویں منزل پر مشتمل ہے اور شرعی و قانونی اعتبار سے ملکِ خالص ہے۔ اس کا کل طے شدہ بدل (قیمتِ فروخت) بیس لاکھ (2,000,000) شامی لیرا مقرر پایا ہے۔" },
        { label: "دوسری شق", value: "فریق دوم نے فریق اول سے مذکورہ جائیداد کو طے شدہ رقم اور درج شرائط کے تحت خریدنا قبول کر لیا۔" },
        { label: "تیسری شق", value: "فریق اول پابند ہے کہ وہ خریدی گئی جائیداد کو ہر قسم کے قانونی تنازعات اور انتقالِ ملکیت (فراغ) میں مانع تمام رکاوٹوں سے پاک کر کے حوالے کرے۔" },
        { label: "چوتھی شق", value: "تعمیراتی اوصاف اور ٹیکس کی ادائیگی کے ضوابط (اضافی اندراج کے تحت جائیداد کا قبضہ 1/4/2000ء کو سونپا جا چکا ہے)۔" },
        { label: "پانچویں و چھٹی شق", value: "رجسٹری ڈاک کے ذریعے اطلاع، بقایا رقم اور غیر حاضری پر نادہندگی کی شرائط۔" },
        { label: "ساتویں شق", value: "کارروائی مکمل ہونے پر دمشق میں انتقالِ اراضی کے معاون دفتر کے سامنے 15 دن میں پیش ہو کر قانونی انتقال مکمل کرنے کی پابندی۔" },
        { label: "آٹھویں شق", value: "فریق دوم نے معاہدے پر دستخط کے وقت طے شدہ قیمت کے مکمل بیس لاکھ (2,000,000) شامی لیرا نقد فریق اول کو ادا کر دیے ہیں، اور کوئی رقم واجب الادا باقی نہیں ہے۔" },
        { label: "نویں شق", value: "قبضے سے قبل کے تمام سرکاری ٹیکس فریق اول اور بعد کے جملہ اخراجات و ٹیکس فریق دوم کے ذمہ ہوں گے۔" },
        { label: "دسویں تا بارہویں شق", value: "عدالتی نوٹسز کے لیے مستقل پتے کا تعین، معاہدے کی دو اصل نقول کی تیاری، اور خلاف ورزی کی صورت میں ہرجانے کی پابندی۔" },
        { label: "تاریخِ تحریر", value: "28 فروری 2000ء" },
        { label: "دستخط", value: "دستخط فریق اول: علی الصعاف | دستخط فریق دوم: نصرت فاطمہ" },
        { label: "گواہان", value: "مرتضیٰ الحسینی، نزار اسعد" }
      ]
    },
    en: {
      name: "English",
      dir: "ltr",
      docName: "Final Sale Contract",
      lines: [
        { label: "Details", value: "The Two Undersigned Parties:" },
        { label: "First Party (Seller)", value: "Full Name: Ali As-Saaf | Father's Name: Ahmad | Mother's Name: Jamila | Place and Date of Birth: Al-Basrah, 1952 | National ID Card No.: Issued by Civil Registry of Al-Mu'adamiyah, No. 22201949, Date: 23/12/1996 | Current Residence: Sayyidah Zaynab" },
        { label: "Second Party (Buyer)", value: "Full Name: Nusrat Fatima | Father's Name: Syed Mohammad | Mother's Name: Mehar Bano | Place and Date of Birth: Karachi, 1958 | ID/Registration No.: Entry recorded in Foreigners' Registry, No. ..., Date: 29/10/1996 | Current Residence: Damascus" },
        { label: "Details", value: "Agreed Terms and Conditions:" },
        { label: "Article 1", value: "The First Party has sold to the Second Party, definitively and irrevocably, the property (apartment) located in real estate plot No. 797, Qabr Essit (Sayyidah Zaynab) area, situated on the 5th floor, freehold ownership (Milq), for a total consideration of two million (2,000,000) Syrian Pounds." },
        { label: "Article 2", value: "The Second Party has formally accepted the purchase based on the agreed price and terms." },
        { label: "Article 3", value: "The First Party guarantees the handover of the premises free from encumbrances preventing ownership transfer (Faragh)." },
        { label: "Article 4", value: "Demarcation and handover terms (handover completed as recorded on 1/4/2000)." },
        { label: "Article 5 & 6", value: "Timelines for registration, notification by registered post, and forfeiture conditions." },
        { label: "Article 7", value: "Obligation to appear before the land registry assistant in Damascus to finalize registration within 15 days of notification." },
        { label: "Article 8", value: "The Second Party has paid the entire sum of 2,000,000 Syrian Pounds in full to the First Party at the time of signing." },
        { label: "Article 9", value: "Division of taxes and municipal obligations (pre-delivery to seller, post-delivery to buyer)." },
        { label: "Article 10, 11 & 12", value: "Domicile declaration, execution in duplicate, and liquidated damages in case of default." },
        { label: "Execution Date", value: "28 / 02 / 2000" },
        { label: "Signatures", value: "First Party (Seller): Ali As-Saaf (Signed) | Second Party (Buyer): Nusrat Fatima (Signed)" },
        { label: "Witnesses", value: "Mourtada Al-Husseini, Nizar As'ad" }
      ]
    },
    ar: {
      name: "العربية",
      dir: "rtl",
      docName: "عقد بيع قطعي",
      lines: [
        { label: "تفاصيل", value: "الفريقان الموقعان أدناه:" },
        { label: "الفريق الأول (البائع)", value: "الاسم الكامل: علي الصعاف | اسم الأب: أحمد | اسم الأم: جميلة | مكان وتاريخ الولادة: البصرة، 1952 | رقم البطاقة الشخصية: صادرة عن أمانة سجل مدني المعضمية، رقم 22201949، بتاريخ: 23/12/1996 | الإقامة الحالية: السيدة زينب" },
        { label: "الفريق الثاني (المشتري)", value: "الاسم الكامل: نصرت فاطمة | اسم الأب: سيد محمد | اسم الأم: مهر بانو | مكان وتاريخ الولادة: كراتشي، 1958 | رقم التسجيل: قيد الأجانب، رقم ...، بتاريخ: 29/10/1996 | الإقامة الحالية: دمشق" },
        { label: "تفاصيل", value: "الشروط والأحكام المتفق عليها:" },
        { label: "البند الأول", value: "باع الفريق الأول للفريق الثاني بيعاً قطعياً وباتاً لا رجوع فيه العقار (الشقة) الكائن في العقار رقم 797 منطقة قبر الست (السيدة زينب)، الواقع في الطابق الخامس، ملكاً صرفاً، ببدل إجمالي قدره مليوني (2,000,000) ليرة سورية." },
        { label: "البند الثاني", value: "قبل الفريق الثاني الشراء بالسعر والشروط المتفق عليها." },
        { label: "البند الثالث", value: "يضمن الفريق الأول تسليم المبيع خالياً من أي إشارات مانعة للفراغ." },
        { label: "البند الرابع", value: "شروط الاستلام والتسليم (تم التسليم كما هو مدون في 1/4/2000)." },
        { label: "البند الخامس والسادس", value: "المهل الزمنية للتسجيل، التبليغ بالبريد المسجل، وشروط النكول." },
        { label: "البند السابع", value: "الالتزام بالحضور أمام معاون السجل العقاري في دمشق لإتمام الفراغ خلال 15 يوماً من التبليغ." },
        { label: "البند الثامن", value: "سدد الفريق الثاني كامل المبلغ وقدره 2,000,000 ليرة سورية نقداً للفريق الأول عند التوقيع." },
        { label: "البند التاسع", value: "تقاسم الضرائب والرسوم البلدية (ما قبل التسليم على البائع، وما بعده على المشتري)." },
        { label: "البند العاشر حتى الثاني عشر", value: "اتخاذ الموطن المختار، تنظيم العقد على نسختين، والشرط الجزائي عند النكول." },
        { label: "تاريخ التنظيم", value: "28 / 02 / 2000" },
        { label: "التواقيع", value: "الفريق الأول (البائع): علي الصعاف (توقيع) | الفريق الثاني (المشتري): نصرت فاطمة (توقيع)" },
        { label: "الشهود", value: "مرتضى الحسيني، نزار أسعد" }
      ]
    }
  };
  fs.writeFileSync(file, JSON.stringify(data, null, 2));
  console.log('Successfully updated doc_125');
} else {
  console.log('Error: doc_125 not found');
}
