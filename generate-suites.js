const fs = require('fs');
const path = require('path');
const { SCREEN_SUITES } = require('./js/screens-data.js');
const { renderScreenHTML } = require('./js/screen-renderers.js');

const PAGES_DIR = path.join(__dirname, 'pages');

// Generate sidebar HTML for Pages
function generatePagesNavHTML(activeSuiteKey = '') {
  let navHTML = '';
  for (const [key, suite] of Object.entries(SCREEN_SUITES)) {
    const isExpanded = key === activeSuiteKey;
    navHTML += `
      <div class="catalog-nav-group">
        <div class="catalog-nav-group-label" style="display:flex; justify-content:space-between; align-items:center;">
          <span>${suite.icon} ${suite.title.toUpperCase()}</span>
          <span style="font-size:9px; background:#F1F5F9; color:#64748B; padding:2px 6px; border-radius:99px;">${suite.screens.length}</span>
        </div>
        <a href="${key}-suite.html" class="catalog-nav-item ${isExpanded ? 'active' : ''}" style="font-weight:700;">
          <span class="uk-nav-icon">📱</span> View Full Suite
          <div style="margin-left:auto;"><span class="nav-count">${suite.screens.length} screens</span></div>
        </a>
    `;

    // Add individual screens
    suite.screens.forEach(s => {
      navHTML += `
        <a href="${key}-suite.html#${s.id}" class="catalog-nav-item" style="padding-left:28px; font-size:12px;">
          <span style="color:#94A3B8; font-size:10px;">↳</span> <span class="nav-text" style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${s.title}</span>
        </a>
      `;
    });

    navHTML += `</div>`;
  }
  return navHTML;
}

// Generate the suite page HTML
function generateSuitePage(key, suite) {
  const pagesNav = generatePagesNavHTML(key);

  const screensHTML = suite.screens.map((screen, idx) => {
    const liveHTML = renderScreenHTML(screen.id);
    const tagsHTML = screen.elements.map(el => `<span class="screen-element-tag">${el}</span>`).join('');

    return `
      <div class="screen-card-container" id="${screen.id}">
        <!-- iPhone 16 Pro Frame with Live Prototype -->
        <div class="iphone-frame">
          <div class="iphone-dynamic-island">
            <div class="iphone-island-camera"></div>
            <div style="width:10px; height:10px; border-radius:50%; background:#059669; opacity:0.8;"></div>
          </div>
          <div class="iphone-screen-viewport" style="padding-top:40px;">
            ${liveHTML}
          </div>
        </div>

        <!-- Metadata Card -->
        <div class="screen-info-card">
          <div class="screen-info-header">
            <div>
              <span style="font-size:10px; font-weight:800; color:#3B82F6; letter-spacing:0.05em; text-transform:uppercase;">SCREEN ${idx + 1} OF ${suite.screens.length} • REF ${screen.pin.toUpperCase()}</span>
              <h3 class="screen-info-title" style="margin-top:2px;">${screen.title}</h3>
            </div>
            <span class="screen-info-badge">${screen.theme}</span>
          </div>
          <p class="screen-info-desc">${screen.desc}</p>
          
          <div style="margin-bottom:8px; font-size:10px; font-weight:700; color:#94A3B8; text-transform:uppercase; letter-spacing:0.05em;">Key Elements Extracted:</div>
          <div class="screen-elements-tags">
            ${tagsHTML}
          </div>
        </div>
      </div>
    `;
  }).join('\n');

  return `<!DOCTYPE html>
<html lang="en" data-theme="light">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${suite.title} — Rentenpe UI Kit</title>
  <link rel="stylesheet" href="../css/tokens.css">
  <link rel="stylesheet" href="../css/catalog.css">
  <script src="../js/screens-data.js"></script>
  <script src="../js/screen-renderers.js"></script>
  <script src="../js/catalog.js" defer></script>
</head>
<body>
<div class="catalog-shell">
  <!-- Sidebar -->
  <aside class="catalog-sidebar">
    <div class="catalog-sidebar-header">
      <div style="margin-bottom: 12px; display:flex; align-items:center; justify-content:space-between;">
        <a href="../index.html" style="text-decoration:none; display:flex; align-items:center; gap:8px;">
          <div style="width:28px; height:28px; border-radius:8px; background:#0F172A; color:#fff; display:flex; align-items:center; justify-content:center; font-weight:900; font-size:13px;">R</div>
          <span style="font-size: 15px; font-weight: 800; color: var(--color-text-primary);">RentenPe</span>
        </a>
        <span style="font-size: 10px; font-weight: 800; color: #10B981; background:rgba(16,185,129,0.1); padding:2px 8px; border-radius:99px;">PRO 2.0</span>
      </div>

      <!-- Search Input -->
      <div class="sidebar-search" style="position: relative;">
        <span style="position: absolute; left: 12px; top: 10px; font-size: 14px; color: #94A3B8;">🔍</span>
        <input type="text" id="catalogSearch" placeholder="Search pages or components..." style="width: 100%; padding: 10px 10px 10px 36px; background: var(--color-surface-sunken, #F1F5F9); border: none; border-radius: 8px; font-size: 13px; outline: none;">
      </div>
    </div>

    <!-- Top Sidebar Tab Switcher -->
    <div class="sidebar-tab-switcher">
      <button class="sidebar-tab-btn" id="tabBtnComponents" onclick="window.location.href='../index.html#components'">
        <span>🧩 Components</span>
        <span class="sidebar-tab-badge">320+</span>
      </button>
      <button class="sidebar-tab-btn active" id="tabBtnPages" onclick="switchSidebarTab('pages')">
        <span>📱 Pages</span>
        <span class="sidebar-tab-badge">125</span>
      </button>
    </div>

    <!-- Navigation -->
    <nav class="catalog-nav" id="navPagesList" style="display:block;">
      ${pagesNav}
    </nav>

    <!-- Footer -->
    <div class="catalog-sidebar-footer">
      <button onclick="window.openThemePicker()" style="width: 100%; margin-bottom: 12px; padding: 10px; background: var(--color-surface, #FFFFFF); border: 1px solid var(--color-border, #E2E8F0); border-radius: 10px; color: var(--color-text-primary, #0F172A); font-weight: 600; font-size: 13px; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 8px;">
        🎨 Customize Tokens
      </button>
      <div class="theme-toggle">
        <button class="theme-toggle-option active" data-theme="light">☀️ Light</button>
        <button class="theme-toggle-option" data-theme="dark">🌙 Dark</button>
      </div>
    </div>
  </aside>

  <!-- Main Content -->
  <main class="catalog-main" style="background: var(--color-surface-sunken, #F8FAFC); padding: 32px 48px;">
    <!-- Suite Header Banner -->
    <div style="background: linear-gradient(135deg, #0F172A 0%, #1E293B 100%); border-radius: 24px; padding: 40px; color: #fff; margin-bottom: 32px; box-shadow: 0 20px 40px rgba(0,0,0,0.1); display:flex; justify-content:space-between; align-items:center;">
      <div>
        <div style="display:flex; align-items:center; gap:8px; margin-bottom:8px;">
          <a href="../index.html#pages" style="color:#94A3B8; text-decoration:none; font-size:12px; font-weight:700;">← All Suites</a>
          <span style="color:#64748B;">/</span>
          <span style="color:#38BDF8; font-size:12px; font-weight:700;">${suite.title}</span>
        </div>
        <h1 style="font-size:32px; font-weight:900; letter-spacing:-0.03em; margin:0 0 10px 0;">${suite.icon} ${suite.title}</h1>
        <p style="font-size:14px; color:#94A3B8; margin:0; max-width:600px; line-height:1.6;">${suite.desc}</p>
      </div>

      <div style="text-align:right;">
        <div style="font-size:36px; font-weight:900; color:#38BDF8;">${suite.screens.length}</div>
        <div style="font-size:11px; font-weight:700; color:#94A3B8; text-transform:uppercase; letter-spacing:0.05em;">Interactive Screens</div>
      </div>
    </div>

    <!-- Screens Gallery Grid -->
    <div class="screens-gallery-grid">
      ${screensHTML}
    </div>
  </main>
</div>
</body>
</html>`;
}

// Generate all suite pages
for (const [key, suite] of Object.entries(SCREEN_SUITES)) {
  const filePath = path.join(PAGES_DIR, `${key}-suite.html`);
  const content = generateSuitePage(key, suite);
  fs.writeFileSync(filePath, content);
  console.log(`Generated: pages/${key}-suite.html (${suite.screens.length} screens)`);
}

// Also generate mega screens-gallery.html showing ALL suites together!
const allSuitesHTML = Object.entries(SCREEN_SUITES).map(([key, suite]) => {
  return `
    <div style="margin-bottom:48px;" id="suite-section-${key}">
      <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:2px solid var(--color-border); padding-bottom:12px; margin-bottom:24px;">
        <div style="display:flex; align-items:center; gap:10px;">
          <span style="font-size:24px;">${suite.icon}</span>
          <h2 style="font-size:22px; font-weight:900; margin:0;">${suite.title}</h2>
          <span style="background:#10B981; color:#fff; font-size:11px; font-weight:800; padding:3px 10px; border-radius:99px;">${suite.screens.length} screens</span>
        </div>
        <a href="${key}-suite.html" style="font-size:13px; font-weight:700; color:#3B82F6; text-decoration:none;">Open Dedicated Suite View →</a>
      </div>
      <div class="screens-gallery-grid">
        ${suite.screens.map((screen, idx) => {
          const liveHTML = renderScreenHTML(screen.id);
          const tagsHTML = screen.elements.map(el => `<span class="screen-element-tag">${el}</span>`).join('');
          return `
            <div class="screen-card-container" id="${screen.id}">
              <div class="iphone-frame">
                <div class="iphone-dynamic-island">
                  <div class="iphone-island-camera"></div>
                  <div style="width:10px; height:10px; border-radius:50%; background:#059669; opacity:0.8;"></div>
                </div>
                <div class="iphone-screen-viewport" style="padding-top:40px;">
                  ${liveHTML}
                </div>
              </div>
              <div class="screen-info-card">
                <div class="screen-info-header">
                  <h3 class="screen-info-title">${screen.title}</h3>
                  <span class="screen-info-badge">${screen.theme}</span>
                </div>
                <p class="screen-info-desc">${screen.desc}</p>
                <div class="screen-elements-tags">
                  ${tagsHTML}
                </div>
              </div>
            </div>
          `;
        }).join('\n')}
      </div>
    </div>
  `;
}).join('\n');

const megaGalleryHTML = `<!DOCTYPE html>
<html lang="en" data-theme="light">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>125+ Complete Screens Showcase — Rentenpe UI Kit</title>
  <link rel="stylesheet" href="../css/tokens.css">
  <link rel="stylesheet" href="../css/catalog.css">
  <script src="../js/screens-data.js"></script>
  <script src="../js/screen-renderers.js"></script>
  <script src="../js/catalog.js" defer></script>
</head>
<body>
<div class="catalog-shell">
  <aside class="catalog-sidebar">
    <div class="catalog-sidebar-header">
      <div style="margin-bottom: 12px; display:flex; align-items:center; justify-content:space-between;">
        <a href="../index.html" style="text-decoration:none; display:flex; align-items:center; gap:8px;">
          <div style="width:28px; height:28px; border-radius:8px; background:#0F172A; color:#fff; display:flex; align-items:center; justify-content:center; font-weight:900; font-size:13px;">R</div>
          <span style="font-size: 15px; font-weight: 800; color: var(--color-text-primary);">RentenPe</span>
        </a>
        <span style="font-size: 10px; font-weight: 800; color: #10B981; background:rgba(16,185,129,0.1); padding:2px 8px; border-radius:99px;">125 SCREENS</span>
      </div>

      <div class="sidebar-search" style="position: relative;">
        <span style="position: absolute; left: 12px; top: 10px; font-size: 14px; color: #94A3B8;">🔍</span>
        <input type="text" id="catalogSearch" placeholder="Search 125+ screens..." style="width: 100%; padding: 10px 10px 10px 36px; background: var(--color-surface-sunken, #F1F5F9); border: none; border-radius: 8px; font-size: 13px; outline: none;">
      </div>
    </div>

    <!-- Top Sidebar Tab Switcher -->
    <div class="sidebar-tab-switcher">
      <button class="sidebar-tab-btn" id="tabBtnComponents" onclick="window.location.href='../index.html#components'">
        <span>🧩 Components</span>
        <span class="sidebar-tab-badge">320+</span>
      </button>
      <button class="sidebar-tab-btn active" id="tabBtnPages" onclick="switchSidebarTab('pages')">
        <span>📱 Pages</span>
        <span class="sidebar-tab-badge">125</span>
      </button>
    </div>

    <nav class="catalog-nav" id="navPagesList" style="display:block;">
      ${generatePagesNavHTML()}
    </nav>

    <div class="catalog-sidebar-footer">
      <button onclick="window.openThemePicker()" style="width: 100%; margin-bottom: 12px; padding: 10px; background: var(--color-surface, #FFFFFF); border: 1px solid var(--color-border, #E2E8F0); border-radius: 10px; color: var(--color-text-primary, #0F172A); font-weight: 600; font-size: 13px; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 8px;">
        🎨 Customize Tokens
      </button>
      <div class="theme-toggle">
        <button class="theme-toggle-option active" data-theme="light">☀️ Light</button>
        <button class="theme-toggle-option" data-theme="dark">🌙 Dark</button>
      </div>
    </div>
  </aside>

  <main class="catalog-main" style="background: var(--color-surface-sunken, #F8FAFC); padding: 32px 48px;">
    <!-- Mega Hero -->
    <div style="background: linear-gradient(135deg, #09090B 0%, #18181B 100%); border-radius: 28px; padding: 48px; color: #fff; margin-bottom: 40px; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.25); display:flex; justify-content:space-between; align-items:center;">
      <div>
        <div style="font-size:11px; font-weight:800; color:#38BDF8; letter-spacing:0.1em; text-transform:uppercase; margin-bottom:10px;">CRED & Apple UI/UX Engineering</div>
        <h1 style="font-size:42px; font-weight:900; letter-spacing:-0.03em; margin:0 0 12px 0;">125+ Complete Application Screens</h1>
        <p style="font-size:15px; color:#A1A1AA; margin:0; max-width:650px; line-height:1.6;">Every screen deeply extracted and reverse-engineered from 65 Pinterest pins. Fully interactive with pixel-perfect responsive mobile frames.</p>
      </div>
      <div style="display:flex; gap:20px;">
        <div style="text-align:center; background:rgba(255,255,255,0.05); padding:16px 24px; border-radius:18px; border:1px solid rgba(255,255,255,0.1);">
          <div style="font-size:36px; font-weight:900; color:#10B981;">10</div>
          <div style="font-size:11px; color:#A1A1AA; font-weight:700;">App Suites</div>
        </div>
        <div style="text-align:center; background:rgba(255,255,255,0.05); padding:16px 24px; border-radius:18px; border:1px solid rgba(255,255,255,0.1);">
          <div style="font-size:36px; font-weight:900; color:#38BDF8;">125</div>
          <div style="font-size:11px; color:#A1A1AA; font-weight:700;">Live Screens</div>
        </div>
      </div>
    </div>

    <!-- All Suites Stream -->
    ${allSuitesHTML}
  </main>
</div>
</body>
</html>`;

fs.writeFileSync(path.join(PAGES_DIR, 'screens-gallery.html'), megaGalleryHTML);
console.log('Generated: pages/screens-gallery.html (Complete 118 screens mega gallery)');
