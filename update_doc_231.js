const fs = require('fs');
const file = 'E:/2.maan-jee-website/documents_data.json';
const data = JSON.parse(fs.readFileSync(file, 'utf8'));
const docIndex = data.findIndex(d => d.id === 'doc_231');

if (docIndex !== -1) {
  data[docIndex].imageUrl = "https://res.cloudinary.com/b7xbeztp/image/upload/v1790360760/image231.jpg";
  data[docIndex].translations = {
    ur: {
      name: "اردو",
      dir: "rtl",
      docName: "مجمع جہانی اہلِ بیت (شام) کا خط",
      lines: [
        { label: "Details", value: "سربراہ (Letterhead):" },
        { label: "Title 1", value: "مجمع جہانی اہلِ بیت (علیہم السلام) شام" },
        { label: "Title 2", value: "\"بسمہ تعالیٰ\"" },
        { label: "Details", value: "بنام:" },
        { label: "Name", value: "محترم و معظم حجت الاسلام والمسلمین حاج آقا [...]، دامت برکاتہ۔" },
        { label: "Details", value: "خط کا متن (فارسی سے ترجمہ):" },
        { label: "Content", value: "\"سلام مسنون اور راہِ اسلام و مسلمین میں زیادہ سے زیادہ توفیقاتِ الٰہی کی دعا کے ساتھ، آپ کی عالی جناب خدمت اور مجمع اہلِ بیت کے تمام محترم رفقاء و اراکین کے حضور عرض ہے؛ با ادب گزارش ہے کہ اس مکتوب کی حامل محترمہ بہن نصرت نقوی مجمع کے لیے معروف و معتمد شخصیت ہیں۔ اگر ایران میں ان کا کوئی دفتری کام، دفتری ضرورت یا معاملہ درپیش ہو تو التماس ہے کہ ان کی ہر ممکن مدد فرمائی جائے اور خصوصی توجہ دی جائے۔ دعا اور شکر گزاری کے ساتھ۔\"" },
        { label: "Signatory", value: "دستخط و مہر: مجمع جہانی اہلِ بیت (شام) کی باضابطہ مہر و دستخط ثبت ہیں۔" }
      ]
    },
    en: {
      name: "English",
      dir: "ltr",
      docName: "The World Assembly of Ahl al-Bayt in Syria - Letter",
      lines: [
        { label: "Details", value: "Header:" },
        { label: "Title 1", value: "The World Assembly of Ahl al-Bayt (A.S.) in Syria (المجمع العالمي لأهل البيت في سورية)" },
        { label: "Title 2", value: "\"In the Name of God\" (بسمه تعالی)" },
        { label: "Details", value: "Addressed to:" },
        { label: "Name", value: "Respected Hujjat al-Islam wal-Muslimeen Haj Aqa [...], May his bounty continue." },
        { label: "Details", value: "Body of the Letter (Persian Transcript & Translation):" },
        { label: "Content", value: "\"With greetings and wishing increasing divine success in serving Islam and Muslims, to your noble presence and all esteemed colleagues and officials of the Ahl al-Bayt Assembly. Respectfully, it is submitted that the bearer of this letter, sister Nusrat Naqvi, is well-known to the Assembly. In the event of any issues or administrative requirements in Iran, it is requested that special attention and full assistance be extended to her. With prayers and gratitude.\"" },
        { label: "Signatory", value: "Official Stamp & Signature: Official Seal of the World Assembly of Ahl al-Bayt in Syria (Affixed)." }
      ]
    },
    ar: {
      name: "العربية / فارسی",
      dir: "rtl",
      docName: "رسالة المجمع العالمي لأهل البيت (ع) في سورية",
      lines: [
        { label: "تفاصيل", value: "الترويسة:" },
        { label: "العنوان 1", value: "المجمع العالمي لأهل البيت في سورية" },
        { label: "العنوان 2", value: "بسمه تعالى" },
        { label: "تفاصيل", value: "مرسل إلى:" },
        { label: "الاسم", value: "فضيلة حجة الإسلام والمسلمين الحاج آقا [...] دامت بركاته." },
        { label: "تفاصيل", value: "نص الرسالة:" },
        { label: "المحتوى", value: "\"مع السلام والدعاء لكم بمزيد من التوفيق الإلهي في خدمة الإسلام والمسلمين، نرفع لفضيلتكم ولجميع الإخوة الزملاء والمسؤولين في مجمع أهل البيت أسمى آيات الاحترام. نود أن نعلمكم بأن حاملة هذه الرسالة، الأخت نصرت نقوي، شخصية معروفة ومعتمدة لدى المجمع. وفي حال وجود أي متطلبات إدارية أو أمور تستدعي المتابعة في إيران، نرجو أن تولى لها عناية خاصة وتقديم كل المساعدة الممكنة. مع الدعاء والشكر.\"" },
        { label: "الموقع", value: "الختم الرسمي والتوقيع: الختم الرسمي للمجمع العالمي لأهل البيت في سورية." }
      ]
    }
  };
  fs.writeFileSync(file, JSON.stringify(data, null, 2));
  console.log('Successfully updated doc_231');
} else {
  console.log('Error: doc_231 not found');
}
