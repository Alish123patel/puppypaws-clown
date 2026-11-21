import fs from 'fs';
import path from 'path';

function walk(dir) {
  let results = [];
  if (!fs.existsSync(dir)) return results;
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const full = path.join(dir, file);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      results = results.concat(walk(full));
    } else {
      results.push(full);
    }
  }
  return results;
}

// 1. Audit puppiesData.js
import { puppiesData } from '../src/data/puppiesData.js';
console.log('=== AUDITING PUPPIES DATA (' + puppiesData.length + ' puppies) ===');
let brokenPuppyImages = [];
let validPuppyImages = 0;

puppiesData.forEach(p => {
  if (!p.images || p.images.length === 0) {
    brokenPuppyImages.push({ puppy: p.name, slug: p.slug, error: 'No images array' });
  } else {
    p.images.forEach((img, i) => {
      // In Vite, /path/to/img is resolved from public/path/to/img
      const relPath = img.startsWith('/') ? img.slice(1) : img;
      const pubPath = path.join('public', relPath);
      if (!fs.existsSync(pubPath)) {
        brokenPuppyImages.push({ puppy: p.name, slug: p.slug, index: i, img, expectedPath: pubPath });
      } else {
        validPuppyImages++;
      }
    });
  }
});
console.log(`Puppy images: ${validPuppyImages} valid, ${brokenPuppyImages.length} broken.`);
if (brokenPuppyImages.length > 0) {
  console.log('Broken puppy images sample:', brokenPuppyImages.slice(0, 10));
}

// 2. Audit happyFamiliesData.js
import { happyFamiliesData } from '../src/data/happyFamiliesData.js';
console.log('\n=== AUDITING HAPPY FAMILIES DATA (' + (happyFamiliesData.moments?.length || 0) + ' moments) ===');
let brokenFamilyImages = [];
let validFamilyImages = 0;

(happyFamiliesData.moments || []).forEach((m, i) => {
  const relPath = m.image?.startsWith('/') ? m.image.slice(1) : m.image;
  const pubPath = path.join('public', relPath);
  if (!fs.existsSync(pubPath)) {
    brokenFamilyImages.push({ id: m.id, index: i, image: m.image, expectedPath: pubPath });
  } else {
    validFamilyImages++;
  }
});
console.log(`Family images: ${validFamilyImages} valid, ${brokenFamilyImages.length} broken.`);
if (brokenFamilyImages.length > 0) {
  console.log('Broken family images sample:', brokenFamilyImages.slice(0, 10));
}

// 3. Scan all src/ files for image paths
console.log('\n=== SCANNING ALL SRC FILES FOR IMAGE PATHS ===');
const srcFiles = walk('src');
const imageRegex = /['"`]([^'"`]*\.(png|jpg|jpeg|webp|svg|gif))['"`]/gi;
let allFoundRefs = [];

srcFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  let match;
  while ((match = imageRegex.exec(content)) !== null) {
    const imgPath = match[1];
    // Ignore external http/https
    if (!imgPath.startsWith('http')) {
      const relPath = imgPath.startsWith('/') ? imgPath.slice(1) : imgPath;
      const pubPath = path.join('public', relPath);
      const existsInPublic = fs.existsSync(pubPath);
      allFoundRefs.push({
        sourceFile: file.replace(/\\/g, '/'),
        imgPath,
        pubPath,
        existsInPublic
      });
    }
  }
});

const brokenRefs = allFoundRefs.filter(r => !r.existsInPublic);
console.log(`Total local image references in src: ${allFoundRefs.length}`);
console.log(`Valid in public: ${allFoundRefs.length - brokenRefs.length}`);
console.log(`Broken in public: ${brokenRefs.length}`);
if (brokenRefs.length > 0) {
  console.log('Broken references:');
  brokenRefs.forEach(r => console.log(`  ${r.sourceFile} -> "${r.imgPath}" (checked: ${r.pubPath})`));
}
