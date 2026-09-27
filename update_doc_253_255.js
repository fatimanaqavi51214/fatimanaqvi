const fs = require('fs');
const file = 'E:/2.maan-jee-website/documents_data.json';
const data = JSON.parse(fs.readFileSync(file, 'utf8'));

// Update doc_253
const index253 = data.findIndex(d => d.id === 'doc_253');
if (index253 !== -1) {
  data[index253].imageUrl = "https://res.cloudinary.com/b7xbeztp/image/upload/v1790360770/image253.jpg";
  data[index253].translations = {
    ur: {
      name: "اردو",
      dir: "rtl",
      docName: "قومی شناختی کارڈ (پرانا مینول فارمیٹ، حکومتِ پاکستان) - سامنے کا رخ",
      lines: [
        { label: "جاری کنندہ حکومت", value: "حکومتِ پاکستان" },
        { label: "کارڈ کا سیریل نمبر", value: "BG 332492" },
        { label: "دستخط / نامِ حامل", value: "نصرت فاطمہ" },
        { label: "ڈسٹرکٹ رجسٹریشن آفس کوڈ", value: "DRO-LHR-96-1132" },
        { label: "تاریخِ اجراء", value: "24 مارچ 1979ء" },
        { label: "تصویر", value: "حامل کی بلیک اینڈ وائٹ تصویر موجود ہے۔" }
      ]
    },
    en: {
      name: "English",
      dir: "ltr",
      docName: "National Identity Card of Pakistan (Old Manual Format) - Front Side",
      lines: [
        { label: "Issuing Authority", value: "Government of Pakistan (حکومت پاکستان)" },
        { label: "Card Serial Number", value: "BG 332492" },
        { label: "Holder’s Signature / Name Impression", value: "Nusrat Fatima (نصرت فاطمہ)" },
        { label: "District Registration Office Code", value: "DRO-LHR-96-1132" },
        { label: "Date of Issue", value: "24-03-1979" },
        { label: "Holder's Photograph", value: "Black-and-white photograph affixed" }
      ]
    },
    ar: {
      name: "العربية",
      dir: "rtl",
      docName: "بطاقة الهوية الوطنية الباكستانية (النسخة القديمة اليدوية) - الوجه الأمامي",
      lines: [
        { label: "جهة الإصدار", value: "حكومة باكستان" },
        { label: "الرقم التسلسلي للبطاقة", value: "BG 332492" },
        { label: "توقيع الحامل / بصمة الاسم", value: "نصرت فاطمة" },
        { label: "رمز مكتب التسجيل بالمنطقة", value: "DRO-LHR-96-1132" },
        { label: "تاريخ الإصدار", value: "24-03-1979" },
        { label: "صورة الحامل", value: "صورة بالأبيض والأسود مرفقة" }
      ]
    }
  };
}

// Update doc_255
const index255 = data.findIndex(d => d.id === 'doc_255');
if (index255 !== -1) {
  data[index255].imageUrl = "https://res.cloudinary.com/b7xbeztp/image/upload/v1790360768/image255.jpg";
  data[index255].translations = {
    ur: {
      name: "اردو",
      dir: "rtl",
      docName: "قومی شناختی کارڈ (پرانا مینول فارمیٹ، حکومتِ پاکستان) - پشت کا رخ",
      lines: [
        { label: "شناختی کارڈ نمبر", value: "270-58-163462 (پرانا حوالہ / ریکارڈ نمبر: 27092479268)" },
        { label: "نام", value: "نصرت فاطمہ" },
        { label: "والد کا نام", value: "سید محمد نقوی" },
        { label: "موجودہ پتہ", value: "108-جی، گلی نمبر 3، لاہور" },
        { label: "مستقل پتہ", value: "محلہ [...] جلیل پور، تحصیل کھاریاں، ضلع گجرات" },
        { label: "شناختی علامت", value: "ہاتھ پر زخم کا نشان" },
        { label: "تاریخ / سالِ پیدائش", value: "1958ء" },
        { label: "ضروری ہدایات", value: "\"کارڈ گم ہونے کی صورت میں قریبی رجسٹریشن دفتر میں اطلاع دیں۔ گم شدہ کارڈ ملنے پر قریبی لیٹر بکس میں ڈال دیں۔\"" },
        { label: "توثیق", value: "ڈسٹرکٹ رجسٹرار کے دستخط و مہر۔" }
      ]
    },
    en: {
      name: "English",
      dir: "ltr",
      docName: "National Identity Card of Pakistan (Old Manual Format) - Back Side",
      lines: [
        { label: "Identity Card Number (Shanakhti No.)", value: "270-58-163462 (Barcode / Reference Margin: Old NIC: 27092479268)" },
        { label: "Full Name", value: "Nusrat Fatima (نصرت فاطمہ)" },
        { label: "Father's Name", value: "Syed Mohammad Naqvi (سید محمد نقوی)" },
        { label: "Present Address", value: "108-G, Gali No. 3, Lahore" },
        { label: "Permanent Address", value: "Mohallah [...] Jalil Pur, Tehsil Kharian, District Gujrat" },
        { label: "Identification Mark", value: "A scar mark on the hand (ہاتھ پر زخم کا نشان)" },
        { label: "Year of Birth", value: "1958" },
        { label: "Statutory Instructions", value: "\"If lost, report immediately to the nearest registration office. If found, drop into any post box.\"" },
        { label: "Official Verification", value: "Signature and seal of the District Registrar." }
      ]
    },
    ar: {
      name: "العربية",
      dir: "rtl",
      docName: "بطاقة الهوية الوطنية الباكستانية (النسخة القديمة اليدوية) - الوجه الخلفي",
      lines: [
        { label: "رقم بطاقة الهوية", value: "270-58-163462 (الرقم القديم: 27092479268)" },
        { label: "الاسم الكامل", value: "نصرت فاطمة" },
        { label: "اسم الأب", value: "سيد محمد نقوي" },
        { label: "العنوان الحالي", value: "108-G، الشارع رقم 3، لاهور" },
        { label: "العنوان الدائم", value: "محلة [...] جليل بور، تحصيل خاريان، منطقة كجرات" },
        { label: "علامة مميزة", value: "ندبة على اليد" },
        { label: "سنة الولادة", value: "1958" },
        { label: "تعليمات قانونية", value: "\"في حال الفقدان، يرجى الإبلاغ فوراً لأقرب مكتب تسجيل. في حال العثور عليها، يرجى إيداعها في أي صندوق بريد.\"" },
        { label: "التحقق الرسمي", value: "توقيع وختم مسجل المنطقة." }
      ]
    }
  };
}

fs.writeFileSync(file, JSON.stringify(data, null, 2));
console.log('Successfully updated doc_253 and doc_255');
