const fs = require('fs');
const file = 'E:/2.maan-jee-website/documents_data.json';
const data = JSON.parse(fs.readFileSync(file, 'utf8'));
const docIndex = data.findIndex(d => d.id === 'doc_221');

if (docIndex !== -1) {
  data[docIndex].imageUrl = "https://res.cloudinary.com/b7xbeztp/image/upload/v1790360759/image221.jpg";
  data[docIndex].translations = {
    ur: {
      name: "اردو",
      dir: "rtl",
      docName: "بلدیہ قبر الست – تکنیکی معائنہ رپورٹ برائے افرازِ اراضی",
      lines: [
        { label: "Details", value: "عنوان: بخدمت جناب: سائل / بلدیاتی کونسل" },
        { label: "Title", value: "ٹیکنیکل معائنہ و فیلڈ سروے رپورٹ:" },
        { label: "Content", value: "\"علاقہ قبر الست (السیدہ زینب) کے ریئل اسٹیٹ پلاٹ نمبر 284 کا موقع پر فیلڈ معائنہ کرنے کے بعد معلوم ہوا ہے کہ مذکورہ پلاٹ کا کل رقبہ 14,439 مربع میٹر (چودہ ہزار چار سو انتالیس مربع میٹر) ہے۔ اس اراضی پر ایک پبلک روڈ / سڑک موجود ہے جو زمین کو مختلف حصوں میں تقسیم کرتی ہے۔ عام مفادِ عامہ اور سڑک کے لیے کٹوتی شدہ رقبہ تقریباً 7,791 مربع میٹر بنتا ہے۔ اس کٹوتی کے بعد باقی بچ جانے والا خالص رقبہ تقریباً 6,648 مربع میٹر ہے۔\"" },
        { label: "Details", value: "وضاحت: یہ زمین باقاعدہ شہری ماسٹر پلان / جدید رہائشی زون (سكن حديث) کے اندر واقع ہے۔ زمین کو باضابطہ قانونی افراز (ذیلی تقسیم) کی ضرورت ہے تاکہ مالک تعمیری لائسنس / پرمٹ حاصل کرنے کا اہل ہو سکے۔ برائے ملاحظہ و ضروری احکامات پیشِ خدمت ہے۔" },
        { label: "Signatory 1", value: "سربراہ ٹیکنیکل آفس: انجینئر محمد ہشام البابی (دستخط شدہ)" },
        { label: "Signatory 2", value: "سروے افسر / نمائندہ علاقہ: جرجس الحفی (دستخط شدہ)" },
        { label: "Signatory 3", value: "صدر بلدیہ السیدہ زینب (قبر الست): دستخط اور بلدیہ کی باقاعدہ سرکاری گول مہر" },
        { label: "Endorsement", value: "حتمی بلدیاتی منظوری: \"تمت الموافقة على الإفراز\" (زمین کی باقاعدہ ذیلی تقسیم / افراز کی منظوری دی جاتی ہے)۔" }
      ]
    },
    en: {
      name: "English",
      dir: "ltr",
      docName: "Qabr Essit Municipality – Technical Site Inspection Report for Land Subdivision",
      lines: [
        { label: "Details", value: "Title: To the Municipal Council / To the Applicant (إلى المستدعي / المجلس)" },
        { label: "Title", value: "Technical Site Inspection Report (تقرير الكشف الفني):" },
        { label: "Content", value: "\"Upon conducting the site inspection on real estate plot No. 284, Qabr Essit real estate zone, it was found that the total area of the aforementioned plot is 14,439 m² (fourteen thousand four hundred and thirty-nine square meters). There is an existing public road marked on the property dividing it into several parts. The area deducted for public domain / public road is approximately 7,791 m². The remaining net area of the property is approximately 6,648 m².\"" },
        { label: "Details", value: "Note: The property falls within the master / regulatory zone (منطقة تنظيمية / سكن حديث). The aforementioned property requires formal subdivision (Ifraz) so that the owner can obtain a building permit. Submitted for your review and guidance." },
        { label: "Signatory 1", value: "Head of Technical Office (رئيس المكتب الفني): Eng. Mohammad Hisham Al-Babi (Signed)" },
        { label: "Signatory 2", value: "Surveyor / Neighborhood Representative (م. ف / جرجس الحفي): Signed" },
        { label: "Signatory 3", value: "Head of Qabr Essit Municipality (رئيس بلدية قبر الست): Signed & Stamped with Official Municipal Seal" },
        { label: "Endorsement", value: "Final Approval Endorsement: \"تمت الموافقة على الإفراز\" (Subdivision / Ifraz is hereby approved)." }
      ]
    },
    ar: {
      name: "العربية",
      dir: "rtl",
      docName: "بلدية قبر الست – تقرير الكشف الفني لإفراز الأراضي",
      lines: [
        { label: "تفاصيل", value: "العنوان: إلى المستدعي / المجلس" },
        { label: "العنوان", value: "تقرير الكشف الفني:" },
        { label: "المحتوى", value: "\"بعد إجراء الكشف الميداني على العقار رقم 284 منطقة قبر الست العقارية، تبين أن المساحة الإجمالية للعقار المذكور هي 14,439 م² (أربعة عشر ألفاً وأربعمائة وتسعة وثلاثون متراً مربعاً). يمر طريق عام ضمن العقار يقسمه إلى عدة أجزاء. المساحة المقتطعة للأملاك العامة / الطريق العام تبلغ حوالي 7,791 م². المساحة الصافية المتبقية من العقار حوالي 6,648 م².\"" },
        { label: "تفاصيل", value: "ملاحظة: يقع العقار ضمن منطقة تنظيمية / سكن حديث. العقار المذكور بحاجة إلى إفراز رسمي ليتمكن المالك من الحصول على رخصة بناء. يرفع للاطلاع والتوجيه." },
        { label: "الموقع 1", value: "رئيس المكتب الفني: المهندس محمد هشام البابي (توقيع)" },
        { label: "الموقع 2", value: "م. ف / جرجس الحفي: (توقيع)" },
        { label: "الموقع 3", value: "رئيس بلدية قبر الست: توقيع وممهور بخاتم البلدية الرسمي" },
        { label: "المصادقة", value: "المصادقة النهائية: \"تمت الموافقة على الإفراز\"" }
      ]
    }
  };
  fs.writeFileSync(file, JSON.stringify(data, null, 2));
  console.log('Successfully updated doc_221');
} else {
  console.log('Error: doc_221 not found');
}
