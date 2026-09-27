const fs = require('fs');
const file = 'E:/2.maan-jee-website/documents_data.json';
const data = JSON.parse(fs.readFileSync(file, 'utf8'));
const docIndex = data.findIndex(d => d.id === 'doc_225');

if (docIndex !== -1) {
  data[docIndex].imageUrl = "https://res.cloudinary.com/b7xbeztp/image/upload/v1790360758/image225.jpg";
  data[docIndex].translations = {
    ur: {
      name: "اردو",
      dir: "rtl",
      docName: "الیکٹرانک ویزا – اسلامی جمہوریہ ایران",
      lines: [
        { label: "Details", value: "اسلامی جمہوریہ ایران – وزارتِ امورِ خارجہ | الیکٹرانک ویزا (روادید الکترونیکی)" },
        { label: "ویزا نمبر", value: "IR-21810078605" },
        { label: "درخواست نمبر", value: "AK37MJ4I" },
        { label: "پورا نام", value: "نصرت فاطمہ (NUSRAT FATIMA)" },
        { label: "تاریخِ پیدائش", value: "01/01/1958ء" },
        { label: "قومیت", value: "پاکستان" },
        { label: "پاسپورٹ نمبر", value: "DT8452184" },
        { label: "ٹریکنگ کوڈ", value: "ABEPF2CZNLB4396315" },
        { label: "ویزے کی قسم", value: "سیاحتی / جہانگردی (Tourist)" },
        { label: "قیام کی مدت", value: "ایران آمد کی تاریخ سے 30 دن" },
        { label: "تاریخِ اجراء", value: "08/10/2025ء (مطابق 16 مہر 1404 ہجری شمسی)" },
        { label: "میعادِ استعمال", value: "08/10/2025ء تا 21/11/2025ء (مطابق 16 مہر تا 30 آبان 1404 ہجری شمسی)" },
        { label: "داخلے کی نوعیت", value: "سنگل انٹری (صرف ایک بار داخلے کے لیے)" },
        { label: "بیمہ پالیسی نوٹ", value: "اس ویزا کا حامل منظور شدہ ہیلتھ انشورنس پالیسی کا احاطہ رکھتا ہے۔" },
        { label: "جاری کنندہ ادارہ", value: "سفارت خانہ اسلامی جمہوریہ ایران – لندن" },
        { label: "ہدایت", value: "برائے مہربانی سفر کے اختتام تک یہ پروانہ اپنے پاس محفوظ رکھیں۔" },
        { label: "نوٹ", value: "(ویزا تصویر، ڈیجیٹل بارکوڈ اور وزارت خارجہ کی باضابطہ مہر ثبت ہے)۔" }
      ]
    },
    en: {
      name: "English",
      dir: "ltr",
      docName: "Electronic Visa – Islamic Republic of Iran",
      lines: [
        { label: "Details", value: "Islamic Republic of Iran – Ministry of Foreign Affairs | Electronic Visa (روادید الکترونیکی)" },
        { label: "Visa No.", value: "IR-21810078605" },
        { label: "Application No.", value: "AK37MJ4I" },
        { label: "Full Name", value: "NUSRAT FATIMA" },
        { label: "Date of Birth", value: "1958/01/01" },
        { label: "Nationality", value: "Pakistan" },
        { label: "Passport No.", value: "DT8452184" },
        { label: "Tracking Code", value: "ABEPF2CZNLB4396315" },
        { label: "Visa Type", value: "Tourist (جهانگردی)" },
        { label: "Duration of Stay", value: "30 day(s) from the date of arrival" },
        { label: "Date of Issue", value: "2025/10/08 (1404/07/16)" },
        { label: "Validity Period", value: "From 2025/10/08 To 2025/11/21 (1404/07/16 to 1404/08/30)" },
        { label: "Number of Entries", value: "Single (یکبار)" },
        { label: "Insurance Clause", value: "The holder of this visa is covered by an approved insurance policy." },
        { label: "Issuing Mission", value: "Embassy of the Islamic Republic of Iran - London" },
        { label: "Official Note", value: "Please keep this letter until the end of your trip." },
        { label: "Note", value: "(Digital Barcode, Visa Photo, and Official Visa Seal of the Ministry of Foreign Affairs Affixed)." }
      ]
    },
    ar: {
      name: "العربية / فارسی",
      dir: "rtl",
      docName: "التأشيرة الإلكترونية – جمهورية إيران الإسلامية",
      lines: [
        { label: "تفاصيل", value: "جمهورية إيران الإسلامية – وزارة الشؤون الخارجية | التأشيرة الإلكترونية (روادید الکترونیکی)" },
        { label: "رقم التأشيرة", value: "IR-21810078605" },
        { label: "رقم الطلب", value: "AK37MJ4I" },
        { label: "الاسم الكامل", value: "نصرت فاطمة" },
        { label: "تاريخ الولادة", value: "1958/01/01" },
        { label: "الجنسية", value: "باكستان" },
        { label: "رقم الجواز", value: "DT8452184" },
        { label: "رمز التتبع", value: "ABEPF2CZNLB4396315" },
        { label: "نوع التأشيرة", value: "سياحية (جهانگردی)" },
        { label: "مدة الإقامة", value: "30 يوماً من تاريخ الدخول" },
        { label: "تاريخ الإصدار", value: "2025/10/08 (1404/07/16)" },
        { label: "فترة الصلاحية", value: "من 2025/10/08 إلى 2025/11/21 (1404/07/16 إلى 1404/08/30)" },
        { label: "عدد مرات الدخول", value: "لمرة واحدة (یکبار)" },
        { label: "تأمين", value: "حامل هذه التأشيرة مشمول بوثيقة تأمين معتمدة." },
        { label: "جهة الإصدار", value: "سفارة جمهورية إيران الإسلامية - لندن" },
        { label: "ملاحظة رسمية", value: "يرجى الاحتفاظ بهذه الورقة حتى نهاية رحلتك." },
        { label: "ملاحظة", value: "(الباركود الرقمي، صورة التأشيرة، والختم الرسمي لوزارة الخارجية)." }
      ]
    }
  };
  fs.writeFileSync(file, JSON.stringify(data, null, 2));
  console.log('Successfully updated doc_225');
} else {
  console.log('Error: doc_225 not found');
}
