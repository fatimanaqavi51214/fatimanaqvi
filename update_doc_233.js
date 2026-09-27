const fs = require('fs');
const file = 'E:/2.maan-jee-website/documents_data.json';
const data = JSON.parse(fs.readFileSync(file, 'utf8'));
const docIndex = data.findIndex(d => d.id === 'doc_233');

if (docIndex !== -1) {
  data[docIndex].imageUrl = "https://res.cloudinary.com/b7xbeztp/image/upload/v1790360760/image233.jpg";
  data[docIndex].translations = {
    ur: {
      name: "اردو",
      dir: "rtl",
      docName: "وزارتِ انصاف شام – عدالتی فیصلہ / سول کورٹ ببّیلا",
      lines: [
        { label: "Details", value: "جمہوریہ عربیہ سوریہ – وزارتِ انصاف (وزارة العدل) | سول کورٹ برائے مصالحت (محكمة صلح مدنی)، ببّیلا" },
        { label: "مقدمہ نمبر (اساس)", value: "974" },
        { label: "فیصلہ نمبر (قرار)", value: "490" },
        { label: "ریکارڈ نمبر", value: "872 | فارم نمبر: 1114/125" },
        { label: "Details", value: "بعنوان: بنام عوامِ عرب سوریہ:" },
        { label: "جج صاحب", value: "جناب احمد حداد" },
        { label: "عدالتی معاون", value: "جناب احمد محسن" },
        { label: "Details", value: "مقدمے کے فریقین:" },
        { label: "مدعیہ (سائلہ)", value: "نصرت فاطمہ بنت سید محمد نقوی، وساطت وکیل ایڈووکیٹ خلیل ظریف۔" },
        { label: "مدعا علیہ", value: "مرتضیٰ الاویس۔" },
        { label: "موضوعِ مقدمہ", value: "تثبیتِ بیع (خرید و فروخت کی قانونی توثیق و انتقالِ ملکیت)۔" },
        { label: "Details", value: "مقدمے کی تفصیل و واقعات:" },
        { label: "Content", value: "\"بتاریخ 22 اکتوبر 2000ء مدعیہ کے وکیل نے دعویٰ دائر کیا کہ مدعا علیہ علاقہ قبر الست کے ریئل اسٹیٹ پلاٹ نمبر 286 کے کل 2400 حصص میں سے 1260.521 حصص کا مالک ہے۔ مدعیہ نے مدعا علیہ سے اس پلاٹ پر تعمیر شدہ تہہ خانہ (القبو) جس کا رقبہ 275 مربع میٹر ہے (جو کہ 2400 میں سے 21 حصص کے برابر بنتا ہے) باضابطہ خرید لیا تھا۔ چونکہ مدعیہ نے خرید کی مکمل رقم ادا کر دی تھی مگر مدعا علیہ لینڈ رجسٹری میں مدعیہ کے نام انتقالِ ملکیت (فراغ) کروانے سے گریزاں تھا، لہٰذا مدعیہ نے عدالت سے استدعا کی کہ:\"" },
        { label: "1", value: "مدعا علیہ کو طلب کیا جائے؛" },
        { label: "2", value: "پلاٹ نمبر 286 میں سے مدعیہ کے 21 حصص کی خرید کی توثیق کی جائے اور مدعا علیہ کو لینڈ رجسٹری میں یہ حصہ مدعیہ کے نام منتقل کرنے کا پابند کیا جائے؛" },
        { label: "3", value: "جائیداد پر دعوے کا عدالتی اندراج کیا جائے اور تمام عدالتی اخراجات و فیسیں مدعا علیہ پر ڈالی جائیں۔" },
        { label: "نوٹ", value: "عدالت میں فریقین کے وکلاء پیش ہوئے، اور مدعا علیہ نے عدالت کے روبرو دعوے اور فروخت کا مکمل اور غیر مشروط اعتراف و اقرار کر لیا۔" }
      ]
    },
    en: {
      name: "English",
      dir: "ltr",
      docName: "Ministry of Justice Syria – Court Decision / Civil Conciliation Court Babbila",
      lines: [
        { label: "Details", value: "Syrian Arab Republic – Ministry of Justice | Civil Conciliation Court in Babbila (محكمة صلح ببيلا)" },
        { label: "Case No.", value: "974" },
        { label: "Decision No.", value: "490" },
        { label: "Registry Ref", value: "872 | Form No.: 1114/125" },
        { label: "Details", value: "In the Name of the Arab People of Syria:" },
        { label: "Presiding Judge", value: "Mr. Ahmad Haddad" },
        { label: "Court Assistant", value: "Mr. Ahmad Mohsen" },
        { label: "Details", value: "Litigating Parties:" },
        { label: "Plaintiff (الجهة المدعية)", value: "Nusrat Fatima daughter of Sayed Mohammad Naqvi, represented by Attorney Khalil Zuraif." },
        { label: "Defendant (الجهة المدعى عليها)", value: "Mourtada Al-Oweis." },
        { label: "Subject of Claim", value: "Confirmation and Validation of Sale (تثبيت بيع)." },
        { label: "Details", value: "Claim Details & Facts:" },
        { label: "Content", value: "\"On 22/10/2000, the Plaintiff's attorney filed a statement of claim stating that the Defendant owns 1260.521 shares out of 2400 shares of real estate plot No. 286, Qabr Essit area. The Plaintiff purchased from the Defendant the basement (al-Qabu) constructed on plot No. 286, measuring 275 square meters, equivalent to 21 shares out of 2400 shares. Since the Defendant refrained from formally registering and legally transferring (Faragh) the sold property into the Plaintiff's name, and since the Plaintiff has paid the full purchase price, she petitioned the court to:\"" },
        { label: "1", value: "Summon the Defendant for hearing;" },
        { label: "2", value: "Confirm the Plaintiff's purchase of the 21 shares out of 2400 shares of plot 286, Qabr Essit, and compel the Defendant to execute registration and title transfer in the land registry into the Plaintiff's name;" },
        { label: "3", value: "Enter a judicial attachment note on the land register, and order the Defendant to bear all costs, expenses, and attorney's fees." },
        { label: "Note", value: "Both attorneys appeared in court, and the Defendant formally confessed and admitted the claim in its entirety." }
      ]
    },
    ar: {
      name: "العربية",
      dir: "rtl",
      docName: "قرار محكمة - محكمة صلح ببيلا، سوريا",
      lines: [
        { label: "تفاصيل", value: "الجمهورية العربية السورية – وزارة العدل | محكمة صلح ببيلا" },
        { label: "رقم الأساس", value: "974" },
        { label: "رقم القرار", value: "490" },
        { label: "المرجع", value: "872 | رقم النموذج: 1114/125" },
        { label: "تفاصيل", value: "باسم الشعب العربي في سورية:" },
        { label: "القاضي", value: "السيد أحمد حداد" },
        { label: "المساعد", value: "السيد أحمد محسن" },
        { label: "تفاصيل", value: "أطراف الدعوى:" },
        { label: "الجهة المدعية", value: "نصرت فاطمة بنت سيد محمد نقوي، وكيلها المحامي خليل ظريف." },
        { label: "الجهة المدعى عليها", value: "مرتضى العويس." },
        { label: "موضوع الدعوى", value: "تثبيت بيع." },
        { label: "تفاصيل", value: "وقائع الدعوى:" },
        { label: "المحتوى", value: "\"بتاريخ 22/10/2000 تقدم وكيل الجهة المدعية باستدعاء دعوى جاء فيه أن الجهة المدعى عليها تملك 1260.521 سهماً من أصل 2400 سهم من العقار رقم 286 منطقة قبر الست. وقد اشترت الجهة المدعية من الجهة المدعى عليها القبو المشيد على العقار 286 والبالغة مساحته 275 متراً مربعاً بما يعادل 21 سهماً من أصل 2400 سهم. ولما كانت الجهة المدعى عليها ممتنعة عن الفراغ وتسجيل المبيع باسم الجهة المدعية، ولما كانت الجهة المدعية قد دفعت كامل الثمن، فقد طلبت:\"" },
        { label: "1", value: "دعوة المدعى عليه للمحاكمة؛" },
        { label: "2", value: "تثبيت شراء المدعية لـ 21 سهماً من أصل 2400 سهم من العقار 286 قبر الست وإلزام المدعى عليه بالفراغ والتسجيل في السجل العقاري باسمها؛" },
        { label: "3", value: "وضع إشارة الدعوى على صحيفة العقار وتضمين المدعى عليه الرسوم والمصاريف والأتعاب." },
        { label: "ملاحظة", value: "حضر وكيلا الطرفين، وصادق المدعى عليه على الدعوى جملة وتفصيلاً." }
      ]
    }
  };
  fs.writeFileSync(file, JSON.stringify(data, null, 2));
  console.log('Successfully updated doc_233');
} else {
  console.log('Error: doc_233 not found');
}
