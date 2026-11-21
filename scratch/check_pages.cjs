const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'site_data', 'pages');
if (!fs.existsSync(dir)) {
  console.log('Dir does not exist:', dir);
  process.exit(1);
}

const files = fs.readdirSync(dir);
console.log('Pages in dir:', files);

['how-it-works.html', 'happy-families.html', 'faq.html', 'contact.html', 'puppies_milo.html'].forEach(f => {
  const p = path.join(dir, f);
  if (fs.existsSync(p)) {
    const html = fs.readFileSync(p, 'utf8');
    const mainMatch = html.match(/<main[^>]*>([\s\S]*?)<\/main>/i);
    console.log('\n=============================================');
    console.log('PAGE:', f);
    console.log('=============================================');
    if (mainMatch) {
      console.log('Main snippet:\n', mainMatch[0].substring(0, 1500));
    } else {
      console.log('No <main> tag found, first 500 chars:');
      console.log(html.substring(0, 500));
    }
  }
});
