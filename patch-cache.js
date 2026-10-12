const fs = require('fs');

let idx = fs.readFileSync('generate-index.js', 'utf8');
idx = idx.replace(/href="pages\/\$\{item\.slug\}\.html"/g, 'href="pages/${item.slug}.html?v=${Date.now()}"');
fs.writeFileSync('generate-index.js', idx);

let rich = fs.readFileSync('generate-rich-pages.js', 'utf8');
rich = rich.replace(/href="\$\{item\.slug\}\.html"/g, 'href="${item.slug}.html?v=${Date.now()}"');
fs.writeFileSync('generate-rich-pages.js', rich);

console.log('Appended cache busting parameters.');
