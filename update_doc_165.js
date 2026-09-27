const fs = require('fs');

const docId = 'doc_165';

const newTranslations = {
  "ur": {
    "name": "اردو",
    "dir": "rtl",
    "docName": "طبی فٹنس / رخصت کا سرٹیفکیٹ",
    "lines": [
      { "label": "سربراہ", "value": "حکومتِ دبئی – محکمہ صحت و طبی خدمات (ڈیپارٹمنٹ آف ہیلتھ اینڈ میڈیکل سروسز)" },
      { "label": "حوالہ جات", "value": "ہیلتھ کارڈ نمبر: 401870 | حوالہ: PAX 234" },
      { "label": "مریضہ کی تفصیلات", "value": "عنوانِ دستاویز: میڈیکل فٹنس / ان فٹنس سرٹیفکیٹ (طبی رخصت کا اجازت نامہ) | مریضہ کا پورا نام: نصرت فاطمہ" },
      { "label": "علاج اور رخصت", "value": "علاج کا اندراج: آؤٹ پیشنٹ (او پی ڈی) معائنہ بتاریخ 25 جنوری 1999ء | کام کے لیے غیر موزوں (میڈیکل چھٹی): 25 جنوری 1999ء سے آرام کی ہدایت" },
      { "label": "تشخیص", "value": "گلے کے غدود کی سوزش (Tonsillitis)، شدید ذہنی دباؤ اور بے چینی کا ردِ عمل (Acute reaction to stress)، ای سی جی رپورٹ: کیو-ٹی دورانیہ طویل (ECG: prolonged QT)۔" },
      { "label": "تصدیق و دستخط", "value": "معالج ڈاکٹر کا نام و دستخط: ڈاکٹر ایم۔ کنعان (Dr. M. CANAN) (دستخط و مہر شدہ) | تاریخ: 25 جنوری 1999ء | (محکمہ صحت کی تصدیقی سرکاری مہر ثبت ہے)" }
    ]
  },
  "en": {
    "name": "English",
    "dir": "ltr",
    "docName": "Medical Fitness / Leave Certificate",
    "lines": [
      { "label": "Header", "value": "Government of Dubai – Department of Health & Medical Services" },
      { "label": "References", "value": "Health Card Number: 401870 | Ref: PAX 234" },
      { "label": "Patient Details", "value": "Document Title: Fitness / Unfitness Certificate | Full Name of Patient: NUSRAT FATIMA" },
      { "label": "Treatment & Leave", "value": "Treatment Record: Treated as an outpatient on 25/01/99 | Certified as UNFIT for work from: 25/01/99 to ... (Medical leave recommended)" },
      { "label": "Diagnosis", "value": "Tonsillitis + Acute reaction to stress. ECG: prolonged QT." },
      { "label": "Attestation", "value": "Name & Signature of Medical Officer: Dr. M. CANAN (Signed & Stamped) | Date: 25/01/99 | (Official stamp of Primary Health Care / Department of Health & Medical Services affixed)" }
    ]
  },
  "ar": {
    "name": "العربية",
    "dir": "rtl",
    "docName": "شهادة اللياقة الطبية / الإجازة المرضية",
    "lines": [
      { "label": "الترويسة", "value": "حكومة دبي – دائرة الصحة والخدمات الطبية" },
      { "label": "المراجع", "value": "رقم البطاقة الصحية: 401870 | المرجع: PAX 234" },
      { "label": "تفاصيل المريض", "value": "عنوان الوثيقة: شهادة لياقة / عدم لياقة طبية | الاسم الكامل للمريضة: نصرت فاطمة" },
      { "label": "العلاج والإجازة", "value": "سجل العلاج: عولجت كمريضة خارجية بتاريخ 25/01/99 | معتمدة كغير لائقة للعمل اعتباراً من: 25/01/99 (يوصى بإجازة طبية)" },
      { "label": "التشخيص", "value": "التهاب اللوزتين + رد فعل حاد للضغط النفسي. تخطيط القلب: استطالة في فترة QT." },
      { "label": "المصادقة والتوقيع", "value": "اسم وتوقيع المسؤول الطبي: د. م. كنعان (موقع ومختوم) | التاريخ: 25/01/99 | (ممهور بختم الرعاية الصحية الأولية / دائرة الصحة والخدمات الطبية)" }
    ]
  },
  "fa": {
    "name": "فارسی",
    "dir": "rtl",
    "docName": "گواهی سلامت / مرخصی استعلاجی",
    "lines": [
      { "label": "سربرگ", "value": "دولت دبی - اداره بهداشت و خدمات درمانی" },
      { "label": "مراجع", "value": "شماره کارت بهداشت: ۴۰۱۸۷۰ | مرجع: PAX 234" },
      { "label": "مشخصات بیمار", "value": "عنوان سند: گواهی سلامت / عدم سلامت | نام کامل بیمار: نصرت فاطمه" },
      { "label": "درمان و مرخصی", "value": "سوابق درمانی: معاینه به صورت سرپایی در تاریخ ۲۵/۰۱/۹۹ | گواهی عدم توانایی کار از: ۲۵/۰۱/۹۹ (توصیه به مرخصی پزشکی)" },
      { "label": "تشخیص", "value": "ورم لوزه + واکنش حاد به استرس. نوار قلب: طولانی شدن QT." },
      { "label": "تأییدیه", "value": "نام و امضای پزشک معالج: دکتر م. کنعان (امضا و مهر شده) | تاریخ: ۲۵/۰۱/۹۹ | (ممهور به مهر رسمی مراقبت‌های بهداشتی اولیه / اداره بهداشت و خدمات درمانی)" }
    ]
  },
  "es": {
    "name": "Español",
    "dir": "ltr",
    "docName": "Certificado de Aptitud Médica / Baja por Enfermedad",
    "lines": [
      { "label": "Encabezado", "value": "Gobierno de Dubái – Departamento de Salud y Servicios Médicos" },
      { "label": "Referencias", "value": "Número de Tarjeta de Salud: 401870 | Ref: PAX 234" },
      { "label": "Detalles del Paciente", "value": "Título del Documento: Certificado de Aptitud / Inaptitud Médica | Nombre Completo del Paciente: NUSRAT FATIMA" },
      { "label": "Tratamiento y Baja", "value": "Registro de Tratamiento: Tratada como paciente ambulatorio el 25/01/99 | Certificada como NO APTA para trabajar desde: 25/01/99 (baja médica recomendada)" },
      { "label": "Diagnóstico", "value": "Amigdalitis + Reacción aguda al estrés. ECG: QT prolongado." },
      { "label": "Certificación", "value": "Nombre y Firma del Oficial Médico: Dr. M. CANAN (Firmado y Sellado) | Fecha: 25/01/99 | (Sello oficial de Atención Primaria de Salud / Departamento de Salud y Servicios Médicos adherido)" }
    ]
  }
};

const data = JSON.parse(fs.readFileSync('documents_data.json', 'utf8'));
const docIndex = data.findIndex(d => d.id === docId);

if (docIndex !== -1) {
  data[docIndex].translations = newTranslations;
  data[docIndex].category = 'personal'; 
  fs.writeFileSync('documents_data.json', JSON.stringify(data, null, 2));
  console.log("Updated doc_165 successfully");
} else {
  console.log("Doc not found");
}
