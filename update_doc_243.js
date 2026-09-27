const fs = require('fs');
const file = 'E:/2.maan-jee-website/documents_data.json';
const data = JSON.parse(fs.readFileSync(file, 'utf8'));
const docIndex = data.findIndex(d => d.id === 'doc_243');

if (docIndex !== -1) {
  data[docIndex].imageUrl = "https://res.cloudinary.com/b7xbeztp/image/upload/v1790360761/image243.jpg";
  data[docIndex].translations = {
    ur: {
      name: "اردو",
      dir: "rtl",
      docName: "مستوصف الزہراء الخیری ریف دمشق کا خطِ تشکر",
      lines: [
        { label: "Details", value: "سربراہ (لیٹر پیڈ):" },
        { label: "Header 1", value: "هو الشافي (وہی شفا دینے والا ہے)" },
        { label: "Header 2", value: "مستوصف الزہراء الخیری (الزہراء چیریٹیبل ڈسپنسری و کلینک)" },
        { label: "شعبہ جات", value: "امراضِ مخصوصہ، بچوں کا علاج، خواتین، امراضِ جلد، ناک کان گلا، پٹی، بچوں کے حفاظتی ٹیکے، دانتوں کا کلینک، ایکسرے، ای سی جی" },
        { label: "تاریخ", value: "17 جولائی 2007ء" },
        { label: "Details", value: "بنام:" },
        { label: "Name", value: "محترم و معزز وکیل، محترمہ نصرت فاطمہ نقوی" },
        { label: "Details", value: "خط کا متن:" },
        { label: "Content", value: "\"سلامِ مسنون کے بعد؛ ہم اس دلی تشکر اور شکریے کا اظہار کرتے ہیں جو آپ نے ہمارے توسط سے لبنان اور شام کے غریبوں اور ناداروں کے لیے کثیر مقدار میں ملبوسات (کپڑوں) اور گھریلو ساز و سامان (نئے اور استعمال شدہ) پر مشتمل امداد بطور عطیہ پیش کی ہے۔ ہم، انتظامیہ مستوصف الزہراء الخیری، ان عطیہ کردہ اشیاء کی باضابطہ وصولی کے منتظر ہیں تاکہ موصول ہوتے ہی انہیں مستحقین اور غریب خاندانوں میں منصفانہ تقسیم کیا جا سکے۔ اس با برکت اور فضیلت والے مہینے میں اللہ تعالیٰ آپ کو جزائے خیر اور اجرِ عظیم عطا فرمائے۔\"" },
        { label: "دستخط کنندہ", value: "ڈائریکٹر مستوصف الزہراء الخیری (دستخط شدہ)" },
        { label: "سرکاری مہر", value: "مستوصف الزہراء الخیری، السیدہ زینب، ریف دمشق کی باضابطہ مہر ثبت ہے۔" },
        { label: "پتہ و اوقاتِ کار", value: "السیدہ زینب (ع)، مفرق حجیرہ | اوقات: صبح و شام۔" }
      ]
    },
    en: {
      name: "English",
      dir: "ltr",
      docName: "Al-Zahra Charitable Dispensary - Letter of Thanks",
      lines: [
        { label: "Details", value: "Header:" },
        { label: "Header 1", value: "He is the Healer (هو الشافي)" },
        { label: "Header 2", value: "Al-Zahra Charitable Dispensary (مستوصف الزهراء الخيري)" },
        { label: "Services", value: "Internal Medicine – Pediatrics – Gynecology – Dermatology – ENT – Wound Dressing – Pediatric Vaccinations – Dental Clinic – Radiology – ECG" },
        { label: "Date", value: "17 / 07 / 2007" },
        { label: "Details", value: "Addressed to:" },
        { label: "Name", value: "Respected Advocate / Lawyer Mrs. Nusrat Fatima Naqvi" },
        { label: "Details", value: "Letter Body:" },
        { label: "Content", value: "\"After greetings; We express our heartfelt gratitude and thanks for your generous donation through us to the poor and needy in Lebanon and Syria, comprising a large quantity of clothing and household appliances, both used and new. We, the management of Al-Zahra Charitable Dispensary, are currently awaiting the safe arrival of these gifted items so that they may be properly distributed to deserving individuals and needy families upon receipt. May God Almighty grant you abundant reward and blessings in this noble and virtuous month.\"" },
        { label: "Signatory", value: "Director of Al-Zahra Charitable Dispensary: Dr. [...] (Signed)" },
        { label: "Official Seal", value: "Affixed with the circular seal of Al-Zahra Charitable Dispensary, Sayyidah Zaynab, Rif Dimashq" },
        { label: "Address & Working Hours", value: "Sayyidah Zaynab (A.S.), Hujeira Junction | Hours: Morning & Evening shifts." }
      ]
    },
    ar: {
      name: "العربية",
      dir: "rtl",
      docName: "رسالة شكر من مستوصف الزهراء الخيري",
      lines: [
        { label: "تفاصيل", value: "الترويسة:" },
        { label: "العنوان 1", value: "هو الشافي" },
        { label: "العنوان 2", value: "مستوصف الزهراء الخيري" },
        { label: "الخدمات", value: "باطنية – أطفال – نسائية – جلدية – أذن أنف حنجرة – ضماد – لقاح أطفال – عيادة أسنان – أشعة – تخطيط قلب" },
        { label: "التاريخ", value: "17 / 07 / 2007" },
        { label: "تفاصيل", value: "مرسل إلى:" },
        { label: "الاسم", value: "المحترمة المحامية السيدة نصرت فاطمة نقوي" },
        { label: "تفاصيل", value: "نص الرسالة:" },
        { label: "المحتوى", value: "\"بعد التحية؛ نعرب عن خالص شكرنا وتقديرنا العميق لتبرعكم السخي عبرنا للفقراء والمحتاجين في لبنان وسوريا، والمكون من كمية كبيرة من الملابس والأدوات المنزلية، سواء المستعملة أو الجديدة. نحن في إدارة مستوصف الزهراء الخيري بانتظار وصول هذه المواد الموهوبة بسلام ليتم توزيعها بشكل صحيح على مستحقيها من الأفراد والعائلات المحتاجة فور استلامها. نسأل الله تعالى أن يمنحكم الأجر العظيم والبركات في هذا الشهر الفضيل والمبارك.\"" },
        { label: "الموقع", value: "مدير مستوصف الزهراء الخيري: د. [...] (توقيع)" },
        { label: "الختم الرسمي", value: "ممهور بالختم الدائري لمستوصف الزهراء الخيري، السيدة زينب، ريف دمشق" },
        { label: "العنوان وأوقات الدوام", value: "السيدة زينب (ع)، مفرق حجيرة | الدوام: فترتان صباحية ومسائية." }
      ]
    }
  };
  fs.writeFileSync(file, JSON.stringify(data, null, 2));
  console.log('Successfully updated doc_243');
} else {
  console.log('Error: doc_243 not found');
}
