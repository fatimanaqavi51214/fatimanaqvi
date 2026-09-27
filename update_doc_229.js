const fs = require('fs');
const file = 'E:/2.maan-jee-website/documents_data.json';
const data = JSON.parse(fs.readFileSync(file, 'utf8'));
const docIndex = data.findIndex(d => d.id === 'doc_229');

if (docIndex !== -1) {
  data[docIndex].imageUrl = "https://res.cloudinary.com/b7xbeztp/image/upload/v1790360759/image229.jpg";
  data[docIndex].translations = {
    ur: {
      name: "اردو",
      dir: "rtl",
      docName: "متحدہ عرب امارات کا الیکٹرانک ویزا / اجازت نامۂ داخلہ – دبئی",
      lines: [
        { label: "Details", value: "متحدہ عرب امارات | وفاقی اتھارٹی برائے شناخت، شہریت، کسٹمز اور پورٹ سیکیورٹی | جنرل ڈائریکٹوریٹ آف ریزیڈنسی اینڈ فارنرز افیئرز (GDRFA) – دبئی" },
        { label: "Title", value: "الیکٹرانک ویزا / اجازت نامۂ داخلہ (Entry Permit / إذن دخول إلكتروني)" },
        { label: "قیام کی زیادہ سے زیادہ مدت", value: "30 دن" },
        { label: "ویزے کی قسم", value: "سیاحت (ٹورسٹ ویزا) – سنگل انٹری (صرف ایک بار داخلے کے لیے)" },
        { label: "اجازت نامہ داخلہ نمبر", value: "210/2025/87625735" },
        { label: "تاریخ و مقامِ اجراء", value: "05 دسمبر 2025ء، دبئی" },
        { label: "داخلے کی آخری تاریخ (ویلیڈیٹی)", value: "02 فروری 2026ء" },
        { label: "یو آئی ڈی نمبر (UID No)", value: "12369503" },
        { label: "Details", value: "مسافر کے کوائف:" },
        { label: "پورا نام", value: "مسز نصرت فاطمہ غلام سرور" },
        { label: "قومیت", value: "پاکستان" },
        { label: "مقامِ پیدائش", value: "کراچی، پاکستان" },
        { label: "تاریخِ پیدائش", value: "01/01/1958ء" },
        { label: "پاسپورٹ نمبر", value: "نارمل / DT8452184" },
        { label: "پیشہ", value: "تاجر / کاروبار (Business)" },
        { label: "Details", value: "میزبان کمپنی (Host):" },
        { label: "نام", value: "الہدف ٹریول اینڈ ٹورازم ایل ایل سی" },
        { label: "رابطہ و پتہ", value: "پوسٹ بکس: 16373، فون: 2522486-04، موبائل: 8119911-050" },
        { label: "ہدایت نامہ", value: "\"متحدہ عرب امارات آپ کو خوش آمدید کہتا ہے اور آپ کے خوشگوار قیام کی تمنا کرتا ہے۔ برائے مہربانی ویزے کی میعاد ختم ہونے سے پہلے اپنا اسٹیٹس تبدیل کروائیں یا ملک سے روانہ ہوں تاکہ ہم دوبارہ آپ کا استقبال کر سکیں\"۔" },
        { label: "Details", value: "(ڈیجیٹل بارکوڈ، تصویر، اور بلدیاتی و امیگریشن ڈیجیٹل مہر موجود ہے)۔" }
      ]
    },
    en: {
      name: "English",
      dir: "ltr",
      docName: "UAE Entry Permit / eVisa - Dubai",
      lines: [
        { label: "Details", value: "United Arab Emirates | Federal Authority for Identity, Citizenship, Customs & Port Security | General Directorate of Residency and Foreigners Affairs – Dubai" },
        { label: "Title", value: "Entry Permit (e-Visa / إذن دخول إلكتروني)" },
        { label: "Maximum Stay", value: "30 Days" },
        { label: "Visa Category", value: "Tourism – Single – 30 Days (سياحة - سفرة واحدة)" },
        { label: "Entry Permit No.", value: "210/2025/87625735" },
        { label: "Date & Place of Issue", value: "05-12-2025, Dubai" },
        { label: "Valid Until (for entry)", value: "02-02-2026" },
        { label: "U.I.D. No.", value: "12369503" },
        { label: "Details", value: "Applicant / Visitor Particulars:" },
        { label: "Full Name", value: "Mrs. NUSRAT FATIMA GHULAM SARWAR" },
        { label: "Nationality", value: "PAKISTAN" },
        { label: "Place of Birth", value: "KARACHI PAK" },
        { label: "Date of Birth", value: "01/01/1958" },
        { label: "Passport No.", value: "Normal / DT8452184" },
        { label: "Profession", value: "BUSINESS (تاجر)" },
        { label: "Details", value: "Host Information (المستضيف):" },
        { label: "Name", value: "AL HADAF TRAVEL AND TOURISM L.L.C" },
        { label: "Address", value: "P.O. BOX: 16373, Tel: 04-2522486, Mob: 050-8119911" },
        { label: "Note / Advisory", value: "\"The United Arab Emirates welcomes you and wishes you a happy stay. Please be sure to change your status or leave before the visa expires, so we can welcome you again.\"" },
        { label: "Details", value: "Barcode, Digital Photo, and Official Verification Stamp of GDRFA Dubai Affixed." }
      ]
    },
    ar: {
      name: "العربية",
      dir: "rtl",
      docName: "إذن دخول إلكتروني - دبي، الإمارات العربية المتحدة",
      lines: [
        { label: "تفاصيل", value: "الإمارات العربية المتحدة | الهيئة الاتحادية للهوية والجنسية والجمارك وأمن المنافذ | الإدارة العامة للإقامة وشؤون الأجانب – دبي" },
        { label: "العنوان", value: "إذن دخول إلكتروني (e-Visa)" },
        { label: "الحد الأقصى للإقامة", value: "30 يوماً" },
        { label: "فئة التأشيرة", value: "سياحة - سفرة واحدة" },
        { label: "رقم إذن الدخول", value: "210/2025/87625735" },
        { label: "تاريخ ومكان الإصدار", value: "05-12-2025، دبي" },
        { label: "صالح لغاية (للدخول)", value: "02-02-2026" },
        { label: "الرقم الموحد (U.I.D.)", value: "12369503" },
        { label: "تفاصيل", value: "بيانات المكفول / الزائر:" },
        { label: "الاسم الكامل", value: "السيدة نصرت فاطمة غلام سرور" },
        { label: "الجنسية", value: "باكستان" },
        { label: "مكان الولادة", value: "كراتشي، باكستان" },
        { label: "تاريخ الولادة", value: "01/01/1958" },
        { label: "رقم الجواز", value: "عادي / DT8452184" },
        { label: "المهنة", value: "تاجر (BUSINESS)" },
        { label: "تفاصيل", value: "بيانات المستضيف (Host):" },
        { label: "الاسم", value: "الهدف للسياحة والسفر ذ.م.م" },
        { label: "العنوان", value: "ص.ب: 16373، هاتف: 04-2522486، متحرك: 050-8119911" },
        { label: "ملاحظة / إرشاد", value: "\"ترحب بكم دولة الإمارات العربية المتحدة وتتمنى لكم إقامة سعيدة. يرجى التأكد من تعديل وضعك أو المغادرة قبل انتهاء صلاحية التأشيرة لكي نرحب بكم مرة أخرى.\"" },
        { label: "تفاصيل", value: "(الباركود، الصورة الرقمية، وختم التحقق الرسمي للإدارة العامة للإقامة وشؤون الأجانب بدبي)." }
      ]
    }
  };
  fs.writeFileSync(file, JSON.stringify(data, null, 2));
  console.log('Successfully updated doc_229');
} else {
  console.log('Error: doc_229 not found');
}
