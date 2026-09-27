const fs = require('fs');

const docId = 'doc_155';

const newTranslations = {
  "ur": {
    "name": "اردو",
    "dir": "rtl",
    "docName": "قونصل خانہ پاکستان دبئی / سفارت خانہ پاکستان دمشق کو درخواست",
    "lines": [
      { "label": "سربراہ", "value": "قونصل خانہ جنرل پاکستان، دبئی، متحدہ عرب امارات" },
      { "label": "بخدمت جناب", "value": "عالیجاہ / محترم" },
      { "label": "درخواست کا متن", "value": "\"نہایت ادب سے گزارش ہے کہ میرے شوہر مسٹر غلام سرور ولد مسٹر فضل کریم چوہدری تین سال قبل پاکستان گئے تھے اور تاحال واپس نہیں آئے ہیں۔ ان کی غیر موجودگی کے باعث مجھے بچوں کے اسکول کے معاملات، امیگریشن اور دیگر سرکاری و دفتری امور نمٹانے میں شدید مشکلات کا سامنا کرنا پڑ رہا ہے، کیونکہ ہر جگہ شوہر کی موجودگی اور دستخط درکار ہوتے ہیں، اور یہ تمام ذمہ داریاں اکیلے مجھے ہی پوری کرنی پڑ رہی ہیں۔ لہٰذا التماس ہے کہ اس ضمن میں مطلوبہ باضابطہ سرٹیفکیٹ جاری فرمایا جائے، جس کے لیے میں شکر گزار رہوں گی۔ سابقہ سرٹیفکیٹ کی فوٹو کاپی ساتھ منسلک ہے۔\"" },
      { "label": "سائلہ کی تفصیلات", "value": "نیازمند: مسز نصرت فاطمہ | پتہ و رابطہ: پوسٹ بکس نمبر 781، ٹیلی فون: 524072، دبئی، متحدہ عرب امارات" },
      { "label": "عربی کالم کا خلاصہ", "value": "محترمہ نصرت فاطمہ، پاکستانی شہری، پاسپورٹ نمبر 174660، زوجہ مسٹر غلام سرور چوہدری، تصدیق کرتی ہیں کہ گھریلو ناچاقی اور تنازعات کے باعث ان کے شوہر تین سال سے غائب ہیں اور اب تک واپس نہیں آئے، جس کی وجہ سے بچوں کے اسکول داخلے اور کفالت کے سرکاری کاموں کے لیے انہیں باضابطہ اجازت نامہ / سرٹیفکیٹ درکار ہے۔" },
      { "label": "تصدیق و مہریں", "value": "محترمہ نصرت فاطمہ کے دستخطوں کی تصدیق از وائس قونصل، قونصل خانہ پاکستان، دبئی۔ تصدیقی مہر و دستخط از سفارت خانہ پاکستان، دمشق۔" }
    ]
  },
  "en": {
    "name": "English",
    "dir": "ltr",
    "docName": "Application to Consulate General of Pakistan Dubai / Embassy of Pakistan Damascus",
    "lines": [
      { "label": "Header", "value": "Consulate General of Pakistan, Dubai, U.A.E." },
      { "label": "Addressed to", "value": "Respected Sir" },
      { "label": "Application Text", "value": "\"With due respect, I beg to state that my husband Mr. Ghulam Sarwar s/o Mr. Fazle Karim Chaudhry, who did not come from Pakistan till now since he left 3 years back. In his absence, I suffer a lot in children's school, immigration, and other official works, as his presence and signature are required everywhere. I have to perform all above mentioned duties. I shall be grateful if a certificate would be provided accordingly. Photocopy of previous certificate is enclosed.\"" },
      { "label": "Applicant Details", "value": "Thanking You, Yours Sincerely: Mrs. Nusrat Fatima | Address / Contact: P.O. Box 781, Tel: 524072, Dubai, U.A.E." },
      { "label": "Arabic Column Summary", "value": "Confirms she is Mrs. Nusrat Fatima, Pakistani national, holder of passport No. 174660, wife of Mr. Ghulam Sarwar Chaudhry, stating her husband left three years ago and has not returned due to family issues, leaving her in urgent need of custody/guardianship certification for household management, school admissions, and official processing." },
      { "label": "Attestations & Seals", "value": "\"Signature of Mrs. Nusrat Fatima attested\" – Signed by Vice Consul, Consulate General of Pakistan, Dubai. \"Attested\" – Signed and stamped by Embassy of Pakistan, Damascus." }
    ]
  },
  "ar": {
    "name": "العربية",
    "dir": "rtl",
    "docName": "طلب إلى القنصلية العامة لباكستان في دبي / سفارة باكستان في دمشق",
    "lines": [
      { "label": "الترويسة", "value": "القنصلية العامة لباكستان، دبي، الإمارات العربية المتحدة" },
      { "label": "إلى", "value": "سيدي المحترم" },
      { "label": "نص الطلب", "value": "\"بكل احترام، أود أن أفيدكم بأن زوجي السيد غلام سرور بن السيد فضل كريم تشودري، الذي غادر إلى باكستان قبل 3 سنوات، لم يعد حتى الآن. وبسبب غيابه أواجه صعوبات كبيرة في شؤون مدارس الأطفال والهجرة والأعمال الرسمية الأخرى. حضوره وتوقيعه مطلوبان في كل مكان، وأنا مضطرة للقيام بكل هذه الواجبات بمفردي. سأكون ممتنة إذا تم إصدار الشهادة المطلوبة بناءً على ذلك. مرفق نسخة من الشهادة السابقة.\"" },
      { "label": "تفاصيل مقدمة الطلب", "value": "المخلصة: السيدة نصرت فاطمة | العنوان / الاتصال: ص.ب 781، هاتف: 524072، دبي، الإمارات العربية المتحدة." },
      { "label": "ملخص العمود العربي", "value": "تؤكد أنها السيدة نصرت فاطمة، مواطنة باكستانية، تحمل جواز سفر رقم 174660، زوجة السيد غلام سرور تشودري، مفيدة بأن زوجها غادر منذ ثلاث سنوات ولم يعد بسبب مشاكل عائلية، مما يجعلها في حاجة ماسة إلى شهادة حضانة/وصاية لإدارة شؤون الأسرة وقبول المدارس والمعاملات الرسمية." },
      { "label": "التصديقات والأختام", "value": "\"تم التصديق على توقيع السيدة نصرت فاطمة\" – موقع من قبل نائب القنصل، القنصلية العامة لباكستان، دبي. \"تم التصديق\" – موقع ومختوم من قبل سفارة باكستان، دمشق." }
    ]
  },
  "fa": {
    "name": "فارسی",
    "dir": "rtl",
    "docName": "درخواست به سرکنسولگری پاکستان دبی / سفارت پاکستان دمشق",
    "lines": [
      { "label": "سربرگ", "value": "سرکنسولگری پاکستان، دبی، امارات متحده عربی" },
      { "label": "عنوان", "value": "جناب عالی" },
      { "label": "متن درخواست", "value": "\"با احترام فراوان، به استحضار می‌رسانم که همسرم آقای غلام سرور فرزند آقای فضل کریم چودری که ۳ سال پیش به پاکستان رفته بودند، تاکنون برنگشته‌اند. در غیاب ایشان من در امور مدرسه فرزندان، مهاجرت و سایر کارهای رسمی با مشکلات زیادی روبرو هستم، زیرا حضور و امضای ایشان در همه جا الزامی است و من مجبورم تمام این وظایف را به تنهایی انجام دهم. سپاسگزار خواهم شد اگر گواهی مربوطه صادر شود. فتوکپی گواهی قبلی پیوست است.\"" },
      { "label": "مشخصات متقاضی", "value": "ارادتمند شما: خانم نصرت فاطمه | آدرس / تماس: صندوق پستی ۷۸۱، تلفن: ۵۲۴۰۷۲، دبی، امارات متحده عربی." },
      { "label": "خلاصه ستون عربی", "value": "تأیید می‌کند که او خانم نصرت فاطمه، تبعه پاکستان، دارنده گذرنامه شماره ۱۷۴۶۶۰، همسر آقای غلام سرور چودری است، مبنی بر اینکه همسرش سه سال پیش رفته و به دلیل مشکلات خانوادگی برنگشته است، و او برای مدیریت امور خانواده، پذیرش مدرسه و پردازش‌های رسمی نیاز فوری به گواهی حضانت/سرپرستی دارد." },
      { "label": "تأییدیه‌ها و مهرها", "value": "\"امضای خانم نصرت فاطمه تأیید شد\" - با امضای معاون کنسول، سرکنسولگری پاکستان، دبی. \"تأیید شد\" - امضا و مهر شده توسط سفارت پاکستان، دمشق." }
    ]
  },
  "es": {
    "name": "Español",
    "dir": "ltr",
    "docName": "Solicitud al Consulado General de Pakistán en Dubái / Embajada de Pakistán en Damasco",
    "lines": [
      { "label": "Encabezado", "value": "Consulado General de Pakistán, Dubái, E.A.U." },
      { "label": "Dirigido a", "value": "Respetado Señor" },
      { "label": "Texto de la Solicitud", "value": "\"Con el debido respeto, me permito manifestar que mi esposo, el Sr. Ghulam Sarwar hijo del Sr. Fazle Karim Chaudhry, quien no ha regresado de Pakistán desde que se fue hace 3 años. En su ausencia sufro mucho en asuntos de la escuela de los niños, inmigración y otros trabajos oficiales, ya que se requiere su presencia y firma en todas partes. Tengo que realizar todas las tareas mencionadas. Estaría agradecida si se proporcionara un certificado en consecuencia. Se adjunta fotocopia del certificado anterior.\"" },
      { "label": "Detalles del Solicitante", "value": "Atentamente: Sra. Nusrat Fatima | Dirección / Contacto: Apartado Postal 781, Tel: 524072, Dubái, E.A.U." },
      { "label": "Resumen de la Columna Árabe", "value": "Confirma que es la Sra. Nusrat Fatima, de nacionalidad paquistaní, titular del pasaporte No. 174660, esposa del Sr. Ghulam Sarwar Chaudhry, afirmando que su marido se fue hace tres años y no ha regresado debido a problemas familiares, dejándola en necesidad urgente de una certificación de custodia/tutela para la gestión del hogar, admisiones escolares y trámites oficiales." },
      { "label": "Certificaciones y Sellos", "value": "\"Firma de la Sra. Nusrat Fatima atestiguada\" – Firmado por el Vicecónsul, Consulado General de Pakistán, Dubái. \"Atestiguado\" – Firmado y sellado por la Embajada de Pakistán, Damasco." }
    ]
  }
};

const data = JSON.parse(fs.readFileSync('documents_data.json', 'utf8'));
const docIndex = data.findIndex(d => d.id === docId);

if (docIndex !== -1) {
  data[docIndex].translations = newTranslations;
  data[docIndex].category = 'embassy'; 
  fs.writeFileSync('documents_data.json', JSON.stringify(data, null, 2));
  console.log("Updated doc_155 successfully");
} else {
  console.log("Doc not found");
}
