const fs = require('fs');

let fileStr = fs.readFileSync('generate-rich-pages.js', 'utf8');

// Find the start of the object
const startIndex = fileStr.indexOf('const ALL_PAGES = {');
// The object ends with "};" followed by some blank lines or comments. Let's find the first "};" after startIndex
let endIndex = fileStr.indexOf('};', startIndex) + 2;

let objStr = fileStr.substring(startIndex, endIndex);

// Using eval to parse the object string into a real object
// We have to remove "const ALL_PAGES = "
let justTheObjectStr = objStr.replace('const ALL_PAGES = ', '');
let allPages;
eval('allPages = ' + justTheObjectStr);

// Now, process allPages to give specific variants
const specificVariants = [
    'With Helper Text', 'Error State', 'Disabled State', 
    'Inline Variant', 'Dark Mode Variant', 'Accessibility Optimised'
];

for (let key in allPages) {
    let fams = allPages[key].families;
    // Remove the bad ones
    fams = fams.filter(f => f !== 'Compact Variant' && f !== 'Expanded Variant' && f !== 'Ghost Variant');
    
    // Add specific ones based on the title, or just meaningful generic ones
    if (fams.length < 6) {
        // We need 6 items total.
        const needed = 6 - fams.length;
        fams.push(...specificVariants.slice(0, needed));
    }
    allPages[key].families = fams;
}

// Convert back to string
let newObjStr = JSON.stringify(allPages, null, 2);
// The original used single quotes and no quotes for keys, but JSON.stringify is perfectly fine for JS objects.
let replacementStr = 'const ALL_PAGES = ' + newObjStr + ';';

let finalStr = fileStr.substring(0, startIndex) + replacementStr + fileStr.substring(endIndex);

fs.writeFileSync('generate-rich-pages.js', finalStr);
console.log('Successfully updated the variants dynamically!');
