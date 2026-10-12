/**
 * RentenPe UI Kit - Navigation, Bottom Bars & Menus Archetypes
 * 100% Authentic, pixel-perfect, mobile-constrained variants inspired by Pinterest, Apple, CRED.
 */

function renderNavigationSuiteVariants(fam, icon, slug, variantIndex) {
  const isBreadcrumbs = slug.includes('breadcrumb');
  const isPagination = slug.includes('pagination');
  const isSidebar = slug.includes('side') || slug === 'sidebar';
  const isTopbar = slug.includes('top') || slug.includes('app-bar') || slug === 'topbar';
  const isStepper = slug.includes('stepper');

  switch (variantIndex) {
    case 0: // Model A: Pinterest Floating Dark Capsule Dock with Active White Circle (media_1791644905690.png)
      return `<div style="width:100%;max-width:320px;background:#0F172A;border-radius:99px;padding:8px 16px;display:flex;align-items:center;justify-content:space-between;box-shadow:0 16px 36px rgba(15,23,42,0.4);">
        <div style="width:38px;height:38px;border-radius:50%;background:#FFFFFF;color:#0F172A;display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:900;box-shadow:0 4px 12px rgba(255,255,255,0.25);">🏠</div>
        <span style="font-size:18px;color:#94A3B8;cursor:pointer;">🏢</span>
        <span style="font-size:18px;color:#94A3B8;cursor:pointer;">💳</span>
        <span style="font-size:18px;color:#94A3B8;cursor:pointer;">👤</span>
      </div>`;

    case 1: // Model B: Dynamic Island Live Rent Clearing Notch (media_1791644893142.png)
      return `<div style="width:100%;max-width:320px;background:#000000;border-radius:99px;padding:8px 18px;color:#fff;display:flex;align-items:center;justify-content:space-between;box-shadow:0 12px 28px rgba(0,0,0,0.5);">
        <div style="display:flex;align-items:center;gap:8px;">
          <span style="width:8px;height:8px;border-radius:50%;background:#10B981;box-shadow:0 0 8px #10B981;"></span>
          <span style="font-size:11px;font-weight:800;letter-spacing:0.02em;">Rent Clearing</span>
        </div>
        <span style="font-size:12px;font-weight:900;color:#60A5FA;">₹28,500</span>
      </div>`;

    case 2: // Model C: Pinterest Continuous Rail Vertical Stepper (pin_1.jpg)
      return `<div style="width:100%;max-width:320px;background:#fff;border:1px solid #E2E8F0;border-radius:22px;padding:20px;box-shadow:0 4px 14px rgba(0,0,0,0.04);display:flex;flex-direction:column;gap:12px;">
        <div style="display:flex;gap:12px;position:relative;">
          <div style="display:flex;flex-direction:column;align-items:center;"><div style="width:24px;height:24px;border-radius:50%;background:#10B981;color:#fff;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:900;">✓</div><div style="width:2px;height:28px;background:#10B981;"></div></div>
          <div><div style="font-size:12px;font-weight:800;color:#0F172A;">Tenant KYC Verification</div><div style="font-size:10px;color:#059669;font-weight:700;">Completed on 25-Feb</div></div>
        </div>
        <div style="display:flex;gap:12px;position:relative;">
          <div style="display:flex;flex-direction:column;align-items:center;"><div style="width:24px;height:24px;border-radius:50%;background:#2563EB;color:#fff;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:900;">2</div><div style="width:2px;height:28px;background:#E2E8F0;"></div></div>
          <div><div style="font-size:12px;font-weight:800;color:#0F172A;">e-Sign Lease Agreement</div><div style="font-size:10px;color:#2563EB;font-weight:700;">Awaiting Landlord Signature</div></div>
        </div>
        <div style="display:flex;gap:12px;">
          <div style="width:24px;height:24px;border-radius:50%;background:#F1F5F9;color:#94A3B8;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;">3</div>
          <div><div style="font-size:12px;font-weight:700;color:#64748B;">Escrow Deposit Lock</div><div style="font-size:10px;color:#94A3B8;">Pending Signature</div></div>
        </div>
      </div>`;

    case 3: // Model D: Chevron Breadcrumbs Trail
      return `<div style="width:100%;max-width:320px;background:#fff;border:1px solid #E2E8F0;border-radius:14px;padding:12px 14px;display:flex;align-items:center;gap:6px;font-size:11px;font-weight:700;overflow-x:auto;">
        <span style="color:#64748B;">Home</span><span style="color:#CBD5E1;">›</span>
        <span style="color:#64748B;">Properties</span><span style="color:#CBD5E1;">›</span>
        <span style="color:#2563EB;font-weight:800;">Duplex #402</span>
      </div>`;

    case 4: // Model E: Numbered Pill Pagination Bar
      return `<div style="width:100%;max-width:320px;background:#fff;border:1px solid #E2E8F0;border-radius:18px;padding:10px 14px;display:flex;align-items:center;justify-content:space-between;">
        <button style="border:none;background:#F8FAFC;padding:6px 12px;border-radius:8px;font-size:11px;font-weight:700;color:#64748B;">‹ Prev</button>
        <div style="display:flex;gap:4px;">
          <span style="width:28px;height:28px;border-radius:8px;background:#0F172A;color:#fff;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:800;">1</span>
          <span style="width:28px;height:28px;border-radius:8px;background:#F1F5F9;color:#334155;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;">2</span>
          <span style="width:28px;height:28px;border-radius:8px;background:#F1F5F9;color:#334155;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;">3</span>
        </div>
        <button style="border:none;background:#F8FAFC;padding:6px 12px;border-radius:8px;font-size:11px;font-weight:700;color:#0F172A;">Next ›</button>
      </div>`;

    case 5: // Model F: Mobile App Top Bar with Back and Actions
      return `<div style="width:100%;max-width:320px;background:#fff;border:1px solid #E2E8F0;border-radius:18px;padding:12px 16px;display:flex;align-items:center;justify-content:space-between;box-shadow:0 2px 8px rgba(0,0,0,0.04);">
        <div style="display:flex;align-items:center;gap:10px;">
          <button style="border:none;background:#F8FAFC;width:32px;height:32px;border-radius:8px;cursor:pointer;font-weight:800;">‹</button>
          <span style="font-size:13px;font-weight:800;color:#0F172A;">Rent Agreement</span>
        </div>
        <div style="display:flex;gap:6px;"><button style="border:none;background:#F1F5F9;width:32px;height:32px;border-radius:8px;font-size:14px;">🔍</button><button style="border:none;background:#F1F5F9;width:32px;height:32px;border-radius:8px;font-size:14px;">⋮</button></div>
      </div>`;

    case 6: // Model G: Curved Notch Bottom Nav Bar
      return `<div style="width:100%;max-width:320px;background:#fff;border:1px solid #E2E8F0;border-radius:24px;padding:10px 18px;display:flex;align-items:center;justify-content:space-between;box-shadow:0 8px 24px rgba(0,0,0,0.06);position:relative;">
        <span style="font-size:16px;color:#2563EB;">🏠</span>
        <span style="font-size:16px;color:#64748B;">📑</span>
        <div style="width:44px;height:44px;border-radius:50%;background:#2563EB;color:#fff;display:flex;align-items:center;justify-content:center;font-size:20px;font-weight:900;margin-top:-20px;box-shadow:0 6px 16px rgba(37,99,235,0.4);">+</div>
        <span style="font-size:16px;color:#64748B;">💳</span>
        <span style="font-size:16px;color:#64748B;">⚙️</span>
      </div>`;

    case 7: // Model H: Segmented Pill Tab Switcher
      return `<div style="width:100%;max-width:320px;background:#F1F5F9;border-radius:99px;padding:4px;display:flex;gap:4px;">
        <button style="flex:1;padding:8px 12px;background:#fff;border:none;border-radius:99px;font-size:11px;font-weight:800;color:#0F172A;box-shadow:0 2px 4px rgba(0,0,0,0.05);">Active Lease</button>
        <button style="flex:1;padding:8px 12px;background:transparent;border:none;border-radius:99px;font-size:11px;font-weight:600;color:#64748B;">Payment History</button>
      </div>`;

    case 8: // Model I: Compact Mobile Side Navigation Drawer
      return `<div style="width:100%;max-width:320px;background:#0F172A;border-radius:22px;padding:20px;color:#fff;display:flex;flex-direction:column;gap:14px;">
        <div style="display:flex;align-items:center;gap:10px;padding-bottom:10px;border-bottom:1px solid #1E293B;">
          <div style="width:36px;height:36px;border-radius:50%;background:#2563EB;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:800;">JK</div>
          <div><div style="font-size:13px;font-weight:800;">Joshua Kanatt</div><div style="font-size:10px;color:#94A3B8;">Tenant ID: #RP-8902</div></div>
        </div>
        <div style="display:flex;flex-direction:column;gap:8px;font-size:12px;font-weight:700;">
          <div style="padding:8px 12px;background:#1E293B;border-radius:10px;color:#60A5FA;">🏠 Overview Deck</div>
          <div style="padding:8px 12px;color:#94A3B8;">📜 Lease Agreements</div>
          <div style="padding:8px 12px;color:#94A3B8;">💳 Rent Escrow Wallet</div>
        </div>
      </div>`;

    case 9: // Model J: Minimal Monoline Breadcrumbs
      return `<div style="width:100%;max-width:320px;background:#fff;border:1.5px solid #0F172A;border-radius:12px;padding:10px 14px;font-size:11px;font-weight:800;">
        RENTENPE / BLR / INDIRANAGAR / DUPLEX-402
      </div>`;

    case 10: // Model K: Apple Cupertino Porcelain Navigation Dock (Light)
      return `<div style="width:100%;max-width:320px;background:#FFFFFF;border:1px solid #E2E8F0;border-radius:99px;padding:8px 20px;box-shadow:0 12px 30px rgba(15,23,42,0.06);display:flex;align-items:center;justify-content:space-between;">
        <div style="padding:8px 16px;background:#ECFDF5;border-radius:99px;color:#059669;font-size:12px;font-weight:800;display:flex;align-items:center;gap:6px;"><span>🍏</span> Home</div>
        <span style="font-size:12px;font-weight:700;color:#64748B;">Leases</span>
        <span style="font-size:12px;font-weight:700;color:#64748B;">Wallet</span>
      </div>`;

    case 11: // Model L: CRED Acid Neon Titanium Center-FAB Dock (Dark)
    default:
      return `<div style="width:100%;max-width:320px;background:#09090B;border:1px solid rgba(204,255,0,0.4);border-radius:99px;padding:8px 20px;color:#FFFFFF;box-shadow:0 20px 40px rgba(0,0,0,0.8);display:flex;align-items:center;justify-content:space-between;">
        <span style="font-size:14px;color:#CCFF00;font-weight:900;">NODE</span>
        <div style="width:40px;height:40px;border-radius:50%;background:#CCFF00;color:#09090B;display:flex;align-items:center;justify-content:center;font-size:18px;font-weight:900;box-shadow:0 0 16px #CCFF00;">⚡</div>
        <span style="font-size:14px;color:#71717A;font-weight:700;">VAULT</span>
      </div>`;
  }
}

function renderMenuVariants(fam, icon, slug, variantIndex) {
  switch (variantIndex) {
    case 0: // Model A: Contextual Document Actions Menu
      return `<div style="width:100%;max-width:320px;background:#fff;border:1px solid #E2E8F0;border-radius:20px;padding:8px;box-shadow:0 12px 30px rgba(0,0,0,0.08);display:flex;flex-direction:column;gap:2px;">
        <div style="padding:10px 14px;border-radius:10px;font-size:12px;font-weight:700;color:#0F172A;display:flex;align-items:center;gap:10px;cursor:pointer;"><span>📄</span> View Rental Agreement</div>
        <div style="padding:10px 14px;border-radius:10px;font-size:12px;font-weight:700;color:#0F172A;display:flex;align-items:center;gap:10px;cursor:pointer;"><span>⬇</span> Download Tax Receipt</div>
        <div style="padding:10px 14px;border-radius:10px;font-size:12px;font-weight:700;color:#0F172A;display:flex;align-items:center;gap:10px;cursor:pointer;"><span>↗</span> Share with Accountant</div>
        <div style="height:1px;background:#F1F5F9;margin:4px 0;"></div>
        <div style="padding:10px 14px;border-radius:10px;font-size:12px;font-weight:700;color:#EF4444;display:flex;align-items:center;gap:10px;cursor:pointer;"><span>🗑</span> Terminate Lease</div>
      </div>`;

    case 1: // Model B: User Profile Menu Card
      return `<div style="width:100%;max-width:320px;background:#fff;border:1px solid #E2E8F0;border-radius:22px;padding:16px;box-shadow:0 10px 28px rgba(0,0,0,0.06);display:flex;flex-direction:column;gap:12px;">
        <div style="display:flex;align-items:center;gap:10px;padding-bottom:10px;border-bottom:1px solid #F1F5F9;">
          <div style="width:40px;height:40px;border-radius:50%;background:#2563EB;color:#fff;display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:800;">JK</div>
          <div><div style="font-size:13px;font-weight:800;color:#0F172A;">Joshua Kanatt</div><div style="font-size:10px;color:#059669;font-weight:700;">● Gold Tenant (814 Score)</div></div>
        </div>
        <div style="display:flex;flex-direction:column;gap:6px;font-size:12px;font-weight:700;">
          <div style="padding:6px 8px;color:#334155;">⚙️ Account Settings</div>
          <div style="padding:6px 8px;color:#334155;">💳 Linked Bank Accounts</div>
          <div style="padding:6px 8px;color:#EF4444;">🚪 Sign Out</div>
        </div>
      </div>`;

    case 2: // Model C: Command Palette ⌘K Modal
      return `<div style="width:100%;max-width:320px;background:#09090B;border:1px solid #27272A;border-radius:22px;padding:16px;color:#fff;box-shadow:0 20px 40px rgba(0,0,0,0.8);display:flex;flex-direction:column;gap:12px;">
        <div style="display:flex;align-items:center;gap:8px;padding-bottom:10px;border-bottom:1px solid #27272A;">
          <span style="color:#71717A;">🔍</span>
          <input type="text" value="Pay Rent" style="background:transparent;border:none;outline:none;color:#fff;font-size:13px;font-weight:700;width:100%;">
          <span style="font-size:10px;color:#71717A;border:1px solid #3F3F46;padding:2px 6px;border-radius:4px;">ESC</span>
        </div>
        <div style="display:flex;flex-direction:column;gap:6px;font-size:12px;">
          <div style="padding:8px 10px;background:#18181B;border-radius:8px;color:#38BDF8;font-weight:800;display:flex;justify-content:space-between;"><span>⚡ Pay March Rent (₹28.5k)</span><span>↵</span></div>
          <div style="padding:8px 10px;color:#A1A1AA;">📄 View Indiranagar Lease</div>
        </div>
      </div>`;

    case 3: // Model D: Action Sheet Drawer
      return `<div style="width:100%;max-width:320px;background:#fff;border:1px solid #E2E8F0;border-radius:24px 24px 0 0;padding:20px;box-shadow:0 -8px 24px rgba(0,0,0,0.08);display:flex;flex-direction:column;gap:10px;">
        <div style="width:36px;height:4px;background:#CBD5E1;border-radius:99px;margin:0 auto 6px;"></div>
        <div style="font-size:13px;font-weight:800;color:#0F172A;text-align:center;">Payment Method Options</div>
        <button style="padding:12px;background:#EFF6FF;border:none;border-radius:12px;color:#2563EB;font-size:12px;font-weight:800;">UPI Fast Transfer (Zero Fee)</button>
        <button style="padding:12px;background:#F8FAFC;border:none;border-radius:12px;color:#334155;font-size:12px;font-weight:700;">Credit Card (1.2% Cashback)</button>
      </div>`;

    case 4: // Model E: Nested Drilldown Submenu
      return `<div style="width:100%;max-width:320px;background:#fff;border:1px solid #E2E8F0;border-radius:18px;padding:8px;">
        <div style="padding:10px 12px;font-size:12px;font-weight:700;display:flex;justify-content:space-between;"><span>Society Rules</span><span>›</span></div>
        <div style="padding:10px 12px;font-size:12px;font-weight:800;color:#2563EB;background:#EFF6FF;border-radius:8px;display:flex;justify-content:space-between;"><span>Move-in Policy</span><span>✓</span></div>
      </div>`;

    case 5: // Model F: Minimal Monoline Menu
      return `<div style="width:100%;max-width:320px;background:#fff;border:1.5px solid #0F172A;border-radius:14px;padding:12px;font-size:12px;font-weight:800;">
        <div style="padding:6px 0;border-bottom:1px solid #E2E8F0;">Copy Lease Link</div>
        <div style="padding:6px 0;">Share QR Code</div>
      </div>`;

    case 6: // Model G: Multi-Tier Filter Menu
      return `<div style="width:100%;max-width:320px;background:#fff;border:1px solid #E2E8F0;border-radius:18px;padding:14px;">
        <div style="font-size:11px;font-weight:800;color:#64748B;margin-bottom:6px;">QUICK ACTIONS</div>
        <div style="display:flex;gap:6px;"><button style="padding:6px 12px;background:#0F172A;color:#fff;border:none;border-radius:8px;font-size:11px;font-weight:700;">Rent Receipt</button><button style="padding:6px 12px;background:#F1F5F9;border:none;border-radius:8px;font-size:11px;font-weight:700;">e-Stamp</button></div>
      </div>`;

    case 7: // Model H: Dark Glass Action Sheet
      return `<div style="width:100%;max-width:320px;background:#09090B;border:1px solid #27272A;border-radius:20px;padding:16px;color:#fff;">
        <div style="font-size:12px;font-weight:800;margin-bottom:8px;">ESCROW TRANSACTION CONTROLS</div>
        <div style="padding:8px 0;color:#38BDF8;font-size:12px;font-weight:700;">↗ Instant Release Escrow</div>
      </div>`;

    case 8: // Model I: Danger Confirmation Menu
      return `<div style="width:100%;max-width:320px;background:#fff;border:1.5px solid #EF4444;border-radius:18px;padding:16px;display:flex;flex-direction:column;gap:8px;">
        <div style="font-size:12px;font-weight:800;color:#991B1B;">Confirm Early Lease Exit?</div>
        <button style="padding:8px;background:#EF4444;color:#fff;border:none;border-radius:8px;font-size:11px;font-weight:800;">Exit Agreement</button>
      </div>`;

    case 9: // Model J: Minimal Floating Menu
      return `<div style="width:100%;max-width:320px;background:#fff;border:1px solid #E2E8F0;border-radius:16px;padding:10px 14px;display:flex;justify-content:space-between;align-items:center;">
        <span style="font-size:12px;font-weight:700;">Rent Agreement Options</span>
        <span>⋮</span>
      </div>`;

    case 10: // Model K: Apple Cupertino Porcelain Menu (Light)
      return `<div style="width:100%;max-width:320px;background:#FFFFFF;border:1px solid #E2E8F0;border-radius:24px;padding:20px;box-shadow:0 12px 30px rgba(15,23,42,0.04);display:flex;flex-direction:column;gap:10px;">
        <div style="display:flex;justify-content:space-between;align-items:center;"><span style="font-size:13px;font-weight:900;">Porcelain Quick Menu</span><span>🍏</span></div>
        <div style="padding:10px 14px;background:#F8FAFC;border-radius:12px;font-size:12px;font-weight:700;color:#0F172A;">AirDrop Lease Document</div>
      </div>`;

    case 11: // Model L: CRED Acid Neon Titanium Menu (Dark)
    default:
      return `<div style="width:100%;max-width:320px;background:#09090B;border:1.5px solid rgba(204,255,0,0.4);border-radius:24px;padding:20px;color:#FFFFFF;box-shadow:0 20px 40px rgba(0,0,0,0.8);">
        <div style="font-size:10px;font-weight:900;color:#CCFF00;letter-spacing:0.1em;text-transform:uppercase;">CRED TITANIUM CONTROL</div>
        <div style="font-size:13px;font-weight:800;margin:6px 0;">Execute Hardware Key Sign</div>
      </div>`;
  }
}

module.exports = {
  renderNavigationSuiteVariants,
  renderMenuVariants
};
