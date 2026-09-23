const fs = require('fs');
let code = fs.readFileSync('app/i18n/translations.js', 'utf8');

const replacements = [
  { lang: 'ur', str: "publications: 'اشاعت'", add: "publications: 'اشاعت',\n      diary: 'ڈائری'" },
  { lang: 'ar', str: "contact: 'اتصل بنا'", add: "contact: 'اتصل بنا',\n      diary: 'يوميات'" },
  { lang: 'es', str: "contact: 'Contacto'", add: "contact: 'Contacto',\n      diary: 'Diario'" },
  { lang: 'fa', str: "contact: 'تماس با ما'", add: "contact: 'تماس با ما',\n      diary: 'خاطرات'" },
  { lang: 'en', str: "contact: 'Contact'", add: "contact: 'Contact',\n      diary: 'Diary'" }
];

replacements.forEach(r => {
  code = code.replace(r.str, r.add);
});

fs.writeFileSync('app/i18n/translations.js', code);
console.log('Fixed translations.js successfully');
