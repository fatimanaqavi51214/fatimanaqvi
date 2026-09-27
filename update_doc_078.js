const fs = require('fs');

const docId = 'doc_078';

const newTranslations = {
  "ur": {
    "name": "اردو",
    "dir": "rtl",
    "docName": "شامی وزارتِ داخلہ کے نام جائیداد کی رجسٹریشن کی درخواست",
    "lines": [
      { "label": "بنام", "value": "مقامِ وزارتِ داخلہ - امورِ مدنیہ." },
      { "label": "درخواست گزار", "value": "شہری نصرت فاطمہ دختر سید محمد نقوی، پاکستانی قومیت، حاملہ پاسپورٹ نمبر 112462." },
      { "label": "موضوع", "value": "قبر السٹ کے رئیل اسٹیٹ علاقے میں واقع پراپرٹی نمبر 284 میں سے 2400 میں سے 1200 حصے، اور پراپرٹیز نمبر 282 اور 283 میں سے 400 حصے اپنے نام رجسٹر کرنے کی منظوری کی درخواست." },
      { "label": "تاریخ", "value": "مئی 1992." },
      { "label": "Details", "value": "(اس پر محکمہ سیاسی سیکیورٹی اور دیگر انتظامی شعبوں کی طرف ریفر کرنے کی مہریں درج ہیں)." }
    ]
  },
  "en": {
    "name": "English",
    "dir": "ltr",
    "docName": "Request to Syrian Ministry of Interior for Property Registration",
    "lines": [
      { "label": "To", "value": "H.E. The Minister of Interior - Civil Affairs." },
      { "label": "Petitioner", "value": "The citizen Nusrat Fatima, daughter of Syed Muhammad Naqvi, Pakistani national, holding passport no. 112462." },
      { "label": "Subject", "value": "Request for approval to register shares measuring 1200/2400 shares from property no. 284, and fractional shares measuring 400 shares from properties nos. 282 and 283 located in the Qabr Al-Sit real estate region." },
      { "label": "Date", "value": "May 1992." },
      { "label": "Details", "value": "(Includes forwarding stamps to the Political Security branch and official administrative departments)." }
    ]
  },
  "ar": {
    "name": "العربية",
    "dir": "rtl",
    "docName": "طلب إلى وزارة الداخلية السورية لتسجيل عقار",
    "lines": [
      { "label": "إلى", "value": "معالي وزير الداخلية - الشؤون المدنية." },
      { "label": "مقدم الطلب", "value": "المواطنة نصرت فاطمة ابنة سيد محمد نقوي، الجنسية باكستانية، تحمل جواز سفر رقم 112462." },
      { "label": "الموضوع", "value": "طلب الموافقة على تسجيل حصص سهمية تبلغ 1200 سهم من أصل 2400 سهم من العقار رقم 284، وحصص سهمية تبلغ 400 سهم من العقارين رقم 282 و 283 الواقعة في منطقة قبر الست العقارية." },
      { "label": "التاريخ", "value": "مايو 1992." },
      { "label": "تفاصيل", "value": "(يتضمن أختام إحالة إلى فرع الأمن السياسي والدوائر الإدارية الرسمية)." }
    ]
  },
  "fa": {
    "name": "فارسی",
    "dir": "rtl",
    "docName": "درخواست از وزارت کشور سوریه برای ثبت ملک",
    "lines": [
      { "label": "به", "value": "مقام محترم وزارت کشور - امور مدنی." },
      { "label": "درخواست‌کننده", "value": "شهروند نصرت فاطمه فرزند سید محمد نقوی، تبعه پاکستان، دارنده گذرنامه شماره ۱۱۲۴۶۲." },
      { "label": "موضوع", "value": "درخواست موافقت برای ثبت ۱۲۰۰ سهم از ۲۴۰۰ سهم از ملک شماره ۲۸۴، و ۴۰۰ سهم از املاک شماره ۲۸۲ و ۲۸۳ واقع در منطقه ملکی قبر الست به نام خود." },
      { "label": "تاریخ", "value": "مه ۱۹۹۲." },
      { "label": "جزئیات", "value": "(شامل مهرهای ارجاع به شعبه امنیت سیاسی و سایر بخش‌های اداری رسمی)." }
    ]
  },
  "es": {
    "name": "Español",
    "dir": "ltr",
    "docName": "Solicitud al Ministerio del Interior Sirio para Registro de Propiedad",
    "lines": [
      { "label": "Para", "value": "S.E. El Ministro del Interior - Asuntos Civiles." },
      { "label": "Peticionario", "value": "La ciudadana Nusrat Fatima, hija de Syed Muhammad Naqvi, nacional paquistaní, con pasaporte no. 112462." },
      { "label": "Asunto", "value": "Solicitud de aprobación para registrar acciones que miden 1200/2400 acciones de la propiedad no. 284, y acciones fraccionarias que miden 400 acciones de las propiedades nos. 282 y 283 ubicadas en la región inmobiliaria de Qabr Al-Sit." },
      { "label": "Fecha", "value": "Mayo de 1992." },
      { "label": "Detalles", "value": "(Incluye sellos de remisión a la rama de Seguridad Política y departamentos administrativos oficiales)." }
    ]
  }
};

const data = JSON.parse(fs.readFileSync('documents_data.json', 'utf8'));
const docIndex = data.findIndex(d => d.id === docId);

if (docIndex !== -1) {
  data[docIndex].translations = newTranslations;
  data[docIndex].category = 'property'; 
  fs.writeFileSync('documents_data.json', JSON.stringify(data, null, 2));
  console.log("Updated doc_078 successfully");
} else {
  console.log("Doc not found");
}
