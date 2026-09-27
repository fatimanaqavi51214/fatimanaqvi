const fs = require('fs');
const file = 'E:/2.maan-jee-website/documents_data.json';
const data = JSON.parse(fs.readFileSync(file, 'utf8'));
const docIndex = data.findIndex(d => d.id === 'doc_251');

if (docIndex !== -1) {
  data[docIndex].imageUrl = "https://res.cloudinary.com/b7xbeztp/image/upload/v1790360766/image251.jpg";
  data[docIndex].translations = {
    ur: {
      name: "اردو",
      dir: "rtl",
      docName: "نائیکوپ کارڈ پشت اور ہسپانوی اقامتی کارڈ",
      lines: [
        { label: "Details", value: "اوپری دستاویز: اوورسیز پاکستانی شناختی کارڈ (نائیکوپ / نادرا) – پشت کا حصہ" },
        { label: "حامل کا نام", value: "فواد حیدر" },
        { label: "شناختی کارڈ نمبر", value: "3-0108172-91306" },
        { label: "کارڈ نمبر", value: "108391194069" },
        { label: "موجودہ پتہ", value: "کالابریا 280-1-1، بارسلونا، 08029، کاتالونیا، اسپین" },
        { label: "مستقل پتہ", value: "مکان نمبر 18، سیکٹر 2، محلہ ایڈن کینال ولاز، کینال روڈ، لاہور سٹی، ضلع لاہور، پاکستان" },
        { label: "قانونی استحقاق", value: "حاملِ کارڈ پاکستان میں ویزا کے بغیر داخلے کا حقدار ہے۔" },
        { label: "دستخط", value: "عثمان وائی مبین، رجسٹرار جنرل پاکستان (نادرا)" },
        { label: "Details", value: "نچلی دستاویز: مملکتِ اسپین – مستقل اقامتی کارڈ (TIE کارڈ)" },
        { label: "حامل کا نام", value: "جواد حیدر" },
        { label: "تاریخ و جائے پیدائش", value: "2 مئی 1987ء، دبئی – متحدہ عرب امارات" },
        { label: "قومیت", value: "پاکستانی" },
        { label: "جنس", value: "مرد" },
        { label: "اقامے کی قسم", value: "طویل المدتی مستقل رہائش (Residencia Larga Duración)" },
        { label: "ملازمت کا استحقاق", value: "ملازمت و کاروبار کرنے کی مکمل قانونی اجازت ہے (Autoriza a Trabajar)" },
        { label: "اسپین کا فارنر شناختی نمبر (NIE)", value: "X4034570W" }
      ]
    },
    en: {
      name: "English",
      dir: "ltr",
      docName: "NICOP (Back) & Spanish Residence Card",
      lines: [
        { label: "Details", value: "Top Document: National Identity Card for Overseas Pakistanis (NICOP) – Back Side" },
        { label: "Name of Holder", value: "Fouad Haider" },
        { label: "ID / NICOP No.", value: "91306-0108172-3" },
        { label: "Card Tracking No.", value: "108391194069" },
        { label: "Present Address", value: "Calabria 280-1-1, Barcelona, 08029, Catalonia, Spain" },
        { label: "Permanent Address", value: "H.No. 18, Sector 2, Moh. Eden Canal Villas, Lahore City, District Lahore, Pakistan" },
        { label: "Legal Note", value: "\"The Holder is entitled visa free entry into Pakistan\"" },
        { label: "Signed by", value: "Usman Y. Mokin, Registrar General of Pakistan" },
        { label: "Details", value: "Bottom Document: Kingdom of Spain – Long-Term Residence Card (TIE)" },
        { label: "Holder Name", value: "Jawad Haider" },
        { label: "Date & Place of Birth", value: "02-05-1987, Dubai - UAE" },
        { label: "Nationality", value: "Pakistan" },
        { label: "Gender", value: "Male (V-M)" },
        { label: "Type of Permit", value: "Long-Term Residence (Residencia Larga Duración)" },
        { label: "Labor Remarks", value: "Authorized to Work (Autoriza a Trabajar)" },
        { label: "Foreigner Identification Number (NIE)", value: "X4034570W" }
      ]
    },
    ar: {
      name: "العربية",
      dir: "rtl",
      docName: "بطاقة NICOP (الخلف) وبطاقة الإقامة الإسبانية",
      lines: [
        { label: "تفاصيل", value: "المستند العلوي: بطاقة الهوية الوطنية للباكستانيين في الخارج (NICOP) – الجهة الخلفية" },
        { label: "اسم الحامل", value: "فؤاد حيدر" },
        { label: "رقم الهوية / NICOP", value: "91306-0108172-3" },
        { label: "رقم تتبع البطاقة", value: "108391194069" },
        { label: "العنوان الحالي", value: "كالابريا 280-1-1، برشلونة، 08029، كاتالونيا، إسبانيا" },
        { label: "العنوان الدائم", value: "منزل رقم 18، قطاع 2، حي فلل قناة إيدن، مدينة لاهور، منطقة لاهور، باكستان" },
        { label: "ملاحظة قانونية", value: "\"يحق لحامل هذه البطاقة الدخول إلى باكستان بدون تأشيرة\"" },
        { label: "توقيع", value: "عثمان ي. مبين، المسجل العام لباكستان" },
        { label: "تفاصيل", value: "المستند السفلي: مملكة إسبانيا – بطاقة الإقامة طويلة الأمد (TIE)" },
        { label: "اسم الحامل", value: "جواد حيدر" },
        { label: "تاريخ ومكان الولادة", value: "02-05-1987، دبي - الإمارات العربية المتحدة" },
        { label: "الجنسية", value: "باكستان" },
        { label: "الجنس", value: "ذكر (V-M)" },
        { label: "نوع التصريح", value: "إقامة طويلة الأمد (Residencia Larga Duración)" },
        { label: "ملاحظات العمل", value: "مصرح له بالعمل (Autoriza a Trabajar)" },
        { label: "رقم تعريف الأجنبي (NIE)", value: "X4034570W" }
      ]
    }
  };
  fs.writeFileSync(file, JSON.stringify(data, null, 2));
  console.log('Successfully updated doc_251');
} else {
  console.log('Error: doc_251 not found');
}
