import fs from 'fs';
import path from 'path';

function copyDirRecursive(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDirRecursive(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

console.log('--- 1. Copying reference-assets to public/assets ---');
copyDirRecursive('reference-assets', 'public/assets');

console.log('--- 2. Ensuring reference-assets are in public/reference-assets ---');
copyDirRecursive('reference-assets', 'public/reference-assets');

// Ensure Max's aliased webp file exists in puppies directories
const srcMax = path.join('reference-assets', 'puppies', 'korean_teacup_maltipoo_puppy__girl__b942a5_4b8cfb8204d24eadaf524332aba1dc15-mv2.webp');
const dests = [
  path.join('reference-assets', 'puppies', 'max_b942a5_4b8cfb8204d24eadaf524332aba1dc15-mv2.webp'),
  path.join('public', 'assets', 'puppies', 'max_b942a5_4b8cfb8204d24eadaf524332aba1dc15-mv2.webp'),
  path.join('public', 'reference-assets', 'puppies', 'max_b942a5_4b8cfb8204d24eadaf524332aba1dc15-mv2.webp')
];

if (fs.existsSync(srcMax)) {
  dests.forEach(d => {
    fs.copyFileSync(srcMax, d);
    console.log('Copied Max alias to:', d);
  });
}

// Check count of files in public/assets
function countFiles(dir) {
  let count = 0;
  for (const f of fs.readdirSync(dir, { withFileTypes: true })) {
    if (f.isDirectory()) count += countFiles(path.join(dir, f.name));
    else count++;
  }
  return count;
}

console.log('Total files in public/assets:', countFiles('public/assets'));
console.log('Total files in public/reference-assets:', countFiles('public/reference-assets'));
