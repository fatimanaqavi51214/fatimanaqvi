const fs = require('fs');
let footer = fs.readFileSync('components/Footer.js', 'utf8');

footer = footer.replace(/const shareLabel = [\s\S]*?;/, `const shareLabels = {
    ur: 'یہ صفحہ شیئر کریں:',
    en: 'Share this page:',
    fa: 'این صفحه را به اشتراک بگذارید:',
    ar: 'شارك هذه الصفحة:',
    es: 'Compartir esta página:'
  };
  const shareLabel = shareLabels[lang] || shareLabels['en'];`);

fs.writeFileSync('components/Footer.js', footer);
console.log('Updated Footer with multilingual share labels.');
