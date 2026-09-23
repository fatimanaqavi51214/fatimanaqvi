fetch('http://localhost:3000/en')
  .then(res => res.text())
  .then(html => {
    html = html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
    const urduText = html.match(/[\u0600-\u06FF]+/g);
    if (urduText) {
      console.log('Urdu text found in EN HTML:', [...new Set(urduText)].join(', '));
    } else {
      console.log('No Urdu text found in EN HTML.');
    }
  });
