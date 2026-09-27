const fs = require('fs');

const docId = 'doc_105';

const newTranslations = {
  "ur": {
    "name": "اردو",
    "dir": "rtl",
    "docName": "پاکستانی سفارت خانہ دمشق - ویزا کے حصول کے لیے خط (1997)",
    "lines": [
      { "label": "Details", "value": "سفارت خانہ پاکستان، دمشق، شام." },
      { "label": "حوالہ اور تاریخ", "value": "حوالہ نمبر: Con-12/97 | تاریخ: 16 مارچ 1997." },
      { "label": "بنام", "value": "ڈائریکٹر، محکمہ ہجرت و پاسپورٹ، دمشق." },
      { "label": "مضمون", "value": "پاکستانی شہری جناب غلام سرور شام میں مقیم اپنے اہلِ خانہ سے ملنے آنا چاہتے ہیں۔ ان کی فیملی میں ان کی اہلیہ محترمہ نصرت فاطمہ، ایک بیٹی اور ایک بیٹا شامل ہیں جن کے پاس آپ کے محکمے کی طرف سے جاری کردہ شامی رہائشی پرمٹ موجود ہیں۔ جناب غلام سرور کا پاسپورٹ نمبر AA 646457 ہے جو لاہور سے جاری ہوا۔ درخواست کی جاتی ہے کہ آپ ایئرپورٹ پر موجود امیگریشن حکام کو ہدایت جاری کریں کہ وہ جناب غلام سرور کی ایئرپورٹ آمد پر انہیں انٹری ویزا جاری کریں۔" },
      { "label": "دستخط", "value": "شجاعت علی راٹھور، تھرڈ سیکرٹری." },
      { "label": "ہاتھ سے لکھا گیا اردو نوٹ", "value": "\"بیگم سے ملنے آنا چاہتے ہیں، اجازت نامہ ویزا کے لئے لکھا ہے پاکستانی سفارت خانے نے\"." }
    ]
  },
  "en": {
    "name": "English",
    "dir": "ltr",
    "docName": "Embassy of Pakistan in Damascus - Visa Request Letter (1997)",
    "lines": [
      { "label": "Details", "value": "Embassy of Pakistan, Damascus, Syria." },
      { "label": "Reference & Date", "value": "Reference: Con-12/97 | Date: March 16, 1997." },
      { "label": "To", "value": "Director, Department of Immigration and Passport, Damascus." },
      { "label": "Content", "value": "Mr. Ghulam Sarwar, a Pakistani national, intends to visit Syria to join his family members residing in Syria. His family consists of his wife, Mrs. Nusrat Fatima, a daughter, and a son, who hold Syrian residence permits issued by your Department (photocopies attached). Mr. Ghulam Sarwar's passport No. is AA 646457, issued at Lahore. It is requested that you authorize the Immigration Authorities at the Airport to issue an entry visa to Mr. Ghulam Sarwar upon arrival." },
      { "label": "Signature", "value": "Shujjat Ali Rathore, Third Secretary." },
      { "label": "Handwritten Urdu Note", "value": "\"Wants to come meet his wife, the permission letter for the visa was written by the Pakistani Embassy.\"" }
    ]
  },
  "ar": {
    "name": "العربية",
    "dir": "rtl",
    "docName": "سفارة باكستان بدمشق - رسالة طلب تأشيرة (1997)",
    "lines": [
      { "label": "تفاصيل", "value": "سفارة باكستان، دمشق، سوريا." },
      { "label": "الرقم والمرجع", "value": "المرجع: Con-12/97 | التاريخ: 16 مارس 1997." },
      { "label": "إلى", "value": "السيد مدير إدارة الهجرة والجوازات، دمشق." },
      { "label": "المضمون", "value": "ينوي السيد غلام سرور، مواطن باكستاني، زيارة سوريا للانضمام إلى أفراد أسرته المقيمين فيها. وتتكون أسرته من زوجته السيدة نصرت فاطمة وابنة وابن، وهم يحملون تصاريح إقامة سورية صادرة عن إدارتكم (مرفق نسخ ضوئية). رقم جواز سفر السيد غلام سرور هو AA 646457 الصادر من لاهور. يُرجى التكرم بتفويض سلطات الهجرة في المطار لإصدار تأشيرة دخول للسيد غلام سرور عند وصوله." },
      { "label": "التوقيع", "value": "شجاعت علي راثور، السكرتير الثالث." },
      { "label": "ملاحظة أوردية بخط اليد", "value": "\"يريد المجيء لمقابلة زوجته، وقد كتبت السفارة الباكستانية رسالة إذن التأشيرة.\"" }
    ]
  },
  "fa": {
    "name": "فارسی",
    "dir": "rtl",
    "docName": "سفارت پاکستان در دمشق - نامه درخواست ویزا (۱۹۹۷)",
    "lines": [
      { "label": "جزئیات", "value": "سفارت پاکستان، دمشق، سوریه." },
      { "label": "مرجع و تاریخ", "value": "مرجع: Con-12/97 | تاریخ: ۱۶ مارس ۱۹۹۷." },
      { "label": "به", "value": "مدیر اداره مهاجرت و گذرنامه، دمشق." },
      { "label": "مضمون", "value": "آقای غلام سرور، تبعه پاکستان، قصد دارد برای پیوستن به اعضای خانواده خود که در سوریه اقامت دارند به سوریه سفر کند. خانواده وی شامل همسرش، خانم نصرت فاطمه، یک دختر و یک پسر است که دارای مجوز اقامت سوریه صادره از اداره شما هستند (کپی‌ها پیوست شده است). شماره گذرنامه آقای غلام سرور AA 646457 صادره از لاهور می‌باشد. درخواست می‌شود به مقامات مهاجرت در فرودگاه اجازه دهید تا در زمان ورود، ویزای ورود برای آقای غلام سرور صادر کنند." },
      { "label": "امضا", "value": "شجاعت علی راثور، دبیر سوم." },
      { "label": "یادداشت دست‌نویس اردو", "value": "\"می‌خواهد بیاید همسرش را ببیند، نامه اجازه ویزا توسط سفارت پاکستان نوشته شده است.\"" }
    ]
  },
  "es": {
    "name": "Español",
    "dir": "ltr",
    "docName": "Embajada de Pakistán en Damasco - Carta de Solicitud de Visa (1997)",
    "lines": [
      { "label": "Detalles", "value": "Embajada de Pakistán, Damasco, Siria." },
      { "label": "Referencia y Fecha", "value": "Referencia: Con-12/97 | Fecha: 16 de marzo de 1997." },
      { "label": "Para", "value": "Director, Departamento de Inmigración y Pasaportes, Damasco." },
      { "label": "Contenido", "value": "El Sr. Ghulam Sarwar, ciudadano paquistaní, tiene la intención de visitar Siria para reunirse con los miembros de su familia que residen en Siria. Su familia está compuesta por su esposa, la Sra. Nusrat Fatima, una hija y un hijo, quienes tienen permisos de residencia sirios emitidos por su Departamento (fotocopias adjuntas). El número de pasaporte del Sr. Ghulam Sarwar es AA 646457, emitido en Lahore. Se solicita que autorice a las Autoridades de Inmigración en el Aeropuerto a emitir una visa de entrada al Sr. Ghulam Sarwar a su llegada." },
      { "label": "Firma", "value": "Shujjat Ali Rathore, Tercer Secretario." },
      { "label": "Nota Manuscrita en Urdu", "value": "\"Quiere venir a conocer a su esposa, la carta de permiso para la visa fue escrita por la Embajada de Pakistán.\"" }
    ]
  }
};

const data = JSON.parse(fs.readFileSync('documents_data.json', 'utf8'));
const docIndex = data.findIndex(d => d.id === docId);

if (docIndex !== -1) {
  data[docIndex].translations = newTranslations;
  data[docIndex].category = 'embassy'; 
  fs.writeFileSync('documents_data.json', JSON.stringify(data, null, 2));
  console.log("Updated doc_105 successfully");
} else {
  console.log("Doc not found");
}
