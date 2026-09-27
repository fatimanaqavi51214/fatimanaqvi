const fs = require('fs');

const docId = 'doc_131';

const newTranslations = {
  "ur": {
    "name": "اردو",
    "dir": "rtl",
    "docName": "معاہدۂ بیع قطعی (حتمی بیع نامہ)",
    "lines": [
      { "label": "فریق اول (فروخت کنندہ)", "value": "نصرت فاطمہ بنت سید محمد (پیدائش: کراچی 1958ء، رہائش: دمشق)۔" },
      { "label": "فریق دوم (خریدنے والا)", "value": "علی الصعاف (پیدائش: بصرہ 1952ء، رہائش: دمشق)۔" },
      { "label": "موضوع", "value": "ریئل اسٹیٹ پلاٹ نمبر 284 میں واقع زمین جس کا رقبہ 25 قصبہ (تقریباً 593.75 مربع میٹر) ہے، علاقہ قبر الست (سیدہ زینب)۔ حیثیت: ملکِ خالص (Freehold)۔" },
      { "label": "قیمتِ فروخت", "value": "پینتالیس لاکھ (4,500,000) شامی لیرا۔" },
      { "label": "ادائیگی", "value": "فریق دوم نے پوری رقم نقد ادا کر دی ہے اور تمام طے شدہ رقم مکمل طور پر بے باق ہو چکی ہے۔" },
      { "label": "شرائط و ضوابط", "value": "فریق اول جائیداد کو ہر قسم کے قانونی تنازعات سے پاک کر کے حوالے کرنے کا پابند ہے۔ قبضے سے پہلے کے ٹیکس فریق اول اور بعد کے فریق دوم پر ہوں گے۔" },
      { "label": "تاریخِ تحریر", "value": "28 فروری 2000ء (اسی دن زمین کا قبضہ بھی سونپ دیا گیا)۔" },
      { "label": "گواہان", "value": "مرتضیٰ الحسینی، نزار اسعد۔" }
    ]
  },
  "en": {
    "name": "English",
    "dir": "ltr",
    "docName": "Final Sale Contract",
    "lines": [
      { "label": "First Party (Seller)", "value": "Nusrat Fatima bint Syed Mohammad (Born: Karachi 1958, Residence: Damascus)." },
      { "label": "Second Party (Buyer)", "value": "Ali As-Saaf (Born: Al-Basrah 1952, Residence: Damascus)." },
      { "label": "Subject", "value": "Plot No. 284 measuring 25 square kasaba (approx. 593.75 sq.m.) located in Qabr Essit (Sayyidah Zaynab). Legal status: Freehold (Milq)." },
      { "label": "Sale Price", "value": "Four and a half million (4,500,000) Syrian Pounds." },
      { "label": "Payment", "value": "The Second Party has paid the entire amount in cash in full." },
      { "label": "Terms & Conditions", "value": "The First Party undertakes to deliver the property free from all legal disputes. Taxes prior to delivery are the responsibility of the First Party; thereafter, by the Second Party." },
      { "label": "Date of Execution", "value": "28 / 2 / 2000 (Handover completed on this date)." },
      { "label": "Witnesses", "value": "Mourtada Al-Hussein, Nizar As'ad." }
    ]
  },
  "ar": {
    "name": "العربية",
    "dir": "rtl",
    "docName": "عقد بيع قطعي",
    "lines": [
      { "label": "الفريق الأول (البائع)", "value": "نصرت فاطمة بنت سيد محمد (مواليد: كراتشي 1958، الإقامة: دمشق)." },
      { "label": "الفريق الثاني (المشتري)", "value": "علي الصعاف (مواليد: البصرة 1952، الإقامة: دمشق)." },
      { "label": "الموضوع", "value": "قطعة أرض في العقار رقم 284 مساحتها 25 قصبة مربعة (حوالي 593.75 متر مربع) بمنطقة قبر الست (السيدة زينب). الوضع القانوني: ملك خالص." },
      { "label": "ثمن المبيع", "value": "أربعة ملايين ونصف (4,500,000) ليرة سورية." },
      { "label": "الدفع", "value": "قام الفريق الثاني بدفع كامل المبلغ نقداً ولم يتبق أي رصيد." },
      { "label": "الشروط والأحكام", "value": "يلتزم الفريق الأول بتسليم العقار خالياً من أي نزاعات قانونية. الضرائب قبل التسليم على الفريق الأول، وبعدها على الفريق الثاني." },
      { "label": "تاريخ التحرير", "value": "28 / 2 / 2000 (تم تسليم الأرض في نفس التاريخ)." },
      { "label": "الشهود", "value": "مرتضى الحسين، نزار أسعد." }
    ]
  },
  "fa": {
    "name": "فارسی",
    "dir": "rtl",
    "docName": "قرارداد فروش قطعی (عقد بيع قطعي)",
    "lines": [
      { "label": "طرف اول (فروشنده)", "value": "نصرت فاطمه فرزند سید محمد (متولد: کراچی ۱۹۵۸، محل سکونت: دمشق)." },
      { "label": "طرف دوم (خریدار)", "value": "علی الصعاف (متولد: بصره ۱۹۵۲، محل سکونت: دمشق)." },
      { "label": "موضوع", "value": "قطعه زمین در پلاک ۲۸۴ به مساحت ۲۵ قصبه مربع (حدود ۵۹۳.۷۵ متر مربع) واقع در قبر الست (سیده زینب). وضعیت قانونی: ملک خالص (Freehold)." },
      { "label": "قیمت فروش", "value": "چهار و نیم میلیون (۴,۵۰۰,۰۰۰) لیره سوریه." },
      { "label": "پرداخت", "value": "طرف دوم کل مبلغ را به صورت نقدی پرداخت کرده و هیچ مبلغی باقی نمانده است." },
      { "label": "شرایط و ضوابط", "value": "طرف اول متعهد می‌شود ملک را عاری از هرگونه اختلاف قانونی تحویل دهد. مالیات‌های قبل از تحویل بر عهده طرف اول و پس از آن بر عهده طرف دوم است." },
      { "label": "تاریخ تنظیم", "value": "۲۸ / ۲ / ۲۰۰۰ (تحویل زمین در همین تاریخ انجام شد)." },
      { "label": "شهود", "value": "مرتضی الحسین، نزار اسعد." }
    ]
  },
  "es": {
    "name": "Español",
    "dir": "ltr",
    "docName": "Contrato de Venta Final",
    "lines": [
      { "label": "Primera Parte (Vendedor)", "value": "Nusrat Fatima bint Syed Mohammad (Nacida: Karachi 1958, Residencia: Damasco)." },
      { "label": "Segunda Parte (Comprador)", "value": "Ali As-Saaf (Nacido: Basora 1952, Residencia: Damasco)." },
      { "label": "Asunto", "value": "Parcela de tierra en el lote No. 284 de 25 kasaba cuadrados (aprox. 593.75 m2) ubicada en Qabr Essit (Sayyidah Zaynab). Estado legal: dominio absoluto (Milq)." },
      { "label": "Precio de Venta", "value": "Cuatro millones y medio (4,500,000) de Libras Sirias." },
      { "label": "Pago", "value": "La Segunda Parte ha pagado la cantidad total en efectivo en su totalidad." },
      { "label": "Términos y Condiciones", "value": "La Primera Parte se compromete a entregar la propiedad libre de disputas legales. Los impuestos antes de la entrega son responsabilidad de la Primera Parte; a partir de entonces, de la Segunda Parte." },
      { "label": "Fecha de Ejecución", "value": "28 / 2 / 2000 (Entrega completada en esta fecha)." },
      { "label": "Testigos", "value": "Mourtada Al-Hussein, Nizar As'ad." }
    ]
  }
};

const data = JSON.parse(fs.readFileSync('documents_data.json', 'utf8'));
const docIndex = data.findIndex(d => d.id === docId);

if (docIndex !== -1) {
  data[docIndex].translations = newTranslations;
  data[docIndex].category = 'property'; 
  fs.writeFileSync('documents_data.json', JSON.stringify(data, null, 2));
  console.log("Updated doc_131 successfully");
} else {
  console.log("Doc not found");
}
