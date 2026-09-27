const fs = require("fs");
const path = require("path");

const delay = ms => new Promise(res => setTimeout(res, ms));

async function translateText(text, targetLang, sourceLang = "auto") {
  if (!text) return "";
  const url = "https://translate.googleapis.com/translate_a/single?client=gtx&sl=" + sourceLang + "&tl=" + targetLang + "&dt=t&q=" + encodeURIComponent(text);
  
  for(let i=0; i<3; i++) {
    try {
      const res = await fetch(url);
      const data = await res.json();
      let translated = "";
      if(data && data[0]) {
         data[0].forEach(part => { if(part[0]) translated += part[0]; });
      }
      return translated;
    } catch (e) {
      console.error("Translation error, retrying...", e);
      await delay(1000);
    }
  }
  return text; 
}

async function fixDocuments() {
  const filePath = path.join(__dirname, "documents_data.json");
  let data = JSON.parse(fs.readFileSync(filePath, "utf8"));

  const requiredLangs = {
    ur: { name: "????", dir: "rtl" },
    en: { name: "English", dir: "ltr" },
    ar: { name: "???????", dir: "rtl" },
    fa: { name: "?????", dir: "rtl" },
    es: { name: "Español", dir: "ltr" }
  };

  let count = 0;
  for (let doc of data) {
    if(!doc.translations) doc.translations = {};
    
    const langsPresent = Object.keys(doc.translations);
    
    let srcLang = "en";
    if (!doc.translations["en"] && doc.translations["ur"]) srcLang = "ur";
    else if (!doc.translations["en"] && !doc.translations["ur"] && langsPresent.length > 0) srcLang = langsPresent[0];
    
    const srcTrans = doc.translations[srcLang];
    if (!srcTrans || !srcTrans.lines || srcTrans.lines.length === 0) continue; 

    for (let targetCode of Object.keys(requiredLangs)) {
      if (!doc.translations[targetCode] || !doc.translations[targetCode].lines || doc.translations[targetCode].lines.length === 0 || doc.translations[targetCode].lines.length < srcTrans.lines.length) {
        console.log("Translating doc " + doc.id + " to " + targetCode + "...");
        
        let newLines = [];
        let docNameTranslated = doc.translations[targetCode] && doc.translations[targetCode].docName ? doc.translations[targetCode].docName : await translateText(srcTrans.docName, targetCode, srcLang);
        
        for (let line of srcTrans.lines) {
           let labelTrans = line.label ? await translateText(line.label, targetCode, srcLang) : "";
           let valueTrans = line.value ? await translateText(line.value, targetCode, srcLang) : "";
           newLines.push({ label: labelTrans, value: valueTrans });
           await delay(300); 
        }
        
        doc.translations[targetCode] = {
          name: requiredLangs[targetCode].name,
          dir: requiredLangs[targetCode].dir,
          docName: docNameTranslated,
          lines: newLines
        };
        count++;
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
      }
    }
  }
  
  console.log("Finished updating " + count + " language blocks.");
}

fixDocuments().catch(console.error);
