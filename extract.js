const fs = require('fs');
const lines = fs.readFileSync('C:/Users/shigr/.gemini/antigravity/brain/9a303e28-411e-4dc6-bffb-5ab9dcb6e01a/.system_generated/logs/transcript_full.jsonl', 'utf8').split('\n');
for (const line of lines) {
  if (line.includes('"step_index":295')) {
    const data = JSON.parse(line);
    const args = data.tool_calls[0].args;
    fs.writeFileSync('extracted_globals.css', args.ReplacementContent);
    console.log('Saved extracted_globals.css! Length:', args.ReplacementContent.length);
  }
}
