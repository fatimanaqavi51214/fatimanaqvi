const fs = require('fs');

const docId = 'doc_179';

const newTranslations = {
  "ur": {
    "name": "اردو",
    "dir": "rtl",
    "docName": "سفارت خانہ پاکستان دمشق کا تعلیمی سرٹیفکیٹ",
    "lines": [
      { "label": "سرنامہ", "value": "سفارت خانہ پاکستان، دمشق، شام | خط نمبر: Con-12/97 | تاریخ: 22 ستمبر 1997ء" },
      { "label": "عنوان", "value": "بنام ہر کہ متعلق باشد (جس سے بھی یہ امر متعلق ہو)" },
      { "label": "متن (حصہ اول)", "value": "\"تصدیق کی جاتی ہے کہ مندرجہ ذیل دو پاکستانی طلباء: 1۔ مس ہاجرہ خاتون، حامل پاکستانی پاسپورٹ نمبر A 086930 2۔ مسٹر جواد حیدر، حامل پاکستانی پاسپورٹ نمبر A 086980 دمشق، شام میں واقع پاکستانی اسکولوں سے بالترتیب چھٹی جماعت (Grade-VI) اور پانچویں جماعت (Grade-V) تک تعلیم حاصل کر چکے ہیں۔ نئے تعلیمی سیشن کے آغاز پر وہ اپنی اگلی جماعتوں میں داخلہ حاصل نہ کر سکے کیونکہ وہ اس دوران پاکستان میں موجود تھے۔\"" },
      { "label": "متن (حصہ دوم)", "value": "\"2۔ التماس کی جاتی ہے کہ انہیں شام کے سرکاری اسکول میں داخلہ دیا جائے اور غیر حاضری کی مدت کو معاف کیا جائے تاکہ ان کا تعلیمی سال ضائع ہونے سے بچ سکے۔\"" },
      { "label": "دستخط کنندہ", "value": "ایس۔ ضیاء الدین علی، کونسلر، سفارت خانہ پاکستان، دمشق" },
      { "label": "توثیق", "value": "سفارت خانہ پاکستان کی سرکاری مہر اور وزارتِ خارجہ شام کے باضابطہ تصدیقی دستخط و مہریں۔" }
    ]
  },
  "en": {
    "name": "English",
    "dir": "ltr",
    "docName": "Educational Certificate from Embassy of Pakistan, Damascus",
    "lines": [
      { "label": "Header", "value": "Embassy of Pakistan, Damascus, Syria | Reference No.: Con-12/97 | Date: September 22, 1997" },
      { "label": "Subject", "value": "To whom it may concern" },
      { "label": "Content P1", "value": "\"This is to certify that following two Pakistani students: 1. Miss Hajra Khatoon holding Pakistani passport No. A 086930 2. Mr. Jawad Haider holding Pakistani passport No. A 086980 received education in Pakistani schools up to the level of Grade-VI and Grade-V at Damascus, Syria. They could not get admission in their new classes at the commencement of new academic session due to the fact that they were in Pakistan during that period.\"" },
      { "label": "Content P2", "value": "\"2. It is requested that they may be given admission in the government school of Syria and the period of absence may be condoned so as their entire academic year is not wasted.\"" },
      { "label": "Signatory", "value": "S. Ziauddin Ali, Counsellor, Embassy of Pakistan, Damascus" },
      { "label": "Attestations", "value": "Official Embassy seal affixed, along with attestation stamps of the Ministry of Foreign Affairs, Syrian Arab Republic." }
    ]
  },
  "ar": {
    "name": "العربية",
    "dir": "rtl",
    "docName": "شهادة مدرسية من سفارة باكستان بدمشق",
    "lines": [
      { "label": "الترويسة", "value": "سفارة باكستان، دمشق، سوريا | رقم المرجع: Con-12/97 | التاريخ: 22 سبتمبر 1997" },
      { "label": "الموضوع", "value": "إلى من يهمه الأمر" },
      { "label": "النص (الجزء الأول)", "value": "\"تشهد السفارة بأن الطالبين الباكستانيين التاليين: 1. الآنسة هاجرة خاتون، حاملة جواز سفر باكستاني رقم A 086930 2. السيد جواد حيدر، حامل جواز سفر باكستاني رقم A 086980 قد تلقيا تعليمهما في المدارس الباكستانية حتى الصف السادس والصف الخامس في دمشق، سوريا. ولم يتمكنا من الحصول على القبول في صفوفهما الجديدة في بداية العام الدراسي الجديد نظراً لتواجدهما في باكستان خلال تلك الفترة.\"" },
      { "label": "النص (الجزء الثاني)", "value": "\"2. يُرجى التفضل بقبولهما في المدارس الحكومية السورية والتجاوز عن فترة الغياب حتى لا يضيع عليهما العام الدراسي بأكمله.\"" },
      { "label": "الموقع", "value": "س. ضياء الدين علي، مستشار، سفارة باكستان، دمشق" },
      { "label": "التصديقات", "value": "ممهور بالختم الرسمي للسفارة، إلى جانب أختام التصديق من وزارة خارجية الجمهورية العربية السورية." }
    ]
  },
  "fa": {
    "name": "فارسی",
    "dir": "rtl",
    "docName": "گواهی تحصیلی از سفارت پاکستان در دمشق",
    "lines": [
      { "label": "سربرگ", "value": "سفارت پاکستان، دمشق، سوریه | شماره مرجع: Con-12/97 | تاریخ: ۲۲ سپتامبر ۱۹۹۷" },
      { "label": "موضوع", "value": "به هر کس که مربوط می‌شود" },
      { "label": "متن (بخش اول)", "value": "\"بدین‌وسیله گواهی می‌شود که دو دانش‌آموز پاکستانی زیر: ۱. دوشیزه هاجره خاتون دارنده گذرنامه پاکستانی به شماره A 086930 ۲. آقای جواد حیدر دارنده گذرنامه پاکستانی به شماره A 086980 تا مقطع کلاس ششم و کلاس پنجم در مدارس پاکستانی در دمشق، سوریه تحصیل کرده‌اند. آن‌ها نتوانستند در آغاز سال تحصیلی جدید در کلاس‌های جدید خود ثبت‌نام کنند، زیرا در آن دوره در پاکستان حضور داشتند.\"" },
      { "label": "متن (بخش دوم)", "value": "\"۲. درخواست می‌شود که به آن‌ها اجازه ثبت‌نام در مدارس دولتی سوریه داده شود و از مدت غیبت آن‌ها چشم‌پوشی شود تا کل سال تحصیلی آن‌ها به هدر نرود.\"" },
      { "label": "امضاکننده", "value": "س. ضیاءالدین علی، رایزن، سفارت پاکستان، دمشق" },
      { "label": "تأییدیه‌ها", "value": "مهر رسمی سفارت به همراه مهرهای تأییدیه وزارت امور خارجه جمهوری عربی سوریه." }
    ]
  },
  "es": {
    "name": "Español",
    "dir": "ltr",
    "docName": "Certificado Escolar de la Embajada de Pakistán en Damasco",
    "lines": [
      { "label": "Encabezado", "value": "Embajada de Pakistán, Damasco, Siria | No. de Referencia: Con-12/97 | Fecha: 22 de septiembre de 1997" },
      { "label": "Asunto", "value": "A quien corresponda" },
      { "label": "Contenido P1", "value": "\"Por la presente se certifica que los dos siguientes estudiantes pakistaníes: 1. Srta. Hajra Khatoon con pasaporte pakistaní No. A 086930 2. Sr. Jawad Haider con pasaporte pakistaní No. A 086980 recibieron educación en escuelas pakistaníes hasta el nivel de Sexto Grado y Quinto Grado en Damasco, Siria. No pudieron obtener admisión en sus nuevas clases al inicio del nuevo año académico debido a que se encontraban en Pakistán durante ese período.\"" },
      { "label": "Contenido P2", "value": "\"2. Se solicita que se les conceda la admisión en la escuela gubernamental de Siria y que se les perdone el período de ausencia para que no pierdan todo su año académico.\"" },
      { "label": "Firmante", "value": "S. Ziauddin Ali, Consejero, Embajada de Pakistán, Damasco" },
      { "label": "Certificaciones", "value": "Sello oficial de la Embajada estampado, junto con los sellos de certificación del Ministerio de Asuntos Exteriores de la República Árabe Siria." }
    ]
  }
};

const data = JSON.parse(fs.readFileSync('documents_data.json', 'utf8'));
const docIndex = data.findIndex(d => d.id === docId);

if (docIndex !== -1) {
  data[docIndex].translations = newTranslations;
  data[docIndex].imageUrl = "https://res.cloudinary.com/b7xbeztp/image/upload/v1790360750/image179.jpg";
  data[docIndex].category = 'official'; 
  fs.writeFileSync('documents_data.json', JSON.stringify(data, null, 2));
  console.log("Updated doc_179 successfully");
} else {
  console.log("Doc not found");
}
