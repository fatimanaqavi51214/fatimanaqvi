const fs = require('fs');

const docId = 'doc_173';

const newTranslations = {
  "ur": {
    "name": "اردو",
    "dir": "rtl",
    "docName": "وزارت خارجہ و اوقاف امارات کا تشکر نامہ",
    "lines": [
      { "label": "سربراہ", "value": "وزارتِ خارجہ – ادارۂ امورِ ثقافت | خط نمبر: 11/ (1/2/7) (3741) | تاریخ: 25 فروری 1982ء" },
      { "label": "بنام", "value": "قونصل خانہ جنرل (دبئی)" },
      { "label": "خط کا متن", "value": "\"آپ کے مکتوب نمبر 60 (1/2/4) بتاریخ 31 دسمبر 1981ء کے حوالے سے مطلع کیا جاتا ہے: اس مراسلے کے ساتھ وزارتِ اوقاف کے خط نمبر 1911 / 6/4 بتاریخ 2 فروری 1982ء کی نقل ارسال کی جا رہی ہے، جس میں نیک دل و خیر خواہ خاتون محترمہ نصرت فاطمہ بنت سید محمد کے جذبہ خیر سگالی و سخاوت پر وزارتِ اوقاف کی جانب سے ان کا شکریہ اور تشکر کا اظہار کیا گیا ہے اور ان کی درخواست و پیشکش کی باضابطہ منظوری دی گئی ہے۔\"" },
      { "label": "دستخط کنندہ اور منسلکات", "value": "دستخط کنندہ: وزیرِ مملکت برائے امورِ خارجہ (بمعہ سرکاری مہر) | منسلکات: نقلِ مکتوب" },
      { "label": "توثیقی مہریں", "value": "وزارتِ خارجہ متحدہ عرب امارات کی قانونی توثیق اور قونصلر مہریں ثبت ہیں۔" }
    ]
  },
  "en": {
    "name": "English",
    "dir": "ltr",
    "docName": "Letter of Appreciation from UAE Ministry of Foreign Affairs & Awqaf",
    "lines": [
      { "label": "Header", "value": "Ministry of Foreign Affairs – Department of Cultural Affairs | Reference No.: 11/ (1/2/7) (3741) | Date: 25 / 2 / 1982" },
      { "label": "Addressed to", "value": "The Consulate General in Dubai" },
      { "label": "Letter Content", "value": "\"With reference to your letter No. 60 (1/2/4) dated 31/12/1981: Enclosed herewith is a copy of the letter from the Ministry of Awqaf No. 1911 / 6/4 dated 2/2/1982, conveying the sincere appreciation and gratitude of the Ministry of Awqaf to the benefactress, Mrs. Nusrat Fatima d/o Sayed Mohammad, for her generosity and magnanimity, and conveying formal approval of her request.\"" },
      { "label": "Signatory & Enclosure", "value": "Signatory: Minister of State for Foreign Affairs (Seal & Stamp) | Enclosure: Copy of letter" },
      { "label": "Attestations", "value": "Official attestation stamps from the Ministry of Foreign Affairs, UAE, and Consular verification stamps." }
    ]
  },
  "ar": {
    "name": "العربية",
    "dir": "rtl",
    "docName": "رسالة شكر من وزارة الخارجية والأوقاف بالإمارات",
    "lines": [
      { "label": "الترويسة", "value": "وزارة الخارجية – إدارة الشؤون الثقافية | رقم المرجع: 11/ (1/2/7) (3741) | التاريخ: 25 / 2 / 1982" },
      { "label": "إلى", "value": "القنصلية العامة في دبي" },
      { "label": "نص الرسالة", "value": "\"إشارة إلى كتابكم رقم 60 (1/2/4) المؤرخ 31/12/1981: نرفق طيه نسخة من كتاب وزارة الأوقاف رقم 1911 / 6/4 المؤرخ 2/2/1982، الذي ينقل خالص شكر وتقدير وزارة الأوقاف للمحسنة السيدة نصرت فاطمة ابنة السيد محمد، على كرمها وسخائها، ونقل الموافقة الرسمية على طلبها.\"" },
      { "label": "الموقع والمرفقات", "value": "الموقع: وزير الدولة للشؤون الخارجية (ممهور بختم رسمي) | المرفقات: نسخة من الرسالة" },
      { "label": "التصديقات", "value": "أختام التصديق الرسمية من وزارة الخارجية بدولة الإمارات العربية المتحدة، وأختام التحقق القنصلي." }
    ]
  },
  "fa": {
    "name": "فارسی",
    "dir": "rtl",
    "docName": "تقدیرنامه از وزارت امور خارجه و اوقاف امارات",
    "lines": [
      { "label": "سربرگ", "value": "وزارت امور خارجه - اداره امور فرهنگی | شماره مرجع: ۱۱/ (۱/۲/۷) (۳۷۴۱) | تاریخ: ۲۵ / ۲ / ۱۹۸۲" },
      { "label": "به", "value": "سرکنسولگری در دبی" },
      { "label": "متن نامه", "value": "\"عطف به نامه شماره ۶۰ (۱/۲/۴) مورخ ۳۱/۱۲/۱۹۸۱: به پیوست نسخه‌ای از نامه وزارت اوقاف به شماره ۱۹۱۱ / ۶/۴ مورخ ۲/۲/۱۹۸۲ ارسال می‌گردد که حاوی تشکر و قدردانی صمیمانه وزارت اوقاف از بانوی نیکوکار، خانم نصرت فاطمه فرزند سید محمد، به پاس سخاوت و بزرگواری ایشان بوده و موافقت رسمی با درخواست ایشان را اعلام می‌دارد.\"" },
      { "label": "امضاکننده و پیوست", "value": "امضاکننده: وزیر مشاور در امور خارجه (مهر و امضا شده) | پیوست: کپی نامه" },
      { "label": "تأییدیه‌ها", "value": "مهرهای رسمی تأیید از وزارت امور خارجه امارات متحده عربی و مهرهای تأیید کنسولی." }
    ]
  },
  "es": {
    "name": "Español",
    "dir": "ltr",
    "docName": "Carta de Agradecimiento del Ministerio de Relaciones Exteriores y Awqaf de EAU",
    "lines": [
      { "label": "Encabezado", "value": "Ministerio de Relaciones Exteriores – Departamento de Asuntos Culturales | No. de Referencia: 11/ (1/2/7) (3741) | Fecha: 25 / 2 / 1982" },
      { "label": "Dirigido a", "value": "El Consulado General en Dubái" },
      { "label": "Contenido de la Carta", "value": "\"Con referencia a su carta No. 60 (1/2/4) fechada el 31/12/1981: Se adjunta una copia de la carta del Ministerio de Awqaf No. 1911 / 6/4 fechada el 2/2/1982, que transmite el sincero aprecio y gratitud del Ministerio de Awqaf a la benefactora, Sra. Nusrat Fatima hija de Sayed Mohammad, por su generosidad y magnanimidad, y transmite la aprobación formal de su solicitud.\"" },
      { "label": "Firmante y Anexo", "value": "Firmante: Ministro de Estado de Asuntos Exteriores (Sello y Estampilla) | Anexo: Copia de la carta" },
      { "label": "Certificaciones", "value": "Sellos de certificación oficial del Ministerio de Relaciones Exteriores, E.A.U., y sellos de verificación consular." }
    ]
  }
};

const data = JSON.parse(fs.readFileSync('documents_data.json', 'utf8'));
const docIndex = data.findIndex(d => d.id === docId);

if (docIndex !== -1) {
  data[docIndex].translations = newTranslations;
  data[docIndex].category = 'embassy'; 
  fs.writeFileSync('documents_data.json', JSON.stringify(data, null, 2));
  console.log("Updated doc_173 successfully");
} else {
  console.log("Doc not found");
}
