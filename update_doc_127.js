const fs = require('fs');

const docId = 'doc_127';

const newTranslations = {
  "ur": {
    "name": "اردو",
    "dir": "rtl",
    "docName": "فروخت شدہ اپارٹمنٹ کا توثیقی نقشہ (آرکیٹیکچرل پلان)",
    "lines": [
      { "label": "نقشے کی تفصیل", "value": "یہ تصویر عمارت/فلیٹ کے آرکیٹیکچرل فلور پلان (نقشے) کی ہے جس پر جائیداد کی تفویض اور توثیق سے متعلق عربی میں ہاتھ سے نوٹس، دستخط اور گواہی درج ہے۔" },
      { "label": "اردو ترجمہ برائے تحریر", "value": "\"اس نقشے (کروکی پلان) کے مطابق جناب احمد الرامش کی جانب سے خریدار محترمہ نصرت فاطمہ (پاکستانی) کو فروخت کردہ اپارٹمنٹ/فلیٹ کی باقاعدہ توثیق و دستخط کیے گئے ہیں۔\"" },
      { "label": "بیچنے والے کے دستخط", "value": "أحمد الرامش (دستخط موجود ہیں)۔" },
      { "label": "خریدار کے دستخط", "value": "نصرت فاطمہ (دستخط موجود ہیں)۔" },
      { "label": "گواہ", "value": "مرتضیٰ الحسین (دستخط موجود ہیں)۔" },
      { "label": "نقشے کی حدود", "value": "بائیں جانب کا حصہ (ترچھی لکیروں سے نشان زدہ) فروخت شدہ حصے کی حدود کو واضح کرتا ہے۔ دائیں جانب سیڑھیاں، راہداری اور مرکزی داخلی راستے کی پیمائشیں واضح ہیں۔" }
    ]
  },
  "en": {
    "name": "English",
    "dir": "ltr",
    "docName": "Endorsement Map for Sold Apartment (Architectural Plan)",
    "lines": [
      { "label": "Map Details", "value": "This image is of the architectural floor plan of the building/flat, containing handwritten notes in Arabic regarding the assignment and endorsement of the property, along with signatures and witnessing." },
      { "label": "Translation of Text", "value": "\"The endorsement/signing has been executed for the apartment sold by Mr. Ahmad Al-Ramish to Mrs. Nusrat Fatima (Pakistani), in accordance with this architectural sketch/plan...\"" },
      { "label": "Seller's Signature", "value": "Ahmad Al-Ramish (Signature present)." },
      { "label": "Buyer's Signature", "value": "Nusrat Fatima (Signature present)." },
      { "label": "Witness", "value": "Mourtada Al-Hussein (Signature present)." },
      { "label": "Layout Notes", "value": "The hatched/cross-lined area on the left marks the sold unit/boundaries. The right side indicates common access, corridor, and the stairwell." }
    ]
  },
  "ar": {
    "name": "العربية",
    "dir": "rtl",
    "docName": "خريطة تصديق الشقة المباعة (المخطط المعماري)",
    "lines": [
      { "label": "تفاصيل الخريطة", "value": "هذه الصورة لمخطط الطابق المعماري للمبنى/الشقة، وتحتوي على ملاحظات مكتوبة بخط اليد باللغة العربية تتعلق بتخصيص وتصديق العقار، بالإضافة إلى التواقيع والشهادة." },
      { "label": "النص المكتوب", "value": "\"تم التوقيع على الشقة المباعة من السيد أحمد الرامش إلى السيدة نصرة فاطمة الباكستانية حسب المخطط الكروكي...\"" },
      { "label": "توقيع البائع", "value": "أحمد الرامش (التوقيع موجود)." },
      { "label": "توقيع المشتري", "value": "نصرت فاطمة (التوقيع موجود)." },
      { "label": "الشاهد", "value": "مرتضى الحسين (التوقيع موجود)." },
      { "label": "حدود المخطط", "value": "المنطقة المظللة/المخططة على اليسار تمثل الوحدة المباعة/الحدود. ويشير الجانب الأيمن إلى المدخل المشترك والممر وبئر السلم." }
    ]
  },
  "fa": {
    "name": "فارسی",
    "dir": "rtl",
    "docName": "نقشه تأییدیه آپارتمان فروخته شده (پلان معماری)",
    "lines": [
      { "label": "جزئیات نقشه", "value": "این تصویر از پلان معماری طبقه ساختمان/آپارتمان است که شامل یادداشت‌های دست‌نویس به زبان عربی در مورد واگذاری و تأیید ملک، به همراه امضاها و شهادت است." },
      { "label": "ترجمه متن", "value": "\"بر اساس این نقشه (کروکی)، آپارتمان فروخته شده توسط آقای احمد الرامش به خانم نصرت فاطمه (پاکستانی) به طور رسمی تأیید و امضا شده است.\"" },
      { "label": "امضای فروشنده", "value": "احمد الرامش (امضا موجود است)." },
      { "label": "امضای خریدار", "value": "نصرت فاطمه (امضا موجود است)." },
      { "label": "شاهد", "value": "مرتضی الحسین (امضا موجود است)." },
      { "label": "حدود نقشه", "value": "قسمت سایه‌خورده/خط‌کشی شده در سمت چپ، مرزها و واحد فروخته شده را مشخص می‌کند. سمت راست نشان‌دهنده دسترسی مشترک، راهرو و راه‌پله است." }
    ]
  },
  "es": {
    "name": "Español",
    "dir": "ltr",
    "docName": "Mapa de Endoso del Apartamento Vendido (Plano Arquitectónico)",
    "lines": [
      { "label": "Detalles del Mapa", "value": "Esta imagen es del plano arquitectónico del edificio/apartamento, que contiene notas manuscritas en árabe con respecto a la asignación y endoso de la propiedad, junto con firmas y testimonios." },
      { "label": "Traducción del Texto", "value": "\"El endoso/firma ha sido ejecutado para el apartamento vendido por el Sr. Ahmad Al-Ramish a la Sra. Nusrat Fatima (paquistaní), de acuerdo con este croquis/plano arquitectónico...\"" },
      { "label": "Firma del Vendedor", "value": "Ahmad Al-Ramish (Firma presente)." },
      { "label": "Firma del Comprador", "value": "Nusrat Fatima (Firma presente)." },
      { "label": "Testigo", "value": "Mourtada Al-Hussein (Firma presente)." },
      { "label": "Notas de Distribución", "value": "El área sombreada/con líneas cruzadas a la izquierda marca la unidad vendida/límites. El lado derecho indica el acceso común, el pasillo y el hueco de la escalera." }
    ]
  }
};

const data = JSON.parse(fs.readFileSync('documents_data.json', 'utf8'));
const docIndex = data.findIndex(d => d.id === docId);

if (docIndex !== -1) {
  data[docIndex].translations = newTranslations;
  data[docIndex].category = 'property'; 
  fs.writeFileSync('documents_data.json', JSON.stringify(data, null, 2));
  console.log("Updated doc_127 successfully");
} else {
  console.log("Doc not found");
}
