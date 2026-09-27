const fs = require('fs');

const docId = 'doc_157';

const newTranslations = {
  "ur": {
    "name": "اردو",
    "dir": "rtl",
    "docName": "ایسوسی ایشن القائم بارسلونا کا خط",
    "lines": [
      { "label": "لیٹر ہیڈ", "value": "ایسوسی ایشن القائم، بارسلونا – اسپین | این۔ آئی۔ ایف (ٹیکس شناختی نمبر): G-62207691 | پتہ: C/. Sant Pere Mitjà, 21 – 08003 Barcelona | فون: 7216 310 93 34+ / 5044 319 93 34+" },
      { "label": "بنام", "value": "مجمع محترم جہانی اہلِ بیت علیہم السلام" },
      { "label": "متنِ خط", "value": "سلام و احترام کے بعد: ہم بارسلونا (اسپین) میں مقیم پاکستانی جو کہ اہل بیتِ عصمت و طہارت علیہم السلام کے پیروکار ہیں، شدید ترین مالی تنگی اور مشکلات کے باوجود گزشتہ آٹھ سالوں سے بینک کی ایک عمارت کرائے پر لے کر مرکز قائم کیے ہوئے ہیں۔ بینک کو ادا کیا جانے والا سالانہ کرایہ 8,640 یورو بنتا ہے، اس کے علاوہ گیس، بجلی، پانی اور دیگر فعال اخراجات کی مد میں تقریباً 7,800 سے 8,000 یورو کے اخراجات آتے ہیں۔" },
      { "label": "درخواست و التماس", "value": "یہ مرکز و حسینیہ اہل بیت علیہم السلام کے ذکر، مجالس اور تعلیمات کے فروغ کے لیے مسلسل خدمات انجام دے رہا ہے۔ موجودہ معاشی حالات اور اخراجات کے پیش نظر، ہم آپ سے معاونت اور مالی و معنوی تعاون کی التماس کرتے ہیں تاکہ اس اسلامی و عزاداری مرکز کو مستقل بنیادوں پر جاری رکھا جا سکے۔ دعا گو ہیں کہ خداوندِ متعال خدمت گزارانِ دین و اہل بیت کو جزائے خیر عطا فرمائے۔" },
      { "label": "توثیق و دستخط", "value": "نمائندہ و رکن مجمع جہانی اہل بیت اسپین: جعفر | ایسوسی ایشن کے صدر، سیکرٹری اور منتظمین کے دستخط بمعہ القائم بارسلونا کی سرکاری مہر۔" }
    ]
  },
  "en": {
    "name": "English",
    "dir": "ltr",
    "docName": "Letter from Association Al-Qaim Barcelona",
    "lines": [
      { "label": "Header", "value": "ASOC. AL-QAIM, BARCELONA – SPAIN | N.I.F. No.: G-62207691 | Address: C/. Sant Pere Mitjà, 21 – 08003 Barcelona | Tel: +34 93 310 72 16 / +34 93 319 50 44" },
      { "label": "Addressed to", "value": "To: Respected World Forum of Ahl al-Bayt (A.S.)" },
      { "label": "Body of Letter", "value": "With greetings and respect: We, the Pakistani community in Barcelona, Spain, who are dedicated followers of the Ahl al-Bayt of purity and infallibility (A.S.), despite facing numerous financial and economic constraints, have rented a bank-owned property for the past eight years with immense dedication. The rental expense is 8,640 Euros annually paid to the bank, alongside active community efforts and water/electricity utility costs amounting to approximately 7,800 to 8,000 Euros." },
      { "label": "Request", "value": "This center serves the dissemination of the teachings and commemorations of the Holy Prophet’s Household (A.S.). Given the difficult economic situation, we request your continuous moral and financial backing and assistance. We pray to Almighty God to grant success to all those serving the cause of Ahl al-Bayt (A.S.)." },
      { "label": "Endorsements & Signatures", "value": "Representative and Member of Ahl al-Bayt World Assembly in Spain: Jafar | Association President / Officials' Signatures and Official Seals of Asoc. Al-Qaim Barcelona." }
    ]
  },
  "ar": {
    "name": "العربية",
    "dir": "rtl",
    "docName": "رسالة جمعية القائم في برشلونة",
    "lines": [
      { "label": "الترويسة", "value": "جمعية القائم، برشلونة – إسبانيا | الرقم الضريبي: G-62207691 | العنوان: C/. Sant Pere Mitjà, 21 – 08003 Barcelona | هاتف: +34 93 310 72 16 / +34 93 319 50 44" },
      { "label": "إلى", "value": "المجمع العالمي المحترم لأهل البيت (عليهم السلام)" },
      { "label": "نص الرسالة", "value": "بعد التحية والاحترام: نحن الجالية الباكستانية المقيمة في برشلونة (إسبانيا)، من أتباع أهل بيت النبوة والطهارة (عليهم السلام)، وعلى الرغم من الصعوبات المالية الشديدة، قمنا باستئجار مبنى تابع لأحد البنوك منذ ثماني سنوات لإنشاء مركز. الإيجار السنوي المدفوع للبنك يبلغ 8,640 يورو، بالإضافة إلى نفقات الغاز والكهرباء والماء والمصاريف التشغيلية الأخرى التي تتراوح بين 7,800 إلى 8,000 يورو." },
      { "label": "الطلب والالتماس", "value": "يقوم هذا المركز والحسينية بخدمة مستمرة في نشر ذكر ومجالس وتعاليم أهل البيت (عليهم السلام). ونظراً للظروف الاقتصادية والنفقات الحالية، نلتمس منكم الدعم والمساعدة المالية والمعنوية لاستمرار هذا المركز الإسلامي. نسأل الله العلي القدير أن يجزي خيراً كل من يخدم الدين وأهل البيت." },
      { "label": "التوقيعات والمصادقات", "value": "ممثل وعضو المجمع العالمي لأهل البيت في إسبانيا: جعفر | توقيعات رئيس الجمعية والأمين العام والمنظمين مع الختم الرسمي لجمعية القائم برشلونة." }
    ]
  },
  "fa": {
    "name": "فارسی",
    "dir": "rtl",
    "docName": "نامه انجمن القائم بارسلونا",
    "lines": [
      { "label": "سربرگ", "value": "انجمن القائم، بارسلونا – اسپانیا | شماره مالیاتی: G-62207691 | آدرس: C/. Sant Pere Mitjà, 21 – 08003 Barcelona | تلفن: +34 93 310 72 16 / +34 93 319 50 44" },
      { "label": "به", "value": "مجمع محترم جهانی اهل بیت علیهم السلام" },
      { "label": "متن نامه", "value": "با سلام و احترام: ما جامعه پاکستانی مقیم بارسلونا (اسپانیا) که از پیروان اهل بیت عصمت و طهارت علیهم السلام هستیم، علی‌رغم تنگناهای شدید مالی و اقتصادی، هشت سال است که ملکی متعلق به یک بانک را اجاره کرده و مرکزی تأسیس نموده‌ایم. اجاره سالانه پرداختی به بانک ۸,۶۴۰ یورو است و علاوه بر آن هزینه‌های گاز، برق، آب و سایر هزینه‌های جاری تقریباً بین ۷,۸۰۰ تا ۸,۰۰۰ یورو می‌باشد." },
      { "label": "درخواست", "value": "این مرکز و حسینیه در جهت ترویج ذکر، مجالس و معارف اهل بیت علیهم السلام خدمات مستمری ارائه می‌دهد. با توجه به شرایط اقتصادی و هزینه‌های موجود، از شما تقاضای مساعدت و حمایت مالی و معنوی داریم تا این مرکز اسلامی پابرجا بماند. از خداوند متعال برای تمامی خادمان دین و اهل بیت جزای خیر مسئلت داریم." },
      { "label": "تأییدیه‌ها و امضاها", "value": "نماینده و عضو مجمع جهانی اهل بیت در اسپانیا: جعفر | امضاهای رئیس انجمن، دبیر و مسئولین به همراه مهر رسمی انجمن القائم بارسلونا." }
    ]
  },
  "es": {
    "name": "Español",
    "dir": "ltr",
    "docName": "Carta de la Asociación Al-Qaim Barcelona",
    "lines": [
      { "label": "Encabezado", "value": "ASOC. AL-QAIM, BARCELONA – ESPAÑA | N.I.F. No.: G-62207691 | Dirección: C/. Sant Pere Mitjà, 21 – 08003 Barcelona | Tel: +34 93 310 72 16 / +34 93 319 50 44" },
      { "label": "Dirigido a", "value": "A: Respetado Foro Mundial de Ahl al-Bayt (A.S.)" },
      { "label": "Cuerpo de la Carta", "value": "Con saludos y respeto: Nosotros, la comunidad paquistaní en Barcelona, España, seguidores devotos de Ahl al-Bayt (A.S.), a pesar de las numerosas limitaciones financieras, hemos alquilado una propiedad de un banco durante los últimos ocho años. El gasto de alquiler es de 8,640 euros anuales pagados al banco, junto con los gastos de servicios públicos de gas, agua/electricidad y operativos que ascienden a aproximadamente 7,800 a 8,000 euros." },
      { "label": "Solicitud", "value": "Este centro sirve para la difusión de las enseñanzas y conmemoraciones de Ahl al-Bayt (A.S.). Dada la difícil situación económica, solicitamos su continuo respaldo y asistencia moral y financiera para mantener este centro islámico. Oramos a Dios Todopoderoso para que conceda el éxito a todos los que sirven a la causa." },
      { "label": "Endosos y Firmas", "value": "Representante y Miembro de la Asamblea Mundial de Ahl al-Bayt en España: Jafar | Firmas del Presidente de la Asociación, Secretario y Oficiales, y Sello oficial de Asoc. Al-Qaim Barcelona adherido." }
    ]
  }
};

const data = JSON.parse(fs.readFileSync('documents_data.json', 'utf8'));
const docIndex = data.findIndex(d => d.id === docId);

if (docIndex !== -1) {
  data[docIndex].translations = newTranslations;
  data[docIndex].category = 'business'; 
  fs.writeFileSync('documents_data.json', JSON.stringify(data, null, 2));
  console.log("Updated doc_157 successfully");
} else {
  console.log("Doc not found");
}
