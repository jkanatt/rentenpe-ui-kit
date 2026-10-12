/* ================================================================
   RENTENPE UI KIT — CATALOG SHELL JS
   Theme toggle, search filter, component interactions
   ================================================================ */

document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initSearch();
  initSidebarTabs();
  initNavigation();
  initComponentInteractions();
});

/* ── SIDEBAR TAB SWITCHER (Components vs Pages) ── */
function initSidebarTabs() {
  const hash = window.location.hash.toLowerCase();
  const savedTab = localStorage.getItem('rentenpe-active-tab');
  
  if (hash === '#pages' || hash.includes('page') || window.location.pathname.includes('suite') || window.location.pathname.includes('screens')) {
    switchSidebarTab('pages', false);
  } else if (savedTab === 'pages' && (window.location.pathname.endsWith('index.html') || window.location.pathname.endsWith('/'))) {
    switchSidebarTab('pages', false);
  } else {
    switchSidebarTab('components', false);
  }
}

function switchSidebarTab(tabName, updateHistory = true) {
  const compNav = document.getElementById('navComponentsList');
  const pageNav = document.getElementById('navPagesList');
  const compBtn = document.getElementById('tabBtnComponents');
  const pageBtn = document.getElementById('tabBtnPages');
  const mainComponentsView = document.getElementById('mainComponentsView');
  const mainPagesView = document.getElementById('mainPagesView');

  if (tabName === 'pages') {
    if (compNav) compNav.style.display = 'none';
    if (pageNav) pageNav.style.display = 'block';
    if (compBtn) compBtn.classList.remove('active');
    if (pageBtn) pageBtn.classList.add('active');
    
    if (mainComponentsView) mainComponentsView.style.display = 'none';
    if (mainPagesView) mainPagesView.style.display = 'block';

    localStorage.setItem('rentenpe-active-tab', 'pages');
    if (updateHistory && window.location.pathname.includes('index.html')) {
      history.replaceState(null, '', '#pages');
    }
  } else {
    if (compNav) compNav.style.display = 'block';
    if (pageNav) pageNav.style.display = 'none';
    if (compBtn) compBtn.classList.add('active');
    if (pageBtn) pageBtn.classList.remove('active');

    if (mainComponentsView) mainComponentsView.style.display = 'block';
    if (mainPagesView) mainPagesView.style.display = 'none';

    localStorage.setItem('rentenpe-active-tab', 'components');
    if (updateHistory && window.location.pathname.includes('index.html')) {
      history.replaceState(null, '', '#components');
    }
  }
}
window.switchSidebarTab = switchSidebarTab;

/* ── THEME ── */
function initThemeToggle() {
  const saved = localStorage.getItem('rentenpe-theme') || 'light';
  document.documentElement.setAttribute('data-theme', saved);
  updateThemeButtons(saved);

  document.querySelectorAll('.theme-toggle-option').forEach(btn => {
    btn.addEventListener('click', () => {
      const theme = btn.dataset.theme;
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('rentenpe-theme', theme);
      updateThemeButtons(theme);
    });
  });
}

function updateThemeButtons(theme) {
  document.querySelectorAll('.theme-toggle-option').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.theme === theme);
  });
}

function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme') || 'light';
  const next = current === 'light' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('rentenpe-theme', next);
  updateThemeButtons(next);
}

/* ── SEARCH ── */
function initSearch() {
  const input = document.getElementById('catalogSearch');
  if (!input) return;

  input.addEventListener('input', (e) => {
    const q = e.target.value.toLowerCase().trim();
    document.querySelectorAll('.catalog-nav-item').forEach(item => {
      const text = item.textContent.toLowerCase();
      item.style.display = text.includes(q) ? '' : 'none';
    });
    document.querySelectorAll('.catalog-nav-group').forEach(group => {
      const visibleItems = group.querySelectorAll('.catalog-nav-item:not([style*="display: none"])');
      group.style.display = visibleItems.length === 0 ? 'none' : '';
    });

    // Also filter component sections if on a component page
    document.querySelectorAll('.component-section').forEach(section => {
      const text = section.textContent.toLowerCase();
      section.style.display = text.includes(q) ? '' : 'none';
    });
  });
}

/* ── NAVIGATION ── */
function initNavigation() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.catalog-nav-item').forEach(item => {
    const href = item.getAttribute('href');
    if (href && href.includes(currentPage)) {
      item.classList.add('active');
    }
  });
}

/* ── COMPONENT INTERACTIONS ── */
function initComponentInteractions() {
  // Overlay demos
  document.querySelectorAll('[data-action="open-modal"]').forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.dataset.target;
      const modal = document.getElementById(targetId);
      if (modal) {
        modal.style.display = 'flex';
        modal.querySelector('.modal-backdrop')?.addEventListener('click', () => {
          modal.style.display = 'none';
        });
      }
    });
  });

  // Toast demos
  document.querySelectorAll('[data-action="show-toast"]').forEach(btn => {
    btn.addEventListener('click', () => {
      showToast(btn.dataset.type || 'success', btn.dataset.message || 'Action completed successfully');
    });
  });

  // Dropdown demos
  document.querySelectorAll('[data-action="toggle-dropdown"]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const targetId = btn.dataset.target;
      const dropdown = document.getElementById(targetId);
      if (dropdown) {
        const isOpen = dropdown.style.display === 'block';
        closeAllDropdowns();
        dropdown.style.display = isOpen ? 'none' : 'block';
      }
    });
  });

  document.addEventListener('click', closeAllDropdowns);

  // Accordion demos
  document.querySelectorAll('[data-action="toggle-accordion"]').forEach(btn => {
    btn.addEventListener('click', () => {
      const content = btn.nextElementSibling;
      const isOpen = content.style.maxHeight && content.style.maxHeight !== '0px';
      content.style.maxHeight = isOpen ? '0px' : content.scrollHeight + 'px';
      content.style.opacity = isOpen ? '0' : '1';
      btn.classList.toggle('expanded', !isOpen);
    });
  });

  // Tab demos
  document.querySelectorAll('.demo-tab-group').forEach(group => {
    group.querySelectorAll('.demo-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        group.querySelectorAll('.demo-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
      });
    });
  });

  // Toggle demos
  document.querySelectorAll('.demo-toggle').forEach(toggle => {
    toggle.addEventListener('click', () => {
      toggle.classList.toggle('on');
    });
  });

  // Checkbox demos
  document.querySelectorAll('.demo-checkbox').forEach(cb => {
    cb.addEventListener('click', () => {
      cb.classList.toggle('checked');
    });
  });

  // Skeleton reveal
  document.querySelectorAll('[data-action="reveal-skeleton"]').forEach(btn => {
    btn.addEventListener('click', () => {
      const skeleton = btn.closest('.component-card-preview').querySelector('.skeleton-demo');
      if (skeleton) {
        skeleton.classList.toggle('loaded');
      }
    });
  });
}

/* ── TOAST SYSTEM ── */
function showToast(type, message) {
  const container = document.getElementById('toastContainer') || createToastContainer();
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;

  const icons = { success: '✓', error: '✕', warning: '⚠', info: 'ℹ' };
  toast.innerHTML = `
    <span class="toast-icon">${icons[type] || 'ℹ'}</span>
    <span class="toast-message">${message}</span>
    <button class="toast-close" onclick="this.parentElement.remove()">✕</button>
  `;

  container.appendChild(toast);
  toast.style.animation = 'toastSlideIn 0.3s ease-out forwards';

  setTimeout(() => {
    toast.style.animation = 'toastSlideOut 0.3s ease-out forwards';
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

function createToastContainer() {
  const container = document.createElement('div');
  container.id = 'toastContainer';
  container.style.cssText = 'position:fixed;top:24px;right:24px;z-index:9999;display:flex;flex-direction:column;gap:8px;pointer-events:none;';
  document.body.appendChild(container);
  return container;
}

function closeAllDropdowns() {
  document.querySelectorAll('.demo-dropdown-menu').forEach(d => d.style.display = 'none');
}

/* ── COUNTER ANIMATION ── */
function animateCounter(element, target, duration = 1500) {
  const start = 0;
  const startTime = performance.now();

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.round(start + (target - start) * eased);
    element.textContent = current.toLocaleString();
    if (progress < 1) requestAnimationFrame(update);
  }
  requestAnimationFrame(update);
}

/* ── CONFETTI ── */
function launchConfetti() {
  const container = document.createElement('div');
  container.style.cssText = 'position:fixed;inset:0;z-index:99999;pointer-events:none;overflow:hidden;';
  document.body.appendChild(container);

  const colors = ['#10B981', '#F59E0B', '#3B82F6', '#EF4444', '#8B5CF6', '#EC4899'];
  for (let i = 0; i < 60; i++) {
    const piece = document.createElement('div');
    const color = colors[Math.floor(Math.random() * colors.length)];
    piece.style.cssText = `
      position:absolute;top:-20px;left:${Math.random()*100}%;
      width:${6+Math.random()*6}px;height:${6+Math.random()*6}px;
      background:${color};border-radius:${Math.random()>0.5?'50%':'2px'};
      animation:confettiDrop ${1+Math.random()*2}s ease-in ${Math.random()*0.5}s forwards;
    `;
    container.appendChild(piece);
  }
  setTimeout(() => container.remove(), 4000);
}

/* ── COMPONENT DETAIL POPUP ── */
function initComponentDetailPopup() {
  // Inject the CSS file
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = '../css/component-modal.css';
  document.head.appendChild(link);

  // Inject the modal DOM
  const modalHTML = `
    <div id="compDetailModal" class="comp-modal-overlay">
      <div class="comp-modal" onclick="event.stopPropagation()">
        <div class="comp-modal-header">
          <div class="comp-modal-title-area">
            <div class="comp-modal-id" id="compModalId">COMP-A</div>
            <h2 class="comp-modal-title" id="compModalTitle">Component Title</h2>
          </div>
          <button class="comp-modal-close" id="compModalClose">✕</button>
        </div>
        <div class="comp-modal-body">
          <div class="comp-modal-preview-pane">
            <div class="comp-modal-toolbar" style="flex-wrap: wrap; gap: 12px; padding: 12px 20px;">
              <div style="display: flex; align-items: center; gap: 8px;">
                <span style="font-size:10px; font-weight:700; color:#94A3B8; letter-spacing:0.08em; text-transform:uppercase;">Preview Background</span>
                <button class="comp-modal-theme-btn active" onclick="setModalBg(this, '#FFFFFF')">Light</button>
                <button class="comp-modal-theme-btn" onclick="setModalBg(this, '#0F172A')">Dark</button>
                <button class="comp-modal-theme-btn" onclick="setModalBg(this, '#F1F5F9')">Grey</button>
              </div>
              
              <div style="width: 1px; height: 24px; background: #E2E8F0; margin: 0 4px;"></div>
              
              <div style="display: flex; align-items: center; gap: 8px; position: relative;">
                <span style="font-size:10px; font-weight:700; color:#94A3B8; letter-spacing:0.08em; text-transform:uppercase;">Aesthetic Style</span>
                <button class="comp-modal-theme-btn" id="customAestheticDropdownBtn" onclick="toggleAestheticDropdown()" style="padding-right: 28px; background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%20fill%3D%22none%22%20stroke%3D%22%2364748B%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%223%205%206%209%209%205%22%2F%3E%3C%2Fsvg%3E'); background-repeat: no-repeat; background-position: right 8px center; position: relative;">
                  <span id="customAestheticDropdownLabel">Default (Auto)</span>
                </button>
                
                <div id="customAestheticDropdownMenu" style="display: none; position: absolute; top: 100%; left: 0; margin-top: 8px; background: #334155; border: 1px solid #475569; border-radius: 12px; box-shadow: 0 10px 25px rgba(0,0,0,0.3); z-index: 1000; overflow: hidden; width: 220px;">
                  <style>
                    .aesthetic-option { padding: 10px 16px; color: #E2E8F0; font-size: 13px; font-weight: 500; cursor: pointer; transition: background 0.15s; display: flex; align-items: center; gap: 8px; }
                    .aesthetic-option:hover { background: #475569; color: #fff; }
                    .aesthetic-option.active { background: #3B82F6; color: #fff; }
                  </style>
                  <div class="aesthetic-option active" onclick="selectAesthetic(this, 'none', 'Default (Auto)')">✓ Default (Auto)</div>
                  <div class="aesthetic-option" onclick="selectAesthetic(this, 'solid', 'Solid (Flat)')"><span style="width:12px; display:inline-block"></span>Solid (Flat)</div>
                  <div class="aesthetic-option" onclick="selectAesthetic(this, 'glass', 'Premium Glassmorphic')"><span style="width:12px; display:inline-block"></span>Premium Glassmorphic</div>
                  <div class="aesthetic-option" onclick="selectAesthetic(this, 'neumo', 'Neumorphic (Soft UI)')"><span style="width:12px; display:inline-block"></span>Neumorphic (Soft UI)</div>
                  <div class="aesthetic-option" onclick="selectAesthetic(this, 'skeuo', 'Skeuomorphic (Tactile)')"><span style="width:12px; display:inline-block"></span>Skeuomorphic (Tactile)</div>
                  <div class="aesthetic-option" onclick="selectAesthetic(this, 'cred', 'CRED (Prestige Dark)')"><span style="width:12px; display:inline-block"></span>CRED (Prestige Dark)</div>
                  <div class="aesthetic-option" onclick="selectAesthetic(this, 'brutal', 'Brutalist')"><span style="width:12px; display:inline-block"></span>Brutalist</div>
                  <div class="aesthetic-option" onclick="selectAesthetic(this, 'minimal', 'Minimalist Wireframe')"><span style="width:12px; display:inline-block"></span>Minimalist Wireframe</div>
                </div>
              </div>

              <div style="flex:1;"></div>
              
              <div style="display: flex; align-items: center; gap: 8px;">
                <span style="font-size:10px; font-weight:700; color:#94A3B8; letter-spacing:0.08em; text-transform:uppercase;">Viewport</span>
                <button class="comp-modal-theme-btn" id="mobileViewToggle" onclick="toggleMobileView(this)" style="background: #0F172A; color: #fff; border: 1px solid #0F172A; border-radius: 8px; padding: 6px 14px; box-shadow: 0 4px 12px rgba(15,23,42,0.2); transition: all 0.2s;">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-right: 6px; vertical-align: middle;"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>
                  Mobile View
                </button>
              </div>
            </div>
            <div class="comp-modal-canvas" id="compModalCanvas"></div>
          </div>
          <div class="comp-modal-info-pane" style="display: flex; flex-direction: column; padding: 0;">
            
            <!-- Structured Tab Bar -->
            <div style="display: flex; border-bottom: 1px solid #E2E8F0; background: #FAFAFA; padding: 0 24px;">
              <button class="modal-tab-btn active" onclick="switchModalTab('rationale', this)" style="padding: 16px 20px; font-size: 13px; font-weight: 700; color: #0F172A; background: transparent; border: none; border-bottom: 2px solid #0F172A; cursor: pointer; transition: all 0.2s;">UX Analysis</button>
              <button class="modal-tab-btn" onclick="switchModalTab('code', this)" style="padding: 16px 20px; font-size: 13px; font-weight: 600; color: #64748B; background: transparent; border: none; border-bottom: 2px solid transparent; cursor: pointer; transition: all 0.2s;">Code Snippet</button>
            </div>
            
            <!-- Tab Contents -->
            <div style="flex: 1; overflow-y: auto; padding: 24px; position: relative;">
              <div id="compModalRationale" class="modal-tab-content active" style="display: block;">
                <!-- Dynamic Rationale Rendered Here -->
              </div>
              
              <div id="compModalCodeWrapper" class="modal-tab-content" style="display: none; height: 100%; position: relative;">
                <button onclick="copyModalCode()" style="position: absolute; top: 12px; right: 12px; background: #fff; color: #0F172A; border: 1px solid #E2E8F0; padding: 8px 16px; border-radius: 8px; font-size: 12px; font-weight: 700; cursor: pointer; box-shadow: 0 4px 6px rgba(0,0,0,0.05); z-index: 10; display: flex; align-items: center; gap: 6px; transition: all 0.2s;" onmouseover="this.style.background='#F8FAFC'" onmouseout="this.style.background='#fff'">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                  Copy Code
                </button>
                <div class="comp-modal-code" id="compModalCode" style="margin-top: 0; padding-top: 64px; padding-left: 24px; padding-right: 24px; padding-bottom: 24px; background: #0F172A; border-radius: 12px; height: calc(100% - 52px); overflow-y: auto; white-space: pre-wrap; font-family: monospace; font-size: 13px; color: #F8FAFC;"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
  const container = document.createElement('div');
  container.innerHTML = modalHTML;
  document.body.appendChild(container);

  const modalOverlay = document.getElementById('compDetailModal');
  const modalClose = document.getElementById('compModalClose');
  const modalCanvas = document.getElementById('compModalCanvas');
  const modalId = document.getElementById('compModalId');
  const modalTitle = document.getElementById('compModalTitle');
  const modalCode = document.getElementById('compModalCode');
  const modalRationale = document.getElementById('compModalRationale');

  // Close handlers
  modalClose.addEventListener('click', () => { modalOverlay.classList.remove('active'); });
  modalOverlay.addEventListener('click', () => { modalOverlay.classList.remove('active'); });

  // Add click to all component cards
  document.querySelectorAll('.component-card').forEach(card => {
    // Add hover effect to indicate clickability
    card.style.cursor = 'pointer';
    card.style.transition = 'all 0.2s ease';
    card.addEventListener('mouseenter', () => { card.style.transform = 'translateY(-2px)'; card.style.boxShadow = 'var(--shadow-md)'; });
    card.addEventListener('mouseleave', () => { card.style.transform = 'none'; card.style.boxShadow = 'none'; });

    card.addEventListener('click', (e) => {
      e.preventDefault();

      const idEl = card.querySelector('.component-card-id');
      const titleEl = card.querySelector('.component-card-model');
      const previewEl = card.querySelector('.component-card-preview');

      if (!idEl || !titleEl || !previewEl) return;

      modalId.textContent = idEl.textContent;
      modalTitle.textContent = titleEl.textContent;
      
      // Populate psychological rationale
      modalRationale.innerHTML = getComponentRationale(idEl.textContent, titleEl.textContent);
      
      // Clone the preview content
      modalCanvas.innerHTML = '';
      const clone = previewEl.cloneNode(true);
      clone.style.width = '100%';
      clone.style.maxWidth = '100%';
      clone.style.background = 'transparent';
      clone.style.boxShadow = 'none';
      clone.style.border = 'none';
      clone.style.padding = '0';
      
      // Normalize hardcoded inline colors to CSS variables so themes can override them!
      const normalizeColors = (node) => {
        const els = [node, ...node.querySelectorAll('*')];
        els.forEach(el => {
          if (!el.style) return;
          const s = el.style;
          
          // Backgrounds
          if (s.backgroundColor === 'rgb(255, 255, 255)') s.setProperty('background-color', 'var(--comp-bg-primary, #ffffff)', 'important');
          else if (s.backgroundColor === 'rgb(248, 250, 252)') s.setProperty('background-color', 'var(--comp-bg-secondary, #F8FAFC)', 'important');
          else if (s.backgroundColor === 'rgb(241, 245, 249)') s.setProperty('background-color', 'var(--comp-bg-tertiary, #F1F5F9)', 'important');
          else if (s.backgroundColor === 'rgb(15, 23, 42)') s.setProperty('background-color', 'var(--comp-bg-dark, #0F172A)', 'important');
          
          // Text
          if (s.color === 'rgb(15, 23, 42)') s.setProperty('color', 'var(--comp-text-primary, #0F172A)', 'important');
          else if (s.color === 'rgb(51, 65, 85)') s.setProperty('color', 'var(--comp-text-secondary, #334155)', 'important');
          else if (s.color === 'rgb(100, 116, 139)') s.setProperty('color', 'var(--comp-text-tertiary, #64748B)', 'important');
          else if (s.color === 'rgb(148, 163, 184)') s.setProperty('color', 'var(--comp-text-muted, #94A3B8)', 'important');
          
          // Borders
          if (s.borderColor === 'rgb(226, 232, 240)') s.setProperty('border-color', 'var(--comp-border, #E2E8F0)', 'important');
          else if (s.borderColor === 'rgb(241, 245, 249)') s.setProperty('border-color', 'var(--comp-border-light, #F1F5F9)', 'important');
        });
      };
      
      if (clone.firstElementChild) {
        normalizeColors(clone.firstElementChild);
      }
      
      // Magic Interactivity Engine: Makes static dummy components interactive!
      makeComponentInteractive(clone);
      
      // Crucial: Add a target class to the actual component for Aesthetic CSS targeting
      if (clone.firstElementChild) {
        // If the root element is just a transparent wrapper (no background/border), target its children instead
        const rootBg = clone.firstElementChild.style.backgroundColor || clone.firstElementChild.style.background;
        if (!rootBg || rootBg === 'transparent' || rootBg === 'none' || rootBg === '') {
          Array.from(clone.firstElementChild.children).forEach(child => {
            child.classList.add('cloned-component-inner');
          });
        } else {
          clone.firstElementChild.classList.add('cloned-component-inner');
        }
      }

      modalCanvas.appendChild(clone);

      // Extract raw HTML for code snippet
      let rawHTML = previewEl.innerHTML;
      
      // Basic formatting to make it readable
      rawHTML = rawHTML.replace(/></g, '>\n<');
      const lines = rawHTML.split('\n');
      let formatted = '';
      let indent = 0;
      for (const line of lines) {
        if (line.match(/^<\/[a-zA-Z0-9]+>$/)) indent = Math.max(0, indent - 1);
        formatted += '  '.repeat(indent) + line + '\n';
        if (line.match(/^<[a-zA-Z0-9]+[^>]*>$/) && !line.match(/<img|input|br|hr/)) indent++;
      }

      modalCode.innerHTML = formatted.replace(/</g, '&lt;').replace(/>/g, '&gt;').trim();
      modalOverlay.classList.add('active');
    });
  });
}

function getComponentRationale(compId, compName) {
  const id = compId.toLowerCase();
  
  // High-fidelity specific UX research data per exact category
  let what, where, why, psych;

  if (id.includes('search')) {
    what = "A specialized query interface optimized for high-speed indexing.";
    where = "Global headers, dense data tables, and deep navigational hierarchies.";
    why = "Employs an expanded active state to prevent mis-taps on mobile, alongside real-time predictive text.";
    psych = "Reduces interaction cost. Immediate visual feedback (predictive search) leverages the peak-end rule, making the system feel significantly faster.";
  } else if (id.includes('otp') || id.includes('pin')) {
    what = "A high-friction, segmented input cluster for secure credential entry.";
    where = "Payment authorization, MFA verifications, and onboarding flows.";
    why = "Segmenting the input physically separates the data points, which aligns with how human working memory chunks numbers.";
    psych = "Chunking (Miller's Law). Users can recall and enter 6-digit OTPs faster when visually separated, significantly dropping abandonment rates during checkout.";
  } else if (id.includes('sidebar') || id.includes('nav')) {
    what = "A structural spatial map anchoring the user to the core product hierarchy.";
    where = "Persistent left-rail on desktop, and hidden drawer on mobile viewports.";
    why = "Uses 'Glass Brutalist' translucent overlays on mobile to maintain context, and solid dark themes on desktop for clear spatial separation.";
    psych = "Context Preservation. The user never feels 'lost' because the navigation anchors them, utilizing spatial memory to build product mastery over time.";
  } else if (id.includes('card') || id.includes('container')) {
    what = "A foundational spatial container tailored for dense financial data clustering.";
    where = "Used as the primary structural unit in dashboards, feeds, and detail views.";
    why = "Features explicit elevation mapping (shadows) to establish Z-index hierarchy and interactivity.";
    psych = "Utilizes the Law of Common Region to group related financial metrics, significantly reducing cognitive load (Hick's Law).";
  } else if (id.includes('chart') || id.includes('analytic') || id.includes('infographic')) {
    what = "A condensed data visualization module rendering complex financial trends.";
    where = "Analytics dashboards, financial summaries, and performance tracking screens.";
    why = "Avoids dense tabular data in favor of immediate, scannable visual patterns using Rentenpe's semantic color system (Green/Red).";
    psych = "Triggers immediate System 1 thinking (fast, intuitive) over System 2 thinking (analytical, slow), preventing dashboard fatigue when parsing dense numbers.";
  } else if (id.includes('button') || id.includes('fab') || id.includes('action')) {
    what = "A high-fidelity interactive trigger designed for primary conversion paths.";
    where = "Form submissions, navigation triggers, modal confirmations, and settings toggles.";
    why = "Features a distinct 3D elevation profile and active-state compression to provide satisfying tactile feedback on tap.";
    psych = "Optimized for Fitts's Law with expanded hit areas. The tactile visual feedback (shadow reduction on click) satisfies the user's neurological need for system confirmation.";
  } else if (id.includes('toast') || id.includes('skeleton') || id.includes('feedback')) {
    what = "A transient or placeholder communication layer regarding system state.";
    where = "Post-action confirmations (Toasts) or pre-data loading states (Skeletons).";
    why = "Skeletons prevent layout shift and maintain the illusion of speed. Toasts provide non-blocking confirmation.";
    psych = "Addresses the Visibility of System Status heuristic. Skeletons reduce perceived wait times, while Toasts provide dopamine-releasing task completion feedback without interrupting workflow.";
  } else if (id.includes('reward') || id.includes('streak')) {
    what = "A gamified interaction token designed to reward positive financial behavior.";
    where = "Loyalty hubs, post-transaction success screens, and user profiles.";
    why = "Utilizes highly skeuomorphic, premium styling (dark mode, gold gradients) to make digital achievements feel like tangible assets.";
    psych = "Leverages Variable Rewards and the Endowed Progress Effect, releasing dopamine and building habit-forming loops (Nir Eyal's Hook Model).";
  } else if (id.includes('dropdown') || id.includes('select')) {
    what = "A space-saving disclosure widget for selecting from a mutually exclusive list.";
    where = "Complex settings panels, filtering engines, and dense data entry forms.";
    why = "Replaces radio groups when options exceed 5 items, utilizing a custom floating UI to prevent clipping issues on mobile.";
    psych = "Progressive Disclosure. Hides complexity until explicitly requested by the user, adhering to the principle of least astonishment.";
  } else if (id.includes('upload') || id.includes('file')) {
    what = "A designated spatial zone for asynchronous binary data transfer.";
    where = "KYC document submissions, lease agreement uploads, and profile management.";
    why = "Features a large dashed 'drop zone' to explicitly signal affordance for drag-and-drop interactions on desktop.";
    psych = "Provides immediate micro-interactions (border highlight on hover/drag) to confirm the system's readiness, reducing anxiety during sensitive data transfers.";
  } else if (id.includes('password') || id.includes('auth')) {
    what = "A highly secure, masked input field with inline validation mechanics.";
    where = "Authentication gates, profile security updates, and critical credential creation.";
    why = "Integrates inline strength meters and visibility toggles to prevent the most common frustration: mistyping unseen characters.";
    psych = "The illusion of security is as important as actual security. The masking delay and strength feedback build immense trust in the platform's integrity.";
  } else {
    // Highly intelligent fallback for any unmapped component
    what = `A structurally optimized ${compName.toLowerCase()} primitive designed explicitly for the Rentenpe ecosystem.`;
    where = `Deployed across the interface where consistent, predictable ${compName.toLowerCase()} interactions are required.`;
    why = `Engineered to strictly align with the 'Glass Brutalist' design language, ensuring cross-platform visual and tactile uniformity.`;
    psych = `Reduces cognitive friction through Jakob's Law. Users can instinctively predict how this element will behave based on prior experiences with premium fintech applications.`;
  }

  return `
    <div style="display: grid; grid-template-columns: 1fr; gap: 16px;">
      
      <!-- Card 1: WHAT -->
      <div style="background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 16px; padding: 20px; box-shadow: inset 0 2px 4px rgba(255,255,255,0.8);">
        <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
          <div style="width: 28px; height: 28px; background: #10B981; color: #fff; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: 800;">1</div>
          <h5 style="font-size: 11px; font-weight: 800; color: #0F172A; text-transform: uppercase; letter-spacing: 0.08em; margin: 0;">What is this?</h5>
        </div>
        <p style="font-size: 13px; color: #475569; line-height: 1.6; margin: 0; font-weight: 500;">${what}</p>
      </div>

      <!-- Card 2: WHERE -->
      <div style="background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 16px; padding: 20px; box-shadow: inset 0 2px 4px rgba(255,255,255,0.8);">
        <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
          <div style="width: 28px; height: 28px; background: #3B82F6; color: #fff; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: 800;">2</div>
          <h5 style="font-size: 11px; font-weight: 800; color: #0F172A; text-transform: uppercase; letter-spacing: 0.08em; margin: 0;">Where to use</h5>
        </div>
        <p style="font-size: 13px; color: #475569; line-height: 1.6; margin: 0; font-weight: 500;">${where}</p>
      </div>

      <!-- Card 3: WHY -->
      <div style="background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 16px; padding: 20px; box-shadow: inset 0 2px 4px rgba(255,255,255,0.8);">
        <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
          <div style="width: 28px; height: 28px; background: #8B5CF6; color: #fff; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: 800;">3</div>
          <h5 style="font-size: 11px; font-weight: 800; color: #0F172A; text-transform: uppercase; letter-spacing: 0.08em; margin: 0;">Design Rationale</h5>
        </div>
        <p style="font-size: 13px; color: #475569; line-height: 1.6; margin: 0; font-weight: 500;">${why}</p>
      </div>

      <!-- Card 4: PSYCHOLOGY (Premium Dark Card) -->
      <div style="background: linear-gradient(135deg, #0F172A 0%, #1E293B 100%); border: 1px solid #334155; border-radius: 16px; padding: 20px; box-shadow: 0 12px 24px rgba(0,0,0,0.1); position: relative; overflow: hidden;">
        <!-- decorative bg -->
        <div style="position: absolute; top: -20px; right: -20px; width: 100px; height: 100px; background: radial-gradient(circle, rgba(245,158,11,0.15) 0%, rgba(0,0,0,0) 70%); border-radius: 50%;"></div>
        
        <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px; position: relative; z-index: 2;">
          <div style="width: 28px; height: 28px; background: #F59E0B; color: #fff; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: 800;">4</div>
          <h5 style="font-size: 11px; font-weight: 800; color: #fff; text-transform: uppercase; letter-spacing: 0.08em; margin: 0;">UX Science</h5>
        </div>
        <p style="font-size: 13px; color: #E2E8F0; line-height: 1.6; margin: 0; font-weight: 500; position: relative; z-index: 2;">${psych}</p>
      </div>

    </div>
  `;
}

window.setModalBg = function(btn, color) {
  const siblings = btn.parentElement.querySelectorAll('.comp-modal-theme-btn');
  siblings.forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('compModalCanvas').style.backgroundColor = color;
};

window.toggleAestheticDropdown = function() {
  const menu = document.getElementById('customAestheticDropdownMenu');
  menu.style.display = menu.style.display === 'none' ? 'block' : 'none';
};

window.selectAesthetic = function(el, theme, label) {
  // Update button label
  document.getElementById('customAestheticDropdownLabel').textContent = label;
  
  // Update active state in menu
  const options = el.parentElement.querySelectorAll('.aesthetic-option');
  options.forEach(opt => {
    opt.classList.remove('active');
    opt.innerHTML = opt.innerHTML.replace('✓ ', '<span style="width:12px; display:inline-block"></span>');
  });
  el.classList.add('active');
  el.innerHTML = el.innerHTML.replace('<span style="width:12px; display:inline-block"></span>', '✓ ');
  
  // Hide menu
  document.getElementById('customAestheticDropdownMenu').style.display = 'none';

  // Apply aesthetic to canvas
  const canvas = document.getElementById('compModalCanvas');
  canvas.className = 'comp-modal-canvas';
  if (theme !== 'none') {
    canvas.classList.add(`aesthetic-${theme}`);
  }
};

// Close dropdown when clicking outside
document.addEventListener('click', (e) => {
  const btn = document.getElementById('customAestheticDropdownBtn');
  const menu = document.getElementById('customAestheticDropdownMenu');
  if (menu && btn && !btn.contains(e.target) && !menu.contains(e.target)) {
    menu.style.display = 'none';
  }
});

window.switchModalTab = function(tabId, btn) {
  // Update buttons
  const buttons = btn.parentElement.querySelectorAll('.modal-tab-btn');
  buttons.forEach(b => {
    b.classList.remove('active');
    b.style.color = '#64748B';
    b.style.fontWeight = '600';
    b.style.borderBottomColor = 'transparent';
  });
  
  btn.classList.add('active');
  btn.style.color = '#0F172A';
  btn.style.fontWeight = '700';
  btn.style.borderBottomColor = '#0F172A';

  // Update content
  document.getElementById('compModalRationale').style.display = (tabId === 'rationale') ? 'block' : 'none';
  document.getElementById('compModalCodeWrapper').style.display = (tabId === 'code') ? 'block' : 'none';
};

window.copyModalCode = function() {
  const codeText = document.getElementById('compModalCode').innerText;
  navigator.clipboard.writeText(codeText).then(() => {
    showToast('success', 'Code copied to clipboard!');
  }).catch(() => {
    showToast('error', 'Failed to copy code.');
  });
};

window.toggleMobileView = function(btn) {
  btn.classList.toggle('active');
  const isMobile = btn.classList.contains('active');
  const canvas = document.getElementById('compModalCanvas');
  const child = canvas.firstElementChild;
  
  if (!child) return;
  
  if (isMobile) {
    const mockupHTML = `
      <div class="mobile-mockup-frame" style="width: 375px; height: 812px; border: 14px solid #111; border-radius: 48px; position: relative; background: var(--color-background); box-shadow: 0 25px 50px -12px rgba(0,0,0,0.25), inset 0 0 0 2px rgba(255,255,255,0.1); overflow: hidden; margin: 0 auto; transform: scale(0.8); opacity:0; animation: mobileIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;">
        <style>@keyframes mobileIn { 0% { opacity:0; transform: scale(0.7) translateY(40px); } 100% { opacity:1; transform: scale(0.8) translateY(0); } }</style>
        <div class="mobile-notch" style="position: absolute; top: 0; left: 50%; transform: translateX(-50%); width: 150px; height: 30px; background: #111; border-bottom-left-radius: 20px; border-bottom-right-radius: 20px; z-index: 1000;"></div>
        <div class="mobile-content" style="width: 100%; height: 100%; position: relative; overflow-y: auto; display: flex; align-items: center; justify-content: center; padding: 24px; box-sizing: border-box;">
        </div>
      </div>
    `;
    const wrapper = document.createElement('div');
    wrapper.innerHTML = mockupHTML;
    const frame = wrapper.firstElementChild;
    frame.querySelector('.mobile-content').appendChild(child);
    canvas.appendChild(frame);
    
    // Scale down the canvas content to fit the modal
    canvas.style.alignItems = 'center';
  } else {
    // Extract from mobile frame
    const frame = canvas.querySelector('.mobile-mockup-frame');
    if (frame) {
      const content = frame.querySelector('.mobile-content').firstElementChild;
      canvas.innerHTML = '';
      canvas.appendChild(content);
    }
  }
};

/* ── MAGIC INTERACTIVITY ENGINE ── */
// Analyzes static dummy HTML and injects real Javascript interactivity
window.makeComponentInteractive = function(clone) {
  clone.querySelectorAll('*').forEach(el => {
    const s = el.style;
    const text = el.innerText || '';
    
    // 1. Inputs & Textareas -> Make them typable!
    const isInputBg = s.background === 'rgb(255, 255, 255)' || s.background === '#fff' || s.backgroundColor === 'transparent' || s.backgroundColor.includes('var(--comp-bg-primary') || s.backgroundColor.includes('var(--comp-bg-secondary');
    if ((el.tagName === 'DIV' && (s.border || s.borderBottom) && isInputBg) || el.tagName === 'INPUT') {
      if ((text.length < 50 && !el.children.length) || el.tagName === 'INPUT') {
        el.contentEditable = "true";
        el.style.outline = "none";
        el.style.cursor = "text";
        el.addEventListener('focus', () => { 
          el.style.borderColor = '#3B82F6'; 
          el.style.boxShadow = '0 0 0 3px rgba(59, 130, 246, 0.2)';
          el.style.transition = 'all 0.2s';
        });
        el.addEventListener('blur', () => { 
          el.style.borderColor = s.borderColor; 
          el.style.boxShadow = 'none';
        });
      }
    }

    // 2. Buttons & Badges -> Add click ripples and scale physics
    if ((el.tagName === 'DIV' && s.backgroundColor && s.borderRadius && text.length > 0 && text.length < 30) || el.tagName === 'BUTTON') {
      // Exclude large structural containers
      if (parseInt(s.width) > 300 || parseInt(s.height) > 300) return;
      
      const bgColor = s.backgroundColor || window.getComputedStyle(el).backgroundColor || '';
      
      el.style.cursor = 'pointer';
      el.style.transition = 'all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)';
      
      // Determine if it's a solid button that should get a premium 3D glow
      const isSolid = bgColor && bgColor !== 'transparent' && bgColor !== 'rgba(0, 0, 0, 0)' && !bgColor.includes('248, 250, 252'); // skip ghost/grey
      
      let shadowStr = 'none';
      let shadowColor = 'rgba(15, 23, 42, 0.35)'; // Default dark shadow
      
      if (isSolid) {
        if (bgColor.includes('59, 130, 246')) shadowColor = 'rgba(59, 130, 246, 0.5)'; // Blue
        else if (bgColor.includes('16, 185, 129')) shadowColor = 'rgba(16, 185, 129, 0.5)'; // Green
        else if (bgColor.includes('239, 68, 68')) shadowColor = 'rgba(239, 68, 68, 0.5)'; // Red
        else if (bgColor.includes('245, 158, 11')) shadowColor = 'rgba(245, 158, 11, 0.5)'; // Yellow
        
        // 3D Glassmorphic Glow Effect
        shadowStr = `inset 0 1.5px 1px rgba(255, 255, 255, 0.2), inset 0 -1px 1px rgba(0, 0, 0, 0.1), 0 8px 16px -4px ${shadowColor}`;
        el.style.boxShadow = shadowStr;
        el.style.borderTop = '1px solid rgba(255, 255, 255, 0.1)';
      }
      
      el.addEventListener('mouseenter', () => { 
        el.style.transform = 'translateY(-2px) scale(1.02)'; 
        if (isSolid) el.style.boxShadow = `inset 0 1.5px 1px rgba(255, 255, 255, 0.25), inset 0 -1px 1px rgba(0, 0, 0, 0.1), 0 14px 24px -6px ${shadowColor}`;
      });
      el.addEventListener('mouseleave', () => { 
        el.style.transform = 'translateY(0) scale(1)'; 
        if (isSolid) el.style.boxShadow = shadowStr;
      });
      el.addEventListener('mousedown', (e) => { 
        e.stopPropagation(); 
        el.style.transform = 'translateY(1px) scale(0.96)'; 
        if (isSolid) el.style.boxShadow = `inset 0 1px 1px rgba(255, 255, 255, 0.1), inset 0 2px 4px rgba(0, 0, 0, 0.2), 0 2px 4px -1px ${shadowColor}`;
      });
      el.addEventListener('mouseup', (e) => { 
        e.stopPropagation(); 
        el.style.transform = 'translateY(-2px) scale(1.02)'; 
        if (isSolid) el.style.boxShadow = `inset 0 1.5px 1px rgba(255, 255, 255, 0.25), inset 0 -1px 1px rgba(0, 0, 0, 0.1), 0 14px 24px -6px ${shadowColor}`;
      });
    }

    // 3. Toggle Switches (Mathematically precise pill & knob containment)
    const isPill = s.borderRadius && (parseInt(s.borderRadius) >= 14 || s.borderRadius === '99px' || s.borderRadius === '9999px');
    if (isPill && el.children.length === 1) {
      const child = el.children[0];
      const isKnob = child.style.borderRadius === '50%' || child.style.borderRadius === '99px' || child.style.borderRadius === '9999px';
      
      const trackW = parseInt(s.width) || el.offsetWidth || 48;
      const trackH = parseInt(s.height) || el.offsetHeight || 28;
      
      // Target actual switch tracks (dimensions roughly 32-90px wide, 16-50px high)
      if (isKnob && trackW >= 32 && trackW <= 90 && trackH >= 16 && trackH <= 50) {
        el.style.cursor = 'pointer';
        
        const knobW = parseInt(child.style.width) || child.offsetWidth || (trackH - 4);
        const knobH = parseInt(child.style.height) || child.offsetHeight || (trackH - 4);
        
        // Exact vertical and horizontal insets (2px default)
        const insetY = Math.max(1, Math.round((trackH - knobH) / 2)) || 2;
        const insetX = parseInt(child.style.left) || insetY || 2;
        
        // Exact travel distance: track width minus knob width minus both insets
        const travel = Math.max(0, trackW - knobW - (2 * insetX));
        
        // Determine initial state:
        const currentTransform = child.style.transform || '';
        const matchTranslate = currentTransform.match(/translateX\(([-0-9.]+)px\)/);
        const translatedX = matchTranslate ? parseFloat(matchTranslate[1]) : 0;
        
        const hasRight = child.style.right && parseInt(child.style.right) > 0;
        const bg = s.background || s.backgroundColor || '';
        const isGreen = bg.includes('16, 185, 129') || bg.includes('10B981') || bg.includes('059669');
        const isBlue = bg.includes('59, 130, 246') || bg.includes('3B82F6') || bg.includes('37, 99, 235') || bg.includes('2563EB');
        const isNeonDark = (bg.includes('18181B') || bg.includes('09090B')) && (s.borderColor && s.borderColor.includes('CCFF00'));
        
        let isOn = hasRight || (translatedX > 5) || isGreen || isBlue || isNeonDark;
        
        // Remember original active styles
        const activeBg = s.background || (isNeonDark ? '#18181B' : (isBlue ? '#2563EB' : '#10B981'));
        const activeBorder = s.borderColor || (isNeonDark ? '#CCFF00' : 'transparent');
        
        // NORMALIZE POSITIONING: Always anchor at left & top, NEVER right
        child.style.position = 'absolute';
        child.style.top = insetY + 'px';
        child.style.left = insetX + 'px';
        child.style.right = 'auto';
        child.style.margin = '0';
        
        if (isOn) {
          child.style.transform = `translateX(${travel}px)`;
        } else {
          child.style.transform = 'translateX(0px)';
          el.style.background = '#E2E8F0';
          if (activeBorder && activeBorder !== 'transparent') el.style.borderColor = '#CBD5E1';
        }
        
        if (window.getComputedStyle(el).position === 'static') {
          el.style.position = 'relative';
        }
        
        el.onclick = (e) => {
          e.stopPropagation();
          isOn = !isOn;
          
          child.style.transition = 'transform 0.24s cubic-bezier(0.4, 0, 0.2, 1)';
          el.style.transition = 'background 0.24s ease, border-color 0.24s ease';
          
          if (isOn) {
            el.style.background = activeBg;
            if (activeBorder && activeBorder !== 'transparent') el.style.borderColor = activeBorder;
            child.style.transform = `translateX(${travel}px)`;
          } else {
            const isDark = el.closest('.dark') || document.body.classList.contains('dark') || (el.closest('[style*="#09090B"]') || el.closest('[style*="#0F172A"]'));
            el.style.background = isDark ? '#27272A' : '#E2E8F0';
            if (activeBorder && activeBorder !== 'transparent') el.style.borderColor = isDark ? '#3F3F46' : '#CBD5E1';
            child.style.transform = 'translateX(0px)';
          }
        };
      }
    }

    // 4. Interactive Checkbox Cards & Custom Checkboxes
    if (el.innerText && el.innerText.trim() === '✓' && el.offsetWidth <= 28 && el.offsetHeight <= 28) {
      const card = el.closest('[style*="cursor:pointer"]') || el;
      card.style.cursor = 'pointer';
      let isChecked = true;
      card.onclick = (e) => {
        e.stopPropagation();
        isChecked = !isChecked;
        if (isChecked) {
          el.style.background = '#2563EB';
          el.style.color = '#fff';
          el.style.borderColor = '#2563EB';
          el.innerText = '✓';
          if (card !== el && card.style.borderColor) {
            card.style.borderColor = '#2563EB';
            card.style.background = '#EFF6FF';
          }
        } else {
          el.style.background = '#fff';
          el.style.color = 'transparent';
          el.style.borderColor = '#CBD5E1';
          el.innerText = '';
          if (card !== el && card.style.borderColor) {
            card.style.borderColor = '#E2E8F0';
            card.style.background = '#fff';
          }
        }
      };
    }

    // 5. Password / CVV Eye Toggle
    if (el.innerText && el.innerText.trim() === '👁' && el.tagName === 'SPAN') {
      el.style.cursor = 'pointer';
      el.style.userSelect = 'none';
      let visible = true;
      el.onclick = (e) => {
        e.stopPropagation();
        visible = !visible;
        el.innerText = visible ? '👁' : '🙈';
        const container = el.parentElement;
        const valElem = container ? container.querySelector('[style*="letter-spacing"]') : null;
        if (valElem) {
          if (!valElem.dataset.realVal) valElem.dataset.realVal = valElem.innerText;
          valElem.innerText = visible ? valElem.dataset.realVal : '•••';
        }
      };
    }
  });
};

/* ── INLINE CARD TOOLBAR FUNCTIONS ── */
window.setInlineCardBg = function(btn, targetId, color) {
  // Update buttons
  const buttons = btn.parentElement.querySelectorAll('.inline-bg-btn');
  buttons.forEach(b => {
    b.classList.remove('active');
    b.classList.remove('paydash-3d-btn');
    b.style.background = 'transparent';
    b.style.color = '#475569';
    b.style.boxShadow = 'none';
    b.style.border = 'none';
  });
  
  btn.classList.add('active');
  btn.classList.add('paydash-3d-btn');
  btn.style.background = ''; // Let CSS handle it
  btn.style.color = '';
  btn.style.boxShadow = '';
  btn.style.border = 'none'; // Keep border none since segmented control uses container border

  // Update target preview bg
  const preview = document.getElementById(targetId);
  if (preview) {
    preview.style.background = color;
  }
};

window.toggleInlineMobileView = function(btn, targetId) {
  btn.classList.toggle('active');
  const isMobile = btn.classList.contains('active');
  const preview = document.getElementById(targetId);
  if (!preview) return;
  
  const child = preview.firstElementChild;
  if (!child) return;

  if (isMobile) {
    // Style active button with blue tint while keeping 3D effect
    btn.style.background = 'linear-gradient(180deg, #3B82F6 0%, #2563EB 100%)';
    btn.style.boxShadow = 'inset 0 1px 1px rgba(255, 255, 255, 0.3), 0 4px 12px rgba(37, 99, 235, 0.4)';
    
    // Wrap in mobile frame
    const mockupHTML = `
      <div class="mobile-mockup-frame" style="width: 320px; height: 600px; border: 12px solid #111; border-radius: 40px; position: relative; background: var(--color-background); box-shadow: 0 25px 50px -12px rgba(0,0,0,0.25), inset 0 0 0 2px rgba(255,255,255,0.1); overflow: hidden; margin: 0 auto; transform: scale(0.9); opacity:0; animation: mobileIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;">
        <style>@keyframes mobileIn { 0% { opacity:0; transform: scale(0.85) translateY(20px); } 100% { opacity:1; transform: scale(0.9) translateY(0); } }</style>
        <div class="mobile-notch" style="position: absolute; top: 0; left: 50%; transform: translateX(-50%); width: 120px; height: 24px; background: #111; border-bottom-left-radius: 16px; border-bottom-right-radius: 16px; z-index: 10;"></div>
        <div class="mobile-content" style="width: 100%; height: 100%; position: relative; overflow-y: auto; display: flex; align-items: center; justify-content: center; padding: 20px; box-sizing: border-box;">
        </div>
      </div>
    `;
    const wrapper = document.createElement('div');
    wrapper.innerHTML = mockupHTML;
    const frame = wrapper.firstElementChild;
    frame.querySelector('.mobile-content').appendChild(child);
    preview.appendChild(frame);
    
  } else {
    // Revert to standard 3D button
    btn.style.background = '';
    btn.style.boxShadow = '';

    
    // Extract from mobile frame
    const frame = preview.querySelector('.mobile-mockup-frame');
    if (frame) {
      const content = frame.querySelector('.mobile-content').firstElementChild;
      preview.innerHTML = '';
      preview.appendChild(content);
    }
  }
};

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize modal logic
  setTimeout(initComponentDetailPopup, 500);

  // 2. Apply Magic Interactivity Engine to all inline component cards!
  // This gives them the plush 3D buttons, dynamic colored drop shadows, and hover physics directly on the grid.
  const allPreviews = document.querySelectorAll('.component-card-preview');
  allPreviews.forEach(preview => {
    // Only target the inner component wrapper, not the preview box itself
    const innerComponent = preview.firstElementChild;
    if (innerComponent) {
      makeComponentInteractive(innerComponent);
    }
  });

  // 3. Initialize Redesigned Theme Customizer
  initGlobalThemeCustomizer();
});

/* ════════════════════════════════════════════════════════════════
   GLOBAL THEME CUSTOMIZER ENGINE
   ════════════════════════════════════════════════════════════════ */
const THEME_PRESETS = {
  rentenpe: { name: 'RentenPe Classic', primary: '#0F172A', secondary: '#3B82F6', success: '#10B981', warning: '#F59E0B' },
  cred:     { name: 'CRED Obsidian',   primary: '#0A0A0C', secondary: '#EC4899', success: '#10B981', warning: '#F59E0B' },
  indigo:   { name: 'Electric Indigo', primary: '#1E1B4B', secondary: '#6366F1', success: '#10B981', warning: '#F59E0B' },
  emerald:  { name: 'Emerald Luxury',  primary: '#064E3B', secondary: '#10B981', success: '#059669', warning: '#F59E0B' },
  amethyst: { name: 'Royal Amethyst',  primary: '#2E1065', secondary: '#8B5CF6', success: '#10B981', warning: '#F59E0B' },
  sunset:   { name: 'Sunset Copper',   primary: '#431407', secondary: '#EA580C', success: '#10B981', warning: '#F59E0B' }
};

function initGlobalThemeCustomizer() {
  const p = localStorage.getItem('theme_primary') || '#0F172A';
  const s = localStorage.getItem('theme_secondary') || '#3B82F6';
  const suc = localStorage.getItem('theme_success') || '#10B981';
  const w = localStorage.getItem('theme_warning') || '#F59E0B';

  applyCssVars(p, s, suc, w);
  syncThemeInputs(p, s, suc, w);
  updateLivePreview(p, s, suc, w);

  // Keyboard shortcut: ESC to close theme picker
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const overlay = document.getElementById('themePickerOverlay');
      if (overlay && (overlay.classList.contains('active') || overlay.style.display === 'flex')) {
        window.closeThemePicker();
      }
    }
  });
}

function applyCssVars(p, s, suc, w) {
  document.documentElement.style.setProperty('--color-primary', p);
  document.documentElement.style.setProperty('--color-text-primary', p);
  document.documentElement.style.setProperty('--color-info', s);
  document.documentElement.style.setProperty('--color-accent', s);
  document.documentElement.style.setProperty('--color-success', suc);
  document.documentElement.style.setProperty('--color-warning', w);
}

function syncThemeInputs(p, s, suc, w) {
  const pInput = document.getElementById('primaryColorInput');
  const pHex = document.getElementById('primaryHexInput');
  const pWrap = document.getElementById('primarySwatchWrap');
  if (pInput) pInput.value = p;
  if (pHex) pHex.value = p.toUpperCase();
  if (pWrap) pWrap.style.background = p;

  const sInput = document.getElementById('secondaryColorInput');
  const sHex = document.getElementById('secondaryHexInput');
  const sWrap = document.getElementById('secondarySwatchWrap');
  if (sInput) sInput.value = s;
  if (sHex) sHex.value = s.toUpperCase();
  if (sWrap) sWrap.style.background = s;

  const sucInput = document.getElementById('successColorInput');
  const sucHex = document.getElementById('successHexInput');
  const sucWrap = document.getElementById('successSwatchWrap');
  if (sucInput) sucInput.value = suc;
  if (sucHex) sucHex.value = suc.toUpperCase();
  if (sucWrap) sucWrap.style.background = suc;

  const wInput = document.getElementById('warningColorInput');
  const wHex = document.getElementById('warningHexInput');
  const wWrap = document.getElementById('warningSwatchWrap');
  if (wInput) wInput.value = w;
  if (wHex) wHex.value = w.toUpperCase();
  if (wWrap) wWrap.style.background = w;
}

function updateLivePreview(p, s, suc, w) {
  const brandDot = document.getElementById('prevBrandDot');
  if (brandDot) brandDot.style.background = p;

  const accentPill = document.getElementById('prevAccentPill');
  if (accentPill) {
    accentPill.style.color = s;
    accentPill.style.background = hexToRgba(s, 0.12);
  }

  const primaryBtn = document.getElementById('prevPrimaryBtn');
  if (primaryBtn) {
    primaryBtn.style.background = p;
    primaryBtn.style.color = '#FFFFFF';
  }

  const secondaryBtn = document.getElementById('prevSecondaryBtn');
  if (secondaryBtn) {
    secondaryBtn.style.color = s;
    secondaryBtn.style.background = hexToRgba(s, 0.1);
    secondaryBtn.style.borderColor = hexToRgba(s, 0.25);
  }

  const successBadge = document.getElementById('prevSuccessBadge');
  if (successBadge) {
    successBadge.style.color = suc;
    successBadge.style.background = hexToRgba(suc, 0.12);
  }

  const warningBadge = document.getElementById('prevWarningBadge');
  if (warningBadge) {
    warningBadge.style.color = w;
    warningBadge.style.background = hexToRgba(w, 0.12);
  }
}

function hexToRgba(hex, alpha) {
  if (!hex || hex[0] !== '#') return `rgba(0,0,0,${alpha})`;
  let c = hex.slice(1);
  if (c.length === 3) c = c.split('').map(x => x + x).join('');
  const num = parseInt(c, 16);
  if (isNaN(num)) return `rgba(0,0,0,${alpha})`;
  return `rgba(${(num >> 16) & 255}, ${(num >> 8) & 255}, ${num & 255}, ${alpha})`;
}

function renderThemePickerOverlay() {
  if (document.getElementById('themePickerOverlay')) return document.getElementById('themePickerOverlay');
  const div = document.createElement('div');
  div.innerHTML = `
  <div id="themePickerOverlay" class="theme-modal-overlay" onclick="if(event.target === this) window.closeThemePicker()">
    <div class="theme-modal-card" onclick="event.stopPropagation()">
      <div class="theme-modal-header">
        <div class="theme-modal-title-wrap">
          <div class="theme-modal-badge">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="13.5" cy="6.5" r=".5" fill="currentColor"></circle>
              <circle cx="17.5" cy="10.5" r=".5" fill="currentColor"></circle>
              <circle cx="8.5" cy="7.5" r=".5" fill="currentColor"></circle>
              <circle cx="6.5" cy="12.5" r=".5" fill="currentColor"></circle>
              <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.563-2.512 5.563-5.563C22 6.5 17.5 2 12 2z"></path>
            </svg>
          </div>
          <div>
            <h3 class="theme-modal-title">Theme Customization</h3>
            <p class="theme-modal-desc">Configure global color tokens, test live previews, and export CSS.</p>
          </div>
        </div>
        <button type="button" class="theme-modal-close-btn" onclick="window.closeThemePicker()" title="Close (Esc)" aria-label="Close modal">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>

      <div class="theme-modal-body">
        <div>
          <div class="theme-modal-section-title">
            <span>Curated Palettes</span>
            <span style="font-weight: 500; text-transform: none; font-size: 11px;">1-Click Apply</span>
          </div>
          <div class="theme-presets-grid">
            <button type="button" class="theme-preset-btn active" onclick="window.selectThemePreset('rentenpe', this)">
              <div class="theme-preset-name">RentenPe Classic</div>
              <div class="theme-preset-dots">
                <span class="theme-preset-dot" style="background:#0F172A;"></span>
                <span class="theme-preset-dot" style="background:#3B82F6;"></span>
                <span class="theme-preset-dot" style="background:#10B981;"></span>
                <span class="theme-preset-dot" style="background:#F59E0B;"></span>
              </div>
            </button>
            <button type="button" class="theme-preset-btn" onclick="window.selectThemePreset('cred', this)">
              <div class="theme-preset-name">CRED Obsidian</div>
              <div class="theme-preset-dots">
                <span class="theme-preset-dot" style="background:#0A0A0C;"></span>
                <span class="theme-preset-dot" style="background:#EC4899;"></span>
                <span class="theme-preset-dot" style="background:#10B981;"></span>
                <span class="theme-preset-dot" style="background:#F59E0B;"></span>
              </div>
            </button>
            <button type="button" class="theme-preset-btn" onclick="window.selectThemePreset('indigo', this)">
              <div class="theme-preset-name">Electric Indigo</div>
              <div class="theme-preset-dots">
                <span class="theme-preset-dot" style="background:#1E1B4B;"></span>
                <span class="theme-preset-dot" style="background:#6366F1;"></span>
                <span class="theme-preset-dot" style="background:#10B981;"></span>
                <span class="theme-preset-dot" style="background:#F59E0B;"></span>
              </div>
            </button>
            <button type="button" class="theme-preset-btn" onclick="window.selectThemePreset('emerald', this)">
              <div class="theme-preset-name">Emerald Luxury</div>
              <div class="theme-preset-dots">
                <span class="theme-preset-dot" style="background:#064E3B;"></span>
                <span class="theme-preset-dot" style="background:#10B981;"></span>
                <span class="theme-preset-dot" style="background:#059669;"></span>
                <span class="theme-preset-dot" style="background:#F59E0B;"></span>
              </div>
            </button>
            <button type="button" class="theme-preset-btn" onclick="window.selectThemePreset('amethyst', this)">
              <div class="theme-preset-name">Royal Amethyst</div>
              <div class="theme-preset-dots">
                <span class="theme-preset-dot" style="background:#2E1065;"></span>
                <span class="theme-preset-dot" style="background:#8B5CF6;"></span>
                <span class="theme-preset-dot" style="background:#10B981;"></span>
                <span class="theme-preset-dot" style="background:#F59E0B;"></span>
              </div>
            </button>
            <button type="button" class="theme-preset-btn" onclick="window.selectThemePreset('sunset', this)">
              <div class="theme-preset-name">Sunset Copper</div>
              <div class="theme-preset-dots">
                <span class="theme-preset-dot" style="background:#431407;"></span>
                <span class="theme-preset-dot" style="background:#EA580C;"></span>
                <span class="theme-preset-dot" style="background:#10B981;"></span>
                <span class="theme-preset-dot" style="background:#F59E0B;"></span>
              </div>
            </button>
          </div>
        </div>

        <div>
          <div class="theme-modal-section-title">
            <span>Color Tokens</span>
            <span style="font-weight: 500; text-transform: none; font-size: 11px;">Click Swatch or Edit HEX</span>
          </div>
          <div class="theme-token-list">
            <div class="theme-token-row">
              <div class="theme-token-info">
                <span class="theme-token-name">Primary Color</span>
                <span class="theme-token-code">--color-primary</span>
              </div>
              <div class="theme-token-ctrl">
                <div class="theme-swatch-wrap" id="primarySwatchWrap" style="background: #0F172A;" title="Pick color">
                  <input type="color" id="primaryColorInput" class="theme-swatch-input" value="#0F172A" oninput="window.handleColorInput('primary', this.value)">
                </div>
                <input type="text" id="primaryHexInput" class="theme-hex-input" value="#0F172A" maxlength="7" spellcheck="false" oninput="window.handleHexInput('primary', this.value)">
                <button type="button" class="theme-copy-hex-btn" onclick="window.copySingleHex('primaryHexInput', this)" title="Copy Hex">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                </button>
              </div>
            </div>

            <div class="theme-token-row">
              <div class="theme-token-info">
                <span class="theme-token-name">Secondary (Accent)</span>
                <span class="theme-token-code">--color-info / --color-accent</span>
              </div>
              <div class="theme-token-ctrl">
                <div class="theme-swatch-wrap" id="secondarySwatchWrap" style="background: #3B82F6;" title="Pick color">
                  <input type="color" id="secondaryColorInput" class="theme-swatch-input" value="#3B82F6" oninput="window.handleColorInput('secondary', this.value)">
                </div>
                <input type="text" id="secondaryHexInput" class="theme-hex-input" value="#3B82F6" maxlength="7" spellcheck="false" oninput="window.handleHexInput('secondary', this.value)">
                <button type="button" class="theme-copy-hex-btn" onclick="window.copySingleHex('secondaryHexInput', this)" title="Copy Hex">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                </button>
              </div>
            </div>

            <div class="theme-token-row">
              <div class="theme-token-info">
                <span class="theme-token-name">Success</span>
                <span class="theme-token-code">--color-success</span>
              </div>
              <div class="theme-token-ctrl">
                <div class="theme-swatch-wrap" id="successSwatchWrap" style="background: #10B981;" title="Pick color">
                  <input type="color" id="successColorInput" class="theme-swatch-input" value="#10B981" oninput="window.handleColorInput('success', this.value)">
                </div>
                <input type="text" id="successHexInput" class="theme-hex-input" value="#10B981" maxlength="7" spellcheck="false" oninput="window.handleHexInput('success', this.value)">
                <button type="button" class="theme-copy-hex-btn" onclick="window.copySingleHex('successHexInput', this)" title="Copy Hex">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                </button>
              </div>
            </div>

            <div class="theme-token-row">
              <div class="theme-token-info">
                <span class="theme-token-name">Warning</span>
                <span class="theme-token-code">--color-warning</span>
              </div>
              <div class="theme-token-ctrl">
                <div class="theme-swatch-wrap" id="warningSwatchWrap" style="background: #F59E0B;" title="Pick color">
                  <input type="color" id="warningColorInput" class="theme-swatch-input" value="#F59E0B" oninput="window.handleColorInput('warning', this.value)">
                </div>
                <input type="text" id="warningHexInput" class="theme-hex-input" value="#F59E0B" maxlength="7" spellcheck="false" oninput="window.handleHexInput('warning', this.value)">
                <button type="button" class="theme-copy-hex-btn" onclick="window.copySingleHex('warningHexInput', this)" title="Copy Hex">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div class="theme-modal-section-title">
            <span>Real-Time Component Preview</span>
            <span style="font-weight: 500; text-transform: none; font-size: 11px;">Instant Dynamic Feedback</span>
          </div>
          <div class="theme-preview-card">
            <div class="theme-preview-header">
              <div style="display: flex; align-items: center; gap: 8px;">
                <div id="prevBrandDot" style="width: 8px; height: 8px; border-radius: 50%; background: #0F172A;"></div>
                <span style="font-size: 12px; font-weight: 700; color: #0F172A;">RentenPe PayDash</span>
              </div>
              <span id="prevAccentPill" class="theme-preview-pill" style="background: rgba(59,130,246,0.12); color: #3B82F6;">Pro Member</span>
            </div>
            <div class="theme-preview-demo-row">
              <button type="button" id="prevPrimaryBtn" class="theme-preview-btn" style="background: #0F172A; color: #FFFFFF;">
                Primary CTA
              </button>
              <button type="button" id="prevSecondaryBtn" class="theme-preview-btn" style="background: rgba(59,130,246,0.1); color: #3B82F6; border: 1px solid rgba(59,130,246,0.2);">
                Explore →
              </button>
              <span id="prevSuccessBadge" class="theme-preview-pill" style="background: rgba(16,185,129,0.12); color: #10B981;">
                ● Active
              </span>
              <span id="prevWarningBadge" class="theme-preview-pill" style="background: rgba(245,158,11,0.12); color: #F59E0B;">
                ● Due in 2d
              </span>
            </div>
          </div>
        </div>
      </div>

      <div class="theme-modal-footer">
        <div class="theme-footer-left">
          <button type="button" class="theme-footer-btn-secondary" onclick="window.resetThemeToDefault()" title="Reset to RentenPe default">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path></svg>
            Reset
          </button>
          <button type="button" id="copyCssBtn" class="theme-footer-btn-secondary" onclick="window.copyThemeCSS()" title="Copy CSS Variables">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            <span>Copy CSS</span>
          </button>
        </div>
        <div class="theme-footer-right">
          <button type="button" class="theme-footer-btn-secondary" onclick="window.closeThemePicker()">Cancel</button>
          <button type="button" id="applyThemeBtn" class="theme-apply-btn" onclick="window.applyGlobalTheme()">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
            <span>Apply Globally</span>
          </button>
        </div>
      </div>
    </div>
  </div>`;
  document.body.appendChild(div.firstElementChild);
  return document.getElementById('themePickerOverlay');
}

window.openThemePicker = function() {
  let overlay = document.getElementById('themePickerOverlay');
  if (!overlay) {
    overlay = renderThemePickerOverlay();
  }
  if (!overlay) return;
  overlay.style.display = 'flex';
  setTimeout(() => overlay.classList.add('active'), 10);
  
  const p = localStorage.getItem('theme_primary') || '#0F172A';
  const s = localStorage.getItem('theme_secondary') || '#3B82F6';
  const suc = localStorage.getItem('theme_success') || '#10B981';
  const w = localStorage.getItem('theme_warning') || '#F59E0B';
  syncThemeInputs(p, s, suc, w);
  updateLivePreview(p, s, suc, w);
};

window.closeThemePicker = function() {
  const overlay = document.getElementById('themePickerOverlay');
  if (!overlay) return;
  overlay.classList.remove('active');
  setTimeout(() => {
    overlay.style.display = 'none';
  }, 200);
};

window.handleColorInput = function(token, val) {
  const hex = val.toUpperCase();
  const hexInput = document.getElementById(`${token}HexInput`);
  const swatchWrap = document.getElementById(`${token}SwatchWrap`);
  if (hexInput) hexInput.value = hex;
  if (swatchWrap) swatchWrap.style.background = hex;
  
  document.querySelectorAll('.theme-preset-btn').forEach(b => b.classList.remove('active'));
  refreshFromInputs();
};

window.handleHexInput = function(token, val) {
  let hex = val.trim();
  if (!hex.startsWith('#')) hex = '#' + hex;
  if (/^#[0-9A-Fa-f]{6}$/.test(hex)) {
    const colorInput = document.getElementById(`${token}ColorInput`);
    const swatchWrap = document.getElementById(`${token}SwatchWrap`);
    if (colorInput) colorInput.value = hex;
    if (swatchWrap) swatchWrap.style.background = hex;
    
    document.querySelectorAll('.theme-preset-btn').forEach(b => b.classList.remove('active'));
    refreshFromInputs();
  }
};

function refreshFromInputs() {
  const p = document.getElementById('primaryColorInput')?.value || '#0F172A';
  const s = document.getElementById('secondaryColorInput')?.value || '#3B82F6';
  const suc = document.getElementById('successColorInput')?.value || '#10B981';
  const w = document.getElementById('warningColorInput')?.value || '#F59E0B';
  updateLivePreview(p, s, suc, w);
}

window.selectThemePreset = function(presetKey, btn) {
  const preset = THEME_PRESETS[presetKey];
  if (!preset) return;
  
  document.querySelectorAll('.theme-preset-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  
  syncThemeInputs(preset.primary, preset.secondary, preset.success, preset.warning);
  updateLivePreview(preset.primary, preset.secondary, preset.success, preset.warning);
};

window.resetThemeToDefault = function() {
  window.selectThemePreset('rentenpe', document.querySelector('.theme-preset-btn'));
};

window.copySingleHex = function(inputId, btn) {
  const input = document.getElementById(inputId);
  if (!input) return;
  navigator.clipboard.writeText(input.value.toUpperCase()).then(() => {
    const originalHTML = btn.innerHTML;
    btn.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#10B981" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>`;
    setTimeout(() => { btn.innerHTML = originalHTML; }, 1200);
  });
};

window.copyThemeCSS = function() {
  const p = document.getElementById('primaryHexInput')?.value || '#0F172A';
  const s = document.getElementById('secondaryHexInput')?.value || '#3B82F6';
  const suc = document.getElementById('successHexInput')?.value || '#10B981';
  const w = document.getElementById('warningHexInput')?.value || '#F59E0B';
  
  const css = `:root {
  --color-primary: ${p};
  --color-text-primary: ${p};
  --color-info: ${s};
  --color-accent: ${s};
  --color-success: ${suc};
  --color-warning: ${w};
}`;

  navigator.clipboard.writeText(css).then(() => {
    const copyBtn = document.getElementById('copyCssBtn');
    if (copyBtn) {
      const origText = copyBtn.innerHTML;
      copyBtn.innerHTML = `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#10B981" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg> <span style="color:#10B981; font-weight:700;">Copied!</span>`;
      setTimeout(() => { copyBtn.innerHTML = origText; }, 1500);
    }
  });
};

window.applyGlobalTheme = function() {
  const p = document.getElementById('primaryColorInput')?.value || '#0F172A';
  const s = document.getElementById('secondaryColorInput')?.value || '#3B82F6';
  const suc = document.getElementById('successColorInput')?.value || '#10B981';
  const w = document.getElementById('warningColorInput')?.value || '#F59E0B';

  applyCssVars(p, s, suc, w);

  localStorage.setItem('theme_primary', p);
  localStorage.setItem('theme_secondary', s);
  localStorage.setItem('theme_success', suc);
  localStorage.setItem('theme_warning', w);

  const applyBtn = document.getElementById('applyThemeBtn');
  if (applyBtn) {
    applyBtn.style.background = '#10B981';
    applyBtn.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg> <span>Saved!</span>`;
  }

  setTimeout(() => {
    window.closeThemePicker();
    if (applyBtn) {
      applyBtn.style.background = '';
      applyBtn.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg> <span>Apply Globally</span>`;
    }
  }, 400);
};

