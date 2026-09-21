const fs = require('fs');
const lines = fs.readFileSync('C:/Users/shigr/.gemini/antigravity/brain/9a303e28-411e-4dc6-bffb-5ab9dcb6e01a/.system_generated/logs/transcript_full.jsonl', 'utf8').split('\n');
for (const line of lines) {
  if (line.includes('reader-footer-tips')) {
    if (line.includes('"step_index"')) {
      const data = JSON.parse(line);
      console.log('FOUND IN STEP:', data.step_index);
      if (data.tool_calls) {
        for (const call of data.tool_calls) {
          if (call.name === 'default_api:replace_file_content' || call.name === 'default_api:write_to_file') {
             console.log('ARGS length:', call.args.ReplacementContent ? call.args.ReplacementContent.length : 0);
             if (call.args.ReplacementContent) {
               fs.writeFileSync('extracted_reader.css', call.args.ReplacementContent);
             }
          }
        }
      }
    }
  }
}
