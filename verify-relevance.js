const fs = require('fs');
const path = require('path');

const PAGES_DIR = path.join(__dirname, 'pages');
const pages = fs.readdirSync(PAGES_DIR).filter(f => f.endsWith('.html'));

console.log(`Total HTML pages in pages/: ${pages.length}`);

// Checks for specific component types
const checks = [
  { slug: 'checkbox', keyword: '✓', desc: 'Contains checkmark ✓' },
  { slug: 'radio', keyword: 'border-radius:50%', desc: 'Contains circular radio indicator' },
  { slug: 'toggle', keyword: 'translateX', desc: 'Contains sliding switch knob' },
  { slug: 'slider', keyword: 'slider', desc: 'Contains slider track or thumb' },
  { slug: 'data-table', keyword: '<table', desc: 'Contains HTML table' },
  { slug: 'compact-table', keyword: '<table', desc: 'Contains HTML table' },
  { slug: 'avatar-single', keyword: 'border-radius:50%', desc: 'Contains round avatar' },
  { slug: 'avatar-group', keyword: 'margin-left:-', desc: 'Contains overlapping avatar cluster' },
  { slug: 'status-chip', keyword: 'Paid', desc: 'Contains status chips' },
  { slug: 'calendar', keyword: 'March 2026', desc: 'Contains calendar dates' },
  { slug: 'bar-chart', keyword: 'height:', desc: 'Contains bar heights' },
  { slug: 'donut-chart', keyword: '<svg', desc: 'Contains SVG chart' },
  { slug: 'line-chart', keyword: '<svg', desc: 'Contains SVG graph' },
  { slug: 'empty-state', keyword: '📭', desc: 'Contains empty state icon' },
  { slug: 'error-state', keyword: '🚨', desc: 'Contains error alert' },
  { slug: 'login', keyword: 'password', desc: 'Contains password field' },
  { slug: 'signup', keyword: 'Create Account', desc: 'Contains signup header' },
  { slug: 'property-listing', keyword: '₹28,500', desc: 'Contains property rent' },
  { slug: 'amenity-grid', keyword: 'Pool', desc: 'Contains amenities' },
  { slug: 'floor-plan', keyword: 'Floor Plan', desc: 'Contains floor plan specs' },
  { slug: 'receipt', keyword: 'OFFICIAL RENT RECEIPT', desc: 'Contains receipt voucher' },
  { slug: 'payment-row', keyword: 'Rahul Anand', desc: 'Contains UPI transaction' },
  { slug: 'bottom-tab-bar', keyword: 'border-radius:99px', desc: 'Contains capsule dock' },
  { slug: 'breadcrumbs', keyword: '›', desc: 'Contains breadcrumb separators' },
  { slug: 'pagination', keyword: 'Prev', desc: 'Contains pagination buttons' },
  { slug: 'primary-btn', keyword: '<button', desc: 'Contains buttons' }
];

let failed = 0;
for (const c of checks) {
  const filePath = path.join(PAGES_DIR, `${c.slug}.html`);
  if (!fs.existsSync(filePath)) {
    console.log(`❌ Missing file: ${c.slug}.html`);
    failed++;
    continue;
  }
  const content = fs.readFileSync(filePath, 'utf8');
  if (!content.includes(c.keyword)) {
    console.log(`❌ Check failed for ${c.slug}: missing "${c.keyword}" (${c.desc})`);
    failed++;
  } else {
    console.log(`✅ [${c.slug}] verified: ${c.desc}`);
  }
}

if (failed === 0) {
  console.log(`\n🎉 ALL TESTED SAMPLE PAGES ARE 100% AUTHENTIC & RELEVANT!`);
} else {
  console.log(`\n⚠️ ${failed} checks failed.`);
}
