const fs = require('fs');
const file = 'E:/2.maan-jee-website/documents_data.json';
const data = JSON.parse(fs.readFileSync(file, 'utf8'));
const docIndex = data.findIndex(d => d.id === 'doc_237');

if (docIndex !== -1) {
  data[docIndex].imageUrl = "https://res.cloudinary.com/b7xbeztp/image/upload/v1790360761/image237.jpg";
  data[docIndex].translations = {
    ur: {
      name: "اردو",
      dir: "rtl",
      docName: "المجمع العالمي لأهل البيت في سورية (عالمی اہل بیت اسمبلی – شام برانچ) کا مکتوب",
      lines: [
        { label: "Details", value: "سربراہ اور ادارے کے کوائف:" },
        { label: "ادارہ", value: "المجمع العالمي لأهل البيت في سورية (عالمی اہل بیت اسمبلی – شام برانچ)" },
        { label: "تاریخ", value: "1424ھ / 2003ء" },
        { label: "پتہ و رابطہ", value: "دمشق – السیدہ زینب (ع)، حوزہ علمیہ امام خمینی کے بالمقابل، ٹیلی فون / فیکس: 429759" },
        { label: "Details", value: "متنِ مکتوب:" },
        { label: "Header", value: "بسمہ تعالیٰ" },
        { label: "Greeting", value: "سلام علیکم" },
        { label: "Addressed", value: "جناب حجۃ الاسلام والمسلمین حاج آقا [...] دامت برکاتہ" },
        { label: "Content", value: "بعد از سلام و دعائے خیر، جیسا کہ مجمع اہل بیت (ع) کے علم میں لایا گیا ہے کہ السیدہ زینب (قبر الست) کے علاقے میں واقع زمین کا ایک قطعہ المجمع العالمي لأهل البيت (ع) فی سوریا کے نام وقف / ہبہ کیا گیا ہے۔ مذکورہ اراضی کی خیراتی و فلاحی مقاصد کے لیے تفویض اور اس سلسلے میں آپ کی مخلصانہ مساعی کے اعتراف کے ساتھ، یہ مجمع آپ کا صمیم قلب سے شکریہ ادا کرتا ہے۔ امید ہے کہ اس اراضی کو پاکستانی طلباء اور زائرین کے لیے فلاحی مرکز اور مناسب سہولیات کی فراہمی کے لیے بروئے کار لایا جائے گا۔ اللہ تعالیٰ آپ کی خدمات کو شرفِ قبولیت بخشے اور توفیقات میں اضافہ فرمائے۔" },
        { label: "Details", value: "مہر و دستخط:" },
        { label: "1", value: "ادارے کی باضابطہ گول مہر: المجمع العالمي لأهل البيت في سورية" },
        { label: "2", value: "نمائندہ / ڈائریکٹر مجمع اہل بیت شام کے دستخط" }
      ]
    },
    en: {
      name: "English",
      dir: "ltr",
      docName: "The Ahl al-Bayt (a.s.) World Assembly – Branch in Syria Letter",
      lines: [
        { label: "Details", value: "Header & Issuer Details:" },
        { label: "Organization", value: "The Ahl al-Bayt (a.s.) World Assembly – Branch in Syria (المجمع العالمي لأهل البيت في سورية)" },
        { label: "Date", value: "1424 A.H. / 2003 A.D." },
        { label: "Location & Contact", value: "Damascus – Sayyidah Zaynab (a.s.), Opposite Imam Khomeini Seminary (Quds Sirruh), Tel/Fax: 429759" },
        { label: "Details", value: "Letter Text:" },
        { label: "Header", value: "In the Name of God, The Most Exalted" },
        { label: "Greeting", value: "Salam Alaykum" },
        { label: "Addressed", value: "Respected Hojjat al-Islam wal-Muslimeen Hajj Aqa [...] (May his blessings continue)," },
        { label: "Content", value: "Following greetings and sincere wishes, as brought to the attention of the Ahl al-Bayt (a.s.) Assembly, a plot of land situated in the area of Sayyidah Zaynab (Qabr Essit) has been donated/endowed in the name of the Ahl al-Bayt (a.s.) World Assembly in Syria. While wishing success for your distinguished self, and expressing our deep gratitude and heartfelt appreciation for this generous and dedicated act, this Assembly extends its thanks. It is hoped that this land will be utilized to establish appropriate infrastructure and welfare facilities for Pakistani students and pilgrims. May God Almighty accept this noble service and increase your success." },
        { label: "Details", value: "Signatures & Seal:" },
        { label: "1", value: "Official round stamp of The Ahl al-Bayt (a.s.) World Assembly in Syria" },
        { label: "2", value: "Signature of the Director / Representative of the Assembly in Syria" }
      ]
    },
    ar: {
      name: "العربية / فارسی",
      dir: "rtl",
      docName: "رسالة المجمع العالمي لأهل البيت (ع) – فرع سورية",
      lines: [
        { label: "تفاصيل", value: "الترويسة وبيانات المصدر:" },
        { label: "المؤسسة", value: "المجمع العالمي لأهل البيت (ع) – فرع سورية" },
        { label: "التاريخ", value: "1424 هـ / 2003 م" },
        { label: "الموقع والاتصال", value: "دمشق – السيدة زينب (ع)، مقابل حوزة الإمام الخميني (قدس سره)، هاتف/فاكس: 429759" },
        { label: "تفاصيل", value: "نص الرسالة:" },
        { label: "العنوان", value: "بسمه تعالى" },
        { label: "التحية", value: "سلام عليكم" },
        { label: "مرسل إلى", value: "فضيلة حجة الإسلام والمسلمين الحاج آقا [...] دامت بركاته،" },
        { label: "المحتوى", value: "بعد التحية والدعاء، كما عُرض على مجمع أهل البيت (ع)، فقد تم التبرع/وقف قطعة أرض تقع في منطقة السيدة زينب (قبر الست) باسم المجمع العالمي لأهل البيت (ع) في سورية. ومع تمنياتنا لفضيلتكم بالتوفيق، والتعبير عن خالص شكرنا وتقديرنا القلبي لهذا العمل السخي والمخلص، يتقدم هذا المجمع بالشكر الجزيل. ويأمل أن تستغل هذه الأرض لإقامة بنية تحتية مناسبة ومرافق رعاية للطلاب والزوار الباكستانيين. تقبل الله تعالى هذا العمل النبيل وزاد من توفيقكم." },
        { label: "تفاصيل", value: "التواقيع والأختام:" },
        { label: "1", value: "الختم الدائري الرسمي للمجمع العالمي لأهل البيت (ع) في سورية" },
        { label: "2", value: "توقيع مدير / ممثل المجمع في سورية" }
      ]
    }
  };
  fs.writeFileSync(file, JSON.stringify(data, null, 2));
  console.log('Successfully updated doc_237');
} else {
  console.log('Error: doc_237 not found');
}
