const fs = require('fs');
const path = require('path');
const { getFamiliesForSlug, renderCategoryVariant, SPECIFIC_FAMILIES } = require('./component-engine.js');

// Read ALL_PAGES from generate-rich-pages.js
const richPagesCode = fs.readFileSync(path.join(__dirname, 'generate-rich-pages.js'), 'utf8');
const allPagesMatch = richPagesCode.match(/const ALL_PAGES = ({[\s\S]*?^};)/m);
if (!allPagesMatch) {
  console.error("Could not find ALL_PAGES in generate-rich-pages.js");
  process.exit(1);
}

// Safely evaluate ALL_PAGES object
let ALL_PAGES;
try {
  const sandbox = {};
  const fn = new Function('sandbox', `const ALL_PAGES = ${allPagesMatch[1].replace('^};', '};')}; return ALL_PAGES;`);
  ALL_PAGES = fn();
} catch (e) {
  // alternative extraction
  const evalStr = allPagesMatch[1].replace(/;\s*$/, '');
  ALL_PAGES = eval('(' + evalStr + ')');
}

console.log(`Total slugs in ALL_PAGES: ${Object.keys(ALL_PAGES).length}`);

// The user's requested categories and items
const USER_CATEGORIES = {
  "Foundations": ["Typography", "Colors & Tokens", "Spacing & Grid", "Dividers", "Icons & Symbols", "Containers"],
  "Actions": ["Text & Link Actions", "Floating Actions", "Copy Action", "Share Action", "Download Action", "Bookmark Action"],
  "Inputs": ["Search Input", "Email Input", "Phone Input", "Password Input", "Number Input", "Currency Input", "Textarea", "Date Field", "OTP / PIN", "Masked Input", "File Upload", "Autocomplete", "Time Picker", "Color Picker", "Star Rating", "Tags Input", "Rich Text Editor", "Signature Pad", "Form Fields", "Inline Edit", "Address Input", "Amount Input", "PIN Input", "Slider Input"],
  "Selection": ["Checkbox", "Radio Group", "Toggle / Switch", "Slider / Range", "Input Adornments", "Switch Group", "Color Select", "Size Select"],
  "Dropdowns": ["Standard Select", "Searchable Select", "Multi Select", "Property Selector", "Filter Dropdown", "Sort Dropdown"],
  "Navigation": ["Side Navigation", "Top Bar / Header", "Breadcrumbs", "Page Tabs", "Segmented Control", "Tab Bar Nav", "Pagination", "Stepper", "Back / Next", "Header Utilities", "Lifecycle Nav", "Footer", "Quick Actions", "Bottom Tab Bar", "App Bar", "Scroll Tabs"],
  "Menus": ["Context Menu", "Profile Menu", "Command Palette", "Mega Menu", "Nested Menu", "Action Sheet"],
  "Data Display": ["Status Badges", "Metadata Chips", "Filter Chips", "Action Chips", "Count Badge", "Dot Indicator", "Avatars", "Verified Tags", "Key-Value Pair", "Stat Bar", "Data Label", "Metric Row"],
  "Lists": ["Standard List", "Compact List", "Activity Timeline", "Grouped List", "Swipeable List", "Expandable List", "Reorderable List", "Kanban List", "Checklist", "Chat List"],
  "Tables": ["Standard Table", "Compact Table", "Responsive Table", "Table Toolbar", "Expandable Row", "Editable Table", "Sortable Table", "Paginated Table"],
  "Cards": ["Entity Cards", "Report Cards", "Service Cards", "Membership", "Information", "Reward Cards", "RM Contact", "Profile Cards", "Pricing Cards", "Comparison", "Testimonials", "Feature Cards", "Notification", "Stat Cards", "Summary Cards", "Action Card", "Media Card", "Horizontal Card", "Glass Card", "Gradient Card"],
  "Overlays": ["Bottom Sheet", "Confirmation", "Form Modal", "Success Dialog", "Warning Dialog", "Fullscreen Dialog", "Wizard Dialog", "Popover", "Tooltip", "Lightbox", "Side Drawer", "Inline Dialog", "Snackbar"],
  "Feedback": ["Alert Banner", "Empty State", "Error State", "Loading Spinner", "Skeleton Screen", "Progress Bar", "Score Ring", "Status Indicator", "Countdown", "Confetti / Celebration", "Connection Status", "Toast Notification", "Inline Error", "Success Animation", "Rating Prompt"],
  "States": ["Offline State", "Locked State", "Expired State", "Pending State", "Partial State", "Success State", "Maintenance State", "Upgrade State"],
  "Calendar": ["Calendar View", "Date Range", "Month Selector", "Day Status Cell", "Schedule View", "Event Card", "Booking Slot", "Availability Grid"],
  "Charts": ["Bar Chart", "Stacked Bar", "Line / Area", "Donut Chart", "Chart Legend", "Heatmap", "Funnel Chart", "Gauge Chart", "Area Chart", "Scatter Plot", "Comparison Chart", "Progress Ring"],
  "Analytics": ["Score Display", "Trend / Sparkline", "Comparison", "Breakdown", "Cohort Chart", "Funnel Display"],
  "Infographics": ["Stats Counter", "Visual Comparison", "Process Flow", "Key Insight", "Data Story", "Timeline Visual", "Icon Stat"],
  "Rewards": ["Achievement Badge", "Level Progress", "Streak Counter", "Cashback Card", "Leaderboard", "Challenge Card", "Referral Card", "Daily Reward", "Loyalty Card", "Coupon Code"],
  "Authentication": ["Login Form", "Signup Form", "Forgot Password", "OTP Verify", "Biometric Auth", "Social Login", "PIN Lock", "Passkey Auth"],
  "Onboarding": ["Welcome Screen", "Feature Tour", "Permission Request", "Setup Wizard", "Completion", "Profile Setup", "Invite Friends"],
  "Communication": ["Chat Bubble", "Message Thread", "Announcement", "In App Message", "Email Compose", "Support Ticket", "Feedback Form"],
  "Payments": ["Payment Row", "Payment Method", "Bank Account", "Wallet Balance", "Receipt", "Invoice", "Split Payment", "Auto Pay"],
  "Property": ["Property Listing", "Property Gallery", "Amenity Grid", "Location Map", "Floor Plan", "Property Compare", "Maintenance", "Inspection", "Move Checklist", "Rent Estimate", "Occupancy Status", "Utility Tracker", "Neighborhood Score"],
  "Legal": ["Lease Agreement", "Terms Section", "Consent Block", "Disclaimer", "E Signature", "Doc Attachment", "Audit Log", "QR Code", "Privacy Policy", "Compliance Badge"],
  "Social Proof": ["Testimonial", "Rating Summary", "Review Card", "Trust Badge", "Social Count", "Press Mention"],
  "Media": ["Image Carousel", "Video Player", "Gallery Grid", "Audio Player", "File Preview", "Image Cropper"],
  "Settings": ["Settings Row", "Notification Pref", "Privacy Setting", "Account Manage", "Theme Picker", "Language Select", "Data Export", "Delete Account", "App Info"],
  "Sticky": ["Sticky Action Bar", "Floating Banner", "Cookie Consent", "Push Notification", "Scroll To Top", "Sticky CTA"],
  "Transitions": ["Page Transitions", "Micro Animations", "Shared Element", "Skeleton Transition", "Fade Transition"],
  "Patterns": ["Search + Filter", "Bulk Selection", "Drag & Drop", "Infinite Scroll", "Pull to Refresh", "Share Sheet", "Undo Bar", "Swipe Action", "Long Press Menu", "Peek Preview"],
  "Product": ["Rent Reporting", "Payment History", "Tenant Invite", "Add Property", "Screening", "Verified Report", "Investor Dash", "Candidate Search", "Sign & Lease", "Membership Life", "Rewards Redeem", "RM Pattern", "Report Filter", "Profile Edit", "Notification Center", "KYC Flow", "Subscription", "Auto Debit Setup", "Deposit Shield", "Rent Split", "Credit Builder", "Move Out Flow", "Rent Negotiation"],
  "Templates": ["List Page", "Detail Page", "Dashboard Page", "Form Page", "Modal Flow", "Settings Page", "Onboarding Page", "Error Page", "Auth Page", "Empty Page", "Success Page", "Checkout Flow", "Profile Page", "Activity Feed", "Search Results", "Gallery Page"],
  "Backgrounds": ["Solid Colors", "Mesh Gradients", "Patterns", "Animated", "Gradient Bg", "Blur Bg"],
  "Bottom Bars": ["Tab Bottom Bar", "Floating Pill Nav", "Icon-Only Dock", "Curved Notch Nav", "Dynamic Island Nav", "Gesture Nav Bar"],
  "Sheets & Drawers": ["Compact Sheet", "Full Sheet", "Side Drawer", "Nested Sheet", "Scroll Sheet", "Modal Sheet", "Keyboard Sheet", "Map Sheet"],
  "Buttons": ["Primary Button", "Secondary Button", "Tertiary Button", "Icon Button", "Pill Button", "Gradient Button", "Loading Button", "Split Button", "Button Group", "Toggle Button", "Destructive Button", "Social Button"],
  "Avatars & Profiles": ["Single Avatar", "Avatar Group", "Avatar Presence", "Avatar Badge", "Avatar Edit", "Avatar Placeholder"],
  "Chips & Tags": ["Status Chip", "Input Chip", "Choice Chip", "Assist Chip", "Suggestion Chip", "Price Chip"],
  "Banners": ["Promo Banner", "System Banner", "Feature Banner", "Urgent Banner", "Offer Banner", "Onboard Banner"],
  "Search": ["Global Search", "Contextual Search", "Voice Search", "Filter Search", "Spotlight Search", "Recent Search"],
  "Notifications": ["Push Notification", "In-App Banner", "Notification List", "Notification Dot", "Notification Group", "Actionable Notification", "Notification Settings"],
  "Financial Widgets": ["Balance Card", "Transaction Card", "Spending Chart", "Credit Score", "EMI Calculator", "Exchange Rate", "Bill Split", "Savings Goal", "Budget Meter", "Tax Summary"],
  "Maps & Location": ["Property Map", "Area Guide", "Commute Time", "Nearby Places", "Map Filter", "Location Picker"],
  "Verification & Trust": ["ID Verification", "Document Scan", "Selfie Verify", "Signature Capture", "Biometric Verify", "Trust Score"]
};

// Map each title in user categories to slug in ALL_PAGES
function findSlug(title, catName) {
  const normTitle = title.toLowerCase().replace(/[^a-z0-9]/g, '');
  const normCat = catName.toLowerCase().replace(/[^a-z0-9]/g, '');
  
  // 1. Exact title match
  for (const [slug, item] of Object.entries(ALL_PAGES)) {
    if (item.title.toLowerCase() === title.toLowerCase()) {
      return slug;
    }
  }
  // 2. Normalized title match
  for (const [slug, item] of Object.entries(ALL_PAGES)) {
    const itemNorm = item.title.toLowerCase().replace(/[^a-z0-9]/g, '');
    if (itemNorm === normTitle) return slug;
  }
  // 3. Normalized slug match
  for (const [slug, item] of Object.entries(ALL_PAGES)) {
    const sNorm = slug.toLowerCase().replace(/[^a-z0-9]/g, '');
    if (sNorm === normTitle) return slug;
  }
  // 4. Substring in slug or title within same category
  for (const [slug, item] of Object.entries(ALL_PAGES)) {
    if (item.cat.toLowerCase() === catName.toLowerCase() || item.cat.toLowerCase().includes(catName.toLowerCase().slice(0, 4))) {
      const itemNorm = item.title.toLowerCase().replace(/[^a-z0-9]/g, '');
      const sNorm = slug.toLowerCase().replace(/[^a-z0-9]/g, '');
      if (itemNorm.includes(normTitle) || normTitle.includes(itemNorm) || sNorm.includes(normTitle) || normTitle.includes(sNorm)) {
        return slug;
      }
    }
  }
  // 5. Global substring
  for (const [slug, item] of Object.entries(ALL_PAGES)) {
    const sNorm = slug.toLowerCase().replace(/[^a-z0-9]/g, '');
    const itemNorm = item.title.toLowerCase().replace(/[^a-z0-9]/g, '');
    if (sNorm.includes(normTitle) || normTitle.includes(sNorm) || itemNorm.includes(normTitle)) {
      return slug;
    }
  }
  return null;
}

const auditResults = [];
let totalFound = 0;
let totalMissing = 0;

for (const [catName, items] of Object.entries(USER_CATEGORIES)) {
  for (const itemTitle of items) {
    const slug = findSlug(itemTitle, catName);
    if (!slug) {
      auditResults.push({ cat: catName, title: itemTitle, slug: null, status: 'MISSING_SLUG' });
      totalMissing++;
    } else {
      totalFound++;
      const pageInfo = ALL_PAGES[slug];
      // Test render of 3 sample variant indexes: 0, 1, 5
      const fams = getFamiliesForSlug(slug, pageInfo.cat);
      const fam = fams[0] || 'Default';
      const icon = pageInfo.icon || '✨';
      
      let sampleH0 = '', sampleH5 = '';
      try {
        sampleH0 = renderCategoryVariant(pageInfo.cat, fam, icon, slug, 0);
        sampleH5 = renderCategoryVariant(pageInfo.cat, fam, icon, slug, 5);
      } catch (err) {
        sampleH0 = 'ERROR: ' + err.message;
      }

      // Check for generic or leaked content
      const hasLeak = sampleH0.includes('3 Bedroom Duplex Indiranagar') || sampleH5.includes('3 Bedroom Duplex Indiranagar');
      const isShortGeneric = sampleH0.length < 150;
      
      auditResults.push({
        cat: catName,
        title: itemTitle,
        slug,
        pageTitle: pageInfo.title,
        status: hasLeak ? 'LEAK_DETECTED' : (isShortGeneric ? 'GENERIC' : 'OK'),
        sampleLen: sampleH0.length,
        hasHtmlFile: fs.existsSync(path.join(__dirname, 'pages', `${slug}.html`))
      });
    }
  }
}

console.log(`\nAudit Complete:`);
console.log(`Total Checked: ${totalFound + totalMissing}`);
console.log(`Matched Slugs: ${totalFound}`);
console.log(`Missing Slugs: ${totalMissing}`);

const missing = auditResults.filter(r => r.status === 'MISSING_SLUG');
if (missing.length > 0) {
  console.log(`\nMissing Items (${missing.length}):`);
  missing.forEach(m => console.log(`  - [${m.cat}] ${m.title}`));
}

const issues = auditResults.filter(r => r.status !== 'OK' && r.status !== 'MISSING_SLUG');
if (issues.length > 0) {
  console.log(`\nIssues (${issues.length}):`);
  issues.forEach(i => console.log(`  - [${i.cat}] ${i.title} (${i.slug}): ${i.status}`));
}

// Write full audit JSON
fs.writeFileSync(path.join(__dirname, 'audit-summary.json'), JSON.stringify(auditResults, null, 2));
console.log(`Wrote audit-summary.json`);
