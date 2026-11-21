import fs from 'fs';
import path from 'path';

function walk(dir) {
  let results = [];
  if (!fs.existsSync(dir)) return results;
  for (const file of fs.readdirSync(dir)) {
    const full = path.join(dir, file);
    if (fs.statSync(full).isDirectory()) results = results.concat(walk(full));
    else results.push(full.replace(/\\/g, '/'));
  }
  return results;
}

console.log('--- AUDITING ALL IMAGES IN SRC ---');
const srcFiles = walk('src');
const allImgRefs = new Set();

const regex = /['"`]([^'"`]*\.(png|jpg|jpeg|webp|avif|svg|gif))['"`]/gi;

srcFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  let match;
  while ((match = regex.exec(content)) !== null) {
    allImgRefs.add(match[1]);
  }
});

console.log('Total distinct image paths referenced in src:', allImgRefs.size);

const brokenInPublicRef = [];
allImgRefs.forEach(ref => {
  if (ref.startsWith('http')) return;
  const clean = ref.startsWith('/') ? ref.slice(1) : ref;
  const pubPath = path.join('public', clean);
  const refPath = path.join('reference-assets', clean.replace('reference-assets/', ''));
  if (!fs.existsSync(pubPath) && !fs.existsSync(refPath)) {
    brokenInPublicRef.push({ ref, pubPath, refPath });
  }
});

console.log('Broken paths that do NOT exist in public or reference-assets:', brokenInPublicRef.length);
if (brokenInPublicRef.length > 0) {
  console.log(brokenInPublicRef);
}
