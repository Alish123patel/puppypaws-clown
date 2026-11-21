import fs from 'fs';
import path from 'path';
import { puppiesData, availablePuppies, goneHomePuppies, happyFamiliesData } from '../src/data/index.js';

let failures = 0;

function checkAsset(url, context) {
  if (!url) {
    console.error(`FAIL: Empty image url in ${context}`);
    failures++;
    return;
  }
  const clean = url.startsWith('/') ? url.slice(1) : url;
  const inPublic = fs.existsSync(path.join('public', clean));
  if (!inPublic) {
    console.error(`FAIL: Image not found in public/: "${url}" (${context})`);
    failures++;
  }
}

console.log('=== ROUTE 1: / (HOMEPAGE) ===');
checkAsset('/brand/logo.png', 'Header Brand Logo');
checkAsset('/brand/icon.png', 'Brand Icon');
checkAsset('/assets/puppies/max_b942a5_a1fa75c7bf2f4d688ec0ce0344baef67f000.jpg', 'Hero / Concierge Steps / CTA');
checkAsset('/assets/puppies/korean_teacup_maltipoo_puppy__girl__b942a5_50f0ae67c9ff437d911597d52a9e63b3-mv2.jpg', 'TwoWaysHome Import');
availablePuppies.slice(0, 6).forEach(p => {
  checkAsset(p.images[0], `Homepage Lineup Puppy: ${p.name}`);
});
happyFamiliesData.moments.slice(0, 6).forEach((m, idx) => {
  checkAsset(m.image, `Homepage Happy Preview Moment ${idx + 1}`);
});

console.log('\n=== ROUTE 2: /puppies (AVAILABLE PUPPIES) ===');
availablePuppies.forEach(p => {
  checkAsset(p.images[0], `Available Puppy: ${p.name} (${p.slug})`);
});

console.log('\n=== ROUTE 3: /gone-home (GONE HOME PUPPIES) ===');
goneHomePuppies.forEach(p => {
  checkAsset(p.images[0], `Gone Home Puppy: ${p.name} (${p.slug})`);
});

console.log('\n=== ROUTE 4: /puppies/:slug (ALL 42 PUPPIES DETAIL GALLERIES) ===');
let totalGalleryImages = 0;
puppiesData.forEach(p => {
  p.images.forEach((img, i) => {
    totalGalleryImages++;
    checkAsset(img, `Puppy ${p.name} (${p.slug}) Photo ${i + 1}`);
  });
});
console.log(`Checked ${totalGalleryImages} gallery images across all 42 puppies.`);

console.log('\n=== ROUTE 5: /happy-families (ALL 64 FAMILY MOMENTS) ===');
happyFamiliesData.moments.forEach((m, i) => {
  checkAsset(m.image, `Happy Family Moment ${i + 1} (${m.id})`);
});

console.log('\n=== ROUTE 6: /contact (SHOWROOM GALLERY) ===');
const showroomPhotos = [
  '/assets/showroom/showroom_27b888_323008bb0f6a41d4bde2a0da7206cd98f003.jpg',
  '/assets/showroom/showroom_27b888_323008bb0f6a41d4bde2a0da7206cd98f000.jpg',
  '/assets/showroom/showroom_27b888_323008bb0f6a41d4bde2a0da7206cd98f001.jpg',
  '/assets/showroom/showroom_27b888_323008bb0f6a41d4bde2a0da7206cd98f002.jpg'
];
showroomPhotos.forEach((s, i) => {
  checkAsset(s, `Showroom Photo ${i + 1}`);
});

console.log(`\n========================================`);
console.log(`ROUTE IMAGES AUDIT RESULT: Failures = ${failures}`);
console.log(`========================================`);

if (failures > 0) process.exit(1);
