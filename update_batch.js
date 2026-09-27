const fs = require('fs');
const file = 'E:/2.maan-jee-website/documents_data.json';
const data = JSON.parse(fs.readFileSync(file, 'utf8'));

// UPDATE doc_205
const doc205Index = data.findIndex(d => d.id === 'doc_205');
if (doc205Index !== -1) {
  data[doc205Index].imageUrl = "https://res.cloudinary.com/b7xbeztp/image/upload/v1790360758/image205.jpg";
  data[doc205Index].translations = {
    ur: {
      name: "اردو",
      dir: "rtl",
      docName: "ٹاؤن پلاننگ میپ – دمشق الجدیدہ (تصدیق شدہ ماسٹر پلان)",
      lines: [
        { label: "Details", value: "عنوان و دفتری توثیق:" },
        { label: "عبارت", value: "\"صورة طبق الأصل عن المخطط الموقع العام لمنطقة دمشق الجديدة، خاص بالعمارة رقم 7/1 منطقة /د/ وذلك لتقديمها إلى المصرف العقاري\" (علاقہ دمشق الجدیدہ کے ماسٹر سائٹ پلان کی مصدقہ نقل، جو خصوصی طور پر عمارت نمبر 7/1، سیکٹر 'ڈی' سے متعلق ہے، تاکہ اسے ریئل اسٹیٹ بینک (المصرف العقاری) میں پیش کیا جا سکے)۔" },
        { label: "Details", value: "ماسٹر پلان کی تفصیلات:" },
        { label: "ریفرنس انڈیکس", value: "72 / 51" },
        { label: "شہری منصوبہ بندی کا خاکہ", value: "سڑکوں کا تفصیلی جال، گول چکر (راؤنڈ اباؤٹ)، رہائشی بلاکس، باغات و پارک (حديقة 59) اور ملحقہ سرکاری اراضی و تنصیبات کی نشان دہی کی گئی ہے۔" },
        { label: "سرکاری مہریں", value: "پبلک اسٹیبلشمنٹ فار ہاؤسنگ (المؤسسة العامة للإسكان) کی تصدیقی گول مہر اور سرکاری ریونیو ٹکٹیں چسپاں ہیں۔" },
        { label: "توثیق", value: "ٹیکنیکل سروے انجینئر اور متعلقہ ڈائریکٹر کے باضابطہ تصدیقی دستخط موجود ہیں۔" }
      ]
    },
    en: {
      name: "English",
      dir: "ltr",
      docName: "Town Planning Map – Damascus Al-Jadeeda (Certified Master Plan)",
      lines: [
        { label: "Details", value: "Header & Endorsement:" },
        { label: "Text", value: "\"صورة طبق الأصل عن المخطط الموقع العام لمنطقة دمشق الجديدة، خاص بالعمارة رقم 7/1 منطقة /د/ وذلك لتقديمها إلى المصرف العقاري\" (Certified true copy of the master site plan for the New Damascus area, specifically for Building No. 7/1, Sector 'D', for submission to the Real Estate Bank)." },
        { label: "Details", value: "Plan Details:" },
        { label: "Reference Index", value: "72 / 51" },
        { label: "Master Cadastral Grid", value: "Displays urban road network, roundabouts, residential blocks, open spaces/gardens (حديقة 59), and surrounding public amenities." },
        { label: "Official Seals", value: "Affixed with official revenue stamps and circular institutional seal of the General Directorate / Public Establishment for Housing (المؤسسة العامة للإسكان)." },
        { label: "Attestation", value: "Verified and signed by the competent technical surveyor and authorized director." }
      ]
    },
    ar: {
      name: "العربية",
      dir: "rtl",
      docName: "المخطط التنظيمي – دمشق الجديدة (المخطط العام المصدق)",
      lines: [
        { label: "تفاصيل", value: "الترويسة والتصديق:" },
        { label: "النص", value: "\"صورة طبق الأصل عن المخطط الموقع العام لمنطقة دمشق الجديدة، خاص بالعمارة رقم 7/1 منطقة /د/ وذلك لتقديمها إلى المصرف العقاري\"" },
        { label: "تفاصيل", value: "تفاصيل المخطط:" },
        { label: "الرقم المرجعي", value: "72 / 51" },
        { label: "المخطط التنظيمي", value: "يعرض شبكة الطرق الحضرية، الدوارات، الكتل السكنية، الحدائق (حديقة 59)، والمرافق العامة المحيطة." },
        { label: "الأختام الرسمية", value: "ممهور بالطوابع المالية والخاتم الدائري الرسمي للمؤسسة العامة للإسكان." },
        { label: "التصديق", value: "مدقق وموقع من قبل المساح الفني المختص والمدير المفوض." }
      ]
    }
  };
}

// UPDATE doc_211
const doc211Index = data.findIndex(d => d.id === 'doc_211');
if (doc211Index !== -1) {
  data[doc211Index].imageUrl = "https://res.cloudinary.com/b7xbeztp/image/upload/v1790360757/image211.jpg";
  data[doc211Index].translations = {
    ur: {
      name: "اردو",
      dir: "rtl",
      docName: "سفارت خانہ پاکستان تہران کا تصدیق نامہ",
      lines: [
        { label: "Details", value: "سفارت خانہ پاکستان تہران" },
        { label: "خط نمبر", value: "EOP/CR-II/2025" },
        { label: "تاریخ", value: "12 نومبر 2025ء" },
        { label: "بنام", value: "ہر کہ متعلق باشد / جس سے بھی یہ امر متعلق ہو (صرف ایرانی حکام کے لیے)" },
        { label: "عبارت", value: "\"یہ تصدیق کی جاتی ہے کہ محترمہ نصرت فاطمہ زوجہ/بیوہ غلام سرور (مرحوم)، پاسپورٹ نمبر DT8452184، شناختی کارڈ نمبر 91306-0764218-6 ایک پاکستانی شہری ہیں۔ وہ برطانیہ اور اسپین میں رہائش پذیر ہیں، اور پیشے کے لحاظ سے وہ ایک وکیل اور کاروباری خاتون ہیں۔" },
        { label: "نوٹ", value: "یہ سرٹیفکیٹ محترمہ نصرت فاطمہ کی درخواست پر جاری کیا گیا ہے۔\"" },
        { label: "دستخط و مہر", value: "سرکاری مہر اور دستخط: سفارت خانہ پاکستان، تہران (دستخط شدہ اور مہر ثبت ہے)۔" }
      ]
    },
    en: {
      name: "English",
      dir: "ltr",
      docName: "Embassy of Pakistan Tehran - Certificate",
      lines: [
        { label: "Details", value: "Embassy of Pakistan Tehran" },
        { label: "No.", value: "EOP/CR-II/2025" },
        { label: "Dated", value: "12th November, 2025" },
        { label: "Addressed", value: "TO WHOM IT MAY CONCERN (for Iranian authorities only)" },
        { label: "Content", value: "\"It is stated that Mrs. Nusrat Fatima w/o Ghulam Sarwar (late), Passport No. DT8452184, CNIC No. 91306-0764218-6 is a Pakistani national. She resides in the UK & Spain, and she is a lawyer & business woman by profession." },
        { label: "Note", value: "This has been issued on the request of Mrs. Nusrat Fatima.\"" },
        { label: "Signatory", value: "Official Seal & Signature: Embassy of Pakistan, Tehran (Signed & Stamped)." }
      ]
    },
    ar: {
      name: "العربية",
      dir: "rtl",
      docName: "شهادة سفارة باكستان في طهران",
      lines: [
        { label: "تفاصيل", value: "سفارة باكستان طهران" },
        { label: "الرقم", value: "EOP/CR-II/2025" },
        { label: "التاريخ", value: "12 نوفمبر 2025" },
        { label: "إلى", value: "لمن يهمه الأمر (للسلطات الإيرانية فقط)" },
        { label: "المحتوى", value: "\"نفيد بأن السيدة نصرت فاطمة زوجة/أرملة غلام سرور (المرحوم)، جواز سفر رقم DT8452184، رقم البطاقة الوطنية 91306-0764218-6 هي مواطنة باكستانية. وتقيم في المملكة المتحدة وإسبانيا، وهي محامية وسيدة أعمال مهنياً." },
        { label: "ملاحظة", value: "صدرت هذه الشهادة بناءً على طلب السيدة نصرت فاطمة.\"" },
        { label: "الموقع", value: "الختم الرسمي والتوقيع: سفارة باكستان، طهران (موقع ومختوم)." }
      ]
    }
  };
}

fs.writeFileSync(file, JSON.stringify(data, null, 2));
console.log('Successfully updated doc_205 and doc_211');
