const fs = require('fs');

let text = fs.readFileSync('public/extracted_preview.txt', 'utf8');

// The documents_data.json has ids like doc_001, doc_003. We need to assign parsed data to them.
let existingData = JSON.parse(fs.readFileSync('./documents_data.json', 'utf8'));

// Split the text into blocks based on numbered list (e.g., "1. ", "2. ")
// Because numbering might be messed up, we look for something like "1. " or "2. " followed by text
const blocks = [];
const regex = /(?:^|\n)\d+\.\s*(.*?)(?=(?:\n\d+\.\s*)|$)/gs;
let match;
while ((match = regex.exec(text)) !== null) {
    blocks.push(match[0]);
}

if (blocks.length === 0) {
    // try alternative split if numbers are missing
    const altRegex = /(?:^|\n)(?=[^\n]+کیٹیگری)/gs;
    const splitText = text.split(altRegex);
    blocks.push(...splitText);
}

function determineCategory(catText, titleText) {
    const textToSearch = (catText + " " + titleText).toLowerCase();
    if (textToSearch.includes('رہائش') || textToSearch.includes('اقامہ') || textToSearch.includes('residen')) return 'residency';
    if (textToSearch.includes('ایمبیسی') || textToSearch.includes('embassy') || textToSearch.includes('سفارت')) return 'embassy';
    if (textToSearch.includes('پراپرٹی') || textToSearch.includes('property') || textToSearch.includes('عقار')) return 'property';
    if (textToSearch.includes('بزنس') || textToSearch.includes('business') || textToSearch.includes('تجارت') || textToSearch.includes('commercial')) return 'business';
    if (textToSearch.includes('ویزا') || textToSearch.includes('visa')) return 'visas';
    return 'personal'; // default
}

function parseLines(blockText, langPrefix) {
    // Extract lines for a given language section
    let sectionRegex = new RegExp(`${langPrefix}[\\s\\S]*?(?=(?:English Translation:|اردو ترجمہ:|$))`, 'i');
    let sectionMatch = blockText.match(sectionRegex);
    if (!sectionMatch) return [];
    
    let lines = sectionMatch[0].split('\n').map(l => l.trim()).filter(l => l && !l.includes(langPrefix));
    let parsedLines = [];
    
    for (let line of lines) {
        if (line.includes(':')) {
            let parts = line.split(':');
            parsedLines.push({ label: parts[0].trim(), value: parts.slice(1).join(':').trim() });
        } else {
            // If it doesn't have a colon but has content, might be a header or footer
            if (line.length > 5) {
                parsedLines.push({ label: 'Details', value: line });
            }
        }
    }
    return parsedLines;
}

let parsedDocs = [];

for (let i = 0; i < blocks.length; i++) {
    let block = blocks[i];
    
    // Extract Title
    let titleMatch = block.match(/(?:^|\n)\d*\.?\s*([^\n]+)/);
    let title = titleMatch ? titleMatch[1].trim() : 'Unknown Document';
    
    // Extract Category text
    let catMatch = block.match(/کیٹیگری.*?:\s*([^\n]+)/i);
    let catText = catMatch ? catMatch[1].trim() : '';
    
    let categorySlug = determineCategory(catText, title);
    
    // English lines
    let enLines = parseLines(block, 'English Translation:');
    // Urdu lines
    let urLines = parseLines(block, 'اردو ترجمہ:');
    
    parsedDocs.push({
        title,
        category: categorySlug,
        translations: {
            ur: {
                name: "اردو",
                dir: "rtl",
                docName: title,
                lines: urLines
            },
            en: {
                name: "English",
                dir: "ltr",
                docName: title, // Ideally translated, but keeping title for now
                lines: enLines
            },
            ar: { name: "العربية", dir: "rtl", docName: title, lines: [] },
            fa: { name: "فارسی", dir: "rtl", docName: title, lines: [] },
            es: { name: "Español", dir: "ltr", docName: title, lines: [] }
        }
    });
}

// Map parsed docs to existingData based on index.
// existingData has image URLs from Cloudinary.
for (let i = 0; i < existingData.length; i++) {
    if (i < parsedDocs.length) {
        existingData[i].category = parsedDocs[i].category;
        existingData[i].translations = parsedDocs[i].translations;
    } else {
        existingData[i].category = 'personal'; // fallback
    }
}

fs.writeFileSync('./documents_data.json', JSON.stringify(existingData, null, 2));
console.log(`Successfully mapped ${parsedDocs.length} documents.`);
