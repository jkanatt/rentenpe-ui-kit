/**
 * RentenPe UI Kit - Pinterest Charts, Feedback, Overlays & Rewards Archetypes
 * Direct implementation of top 50 Pinterest references:
 * - media_1791644905690.png Rounded Capsule Pill Bar Chart (Saving Analytics)
 * - media_1791645107119.png Splitstore Cash Reward Card (✨ Earn ₹700)
 * - media_1791645107119.png Super Deals & Live Offer Banners
 * - On-time rent payment streak 🔥
 * - Liquid gradient success alerts & floating amber offline pill
 * - Drag-handle payment bottom sheets
 * - Government e-Stamp legal verification certificate
 * - Spotlight ⌘K search bars
 */

function renderChartsAndFeedbackVariants(fam, icon, slug, variantIndex) {
  switch (variantIndex) {
    case 0: // Model A: Pinterest Rounded Capsule Pill Bar Chart (media_1791644905690.png)
      return `<div style="width:100%;max-width:340px;background:#ffffff;border:1px solid #E2E8F0;border-radius:26px;padding:22px;box-shadow:0 12px 30px rgba(15,23,42,0.06);display:flex;flex-direction:column;gap:16px;">
        <div style="display:flex;justify-content:space-between;align-items:center;">
          <div>
            <div style="font-size:11px;font-weight:800;color:#64748B;letter-spacing:0.04em;text-transform:uppercase;">EXPENSE ANALYTICS</div>
            <div style="font-size:15px;font-weight:900;color:#0F172A;margin-top:2px;">Monthly Rent Cashflow</div>
          </div>
          <span style="padding:4px 8px;background:#ECFDF5;color:#059669;border-radius:6px;font-size:10px;font-weight:800;">+112.00%</span>
        </div>

        <div style="font-size:12px;color:#64748B;">Average per month <strong style="color:#0F172A;font-weight:900;">₹28,500</strong></div>

        <!-- Textured Rounded Vertical Capsule Bars -->
        <div style="background:#F8FAFC;border:1px solid #F1F5F9;border-radius:20px;padding:18px 12px;display:flex;justify-content:space-between;align-items:flex-end;height:100px;">
          <div style="display:flex;flex-direction:column;align-items:center;gap:6px;">
            <div style="width:26px;height:52px;background:#E2E8F0;border-radius:99px;"></div>
            <span style="font-size:10px;color:#64748B;font-weight:700;">Jan</span>
          </div>
          <div style="display:flex;flex-direction:column;align-items:center;gap:6px;">
            <div style="width:26px;height:40px;background:#E2E8F0;border-radius:99px;"></div>
            <span style="font-size:10px;color:#64748B;font-weight:700;">Feb</span>
          </div>
          <div style="display:flex;flex-direction:column;align-items:center;gap:6px;">
            <div style="width:26px;height:65px;background:#E2E8F0;border-radius:99px;"></div>
            <span style="font-size:10px;color:#64748B;font-weight:700;">Mar</span>
          </div>
          <div style="display:flex;flex-direction:column;align-items:center;gap:6px;">
            <div style="width:26px;height:48px;background:#E2E8F0;border-radius:99px;"></div>
            <span style="font-size:10px;color:#64748B;font-weight:700;">Apr</span>
          </div>
          <div style="display:flex;flex-direction:column;align-items:center;gap:6px;">
            <div style="width:26px;height:88px;background:#0F172A;border-radius:99px;box-shadow:0 6px 14px rgba(15,23,42,0.3);"></div>
            <span style="font-size:10px;color:#0F172A;font-weight:900;">May</span>
          </div>
          <div style="display:flex;flex-direction:column;align-items:center;gap:6px;">
            <div style="width:26px;height:60px;background:#E2E8F0;border-radius:99px;"></div>
            <span style="font-size:10px;color:#64748B;font-weight:700;">Jun</span>
          </div>
        </div>
      </div>`;

    case 1: // Model B: Multi-Segment Expense Donut Ring with Center Balance
      return `<div style="width:100%;max-width:340px;background:#ffffff;border:1px solid #E2E8F0;border-radius:24px;padding:22px;box-shadow:0 8px 24px rgba(15,23,42,0.05);display:flex;flex-direction:column;align-items:center;gap:16px;">
        <div style="align-self:flex-start;font-size:13px;font-weight:800;color:#0F172A;">Monthly Expense Breakdown</div>

        <!-- SVG Donut Chart with Center Text -->
        <div style="position:relative;width:130px;height:130px;display:flex;align-items:center;justify-content:center;">
          <svg width="130" height="130" viewBox="0 0 130 130">
            <circle cx="65" cy="65" r="50" stroke="#E2E8F0" stroke-width="14" fill="none"/>
            <circle cx="65" cy="65" r="50" stroke="#2563EB" stroke-width="14" fill="none" stroke-dasharray="314" stroke-dashoffset="110" stroke-linecap="round" transform="rotate(-90 65 65)"/>
            <circle cx="65" cy="65" r="50" stroke="#10B981" stroke-width="14" fill="none" stroke-dasharray="314" stroke-dashoffset="240" stroke-linecap="round" transform="rotate(50 65 65)"/>
          </svg>
          <div style="position:absolute;text-align:center;">
            <div style="font-size:16px;font-weight:900;color:#0F172A;">₹42.5k</div>
            <div style="font-size:9px;color:#64748B;font-weight:700;">TOTAL</div>
          </div>
        </div>

        <div style="display:flex;gap:12px;font-size:11px;">
          <div style="display:flex;align-items:center;gap:4px;"><span style="width:8px;height:8px;border-radius:50%;background:#2563EB;"></span><span style="color:#64748B;">Rent (68%)</span></div>
          <div style="display:flex;align-items:center;gap:4px;"><span style="width:8px;height:8px;border-radius:50%;background:#10B981;"></span><span style="color:#64748B;">Utilities (22%)</span></div>
          <div style="display:flex;align-items:center;gap:4px;"><span style="width:8px;height:8px;border-radius:50%;background:#E2E8F0;"></span><span style="color:#64748B;">Maint (10%)</span></div>
        </div>
      </div>`;

    case 2: // Model C: Splitstore Cash Reward Scratch Card (media_1791645107119.png)
      return `<div style="width:100%;max-width:340px;background:linear-gradient(135deg, #F0FDF4 0%, #DCFCE7 100%);border:1.5px solid #86EFAC;border-radius:24px;padding:22px;box-shadow:0 12px 28px rgba(16,185,129,0.15);display:flex;flex-direction:column;gap:14px;position:relative;">
        <div style="display:flex;justify-content:space-between;align-items:center;">
          <span style="padding:4px 10px;background:#22C55E;color:#fff;border-radius:99px;font-size:11px;font-weight:900;letter-spacing:0.04em;">
            ✨ Earn ₹700
          </span>
          <span style="font-size:11px;font-weight:700;color:#15803D;">NEW REWARD</span>
        </div>

        <div style="text-align:center;padding:10px 0;">
          <div style="font-size:13px;font-weight:800;color:#166534;">Pay October Rent On-Time</div>
          <div style="font-size:24px;font-weight:900;color:#14532D;margin-top:2px;">Instant ₹700 Cash</div>
          <div style="font-size:11px;color:#15803D;margin-top:4px;">Credited directly to UPI bank account</div>
        </div>

        <button style="width:100%;padding:12px;background:#15803D;color:#fff;border:none;border-radius:12px;font-size:12px;font-weight:800;cursor:pointer;box-shadow:0 4px 12px rgba(21,128,61,0.3);">
          Claim Scratch Card 🎁
        </button>
      </div>`;

    case 3: // Model D: On-Time Rent Payment Streak Tracker 🔥
      return `<div style="width:100%;max-width:340px;background:#09090B;border:1px solid #27272A;border-radius:24px;padding:22px;color:#fff;box-shadow:0 16px 36px rgba(0,0,0,0.5);display:flex;flex-direction:column;gap:14px;">
        <div style="display:flex;align-items:center;justify-content:space-between;">
          <div style="display:flex;align-items:center;gap:8px;">
            <span style="font-size:22px;">🔥</span>
            <div>
              <div style="font-size:14px;font-weight:900;color:#F4F4F5;">14 Months Streak</div>
              <div style="font-size:10px;color:#A1A1AA;">Zero delayed rent payments</div>
            </div>
          </div>
          <span style="padding:3px 8px;background:rgba(245,158,11,0.2);color:#F59E0B;border-radius:6px;font-size:10px;font-weight:800;">TOP 1%</span>
        </div>

        <div style="display:flex;gap:4px;justify-content:space-between;">
          <span style="width:34px;height:34px;border-radius:10px;background:#27272A;color:#10B981;font-weight:800;display:flex;align-items:center;justify-content:center;font-size:11px;">M✓</span>
          <span style="width:34px;height:34px;border-radius:10px;background:#27272A;color:#10B981;font-weight:800;display:flex;align-items:center;justify-content:center;font-size:11px;">J✓</span>
          <span style="width:34px;height:34px;border-radius:10px;background:#27272A;color:#10B981;font-weight:800;display:flex;align-items:center;justify-content:center;font-size:11px;">J✓</span>
          <span style="width:34px;height:34px;border-radius:10px;background:#27272A;color:#10B981;font-weight:800;display:flex;align-items:center;justify-content:center;font-size:11px;">A✓</span>
          <span style="width:34px;height:34px;border-radius:10px;background:#27272A;color:#10B981;font-weight:800;display:flex;align-items:center;justify-content:center;font-size:11px;">S✓</span>
          <span style="width:34px;height:34px;border-radius:10px;background:#F59E0B;color:#000;font-weight:900;display:flex;align-items:center;justify-content:center;font-size:11px;box-shadow:0 0 10px #F59E0B;">O●</span>
        </div>
      </div>`;

    case 4: // Model E: Liquid Gradient Success Notification Banner
      return `<div style="width:100%;max-width:340px;background:linear-gradient(135deg, #059669 0%, #047857 100%);color:#fff;border-radius:20px;padding:18px 20px;box-shadow:0 12px 28px rgba(5,150,105,0.3);display:flex;align-items:center;justify-content:space-between;gap:12px;">
        <div style="display:flex;align-items:center;gap:12px;">
          <div style="width:36px;height:36px;border-radius:50%;background:#FFFFFF;color:#059669;display:flex;align-items:center;justify-content:center;font-size:18px;font-weight:900;box-shadow:0 4px 10px rgba(0,0,0,0.15);">
            ✓
          </div>
          <div>
            <div style="font-size:13px;font-weight:900;line-height:1.2;">Rent Cleared Instantly</div>
            <div style="font-size:11px;color:#A7F3D0;margin-top:2px;">₹28,500 transferred via UPI Escrow</div>
          </div>
        </div>
        <button style="padding:6px 10px;background:rgba(255,255,255,0.2);border:none;border-radius:8px;color:#fff;font-size:10px;font-weight:800;cursor:pointer;">
          Receipt
        </button>
      </div>`;

    case 5: // Model F: Amber Offline / Sync Pending Floating Pill
      return `<div style="display:flex;align-items:center;justify-content:center;">
        <div style="background:#FFFBEB;border:1.5px solid #FDE68A;border-radius:99px;padding:8px 18px;display:inline-flex;align-items:center;gap:10px;box-shadow:0 8px 20px rgba(245,158,11,0.12);">
          <span style="font-size:14px;">☁️</span>
          <span style="font-size:12px;font-weight:800;color:#92400E;">Offline Mode — Changes Saved Locally</span>
          <button style="padding:3px 8px;background:#F59E0B;color:#fff;border:none;border-radius:99px;font-size:10px;font-weight:800;cursor:pointer;">
            Retry
          </button>
        </div>
      </div>`;

    case 6: // Model G: Payment Method Drag-Handle Bottom Sheet
      return `<div style="width:100%;max-width:340px;background:#ffffff;border:1px solid #E2E8F0;border-radius:26px;padding:16px 20px 22px 20px;box-shadow:0 20px 40px rgba(15,23,42,0.1);display:flex;flex-direction:column;gap:14px;">
        <!-- Drag Handle Pill -->
        <div style="align-self:center;width:40px;height:5px;border-radius:99px;background:#CBD5E1;"></div>
        <div style="font-size:14px;font-weight:800;color:#0F172A;">Select Payment Method</div>

        <div style="display:flex;flex-direction:column;gap:8px;">
          <div style="padding:12px;border:2px solid #2563EB;background:#EFF6FF;border-radius:14px;display:flex;justify-content:space-between;align-items:center;cursor:pointer;">
            <div style="display:flex;align-items:center;gap:10px;">
              <span style="font-size:18px;">⚡</span>
              <div><div style="font-size:12px;font-weight:800;color:#0F172A;">UPI Fast Pay (GPay / PhonePe)</div><div style="font-size:10px;color:#2563EB;">Zero fee • Instant clearing</div></div>
            </div>
            <span style="color:#2563EB;font-size:16px;">●</span>
          </div>

          <div style="padding:12px;border:1px solid #E2E8F0;background:#FAFAFA;border-radius:14px;display:flex;justify-content:space-between;align-items:center;cursor:pointer;">
            <div style="display:flex;align-items:center;gap:10px;">
              <span style="font-size:18px;">💳</span>
              <div><div style="font-size:12px;font-weight:700;color:#0F172A;">Credit / Debit Card</div><div style="font-size:10px;color:#64748B;">Earn 1.5% air miles</div></div>
            </div>
            <span style="color:#CBD5E1;font-size:16px;">○</span>
          </div>
        </div>

        <button style="width:100%;padding:12px;background:#0F172A;color:#fff;border:none;border-radius:12px;font-size:12px;font-weight:800;cursor:pointer;">
          Pay ₹28,500 Now →
        </button>
      </div>`;

    case 7: // Model H: Destructive Warning Dialog with Dual CTA
      return `<div style="width:100%;max-width:340px;background:#ffffff;border:1px solid #FECACA;border-radius:24px;padding:22px;box-shadow:0 16px 36px rgba(239,68,68,0.12);display:flex;flex-direction:column;gap:14px;">
        <div style="width:40px;height:40px;border-radius:12px;background:#FEF2F2;color:#DC2626;display:flex;align-items:center;justify-content:center;font-size:20px;">
          ⚠️
        </div>
        <div>
          <div style="font-size:15px;font-weight:900;color:#0F172A;">Terminate Lease Agreement?</div>
          <div style="font-size:11px;color:#64748B;margin-top:4px;line-height:1.4;">Early termination before 6 months lock-in period incurs a 1-month deposit deduction penalty.</div>
        </div>
        <div style="display:flex;gap:8px;">
          <button style="flex:1;padding:11px;background:#F1F5F9;color:#475569;border:none;border-radius:10px;font-size:12px;font-weight:700;cursor:pointer;">Cancel</button>
          <button style="flex:1;padding:11px;background:#DC2626;color:#fff;border:none;border-radius:10px;font-size:12px;font-weight:800;cursor:pointer;">Terminate Lease</button>
        </div>
      </div>`;

    case 8: // Model I: Government e-Stamp Legal Lease Verification Certificate
      return `<div style="width:100%;max-width:340px;background:#fff;border:1.5px solid #0F172A;border-radius:22px;padding:20px;box-shadow:0 10px 25px rgba(0,0,0,0.06);display:flex;flex-direction:column;gap:12px;">
        <div style="display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid #E2E8F0;padding-bottom:10px;">
          <span style="font-size:11px;font-weight:900;color:#0F172A;letter-spacing:0.04em;">GOVERNMENT OF KARNATAKA</span>
          <span style="font-size:10px;font-weight:800;color:#2563EB;">e-STAMP CERTIFIED</span>
        </div>
        <div style="display:flex;flex-direction:column;gap:4px;font-size:11px;">
          <div style="display:flex;justify-content:space-between;"><span style="color:#64748B;">Certificate No:</span><strong style="font-family:monospace;color:#0F172A;">IN-KA8921894</strong></div>
          <div style="display:flex;justify-content:space-between;"><span style="color:#64748B;">Stamp Duty Paid:</span><strong style="color:#0F172A;">₹500.00</strong></div>
          <div style="display:flex;justify-content:space-between;"><span style="color:#64748B;">Verification Hash:</span><strong style="font-family:monospace;color:#10B981;">0x8F9...2E4A</strong></div>
        </div>
        <div style="padding:6px;background:#ECFDF5;border-radius:8px;text-align:center;font-size:10px;font-weight:800;color:#059669;">
          🔒 Digitally Verified Legal Tenancy Document
        </div>
      </div>`;

    case 9: // Model J: Spotlight ⌘K Search Input (Splitstore & Pinterest Inspired)
      return `<div style="width:100%;max-width:340px;background:#ffffff;border:1px solid #E2E8F0;border-radius:20px;padding:12px 16px;box-shadow:0 8px 24px rgba(15,23,42,0.06);display:flex;align-items:center;gap:10px;">
        <span style="font-size:16px;color:#64748B;">🔍</span>
        <input type="text" placeholder="Search properties, receipts, leases..." readonly value="Search Indiranagar properties..." style="flex:1;border:none;outline:none;font-size:12px;color:#0F172A;font-weight:600;background:transparent;">
        <span style="padding:3px 7px;background:#F1F5F9;border:1px solid #E2E8F0;border-radius:6px;font-family:monospace;font-size:10px;font-weight:800;color:#64748B;">⌘K</span>
      </div>`;

    case 10: // Model K: Apple Concentric Activity Rings & Metric Card (Light Theme)
      return `<div style="width:100%;max-width:340px;background:#FFFFFF;border:1px solid #E2E8F0;border-radius:26px;padding:22px;box-shadow:0 12px 32px rgba(15,23,42,0.04);display:flex;flex-direction:column;gap:16px;">
        <div style="display:flex;align-items:center;justify-content:space-between;">
          <div>
            <div style="font-size:13px;font-weight:800;color:#0F172A;">Tenant Activity Rings</div>
            <div style="font-size:10px;color:#64748B;">Cycle Ending Oct 31, 2026</div>
          </div>
          <span style="padding:4px 8px;background:#EFF6FF;color:#2563EB;border-radius:6px;font-size:10px;font-weight:800;">APPLE HEALTH SYNC</span>
        </div>

        <div style="display:flex;align-items:center;gap:18px;background:#F8FAFC;border-radius:20px;padding:18px;">
          <div style="position:relative;width:76px;height:76px;flex-shrink:0;">
            <svg width="76" height="76" viewBox="0 0 76 76">
              <circle cx="38" cy="38" r="30" stroke="#E2E8F0" stroke-width="5" fill="none"/>
              <circle cx="38" cy="38" r="30" stroke="#10B981" stroke-width="5" fill="none" stroke-dasharray="188.5" stroke-dashoffset="28" stroke-linecap="round" transform="rotate(-90 38 38)"/>
              <circle cx="38" cy="38" r="22" stroke="#E2E8F0" stroke-width="5" fill="none"/>
              <circle cx="38" cy="38" r="22" stroke="#3B82F6" stroke-width="5" fill="none" stroke-dasharray="138.2" stroke-dashoffset="35" stroke-linecap="round" transform="rotate(-90 38 38)"/>
              <circle cx="38" cy="38" r="14" stroke="#E2E8F0" stroke-width="4.5" fill="none"/>
              <circle cx="38" cy="38" r="14" stroke="#F43F5E" stroke-width="4.5" fill="none" stroke-dasharray="88" stroke-dashoffset="18" stroke-linecap="round" transform="rotate(-90 38 38)"/>
            </svg>
          </div>
          <div style="display:flex;flex-direction:column;gap:6px;font-size:11px;flex:1;">
            <div style="display:flex;align-items:center;justify-content:space-between;"><span style="color:#059669;font-weight:700;">● On-Time Rent</span><strong>88%</strong></div>
            <div style="display:flex;align-items:center;justify-content:space-between;"><span style="color:#2563EB;font-weight:700;">● Deposit Shield</span><strong>100%</strong></div>
            <div style="display:flex;align-items:center;justify-content:space-between;"><span style="color:#E11D48;font-weight:700;">● Bureau Score</span><strong>+42 pts</strong></div>
          </div>
        </div>

        <div style="display:flex;align-items:center;justify-content:space-between;font-size:11px;padding:4px 2px;">
          <span style="color:#64748B;">All 3 goals achieved this month</span>
          <span style="font-weight:800;color:#2563EB;cursor:pointer;">View Graph ↗</span>
        </div>
      </div>`;

    case 11: // Model L: CRED Acid Volt Neon Rent Streak & Rewards Wheel (Dark Theme)
    default:
      return `<div style="width:100%;max-width:340px;background:#09090B;border:1px solid rgba(204,255,0,0.3);border-radius:26px;padding:22px;box-shadow:0 24px 48px rgba(0,0,0,0.7),inset 0 1px 0 rgba(204,255,0,0.2);color:#FFFFFF;position:relative;overflow:hidden;display:flex;flex-direction:column;gap:16px;">
        <div style="display:flex;align-items:center;justify-content:space-between;">
          <div style="display:flex;align-items:center;gap:6px;">
            <span style="font-size:16px;">🔥</span>
            <span style="font-size:12px;font-weight:900;color:#CCFF00;letter-spacing:0.06em;">18-MONTH STREAK</span>
          </div>
          <span style="padding:3px 8px;background:rgba(204,255,0,0.12);color:#CCFF00;border:1px solid rgba(204,255,0,0.3);border-radius:6px;font-size:10px;font-weight:800;">TOP 1% CLUB</span>
        </div>

        <!-- Glowing Neon Telemetry Progress Bar -->
        <div style="background:#18181B;border-radius:12px;padding:16px;border:1px solid #27272A;">
          <div style="display:flex;justify-content:space-between;font-size:11px;font-weight:800;margin-bottom:8px;">
            <span style="color:#FFFFFF;">Milestone Progress</span>
            <span style="color:#CCFF00;">₹45,200 CRED Coins</span>
          </div>
          <div style="width:100%;height:8px;background:#27272A;border-radius:99px;overflow:hidden;">
            <div style="width:85%;height:100%;background:#CCFF00;border-radius:99px;box-shadow:0 0 14px #CCFF00;"></div>
          </div>
          <div style="display:flex;justify-content:space-between;font-size:10px;color:#71717A;margin-top:6px;">
            <span>Current: 18 Months</span>
            <span>Target: 24 Months Jackpot</span>
          </div>
        </div>

        <button style="width:100%;padding:12px;background:#CCFF00;color:#09090B;border:none;border-radius:14px;font-size:12px;font-weight:900;letter-spacing:0.04em;display:flex;align-items:center;justify-content:center;gap:8px;box-shadow:0 0 20px rgba(204,255,0,0.45);cursor:pointer;">
          <span>⚡</span> Spin to Claim 1,500 Coins
        </button>
      </div>`;
  }
}

module.exports = {
  renderChartsAndFeedbackVariants
};
