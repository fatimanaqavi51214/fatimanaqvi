const fs = require('fs');
const langs = ['ur', 'en', 'ar', 'fa', 'es'];

langs.forEach(lang => {
  const path = `app/${lang}/layout.js`;
  if (fs.existsSync(path)) {
    let content = fs.readFileSync(path, 'utf8');
    
    // Check if it already imports translations
    if (!content.includes("import { translations } from '@/app/i18n/translations';")) {
      content = content.replace(/import FloatingIcons from '@\/components\/FloatingIcons';/, 
        "import FloatingIcons from '@/components/FloatingIcons';\nimport { translations } from '@/app/i18n/translations';");
    }
    
    // Replace const t = { ... }; with const t = translations.lang;
    content = content.replace(/const t = \{[\s\S]*?\};\s*(?=const heroImage|export const metadata|const ogImage)/, 
      `const t = translations.${lang};\n\n`);
    
    fs.writeFileSync(path, content);
    console.log('Updated ' + path);
  }
});
