const fs = require('fs');
const path = require('path');
async function translateText(text, targetLang, sourceLang = 'auto') {
  if (!text) return '';
  const url = 'https://translate.googleapis.com/translate_a/single?client=gtx&sl=' + sourceLang + '&tl=' + targetLang + '&dt=t&q=' + encodeURIComponent(text);
  const res = await fetch(url);
  const data = await res.json();
  let translated = '';
  if(data && data[0]) data[0].forEach(p => { if(p[0]) translated += p[0]; });
  return translated;
}
async function fix209() {
  const filePath = path.join(__dirname, 'documents_data.json');
  let data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  const doc = data.find(d => d.id === 'doc_209');
  if(!doc) return;
  const targetLangs = { fa: { name: '?????', dir: 'rtl' }, es: { name: 'Español', dir: 'ltr' } };
  const src = doc.translations['en'] || doc.translations['ur'];
  const srcLang = doc.translations['en'] ? 'en' : 'ur';
  
  for(let target of Object.keys(targetLangs)) {
    if(!doc.translations[target] || Object.keys(doc.translations[target]).length === 0) {
      let lines = [];
      let docName = await translateText(src.docName, target, srcLang);
      for(let l of src.lines) {
         lines.push({
           label: await translateText(l.label, target, srcLang),
           value: await translateText(l.value, target, srcLang)
         });
      }
      doc.translations[target] = { name: targetLangs[target].name, dir: targetLangs[target].dir, docName, lines };
    }
  }
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  console.log('Fixed 209');
}
fix209();
