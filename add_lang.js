const fs = require('fs');
const langs = ['ur', 'en', 'ar', 'fa', 'es'];
langs.forEach(lang => {
  const path = `app/${lang}/layout.js`;
  if (fs.existsSync(path)) {
    let content = fs.readFileSync(path, 'utf8');
    content = content.replace(/<Footer t=\{t\} \/>/, `<Footer t={t} lang="${lang}" />`);
    fs.writeFileSync(path, content);
  }
});
console.log('Added lang prop to Footer in layouts');
