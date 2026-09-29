const fs = require('fs');
let txt = fs.readFileSync('app/ur/vault/VaultClient.js', 'utf8');

txt = txt.replace('FaSignOutAlt } from \'react-icons/fa\';', 'FaSignOutAlt, FaEnvelope } from \'react-icons/fa\';');

// Find the categories array and insert the new object
const categoriesMatch = txt.match(/const categories = \[([\s\S]*?)\];/);
if (categoriesMatch) {
  let catStr = categoriesMatch[1];
  catStr += `, { slug: 'letters', icon: FaEnvelope, color: '#f43f5e', ur: 'شخصیات کے لیٹر', en: 'Letters from Personalities' }`;
  txt = txt.replace(categoriesMatch[0], `const categories = [${catStr}];`);
}

fs.writeFileSync('app/ur/vault/VaultClient.js', txt, 'utf8');
console.log('Done');
