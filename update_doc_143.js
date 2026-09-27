const fs = require('fs');

const docId = 'doc_143';

const newTranslations = {
  "ur": {
    "name": "اردو",
    "dir": "rtl",
    "docName": "باہمی تقسیم نامہ و تخصیص اراضی",
    "lines": [
      { "label": "فریقین", "value": "1. محمد خرمہ (رہائشی قبر الست)۔\n2. مصطفیٰ خرمہ (رہائشی قبر الست)۔\n3. نصرت فاطمہ نقوی (حامل پاکستانی پاسپورٹ)۔" },
      { "label": "پس منظر", "value": "محمد خرمہ اور مصطفیٰ خرمہ کی پلاٹ نمبر 284 واقع قبر الست میں مشترکہ ملکیت، اور نوٹری پبلک ببّیلا کے پاس درج مختار نامہ نمبر 18/26001/32 بتاریخ 9 جون 1982ء کے تحت محترمہ نصرت فاطمہ نقوی کو بیع و انتقالِ ملکیت (فراغ) کا مکمل اختیار۔" },
      { "label": "تقسیم کی تفصیلات", "value": "پہلا حصہ (1/284): محترمہ نصرت فاطمہ نقوی کے لیے مختص کیا گیا۔\nدوسرا حصہ (2/284): محمد خرمہ اور مصطفیٰ خرمہ کے لیے برابر مشترکہ حصے کے طور پر مختص کیا گیا۔" },
      { "label": "شرائط", "value": "یہ تقسیم قطعی، حتمی اور لازمی ہے۔ ہر فریق کو اپنے مختص کردہ حصے پر مکمل مالکانہ اختیارات حاصل ہوں گے، جن میں تنہا افراز (قانونی تقسیم)، بلڈنگ پرمٹ، اور دوسرے فریق کی موجودگی کے بغیر تمام متعلقہ محکموں و بلدیات کے روبرو کارروائی کا حق شامل ہے۔" },
      { "label": "تاریخِ تحریر", "value": "29 اکتوبر 1982ء۔" },
      { "label": "دستخط اور خاکہ", "value": "دستخط کنندگان: محمد خرمہ، مصطفیٰ خرمہ، نصرت فاطمہ نقوی۔ نقشے میں راستۂ السیدہ زینب، قطعات 1/284 اور 2/284 اور اطراف کی پیمائشیں ظاہر کی گئی ہیں۔ (نیچے نوٹری پبلک کی سرکاری مہریں اور شامی عدالتی ٹکٹیں چسپاں ہیں)۔" }
    ]
  },
  "en": {
    "name": "English",
    "dir": "ltr",
    "docName": "Private Contract for Land Allocation and Division",
    "lines": [
      { "label": "Parties", "value": "1. Mohammad Khurma (Resident of Qabr Essit).\n2. Mustafa Khurma (Resident of Qabr Essit).\n3. Nusrat Fatima Naqvi (Holder of Pakistani Passport)." },
      { "label": "Background", "value": "Pursuant to the ownership of Mohammad Khurma and Mustafa Khurma in plot No. 284 located in the Qabr Essit real estate zone; and by virtue of the power of attorney granted to Miss Nusrat Fatima under No. 32/26001/18 registered with the Notary Public of Babbila on 9/6/1982." },
      { "label": "Division Details", "value": "First Part (1/284): Formally allocated to Miss Nusrat Fatima Naqvi.\nSecond Part (2/284): Allocated jointly and equally to Mohammad and Mustafa, sons of the late Ali Khurma." },
      { "label": "Terms", "value": "This division is definitive, irrevocable, and binding. Each party acquires full owner's discretion over their allocated portion, including the individual right to initiate legal subdivision (Ifraz), building permits, and representation before all competent administrative and municipal bodies." },
      { "label": "Execution Date", "value": "29 / 10 / 1982." },
      { "label": "Signatures & Sketch", "value": "Signatures: Mohammad Khurma, Mustafa Khurma, Nusrat Fatima Naqvi. Site Diagram depicts road towards Sayyidah Zaynab, side dimensions, and the divided sections (1/284 and 2/284). (Notary / Authentication seals and revenue stamps affixed at the bottom)." }
    ]
  },
  "ar": {
    "name": "العربية",
    "dir": "rtl",
    "docName": "عقد خاص لفرز وتخصيص الأراضي",
    "lines": [
      { "label": "الأطراف", "value": "1. محمد خرمة (مقيم في قبر الست).\n2. مصطفى خرمة (مقيم في قبر الست).\n3. نصرت فاطمة نقوي (تحمل جواز سفر باكستاني)." },
      { "label": "الخلفية", "value": "بناءً على ملكية محمد خرمة ومصطفى خرمة في العقار رقم 284 في منطقة قبر الست العقارية، وبموجب الوكالة الممنوحة للسيدة نصرت فاطمة برقم 32/26001/18 المسجلة لدى الكاتب بالعدل في ببيلا بتاريخ 9/6/1982." },
      { "label": "تفاصيل القسمة", "value": "القسم الأول (1/284): خُصص رسمياً للآنسة نصرت فاطمة نقوي.\nالقسم الثاني (2/284): خُصص بالتساوي بين محمد ومصطفى، ولدي المرحوم علي خرمة." },
      { "label": "الشروط", "value": "هذه القسمة قطعية ونهائية وملزمة. يحق لكل طرف التصرف الكامل في حصته المخصصة، بما في ذلك الفرز والترخيص والتمثيل أمام الجهات الإدارية والبلدية." },
      { "label": "تاريخ التحرير", "value": "29 / 10 / 1982." },
      { "label": "التواقيع والمخطط", "value": "التواقيع: محمد خرمة، مصطفى خرمة، نصرت فاطمة نقوي. يوضح المخطط الطريق المؤدي إلى السيدة زينب، والأبعاد الجانبية، والأقسام المقسمة (1/284 و 2/284). (أختام الكاتب بالعدل والطوابع المالية مرفقة في الأسفل)." }
    ]
  },
  "fa": {
    "name": "فارسی",
    "dir": "rtl",
    "docName": "قرارداد خصوصی تخصیص و تقسیم اراضی",
    "lines": [
      { "label": "طرفین", "value": "۱. محمد خرمه (ساکن قبر الست).\n۲. مصطفی خرمه (ساکن قبر الست).\n۳. نصرت فاطمه نقوی (دارنده گذرنامه پاکستانی)." },
      { "label": "پیش‌زمینه", "value": "بر اساس مالکیت محمد خرمه و مصطفی خرمه در قطعه شماره ۲۸۴ واقع در منطقه قبر الست؛ و به موجب وکالتنامه اعطا شده به خانم نصرت فاطمه به شماره ۳۲/۲۶۰۰۱/۱۸ ثبت شده در سردفتر اسناد رسمی ببیلا در تاریخ ۹/۶/۱۹۸۲." },
      { "label": "جزئیات تقسیم", "value": "بخش اول (۱/۲۸۴): رسماً به خانم نصرت فاطمه نقوی اختصاص یافت.\nبخش دوم (۲/۲۸۴): به طور مشترک و مساوی به محمد و مصطفی، پسران مرحوم علی خرمه اختصاص یافت." },
      { "label": "شرایط", "value": "این تقسیم قطعی، غیرقابل برگشت و الزام‌آور است. هر یک از طرفین اختیار کامل مالکانه نسبت به سهم اختصاص یافته خود را به دست می‌آورند، از جمله حق تفکیک قانونی (افراز)، مجوزهای ساختمانی و نمایندگی در تمام مراجع اداری و شهرداری." },
      { "label": "تاریخ تنظیم", "value": "۲۹ / ۱۰ / ۱۹۸۲." },
      { "label": "امضا و کروکی", "value": "امضاها: محمد خرمه، مصطفی خرمه، نصرت فاطمه نقوی. نمودار سایت نشان‌دهنده جاده به سمت سیده زینب، ابعاد جانبی و بخش‌های تقسیم شده (۱/۲۸۴ و ۲/۲۸۴) است. (مهرهای سردفتر / تأییدیه و تمبرهای مالیاتی در پایین الصاق شده است)." }
    ]
  },
  "es": {
    "name": "Español",
    "dir": "ltr",
    "docName": "Contrato Privado de Asignación y División de Tierras",
    "lines": [
      { "label": "Partes", "value": "1. Mohammad Khurma (Residente de Qabr Essit).\n2. Mustafa Khurma (Residente de Qabr Essit).\n3. Nusrat Fatima Naqvi (Titular de Pasaporte Paquistaní)." },
      { "label": "Antecedentes", "value": "De conformidad con la propiedad de Mohammad Khurma y Mustafa Khurma en el lote No. 284 ubicado en la zona inmobiliaria de Qabr Essit; y en virtud del poder notarial otorgado a la Srta. Nusrat Fatima bajo el No. 32/26001/18 registrado en la Notaría Pública de Babbila el 9/6/1982." },
      { "label": "Detalles de la División", "value": "Primera Parte (1/284): Asignada formalmente a la Srta. Nusrat Fatima Naqvi.\nSegunda Parte (2/284): Asignada de manera conjunta y equitativa a Mohammad y Mustafa, hijos del difunto Ali Khurma." },
      { "label": "Términos", "value": "Esta división es definitiva, irrevocable y vinculante. Cada parte adquiere plena discreción de propietario sobre su parte asignada, incluido el derecho individual de iniciar la subdivisión legal (Ifraz), permisos de construcción y representación ante todos los órganos administrativos y municipales competentes." },
      { "label": "Fecha de Ejecución", "value": "29 / 10 / 1982." },
      { "label": "Firmas y Croquis", "value": "Firmas: Mohammad Khurma, Mustafa Khurma, Nusrat Fatima Naqvi. El diagrama del sitio representa el camino hacia Sayyidah Zaynab, las dimensiones laterales y las secciones divididas (1/284 y 2/284). (Sellos del notario/autenticación y timbres fiscales adheridos en la parte inferior)." }
    ]
  }
};

const data = JSON.parse(fs.readFileSync('documents_data.json', 'utf8'));
const docIndex = data.findIndex(d => d.id === docId);

if (docIndex !== -1) {
  data[docIndex].translations = newTranslations;
  data[docIndex].category = 'property'; 
  fs.writeFileSync('documents_data.json', JSON.stringify(data, null, 2));
  console.log("Updated doc_143 successfully");
} else {
  console.log("Doc not found");
}
