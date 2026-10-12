/**
 * RentenPe UI Kit - Selection & Dropdown Archetypes
 * 100% Authentic, domain-specific variants for Checkboxes, Radios, Toggles, Sliders, and Dropdowns.
 * Mobile constrained (max-width: 320px to 340px), Apple/CRED/Pinterest inspired.
 */

function renderCheckboxVariants(fam, icon, variantIndex) {
  switch (variantIndex) {
    case 0: // Model A: Classic Rounded Verified Checkbox
      return `<div style="width:100%;max-width:320px;background:#fff;border:1px solid #E2E8F0;border-radius:16px;padding:14px 16px;display:flex;align-items:center;justify-content:space-between;box-shadow:0 2px 8px rgba(0,0,0,0.04);">
        <div style="display:flex;align-items:center;gap:12px;">
          <div style="width:22px;height:22px;border-radius:6px;background:#2563EB;color:#fff;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:900;">✓</div>
          <div><div style="font-size:13px;font-weight:700;color:#0F172A;">Verified Tenant Check</div><div style="font-size:11px;color:#64748B;">Automated CIBIL verification</div></div>
        </div>
        <span style="font-size:10px;font-weight:800;color:#059669;background:#ECFDF5;padding:2px 6px;border-radius:4px;">FREE</span>
      </div>`;

    case 1: // Model B: Feature Card Checkbox with Price
      return `<div style="width:100%;max-width:320px;padding:16px;background:#EFF6FF;border:2px solid #2563EB;border-radius:18px;display:flex;align-items:center;justify-content:space-between;cursor:pointer;box-shadow:0 4px 12px rgba(37,99,235,0.08);">
        <div style="display:flex;align-items:center;gap:12px;">
          <span style="font-size:22px;">🛡️</span>
          <div><div style="font-size:13px;font-weight:800;color:#0F172A;">Zero-Deposit Guarantee</div><div style="font-size:11px;color:#2563EB;font-weight:600;">₹199 / mo coverage</div></div>
        </div>
        <div style="width:22px;height:22px;border-radius:6px;background:#2563EB;color:#fff;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:900;">✓</div>
      </div>`;

    case 2: // Model C: Pill Checkbox with Active State
      return `<div style="width:100%;max-width:320px;display:flex;gap:8px;">
        <div style="flex:1;padding:10px 12px;background:#0F172A;color:#fff;border-radius:99px;display:flex;align-items:center;justify-content:center;gap:8px;font-size:12px;font-weight:700;">
          <span style="width:16px;height:16px;border-radius:50%;background:#10B981;color:#fff;display:flex;align-items:center;justify-content:center;font-size:10px;">✓</span>
          <span>Pet Friendly</span>
        </div>
        <div style="flex:1;padding:10px 12px;background:#F8FAFC;border:1px solid #E2E8F0;color:#64748B;border-radius:99px;display:flex;align-items:center;justify-content:center;gap:8px;font-size:12px;font-weight:600;">
          <span style="width:16px;height:16px;border-radius:50%;border:1.5px solid #CBD5E1;"></span>
          <span>Parking</span>
        </div>
      </div>`;

    case 3: // Model D: Deposit Shield Multi-Option Checkbox Group
      return `<div style="width:100%;max-width:320px;background:#fff;border:1px solid #E2E8F0;border-radius:18px;padding:16px;display:flex;flex-direction:column;gap:10px;">
        <div style="display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid #F1F5F9;">
          <div style="width:20px;height:20px;border-radius:5px;background:#10B981;color:#fff;display:flex;align-items:center;justify-content:center;font-size:12px;">✓</div>
          <span style="font-size:13px;font-weight:700;color:#0F172A;">Water & Sewage Charges Included</span>
        </div>
        <div style="display:flex;align-items:center;gap:10px;padding:8px 0;">
          <div style="width:20px;height:20px;border-radius:5px;border:2px solid #CBD5E1;"></div>
          <span style="font-size:13px;font-weight:600;color:#64748B;">Clubhouse & Gym Access</span>
        </div>
      </div>`;

    case 4: // Model E: Indeterminate State Checkbox
      return `<div style="width:100%;max-width:320px;background:#fff;border:1px solid #E2E8F0;border-radius:16px;padding:14px 16px;display:flex;align-items:center;justify-content:space-between;">
        <div style="display:flex;align-items:center;gap:10px;">
          <div style="width:20px;height:20px;border-radius:5px;background:#2563EB;color:#fff;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:900;">–</div>
          <span style="font-size:13px;font-weight:800;color:#0F172A;">Society Maintenance (2 of 4 selected)</span>
        </div>
        <span style="font-size:11px;color:#2563EB;font-weight:700;">Partial</span>
      </div>`;

    case 5: // Model F: WhatsApp Notification Agreement Checkbox
      return `<div style="width:100%;max-width:320px;background:#F0FDF4;border:1px solid #BBF7D0;border-radius:16px;padding:14px 16px;display:flex;align-items:center;gap:12px;">
        <div style="width:22px;height:22px;border-radius:6px;background:#16A34A;color:#fff;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:900;">✓</div>
        <div style="font-size:12px;color:#166534;font-weight:600;line-height:1.4;">Send official rent receipts & OTP alerts on <strong style="font-weight:800;">WhatsApp</strong></div>
      </div>`;

    case 6: // Model G: Minimal Square Clean Checkbox
      return `<div style="width:100%;max-width:320px;display:flex;align-items:center;gap:12px;padding:12px 14px;background:#fff;border:1.5px solid #0F172A;border-radius:12px;">
        <div style="width:18px;height:18px;background:#0F172A;color:#fff;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:900;">✓</div>
        <span style="font-size:13px;font-weight:800;color:#0F172A;">I accept the 11-Month Rental Terms</span>
      </div>`;

    case 7: // Model H: Amber Urgent Action Checkbox
      return `<div style="width:100%;max-width:320px;background:#FFFBEB;border:1.5px solid #F59E0B;border-radius:16px;padding:14px 16px;display:flex;align-items:center;justify-content:space-between;">
        <div style="display:flex;align-items:center;gap:10px;">
          <div style="width:20px;height:20px;border-radius:5px;background:#D97706;color:#fff;display:flex;align-items:center;justify-content:center;font-size:12px;">✓</div>
          <div><div style="font-size:12px;font-weight:800;color:#92400E;">Authorize Auto-Debit ₹28,500</div><div style="font-size:10px;color:#B45309;">Triggers on 1st of every month</div></div>
        </div>
      </div>`;

    case 8: // Model I: Large Selection Tile Checkbox
      return `<div style="width:100%;max-width:320px;display:grid;grid-template-columns:1fr 1fr;gap:10px;">
        <div style="padding:14px;background:#EFF6FF;border:2px solid #2563EB;border-radius:14px;display:flex;flex-direction:column;gap:8px;">
          <div style="display:flex;justify-content:space-between;"><span style="font-size:18px;">🏊</span><div style="width:18px;height:18px;border-radius:4px;background:#2563EB;color:#fff;display:flex;align-items:center;justify-content:center;font-size:11px;">✓</div></div>
          <div style="font-size:12px;font-weight:800;color:#0F172A;">Swimming Pool</div>
        </div>
        <div style="padding:14px;background:#F8FAFC;border:1px solid #E2E8F0;border-radius:14px;display:flex;flex-direction:column;gap:8px;">
          <div style="display:flex;justify-content:space-between;"><span style="font-size:18px;">🏋️</span><div style="width:18px;height:18px;border-radius:4px;border:1.5px solid #CBD5E1;"></div></div>
          <div style="font-size:12px;font-weight:700;color:#64748B;">Gymnasium</div>
        </div>
      </div>`;

    case 9: // Model J: Monoline Minimal Ghost Checkbox
      return `<div style="width:100%;max-width:320px;background:#fff;border:1px solid #E2E8F0;border-radius:14px;padding:12px 14px;display:flex;align-items:center;gap:10px;">
        <div style="width:18px;height:18px;border:2px solid #2563EB;border-radius:4px;display:flex;align-items:center;justify-content:center;color:#2563EB;font-size:12px;font-weight:900;">✓</div>
        <span style="font-size:12px;font-weight:700;color:#334155;">e-Stamp Certificate Attached</span>
      </div>`;

    case 10: // Model K: Apple Cupertino Porcelain Luxury Checkbox (Light)
      return `<div style="width:100%;max-width:320px;background:#FFFFFF;border:1px solid #E2E8F0;border-radius:20px;padding:16px 18px;box-shadow:0 8px 24px rgba(15,23,42,0.04);display:flex;align-items:center;justify-content:space-between;">
        <div style="display:flex;align-items:center;gap:12px;">
          <div style="width:24px;height:24px;border-radius:8px;background:linear-gradient(135deg, #10B981 0%, #059669 100%);color:#fff;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:900;box-shadow:0 4px 10px rgba(16,185,129,0.25);">✓</div>
          <div><div style="font-size:13px;font-weight:800;color:#0F172A;">Haptic Agreement Confirmation</div><div style="font-size:10px;color:#059669;font-weight:700;">Biometric Fingerprint Verified</div></div>
        </div>
      </div>`;

    case 11: // Model L: CRED Monex Obsidian Cyber Checkbox (Dark Acid Neon)
    default:
      return `<div style="width:100%;max-width:320px;background:#09090B;border:1.5px solid rgba(204,255,0,0.4);border-radius:20px;padding:16px 18px;box-shadow:0 16px 36px rgba(0,0,0,0.8);color:#FFFFFF;display:flex;align-items:center;justify-content:space-between;">
        <div style="display:flex;align-items:center;gap:12px;">
          <div style="width:22px;height:22px;border-radius:6px;background:#CCFF00;color:#09090B;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:900;box-shadow:0 0 12px #CCFF00;">✓</div>
          <div><div style="font-size:12px;font-weight:900;color:#CCFF00;letter-spacing:0.06em;text-transform:uppercase;">CRED ESCROW LOCK</div><div style="font-size:11px;color:#A1A1AA;">Security Deposit Encrypted</div></div>
        </div>
        <span style="font-size:9px;font-weight:900;color:#CCFF00;border:1px solid #CCFF00;padding:2px 6px;border-radius:4px;">LOCKED</span>
      </div>`;
  }
}

function renderRadioVariants(fam, icon, variantIndex) {
  switch (variantIndex) {
    case 0: // Model A: Standard Radio Group
      return `<div style="width:100%;max-width:320px;background:#fff;border:1px solid #E2E8F0;border-radius:18px;padding:16px;display:flex;flex-direction:column;gap:12px;">
        <div style="display:flex;align-items:center;justify-content:space-between;padding:4px 0;">
          <div style="display:flex;align-items:center;gap:10px;">
            <div style="width:20px;height:20px;border-radius:50%;border:2px solid #2563EB;display:flex;align-items:center;justify-content:center;"><div style="width:10px;height:10px;border-radius:50%;background:#2563EB;"></div></div>
            <span style="font-size:13px;font-weight:700;color:#0F172A;">Full Advance Payment</span>
          </div>
          <span style="font-size:11px;font-weight:800;color:#2563EB;">₹28,500</span>
        </div>
        <div style="display:flex;align-items:center;justify-content:space-between;padding:4px 0;">
          <div style="display:flex;align-items:center;gap:10px;">
            <div style="width:20px;height:20px;border-radius:50%;border:2px solid #CBD5E1;"></div>
            <span style="font-size:13px;font-weight:600;color:#64748B;">Split with Roommate</span>
          </div>
          <span style="font-size:11px;font-weight:600;color:#64748B;">₹14,250 ea</span>
        </div>
      </div>`;

    case 1: // Model B: Payment Method Radio Card
      return `<div style="width:100%;max-width:320px;padding:16px;background:#EFF6FF;border:2px solid #2563EB;border-radius:18px;display:flex;align-items:center;justify-content:space-between;cursor:pointer;">
        <div style="display:flex;align-items:center;gap:12px;">
          <div style="width:36px;height:36px;border-radius:10px;background:#DBEAFE;color:#2563EB;display:flex;align-items:center;justify-content:center;font-size:18px;">⚡</div>
          <div><div style="font-size:13px;font-weight:800;color:#0F172A;">Instant UPI Auto-Pay</div><div style="font-size:11px;color:#2563EB;font-weight:600;">GPay • PhonePe • Paytm</div></div>
        </div>
        <div style="width:20px;height:20px;border-radius:50%;border:2px solid #2563EB;display:flex;align-items:center;justify-content:center;"><div style="width:10px;height:10px;border-radius:50%;background:#2563EB;"></div></div>
      </div>`;

    case 2: // Model C: Prepaid Plan Selector Radio
      return `<div style="width:100%;max-width:320px;background:#fff;border:1.5px solid #2563EB;border-radius:18px;padding:18px;box-shadow:0 4px 16px rgba(37,99,235,0.08);">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">
          <div style="display:flex;align-items:center;gap:8px;">
            <div style="width:18px;height:18px;border-radius:50%;border:2px solid #2563EB;display:flex;align-items:center;justify-content:center;"><div style="width:8px;height:8px;border-radius:50%;background:#2563EB;"></div></div>
            <span style="font-size:13px;font-weight:800;color:#0F172A;">Annual Prepaid Lease</span>
          </div>
          <span style="padding:2px 6px;background:#2563EB;color:#fff;border-radius:4px;font-size:10px;font-weight:800;">SAVE 10%</span>
        </div>
        <div style="font-size:22px;font-weight:900;color:#0F172A;margin-left:26px;">₹21,600 <span style="font-size:12px;color:#64748B;font-weight:500;">/ mo</span></div>
      </div>`;

    case 3: // Model D: Segmented Pill Radio Group
      return `<div style="width:100%;max-width:320px;background:#F1F5F9;border-radius:99px;padding:4px;display:flex;gap:4px;">
        <button style="flex:1;padding:8px 12px;background:#0F172A;color:#fff;border:none;border-radius:99px;font-size:11px;font-weight:800;cursor:pointer;">1 BHK</button>
        <button style="flex:1;padding:8px 12px;background:transparent;color:#64748B;border:none;border-radius:99px;font-size:11px;font-weight:600;cursor:pointer;">2 BHK</button>
        <button style="flex:1;padding:8px 12px;background:transparent;color:#64748B;border:none;border-radius:99px;font-size:11px;font-weight:600;cursor:pointer;">3 BHK</button>
      </div>`;

    case 4: // Model E: Furnishing Status Radio Tiles
      return `<div style="width:100%;max-width:320px;display:grid;grid-template-columns:1fr 1fr;gap:10px;">
        <div style="padding:14px;background:#EFF6FF;border:2px solid #2563EB;border-radius:14px;position:relative;">
          <div style="position:absolute;top:10px;right:10px;width:16px;height:16px;border-radius:50%;border:2px solid #2563EB;display:flex;align-items:center;justify-content:center;"><div style="width:8px;height:8px;border-radius:50%;background:#2563EB;"></div></div>
          <div style="font-size:20px;">🛋️</div>
          <div style="font-size:12px;font-weight:800;color:#0F172A;margin-top:4px;">Fully Furnished</div>
        </div>
        <div style="padding:14px;background:#F8FAFC;border:1px solid #E2E8F0;border-radius:14px;position:relative;">
          <div style="position:absolute;top:10px;right:10px;width:16px;height:16px;border-radius:50%;border:1.5px solid #CBD5E1;"></div>
          <div style="font-size:20px;">📦</div>
          <div style="font-size:12px;font-weight:600;color:#64748B;margin-top:4px;">Semi-Furnished</div>
        </div>
      </div>`;

    case 5: // Model F: Roommate Avatar Radio
      return `<div style="width:100%;max-width:320px;background:#fff;border:1px solid #E2E8F0;border-radius:18px;padding:14px;display:flex;align-items:center;justify-content:space-between;">
        <div style="display:flex;align-items:center;gap:10px;">
          <div style="width:36px;height:36px;border-radius:50%;background:#2563EB;color:#fff;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:800;">JK</div>
          <div><div style="font-size:13px;font-weight:700;color:#0F172A;">Joshua Kanatt</div><div style="font-size:10px;color:#10B981;font-weight:700;">● Primary Leaseholder</div></div>
        </div>
        <div style="width:18px;height:18px;border-radius:50%;border:2px solid #2563EB;display:flex;align-items:center;justify-content:center;"><div style="width:8px;height:8px;border-radius:50%;background:#2563EB;"></div></div>
      </div>`;

    case 6: // Model G: Minimal Monoline Radio List
      return `<div style="width:100%;max-width:320px;display:flex;flex-direction:column;gap:8px;">
        <div style="padding:12px 14px;background:#fff;border:1.5px solid #0F172A;border-radius:12px;display:flex;justify-content:space-between;align-items:center;">
          <span style="font-size:13px;font-weight:800;color:#0F172A;">Indiranagar Duplex</span>
          <div style="width:16px;height:16px;border-radius:50%;border:2px solid #0F172A;display:flex;align-items:center;justify-content:center;"><div style="width:8px;height:8px;border-radius:50%;background:#0F172A;"></div></div>
        </div>
      </div>`;

    case 7: // Model H: Bank Account Selector Radio
      return `<div style="width:100%;max-width:320px;background:#fff;border:1px solid #E2E8F0;border-radius:16px;padding:14px;display:flex;align-items:center;justify-content:space-between;">
        <div style="display:flex;align-items:center;gap:10px;">
          <span style="font-size:20px;">🏦</span>
          <div><div style="font-size:13px;font-weight:800;color:#0F172A;">HDFC Bank •• 4902</div><div style="font-size:10px;color:#64748B;">Salary Account (Primary)</div></div>
        </div>
        <div style="width:18px;height:18px;border-radius:50%;border:2px solid #10B981;display:flex;align-items:center;justify-content:center;"><div style="width:8px;height:8px;border-radius:50%;background:#10B981;"></div></div>
      </div>`;

    case 8: // Model I: Gender / Roommate Preference Radio
      return `<div style="width:100%;max-width:320px;display:flex;gap:8px;">
        <div style="flex:1;padding:12px;background:#EFF6FF;border:1.5px solid #2563EB;border-radius:12px;text-align:center;">
          <div style="font-size:12px;font-weight:800;color:#2563EB;">Any Gender</div>
        </div>
        <div style="flex:1;padding:12px;background:#F8FAFC;border:1px solid #E2E8F0;border-radius:12px;text-align:center;">
          <div style="font-size:12px;font-weight:600;color:#64748B;">Female Only</div>
        </div>
      </div>`;

    case 9: // Model J: Security Deposit Multi-Tier Radio
      return `<div style="width:100%;max-width:320px;background:#fff;border:1px solid #E2E8F0;border-radius:18px;padding:16px;display:flex;justify-content:space-between;align-items:center;">
        <div><div style="font-size:13px;font-weight:800;color:#0F172A;">2 Months Deposit</div><div style="font-size:11px;color:#64748B;">Standard lock-in period</div></div>
        <div style="width:20px;height:20px;border-radius:50%;border:2px solid #2563EB;display:flex;align-items:center;justify-content:center;"><div style="width:10px;height:10px;border-radius:50%;background:#2563EB;"></div></div>
      </div>`;

    case 10: // Model K: Apple Porcelain Clean Radio (Light)
      return `<div style="width:100%;max-width:320px;background:#FFFFFF;border:1px solid #E2E8F0;border-radius:22px;padding:18px 20px;box-shadow:0 8px 24px rgba(15,23,42,0.04);display:flex;align-items:center;justify-content:space-between;">
        <div style="display:flex;align-items:center;gap:12px;">
          <div style="width:22px;height:22px;border-radius:50%;border:2px solid #059669;display:flex;align-items:center;justify-content:center;"><div style="width:10px;height:10px;border-radius:50%;background:#059669;"></div></div>
          <div><div style="font-size:13px;font-weight:800;color:#0F172A;">Apple Pay Fast Rent</div><div style="font-size:10px;color:#059669;font-weight:700;">Zero Transaction Fees</div></div>
        </div>
      </div>`;

    case 11: // Model L: CRED Acid Neon Titanium Radio (Dark)
    default:
      return `<div style="width:100%;max-width:320px;background:#09090B;border:1.5px solid rgba(204,255,0,0.4);border-radius:20px;padding:18px 20px;box-shadow:0 16px 36px rgba(0,0,0,0.8);color:#FFFFFF;display:flex;align-items:center;justify-content:space-between;">
        <div style="display:flex;align-items:center;gap:12px;">
          <div style="width:20px;height:20px;border-radius:50%;border:2px solid #CCFF00;display:flex;align-items:center;justify-content:center;box-shadow:0 0 10px #CCFF00;"><div style="width:10px;height:10px;border-radius:50%;background:#CCFF00;"></div></div>
          <div><div style="font-size:12px;font-weight:900;color:#CCFF00;letter-spacing:0.06em;text-transform:uppercase;">TITANIUM VAULT AUTO</div><div style="font-size:11px;color:#A1A1AA;">Pre-authorized escrow payout</div></div>
        </div>
        <span style="font-size:9px;font-weight:900;color:#CCFF00;border:1px solid #CCFF00;padding:2px 6px;border-radius:4px;">ACTIVE</span>
      </div>`;
  }
}

function renderToggleVariants(fam, icon, variantIndex) {
  switch (variantIndex) {
    case 0: // Model A: iOS Cupertino Switch with Status
      return `<div style="width:100%;max-width:320px;background:#fff;border:1px solid #E2E8F0;border-radius:18px;padding:16px 18px;display:flex;align-items:center;justify-content:space-between;box-shadow:0 2px 8px rgba(0,0,0,0.04);">
        <div><div style="font-size:13px;font-weight:800;color:#0F172A;">Auto-Debit Monthly Rent</div><div style="font-size:11px;color:#10B981;font-weight:700;">● Active on 1st of month</div></div>
        <div style="width:48px;height:28px;background:#10B981;border-radius:99px;position:relative;cursor:pointer;"><div style="width:24px;height:24px;background:#fff;border-radius:50%;position:absolute;top:2px;left:2px;transform:translateX(20px);box-shadow:0 2px 5px rgba(0,0,0,0.2);"></div></div>
      </div>`;

    case 1: // Model B: WhatsApp Receipts Toggle
      return `<div style="width:100%;max-width:320px;background:#fff;border:1px solid #E2E8F0;border-radius:18px;padding:16px 18px;display:flex;align-items:center;justify-content:space-between;">
        <div style="display:flex;align-items:center;gap:10px;">
          <span style="font-size:20px;">💬</span>
          <div><div style="font-size:13px;font-weight:800;color:#0F172A;">WhatsApp PDF Receipts</div><div style="font-size:10px;color:#64748B;">Instant delivery on payment</div></div>
        </div>
        <div style="width:44px;height:24px;background:#2563EB;border-radius:99px;position:relative;cursor:pointer;"><div style="width:20px;height:20px;background:#fff;border-radius:50%;position:absolute;top:2px;left:2px;transform:translateX(20px);box-shadow:0 2px 4px rgba(0,0,0,0.2);"></div></div>
      </div>`;

    case 2: // Model C: Inactive Thin Rail Switch
      return `<div style="width:100%;max-width:320px;background:#fff;border:1px solid #E2E8F0;border-radius:16px;padding:14px 16px;display:flex;align-items:center;justify-content:space-between;">
        <div><div style="font-size:13px;font-weight:700;color:#64748B;">Maintenance Auto-Approve</div><div style="font-size:10px;color:#94A3B8;">Limit up to ₹2,000</div></div>
        <div style="width:40px;height:20px;background:#E2E8F0;border-radius:99px;position:relative;cursor:pointer;"><div style="width:16px;height:16px;background:#fff;border-radius:50%;position:absolute;top:2px;left:2px;box-shadow:0 1px 3px rgba(0,0,0,0.2);"></div></div>
      </div>`;

    case 3: // Model D: Icon-in-Knob Switch (Sun / Moon Dark Mode)
      return `<div style="width:100%;max-width:320px;background:#0F172A;color:#fff;border-radius:18px;padding:16px;display:flex;align-items:center;justify-content:space-between;">
        <div><div style="font-size:13px;font-weight:800;">Dark Theme Mode</div><div style="font-size:10px;color:#94A3B8;">Obsidian Luxury Styling</div></div>
        <div style="width:48px;height:28px;background:#3B82F6;border-radius:99px;position:relative;cursor:pointer;"><div style="width:24px;height:24px;background:#fff;border-radius:50%;position:absolute;top:2px;left:2px;transform:translateX(20px);display:flex;align-items:center;justify-content:center;font-size:11px;">🌙</div></div>
      </div>`;

    case 4: // Model E: Biometric FaceID Toggle
      return `<div style="width:100%;max-width:320px;background:#fff;border:1.5px solid #10B981;border-radius:18px;padding:16px;display:flex;align-items:center;justify-content:space-between;">
        <div style="display:flex;align-items:center;gap:10px;">
          <span style="font-size:20px;">🛡️</span>
          <div><div style="font-size:13px;font-weight:800;color:#0F172A;">Biometric Touch to Pay</div><div style="font-size:10px;color:#10B981;font-weight:700;">FaceID / TouchID Enabled</div></div>
        </div>
        <div style="width:44px;height:24px;background:#10B981;border-radius:99px;position:relative;"><div style="width:20px;height:20px;background:#fff;border-radius:50%;position:absolute;top:2px;left:2px;transform:translateX(20px);"></div></div>
      </div>`;

    case 5: // Model F: Micro Inline Switch
      return `<div style="width:100%;max-width:320px;display:flex;align-items:center;justify-content:space-between;padding:10px 14px;background:#F8FAFC;border:1px solid #E2E8F0;border-radius:12px;">
        <span style="font-size:12px;font-weight:700;color:#334155;">Show Roommate Contact</span>
        <div style="width:34px;height:18px;background:#2563EB;border-radius:99px;position:relative;"><div style="width:14px;height:14px;background:#fff;border-radius:50%;position:absolute;top:2px;left:2px;transform:translateX(16px);"></div></div>
      </div>`;

    case 6: // Model G: Deposit Shield Protection Switch
      return `<div style="width:100%;max-width:320px;background:#EFF6FF;border:1.5px solid #BFDBFE;border-radius:18px;padding:16px;display:flex;align-items:center;justify-content:space-between;">
        <div><div style="font-size:13px;font-weight:800;color:#1E40AF;">Deposit Shield Guarantee</div><div style="font-size:10px;color:#3B82F6;">Full refund in 48 hours</div></div>
        <div style="width:48px;height:28px;background:#2563EB;border-radius:99px;position:relative;"><div style="width:24px;height:24px;background:#fff;border-radius:50%;position:absolute;top:2px;left:2px;transform:translateX(20px);"></div></div>
      </div>`;

    case 7: // Model H: Sound & Haptics Feedback Switch
      return `<div style="width:100%;max-width:320px;background:#fff;border:1px solid #E2E8F0;border-radius:16px;padding:14px;display:flex;align-items:center;justify-content:space-between;">
        <div><div style="font-size:12px;font-weight:800;color:#0F172A;">Haptic Success Vibrate</div><div style="font-size:10px;color:#64748B;">Vibrate on rent clearing</div></div>
        <div style="width:40px;height:22px;background:#10B981;border-radius:99px;position:relative;"><div style="width:18px;height:18px;background:#fff;border-radius:50%;position:absolute;top:2px;left:2px;transform:translateX(18px);"></div></div>
      </div>`;

    case 8: // Model I: Push Notification Alert Switch
      return `<div style="width:100%;max-width:320px;background:#fff;border:1px solid #E2E8F0;border-radius:16px;padding:14px;display:flex;align-items:center;justify-content:space-between;">
        <div><div style="font-size:12px;font-weight:800;color:#0F172A;">3-Day Due Reminder</div><div style="font-size:10px;color:#64748B;">Push alert prior to rent due</div></div>
        <div style="width:40px;height:22px;background:#2563EB;border-radius:99px;position:relative;"><div style="width:18px;height:18px;background:#fff;border-radius:50%;position:absolute;top:2px;left:2px;transform:translateX(18px);"></div></div>
      </div>`;

    case 9: // Model J: Privacy Ghost Switch
      return `<div style="width:100%;max-width:320px;background:#fff;border:1px solid #E2E8F0;border-radius:14px;padding:12px 14px;display:flex;align-items:center;justify-content:space-between;">
        <span style="font-size:12px;font-weight:700;color:#475569;">Hide Rental Amount in App</span>
        <div style="width:36px;height:20px;background:#E2E8F0;border-radius:99px;position:relative;"><div style="width:16px;height:16px;background:#fff;border-radius:50%;position:absolute;top:2px;left:2px;"></div></div>
      </div>`;

    case 10: // Model K: Apple Porcelain Smooth Haptic Switch (Light)
      return `<div style="width:100%;max-width:320px;background:#FFFFFF;border:1px solid #E2E8F0;border-radius:24px;padding:18px 20px;box-shadow:0 10px 28px rgba(15,23,42,0.04);display:flex;align-items:center;justify-content:space-between;">
        <div style="display:flex;align-items:center;gap:12px;">
          <div style="width:36px;height:36px;border-radius:10px;background:#ECFDF5;color:#059669;display:flex;align-items:center;justify-content:center;font-size:16px;">🍏</div>
          <div><div style="font-size:13px;font-weight:800;color:#0F172A;">Cupertino Smooth Toggle</div><div style="font-size:10px;color:#059669;font-weight:700;">Zero Latency Spring Physics</div></div>
        </div>
        <div style="width:50px;height:30px;background:#10B981;border-radius:99px;position:relative;cursor:pointer;"><div style="width:26px;height:26px;background:#fff;border-radius:50%;position:absolute;top:2px;left:2px;transform:translateX(20px);box-shadow:0 2px 6px rgba(0,0,0,0.18);"></div></div>
      </div>`;

    case 11: // Model L: CRED Monex Cyber Toggle with Acid Neon Track (Dark)
    default:
      return `<div style="width:100%;max-width:320px;background:#09090B;border:1px solid rgba(204,255,0,0.3);border-radius:24px;padding:18px 20px;color:#FFFFFF;box-shadow:0 20px 40px rgba(0,0,0,0.7);display:flex;align-items:center;justify-content:space-between;">
        <div><div style="font-size:10px;font-weight:900;color:#CCFF00;letter-spacing:0.1em;text-transform:uppercase;">TITANIUM AUTO-SETTLE</div><div style="font-size:13px;font-weight:800;color:#FFFFFF;margin-top:2px;">Escrow Auto-Disbursement</div></div>
        <div style="width:52px;height:30px;background:#18181B;border:1.5px solid #CCFF00;border-radius:99px;position:relative;cursor:pointer;box-shadow:0 0 14px rgba(204,255,0,0.25);"><div style="width:22px;height:22px;background:#CCFF00;border-radius:50%;position:absolute;top:2.5px;left:3px;transform:translateX(24px);box-shadow:0 0 10px #CCFF00;"></div></div>
      </div>`;
  }
}

function renderSliderVariants(fam, icon, variantIndex) {
  switch (variantIndex) {
    case 0: // Model A: Dual-Handle Price Range Slider
      return `<div style="width:100%;max-width:320px;background:#fff;border:1px solid #E2E8F0;border-radius:20px;padding:22px;display:flex;flex-direction:column;gap:16px;box-shadow:0 4px 14px rgba(0,0,0,0.04);">
        <div style="display:flex;justify-content:space-between;align-items:center;"><span style="font-size:11px;font-weight:800;color:#64748B;letter-spacing:0.04em;">RENT BUDGET RANGE</span><span style="font-size:14px;font-weight:900;color:#2563EB;">₹20k – ₹45k</span></div>
        <div style="position:relative;height:6px;background:#E2E8F0;border-radius:99px;"><div style="position:absolute;left:25%;right:25%;height:100%;background:#2563EB;border-radius:99px;"></div><div style="width:20px;height:20px;background:#fff;border:3px solid #2563EB;border-radius:50%;position:absolute;top:-7px;left:23%;box-shadow:0 2px 6px rgba(0,0,0,0.15);cursor:pointer;"></div><div style="width:20px;height:20px;background:#fff;border:3px solid #2563EB;border-radius:50%;position:absolute;top:-7px;right:23%;box-shadow:0 2px 6px rgba(0,0,0,0.15);cursor:pointer;"></div></div>
        <div style="display:flex;justify-content:space-between;font-size:10px;color:#94A3B8;font-weight:700;"><span>₹10,000</span><span>₹1,00,000</span></div>
      </div>`;

    case 1: // Model B: Single Value Advance Slider with Live Metric
      return `<div style="width:100%;max-width:320px;background:#fff;border:1px solid #E2E8F0;border-radius:20px;padding:20px;display:flex;flex-direction:column;gap:14px;">
        <div style="display:flex;justify-content:space-between;align-items:baseline;"><div><div style="font-size:10px;font-weight:800;color:#64748B;">SECURITY ADVANCE</div><div style="font-size:24px;font-weight:900;color:#0F172A;">3 Months</div></div><span style="font-size:13px;font-weight:800;color:#10B981;">₹85,500</span></div>
        <div style="position:relative;height:8px;background:#F1F5F9;border-radius:99px;"><div style="width:50%;height:100%;background:#10B981;border-radius:99px;"></div><div style="width:22px;height:22px;background:#10B981;border:3px solid #fff;border-radius:50%;position:absolute;top:-7px;left:48%;box-shadow:0 2px 6px rgba(16,185,129,0.3);cursor:pointer;"></div></div>
      </div>`;

    case 2: // Model C: Stepped Notch BHK Selector Slider
      return `<div style="width:100%;max-width:320px;background:#fff;border:1px solid #E2E8F0;border-radius:18px;padding:18px;display:flex;flex-direction:column;gap:14px;">
        <div style="display:flex;justify-content:space-between;"><span style="font-size:12px;font-weight:800;color:#0F172A;">Bedrooms (BHK)</span><span style="font-size:12px;font-weight:800;color:#2563EB;">2 BHK Selected</span></div>
        <div style="position:relative;height:6px;background:#E2E8F0;border-radius:99px;"><div style="width:50%;height:100%;background:#2563EB;"></div><div style="position:absolute;top:-8px;left:48%;width:22px;height:22px;background:#2563EB;border:3px solid #fff;border-radius:50%;box-shadow:0 2px 8px rgba(37,99,235,0.3);"></div></div>
        <div style="display:flex;justify-content:space-between;font-size:11px;font-weight:800;color:#64748B;"><span>1</span><span>2</span><span>3</span><span>4+</span></div>
      </div>`;

    case 3: // Model D: Distance to Metro Radius Slider
      return `<div style="width:100%;max-width:320px;background:#EFF6FF;border:1px solid #BFDBFE;border-radius:18px;padding:18px;display:flex;flex-direction:column;gap:12px;">
        <div style="display:flex;justify-content:space-between;"><span style="font-size:12px;font-weight:800;color:#1E40AF;">🚇 Metro Proximity</span><span style="font-size:13px;font-weight:900;color:#2563EB;">Within 1.5 km</span></div>
        <div style="position:relative;height:6px;background:#DBEAFE;border-radius:99px;"><div style="width:30%;height:100%;background:#2563EB;border-radius:99px;"></div><div style="width:18px;height:18px;background:#2563EB;border:2px solid #fff;border-radius:50%;position:absolute;top:-6px;left:28%;"></div></div>
      </div>`;

    case 4: // Model E: Roommate Bill Split Slider
      return `<div style="width:100%;max-width:320px;background:#fff;border:1px solid #E2E8F0;border-radius:18px;padding:18px;display:flex;flex-direction:column;gap:12px;">
        <div style="display:flex;justify-content:space-between;font-size:12px;font-weight:800;"><span>Joshua: 60% (₹17,100)</span><span>Rahul: 40% (₹11,400)</span></div>
        <div style="position:relative;height:10px;background:#E2E8F0;border-radius:99px;overflow:hidden;display:flex;"><div style="width:60%;background:#2563EB;"></div><div style="width:40%;background:#10B981;"></div></div>
      </div>`;

    case 5: // Model F: Tactile Knob Dial Slider
      return `<div style="width:100%;max-width:320px;background:#fff;border:1px solid #E2E8F0;border-radius:20px;padding:20px;text-align:center;">
        <div style="font-size:11px;font-weight:800;color:#64748B;">LEASE DURATION</div>
        <div style="font-size:28px;font-weight:900;color:#0F172A;margin:8px 0;">11 Months</div>
        <div style="position:relative;height:6px;background:#E2E8F0;border-radius:99px;margin:0 12px;"><div style="width:75%;height:100%;background:#0F172A;border-radius:99px;"></div><div style="width:20px;height:20px;background:#0F172A;border:3px solid #fff;border-radius:50%;position:absolute;top:-7px;left:72%;box-shadow:0 2px 6px rgba(0,0,0,0.2);"></div></div>
      </div>`;

    case 6: // Model G: Deposit Shield Coverage Range Slider
      return `<div style="width:100%;max-width:320px;background:#F0FDF4;border:1px solid #BBF7D0;border-radius:18px;padding:18px;display:flex;flex-direction:column;gap:12px;">
        <div style="display:flex;justify-content:space-between;"><span style="font-size:12px;font-weight:800;color:#166534;">Shield Escrow Limit</span><span style="font-size:13px;font-weight:900;color:#16A34A;">₹ 2.5 Lakhs</span></div>
        <div style="position:relative;height:6px;background:#DCFCE7;border-radius:99px;"><div style="width:65%;height:100%;background:#16A34A;border-radius:99px;"></div><div style="width:18px;height:18px;background:#16A34A;border:2px solid #fff;border-radius:50%;position:absolute;top:-6px;left:63%;"></div></div>
      </div>`;

    case 7: // Model H: Carpet Area Square Feet Range
      return `<div style="width:100%;max-width:320px;background:#fff;border:1px solid #E2E8F0;border-radius:18px;padding:18px;display:flex;flex-direction:column;gap:12px;">
        <div style="display:flex;justify-content:space-between;"><span style="font-size:11px;font-weight:700;color:#64748B;">CARPET AREA</span><span style="font-size:13px;font-weight:800;color:#0F172A;">1,200 – 1,800 sq.ft</span></div>
        <div style="position:relative;height:6px;background:#E2E8F0;border-radius:99px;"><div style="position:absolute;left:35%;right:20%;height:100%;background:#3B82F6;"></div><div style="width:18px;height:18px;background:#3B82F6;border:2px solid #fff;border-radius:50%;position:absolute;top:-6px;left:33%;"></div><div style="width:18px;height:18px;background:#3B82F6;border:2px solid #fff;border-radius:50%;position:absolute;top:-6px;right:18%;"></div></div>
      </div>`;

    case 8: // Model I: Maintenance Tolerance Stepper
      return `<div style="width:100%;max-width:320px;background:#fff;border:1px solid #E2E8F0;border-radius:16px;padding:16px;display:flex;flex-direction:column;gap:10px;">
        <div style="display:flex;justify-content:space-between;"><span style="font-size:12px;font-weight:800;color:#0F172A;">Max Maintenance Fee</span><span style="font-size:12px;font-weight:800;color:#2563EB;">₹ 3,500 / mo</span></div>
        <div style="position:relative;height:6px;background:#F1F5F9;border-radius:99px;"><div style="width:45%;height:100%;background:#2563EB;"></div><div style="width:16px;height:16px;background:#2563EB;border-radius:50%;position:absolute;top:-5px;left:43%;"></div></div>
      </div>`;

    case 9: // Model J: Furnishing Cost Slider
      return `<div style="width:100%;max-width:320px;background:#fff;border:1px solid #E2E8F0;border-radius:16px;padding:16px;display:flex;flex-direction:column;gap:10px;">
        <div style="display:flex;justify-content:space-between;"><span style="font-size:12px;font-weight:700;color:#64748B;">Furnishing Add-On</span><span style="font-size:13px;font-weight:800;color:#059669;">+ ₹2,500 / mo</span></div>
        <div style="position:relative;height:6px;background:#E2E8F0;border-radius:99px;"><div style="width:50%;height:100%;background:#059669;"></div><div style="width:18px;height:18px;background:#059669;border:2px solid #fff;border-radius:50%;position:absolute;top:-6px;left:48%;"></div></div>
      </div>`;

    case 10: // Model K: Apple Porcelain Fluid Haptic Slider (Light)
      return `<div style="width:100%;max-width:320px;background:#FFFFFF;border:1px solid #E2E8F0;border-radius:24px;padding:22px;box-shadow:0 10px 28px rgba(15,23,42,0.04);display:flex;flex-direction:column;gap:16px;">
        <div style="display:flex;justify-content:space-between;align-items:center;"><div><span style="font-size:10px;font-weight:800;color:#64748B;letter-spacing:0.06em;text-transform:uppercase;">PORCELAIN BUDGET</span><div style="font-size:22px;font-weight:900;color:#0F172A;margin-top:2px;">₹ 35,000<span style="font-size:12px;color:#64748B;font-weight:600;"> / mo</span></div></div><span style="padding:4px 8px;background:#ECFDF5;color:#059669;border-radius:99px;font-size:10px;font-weight:800;">VERIFIED</span></div>
        <div style="position:relative;height:10px;background:#F1F5F9;border-radius:99px;"><div style="width:55%;height:100%;background:linear-gradient(90deg, #10B981, #059669);border-radius:99px;"></div><div style="width:26px;height:26px;background:#fff;border-radius:50%;position:absolute;top:-8px;left:52%;box-shadow:0 4px 10px rgba(0,0,0,0.15);cursor:pointer;"></div></div>
      </div>`;

    case 11: // Model L: CRED Acid Neon Titanium Slider (Dark)
    default:
      return `<div style="width:100%;max-width:320px;background:#09090B;border:1px solid rgba(204,255,0,0.4);border-radius:24px;padding:22px;box-shadow:0 20px 40px rgba(0,0,0,0.8);color:#FFFFFF;display:flex;flex-direction:column;gap:16px;">
        <div style="display:flex;justify-content:space-between;align-items:center;"><span style="font-size:10px;font-weight:900;color:#CCFF00;letter-spacing:0.1em;text-transform:uppercase;">TITANIUM ESCROW SLIDER</span><span style="font-size:14px;font-weight:900;color:#CCFF00;font-family:monospace;">₹ 50,000</span></div>
        <div style="position:relative;height:8px;background:#18181B;border-radius:99px;border:1px solid #27272A;"><div style="width:70%;height:100%;background:#CCFF00;box-shadow:0 0 12px #CCFF00;border-radius:99px;"></div><div style="width:24px;height:24px;background:#CCFF00;border-radius:50%;position:absolute;top:-8px;left:67%;box-shadow:0 0 16px #CCFF00;cursor:pointer;"></div></div>
      </div>`;
  }
}

function renderMultiSelectVariants(fam, icon, variantIndex) {
  // Ultra-crisp vector SVGs (zero unicode arrows or raw emojis)
  const SVG = {
    chevronDown: `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>`,
    chevronUp: `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m18 15-6-6-6 6"/></svg>`,
    check: `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,
    close: `<svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>`,
    transfer: `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m7 16 5 5 5-5"/><path d="m7 8 5-5 5 5"/><path d="M12 3v18"/></svg>`,
    plus: `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14"/><path d="M5 12h14"/></svg>`,
    minus: `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/></svg>`,
    doc: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/></svg>`,
    folder: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 8 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h16z"/></svg>`,
    vault: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><circle cx="12" cy="12" r="4"/><path d="m14.8 9.2 1.4-1.4"/><path d="m9.2 14.8-1.4 1.4"/></svg>`,
    play: `<svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>`,
    gear: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>`,
    edit: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/></svg>`,
    external: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>`,
    trash: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg>`,
    search: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>`,
    sparkle: `<svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="m12 2 2.4 7.2L22 12l-7.6 2.8L12 22l-2.4-7.2L2 12l7.6-2.8z"/></svg>`
  };

  const animStyles = `<style>
@keyframes rpBeakSlide { from { opacity: 0; transform: translateY(-6px); } to { opacity: 1; transform: translateY(0); } }
@keyframes rpPulseDot { 0%, 100% { opacity: 1; transform: scale(1); } 50% { opacity: 0.4; transform: scale(0.8); } }
@keyframes rpBlink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
@keyframes rpIslandExpand { 0% { transform: scale(0.98); } 50% { transform: scale(1.01); } 100% { transform: scale(1); } }
@keyframes rpCredVolt { 0%, 100% { box-shadow: 0 0 10px rgba(204,255,0,0.3); } 50% { box-shadow: 0 0 22px rgba(204,255,0,0.6); } }
</style>`;

  switch (variantIndex) {
    case 0: // MULTISELECT-A: Removable Chip Cloud (Screenshot 1: Beak/Caret File Type Dropdown)
      return `${animStyles}<div style="width:100%;max-width:320px;display:flex;flex-direction:column;gap:10px;">
        <!-- Top Toolbar with Bright Blue Active Tab -->
        <div style="display:flex;align-items:center;background:#FFFFFF;border:1px solid #E2E8F0;border-radius:14px;box-shadow:0 2px 8px rgba(0,0,0,0.03);overflow:hidden;">
          <span style="padding:10px 12px;color:#94A3B8;font-size:11.5px;font-weight:600;display:flex;align-items:center;gap:4px;">File size <span style="opacity:0.6;">${SVG.chevronDown}</span></span>
          <button style="background:#2563EB;color:#FFFFFF;border:none;padding:10px 16px;font-size:12.5px;font-weight:800;display:flex;align-items:center;gap:8px;cursor:pointer;box-shadow:0 2px 8px rgba(37,99,235,0.3);transition:all 0.2s;">
            <span>${SVG.doc}</span>
            <span>File type</span>
            <span>${SVG.chevronDown}</span>
          </button>
          <span style="padding:10px 12px;color:#94A3B8;font-size:11.5px;font-weight:600;display:flex;align-items:center;gap:4px;">Date uploaded <span style="opacity:0.6;">${SVG.chevronDown}</span></span>
        </div>

        <!-- Floating Popover Card with Sharp Upward Beak (Directly matching Screenshot 1) -->
        <div style="position:relative;background:#FFFFFF;border:1px solid #E2E8F0;border-radius:18px;box-shadow:0 16px 36px rgba(15,23,42,0.12), 0 0 0 1px rgba(15,23,42,0.04);animation:rpBeakSlide 0.25s cubic-bezier(0.16,1,0.3,1);overflow:visible;">
          <!-- Sharp Upward Triangular Beak pointing to File Type button -->
          <div style="position:absolute;top:-7px;left:48%;transform:translateX(-50%) rotate(45deg);width:12px;height:12px;background:#FFFFFF;border-left:1px solid #E2E8F0;border-top:1px solid #E2E8F0;z-index:2;"></div>
          
          <div style="overflow:hidden;border-radius:18px;">
            <!-- Option 1: HTML -->
            <div style="padding:11px 16px;display:flex;align-items:center;gap:12px;cursor:pointer;transition:background 0.15s;" onmouseover="this.style.background='#F8FAFC'" onmouseout="this.style.background='transparent'">
              <div style="width:26px;height:26px;border:1px solid #E2E8F0;border-radius:6px;display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:800;color:#64748B;background:#F8FAFC;">{ }</div>
              <span style="font-size:13px;font-weight:700;color:#64748B;">Markup HTML</span>
            </div>

            <!-- Option 2: Active Selected Photoshop PDF (Blue left border highlight) -->
            <div style="position:relative;padding:11px 16px;display:flex;align-items:center;gap:12px;background:#FAFAFA;border-top:1px solid #F1F5F9;border-bottom:1px solid #F1F5F9;cursor:pointer;">
              <div style="position:absolute;left:0;top:0;bottom:0;width:3.5px;background:#2563EB;border-radius:0 2px 2px 0;"></div>
              <div style="width:26px;height:26px;border:1px solid #BFDBFE;border-radius:6px;display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:800;color:#2563EB;background:#EFF6FF;">Ps</div>
              <div>
                <div style="font-size:13px;font-weight:800;color:#0F172A;">Photoshop PDF</div>
                <div style="font-size:10.5px;font-weight:600;color:#2563EB;">Selected • Lease Contract v2</div>
              </div>
              <span style="margin-left:auto;color:#2563EB;display:flex;align-items:center;">${SVG.check}</span>
            </div>

            <!-- Option 3: Illustrator AI -->
            <div style="padding:11px 16px;display:flex;align-items:center;gap:12px;cursor:pointer;transition:background 0.15s;" onmouseover="this.style.background='#F8FAFC'" onmouseout="this.style.background='transparent'">
              <div style="width:26px;height:26px;border:1px solid #FEE2E2;border-radius:6px;display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:800;color:#DC2626;background:#FEF2F2;">Ai</div>
              <span style="font-size:13px;font-weight:700;color:#64748B;">Illustrator AI</span>
            </div>

            <!-- Option 4: Sketch -->
            <div style="padding:11px 16px;display:flex;align-items:center;gap:12px;cursor:pointer;transition:background 0.15s;" onmouseover="this.style.background='#F8FAFC'" onmouseout="this.style.background='transparent'">
              <div style="width:26px;height:26px;border:1px solid #FEF3C7;border-radius:6px;display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:800;color:#D97706;background:#FFFBEB;">💎</div>
              <span style="font-size:13px;font-weight:700;color:#64748B;">Sketch .Sketch</span>
            </div>
          </div>

          <!-- Bottom Active Cloud Deck -->
          <div style="padding:10px 14px;background:#F8FAFC;border-top:1px solid #F1F5F9;display:flex;flex-wrap:wrap;gap:6px;border-radius:0 0 18px 18px;">
            <span style="padding:4px 9px;background:#EFF6FF;color:#1D4ED8;border:1px solid #BFDBFE;border-radius:8px;font-size:11px;font-weight:700;display:inline-flex;align-items:center;gap:6px;">🏊 Pool <span style="cursor:pointer;color:#2563EB;">${SVG.close}</span></span>
            <span style="padding:4px 9px;background:#EFF6FF;color:#1D4ED8;border:1px solid #BFDBFE;border-radius:8px;font-size:11px;font-weight:700;display:inline-flex;align-items:center;gap:6px;">🏋️ Gym <span style="cursor:pointer;color:#2563EB;">${SVG.close}</span></span>
            <span style="padding:4px 8px;background:#F1F5F9;color:#64748B;border-radius:8px;font-size:11px;font-weight:700;">+2 more</span>
          </div>
        </div>
      </div>`;

    case 1: // MULTISELECT-B: Checkbox List with Select All
      return `${animStyles}<div style="width:100%;max-width:320px;background:#FFFFFF;border:1px solid #E2E8F0;border-radius:20px;box-shadow:0 8px 24px rgba(15,23,42,0.06);overflow:hidden;display:flex;flex-direction:column;">
        <div style="padding:14px 16px;background:linear-gradient(180deg, #F8FAFC 0%, #FFFFFF 100%);border-bottom:1px solid #F1F5F9;display:flex;align-items:center;justify-content:space-between;">
          <div>
            <div style="font-size:10px;font-weight:800;color:#64748B;letter-spacing:0.08em;text-transform:uppercase;">BATCH SELECTION</div>
            <div style="font-size:13px;font-weight:800;color:#0F172A;margin-top:2px;">Select All Properties</div>
          </div>
          <div style="display:flex;align-items:center;gap:8px;">
            <span style="font-size:10.5px;font-weight:800;color:#2563EB;background:#EFF6FF;padding:2px 8px;border-radius:99px;border:1px solid #DBEAFE;">3 OF 4</span>
            <div style="width:36px;height:20px;background:#2563EB;border-radius:99px;position:relative;cursor:pointer;">
              <div style="width:16px;height:16px;background:#FFFFFF;border-radius:50%;position:absolute;top:2px;right:2px;box-shadow:0 1px 3px rgba(0,0,0,0.2);"></div>
            </div>
          </div>
        </div>
        <div style="padding:8px;display:flex;flex-direction:column;gap:6px;">
          <div style="padding:10px 12px;background:#EFF6FF;border:1.5px solid #3B82F6;border-radius:12px;display:flex;align-items:center;justify-content:space-between;">
            <div style="display:flex;align-items:center;gap:10px;">
              <div style="width:18px;height:18px;border-radius:5px;background:#2563EB;color:#fff;display:flex;align-items:center;justify-content:center;">${SVG.check}</div>
              <div><div style="font-size:12.5px;font-weight:800;color:#1D4ED8;">Indiranagar Duplex #402</div><div style="font-size:10.5px;color:#3B82F6;">₹28,500/mo • Verified</div></div>
            </div>
          </div>
          <div style="padding:10px 12px;background:#EFF6FF;border:1.5px solid #3B82F6;border-radius:12px;display:flex;align-items:center;justify-content:space-between;">
            <div style="display:flex;align-items:center;gap:10px;">
              <div style="width:18px;height:18px;border-radius:5px;background:#2563EB;color:#fff;display:flex;align-items:center;justify-content:center;">${SVG.check}</div>
              <div><div style="font-size:12.5px;font-weight:800;color:#1D4ED8;">Koramangala 4th Block</div><div style="font-size:10.5px;color:#3B82F6;">₹45,000/mo • Penthouse</div></div>
            </div>
          </div>
          <div style="padding:10px 12px;background:#EFF6FF;border:1.5px solid #3B82F6;border-radius:12px;display:flex;align-items:center;justify-content:space-between;">
            <div style="display:flex;align-items:center;gap:10px;">
              <div style="width:18px;height:18px;border-radius:5px;background:#2563EB;color:#fff;display:flex;align-items:center;justify-content:center;">${SVG.check}</div>
              <div><div style="font-size:12.5px;font-weight:800;color:#1D4ED8;">HSR Sector 2 Villa</div><div style="font-size:10.5px;color:#3B82F6;">₹32,000/mo • Ready Now</div></div>
            </div>
          </div>
          <div style="padding:10px 12px;background:#FFFFFF;border:1px solid #F1F5F9;border-radius:12px;display:flex;align-items:center;justify-content:space-between;">
            <div style="display:flex;align-items:center;gap:10px;">
              <div style="width:18px;height:18px;border-radius:5px;border:1.5px solid #CBD5E1;background:#fff;"></div>
              <div><div style="font-size:12.5px;font-weight:700;color:#64748B;">Whitefield Tech Suite</div><div style="font-size:10.5px;color:#94A3B8;">₹24,000/mo • Available Dec</div></div>
            </div>
          </div>
        </div>
        <div style="padding:10px 14px;background:#F8FAFC;border-top:1px solid #F1F5F9;display:flex;align-items:center;justify-content:space-between;">
          <span style="font-size:11px;font-weight:700;color:#64748B;">Total: ₹1,05,500/mo</span>
          <button style="padding:7px 14px;background:#0F172A;color:#FFFFFF;border:none;border-radius:8px;font-size:11.5px;font-weight:800;cursor:pointer;">Confirm Batch</button>
        </div>
      </div>`;

    case 2: // MULTISELECT-C: Count Badge Selector (Tactile Stepper Quota)
      return `${animStyles}<div style="width:100%;max-width:320px;background:#FFFFFF;border:1px solid #E2E8F0;border-radius:20px;padding:16px;box-shadow:0 8px 24px rgba(15,23,42,0.06);display:flex;flex-direction:column;gap:12px;">
        <div style="display:flex;justify-content:space-between;align-items:center;">
          <div><div style="font-size:10px;font-weight:800;color:#64748B;letter-spacing:0.08em;text-transform:uppercase;">UNIT ALLOCATION QUOTA</div><div style="font-size:14px;font-weight:800;color:#0F172A;margin-top:2px;">Select Room Inventory</div></div>
          <div style="background:#F1F5F9;border:1px solid #E2E8F0;border-radius:8px;padding:4px 10px;font-size:13px;font-weight:900;color:#0F172A;font-family:monospace;">7 TOTAL</div>
        </div>
        <div style="display:flex;flex-direction:column;gap:8px;">
          <div style="padding:10px 12px;background:#F8FAFC;border:1px solid #E2E8F0;border-radius:12px;display:flex;align-items:center;justify-content:space-between;">
            <div><div style="font-size:12.5px;font-weight:800;color:#0F172A;">Master Bedrooms</div><div style="font-size:10px;color:#64748B;">En-suite washroom included</div></div>
            <div style="display:flex;align-items:center;gap:8px;">
              <button style="width:26px;height:26px;border-radius:6px;background:#fff;border:1px solid #CBD5E1;display:flex;align-items:center;justify-content:center;cursor:pointer;">${SVG.minus}</button>
              <span style="font-size:14px;font-weight:900;color:#0F172A;min-width:20px;text-align:center;">3</span>
              <button style="width:26px;height:26px;border-radius:6px;background:#2563EB;color:#fff;border:none;display:flex;align-items:center;justify-content:center;cursor:pointer;">${SVG.plus}</button>
            </div>
          </div>
          <div style="padding:10px 12px;background:#F8FAFC;border:1px solid #E2E8F0;border-radius:12px;display:flex;align-items:center;justify-content:space-between;">
            <div><div style="font-size:12.5px;font-weight:800;color:#0F172A;">Covered Parking</div><div style="font-size:10px;color:#64748B;">Basement slot with EV point</div></div>
            <div style="display:flex;align-items:center;gap:8px;">
              <button style="width:26px;height:26px;border-radius:6px;background:#fff;border:1px solid #CBD5E1;display:flex;align-items:center;justify-content:center;cursor:pointer;">${SVG.minus}</button>
              <span style="font-size:14px;font-weight:900;color:#0F172A;min-width:20px;text-align:center;">2</span>
              <button style="width:26px;height:26px;border-radius:6px;background:#2563EB;color:#fff;border:none;display:flex;align-items:center;justify-content:center;cursor:pointer;">${SVG.plus}</button>
            </div>
          </div>
          <div style="padding:10px 12px;background:#F8FAFC;border:1px solid #E2E8F0;border-radius:12px;display:flex;align-items:center;justify-content:space-between;">
            <div><div style="font-size:12.5px;font-weight:800;color:#0F172A;">Biometric Key Passes</div><div style="font-size:10px;color:#64748B;">Smart NFC RFID access</div></div>
            <div style="display:flex;align-items:center;gap:8px;">
              <button style="width:26px;height:26px;border-radius:6px;background:#fff;border:1px solid #CBD5E1;display:flex;align-items:center;justify-content:center;cursor:pointer;">${SVG.minus}</button>
              <span style="font-size:14px;font-weight:900;color:#0F172A;min-width:20px;text-align:center;">2</span>
              <button style="width:26px;height:26px;border-radius:6px;background:#2563EB;color:#fff;border:none;display:flex;align-items:center;justify-content:center;cursor:pointer;">${SVG.plus}</button>
            </div>
          </div>
        </div>
      </div>`;

    case 3: // MULTISELECT-D: Dual-Panel Transfer List
      return `${animStyles}<div style="width:100%;max-width:320px;background:#FFFFFF;border:1px solid #E2E8F0;border-radius:20px;padding:14px;box-shadow:0 8px 24px rgba(15,23,42,0.06);display:flex;flex-direction:column;gap:10px;">
        <div style="display:flex;justify-content:space-between;align-items:center;">
          <span style="font-size:10px;font-weight:800;color:#64748B;letter-spacing:0.08em;text-transform:uppercase;">DUAL-PANEL LEASE TRANSFER</span>
          <span style="font-size:10px;font-weight:800;color:#059669;background:#ECFDF5;padding:2px 7px;border-radius:99px;">Sync Active</span>
        </div>
        <div style="display:grid;grid-template-columns:1fr auto 1fr;gap:8px;align-items:center;">
          <div style="background:#F8FAFC;border:1px solid #E2E8F0;border-radius:12px;padding:8px;display:flex;flex-direction:column;gap:5px;">
            <div style="font-size:10px;font-weight:800;color:#64748B;text-transform:uppercase;margin-bottom:2px;">Available</div>
            <div style="font-size:11px;font-weight:700;color:#334155;background:#fff;padding:5px 7px;border-radius:6px;border:1px solid #E2E8F0;">+ EV Charger</div>
            <div style="font-size:11px;font-weight:700;color:#334155;background:#fff;padding:5px 7px;border-radius:6px;border:1px solid #E2E8F0;">+ Terrace</div>
            <div style="font-size:11px;font-weight:700;color:#334155;background:#fff;padding:5px 7px;border-radius:6px;border:1px solid #E2E8F0;">+ Pet Park</div>
          </div>
          <button style="width:30px;height:30px;border-radius:50%;background:#EFF6FF;border:1px solid #BFDBFE;color:#2563EB;display:flex;align-items:center;justify-content:center;cursor:pointer;box-shadow:0 2px 6px rgba(37,99,235,0.15);">${SVG.transfer}</button>
          <div style="background:#EFF6FF;border:1.5px solid #3B82F6;border-radius:12px;padding:8px;display:flex;flex-direction:column;gap:5px;">
            <div style="font-size:10px;font-weight:800;color:#1D4ED8;text-transform:uppercase;margin-bottom:2px;">Selected (3)</div>
            <div style="font-size:11px;font-weight:800;color:#1D4ED8;background:#DBEAFE;padding:5px 7px;border-radius:6px;">✓ Pool</div>
            <div style="font-size:11px;font-weight:800;color:#1D4ED8;background:#DBEAFE;padding:5px 7px;border-radius:6px;">✓ Gym</div>
            <div style="font-size:11px;font-weight:800;color:#1D4ED8;background:#DBEAFE;padding:5px 7px;border-radius:6px;">✓ Power DG</div>
          </div>
        </div>
      </div>`;

    case 4: // MULTISELECT-E: Compact Token Field (Apple Mail / Linear Tag Editor)
      return `${animStyles}<div style="width:100%;max-width:320px;background:#FFFFFF;border:1px solid #E2E8F0;border-radius:18px;padding:12px 14px;box-shadow:0 8px 24px rgba(15,23,42,0.06);display:flex;flex-direction:column;gap:8px;">
        <div style="display:flex;justify-content:space-between;align-items:center;">
          <span style="font-size:10px;font-weight:800;color:#2563EB;letter-spacing:0.08em;text-transform:uppercase;">INLINE AMENITY TOKENS</span>
          <span style="font-size:10px;font-weight:800;color:#2563EB;background:#EFF6FF;padding:2px 7px;border-radius:99px;">3 Active</span>
        </div>
        <div style="padding:8px 10px;border:1.5px solid #2563EB;border-radius:12px;background:#FFFFFF;box-shadow:0 0 0 3px rgba(37,99,235,0.08);display:flex;flex-wrap:wrap;gap:6px;align-items:center;">
          <span style="background:#EFF6FF;color:#1D4ED8;border:1px solid #BFDBFE;padding:3px 8px;border-radius:6px;font-size:11px;font-weight:700;display:inline-flex;align-items:center;gap:4px;">Indiranagar <span style="cursor:pointer;color:#2563EB;">${SVG.close}</span></span>
          <span style="background:#EFF6FF;color:#1D4ED8;border:1px solid #BFDBFE;padding:3px 8px;border-radius:6px;font-size:11px;font-weight:700;display:inline-flex;align-items:center;gap:4px;">3 BHK <span style="cursor:pointer;color:#2563EB;">${SVG.close}</span></span>
          <span style="background:#ECFDF5;color:#059669;border:1px solid #A7F3D0;padding:3px 8px;border-radius:6px;font-size:11px;font-weight:700;display:inline-flex;align-items:center;gap:4px;">Verified <span style="cursor:pointer;color:#059669;">${SVG.close}</span></span>
          <span style="font-size:11.5px;color:#94A3B8;display:inline-flex;align-items:center;">Add tag...<span style="display:inline-block;width:2px;height:14px;background:#2563EB;margin-left:2px;animation:rpBlink 1s infinite;"></span></span>
        </div>
        <div style="background:#F8FAFC;border:1px solid #F1F5F9;border-radius:10px;padding:6px 10px;display:flex;gap:8px;font-size:10.5px;color:#64748B;">
          <span style="font-weight:700;">Suggestions:</span>
          <span style="color:#2563EB;font-weight:700;cursor:pointer;">+ Gated Society</span>
          <span style="color:#2563EB;font-weight:700;cursor:pointer;">+ Immediate Move-in</span>
        </div>
      </div>`;

    case 5: // MULTISELECT-F: Dark Glass Multi-Select (Screenshot 2: visionOS Dark Capsule Menu)
      return `${animStyles}<div style="width:100%;max-width:280px;background:#232220;border:1px solid rgba(255,255,255,0.08);border-radius:18px;padding:10px;box-shadow:0 20px 48px rgba(0,0,0,0.65), inset 0 1px 0 rgba(255,255,255,0.1);color:#E5E5E5;display:flex;flex-direction:column;gap:2px;">
        <div style="padding:9px 12px;display:flex;align-items:center;gap:12px;color:#A8A29E;font-size:13px;font-weight:600;cursor:pointer;border-radius:10px;transition:all 0.15s;" onmouseover="this.style.background='rgba(255,255,255,0.05)';this.style.color='#fff'" onmouseout="this.style.background='transparent';this.style.color='#A8A29E'">
          <span style="color:#78716C;display:flex;align-items:center;">${SVG.doc}</span>
          <span>Docs</span>
        </div>
        <div style="padding:9px 12px;display:flex;align-items:center;gap:12px;color:#A8A29E;font-size:13px;font-weight:600;cursor:pointer;border-radius:10px;transition:all 0.15s;" onmouseover="this.style.background='rgba(255,255,255,0.05)';this.style.color='#fff'" onmouseout="this.style.background='transparent';this.style.color='#A8A29E'">
          <span style="color:#78716C;display:flex;align-items:center;">${SVG.folder}</span>
          <span>Library</span>
        </div>
        <div style="padding:9px 12px;display:flex;align-items:center;gap:12px;color:#A8A29E;font-size:13px;font-weight:600;cursor:pointer;border-radius:10px;transition:all 0.15s;" onmouseover="this.style.background='rgba(255,255,255,0.05)';this.style.color='#fff'" onmouseout="this.style.background='transparent';this.style.color='#A8A29E'">
          <span style="color:#78716C;display:flex;align-items:center;">${SVG.vault}</span>
          <span>Spaces</span>
        </div>
        <!-- Active Selected Pill Capsule (Directly matching Screenshot 2!) -->
        <div style="padding:10px 14px;background:linear-gradient(180deg, #3C3A36 0%, #2E2D2A 100%);border:1px solid rgba(255,255,255,0.12);border-radius:12px;display:flex;align-items:center;justify-content:space-between;box-shadow:0 4px 14px rgba(0,0,0,0.35);color:#FFFFFF;font-size:13px;font-weight:700;cursor:pointer;">
          <div style="display:flex;align-items:center;gap:12px;">
            <span style="color:#D6D3D1;display:flex;align-items:center;">${SVG.play}</span>
            <span>Media</span>
          </div>
          <span style="width:7px;height:7px;border-radius:50%;background:#E2E8F0;box-shadow:0 0 8px rgba(255,255,255,0.85);animation:rpPulseDot 2s infinite;"></span>
        </div>
        <div style="padding:9px 12px;display:flex;align-items:center;gap:12px;color:#A8A29E;font-size:13px;font-weight:600;cursor:pointer;border-radius:10px;transition:all 0.15s;" onmouseover="this.style.background='rgba(255,255,255,0.05)';this.style.color='#fff'" onmouseout="this.style.background='transparent';this.style.color='#A8A29E'">
          <span style="color:#78716C;display:flex;align-items:center;">${SVG.gear}</span>
          <span>Settings</span>
        </div>
      </div>`;

    case 6: // MULTISELECT-G: Cascading Flyout Submenu (Screenshot 3: Linear Slate Action Menu)
      return `${animStyles}<div style="width:100%;max-width:280px;background:#182026;border:1px solid #28333D;border-radius:16px;padding:8px;box-shadow:0 16px 36px rgba(0,0,0,0.55);color:#E2E8F0;display:flex;flex-direction:column;gap:2px;">
        <div style="padding:10px 12px;display:flex;align-items:center;gap:12px;color:#CBD5E1;font-size:13px;font-weight:600;border-radius:10px;cursor:pointer;" onmouseover="this.style.background='#222C35'" onmouseout="this.style.background='transparent'">
          <span style="color:#94A3B8;display:flex;align-items:center;">${SVG.edit}</span>
          <span>Edit</span>
        </div>
        <!-- Active Row with Submenu Highlight (Directly matching Screenshot 3) -->
        <div style="padding:10px 12px;background:#242F38;border-radius:10px;display:flex;align-items:center;justify-content:space-between;color:#FFFFFF;font-size:13px;font-weight:700;cursor:pointer;">
          <div style="display:flex;align-items:center;gap:12px;">
            <span style="color:#38BDF8;display:flex;align-items:center;">${SVG.external}</span>
            <span>Open</span>
          </div>
          <span style="font-size:10px;font-weight:800;color:#38BDF8;background:rgba(56,189,248,0.15);padding:2px 7px;border-radius:4px;">Node 9021 ›</span>
        </div>
        <div style="padding:10px 12px;display:flex;align-items:center;gap:12px;color:#CBD5E1;font-size:13px;font-weight:600;border-radius:10px;cursor:pointer;" onmouseover="this.style.background='#222C35'" onmouseout="this.style.background='transparent'">
          <span style="color:#94A3B8;display:flex;align-items:center;">${SVG.doc}</span>
          <span>View Details</span>
        </div>
        <div style="border-top:1px solid #28333D;margin:4px 0;"></div>
        <div style="padding:10px 12px;display:flex;align-items:center;gap:12px;color:#F87171;font-size:13px;font-weight:600;border-radius:10px;cursor:pointer;" onmouseover="this.style.background='rgba(248,113,113,0.1)'" onmouseout="this.style.background='transparent'">
          <span style="display:flex;align-items:center;">${SVG.trash}</span>
          <span>Delete</span>
        </div>
      </div>`;

    case 7: // MULTISELECT-H: Floating Island Card (Dynamic Island Multi-Pill)
      return `${animStyles}<div style="width:100%;max-width:320px;background:#09090B;border:1px solid #27272A;border-radius:24px;padding:16px;box-shadow:0 16px 40px rgba(0,0,0,0.8);color:#FFFFFF;animation:rpIslandExpand 0.3s cubic-bezier(0.16,1,0.3,1);display:flex;flex-direction:column;gap:10px;">
        <div style="display:flex;align-items:center;justify-content:space-between;">
          <div style="display:flex;align-items:center;gap:8px;">
            <span style="width:6px;height:6px;border-radius:50%;background:#10B981;box-shadow:0 0 8px #10B981;"></span>
            <span style="font-size:11px;font-weight:800;letter-spacing:0.06em;color:#A1A1AA;text-transform:uppercase;">ESCROW DYNAMIC ISLAND</span>
          </div>
          <span style="font-size:10px;font-weight:900;color:#38BDF8;background:rgba(56,189,248,0.12);padding:2px 8px;border-radius:99px;border:1px solid rgba(56,189,248,0.25);">3 ACTIVE</span>
        </div>
        <div style="display:flex;flex-wrap:wrap;gap:6px;">
          <span style="padding:5px 10px;background:#18181B;border:1px solid #27272A;border-radius:99px;font-size:11px;font-weight:800;color:#FFFFFF;display:inline-flex;align-items:center;gap:6px;">₹28.5k Rent <span style="color:#10B981;">✓</span></span>
          <span style="padding:5px 10px;background:#18181B;border:1px solid #27272A;border-radius:99px;font-size:11px;font-weight:800;color:#FFFFFF;display:inline-flex;align-items:center;gap:6px;">₹1.4L Escrow <span style="color:#10B981;">✓</span></span>
          <span style="padding:5px 10px;background:#18181B;border:1px solid #27272A;border-radius:99px;font-size:11px;font-weight:800;color:#FFFFFF;display:inline-flex;align-items:center;gap:6px;">Auto-Pay ON <span style="color:#38BDF8;">⚡</span></span>
        </div>
      </div>`;

    case 8: // MULTISELECT-I: Full-Width Command Bar (Raycast / Linear Palette)
      return `${animStyles}<div style="width:100%;max-width:320px;background:#09090B;border:1px solid #27272A;border-radius:18px;padding:12px 14px;box-shadow:0 12px 30px rgba(0,0,0,0.7);color:#FFFFFF;display:flex;flex-direction:column;gap:8px;">
        <div style="display:flex;align-items:center;gap:8px;padding-bottom:8px;border-bottom:1px solid #27272A;">
          <span style="color:#60A5FA;">⚡</span>
          <span style="font-size:13px;font-weight:700;color:#F1F5F9;flex:1;">Filter Amenities...</span>
          <kbd style="font-size:10px;background:#27272A;padding:2px 6px;border-radius:4px;color:#A1A1AA;font-family:monospace;border:1px solid #3F3F46;">⌘K</kbd>
        </div>
        <div style="display:flex;flex-wrap:wrap;gap:6px;">
          <span style="background:#1E293B;color:#38BDF8;border:1px solid #334155;padding:3px 8px;border-radius:6px;font-size:10.5px;font-weight:700;">Gated Society ✕</span>
          <span style="background:#1E293B;color:#38BDF8;border:1px solid #334155;padding:3px 8px;border-radius:6px;font-size:10.5px;font-weight:700;">Metro < 500m ✕</span>
          <span style="background:#1E293B;color:#38BDF8;border:1px solid #334155;padding:3px 8px;border-radius:6px;font-size:10.5px;font-weight:700;">Pet Friendly ✕</span>
        </div>
        <div style="font-size:10px;color:#71717A;display:flex;justify-content:space-between;padding-top:4px;">
          <span>↵ to select</span>
          <span>ESC to clear</span>
        </div>
      </div>`;

    case 9: // MULTISELECT-J: Dark Frosted Precision (Screenshot 4: Tactile Caliper Hardware Slider)
      return `${animStyles}<div style="width:100%;max-width:320px;background:#0C0A09;border:1px solid #292524;border-radius:22px;padding:18px 20px;box-shadow:0 16px 36px rgba(0,0,0,0.8);color:#FFFFFF;display:flex;flex-direction:column;gap:4px;">
        <!-- Heading with Top Right Count Badge (Directly matching Screenshot 4!) -->
        <div style="display:flex;align-items:center;justify-content:space-between;">
          <span style="font-size:26px;font-weight:900;color:#FFFFFF;letter-spacing:-0.03em;">garlic</span>
          <div style="background:#1C1917;border:1px solid #292524;border-radius:10px;padding:6px 14px;font-size:16px;font-weight:800;color:#FAFAFA;font-family:monospace;">3</div>
        </div>
        <!-- Subtitle -->
        <div style="font-size:11px;font-weight:700;color:#78716C;text-align:center;letter-spacing:0.06em;margin:6px 0 10px;">carrots</div>
        
        <!-- Physical Caliper Ticker Tape Row (Directly matching Screenshot 4!) -->
        <div style="display:flex;align-items:center;justify-content:space-between;gap:8px;">
          <div style="background:#F5F5F4;color:#0C0A09;border-radius:12px;padding:9px 14px;font-size:13.5px;font-weight:900;box-shadow:0 2px 4px rgba(0,0,0,0.2);">Kg</div>
          <div style="display:flex;align-items:center;gap:4.5px;padding:0 6px;flex:1;justify-content:center;">
            <div style="width:2px;height:12px;background:#292524;border-radius:1px;"></div>
            <div style="width:2px;height:16px;background:#44403C;border-radius:1px;"></div>
            <div style="width:2px;height:12px;background:#292524;border-radius:1px;"></div>
            <div style="width:2px;height:16px;background:#44403C;border-radius:1px;"></div>
            <!-- Active Amber Center Needle -->
            <div style="width:2.5px;height:24px;background:#F59E0B;border-radius:2px;box-shadow:0 0 10px rgba(245,158,11,0.7);"></div>
            <div style="width:2px;height:16px;background:#44403C;border-radius:1px;"></div>
            <div style="width:2px;height:12px;background:#292524;border-radius:1px;"></div>
            <div style="width:2px;height:16px;background:#44403C;border-radius:1px;"></div>
            <div style="width:2px;height:12px;background:#292524;border-radius:1px;"></div>
          </div>
          <div style="background:#F5F5F4;color:#0C0A09;border-radius:12px;padding:9px 14px;font-size:13.5px;font-weight:900;font-family:monospace;box-shadow:0 2px 4px rgba(0,0,0,0.2);">0.7</div>
        </div>
      </div>`;

    case 10: // MULTISELECT-K: Multi Select Apple Porcelain Light (Screenshot 5: Amie iOS Drawer Sheet)
      return `${animStyles}<div style="width:100%;max-width:320px;background:#FFFFFF;border:1px solid #E2E8F0;border-radius:26px;padding:16px 18px;box-shadow:0 12px 32px rgba(15,23,42,0.08);display:flex;flex-direction:column;gap:12px;">
        <!-- Top Pill Grab Handle (Directly matching Screenshot 5!) -->
        <div style="width:36px;height:4px;background:#CBD5E1;border-radius:99px;margin:0 auto 2px;"></div>
        
        <!-- Segmented Tab Switcher -->
        <div style="display:flex;background:#F1F5F9;padding:3px;border-radius:99px;">
          <button style="flex:1;background:#FFFFFF;border:none;border-radius:99px;padding:7px 12px;font-size:11.5px;font-weight:800;color:#0F172A;box-shadow:0 2px 6px rgba(0,0,0,0.06);cursor:pointer;">Home Screen</button>
          <button style="flex:1;background:transparent;border:none;border-radius:99px;padding:7px 12px;font-size:11.5px;font-weight:600;color:#64748B;cursor:pointer;">Lock Screen</button>
        </div>

        <!-- Numbered Step Cards (Directly matching Screenshot 5!) -->
        <div style="display:flex;flex-direction:column;gap:8px;">
          <div style="padding:10px 12px;background:#F8FAFC;border:1px solid #F1F5F9;border-radius:14px;display:flex;align-items:center;justify-content:space-between;">
            <div style="display:flex;gap:10px;align-items:center;">
              <span style="font-size:14px;font-weight:900;color:#64748B;">1</span>
              <div style="font-size:11.5px;font-weight:700;color:#0F172A;line-height:1.3;">Edit Home Screen<br/><span style="color:#64748B;font-weight:500;">and tap plus button</span></div>
            </div>
            <div style="width:36px;height:32px;background:#E2E8F0;border-radius:8px;display:flex;align-items:center;justify-content:center;color:#64748B;font-size:14px;font-weight:900;">+</div>
          </div>
          <div style="padding:10px 12px;background:#F8FAFC;border:1px solid #F1F5F9;border-radius:14px;display:flex;align-items:center;justify-content:space-between;">
            <div style="display:flex;gap:10px;align-items:center;">
              <span style="font-size:14px;font-weight:900;color:#64748B;">2</span>
              <div style="font-size:11.5px;font-weight:700;color:#0F172A;line-height:1.3;">Search for Amie<br/><span style="color:#64748B;font-weight:500;">and add widgets</span></div>
            </div>
            <div style="width:36px;height:32px;background:#334155;border-radius:8px;display:flex;align-items:center;justify-content:center;color:#fff;font-size:13px;font-weight:800;">A</div>
          </div>
          <div style="padding:10px 12px;background:#F8FAFC;border:1px solid #F1F5F9;border-radius:14px;display:flex;align-items:center;justify-content:space-between;">
            <div style="display:flex;gap:10px;align-items:center;">
              <span style="font-size:14px;font-weight:900;color:#64748B;">3</span>
              <div style="font-size:11.5px;font-weight:700;color:#0F172A;line-height:1.3;">Long press → Edit<br/><span style="color:#64748B;font-weight:500;">to change selection</span></div>
            </div>
            <div style="width:36px;height:32px;background:#0284C7;border-radius:8px;display:flex;align-items:center;justify-content:center;color:#fff;font-size:12px;">⚡</div>
          </div>
        </div>

        <!-- Primary Bottom Action Button (Directly matching Screenshot 5!) -->
        <button style="width:100%;background:#09090B;color:#FFFFFF;border:none;border-radius:14px;padding:13px;font-size:13px;font-weight:800;letter-spacing:-0.01em;cursor:pointer;box-shadow:0 4px 14px rgba(0,0,0,0.25);margin-top:2px;">Add Widgets</button>
      </div>`;

    case 11: // MULTISELECT-L: Multi Select CRED Titanium Dark (Neon Cryptographic Matrix)
    default:
      return `${animStyles}<div style="width:100%;max-width:320px;background:#09090B;border:1px solid rgba(204,255,0,0.4);border-radius:22px;padding:18px 20px;box-shadow:0 20px 48px rgba(0,0,0,0.85), 0 0 20px rgba(204,255,0,0.12);color:#FFFFFF;display:flex;flex-direction:column;gap:12px;">
        <div style="display:flex;justify-content:space-between;align-items:center;">
          <div>
            <div style="font-size:9.5px;font-weight:900;color:#CCFF00;letter-spacing:0.12em;text-transform:uppercase;">TITANIUM VAULT MATRIX</div>
            <div style="font-size:13.5px;font-weight:800;color:#FFFFFF;margin-top:2px;">3 of 4 Nodes Locked</div>
          </div>
          <span style="font-size:10px;font-weight:900;color:#CCFF00;border:1px solid #CCFF00;padding:2px 8px;border-radius:99px;animation:rpCredVolt 2s infinite;">ENCRYPTED</span>
        </div>
        <div style="display:flex;flex-direction:column;gap:6px;">
          <div style="padding:10px 12px;background:#18181B;border:1px solid rgba(204,255,0,0.3);border-radius:12px;display:flex;align-items:center;justify-content:space-between;">
            <div>
              <div style="font-size:12.5px;font-weight:800;color:#CCFF00;">Primary Escrow Vault (BLR-01)</div>
              <div style="font-size:10px;color:rgba(255,255,255,0.6);font-family:monospace;">HASH #ESC-7704-B • ₹1,42,800 Locked</div>
            </div>
            <div style="width:18px;height:18px;border-radius:4px;background:#CCFF00;color:#09090B;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:900;">✓</div>
          </div>
          <div style="padding:10px 12px;background:#18181B;border:1px solid rgba(204,255,0,0.3);border-radius:12px;display:flex;align-items:center;justify-content:space-between;">
            <div>
              <div style="font-size:12.5px;font-weight:800;color:#CCFF00;">Secondary Yield Vault (MUM-02)</div>
              <div style="font-size:10px;color:rgba(255,255,255,0.6);font-family:monospace;">HASH #ESC-9011-M • ₹85,000 Locked</div>
            </div>
            <div style="width:18px;height:18px;border-radius:4px;background:#CCFF00;color:#09090B;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:900;">✓</div>
          </div>
        </div>
      </div>`;
  }
}

function renderDropdownVariants(fam, icon, slug, variantIndex) {
  const isSearchable = slug === 'searchable-select';
  const isMulti = slug === 'multi-select';
  const isProp = slug === 'property-selector';
  const isFilter = slug === 'filter-dropdown';
  const isSort = slug === 'sort-dropdown';

  if (isMulti) {
    return renderMultiSelectVariants(fam, icon, variantIndex);
  }

  // Crisp Vector SVGs for Modern Pro Quality (Zero generic emojis/unicode arrows)
  const SVG = {
    chevronDown: `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>`,
    chevronUp: `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m18 15-6-6-6 6"/></svg>`,
    check: `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,
    search: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>`,
    pin: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>`,
    building: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="20" x="4" y="2" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/></svg>`,
    sort: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 16 4 4 4-4"/><path d="M7 20V4"/><path d="m21 8-4-4-4 4"/><path d="M17 4v16"/></svg>`,
    close: `<svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>`,
    switchArrows: `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="m7 15 5 5 5-5"/><path d="m7 9 5-5 5 5"/></svg>`,
    sparkle: `<svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><path d="m12 2 2.4 7.2L22 12l-7.6 2.8L12 22l-2.4-7.2L2 12l7.6-2.8z"/></svg>`
  };

  switch (variantIndex) {
    case 0: // Model A: Modern Pro Chevron Select Card (Closed Trigger)
      return `<div style="width:100%;max-width:320px;background:linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%);border:1px solid #E2E8F0;border-radius:18px;padding:12px 14px;box-shadow:0 1px 3px rgba(15,23,42,0.04), 0 8px 20px -4px rgba(15,23,42,0.06), inset 0 1px 0 #FFFFFF;display:flex;flex-direction:column;gap:8px;cursor:pointer;position:relative;">
        <div style="display:flex;align-items:center;justify-content:space-between;">
          <span style="font-size:10px;font-weight:800;color:#64748B;letter-spacing:0.08em;text-transform:uppercase;">${isProp ? 'SELECT PROPERTY' : (isSort ? 'SORT ORDER' : (isFilter ? 'ACTIVE FILTER' : 'CHOOSE OPTION'))}</span>
          <span style="display:inline-flex;align-items:center;gap:4px;font-size:10px;font-weight:700;color:#059669;background:#ECFDF5;padding:2px 7px;border-radius:99px;border:1px solid #D1FAE5;"><span style="width:5px;height:5px;border-radius:50%;background:#10B981;box-shadow:0 0 5px #10B981;"></span>${isProp ? '402 Active' : 'Verified'}</span>
        </div>
        <div style="display:flex;align-items:center;justify-content:space-between;gap:10px;">
          <div style="display:flex;align-items:center;gap:10px;min-width:0;">
            <div style="width:34px;height:34px;border-radius:10px;background:linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 100%);border:1px solid #BFDBFE;display:flex;align-items:center;justify-content:center;color:#2563EB;flex-shrink:0;">
              ${isProp ? SVG.building : (isSort ? SVG.sort : SVG.pin)}
            </div>
            <div style="min-width:0;">
              <div style="font-size:13.5px;font-weight:800;color:#0F172A;letter-spacing:-0.01em;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">
                ${isProp ? 'Indiranagar 3BHK Duplex' : (isSort ? 'Rent: Low to High' : 'Prestige Falcon City, Bengaluru')}
              </div>
              <div style="font-size:11px;font-weight:600;color:#64748B;margin-top:1px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">
                ${isProp ? 'Tower B • ₹28,500/mo' : (isSort ? 'Ascending Order • ₹' : 'Kanakapura Rd • ₹42,000/mo')}
              </div>
            </div>
          </div>
          <div style="width:28px;height:28px;border-radius:50%;background:#F1F5F9;border:1px solid #E2E8F0;display:flex;align-items:center;justify-content:center;color:#475569;flex-shrink:0;">
            ${SVG.chevronDown}
          </div>
        </div>
      </div>`;

    case 1: // Model B: Open Dropdown Popover with Active Selection
      return `<div style="width:100%;max-width:320px;background:#FFFFFF;border:1px solid #E2E8F0;border-radius:20px;box-shadow:0 16px 36px -6px rgba(15,23,42,0.12), 0 0 0 1px rgba(15,23,42,0.04);overflow:hidden;display:flex;flex-direction:column;">
        <div style="padding:12px 14px;border-bottom:1px solid #F1F5F9;background:#FFFFFF;display:flex;align-items:center;justify-content:space-between;">
          <div style="display:flex;align-items:center;gap:8px;">
            <span style="font-size:12.5px;font-weight:800;color:#0F172A;">${isProp ? 'Select Rental Unit' : 'Select Locality'}</span>
            <span style="font-size:10px;font-weight:800;color:#2563EB;background:#EFF6FF;padding:2px 7px;border-radius:99px;border:1px solid #DBEAFE;">3 Available</span>
          </div>
          <div style="width:24px;height:24px;border-radius:50%;background:#EFF6FF;color:#2563EB;display:flex;align-items:center;justify-content:center;">
            ${SVG.chevronUp}
          </div>
        </div>
        <div style="padding:6px 10px 4px;display:flex;gap:6px;">
          <span style="font-size:10px;font-weight:800;background:#0F172A;color:#FFFFFF;padding:3px 8px;border-radius:99px;">All BLR (3)</span>
          <span style="font-size:10px;font-weight:700;background:#F8FAFC;color:#64748B;padding:3px 8px;border-radius:99px;border:1px solid #E2E8F0;">East</span>
          <span style="font-size:10px;font-weight:700;background:#F8FAFC;color:#64748B;padding:3px 8px;border-radius:99px;border:1px solid #E2E8F0;">South</span>
        </div>
        <div style="padding:6px;display:flex;flex-direction:column;gap:5px;">
          <div style="padding:10px 12px;background:linear-gradient(135deg, #EFF6FF 0%, #F0F7FF 100%);border:1.5px solid #3B82F6;border-radius:14px;display:flex;align-items:center;justify-content:space-between;box-shadow:0 2px 8px rgba(37,99,235,0.08);">
            <div style="display:flex;align-items:center;gap:10px;">
              <div style="width:28px;height:28px;border-radius:8px;background:#DBEAFE;color:#2563EB;display:flex;align-items:center;justify-content:center;flex-shrink:0;">
                ${isProp ? SVG.building : SVG.pin}
              </div>
              <div>
                <div style="font-size:12.5px;font-weight:800;color:#1D4ED8;">${isProp ? 'Indiranagar Duplex #402' : 'Indiranagar (100ft Rd)'}</div>
                <div style="font-size:10.5px;font-weight:600;color:#3B82F6;">${isProp ? '₹28,500/mo • Auto-Pay Active' : 'Avg ₹32k/mo • 18 verified units'}</div>
              </div>
            </div>
            <div style="width:20px;height:20px;border-radius:50%;background:#2563EB;color:#FFFFFF;display:flex;align-items:center;justify-content:center;box-shadow:0 2px 6px rgba(37,99,235,0.4);flex-shrink:0;">
              ${SVG.check}
            </div>
          </div>
          <div style="padding:10px 12px;background:#FFFFFF;border:1px solid #F1F5F9;border-radius:12px;display:flex;align-items:center;justify-content:space-between;transition:all 0.2s;">
            <div style="display:flex;align-items:center;gap:10px;">
              <div style="width:28px;height:28px;border-radius:8px;background:#F1F5F9;color:#64748B;display:flex;align-items:center;justify-content:center;flex-shrink:0;">
                ${isProp ? SVG.building : SVG.pin}
              </div>
              <div>
                <div style="font-size:12.5px;font-weight:700;color:#334155;">${isProp ? 'Koramangala 4BHK Penthouse' : 'Koramangala 4th Block'}</div>
                <div style="font-size:10.5px;font-weight:500;color:#94A3B8;">${isProp ? '₹45,000/mo • Available Nov 1' : 'Avg ₹38k/mo • 24 units'}</div>
              </div>
            </div>
            <span style="font-size:10px;font-weight:700;color:#64748B;background:#F1F5F9;padding:3px 7px;border-radius:6px;">3.2 km</span>
          </div>
          <div style="padding:10px 12px;background:#FFFFFF;border:1px solid #F1F5F9;border-radius:12px;display:flex;align-items:center;justify-content:space-between;">
            <div style="display:flex;align-items:center;gap:10px;">
              <div style="width:28px;height:28px;border-radius:8px;background:#F1F5F9;color:#64748B;display:flex;align-items:center;justify-content:center;flex-shrink:0;">
                ${isProp ? SVG.building : SVG.pin}
              </div>
              <div>
                <div style="font-size:12.5px;font-weight:700;color:#334155;">${isProp ? 'HSR Sector 2 Garden Villa' : 'HSR Layout Sector 2'}</div>
                <div style="font-size:10.5px;font-weight:500;color:#94A3B8;">${isProp ? '₹32,000/mo • Ready Now' : 'Avg ₹28.5k/mo • 14 units'}</div>
              </div>
            </div>
            <span style="font-size:10px;font-weight:700;color:#64748B;background:#F1F5F9;padding:3px 7px;border-radius:6px;">4.8 km</span>
          </div>
        </div>
        <div style="padding:8px 12px;background:#F8FAFC;border-top:1px solid #F1F5F9;display:flex;align-items:center;justify-content:space-between;font-size:10.5px;">
          <span style="color:#059669;font-weight:700;display:flex;align-items:center;gap:4px;">${SVG.sparkle} Zero Brokerage Verified</span>
          <span style="color:#2563EB;font-weight:800;cursor:pointer;">View on Map →</span>
        </div>
      </div>`;

    case 2: // Model C: Searchable Live Dropdown with Spotlight Input
      return `<div style="width:100%;max-width:320px;background:#FFFFFF;border:1px solid #E2E8F0;border-radius:20px;box-shadow:0 16px 36px -6px rgba(15,23,42,0.12), 0 0 0 1px rgba(15,23,42,0.04);overflow:hidden;display:flex;flex-direction:column;">
        <div style="padding:10px 12px;border-bottom:1px solid #F1F5F9;background:#FFFFFF;display:flex;align-items:center;gap:8px;">
          <div style="color:#2563EB;display:flex;align-items:center;flex-shrink:0;">${SVG.search}</div>
          <div style="flex:1;display:flex;align-items:center;">
            <span style="font-size:13.5px;font-weight:700;color:#0F172A;">Bangalore</span>
            <span style="display:inline-block;width:2px;height:16px;background:#2563EB;margin-left:2px;border-radius:1px;"></span>
          </div>
          <span style="font-size:10px;font-weight:800;color:#2563EB;background:#EFF6FF;padding:2px 7px;border-radius:99px;border:1px solid #DBEAFE;">3 Matches</span>
          <kbd style="font-size:9.5px;font-weight:700;color:#94A3B8;background:#F8FAFC;padding:2px 5px;border-radius:4px;border:1px solid #E2E8F0;font-family:monospace;">ESC</kbd>
        </div>
        <div style="padding:6px 10px 4px;display:flex;gap:6px;">
          <span style="font-size:10px;font-weight:800;background:#0F172A;color:#FFFFFF;padding:2px 7px;border-radius:99px;">All BLR (3)</span>
          <span style="font-size:10px;font-weight:700;background:#F8FAFC;color:#64748B;padding:2px 7px;border-radius:99px;border:1px solid #E2E8F0;">Central</span>
          <span style="font-size:10px;font-weight:700;background:#F8FAFC;color:#64748B;padding:2px 7px;border-radius:99px;border:1px solid #E2E8F0;">East</span>
        </div>
        <div style="padding:6px;display:flex;flex-direction:column;gap:4px;">
          <div style="padding:8px 10px;background:linear-gradient(135deg, #EFF6FF 0%, #F0F7FF 100%);border:1.5px solid #3B82F6;border-radius:12px;display:flex;align-items:center;justify-content:space-between;">
            <div>
              <div style="font-size:12.5px;font-weight:700;color:#0F172A;">
                <mark style="background:rgba(37,99,235,0.15);color:#1D4ED8;font-weight:800;padding:0 2px;border-radius:3px;">Bangalore</mark> Urban (Central Hub)
              </div>
              <div style="font-size:10.5px;font-weight:600;color:#3B82F6;margin-top:1px;">142 Properties • Avg ₹36k/mo</div>
            </div>
            <div style="width:18px;height:18px;border-radius:50%;background:#2563EB;color:#FFFFFF;display:flex;align-items:center;justify-content:center;box-shadow:0 2px 6px rgba(37,99,235,0.4);flex-shrink:0;">
              ${SVG.check}
            </div>
          </div>
          <div style="padding:8px 10px;background:#FFFFFF;border:1px solid #F1F5F9;border-radius:10px;display:flex;align-items:center;justify-content:space-between;">
            <div>
              <div style="font-size:12.5px;font-weight:700;color:#334155;">
                <mark style="background:rgba(37,99,235,0.15);color:#1D4ED8;font-weight:800;padding:0 2px;border-radius:3px;">Bangalore</mark> East (Whitefield)
              </div>
              <div style="font-size:10.5px;font-weight:500;color:#64748B;margin-top:1px;">98 Tech-Park Units • Avg ₹28k/mo</div>
            </div>
            <span style="font-size:9.5px;font-weight:700;color:#059669;background:#ECFDF5;padding:2px 6px;border-radius:4px;">IT Hub</span>
          </div>
          <div style="padding:8px 10px;background:#FFFFFF;border:1px solid #F1F5F9;border-radius:10px;display:flex;align-items:center;justify-content:space-between;">
            <div>
              <div style="font-size:12.5px;font-weight:700;color:#334155;">
                <mark style="background:rgba(37,99,235,0.15);color:#1D4ED8;font-weight:800;padding:0 2px;border-radius:3px;">Bangalore</mark> North (Hebbal)
              </div>
              <div style="font-size:10.5px;font-weight:500;color:#64748B;margin-top:1px;">45 Gated Units • Airport Express</div>
            </div>
            <span style="font-size:9.5px;font-weight:700;color:#64748B;background:#F1F5F9;padding:2px 6px;border-radius:4px;">Expressway</span>
          </div>
        </div>
        <div style="padding:6px 12px;background:#F8FAFC;border-top:1px solid #F1F5F9;display:flex;justify-content:space-between;align-items:center;font-size:10px;color:#94A3B8;font-weight:600;">
          <span>Use <kbd style="font-family:monospace;background:#FFFFFF;padding:1px 4px;border:1px solid #E2E8F0;border-radius:3px;">↑</kbd><kbd style="font-family:monospace;background:#FFFFFF;padding:1px 4px;border:1px solid #E2E8F0;border-radius:3px;">↓</kbd> to navigate</span>
          <span><kbd style="font-family:monospace;background:#FFFFFF;padding:1px 4px;border:1px solid #E2E8F0;border-radius:3px;">↵</kbd> select</span>
        </div>
      </div>`;

    case 3: // Model D: Multi-Select with Tags Inside Field
      return `<div style="width:100%;max-width:320px;background:#FFFFFF;border:1.5px solid #2563EB;border-radius:18px;padding:12px 14px;box-shadow:0 0 0 3.5px rgba(37,99,235,0.1), 0 4px 12px rgba(15,23,42,0.04);display:flex;flex-direction:column;gap:8px;">
        <div style="display:flex;justify-content:space-between;align-items:center;">
          <span style="font-size:10px;font-weight:800;color:#2563EB;letter-spacing:0.08em;text-transform:uppercase;">SELECTED AMENITIES • 3 OF 12</span>
          <span style="font-size:10px;font-weight:800;color:#2563EB;background:#EFF6FF;padding:2px 7px;border-radius:99px;">Active</span>
        </div>
        <div style="display:flex;flex-wrap:wrap;gap:6px;align-items:center;">
          <span style="display:inline-flex;align-items:center;gap:6px;padding:4px 8px;background:linear-gradient(135deg,#EFF6FF,#DBEAFE);color:#1D4ED8;border:1px solid #BFDBFE;border-radius:8px;font-size:11px;font-weight:700;">
            🏊 Pool <span style="cursor:pointer;color:#2563EB;display:flex;align-items:center;">${SVG.close}</span>
          </span>
          <span style="display:inline-flex;align-items:center;gap:6px;padding:4px 8px;background:linear-gradient(135deg,#EFF6FF,#DBEAFE);color:#1D4ED8;border:1px solid #BFDBFE;border-radius:8px;font-size:11px;font-weight:700;">
            🏋️ Gym <span style="cursor:pointer;color:#2563EB;display:flex;align-items:center;">${SVG.close}</span>
          </span>
          <span style="display:inline-flex;align-items:center;gap:6px;padding:4px 8px;background:linear-gradient(135deg,#EFF6FF,#DBEAFE);color:#1D4ED8;border:1px solid #BFDBFE;border-radius:8px;font-size:11px;font-weight:700;">
            ⚡ 100% Backup <span style="cursor:pointer;color:#2563EB;display:flex;align-items:center;">${SVG.close}</span>
          </span>
          <span style="display:inline-flex;align-items:center;padding:4px 8px;background:#F1F5F9;color:#64748B;border-radius:8px;font-size:11px;font-weight:700;">+2 more</span>
          <span style="display:inline-flex;align-items:center;gap:4px;padding:4px 8px;background:#FFFFFF;border:1px dashed #CBD5E1;color:#64748B;border-radius:8px;font-size:11px;font-weight:700;cursor:pointer;">+ Add</span>
        </div>
      </div>`;

    case 4: // Model E: Property Switcher Card with Thumbnail
      return `<div style="width:100%;max-width:320px;background:linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%);border:1px solid #E2E8F0;border-radius:20px;padding:12px 14px;box-shadow:0 1px 3px rgba(15,23,42,0.04), 0 8px 24px -4px rgba(15,23,42,0.08);display:flex;align-items:center;justify-content:space-between;gap:12px;">
        <div style="display:flex;align-items:center;gap:12px;min-width:0;">
          <div style="width:44px;height:44px;border-radius:12px;background:linear-gradient(135deg, #1E293B 0%, #0F172A 100%);display:flex;align-items:center;justify-content:center;color:#38BDF8;box-shadow:0 4px 10px rgba(15,23,42,0.15);flex-shrink:0;">
            ${SVG.building}
          </div>
          <div style="min-width:0;">
            <div style="font-size:13.5px;font-weight:800;color:#0F172A;letter-spacing:-0.01em;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">Prestige Falcon Duplex</div>
            <div style="font-size:11px;color:#059669;font-weight:700;display:flex;align-items:center;gap:4px;margin-top:2px;">
              <span style="width:5px;height:5px;border-radius:50%;background:#10B981;box-shadow:0 0 5px #10B981;"></span>Unit #402 • ₹28,500/mo
            </div>
          </div>
        </div>
        <button style="display:flex;align-items:center;gap:6px;padding:7px 11px;background:#EFF6FF;border:1px solid #BFDBFE;border-radius:10px;font-size:11.5px;font-weight:800;color:#2563EB;cursor:pointer;box-shadow:0 1px 2px rgba(37,99,235,0.05);flex-shrink:0;">
          <span>Switch</span>
          <span style="display:flex;align-items:center;">${SVG.switchArrows}</span>
        </button>
      </div>`;

    case 5: // Model F: Sort Dropdown Filter Card
      return `<div style="width:100%;max-width:320px;background:linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%);border:1px solid #E2E8F0;border-radius:18px;padding:12px 14px;box-shadow:0 1px 3px rgba(15,23,42,0.04), 0 8px 20px -4px rgba(15,23,42,0.06);display:flex;align-items:center;justify-content:space-between;cursor:pointer;">
        <div style="display:flex;align-items:center;gap:10px;">
          <div style="width:34px;height:34px;border-radius:10px;background:linear-gradient(135deg, #F1F5F9 0%, #E2E8F0 100%);border:1px solid #CBD5E1;display:flex;align-items:center;justify-content:center;color:#475569;flex-shrink:0;">
            ${SVG.sort}
          </div>
          <div>
            <div style="font-size:10px;font-weight:800;color:#64748B;letter-spacing:0.06em;text-transform:uppercase;">SORT BY CRITERIA</div>
            <div style="font-size:13px;font-weight:800;color:#0F172A;margin-top:1px;">Rent: Lowest First (₹)</div>
          </div>
        </div>
        <div style="display:flex;align-items:center;gap:6px;">
          <span style="font-size:10.5px;font-weight:800;color:#2563EB;background:#EFF6FF;border:1px solid #BFDBFE;padding:3px 7px;border-radius:6px;">ASC ↗</span>
          <div style="width:24px;height:24px;border-radius:50%;background:#F8FAFC;border:1px solid #E2E8F0;display:flex;align-items:center;justify-content:center;color:#64748B;">
            ${SVG.chevronDown}
          </div>
        </div>
      </div>`;

    case 6: // Model G: Filter Dropdown Pill Button
      return `<div style="width:100%;max-width:320px;display:flex;flex-wrap:wrap;gap:8px;align-items:center;">
        <button style="display:inline-flex;align-items:center;gap:6px;padding:8px 14px;background:#0F172A;color:#FFFFFF;border:none;border-radius:99px;font-size:12px;font-weight:700;box-shadow:0 4px 12px rgba(15,23,42,0.15);cursor:pointer;">
          <span>Furnishing</span>
          <span style="width:18px;height:18px;border-radius:50%;background:#3B82F6;color:#FFFFFF;font-size:10px;font-weight:800;display:flex;align-items:center;justify-content:center;">2</span>
          <span style="opacity:0.7;display:flex;align-items:center;">${SVG.chevronDown}</span>
        </button>
        <button style="display:inline-flex;align-items:center;gap:6px;padding:8px 14px;background:#FFFFFF;border:1.5px solid #E2E8F0;color:#334155;border-radius:99px;font-size:12px;font-weight:700;box-shadow:0 1px 3px rgba(0,0,0,0.04);cursor:pointer;">
          <span>BHK Type</span>
          <span style="display:flex;align-items:center;">${SVG.chevronDown}</span>
        </button>
        <span style="font-size:11px;font-weight:800;color:#EF4444;cursor:pointer;padding:4px 6px;">Reset</span>
      </div>`;

    case 7: // Model H: Dark Obsidian Dropdown (CRED / Apple Dark)
      return `<div style="width:100%;max-width:320px;background:#0B0D14;border:1px solid rgba(56,189,248,0.3);border-radius:18px;padding:14px 16px;box-shadow:0 16px 36px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.06);color:#FFFFFF;display:flex;flex-direction:column;gap:6px;">
        <div style="display:flex;justify-content:space-between;align-items:center;">
          <span style="font-size:9.5px;font-weight:900;color:#38BDF8;letter-spacing:0.08em;text-transform:uppercase;">ACTIVE ESCROW VAULT</span>
          <span style="font-size:10px;font-weight:800;color:#34D399;display:flex;align-items:center;gap:4px;">
            <span style="width:5px;height:5px;border-radius:50%;background:#34D399;box-shadow:0 0 6px #34D399;"></span>LOCKED
          </span>
        </div>
        <div style="display:flex;justify-content:space-between;align-items:center;margin-top:2px;">
          <div>
            <div style="font-size:13.5px;font-weight:800;color:#FFFFFF;letter-spacing:-0.01em;">HDFC Escrow Node •• 9021</div>
            <div style="font-size:11px;font-weight:600;color:#94A3B8;margin-top:2px;">₹1,42,800.00 Held for Landlord</div>
          </div>
          <div style="width:28px;height:28px;border-radius:50%;background:rgba(56,189,248,0.12);border:1px solid rgba(56,189,248,0.3);display:flex;align-items:center;justify-content:center;color:#38BDF8;flex-shrink:0;">
            ${SVG.chevronDown}
          </div>
        </div>
      </div>`;

    case 8: // Model I: Multi-Category Tree Select
      return `<div style="width:100%;max-width:320px;background:#FFFFFF;border:1px solid #E2E8F0;border-radius:18px;padding:12px 14px;box-shadow:0 2px 8px rgba(0,0,0,0.04);display:flex;flex-direction:column;gap:8px;">
        <div style="display:flex;justify-content:space-between;align-items:center;">
          <span style="font-size:10px;font-weight:800;color:#64748B;letter-spacing:0.06em;text-transform:uppercase;">HIERARCHICAL SELECTION</span>
          <span style="font-size:10px;font-weight:800;color:#2563EB;background:#EFF6FF;padding:2px 6px;border-radius:4px;">Level 3</span>
        </div>
        <div style="display:flex;align-items:center;gap:4px;font-size:11px;font-weight:600;color:#64748B;">
          <span style="color:#0F172A;font-weight:800;">Karnataka</span>
          <span>›</span>
          <span style="color:#0F172A;font-weight:800;">Bengaluru</span>
          <span>›</span>
          <span style="color:#2563EB;font-weight:800;">Indiranagar</span>
        </div>
        <div style="display:flex;align-items:center;justify-content:space-between;padding-top:4px;border-top:1px solid #F1F5F9;">
          <div style="font-size:13px;font-weight:800;color:#0F172A;">100ft Road Prime Sector</div>
          <span style="font-size:10px;font-weight:800;color:#059669;background:#ECFDF5;padding:3px 7px;border-radius:6px;">⭐ 4.9 Rating</span>
        </div>
      </div>`;

    case 9: // Model J: Minimal Monoline Select
      return `<div style="width:100%;max-width:320px;background:#FFFFFF;border:1.5px solid #0F172A;border-radius:14px;padding:12px 14px;display:flex;align-items:center;justify-content:space-between;box-shadow:0 2px 0 #0F172A;">
        <div>
          <div style="font-size:9.5px;font-weight:800;color:#64748B;letter-spacing:0.08em;text-transform:uppercase;">MOVE-IN READINESS</div>
          <div style="font-size:13px;font-weight:800;color:#0F172A;margin-top:2px;">Immediate Move-in (Within 48h)</div>
        </div>
        <div style="display:flex;align-items:center;gap:6px;">
          <span style="font-size:10px;font-weight:800;color:#059669;background:#ECFDF5;padding:2px 6px;border-radius:4px;">READY</span>
          <span style="color:#0F172A;display:flex;align-items:center;">${SVG.chevronDown}</span>
        </div>
      </div>`;

    case 10: // Model K: Apple Porcelain Clean Dropdown (Light)
      return `<div style="width:100%;max-width:320px;background:#FFFFFF;border:1px solid #E2E8F0;border-radius:22px;padding:14px 18px;box-shadow:0 8px 24px rgba(15,23,42,0.04), inset 0 1px 0 #FFFFFF;display:flex;align-items:center;justify-content:space-between;">
        <div style="display:flex;align-items:center;gap:12px;min-width:0;">
          <div style="width:38px;height:38px;border-radius:12px;background:#ECFDF5;color:#059669;display:flex;align-items:center;justify-content:center;flex-shrink:0;">
            ${SVG.building}
          </div>
          <div style="min-width:0;">
            <div style="font-size:13.5px;font-weight:800;color:#0F172A;letter-spacing:-0.01em;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">Porcelain Unit Selector</div>
            <div style="font-size:11px;color:#059669;font-weight:700;margin-top:1px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">Indiranagar Duplex #402</div>
          </div>
        </div>
        <div style="width:26px;height:26px;border-radius:50%;background:#F8FAFC;border:1px solid #E2E8F0;display:flex;align-items:center;justify-content:center;color:#64748B;flex-shrink:0;">
          ${SVG.chevronDown}
        </div>
      </div>`;

    case 11: // Model L: CRED Acid Neon Titanium Dropdown (Dark)
    default:
      return `<div style="width:100%;max-width:320px;background:#09090B;border:1px solid rgba(204,255,0,0.45);border-radius:22px;padding:16px 20px;box-shadow:0 16px 36px rgba(0,0,0,0.8), 0 0 20px rgba(204,255,0,0.1);color:#FFFFFF;display:flex;align-items:center;justify-content:space-between;">
        <div>
          <div style="font-size:9.5px;font-weight:900;color:#CCFF00;letter-spacing:0.12em;text-transform:uppercase;">TITANIUM VAULT NODE</div>
          <div style="font-size:13.5px;font-weight:800;color:#FFFFFF;margin-top:2px;">Primary Escrow Vault (BLR-01)</div>
          <div style="font-size:10.5px;font-weight:600;color:rgba(255,255,255,0.6);margin-top:2px;font-family:monospace;">HASH #ESC-7704-B • VERIFIED</div>
        </div>
        <div style="width:30px;height:30px;border-radius:50%;background:rgba(204,255,0,0.15);border:1px solid #CCFF00;display:flex;align-items:center;justify-content:center;color:#CCFF00;box-shadow:0 0 10px rgba(204,255,0,0.3);flex-shrink:0;">
          ${SVG.chevronDown}
        </div>
      </div>`;
  }
}

module.exports = {
  renderCheckboxVariants,
  renderRadioVariants,
  renderToggleVariants,
  renderSliderVariants,
  renderDropdownVariants,
  renderMultiSelectVariants
};
