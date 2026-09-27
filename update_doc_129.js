const fs = require('fs');

const docId = 'doc_129';

const newTranslations = {
  "ur": {
    "name": "اردو",
    "dir": "rtl",
    "docName": "سفارت کا سرٹیفکیٹ - تعلیمی داخلہ (1997)",
    "lines": [
      { "label": "تفصیلات", "value": "سفارت خانہ پاکستان، دمشق، شام" },
      { "label": "خط نمبر اور تاریخ", "value": "خط نمبر: Con-12/97 | تاریخ: 22 ستمبر 1997ء" },
      { "label": "عنوان", "value": "بنام ہر کہ متعلق باشد (جس سے یہ امر متعلق ہو)" },
      { "label": "مضمون (حصہ اول)", "value": "تصدیق کی جاتی ہے کہ درج ذیل دو پاکستانی طلبا: 1۔ مس ہاجرہ خاتون، حامل پاکستانی پاسپورٹ نمبر A 08693... 2۔ مسٹر جواد حیدر، حامل پاکستانی پاسپورٹ نمبر A 086980 دمشق، شام میں پاکستانی اسکولوں میں بالترتیب چھٹی جماعت (Grade-VI) اور پانچویں جماعت (Grade-V) تک تعلیم حاصل کر چکے ہیں۔ نئے تعلیمی سال کے آغاز پر وہ اپنی اگلی کلاسز میں داخلہ حاصل نہ کر سکے کیونکہ اس عرصے کے دوران وہ پاکستان میں موجود تھے۔" },
      { "label": "مضمون (حصہ دوم)", "value": "التماس ہے کہ انہیں شام کے سرکاری اسکول میں داخلہ دیا جائے اور ان کی غیر حاضری کی مدت کو معاف (Condoned) کیا جائے تاکہ ان کا پورا تعلیمی سال ضائع ہونے سے بچ سکے۔" },
      { "label": "دستخط کنندہ", "value": "ایس۔ ضیاء الدین علی، کونسلر، سفارت خانہ پاکستان، دمشق" },
      { "label": "مہریں و توثیق", "value": "سفارت خانے کی سرکاری مہر اور وزارت خارجہ شام کی تصدیقی مہریں و دستخط۔" }
    ]
  },
  "en": {
    "name": "English",
    "dir": "ltr",
    "docName": "Embassy Certificate - School Admission (1997)",
    "lines": [
      { "label": "Details", "value": "Embassy of Pakistan, Damascus, Syria" },
      { "label": "Reference No. & Date", "value": "Reference No.: Con-12/97 | Date: September 22, 1997" },
      { "label": "Subject", "value": "To whom it may concern" },
      { "label": "Content (Part 1)", "value": "\"This is to certify that following two Pakistani students: 1. Miss Hajra Khatoon holding Pakistani passport No. A 08693[...] 2. Mr. Jawad Haider holding Pakistani passport No. A 086980 received education in Pakistani schools up to the level of Grade-VI and Grade-V at Damascus, Syria. They could not get admission in their new classes at the commencement of new academic session due to the fact that they were in Pakistan during that period." },
      { "label": "Content (Part 2)", "value": "2. It is requested that they may be given admission in the government school of Syria and the period of absence may be condoned so as their entire academic year is not wasted.\"" },
      { "label": "Signatory", "value": "S. Ziauddin Ali, Counsellor, Embassy of Pakistan, Damascus" },
      { "label": "Official Seals", "value": "Embassy seal and official legalization/stamps from the Syrian Ministry of Foreign Affairs." }
    ]
  },
  "ar": {
    "name": "العربية",
    "dir": "rtl",
    "docName": "شهادة السفارة - قبول مدرسي (1997)",
    "lines": [
      { "label": "تفاصيل", "value": "سفارة باكستان، دمشق، سوريا" },
      { "label": "الرقم والمرجع", "value": "المرجع: Con-12/97 | التاريخ: 22 سبتمبر 1997" },
      { "label": "الموضوع", "value": "إلى من يهمه الأمر" },
      { "label": "المضمون (الجزء الأول)", "value": "\"نشهد بأن الطالبين الباكستانيين التاليين: 1. الآنسة هاجرة خاتون، تحمل جواز سفر باكستاني رقم A 08693... 2. السيد جواد حيدر، يحمل جواز سفر باكستاني رقم A 086980 قد تلقيا تعليمهما في المدارس الباكستانية حتى الصف السادس والصف الخامس في دمشق، سوريا. ولم يتمكنا من الحصول على قبول في فصولهما الجديدة عند بدء العام الدراسي الجديد بسبب تواجدهما في باكستان خلال تلك الفترة." },
      { "label": "المضمون (الجزء الثاني)", "value": "2. يُرجى التكرم بقبولهما في المدارس الحكومية السورية والتجاوز عن فترة الغياب حتى لا يضيع عليهما العام الدراسي بأكمله.\"" },
      { "label": "الموقع", "value": "س. ضياء الدين علي، مستشار، سفارة باكستان، دمشق" },
      { "label": "الأختام والتصديقات", "value": "ختم السفارة وأختام وتصديقات رسمية من وزارة الخارجية السورية." }
    ]
  },
  "fa": {
    "name": "فارسی",
    "dir": "rtl",
    "docName": "گواهی سفارت - پذیرش مدرسه (۱۹۹۷)",
    "lines": [
      { "label": "جزئیات", "value": "سفارت پاکستان، دمشق، سوریه" },
      { "label": "شماره مرجع و تاریخ", "value": "شماره مرجع: Con-12/97 | تاریخ: ۲۲ سپتامبر ۱۹۹۷" },
      { "label": "موضوع", "value": "گواهی می‌شود" },
      { "label": "مضمون (بخش اول)", "value": "\"بدین وسیله گواهی می‌شود که دو دانش‌آموز پاکستانی زیر: ۱. دوشیزه هاجره خاتون، دارنده گذرنامه پاکستانی شماره A 08693... ۲. آقای جواد حیدر، دارنده گذرنامه پاکستانی شماره A 086980 در مدارس پاکستانی تا مقطع کلاس ششم و کلاس پنجم در دمشق، سوریه تحصیل کرده‌اند. آنها نتوانستند در شروع سال تحصیلی جدید در کلاس‌های جدید خود ثبت‌نام کنند، زیرا در آن دوره در پاکستان حضور داشتند." },
      { "label": "مضمون (بخش دوم)", "value": "۲. خواهشمند است به آنها در مدارس دولتی سوریه پذیرش داده شود و مدت غیبت آنها بخشوده شود تا کل سال تحصیلی آنها هدر نرود.\"" },
      { "label": "امضاکننده", "value": "س. ضیاءالدین علی، رایزن، سفارت پاکستان، دمشق" },
      { "label": "مهرها و تأییدیه‌ها", "value": "مهر سفارت و مهرها و تأییدیه‌های رسمی از وزارت امور خارجه سوریه." }
    ]
  },
  "es": {
    "name": "Español",
    "dir": "ltr",
    "docName": "Certificado de la Embajada - Admisión Escolar (1997)",
    "lines": [
      { "label": "Detalles", "value": "Embajada de Pakistán, Damasco, Siria" },
      { "label": "Nº de Referencia y Fecha", "value": "Referencia: Con-12/97 | Fecha: 22 de septiembre de 1997" },
      { "label": "Asunto", "value": "A quien corresponda" },
      { "label": "Contenido (Parte 1)", "value": "\"Por la presente se certifica que los siguientes dos estudiantes paquistaníes: 1. Srta. Hajra Khatoon con pasaporte paquistaní No. A 08693[...] 2. Sr. Jawad Haider con pasaporte paquistaní No. A 086980 recibieron educación en escuelas paquistaníes hasta el nivel de Sexto y Quinto Grado en Damasco, Siria. No pudieron obtener admisión en sus nuevas clases al inicio del nuevo año académico debido a que se encontraban en Pakistán durante ese período." },
      { "label": "Contenido (Parte 2)", "value": "2. Se solicita que se les conceda la admisión en la escuela pública de Siria y que se les perdone el período de ausencia para que no se pierda todo su año académico.\"" },
      { "label": "Firmante", "value": "S. Ziauddin Ali, Consejero, Embajada de Pakistán, Damasco" },
      { "label": "Sellos Oficiales", "value": "Sello de la embajada y legalización/sellos oficiales del Ministerio de Relaciones Exteriores de Siria." }
    ]
  }
};

const data = JSON.parse(fs.readFileSync('documents_data.json', 'utf8'));
const docIndex = data.findIndex(d => d.id === docId);

if (docIndex !== -1) {
  data[docIndex].translations = newTranslations;
  data[docIndex].category = 'embassy'; 
  fs.writeFileSync('documents_data.json', JSON.stringify(data, null, 2));
  console.log("Updated doc_129 successfully");
} else {
  console.log("Doc not found");
}
