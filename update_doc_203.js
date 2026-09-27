const fs = require('fs');
const file = 'E:/2.maan-jee-website/documents_data.json';
const data = JSON.parse(fs.readFileSync(file, 'utf8'));
const docIndex = data.findIndex(d => d.id === 'doc_203');

if (docIndex !== -1) {
  data[docIndex].imageUrl = "https://res.cloudinary.com/b7xbeztp/image/upload/v1790360755/image203.jpg";
  data[docIndex].translations = {
    ur: {
      name: "اردو",
      dir: "rtl",
      docName: "پبلک اسٹیبلشمنٹ فار ہاؤسنگ – سائٹ پلان و عماراتی لے آؤٹ",
      lines: [
        { label: "Details", value: "سربراہ:" },
        { label: "1", value: "جمہوریہ عربیہ سوریہ – پبلک اسٹیبلشمنٹ فار ہاؤسنگ (المؤسسة العامة للإسكان)" },
        { label: "2", value: "دمشق الجدیدہ (مزہ) – پبلک ہاؤسنگ رہائشی عمارتوں کا لے آؤٹ نقشہ" },
        { label: "عمارت نمبرز", value: "7/1، 9، 11/1، 11/2" },
        { label: "Details", value: "نقشے کی تفصیلات:" },
        { label: "شارع / سڑک", value: "مین روڈ / شارع عام" },
        { label: "عمارت کا داخلی راستہ", value: "بلڈنگ نمبر 7/1 پر داخلی راستہ ظاہر کیا گیا ہے (مدخل البناء)" },
        { label: "تعمیراتی بلاکس", value: "عمارت کے بنیادی ڈھانچے، اطراف کی پیمائشیں، سیٹ بیکس اور ملحقہ گارڈن/خالی جگہ کی حدود واضح ہیں۔" },
        { label: "تکنیکی نوٹس", value: "حد بندی اور کھونٹیاں لگانے کا عمل پبلک ہاؤسنگ اسٹیبلشمنٹ کے ٹوپوگرافیکل سروے ڈویژن نے انجام دیا ہے۔" },
        { label: "سرکاری دستخط و منظوری", value: "چیف ڈرافٹسمین، سربراہ ٹیکنیکل افیئرز اور ڈائریکٹر ہاؤسنگ اسٹیبلشمنٹ کے دستخط و مہریں ثبت ہیں۔" }
      ]
    },
    en: {
      name: "English",
      dir: "ltr",
      docName: "Public Establishment for Housing – Site Plan & Building Layout",
      lines: [
        { label: "Details", value: "Header:" },
        { label: "1", value: "Syrian Arab Republic – Public Establishment for Housing (المؤسسة العامة للإسكان)" },
        { label: "2", value: "Damascus Al-Jadeeda (Mezzeh) – Public Housing Buildings Layout" },
        { label: "Building Numbers", value: "7/1, 9, 11/1, 11/2" },
        { label: "Details", value: "General Layout Information:" },
        { label: "Street", value: "Main Road (شارع الشام / شارع عام)" },
        { label: "Building Entrance", value: "Marked on Building 7/1 (مدخل البناء)" },
        { label: "Individual Building Blocks", value: "Shows building footprint dimensions, setbacks, side distances, and boundaries." },
        { label: "Notes", value: "Boundary pegs and demarcations conducted by the Topographical Survey Division of the Public Housing Establishment." },
        { label: "Technical Approvals", value: "Verified by Chief Draughtsman, Reviewed by Head of Technical Affairs, Approved by Director of the Housing Establishment." }
      ]
    },
    ar: {
      name: "العربية",
      dir: "rtl",
      docName: "المؤسسة العامة للإسكان – المخطط العام وتوزع الأبنية",
      lines: [
        { label: "تفاصيل", value: "الترويسة:" },
        { label: "1", value: "الجمهورية العربية السورية – المؤسسة العامة للإسكان" },
        { label: "2", value: "دمشق الجديدة (مزة) – مخطط توزع أبنية الإسكان العام" },
        { label: "أرقام الأبنية", value: "7/1، 9، 11/1، 11/2" },
        { label: "تفاصيل", value: "معلومات المخطط العام:" },
        { label: "الشارع", value: "شارع عام / شارع الشام" },
        { label: "مدخل البناء", value: "محدد على البناء 7/1" },
        { label: "الكتل المعمارية", value: "يظهر أبعاد البناء، الوجائب، المسافات الجانبية والحدود." },
        { label: "ملاحظات", value: "تم تحديد الحدود والأوتاد من قبل قسم المسح الطبوغرافي في المؤسسة العامة للإسكان." },
        { label: "الموافقات الفنية", value: "مدقق من قبل رئيس الرسامين، مراجع من قبل رئيس الشؤون الفنية، معتمد من قبل مدير مؤسسة الإسكان." }
      ]
    }
  };
  fs.writeFileSync(file, JSON.stringify(data, null, 2));
  console.log('Successfully updated doc_203');
} else {
  console.log('Error: doc_203 not found');
}
