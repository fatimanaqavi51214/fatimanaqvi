const fs = require('fs');
const data = JSON.parse(fs.readFileSync('./documents_data.json', 'utf8'));

// Define the available categories
const categories = ['residency', 'property', 'business', 'embassy', 'personal', 'visas'];

// Assign categories iteratively to test the architecture
data.forEach((doc, idx) => {
    doc.category = categories[idx % categories.length];
});

fs.writeFileSync('./documents_data.json', JSON.stringify(data, null, 2));
console.log('Categories assigned.');
