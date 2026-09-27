const fs = require('fs');
const file = 'E:/2.maan-jee-website/documents_data.json';
const data = JSON.parse(fs.readFileSync(file, 'utf8'));
const docIndex = data.findIndex(d => d.id === 'doc_249');

if (docIndex !== -1) {
  data[docIndex].imageUrl = "https://res.cloudinary.com/b7xbeztp/image/upload/v1790360765/image249.jpg";
  data[docIndex].translations = {
    ur: {
      name: "اردو",
      dir: "rtl",
      docName: "سابقہ شامی اقامہ بمعہ ڈرائیونگ لائسنس",
      lines: [
        { label: "Details", value: "اوپری دستاویز: جمہوریہ عربیہ سوریہ (شام) – رہائشی اقامہ" },
        { label: "مقامِ اجراء", value: "دمشق" },
        { label: "پیشہ", value: "بغیر ملازمت" },
        { label: "تاریخِ اجراء", value: "4 نومبر 2017ء" },
        { label: "تاریخِ تنسیخ", value: "3 نومبر 2018ء" },
        { label: "پاسپورٹ نمبر", value: "8452182" },
        { label: "پاسپورٹ کی میعاد", value: "17 مارچ 2021ء" },
        { label: "رہائشی پتہ", value: "دمشق، حی الامین، حوالہ نمبر 726" },
        { label: "رہائش کا سبب", value: "مالکِ جائیداد" },
        { label: "سیریل نمبر", value: "0020330" },
        { label: "Details", value: "نچلی دستاویز: جمہوریہ عربیہ سوریہ – وزارتِ داخلہ (محکمہ ٹریفک پولیس)" },
        { label: "دستاویز", value: "پرائیویٹ ڈرائیونگ لائسنس (کیٹیگری 'ب')" },
        { label: "لائسنس نمبر", value: "2 / 389742" },
        { label: "اختیارات", value: "یہ لائسنس حامل کو چھوٹی پرائیویٹ گاڑیاں اور تجارتی گاڑیاں جن کا کل وزن 3,500 کلوگرام سے زائد نہ ہو، اور پبلک ٹرانسپورٹ گاڑیاں جن کا وزن 2,000 کلوگرام سے زائد نہ ہو، چلانے کا مجاز بناتا ہے۔" }
      ]
    },
    en: {
      name: "English",
      dir: "ltr",
      docName: "Former Syrian Residence Permit & Driving Licence",
      lines: [
        { label: "Details", value: "Top Document: Syrian Arab Republic – Residence Permit" },
        { label: "Issuing Place", value: "Damascus" },
        { label: "Profession", value: "Without employment (بدون عمل)" },
        { label: "Issue Date", value: "04/11/2017" },
        { label: "Expiry Date", value: "03/11/2018" },
        { label: "Passport No.", value: "8452182" },
        { label: "Passport Expiry Date", value: "17/03/2021" },
        { label: "Residence Address", value: "Damascus, Hayy Al-Amin, Ref. No. 726" },
        { label: "Reason for Stay", value: "Property Owner (مالك عقار)" },
        { label: "Permit Serial No.", value: "0020330" },
        { label: "Details", value: "Bottom Document: Syrian Arab Republic – Ministry of Interior (Traffic Police Dept.)" },
        { label: "Type", value: "Private Driving Licence (Category B)" },
        { label: "Licence No.", value: "2 / 389742" },
        { label: "Entitlement", value: "Authorizes the holder to drive small private motor vehicles and transport vehicles with a gross weight not exceeding 3,500 kg, and public transport vehicles not exceeding 2,000 kg." }
      ]
    },
    ar: {
      name: "العربية",
      dir: "rtl",
      docName: "إقامة سورية سابقة مع رخصة قيادة",
      lines: [
        { label: "تفاصيل", value: "المستند العلوي: الجمهورية العربية السورية – بطاقة إقامة" },
        { label: "مكان الإصدار", value: "دمشق" },
        { label: "المهنة", value: "بدون عمل" },
        { label: "تاريخ الإصدار", value: "04/11/2017" },
        { label: "تاريخ الانتهاء", value: "03/11/2018" },
        { label: "رقم الجواز", value: "8452182" },
        { label: "تاريخ انتهاء الجواز", value: "17/03/2021" },
        { label: "عنوان الإقامة", value: "دمشق، حي الأمين، رقم 726" },
        { label: "سبب الإقامة", value: "مالك عقار" },
        { label: "الرقم التسلسلي", value: "0020330" },
        { label: "تفاصيل", value: "المستند السفلي: الجمهورية العربية السورية – وزارة الداخلية (إدارة شرطة المرور)" },
        { label: "النوع", value: "إجازة سوق خاصة (الفئة ب)" },
        { label: "رقم الإجازة", value: "2 / 389742" },
        { label: "التخويل", value: "تخول حاملها قيادة السيارات الصغيرة الخاصة ومركبات النقل التي لا يتجاوز وزنها الإجمالي 3500 كغ، ومركبات النقل العام التي لا يتجاوز وزنها 2000 كغ." }
      ]
    }
  };
  fs.writeFileSync(file, JSON.stringify(data, null, 2));
  console.log('Successfully updated doc_249');
} else {
  console.log('Error: doc_249 not found');
}
