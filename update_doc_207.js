const fs = require('fs');
const file = 'E:/2.maan-jee-website/documents_data.json';
const data = JSON.parse(fs.readFileSync(file, 'utf8'));
const docIndex = data.findIndex(d => d.id === 'doc_207');

if (docIndex !== -1) {
  data[docIndex].imageUrl = "https://res.cloudinary.com/b7xbeztp/image/upload/v1790360756/image207.jpg";
  data[docIndex].translations = {
    ur: {
      name: "اردو",
      dir: "rtl",
      docName: "وزارت خارجہ شام کا مکتوب (شعبۂ ثقافت)",
      lines: [
        { label: "Details", value: "جمہوریہ عربیہ سوریہ (شام) - وزارتِ خارجہ - شعبۂ ثقافت" },
        { label: "حوالہ نمبر", value: "11 (7/1/7 3741)" },
        { label: "تاریخ", value: "5 مارچ 1982ء" },
        { label: "بنام", value: "قونصل خانہ جنرل / دبئی" },
        { label: "عبارت", value: "\"آپ کے خط نمبر 60 (7/1/4) بتاریخ 31 دسمبر 1981ء کے حوالے سے، ہم اس کے ساتھ وزارتِ اوقاف کا خط نمبر 1911/4/6 بتاریخ 7 جولائی 1982ء منسلک کر کے ارسال کر رہے ہیں تاکہ خیرات / عطیہ دینے والی معزز خاتون محترمہ نصرت فاطمہ بنت سید محمد الطومہ کی سخاوت و فیاضی پر وزارتِ اوقاف کی جانب سے ان کے شکریہ و تشکر سے آگاہ کیا جا سکے اور ان کی درخواست کی باضابطہ منظوری دی جا سکے۔" },
        { label: "دستخط کنندہ", value: "وزیرِ مملکت برائے امورِ خارجہ - دستخط و مہر\"" },
        { label: "Details", value: "منسلک نقل کا مصدقہ ترجمہ - قانونی مترجم (Sworn Translator)" },
        { label: "تاریخ", value: "دمشق: اتوار، 21 جون 2009ء (قانونی مترجم کے تصدیقی دستخط اور باضابطہ مہر ثبت ہے)" }
      ]
    },
    en: {
      name: "English",
      dir: "ltr",
      docName: "Ministry of Foreign Affairs Syria (Cultural Dept.) Letter",
      lines: [
        { label: "Details", value: "Syrian Arab Republic - Ministry of Foreign Affairs - Cultural Dept." },
        { label: "Ref.", value: "11 (7/1/7 3741)" },
        { label: "Date", value: "05.03.1982" },
        { label: "To", value: "General Consulate / Dubai" },
        { label: "Content", value: "\"With reference to your letter Nr. 60 (7/1/4) dated 31.12.1981, we attach herewith the letter of the Ministry of Awkaf Nr. 1911/4/6 dated 07.07.1982 to notify the gratitude of the Ministry of Awkaf to the charity giver MRS. NASRAT FATIMA SAYED MOHAMMAD AL TOMA for her generosity and to approve her request." },
        { label: "Signatory", value: "Minister of State For Foreign Affairs - Signature & Seal\"" },
        { label: "Details", value: "Translation of the attached copy - Sworn translator" },
        { label: "Date", value: "Damascus: Sunday 21.06.2009 (Official Stamp and Signature of Sworn Translator Affixed)" }
      ]
    },
    ar: {
      name: "العربية",
      dir: "rtl",
      docName: "رسالة وزارة الخارجية السورية (القسم الثقافي)",
      lines: [
        { label: "تفاصيل", value: "الجمهورية العربية السورية - وزارة الخارجية - القسم الثقافي" },
        { label: "رقم الإشارة", value: "11 (7/1/7 3741)" },
        { label: "التاريخ", value: "05.03.1982" },
        { label: "إلى", value: "القنصلية العامة / دبي" },
        { label: "المحتوى", value: "\"إشارة إلى كتابكم رقم 60 (7/1/4) تاريخ 31.12.1981، نرفق طيه كتاب وزارة الأوقاف رقم 1911/4/6 تاريخ 07.07.1982 لإبلاغكم شكر وزارة الأوقاف للمتبرعة السيدة نصرت فاطمة بنت سيد محمد الطعمة على سخائها والموافقة على طلبها." },
        { label: "الموقع", value: "وزير الدولة للشؤون الخارجية - توقيع وخاتم\"" },
        { label: "تفاصيل", value: "ترجمة النسخة المرفقة - مترجم محلف" },
        { label: "التاريخ", value: "دمشق: الأحد 21.06.2009 (ممهور بختم وتوقيع المترجم المحلف)" }
      ]
    }
  };
  fs.writeFileSync(file, JSON.stringify(data, null, 2));
  console.log('Successfully updated doc_207');
} else {
  console.log('Error: doc_207 not found');
}
