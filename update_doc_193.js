const fs = require('fs');

const docId = 'doc_193';

const newTranslations = {
  "ur": {
    "name": "اردو",
    "dir": "rtl",
    "docName": "فیملی رجسٹریشن سرٹیفکیٹ - نادرا",
    "lines": [
      { "label": "سرنامہ", "value": "حکومتِ پاکستان | قومی ادارۂ شماریات و رجسٹریشن (نادرا) – وزارتِ داخلہ | فیملی رجسٹریشن سرٹیفکیٹ (FRC - خاندان کا تصدیق نامہ)" },
      { "label": "سائلہ و قانونی وضاحت", "value": "سائلہ کا نام: نصرت فاطمہ | قانونی وضاحت: \"تصدیق کی جاتی ہے کہ فراہم کردہ معلومات کے مطابق درج ذیل افراد پر مشتمل خاندان نادرا ریکارڈ میں باقاعدہ درج ہے۔ یہ سرٹیفکیٹ جائیداد یا وراثت کے معاملات کے لیے کسی بھی عدالت میں بطور قانونی ثبوت قابلِ استعمال نہیں ہوگا۔\"" },
      { "label": "فیملی ممبر 1", "value": "1. غلام سرور | والد: فضل کریم | والدہ: سردار بی بی | سائلہ سے رشتہ: شوہر (Husband) | شناختی کارڈ نمبر: 9-4564659-34202 | سالِ پیدائش: 1945ء" },
      { "label": "فیملی ممبر 2", "value": "2. نصرت فاطمہ | والد: سید محمد نقوی | والدہ: مہر بانو | حیثیت: بذاتِ خود (سائلہ) | شناختی کارڈ نمبر: 6-0764218-91306 | تاریخِ پیدائش: 01/01/1958ء" },
      { "label": "فیملی ممبر 3", "value": "3. ہاجرہ خاتون | والد: غلام سرور | والدہ: نصرت فاطمہ | رشتہ: بیٹی (Daughter) | شناختی کارڈ نمبر: 2-0100395-91306 | تاریخِ پیدائش: 08/01/1985ء" },
      { "label": "فیملی ممبر 4", "value": "4. جواد حیدر | والد: غلام سرور چوہدری | والدہ: نصرت فاطمہ | رشتہ: بیٹا (Son) | شناختی کارڈ نمبر: 1-0108028-91306 | تاریخِ پیدائش: 02/05/1987ء" },
      { "label": "فیملی ممبر 5", "value": "5. فواد حیدر چوہدری | والد: غلام سرور | والدہ: نصرت فاطمہ | رشتہ: بیٹا (Son) | شناختی کارڈ نمبر: 3-0108172-91306 | تاریخِ پیدائش: 28/12/1992ء" },
      { "label": "اجراء و تصدیق", "value": "تاریخِ اجراء: 12 اکتوبر 2012ء | دستخط مجاز افسر: رجسٹرار جنرل نادرا (دستخط و بارکوڈ) | ٹریکنگ کوڈ: 9130607642186" }
    ]
  },
  "en": {
    "name": "English",
    "dir": "ltr",
    "docName": "Family Registration Certificate (FRC)",
    "lines": [
      { "label": "Header", "value": "Government of Pakistan | National Database and Registration Authority (NADRA) – Ministry of Interior | Family Registration Certificate (FRC)" },
      { "label": "Applicant & Disclaimer", "value": "Applicant Name: Nusrat Fatima | Legal Disclaimer: \"This is to certify that the family comprising of the following members is registered in NADRA records as per the information provided. This certificate is not valid in any court of law for inheritance/property issues.\"" },
      { "label": "Member 1", "value": "1. Ghulam Sarwar | Father: Fazal Karim | Mother: Sardar Bibi | Relation: Husband | CNIC: 34202-4564659-9 | Year of Birth: 1945" },
      { "label": "Member 2", "value": "2. Nusrat Fatima | Father: Syed Muhammad Naqvi | Mother: Mehar Bano | Relation: Self (Applicant) | CNIC: 91306-0764218-6 | Date of Birth: 01/01/1958" },
      { "label": "Member 3", "value": "3. Hajra Khatoon | Father: Ghulam Sarwar | Mother: Nusrat Fatima | Relation: Daughter | CNIC: 91306-0100395-2 | Date of Birth: 08/01/1985" },
      { "label": "Member 4", "value": "4. Jawad Haider | Father: Ghulam Sarwar Chaudhry | Mother: Nusrat Fatima | Relation: Son | CNIC: 91306-0108028-1 | Date of Birth: 02/05/1987" },
      { "label": "Member 5", "value": "5. Fouad Haider Chaudhry | Father: Ghulam Sarwar | Mother: Nusrat Fatima | Relation: Son | CNIC: 91306-0108172-3 | Date of Birth: 28/12/1992" },
      { "label": "Issuance", "value": "Issuance Date: 12/10/2012 | Authorized Signatory: Registrar General (Signature & Barcode Affixed) | Tracking / ID: 9130607642186" }
    ]
  },
  "ar": {
    "name": "العربية",
    "dir": "rtl",
    "docName": "شهادة تسجيل العائلة - نادرا",
    "lines": [
      { "label": "الترويسة", "value": "حكومة باكستان | الهيئة الوطنية لقاعدة البيانات والتسجيل (نادرا) – وزارة الداخلية | شهادة تسجيل العائلة (FRC)" },
      { "label": "مقدم الطلب والتنويه", "value": "اسم مقدم الطلب: نصرت فاطمة | إخلاء المسؤولية القانونية: \"يُصادق على أن العائلة المكونة من الأفراد التاليين مسجلة في سجلات نادرا بناءً على المعلومات المقدمة. هذه الشهادة غير صالحة للاستخدام في أي محكمة كدليل قانوني لقضايا الميراث/الممتلكات.\"" },
      { "label": "فرد العائلة 1", "value": "1. غلام سرور | الأب: فضل كريم | الأم: سردار بي بي | صلة القرابة: زوج | رقم الهوية: 9-4564659-34202 | سنة الميلاد: 1945" },
      { "label": "فرد العائلة 2", "value": "2. نصرت فاطمة | الأب: سيد محمد نقوي | الأم: مهر بانو | صلة القرابة: صاحبة الطلب (نفسها) | رقم الهوية: 6-0764218-91306 | تاريخ الميلاد: 01/01/1958" },
      { "label": "فرد العائلة 3", "value": "3. هاجرة خاتون | الأب: غلام سرور | الأم: نصرت فاطمة | صلة القرابة: ابنة | رقم الهوية: 2-0100395-91306 | تاريخ الميلاد: 08/01/1985" },
      { "label": "فرد العائلة 4", "value": "4. جواد حيدر | الأب: غلام سرور تشودري | الأم: نصرت فاطمة | صلة القرابة: ابن | رقم الهوية: 1-0108028-91306 | تاريخ الميلاد: 02/05/1987" },
      { "label": "فرد العائلة 5", "value": "5. فؤاد حيدر تشودري | الأب: غلام سرور | الأم: نصرت فاطمة | صلة القرابة: ابن | رقم الهوية: 3-0108172-91306 | تاريخ الميلاد: 28/12/1992" },
      { "label": "تفاصيل الإصدار", "value": "تاريخ الإصدار: 12/10/2012 | التوقيع المعتمد: المسجل العام (موقع ومرفق به باركود) | رقم التتبع: 9130607642186" }
    ]
  },
  "fa": {
    "name": "فارسی",
    "dir": "rtl",
    "docName": "گواهی ثبت نام خانواده - نادرا",
    "lines": [
      { "label": "سربرگ", "value": "حکومت پاکستان | سازمان ملی پایگاه داده و ثبت نام (نادرا) – وزارت کشور | گواهی ثبت نام خانواده (FRC)" },
      { "label": "متقاضی و سلب مسئولیت", "value": "نام متقاضی: نصرت فاطمه | سلب مسئولیت قانونی: \"گواهی می‌شود که خانواده متشکل از افراد زیر بر اساس اطلاعات ارائه‌شده در سوابق نادرا ثبت شده است. این گواهی در هیچ دادگاهی برای مسائل ارث/املاک معتبر نمی‌باشد.\"" },
      { "label": "عضو خانواده ۱", "value": "۱. غلام سرور | پدر: فضل کریم | مادر: سردار بی بی | نسبت: همسر | شماره کارت ملی: 9-4564659-34202 | سال تولد: ۱۹۴۵" },
      { "label": "عضو خانواده ۲", "value": "۲. نصرت فاطمه | پدر: سید محمد نقوی | مادر: مهر بانو | نسبت: شخص متقاضی | شماره کارت ملی: 6-0764218-91306 | تاریخ تولد: ۰۱/۰۱/۱۹۵۸" },
      { "label": "عضو خانواده ۳", "value": "۳. هاجره خاتون | پدر: غلام سرور | مادر: نصرت فاطمه | نسبت: دختر | شماره کارت ملی: 2-0100395-91306 | تاریخ تولد: ۰۸/۰۱/۱۹۸۵" },
      { "label": "عضو خانواده ۴", "value": "۴. جواد حیدر | پدر: غلام سرور چوهدری | مادر: نصرت فاطمه | نسبت: پسر | شماره کارت ملی: 1-0108028-91306 | تاریخ تولد: ۰۲/۰۵/۱۹۸۷" },
      { "label": "عضو خانواده ۵", "value": "۵. فواد حیدر چوهدری | پدر: غلام سرور | مادر: نصرت فاطمه | نسبت: پسر | شماره کارت ملی: 3-0108172-91306 | تاریخ تولد: ۲۸/۱۲/۱۹۹۲" },
      { "label": "جزئیات صدور", "value": "تاریخ صدور: ۱۲/۱۰/۲۰۱۲ | امضای مجاز: مدیر کل ثبت (امضا و بارکد الصاق شده) | کد رهگیری: 9130607642186" }
    ]
  },
  "es": {
    "name": "Español",
    "dir": "ltr",
    "docName": "Certificado de Registro Familiar - NADRA",
    "lines": [
      { "label": "Encabezado", "value": "Gobierno de Pakistán | Autoridad Nacional de Base de Datos y Registro (NADRA) – Ministerio del Interior | Certificado de Registro Familiar (FRC)" },
      { "label": "Solicitante y Descargo", "value": "Nombre del Solicitante: Nusrat Fatima | Descargo de Responsabilidad Legal: \"Por la presente se certifica que la familia compuesta por los siguientes miembros está registrada en los registros de NADRA según la información proporcionada. Este certificado no es válido en ningún tribunal de justicia para cuestiones de herencia/propiedad.\"" },
      { "label": "Miembro 1", "value": "1. Ghulam Sarwar | Padre: Fazal Karim | Madre: Sardar Bibi | Relación: Esposo | CNIC: 34202-4564659-9 | Año de Nacimiento: 1945" },
      { "label": "Miembro 2", "value": "2. Nusrat Fatima | Padre: Syed Muhammad Naqvi | Madre: Mehar Bano | Relación: Propia (Solicitante) | CNIC: 91306-0764218-6 | Fecha de Nacimiento: 01/01/1958" },
      { "label": "Miembro 3", "value": "3. Hajra Khatoon | Padre: Ghulam Sarwar | Madre: Nusrat Fatima | Relación: Hija | CNIC: 91306-0100395-2 | Fecha de Nacimiento: 08/01/1985" },
      { "label": "Miembro 4", "value": "4. Jawad Haider | Padre: Ghulam Sarwar Chaudhry | Madre: Nusrat Fatima | Relación: Hijo | CNIC: 91306-0108028-1 | Fecha de Nacimiento: 02/05/1987" },
      { "label": "Miembro 5", "value": "5. Fouad Haider Chaudhry | Padre: Ghulam Sarwar | Madre: Nusrat Fatima | Relación: Hijo | CNIC: 91306-0108172-3 | Fecha de Nacimiento: 28/12/1992" },
      { "label": "Emisión", "value": "Fecha de Emisión: 12/10/2012 | Signatario Autorizado: Registrador General (Firma y Código de Barras Estampados) | Seguimiento / ID: 9130607642186" }
    ]
  }
};

const data = JSON.parse(fs.readFileSync('documents_data.json', 'utf8'));
const docIndex = data.findIndex(d => d.id === docId);

if (docIndex !== -1) {
  data[docIndex].translations = newTranslations;
  data[docIndex].imageUrl = "https://res.cloudinary.com/b7xbeztp/image/upload/v1790360755/image193.jpg";
  data[docIndex].category = 'official'; 
  fs.writeFileSync('documents_data.json', JSON.stringify(data, null, 2));
  console.log("Updated doc_193 successfully");
} else {
  console.log("Doc not found");
}
