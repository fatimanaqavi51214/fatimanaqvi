const fs = require('fs');
let code = fs.readFileSync('app/ur/page.js', 'utf8');

const heroBadge = `<div className="hero-badge">صدائےِ خلق</div>`;
const heroTitle = `<h1 className="hero-title">نصرت فاطمہ نقوی</h1>`;
const heroSubtitle = `<h2 className="hero-subtitle">( وکیلِ انسانیت )</h2>`;

code = code.replace(heroBadge, '');
code = code.replace(heroTitle, '');
code = code.replace(heroSubtitle, '');

fs.writeFileSync('app/ur/page.js', code, 'utf8');
console.log('Hero section cleaned up');
