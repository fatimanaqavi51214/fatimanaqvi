const fs = require('fs');

const docId = 'doc_076';

const newTranslations = {
  "ur": {
    "name": "اردو",
    "dir": "rtl",
    "docName": "کمرشل بینک آف شام کا بینک بیلنس سرٹیفکیٹ (2010)",
    "lines": [
      { "label": "بینک", "value": "المصرف التجاري السوري (کمرشل بینک آف شام) - برانچ 13، دمشق." },
      { "label": "تاریخ", "value": "4 جولائی 2010." },
      { "label": "بنام", "value": "محترمہ نصرت فاطمہ نقوی دختر سید محمد نقوی." },
      { "label": "موضوع", "value": "اکاؤنٹ بیلنس کا بیان." },
      { "label": "شامی پاؤنڈز اکاؤنٹ", "value": "(مورخہ 22 جولائی 1996 سے): بیلنس 161,496.00 شامی پاؤنڈ." },
      { "label": "یورو اکاؤنٹ", "value": "(مورخہ 8 نومبر 2007 سے): بیلنس 100.00 یورو." },
      { "label": "امریکی ڈالر اکاؤنٹ", "value": "(مورخہ 28 مارچ 2006 سے): بیلنس 7,202.00 امریکی ڈالر." },
      { "label": "Details", "value": "یہ دستاویز آپ کی درخواست پر مراکش کے سفارت خانے میں جمع کرانے کے لیے جاری کی گئی ہے، جس کی بینک کی طرف سے کوئی اضافی ذمہ داری نہیں ہوگی۔" }
    ]
  },
  "en": {
    "name": "English",
    "dir": "ltr",
    "docName": "Commercial Bank of Syria - Bank Balance Certificate (2010)",
    "lines": [
      { "label": "Bank", "value": "Commercial Bank of Syria - Branch No. 13, Damascus." },
      { "label": "Date", "value": "4 / 7 / 2010." },
      { "label": "To", "value": "Mrs. Nusrat Fatima Naqvi, daughter of Syed Muhammad Naqvi." },
      { "label": "Subject", "value": "Account Balance Statement." },
      { "label": "Syrian Pound Account", "value": "(opened on 22/07/1996 under no. 030-668485): Balance is 161,496.00 Syrian Pounds." },
      { "label": "Foreign Currency Account (Euro)", "value": "(opened on 08/11/2007 under no. 001-541033): Balance is 100.00 Euros." },
      { "label": "Foreign Currency Account (US Dollar)", "value": "(opened on 28/03/2006 under no. 033-541033): Balance is 7,202.00 US Dollars." },
      { "label": "Details", "value": "This document was issued upon your request to be submitted to the Moroccan Embassy without any responsibility on our part." }
    ]
  },
  "ar": {
    "name": "العربية",
    "dir": "rtl",
    "docName": "المصرف التجاري السوري - شهادة رصيد مصرفي (2010)",
    "lines": [
      { "label": "المصرف", "value": "المصرف التجاري السوري - الفرع رقم 13، دمشق." },
      { "label": "التاريخ", "value": "4 / 7 / 2010." },
      { "label": "إلى", "value": "السيدة نصرت فاطمة نقوي ابنة سيد محمد نقوي." },
      { "label": "الموضوع", "value": "بيان رصيد حساب." },
      { "label": "حساب الليرة السورية", "value": "(مفتوح في 22/07/1996 برقم 030-668485): الرصيد 161,496.00 ليرة سورية." },
      { "label": "حساب العملات الأجنبية (يورو)", "value": "(مفتوح في 08/11/2007 برقم 001-541033): الرصيد 100.00 يورو." },
      { "label": "حساب العملات الأجنبية (دولار أمريكي)", "value": "(مفتوح في 28/03/2006 برقم 033-541033): الرصيد 7,202.00 دولار أمريكي." },
      { "label": "تفاصيل", "value": "صدرت هذه الوثيقة بناءً على طلبكم لتقديمها إلى السفارة المغربية دون أدنى مسؤولية من قبل المصرف." }
    ]
  },
  "fa": {
    "name": "فارسی",
    "dir": "rtl",
    "docName": "بانک تجاری سوریه - گواهی موجودی بانکی (۲۰۱۰)",
    "lines": [
      { "label": "بانک", "value": "بانک تجاری سوریه - شعبه ۱۳، دمشق." },
      { "label": "تاریخ", "value": "۴ / ۷ / ۲۰۱۰." },
      { "label": "به", "value": "خانم نصرت فاطمه نقوی، فرزند سید محمد نقوی." },
      { "label": "موضوع", "value": "صورت‌حساب موجودی." },
      { "label": "حساب لیره سوریه", "value": "(افتتاح شده در ۲۲/۰۷/۱۹۹۶ با شماره ۰۳۰-۶۶۸۴۸۵): موجودی ۱۶۱,۴۹۶.۰۰ لیره سوریه." },
      { "label": "حساب ارز خارجی (یورو)", "value": "(افتتاح شده در ۰۸/۱۱/۲۰۰۷ با شماره ۰۰۱-۵۴۱۰۳۳): موجودی ۱۰۰.۰۰ یورو." },
      { "label": "حساب ارز خارجی (دلار آمریکا)", "value": "(افتتاح شده در ۲۸/۰۳/۲۰۰۶ با شماره ۰۳۳-۵۴۱۰۳۳): موجودی ۷,۲۰۲.۰۰ دلار آمریکا." },
      { "label": "جزئیات", "value": "این سند بنا به درخواست شما برای ارائه به سفارت مراکش بدون هیچ‌گونه مسئولیتی از جانب ما صادر شده است." }
    ]
  },
  "es": {
    "name": "Español",
    "dir": "ltr",
    "docName": "Banco Comercial de Siria - Certificado de Saldo Bancario (2010)",
    "lines": [
      { "label": "Banco", "value": "Banco Comercial de Siria - Sucursal No. 13, Damasco." },
      { "label": "Fecha", "value": "4 / 7 / 2010." },
      { "label": "Para", "value": "Sra. Nusrat Fatima Naqvi, hija de Syed Muhammad Naqvi." },
      { "label": "Asunto", "value": "Estado de Saldo de Cuenta." },
      { "label": "Cuenta en Libras Sirias", "value": "(abierta el 22/07/1996 con el no. 030-668485): El saldo es de 161,496.00 Libras Sirias." },
      { "label": "Cuenta en Moneda Extranjera (Euro)", "value": "(abierta el 08/11/2007 con el no. 001-541033): El saldo es de 100.00 Euros." },
      { "label": "Cuenta en Moneda Extranjera (Dólar EE.UU.)", "value": "(abierta el 28/03/2006 con el no. 033-541033): El saldo es de 7,202.00 Dólares Estadounidenses." },
      { "label": "Detalles", "value": "Este documento fue emitido a su solicitud para ser presentado a la Embajada de Marruecos sin ninguna responsabilidad por nuestra parte." }
    ]
  }
};

const data = JSON.parse(fs.readFileSync('documents_data.json', 'utf8'));
const docIndex = data.findIndex(d => d.id === docId);

if (docIndex !== -1) {
  data[docIndex].translations = newTranslations;
  data[docIndex].category = 'personal'; 
  fs.writeFileSync('documents_data.json', JSON.stringify(data, null, 2));
  console.log("Updated doc_076 successfully");
} else {
  console.log("Doc not found");
}
