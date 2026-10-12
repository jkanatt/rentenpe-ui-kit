const fs = require('fs');
const code = fs.readFileSync('generate-rich-pages.js', 'utf8');
const script = code.replace(/function generatePage/g, 'module.exports = { getMockHTML };\nfunction generatePage');
fs.writeFileSync('test-mega.js', script);
const { getMockHTML } = require('./test-mega.js');
console.log(getMockHTML('Inputs', 'Standard Currency', '💰', 'currency-inputs'));
