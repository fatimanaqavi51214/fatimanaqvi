const fs = require('fs');

function updateFile(filePath, addImport, replacements) {
  let content = fs.readFileSync(filePath, 'utf8');
  if (addImport && !content.includes('ShareWidget')) {
    content = "import ShareWidget from '@/components/ShareWidget';\n" + content;
  }
  
  for (const { regex, replacement } of replacements) {
    content = content.replace(regex, replacement);
  }
  
  fs.writeFileSync(filePath, content);
  console.log('Updated ' + filePath);
}

// 1. Update Footer
updateFile('components/Footer.js', true, [
  {
    regex: /export default function Footer\(\{ t \}\) \{/,
    replacement: `export default function Footer({ t, lang }) {
  const shareTitle = lang === 'ur' ? 'اس صفحے کو شیئر کریں' : 'Share this page';`
  },
  {
    regex: /<div className="container">/,
    replacement: `<div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px' }}>`
  },
  {
    regex: /<p>\{t\.footer\}<\/p>\s*<\/div>\s*<\/footer>/,
    replacement: `<p>{t.footer}</p>
        <ShareWidget title={shareTitle} />
      </div>
    </footer>`
  }
]);

// 2. Update Home page ur/page.js (Business, Charity, Ideology)
updateFile('app/ur/page.js', false, [
  {
    // Business Section
    regex: /<\/div>\s*<\/div>\s*<\/section>\s*\{\/\* Detailed Philanthropy/,
    replacement: `</div>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
            <ShareWidget title="عالمی سطح پر کاروباری کامیابیاں" />
          </div>
        </div>
      </section>

      {/* Detailed Philanthropy`
  },
  {
    // Charity Section
    regex: /<\/div>\s*<\/div>\s*<\/section>\s*\{\/\* Ideology Section/,
    replacement: `</div>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
            <ShareWidget title="عظیم الشان فلاحی و سماجی خدمات" />
          </div>
        </div>
      </section>

      {/* Ideology Section`
  },
  {
    // Ideology Section Quote
    regex: /<span className="quote-author">نصرت فاطمہ نقوی<\/span>\s*<\/div>\s*<\/div>\s*<\/section>/,
    replacement: `<span className="quote-author">نصرت فاطمہ نقوی</span>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
              <ShareWidget title="نظریات و خیالات (صدائے خلق)" />
            </div>
          </div>
        </div>
      </section>`
  }
]);

