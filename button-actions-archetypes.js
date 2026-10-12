/**
 * RentenPe UI Kit - Button & Action Archetypes
 * 100% Authentic, domain-specific variants for all 12 Button types and 6 Action types.
 */

function renderButtonAndActionVariants(fam, icon, slug, variantIndex) {
  const isDestructive = slug.includes('destructive');
  const isPill = slug.includes('pill');
  const isIcon = slug.includes('icon-btn');
  const isLoading = slug.includes('loading');
  const isGradient = slug.includes('gradient');
  const isFab = slug === 'fab';

  switch (variantIndex) {
    case 0: // Model A: High-Contrast Obsidian Primary CTA
      return `<div style="width:100%;max-width:320px;display:flex;justify-content:center;">
        <button style="width:100%;padding:14px 24px;background:#0F172A;color:#FFFFFF;border:none;border-radius:${isPill ? '99px' : '14px'};font-size:13px;font-weight:800;display:flex;align-items:center;justify-content:center;gap:8px;box-shadow:0 8px 20px rgba(15,23,42,0.25);cursor:pointer;">
          <span>${icon || '⚡'}</span>
          <span>${fam || 'Pay Monthly Rent ₹28,500'}</span>
        </button>
      </div>`;

    case 1: // Model B: Royal Blue Elevation Button
      return `<div style="width:100%;max-width:320px;display:flex;justify-content:center;">
        <button style="width:100%;padding:14px 24px;background:#2563EB;color:#FFFFFF;border:none;border-radius:${isPill ? '99px' : '14px'};font-size:13px;font-weight:800;display:flex;align-items:center;justify-content:center;gap:8px;box-shadow:0 8px 24px rgba(37,99,235,0.35);cursor:pointer;">
          <span>Verify & e-Sign Lease</span>
          <span>→</span>
        </button>
      </div>`;

    case 2: // Model C: Destructive Warning Action Button
      return `<div style="width:100%;max-width:320px;display:flex;justify-content:center;">
        <button style="width:100%;padding:14px 24px;background:#EF4444;color:#FFFFFF;border:none;border-radius:${isPill ? '99px' : '14px'};font-size:13px;font-weight:800;display:flex;align-items:center;justify-content:center;gap:8px;box-shadow:0 8px 20px rgba(239,68,68,0.3);cursor:pointer;">
          <span>🗑</span>
          <span>Cancel Lease & Forfeit</span>
        </button>
      </div>`;

    case 3: // Model D: Tactile Micro Floating Action Button (FAB)
      return `<div style="display:flex;align-items:center;justify-content:center;">
        <button style="width:58px;height:58px;border-radius:50%;background:#0F172A;color:#fff;border:none;box-shadow:0 14px 28px rgba(15,23,42,0.35), 0 0 0 4px rgba(37,99,235,0.2);display:flex;align-items:center;justify-content:center;font-size:24px;cursor:pointer;">
          +
        </button>
      </div>`;

    case 4: // Model E: Loading State Spinner Button
      return `<div style="width:100%;max-width:320px;display:flex;justify-content:center;">
        <button style="width:100%;padding:14px 24px;background:#2563EB;color:#FFFFFF;border:none;border-radius:${isPill ? '99px' : '14px'};font-size:13px;font-weight:800;display:flex;align-items:center;justify-content:center;gap:10px;cursor:not-allowed;opacity:0.9;">
          <div style="width:16px;height:16px;border:2px solid rgba(255,255,255,0.3);border-top-color:#fff;border-radius:50%;"></div>
          <span>Locking Escrow Deposit...</span>
        </button>
      </div>`;

    case 5: // Model F: Liquid Emerald Gradient Button
      return `<div style="width:100%;max-width:320px;display:flex;justify-content:center;">
        <button style="width:100%;padding:14px 24px;background:linear-gradient(135deg, #10B981 0%, #059669 100%);color:#FFFFFF;border:none;border-radius:${isPill ? '99px' : '14px'};font-size:13px;font-weight:800;display:flex;align-items:center;justify-content:center;gap:8px;box-shadow:0 8px 24px rgba(16,185,129,0.35);cursor:pointer;">
          <span>✓ Instant Settlement Completed</span>
        </button>
      </div>`;

    case 6: // Model G: Secondary Outline Monoline Button
      return `<div style="width:100%;max-width:320px;display:flex;justify-content:center;">
        <button style="width:100%;padding:13px 24px;background:#FFFFFF;color:#0F172A;border:1.5px solid #0F172A;border-radius:${isPill ? '99px' : '14px'};font-size:13px;font-weight:800;display:flex;align-items:center;justify-content:center;gap:8px;cursor:pointer;">
          <span>View Previous Invoices</span>
        </button>
      </div>`;

    case 7: // Model H: Split Dropdown Action Button
      return `<div style="width:100%;max-width:320px;display:flex;border-radius:14px;overflow:hidden;box-shadow:0 6px 18px rgba(15,23,42,0.15);">
        <button style="flex:1;padding:14px 18px;background:#0F172A;color:#fff;border:none;font-size:13px;font-weight:800;cursor:pointer;">Download Legal PDF</button>
        <div style="width:1px;background:rgba(255,255,255,0.15);"></div>
        <button style="padding:14px 16px;background:#0F172A;color:#fff;border:none;font-size:12px;font-weight:800;cursor:pointer;">▼</button>
      </div>`;

    case 8: // Model I: Circular Icon Action Disc
      return `<div style="display:flex;gap:12px;justify-content:center;">
        <button style="width:44px;height:44px;border-radius:50%;background:#EFF6FF;color:#2563EB;border:none;display:flex;align-items:center;justify-content:center;font-size:18px;cursor:pointer;">📞</button>
        <button style="width:44px;height:44px;border-radius:50%;background:#F0FDF4;color:#16A34A;border:none;display:flex;align-items:center;justify-content:center;font-size:18px;cursor:pointer;">💬</button>
        <button style="width:44px;height:44px;border-radius:50%;background:#F8FAFC;color:#0F172A;border:1px solid #E2E8F0;display:flex;align-items:center;justify-content:center;font-size:18px;cursor:pointer;">↗</button>
      </div>`;

    case 9: // Model J: Micro Pill Text Action Link
      return `<div style="display:flex;justify-content:center;">
        <button style="padding:6px 14px;background:#F1F5F9;border:none;border-radius:99px;font-size:11px;font-weight:800;color:#2563EB;cursor:pointer;">
          + Add New Roommate Share
        </button>
      </div>`;

    case 10: // Model K: Apple Cupertino Porcelain Luxury Button (Light)
      return `<div style="width:100%;max-width:320px;display:flex;justify-content:center;">
        <button style="width:100%;padding:15px 24px;background:#FFFFFF;border:1px solid #E2E8F0;border-radius:20px;font-size:13px;font-weight:800;color:#0F172A;box-shadow:0 8px 24px rgba(15,23,42,0.06);display:flex;align-items:center;justify-content:center;gap:8px;cursor:pointer;">
          <span>🍏</span>
          <span>Porcelain Action Button</span>
        </button>
      </div>`;

    case 11: // Model L: CRED Acid Neon Titanium Button (Dark)
    default:
      return `<div style="width:100%;max-width:320px;display:flex;justify-content:center;">
        <button style="width:100%;padding:15px 24px;background:#09090B;border:1.5px solid #CCFF00;border-radius:18px;font-size:13px;font-weight:900;color:#CCFF00;box-shadow:0 0 20px rgba(204,255,0,0.3);letter-spacing:0.04em;display:flex;align-items:center;justify-content:center;gap:8px;cursor:pointer;">
          <span>⚡</span>
          <span>EXECUTE TITANIUM PAY ≫</span>
        </button>
      </div>`;
  }
}

module.exports = {
  renderButtonAndActionVariants
};
