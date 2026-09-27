const fs = require('fs');
const file = 'E:/2.maan-jee-website/documents_data.json';
const data = JSON.parse(fs.readFileSync(file, 'utf8'));
const docIndex = data.findIndex(d => d.id === 'doc_201');

if (docIndex !== -1) {
  data[docIndex].imageUrl = "https://res.cloudinary.com/b7xbeztp/image/upload/v1790360756/image201.jpg";
  data[docIndex].translations = {
    ur: {
      name: "اردو",
      dir: "rtl",
      docName: "عقد بيع قطعي (حتمی بیع نامہ برائے اپارٹمنٹ)",
      lines: [
        { label: "Details", value: "فریقین دستخط کنندگان ذیل:" },
        { label: "فریق اول (فروخت کنندہ / بائع)", value: "پورا نام: علی احمد الصعاف | والد کا نام: احمد | والدہ کا نام: جمیلہ | مقام و تاریخِ پیدائش: بصرہ، 1952ء | شناختی کارڈ نمبر: 339، جاری کردہ دفترِ نفوس المعضمیہ بتاریخ 13/7/1997ء | موجودہ رہائش: السیدہ زینب" },
        { label: "فریق دوم (خریدنے والا / مشتری)", value: "پورا نام: نصرت فاطمہ | والد کا نام: سید محمد | والدہ کا نام: مریم بانو | مقام و تاریخِ پیدائش: کراچی، 1958ء | شناختی اندراج: دمشق میں اجنبیوں کے رجسٹر کا اندراج نمبر 05461 بتاریخ 29/10/1997ء | موجودہ رہائش: دمشق" },
        { label: "معاہدہ", value: "ہم فریقین نے شرعی اور قانونی طور پر مکمل اہلیت کے ساتھ درج ذیل شرائط پر یہ معاہدہ طے کیا ہے:" },
        { label: "پہلی شق", value: "فریق اول نے فریق دوم کے ہاتھ حتمی اور قطعی طور پر وہ اپارٹمنٹ فروخت کر دیا ہے جو چوتھی منزل پر واقع ہے، اور ریئل اسٹیٹ پلاٹ نمبر 797 واقع علاقہ قبر الست (السیدہ زینب) کا حصہ ہے، قانونی حیثیت سے ملکِ خالص (Freehold) ہے، اور اس کی کل قیمت بائیس لاکھ پچاس ہزار (2,250,000) شامی لیرا طے پائی ہے، بمعہ کمیشن کی ادائیگی کا عہد۔" },
        { label: "دوسری شق", value: "فریق دوم نے فریق اول سے مذکورہ فلیٹ کو طے شدہ قیمت اور معاہدے کی تمام شرائط کے تحت خریدنا قبول کر لیا۔" },
        { label: "تیسری شق", value: "فریق اول پابند ہے کہ وہ خریدی گئی جائیداد کو ہر قسم کے نزاع یا انتقالِ ملکیت (فراغ) میں رکاوٹ بننے والے مسائل سے پاک کر کے مقررہ وقت پر حوالے کرے۔" },
        { label: "چوتھی شق", value: "تعمیر و تقسیم سے متعلق اخراجات مروجہ ضوابط کے تحت ہوں گے۔ (دستاویز پر ہاتھ سے لکھی گئی نوٹ کے مطابق فلیٹ کا قبضہ 1/4/2000ء کو فریق دوم کو باضابطہ سونپ دیا گیا ہے)۔" },
        { label: "پانچویں تا ساتویں شق", value: "خط و کتابت، نوٹسز اور دمشق کے دفتر اراضی میں باضابطہ پیشی سے متعلق معیاری قانونی طریقہ کار۔" },
        { label: "آٹھویں شق", value: "فریق دوم نے کل قیمت بائیس لاکھ پچاس ہزار (2,250,000) شامی لیرا کی رقم نقد فریق اول کو ادا کر دی ہے، اور تمام طے شدہ رقم مکمل طور پر بے باق ہو چکی ہے۔" },
        { label: "نویں شق", value: "قبضے سے قبل کے تمام تر ٹیکس فریق اول کے ذمہ ہوں گے، اور اس کے بعد کے تمام محصولات، پانی، بجلی وغیرہ فریق دوم کے ذمہ ہوں گے۔" },
        { label: "دسویں تا بارہویں شق", value: "معاہدے میں درج پتے قانونی مراسلت کے لیے حتمی ہیں، معاہدہ دو نقول میں تیار کیا گیا، اور خلاف ورزی پر ہرجانے کی پابندی عائد ہوگی۔" },
        { label: "تاریخِ تحریر", value: "28 فروری 2000ء" },
        { label: "اوپر درج تحریر", value: "\"تم تسليم الشقة رقم (4) للفريق الثاني\" (اپارٹمنٹ نمبر 4 فریق دوم کے حوالے کر دیا گیا ہے)۔" },
        { label: "دستخط کنندگان", value: "فریق اول (بائع): علی الصعاف | فریق دوم (مشتری): نصرت فاطمہ | گواہان: مرتضیٰ الحسینی، نزار اسعد" }
      ]
    },
    en: {
      name: "English",
      dir: "ltr",
      docName: "Final Sale Contract (عقد بيع قطعي)",
      lines: [
        { label: "Details", value: "The Two Undersigned Parties:" },
        { label: "First Party (Seller)", value: "Full Name: Ali Ahmad As-Saaf | Father's Name: Ahmad | Mother's Name: Jamila | Place & Date of Birth: Basra, 1952 | ID Card No.: 339, issued by the Civil Registry of Al-Mu'adamiyah on 13/7/1997 | Current Residence: Sayyidah Zaynab" },
        { label: "Second Party (Buyer)", value: "Full Name: Nusrat Fatima | Father's Name: Syed Mohammad | Mother's Name: Maryam Bano | Place & Date of Birth: Karachi, 1958 | ID Registration: Damascus (Foreigners' Registry), No. 05461 dated 29/10/1997 | Current Residence: Damascus" },
        { label: "Agreement", value: "Both parties, in full legal and shar'i capacity, have agreed to the following terms and conditions:" },
        { label: "Clause 1", value: "The First Party has sold to the Second Party, definitively and irrevocably, the property (apartment) located on the 4th floor, part of real estate plot No. 797 in the Qabr Essit (Sayyidah Zaynab) area, freehold ownership (Milq), for a total consideration of Two Million Two Hundred and Fifty Thousand (2,250,000) Syrian Pounds, with an undertaking to pay the commission." },
        { label: "Clause 2", value: "The Second Party accepted the purchase of the aforementioned real estate from the First Party for the agreed price, subject to the conditions set forth herein." },
        { label: "Clause 3", value: "The First Party undertakes to deliver the property free from all disputes or encumbrances preventing legal transfer (Faragh)." },
        { label: "Clause 4", value: "Building subdivision and property specification expenses shall be borne according to regular regulations. (A handwritten note indicates that delivery of the apartment to the Second Party was officially completed on 1/4/2000)." },
        { label: "Clause 5–7", value: "Standard notifications, delivery terms, and procedures for appearance before the land registry assistant in Damascus." },
        { label: "Clause 8", value: "The Second Party has paid Two Million Two Hundred and Fifty Thousand (2,250,000) Syrian Pounds in cash directly to the First Party, completing the entire sale consideration in full with no outstanding balance." },
        { label: "Clause 9", value: "All previous property taxes remain the responsibility of the First Party; thereafter, all taxes and utility charges are borne by the Second Party." },
        { label: "Clause 10–12", value: "Legal notices addresses, execution in two original counterparts, and standard penalty clause for breach of contract." },
        { label: "Date of Execution", value: "28 / 2 / 2000" },
        { label: "Top Handwritten Note", value: "\"تم تسليم الشقة رقم (4) للفريق الثاني\" (Apartment No. 4 has been handed over to the Second Party)." },
        { label: "Signatures", value: "First Party: Ali As-Saaf (Signed) | Second Party: Nusrat Fatima (Signed) | Witnesses: Mourtada Al-Hussein, Nizar As'ad (Signed)" }
      ]
    },
    ar: {
      name: "العربية",
      dir: "rtl",
      docName: "عقد بيع قطعي",
      lines: [
        { label: "تفاصيل", value: "الفريقان الموقعان أدناه:" },
        { label: "الفريق الأول (البائع)", value: "الاسم الكامل: علي أحمد الصعاف | اسم الأب: أحمد | اسم الأم: جميلة | مكان وتاريخ الولادة: البصرة، 1952 | رقم البطاقة الشخصية: 339، صادرة عن أمانة السجل المدني في المعضمية بتاريخ 13/7/1997 | مكان الإقامة الحالي: السيدة زينب" },
        { label: "الفريق الثاني (المشتري)", value: "الاسم الكامل: نصرت فاطمة | اسم الأب: سيد محمد | اسم الأم: مريم بانو | مكان وتاريخ الولادة: كراتشي، 1958 | تسجيل الهوية: دمشق (سجل الأجانب)، رقم 05461 بتاريخ 29/10/1997 | مكان الإقامة الحالي: دمشق" },
        { label: "الاتفاق", value: "اتفق الفريقان وهما بكامل أهليتهما القانونية والشرعية على الشروط التالية:" },
        { label: "البند الأول", value: "باع الفريق الأول للفريق الثاني بيعاً قطعياً لا رجوع فيه، العقار (شقة) الكائن في الطابق الرابع من المحضر رقم 797 منطقة قبر الست (السيدة زينب)، ملكاً خالصاً، لقاء بدل إجمالي قدره مليونان ومائتان وخمسون ألف (2,250,000) ليرة سورية، مع التعهد بدفع العمولة." },
        { label: "البند الثاني", value: "قبل الفريق الثاني شراء العقار المذكور من الفريق الأول بالثمن المتفق عليه ووفق الشروط المبينة فيه." },
        { label: "البند الثالث", value: "يتعهد الفريق الأول بتسليم العقار خالياً من أي نزاع أو إشارات مانعة من الفراغ القانوني." },
        { label: "البند الرابع", value: "نفقات الإفراز وتحديد العقار تقع على عاتق الشاري. (ملاحظة بخط اليد تشير إلى أن تسليم الشقة للفريق الثاني تم بتاريخ 1/4/2000)." },
        { label: "البند الخامس-السابع", value: "إجراءات التسليم والتخطر والمثول أمام معاون السجل العقاري في دمشق." },
        { label: "البند الثامن", value: "دفع الفريق الثاني مبلغ مليونان ومائتان وخمسون ألف (2,250,000) ليرة سورية نقداً للفريق الأول، وبذلك تم استيفاء كامل ثمن المبيع." },
        { label: "البند التاسع", value: "تبقى جميع الضرائب السابقة على العقار على عاتق الفريق الأول؛ وبعد ذلك، يتحمل الفريق الثاني كافة الضرائب ورسوم الخدمات." },
        { label: "البند العاشر-الثاني عشر", value: "عناوين التبليغ القانونية، وتحرير العقد على نسختين أصليتين، والشرط الجزائي المعياري في حال الإخلال بالعقد." },
        { label: "تاريخ العقد", value: "28 / 2 / 2000" },
        { label: "ملاحظة علوية بخط اليد", value: "\"تم تسليم الشقة رقم (4) للفريق الثاني\"" },
        { label: "التواقيع", value: "الفريق الأول (البائع): علي الصعاف (توقيع) | الفريق الثاني (المشتري): نصرت فاطمة (توقيع) | الشهود: مرتضى الحسيني، نزار أسعد (توقيع)" }
      ]
    }
  };
  fs.writeFileSync(file, JSON.stringify(data, null, 2));
  console.log('Successfully updated doc_201');
} else {
  console.log('Error: doc_201 not found');
}
