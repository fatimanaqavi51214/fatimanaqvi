const fs = require('fs');
const path = require('path');
const file = path.join(__dirname, 'documents_data.json');
let data = JSON.parse(fs.readFileSync(file, 'utf8'));
data.forEach(d => {
  if (d.translations && d.translations.fa) d.translations.fa.name = '\u0641\u0627\u0631\u0633\u06CC'; // Farsi
  if (d.translations && d.translations.es) d.translations.es.name = 'Espa\u00F1ol'; // Espanol
  if (d.translations && d.translations.ur) d.translations.ur.name = '\u0627\u0631\u062F\u0648'; // Urdu
  if (d.translations && d.translations.ar) d.translations.ar.name = '\u0627\u0644\u0639\u0631\u0628\u064A\u0629'; // Arabic
});
fs.writeFileSync(file, JSON.stringify(data, null, 2), 'utf8');
console.log('Fixed names with unicode escapes');
