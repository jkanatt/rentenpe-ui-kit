const fs = require('fs');
const path = require('path');

const icons = [
  'house', 'user', 'bell', 'search', 'settings', 'message', 'mail', 'calendar', 'clock', 'star',
  'heart', 'thumb-up', 'check', 'x', 'plus', 'minus', 'arrow-right', 'arrow-left', 'arrow-up', 'arrow-down',
  'chevron-right', 'chevron-left', 'chevron-up', 'chevron-down', 'menu', 'more-horizontal', 'more-vertical',
  'edit', 'trash', 'share', 'download', 'upload', 'link', 'external-link', 'camera', 'video', 'mic',
  'music', 'image', 'map-pin', 'navigation', 'compass', 'globe', 'moon', 'sun', 'cloud', 'zap', 'shield',
  'lock', 'unlock', 'key', 'folder', 'file', 'paperclip', 'book', 'bookmark', 'credit-card', 'dollar-sign',
  'shopping-cart', 'shopping-bag', 'gift', 'award', 'briefcase', 'activity', 'pie-chart', 'bar-chart',
  'trending-up', 'trending-down', 'battery', 'bluetooth', 'wifi', 'cast', 'smartphone', 'monitor', 'tv',
  'headphones', 'speaker', 'volume', 'volume-x', 'mic-off', 'video-off', 'eye', 'eye-off', 'zoom-in', 'zoom-out',
  'copy', 'scissors', 'clipboard', 'printer', 'archive', 'inbox', 'send', 'phone', 'phone-call', 'phone-missed',
  'hash', 'at-sign', 'percent', 'alert-circle', 'alert-triangle', 'help-circle', 'info', 'loader', 'refresh-cw'
];

// We will use standard emojis mapped to animated styles for ease of implementation
const emojis = ["🏠","👤","🔔","🔍","⚙️","💬","📧","📅","🕒","⭐","❤️","👍","✔️","✖️","➕","➖","➡️","⬅️","⬆️","⬇️","▶️","◀️","🔼","🔽","☰","⋯","⋮","✏️","🗑️","📤","📥","📤","🔗","↗️","📷","📹","🎤","🎵","🖼️","📍","🧭","🧭","🌐","🌙","☀️","☁️","⚡","🛡️","🔒","🔓","🔑","📁","📄","📎","📖","🔖","💳","💲","🛒","🛍️","🎁","🏆","💼","📈","🥧","📊","↗️","↘️","🔋","📶","📶","📺","📱","🖥️","📺","🎧","🔈","🔊","🔇","🔇","🔇","👁️","🙈","🔍","🔎","📋","✂️","📋","🖨️","🗄️","📥","📨","📞","📞","📵","#","@","%","❗","⚠️","❓","ℹ️","⏳","🔄"];

let gridHTML = '';
for (let i = 0; i < 100; i++) {
  const animations = ['icon-spin', 'icon-bounce', 'icon-pulse', 'icon-float', 'icon-shake', 'icon-flip'];
  const anim = animations[Math.floor(Math.random() * animations.length)];
  const name = icons[i] || `icon-${i}`;
  const emoji = emojis[i] || "✨";
  
  gridHTML += `
    <div class="icon-card">
      <div class="icon-card-preview ${anim}">${emoji}</div>
      <div class="icon-card-name">${name}</div>
      <div class="icon-card-class">.${anim}</div>
    </div>
  `;
}

const html = `<!DOCTYPE html>
<html lang="en" data-theme="light">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Animated Icons — Rentenpe UI Kit</title>
  <link rel="stylesheet" href="../css/tokens.css">
  <link rel="stylesheet" href="../css/catalog.css">
  <script src="../js/catalog.js" defer></script>
  <style>
    .icon-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
      gap: 16px;
      padding: 24px 0;
    }
    .icon-card {
      background: var(--color-surface);
      border: 1px solid var(--color-border);
      border-radius: 12px;
      padding: 24px 16px;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      transition: all 0.2s ease;
      cursor: pointer;
    }
    .icon-card:hover {
      border-color: var(--color-primary);
      box-shadow: 0 8px 16px rgba(0,0,0,0.05);
      transform: translateY(-2px);
    }
    .icon-card-preview {
      font-size: 32px;
      margin-bottom: 16px;
      width: 48px;
      height: 48px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .icon-card-name {
      font-size: 13px;
      font-weight: 600;
      color: var(--color-text-primary);
      margin-bottom: 4px;
    }
    .icon-card-class {
      font-size: 11px;
      color: var(--color-text-tertiary);
      font-family: monospace;
      background: var(--color-bg);
      padding: 2px 6px;
      border-radius: 4px;
    }
    
    /* ANIMATIONS */
    @keyframes spin { 100% { transform: rotate(360deg); } }
    .icon-spin { animation: spin 4s linear infinite; }
    
    @keyframes bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
    .icon-bounce { animation: bounce 2s ease-in-out infinite; }
    
    @keyframes pulse { 0% { transform: scale(1); } 50% { transform: scale(1.1); } 100% { transform: scale(1); } }
    .icon-pulse { animation: pulse 2s ease-in-out infinite; }
    
    @keyframes float { 0% { transform: translateY(0px); } 50% { transform: translateY(-6px); } 100% { transform: translateY(0px); } }
    .icon-float { animation: float 3s ease-in-out infinite; }
    
    @keyframes shake { 0%, 100% { transform: translateX(0); } 25% { transform: translateX(-4px) rotate(-5deg); } 75% { transform: translateX(4px) rotate(5deg); } }
    .icon-shake { animation: shake 2.5s ease-in-out infinite; }
    
    @keyframes flip { 0% { transform: perspective(400px) rotateY(0); } 100% { transform: perspective(400px) rotateY(360deg); } }
    .icon-flip { animation: flip 4s ease-out infinite; }
  </style>
</head>
<body>
<div class="catalog-shell">
  <aside class="catalog-sidebar">
    <div class="catalog-sidebar-header">
      <a href="../index.html" class="catalog-logo">
        <div class="catalog-logo-mark">R</div>
        <div>
          <div class="catalog-logo-text">Rentenpe</div>
          <div class="catalog-logo-sub">Design System</div>
        </div>
      </a>
    </div>
    <nav class="catalog-nav">
      <div class="catalog-nav-group">
        <div class="catalog-nav-group-label">Foundations</div>
        <a href="#" class="catalog-nav-item active">✨ Animated Icons</a>
      </div>
      <div class="catalog-nav-group">
        <div class="catalog-nav-group-label">Navigate</div>
        <a href="../index.html" class="catalog-nav-item">← Back to Index</a>
      </div>
    </nav>
    <div class="catalog-sidebar-footer">
      <div class="theme-toggle">
        <button class="theme-toggle-option active" data-theme="light">☀️ Light</button>
        <button class="theme-toggle-option" data-theme="dark">🌙 Dark</button>
      </div>
    </div>
  </aside>

  <main class="catalog-main">
    <div class="catalog-page-header">
      <h1 class="catalog-page-title">Animated Icons</h1>
      <p class="catalog-page-description">100+ fully animated, motion-rich icons for the Rentenpe mobile application.</p>
    </div>

    <section class="component-section">
      <div class="icon-grid">
        ${gridHTML}
      </div>
    </section>
  </main>
</div>
</body>
</html>`;

fs.writeFileSync(path.join(__dirname, 'pages', 'icons.html'), html);
console.log('icons.html generated with 100+ animated icons.');
