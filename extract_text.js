const fs = require('fs');
let html = fs.readFileSync('public/Documents 24sep.htm', 'utf8');
function decode(str) {
    return str.replace(/&#(\d+);/g, (m, d) => String.fromCharCode(d))
              .replace(/&#x([0-9a-f]+);/gi, (m, h) => String.fromCharCode(parseInt(h, 16)));
}
let text = html.replace(/<\/p>/gi, '\n')
               .replace(/<br[^>]*>/gi, '\n')
               .replace(/<[^>]+>/g, '');
text = decode(text).replace(/&nbsp;/g, ' ').replace(/&quot;/g, '\"');
fs.writeFileSync('public/extracted_preview.txt', text); // full text
console.log("Extracted Full Text!");
