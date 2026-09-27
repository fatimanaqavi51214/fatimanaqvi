const fs = require('fs');
const file = 'E:/2.maan-jee-website/documents_data.json';
const data = JSON.parse(fs.readFileSync(file, 'utf8'));
const docIndex = data.findIndex(d => d.id === 'doc_213');

if (docIndex !== -1) {
  data[docIndex].imageUrl = "https://res.cloudinary.com/b7xbeztp/image/upload/v1790360757/image213.jpg";
  data[docIndex].translations = {
    ur: {
      name: "اردو",
      dir: "rtl",
      docName: "محکمہ اراضی شام – درخواست برائے نقل قید عقاری / کیڈسٹرل ریکارڈ",
      lines: [
        { label: "Details", value: "جمہوریہ عربیہ سوریہ – محکمہ اراضی و رجسٹریشن (لینڈ رجسٹری ڈائریکٹوریٹ)، ریف دمشق" },
        { label: "درخواست نمبر", value: "23381" },
        { label: "دفتر کا ڈائری نمبر", value: "2827" },
        { label: "بخدمت جناب", value: "چیف لینڈ رجسٹرار (سربراہ رجسٹرار اراضی)، ریف دمشق" },
        { label: "درخواست گزار", value: "جمیل ابو صالح، مقامی رہائشی۔" },
        { label: "موضوع", value: "ریئل اسٹیٹ پلاٹ نمبر 284 واقع علاقہ قبر الست (السیدہ زینب) کے سرکاری ملکیتی ریکارڈ (قید عقاری) کی نقل کے حصول کی بابت۔" },
        { label: "Details", value: "پلاٹ کے حصص داران اور ریکارڈ کی تفصیل (دستاویز کے مطابق):" },
        { label: "1", value: "اسعد خرمہ / محمد خرمہ" },
        { label: "2", value: "محمد علی خرمہ" },
        { label: "3", value: "مصطفیٰ علی خرمہ" },
        { label: "4", value: "نصرت فاطمہ نقوی کے نام مختص و منتقل شدہ حصہ" },
        { label: "5", value: "جمیل ابو صالح کے ورثاء و بچے (محمد، سکنہ وغیرہ)" },
        { label: "6", value: "بلدیہ کونسل السیدہ زینب کا مشترکہ حصہ" },
        { label: "تاریخ", value: "31 جنوری 1996ء" },
        { label: "چیف رجسٹرار اراضی", value: "احمد حسین (دستخط و باضابطہ مہر)" },
        { label: "نوٹ", value: "(سرکاری ریونیو ٹکٹیں اور عدالتی اسٹامپ چسپاں ہیں)۔" }
      ]
    },
    en: {
      name: "English",
      dir: "ltr",
      docName: "Land Registry Directorate Syria – Cadastral Record Request",
      lines: [
        { label: "Details", value: "Syrian Arab Republic – Land Registry Directorate (Rif Dimashq)" },
        { label: "Application No.", value: "23381" },
        { label: "Registry Ref", value: "2827" },
        { label: "To", value: "Head of the Land Registry Office in Rif Dimashq" },
        { label: "Applicant", value: "Jamil Abu Saleh, resident of the area." },
        { label: "Subject", value: "Request for issuance of a Land Registry Record / Title Record (قيد عقاري) for real estate plot No. 284, Qabr Essit area." },
        { label: "Details", value: "Cadastral Shares & Co-Owners Breakdown (listed on the document):" },
        { label: "1", value: "Asaad Khurma / Mohammad Khurma" },
        { label: "2", value: "Mohammad Ali Khurma" },
        { label: "3", value: "Mustafa Ali Khurma" },
        { label: "4", value: "Share allocated / assigned to Nusrat Fatima Naqvi" },
        { label: "5", value: "Children of Jamil Abu Saleh (Mohammad, Sukna, etc.)" },
        { label: "6", value: "Village Council of Qabr Essit (Municipal share)" },
        { label: "Date", value: "13 / 1 / 1996 (or 31/1/1996)" },
        { label: "Land Registrar", value: "Ahmad Hussein (Signed & Stamped)" },
        { label: "Note", value: "(Official revenue stamps and Land Registry fee stamps affixed)." }
      ]
    },
    ar: {
      name: "العربية",
      dir: "rtl",
      docName: "مديرية المصالح العقارية في سوريا – طلب قيد عقاري",
      lines: [
        { label: "تفاصيل", value: "الجمهورية العربية السورية – مديرية المصالح العقارية (ريف دمشق)" },
        { label: "رقم الطلب", value: "23381" },
        { label: "المرجع العقاري", value: "2827" },
        { label: "إلى", value: "رئيس مكتب السجل العقاري في ريف دمشق" },
        { label: "المستدعي", value: "جميل أبو صالح، مقيم في المنطقة." },
        { label: "الموضوع", value: "طلب الحصول على قيد عقاري للعقار رقم 284 منطقة قبر الست." },
        { label: "تفاصيل", value: "الحصص العقارية وأسماء المالكين على الشيوع (كما هو مدرج في الوثيقة):" },
        { label: "1", value: "أسعد خرمة / محمد خرمة" },
        { label: "2", value: "محمد علي خرمة" },
        { label: "3", value: "مصطفى علي خرمة" },
        { label: "4", value: "الحصة المخصصة للسيدة نصرت فاطمة نقوي" },
        { label: "5", value: "ورثة وأولاد جميل أبو صالح (محمد، سكنة إلخ)" },
        { label: "6", value: "حصة بلدية قبر الست (السيدة زينب)" },
        { label: "التاريخ", value: "13 / 1 / 1996 (أو 31/1/1996)" },
        { label: "أمين السجل العقاري", value: "أحمد حسين (توقيع وخاتم)" },
        { label: "ملاحظة", value: "(ملصق عليها طوابع مالية ورسوم السجل العقاري)." }
      ]
    }
  };
  fs.writeFileSync(file, JSON.stringify(data, null, 2));
  console.log('Successfully updated doc_213');
} else {
  console.log('Error: doc_213 not found');
}
