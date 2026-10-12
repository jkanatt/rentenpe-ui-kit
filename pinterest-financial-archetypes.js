/**
 * RentenPe UI Kit - Pinterest Financial & Payments Archetypes
 * Direct implementation of top 50 Pinterest references:
 * - PayPal Stacked Card & Scalloped Concave Action Island (media_1791644893142.png)
 * - Titanium Obsidian Escrow Vault with Glowing Accents
 * - Splitstore Royal Blue Hero QR Scanner Card (media_1791645107119.png)
 * - Perforated Voucher Receipt with Scalloped Edge & e-Stamp
 * - Capsule Savings Goal & Pill Bar Chart Widget (media_1791644905690.png)
 * - CRED Semi-Circle Credit Rent Score Arc Gauge
 * - Multi-Account Bank Switcher Carousel
 * - Tesla Tactile Swipe-to-Pay Slider
 * - Instant UPI Quick Transfer Bento Grid
 * - Floating Payment Capsule Island
 */

function renderFinancialVariants(fam, icon, slug, variantIndex) {
  switch (variantIndex) {
    case 0: // Model A: PayPal Hero Stacked Debit Card with Concave Action Island (media_1791644893142.png)
      return `<div style="width:100%;max-width:340px;background:#09090B;border-radius:28px;padding:22px;color:#fff;box-shadow:0 20px 40px rgba(0,0,0,0.45);display:flex;flex-direction:column;gap:18px;position:relative;overflow:hidden;border:1px solid #1E293B;">
        <!-- Card Notch & Background Stack Peek -->
        <div style="position:absolute;top:0;left:0;right:0;height:4px;background:linear-gradient(90deg, #3B82F6, #60A5FA, #93C5FD);"></div>
        <div style="display:flex;align-items:center;justify-content:space-between;">
          <div style="display:flex;align-items:center;gap:8px;">
            <div style="width:28px;height:28px;border-radius:8px;background:#1E293B;display:flex;align-items:center;justify-content:center;font-size:14px;color:#60A5FA;">💳</div>
            <span style="font-size:13px;font-weight:700;color:#94A3B8;">RentenPe Vault</span>
          </div>
          <button style="background:rgba(255,255,255,0.08);border:none;border-radius:20px;padding:4px 10px;color:#CBD5E1;font-size:11px;font-weight:600;display:flex;align-items:center;gap:4px;cursor:pointer;">
            <span>🇮🇳 INR wallet</span> <span style="font-size:9px;">▼</span>
          </button>
        </div>

        <div>
          <div style="font-size:11px;font-weight:600;color:#64748B;letter-spacing:0.04em;text-transform:uppercase;">Available Rent Balance</div>
          <div style="font-size:32px;font-weight:900;letter-spacing:-0.03em;color:#FFFFFF;margin-top:4px;font-family:-apple-system,BlinkMacSystemFont,sans-serif;">
            ₹1,45,280<span style="font-size:18px;color:#94A3B8;font-weight:600;">.00</span>
          </div>
        </div>

        <!-- Pinterest Concave Action Island Buttons (Send, Receive, Add) -->
        <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;padding-top:4px;">
          <button style="background:#FFFFFF;color:#09090B;border:none;border-radius:18px;padding:12px 8px;display:flex;flex-direction:column;align-items:center;gap:4px;cursor:pointer;box-shadow:0 6px 16px rgba(255,255,255,0.12);transition:transform 0.15s;" onmousedown="this.style.transform='scale(0.96)'" onmouseup="this.style.transform='scale(1)'">
            <span style="font-size:16px;font-weight:900;">↗</span>
            <span style="font-size:11px;font-weight:800;">Send</span>
          </button>
          <button style="background:#FFFFFF;color:#09090B;border:none;border-radius:18px;padding:12px 8px;display:flex;flex-direction:column;align-items:center;gap:4px;cursor:pointer;box-shadow:0 6px 16px rgba(255,255,255,0.12);transition:transform 0.15s;" onmousedown="this.style.transform='scale(0.96)'" onmouseup="this.style.transform='scale(1)'">
            <span style="font-size:16px;font-weight:900;">↓</span>
            <span style="font-size:11px;font-weight:800;">Receive</span>
          </button>
          <button style="background:#FFFFFF;color:#09090B;border:none;border-radius:18px;padding:12px 8px;display:flex;flex-direction:column;align-items:center;gap:4px;cursor:pointer;box-shadow:0 6px 16px rgba(255,255,255,0.12);transition:transform 0.15s;" onmousedown="this.style.transform='scale(0.96)'" onmouseup="this.style.transform='scale(1)'">
            <span style="font-size:16px;font-weight:900;">+</span>
            <span style="font-size:11px;font-weight:800;">Add</span>
          </button>
        </div>

        <!-- Recent Activity Snippet -->
        <div style="border-top:1px solid #1E293B;padding-top:12px;display:flex;align-items:center;justify-content:space-between;">
          <div style="display:flex;align-items:center;gap:8px;">
            <div style="width:28px;height:28px;border-radius:8px;background:#EF4444;color:#fff;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:800;">N</div>
            <div>
              <div style="font-size:12px;font-weight:700;color:#F1F5F9;">Indiranagar Rent Auto-Debit</div>
              <div style="font-size:10px;color:#64748B;">Today • 09:42 AM</div>
            </div>
          </div>
          <span style="font-size:12px;font-weight:800;color:#F87171;">-₹28,500</span>
        </div>
      </div>`;

    case 1: // Model B: Titanium Obsidian Escrow Vault with Glowing Cyan Accent
      return `<div style="width:100%;max-width:340px;background:#09090B;border:1px solid #27272A;border-radius:26px;padding:24px;box-shadow:0 24px 50px rgba(0,0,0,0.6);position:relative;overflow:hidden;color:#fff;">
        <div style="position:absolute;top:-40px;right:-40px;width:120px;height:120px;border-radius:50%;background:radial-gradient(circle, rgba(56,189,248,0.25) 0%, transparent 70%);pointer-events:none;"></div>
        <div style="display:flex;justify-content:space-between;align-items:flex-start;">
          <div>
            <div style="display:inline-flex;align-items:center;gap:6px;padding:3px 10px;background:rgba(56,189,248,0.12);border:1px solid rgba(56,189,248,0.3);border-radius:99px;font-size:10px;font-weight:800;color:#38BDF8;letter-spacing:0.04em;">
              <span style="width:6px;height:6px;border-radius:50%;background:#38BDF8;box-shadow:0 0 8px #38BDF8;"></span> MULTI-SIG ESCROW
            </div>
            <div style="font-size:12px;color:#71717A;margin-top:8px;">Locked Security Deposit</div>
            <div style="font-size:28px;font-weight:900;color:#F4F4F5;letter-spacing:-0.02em;margin-top:2px;">₹8,50,000<span style="font-size:16px;color:#71717A;">.00</span></div>
          </div>
          <div style="width:40px;height:40px;border-radius:12px;background:#18181B;border:1px solid #27272A;display:flex;align-items:center;justify-content:center;font-size:18px;">🔒</div>
        </div>

        <div style="background:#18181B;border:1px solid #27272A;border-radius:14px;padding:12px 14px;margin:16px 0;display:flex;justify-content:space-between;align-items:center;">
          <div>
            <div style="font-size:10px;color:#A1A1AA;text-transform:uppercase;">Accrued Yield (6.5% p.a.)</div>
            <div style="font-size:13px;font-weight:800;color:#34D399;">+₹4,604 this month</div>
          </div>
          <span style="padding:4px 8px;background:rgba(52,211,153,0.15);color:#34D399;border-radius:6px;font-size:10px;font-weight:800;">ACTIVE</span>
        </div>

        <button style="width:100%;padding:13px;background:linear-gradient(135deg, #38BDF8 0%, #0284C7 100%);color:#000;border:none;border-radius:14px;font-size:12px;font-weight:800;cursor:pointer;box-shadow:0 6px 20px rgba(56,189,248,0.35);">
          Release Deposit Authorization →
        </button>
      </div>`;

    case 2: // Model C: Splitstore Royal Blue Hero QR Scanner Card (media_1791645107119.png)
      return `<div style="width:100%;max-width:340px;background:linear-gradient(145deg, #3B82F6 0%, #1D4ED8 100%);border-radius:28px;padding:22px;color:#fff;box-shadow:0 16px 36px rgba(37,99,235,0.35);display:flex;flex-direction:column;gap:16px;position:relative;">
        <!-- Glowing Viewfinder Box -->
        <div style="background:rgba(255,255,255,0.1);backdrop-filter:blur(10px);border:1.5px solid rgba(255,255,255,0.25);border-radius:20px;padding:18px;display:flex;flex-direction:column;align-items:center;gap:10px;position:relative;cursor:pointer;">
          <div style="position:relative;width:90px;height:90px;display:flex;align-items:center;justify-content:center;">
            <!-- Luminous Corner Brackets -->
            <div style="position:absolute;top:0;left:0;width:18px;height:18px;border-top:3px solid #4ADE80;border-left:3px solid #4ADE80;border-top-left-radius:6px;"></div>
            <div style="position:absolute;top:0;right:0;width:18px;height:18px;border-top:3px solid #4ADE80;border-right:3px solid #4ADE80;border-top-right-radius:6px;"></div>
            <div style="position:absolute;bottom:0;left:0;width:18px;height:18px;border-bottom:3px solid #4ADE80;border-left:3px solid #4ADE80;border-bottom-left-radius:6px;"></div>
            <div style="position:absolute;bottom:0;right:0;width:18px;height:18px;border-bottom:3px solid #4ADE80;border-right:3px solid #4ADE80;border-bottom-right-radius:6px;"></div>
            <!-- Center QR Icon -->
            <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2">
              <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>
              <path d="M10 3v4M10 10v4M14 10h4"/>
            </svg>
          </div>
          <div style="font-size:13px;font-weight:800;letter-spacing:0.02em;">Tap to Scan Rent QR</div>
        </div>

        <div style="display:flex;align-items:center;justify-content:center;gap:6px;font-size:11px;font-weight:700;color:#BBF7D0;">
          <span>⚡</span> Get up to 5% instant cashback on UPI
        </div>

        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
          <button style="padding:11px;background:rgba(255,255,255,0.18);border:1px solid rgba(255,255,255,0.25);border-radius:12px;color:#fff;font-size:12px;font-weight:700;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;">
            <span>✉</span> Send Money
          </button>
          <button style="padding:11px;background:rgba(255,255,255,0.18);border:1px solid rgba(255,255,255,0.25);border-radius:12px;color:#fff;font-size:12px;font-weight:700;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;">
            <span>🏦</span> Check Ledger
          </button>
        </div>
      </div>`;

    case 3: // Model D: Perforated Receipt Voucher with Barcode & Scalloped Cut
      return `<div style="width:100%;max-width:340px;background:#FFFBEB;border:1.5px dashed #F59E0B;border-radius:24px;padding:24px;display:flex;flex-direction:column;gap:16px;box-shadow:0 12px 28px rgba(245,158,11,0.12);position:relative;">
        <div style="display:flex;justify-content:space-between;align-items:center;">
          <span style="font-size:11px;font-weight:900;color:#B45309;letter-spacing:0.06em;text-transform:uppercase;">OFFICIAL RENT RECEIPT</span>
          <span style="font-family:monospace;font-size:11px;font-weight:700;color:#78350F;">#RP-2026-9924</span>
        </div>

        <div style="text-align:center;padding:8px 0;border-bottom:1px dashed #FDE68A;">
          <div style="font-size:11px;color:#92400E;font-weight:600;">AMOUNT CLEARED</div>
          <div style="font-size:32px;font-weight:900;color:#78350F;margin-top:2px;">₹28,500</div>
          <div style="font-size:11px;color:#059669;font-weight:800;margin-top:4px;">● VERIFIED BY ESCROW TRUST</div>
        </div>

        <div style="display:flex;flex-direction:column;gap:8px;font-size:12px;">
          <div style="display:flex;justify-content:space-between;"><span style="color:#92400E;">Tenant:</span><strong style="color:#78350F;">Joshua Kanatt</strong></div>
          <div style="display:flex;justify-content:space-between;"><span style="color:#92400E;">Property:</span><strong style="color:#78350F;">Villa 402, Indiranagar</strong></div>
          <div style="display:flex;justify-content:space-between;"><span style="color:#92400E;">Payment Mode:</span><strong style="color:#78350F;">UPI Auto-Debit</strong></div>
        </div>

        <!-- SVG Barcode Representation -->
        <div style="display:flex;flex-direction:column;align-items:center;gap:4px;padding-top:6px;">
          <div style="display:flex;gap:2.5px;height:32px;align-items:center;">
            <div style="width:3px;height:100%;background:#78350F;"></div><div style="width:1.5px;height:80%;background:#78350F;"></div><div style="width:4px;height:100%;background:#78350F;"></div><div style="width:2px;height:90%;background:#78350F;"></div>
            <div style="width:3px;height:100%;background:#78350F;"></div><div style="width:1px;height:70%;background:#78350F;"></div><div style="width:5px;height:100%;background:#78350F;"></div><div style="width:2px;height:85%;background:#78350F;"></div>
            <div style="width:4px;height:100%;background:#78350F;"></div><div style="width:2px;height:100%;background:#78350F;"></div><div style="width:3px;height:75%;background:#78350F;"></div><div style="width:1.5px;height:100%;background:#78350F;"></div>
          </div>
          <span style="font-family:monospace;font-size:10px;color:#92400E;">VALIDATED E-STAMP HASH</span>
        </div>
      </div>`;

    case 4: // Model E: Capsule Savings Goal & Pill Bar Chart Widget (media_1791644905690.png)
      return `<div style="width:100%;max-width:340px;background:#ffffff;border:1px solid #E2E8F0;border-radius:26px;padding:22px;box-shadow:0 12px 30px rgba(15,23,42,0.06);display:flex;flex-direction:column;gap:16px;">
        <div style="display:flex;justify-content:space-between;align-items:center;">
          <div style="display:flex;align-items:center;gap:10px;">
            <div style="width:36px;height:36px;border-radius:12px;background:#ECFDF5;color:#059669;display:flex;align-items:center;justify-content:center;font-size:18px;">🎯</div>
            <div>
              <div style="font-size:14px;font-weight:800;color:#0F172A;">Security Deposit Fund</div>
              <div style="font-size:11px;color:#64748B;">Average saving ₹12,400/mo</div>
            </div>
          </div>
          <span style="padding:4px 8px;background:#EFF6FF;color:#2563EB;border-radius:6px;font-size:10px;font-weight:800;">40% GOAL</span>
        </div>

        <div style="display:flex;justify-content:space-between;align-items:baseline;">
          <div><span style="font-size:22px;font-weight:900;color:#0F172A;">₹1,00,000</span> <span style="font-size:12px;color:#64748B;">of ₹2,50,000</span></div>
          <span style="font-size:11px;font-weight:700;color:#059669;">18 days remaining</span>
        </div>

        <!-- Pinterest Rounded Capsule Vertical Bar Chart (Jan to Jun) -->
        <div style="background:#F8FAFC;border:1px solid #F1F5F9;border-radius:18px;padding:16px;display:flex;flex-direction:column;gap:10px;">
          <div style="font-size:11px;font-weight:700;color:#64748B;display:flex;justify-content:space-between;">
            <span>Monthly Velocity</span> <span style="color:#0F172A;font-weight:800;">+112% vs last year</span>
          </div>
          <div style="display:flex;justify-content:space-between;align-items:flex-end;height:70px;padding:0 6px;">
            <div style="display:flex;flex-direction:column;align-items:center;gap:6px;">
              <div style="width:22px;height:42px;background:#CBD5E1;border-radius:99px;"></div>
              <span style="font-size:10px;color:#64748B;font-weight:600;">Jan</span>
            </div>
            <div style="display:flex;flex-direction:column;align-items:center;gap:6px;">
              <div style="width:22px;height:32px;background:#CBD5E1;border-radius:99px;"></div>
              <span style="font-size:10px;color:#64748B;font-weight:600;">Feb</span>
            </div>
            <div style="display:flex;flex-direction:column;align-items:center;gap:6px;">
              <div style="width:22px;height:50px;background:#CBD5E1;border-radius:99px;"></div>
              <span style="font-size:10px;color:#64748B;font-weight:600;">Mar</span>
            </div>
            <div style="display:flex;flex-direction:column;align-items:center;gap:6px;">
              <div style="width:22px;height:38px;background:#CBD5E1;border-radius:99px;"></div>
              <span style="font-size:10px;color:#64748B;font-weight:600;">Apr</span>
            </div>
            <div style="display:flex;flex-direction:column;align-items:center;gap:6px;">
              <div style="width:22px;height:65px;background:#0F172A;border-radius:99px;box-shadow:0 4px 10px rgba(15,23,42,0.25);"></div>
              <span style="font-size:10px;color:#0F172A;font-weight:800;">May</span>
            </div>
            <div style="display:flex;flex-direction:column;align-items:center;gap:6px;">
              <div style="width:22px;height:48px;background:#CBD5E1;border-radius:99px;"></div>
              <span style="font-size:10px;color:#64748B;font-weight:600;">Jun</span>
            </div>
          </div>
        </div>

        <button style="width:100%;padding:12px;background:#0F172A;color:#fff;border:none;border-radius:14px;font-size:12px;font-weight:800;cursor:pointer;">
          + Top Up Goal
        </button>
      </div>`;

    case 5: // Model F: CRED Semi-Circle Credit Rent Score Arc Gauge
      return `<div style="width:100%;max-width:340px;background:#09090B;border:1px solid #27272A;border-radius:26px;padding:24px;color:#fff;box-shadow:0 20px 40px rgba(0,0,0,0.5);display:flex;flex-direction:column;align-items:center;gap:14px;position:relative;">
        <div style="font-size:11px;font-weight:800;color:#A1A1AA;letter-spacing:0.06em;text-transform:uppercase;">CREDIT RENT HEALTH INDEX</div>

        <!-- Semi Circle SVG Gauge -->
        <div style="position:relative;width:160px;height:95px;display:flex;align-items:center;justify-content:center;">
          <svg width="160" height="95" viewBox="0 0 160 95">
            <path d="M 15 85 A 65 65 0 0 1 145 85" fill="none" stroke="#27272A" stroke-width="12" stroke-linecap="round"/>
            <path d="M 15 85 A 65 65 0 0 1 125 40" fill="none" stroke="#10B981" stroke-width="12" stroke-linecap="round"/>
          </svg>
          <div style="position:absolute;bottom:0;display:flex;flex-direction:column;align-items:center;">
            <div style="font-size:36px;font-weight:900;color:#10B981;line-height:1;">814</div>
            <div style="font-size:11px;color:#34D399;font-weight:700;margin-top:2px;">EXCELLENT</div>
          </div>
        </div>

        <div style="font-size:11px;color:#71717A;text-align:center;">
          Top 3% of tenants in Bengaluru. Guaranteed zero-deposit eligibility unlocked.
        </div>

        <div style="width:100%;background:#18181B;border-radius:12px;padding:10px 14px;display:flex;justify-content:space-between;align-items:center;font-size:11px;">
          <span style="color:#A1A1AA;">Impact on CIBIL Score</span>
          <span style="color:#34D399;font-weight:800;">+24 pts last quarter ▲</span>
        </div>
      </div>`;

    case 6: // Model G: Multi-Account Bank Switcher Carousel Card
      return `<div style="width:100%;max-width:340px;background:#ffffff;border:1px solid #E2E8F0;border-radius:24px;padding:20px;display:flex;flex-direction:column;gap:14px;box-shadow:0 8px 24px rgba(15,23,42,0.05);">
        <div style="display:flex;justify-content:space-between;align-items:center;">
          <span style="font-size:12px;font-weight:800;color:#0F172A;">Connected Settlement Accounts</span>
          <span style="font-size:11px;color:#2563EB;font-weight:700;cursor:pointer;">+ Add Bank</span>
        </div>

        <div style="border:2px solid #2563EB;border-radius:16px;padding:14px;background:#EFF6FF;display:flex;align-items:center;justify-content:space-between;">
          <div style="display:flex;align-items:center;gap:12px;">
            <div style="width:36px;height:36px;border-radius:10px;background:#1E40AF;color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900;font-size:14px;">HDFC</div>
            <div>
              <div style="font-size:13px;font-weight:800;color:#0F172A;">HDFC Bank •• 4821</div>
              <div style="font-size:10px;color:#2563EB;font-weight:700;">DEFAULT AUTO-PAY ACCOUNT</div>
            </div>
          </div>
          <span style="font-size:18px;color:#2563EB;">●</span>
        </div>

        <div style="border:1px solid #E2E8F0;border-radius:16px;padding:14px;background:#FAFAFA;display:flex;align-items:center;justify-content:space-between;opacity:0.85;">
          <div style="display:flex;align-items:center;gap:12px;">
            <div style="width:36px;height:36px;border-radius:10px;background:#D97706;color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900;font-size:14px;">ICICI</div>
            <div>
              <div style="font-size:13px;font-weight:700;color:#0F172A;">ICICI Bank •• 9012</div>
              <div style="font-size:10px;color:#64748B;">Savings Account</div>
            </div>
          </div>
          <span style="font-size:18px;color:#CBD5E1;">○</span>
        </div>
      </div>`;

    case 7: // Model H: Tesla Tactile Swipe-to-Pay Slider
      return `<div style="width:100%;max-width:340px;background:#ffffff;border:1px solid #E2E8F0;border-radius:24px;padding:24px;display:flex;flex-direction:column;gap:16px;box-shadow:0 12px 30px rgba(0,0,0,0.06);">
        <div style="display:flex;justify-content:space-between;align-items:center;">
          <div>
            <div style="font-size:11px;font-weight:700;color:#64748B;">OCTOBER RENT CONFIRMATION</div>
            <div style="font-size:24px;font-weight:900;color:#0F172A;">₹32,500<span style="font-size:14px;color:#64748B;">.00</span></div>
          </div>
          <span style="padding:4px 8px;background:#FEF3C7;color:#D97706;border-radius:6px;font-size:10px;font-weight:800;">DUE IN 2D</span>
        </div>

        <!-- Interactive Sliding Track -->
        <div style="position:relative;height:56px;background:#0F172A;border-radius:99px;padding:4px;display:flex;align-items:center;box-shadow:inset 0 2px 6px rgba(0,0,0,0.4);overflow:hidden;cursor:pointer;">
          <div style="position:absolute;left:0;right:0;text-align:center;font-size:12px;font-weight:800;color:#94A3B8;letter-spacing:0.04em;">
            Swipe to Confirm Payment →
          </div>
          <div style="width:48px;height:48px;border-radius:50%;background:#FFFFFF;box-shadow:0 4px 12px rgba(0,0,0,0.3);display:flex;align-items:center;justify-content:center;font-size:18px;font-weight:900;color:#0F172A;position:relative;z-index:2;">
            ➔
          </div>
        </div>

        <div style="display:flex;align-items:center;justify-content:center;gap:6px;font-size:10px;color:#64748B;">
          <span>🔒</span> 256-Bit SSL Encrypted Bank Clearing
        </div>
      </div>`;

    case 8: // Model I: Instant UPI Quick Transfer Bento Grid (Splitstore Inspired)
      return `<div style="width:100%;max-width:340px;display:flex;flex-direction:column;gap:12px;">
        <div style="font-size:12px;font-weight:800;color:#0F172A;">Recent Roommate UPI Transfers</div>
        <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;">
          <div style="padding:14px 10px;background:#fff;border:1px solid #E2E8F0;border-radius:18px;display:flex;flex-direction:column;align-items:center;gap:6px;cursor:pointer;box-shadow:0 4px 10px rgba(0,0,0,0.03);">
            <div style="width:40px;height:40px;border-radius:50%;background:#EFF6FF;color:#2563EB;font-weight:800;display:flex;align-items:center;justify-content:center;font-size:14px;">RK</div>
            <div style="font-size:12px;font-weight:800;color:#0F172A;">Rahul K.</div>
            <span style="font-size:10px;color:#10B981;font-weight:700;">Pay ₹4.5k</span>
          </div>
          <div style="padding:14px 10px;background:#fff;border:1px solid #E2E8F0;border-radius:18px;display:flex;flex-direction:column;align-items:center;gap:6px;cursor:pointer;box-shadow:0 4px 10px rgba(0,0,0,0.03);">
            <div style="width:40px;height:40px;border-radius:50%;background:#FDF2F8;color:#DB2777;font-weight:800;display:flex;align-items:center;justify-content:center;font-size:14px;">PS</div>
            <div style="font-size:12px;font-weight:800;color:#0F172A;">Priya S.</div>
            <span style="font-size:10px;color:#10B981;font-weight:700;">Pay ₹2.1k</span>
          </div>
          <div style="padding:14px 10px;background:#F8FAFC;border:1.5px dashed #CBD5E1;border-radius:18px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;cursor:pointer;">
            <div style="font-size:20px;color:#64748B;">+</div>
            <span style="font-size:11px;font-weight:700;color:#64748B;">New UPI</span>
          </div>
        </div>
      </div>`;

    case 9: // Model J: Floating Payment Capsule Island
      return `<div style="display:flex;align-items:center;justify-content:center;padding:10px;">
        <div style="background:#0F172A;color:#fff;border-radius:99px;padding:10px 20px;display:inline-flex;align-items:center;gap:14px;box-shadow:0 12px 28px rgba(15,23,42,0.35);">
          <div style="display:flex;align-items:center;gap:8px;">
            <span style="width:8px;height:8px;border-radius:50%;background:#10B981;box-shadow:0 0 8px #10B981;"></span>
            <span style="font-size:13px;font-weight:800;">₹42,850 Held in Vault</span>
          </div>
          <div style="width:1px;height:20px;background:rgba(255,255,255,0.2);"></div>
          <button style="padding:6px 14px;background:#2563EB;color:#fff;border:none;border-radius:99px;font-size:11px;font-weight:800;cursor:pointer;">
            Deposit More +
          </button>
        </div>
      </div>`;

    case 10: // Model K: Apple / Tesla Porcelain Light Luxury Balance & Rings
      return `<div style="width:100%;max-width:340px;background:#FFFFFF;border:1px solid #E2E8F0;border-radius:26px;padding:22px;box-shadow:0 12px 32px rgba(15,23,42,0.04);display:flex;flex-direction:column;gap:16px;">
        <div style="display:flex;align-items:center;justify-content:space-between;">
          <div style="display:flex;align-items:center;gap:8px;">
            <div style="width:30px;height:30px;border-radius:10px;background:#ECFDF5;color:#059669;display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:800;">🍏</div>
            <div>
              <div style="font-size:13px;font-weight:800;color:#0F172A;">Apple Cash Escrow</div>
              <div style="font-size:10px;color:#64748B;">Porcelain Reserve Suite</div>
            </div>
          </div>
          <span style="padding:4px 10px;background:#ECFDF5;color:#059669;border-radius:20px;font-size:10px;font-weight:800;letter-spacing:0.04em;">AUTO-PILOT ACTIVE</span>
        </div>

        <div style="background:#F8FAFC;border:1px solid #F1F5F9;border-radius:20px;padding:18px;display:flex;align-items:center;justify-content:space-between;">
          <div>
            <div style="font-size:10px;font-weight:700;color:#64748B;letter-spacing:0.06em;text-transform:uppercase;">Porcelain Net Worth</div>
            <div style="font-size:28px;font-weight:900;color:#0F172A;letter-spacing:-0.03em;margin-top:2px;">₹2,84,500<span style="font-size:16px;color:#94A3B8;font-weight:600;">.00</span></div>
            <div style="font-size:11px;color:#059669;font-weight:700;margin-top:4px;">▲ +14.2% Earned Interest</div>
          </div>
          <!-- Concentric Activity Rings -->
          <div style="position:relative;width:60px;height:60px;">
            <svg width="60" height="60" viewBox="0 0 60 60">
              <circle cx="30" cy="30" r="24" stroke="#E2E8F0" stroke-width="4" fill="none"/>
              <circle cx="30" cy="30" r="24" stroke="#10B981" stroke-width="4" fill="none" stroke-dasharray="150" stroke-dashoffset="20" stroke-linecap="round" transform="rotate(-90 30 30)"/>
              <circle cx="30" cy="30" r="17" stroke="#E2E8F0" stroke-width="4" fill="none"/>
              <circle cx="30" cy="30" r="17" stroke="#3B82F6" stroke-width="4" fill="none" stroke-dasharray="106" stroke-dashoffset="15" stroke-linecap="round" transform="rotate(-90 30 30)"/>
              <circle cx="30" cy="30" r="10" stroke="#E2E8F0" stroke-width="3" fill="none"/>
              <circle cx="30" cy="30" r="10" stroke="#F59E0B" stroke-width="3" fill="none" stroke-dasharray="62" stroke-dashoffset="12" stroke-linecap="round" transform="rotate(-90 30 30)"/>
            </svg>
          </div>
        </div>

        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
          <button style="padding:12px;background:#0F172A;color:#FFFFFF;border:none;border-radius:14px;font-size:12px;font-weight:800;display:flex;align-items:center;justify-content:center;gap:6px;cursor:pointer;box-shadow:0 4px 12px rgba(15,23,42,0.15);">
            <span>+</span> Top Up Reserve
          </button>
          <button style="padding:12px;background:#F1F5F9;color:#0F172A;border:none;border-radius:14px;font-size:12px;font-weight:800;display:flex;align-items:center;justify-content:center;gap:6px;cursor:pointer;">
            Transfer ↗
          </button>
        </div>
      </div>`;

    case 11: // Model L: CRED Monex Titanium Acid Dark Luxury Vault
    default:
      return `<div style="width:100%;max-width:340px;background:#09090B;border:1px solid rgba(204,255,0,0.3);border-radius:26px;padding:22px;box-shadow:0 24px 48px rgba(0,0,0,0.7),inset 0 1px 0 rgba(204,255,0,0.2);color:#FFFFFF;position:relative;overflow:hidden;display:flex;flex-direction:column;gap:16px;">
        <div style="position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg, #CCFF00, #38BDF8, #CCFF00);"></div>
        <div style="display:flex;align-items:center;justify-content:space-between;">
          <div style="display:flex;align-items:center;gap:10px;">
            <div style="width:32px;height:32px;border-radius:10px;background:#18181B;border:1px solid #27272A;display:flex;align-items:center;justify-content:center;font-size:14px;color:#CCFF00;">⚡</div>
            <div>
              <div style="font-size:13px;font-weight:900;letter-spacing:0.04em;color:#FFFFFF;">MONEX TITANIUM</div>
              <div style="font-size:10px;color:#71717A;font-family:monospace;">VAULT_KEY::0x9F41</div>
            </div>
          </div>
          <span style="padding:4px 8px;background:rgba(204,255,0,0.12);border:1px solid rgba(204,255,0,0.3);color:#CCFF00;border-radius:6px;font-size:10px;font-weight:900;letter-spacing:0.05em;">VIP ACCESS</span>
        </div>

        <div>
          <div style="font-size:10px;font-weight:800;color:#71717A;letter-spacing:0.1em;text-transform:uppercase;">Escrow Liquidity</div>
          <div style="font-size:34px;font-weight:900;color:#CCFF00;letter-spacing:-0.03em;text-shadow:0 0 24px rgba(204,255,0,0.35);margin-top:2px;">
            ₹5,50,000<span style="font-size:18px;color:#A1A1AA;font-weight:700;">.00</span>
          </div>
          <div style="font-size:11px;color:#38BDF8;font-weight:700;margin-top:4px;">⚡ Instant 0% ACH Settlement Enabled</div>
        </div>

        <!-- Haptic Tactile Dial Pad / Action Dock -->
        <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;padding-top:4px;">
          <button style="background:#18181B;border:1px solid #27272A;color:#FFFFFF;border-radius:14px;padding:12px 8px;display:flex;flex-direction:column;align-items:center;gap:4px;cursor:pointer;transition:all 0.15s;" onmouseover="this.style.borderColor='#CCFF00'" onmouseout="this.style.borderColor='#27272A'">
            <span style="font-size:14px;color:#CCFF00;">↗</span>
            <span style="font-size:11px;font-weight:800;">Wire</span>
          </button>
          <button style="background:#18181B;border:1px solid #27272A;color:#FFFFFF;border-radius:14px;padding:12px 8px;display:flex;flex-direction:column;align-items:center;gap:4px;cursor:pointer;transition:all 0.15s;" onmouseover="this.style.borderColor='#CCFF00'" onmouseout="this.style.borderColor='#27272A'">
            <span style="font-size:14px;color:#38BDF8;">⌘</span>
            <span style="font-size:11px;font-weight:800;">Escrow</span>
          </button>
          <button style="background:#CCFF00;border:none;color:#09090B;border-radius:14px;padding:12px 8px;display:flex;flex-direction:column;align-items:center;gap:4px;cursor:pointer;box-shadow:0 0 16px rgba(204,255,0,0.4);font-weight:900;">
            <span style="font-size:14px;font-weight:900;">+</span>
            <span style="font-size:11px;font-weight:900;">Deposit</span>
          </button>
        </div>
      </div>`;
  }
}

module.exports = {
  renderFinancialVariants
};
