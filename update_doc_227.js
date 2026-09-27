const fs = require('fs');
const file = 'E:/2.maan-jee-website/documents_data.json';
const data = JSON.parse(fs.readFileSync(file, 'utf8'));
const docIndex = data.findIndex(d => d.id === 'doc_227');

if (docIndex !== -1) {
  data[docIndex].imageUrl = "https://res.cloudinary.com/b7xbeztp/image/upload/v1790360759/image227.jpg";
  data[docIndex].translations = {
    ur: {
      name: "اردو",
      dir: "rtl",
      docName: "برطانیہ کا امیگریشن اسٹیٹس / ای ویزا",
      lines: [
        { label: "Details", value: "حکومتِ برطانیہ (GOV.UK) – امیگریشن اسٹیٹس کی تصدیق و ثبوت" },
        { label: "Title", value: "آپ کا امیگریشن اسٹیٹس (ای ویزا / eVisa)" },
        { label: "نام", value: "نصرت فاطمہ" },
        { label: "تاریخِ پیدائش", value: "یکم جنوری 1958ء" },
        { label: "قومیت", value: "پاکستانی (PAK)" },
        { label: "اسٹیٹس", value: "پری سیٹلڈ اسٹیٹس (Pre-settled status) / محدود قیام کی اجازت (Limited leave to remain)" },
        { label: "میعاد (کب تک درست ہے)", value: "12 اکتوبر 2026ء" },
        { label: "Details", value: "رہنمائی و معلومات:" },
        { label: "Content", value: "\"اس تاریخ کے بعد برطانیہ میں قیام جاری رکھنے کے لیے آپ کے پاس ای یو سیٹلمنٹ اسکیم (EU Settlement Scheme) کے تحت پری سیٹلڈ اسٹیٹس یا سیٹلڈ اسٹیٹس (یا قیام کی کوئی دوسری قانونی اجازت) ہونا ضروری ہے۔ جیسے ہی آپ اہل ہوں، آپ سیٹلڈ اسٹیٹس میں منتقلی کے لیے درخواست دے سکتے ہیں۔ عام طور پر یہ اس وقت ممکن ہوتا ہے جب آپ برطانیہ میں مسلسل 5 سال گزار چکے ہوں۔\"" },
        { label: "نوٹ", value: "(تصویر منسلک ہے)" }
      ]
    },
    en: {
      name: "English",
      dir: "ltr",
      docName: "UK Immigration Status / eVisa",
      lines: [
        { label: "Details", value: "GOV.UK – View and prove your immigration status" },
        { label: "Title", value: "Your immigration status (eVisa)" },
        { label: "Name", value: "NUSRAT FATIMA" },
        { label: "Date of birth", value: "1 January 1958" },
        { label: "Nationality", value: "PAK (Pakistan)" },
        { label: "Status", value: "Pre-settled status, also known as limited leave to remain" },
        { label: "Valid until", value: "12 October 2026" },
        { label: "Details", value: "Information / Guidance:" },
        { label: "Content", value: "\"To stay in the UK after this date, you will need to have either pre-settled status or settled status under the EU Settlement Scheme (or another type of permission to stay). You can apply to switch to settled status as soon as you are eligible for it. This is usually once you have lived in the UK for 5 years. Find out how to switch to settled status.\"" },
        { label: "Note", value: "(Applicant's digital photo attached)" }
      ]
    },
    ar: {
      name: "العربية",
      dir: "rtl",
      docName: "حالة الهجرة في المملكة المتحدة / التأشيرة الإلكترونية",
      lines: [
        { label: "تفاصيل", value: "GOV.UK – عرض وإثبات حالة الهجرة الخاصة بك" },
        { label: "العنوان", value: "حالة الهجرة الخاصة بك (التأشيرة الإلكترونية)" },
        { label: "الاسم", value: "نصرت فاطمة" },
        { label: "تاريخ الولادة", value: "1 يناير 1958" },
        { label: "الجنسية", value: "باكستان (PAK)" },
        { label: "الحالة", value: "إقامة مؤقتة قبل الاستقرار (Pre-settled status)" },
        { label: "صالح حتى", value: "12 أكتوبر 2026" },
        { label: "تفاصيل", value: "معلومات / توجيهات:" },
        { label: "المحتوى", value: "\"للبقاء في المملكة المتحدة بعد هذا التاريخ، ستحتاج إما إلى إقامة مؤقتة أو إقامة دائمة بموجب خطة تسوية الاتحاد الأوروبي (أو أي نوع آخر من تصاريح الإقامة). يمكنك التقدم بطلب للتبديل إلى الإقامة الدائمة بمجرد أن تكون مؤهلاً لذلك. ويحدث هذا عادةً بمجرد أن تعيش في المملكة المتحدة لمدة 5 سنوات.\"" },
        { label: "ملاحظة", value: "(صورة مقدم الطلب الرقمية مرفقة)" }
      ]
    }
  };
  fs.writeFileSync(file, JSON.stringify(data, null, 2));
  console.log('Successfully updated doc_227');
} else {
  console.log('Error: doc_227 not found');
}
