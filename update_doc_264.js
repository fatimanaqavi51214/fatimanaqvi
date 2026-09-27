const fs = require('fs');
const file = 'E:/2.maan-jee-website/documents_data.json';
const data = JSON.parse(fs.readFileSync(file, 'utf8'));
const docIndex = data.findIndex(d => d.id === 'doc_264');

if (docIndex !== -1) {
  data[docIndex].imageUrl = "https://res.cloudinary.com/b7xbeztp/image/upload/v1790360771/image264.png";
  data[docIndex].translations = {
    ur: {
      name: "اردو",
      dir: "rtl",
      docName: "مرکز فقہی ائمہ اطہارؑ کی جانب سے تعریفی مکتوب",
      lines: [
        { label: "Details", value: "لیٹر ہیڈ کے کوائف:" },
        { label: "ادارہ", value: "مرکز فقہی ائمہ اطہارؑ، زیرِ سرپرستی و تاسیس: مرجع عالی قدر حضرت آیت اللہ العظمیٰ فاضل لنکرانیؒ" },
        { label: "تاریخ", value: "24/05/2025ء" },
        { label: "شمارہ (نمبر)", value: "443" },
        { label: "Title", value: "بسمہ تعالیٰ" },
        { label: "Addressee", value: "بخدمت جملہ متعلقہ حکام / جس سے بھی یہ معاملہ متعلق ہو" },
        { label: "Content", value: "\"آپ کو مطلع کیا جاتا ہے کہ میں، حجۃ الاسلام ڈاکٹر سید طاہر شاہ، پاکستانی شہریت کا حامل، دفتر مرجع دینی کبیر حضرت آیت اللہ العظمیٰ شیخ محمد فاضل لنکرانی (قدس سرہ) کا ڈائریکٹر، اس امر کا اقرار و اعتراف کرتا ہوں کہ محترمہ ہمشیرہ نصرت فاطمہ نقوی سن 1980ء سے دنیا بھر میں اور بالخصوص شام میں ایک فلاحی و انسانی امدادی تنظیم کی سربراہ اور منتظم کے طور پر سرگرم عمل رہی ہیں، اور انہوں نے گزشتہ سالوں کے دوران مادی اور معنوی خدمات کی فراہمی میں کوئی کسر نہیں چھوڑی۔ نیز، علاقہ سیدہ زینبؑ میں ان کی اولاد یعنی محترم جواد حیدر، محترم فؤاد حیدر، اور محترمہ ہاجر خاتون، ہم اس سلسلے میں ان سب کی مکمل تائید و توثیق کرتے ہیں۔ آپ سب سلامت رہیں۔\"" },
        { label: "Signatory", value: "مخلص: سید طاہر شاہ الموسوی" },
        { label: "Signature Date", value: "(دستخط و تاریخ: 22 ذوالحجہ 1447ھ)" }
      ]
    },
    en: {
      name: "English",
      dir: "ltr",
      docName: "Recommendation Letter from Markaz Fiqhi Aimmah Athar",
      lines: [
        { label: "Details", value: "Letterhead Details:" },
        { label: "Organization", value: "Markaz Fiqhi Aimmah Athar (A.S.), Founded by Grand Ayatollah Fazel Lankarani" },
        { label: "Date", value: "24/05/2025" },
        { label: "Number", value: "443" },
        { label: "Title", value: "In the Name of the Almighty" },
        { label: "Addressee", value: "To Whom It May Concern" },
        { label: "Content", value: "\"We hereby inform you that I, Hujjat al-Islam Dr. Sayed Taher Shah, of Pakistani nationality, Director of the Office of the Grand Religious Authority, His Eminence Grand Ayatollah Sheikh Mohammad Fazel Lankarani (may his soul be sanctified), declare and acknowledge that since 1980, Sister Mrs. Nusrat Fatima Naqvi has served as the head and official in charge of a humanitarian charitable organization worldwide, and specifically in Syria. Over the past years, she has spared no effort in providing both material and moral services. Furthermore, her children—the respected Jawad Haider, the respected Fouad Haider, and the respected Hajir Khatoon—in the Sayyidah Zaynab (A.S.) area, we fully support and endorse them in this regard. May you remain safe and well.\"" },
        { label: "Signatory", value: "Sincerely, Sayed Taher Shah Al-Mousawi" },
        { label: "Signature Date", value: "(Signature & Date: 22 Dhu al-Hijjah 1447 AH)" }
      ]
    },
    ar: {
      name: "العربية",
      dir: "rtl",
      docName: "رسالة توصية من مركز فقه الأئمة الأطهار (ع)",
      lines: [
        { label: "تفاصيل", value: "بيانات الترويسة:" },
        { label: "المؤسسة", value: "مركز فقه الأئمة الأطهار (ع)، تأسيس المرجع الديني الأعلى آية الله العظمى فاضل لنكراني (قده)" },
        { label: "التاريخ", value: "24/05/2025" },
        { label: "الرقم", value: "443" },
        { label: "العنوان", value: "بسمه تعالى" },
        { label: "المرسل إليه", value: "إلى من يهمه الأمر" },
        { label: "المحتوى", value: "\"نعلمكم بأنني، حجة الإسلام الدكتور السيد طاهر شاه، أحمل الجنسية الباكستانية، مدير مكتب المرجع الديني الكبير سماحة آية الله العظمى الشيخ محمد فاضل لنكراني (قدس سره)، أقر وأعترف بأن الأخت السيدة نصرت فاطمة نقوي كانت وما زالت منذ عام 1980 رئيسة ومسؤولة عن منظمة خيرية وإنسانية في جميع أنحاء العالم، وتحديداً في سوريا. وخلال السنوات الماضية، لم تدخر جهداً في تقديم الخدمات المادية والمعنوية. علاوة على ذلك، فإن أبناءها - المحترم جواد حيدر، والمحترم فؤاد حيدر، والمحترمة هاجر خاتون - في منطقة السيدة زينب (ع)، نؤيدهم وندعمهم بالكامل في هذا الصدد. دمتم سالمين.\"" },
        { label: "الموقع", value: "المخلص: السيد طاهر شاه الموسوي" },
        { label: "تاريخ التوقيع", value: "(التوقيع والتاريخ: 22 ذو الحجة 1447 هـ)" }
      ]
    }
  };
  fs.writeFileSync(file, JSON.stringify(data, null, 2));
  console.log('Successfully updated doc_264');
} else {
  const newDoc = {
    id: 'doc_264',
    imageUrl: "https://res.cloudinary.com/b7xbeztp/image/upload/v1790360771/image264.png",
    translations: {
      ur: {
        name: "اردو",
        dir: "rtl",
        docName: "مرکز فقہی ائمہ اطہارؑ کی جانب سے تعریفی مکتوب",
        lines: [
          { label: "Details", value: "لیٹر ہیڈ کے کوائف:" },
          { label: "ادارہ", value: "مرکز فقہی ائمہ اطہارؑ، زیرِ سرپرستی و تاسیس: مرجع عالی قدر حضرت آیت اللہ العظمیٰ فاضل لنکرانیؒ" },
          { label: "تاریخ", value: "24/05/2025ء" },
          { label: "شمارہ (نمبر)", value: "443" },
          { label: "Title", value: "بسمہ تعالیٰ" },
          { label: "Addressee", value: "بخدمت جملہ متعلقہ حکام / جس سے بھی یہ معاملہ متعلق ہو" },
          { label: "Content", value: "\"آپ کو مطلع کیا جاتا ہے کہ میں، حجۃ الاسلام ڈاکٹر سید طاہر شاہ، پاکستانی شہریت کا حامل، دفتر مرجع دینی کبیر حضرت آیت اللہ العظمیٰ شیخ محمد فاضل لنکرانی (قدس سرہ) کا ڈائریکٹر، اس امر کا اقرار و اعتراف کرتا ہوں کہ محترمہ ہمشیرہ نصرت فاطمہ نقوی سن 1980ء سے دنیا بھر میں اور بالخصوص شام میں ایک فلاحی و انسانی امدادی تنظیم کی سربراہ اور منتظم کے طور پر سرگرم عمل رہی ہیں، اور انہوں نے گزشتہ سالوں کے دوران مادی اور معنوی خدمات کی فراہمی میں کوئی کسر نہیں چھوڑی۔ نیز، علاقہ سیدہ زینبؑ میں ان کی اولاد یعنی محترم جواد حیدر، محترم فؤاد حیدر، اور محترمہ ہاجر خاتون، ہم اس سلسلے میں ان سب کی مکمل تائید و توثیق کرتے ہیں۔ آپ سب سلامت رہیں۔\"" },
          { label: "Signatory", value: "مخلص: سید طاہر شاہ الموسوی" },
          { label: "Signature Date", value: "(دستخط و تاریخ: 22 ذوالحجہ 1447ھ)" }
        ]
      },
      en: {
        name: "English",
        dir: "ltr",
        docName: "Recommendation Letter from Markaz Fiqhi Aimmah Athar",
        lines: [
          { label: "Details", value: "Letterhead Details:" },
          { label: "Organization", value: "Markaz Fiqhi Aimmah Athar (A.S.), Founded by Grand Ayatollah Fazel Lankarani" },
          { label: "Date", value: "24/05/2025" },
          { label: "Number", value: "443" },
          { label: "Title", value: "In the Name of the Almighty" },
          { label: "Addressee", value: "To Whom It May Concern" },
          { label: "Content", value: "\"We hereby inform you that I, Hujjat al-Islam Dr. Sayed Taher Shah, of Pakistani nationality, Director of the Office of the Grand Religious Authority, His Eminence Grand Ayatollah Sheikh Mohammad Fazel Lankarani (may his soul be sanctified), declare and acknowledge that since 1980, Sister Mrs. Nusrat Fatima Naqvi has served as the head and official in charge of a humanitarian charitable organization worldwide, and specifically in Syria. Over the past years, she has spared no effort in providing both material and moral services. Furthermore, her children—the respected Jawad Haider, the respected Fouad Haider, and the respected Hajir Khatoon—in the Sayyidah Zaynab (A.S.) area, we fully support and endorse them in this regard. May you remain safe and well.\"" },
          { label: "Signatory", value: "Sincerely, Sayed Taher Shah Al-Mousawi" },
          { label: "Signature Date", value: "(Signature & Date: 22 Dhu al-Hijjah 1447 AH)" }
        ]
      },
      ar: {
        name: "العربية",
        dir: "rtl",
        docName: "رسالة توصية من مركز فقه الأئمة الأطهار (ع)",
        lines: [
          { label: "تفاصيل", value: "بيانات الترويسة:" },
          { label: "المؤسسة", value: "مركز فقه الأئمة الأطهار (ع)، تأسيس المرجع الديني الأعلى آية الله العظمى فاضل لنكراني (قده)" },
          { label: "التاريخ", value: "24/05/2025" },
          { label: "الرقم", value: "443" },
          { label: "العنوان", value: "بسمه تعالى" },
          { label: "المرسل إليه", value: "إلى من يهمه الأمر" },
          { label: "المحتوى", value: "\"نعلمكم بأنني، حجة الإسلام الدكتور السيد طاهر شاه، أحمل الجنسية الباكستانية، مدير مكتب المرجع الديني الكبير سماحة آية الله العظمى الشيخ محمد فاضل لنكراني (قدس سره)، أقر وأعترف بأن الأخت السيدة نصرت فاطمة نقوي كانت وما زالت منذ عام 1980 رئيسة ومسؤولة عن منظمة خيرية وإنسانية في جميع أنحاء العالم، وتحديداً في سوريا. وخلال السنوات الماضية، لم تدخر جهداً في تقديم الخدمات المادية والمعنوية. علاوة على ذلك، فإن أبناءها - المحترم جواد حيدر، والمحترم فؤاد حيدر، والمحترمة هاجر خاتون - في منطقة السيدة زينب (ع)، نؤيدهم وندعمهم بالكامل في هذا الصدد. دمتم سالمين.\"" },
          { label: "الموقع", value: "المخلص: السيد طاهر شاه الموسوي" },
          { label: "تاريخ التوقيع", value: "(التوقيع والتاريخ: 22 ذو الحجة 1447 هـ)" }
        ]
      }
    }
  };
  data.push(newDoc);
  fs.writeFileSync(file, JSON.stringify(data, null, 2));
  console.log('Successfully added doc_264');
}
