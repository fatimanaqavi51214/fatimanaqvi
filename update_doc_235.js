const fs = require('fs');
const file = 'E:/2.maan-jee-website/documents_data.json';
const data = JSON.parse(fs.readFileSync(file, 'utf8'));
const docIndex = data.findIndex(d => d.id === 'doc_235');

if (docIndex !== -1) {
  data[docIndex].imageUrl = "https://res.cloudinary.com/b7xbeztp/image/upload/v1790360761/image235.jpg";
  data[docIndex].translations = {
    ur: {
      name: "اردو",
      dir: "rtl",
      docName: "مجمع جہانی اہلِ بیت (شام) کا سفارشی خط",
      lines: [
        { label: "Details", value: "سربراہ (Letterhead):" },
        { label: "Title", value: "مجمع جہانی اہلِ بیت (علیہم السلام) شام" },
        { label: "تاریخ", value: "27 / 5 / ..." },
        { label: "نمبر", value: "121 / ..." },
        { label: "Opening", value: "\"بسمہ تعالیٰ\"" },
        { label: "Details", value: "بنام:" },
        { label: "Name", value: "جناب محترم حجت الاسلام والمسلمین حاج آقا [...]، دامت عزہ۔" },
        { label: "Details", value: "خط کا متن (فارسی سے ترجمہ):" },
        { label: "Content", value: "\"سلام و احترام کے بعد؛ معزز خدمت میں گزارش کی جاتی ہے کہ محترمہ بہن نصرت فاطمہ نقوی اور ان کی محترمہ والدہ، جو کہ پاکستان کے ایک متدین، مومن اور نیک نام خاندان سے تعلق رکھتی ہیں، ہمیشہ اسلامی، سماجی اور فلاحی امور میں پیش پیش رہی ہیں۔ انہوں نے اہلِ بیتِ عصمت و طہارت (علیہم السلام) کی عقیدت میں علاقہ السیدہ زینب (سلام اللہ علیہا) میں واقع اپنے ملکیتی چار قطعۂ اراضی (4 پلاٹس) مجمع جہانی اہلِ بیت (علیہم السلام) کے نام باضابطہ وقف اور عطیہ کیے ہیں۔ لہٰذا ان کے اس خیر خواہانہ جذبے کا شکریہ ادا کرتے ہوئے التماس ہے کہ ان کے ساتھ ہر قسم کا ممکنہ تعاون فرمایا جائے اور متعلقہ سہولیات فراہم کرنے کے احکامات صادر کیے جائیں۔\"" },
        { label: "Signatory", value: "دستخط و مہر: مجمع جہانی اہلِ بیت (شام) کے نمائندے کے دستخط اور سرکاری مہر۔" }
      ]
    },
    en: {
      name: "English",
      dir: "ltr",
      docName: "The World Assembly of Ahl al-Bayt in Syria - Recommendation Letter",
      lines: [
        { label: "Details", value: "Header:" },
        { label: "Title", value: "The World Assembly of Ahl al-Bayt (A.S.) in Syria" },
        { label: "Date", value: "27 / 5 / 14..." },
        { label: "Number", value: "121 / ..." },
        { label: "Opening", value: "\"In the Name of God\" (بسمه تعالی)" },
        { label: "Details", value: "Addressed to:" },
        { label: "Name", value: "Respected Hujjat al-Islam wal-Muslimeen Haj Aqa [...], May his honor endure." },
        { label: "Details", value: "Body of the Letter (Persian Transcript & Translation):" },
        { label: "Content", value: "\"With greetings and respect; It is respectfully brought to your attention that our respected sister Nusrat Fatima Naqvi and her respected mother, who are from a devout, faithful, and committed family in Pakistan, are actively involved in Islamic, social, and charitable works. In devotion to the Household of Purity and Infallibility (A.S.), they have donated four pieces of land located in Sayyidah Zaynab (A.S.) in the name of the World Assembly of Ahl al-Bayt (A.S.). Therefore, while expressing gratitude to them, it is requested that your noble authority issue instructions for necessary facilities and considerations to be provided to them, in accordance with applicable rules.\"" },
        { label: "Signatory", value: "Official Stamp & Signature: World Assembly of Ahl al-Bayt (A.S.) in Syria (Affixed)." }
      ]
    },
    ar: {
      name: "العربية / فارسی",
      dir: "rtl",
      docName: "رسالة توصية من المجمع العالمي لأهل البيت (ع) في سورية",
      lines: [
        { label: "تفاصيل", value: "الترويسة:" },
        { label: "العنوان", value: "المجمع العالمي لأهل البيت (ع) في سورية" },
        { label: "التاريخ", value: "27 / 5 / 14..." },
        { label: "الرقم", value: "121 / ..." },
        { label: "البسملة", value: "بسمه تعالى" },
        { label: "تفاصيل", value: "مرسل إلى:" },
        { label: "الاسم", value: "فضيلة حجة الإسلام والمسلمين الحاج آقا [...] دامت عزه." },
        { label: "تفاصيل", value: "نص الرسالة:" },
        { label: "المحتوى", value: "\"مع السلام والاحترام؛ نرفع إلى علمكم الكريم أن الأخت المحترمة نصرت فاطمة نقوي ووالدتها المحترمة، اللتين تنتميان إلى عائلة متدينة ومؤمنة في باكستان، تنشطان دائماً في الأعمال الإسلامية والاجتماعية والخيرية. وبدافع الولاء لأهل بيت العصمة والطهارة (عليهم السلام)، قامتا بالتبرع بأربع قطع أراضي تقع في السيدة زينب (ع) باسم المجمع العالمي لأهل البيت (ع). لذا، وإذ نعبر عن شكرنا لهما، نرجو من فضيلتكم إصدار التوجيهات لتقديم التسهيلات والرعاية اللازمة لهما وفقاً للضوابط.\"" },
        { label: "الموقع", value: "الختم الرسمي والتوقيع: المجمع العالمي لأهل البيت (ع) في سورية." }
      ]
    }
  };
  fs.writeFileSync(file, JSON.stringify(data, null, 2));
  console.log('Successfully updated doc_235');
} else {
  console.log('Error: doc_235 not found');
}
