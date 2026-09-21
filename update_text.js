const fs = require('fs');

let page = fs.readFileSync('app/ur/page.js', 'utf8');

// 1. Quote text change
// The previous text was: "آسمان سے نازل ہونے والی چاروں الہامی کتابوں کا بنیادی مقصد..."
// We need to change it to: "اللہ تعالیٰ کی نازل کردہ چاروں الہامی کتابوں کا بنیادی مقصد..."
page = page.replace(/آسمان سے نازل ہونے والی چاروں الہامی کتابوں/g, 'اللہ تعالیٰ کی نازل کردہ چاروں الہامی کتابوں');
page = page.replace(/آسمان سے نازل ہونے والی/g, 'اللہ تعالیٰ کی نازل کردہ'); // Fallback

fs.writeFileSync('app/ur/page.js', page, 'utf8');
console.log('Text updated in page.js');
