const fs = require('fs');

function updateFile(filePath, addShareWidget, replacements) {
  let content = fs.readFileSync(filePath, 'utf8');
  if (addShareWidget && !content.includes('ShareWidget')) {
    content = "import ShareWidget from '@/components/ShareWidget';\n" + content;
  }
  
  for (const { regex, replacement } of replacements) {
    content = content.replace(regex, replacement);
  }
  
  fs.writeFileSync(filePath, content);
  console.log('Updated ' + filePath);
}

// 1. Update Diary
updateFile('app/ur/diary/page.js', true, [
  {
    regex: /<span className="sig-date">\{entry\.date\}<\/span>\s*<\/div>/g,
    replacement: `<span className="sig-date">{entry.date}</span>\n                </div>\n                <ShareWidget title={entry.mainTitle} text={entry.blocks[0].title} />`
  }
]);

// 2. Update Home page ur/page.js (Video section)
updateFile('app/ur/page.js', true, [
  {
    regex: /<div className="video-container-modern">\s*<video src=\{videoLink\} controls playsInline preload="metadata" className="promo-video" \/>\s*<\/div>/,
    replacement: `<div className="video-container-modern">\n          <video src={videoLink} controls playsInline preload="metadata" className="promo-video" />\n          <ShareWidget title="محترمہ نصرت فاطمہ نقوی کی ایک تعارفی جھلک" />\n        </div>`
  }
]);

// 3. Add to the hero-quote on Home page
updateFile('app/ur/page.js', false, [
  {
    regex: /<span style=\{\{ fontSize: '1rem', color: '#55efc4', display: 'block', marginTop: '10px' \}\}>نصرت فاطمہ نقوی<\/span>/,
    replacement: `<span style={{ fontSize: '1rem', color: '#55efc4', display: 'block', marginTop: '10px' }}>نصرت فاطمہ نقوی</span>\n            <ShareWidget title="محترمہ نصرت فاطمہ نقوی کا قول" text="اللہ تعالیٰ کی نازل کردہ چاروں الہامی کتابوں کا بنیادی مقصد انسان کی ہدایت اور فلاح ہے۔" />`
  }
]);

