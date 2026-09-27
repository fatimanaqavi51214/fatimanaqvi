const fs = require('fs');
const file = 'E:/2.maan-jee-website/documents_data.json';
const data = JSON.parse(fs.readFileSync(file, 'utf8'));

// Update doc_167
const index167 = data.findIndex(d => d.id === 'doc_167');
if (index167 !== -1) {
  data[index167].imageUrl = "https://res.cloudinary.com/b7xbeztp/image/upload/v1790360748/image167.jpg";
  data[index167].translations = {
    ur: {
      name: "اردو",
      dir: "rtl",
      docName: "حکومتی مکتوب - دیوان الامیری شارجہ",
      lines: [
        { label: "Details", value: "سربراہ (لیٹر ہیڈ):" },
        { label: "ادارہ", value: "دیوان الامیری، حکومتِ شارجہ (Govt. of Sharjah – Dewan Al-Amiri)" },
        { label: "ڈاک بکس", value: "1، شارجہ" },
        { label: "نمبر", value: "بلا نمبر" },
        { label: "تاریخ", value: "1976ء" },
        { label: "Details", value: "مکتوب کا متن اور مفہوم:" },
        { label: "موضوع", value: "خط بنام ڈائریکٹر / انچارج پولیس" },
        { label: "عربی متن", value: "\"يرجى التكرم بالإفراج عن حاملة هذه الرسالة نصرة ... لحين إحضار بطاقة الوجوه / الأوراق ... ونرجو اتخاذ ما ترونه مناسباً...\"" },
        { label: "اردو مفہوم", value: "\"التماس ہے کہ اس خط کی حاملہ محترمہ نصرت کو اپنی شناختی دستاویزات / متعلقہ کاغذات پیش کرنے تک ضروری قانونی سہولت دی جائے اور مناسب کارروائی عمل میں لائی جائے۔\"" },
        { label: "دستخط", value: "دیوان الامیری کے مجاز افسر کے دستخط موجود ہیں۔" }
      ]
    },
    en: {
      name: "English",
      dir: "ltr",
      docName: "Government Letter - Dewan Al-Amiri, Sharjah",
      lines: [
        { label: "Details", value: "Header:" },
        { label: "Organization", value: "Dewan Al-Amiri, Government of Sharjah" },
        { label: "P.O. Box", value: "1, Sharjah" },
        { label: "Number", value: "No number" },
        { label: "Date", value: "1976" },
        { label: "Details", value: "Letter Content and Meaning:" },
        { label: "Subject", value: "Letter addressed to the Director / In-charge of Police" },
        { label: "Arabic Text", value: "\"يرجى التكرم بالإفراج عن حاملة هذه الرسالة نصرة ... لحين إحضار بطاقة الوجوه / الأوراق ... ونرجو اتخاذ ما ترونه مناسباً...\"" },
        { label: "English Meaning", value: "\"It is requested that the bearer of this letter, Mrs. Nusrat, be granted the necessary legal facilitation and released until she presents her identification documents / relevant papers, and that appropriate action be taken.\"" },
        { label: "Signatory", value: "Signed by the authorized officer of Dewan Al-Amiri." }
      ]
    },
    ar: {
      name: "العربية",
      dir: "rtl",
      docName: "رسالة حكومية - الديوان الأميري، الشارقة",
      lines: [
        { label: "تفاصيل", value: "الترويسة:" },
        { label: "الجهة", value: "الديوان الأميري، حكومة الشارقة" },
        { label: "ص.ب", value: "1، الشارقة" },
        { label: "الرقم", value: "بدون رقم" },
        { label: "التاريخ", value: "1976" },
        { label: "تفاصيل", value: "نص الرسالة ومضمونها:" },
        { label: "الموضوع", value: "رسالة موجهة إلى مدير / مسؤول الشرطة" },
        { label: "النص العربي", value: "\"يرجى التكرم بالإفراج عن حاملة هذه الرسالة نصرة ... لحين إحضار بطاقة الوجوه / الأوراق ... ونرجو اتخاذ ما ترونه مناسباً...\"" },
        { label: "المعنى", value: "\"نلتمس منح حاملة هذه الرسالة السيدة نصرت التسهيلات القانونية اللازمة والإفراج عنها لحين إحضارها أوراقها الثبوتية / مستنداتها ذات الصلة، واتخاذ الإجراءات المناسبة.\"" },
        { label: "التوقيع", value: "توقيع الضابط المخول في الديوان الأميري." }
      ]
    }
  };
}

// Add doc_030
const index030 = data.findIndex(d => d.id === 'doc_030');
if (index030 === -1) {
  const newDoc = {
    id: 'doc_030',
    imageUrl: "", // Left blank intentionally until user provides
    translations: {
      ur: {
        name: "اردو",
        dir: "rtl",
        docName: "شامی اقامہ کارڈ اور اسپینش ٹرانسپورٹ کارڈ",
        lines: [
          { label: "Details", value: "اوپری دستاویز: جمہوریہ عربیہ سوریہ – رہائشی کارڈ (اقامہ)" },
          { label: "جاری کنندہ ادارہ", value: "وزارتِ داخلہ – نظامت برائے ہجرت و پاسپورٹ (وزارة الداخلية – إدارة الهجرة والجوازات)" },
          { label: "اقامے کی قسم", value: "عام اقامہ (إقامة عادية)" },
          { label: "نام", value: "NUSRAT (نصرت)" },
          { label: "خاندانی نام (کنیت)", value: "FATIMA (فاطمہ)" },
          { label: "تاریخِ پیدائش", value: "01/01/1958ء" },
          { label: "جنس", value: "مادہ / خاتون (أنثى)" },
          { label: "قومیت", value: "پاکستان (باكستان)" },
          { label: "قومی رجسٹریشن نمبر", value: "10202020000819" },
          { label: "قانونی پابندی / شرط", value: "ملازمت یا کام کرنے کی اجازت نہیں ہے (لا يسمح بمزاولة العمل)" }
        ]
      },
      en: {
        name: "English",
        dir: "ltr",
        docName: "Syrian Residence Card & Spanish Transport Card",
        lines: [
          { label: "Details", value: "Top Document: Syrian Arab Republic – Residence Card (Iqama)" },
          { label: "Issuing Authority", value: "Ministry of Interior – Directorate of Migration and Passports (وزارة الداخلية – إدارة الهجرة والجوازات)" },
          { label: "Permit Type", value: "Ordinary Residence (إقامة عادية)" },
          { label: "Name", value: "NUSRAT (نصرت)" },
          { label: "Surname (Family Name)", value: "FATIMA (فاطمہ)" },
          { label: "Date of Birth", value: "01/01/1958" },
          { label: "Gender", value: "Female (أنثى)" },
          { label: "Nationality", value: "Pakistan (باكستان)" },
          { label: "National Registration No.", value: "10202020000819" },
          { label: "Legal Restriction / Condition", value: "Not permitted to work (لا يسمح بمزاولة العمل)" }
        ]
      },
      ar: {
        name: "العربية",
        dir: "rtl",
        docName: "بطاقة إقامة سورية وبطاقة مواصلات إسبانية",
        lines: [
          { label: "تفاصيل", value: "المستند العلوي: الجمهورية العربية السورية – بطاقة إقامة" },
          { label: "الجهة المصدرة", value: "وزارة الداخلية – إدارة الهجرة والجوازات" },
          { label: "نوع الإقامة", value: "إقامة عادية" },
          { label: "الاسم", value: "NUSRAT (نصرت)" },
          { label: "الكنية", value: "FATIMA (فاطمة)" },
          { label: "تاريخ الولادة", value: "01/01/1958" },
          { label: "الجنس", value: "أنثى" },
          { label: "الجنسية", value: "باكستان" },
          { label: "الرقم الوطني", value: "10202020000819" },
          { label: "قيد / شرط قانوني", value: "لا يسمح بمزاولة العمل" }
        ]
      }
    }
  };
  // Insert in a proper place, or just push at end.
  data.push(newDoc);
}

fs.writeFileSync(file, JSON.stringify(data, null, 2));
console.log('Successfully updated doc_167 and inserted doc_030');
