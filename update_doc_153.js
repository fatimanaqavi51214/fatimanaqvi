const fs = require('fs');

const docId = 'doc_153';

const newTranslations = {
  "ur": {
    "name": "اردو",
    "dir": "rtl",
    "docName": "درخواست برائے سرٹیفکیٹ - سفارت خانہ پاکستان",
    "lines": [
      { "label": "مقام", "value": "دبئی، متحدہ عرب امارات" },
      { "label": "القاب", "value": "جناب عالی!" },
      { "label": "درخواست کا متن", "value": "نہایت ادب و احترام کے ساتھ عرض ہے کہ میرے شوہر، جناب غلام سرور ولد فضل کریم چوہدری، جو تین سال قبل پاکستان گئے تھے، تب سے لے کر اب تک واپس نہیں آئے ہیں۔ اُن کی غیر موجودگی کی وجہ سے مجھے بچوں کے اسکول کے معاملات، امیگریشن اور دیگر سرکاری و دفتری کاموں میں شدید مشکلات کا سامنا کرنا پڑ رہا ہے۔ ہر جگہ ان کی ذاتی موجودگی اور دستخط درکار ہوتے ہیں، جبکہ یہ تمام تر ذمہ داریاں مجھے خود ہی نبھانی پڑ رہی ہیں۔ براہِ کرم اس صورت حال کے پیشِ نظر مجھے مطلوبہ سرٹیفکیٹ جاری کیا جائے، جس کے لیے میں آپ کی بیحد شکر گزار ہوں گی۔ سابقہ سرٹیفکیٹ کی فوٹو کاپی منسلک ہے۔ شکریہ کے ساتھ،" },
      { "label": "سائلہ کی تفصیلات", "value": "آپ کی مخلص، مسز نصرت فاطمہ | پوسٹ بکس نمبر: 781 | ٹیلیفون: 524072 | دبئی، متحدہ عرب امارات" },
      { "label": "سرکاری تصدیق", "value": "(نوٹ: نیچے پاکستان کے سفارت خانے/قونصل خانے اور وائس قونصل کے تصدیقی دستخط اور مہر ثبت ہیں)" }
    ]
  },
  "en": {
    "name": "English",
    "dir": "ltr",
    "docName": "Application for Certificate - Embassy of Pakistan",
    "lines": [
      { "label": "Location", "value": "DUBAI, UAE." },
      { "label": "Salutation", "value": "RESPECTED SIR," },
      { "label": "Application Text", "value": "WITH DUE RESPECT, I BEG TO STATE THAT MY HUSBAND MR. GHULAM SARWAR S/O MR. FAZLE KARIM CHAUDHRY WHO DID NOT COME FROM PAKISTAN TILL NOW SINCE HE LEFT 3 YEARS BACK. IN THIS ABSENCE I SUFFER A LOT IN CHILDREN SCHOOL, IMMIGRATION AND OTHER OFFICIAL WORKS, HIS PRESENCE AND SIGNATURE ARE REQUIRED EVERY WHERE, I HAVE TO PERFORM ALL ABOVE MENTIONED DUTIES. I SHALL BE GRATEFUL IF A CERTIFICATE WOULD BE PROVIDED ACCORDINGLY. PHOTOCOPY OF PREVIOUS CERTIFICATE IS ENCLOSED. THANKING YOU." },
      { "label": "Applicant Details", "value": "YOURS SINCERELY, MRS. NUSRAT FATIMA | P.O. BOX: 781 | TEL: 524072 | DUBAI, UAE." },
      { "label": "Official Attestation", "value": "(Attested by Vice Consul, Consulate General / Embassy of Pakistan)" }
    ]
  },
  "ar": {
    "name": "العربية",
    "dir": "rtl",
    "docName": "طلب شهادة - سفارة باكستان",
    "lines": [
      { "label": "المكان", "value": "دبي، الإمارات العربية المتحدة" },
      { "label": "التحية", "value": "سيدي المحترم،" },
      { "label": "نص الطلب", "value": "بكل احترام، أود أن أفيدكم بأن زوجي السيد غلام سرور بن السيد فضل كريم تشودري، الذي سافر إلى باكستان قبل 3 سنوات، لم يعد حتى الآن. وبسبب غيابه أواجه صعوبات كبيرة في شؤون مدارس الأطفال والهجرة والأعمال الرسمية الأخرى. حضوره وتوقيعه مطلوبان في كل مكان، وأنا مضطرة للقيام بكل هذه الواجبات بمفردي. سأكون ممتنة إذا تم إصدار الشهادة المطلوبة بناءً على ذلك. مرفق نسخة من الشهادة السابقة. ولكم جزيل الشكر." },
      { "label": "تفاصيل مقدمة الطلب", "value": "المخلصة، السيدة نصرت فاطمة | ص.ب: 781 | هاتف: 524072 | دبي، الإمارات العربية المتحدة." },
      { "label": "التصديق الرسمي", "value": "(مصادق عليه من قبل نائب القنصل، القنصلية العامة / سفارة باكستان)" }
    ]
  },
  "fa": {
    "name": "فارسی",
    "dir": "rtl",
    "docName": "درخواست گواهی - سفارت پاکستان",
    "lines": [
      { "label": "مکان", "value": "دبی، امارات متحده عربی" },
      { "label": "عنوان", "value": "جناب عالی!" },
      { "label": "متن درخواست", "value": "با احترام فراوان، به استحضار می‌رسانم که همسرم آقای غلام سرور فرزند آقای فضل کریم چودری که ۳ سال پیش به پاکستان رفته بودند، تاکنون برنگشته‌اند. در غیاب ایشان من در امور مدرسه فرزندان، مهاجرت و سایر کارهای رسمی با مشکلات زیادی روبرو هستم. حضور و امضای ایشان در همه جا الزامی است و من مجبورم تمام این وظایف را به تنهایی انجام دهم. سپاسگزار خواهم شد اگر گواهی مربوطه صادر شود. فتوکپی گواهی قبلی پیوست است. با تشکر." },
      { "label": "مشخصات متقاضی", "value": "ارادتمند شما، خانم نصرت فاطمه | صندوق پستی: ۷۸۱ | تلفن: ۵۲۴۰۷۲ | دبی، امارات متحده عربی." },
      { "label": "تأییدیه رسمی", "value": "(تأیید شده توسط معاون کنسول، سرکنسولگری / سفارت پاکستان)" }
    ]
  },
  "es": {
    "name": "Español",
    "dir": "ltr",
    "docName": "Solicitud de Certificado - Embajada de Pakistán",
    "lines": [
      { "label": "Ubicación", "value": "DUBÁI, EAU." },
      { "label": "Saludo", "value": "RESPETADO SEÑOR," },
      { "label": "Texto de la Solicitud", "value": "CON EL DEBIDO RESPETO, ME PERMITO MANIFESTAR QUE MI ESPOSO, EL SR. GHULAM SARWAR HIJO DEL SR. FAZLE KARIM CHAUDHRY, QUIEN NO HA REGRESADO DE PAKISTÁN DESDE QUE SE FUE HACE 3 AÑOS. EN SU AUSENCIA SUFRO MUCHO EN ASUNTOS DE LA ESCUELA DE LOS NIÑOS, INMIGRACIÓN Y OTROS TRABAJOS OFICIALES, SE REQUIERE SU PRESENCIA Y FIRMA EN TODAS PARTES, Y TENGO QUE REALIZAR TODAS LAS TAREAS MENCIONADAS. ESTARÍA AGRADECIDA SI SE PROPORCIONARA UN CERTIFICADO EN CONSECUENCIA. SE ADJUNTA FOTOCOPIA DEL CERTIFICADO ANTERIOR. AGRADECIÉNDOLE." },
      { "label": "Detalles del Solicitante", "value": "ATENTAMENTE, SRA. NUSRAT FATIMA | APARTADO POSTAL: 781 | TEL: 524072 | DUBÁI, EAU." },
      { "label": "Certificación Oficial", "value": "(Certificado por el Vicecónsul, Consulado General / Embajada de Pakistán)" }
    ]
  }
};

const data = JSON.parse(fs.readFileSync('documents_data.json', 'utf8'));
const docIndex = data.findIndex(d => d.id === docId);

if (docIndex !== -1) {
  data[docIndex].translations = newTranslations;
  data[docIndex].category = 'embassy'; 
  fs.writeFileSync('documents_data.json', JSON.stringify(data, null, 2));
  console.log("Updated doc_153 successfully");
} else {
  console.log("Doc not found");
}
