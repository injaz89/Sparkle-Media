const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      results.push(file);
    }
  });
  return results;
}

const files = walk('./src');

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  const original = content;
  
  // Regex to remove all rounded-* classes and bare 'rounded'
  // Match space + rounded... or rounded... at start of string or preceded by quote
  content = content.replace(/\brounded-(?:full|3xl|2xl|xl|lg|md|sm|none|t-2xl|b-2xl|t-3xl|b-3xl)\b/g, 'rounded-none');
  content = content.replace(/\brounded\b/g, 'rounded-none');
  
  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated: ${file}`);
  }
});
