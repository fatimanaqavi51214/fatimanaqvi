const fs = require('fs');
const file = 'E:/2.maan-jee-website/documents_data.json';
const data = JSON.parse(fs.readFileSync(file, 'utf8'));
const docIndex = data.findIndex(d => d.id === 'doc_239');

if (docIndex !== -1) {
  data[docIndex].imageUrl = "https://res.cloudinary.com/b7xbeztp/image/upload/v1790360761/image239.jpg";
  data[docIndex].translations = {
    ur: {
      name: "اردو",
      dir: "rtl",
      docName: "سفارشی خط / تعارفی رقعہ",
      lines: [
        { label: "Details", value: "سربراہ:" },
        { label: "رابطہ", value: "دمشق – السیدہ زینب | فون: 439788" },
        { label: "تاریخ", value: "8 / 7 / 1407 ہجری (یا 75)" },
        { label: "Title", value: "\"بسم اللہ الرحمن الرحیم\"" },
        { label: "Details", value: "بنام:" },
        { label: "Name", value: "برادرِ عزیز و محترم جناب ہاشمی صاحب، دامت بقائہ۔" },
        { label: "Details", value: "خط کا متن (فارسی سے ترجمہ):" },
        { label: "Content", value: "\"سلامِ مسنون کے بعد؛ اس رقعے کی حامل محترمہ نصرت فاطمہ، جو کہ پاکستانی شہری ہیں، انتہائی قابلِ احترام خاتون ہیں۔ وہ یہاں زیارت اور قیام کے سلسلے میں تشریف لائی ہیں۔ التماس ہے کہ ان کے ساتھ شفقت و محبت کا برتاؤ فرمائیں اور ان کی ہر ممکن رہنمائی و معاونت فرمائیں۔ یہ امر دلی شکریہ اور دعاؤں کا باعث ہوگا۔ والسلام علیکم و رحمۃ اللہ و برکاتہ۔\"" },
        { label: "Signatory", value: "دستخط: سید محمد / ہاشمی (دستخط شدہ)۔" }
      ]
    },
    en: {
      name: "English",
      dir: "ltr",
      docName: "Recommendation/Introduction Letter",
      lines: [
        { label: "Details", value: "Header:" },
        { label: "Contact", value: "Damascus – Sayyidah Zaynab | Tel: 439788" },
        { label: "Date", value: "8 / 7 / 1407 (or 75)" },
        { label: "Title", value: "\"In the Name of God, The Beneficent, The Merciful\"" },
        { label: "Details", value: "Addressed to:" },
        { label: "Name", value: "My dear brother, Mr. Hashemi, May his presence endure." },
        { label: "Details", value: "Text (Persian Transcript & Translation):" },
        { label: "Content", value: "\"With greetings and peace; The bearer of this letter, Mrs. Nusrat Fatima, a Pakistani national, is a highly respected lady. She is visiting for pilgrimage (Ziyarat) and travel. Please extend your kindness, hospitality, and assistance to her during her stay. This will be deeply appreciated, with prayers and gratitude. Peace be upon you and God's mercy.\"" },
        { label: "Signatory", value: "Signed by Seyed Mohammad / Hashemi (Signed)." }
      ]
    },
    ar: {
      name: "العربية / فارسی",
      dir: "rtl",
      docName: "رسالة توصية / تعريف",
      lines: [
        { label: "تفاصيل", value: "الترويسة:" },
        { label: "الاتصال", value: "دمشق – السيدة زينب | هاتف: 439788" },
        { label: "التاريخ", value: "8 / 7 / 1407 هـ (أو 75)" },
        { label: "العنوان", value: "بسم الله الرحمن الرحيم" },
        { label: "تفاصيل", value: "مرسل إلى:" },
        { label: "الاسم", value: "أخي العزيز المحترم السيد هاشمي، دامت بقاؤه." },
        { label: "تفاصيل", value: "نص الرسالة:" },
        { label: "المحتوى", value: "\"بعد السلام والتحية؛ حاملة هذه الرسالة السيدة نصرت فاطمة، وهي مواطنة باكستانية، سيدة محترمة جداً. لقد قدمت إلى هنا للزيارة والإقامة. نرجو منكم التكرم بإبداء اللطف وحسن الضيافة وتقديم كل ما يمكن من مساعدة وإرشاد لها خلال فترة إقامتها. سيكون هذا موضع شكرنا العميق ودعائنا لكم. والسلام عليكم ورحمة الله وبركاته.\"" },
        { label: "الموقع", value: "توقيع: السيد محمد / هاشمي (موقع)." }
      ]
    }
  };
  fs.writeFileSync(file, JSON.stringify(data, null, 2));
  console.log('Successfully updated doc_239');
} else {
  console.log('Error: doc_239 not found');
}
