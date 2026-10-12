/**
 * RentenPe UI Kit — Complete Authentic Component Variant Engine
 * Renders authentic, pixel-perfect, interactive mobile components for EVERY category and slug.
 * Guaranteed:
 * - Icons show real SVG icon collections (Financial, Property, Security, Navigation, etc.)
 * - Dividers show real dividers (Solid with label, dashed cut, gradient shimmer, status badge, etc.)
 * - Containers show real layout containers (Elevated card, visionOS frosted glass, bento grid, etc.)
 * - Inputs show real search, email, phone, password, OTP, currency, and sliders
 * - All other sidebar components render authentic UI matching their exact purpose!
 */

const ICONS_SVG = {
  wallet: '<path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"/><path d="M3 5v14a2 2 0 0 0 2 2h16v-5"/><path d="M18 12a2 2 0 0 0 0 4h4v-4z"/>',
  creditCard: '<rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/>',
  send: '<line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>',
  receive: '<polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>',
  lightning: '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>',
  bank: '<path d="M3 21h18M3 10h18M5 10v11M9 10v11M15 10v11M19 10v11M12 2l10 5H2l10-5z"/>',
  qrCode: '<rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><path d="M10 3v4M10 10v4M14 10h4"/>',
  receipt: '<path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1-2-1z"/><line x1="8" y1="8" x2="16" y2="8"/><line x1="8" y1="12" x2="16" y2="12"/><line x1="8" y1="16" x2="12" y2="16"/>',
  shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
  shieldCheck: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/>',
  lock: '<rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
  swap: '<polyline points="16 3 21 3 21 8"/><line x1="4" y1="20" x2="21" y2="3"/><polyline points="21 16 21 21 16 21"/><line x1="15" y1="15" x2="21" y2="21"/><line x1="4" y1="4" x2="9" y2="9"/>',
  percent: '<line x1="19" y1="5" x2="5" y2="19"/><circle cx="6.5" cy="6.5" r="2.5"/><circle cx="17.5" cy="17.5" r="2.5"/>',
  home: '<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>',
  building: '<rect x="4" y="2" width="16" height="20" rx="2" ry="2"/><line x1="9" y1="6" x2="9" y2="6.01"/><line x1="15" y1="6" x2="15" y2="6.01"/><line x1="9" y1="10" x2="9" y2="10.01"/><line x1="15" y1="10" x2="15" y2="10.01"/><line x1="9" y1="14" x2="9" y2="14.01"/><line x1="15" y1="14" x2="15" y2="14.01"/><line x1="9" y1="18" x2="9" y2="18.01"/><line x1="15" y1="18" x2="15" y2="18.01"/>',
  key: '<path d="M21 2l-2 2m-1.5 1.5L12 11l-4-4-6 6 4 4 6-6 5.5-5.5z"/><circle cx="7.5" cy="16.5" r="1.5"/>',
  bed: '<path d="M2 4v16M2 8h18a2 2 0 0 1 2 2v10M2 17h20M6 8v9"/>',
  bath: '<path d="M4 12h16a2 2 0 0 1 2 2v2a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4v-2a2 2 0 0 1 2-2zM6 12V5a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1"/>',
  mapPin: '<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>',
  compass: '<circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>',
  checkCircle: '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>',
  alertCircle: '<circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>',
  wifi: '<path d="M5 12.55a11 11 0 0 1 14.08 0M1.42 9a16 16 0 0 1 21.16 0M8.53 16.11a6 6 0 0 1 6.95 0M12 20h.01"/>',
  sun: '<circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>',
  user: '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
  users: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
  search: '<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>',
  bell: '<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/>',
  fileText: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>',
  heart: '<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>',
  star: '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>',
  trendUp: '<polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>',
  barChart: '<line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/>',
  chevronRight: '<polyline points="9 18 15 12 9 6"/>',
  chevronLeft: '<polyline points="15 18 9 12 15 6"/>',
  chevronDown: '<polyline points="6 9 12 15 18 9"/>',
  chevronUp: '<polyline points="18 15 12 9 6 15"/>',
  copy: '<rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>',
  share: '<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>',
  externalLink: '<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>'
};

function renderSvg(name, size = 20, color = 'currentColor', strokeWidth = 2) {
  const path = ICONS_SVG[name] || ICONS_SVG.star;
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block;vertical-align:middle;">${path}</svg>`;
}

// ============================================================================
// 1. ICONS RENDERER (slug: icons)
// ============================================================================

function renderIconVariant(fam, icon, variantIndex) {
  const packs = [
    {
      title: 'Financial & Currency Icons',
      desc: 'High-frequency transaction & payment symbols',
      badge: 'FINTECH',
      color: '#2563EB',
      icons: [
        { id: 'wallet', name: 'Wallet' },
        { id: 'creditCard', name: 'Card' },
        { id: 'send', name: 'Send' },
        { id: 'receive', name: 'Request' },
        { id: 'lightning', name: 'Instant UPI' },
        { id: 'bank', name: 'Bank' },
        { id: 'qrCode', name: 'Scan QR' },
        { id: 'receipt', name: 'Receipt' },
        { id: 'lock', name: 'Escrow' },
        { id: 'shield', name: 'Deposit Shield' },
        { id: 'swap', name: 'Transfer' },
        { id: 'percent', name: 'Offers' }
      ]
    },
    {
      title: 'Property & Real Estate Set',
      desc: 'Architectural, amenity & unit indicators',
      badge: 'PROPERTY',
      color: '#059669',
      icons: [
        { id: 'home', name: 'House' },
        { id: 'building', name: 'Apartment' },
        { id: 'key', name: 'Digital Key' },
        { id: 'bed', name: 'Bedroom' },
        { id: 'bath', name: 'Bathroom' },
        { id: 'mapPin', name: 'Location' },
        { id: 'compass', name: 'Orientation' },
        { id: 'sun', name: 'Natural Light' },
        { id: 'shieldCheck', name: 'Verified Unit' },
        { id: 'fileText', name: 'Lease Doc' },
        { id: 'users', name: 'Roommates' },
        { id: 'wifi', name: 'Amenities' }
      ]
    },
    {
      title: 'Status, Trust & Security Badges',
      desc: 'Cryptographic confirmation & live telemetry marks',
      badge: 'SECURITY',
      color: '#10B981',
      icons: [
        { id: 'shieldCheck', name: 'KYC Verified' },
        { id: 'checkCircle', name: 'Completed' },
        { id: 'lock', name: 'SSL 256-Bit' },
        { id: 'shield', name: 'Protected' },
        { id: 'alertCircle', name: 'Action Needed' },
        { id: 'key', name: '2FA Auth' },
        { id: 'lightning', name: 'Live Pulse' },
        { id: 'star', name: 'Top Rated' }
      ]
    },
    {
      title: 'Navigation & Directional Arrows',
      desc: 'Optical wayfinding for mobile viewports',
      badge: 'NAVIGATION',
      color: '#6366F1',
      icons: [
        { id: 'chevronLeft', name: 'Back' },
        { id: 'chevronRight', name: 'Next' },
        { id: 'chevronUp', name: 'Collapse' },
        { id: 'chevronDown', name: 'Expand' },
        { id: 'compass', name: 'Wayfinding' },
        { id: 'externalLink', name: 'External' },
        { id: 'home', name: 'Home Nav' },
        { id: 'search', name: 'Find' }
      ]
    },
    {
      title: 'Lifestyle & Amenities Set',
      desc: 'Residential convenience & facility markers',
      badge: 'AMENITIES',
      color: '#D97706',
      icons: [
        { id: 'wifi', name: 'High-Speed' },
        { id: 'sun', name: 'Balcony View' },
        { id: 'home', name: 'Furnished' },
        { id: 'building', name: 'Elevator' },
        { id: 'shieldCheck', name: '24/7 Security' },
        { id: 'bell', name: 'Concierge' },
        { id: 'key', name: 'Smart Lock' },
        { id: 'bath', name: 'En-Suite' }
      ]
    },
    {
      title: 'Dark Neon Cyber System',
      desc: 'High-contrast luminescent vector indicators',
      badge: 'DARK MATRIX',
      isDark: true,
      color: '#38BDF8',
      icons: [
        { id: 'lightning', name: 'Quantum' },
        { id: 'shieldCheck', name: 'Multi-Sig' },
        { id: 'lock', name: 'Vault' },
        { id: 'qrCode', name: 'Hash Matrix' },
        { id: 'trendUp', name: 'Telemetry' },
        { id: 'compass', name: 'Mesh Node' },
        { id: 'key', name: 'Private Key' },
        { id: 'send', name: 'Broadcast' }
      ]
    },
    {
      title: 'Document & Legal Extension Set',
      desc: 'Agreements, notices & notarized deed badges',
      badge: 'DOCUMENTS',
      color: '#475569',
      icons: [
        { id: 'fileText', name: 'PDF Lease' },
        { id: 'receipt', name: 'Tax Invoice' },
        { id: 'shieldCheck', name: 'Notary Stamp' },
        { id: 'copy', name: 'Duplicate' },
        { id: 'checkCircle', name: 'Executed' },
        { id: 'share', name: 'Forward' },
        { id: 'lock', name: 'Encrypted' },
        { id: 'star', name: 'Original' }
      ]
    },
    {
      title: 'Identity Verification & Trust Seals',
      desc: 'Government KYC, bureau scores & audit passes',
      badge: 'TRUST SEALS',
      color: '#2563EB',
      icons: [
        { id: 'shieldCheck', name: 'Aadhaar OK' },
        { id: 'checkCircle', name: 'PAN Verified' },
        { id: 'star', name: 'Credit 780+' },
        { id: 'bank', name: 'Direct Plaid' },
        { id: 'user', name: 'Selfie Pass' },
        { id: 'lock', name: 'Biometric' },
        { id: 'fileText', name: 'Police Pass' },
        { id: 'shield', name: 'Fraud Shield' }
      ]
    },
    {
      title: 'Social Reactions & Community',
      desc: 'Tenant interactions, bookmarks & endorsements',
      badge: 'SOCIAL',
      color: '#EC4899',
      icons: [
        { id: 'heart', name: 'Favorite' },
        { id: 'star', name: 'Bookmarked' },
        { id: 'share', name: 'Share Unit' },
        { id: 'bell', name: 'Alerts' },
        { id: 'users', name: 'Community' },
        { id: 'user', name: 'Profile' },
        { id: 'checkCircle', name: 'Follow' },
        { id: 'lightning', name: 'Upvote' }
      ]
    },
    {
      title: 'Analytics & Metrics Visualizer',
      desc: 'Realtime portfolio telemetry and spark stats',
      badge: 'ANALYTICS',
      color: '#8B5CF6',
      icons: [
        { id: 'trendUp', name: 'Yield +14%' },
        { id: 'barChart', name: 'Ledger' },
        { id: 'percent', name: 'Cap Rate' },
        { id: 'wallet', name: 'Cash Flow' },
        { id: 'building', name: 'Occupancy' },
        { id: 'compass', name: 'Forecast' },
        { id: 'shieldCheck', name: '100% On-Time' },
        { id: 'lightning', name: 'Live Delta' }
      ]
    }
  ];

  const pack = packs[variantIndex % packs.length];
  const isDark = pack.isDark;
  const bg = isDark ? '#09090B' : '#FFFFFF';
  const border = isDark ? '#27272A' : '#E2E8F0';
  const textColor = isDark ? '#F4F4F5' : '#0F172A';
  const subColor = isDark ? '#A1A1AA' : '#64748B';
  const itemBg = isDark ? '#18181B' : '#F8FAFC';
  const itemBorder = isDark ? '#27272A' : '#E2E8F0';
  const accent = pack.color;

  let iconsHtml = pack.icons.map(ic => {
    return `<div style="display:flex;flex-direction:column;align-items:center;justify-content:center;padding:12px 8px;background:${itemBg};border:1px solid ${itemBorder};border-radius:12px;gap:8px;transition:all 0.2s cubic-bezier(0.16,1,0.3,1);cursor:pointer;" onmouseover="this.style.borderColor='${accent}';this.style.transform='translateY(-2px)';this.style.boxShadow='0 8px 16px ${accent}22';" onmouseout="this.style.borderColor='${itemBorder}';this.style.transform='translateY(0)';this.style.boxShadow='none';" title="Click to view ${ic.name}">
      <div style="width:36px;height:36px;border-radius:10px;background:${accent}18;color:${accent};display:flex;align-items:center;justify-content:center;">
        ${renderSvg(ic.id, 20, accent, 2)}
      </div>
      <span style="font-size:11px;font-weight:700;color:${textColor};text-align:center;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:100%;">${ic.name}</span>
      <span style="font-size:9px;font-family:monospace;color:${subColor};">24px · SVG</span>
    </div>`;
  }).join('');

  return `<div style="width:100%;max-width:360px;background:${bg};border:1px solid ${border};border-radius:20px;padding:20px;box-shadow:0 12px 32px rgba(0,0,0,${isDark?0.6:0.04});">
    <div style="display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:16px;padding-bottom:14px;border-bottom:1px solid ${border};">
      <div>
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:4px;">
          <span style="font-size:16px;">${icon}</span>
          <span style="font-size:15px;font-weight:800;color:${textColor};letter-spacing:-0.02em;">${fam}</span>
        </div>
        <div style="font-size:11px;color:${subColor};line-height:1.4;">${pack.desc}</div>
      </div>
      <span style="padding:4px 8px;background:${accent}18;color:${accent};border:1px solid ${accent}33;border-radius:6px;font-size:9px;font-weight:800;letter-spacing:0.08em;text-transform:uppercase;">${pack.badge}</span>
    </div>

    <!-- Icon Grid -->
    <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:8px;margin-bottom:16px;">
      ${iconsHtml}
    </div>

    <!-- Footer Specs Bar -->
    <div style="display:flex;align-items:center;justify-content:space-between;padding-top:12px;border-top:1px solid ${border};font-size:11px;color:${subColor};">
      <div style="display:flex;gap:12px;">
        <span>Scale: <strong style="color:${textColor};">16/20/24px</strong></span>
        <span>Format: <strong style="color:${accent};">Lucide SVG</strong></span>
      </div>
      <span style="font-size:10px;font-weight:700;color:${accent};cursor:pointer;">Copy SVG →</span>
    </div>
  </div>`;
}

// ============================================================================
// 2. DIVIDERS RENDERER (slug: dividers)
// ============================================================================

function renderDividerVariant(fam, icon, variantIndex) {
  switch (variantIndex) {
    case 0:
      return `<div style="width:100%;max-width:320px;background:#fff;border:1px solid #E2E8F0;border-radius:18px;padding:24px;display:flex;flex-direction:column;gap:16px;">
        <div style="font-size:13px;font-weight:700;color:#0F172A;">Sign in to your account</div>
        <button style="width:100%;padding:10px;background:#F8FAFC;border:1px solid #E2E8F0;border-radius:10px;font-size:12px;font-weight:700;color:#0F172A;display:flex;align-items:center;justify-content:center;gap:8px;">
          <span>🌐</span> Continue with Google
        </button>
        <div style="display:flex;align-items:center;width:100%;">
          <div style="flex:1;height:1px;background:#E2E8F0;"></div>
          <span style="font-size:11px;font-weight:700;color:#94A3B8;padding:0 14px;letter-spacing:0.05em;">OR CONTINUE WITH</span>
          <div style="flex:1;height:1px;background:#E2E8F0;"></div>
        </div>
        <input type="text" placeholder="name@rentenpe.com" style="width:100%;padding:10px 14px;border:1px solid #E2E8F0;border-radius:10px;font-size:12px;outline:none;" readonly>
      </div>`;

    case 1:
      return `<div style="width:100%;max-width:320px;background:#fff;border:1px solid #E2E8F0;border-radius:18px;overflow:hidden;box-shadow:0 8px 24px rgba(0,0,0,0.04);">
        <div style="padding:20px;background:#FAFAFA;">
          <div style="font-size:11px;font-weight:800;color:#64748B;letter-spacing:0.05em;text-transform:uppercase;">OFFICIAL RENT RECEIPT</div>
          <div style="font-size:24px;font-weight:900;color:#0F172A;margin:4px 0;">₹28,500.00</div>
          <div style="font-size:11px;color:#10B981;font-weight:700;">● Paid on Oct 1, 2026</div>
        </div>
        <div style="position:relative;background:#fff;padding:8px 0;">
          <div style="border-top:2px dashed #CBD5E1;width:100%;"></div>
          <div style="text-align:center;font-size:10px;font-weight:800;color:#94A3B8;letter-spacing:0.1em;margin-top:4px;">✂ TEAR VOUCHER HERE</div>
        </div>
        <div style="padding:16px 20px;display:flex;justify-content:space-between;font-size:12px;">
          <span style="color:#64748B;">Unit 402, Oakwood</span>
          <span style="font-family:monospace;font-weight:700;color:#0F172A;">#RNT-8902</span>
        </div>
      </div>`;

    case 2:
      return `<div style="width:100%;max-width:320px;background:#fff;border:1px solid #E2E8F0;border-radius:18px;padding:24px;display:flex;flex-direction:column;gap:18px;">
        <div style="display:flex;justify-content:space-between;align-items:center;">
          <div><div style="font-size:11px;color:#64748B;">Total Escrow Holdings</div><div style="font-size:22px;font-weight:800;color:#0F172A;">₹1,45,000</div></div>
          <span style="padding:4px 10px;background:#EFF6FF;color:#2563EB;border-radius:99px;font-size:11px;font-weight:700;">ACTIVE</span>
        </div>
        <div style="height:2px;background:linear-gradient(90deg, rgba(37,99,235,0) 0%, #2563EB 50%, rgba(139,92,246,0) 100%);border-radius:99px;"></div>
        <div style="display:flex;justify-content:space-between;font-size:12px;color:#64748B;">
          <span>Interest Earned (YTD)</span>
          <strong style="color:#059669;">+₹4,280.00</strong>
        </div>
      </div>`;

    case 3:
      return `<div style="width:100%;max-width:320px;background:#fff;border:1px solid #E2E8F0;border-radius:18px;padding:24px;display:flex;flex-direction:column;gap:16px;">
        <div style="font-size:14px;font-weight:800;color:#0F172A;">Lease Verification Flow</div>
        <div style="display:flex;align-items:center;width:100%;">
          <div style="flex:1;height:1px;background:#E2E8F0;"></div>
          <span style="padding:4px 12px;background:#ECFDF5;border:1px solid #A7F3D0;color:#059669;border-radius:99px;font-size:10px;font-weight:800;letter-spacing:0.05em;margin:0 10px;">
            ● AADHAAR VERIFIED
          </span>
          <div style="flex:1;height:1px;background:#E2E8F0;"></div>
        </div>
        <div style="padding:12px;background:#F8FAFC;border-radius:10px;font-size:12px;color:#475569;">
          Next step: Digital signature execution via Aadhaar OTP.
        </div>
      </div>`;

    case 4:
      return `<div style="width:100%;max-width:320px;background:#fff;border:1px solid #E2E8F0;border-radius:18px;padding:24px;text-align:center;display:flex;flex-direction:column;gap:14px;">
        <div style="font-size:14px;font-weight:700;color:#0F172A;">Tenant Guidelines</div>
        <p style="font-size:12px;color:#64748B;line-height:1.5;margin:0;">Quiet hours begin strictly at 10:00 PM on weekdays.</p>
        <div style="display:flex;justify-content:center;align-items:center;gap:8px;padding:6px 0;">
          <span style="width:6px;height:6px;border-radius:50%;background:#94A3B8;"></span>
          <span style="width:6px;height:6px;border-radius:50%;background:#CBD5E1;"></span>
          <span style="width:6px;height:6px;border-radius:50%;background:#94A3B8;"></span>
        </div>
        <p style="font-size:12px;color:#64748B;line-height:1.5;margin:0;">Maintain common terrace cleanliness at all times.</p>
      </div>`;

    case 5:
      return `<div style="width:100%;max-width:320px;background:#09090B;border:1px solid #27272A;border-radius:18px;padding:24px;color:#fff;box-shadow:0 16px 36px rgba(0,0,0,0.6);">
        <div style="display:flex;justify-content:space-between;align-items:center;font-size:11px;font-weight:700;color:#60A5FA;">
          <span>QUANTUM ESCROW</span>
          <span>100% COLLATERAL</span>
        </div>
        <div style="margin:16px 0;height:1px;background:#38BDF8;box-shadow:0 0 12px #38BDF8, 0 0 24px rgba(56,189,248,0.5);"></div>
        <div style="display:flex;justify-content:space-between;font-size:12px;">
          <span style="color:#A1A1AA;">Smart Contract Hash</span>
          <span style="font-family:monospace;color:#34D399;">0x98A...4F2</span>
        </div>
      </div>`;

    case 6:
      return `<div style="width:100%;max-width:320px;background:#fff;border:1px solid #E2E8F0;border-radius:18px;padding:20px;box-shadow:0 8px 20px rgba(0,0,0,0.03);">
        <div style="display:flex;align-items:center;">
          <div style="flex:1;text-align:center;">
            <div style="font-size:11px;color:#64748B;margin-bottom:2px;">Monthly Rent</div>
            <div style="font-size:20px;font-weight:900;color:#0F172A;">₹24,000</div>
          </div>
          <div style="width:1px;height:48px;background:#E2E8F0;margin:0 12px;"></div>
          <div style="flex:1;text-align:center;">
            <div style="font-size:11px;color:#64748B;margin-bottom:2px;">Platform Fee</div>
            <div style="font-size:20px;font-weight:900;color:#059669;">₹0 Free</div>
          </div>
        </div>
      </div>`;

    case 10: // Model K: Apple Porcelain Gradient Divider with Concentric Pill (Light Theme)
      return `<div style="width:100%;max-width:320px;background:#FFFFFF;border:1px solid #E2E8F0;border-radius:24px;padding:24px;box-shadow:0 10px 28px rgba(15,23,42,0.04);display:flex;flex-direction:column;gap:16px;">
        <div style="font-size:13px;font-weight:800;color:#0F172A;">Monthly Lease Ledger</div>
        <div style="display:flex;align-items:center;width:100%;">
          <div style="flex:1;height:1px;background:linear-gradient(90deg, transparent, #CBD5E1);"></div>
          <span style="padding:4px 12px;background:#ECFDF5;border:1px solid #A7F3D0;border-radius:99px;font-size:10px;font-weight:800;color:#059669;margin:0 8px;">🍏 PORCELAIN CUT</span>
          <div style="flex:1;height:1px;background:linear-gradient(90deg, #CBD5E1, transparent);"></div>
        </div>
        <div style="display:flex;justify-content:space-between;font-size:12px;color:#64748B;">
          <span>Indiranagar Flat 402</span>
          <strong style="color:#0F172A;">₹42,000 / mo</strong>
        </div>
      </div>`;

    case 11: // Model L: CRED Acid Volt Neon Laser Divider (Dark Theme)
    default:
      return `<div style="width:100%;max-width:320px;background:#09090B;border:1px solid rgba(204,255,0,0.3);border-radius:24px;padding:22px;box-shadow:0 20px 40px rgba(0,0,0,0.7);display:flex;flex-direction:column;gap:14px;color:#fff;">
        <div style="display:flex;justify-content:space-between;align-items:center;">
          <span style="font-size:11px;font-weight:900;color:#CCFF00;letter-spacing:0.08em;">ESCROW DISBURSEMENT</span>
          <span style="font-family:monospace;font-size:10px;color:#71717A;">NODE-8</span>
        </div>
        <div style="position:relative;width:100%;height:2px;background:#18181B;margin:6px 0;">
          <div style="position:absolute;top:0;left:15%;right:15%;height:100%;background:#CCFF00;box-shadow:0 0 10px #CCFF00;"></div>
        </div>
        <div style="display:flex;justify-content:space-between;font-size:12px;">
          <span style="color:#A1A1AA;">Disbursed to Landlord</span>
          <strong style="color:#CCFF00;">₹55,000 ⚡</strong>
        </div>
      </div>`;
  }
}

// ============================================================================
// 3. CONTAINERS RENDERER (slug: containers)
// ============================================================================

function renderContainerVariant(fam, icon, variantIndex) {
  switch (variantIndex) {
    case 0:
      return `<div style="width:100%;max-width:320px;background:#ffffff;border:1px solid #E2E8F0;border-radius:20px;box-shadow:0 12px 30px rgba(15,23,42,0.06);overflow:hidden;">
        <div style="padding:18px 20px;border-bottom:1px solid #F1F5F9;display:flex;align-items:center;justify-content:space-between;">
          <div style="display:flex;align-items:center;gap:10px;">
            <div style="width:36px;height:36px;border-radius:10px;background:#EFF6FF;color:#2563EB;display:flex;align-items:center;justify-content:center;font-size:16px;">🏠</div>
            <div>
              <div style="font-size:14px;font-weight:800;color:#0F172A;">${fam}</div>
              <div style="font-size:11px;color:#64748B;">Elevated Surface</div>
            </div>
          </div>
          <span style="padding:4px 8px;background:#ECFDF5;color:#059669;border-radius:6px;font-size:10px;font-weight:800;">ACTIVE</span>
        </div>
        <div style="padding:20px;font-size:12px;color:#475569;line-height:1.5;">
          High-performance component wrapper featuring strict 8pt grid padding and accessible contrast ratios.
        </div>
        <div style="padding:14px 20px;background:#F8FAFC;border-top:1px solid #F1F5F9;display:flex;justify-content:space-between;align-items:center;">
          <span style="font-size:12px;font-weight:600;color:#64748B;">Elevation Level: 2dp</span>
          <button style="padding:6px 14px;background:#0F172A;color:#fff;border:none;border-radius:8px;font-size:11px;font-weight:700;cursor:pointer;">Action →</button>
        </div>
      </div>`;

    case 1:
      return `<div style="position:relative;width:100%;max-width:320px;border-radius:22px;padding:24px;overflow:hidden;background:rgba(255,255,255,0.75);backdrop-filter:blur(24px);-webkit-backdrop-filter:blur(24px);border:1px solid rgba(255,255,255,0.8);box-shadow:0 16px 36px rgba(31,38,135,0.08);">
        <div style="position:absolute;top:-20px;right:-20px;width:100px;height:100px;background:#3B82F6;border-radius:50%;filter:blur(40px);opacity:0.25;z-index:0;"></div>
        <div style="position:relative;z-index:2;">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
            <span style="font-size:11px;font-weight:800;color:#2563EB;letter-spacing:0.08em;text-transform:uppercase;">VISION OS FROST</span>
            <span style="font-size:18px;">💎</span>
          </div>
          <div style="font-size:16px;font-weight:800;color:#0F172A;margin-bottom:6px;">${fam}</div>
          <div style="font-size:12px;color:#475569;line-height:1.4;margin-bottom:16px;">Frosted translucent glass surface with ambient background diffusion.</div>
          <div style="padding:8px 12px;background:rgba(255,255,255,0.6);border-radius:10px;border:1px solid rgba(255,255,255,0.4);font-size:11px;font-weight:700;color:#0F172A;display:flex;justify-content:space-between;">
            <span>Blur Radius</span><span>24px (Optical)</span>
          </div>
        </div>
      </div>`;

    case 2:
      return `<div style="width:100%;max-width:320px;display:grid;grid-template-columns:1fr 1fr;gap:10px;padding:12px;background:#F8FAFC;border:1px solid #E2E8F0;border-radius:20px;">
        <div style="grid-column:1 / -1;background:#fff;border:1px solid #E2E8F0;border-radius:14px;padding:16px;">
          <div style="font-size:11px;font-weight:700;color:#64748B;">BENTO HERO CONTAINER</div>
          <div style="font-size:16px;font-weight:800;color:#0F172A;margin-top:2px;">₹42,000 / mo</div>
        </div>
        <div style="background:#fff;border:1px solid #E2E8F0;border-radius:14px;padding:14px;text-align:center;">
          <div style="font-size:20px;margin-bottom:2px;">⚡</div>
          <div style="font-size:11px;font-weight:700;color:#0F172A;">Instant KYC</div>
        </div>
        <div style="background:#fff;border:1px solid #E2E8F0;border-radius:14px;padding:14px;text-align:center;">
          <div style="font-size:20px;margin-bottom:2px;">🛡</div>
          <div style="font-size:11px;font-weight:700;color:#0F172A;">Zero Deposit</div>
        </div>
      </div>`;

    case 10: // Model K: Apple Luxury Porcelain Bento Container (Light Theme)
      return `<div style="width:100%;max-width:320px;background:#FFFFFF;border:1px solid #E2E8F0;border-radius:26px;padding:22px;box-shadow:0 12px 32px rgba(15,23,42,0.04);display:flex;flex-direction:column;gap:14px;">
        <div style="display:flex;align-items:center;justify-content:space-between;">
          <div style="display:flex;align-items:center;gap:10px;">
            <div style="width:36px;height:36px;border-radius:12px;background:#ECFDF5;color:#059669;display:flex;align-items:center;justify-content:center;font-size:16px;">🍏</div>
            <div>
              <div style="font-size:14px;font-weight:800;color:#0F172A;">${fam}</div>
              <div style="font-size:10px;color:#64748B;">Porcelain Canvas 24dp</div>
            </div>
          </div>
          <span style="padding:4px 8px;background:#ECFDF5;color:#059669;border-radius:99px;font-size:9px;font-weight:800;">APPLE HIG</span>
        </div>
        <div style="padding:14px;background:#F8FAFC;border:1px solid #F1F5F9;border-radius:16px;font-size:12px;color:#475569;line-height:1.5;">
          Refined tactile container featuring rounded 26px squircle radius and subtle ambient drop shadow.
        </div>
      </div>`;

    case 11: // Model L: CRED Monex Titanium Escrow Shield Container (Dark Theme)
    default:
      return `<div style="width:100%;max-width:320px;background:#09090B;border:1px solid rgba(204,255,0,0.3);border-radius:26px;padding:22px;box-shadow:0 24px 48px rgba(0,0,0,0.7),inset 0 1px 0 rgba(204,255,0,0.2);color:#FFFFFF;display:flex;flex-direction:column;gap:14px;">
        <div style="display:flex;align-items:center;justify-content:space-between;">
          <span style="font-size:11px;font-weight:900;color:#CCFF00;letter-spacing:0.08em;text-transform:uppercase;">${fam.toUpperCase()}</span>
          <span style="font-size:12px;color:#CCFF00;">⚡</span>
        </div>
        <div style="padding:14px;background:#18181B;border:1px solid #27272A;border-radius:16px;font-size:12px;color:#A1A1AA;line-height:1.5;">
          Titanium shielded container engineered with hardware-level optical depth and luminescent acid rim.
        </div>
        <button style="width:100%;padding:10px;background:#CCFF00;color:#09090B;border:none;border-radius:12px;font-size:11px;font-weight:900;cursor:pointer;">
          Engage Titanium Shield ≫
        </button>
      </div>`;
  }
}

// ============================================================================
// 4. FOUNDATIONS (Typography, Colors, Spacing)
// ============================================================================

function renderTypographyVariant(fam, icon, variantIndex) {
  switch (variantIndex) {
    case 0:
      return `<div style="width:100%;max-width:340px;background:#fff;border:1px solid #E2E8F0;border-radius:18px;padding:24px;box-shadow:0 8px 20px rgba(0,0,0,0.03);">
        <div style="font-size:11px;font-weight:800;color:#64748B;letter-spacing:0.06em;text-transform:uppercase;margin-bottom:14px;">DISPLAY HIERARCHY SCALE</div>
        <div style="display:flex;flex-direction:column;gap:10px;">
          <div><div style="font-size:28px;font-weight:900;color:#0F172A;line-height:1.1;">₹28,500</div><span style="font-size:10px;color:#94A3B8;font-family:monospace;">Display Large 28px / 900</span></div>
          <div><div style="font-size:18px;font-weight:800;color:#0F172A;">Indiranagar 3BHK</div><span style="font-size:10px;color:#94A3B8;font-family:monospace;">Heading H2 18px / 800</span></div>
          <div><div style="font-size:13px;font-weight:500;color:#475569;">Monthly rent paid via auto-debit on 1st.</div><span style="font-size:10px;color:#94A3B8;font-family:monospace;">Body Regular 13px / 500</span></div>
        </div>
      </div>`;
    case 1:
      return `<div style="width:100%;max-width:340px;background:#fff;border:1px solid #E2E8F0;border-radius:18px;padding:20px;">
        <div style="font-size:11px;font-weight:800;color:#64748B;margin-bottom:12px;">WEIGHT SPECTRUM (INTER)</div>
        <div style="display:flex;flex-direction:column;gap:8px;">
          <div style="font-size:14px;font-weight:300;color:#334155;">Light 300: Legal disclaimer text</div>
          <div style="font-size:14px;font-weight:500;color:#1E293B;">Medium 500: Standard UI labels</div>
          <div style="font-size:14px;font-weight:700;color:#0F172A;">Bold 700: Section titles & CTA</div>
          <div style="font-size:14px;font-weight:900;color:#0F172A;">Black 900: High impact numerals</div>
        </div>
      </div>`;
    case 2:
      return `<div style="width:100%;max-width:340px;background:#09090B;border:1px solid #27272A;border-radius:18px;padding:20px;color:#fff;">
        <div style="font-size:10px;font-family:monospace;color:#38BDF8;margin-bottom:8px;">TABULAR MONOSPACE (JETBRAINS MONO)</div>
        <div style="font-family:monospace;font-size:22px;font-weight:800;color:#F4F4F5;letter-spacing:0.05em;margin-bottom:6px;">₹ 1,48,290.00</div>
        <div style="font-family:monospace;font-size:12px;color:#A1A1AA;">IFSC: HDFC0000240 • ACC: 5010049281</div>
      </div>`;
    case 3:
      return `<div style="width:100%;max-width:340px;background:#fff;border:1px solid #E2E8F0;border-radius:18px;padding:22px;">
        <div style="display:flex;align-items:flex-start;gap:12px;">
          <span style="font-size:36px;font-weight:900;color:#2563EB;line-height:0.9;">R</span>
          <div>
            <div style="font-size:14px;font-weight:800;color:#0F172A;">Drop-Cap Editorial</div>
            <div style="font-size:12px;color:#64748B;line-height:1.4;margin-top:2px;">RentenPe sets the benchmark for real-estate financial infrastructure in India.</div>
          </div>
        </div>
      </div>`;
    case 4:
      return `<div style="width:100%;max-width:340px;background:#F8FAFC;border:1px solid #E2E8F0;border-radius:16px;padding:16px;">
        <div style="font-size:11px;font-weight:700;color:#64748B;margin-bottom:6px;">TEXT TRUNCATION & ELLIPSIS</div>
        <div style="font-size:13px;font-weight:700;color:#0F172A;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;background:#fff;padding:8px 12px;border-radius:8px;border:1px solid #E2E8F0;">
          Prestige Falcon City, Flat 402, Tower 3, Kanakapura Main Road, Bangalore South, Karnataka 560062
        </div>
      </div>`;
    case 5:
      return `<div style="width:100%;max-width:340px;background:linear-gradient(135deg,#18181B,#09090B);border:1px solid #27272A;border-radius:18px;padding:22px;color:#fff;">
        <div style="font-size:10px;font-weight:800;letter-spacing:0.1em;color:#F59E0B;margin-bottom:6px;">LUXURY GOLD SERIF</div>
        <div style="font-family:Georgia, serif;font-size:24px;font-weight:700;color:#FDE68A;letter-spacing:-0.01em;">The Indiranagar Penthouse</div>
        <div style="font-size:11px;color:#A1A1AA;margin-top:4px;">Private Residence Collection</div>
      </div>`;
    case 6:
      return `<div style="width:100%;max-width:340px;background:#fff;border:1px solid #E2E8F0;border-radius:18px;padding:18px;display:flex;flex-direction:column;gap:8px;">
        <div style="font-size:11px;font-weight:700;color:#64748B;">MICROCOPY & HELPER ANNOTATIONS</div>
        <span style="font-size:12px;color:#059669;font-weight:700;">● Verified 100% On-Time Payment Streak</span>
        <span style="font-size:11px;color:#DC2626;font-weight:600;">⚠ Late fee applies after 5th of each month</span>
      </div>`;
    case 7:
      return `<div style="width:100%;max-width:340px;background:#fff;border:1px solid #E2E8F0;border-radius:18px;padding:18px;">
        <div style="font-size:11px;font-weight:700;color:#64748B;margin-bottom:8px;">KERNING & TRACKING SPEC</div>
        <div style="font-size:13px;font-weight:800;letter-spacing:0.12em;text-transform:uppercase;color:#0F172A;">WIDE TRACKING (+0.12EM)</div>
        <div style="font-size:13px;font-weight:800;letter-spacing:-0.03em;color:#2563EB;margin-top:6px;">TIGHT KERNING (-0.03EM)</div>
      </div>`;
    case 8:
      return `<div style="width:100%;max-width:340px;background:#fff;border:1px solid #E2E8F0;border-radius:18px;padding:22px;text-align:center;">
        <div style="font-size:26px;font-weight:900;background:linear-gradient(135deg,#2563EB,#7C3AED);-webkit-background-clip:text;-webkit-text-fill-color:transparent;">
          Next-Gen Rent Pay
        </div>
        <div style="font-size:11px;color:#64748B;margin-top:4px;">Gradient Text Fill Token</div>
      </div>`;
    case 9:
      return `<div style="width:100%;max-width:340px;background:#F8FAFC;border:1px solid #E2E8F0;border-radius:18px;padding:18px;">
        <div style="font-size:11px;font-weight:700;color:#64748B;margin-bottom:8px;">LOCALIZED INDIAN TYPOGRAPHY</div>
        <div style="display:flex;justify-content:space-between;font-size:13px;font-weight:700;color:#0F172A;">
          <span>English: Pay Rent</span>
          <span>हिंदी: किराया भरें</span>
          <span>ಕನ್ನಡ: ಬಾಡಿಗೆ ಪಾವತಿಸಿ</span>
        </div>
      </div>`;

    case 10: // Model K: Apple Dynamic Type Scale (Light Theme)
      return `<div style="width:100%;max-width:340px;background:#FFFFFF;border:1px solid #E2E8F0;border-radius:26px;padding:22px;box-shadow:0 12px 30px rgba(15,23,42,0.04);display:flex;flex-direction:column;gap:12px;">
        <div style="display:flex;justify-content:space-between;align-items:center;">
          <span style="font-size:11px;font-weight:800;color:#64748B;letter-spacing:0.06em;text-transform:uppercase;">SAN FRANCISCO PRO</span>
          <span style="padding:2px 8px;background:#ECFDF5;color:#059669;border-radius:99px;font-size:9px;font-weight:800;">APPLE HIG SCALE</span>
        </div>
        <div>
          <div style="font-size:24px;font-weight:900;color:#0F172A;letter-spacing:-0.03em;">₹ 2,84,500.00</div>
          <div style="font-size:12px;color:#059669;font-weight:700;margin-top:2px;">Dynamic Optical Sizing & Tabular Figures</div>
        </div>
        <div style="padding:10px;background:#F8FAFC;border-radius:12px;font-size:11px;color:#64748B;line-height:1.4;">
          Features iOS dynamic type leading and negative tracking on large headline numerals.
        </div>
      </div>`;

    case 11: // Model L: CRED Monex Acid Neon Cyber Telemetry Typography (Dark Theme)
    default:
      return `<div style="width:100%;max-width:340px;background:#09090B;border:1px solid rgba(204,255,0,0.3);border-radius:26px;padding:22px;box-shadow:0 24px 48px rgba(0,0,0,0.7);color:#FFFFFF;display:flex;flex-direction:column;gap:12px;">
        <div style="display:flex;justify-content:space-between;align-items:center;">
          <span style="font-size:10px;font-weight:900;color:#CCFF00;letter-spacing:0.1em;text-transform:uppercase;">MONEX TITANIUM TYPE SYSTEM</span>
          <span style="font-family:monospace;font-size:10px;color:#71717A;">JETBRAINS_CYBER</span>
        </div>
        <div style="font-family:monospace;font-size:24px;font-weight:900;color:#CCFF00;letter-spacing:0.06em;text-shadow:0 0 16px rgba(204,255,0,0.4);">
          0x9F41::₹5,50,000
        </div>
        <div style="padding:10px;background:#18181B;border-radius:10px;font-family:monospace;font-size:11px;color:#38BDF8;">
          ESCROW_CLEARANCE::CONFIRMED // 0ms_LATENCY
        </div>
      </div>`;
  }
}

function renderColorVariant(fam, icon, variantIndex) {
  const sets = [
    [ { name: 'Slate 900', hex: '#0F172A', text: '#fff' }, { name: 'Electric 600', hex: '#2563EB', text: '#fff' }, { name: 'Emerald 500', hex: '#10B981', text: '#fff' } ],
    [ { name: 'Success Green', hex: '#059669', text: '#fff' }, { name: 'Warning Amber', hex: '#D97706', text: '#fff' }, { name: 'Danger Rose', hex: '#DC2626', text: '#fff' } ],
    [ { name: 'Zinc 950', hex: '#09090B', text: '#fff' }, { name: 'Zinc 800', hex: '#27272A', text: '#fff' }, { name: 'Gold 500', hex: '#F59E0B', text: '#000' } ],
    [ { name: 'Surface Gray', hex: '#F8FAFC', text: '#0F172A' }, { name: 'Card White', hex: '#FFFFFF', text: '#0F172A' }, { name: 'Border Gray', hex: '#E2E8F0', text: '#0F172A' } ],
    [ { name: 'Violet 600', hex: '#7C3AED', text: '#fff' }, { name: 'Cyan 500', hex: '#06B6D4', text: '#fff' }, { name: 'Pink 500', hex: '#EC4899', text: '#fff' } ],
    [ { name: 'Dark Navy', hex: '#020617', text: '#fff' }, { name: 'Deep Indigo', hex: '#1E1B4B', text: '#fff' }, { name: 'Blue Neon', hex: '#38BDF8', text: '#000' } ],
    [ { name: 'Teal 600', hex: '#0D9488', text: '#fff' }, { name: 'Lime 500', hex: '#84CC16', text: '#000' }, { name: 'Sky 500', hex: '#0EA5E9', text: '#fff' } ],
    [ { name: 'Gray 100', hex: '#F3F4F6', text: '#000' }, { name: 'Gray 400', hex: '#9CA3AF', text: '#fff' }, { name: 'Gray 700', hex: '#374151', text: '#fff' } ],
    [ { name: 'Brand Gold', hex: '#D97706', text: '#fff' }, { name: 'Titanium', hex: '#1C1917', text: '#fff' }, { name: 'Pure White', hex: '#FFFFFF', text: '#000' } ],
    [ { name: 'Porcelain White', hex: '#FFFFFF', text: '#0F172A' }, { name: 'Apple Sage', hex: '#10B981', text: '#fff' }, { name: 'Porcelain Slate', hex: '#0F172A', text: '#fff' } ],
    [ { name: 'Titanium Black', hex: '#09090B', text: '#CCFF00' }, { name: 'Acid Volt Lime', hex: '#CCFF00', text: '#09090B' }, { name: 'Electric Cyan', hex: '#38BDF8', text: '#09090B' } ]
  ];
  const currentSet = sets[variantIndex % sets.length];

  return `<div style="width:100%;max-width:340px;background:#fff;border:1px solid #E2E8F0;border-radius:18px;padding:20px;box-shadow:0 8px 20px rgba(0,0,0,0.03);">
    <div style="font-size:14px;font-weight:800;color:#0F172A;margin-bottom:4px;">${fam} System (Model ${String.fromCharCode(65 + variantIndex)})</div>
    <div style="font-size:11px;color:#64748B;margin-bottom:16px;">Curated contrast-checked palette tokens</div>
    <div style="display:grid;grid-template-columns:repeat(3, 1fr);gap:10px;">
      ${currentSet.map(s => `
        <div style="background:${s.hex};border-radius:12px;padding:12px 10px;color:${s.text};border:1px solid rgba(0,0,0,0.08);text-align:center;">
          <div style="font-size:10px;font-weight:700;margin-bottom:4px;">${s.name}</div>
          <div style="font-size:11px;font-family:monospace;font-weight:800;opacity:0.9;">${s.hex}</div>
        </div>
      `).join('')}
    </div>
  </div>`;
}

function renderSpacingVariant(fam, icon, variantIndex) {
  switch (variantIndex) {
    case 0:
      return `<div style="width:100%;max-width:340px;background:#fff;border:1px solid #E2E8F0;border-radius:18px;padding:22px;">
        <div style="font-size:13px;font-weight:800;color:#0F172A;margin-bottom:4px;">4px Base Scale Metrics</div>
        <div style="font-size:11px;color:#64748B;margin-bottom:16px;">Standard 4pt micro-step intervals</div>
        <div style="display:flex;align-items:flex-end;gap:8px;height:80px;border-bottom:1px solid #E2E8F0;padding-bottom:10px;">
          ${[4, 8, 12, 16, 24, 32].map(s => `
            <div style="flex:1;display:flex;flex-direction:column;align-items:center;gap:4px;">
              <div style="width:100%;height:${s}px;background:#2563EB;border-radius:4px;"></div>
              <span style="font-size:9px;font-family:monospace;font-weight:700;color:#64748B;">${s}</span>
            </div>
          `).join('')}
        </div>
      </div>`;
    case 1:
      return `<div style="width:100%;max-width:340px;background:#fff;border:1px solid #E2E8F0;border-radius:18px;padding:20px;">
        <div style="font-size:13px;font-weight:800;color:#0F172A;margin-bottom:4px;">Mobile Screen Inset Margins</div>
        <div style="font-size:11px;color:#64748B;margin-bottom:12px;">Horizontal gutters: 16px / 20px</div>
        <div style="border:2px dashed #2563EB;border-radius:12px;padding:16px;text-align:center;background:#EFF6FF;font-size:12px;font-weight:700;color:#1E40AF;">
          Safe Viewport Content Area
        </div>
      </div>`;
    case 2:
      return `<div style="width:100%;max-width:340px;background:#fff;border:1px solid #E2E8F0;border-radius:18px;padding:20px;text-align:center;">
        <div style="font-size:13px;font-weight:800;color:#0F172A;margin-bottom:8px;">Touch Target Ergonomics</div>
        <div style="width:56px;height:56px;margin:0 auto 8px;border:2px solid #10B981;border-radius:14px;display:flex;align-items:center;justify-content:center;background:#ECFDF5;font-size:11px;font-weight:800;color:#059669;">
          48x48
        </div>
        <span style="font-size:11px;color:#059669;font-weight:700;">● Apple HIG & Material 3 Compliant</span>
      </div>`;
    case 3:
      return `<div style="width:100%;max-width:340px;background:#fff;border:1px solid #E2E8F0;border-radius:18px;padding:20px;display:flex;flex-direction:column;gap:10px;">
        <div style="font-size:13px;font-weight:800;color:#0F172A;">Card Internal Padding Ratios</div>
        <div style="padding:8px;background:#F1F5F9;border-radius:8px;font-size:11px;font-weight:700;">Compact: 8px padding</div>
        <div style="padding:14px;background:#EFF6FF;border-radius:8px;font-size:11px;font-weight:700;color:#2563EB;">Standard: 14px padding</div>
        <div style="padding:20px;background:#0F172A;color:#fff;border-radius:8px;font-size:11px;font-weight:700;">Spacious: 20px padding</div>
      </div>`;
    case 4:
      return `<div style="width:100%;max-width:340px;background:#fff;border:1px solid #E2E8F0;border-radius:18px;padding:20px;">
        <div style="font-size:13px;font-weight:800;color:#0F172A;margin-bottom:8px;">Flexbox Gap Intervals</div>
        <div style="display:flex;gap:16px;">
          <div style="flex:1;height:40px;background:#E2E8F0;border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;">Item 1</div>
          <div style="flex:1;height:40px;background:#E2E8F0;border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;">Item 2</div>
        </div>
        <div style="text-align:center;font-size:11px;color:#2563EB;font-weight:700;margin-top:8px;">↔ Gap: 16px (1rem)</div>
      </div>`;
    case 5:
      return `<div style="width:100%;max-width:340px;background:#fff;border:1px solid #E2E8F0;border-radius:18px;padding:20px;">
        <div style="font-size:13px;font-weight:800;color:#0F172A;margin-bottom:8px;">Bento Spanning Ratios</div>
        <div style="display:grid;grid-template-columns:2fr 1fr;gap:8px;height:60px;">
          <div style="background:#2563EB;border-radius:8px;color:#fff;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:800;">2 Span</div>
          <div style="background:#F1F5F9;border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;">1 Span</div>
        </div>
      </div>`;
    case 6:
      return `<div style="width:100%;max-width:340px;background:#fff;border:1px solid #E2E8F0;border-radius:18px;padding:20px;">
        <div style="font-size:13px;font-weight:800;color:#0F172A;margin-bottom:8px;">Section Vertical Rhythm</div>
        <div style="height:32px;background:#FEF3C7;border-radius:6px;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;color:#B45309;">
          ↕ 32px Vertical Spacer
        </div>
      </div>`;
    case 7:
      return `<div style="width:100%;max-width:340px;background:#fff;border:1px solid #E2E8F0;border-radius:18px;padding:20px;">
        <div style="font-size:13px;font-weight:800;color:#0F172A;margin-bottom:8px;">Safe Area Inset Metrics</div>
        <div style="padding:10px;background:#F8FAFC;border:1px solid #E2E8F0;border-radius:8px;font-size:11px;color:#475569;">
          <div>env(safe-area-inset-top): <strong>44px</strong></div>
          <div style="margin-top:4px;">env(safe-area-inset-bottom): <strong>34px</strong></div>
        </div>
      </div>`;
    case 8:
      return `<div style="width:100%;max-width:340px;background:#fff;border:1px solid #E2E8F0;border-radius:18px;padding:20px;">
        <div style="font-size:13px;font-weight:800;color:#0F172A;margin-bottom:8px;">Negative Avatar Offset Spacing</div>
        <div style="display:flex;padding-left:12px;">
          <div style="width:36px;height:36px;border-radius:50%;background:#0F172A;color:#fff;border:2px solid #fff;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:800;margin-left:-12px;">A</div>
          <div style="width:36px;height:36px;border-radius:50%;background:#2563EB;color:#fff;border:2px solid #fff;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:800;margin-left:-12px;">B</div>
          <div style="width:36px;height:36px;border-radius:50%;background:#10B981;color:#fff;border:2px solid #fff;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:800;margin-left:-12px;">C</div>
        </div>
        <div style="font-size:11px;color:#64748B;margin-top:8px;">Negative margin: -12px overlap</div>
      </div>`;
    case 9:
      return `<div style="width:100%;max-width:340px;background:#fff;border:1px solid #E2E8F0;border-radius:18px;padding:20px;">
        <div style="font-size:13px;font-weight:800;color:#0F172A;margin-bottom:8px;">Responsive Breakpoints</div>
        <div style="display:flex;flex-direction:column;gap:4px;font-size:11px;color:#475569;">
          <div style="display:flex;justify-content:space-between;"><span>Mobile xs:</span><strong style="color:#0F172A;">375px</strong></div>
          <div style="display:flex;justify-content:space-between;"><span>Mobile lg:</span><strong style="color:#0F172A;">428px</strong></div>
          <div style="display:flex;justify-content:space-between;"><span>Tablet:</span><strong style="color:#0F172A;">768px</strong></div>
        </div>
      </div>`;

    case 10: // Model K: Apple Porcelain 8pt Grid Ergonomics (Light Theme)
      return `<div style="width:100%;max-width:340px;background:#FFFFFF;border:1px solid #E2E8F0;border-radius:26px;padding:22px;box-shadow:0 12px 30px rgba(15,23,42,0.04);display:flex;flex-direction:column;gap:12px;">
        <div style="display:flex;justify-content:space-between;align-items:center;">
          <span style="font-size:11px;font-weight:800;color:#0F172A;">8PT PORCELAIN GRID MATRIX</span>
          <span style="padding:2px 8px;background:#ECFDF5;color:#059669;border-radius:99px;font-size:9px;font-weight:800;">APPLE HIG</span>
        </div>
        <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:8px;text-align:center;">
          <div style="padding:10px;background:#F8FAFC;border:1px solid #E2E8F0;border-radius:10px;"><div style="font-size:14px;font-weight:800;color:#0F172A;">8px</div><span style="font-size:9px;color:#64748B;">Inset</span></div>
          <div style="padding:10px;background:#F8FAFC;border:1px solid #E2E8F0;border-radius:10px;"><div style="font-size:14px;font-weight:800;color:#0F172A;">16px</div><span style="font-size:9px;color:#64748B;">Gutter</span></div>
          <div style="padding:10px;background:#F8FAFC;border:1px solid #E2E8F0;border-radius:10px;"><div style="font-size:14px;font-weight:800;color:#0F172A;">24px</div><span style="font-size:9px;color:#64748B;">Padding</span></div>
          <div style="padding:10px;background:#F8FAFC;border:1px solid #E2E8F0;border-radius:10px;"><div style="font-size:14px;font-weight:800;color:#0F172A;">32px</div><span style="font-size:9px;color:#64748B;">Section</span></div>
        </div>
      </div>`;

    case 11: // Model L: CRED Titanium Neon Haptic Dock Spacing (Dark Theme)
    default:
      return `<div style="width:100%;max-width:340px;background:#09090B;border:1px solid rgba(204,255,0,0.3);border-radius:26px;padding:22px;box-shadow:0 24px 48px rgba(0,0,0,0.7);color:#FFFFFF;display:flex;flex-direction:column;gap:12px;">
        <div style="display:flex;justify-content:space-between;align-items:center;">
          <span style="font-size:10px;font-weight:900;color:#CCFF00;letter-spacing:0.1em;text-transform:uppercase;">CRED HAPTIC DOCK SPACING</span>
          <span style="font-family:monospace;font-size:10px;color:#71717A;">TITANIUM_DP</span>
        </div>
        <div style="display:flex;align-items:center;justify-content:space-between;padding:12px;background:#18181B;border:1px solid #27272A;border-radius:14px;">
          <div><div style="font-size:13px;font-weight:800;color:#FFFFFF;">Floating Elevation</div><div style="font-size:10px;color:#71717A;">Offset: 24dp · Blur: 48dp</div></div>
          <span style="padding:4px 8px;background:#CCFF00;color:#09090B;border-radius:6px;font-size:10px;font-weight:900;">24DP ⚡</span>
        </div>
      </div>`;
  }
}

// ============================================================================
// 5. RICH MULTI-ARCHETYPE DISPATCHERS (TOP 50 PINTEREST REFERENCES)
// ============================================================================

const richArchetypes = require('./rich-variant-archetypes.js');
const pinterestFinancial = require('./pinterest-financial-archetypes.js');
const pinterestTimeline = require('./pinterest-nav-timeline-archetypes.js');
const pinterestAuth = require('./pinterest-auth-cards-archetypes.js');
const pinterestCharts = require('./pinterest-charts-feedback-archetypes.js');
const otpAndInputArchetypes = require('./otp-and-inputs-archetypes.js');
const selectionDropdown = require('./selection-dropdown-archetypes.js');
const tableArchetypes = require('./table-archetypes.js');
const avatarChipBadge = require('./avatar-chip-badge-archetypes.js');
const calendarChartsFeedback = require('./calendar-charts-feedback-archetypes.js');
const authPropertyLegal = require('./auth-property-legal-archetypes.js');
const navMenu = require('./navigation-menu-bottombar-archetypes.js');
const financialPayments = require('./financial-payments-archetypes.js');
const buttonActions = require('./button-actions-archetypes.js');

function renderInputVariant(fam, icon, slug, variantIndex) {
  if (
    slug === 'otp-inputs' || slug.includes('otp') || slug === 'pin-input' || slug === 'pin-inputs' || slug.includes('pin') ||
    slug === 'file-upload' || slug.includes('upload') ||
    slug === 'date-inputs' || slug.includes('calendar') ||
    slug === 'time-picker' ||
    slug === 'color-picker' ||
    slug === 'signature-pad' || slug.includes('signature') ||
    slug === 'textarea' ||
    slug === 'star-rating' ||
    slug === 'tags-input' ||
    slug === 'rich-text' ||
    slug === 'autocomplete' ||
    slug === 'masked-inputs'
  ) {
    return otpAndInputArchetypes.renderSpecializedInputVariant(fam, icon, slug, variantIndex);
  }
  return richArchetypes.renderInputVariants(fam, icon, slug, variantIndex);
}

function renderButtonVariant(fam, icon, slug, variantIndex) {
  return buttonActions.renderButtonAndActionVariants(fam, icon, slug, variantIndex);
}

function renderSelectionVariant(fam, icon, slug, variantIndex) {
  if (slug === 'checkbox' || slug.includes('checkbox')) return selectionDropdown.renderCheckboxVariants(fam, icon, variantIndex);
  if (slug === 'radio' || slug.includes('radio')) return selectionDropdown.renderRadioVariants(fam, icon, variantIndex);
  if (slug === 'toggle' || slug.includes('switch')) return selectionDropdown.renderToggleVariants(fam, icon, variantIndex);
  if (slug.includes('slider') || slug.includes('range')) return selectionDropdown.renderSliderVariants(fam, icon, variantIndex);
  return selectionDropdown.renderCheckboxVariants(fam, icon, variantIndex);
}

function renderFeedbackVariant(fam, icon, slug, variantIndex) {
  return calendarChartsFeedback.renderFeedbackAndStatesVariants(fam, icon, slug, variantIndex);
}

function renderPaymentVariant(fam, icon, slug, variantIndex) {
  return financialPayments.renderPaymentsAndFinancialVariants(fam, icon, slug, variantIndex);
}

// ============================================================================
// MASTER CATEGORY DISPATCHER (DETERMINISTIC CATEGORY-FIRST ROUTING)
// ============================================================================

function renderCategoryVariant(cat, fam, icon, slug, variantIndex) {
  // 1. BESPOKE FOUNDATION SLUG CHECKS
  if (slug === 'icons' || slug === 'icon-stat') return renderIconVariant(fam, icon, variantIndex);
  if (slug === 'dividers') return renderDividerVariant(fam, icon, variantIndex);
  if (slug === 'containers' || cat === 'Backgrounds') return renderContainerVariant(fam, icon, variantIndex);
  if (slug === 'typography') return renderTypographyVariant(fam, icon, variantIndex);
  if (slug === 'colors' || slug === 'theme-picker' || slug.includes('theme') || slug === 'color-select') return renderColorVariant(fam, icon, variantIndex);
  if (slug === 'spacing') return renderSpacingVariant(fam, icon, variantIndex);

  // 2. BESPOKE SPECIALIZED INPUTS (OTP, PIN, File Upload, Date, Time, Color, Signature, Textarea, Stars, Tags, Rich Text, Autocomplete, Masked)
  if (
    slug === 'otp-inputs' || slug.includes('otp') || slug === 'pin-input' || slug === 'pin-inputs' || slug.includes('pin') ||
    slug === 'file-upload' || slug.includes('upload') ||
    slug === 'date-inputs' || slug.includes('calendar-input') ||
    slug === 'time-picker' ||
    slug === 'color-picker' ||
    slug === 'signature-pad' || slug.includes('signature') ||
    slug === 'textarea' ||
    slug === 'star-rating' ||
    slug === 'tags-input' ||
    slug === 'rich-text' ||
    slug === 'autocomplete' ||
    slug === 'masked-inputs'
  ) {
    return otpAndInputArchetypes.renderSpecializedInputVariant(fam, icon, slug, variantIndex);
  }

  // 3. SELECTION COMPONENTS (Checkbox, Radio, Toggle, Slider, Adornments)
  if (slug === 'checkbox' || slug.includes('checkbox')) return selectionDropdown.renderCheckboxVariants(fam, icon, variantIndex);
  if (slug === 'radio' || slug.includes('radio')) return selectionDropdown.renderRadioVariants(fam, icon, variantIndex);
  if (slug === 'toggle' || slug.includes('switch') || slug === 'switch-group') return selectionDropdown.renderToggleVariants(fam, icon, variantIndex);
  if (slug.includes('slider') || slug.includes('range')) return selectionDropdown.renderSliderVariants(fam, icon, variantIndex);
  if (slug === 'size-select') return selectionDropdown.renderRadioVariants(fam, icon, variantIndex);

  // 4. DROPDOWNS & SELECTORS
  if (cat === 'Dropdowns' || slug.includes('select') || slug.includes('dropdown')) {
    return selectionDropdown.renderDropdownVariants(fam, icon, slug, variantIndex);
  }

  // 5. TABLES (Standard Table, Compact Table, Responsive Table, etc.)
  if (cat === 'Tables' || slug.includes('table')) {
    return tableArchetypes.renderTableVariants(fam, icon, slug, variantIndex);
  }

  // 6. AVATARS & PROFILES
  if (cat === 'Avatars & Profiles' || slug.includes('avatar')) {
    return avatarChipBadge.renderAvatarVariants(fam, icon, slug, variantIndex);
  }

  // 7. CHIPS, TAGS, BADGES & DATA DISPLAY
  if (
    cat === 'Chips & Tags' ||
    slug.includes('chip') ||
    slug.includes('badge') ||
    slug.includes('indicator') ||
    slug.includes('tag') ||
    slug === 'data-label' ||
    slug === 'key-value' ||
    slug === 'stat-bar' ||
    slug === 'metric-row'
  ) {
    return avatarChipBadge.renderChipVariants(fam, icon, slug, variantIndex);
  }

  // 8. CALENDAR VIEW & DATES
  if (
    cat === 'Calendar' ||
    slug.includes('calendar') ||
    slug === 'date-range' ||
    slug === 'month-selector' ||
    slug === 'day-status' ||
    slug === 'schedule-view' ||
    slug === 'event-card' ||
    slug === 'booking-slot' ||
    slug === 'availability-grid'
  ) {
    return calendarChartsFeedback.renderCalendarVariants(fam, icon, slug, variantIndex);
  }

  // 9. CHARTS, ANALYTICS & INFOGRAPHICS
  if (
    cat === 'Charts' ||
    cat === 'Analytics' ||
    cat === 'Infographics' ||
    slug.includes('chart') ||
    slug.includes('graph') ||
    slug.includes('sparkline') ||
    slug.includes('score-display') ||
    slug.includes('cohort') ||
    slug.includes('funnel')
  ) {
    return calendarChartsFeedback.renderChartVariants(fam, icon, slug, variantIndex);
  }

  // 10. FEEDBACK, STATES & TRANSITIONS
  if (
    cat === 'Feedback' ||
    cat === 'States' ||
    cat === 'Transitions' ||
    slug.includes('alert') ||
    slug.startsWith('state-') ||
    slug.includes('empty') ||
    slug.includes('error') ||
    slug.includes('loading') ||
    slug.includes('spinner') ||
    slug.includes('skeleton') ||
    slug.includes('toast') ||
    slug.includes('countdown') ||
    slug.includes('confetti')
  ) {
    return calendarChartsFeedback.renderFeedbackAndStatesVariants(fam, icon, slug, variantIndex);
  }

  // 11. AUTHENTICATION & ONBOARDING
  if (
    cat === 'Authentication' ||
    cat === 'Onboarding' ||
    slug.includes('login') ||
    slug.includes('signup') ||
    slug.includes('password') ||
    slug.includes('auth') ||
    slug.includes('welcome') ||
    slug.includes('wizard') ||
    slug.includes('tour') ||
    slug.includes('permission') ||
    slug.includes('invite')
  ) {
    return authPropertyLegal.renderAuthVariants(fam, icon, slug, variantIndex);
  }

  // 12. PROPERTY & REAL ESTATE
  if (
    cat === 'Property' ||
    slug.includes('property') ||
    slug.includes('listing') ||
    slug.includes('amenity') ||
    slug.includes('floor-plan') ||
    slug.includes('maintenance') ||
    slug.includes('inspection') ||
    slug.includes('occupancy') ||
    slug.includes('rent-estimate')
  ) {
    return authPropertyLegal.renderPropertyVariants(fam, icon, slug, variantIndex);
  }

  // 13. LEGAL & SOCIAL PROOF
  if (
    cat === 'Legal' ||
    cat === 'Social Proof' ||
    slug.includes('lease') ||
    slug.includes('terms') ||
    slug.includes('signature') ||
    slug.includes('trust') ||
    slug.includes('stamp') ||
    slug.includes('review') ||
    slug.includes('testimonial') ||
    slug.includes('disclaimer') ||
    slug.includes('consent') ||
    slug.includes('compliance')
  ) {
    return authPropertyLegal.renderLegalAndSocialVariants(fam, icon, slug, variantIndex);
  }

  // 14. PAYMENTS & FINANCIAL WIDGETS
  if (
    cat === 'Payments' ||
    cat === 'Financial Widgets' ||
    slug.includes('receipt') ||
    slug.includes('invoice') ||
    slug.includes('payment') ||
    slug.includes('bank') ||
    slug.includes('wallet') ||
    slug.includes('balance') ||
    slug.includes('split') ||
    slug.includes('emi') ||
    slug.includes('transaction') ||
    slug.includes('spending') ||
    slug.includes('tax')
  ) {
    return financialPayments.renderPaymentsAndFinancialVariants(fam, icon, slug, variantIndex);
  }

  // 15. NAVIGATION & BOTTOM BARS
  if (
    cat === 'Navigation' ||
    cat === 'Bottom Bars' ||
    slug.endsWith('-nav') ||
    slug.startsWith('nav-') ||
    slug === 'tabs' ||
    slug.includes('tab-bar') ||
    slug.includes('notch') ||
    slug.includes('island') ||
    slug.includes('pagination') ||
    slug === 'sidebar' ||
    slug === 'topbar' ||
    slug.includes('breadcrumb') ||
    slug.includes('segmented') ||
    slug.includes('stepper')
  ) {
    return navMenu.renderNavigationSuiteVariants(fam, icon, slug, variantIndex);
  }

  // 16. MENUS & ACTION SHEETS
  if (
    cat === 'Menus' ||
    slug.includes('menu') ||
    slug.includes('palette') ||
    slug.includes('action-sheet')
  ) {
    return navMenu.renderMenuVariants(fam, icon, slug, variantIndex);
  }

  // 17. BUTTONS & ACTIONS
  if (
    cat === 'Buttons' ||
    cat === 'Actions' ||
    slug.endsWith('-btn') ||
    slug.includes('button') ||
    slug === 'links' ||
    slug === 'fab'
  ) {
    return buttonActions.renderButtonAndActionVariants(fam, icon, slug, variantIndex);
  }

  // 18. GENERAL TEXT/FORM INPUTS
  if (cat === 'Inputs' || slug.endsWith('-input') || slug.endsWith('-inputs') || slug.includes('field')) {
    return richArchetypes.renderInputVariants(fam, icon, slug, variantIndex);
  }

  // 19. CARDS, PRODUCT, MEDIA & TEMPLATES
  if (cat === 'Cards' || cat === 'Product' || cat === 'Media' || cat === 'Templates' || cat === 'Maps & Location') {
    return authPropertyLegal.renderPropertyVariants(fam, icon, slug, variantIndex);
  }

  // 20. DEFAULT TO RICH DATA DISPLAY
  return avatarChipBadge.renderChipVariants(fam, icon, slug, variantIndex);
}

module.exports = {
  renderCategoryVariant,
  renderIconVariant,
  renderDividerVariant,
  renderContainerVariant,
  renderTypographyVariant,
  renderColorVariant,
  renderSpacingVariant,
  renderButtonVariant,
  renderInputVariant,
  renderSelectionVariant,
  renderFeedbackVariant,
  renderPaymentVariant
};

