const fs = require('fs');

const docId = 'doc_103';

const newTranslations = {
  "ur": {
    "name": "اردو",
    "dir": "rtl",
    "docName": "محافظِ ردیف دمشق (گورنر) کے نام شکایت/درخواست",
    "lines": [
      { "label": "بنام", "value": "جناب گورنر دمشق دیہی (محافظِ ريف دمشق المحترم)." },
      { "label": "جانب سے", "value": "محترمہ نصرت فاطمہ، پاکستانی شہری." },
      { "label": "مضمون", "value": "میری سیدہ زینب کے علاقے میں جائیدادیں نمبر 282 اور 284 ہیں۔ ہم نے زمین کو ہموار کر کے اس کی چار دیواری کروائی جس پر میں نے تقریباً 2 لاکھ 50 ہزار شامی پاؤنڈ خرچ کیے۔ لیکن کچھ ہی عرصے بعد میں نے دیکھا کہ وہ جائیداد مٹی اور ملبے سے بھر دی گئی ہے۔ ہم آپ سے گزارش کرتے ہیں کہ متعلقہ حکام کو اس مٹی اور ملبے کو جلد از جلد ہٹانے کے احکامات جاری کریں۔ آپ کا شکریہ." },
      { "label": "Details", "value": "(نصرت فاطمہ کے دستخط اور ملبہ ہٹانے کے لیے بلدیہ کو ریفر کرنے کی مہروں کے ساتھ)." }
    ]
  },
  "en": {
    "name": "English",
    "dir": "ltr",
    "docName": "Complaint/Request to the Governor of Damascus Countryside",
    "lines": [
      { "label": "To", "value": "H.E. The Respected Governor of Damascus Countryside." },
      { "label": "Submitted by", "value": "Mrs. Nusrat Fatima, Pakistani national." },
      { "label": "Subject/Content", "value": "I own properties no. 282 and 284 in the Sayyida Zainab area. We reclaimed the property and built a boundary wall/fence, for which I paid approximately 250,000 Syrian Pounds. However, after a short period, I found the property filled with dirt and rubble. We kindly request your Excellency to instruct the concerned authorities to expedite the removal of this dirt/rubble. Thank you." },
      { "label": "Details", "value": "(Signed by Nusrat Fatima, with referral notes to the municipality for removing the debris)." }
    ]
  },
  "ar": {
    "name": "العربية",
    "dir": "rtl",
    "docName": "شكوى/طلب إلى محافظ ريف دمشق",
    "lines": [
      { "label": "إلى", "value": "السيد محافظ ريف دمشق المحترم." },
      { "label": "مقدم من", "value": "السيدة نصرت فاطمة، مواطنة باكستانية." },
      { "label": "الموضوع/المضمون", "value": "أملك العقارين رقم 282 و 284 في منطقة السيدة زينب. قمنا بتسوية الأرض وبناء سور، وقد دفعت حوالي 250 ألف ليرة سورية. ولكن بعد فترة وجيزة، وجدت أن العقار قد مُلئ بالتراب والأنقاض. نرجو من سيادتكم الإيعاز للجهات المختصة بالإسراع في إزالة هذا التراب والأنقاض. ولكم الشكر." },
      { "label": "تفاصيل", "value": "(توقيع نصرت فاطمة، مع حواشي الإحالة للبلدية لإزالة الأنقاض)." }
    ]
  },
  "fa": {
    "name": "فارسی",
    "dir": "rtl",
    "docName": "شکایت/درخواست به استاندار حومه دمشق",
    "lines": [
      { "label": "به", "value": "جناب استاندار محترم حومه دمشق." },
      { "label": "از طرف", "value": "خانم نصرت فاطمه، شهروند پاکستانی." },
      { "label": "موضوع/مضمون", "value": "من مالک املاک شماره ۲۸۲ و ۲۸۴ در منطقه سیده زینب هستم. ما زمین را تسطیح کرده و دیوار/حصار کشیدیم که برای آن حدود ۲۵۰,۰۰۰ لیره سوریه پرداخت کردم. اما پس از مدت کوتاهی، متوجه شدم که ملک پر از خاک و آوار شده است. ما از محضر عالی درخواست می‌کنیم به مقامات مربوطه دستور دهید در برداشتن این خاک/آوار تسریع کنند. با تشکر." },
      { "label": "جزئیات", "value": "(با امضای نصرت فاطمه، همراه با مهرهای ارجاع به شهرداری برای برداشتن آوار)." }
    ]
  },
  "es": {
    "name": "Español",
    "dir": "ltr",
    "docName": "Queja/Solicitud al Gobernador de Damasco Rural",
    "lines": [
      { "label": "Para", "value": "S.E. El Respetado Gobernador de Damasco Rural." },
      { "label": "Presentado por", "value": "Sra. Nusrat Fatima, nacional paquistaní." },
      { "label": "Asunto/Contenido", "value": "Soy propietaria de los inmuebles no. 282 y 284 en el área de Sayyida Zainab. Nivelamos la propiedad y construimos un muro perimetral/valla, por lo que pagué aproximadamente 250,000 Libras Sirias. Sin embargo, después de un corto período, encontré la propiedad llena de tierra y escombros. Solicitamos amablemente a Su Excelencia que instruya a las autoridades competentes para acelerar la remoción de esta tierra/escombros. Gracias." },
      { "label": "Detalles", "value": "(Firmado por Nusrat Fatima, con notas de remisión a la municipalidad para retirar los escombros)." }
    ]
  }
};

const data = JSON.parse(fs.readFileSync('documents_data.json', 'utf8'));
const docIndex = data.findIndex(d => d.id === docId);

if (docIndex !== -1) {
  data[docIndex].translations = newTranslations;
  data[docIndex].category = 'property'; 
  fs.writeFileSync('documents_data.json', JSON.stringify(data, null, 2));
  console.log("Updated doc_103 successfully");
} else {
  console.log("Doc not found");
}
