const fs = require('fs');

['ur', 'fa', 'ar', 'en', 'es'].forEach(lang => {
  let p = 'app/' + lang + '/contact/page.js';
  if (fs.existsSync(p)) {
    let c = fs.readFileSync(p, 'utf8');
    c = c.replace(/<span>\{c\.value\}<\/span>/g, '<span dir="ltr" style={{ display: "inline-block", unicodeBidi: "embed" }}>{c.value}</span>');
    fs.writeFileSync(p, c);
    console.log('Fixed', p);
  }
});
