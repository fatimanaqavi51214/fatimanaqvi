const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(dirPath);
  });
}

walkDir('app', (filePath) => {
  if (filePath.endsWith('.js') || filePath.endsWith('.jsx')) {
    let content = fs.readFileSync(filePath, 'utf8');
    let lines = content.split('\n');
    let changed = false;
    
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].match(/<h[1-6]/)) {
        let original = lines[i];
        lines[i] = lines[i].replace(/fontSize:\s*'[^']+',?\s*/g, '');
        lines[i] = lines[i].replace(/fontWeight:\s*'[^']+',?\s*/g, '');
        
        // if style={{}} becomes empty style={{}}, remove it
        lines[i] = lines[i].replace(/style=\{\{\s*\}\}/g, '');
        
        if (original !== lines[i]) changed = true;
      }
    }
    
    if (changed) {
      fs.writeFileSync(filePath, lines.join('\n'));
      console.log('Fixed headings in', filePath);
    }
  }
});
