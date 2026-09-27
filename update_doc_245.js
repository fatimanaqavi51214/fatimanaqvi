const fs = require('fs');
const file = 'E:/2.maan-jee-website/documents_data.json';
const data = JSON.parse(fs.readFileSync(file, 'utf8'));
const docIndex = data.findIndex(d => d.id === 'doc_245');

if (docIndex !== -1) {
  data[docIndex].imageUrl = "https://res.cloudinary.com/b7xbeztp/image/upload/v1790360765/image245.jpg";
  data[docIndex].translations = {
    ur: {
      name: "اردو",
      dir: "rtl",
      docName: "ثقافتی قونصل خانہ سفارتِ ایران (دمشق) کا خط",
      lines: [
        { label: "Details", value: "سربراہ (لیٹر ہیڈ):" },
        { label: "Header 1", value: "سازمانِ فرہنگ و ارتباطاتِ اسلامی" },
        { label: "Header 2", value: "ثقافتی مرکز / سفارت خانہ اسلامی جمہوریہ ایران – دمشق (رایزنی فرہنگی)" },
        { label: "خط نمبر", value: "52/2/669" },
        { label: "تاریخ", value: "31 شہریور 1380 ہجری شمسی" },
        { label: "Title", value: "\"بسمہ تعالیٰ\"" },
        { label: "Details", value: "بنام:" },
        { label: "Name 1", value: "جناب محترم آقای عبد خدایی صاحب" },
        { label: "Name 2", value: "محترم ثقافتی قونصلر، سفارت خانہ اسلامی جمہوریہ ایران بمقام میڈرڈ (اسپین)" },
        { label: "Details", value: "متنِ مکتوب (فارسی سے اردو ترجمہ):" },
        { label: "Content", value: "\"سلام علیکم، با ادب گزارش ہے کہ محترمہ نصرت فاطمہ نقوی (اہلِ پاکستان) کو آپ کی معزز خدمت میں متعارف کروایا جاتا ہے۔ موصوفہ ایک با ایمان، فعال اور مذہبی ثقافت اور مکتبِ اہل بیت (علیہم السلام) کے فروغ میں سرگرم عمل معزز خاتون ہیں۔ وہ فی الوقت شام میں مقیم ہیں اور اسپین میں آباد شیعہ برادری اور ان کے دینی و سماجی معاملات کو منظم کرنے کے لیے وہاں ایک حسینیہ / اسلامی مرکز، اسکول یا اسی طرز کے دیگر فلاحی منصوبوں میں سرمایہ کاری کرنے اور معاونت فراہم کرنے کا پختہ ارادہ رکھتی ہیں۔ یقیناً اس سلسلے میں آپ کی محترم رایزنی (ثقافتی قونصل خانے) کی ہدایات، آراء اور رہنمائی سے استفادہ کرنا نہایت مؤثر اور کارآمد ثابت ہوگا۔ آپ کی خصوصی توجہ اور نوازش کا دلی شکریہ۔\"" },
        { label: "Signatory 1", value: "ڈاکٹر محمد علی آذرشب" },
        { label: "Signatory 2", value: "ثقافتی قونصلر، سفارت خانہ اسلامی جمہوریہ ایران، دمشق (دستخط شدہ)" },
        { label: "Details", value: "رابطہ و پتہ (نچلا حصہ):" },
        { label: "Footer", value: "شام – دمشق | فون: 2311149 – 2311151 | فیکس: 2311147 | ڈاک بکس: 9351 | ای میل: ir-farhangi2@mail.sy" }
      ]
    },
    en: {
      name: "English",
      dir: "ltr",
      docName: "Cultural Center of the Islamic Republic of Iran, Damascus - Letter",
      lines: [
        { label: "Details", value: "Header:" },
        { label: "Header 1", value: "Islamic Culture and Relations Organization (سازمان فرهنگ و ارتباطات اسلامی)" },
        { label: "Header 2", value: "Cultural Center / Attache of the Islamic Republic of Iran – Damascus (رایزنی فرهنگی جمهوری اسلامی ایران - دمشق)" },
        { label: "Reference No.", value: "52/2/669" },
        { label: "Date", value: "31 / 6 / 1380 (Solar Hijri)" },
        { label: "Title", value: "\"In the Name of God, The Exalted\" (بسمه تعالی)" },
        { label: "Details", value: "Addressed to:" },
        { label: "Name 1", value: "Respected Mr. Abd-Khodayi" },
        { label: "Name 2", value: "Respected Cultural Counselor of the Islamic Republic of Iran in Madrid (Spain)" },
        { label: "Details", value: "Salutation & Body (Persian Transcript & Translation):" },
        { label: "Content", value: "\"Salam Alaykum, Respectfully, Mrs. Nusrat Fatima Naqvi, an esteemed Pakistani national, is hereby introduced to your presence. She is among the devout, energetic, and dedicated ladies active in promoting religious culture and the teachings of the Ahl al-Bayt (A.S.). Currently residing in Syria, she is eager and intending to help organize and support the affairs of the Shia community residing in Spain, specifically through establishing an Islamic center / Husseiniya, an educational school, or investing in similar socio-religious charitable projects. Naturally, benefiting from your esteemed views, guidance, and counseling will be highly beneficial and instrumental in this regard. With gratitude for your continuous cooperation.\"" },
        { label: "Signatory 1", value: "Dr. Mohammad Ali Azarshab" },
        { label: "Signatory 2", value: "Cultural Counselor, Embassy of the Islamic Republic of Iran, Damascus (Signed)" },
        { label: "Details", value: "Contact Details (Footer):" },
        { label: "Footer", value: "Syria – Damascus | Tel: 2311149 – 2311151 | Fax: 2311147 | P.O. Box: 9351 | Email: ir-farhangi2@mail.sy" }
      ]
    },
    ar: {
      name: "العربية / فارسی",
      dir: "rtl",
      docName: "رسالة المستشارية الثقافية لسفارة الجمهورية الإسلامية الإيرانية - دمشق",
      lines: [
        { label: "تفاصيل", value: "الترويسة:" },
        { label: "العنوان 1", value: "سازمان فرهنگ و ارتباطات اسلامی (رابطة الثقافة والعلاقات الإسلامية)" },
        { label: "العنوان 2", value: "المستشارية الثقافية للجمهورية الإسلامية الإيرانية - دمشق (رایزنی فرهنگی جمهوری اسلامی ایران - دمشق)" },
        { label: "رقم المرجع", value: "52/2/669" },
        { label: "التاريخ", value: "31 / 6 / 1380 (هجري شمسي)" },
        { label: "البسملة", value: "بسمه تعالى" },
        { label: "تفاصيل", value: "مرسل إلى:" },
        { label: "الاسم 1", value: "الأخ المحترم السيد عبد خدائي" },
        { label: "الاسم 2", value: "المستشار الثقافي المحترم للجمهورية الإسلامية الإيرانية في مدريد (إسبانيا)" },
        { label: "تفاصيل", value: "نص الرسالة:" },
        { label: "المحتوى", value: "\"سلام عليكم، باحترام، نقدم لفضيلتكم السيدة نصرت فاطمة نقوي، وهي مواطنة باكستانية محترمة. إنها من السيدات المؤمنات والنشطات والملتزمات بنشر الثقافة الدينية وتعاليم أهل البيت (ع). تقيم حالياً في سوريا، ولديها رغبة ونية صادقة للمساعدة في تنظيم ودعم شؤون الجالية الشيعية المقيمة في إسبانيا، وتحديداً من خلال إنشاء مركز إسلامي / حسينية، أو مدرسة تعليمية، أو الاستثمار في مشاريع خيرية اجتماعية ودينية مماثلة. وبطبيعة الحال، فإن الاستفادة من آرائكم الكريمة وتوجيهاتكم وإرشاداتكم ستكون مفيدة ومؤثرة جداً في هذا الصدد. مع الشكر لتعاونكم المستمر.\"" },
        { label: "الموقع 1", value: "د. محمد علي آذرشب" },
        { label: "الموقع 2", value: "المستشار الثقافي، سفارة الجمهورية الإسلامية الإيرانية، دمشق (توقيع)" },
        { label: "تفاصيل", value: "بيانات الاتصال (أسفل الصفحة):" },
        { label: "الفوتر", value: "سوريا – دمشق | هاتف: 2311149 – 2311151 | فاكس: 2311147 | ص.ب: 9351 | البريد الإلكتروني: ir-farhangi2@mail.sy" }
      ]
    }
  };
  fs.writeFileSync(file, JSON.stringify(data, null, 2));
  console.log('Successfully updated doc_245');
} else {
  console.log('Error: doc_245 not found');
}
