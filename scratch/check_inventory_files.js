import fs from 'fs';
import path from 'path';

const inventory = fs.readFileSync('asset-inventory.md', 'utf8');
const lines = inventory.split('\n');
let count = 0;
let missing = [];

for (const line of lines) {
  // Table row: | `filename` | Category | ... | URL |
  if (line.trim().startsWith('| `')) {
    const parts = line.split('|').map(s => s.trim());
    if (parts.length >= 5) {
      count++;
      const file = parts[1].replace(/`/g, '');
      const urlMatch = parts[4].match(/\((https:[^\)]+)\)/) || parts[4].match(/(https:[^\s\]|]+)/);
      const url = urlMatch ? urlMatch[1] : parts[4];
      const localPath = path.join('reference-assets', file);
      if (!fs.existsSync(localPath)) {
        missing.push({ file, url, localPath });
      }
    }
  }
}

console.log('Total inventory asset items parsed:', count);
console.log('Missing from reference-assets:', missing.length);
if (missing.length > 0) {
  console.log('Missing items:', missing);
}
