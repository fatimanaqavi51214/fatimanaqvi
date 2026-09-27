const fs = require('fs');
const file = 'E:/2.maan-jee-website/documents_data.json';
const data = JSON.parse(fs.readFileSync(file, 'utf8'));
const docIndex = data.findIndex(d => d.id === 'doc_247');

if (docIndex !== -1) {
  data[docIndex].imageUrl = "https://res.cloudinary.com/b7xbeztp/image/upload/v1790360768/image247.jpg";
  data[docIndex].translations = {
    ur: {
      name: "اردو",
      dir: "rtl",
      docName: "اقامہ شام بمعہ بارسلونا ٹرانسپورٹ کارڈ",
      lines: [
        { label: "Details", value: "اوپری دستاویز: جمہوریہ عربیہ سوریہ (شام) – رہائشی اجازت نامہ (اقامہ)" },
        { label: "مقامِ اجراء", value: "دمشق" },
        { label: "پیشہ", value: "بغیر ملازمت (کوئی کام نہیں)" },
        { label: "تاریخِ اجراء", value: "7 فروری 2024ء" },
        { label: "تاریخِ تنسیخ (ایکسپائری)", value: "16 مئی 2025ء" },
        { label: "پاسپورٹ نمبر", value: "DT8452184" },
        { label: "پاسپورٹ کی میعاد", value: "8 اکتوبر 2033ء" },
        { label: "مقامِ رہائش", value: "دمشق، الصالحیہ، محلہ زین العابدین، حوالہ نمبر 736" },
        { label: "رہائش کا سبب / نوعیت", value: "جائیداد کی ملکیت (مالکِ جائیداد)" },
        { label: "سیریل نمبر", value: "0030776" },
        { label: "Details", value: "نچلا کارڈ: بارسلونا پبلک ٹرانسپورٹ کارڈ (اسپین)" },
        { label: "Note 1", value: "یہ کارڈ بارسلونا میٹروپولیٹن ایریا (AMB) زون 1 میں پبلک ٹرانسپورٹ، ٹرام اور ریلوے پر سفر کی اجازت دیتا ہے۔" },
        { label: "Note 2", value: "ذاتی اور ناقابلِ انتقال کارڈ ہے، جس کے ساتھ اصل شناختی کارڈ/NIE پیش کرنا لازمی ہے۔" }
      ]
    },
    en: {
      name: "English",
      dir: "ltr",
      docName: "Syrian Residence Permit & Barcelona Transport Card",
      lines: [
        { label: "Details", value: "Top Document: Syrian Arab Republic – Residence Permit" },
        { label: "Issuing Place", value: "Damascus" },
        { label: "Profession", value: "Without employment (بدون عمل)" },
        { label: "Issue Date", value: "07/02/2024" },
        { label: "Expiry Date", value: "16/05/2025" },
        { label: "Passport No.", value: "DT8452184" },
        { label: "Passport Expiry Date", value: "08/10/2033" },
        { label: "Residence Address", value: "Damascus, Al-Salihiyah, Zayn al-Abidin, Ref. No. 736" },
        { label: "Reason for Stay", value: "Property Owner (مالك عقار)" },
        { label: "Permit Serial No.", value: "0030776" },
        { label: "Details", value: "Bottom Card: Metropolitan Area of Barcelona (AMB) – Public Transport Pass" },
        { label: "Note 1", value: "Valid for unlimited travel within the integrated fare system zone 1 on AMB networks, TRAM, and FGC." },
        { label: "Note 2", value: "Non-transferable; valid only when presented with original DNI/NIE or certified copy." },
        { label: "Note 3", value: "Not valid on Aerobús, Cable Car, Blue Tram, or Tourist Bus." },
        { label: "Contact", value: "Customer support: 900 70 00 77." }
      ]
    },
    ar: {
      name: "العربية",
      dir: "rtl",
      docName: "بطاقة إقامة سورية مع بطاقة مواصلات برشلونة",
      lines: [
        { label: "تفاصيل", value: "المستند العلوي: الجمهورية العربية السورية – بطاقة إقامة" },
        { label: "مكان الإصدار", value: "دمشق" },
        { label: "المهنة", value: "بدون عمل" },
        { label: "تاريخ الإصدار", value: "07/02/2024" },
        { label: "تاريخ الانتهاء", value: "16/05/2025" },
        { label: "رقم الجواز", value: "DT8452184" },
        { label: "تاريخ انتهاء الجواز", value: "08/10/2033" },
        { label: "عنوان الإقامة", value: "دمشق، الصالحية، زين العابدين، رقم 736" },
        { label: "سبب الإقامة", value: "مالك عقار" },
        { label: "الرقم التسلسلي", value: "0030776" },
        { label: "تفاصيل", value: "البطاقة السفلية: منطقة برشلونة الحضرية (AMB) – بطاقة النقل العام" },
        { label: "ملاحظة 1", value: "صالحة لرحلات غير محدودة ضمن نظام التعرفة المتكاملة للمنطقة 1 على شبكات AMB، TRAM، و FGC." },
        { label: "ملاحظة 2", value: "غير قابلة للتحويل؛ صالحة فقط عند تقديمها مع بطاقة الهوية الأصلية (DNI/NIE) أو نسخة مصدقة." },
        { label: "ملاحظة 3", value: "غير صالحة على إيروبوس، التلفريك، الترام الأزرق، أو الحافلة السياحية." },
        { label: "الاتصال", value: "دعم العملاء: 900 70 00 77." }
      ]
    }
  };
  fs.writeFileSync(file, JSON.stringify(data, null, 2));
  console.log('Successfully updated doc_247');
} else {
  console.log('Error: doc_247 not found');
}
