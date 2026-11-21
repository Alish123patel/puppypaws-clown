import fs from 'fs';

const p = 'C:/Users/Admin/.gemini/antigravity/brain/4abed498-1de8-442c-a2d4-9b71cc002dd2/.system_generated/logs/transcript.jsonl';
if (fs.existsSync(p)) {
  const lines = fs.readFileSync(p, 'utf8').split('\n').filter(Boolean);
  console.log('Total transcript lines:', lines.length);
  const imgMatches = lines.flatMap(l => {
    const matches = [...l.matchAll(/https:\/\/[^"'`\s\\]+\.(png|jpg|jpeg|webp|avif|svg)/gi)].map(m => m[0]);
    return matches;
  });
  console.log('Found remote image URLs in browser subagent transcript:', imgMatches.length);
  const uniqueUrls = [...new Set(imgMatches)];
  console.log('Unique remote image URLs:', uniqueUrls.length);
  console.log(uniqueUrls.slice(0, 15));
} else {
  console.log('Transcript does not exist at:', p);
}
