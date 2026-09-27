const fs = require('fs');

const docId = 'doc_070';

const newTranslations = {
  "ur": {
    "name": "اردو",
    "dir": "rtl",
    "docName": "شامی وزارتِ داخلہ - کریمنل ریکارڈ سرٹیفکیٹ (پولیس کلیرنس)",
    "lines": [
      { "label": "Details", "value": "شامی عرب جمہوریہ - وزارتِ داخلہ - ادارہ امنِ جنایی." },
      { "label": "دستاویز", "value": "پولیس کلیرنس / عدمِ سزا کا سرٹیفکیٹ برائے فواد حیدر." },
      { "label": "تاریخِ اجراء", "value": "6 جون 2010." },
      { "label": "تفصیلات", "value": "قومیت: پاکستانی، والد کا نام: غلام سرور، والدہ کا نام: نصرت." },
      { "label": "حیثیت", "value": "غیر محکوم (کوئی مجرمانہ ریکارڈ نہیں)." },
      { "label": "Details", "value": "(شامی وزارتِ خارجہ اور کریمینل ریکارڈ ڈیپارٹمنٹ کی تصدیقی مہروں کے ساتھ)." }
    ]
  },
  "en": {
    "name": "English",
    "dir": "ltr",
    "docName": "Syrian Ministry of Interior - Criminal Record Certificate",
    "lines": [
      { "label": "Details", "value": "Syrian Arab Republic - Ministry of Interior - Directorate of Criminal Security." },
      { "label": "Document", "value": "Criminal Record Certificate (لا حكم عليه / غير محكوم) for Fouad Haider." },
      { "label": "Date of Issue", "value": "06 / 06 / 2010." },
      { "label": "Details", "value": "Nationality: Pakistani, Father's Name: Ghulam Sarwar, Mother's Name: Nusrat." },
      { "label": "Status", "value": "Not Convicted (غير محكوم)." },
      { "label": "Details", "value": "(Authenticated by the Syrian Ministry of Foreign Affairs and Criminal Record Department stamps)." }
    ]
  },
  "ar": {
    "name": "العربية",
    "dir": "rtl",
    "docName": "وزارة الداخلية السورية - شهادة سجل جنائي (لا حكم عليه)",
    "lines": [
      { "label": "تفاصيل", "value": "الجمهورية العربية السورية - وزارة الداخلية - إدارة الأمن الجنائي." },
      { "label": "الوثيقة", "value": "شهادة سجل جنائي (لا حكم عليه) لفؤاد حيدر." },
      { "label": "تاريخ الإصدار", "value": "06 / 06 / 2010." },
      { "label": "تفاصيل", "value": "الجنسية: باكستاني، اسم الأب: غلام سرور، اسم الأم: نصرت." },
      { "label": "الحالة", "value": "غير محكوم (لا يوجد سجل إجرامي)." },
      { "label": "تفاصيل", "value": "(مصدقة بأختام وزارة الخارجية السورية وقسم السجل الجنائي)." }
    ]
  },
  "fa": {
    "name": "فارسی",
    "dir": "rtl",
    "docName": "وزارت کشور سوریه - گواهی عدم سوء پیشینه",
    "lines": [
      { "label": "جزئیات", "value": "جمهوری عربی سوریه - وزارت کشور - اداره امنیت جنایی." },
      { "label": "سند", "value": "گواهی سوء پیشینه کیفری (لا حكم عليه / غیر محکوم) برای فواد حیدر." },
      { "label": "تاریخ صدور", "value": "۰۶ / ۰۶ / ۲۰۱۰." },
      { "label": "جزئیات", "value": "ملیت: پاکستانی، نام پدر: غلام سرور، نام مادر: نصرت." },
      { "label": "وضعیت", "value": "فاقد محکومیت (غیر محكوم)." },
      { "label": "جزئیات", "value": "(تأیید شده با مهرهای وزارت امور خارجه سوریه و بخش سوابق کیفری)." }
    ]
  },
  "es": {
    "name": "Español",
    "dir": "ltr",
    "docName": "Ministerio del Interior Sirio - Certificado de Antecedentes Penales",
    "lines": [
      { "label": "Detalles", "value": "República Árabe Siria - Ministerio del Interior - Dirección de Seguridad Criminal." },
      { "label": "Documento", "value": "Certificado de Antecedentes Penales (لا حكم عليه / غير محكوم) para Fouad Haider." },
      { "label": "Fecha de Emisión", "value": "06 / 06 / 2010." },
      { "label": "Detalles", "value": "Nacionalidad: Paquistaní, Nombre del Padre: Ghulam Sarwar, Nombre de la Madre: Nusrat." },
      { "label": "Estado", "value": "No Condenado (غير محكوم)." },
      { "label": "Detalles", "value": "(Autenticado por los sellos del Ministerio de Asuntos Exteriores de Siria y el Departamento de Antecedentes Penales)." }
    ]
  }
};

const data = JSON.parse(fs.readFileSync('documents_data.json', 'utf8'));
const docIndex = data.findIndex(d => d.id === docId);

if (docIndex !== -1) {
  data[docIndex].translations = newTranslations;
  data[docIndex].category = 'personal'; 
  fs.writeFileSync('documents_data.json', JSON.stringify(data, null, 2));
  console.log("Updated doc_070 successfully");
} else {
  console.log("Doc not found");
}
