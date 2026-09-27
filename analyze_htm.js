const fs = require('fs');

try {
    const html = fs.readFileSync('./public/Documents 24sep.htm', 'utf8');
    
    // Check for base64 images
    const imgMatches = html.match(/data:image\/[^;]+;base64,[^"]+/g);
    console.log(`Found ${imgMatches ? imgMatches.length : 0} base64 images.`);
    
    // Get title
    const titleMatch = html.match(/<title>([\s\S]*?)<\/title>/i);
    console.log(`Title: ${titleMatch ? titleMatch[1].trim() : 'No title'}`);
    
    // Approximate length of raw body text
    const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
    if (bodyMatch) {
        let bodyText = bodyMatch[1];
        // Strip style and script tags
        bodyText = bodyText.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '');
        bodyText = bodyText.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '');
        // Strip other HTML tags
        bodyText = bodyText.replace(/<[^>]+>/g, ' ');
        // Collapse whitespace
        bodyText = bodyText.replace(/\s+/g, ' ').trim();
        
        console.log(`Body text length: ${bodyText.length} characters`);
        console.log(`First 500 characters of text:`);
        console.log(bodyText.substring(0, 500));
    } else {
        console.log('No body tag found.');
    }
} catch (e) {
    console.error(e);
}
