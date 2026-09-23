fetch('http://localhost:3000/en')
  .then(res => res.text())
  .then(html => {
    if (html.includes('Advocate for Humanity')) {
      console.log('SUCCESS: Advocate for Humanity found in HTML');
    } else {
      console.log('FAILED: Advocate for Humanity NOT found. Instead found:');
      const match = html.match(/<h1[^>]*>(.*?)<\/h1>/);
      console.log('H1:', match ? match[1] : 'No H1');
      const match2 = html.match(/<p[^>]*color: #55efc4[^>]*>(.*?)<\/p>/);
      console.log('P:', match2 ? match2[1] : 'No P');
    }
  });
