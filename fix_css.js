const fs = require('fs');
let css = fs.readFileSync('app/globals.css', 'utf8');
css = css.replace('  direction: ltr;\n  unicode-bidi: isolate;', '');
fs.writeFileSync('app/globals.css', css);
