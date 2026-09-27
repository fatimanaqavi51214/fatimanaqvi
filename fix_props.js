const fs = require('fs');
const filePath = 'E:/2.maan-jee-website/components/DocumentViewer.js';
let content = fs.readFileSync(filePath, 'utf8');

content = content.replace('export default function DocumentViewer({ documentData, initialLang })', 'export default function DocumentViewer({ doc, initialLang })');
content = content.replace('if (!documentData) {', 'if (!doc) {');
content = content.replace('const { imageUrl, translations } = documentData;', 'const { imageUrl, translations } = doc;');

fs.writeFileSync(filePath, content);
console.log('Fixed props in DocumentViewer.js');
