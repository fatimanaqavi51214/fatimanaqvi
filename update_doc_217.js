const fs = require('fs');
const file = 'E:/2.maan-jee-website/documents_data.json';
const data = JSON.parse(fs.readFileSync(file, 'utf8'));
const docIndex = data.findIndex(d => d.id === 'doc_217');

if (docIndex !== -1) {
  data[docIndex].imageUrl = "https://res.cloudinary.com/b7xbeztp/image/upload/v1790360757/image217.jpg";
  data[docIndex].translations = {
    ur: {
      name: "اردو",
      dir: "rtl",
      docName: "قونصل خانہ پاکستان دبئی – تصدیق نامۂ پاسپورٹ",
      lines: [
        { label: "Details", value: "قونصل خانہ جنرل پاکستان - پوسٹ بکس نمبر: 340، دبئی – متحدہ عرب امارات" },
        { label: "رابطہ", value: "ٹیلی فون: 3970412 (009714) – 3973600 | فیکس: 3971975" },
        { label: "تاریخ", value: "27 جنوری 2026ء" },
        { label: "بنام", value: "بنام ہر کہ متعلق باشد (جس سے بھی یہ معاملہ متعلق ہو)" },
        { label: "عبارت", value: "\"تصدیق کی جاتی ہے کہ مشین ریڈ ایبل پاسپورٹ (MRP) نمبر DT8452184 محترمہ نصرت فاطمہ زوجہ غلام سرور کے نام درج ذیل کوائف کے ساتھ جاری کیا گیا تھا:" },
        { label: "نام", value: "نصرت فاطمہ" },
        { label: "شوہر کا نام", value: "غلام سرور" },
        { label: "تاریخِ پیدائش", value: "یکم جنوری 1958ء" },
        { label: "مقامِ پیدائش", value: "کراچی، پاکستان" },
        { label: "تاریخِ اجراء", value: "9 اکتوبر 2023ء" },
        { label: "تاریخِ تنسیخ (ایکسپائری)", value: "8 اکتوبر 2033ء" },
        { label: "Details", value: "ریکارڈ کے مطابق درج بالا کوائف بالکل درست اور مصدقہ ہیں۔ یہ سرٹیفکیٹ قونصل خانے پر کسی قانونی ذمہ داری کے بغیر، پاسپورٹ ہولڈر کی ذاتی درخواست پر جاری کیا گیا ہے۔\"" },
        { label: "دستخط و مہر", value: "دستخط و باضابطہ مہر: قونصل خانہ جنرل پاکستان، دبئی (دستخط و مہر شدہ)۔" }
      ]
    },
    en: {
      name: "English",
      dir: "ltr",
      docName: "Consulate General of Pakistan Dubai – Passport Certificate",
      lines: [
        { label: "Details", value: "Consulate General of Pakistan - P.O. Box 340, Dubai – U.A.E." },
        { label: "Contact", value: "Tel: (009714) 3970412 – 3973600 | Fax: 3971975" },
        { label: "Date", value: "27th Jan, 2026" },
        { label: "Addressed", value: "TO WHOM IT MAY CONCERN" },
        { label: "Content", value: "\"This is to certify that Machine Readable Passport No. DT8452184 was issued to Nusrat Fatima W/o Ghulam Sarwar with following particulars:" },
        { label: "Name", value: "Nusrat Fatima" },
        { label: "Husband Name", value: "Ghulam Sarwar" },
        { label: "Date of Birth", value: "01st Jan, 1958" },
        { label: "Place of Birth", value: "Karachi, Pak" },
        { label: "Date of Issue", value: "09th Oct, 2023" },
        { label: "Date of Expiry", value: "08th Oct, 2033" },
        { label: "Details", value: "Above mentioned details are correct and true as per record. This certificate is being issued on the request of the passport holder without any liability to this Consulate.\"" },
        { label: "Signatory", value: "Signature & Official Stamp: Consulate General of Pakistan, Dubai (Signed & Stamped)." }
      ]
    },
    ar: {
      name: "العربية",
      dir: "rtl",
      docName: "القنصلية العامة لباكستان في دبي – شهادة جواز السفر",
      lines: [
        { label: "تفاصيل", value: "القنصلية العامة لباكستان - ص.ب: 340، دبي – الإمارات العربية المتحدة" },
        { label: "اتصال", value: "هاتف: (009714) 3970412 – 3973600 | فاكس: 3971975" },
        { label: "التاريخ", value: "27 يناير 2026" },
        { label: "إلى", value: "لمن يهمه الأمر" },
        { label: "المحتوى", value: "\"نشهد بأن جواز السفر المقروء آلياً رقم DT8452184 قد صدر للسيدة نصرت فاطمة زوجة غلام سرور بالتفاصيل التالية:" },
        { label: "الاسم", value: "نصرت فاطمة" },
        { label: "اسم الزوج", value: "غلام سرور" },
        { label: "تاريخ الولادة", value: "01 يناير 1958" },
        { label: "مكان الولادة", value: "كراتشي، باكستان" },
        { label: "تاريخ الإصدار", value: "09 أكتوبر 2023" },
        { label: "تاريخ الانتهاء", value: "08 أكتوبر 2033" },
        { label: "تفاصيل", value: "التفاصيل المذكورة أعلاه صحيحة وحقيقية وفقاً للسجلات. تصدر هذه الشهادة بناءً على طلب حاملة الجواز دون أي مسؤولية قانونية على هذه القنصلية.\"" },
        { label: "الموقع", value: "التوقيع والختم الرسمي: القنصلية العامة لباكستان، دبي (موقع ومختوم)." }
      ]
    }
  };
  fs.writeFileSync(file, JSON.stringify(data, null, 2));
  console.log('Successfully updated doc_217');
} else {
  console.log('Error: doc_217 not found');
}
