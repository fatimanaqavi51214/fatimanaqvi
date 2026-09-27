const fs = require('fs');
const filePath = 'E:/2.maan-jee-website/app/[lang]/vault/VaultClient.js';
let content = fs.readFileSync(filePath, 'utf8');

// Replace the lock screen logic
content = content.replace(/const \[isAuthenticated, setIsAuthenticated\] = useState\(false\);/g, 'const isAuthenticated = true;');
content = content.replace(/const \[password, setPassword\] = useState\(''\);/g, '');
content = content.replace(/const handleLogin =.*?};/s, '');

// We can just strip out the "if (!isAuthenticated) { return ... }" block entirely
// but since we set isAuthenticated = true, it will just bypass it.
// Let's actually remove it properly.
const lockScreenRegex = /if \(!isAuthenticated\) \{[\s\S]*?return \([\s\S]*?\}\s*?\);?\s*\}/;
content = content.replace(lockScreenRegex, '');

fs.writeFileSync(filePath, content);
console.log("Updated VaultClient.js");
