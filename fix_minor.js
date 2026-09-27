const fs = require('fs');
const path = require('path');
const file = path.join(__dirname, 'documents_data.json');
let data = JSON.parse(fs.readFileSync(file, 'utf8'));

let doc030 = data.find(d => d.id === 'doc_030');
if(doc030) doc030.imageUrl = 'https://res.cloudinary.com/b7xbeztp/image/upload/image030.jpg';

data.forEach(d => {
  if (d.translations) {
    Object.keys(d.translations).forEach(k => {
      if (d.translations[k].docName) {
        d.translations[k].docName = d.translations[k].docName.replace(/\s*\(?انگریزی ترجمہ\)?\s*/gi, '').replace(/\s*\(?اردو ترجمہ\)?\s*/gi, '').replace(/انگریزی ترجمہ/g, '').replace(/اردو ترجمہ/g, '').trim();
      }
    });
  }
});
fs.writeFileSync(file, JSON.stringify(data, null, 2), 'utf8');
