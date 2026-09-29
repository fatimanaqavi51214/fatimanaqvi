const fs = require('fs');
let css = fs.readFileSync('app/globals.css', 'utf8');

const newStyles = `
.lang-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: #ffffff !important;
  text-decoration: none;
  padding: 5px 12px;
  font-size: 0.9rem;
  font-weight: bold;
  border-radius: 30px !important;
  background: rgba(255, 255, 255, 0.15) !important;
  border: 1px solid rgba(255, 255, 255, 0.2) !important;
  transition: all 0.3s ease;
  -webkit-appearance: none;
}

.flag-wrapper {
  overflow: hidden;
  border-radius: 2px;
  width: 18px;
  height: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
}

.anim-flag {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.lang-btn:hover {
  color: #ffffff !important;
  border-color: #55efc4 !important;
  background: rgba(0, 184, 148, 0.3) !important;
  transform: translateY(-1px);
}

.lang-btn:hover .anim-flag {
  animation: flag-wave 1s ease-in-out infinite;
}

.lang-btn.active {
  color: #ffffff !important;
  border-color: #00b894 !important;
  background: #00b894 !important;
  box-shadow: 0 4px 12px rgba(0, 184, 148, 0.4) !important;
}

.lang-btn.active .anim-flag {
  animation: flag-wave 2s ease-in-out infinite;
}
`;

// Regex to remove old lang-btn related styles
css = css.replace(/\.lang-btn\s*{[\s\S]*?}/g, '');
css = css.replace(/\.flag-wrapper\s*{[\s\S]*?}/g, '');
css = css.replace(/\.anim-flag\s*{[\s\S]*?}/g, '');
css = css.replace(/\.lang-btn:hover\s*{[\s\S]*?}/g, '');
css = css.replace(/\.lang-btn:hover \.anim-flag\s*{[\s\S]*?}/g, '');
css = css.replace(/\.lang-btn\.active\s*{[\s\S]*?}/g, '');
css = css.replace(/\.lang-btn\.active \.anim-flag\s*{[\s\S]*?}/g, '');

// Append new styles
css += '\n' + newStyles;

fs.writeFileSync('app/globals.css', css, 'utf8');
console.log('Fixed CSS');
