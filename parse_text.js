const fs = require('fs');
const path = require('path');

const previewFile = path.join(__dirname, 'public', 'extracted_preview.txt');
const jsonFile = path.join(__dirname, 'documents_data.json');

const text = fs.readFileSync(previewFile, 'utf8');
const data = JSON.parse(fs.readFileSync(jsonFile, 'utf8'));

const blocks = text.split(/(?=Image \d+)/i);
let updatedCount = 0;

for (const block of blocks) {
  const match = block.match(/Image (\d+)/i);
  if (match) {
    let imgNum = match[1];
    let docId = 'doc_' + imgNum.padStart(3, '0');
    let doc = data.find(d => d.id === docId);
    if (doc && doc.translations) {
      let content = block.replace(/Image \d+[^:]*:/i, '').trim();
      content = content.replace(/v\\:\*[\s\S]*?}/g, '').replace(/o\\:\*[\s\S]*?}/g, '').replace(/w\\:\*[\s\S]*?}/g, '').replace(/\.shape[\s\S]*?}/g, '');
      content = content.replace(/<[^>]+>/g, '').replace(/\n{3,}/g, '\n\n').trim();
      
      if (content.length > 50) {
        ['ur', 'en'].forEach(lang => {
          if (doc.translations[lang] && doc.translations[lang].lines) {
            let hasBody = doc.translations[lang].lines.some(l => l.value && l.value.length > 150 && !l.value.includes('...'));
            if (!hasBody) {
               doc.translations[lang].lines = doc.translations[lang].lines.filter(l => !(l.value && l.value.includes('...')));
               doc.translations[lang].lines.push({ label: "متن / Content", value: content });
               updatedCount++;
            }
          }
        });
      }
    }
  }
}
fs.writeFileSync(jsonFile, JSON.stringify(data, null, 2), 'utf8');
console.log('Updated ' + updatedCount + ' documents with full text.');
