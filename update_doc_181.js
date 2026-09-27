const fs = require('fs');

const docId = 'doc_181';

const newTranslations = {
  "ur": {
    "name": "اردو",
    "dir": "rtl",
    "docName": "بارسلونا میں مصدقہ ہسپانوی ترجمہ برائے مراسلہ وزارت خارجہ شام",
    "lines": [
      { "label": "سرنامہ", "value": "کے۔ ایم۔ العربی – مصدقہ قانونی ترجمہ سروسز، بارسلونا، اسپین | جمہوریہ عربیہ سوریہ (شام) | وزارتِ خارجہ – شعبۂ ثقافت | نمبر: 11 | تاریخ: 25 جولائی 1982ء" },
      { "label": "بخدمت", "value": "قونصل خانہ جنرل، دبئی" },
      { "label": "متن", "value": "\"مکتوب نمبر 60 بتاریخ 3 دسمبر 1981ء کے تناظر میں، وزارتِ اسلامی امور و اوقاف کے خط نمبر 6/4/1911 بتاریخ 7 جولائی 1982ء کی نقل ارسال کی جا رہی ہے، جس میں محترمہ نصرت فاطمہ نقوی دختر سید محمد نقوی کے جذبے پر وزارتِ اوقاف کی جانب سے شکریہ اور تشکر کا اظہار کیا گیا ہے، اور ان کی پیشکش و درخواست منظور کر لی گئی ہے۔ (اصل پر وزارتِ خارجہ کی مہر، قونصل خانہ جنرل دبئی کی مہر اور ریاست متحدہ عرب امارات کی توثیقی مہریں ثبت ہیں)۔\"" },
      { "label": "مترجم کی تصدیق", "value": "قانونی مترجم کی تصدیق: \"میں، کامل سلیم منصور (مصدقہ قانونی مترجم برائے عربی زبان)، تصدیق کرتا ہوں کہ درج بالا تحریر عربی زبان کی اصل دستاویز کا ہسپانوی زبان میں مکمل اور درست ترجمہ ہے۔ بمقام بارسلونا، بتاریخ 3 اگست 2004ء۔\" | (دستخط و مہر قانونی مترجم، بارسلونا)" },
      { "label": "نوٹ", "value": "ہاتھ سے لکھی گئی اردو تحریر (نیچے بائیں جانب): \"ادارہ اوقاف نے شکریہ ادا کیا ہے زمین کا\"" }
    ]
  },
  "en": {
    "name": "English",
    "dir": "ltr",
    "docName": "Sworn Spanish Translation in Barcelona for Syrian MFA Communication",
    "lines": [
      { "label": "Header", "value": "K.M. al-arabi, s.l. – Sworn Interpretations & Translations, Public Relations, Barcelona | Syrian Arab Republic | Ministry of Foreign Affairs – Cultural Department | No.: 11 | Date: 25-07-1982" },
      { "label": "To", "value": "The Consulate General of Dubai" },
      { "label": "Content", "value": "\"According to letter No. 60 dated 03-12-1981, we enclose a copy of the communication from the Ministry of Islamic Affairs and Awqaf No. 6/4/1911 dated 07-07-1982, conveying the appreciation and gratitude of the Ministry of Islamic Affairs to Mrs. NUSRAT FATIMA NAQVI, daughter of Sayed Mohammad Naqvi, and approving her request. (Official seal of the Ministry of Foreign Affairs and illegible signature of the official affixed). (Official seal of the Consulate General in Dubai and signature affixed). (Official seal of the United Arab Emirates and signature affixed).\"" },
      { "label": "Certification", "value": "Sworn Translator’s Certification: \"Mr. Kamel Salim Mansour, Sworn Arabic Translator and Interpreter, certifies that the above is a faithful and complete translation into Spanish of a document drafted in Arabic. Executed in Barcelona on August 3, 2004.\" | (Signed & Stamped by Kamel Salim Mansour, Sworn Translator, Barcelona)" },
      { "label": "Note", "value": "Handwritten Urdu Note (Bottom-Left): \"ادارہ اوقاف نے شکریہ ادا کیا ہے زمین کا\"" }
    ]
  },
  "ar": {
    "name": "العربية",
    "dir": "rtl",
    "docName": "ترجمة إسبانية محلفة لمراسلة من وزارة الخارجية السورية في برشلونة",
    "lines": [
      { "label": "الترويسة", "value": "كي. إم. العربي، شركة ذات مسؤولية محدودة – ترجمة محلفة وعلاقات عامة، برشلونة | الجمهورية العربية السورية | وزارة الخارجية – إدارة الشؤون الثقافية | الرقم: 11 | التاريخ: 25-07-1982" },
      { "label": "إلى", "value": "القنصلية العامة في دبي" },
      { "label": "النص", "value": "\"بناءً على الكتاب رقم 60 وتاريخ 03-12-1981، نرفق طيه نسخة من مراسلة وزارة الشؤون الإسلامية والأوقاف رقم 6/4/1911 وتاريخ 07-07-1982، والتي تنقل شكر وتقدير وزارة الشؤون الإسلامية للسيدة نصرت فاطمة نقوي، ابنة السيد محمد نقوي، والموافقة على طلبها. (ممهور بالختم الرسمي لوزارة الخارجية وتوقيع غير مقروء للمسؤول). (ممهور بالختم الرسمي للقنصلية العامة في دبي وتوقيع). (ممهور بالختم الرسمي لدولة الإمارات العربية المتحدة وتوقيع).\"" },
      { "label": "الشهادة", "value": "شهادة المترجم المحلف: \"يصادق السيد كامل سليم منصور، مترجم محلف للغة العربية، على أن ما ورد أعلاه هو ترجمة أمينة وكاملة إلى اللغة الإسبانية لوثيقة محررة باللغة العربية. حُرر في برشلونة بتاريخ 3 أغسطس 2004.\" | (ممهور وموقع من كامل سليم منصور، مترجم محلف، برشلونة)" },
      { "label": "ملاحظة", "value": "ملاحظة مكتوبة بخط اليد باللغة الأردية (أسفل اليسار): \"ادارہ اوقاف نے شکریہ ادا کیا ہے زمین کا\"" }
    ]
  },
  "fa": {
    "name": "فارسی",
    "dir": "rtl",
    "docName": "ترجمه رسمی اسپانیایی مکاتبه وزارت امور خارجه سوریه در بارسلونا",
    "lines": [
      { "label": "سربرگ", "value": "کی. ام. العربی – ترجمه رسمی و روابط عمومی، بارسلونا | جمهوری عربی سوریه | وزارت امور خارجه – اداره امور فرهنگی | شماره: ۱۱ | تاریخ: ۲۵-۰۷-۱۹۸۲" },
      { "label": "به", "value": "سرکنسولگری در دبی" },
      { "label": "متن", "value": "\"عطف به نامه شماره ۶۰ مورخ ۰۳-۱۲-۱۹۸۱، به پیوست نسخه‌ای از مکاتبه وزارت امور اسلامی و اوقاف به شماره ۶/۴/۱۹۱۱ مورخ ۰۷-۰۷-۱۹۸۲ ارسال می‌گردد که حاوی تشکر و قدردانی وزارت امور اسلامی از خانم نصرت فاطمه نقوی، فرزند سید محمد نقوی، و موافقت با درخواست ایشان است. (ممهور به مهر رسمی وزارت امور خارجه و امضای ناخوانای مقام مسئول). (ممهور به مهر رسمی سرکنسولگری در دبی و امضا). (ممهور به مهر رسمی امارات متحده عربی و امضا).\"" },
      { "label": "گواهی", "value": "گواهی مترجم رسمی: \"آقای کامل سلیم منصور، مترجم رسمی زبان عربی، گواهی می‌دهد که متن فوق ترجمه‌ای دقیق و کامل به زبان اسپانیایی از سندی است که به زبان عربی تنظیم شده است. صادر شده در بارسلونا در تاریخ ۳ اوت ۲۰۰۴.\" | (امضا و مهر شده توسط کامل سلیم منصور، مترجم رسمی، بارسلونا)" },
      { "label": "یادداشت", "value": "یادداشت دست‌نویس اردو (پایین سمت چپ): \"ادارہ اوقاف نے شکریہ ادا کیا ہے زمین کا\"" }
    ]
  },
  "es": {
    "name": "Español",
    "dir": "ltr",
    "docName": "Traducción Jurada al Español de Comunicación del Ministerio de Asuntos Exteriores de Siria en Barcelona",
    "lines": [
      { "label": "Encabezado", "value": "K.M. al-arabi, s.l. – Interpretaciones y Traducciones Juradas, Relaciones Públicas, Barcelona | República Árabe Siria | Ministerio de Asuntos Exteriores – Departamento Cultural | No.: 11 | Fecha: 25-07-1982" },
      { "label": "A", "value": "El Consulado General de Dubái" },
      { "label": "Contenido", "value": "\"De acuerdo con el escrito No. 60 de fecha 03-12-1981, adjuntamos copia de la comunicación del Ministerio de Asuntos Islámicos y Awqaf No. 6/4/1911 de fecha 07-07-1982, transmitiendo el aprecio y gratitud del Ministerio de Asuntos Islámicos a la Sra. NUSRAT FATIMA NAQVI, hija del Sr. Sayed Mohammad Naqvi, y aprobando su solicitud. (Sello oficial del Ministerio de Asuntos Exteriores y firma ilegible del funcionario estampada). (Sello oficial del Consulado General en Dubái y firma estampada). (Sello oficial de los Emiratos Árabes Unidos y firma estampada).\"" },
      { "label": "Certificación", "value": "Certificación del Traductor Jurado: \"Don Kamel Salim Mansour, Traductor e Intérprete Jurado de Árabe, certifica que la que antecede es traducción fiel y completa al español de un documento redactado en árabe. Expedido en Barcelona a 3 de agosto de 2004.\" | (Firmado y Sellado por Kamel Salim Mansour, Traductor Jurado, Barcelona)" },
      { "label": "Nota", "value": "Nota manuscrita en urdu (abajo a la izquierda): \"ادارہ اوقاف نے شکریہ ادا کیا ہے زمین کا\"" }
    ]
  }
};

const data = JSON.parse(fs.readFileSync('documents_data.json', 'utf8'));
const docIndex = data.findIndex(d => d.id === docId);

if (docIndex !== -1) {
  data[docIndex].translations = newTranslations;
  data[docIndex].imageUrl = "https://res.cloudinary.com/b7xbeztp/image/upload/v1790360750/image181.jpg";
  data[docIndex].category = 'official'; 
  fs.writeFileSync('documents_data.json', JSON.stringify(data, null, 2));
  console.log("Updated doc_181 successfully");
} else {
  console.log("Doc not found");
}
