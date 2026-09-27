const fs = require('fs');
const file = 'E:/2.maan-jee-website/documents_data.json';
const data = JSON.parse(fs.readFileSync(file, 'utf8'));
const docIndex = data.findIndex(d => d.id === 'doc_241');

if (docIndex !== -1) {
  data[docIndex].imageUrl = "https://res.cloudinary.com/b7xbeztp/image/upload/v1790360761/image241.jpg";
  data[docIndex].translations = {
    ur: {
      name: "اردو",
      dir: "rtl",
      docName: "باہمی اقرار نامۂ ہبہ / عطیہ بلا معاوضہ (عقد تبرع هبة بدون مقابل)",
      lines: [
        { label: "Details", value: "Content:" },
        { label: "Content", value: "\"میں، مندرجہ ذیل دستخط کنندہ، نصرت فاطمہ بنت سید محمد نقوی، والدہ کا نام مہر بانو، پیدائش 1958ء، حامل پاکستانی پاسپورٹ، علاقہ قبر الست (السیدہ زینب) میں واقع ریئل اسٹیٹ پلاٹ نمبر 284 کے مخصوص ملکیتی حصے کی مالک؛ بحالئ ہوش و حواس، مکمل شرعی و قانونی اہلیت کے ساتھ اقرار کرتی ہوں کہ میں نے اس پلاٹ میں سے 800 مربع میٹر (آٹھ سو مربع میٹر) کا رقبہ ایک فلاحی / خیراتی ادارے و مرکز کے قیام کے لیے بلا معاوضہ ہبہ اور عطیہ کر دیا ہے۔ یہ مختص کردہ ٹکڑا جناب ابو حمود کی زمین کی حد کے متصل واقع ہے۔ یہ ہبہ اور عطیہ بغیر کسی مالی عوض کے قطعی طور پر دیا گیا ہے، اور اس حصے کی باضابطہ قانونی کارروائی، فیسوں اور شرائط کی پابندی متعلقہ پراجیکٹ کے ذمہ ہوگی۔ اس قطعی ہبے کے بعد کسی کو بھی اس پر اعتراض یا تنسیخ کا کوئی حق حاصل نہیں ہوگا، کیونکہ یہ فیصلہ حتمی اور غیر رجوعی ہے۔ پلاٹ نمبر 284 کا بقیہ تمام رقبہ اور حصہ بدستور میری (نصرت فاطمہ کی) مکمل ذاتی ملکیت میں قائم رہے گا۔ یہ معاہدہ فریقین کی باہمی رضامندی سے مکمل اور دستخط کیا گیا۔\"" },
        { label: "تاریخِ تحریر", value: "29 مئی 1995ء" },
        { label: "واہبہ (ہبہ کنندہ)", value: "نصرت فاطمہ (دستخط شدہ)" },
        { label: "وصول کنندہ / نمائندہ", value: "محمد [...] (دستخط شدہ)" },
        { label: "گواہ", value: "کمال علوی (دستخط و توثیق)" }
      ]
    },
    en: {
      name: "English",
      dir: "ltr",
      docName: "Deed of Donation / Gift Without Consideration (عقد تبرع هبة بدون مقابل)",
      lines: [
        { label: "Details", value: "Content:" },
        { label: "Content", value: "\"I, the undersigned, Nusrat Fatima daughter of Sayed Mohammad Naqvi, mother's name Mehar Bano, born in 1958, holder of Pakistani Passport, owner of a designated share in real estate plot No. 284 located in the Qabr Essit area; In full legal, mental, and physical capacity, I hereby declare that I have donated and gifted, by way of lawful gift without any financial consideration, a portion of this property measuring 800 m² (eight hundred square meters) for the purpose of constructing a charitable establishment / complex. This demarcated parcel is located adjacent to the boundary of Mr. Abu Hamoud. The donation is made entirely free of any monetary compensation or reciprocal claim, and the recipient / project entity shall bear all property specifications, fees, and formal clearance obligations relating to this gifted portion. Following this gift, no party may dispute or revoke it, as it has been concluded definitively and irrevocably. The remaining shares and area of plot No. 284 shall remain under the undisputed ownership and title of the donor, Mrs. Nusrat Fatima. This contract has been executed and confirmed by the mutual agreement of both parties.\"" },
        { label: "Date of Execution", value: "29 / 5 / 1995" },
        { label: "Donor (الواهبة)", value: "Nusrat Fatima (Signed)" },
        { label: "Recipient / Beneficiary Representative", value: "Mohammad [...] (Signed)" },
        { label: "Witness", value: "Kamal Allawi (Signed & Endorsed)" }
      ]
    },
    ar: {
      name: "العربية",
      dir: "rtl",
      docName: "عقد تبرع هبة بدون مقابل",
      lines: [
        { label: "تفاصيل", value: "المحتوى:" },
        { label: "المحتوى", value: "\"أنا الموقعة أدناه نصرت فاطمة بنت سيد محمد نقوي، والدتها مهر بانو، تولد 1958، أحمل جواز سفر باكستاني، ومالكة لحصة مفرزة من العقار رقم 284 الكائن في منطقة قبر الست؛ وبكامل أهليتي القانونية والشرعية والعقلية والجسدية، أقر بموجب هذا العقد أنني تبرعت ووهبت هبة شرعية بدون أي مقابل مالي، جزءاً من هذا العقار تبلغ مساحته 800 م² (ثمانمائة متر مربع) لغرض بناء مؤسسة / مجمع خيري. تقع هذه المساحة المفرزة بمحاذاة حدود السيد أبو حمود. يتم التبرع دون أي تعويض مالي أو مطالبة مقابلة، وتتحمل الجهة المستلمة / المشروع كافة الالتزامات المتعلقة بمواصفات العقار والرسوم والتخليص الرسمي المتعلق بهذا الجزء الموهوب. وبعد هذا التبرع، لا يحق لأي طرف المنازعة أو التراجع عنه، حيث تم إبرامه بشكل قطعي ولا رجعة فيه. وتبقى بقية الحصص والمساحة من العقار رقم 284 تحت الملكية الحصرية ودون منازع للمتبرعة، السيدة نصرت فاطمة. تم إبرام وتأكيد هذا العقد بموافقة الطرفين المتبادلة.\"" },
        { label: "تاريخ الإبرام", value: "29 / 5 / 1995" },
        { label: "الواهبة", value: "نصرت فاطمة (توقيع)" },
        { label: "المستلم / ممثل الجهة المستفيدة", value: "محمد [...] (توقيع)" },
        { label: "الشاهد", value: "كمال علاوي (توقيع وتصديق)" }
      ]
    }
  };
  fs.writeFileSync(file, JSON.stringify(data, null, 2));
  console.log('Successfully updated doc_241');
} else {
  console.log('Error: doc_241 not found');
}
