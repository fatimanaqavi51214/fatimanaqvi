const fs = require('fs');
let content = fs.readFileSync('app/en/khandan/page.js', 'utf8');
content = content.replace(/name: 'Syed Muhammad Naqvi'/g, "name: 'Late Syed Muhammad Naqvi'");
content = content.replace(/value: 'Syed Muhammad Naqvi'/g, "value: 'Late Syed Muhammad Naqvi'");
content = content.replace(/name: 'Mehr Bano'/g, "name: 'Late Mehr Bano'");
content = content.replace(/value: 'Mehr Bano Naqvi'/g, "value: 'Late Mehr Bano'");
content = content.replace(/name: 'Ghulam Sarwar Chaudhry'/g, "name: 'Late Ghulam Sarwar Chaudhry'");
content = content.replace(/value: 'Ghulam Sarwar Chaudhry'/g, "value: 'Late Ghulam Sarwar Chaudhry'");
content = content.replace('father\'s name is Syed Muhammad Naqvi', 'father\'s name is Late Syed Muhammad Naqvi');
content = content.replace('mother\'s name is Mehr Bano', 'mother\'s name is Late Mehr Bano');

fs.writeFileSync('app/en/khandan/page.js', content);
