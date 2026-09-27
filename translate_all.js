const fs = require('fs');
const https = require('https');

async function translateText(text, targetLang) {
    if (!text || text.trim() === '') return '';
    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${targetLang}&dt=t&q=${encodeURIComponent(text)}`;
    return new Promise((resolve) => {
        https.get(url, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => {
                try {
                    const parsed = JSON.parse(data);
                    let translated = '';
                    if (parsed && parsed[0]) {
                        parsed[0].forEach(p => { if (p[0]) translated += p[0]; });
                    }
                    resolve(translated);
                } catch(e) { resolve(text); }
            });
        }).on('error', () => resolve(text));
    });
}

async function run() {
    console.log("Starting bulk translation...");
    const filePath = './documents_data.json';
    let data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

    const targetLangs = ['ar', 'fa', 'es'];

    for (let i = 0; i < data.length; i++) {
        let doc = data[i];
        if (!doc.translations || !doc.translations.en || !doc.translations.en.docName) continue;
        
        let srcName = doc.translations.ur?.docName || doc.translations.en.docName;
        
        for (let lang of targetLangs) {
            if (!doc.translations[lang]) doc.translations[lang] = { lines: [] };
            
            // Translate docName
            if (!doc.translations[lang].docName || doc.translations[lang].docName === srcName) {
                doc.translations[lang].docName = await translateText(srcName, lang);
            }
            
            // Translate lines
            if (doc.translations[lang].lines.length === 0 && doc.translations.en.lines.length > 0) {
                console.log(`Translating Doc ${doc.id} to ${lang}...`);
                let newLines = [];
                for (let line of doc.translations.en.lines) {
                    let translatedLabel = await translateText(line.label, lang);
                    let translatedValue = await translateText(line.value, lang);
                    newLines.push({ label: translatedLabel, value: translatedValue });
                }
                doc.translations[lang].lines = newLines;
                
                // set dir and name properly
                if(lang === 'ar') { doc.translations[lang].name = "العربية"; doc.translations[lang].dir = "rtl"; }
                if(lang === 'fa') { doc.translations[lang].name = "فارسی"; doc.translations[lang].dir = "rtl"; }
                if(lang === 'es') { doc.translations[lang].name = "Español"; doc.translations[lang].dir = "ltr"; }
            }
        }
        
        // Save progress every 10 docs
        if (i % 10 === 0) {
            fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
            console.log(`Saved progress at doc ${i}`);
        }
        
        // Small delay to avoid API rate limits
        await new Promise(r => setTimeout(r, 300));
    }
    
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    console.log("Bulk translation completed successfully!");
}

run();
