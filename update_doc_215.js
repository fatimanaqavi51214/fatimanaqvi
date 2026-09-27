const fs = require('fs');
const file = 'E:/2.maan-jee-website/documents_data.json';
const data = JSON.parse(fs.readFileSync(file, 'utf8'));
const docIndex = data.findIndex(d => d.id === 'doc_215');

if (docIndex !== -1) {
  data[docIndex].imageUrl = "https://res.cloudinary.com/b7xbeztp/image/upload/v1790360757/image215.jpg";
  data[docIndex].translations = {
    ur: {
      name: "اردو",
      dir: "rtl",
      docName: "تصفیۂ حسابِ مساحت – معاہدۂ ملکیت ہوٹل کنگ ٹائم",
      lines: [
        { label: "Details", value: "تصفیۂ حسابِ مساحت (رقبے اور حصص کی تقسیم و تصفیہ کا معاہدہ)" },
        { label: "عبارت", value: "\"آج کی تاریخ میں محترمہ نصرت فاطمہ نقوی دختر سید محمد نقوی اور جناب مرتضیٰ بن حمدی الاویس کے درمیان السیدہ زینب کے علاقے میں واقع کنگ ٹائم ہوٹل (فندق الكينغ تايم) میں دونوں فریقین کے حقوق کے تعین پر باہمی اتفاق رائے طے پایا ہے۔ یہ ہوٹل محترمہ نصرت کی ملکیتی اراضی پر جناب مرتضیٰ نے دونوں کے مابین طے پانے والے سابقہ معاہدات کے تحت تعمیر اور مکمل تیار (فنشنگ) کیا ہے۔ ہوٹل کے تمام حصوں اور رقبے کی حتمی پیمائش اور معاہدات کی شرائط کے تصفیے کے بعد، دونوں فریقین نے مکمل رضامندی سے ہوٹل کی حتمی ملکیت کے تناسب پر درج ذیل فیصلہ کیا ہے:\"" },
        { label: "1", value: "پورے ہوٹل کی 42 فیصد ملکیت محترمہ نصرت فاطمہ نقوی کے نام ہوگی۔" },
        { label: "2", value: "پورے ہوٹل کی 58 فیصد ملکیت جناب مرتضیٰ الاویس کے نام ہوگی۔" },
        { label: "نوٹ", value: "واضح رہے: تجارتی دکانیں سابقہ دستخط شدہ معاہدوں کے مطابق جناب مرتضیٰ کی ملکیت رہیں گی۔" },
        { label: "Details", value: "اس طے شدہ تناسب میں فنشنگ کے کاموں کے وہ فرق شامل نہیں ہیں جن کی وضاحت شرائط نامے میں موجود ہے، اور ان پر فریقین کا بعد میں متفق ہونا ضروری ہے۔" },
        { label: "عبارت", value: "مزید برآں، دونوں فریقین کے درمیان مابقیہ مالی واجبات کا تصفیہ اس وقت عمل میں لایا جائے گا جب اس کرایہ داری معاہدے کا حساب مکمل ہو جائے جس کے تحت دونوں فریقین نے یہ ہوٹل جناب علی نعمت زادہ افروزی (ایرانی شہری) کو کرائے پر دیا تھا۔\"" },
        { label: "مقام و تاریخ", value: "دمشق، بتاریخ 15 مارچ 2012ء (بوقت رات 3 بجے)" },
        { label: "دستخط کنندگان", value: "نصرت فاطمہ نقوی (دستخط شدہ) | مرتضیٰ الاویس (دستخط شدہ)" },
        { label: "گواہان", value: "علی الحسین (دستخط شدہ) | جواد حیدر (دستخط شدہ) | مرتضیٰ [...] (دستخط شدہ)" }
      ]
    },
    en: {
      name: "English",
      dir: "ltr",
      docName: "Settlement of Area and Share Calculations (تصفية حساب مساحات)",
      lines: [
        { label: "Details", value: "Settlement of Area and Share Calculations (تصفية حساب مساحات)" },
        { label: "Content", value: "\"On this date, an agreement was reached between Mrs. Nusrat Fatima Naqvi, daughter of Syed Mohammad Naqvi, and Mr. Mourtada son of Hamdi Al-Oweis, regarding the rights of each party in the King Time Hotel located in the Sayyidah Zaynab area. The hotel was constructed and finished (fitted out) by Mr. Mourtada on the real estate plot owned by Mrs. Nusrat, pursuant to the contracts signed between them. Following the final area calculations of the entire hotel, taking into account exchanges and the terms of signed contracts, both parties agreed that the overall ownership and share ratios in the completed hotel are definitively established as follows:\"" },
        { label: "1", value: "42% of the entire hotel is owned by Mrs. Nusrat Fatima Naqvi." },
        { label: "2", value: "58% of the entire hotel is owned by Mr. Mourtada Al-Oweis." },
        { label: "Note", value: "The commercial shops belong to Mr. Mourtada as previously agreed in the signed contracts." },
        { label: "Details", value: "This percentage does not include differences in finishing/fit-out specifications mentioned in the contracts, which shall remain governed by the conditions booklet until agreed upon by both parties." },
        { label: "Content", value: "The remaining mutual financial liabilities shall be cleared after the lease agreement is concluded, under which both parties leased the hotel to Mr. Ali Nemat Zadeh Afrouzi (Iranian national).\"" },
        { label: "Place & Date", value: "Damascus, 15 / 03 / 2012, at 3:00 AM" },
        { label: "Signatures", value: "Nusrat Fatima Naqvi (Signed) | Mourtada Al-Oweis (Signed)" },
        { label: "Witnesses", value: "Ali Al-Hussein (Signed) | Jawad Haider (Signed) | Mourtada [...] (Signed)" }
      ]
    },
    ar: {
      name: "العربية",
      dir: "rtl",
      docName: "تصفية حساب مساحات - فندق الكينغ تايم",
      lines: [
        { label: "تفاصيل", value: "تصفية حساب مساحات" },
        { label: "المحتوى", value: "\"في هذا التاريخ تم الاتفاق بين السيدة نصرت فاطمة نقوي بنت سيد محمد نقوي والسيد مرتضى بن حمدي العويس على تحديد حقوق كل من الطرفين في فندق الكينغ تايم الكائن في منطقة السيدة زينب. حيث تم بناء وتكسية الفندق من قبل السيد مرتضى على العقار المملوك للسيدة نصرت، بناءً على العقود الموقعة بينهما. وبعد الحساب النهائي لمساحات الفندق بالكامل والأخذ بعين الاعتبار المبادلات وشروط العقود، اتفق الطرفان على أن نسبة الملكية النهائية في الفندق تتحدد على النحو التالي:\"" },
        { label: "1", value: "42% من كامل الفندق ملك السيدة نصرت فاطمة نقوي." },
        { label: "2", value: "58% من كامل الفندق ملك السيد مرتضى العويس." },
        { label: "ملاحظة", value: "المحلات التجارية تعود ملكيتها للسيد مرتضى كما هو متفق عليه مسبقاً في العقود الموقعة." },
        { label: "تفاصيل", value: "هذه النسبة لا تشمل فروق الإكساء المذكورة في العقود والتي ستبقى خاضعة لدفتر الشروط حتى يتم التوافق عليها." },
        { label: "المحتوى", value: "أما بقية الذمم المالية المتبادلة بين الطرفين فتتم تصفيتها بعد إتمام حساب عقد الإيجار الذي قام بموجبه الطرفان بتأجير الفندق للسيد علي نعمت زادة أفروزي (إيراني الجنسية).\"" },
        { label: "المكان والتاريخ", value: "دمشق، 15 / 03 / 2012، الساعة 3:00 صباحاً" },
        { label: "التواقيع", value: "نصرت فاطمة نقوي (توقيع) | مرتضى العويس (توقيع)" },
        { label: "الشهود", value: "علي الحسين (توقيع) | جواد حيدر (توقيع) | مرتضى [...] (توقيع)" }
      ]
    }
  };
  fs.writeFileSync(file, JSON.stringify(data, null, 2));
  console.log('Successfully updated doc_215');
} else {
  console.log('Error: doc_215 not found');
}
