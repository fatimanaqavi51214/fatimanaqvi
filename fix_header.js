const fs = require('fs');

// 1. Update translations.js
let code = fs.readFileSync('app/i18n/translations.js', 'utf8');
if (!code.includes("home: {\n      title: 'نصرت فاطمہ نقوی'")) {
  code = code.replace(/diary: 'ڈائری'\n    \},/, `diary: 'ڈائری'\n    },\n    home: {\n      title: 'نصرت فاطمہ نقوی',\n      subtitle: 'وکیل انسانیت',\n      description: 'خدمتِ خلق میں جہد مسلسل اور دردِ دل رکھنے والی عظیم خاتون'\n    },`);
  fs.writeFileSync('app/i18n/translations.js', code);
  console.log('Added home translations to Urdu.');
}

// 2. Update Header.js
let header = fs.readFileSync('components/Header.js', 'utf8');
header = header.replace(/<h1 style=([^>]+)>نصرت فاطمہ نقوی<\/h1>/, `<h1 style=$1>{t.home?.title || 'نصرت فاطمہ نقوی'}</h1>`);
header = header.replace(/<p style=([^>]+)>وکیل انسانیت<\/p>/, `<p style=$1>{t.home?.subtitle || 'وکیل انسانیت'}</p>`);
header = header.replace(/<p style=([^>]+)>\s*خدمتِ خلق میں جہد مسلسل اور دردِ دل رکھنے والی عظیم خاتون\s*<\/p>/, `<p style=$1>\n              {t.home?.description || 'خدمتِ خلق میں جہد مسلسل اور دردِ دل رکھنے والی عظیم خاتون'}\n            </p>`);
fs.writeFileSync('components/Header.js', header);
console.log('Updated Header to use translations.');
