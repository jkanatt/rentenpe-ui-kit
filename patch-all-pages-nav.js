const fs = require('fs');
const path = require('path');
const { SCREEN_SUITES } = require('./js/screens-data.js');

const PAGES_DIR = path.join(__dirname, 'pages');

// Generate pages nav for component pages
let pagesNavHTML = '';
for (const [key, suite] of Object.entries(SCREEN_SUITES)) {
  pagesNavHTML += `
      <div class="catalog-nav-group">
        <div class="catalog-nav-group-label" style="display:flex; justify-content:space-between; align-items:center;">
          <span>${suite.icon} ${suite.title.toUpperCase()}</span>
          <span style="font-size:9px; background:#F1F5F9; color:#64748B; padding:2px 6px; border-radius:99px;">${suite.screens.length}</span>
        </div>
        <a href="${key}-suite.html" class="catalog-nav-item" style="font-weight:700;">
          <span class="uk-nav-icon">📱</span> View Full Suite
          <div style="margin-left:auto;"><span class="nav-count">${suite.screens.length} screens</span></div>
        </a>
  `;
  suite.screens.forEach(s => {
    pagesNavHTML += `        <a href="${key}-suite.html#${s.id}" class="catalog-nav-item" style="padding-left:26px; font-size:12px;">
          <span style="color:#94A3B8; font-size:10px;">↳</span> <span class="nav-text" style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${s.title}</span>
        </a>\n`;
  });
  pagesNavHTML += `      </div>\n`;
}

const tabSwitcherHTML = `
    <!-- Top Sidebar Tab Switcher -->
    <div class="sidebar-tab-switcher">
      <button class="sidebar-tab-btn active" id="tabBtnComponents" onclick="switchSidebarTab('components')">
        <span>🧩 Components</span>
        <span class="sidebar-tab-badge">320+</span>
      </button>
      <button class="sidebar-tab-btn" id="tabBtnPages" onclick="switchSidebarTab('pages')">
        <span>📱 Pages</span>
        <span class="sidebar-tab-badge">118</span>
      </button>
    </div>
`;

const files = fs.readdirSync(PAGES_DIR).filter(f => f.endsWith('.html') && !f.includes('-suite.html') && f !== 'screens-gallery.html');
console.log(`Patching ${files.length} component pages...`);

let patchedCount = 0;
for (const file of files) {
  const filePath = path.join(PAGES_DIR, file);
  let html = fs.readFileSync(filePath, 'utf8');

  // Skip if already has tab switcher
  if (html.includes('sidebar-tab-switcher')) continue;

  // Add tab switcher before nav
  if (html.includes('<nav class="catalog-nav">')) {
    html = html.replace('<nav class="catalog-nav">', `${tabSwitcherHTML}\n    <nav class="catalog-nav" id="navComponentsList">`);
    
    // Insert navPagesList before catalog-sidebar-footer
    if (html.includes('<div class="catalog-sidebar-footer">')) {
      const insertion = `\n    <nav class="catalog-nav" id="navPagesList" style="display:none;">\n${pagesNavHTML}\n    </nav>\n    <div class="catalog-sidebar-footer">`;
      html = html.replace('<div class="catalog-sidebar-footer">', insertion);
      fs.writeFileSync(filePath, html);
      patchedCount++;
    }
  }
}

console.log(`Successfully patched ${patchedCount} component pages with top sidebar Pages & Components tabs!`);
