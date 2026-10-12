const fs = require('fs');

function expandFile(filename) {
  let content = fs.readFileSync(filename, 'utf-8');
  
  // Find the ALL_PAGES object definition
  // We'll use a regex to replace the families array with an expanded version
  content = content.replace(/families:\s*\[(.*?)\]/g, (match, p1) => {
    // p1 is something like "'Standard Link', 'Action Link', 'Destructive Link'"
    let arr = p1.split(',').map(s => s.trim().replace(/^'|'$/g, ''));
    
    // Add more creative variants if they don't already exist
    const newVariants = ['Premium Glass', 'Neumorphic', 'CRED Style Dark'];
    for (let v of newVariants) {
      if (!arr.includes(v)) {
        arr.push(v);
      }
    }
    
    // rebuild the string
    const newArrStr = arr.map(s => `'${s}'`).join(', ');
    return `families: [${newArrStr}]`;
  });

  fs.writeFileSync(filename, content);
  console.log(`Expanded variants in ${filename}`);
}

expandFile('generate-index.js');
expandFile('generate-rich-pages.js');
