const fs = require('fs');

const docId = 'doc_121';

const newTranslations = {
  "ur": {
    "name": "اردو",
    "dir": "rtl",
    "docName": "حکومتِ دبئی - شرعی عدالت کا تصدیق نامہ برائے عطیات (1981)",
    "lines": [
      { "label": "تفصیلات", "value": "حکومتِ دبئی - محکمہ عدالت - شرعی عدالت۔" },
      { "label": "دستاویز", "value": "تصدیق نامہ / حلف نامہ (إشهاد) نمبر 912/81۔" },
      { "label": "تاریخ", "value": "31 دسمبر 1981۔" },
      { "label": "مضمون", "value": "جج عبدالمطلب علی الرشید کے روبرو محترمہ نصرت فاطمہ محمد نقوی (پاکستانی شہری، مقیم دیرہ، دبئی) نے گواہوں کی موجودگی میں بیان دیا کہ وہ 10 سال سے دبئی میں مقیم ہیں، ان کے وہاں کاروباری پروجیکٹس ہیں اور ان کے پاس دمشق (شام) میں زمین کا ایک ٹکڑا ہے۔ وہ اس زمین پر اسلامی تعلیم و تربیت کے لیے \"حسینیہ زینب الزہراء\" کے نام سے ایک اسلامی مرکز تعمیر کرنا چاہتی ہیں۔ چونکہ ان کے پاس اس بڑے پروجیکٹ کے اخراجات پورے کرنے کے لیے فنڈز ناکافی ہیں، اس لیے وہ خیر خواہ لوگوں سے عطیات (چندہ) جمع کریں گی۔" },
      { "label": "فیصلہ", "value": "عدالت نے گواہوں کے بیانات کی روشنی میں اس بات کی تصدیق کی کہ یہ اسلام اور مسلمانوں کی خدمت کا ایک فلاحی پروجیکٹ ہے، اور انہیں یہ سرٹیفکیٹ جاری کیا تاکہ وہ عطیات جمع کرنے کی غرض سے متعلقہ محکموں سے رجوع کر سکیں۔" },
      { "label": "دستخط", "value": "(جج اور دبئی کے نوٹری پبلک کے دستخط اور سرکاری مہروں کے ساتھ)۔" }
    ]
  },
  "en": {
    "name": "English",
    "dir": "ltr",
    "docName": "Government of Dubai - Sharia Court Attestation for Donations (1981)",
    "lines": [
      { "label": "Details", "value": "Government of Dubai - Courts Department - Sharia Court." },
      { "label": "Document", "value": "Attestation / Affidavit (إشهاد) No. 912/81." },
      { "label": "Date", "value": "31 / 12 / 1981." },
      { "label": "Content", "value": "Before Judge Abdul Muttalib Ali Al-Rashid, Mrs. Nusrat Fatima Muhammad Naqvi (Pakistani national, resident of Deira, Dubai) appeared along with witnesses. She testified that she has been residing in Dubai for 10 years, has businesses there, and owns a piece of land in Damascus, Syria. She intends to build an Islamic center on it named (Hussainiya Zainab Al-Zahra) for Islamic education and upbringing. Since she does not possess sufficient funds to cover this large project, she will collect donations from charitable people." },
      { "label": "Verdict", "value": "The court verified through witnesses that this is a charitable project serving Islam and Muslims, and thus grants her this attestation to present to the relevant authorities for collecting donations." },
      { "label": "Signature", "value": "(Signed and stamped by the Judge and the Notary Public of Dubai)." }
    ]
  },
  "ar": {
    "name": "العربية",
    "dir": "rtl",
    "docName": "حكومة دبي - إشهاد من المحكمة الشرعية لجمع التبرعات (1981)",
    "lines": [
      { "label": "تفاصيل", "value": "حكومة دبي - دائرة المحاكم - المحكمة الشرعية." },
      { "label": "الوثيقة", "value": "إشهاد رقم 912/81." },
      { "label": "التاريخ", "value": "31 / 12 / 1981." },
      { "label": "المضمون", "value": "أمام القاضي عبد المطلب علي الرشيد، حضرت السيدة نصرت فاطمة محمد نقوي (مواطنة باكستانية، مقيمة في ديرة، دبي) مع الشهود. وأقرت بأنها مقيمة في دبي منذ 10 سنوات ولها أعمال تجارية هناك، وتمتلك قطعة أرض في دمشق، سوريا. وتنوي بناء مركز إسلامي عليها باسم (حسينية زينب الزهراء) للتعليم والتربية الإسلامية. وبما أنها لا تملك الأموال الكافية لتغطية هذا المشروع الكبير، فإنها ستقوم بجمع التبرعات من أهل الخير." },
      { "label": "القرار", "value": "تحققت المحكمة من خلال الشهود أن هذا المشروع خيري يخدم الإسلام والمسلمين، وبالتالي تمنحها هذا الإشهاد لتقديمه للجهات المختصة لجمع التبرعات." },
      { "label": "التوقيع", "value": "(موقع ومختوم من قبل القاضي والكاتب بالعدل في دبي)." }
    ]
  },
  "fa": {
    "name": "فارسی",
    "dir": "rtl",
    "docName": "دولت دبی - گواهی دادگاه شرعی برای کمک‌های مردمی (۱۹۸۱)",
    "lines": [
      { "label": "جزئیات", "value": "دولت دبی - اداره دادگاه‌ها - دادگاه شرعی." },
      { "label": "سند", "value": "تأییدیه / استشهاد (إشهاد) شماره ۹۱۲/۸۱." },
      { "label": "تاریخ", "value": "۳۱ / ۱۲ / ۱۹۸۱." },
      { "label": "مضمون", "value": "در حضور قاضی عبدالمطلب علی الرشید، خانم نصرت فاطمه محمد نقوی (تبعه پاکستان، ساکن دیره، دبی) همراه با شاهدان حاضر شد. وی شهادت داد که ۱۰ سال است در دبی اقامت دارد، تجارت‌هایی در آنجا دارد و مالک قطعه زمینی در دمشق، سوریه است. او قصد دارد یک مرکز اسلامی به نام (حسینیه زینب الزهرا) برای آموزش و تربیت اسلامی در آن بسازد. از آنجا که او بودجه کافی برای پوشش این پروژه بزرگ را ندارد، کمک‌های مالی از افراد خیّر جمع‌آوری خواهد کرد." },
      { "label": "حکم", "value": "دادگاه از طریق شاهدان تأیید کرد که این یک پروژه خیریه در خدمت اسلام و مسلمانان است، و بنابراین این گواهی را به او می‌دهد تا برای جمع‌آوری کمک‌های مالی به مقامات مربوطه ارائه دهد." },
      { "label": "امضا", "value": "(با امضا و مهر قاضی و سردفتر اسناد رسمی دبی)." }
    ]
  },
  "es": {
    "name": "Español",
    "dir": "ltr",
    "docName": "Gobierno de Dubái - Certificación de la Corte de la Sharia para Donaciones (1981)",
    "lines": [
      { "label": "Detalles", "value": "Gobierno de Dubái - Departamento de Tribunales - Tribunal de la Sharia." },
      { "label": "Documento", "value": "Certificación / Declaración Jurada (إشهاد) No. 912/81." },
      { "label": "Fecha", "value": "31 / 12 / 1981." },
      { "label": "Contenido", "value": "Ante el Juez Abdul Muttalib Ali Al-Rashid, compareció la Sra. Nusrat Fatima Muhammad Naqvi (nacional paquistaní, residente de Deira, Dubái) junto con testigos. Testificó que ha estado residiendo en Dubái durante 10 años, tiene negocios allí y posee una parcela de tierra en Damasco, Siria. Tiene la intención de construir un centro islámico en ella llamado (Hussainiya Zainab Al-Zahra) para la educación y crianza islámica. Dado que no posee fondos suficientes para cubrir este gran proyecto, recaudará donaciones de personas caritativas." },
      { "label": "Veredicto", "value": "El tribunal verificó a través de testigos que este es un proyecto caritativo que sirve al Islam y a los musulmanes, y por lo tanto le otorga esta certificación para presentarla a las autoridades pertinentes para recaudar donaciones." },
      { "label": "Firma", "value": "(Firmado y sellado por el Juez y el Notario Público de Dubái)." }
    ]
  }
};

const data = JSON.parse(fs.readFileSync('documents_data.json', 'utf8'));
const docIndex = data.findIndex(d => d.id === docId);

if (docIndex !== -1) {
  data[docIndex].translations = newTranslations;
  data[docIndex].category = 'business'; 
  fs.writeFileSync('documents_data.json', JSON.stringify(data, null, 2));
  console.log("Updated doc_121 successfully");
} else {
  console.log("Doc not found");
}
