const fs = require('fs');

let css = fs.readFileSync('app/globals.css', 'utf8');

// Update body font and global line heights
css = css.replace(/body\s*{[\s\S]*?}/, (match) => {
  if (match.includes('font-family:')) {
    return match.replace(/font-family:[^;]+;/, `font-family: 'Jameel Noori Nastaleeq', 'Noto Nastaliq Urdu', 'Nafees', 'Urdu Typesetting', Tahoma, serif;\n  line-height: 2.5;`);
  } else {
    return match.replace('{', `{\n  font-family: 'Jameel Noori Nastaleeq', 'Noto Nastaliq Urdu', 'Nafees', 'Urdu Typesetting', Tahoma, serif;\n  line-height: 2.5;`);
  }
});

// For all p tags, ensure text-align and high line height
css = css.replace(/p\s*{[\s\S]*?}/, (match) => {
  return match.replace(/line-height:[^;]+;/, 'line-height: 2.8;').replace(/text-align:[^;]+;/, 'text-align: justify;');
});

// specifically target message blocks, hero descriptions, bio text to have even higher line height
const classesToFix = ['.message-block-text', '.hero-desc', '.timeline-modern-desc', '.card-desc', '.biz-list li'];
classesToFix.forEach(cls => {
  const regex = new RegExp(`\\${cls}\\s*{[\\s\\S]*?}`, 'g');
  css = css.replace(regex, (match) => {
    if (match.includes('line-height')) {
      return match.replace(/line-height:[^;]+;/, 'line-height: 2.8;');
    } else {
      return match.replace('{', `{\n  line-height: 2.8;`);
    }
  });
});

// Now let's redesign the .nav-btn to be truly beautiful
const oldNavBtnRegex = /\/\* === Modern Nav Buttons === \*\/[\s\S]*?\.nav-btn:hover::before\s*{[\s\S]*?}/g;

const newNavBtnStyles = `/* === Modern Nav Buttons === */
.main-nav {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: center;
  align-items: center;
}

.nav-btn {
  position: relative;
  color: #c9d1d9;
  text-decoration: none;
  font-size: 1.3rem; /* Larger for Nastaleeq readability */
  font-weight: bold;
  background: transparent;
  border: none;
  padding: 8px 12px;
  transition: all 0.4s ease;
  font-family: 'Jameel Noori Nastaleeq', 'Noto Nastaliq Urdu', serif;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

/* Beautiful elegant underline that sweeps in */
.nav-btn::after {
  content: '';
  position: absolute;
  bottom: 2px;
  left: 50%;
  width: 0%;
  height: 2px;
  background: #d4af37;
  transition: all 0.4s cubic-bezier(0.25, 1, 0.5, 1);
  transform: translateX(-50%);
  border-radius: 2px;
  box-shadow: 0 0 8px rgba(212, 175, 55, 0.6);
}

.nav-btn:hover {
  color: #fff;
  text-shadow: 0 0 10px rgba(212, 175, 55, 0.5);
}

.nav-btn:hover::after {
  width: 80%;
}

@media (max-width: 768px) {
  .main-nav {
    gap: 8px;
  }
  .nav-btn {
    font-size: 1.2rem;
    padding: 6px 10px;
    background: rgba(255, 255, 255, 0.02);
    border-radius: 8px;
    border: 1px solid rgba(255, 255, 255, 0.03);
  }
  .nav-btn::after {
    display: none; /* simpler on mobile */
  }
  .nav-btn:active {
    background: rgba(212, 175, 55, 0.1);
    color: #d4af37;
  }
}`;

let replaced = false;
css = css.replace(oldNavBtnRegex, () => {
  replaced = true;
  return newNavBtnStyles;
});

if (!replaced) {
  // If regex failed, try to inject at the end
  css += '\n' + newNavBtnStyles;
}

// Add CSS @font-face for Jameel Noori if possible (using a well known raw git CDN)
const jameelNooriFontFace = `
@font-face {
  font-family: 'Jameel Noori Nastaleeq';
  src: url('https://cdn.jsdelivr.net/gh/haideralishabir/Jameel-Noori-Nastaleeq-Web-Font@master/JameelNooriNastaleeq.woff2') format('woff2'),
       url('https://cdn.jsdelivr.net/gh/haideralishabir/Jameel-Noori-Nastaleeq-Web-Font@master/JameelNooriNastaleeq.woff') format('woff');
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}
`;

if (!css.includes("Jameel-Noori-Nastaleeq-Web-Font")) {
  css = jameelNooriFontFace + '\n' + css;
}

fs.writeFileSync('app/globals.css', css, 'utf8');
console.log('Fonts, line heights, and nav buttons updated');
