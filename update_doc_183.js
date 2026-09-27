const fs = require('fs');

const docId = 'doc_183';

const newTranslations = {
  "ur": {
    "name": "اردو",
    "dir": "rtl",
    "docName": "سفارت خانہ پاکستان تہران کا سرٹیفکیٹ",
    "lines": [
      { "label": "سرنامہ", "value": "سفارت خانہ پاکستان، تہران | خط نمبر: EOP/CR-II/2025 | تاریخ: 12 نومبر 202...ء" },
      { "label": "عنوان", "value": "بنام ہر کہ متعلق باشد (جس سے بھی یہ معاملہ متعلق ہو) (خصوصی طور پر صرف ایرانی حکام کے لیے)" },
      { "label": "متن", "value": "\"بیان کیا جاتا ہے کہ محترمہ نصرت فاطمہ بیوہ غلام سرور (مرحوم)، حامل پاسپورٹ نمبر DT8452184، قومی شناختی کارڈ (CNIC) نمبر 91306-0764218-6، ایک پاکستانی شہری ہیں۔ وہ برطانیہ (UK) اور اسپین میں رہائش پذیر ہیں، اور پیشے کے اعتبار سے وکیل / کاروباری خاتون (Business Woman) ہیں۔\"" },
      { "label": "نوٹ", "value": "\"نوٹ: یہ سرٹیفکیٹ محترمہ نصرت فاطمہ کی ذاتی درخواست پر جاری کیا گیا ہے۔\"" },
      { "label": "مہر و دستخط", "value": "سرکاری مہر و دستخط: سفارت خانہ پاکستان، تہران (دستخط و مہر شدہ)۔" }
    ]
  },
  "en": {
    "name": "English",
    "dir": "ltr",
    "docName": "Certificate from Embassy of Pakistan, Tehran",
    "lines": [
      { "label": "Header", "value": "Embassy of Pakistan, Tehran | Reference No.: EOP/CR-II/2025 | Dated: 12th November, 202..." },
      { "label": "Subject", "value": "TO WHOM IT MAY CONCERN (for Iranian authorities only)" },
      { "label": "Content", "value": "\"It is stated that Mrs. Nusrat Fatima w/o Ghulam Sarwar (late), Passport No. DT8452184, CNIC No. 91306-0764218-6 is a Pakistani national. She resides in the UK & Spain, and she is a lawyer / business woman by profession.\"" },
      { "label": "Note", "value": "\"Note: This has been issued on the request of Mrs. Nusrat Fatima.\"" },
      { "label": "Seal & Signature", "value": "Official Seal & Signature: Embassy of Pakistan, Tehran (Signed & Stamped)." }
    ]
  },
  "ar": {
    "name": "العربية",
    "dir": "rtl",
    "docName": "شهادة من سفارة باكستان في طهران",
    "lines": [
      { "label": "الترويسة", "value": "سفارة باكستان، طهران | رقم المرجع: EOP/CR-II/2025 | التاريخ: 12 نوفمبر 202..." },
      { "label": "الموضوع", "value": "إلى من يهمه الأمر (للسلطات الإيرانية فقط)" },
      { "label": "النص", "value": "\"يُفاد بأن السيدة نصرت فاطمة زوجة غلام سرور (المرحوم)، حاملة جواز سفر رقم DT8452184، ورقم الهوية الوطنية (CNIC) 91306-0764218-6، هي مواطنة باكستانية. تقيم في المملكة المتحدة وإسبانيا، وهي محامية / سيدة أعمال من حيث المهنة.\"" },
      { "label": "ملاحظة", "value": "\"ملاحظة: تم إصدار هذه الشهادة بناءً على طلب السيدة نصرت فاطمة.\"" },
      { "label": "الختم والتوقيع", "value": "الختم والتوقيع الرسمي: سفارة باكستان، طهران (موقعة ومختومة)." }
    ]
  },
  "fa": {
    "name": "فارسی",
    "dir": "rtl",
    "docName": "گواهی از سفارت پاکستان در تهران",
    "lines": [
      { "label": "سربرگ", "value": "سفارت پاکستان، تهران | شماره مرجع: EOP/CR-II/2025 | تاریخ: ۱۲ نوامبر ۲۰۲..." },
      { "label": "موضوع", "value": "به هر کس که مربوط می‌شود (فقط جهت ارائه به مقامات ایرانی)" },
      { "label": "متن", "value": "\"بدین‌وسیله گواهی می‌شود که خانم نصرت فاطمه همسر غلام سرور (مرحوم)، دارنده گذرنامه شماره DT8452184، کد ملی (CNIC) شماره 91306-0764218-6، یک شهروند پاکستانی می‌باشند. ایشان در بریتانیا و اسپانیا اقامت دارند و از نظر شغلی وکیل / تاجر (زن تاجر) هستند.\"" },
      { "label": "یادداشت", "value": "\"توجه: این گواهی بنا به درخواست خانم نصرت فاطمه صادر گردیده است.\"" },
      { "label": "مهر و امضا", "value": "مهر و امضای رسمی: سفارت پاکستان، تهران (امضا و مهر شده)." }
    ]
  },
  "es": {
    "name": "Español",
    "dir": "ltr",
    "docName": "Certificado de la Embajada de Pakistán en Teherán",
    "lines": [
      { "label": "Encabezado", "value": "Embajada de Pakistán, Teherán | No. de Referencia: EOP/CR-II/2025 | Fecha: 12 de noviembre de 202..." },
      { "label": "Asunto", "value": "A QUIEN CORRESPONDA (solo para autoridades iraníes)" },
      { "label": "Contenido", "value": "\"Se declara que la Sra. Nusrat Fatima, viuda de Ghulam Sarwar (fallecido), Pasaporte No. DT8452184, No. de CNIC 91306-0764218-6, es ciudadana pakistaní. Reside en el Reino Unido y España, y de profesión es abogada / mujer de negocios.\"" },
      { "label": "Nota", "value": "\"Nota: Este documento ha sido emitido a petición de la Sra. Nusrat Fatima.\"" },
      { "label": "Sello y Firma", "value": "Sello Oficial y Firma: Embajada de Pakistán, Teherán (Firmado y Sellado)." }
    ]
  }
};

const data = JSON.parse(fs.readFileSync('documents_data.json', 'utf8'));
const docIndex = data.findIndex(d => d.id === docId);

if (docIndex !== -1) {
  data[docIndex].translations = newTranslations;
  data[docIndex].imageUrl = "https://res.cloudinary.com/b7xbeztp/image/upload/v1790360751/image183.jpg";
  data[docIndex].category = 'official'; 
  fs.writeFileSync('documents_data.json', JSON.stringify(data, null, 2));
  console.log("Updated doc_183 successfully");
} else {
  console.log("Doc not found");
}
