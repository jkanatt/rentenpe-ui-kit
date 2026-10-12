/**
 * RentenPe UI Kit - Pinterest Timelines, Steppers, Bottom Bars & Navigation Archetypes
 * Direct implementation of top 50 Pinterest references:
 * - pin_1.jpg Continuous Rail Vertical Stepper with Timestamp Badges
 * - media_1791644905690.png Floating Dark Capsule Bottom Dock with White Active Circle
 * - media_1791644893142.png Dynamic Island Live Rent Clearing Notch
 * - media_1791645107119.png Splitstore 5-Item Navigation Bar with 'New' Pill
 * - Swipeable Action Ledger Rows with revealed actions
 * - Segmented Pill Tab Switchers
 */

function renderTimelineVariants(fam, icon, slug, variantIndex) {
  switch (variantIndex) {
    case 0: // Model A: Pinterest Continuous Rail Vertical Stepper (pin_1.jpg)
      return `<div style="width:100%;max-width:340px;background:#ffffff;border:1px solid #E2E8F0;border-radius:26px;padding:22px;box-shadow:0 12px 30px rgba(15,23,42,0.06);display:flex;flex-direction:column;gap:18px;">
        <div style="display:flex;justify-content:space-between;align-items:center;">
          <div>
            <div style="font-size:11px;font-weight:800;color:#64748B;letter-spacing:0.04em;text-transform:uppercase;">LEASE TIMELINE</div>
            <div style="font-size:15px;font-weight:900;color:#0F172A;margin-top:2px;">Indiranagar 3BHK Handover</div>
          </div>
          <span style="padding:4px 8px;background:#ECFDF5;color:#059669;border-radius:6px;font-size:10px;font-weight:800;">IN PROGRESS</span>
        </div>

        <!-- Continuous Vertical Rail -->
        <div style="display:flex;flex-direction:column;position:relative;padding-left:36px;">
          <!-- Rail Background Line -->
          <div style="position:absolute;left:13px;top:10px;bottom:10px;width:2px;background:#E2E8F0;"></div>

          <!-- Node 1: Completed -->
          <div style="position:relative;margin-bottom:20px;">
            <div style="position:absolute;left:-36px;top:2px;width:24px;height:24px;border-radius:50%;background:#10B981;color:#fff;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:900;box-shadow:0 0 0 3px #DCFCE7;">✓</div>
            <div style="display:flex;justify-content:space-between;align-items:baseline;">
              <span style="font-size:13px;font-weight:800;color:#0F172A;">Digital Lease Signed</span>
              <span style="font-size:10px;color:#64748B;font-weight:600;">09:30 AM</span>
            </div>
            <div style="font-size:11px;color:#64748B;margin-top:2px;">e-Stamped with Aadhaar OTP authentication</div>
          </div>

          <!-- Node 2: Active / Pulsing -->
          <div style="position:relative;margin-bottom:20px;">
            <div style="position:absolute;left:-36px;top:2px;width:24px;height:24px;border-radius:50%;background:#2563EB;color:#fff;display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:900;box-shadow:0 0 0 4px rgba(37,99,235,0.25);">●</div>
            <div style="display:flex;justify-content:space-between;align-items:baseline;">
              <span style="font-size:13px;font-weight:800;color:#2563EB;">Security Deposit Escrow</span>
              <span style="font-size:10px;color:#2563EB;font-weight:700;">LIVE</span>
            </div>
            <div style="font-size:11px;color:#475569;margin-top:2px;">₹1,20,000 awaiting bank clearance confirmation</div>
            <div style="margin-top:6px;padding:6px 10px;background:#EFF6FF;border-radius:8px;font-size:11px;font-weight:700;color:#1E40AF;display:inline-block;">
              Awaiting Landlord Signature
            </div>
          </div>

          <!-- Node 3: Pending -->
          <div style="position:relative;">
            <div style="position:absolute;left:-36px;top:2px;width:24px;height:24px;border-radius:50%;background:#F1F5F9;border:2px solid #CBD5E1;color:#64748B;display:flex;align-items:center;justify-content:center;font-size:10px;">3</div>
            <div style="display:flex;justify-content:space-between;align-items:baseline;">
              <span style="font-size:13px;font-weight:700;color:#64748B;">Digital Key Handover</span>
              <span style="font-size:10px;color:#94A3B8;">Pending</span>
            </div>
            <div style="font-size:11px;color:#94A3B8;margin-top:2px;">Smart lock passcode scheduled for Oct 15</div>
          </div>
        </div>
      </div>`;

    case 1: // Model B: Rental Onboarding 4-Step Horizontal Stepper Track
      return `<div style="width:100%;max-width:340px;background:#ffffff;border:1px solid #E2E8F0;border-radius:24px;padding:22px;box-shadow:0 8px 24px rgba(15,23,42,0.05);display:flex;flex-direction:column;gap:16px;">
        <div style="display:flex;justify-content:space-between;align-items:center;">
          <span style="font-size:13px;font-weight:800;color:#0F172A;">Tenant Onboarding</span>
          <span style="font-size:11px;font-weight:700;color:#2563EB;">Step 2 of 4</span>
        </div>

        <!-- 4 Step Progress Track -->
        <div style="display:grid;grid-template-columns:1fr 1fr 1fr 1fr;gap:6px;align-items:center;">
          <div style="height:6px;border-radius:99px;background:#10B981;"></div>
          <div style="height:6px;border-radius:99px;background:#2563EB;"></div>
          <div style="height:6px;border-radius:99px;background:#E2E8F0;"></div>
          <div style="height:6px;border-radius:99px;background:#E2E8F0;"></div>
        </div>

        <div style="display:flex;justify-content:space-between;font-size:10px;font-weight:700;">
          <span style="color:#10B981;">1. KYC ✓</span>
          <span style="color:#2563EB;">2. E-Sign ●</span>
          <span style="color:#94A3B8;">3. Deposit</span>
          <span style="color:#94A3B8;">4. Key</span>
        </div>

        <div style="padding:14px;background:#F8FAFC;border:1px solid #E2E8F0;border-radius:14px;display:flex;flex-direction:column;gap:6px;">
          <div style="font-size:12px;font-weight:800;color:#0F172A;">Current Task: Aadhaar E-Sign</div>
          <div style="font-size:11px;color:#64748B;">Digital signature required for 11-month lease agreement.</div>
        </div>

        <button style="width:100%;padding:12px;background:#0F172A;color:#fff;border:none;border-radius:12px;font-size:12px;font-weight:700;cursor:pointer;">
          Proceed to Sign →
        </button>
      </div>`;

    case 2: // Model C: Pinterest Floating Dark Capsule Dock with Active White Circle (media_1791644905690.png)
      return `<div style="display:flex;align-items:center;justify-content:center;padding:12px 0;">
        <div style="background:#0F172A;border-radius:99px;padding:6px 12px;display:inline-flex;align-items:center;gap:18px;box-shadow:0 16px 36px rgba(15,23,42,0.45);border:1px solid rgba(255,255,255,0.1);">
          <!-- Active White Circle Home Icon -->
          <div style="width:40px;height:40px;border-radius:50%;background:#FFFFFF;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 12px rgba(0,0,0,0.2);cursor:pointer;">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0F172A" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
              <polyline points="9 22 9 12 15 12 15 22"/>
            </svg>
          </div>
          <!-- Inactive Icon: Stats -->
          <div style="color:#94A3B8;cursor:pointer;padding:6px;display:flex;align-items:center;justify-content:center;">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
              <line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/>
            </svg>
          </div>
          <!-- Inactive Icon: Documents -->
          <div style="color:#94A3B8;cursor:pointer;padding:6px;display:flex;align-items:center;justify-content:center;">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>
            </svg>
          </div>
          <!-- Inactive Icon: Profile -->
          <div style="color:#94A3B8;cursor:pointer;padding:6px;display:flex;align-items:center;justify-content:center;">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
            </svg>
          </div>
        </div>
      </div>`;

    case 3: // Model D: Dynamic Island Live Rent Clearing Notch (media_1791644893142.png)
      return `<div style="display:flex;align-items:center;justify-content:center;padding:10px 0;">
        <div style="background:#000000;color:#fff;border-radius:99px;padding:8px 18px;display:inline-flex;align-items:center;gap:14px;box-shadow:0 14px 30px rgba(0,0,0,0.5);border:1px solid #27272A;cursor:pointer;">
          <div style="display:flex;align-items:center;gap:8px;">
            <div style="width:24px;height:24px;border-radius:50%;background:#2563EB;display:flex;align-items:center;justify-content:center;font-size:12px;">💸</div>
            <div>
              <div style="font-size:12px;font-weight:800;color:#FFFFFF;line-height:1.1;">Rent Clearing</div>
              <div style="font-size:9px;color:#94A3B8;">Indiranagar 3BHK</div>
            </div>
          </div>
          <div style="height:18px;width:1px;background:#27272A;"></div>
          <div style="display:flex;align-items:center;gap:6px;">
            <span style="font-size:12px;font-weight:900;color:#34D399;">₹28,500</span>
            <span style="width:6px;height:6px;border-radius:50%;background:#34D399;box-shadow:0 0 6px #34D399;"></span>
          </div>
        </div>
      </div>`;

    case 4: // Model E: Splitstore 5-Item Navigation Bar with 'New' Pill (media_1791645107119.png)
      return `<div style="width:100%;max-width:340px;background:#ffffff;border:1px solid #E2E8F0;border-radius:24px;padding:12px 14px;box-shadow:0 8px 24px rgba(15,23,42,0.06);display:flex;justify-content:space-between;align-items:center;">
        <!-- Item 1: UPI (Active) -->
        <div style="display:flex;flex-direction:column;align-items:center;gap:4px;cursor:pointer;">
          <div style="width:24px;height:24px;border-radius:6px;background:#EFF6FF;color:#2563EB;display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:900;">❖</div>
          <span style="font-size:11px;font-weight:800;color:#2563EB;">UPI</span>
        </div>
        <!-- Item 2: Split Store (with pink 'New' pill badge) -->
        <div style="display:flex;flex-direction:column;align-items:center;gap:2px;cursor:pointer;position:relative;">
          <span style="padding:1px 5px;background:#FDF2F8;color:#DB2777;border:1px solid #FBCFE8;border-radius:99px;font-size:9px;font-weight:800;margin-bottom:2px;">New</span>
          <span style="font-size:11px;font-weight:700;color:#64748B;">Store</span>
        </div>
        <!-- Item 3: Card -->
        <div style="display:flex;flex-direction:column;align-items:center;gap:4px;cursor:pointer;">
          <span style="font-size:16px;color:#64748B;">💳</span>
          <span style="font-size:11px;font-weight:600;color:#64748B;">Card</span>
        </div>
        <!-- Item 4: Escrow -->
        <div style="display:flex;flex-direction:column;align-items:center;gap:4px;cursor:pointer;">
          <span style="font-size:16px;color:#64748B;">🔒</span>
          <span style="font-size:11px;font-weight:600;color:#64748B;">Vault</span>
        </div>
        <!-- Item 5: History -->
        <div style="display:flex;flex-direction:column;align-items:center;gap:4px;cursor:pointer;">
          <span style="font-size:16px;color:#64748B;">📑</span>
          <span style="font-size:11px;font-weight:600;color:#64748B;">History</span>
        </div>
      </div>`;

    case 5: // Model F: Curved Center Notch Floating Dock with Center Action FAB
      return `<div style="width:100%;max-width:340px;position:relative;padding-top:20px;">
        <!-- Center Floating Action Button (FAB) -->
        <div style="position:absolute;top:0;left:50%;transform:translateX(-50%);width:50px;height:50px;border-radius:50%;background:#0F172A;color:#fff;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;box-shadow:0 8px 20px rgba(15,23,42,0.35);border:3px solid #fff;cursor:pointer;z-index:2;">
          +
        </div>
        <!-- Bottom Nav Bar with Notch Center -->
        <div style="background:#ffffff;border:1px solid #E2E8F0;border-radius:22px;padding:14px 20px;display:flex;justify-content:space-between;align-items:center;box-shadow:0 8px 24px rgba(15,23,42,0.06);">
          <div style="display:flex;gap:24px;">
            <span style="font-size:12px;font-weight:800;color:#0F172A;cursor:pointer;">Home</span>
            <span style="font-size:12px;font-weight:600;color:#64748B;cursor:pointer;">Leases</span>
          </div>
          <div style="display:flex;gap:24px;">
            <span style="font-size:12px;font-weight:600;color:#64748B;cursor:pointer;">Ledger</span>
            <span style="font-size:12px;font-weight:600;color:#64748B;cursor:pointer;">Profile</span>
          </div>
        </div>
      </div>`;

    case 6: // Model G: Swipeable Action Ledger Row with Revealed Danger/Archive
      return `<div style="width:100%;max-width:340px;display:flex;flex-direction:column;gap:8px;">
        <div style="position:relative;border-radius:18px;overflow:hidden;background:#EF4444;box-shadow:0 4px 14px rgba(0,0,0,0.05);">
          <!-- Background Revealed Action Buttons -->
          <div style="position:absolute;top:0;bottom:0;right:0;display:flex;align-items:stretch;">
            <button style="padding:0 16px;background:#3B82F6;color:#fff;border:none;font-size:11px;font-weight:800;cursor:pointer;">Archive</button>
            <button style="padding:0 16px;background:#DC2626;color:#fff;border:none;font-size:11px;font-weight:800;cursor:pointer;">Delete</button>
          </div>
          <!-- Foreground Slid Row -->
          <div style="position:relative;background:#fff;padding:16px 18px;display:flex;justify-content:space-between;align-items:center;transform:translateX(-60px);box-shadow:2px 0 8px rgba(0,0,0,0.06);transition:transform 0.2s;">
            <div style="display:flex;align-items:center;gap:12px;">
              <div style="width:36px;height:36px;border-radius:10px;background:#F1F5F9;display:flex;align-items:center;justify-content:center;font-size:16px;">🏢</div>
              <div>
                <div style="font-size:13px;font-weight:800;color:#0F172A;">Maintenance Fee</div>
                <div style="font-size:11px;color:#64748B;">Society Dues • Due in 5d</div>
              </div>
            </div>
            <span style="font-size:13px;font-weight:800;color:#0F172A;">₹3,400</span>
          </div>
        </div>
        <div style="font-size:10px;color:#64748B;text-align:right;">← Swipe left to reveal quick actions</div>
      </div>`;

    case 7: // Model H: Segmented Pill Tab Switcher with Sliding Active Thumb
      return `<div style="width:100%;max-width:340px;background:#ffffff;border:1px solid #E2E8F0;border-radius:20px;padding:16px;display:flex;flex-direction:column;gap:12px;box-shadow:0 6px 20px rgba(15,23,42,0.04);">
        <div style="background:#F1F5F9;border-radius:14px;padding:4px;display:flex;gap:4px;">
          <button style="flex:1;padding:8px;background:#ffffff;color:#0F172A;border:none;border-radius:10px;font-size:12px;font-weight:800;box-shadow:0 2px 6px rgba(0,0,0,0.06);cursor:pointer;">
            All (14)
          </button>
          <button style="flex:1;padding:8px;background:transparent;color:#64748B;border:none;border-radius:10px;font-size:12px;font-weight:600;cursor:pointer;">
            Pending (3)
          </button>
          <button style="flex:1;padding:8px;background:transparent;color:#64748B;border:none;border-radius:10px;font-size:12px;font-weight:600;cursor:pointer;">
            Settled (11)
          </button>
        </div>
        <div style="display:flex;justify-content:space-between;align-items:center;padding:8px 4px;font-size:11px;color:#64748B;">
          <span>Showing 3 active pending dues</span>
          <span style="font-weight:700;color:#2563EB;cursor:pointer;">Filter ⚙</span>
        </div>
      </div>`;

    case 8: // Model I: Roommate Expense Split Timeline with Settle Up Action
      return `<div style="width:100%;max-width:340px;background:#ffffff;border:1px solid #E2E8F0;border-radius:24px;padding:20px;display:flex;flex-direction:column;gap:14px;box-shadow:0 8px 24px rgba(15,23,42,0.05);">
        <div style="display:flex;justify-content:space-between;align-items:center;">
          <div>
            <div style="font-size:13px;font-weight:800;color:#0F172A;">Monthly Wifi & Power Split</div>
            <div style="font-size:11px;color:#64748B;">ACT Fibernet 1Gbps</div>
          </div>
          <span style="font-size:14px;font-weight:900;color:#0F172A;">₹3,499</span>
        </div>

        <!-- Roommate Avatar Split Stack -->
        <div style="display:flex;align-items:center;justify-content:space-between;padding:10px;background:#F8FAFC;border-radius:12px;">
          <div style="display:flex;padding-left:8px;">
            <div style="width:30px;height:30px;border-radius:50%;background:#2563EB;color:#fff;border:2px solid #fff;display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:800;margin-left:-8px;">JK</div>
            <div style="width:30px;height:30px;border-radius:50%;background:#10B981;color:#fff;border:2px solid #fff;display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:800;margin-left:-8px;">PS</div>
            <div style="width:30px;height:30px;border-radius:50%;background:#F59E0B;color:#fff;border:2px solid #fff;display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:800;margin-left:-8px;">RK</div>
          </div>
          <div style="text-align:right;">
            <div style="font-size:11px;font-weight:800;color:#0F172A;">Your Share: ₹1,166</div>
            <div style="font-size:10px;color:#10B981;font-weight:700;">2 Paid • You Pending</div>
          </div>
        </div>

        <button style="width:100%;padding:10px;background:#0F172A;color:#fff;border:none;border-radius:10px;font-size:11px;font-weight:800;cursor:pointer;">
          Settle Share via UPI (₹1,166) →
        </button>
      </div>`;

    case 9: // Model J: Breadcrumb Pill Trail with Chevron Separators
      return `<div style="width:100%;max-width:340px;background:#ffffff;border:1px solid #E2E8F0;border-radius:18px;padding:16px;box-shadow:0 6px 18px rgba(15,23,42,0.04);">
        <div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap;font-size:11px;">
          <span style="padding:4px 10px;background:#F1F5F9;border-radius:8px;font-weight:700;color:#475569;cursor:pointer;">Properties</span>
          <span style="color:#94A3B8;">›</span>
          <span style="padding:4px 10px;background:#F1F5F9;border-radius:8px;font-weight:700;color:#475569;cursor:pointer;">Indiranagar</span>
          <span style="color:#94A3B8;">›</span>
          <span style="padding:4px 10px;background:#EFF6FF;color:#2563EB;border-radius:8px;font-weight:800;">Villa #402</span>
        </div>
      </div>`;

    case 10: // Model K: Apple Porcelain Segmented Floating Capsule Dock (Light Theme)
      return `<div style="display:flex;align-items:center;justify-content:center;width:100%;">
        <div style="background:rgba(255,255,255,0.92);backdrop-filter:blur(24px);-webkit-backdrop-filter:blur(24px);border:1px solid rgba(226,232,240,0.8);border-radius:99px;padding:6px 10px;box-shadow:0 14px 34px rgba(15,23,42,0.08);display:flex;align-items:center;gap:6px;">
          <button style="padding:8px 16px;background:#0F172A;color:#FFFFFF;border:none;border-radius:99px;font-size:12px;font-weight:700;display:flex;align-items:center;gap:6px;box-shadow:0 4px 12px rgba(15,23,42,0.15);cursor:pointer;">
            <span>🏠</span> <span>Home</span>
          </button>
          <button style="padding:8px 14px;background:transparent;color:#64748B;border:none;border-radius:99px;font-size:12px;font-weight:600;display:flex;align-items:center;gap:6px;cursor:pointer;">
            <span>💳</span> <span>Payments</span>
          </button>
          <button style="padding:8px 14px;background:transparent;color:#64748B;border:none;border-radius:99px;font-size:12px;font-weight:600;display:flex;align-items:center;gap:6px;cursor:pointer;">
            <span>📋</span> <span>Leases</span>
          </button>
          <div style="width:1px;height:18px;background:#E2E8F0;margin:0 2px;"></div>
          <span style="padding:4px 8px;background:#ECFDF5;color:#059669;border-radius:99px;font-size:10px;font-weight:800;">● 3 Active</span>
        </div>
      </div>`;

    case 11: // Model L: CRED Monex Center-FAB Titanium Bottom Bar (Dark Theme)
    default:
      return `<div style="width:100%;max-width:340px;background:#09090B;border:1px solid #27272A;border-radius:26px;padding:12px 20px;box-shadow:0 24px 48px rgba(0,0,0,0.7);display:flex;align-items:center;justify-content:space-between;position:relative;">
        <div style="display:flex;flex-direction:column;align-items:center;gap:3px;cursor:pointer;">
          <span style="font-size:16px;color:#CCFF00;text-shadow:0 0 10px rgba(204,255,0,0.5);">⚡</span>
          <span style="font-size:10px;font-weight:800;color:#CCFF00;">Vault</span>
        </div>
        <div style="display:flex;flex-direction:column;align-items:center;gap:3px;cursor:pointer;">
          <span style="font-size:16px;color:#71717A;">📊</span>
          <span style="font-size:10px;font-weight:600;color:#71717A;">Telemetry</span>
        </div>
        
        <!-- Elevated Center Neon Circular FAB -->
        <div style="position:relative;margin-top:-32px;">
          <button style="width:54px;height:54px;border-radius:50%;background:#CCFF00;color:#09090B;border:4px solid #09090B;display:flex;align-items:center;justify-content:center;font-size:24px;font-weight:900;box-shadow:0 0 24px rgba(204,255,0,0.55);cursor:pointer;transition:transform 0.15s;" onmousedown="this.style.transform='scale(0.92)'" onmouseup="this.style.transform='scale(1)'">
            +
          </button>
        </div>

        <div style="display:flex;flex-direction:column;align-items:center;gap:3px;cursor:pointer;">
          <span style="font-size:16px;color:#71717A;">🏢</span>
          <span style="font-size:10px;font-weight:600;color:#71717A;">Assets</span>
        </div>
        <div style="display:flex;flex-direction:column;align-items:center;gap:3px;cursor:pointer;">
          <span style="font-size:16px;color:#71717A;">👤</span>
          <span style="font-size:10px;font-weight:600;color:#71717A;">VIP ID</span>
        </div>
      </div>`;
  }
}

module.exports = {
  renderTimelineVariants
};
