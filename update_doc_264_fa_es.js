const fs = require('fs');
const file = 'E:/2.maan-jee-website/documents_data.json';
const data = JSON.parse(fs.readFileSync(file, 'utf8'));
const docIndex = data.findIndex(d => d.id === 'doc_264');

if (docIndex !== -1) {
  if (!data[docIndex].translations.fa) {
    data[docIndex].translations.fa = {
      name: "فارسی",
      dir: "rtl",
      docName: "توصیه‌نامه از مرکز فقهی ائمه اطهار (ع)",
      lines: [
        { label: "جزئیات", value: "جزئیات سربرگ:" },
        { label: "سازمان", value: "مرکز فقهی ائمه اطهار (ع)، تحت اشراف مرجع عالیقدر حضرت آیت الله العظمی فاضل لنکرانی" },
        { label: "تاریخ", value: "24/05/2025" },
        { label: "شماره", value: "443" },
        { label: "عنوان", value: "بسمه تعالی" },
        { label: "مخاطب", value: "به مقامات محترم مربوطه" },
        { label: "محتوا", value: "\"بدین‌وسیله به اطلاع می‌رساند که اینجانب، حجت‌الاسلام دکتر سید طاهر شاه، با تابعیت پاکستانی، مدیر دفتر مرجع عالیقدر شیعه حضرت آیت‌الله العظمی شیخ محمد فاضل لنکرانی (قدس سره)، اقرار و تأیید می‌نمایم که خواهر محترمه خانم نصرت فاطمه نقوی از سال 1980 به عنوان رئیس و مسئول یک سازمان خیریه بشردوستانه در سراسر جهان و به طور خاص در سوریه فعالیت داشته‌اند. ایشان طی سال‌های گذشته از هیچ تلاشی برای ارائه خدمات مادی و معنوی دریغ نکرده‌اند. علاوه بر این، فرزندان ایشان - آقایان محترم جواد حیدر و فؤاد حیدر و خانم محترمه هاجر خاتون - در منطقه سیده زینب (س) حضور دارند و ما به طور کامل از ایشان در این زمینه حمایت و ایشان را تأیید می‌کنیم. سلامت و موفق باشید.\"" },
        { label: "امضاکننده", value: "با احترام، سید طاهر شاه الموسوی" },
        { label: "تاریخ امضا", value: "(امضا و تاریخ: 22 ذی‌الحجه 1447 هـ.ق)" }
      ]
    };
  }
  
  if (!data[docIndex].translations.es) {
    data[docIndex].translations.es = {
      name: "Español",
      dir: "ltr",
      docName: "Carta de Recomendación del Markaz Fiqhi Aimmah Athar",
      lines: [
        { label: "Detalles", value: "Detalles del Membrete:" },
        { label: "Organización", value: "Markaz Fiqhi Aimmah Athar (A.S.), Fundado por el Gran Ayatolá Fazel Lankarani" },
        { label: "Fecha", value: "24/05/2025" },
        { label: "Número", value: "443" },
        { label: "Título", value: "En el Nombre del Todopoderoso" },
        { label: "Destinatario", value: "A quien corresponda" },
        { label: "Contenido", value: "\"Por la presente informamos que yo, Hujjat al-Islam Dr. Sayed Taher Shah, de nacionalidad pakistaní, Director de la Oficina de la Gran Autoridad Religiosa, Su Eminencia el Gran Ayatolá Sheik Mohammad Fazel Lankarani (que su alma sea santificada), declaro y reconozco que desde 1980, la hermana Sra. Nusrat Fatima Naqvi se ha desempeñado como directora y funcionaria a cargo de una organización caritativa humanitaria a nivel mundial, y específicamente en Siria. Durante los últimos años, no ha escatimado esfuerzos en brindar servicios tanto materiales como morales. Además, apoyamos y respaldamos plenamente en este sentido a sus hijos, los respetados Jawad Haider, Fouad Haider y la Sra. Hajir Khatoon, en el área de Sayyidah Zaynab (A.S.). Que se mantengan seguros y bien.\"" },
        { label: "Firmante", value: "Atentamente, Sayed Taher Shah Al-Mousawi" },
        { label: "Fecha de Firma", value: "(Firma y Fecha: 22 Dhu al-Hijjah 1447 AH)" }
      ]
    };
  }

  fs.writeFileSync(file, JSON.stringify(data, null, 2));
  console.log('Successfully updated doc_264 with Persian and Spanish translations.');
} else {
  console.log('Error: doc_264 not found');
}
