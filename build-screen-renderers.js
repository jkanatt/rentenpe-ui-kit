const fs = require('fs');
const path = require('path');

// Helper to escape backticks and quotes
function sanitize(str) {
  return str.replace(/`/g, '\\`').replace(/\${/g, '\\${');
}

console.log('Writing builder script...');
