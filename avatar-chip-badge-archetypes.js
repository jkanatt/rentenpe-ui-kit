/**
 * RentenPe UI Kit - Avatars, Chips, Badges & Data Display Archetypes
 * 100% Authentic, pixel-perfect, mobile-constrained variants for Avatars, Chips, and Data Display badges.
 */

function renderAvatarVariants(fam, icon, slug, variantIndex) {
  const isGroup = slug === 'avatar-group';
  const isPresence = slug === 'avatar-presence';
  const isBadge = slug === 'avatar-badge';
  const isEdit = slug === 'avatar-edit';
  const isPlaceholder = slug === 'avatar-placeholder';

  switch (variantIndex) {
    case 0: // Model A: Round High-Res Avatar with Verified Shield
      return `<div style="display:flex;align-items:center;gap:14px;padding:14px 18px;background:#fff;border:1px solid #E2E8F0;border-radius:20px;box-shadow:0 4px 12px rgba(0,0,0,0.04);max-width:320px;width:100%;">
        <div style="position:relative;width:48px;height:48px;">
          <div style="width:48px;height:48px;border-radius:50%;background:linear-gradient(135deg, #2563EB, #1D4ED8);color:#fff;display:flex;align-items:center;justify-content:center;font-size:18px;font-weight:800;border:2px solid #fff;box-shadow:0 4px 10px rgba(37,99,235,0.25);">JK</div>
          <span style="position:absolute;bottom:-2px;right:-2px;width:18px;height:18px;border-radius:50%;background:#10B981;color:#fff;display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:900;border:2px solid #fff;">✓</span>
        </div>
        <div><div style="font-size:14px;font-weight:800;color:#0F172A;">Joshua Kanatt</div><div style="font-size:11px;color:#059669;font-weight:700;">Verified Primary Tenant</div></div>
      </div>`;

    case 1: // Model B: Overlapping Roommate Stack with +N Counter
      return `<div style="display:flex;align-items:center;justify-content:space-between;padding:14px 18px;background:#fff;border:1px solid #E2E8F0;border-radius:20px;max-width:320px;width:100%;">
        <div style="display:flex;margin-left:10px;">
          <div style="width:36px;height:36px;border-radius:50%;background:#2563EB;color:#fff;border:2.5px solid #fff;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:800;margin-left:-10px;">JK</div>
          <div style="width:36px;height:36px;border-radius:50%;background:#10B981;color:#fff;border:2.5px solid #fff;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:800;margin-left:-10px;">PS</div>
          <div style="width:36px;height:36px;border-radius:50%;background:#F59E0B;color:#fff;border:2.5px solid #fff;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:800;margin-left:-10px;">RM</div>
          <div style="width:36px;height:36px;border-radius:50%;background:#0F172A;color:#fff;border:2.5px solid #fff;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:800;margin-left:-10px;">+2</div>
        </div>
        <div style="text-align:right;"><div style="font-size:12px;font-weight:800;color:#0F172A;">5 Roommates</div><div style="font-size:10px;color:#64748B;">Indiranagar Duplex</div></div>
      </div>`;

    case 2: // Model C: Squircle Avatar with Live Online Dot
      return `<div style="display:flex;align-items:center;gap:12px;padding:12px 16px;background:#fff;border:1px solid #E2E8F0;border-radius:18px;max-width:320px;width:100%;">
        <div style="position:relative;width:44px;height:44px;">
          <div style="width:44px;height:44px;border-radius:14px;background:#EFF6FF;color:#2563EB;display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:800;">RA</div>
          <span style="position:absolute;top:-2px;right:-2px;width:12px;height:12px;border-radius:50%;background:#10B981;border:2px solid #fff;box-shadow:0 0 6px #10B981;"></span>
        </div>
        <div><div style="font-size:13px;font-weight:800;color:#0F172A;">Rahul Anand (Landlord)</div><div style="font-size:11px;color:#10B981;font-weight:700;">● Online • Responds in 5m</div></div>
      </div>`;

    case 3: // Model D: VIP Gold Crown Avatar Badge
      return `<div style="display:flex;align-items:center;gap:12px;padding:14px 18px;background:linear-gradient(135deg, #FFFBEB 0%, #FEF3C7 100%);border:1.5px solid #F59E0B;border-radius:20px;max-width:320px;width:100%;">
        <div style="position:relative;width:46px;height:46px;">
          <div style="width:46px;height:46px;border-radius:50%;background:#92400E;color:#FEF3C7;display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:900;border:2px solid #F59E0B;">👑</div>
          <span style="position:absolute;bottom:-2px;right:-2px;padding:1px 4px;background:#D97706;color:#fff;border-radius:4px;font-size:8px;font-weight:900;">VIP</span>
        </div>
        <div><div style="font-size:13px;font-weight:900;color:#78350F;">Titanium Landlord</div><div style="font-size:10px;color:#B45309;font-weight:700;">Zero Default History (5y)</div></div>
      </div>`;

    case 4: // Model E: Avatar Edit Mode with Camera Overlay
      return `<div style="display:flex;align-items:center;gap:14px;padding:16px;background:#fff;border:1px solid #E2E8F0;border-radius:20px;max-width:320px;width:100%;">
        <div style="position:relative;width:52px;height:52px;cursor:pointer;">
          <div style="width:52px;height:52px;border-radius:50%;background:#E2E8F0;display:flex;align-items:center;justify-content:center;font-size:20px;">👤</div>
          <div style="position:absolute;inset:0;background:rgba(15,23,42,0.45);border-radius:50%;display:flex;align-items:center;justify-content:center;color:#fff;font-size:14px;">📷</div>
        </div>
        <div><div style="font-size:13px;font-weight:800;color:#0F172A;">Update Profile Photo</div><div style="font-size:11px;color:#2563EB;font-weight:700;">Tap to upload picture</div></div>
      </div>`;

    case 5: // Model F: Geometric Initials Placeholder
      return `<div style="display:flex;align-items:center;gap:10px;padding:12px;background:#F8FAFC;border:1px solid #E2E8F0;border-radius:14px;max-width:320px;width:100%;">
        <div style="width:38px;height:38px;border-radius:10px;background:#0F172A;color:#fff;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:900;letter-spacing:0.05em;">RP</div>
        <div><div style="font-size:12px;font-weight:800;color:#0F172A;">RentenPe Escrow Node</div><div style="font-size:10px;color:#64748B;">System Automated Service</div></div>
      </div>`;

    case 6: // Model G: Presence Ring States (Active, Away, Busy)
      return `<div style="display:flex;gap:12px;align-items:center;justify-content:center;padding:14px;background:#fff;border:1px solid #E2E8F0;border-radius:18px;max-width:320px;width:100%;">
        <div style="position:relative;"><div style="width:36px;height:36px;border-radius:50%;background:#EFF6FF;color:#2563EB;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:800;">A1</div><span style="position:absolute;bottom:0;right:0;width:10px;height:10px;border-radius:50%;background:#10B981;border:2px solid #fff;"></span></div>
        <div style="position:relative;"><div style="width:36px;height:36px;border-radius:50%;background:#FEF3C7;color:#D97706;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:800;">A2</div><span style="position:absolute;bottom:0;right:0;width:10px;height:10px;border-radius:50%;background:#F59E0B;border:2px solid #fff;"></span></div>
        <div style="position:relative;"><div style="width:36px;height:36px;border-radius:50%;background:#FEE2E2;color:#DC2626;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:800;">A3</div><span style="position:absolute;bottom:0;right:0;width:10px;height:10px;border-radius:50%;background:#EF4444;border:2px solid #fff;"></span></div>
      </div>`;

    case 7: // Model H: Society Security Guard Avatar
      return `<div style="display:flex;align-items:center;gap:12px;padding:12px 16px;background:#fff;border:1px solid #E2E8F0;border-radius:16px;max-width:320px;width:100%;">
        <div style="width:40px;height:40px;border-radius:50%;background:#F1F5F9;color:#334155;display:flex;align-items:center;justify-content:center;font-size:18px;">👮</div>
        <div><div style="font-size:12px;font-weight:800;color:#0F172A;">Main Gate Security</div><div style="font-size:10px;color:#64748B;">Prestige Falcon Gate 1</div></div>
      </div>`;

    case 8: // Model I: Vendor Technician Avatar
      return `<div style="display:flex;align-items:center;gap:12px;padding:12px 16px;background:#fff;border:1px solid #E2E8F0;border-radius:16px;max-width:320px;width:100%;">
        <div style="width:40px;height:40px;border-radius:50%;background:#EFF6FF;color:#2563EB;display:flex;align-items:center;justify-content:center;font-size:18px;">🔧</div>
        <div><div style="font-size:12px;font-weight:800;color:#0F172A;">Ramesh (Plumber)</div><div style="font-size:10px;color:#059669;font-weight:700;">★ 4.9 • 140 Jobs Completed</div></div>
      </div>`;

    case 9: // Model J: Minimal Monoline Avatar
      return `<div style="display:flex;align-items:center;gap:10px;padding:10px 14px;background:#fff;border:1.5px solid #0F172A;border-radius:14px;max-width:320px;width:100%;">
        <div style="width:32px;height:32px;border-radius:50%;border:1.5px solid #0F172A;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:900;">T</div>
        <span style="font-size:12px;font-weight:800;color:#0F172A;">Tenant Account</span>
      </div>`;

    case 10: // Model K: Apple Cupertino Porcelain Avatar Card (Light)
      return `<div style="display:flex;align-items:center;gap:14px;padding:18px 20px;background:#FFFFFF;border:1px solid #E2E8F0;border-radius:24px;box-shadow:0 12px 30px rgba(15,23,42,0.04);max-width:320px;width:100%;">
        <div style="position:relative;width:50px;height:50px;">
          <div style="width:50px;height:50px;border-radius:50%;background:#ECFDF5;color:#059669;display:flex;align-items:center;justify-content:center;font-size:18px;font-weight:800;border:2px solid #fff;box-shadow:0 4px 12px rgba(16,185,129,0.2);">🍏</div>
          <span style="position:absolute;bottom:0;right:0;width:14px;height:14px;border-radius:50%;background:#10B981;border:2px solid #fff;"></span>
        </div>
        <div><div style="font-size:14px;font-weight:800;color:#0F172A;">Porcelain Resident</div><div style="font-size:11px;color:#059669;font-weight:700;">Cupertino Glass Profile</div></div>
      </div>`;

    case 11: // Model L: CRED Acid Neon Titanium Avatar Pass (Dark)
    default:
      return `<div style="display:flex;align-items:center;gap:14px;padding:18px 20px;background:#09090B;border:1.5px solid rgba(204,255,0,0.4);border-radius:24px;box-shadow:0 20px 40px rgba(0,0,0,0.8);color:#FFFFFF;max-width:320px;width:100%;">
        <div style="position:relative;width:48px;height:48px;">
          <div style="width:48px;height:48px;border-radius:14px;background:#18181B;border:2px solid #CCFF00;color:#CCFF00;display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:900;box-shadow:0 0 16px rgba(204,255,0,0.3);">⚡</div>
          <span style="position:absolute;top:-4px;right:-4px;width:10px;height:10px;border-radius:50%;background:#CCFF00;box-shadow:0 0 8px #CCFF00;"></span>
        </div>
        <div><div style="font-size:11px;font-weight:900;color:#CCFF00;letter-spacing:0.1em;text-transform:uppercase;">TITANIUM RESIDENT</div><div style="font-size:14px;font-weight:800;color:#FFFFFF;margin-top:2px;">VIP Credit Tier: 840</div></div>
      </div>`;
  }
}

function renderChipVariants(fam, icon, slug, variantIndex) {
  switch (variantIndex) {
    case 0: // Model A: Status Chips Matrix
      return `<div style="display:flex;gap:8px;flex-wrap:wrap;max-width:320px;width:100%;">
        <span style="padding:6px 12px;background:#ECFDF5;color:#059669;border:1px solid #A7F3D0;border-radius:99px;font-size:11px;font-weight:800;">● Paid On-Time</span>
        <span style="padding:6px 12px;background:#FFFBEB;color:#D97706;border:1px solid #FDE68A;border-radius:99px;font-size:11px;font-weight:800;">● Due in 2 Days</span>
        <span style="padding:6px 12px;background:#FEF2F2;color:#DC2626;border:1px solid #FECACA;border-radius:99px;font-size:11px;font-weight:800;">● Overdue</span>
      </div>`;

    case 1: // Model B: Removable Filter Chips with 'x'
      return `<div style="display:flex;gap:6px;flex-wrap:wrap;max-width:320px;width:100%;">
        <span style="padding:6px 10px;background:#0F172A;color:#fff;border-radius:8px;font-size:11px;font-weight:700;display:inline-flex;align-items:center;gap:6px;">📍 Indiranagar <span style="color:#94A3B8;cursor:pointer;">✕</span></span>
        <span style="padding:6px 10px;background:#0F172A;color:#fff;border-radius:8px;font-size:11px;font-weight:700;display:inline-flex;align-items:center;gap:6px;">3 BHK <span style="color:#94A3B8;cursor:pointer;">✕</span></span>
        <span style="padding:6px 10px;background:#F1F5F9;color:#475569;border-radius:8px;font-size:11px;font-weight:600;">+ Gated Society</span>
      </div>`;

    case 2: // Model C: Price Pill Chip
      return `<div style="display:flex;gap:8px;align-items:center;max-width:320px;width:100%;">
        <span style="padding:8px 16px;background:#EFF6FF;color:#2563EB;border:1.5px solid #BFDBFE;border-radius:99px;font-size:14px;font-weight:900;">₹ 28,500 <span style="font-size:10px;color:#64748B;font-weight:600;">/ mo</span></span>
        <span style="padding:4px 8px;background:#ECFDF5;color:#059669;border-radius:6px;font-size:10px;font-weight:800;">MAINTENANCE INCL.</span>
      </div>`;

    case 3: // Model D: Action / Assist Chips
      return `<div style="display:flex;gap:6px;flex-wrap:wrap;max-width:320px;width:100%;">
        <button style="padding:8px 12px;background:#fff;border:1px solid #E2E8F0;border-radius:99px;font-size:11px;font-weight:700;color:#0F172A;display:inline-flex;align-items:center;gap:4px;cursor:pointer;"><span>📞</span> Call Landlord</button>
        <button style="padding:8px 12px;background:#fff;border:1px solid #E2E8F0;border-radius:99px;font-size:11px;font-weight:700;color:#0F172A;display:inline-flex;align-items:center;gap:4px;cursor:pointer;"><span>🧭</span> Directions</button>
      </div>`;

    case 4: // Model E: Suggestion Chips
      return `<div style="display:flex;gap:6px;flex-wrap:wrap;max-width:320px;width:100%;">
        <span style="padding:6px 12px;background:#F8FAFC;border:1px dashed #CBD5E1;border-radius:99px;font-size:11px;font-weight:600;color:#64748B;">💡 Near Metro Station</span>
        <span style="padding:6px 12px;background:#F8FAFC;border:1px dashed #CBD5E1;border-radius:99px;font-size:11px;font-weight:600;color:#64748B;">💡 Zero Brokerage</span>
      </div>`;

    case 5: // Model F: Count & Notification Badge Pill
      return `<div style="display:flex;gap:10px;align-items:center;max-width:320px;width:100%;">
        <div style="position:relative;padding:10px 14px;background:#fff;border:1px solid #E2E8F0;border-radius:14px;display:flex;align-items:center;gap:8px;">
          <span>🔔 Notifications</span>
          <span style="padding:2px 6px;background:#EF4444;color:#fff;border-radius:99px;font-size:10px;font-weight:900;">3</span>
        </div>
      </div>`;

    case 6: // Model G: Choice Chip (Selected vs Unselected)
      return `<div style="display:flex;gap:6px;max-width:320px;width:100%;">
        <span style="padding:8px 14px;background:#2563EB;color:#fff;border-radius:10px;font-size:12px;font-weight:800;">1 BHK ✓</span>
        <span style="padding:8px 14px;background:#F8FAFC;border:1px solid #E2E8F0;color:#64748B;border-radius:10px;font-size:12px;font-weight:600;">2 BHK</span>
        <span style="padding:8px 14px;background:#F8FAFC;border:1px solid #E2E8F0;color:#64748B;border-radius:10px;font-size:12px;font-weight:600;">3 BHK</span>
      </div>`;

    case 7: // Model H: Trust & Government e-Stamp Tag
      return `<div style="padding:8px 14px;background:#F0FDF4;border:1.5px solid #86EFAC;border-radius:99px;color:#166534;font-size:11px;font-weight:800;display:inline-flex;align-items:center;gap:6px;">
        <span>🔒</span> Government e-Stamp #KA-2026-9041 Verified
      </div>`;

    case 8: // Model I: Amenity Metadata Chips
      return `<div style="display:flex;gap:6px;flex-wrap:wrap;max-width:320px;width:100%;">
        <span style="padding:4px 8px;background:#EFF6FF;color:#2563EB;border-radius:6px;font-size:10px;font-weight:700;">🏊 Pool</span>
        <span style="padding:4px 8px;background:#EFF6FF;color:#2563EB;border-radius:6px;font-size:10px;font-weight:700;">🏋️ Gym</span>
        <span style="padding:4px 8px;background:#EFF6FF;color:#2563EB;border-radius:6px;font-size:10px;font-weight:700;">⚡ 100% Backup</span>
      </div>`;

    case 9: // Model J: Micro Dot Indicator Badge
      return `<div style="display:flex;align-items:center;gap:8px;padding:8px 14px;background:#fff;border:1px solid #E2E8F0;border-radius:99px;">
        <span style="width:8px;height:8px;border-radius:50%;background:#10B981;box-shadow:0 0 6px #10B981;"></span>
        <span style="font-size:11px;font-weight:800;color:#0F172A;">Escrow Node Online</span>
      </div>`;

    case 10: // Model K: Apple Cupertino Porcelain Badge (Light)
      return `<div style="padding:8px 16px;background:#FFFFFF;border:1px solid #E2E8F0;border-radius:99px;box-shadow:0 4px 14px rgba(15,23,42,0.06);display:inline-flex;align-items:center;gap:8px;">
        <span style="color:#059669;font-size:12px;">🍏</span>
        <span style="font-size:11px;font-weight:800;color:#0F172A;">Porcelain Verified</span>
        <span style="padding:2px 6px;background:#ECFDF5;color:#059669;border-radius:99px;font-size:9px;font-weight:900;">A+</span>
      </div>`;

    case 11: // Model L: CRED Acid Neon Titanium Pill Badge (Dark)
    default:
      return `<div style="padding:8px 16px;background:#09090B;border:1px solid #CCFF00;border-radius:99px;box-shadow:0 0 16px rgba(204,255,0,0.25);color:#CCFF00;display:inline-flex;align-items:center;gap:8px;">
        <span style="width:6px;height:6px;border-radius:50%;background:#CCFF00;box-shadow:0 0 6px #CCFF00;"></span>
        <span style="font-size:11px;font-weight:900;letter-spacing:0.08em;text-transform:uppercase;">TITANIUM PRESTIGE PASS</span>
      </div>`;
  }
}

module.exports = {
  renderAvatarVariants,
  renderChipVariants
};
