const fs = require('fs');
const translate = require('google-translate-api-x');

async function processTranslations() {
  console.log('Reading documents_data.json...');
  let data = JSON.parse(fs.readFileSync('documents_data.json', 'utf8'));
  
  const langsToGenerate = ['ar', 'fa', 'es'];
  
  for (let i = 0; i < data.length; i++) {
    const doc = data[i];
    console.log(`Processing ${i + 1}/${data.length}: ${doc.id}`);
    
    // Format English text
    let enTextArray = [];
    if (doc.translations && doc.translations['en'] && doc.translations['en'].lines) {
      enTextArray = doc.translations['en'].lines.map(item => {
        const isShortLabel = item.label && item.label.length < 30;
        const text = item.label ? (isShortLabel ? `${item.label}: ${item.value}` : `${item.label} ${item.value}`) : item.value;
        return text;
      }).filter(t => !t.toLowerCase().includes('hidden') && !t.toLowerCase().includes('details:'));
    }
    
    // Format Urdu text
    let urTextArray = [];
    if (doc.translations && doc.translations['ur'] && doc.translations['ur'].lines) {
      urTextArray = doc.translations['ur'].lines.map(item => {
        const isShortLabel = item.label && item.label.length < 30;
        const text = item.label ? (isShortLabel ? `${item.label}: ${item.value}` : `${item.label} ${item.value}`) : item.value;
        return text;
      }).filter(t => !t.toLowerCase().includes('hidden') && !t.toLowerCase().includes('تفصیلات:'));
    }

    // Save formatted arrays back to remove the label/value structure permanently
    if (enTextArray.length > 0) {
      doc.translations['en'].lines = enTextArray.map(v => ({ value: v }));
    }
    if (urTextArray.length > 0) {
      doc.translations['ur'].lines = urTextArray.map(v => ({ value: v }));
    }

    // Translate to other languages based on English text
    if (enTextArray.length > 0) {
      for (const lang of langsToGenerate) {
        try {
          if (!doc.translations[lang]) {
            doc.translations[lang] = { name: '', dir: lang === 'es' ? 'ltr' : 'rtl', docName: '', lines: [] };
          }
          
          // Translate title
          if (doc.translations['en'].docName) {
            const titleRes = await translate(doc.translations['en'].docName, { to: lang });
            doc.translations[lang].docName = titleRes.text;
          }

          // Translate lines
          const translatedLines = [];
          for (const line of enTextArray) {
            const res = await translate(line, { to: lang });
            translatedLines.push({ value: res.text });
          }
          doc.translations[lang].lines = translatedLines;
          
        } catch (err) {
          console.error(`Error translating ${doc.id} to ${lang}:`, err.message);
        }
      }
    }
    
    // Save incrementally just in case
    if (i % 10 === 0) {
      fs.writeFileSync('documents_data.json', JSON.stringify(data, null, 2));
    }
    
    // Sleep a bit to avoid rate limits
    await new Promise(r => setTimeout(r, 1000));
  }

  fs.writeFileSync('documents_data.json', JSON.stringify(data, null, 2));
  console.log('Finished translating all documents!');
}

processTranslations().catch(console.error);
