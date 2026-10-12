/**
 * Batch 2: Real Estate + GoBus Transport + Sleep/Wellness + Security screens
 */
const fs = require('fs');
const path = require('path');
const file = path.join(__dirname, 'js/screen-renderers.js');
let code = fs.readFileSync(file, 'utf8');

const MARKER = `    // ══════════════════════════════════════════════
    // 6. DEFAULT / FALLBACK PREMIUM TEMPLATE
    // ══════════════════════════════════════════════`;

const newCases = `
    // ══════════════════════════════════════════════
    // REAL ESTATE SCREENS
    // ══════════════════════════════════════════════
    case 'findora-filters':
      return \`
        <div style="background:#FFFFFF;color:#0F172A;border-radius:36px;padding:24px 20px;font-family:'Inter',sans-serif;height:100%;display:flex;flex-direction:column;">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:20px;">
            <span style="cursor:pointer;font-size:16px;">←</span>
            <span style="font-weight:700;font-size:15px;">Filters</span>
            <span style="font-size:13px;color:#3B82F6;font-weight:700;cursor:pointer;">Reset</span>
          </div>
          <div style="margin-bottom:16px;">
            <div style="font-size:12px;font-weight:700;margin-bottom:8px;">Property Type</div>
            <div style="display:flex;flex-wrap:wrap;gap:6px;">
              <span style="background:#0F172A;color:#fff;padding:8px 14px;border-radius:99px;font-size:11px;font-weight:700;">🏠 House</span>
              <span style="background:#F1F5F9;color:#64748B;padding:8px 14px;border-radius:99px;font-size:11px;font-weight:600;">🏢 Apartment</span>
              <span style="background:#F1F5F9;color:#64748B;padding:8px 14px;border-radius:99px;font-size:11px;font-weight:600;">🏘️ Villa</span>
              <span style="background:#F1F5F9;color:#64748B;padding:8px 14px;border-radius:99px;font-size:11px;font-weight:600;">🏗️ Studio</span>
            </div>
          </div>
          <div style="margin-bottom:16px;">
            <div style="font-size:12px;font-weight:700;margin-bottom:8px;">Price Range</div>
            <div style="display:flex;gap:10px;">
              <div style="flex:1;background:#F8FAFC;border:1px solid #E2E8F0;border-radius:12px;padding:10px 12px;">
                <div style="font-size:9px;color:#94A3B8;">Min</div>
                <div style="font-size:14px;font-weight:800;">$500</div>
              </div>
              <div style="flex:1;background:#F8FAFC;border:1px solid #E2E8F0;border-radius:12px;padding:10px 12px;">
                <div style="font-size:9px;color:#94A3B8;">Max</div>
                <div style="font-size:14px;font-weight:800;">$3,000</div>
              </div>
            </div>
            <div style="height:4px;background:#E2E8F0;border-radius:99px;margin-top:10px;position:relative;">
              <div style="height:100%;width:60%;margin-left:15%;background:#0F172A;border-radius:99px;"></div>
            </div>
          </div>
          <div style="margin-bottom:16px;">
            <div style="font-size:12px;font-weight:700;margin-bottom:8px;">Bedrooms</div>
            <div style="display:flex;gap:6px;">
              <span style="width:36px;height:36px;border-radius:10px;background:#F1F5F9;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:700;">1</span>
              <span style="width:36px;height:36px;border-radius:10px;background:#0F172A;color:#fff;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:700;">2</span>
              <span style="width:36px;height:36px;border-radius:10px;background:#F1F5F9;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:700;">3</span>
              <span style="width:36px;height:36px;border-radius:10px;background:#F1F5F9;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:700;">4+</span>
            </div>
          </div>
          <div style="margin-bottom:16px;">
            <div style="font-size:12px;font-weight:700;margin-bottom:8px;">Amenities</div>
            <div style="display:flex;flex-wrap:wrap;gap:6px;">
              <span style="background:#ECFDF5;color:#059669;padding:6px 12px;border-radius:99px;font-size:10px;font-weight:700;">✓ Parking</span>
              <span style="background:#ECFDF5;color:#059669;padding:6px 12px;border-radius:99px;font-size:10px;font-weight:700;">✓ Gym</span>
              <span style="background:#F1F5F9;color:#64748B;padding:6px 12px;border-radius:99px;font-size:10px;font-weight:600;">Pool</span>
              <span style="background:#F1F5F9;color:#64748B;padding:6px 12px;border-radius:99px;font-size:10px;font-weight:600;">Balcony</span>
            </div>
          </div>
          <button style="width:100%;padding:14px;background:#0F172A;color:#fff;border:none;border-radius:16px;font-weight:800;font-size:14px;cursor:pointer;margin-top:auto;">Show 24 Properties</button>
        </div>
      \`;

    case 'findora-property-detail':
      return \`
        <div style="background:#FFFFFF;color:#0F172A;border-radius:36px;padding:0;font-family:'Inter',sans-serif;height:100%;display:flex;flex-direction:column;overflow:hidden;">
          <div style="background:linear-gradient(135deg,#1E293B,#334155);height:180px;position:relative;">
            <div style="position:absolute;top:16px;left:16px;width:32px;height:32px;border-radius:50%;background:rgba(255,255,255,0.2);backdrop-filter:blur(10px);display:flex;align-items:center;justify-content:center;cursor:pointer;color:#fff;">←</div>
            <div style="position:absolute;top:16px;right:16px;display:flex;gap:8px;">
              <div style="width:32px;height:32px;border-radius:50%;background:rgba(255,255,255,0.2);backdrop-filter:blur(10px);display:flex;align-items:center;justify-content:center;">🤍</div>
              <div style="width:32px;height:32px;border-radius:50%;background:rgba(255,255,255,0.2);backdrop-filter:blur(10px);display:flex;align-items:center;justify-content:center;">📤</div>
            </div>
            <div style="position:absolute;bottom:12px;left:50%;transform:translateX(-50%);display:flex;gap:4px;">
              <div style="width:20px;height:3px;border-radius:99px;background:#fff;"></div>
              <div style="width:8px;height:3px;border-radius:99px;background:rgba(255,255,255,0.4);"></div>
              <div style="width:8px;height:3px;border-radius:99px;background:rgba(255,255,255,0.4);"></div>
            </div>
            <div style="position:absolute;bottom:-1px;left:0;right:0;height:24px;background:#fff;border-radius:24px 24px 0 0;"></div>
          </div>
          <div style="padding:0 20px 20px 20px;flex:1;display:flex;flex-direction:column;">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
              <h3 style="font-size:18px;font-weight:900;margin:0;">Modern Loft</h3>
              <span style="font-size:16px;font-weight:900;color:#3B82F6;">$1,850<span style="font-size:10px;color:#94A3B8;font-weight:600;">/mo</span></span>
            </div>
            <div style="font-size:11px;color:#64748B;margin-bottom:12px;">📍 Indiranagar, Bengaluru</div>
            <div style="display:flex;gap:12px;margin-bottom:16px;">
              <div style="display:flex;align-items:center;gap:4px;font-size:11px;color:#64748B;"><span>🛏️</span>2 Beds</div>
              <div style="display:flex;align-items:center;gap:4px;font-size:11px;color:#64748B;"><span>🚿</span>1 Bath</div>
              <div style="display:flex;align-items:center;gap:4px;font-size:11px;color:#64748B;"><span>📐</span>850 sqft</div>
            </div>
            <div style="font-size:12px;font-weight:700;margin-bottom:6px;">Description</div>
            <div style="font-size:11px;color:#64748B;line-height:1.6;margin-bottom:16px;">Beautifully renovated loft with exposed brick, floor-to-ceiling windows, and premium finishes throughout.</div>
            <div style="font-size:12px;font-weight:700;margin-bottom:8px;">Amenities</div>
            <div style="display:flex;flex-wrap:wrap;gap:6px;margin-bottom:16px;">
              <span style="background:#F0FDF4;color:#059669;padding:4px 10px;border-radius:99px;font-size:10px;font-weight:600;">🅿️ Parking</span>
              <span style="background:#EFF6FF;color:#3B82F6;padding:4px 10px;border-radius:99px;font-size:10px;font-weight:600;">🏋️ Gym</span>
              <span style="background:#FEF3C7;color:#D97706;padding:4px 10px;border-radius:99px;font-size:10px;font-weight:600;">🏊 Pool</span>
            </div>
            <button style="width:100%;padding:14px;background:#0F172A;color:#fff;border:none;border-radius:16px;font-weight:800;font-size:14px;cursor:pointer;margin-top:auto;">Schedule Tour</button>
          </div>
        </div>
      \`;

    case 'findora-map-search':
      return \`
        <div style="background:#E8F0E8;color:#0F172A;border-radius:36px;padding:0;font-family:'Inter',sans-serif;height:100%;display:flex;flex-direction:column;overflow:hidden;position:relative;">
          <div style="position:absolute;top:16px;left:16px;right:16px;z-index:10;">
            <div style="background:#fff;border-radius:16px;padding:12px 16px;display:flex;align-items:center;gap:8px;box-shadow:0 4px 16px rgba(0,0,0,0.1);">
              <span style="font-size:14px;">🔍</span>
              <span style="font-size:13px;color:#94A3B8;">Search neighborhood...</span>
              <span style="margin-left:auto;font-size:14px;">⚙️</span>
            </div>
          </div>
          <div style="flex:1;background:linear-gradient(180deg,#D4E8D4 0%,#B8D4B8 50%,#A8C8A8 100%);position:relative;">
            <div style="position:absolute;top:30%;left:20%;width:80px;height:40px;background:#C8D8C0;border-radius:4px;opacity:0.6;"></div>
            <div style="position:absolute;top:45%;left:50%;width:60px;height:30px;background:#B8C8B0;border-radius:4px;opacity:0.6;"></div>
            <div style="position:absolute;top:35%;left:30%;background:#0F172A;color:#fff;padding:6px 12px;border-radius:12px;font-size:12px;font-weight:800;box-shadow:0 4px 12px rgba(0,0,0,0.2);">$1,850</div>
            <div style="position:absolute;top:50%;left:55%;background:#0F172A;color:#fff;padding:6px 12px;border-radius:12px;font-size:12px;font-weight:800;box-shadow:0 4px 12px rgba(0,0,0,0.2);">$2,200</div>
            <div style="position:absolute;top:60%;left:25%;background:#3B82F6;color:#fff;padding:6px 12px;border-radius:12px;font-size:12px;font-weight:800;box-shadow:0 4px 12px rgba(0,0,0,0.2);">$1,500</div>
          </div>
          <div style="background:#fff;border-radius:24px 24px 0 0;padding:16px 20px;box-shadow:0 -4px 20px rgba(0,0,0,0.05);">
            <div style="width:32px;height:4px;background:#E2E8F0;border-radius:99px;margin:0 auto 12px auto;"></div>
            <div style="display:flex;align-items:center;gap:12px;">
              <div style="width:60px;height:60px;border-radius:12px;background:linear-gradient(135deg,#1E293B,#334155);"></div>
              <div style="flex:1;">
                <div style="font-size:14px;font-weight:800;">Modern Loft</div>
                <div style="font-size:11px;color:#64748B;">📍 Indiranagar • 2 Beds</div>
                <div style="font-size:14px;font-weight:900;color:#3B82F6;margin-top:2px;">$1,850/mo</div>
              </div>
              <span style="font-size:18px;cursor:pointer;">›</span>
            </div>
          </div>
        </div>
      \`;

    case 'findora-lease-signing':
      return \`
        <div style="background:#FFFFFF;color:#0F172A;border-radius:36px;padding:24px 20px;font-family:'Inter',sans-serif;height:100%;display:flex;flex-direction:column;">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:20px;">
            <span style="cursor:pointer;">←</span>
            <span style="font-weight:700;font-size:15px;">Lease Agreement</span>
            <span style="font-size:14px;">📄</span>
          </div>
          <div style="background:#F0FDF4;border:1px solid #BBF7D0;border-radius:14px;padding:14px;margin-bottom:16px;display:flex;align-items:center;gap:10px;">
            <div style="font-size:20px;">✅</div>
            <div>
              <div style="font-size:13px;font-weight:700;color:#166534;">Ready to Sign</div>
              <div style="font-size:11px;color:#15803D;">All documents verified</div>
            </div>
          </div>
          <div style="display:flex;flex-direction:column;gap:10px;margin-bottom:16px;">
            <div style="background:#F8FAFC;border:1px solid #E2E8F0;border-radius:12px;padding:12px;">
              <div style="display:flex;justify-content:space-between;font-size:11px;margin-bottom:4px;">
                <span style="color:#64748B;">Property</span>
                <span style="font-weight:700;">Modern Loft, Indiranagar</span>
              </div>
            </div>
            <div style="background:#F8FAFC;border:1px solid #E2E8F0;border-radius:12px;padding:12px;">
              <div style="display:flex;justify-content:space-between;font-size:11px;margin-bottom:4px;">
                <span style="color:#64748B;">Duration</span>
                <span style="font-weight:700;">12 months</span>
              </div>
            </div>
            <div style="background:#F8FAFC;border:1px solid #E2E8F0;border-radius:12px;padding:12px;">
              <div style="display:flex;justify-content:space-between;font-size:11px;margin-bottom:4px;">
                <span style="color:#64748B;">Monthly Rent</span>
                <span style="font-weight:700;color:#3B82F6;">$1,850.00</span>
              </div>
            </div>
            <div style="background:#F8FAFC;border:1px solid #E2E8F0;border-radius:12px;padding:12px;">
              <div style="display:flex;justify-content:space-between;font-size:11px;">
                <span style="color:#64748B;">Security Deposit</span>
                <span style="font-weight:700;">$3,700.00</span>
              </div>
            </div>
          </div>
          <div style="background:#FFFBEB;border:1px solid #FDE68A;border-radius:12px;padding:12px;margin-bottom:16px;">
            <div style="font-size:11px;color:#92400E;font-weight:600;">⚠️ Please review all terms before signing</div>
          </div>
          <div style="border:2px dashed #CBD5E1;border-radius:16px;padding:20px;text-align:center;margin-bottom:16px;">
            <div style="font-size:11px;color:#94A3B8;margin-bottom:4px;">Sign here</div>
            <div style="font-family:cursive;font-size:20px;color:#3B82F6;font-style:italic;">John Doe</div>
          </div>
          <button style="width:100%;padding:14px;background:#10B981;color:#fff;border:none;border-radius:16px;font-weight:800;font-size:14px;cursor:pointer;margin-top:auto;">Sign & Submit Lease</button>
        </div>
      \`;

    case 'findora-rent-split':
      return \`
        <div style="background:#FFFFFF;color:#0F172A;border-radius:36px;padding:24px 20px;font-family:'Inter',sans-serif;height:100%;display:flex;flex-direction:column;">
          <div style="font-weight:700;font-size:16px;margin-bottom:16px;">💰 Split Rent</div>
          <div style="background:#F8FAFC;border:1px solid #E2E8F0;border-radius:20px;padding:18px;margin-bottom:16px;text-align:center;">
            <div style="font-size:11px;color:#64748B;">Total Rent</div>
            <div style="font-size:28px;font-weight:900;margin-top:4px;">$1,850</div>
            <div style="font-size:11px;color:#10B981;margin-top:4px;">Due Nov 1, 2026</div>
          </div>
          <div style="display:flex;flex-direction:column;gap:10px;">
            <div style="display:flex;align-items:center;gap:10px;background:#F8FAFC;border:1px solid #E2E8F0;border-radius:14px;padding:12px;">
              <div style="width:36px;height:36px;border-radius:50%;background:#3B82F6;color:#fff;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:13px;">J</div>
              <div style="flex:1;"><div style="font-size:13px;font-weight:700;">You</div><div style="font-size:10px;color:#64748B;">Primary tenant</div></div>
              <div style="text-align:right;">
                <div style="font-size:14px;font-weight:900;">$925</div>
                <div style="font-size:10px;color:#10B981;font-weight:600;">Paid ✓</div>
              </div>
            </div>
            <div style="display:flex;align-items:center;gap:10px;background:#F8FAFC;border:1px solid #E2E8F0;border-radius:14px;padding:12px;">
              <div style="width:36px;height:36px;border-radius:50%;background:#EC4899;color:#fff;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:13px;">S</div>
              <div style="flex:1;"><div style="font-size:13px;font-weight:700;">Sarah</div><div style="font-size:10px;color:#64748B;">Roommate</div></div>
              <div style="text-align:right;">
                <div style="font-size:14px;font-weight:900;">$925</div>
                <div style="font-size:10px;color:#F59E0B;font-weight:600;">Pending</div>
              </div>
            </div>
          </div>
          <button style="width:100%;padding:14px;background:#0F172A;color:#fff;border:none;border-radius:16px;font-weight:800;font-size:13px;cursor:pointer;margin-top:auto;">Send Reminder to Sarah</button>
        </div>
      \`;

    case 'findora-screening':
      return \`
        <div style="background:#FFFFFF;color:#0F172A;border-radius:36px;padding:24px 20px;font-family:'Inter',sans-serif;height:100%;display:flex;flex-direction:column;">
          <div style="font-weight:700;font-size:16px;margin-bottom:20px;">🔍 Tenant Screening</div>
          <div style="background:linear-gradient(135deg,#0F172A,#1E293B);border-radius:20px;padding:20px;color:#fff;margin-bottom:16px;">
            <div style="display:flex;align-items:center;gap:12px;margin-bottom:12px;">
              <div style="width:48px;height:48px;border-radius:50%;background:#3B82F6;display:flex;align-items:center;justify-content:center;font-weight:900;font-size:18px;">JD</div>
              <div><div style="font-size:15px;font-weight:800;">John Doe</div><div style="font-size:11px;color:#94A3B8;">Applied Oct 10, 2026</div></div>
            </div>
            <div style="display:flex;gap:8px;">
              <span style="background:rgba(16,185,129,0.2);color:#10B981;padding:4px 10px;border-radius:99px;font-size:10px;font-weight:700;">✓ ID Verified</span>
              <span style="background:rgba(59,130,246,0.2);color:#60A5FA;padding:4px 10px;border-radius:99px;font-size:10px;font-weight:700;">Credit: 750</span>
            </div>
          </div>
          <div style="display:flex;flex-direction:column;gap:8px;">
            <div style="display:flex;justify-content:space-between;background:#F8FAFC;border:1px solid #E2E8F0;border-radius:12px;padding:12px;">
              <span style="font-size:12px;color:#64748B;">Income</span>
              <span style="font-size:12px;font-weight:700;">$85,000/yr</span>
            </div>
            <div style="display:flex;justify-content:space-between;background:#F8FAFC;border:1px solid #E2E8F0;border-radius:12px;padding:12px;">
              <span style="font-size:12px;color:#64748B;">Employment</span>
              <span style="font-size:12px;font-weight:700;color:#10B981;">✓ Verified</span>
            </div>
            <div style="display:flex;justify-content:space-between;background:#F8FAFC;border:1px solid #E2E8F0;border-radius:12px;padding:12px;">
              <span style="font-size:12px;color:#64748B;">Background</span>
              <span style="font-size:12px;font-weight:700;color:#10B981;">✓ Clear</span>
            </div>
            <div style="display:flex;justify-content:space-between;background:#F8FAFC;border:1px solid #E2E8F0;border-radius:12px;padding:12px;">
              <span style="font-size:12px;color:#64748B;">References</span>
              <span style="font-size:12px;font-weight:700;">2/3 Received</span>
            </div>
          </div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:auto;">
            <button style="padding:14px;background:#EF4444;color:#fff;border:none;border-radius:14px;font-weight:800;font-size:13px;cursor:pointer;">Decline</button>
            <button style="padding:14px;background:#10B981;color:#fff;border:none;border-radius:14px;font-weight:800;font-size:13px;cursor:pointer;">Approve</button>
          </div>
        </div>
      \`;

    case 'findora-maintenance':
      return \`
        <div style="background:#FFFFFF;color:#0F172A;border-radius:36px;padding:24px 20px;font-family:'Inter',sans-serif;height:100%;display:flex;flex-direction:column;">
          <div style="font-weight:700;font-size:16px;margin-bottom:16px;">🔧 Maintenance</div>
          <div style="display:flex;flex-direction:column;gap:10px;">
            <div style="background:#FEF2F2;border:1px solid #FECACA;border-radius:14px;padding:14px;">
              <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">
                <span style="font-size:13px;font-weight:700;">Leaking Faucet</span>
                <span style="background:#EF4444;color:#fff;padding:2px 8px;border-radius:99px;font-size:9px;font-weight:700;">Urgent</span>
              </div>
              <div style="font-size:11px;color:#64748B;">Kitchen sink • Reported 2h ago</div>
            </div>
            <div style="background:#FFFBEB;border:1px solid #FDE68A;border-radius:14px;padding:14px;">
              <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">
                <span style="font-size:13px;font-weight:700;">AC Not Cooling</span>
                <span style="background:#F59E0B;color:#fff;padding:2px 8px;border-radius:99px;font-size:9px;font-weight:700;">In Progress</span>
              </div>
              <div style="font-size:11px;color:#64748B;">Bedroom • Technician arriving 3 PM</div>
            </div>
            <div style="background:#F0FDF4;border:1px solid #BBF7D0;border-radius:14px;padding:14px;">
              <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">
                <span style="font-size:13px;font-weight:700;">Light Fixture</span>
                <span style="background:#10B981;color:#fff;padding:2px 8px;border-radius:99px;font-size:9px;font-weight:700;">Resolved</span>
              </div>
              <div style="font-size:11px;color:#64748B;">Living room • Fixed Oct 8</div>
            </div>
          </div>
          <button style="width:100%;padding:14px;background:#0F172A;color:#fff;border:none;border-radius:16px;font-weight:800;font-size:14px;cursor:pointer;margin-top:auto;">+ New Request</button>
        </div>
      \`;

    case 'findora-payment-history':
      return \`
        <div style="background:#FFFFFF;color:#0F172A;border-radius:36px;padding:24px 20px;font-family:'Inter',sans-serif;height:100%;display:flex;flex-direction:column;">
          <div style="font-weight:700;font-size:16px;margin-bottom:16px;">💳 Payment History</div>
          <div style="display:flex;gap:6px;margin-bottom:16px;">
            <span style="background:#0F172A;color:#fff;padding:6px 14px;border-radius:99px;font-size:11px;font-weight:700;">All</span>
            <span style="background:#F1F5F9;color:#64748B;padding:6px 14px;border-radius:99px;font-size:11px;font-weight:600;">Paid</span>
            <span style="background:#F1F5F9;color:#64748B;padding:6px 14px;border-radius:99px;font-size:11px;font-weight:600;">Pending</span>
          </div>
          <div style="display:flex;flex-direction:column;gap:8px;">
            <div style="display:flex;justify-content:space-between;align-items:center;padding:12px;background:#F8FAFC;border:1px solid #E2E8F0;border-radius:12px;">
              <div><div style="font-size:13px;font-weight:700;">October Rent</div><div style="font-size:10px;color:#64748B;">Oct 1, 2026</div></div>
              <div style="text-align:right;"><div style="font-size:13px;font-weight:800;">$1,850</div><div style="font-size:10px;color:#10B981;font-weight:600;">✓ Paid</div></div>
            </div>
            <div style="display:flex;justify-content:space-between;align-items:center;padding:12px;background:#F8FAFC;border:1px solid #E2E8F0;border-radius:12px;">
              <div><div style="font-size:13px;font-weight:700;">September Rent</div><div style="font-size:10px;color:#64748B;">Sep 1, 2026</div></div>
              <div style="text-align:right;"><div style="font-size:13px;font-weight:800;">$1,850</div><div style="font-size:10px;color:#10B981;font-weight:600;">✓ Paid</div></div>
            </div>
            <div style="display:flex;justify-content:space-between;align-items:center;padding:12px;background:#FFFBEB;border:1px solid #FDE68A;border-radius:12px;">
              <div><div style="font-size:13px;font-weight:700;">November Rent</div><div style="font-size:10px;color:#64748B;">Nov 1, 2026</div></div>
              <div style="text-align:right;"><div style="font-size:13px;font-weight:800;">$1,850</div><div style="font-size:10px;color:#F59E0B;font-weight:600;">Upcoming</div></div>
            </div>
          </div>
        </div>
      \`;

    case 'findora-virtual-tour':
      return \`
        <div style="background:#09090B;color:#fff;border-radius:36px;padding:0;font-family:'Inter',sans-serif;height:100%;display:flex;flex-direction:column;overflow:hidden;position:relative;">
          <div style="flex:1;background:linear-gradient(135deg,#1E293B 0%,#334155 50%,#475569 100%);position:relative;">
            <div style="position:absolute;top:16px;left:16px;background:rgba(0,0,0,0.5);backdrop-filter:blur(10px);padding:8px 14px;border-radius:12px;font-size:11px;font-weight:700;">🏠 Virtual Tour</div>
            <div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:60px;height:60px;border-radius:50%;background:rgba(255,255,255,0.2);backdrop-filter:blur(10px);display:flex;align-items:center;justify-content:center;font-size:24px;cursor:pointer;border:2px solid rgba(255,255,255,0.3);">▶</div>
            <div style="position:absolute;bottom:60px;left:16px;right:16px;display:flex;gap:8px;overflow-x:auto;">
              <div style="min-width:56px;height:56px;border-radius:10px;background:#64748B;border:2px solid #fff;"></div>
              <div style="min-width:56px;height:56px;border-radius:10px;background:#475569;opacity:0.7;"></div>
              <div style="min-width:56px;height:56px;border-radius:10px;background:#475569;opacity:0.7;"></div>
              <div style="min-width:56px;height:56px;border-radius:10px;background:#475569;opacity:0.7;"></div>
            </div>
          </div>
          <div style="background:#0F172A;padding:16px 20px;display:flex;justify-content:space-around;">
            <div style="font-size:11px;font-weight:700;color:#fff;display:flex;flex-direction:column;align-items:center;gap:4px;"><span>🛋️</span>Living</div>
            <div style="font-size:11px;font-weight:600;color:#64748B;display:flex;flex-direction:column;align-items:center;gap:4px;"><span>🛏️</span>Bedroom</div>
            <div style="font-size:11px;font-weight:600;color:#64748B;display:flex;flex-direction:column;align-items:center;gap:4px;"><span>🍳</span>Kitchen</div>
            <div style="font-size:11px;font-weight:600;color:#64748B;display:flex;flex-direction:column;align-items:center;gap:4px;"><span>🚿</span>Bath</div>
          </div>
        </div>
      \`;

    case 'findora-neighborhood':
      return \`
        <div style="background:#FFFFFF;color:#0F172A;border-radius:36px;padding:24px 20px;font-family:'Inter',sans-serif;height:100%;display:flex;flex-direction:column;">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;">
            <span style="cursor:pointer;">←</span>
            <span style="font-weight:700;font-size:15px;">Neighborhood</span>
            <span>📍</span>
          </div>
          <div style="font-size:13px;font-weight:700;margin-bottom:6px;">Walk Score</div>
          <div style="display:flex;gap:10px;margin-bottom:16px;">
            <div style="flex:1;background:#F0FDF4;border-radius:14px;padding:12px;text-align:center;">
              <div style="font-size:22px;font-weight:900;color:#059669;">92</div>
              <div style="font-size:9px;color:#64748B;margin-top:2px;">Walk</div>
            </div>
            <div style="flex:1;background:#EFF6FF;border-radius:14px;padding:12px;text-align:center;">
              <div style="font-size:22px;font-weight:900;color:#3B82F6;">87</div>
              <div style="font-size:9px;color:#64748B;margin-top:2px;">Transit</div>
            </div>
            <div style="flex:1;background:#FEF3C7;border-radius:14px;padding:12px;text-align:center;">
              <div style="font-size:22px;font-weight:900;color:#D97706;">78</div>
              <div style="font-size:9px;color:#64748B;margin-top:2px;">Bike</div>
            </div>
          </div>
          <div style="font-size:13px;font-weight:700;margin-bottom:8px;">Nearby</div>
          <div style="display:flex;flex-direction:column;gap:6px;">
            <div style="display:flex;align-items:center;gap:8px;padding:8px 0;border-bottom:1px solid #F1F5F9;">
              <span style="font-size:16px;">🏪</span><span style="font-size:12px;font-weight:600;flex:1;">Grocery Store</span><span style="font-size:11px;color:#64748B;">0.2 mi</span>
            </div>
            <div style="display:flex;align-items:center;gap:8px;padding:8px 0;border-bottom:1px solid #F1F5F9;">
              <span style="font-size:16px;">🏥</span><span style="font-size:12px;font-weight:600;flex:1;">Medical Center</span><span style="font-size:11px;color:#64748B;">0.5 mi</span>
            </div>
            <div style="display:flex;align-items:center;gap:8px;padding:8px 0;border-bottom:1px solid #F1F5F9;">
              <span style="font-size:16px;">🏫</span><span style="font-size:12px;font-weight:600;flex:1;">Elementary School</span><span style="font-size:11px;color:#64748B;">0.3 mi</span>
            </div>
            <div style="display:flex;align-items:center;gap:8px;padding:8px 0;">
              <span style="font-size:16px;">🚇</span><span style="font-size:12px;font-weight:600;flex:1;">Metro Station</span><span style="font-size:11px;color:#64748B;">0.1 mi</span>
            </div>
          </div>
        </div>
      \`;

    case 'findora-documents':
      return \`
        <div style="background:#FFFFFF;color:#0F172A;border-radius:36px;padding:24px 20px;font-family:'Inter',sans-serif;height:100%;display:flex;flex-direction:column;">
          <div style="font-weight:700;font-size:16px;margin-bottom:16px;">📁 Documents</div>
          <div style="display:flex;flex-direction:column;gap:8px;">
            <div style="display:flex;align-items:center;gap:10px;background:#F8FAFC;border:1px solid #E2E8F0;border-radius:14px;padding:14px;">
              <div style="width:36px;height:36px;border-radius:10px;background:#EFF6FF;display:flex;align-items:center;justify-content:center;font-size:16px;">📄</div>
              <div style="flex:1;"><div style="font-size:13px;font-weight:700;">Lease Agreement</div><div style="font-size:10px;color:#64748B;">Signed Oct 1, 2026 • 2.4 MB</div></div>
              <span style="font-size:14px;cursor:pointer;">📥</span>
            </div>
            <div style="display:flex;align-items:center;gap:10px;background:#F8FAFC;border:1px solid #E2E8F0;border-radius:14px;padding:14px;">
              <div style="width:36px;height:36px;border-radius:10px;background:#F0FDF4;display:flex;align-items:center;justify-content:center;font-size:16px;">🆔</div>
              <div style="flex:1;"><div style="font-size:13px;font-weight:700;">ID Verification</div><div style="font-size:10px;color:#64748B;">Uploaded Sep 28 • 1.1 MB</div></div>
              <span style="font-size:14px;cursor:pointer;">📥</span>
            </div>
            <div style="display:flex;align-items:center;gap:10px;background:#F8FAFC;border:1px solid #E2E8F0;border-radius:14px;padding:14px;">
              <div style="width:36px;height:36px;border-radius:10px;background:#FEF3C7;display:flex;align-items:center;justify-content:center;font-size:16px;">🏠</div>
              <div style="flex:1;"><div style="font-size:13px;font-weight:700;">Property Inspection</div><div style="font-size:10px;color:#64748B;">Oct 5, 2026 • 4.7 MB</div></div>
              <span style="font-size:14px;cursor:pointer;">📥</span>
            </div>
          </div>
          <button style="width:100%;padding:14px;background:#0F172A;color:#fff;border:none;border-radius:16px;font-weight:800;font-size:13px;cursor:pointer;margin-top:auto;">+ Upload Document</button>
        </div>
      \`;

    // ══════════════════════════════════════════════
    // GOBUS TRANSPORT — Key screens
    // ══════════════════════════════════════════════
    case 'gobus-splash':
      return \`
        <div style="background:#F97316;color:#fff;border-radius:36px;padding:24px 20px;font-family:'Inter',sans-serif;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;">
          <div style="font-size:64px;margin-bottom:16px;">🚌</div>
          <div style="font-size:32px;font-weight:900;letter-spacing:-0.02em;">GoBus</div>
          <div style="font-size:12px;color:rgba(255,255,255,0.8);margin-top:8px;">Quick and Reliable Bus Tracking</div>
          <div style="display:flex;gap:6px;margin-top:24px;">
            <div style="width:24px;height:4px;border-radius:99px;background:#fff;"></div>
            <div style="width:8px;height:4px;border-radius:99px;background:rgba(255,255,255,0.4);"></div>
            <div style="width:8px;height:4px;border-radius:99px;background:rgba(255,255,255,0.4);"></div>
          </div>
        </div>
      \`;

    case 'gobus-onboard-tracking':
      return \`
        <div style="background:#FFF;color:#0F172A;border-radius:36px;padding:24px 20px;font-family:'Inter',sans-serif;height:100%;display:flex;flex-direction:column;justify-content:space-between;">
          <div>
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:20px;">
              <span style="cursor:pointer;">←</span>
              <span style="font-weight:700;font-size:15px;">🚌 Map</span>
              <span></span>
            </div>
            <div style="text-align:center;padding:24px 0;">
              <div style="font-size:64px;margin-bottom:16px;">📍</div>
              <div style="font-size:20px;font-weight:900;margin-bottom:8px;">Quick and Reliable</div>
              <div style="font-size:20px;font-weight:900;color:#F97316;">Bus Tracking</div>
              <div style="font-size:12px;color:#64748B;margin-top:10px;line-height:1.5;">Use our real-time tracking feature to see exactly where your bus is</div>
            </div>
          </div>
          <div style="display:flex;justify-content:center;gap:6px;margin-bottom:16px;">
            <div style="width:8px;height:8px;border-radius:50%;background:#F97316;"></div>
            <div style="width:8px;height:8px;border-radius:50%;background:#E2E8F0;"></div>
            <div style="width:8px;height:8px;border-radius:50%;background:#E2E8F0;"></div>
          </div>
          <button style="width:60px;height:60px;border-radius:50%;background:#F97316;color:#fff;border:none;font-size:24px;cursor:pointer;margin:0 auto;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 16px rgba(249,115,22,0.3);">›</button>
        </div>
      \`;

    case 'gobus-home-search':
      return \`
        <div style="background:#FFF7ED;color:#0F172A;border-radius:36px;padding:24px 20px;font-family:'Inter',sans-serif;height:100%;display:flex;flex-direction:column;">
          <div style="background:#F97316;border-radius:20px;padding:16px;margin-bottom:16px;color:#fff;">
            <div style="font-size:14px;font-weight:800;margin-bottom:10px;">📍 Route</div>
            <div style="background:rgba(255,255,255,0.2);backdrop-filter:blur(10px);border-radius:12px;padding:10px 12px;margin-bottom:6px;">
              <div style="font-size:10px;color:rgba(255,255,255,0.7);">From</div>
              <div style="font-size:12px;font-weight:700;">Current Location</div>
            </div>
            <div style="background:rgba(255,255,255,0.2);backdrop-filter:blur(10px);border-radius:12px;padding:10px 12px;margin-bottom:10px;">
              <div style="font-size:10px;color:rgba(255,255,255,0.7);">Destination</div>
              <div style="font-size:12px;font-weight:700;">Enter destination</div>
            </div>
            <button style="width:100%;padding:10px;background:#fff;color:#F97316;border:none;border-radius:12px;font-weight:800;font-size:13px;cursor:pointer;">🔍 Search Routes</button>
          </div>
          <div style="display:flex;gap:8px;margin-bottom:16px;">
            <button style="flex:1;padding:10px;background:#FFF;border:1px solid #FDBA74;border-radius:12px;font-size:11px;font-weight:700;color:#0F172A;cursor:pointer;">🎫 Buy Ticket</button>
            <button style="flex:1;padding:10px;background:#FFF;border:1px solid #FDBA74;border-radius:12px;font-size:11px;font-weight:700;color:#0F172A;cursor:pointer;">📱 Tap to pay</button>
          </div>
          <div style="font-size:13px;font-weight:700;margin-bottom:8px;">Recent search</div>
          <div style="display:flex;flex-direction:column;gap:6px;">
            <div style="display:flex;align-items:center;gap:8px;padding:8px 0;border-bottom:1px solid #FED7AA;">
              <span>🕒</span><span style="font-size:12px;flex:1;">Rajapratapnagar → Mitragar Road</span><span style="color:#94A3B8;">›</span>
            </div>
            <div style="display:flex;align-items:center;gap:8px;padding:8px 0;">
              <span>🕒</span><span style="font-size:12px;flex:1;">Samungli → Brewery Road</span><span style="color:#94A3B8;">›</span>
            </div>
          </div>
        </div>
      \`;

    case 'gobus-route-results':
      return \`
        <div style="background:#FFF;color:#0F172A;border-radius:36px;padding:24px 20px;font-family:'Inter',sans-serif;height:100%;display:flex;flex-direction:column;">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;">
            <span style="cursor:pointer;">←</span>
            <span style="font-weight:700;font-size:15px;">Routes</span>
            <span></span>
          </div>
          <div style="background:#F97316;border-radius:16px;padding:14px;margin-bottom:10px;color:#fff;">
            <div style="display:flex;justify-content:space-between;align-items:center;">
              <span style="font-size:12px;font-weight:700;">Kathmandu</span>
              <span style="font-size:12px;font-weight:700;">Biratnagar</span>
            </div>
            <div style="font-size:10px;color:rgba(255,255,255,0.8);margin-top:4px;">Buy Now</div>
          </div>
          <div style="font-size:12px;font-weight:700;margin-bottom:8px;">Recommended Routes</div>
          <div style="display:flex;flex-direction:column;gap:8px;">
            <div style="background:#FFF7ED;border:1px solid #FDBA74;border-radius:14px;padding:12px;">
              <div style="display:flex;justify-content:space-between;margin-bottom:6px;">
                <span style="font-size:12px;font-weight:700;">Bus No. 37</span>
                <span style="font-size:12px;font-weight:800;color:#F97316;">Rs. 350</span>
              </div>
              <div style="font-size:10px;color:#64748B;">🕐 6:00 AM • 7 stops along the way</div>
            </div>
            <div style="background:#FFF7ED;border:1px solid #FDBA74;border-radius:14px;padding:12px;">
              <div style="display:flex;justify-content:space-between;margin-bottom:6px;">
                <span style="font-size:12px;font-weight:700;">Bus No. 42</span>
                <span style="font-size:12px;font-weight:800;color:#F97316;">Rs. 400</span>
              </div>
              <div style="font-size:10px;color:#64748B;">🕐 7:30 AM • Express 3 stops</div>
            </div>
            <div style="background:#FFF7ED;border:1px solid #FDBA74;border-radius:14px;padding:12px;">
              <div style="display:flex;justify-content:space-between;margin-bottom:6px;">
                <span style="font-size:12px;font-weight:700;">Bus No. 51</span>
                <span style="font-size:12px;font-weight:800;color:#F97316;">Rs. 300</span>
              </div>
              <div style="font-size:10px;color:#64748B;">🕐 9:00 AM • 10 stops along the way</div>
            </div>
          </div>
        </div>
      \`;

    case 'gobus-live-map':
      return \`
        <div style="background:#E8F0E8;border-radius:36px;padding:0;font-family:'Inter',sans-serif;height:100%;display:flex;flex-direction:column;overflow:hidden;position:relative;">
          <div style="flex:1;background:linear-gradient(180deg,#D4E8D4 0%,#C8DCC8 100%);position:relative;">
            <div style="position:absolute;top:20%;left:30%;font-size:24px;transform:rotate(-15deg);">🚌</div>
            <div style="position:absolute;top:40%;left:50%;width:60px;height:2px;background:#F97316;transform:rotate(30deg);"></div>
            <div style="position:absolute;top:60%;left:40%;width:8px;height:8px;border-radius:50%;background:#EF4444;border:2px solid #fff;"></div>
            <div style="position:absolute;top:30%;left:70%;width:8px;height:8px;border-radius:50%;background:#3B82F6;border:2px solid #fff;"></div>
          </div>
          <div style="background:#fff;padding:16px 20px;border-radius:24px 24px 0 0;box-shadow:0 -4px 20px rgba(0,0,0,0.05);">
            <div style="display:flex;align-items:center;gap:10px;margin-bottom:12px;">
              <div style="font-size:24px;">🚌</div>
              <div>
                <div style="font-size:14px;font-weight:800;">Bus No. 37</div>
                <div style="font-size:11px;color:#64748B;">Route No. 101 • Next Stop: 3 min</div>
              </div>
            </div>
            <div style="display:flex;gap:8px;">
              <button style="flex:1;padding:10px;background:#F97316;color:#fff;border:none;border-radius:12px;font-weight:700;font-size:11px;cursor:pointer;">Track Bus</button>
              <button style="flex:1;padding:10px;background:#FFF7ED;color:#F97316;border:1px solid #FDBA74;border-radius:12px;font-weight:700;font-size:11px;cursor:pointer;">Buy Ticket</button>
            </div>
          </div>
        </div>
      \`;

    case 'gobus-notifications':
      return \`
        <div style="background:#FFF;color:#0F172A;border-radius:36px;padding:24px 20px;font-family:'Inter',sans-serif;height:100%;display:flex;flex-direction:column;">
          <div style="font-weight:700;font-size:16px;margin-bottom:16px;">🔔 Notifications</div>
          <div style="display:flex;flex-direction:column;gap:8px;">
            <div style="background:#FFF7ED;border-left:3px solid #F97316;border-radius:0 12px 12px 0;padding:12px 14px;">
              <div style="font-size:12px;font-weight:700;margin-bottom:4px;">Bus arriving in 5 min</div>
              <div style="font-size:10px;color:#64748B;">Bus #37 at your current stop. Be ready!</div>
              <div style="font-size:9px;color:#94A3B8;margin-top:4px;">2 min ago</div>
            </div>
            <div style="background:#FEF2F2;border-left:3px solid #EF4444;border-radius:0 12px 12px 0;padding:12px 14px;">
              <div style="font-size:12px;font-weight:700;margin-bottom:4px;">Bus route 101 experiencing delay</div>
              <div style="font-size:10px;color:#64748B;">Due to road construction. Expect 15 min delay.</div>
              <div style="font-size:9px;color:#94A3B8;margin-top:4px;">15 min ago</div>
            </div>
            <div style="background:#F0FDF4;border-left:3px solid #10B981;border-radius:0 12px 12px 0;padding:12px 14px;">
              <div style="font-size:12px;font-weight:700;margin-bottom:4px;">Payment successful</div>
              <div style="font-size:10px;color:#64748B;">Monthly pass activated. Valid until Nov 10.</div>
              <div style="font-size:9px;color:#94A3B8;margin-top:4px;">1 hr ago</div>
            </div>
          </div>
        </div>
      \`;

    case 'gobus-payment-success':
      return \`
        <div style="background:#FFF;color:#0F172A;border-radius:36px;padding:24px 20px;font-family:'Inter',sans-serif;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;">
          <div style="width:80px;height:80px;border-radius:50%;background:#F0FDF4;display:flex;align-items:center;justify-content:center;font-size:36px;margin-bottom:20px;border:3px solid #BBF7D0;">✅</div>
          <div style="font-size:22px;font-weight:900;margin-bottom:8px;">Payment Successful!</div>
          <div style="font-size:13px;color:#64748B;margin-bottom:24px;">Your ticket has been booked</div>
          <div style="background:#FFF7ED;border:1px solid #FDBA74;border-radius:16px;padding:16px;width:100%;margin-bottom:20px;">
            <div style="display:flex;justify-content:space-between;font-size:11px;margin-bottom:6px;">
              <span style="color:#64748B;">Route</span><span style="font-weight:700;">Kathmandu → Biratnagar</span>
            </div>
            <div style="display:flex;justify-content:space-between;font-size:11px;margin-bottom:6px;">
              <span style="color:#64748B;">Bus</span><span style="font-weight:700;">Bus No. 37</span>
            </div>
            <div style="display:flex;justify-content:space-between;font-size:11px;">
              <span style="color:#64748B;">Amount</span><span style="font-weight:800;color:#F97316;">Rs. 350</span>
            </div>
          </div>
          <button style="width:100%;padding:14px;background:#F97316;color:#fff;border:none;border-radius:16px;font-weight:800;font-size:14px;cursor:pointer;margin-bottom:8px;">Continue Tracking Bus</button>
          <button style="width:100%;padding:14px;background:transparent;color:#F97316;border:1px solid #FDBA74;border-radius:16px;font-weight:700;font-size:13px;cursor:pointer;">Download Ticket</button>
        </div>
      \`;

    // ══════════════════════════════════════════════
    // MOONIE SLEEP/WELLNESS SCREENS
    // ══════════════════════════════════════════════
    case 'moonie-splash':
      return \`
        <div style="background:linear-gradient(180deg,#1E1B4B 0%,#312E81 40%,#4338CA 100%);color:#fff;border-radius:36px;padding:24px 20px;font-family:'Inter',sans-serif;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;position:relative;overflow:hidden;">
          <div style="position:absolute;top:15%;left:50%;transform:translateX(-50%);width:80px;height:80px;border-radius:50%;background:radial-gradient(circle,#FEF3C7 20%,#FBBF24 60%,transparent 70%);box-shadow:0 0 40px rgba(251,191,36,0.3);"></div>
          <div style="font-size:36px;font-weight:900;letter-spacing:0.05em;margin-top:120px;font-style:italic;">Moonie</div>
          <div style="font-size:11px;color:rgba(255,255,255,0.6);margin-top:12px;">🎧 Better with headphones</div>
        </div>
      \`;

    case 'moonie-name-input':
      return \`
        <div style="background:linear-gradient(180deg,#1E1B4B 0%,#312E81 100%);color:#fff;border-radius:36px;padding:24px 20px;font-family:'Inter',sans-serif;height:100%;display:flex;flex-direction:column;justify-content:space-between;">
          <div>
            <div style="font-size:24px;font-weight:900;margin-bottom:8px;margin-top:20px;">Welcome to Moonie!</div>
            <div style="font-size:13px;color:#A5B4FC;margin-bottom:24px;">What do your friends call you?</div>
            <div style="background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.2);border-radius:16px;padding:14px 16px;margin-bottom:24px;">
              <div style="font-size:16px;font-weight:600;">Lizzie<span style="animation:blink 1s infinite;color:#C084FC;">|</span></div>
            </div>
            <button style="width:100%;padding:14px;background:linear-gradient(135deg,#A855F7,#EC4899);color:#fff;border:none;border-radius:16px;font-weight:800;font-size:14px;cursor:pointer;">Continue</button>
          </div>
          <div style="background:#1E1B4B;border-radius:16px;padding:8px;display:grid;grid-template-columns:repeat(10,1fr);gap:4px;">
            <div style="background:#312E81;border-radius:6px;padding:6px 2px;font-size:10px;text-align:center;color:#A5B4FC;">q</div>
            <div style="background:#312E81;border-radius:6px;padding:6px 2px;font-size:10px;text-align:center;color:#A5B4FC;">w</div>
            <div style="background:#312E81;border-radius:6px;padding:6px 2px;font-size:10px;text-align:center;color:#A5B4FC;">e</div>
            <div style="background:#312E81;border-radius:6px;padding:6px 2px;font-size:10px;text-align:center;color:#A5B4FC;">r</div>
            <div style="background:#312E81;border-radius:6px;padding:6px 2px;font-size:10px;text-align:center;color:#A5B4FC;">t</div>
            <div style="background:#312E81;border-radius:6px;padding:6px 2px;font-size:10px;text-align:center;color:#A5B4FC;">y</div>
            <div style="background:#312E81;border-radius:6px;padding:6px 2px;font-size:10px;text-align:center;color:#A5B4FC;">u</div>
            <div style="background:#312E81;border-radius:6px;padding:6px 2px;font-size:10px;text-align:center;color:#A5B4FC;">i</div>
            <div style="background:#312E81;border-radius:6px;padding:6px 2px;font-size:10px;text-align:center;color:#A5B4FC;">o</div>
            <div style="background:#312E81;border-radius:6px;padding:6px 2px;font-size:10px;text-align:center;color:#A5B4FC;">p</div>
          </div>
        </div>
      \`;

    case 'moonie-interests':
      return \`
        <div style="background:linear-gradient(180deg,#1E1B4B 0%,#312E81 100%);color:#fff;border-radius:36px;padding:24px 20px;font-family:'Inter',sans-serif;height:100%;display:flex;flex-direction:column;justify-content:space-between;">
          <div>
            <div style="font-size:22px;font-weight:900;margin-bottom:8px;margin-top:16px;line-height:1.3;">What interests you most about Moonie?</div>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-top:24px;">
              <div style="background:rgba(168,85,247,0.2);border:2px solid #A855F7;border-radius:20px;padding:20px;text-align:center;cursor:pointer;">
                <div style="font-size:28px;margin-bottom:8px;">🌙</div>
                <div style="font-size:12px;font-weight:700;">Sleep tracking</div>
              </div>
              <div style="background:rgba(236,72,153,0.2);border:2px solid #EC4899;border-radius:20px;padding:20px;text-align:center;cursor:pointer;">
                <div style="font-size:28px;margin-bottom:8px;">🎵</div>
                <div style="font-size:12px;font-weight:700;">Calm sounds</div>
              </div>
              <div style="background:rgba(99,102,241,0.15);border:1px solid rgba(99,102,241,0.3);border-radius:20px;padding:20px;text-align:center;cursor:pointer;">
                <div style="font-size:28px;margin-bottom:8px;">🧘</div>
                <div style="font-size:12px;font-weight:700;">Meditations</div>
              </div>
              <div style="background:rgba(99,102,241,0.15);border:1px solid rgba(99,102,241,0.3);border-radius:20px;padding:20px;text-align:center;cursor:pointer;">
                <div style="font-size:28px;margin-bottom:8px;">🎨</div>
                <div style="font-size:12px;font-weight:700;">Visual art</div>
              </div>
            </div>
          </div>
          <button style="width:100%;padding:14px;background:linear-gradient(135deg,#A855F7,#EC4899);color:#fff;border:none;border-radius:16px;font-weight:800;font-size:14px;cursor:pointer;">Continue</button>
        </div>
      \`;

    case 'moonie-personalize':
      return \`
        <div style="background:linear-gradient(180deg,#1E1B4B 0%,#312E81 100%);color:#fff;border-radius:36px;padding:24px 20px;font-family:'Inter',sans-serif;height:100%;display:flex;flex-direction:column;justify-content:space-between;">
          <div>
            <div style="font-size:20px;font-weight:900;line-height:1.3;margin-top:16px;">Lizzie, let's personalise your experience</div>
            <div style="font-size:12px;color:#A5B4FC;margin-top:6px;margin-bottom:20px;">What brings you to Moonie?</div>
            <div style="display:flex;flex-direction:column;gap:8px;">
              <div style="display:flex;align-items:center;gap:10px;background:rgba(168,85,247,0.2);border:1px solid #A855F7;border-radius:14px;padding:12px 14px;cursor:pointer;">
                <span style="font-size:16px;">😴</span>
                <span style="font-size:13px;font-weight:600;flex:1;">Trouble falling asleep</span>
                <span style="color:#A855F7;">✓</span>
              </div>
              <div style="display:flex;align-items:center;gap:10px;background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.15);border-radius:14px;padding:12px 14px;cursor:pointer;">
                <span style="font-size:16px;">🧠</span>
                <span style="font-size:13px;font-weight:600;">Calming a busy mind</span>
              </div>
              <div style="display:flex;align-items:center;gap:10px;background:rgba(168,85,247,0.2);border:1px solid #A855F7;border-radius:14px;padding:12px 14px;cursor:pointer;">
                <span style="font-size:16px;">⚡</span>
                <span style="font-size:13px;font-weight:600;flex:1;">Reduce stress or anxiety</span>
                <span style="color:#A855F7;">✓</span>
              </div>
              <div style="display:flex;align-items:center;gap:10px;background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.15);border-radius:14px;padding:12px 14px;cursor:pointer;">
                <span style="font-size:16px;">🌟</span>
                <span style="font-size:13px;font-weight:600;">Increase happiness</span>
              </div>
              <div style="display:flex;align-items:center;gap:10px;background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.15);border-radius:14px;padding:12px 14px;cursor:pointer;">
                <span style="font-size:16px;">❤️</span>
                <span style="font-size:13px;font-weight:600;">Create a healthy habit</span>
              </div>
            </div>
          </div>
          <button style="width:100%;padding:14px;background:linear-gradient(135deg,#A855F7,#EC4899);color:#fff;border:none;border-radius:16px;font-weight:800;font-size:14px;cursor:pointer;">Continue</button>
        </div>
      \`;

    case 'moonie-time-picker':
      return \`
        <div style="background:linear-gradient(180deg,#1E1B4B 0%,#312E81 100%);color:#fff;border-radius:36px;padding:24px 20px;font-family:'Inter',sans-serif;height:100%;display:flex;flex-direction:column;justify-content:space-between;">
          <div>
            <div style="font-size:22px;font-weight:900;line-height:1.3;margin-top:16px;">What time do you want to try sleep sound?</div>
            <div style="margin:32px 0;text-align:center;">
              <div style="font-size:16px;color:rgba(255,255,255,0.3);margin-bottom:8px;">10 : 00  am</div>
              <div style="background:rgba(168,85,247,0.3);border:1px solid #A855F7;border-radius:14px;padding:14px;font-size:24px;font-weight:900;margin-bottom:8px;">11 : 00  pm</div>
              <div style="font-size:16px;color:rgba(255,255,255,0.3);">12 : 00</div>
            </div>
            <div style="text-align:center;font-size:11px;color:#A5B4FC;line-height:1.6;">People who set reminders fall asleep <span style="font-weight:800;color:#fff;">83% faster</span></div>
          </div>
          <div>
            <button style="width:100%;padding:14px;background:linear-gradient(135deg,#A855F7,#EC4899);color:#fff;border:none;border-radius:16px;font-weight:800;font-size:14px;cursor:pointer;margin-bottom:8px;">Save</button>
            <button style="width:100%;padding:10px;background:transparent;color:#A5B4FC;border:none;font-weight:600;font-size:12px;cursor:pointer;">No, I'll Miss Out</button>
          </div>
        </div>
      \`;

    case 'moonie-paywall':
      return \`
        <div style="background:linear-gradient(180deg,#1E1B4B 0%,#312E81 100%);color:#fff;border-radius:36px;padding:24px 20px;font-family:'Inter',sans-serif;height:100%;display:flex;flex-direction:column;justify-content:space-between;position:relative;">
          <div style="position:absolute;top:12px;right:16px;font-size:14px;cursor:pointer;color:#A5B4FC;">✕</div>
          <div>
            <div style="display:flex;align-items:center;gap:6px;margin-bottom:16px;">
              <span style="font-size:15px;font-weight:800;font-style:italic;">Moonie</span>
              <span style="background:linear-gradient(135deg,#A855F7,#EC4899);padding:2px 8px;border-radius:6px;font-size:9px;font-weight:800;">PLUS</span>
            </div>
            <div style="text-align:center;margin-bottom:16px;">
              <div style="font-size:48px;margin-bottom:10px;">🦊</div>
              <div style="font-size:12px;color:rgba(255,255,255,0.5);font-style:italic;">sleeping peacefully...</div>
            </div>
            <div style="display:flex;justify-content:center;margin-bottom:8px;">
              <span style="color:#FBBF24;font-size:16px;">★★★★★</span>
            </div>
            <div style="font-size:20px;font-weight:900;text-align:center;margin-bottom:8px;">Leave stress behind</div>
            <div style="font-size:11px;color:#A5B4FC;text-align:center;line-height:1.5;margin-bottom:16px;">As a really stressful life sometimes it is hard to fall asleep, and the sounds of nature in app brings me to nature sleep</div>
            <div style="text-align:center;font-size:10px;color:#71717A;margin-bottom:16px;">by Annie</div>
          </div>
          <div>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:12px;">
              <div style="background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.15);border-radius:14px;padding:12px;text-align:center;">
                <div style="font-size:11px;color:#A5B4FC;">Monthly</div>
                <div style="font-size:18px;font-weight:900;margin-top:4px;">2.99 $</div>
              </div>
              <div style="background:rgba(168,85,247,0.2);border:2px solid #A855F7;border-radius:14px;padding:12px;text-align:center;position:relative;">
                <div style="position:absolute;top:-8px;right:8px;background:#EC4899;color:#fff;padding:2px 6px;border-radius:6px;font-size:8px;font-weight:800;">SAVE 81%</div>
                <div style="font-size:11px;color:#A5B4FC;">Yearly</div>
                <div style="font-size:18px;font-weight:900;margin-top:4px;">19.99 $</div>
                <div style="font-size:9px;color:#A5B4FC;">First 7 days free</div>
              </div>
            </div>
            <button style="width:100%;padding:14px;background:linear-gradient(135deg,#A855F7,#EC4899);color:#fff;border:none;border-radius:16px;font-weight:800;font-size:14px;cursor:pointer;">Try free and subscribe</button>
          </div>
        </div>
      \`;

    // ══════════════════════════════════════════════
    // SECURITY SCREENS
    // ══════════════════════════════════════════════
    case 'dark-curl-login':
      return \`
        <div style="background:#1E293B;color:#fff;border-radius:36px;padding:24px 20px;font-family:'Inter',sans-serif;height:100%;display:flex;flex-direction:column;justify-content:center;position:relative;overflow:hidden;">
          <div style="position:absolute;bottom:0;right:0;width:60px;height:60px;background:linear-gradient(135deg,#3B82F6,#60A5FA);clip-path:polygon(100% 0, 100% 100%, 0 100%);"></div>
          <div style="text-align:center;margin-bottom:32px;">
            <div style="font-size:48px;margin-bottom:12px;color:#60A5FA;filter:drop-shadow(0 4px 12px rgba(96,165,250,0.3));">🐦</div>
          </div>
          <div style="display:flex;flex-direction:column;gap:12px;margin-bottom:24px;">
            <div style="display:flex;align-items:center;gap:10px;background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.1);border-radius:12px;padding:14px 16px;">
              <span style="font-size:14px;color:#64748B;">👤</span>
              <span style="font-size:13px;color:#94A3B8;">username</span>
            </div>
            <div style="display:flex;align-items:center;gap:10px;background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.1);border-radius:12px;padding:14px 16px;">
              <span style="font-size:14px;color:#64748B;">🔒</span>
              <span style="font-size:13px;color:#94A3B8;">password</span>
            </div>
          </div>
          <button style="width:100%;padding:14px;background:#3B82F6;color:#fff;border:none;border-radius:12px;font-weight:800;font-size:14px;cursor:pointer;letter-spacing:0.05em;text-transform:uppercase;margin-bottom:16px;">SIGN IN</button>
          <div style="text-align:center;font-size:12px;color:#94A3B8;">Not a member? <span style="color:#60A5FA;font-weight:700;cursor:pointer;">Sign up now</span></div>
        </div>
      \`;

    case 'otp-bottom-sheet':
      return \`
        <div style="background:#09090B;color:#fff;border-radius:36px;padding:24px 20px;font-family:'Inter',sans-serif;height:100%;display:flex;flex-direction:column;justify-content:flex-end;position:relative;">
          <div style="position:absolute;top:0;left:0;right:0;bottom:30%;background:rgba(0,0,0,0.6);border-radius:36px 36px 0 0;"></div>
          <div style="background:#18181B;border-radius:24px 24px 0 0;padding:24px 20px;position:relative;z-index:2;border:1px solid #27272A;">
            <div style="width:32px;height:4px;background:#3F3F46;border-radius:99px;margin:0 auto 20px auto;"></div>
            <div style="text-align:center;margin-bottom:20px;">
              <div style="font-size:18px;font-weight:800;margin-bottom:6px;">Verification Code</div>
              <div style="font-size:12px;color:#71717A;">Enter the 4-digit code sent to +91 ****1234</div>
            </div>
            <div style="display:flex;justify-content:center;gap:12px;margin-bottom:24px;">
              <div style="width:48px;height:56px;border-radius:14px;background:#27272A;border:2px solid #10B981;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;">4</div>
              <div style="width:48px;height:56px;border-radius:14px;background:#27272A;border:2px solid #10B981;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;">7</div>
              <div style="width:48px;height:56px;border-radius:14px;background:#27272A;border:2px solid #3B82F6;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;box-shadow:0 0 16px rgba(59,130,246,0.3);">_</div>
              <div style="width:48px;height:56px;border-radius:14px;background:#27272A;border:1px solid #3F3F46;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#3F3F46;">_</div>
            </div>
            <button style="width:100%;padding:14px;background:#10B981;color:#064E3B;border:none;border-radius:16px;font-weight:800;font-size:14px;cursor:pointer;">Verify</button>
            <div style="text-align:center;margin-top:12px;font-size:11px;color:#71717A;">Resend code in <span style="color:#3B82F6;font-weight:700;">0:28</span></div>
          </div>
        </div>
      \`;

    case 'biometric-faceid':
      return \`
        <div style="background:rgba(15,23,42,0.95);color:#fff;border-radius:36px;padding:24px 20px;font-family:'Inter',sans-serif;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;backdrop-filter:blur(20px);">
          <div style="width:100px;height:100px;border-radius:24px;border:3px solid rgba(59,130,246,0.5);display:flex;align-items:center;justify-content:center;margin-bottom:24px;position:relative;">
            <div style="font-size:48px;">😐</div>
            <div style="position:absolute;inset:-3px;border-radius:24px;border:3px solid transparent;border-top-color:#3B82F6;animation:spin 2s linear infinite;"></div>
          </div>
          <div style="font-size:18px;font-weight:800;margin-bottom:8px;">Face ID</div>
          <div style="font-size:12px;color:#94A3B8;line-height:1.5;">Look at your phone to authenticate</div>
          <div style="margin-top:24px;display:flex;align-items:center;gap:6px;">
            <div style="width:8px;height:8px;border-radius:50%;background:#3B82F6;"></div>
            <span style="font-size:11px;color:#60A5FA;font-weight:600;">Scanning...</span>
          </div>
          <style>@keyframes spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}</style>
        </div>
      \`;

    case 'passkey-enrollment':
      return \`
        <div style="background:rgba(15,23,42,0.95);color:#fff;border-radius:36px;padding:24px 20px;font-family:'Inter',sans-serif;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;backdrop-filter:blur(20px);">
          <div style="width:80px;height:80px;border-radius:20px;background:linear-gradient(135deg,#3B82F6,#6366F1);display:flex;align-items:center;justify-content:center;font-size:36px;margin-bottom:20px;box-shadow:0 12px 30px rgba(59,130,246,0.3);">🔑</div>
          <div style="font-size:20px;font-weight:900;margin-bottom:8px;">Create Passkey</div>
          <div style="font-size:12px;color:#94A3B8;margin-bottom:6px;">for RentenPe</div>
          <div style="background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.15);border-radius:14px;padding:12px 16px;margin:20px 0;display:flex;align-items:center;gap:8px;">
            <span style="font-size:14px;">☁️</span>
            <span style="font-size:12px;color:#A5B4FC;">Synced with iCloud Keychain</span>
          </div>
          <button style="width:100%;padding:14px;background:#3B82F6;color:#fff;border:none;border-radius:16px;font-weight:800;font-size:14px;cursor:pointer;margin-top:8px;">Continue with Passkey</button>
          <button style="width:100%;padding:10px;background:transparent;color:#94A3B8;border:none;font-size:12px;cursor:pointer;margin-top:8px;">Use password instead</button>
        </div>
      \`;

    case 'kyc-id-scanner':
      return \`
        <div style="background:#09090B;color:#fff;border-radius:36px;padding:24px 20px;font-family:'Inter',sans-serif;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;">
          <div style="font-size:18px;font-weight:800;margin-bottom:20px;">Scan Your ID Card</div>
          <div style="width:90%;aspect-ratio:1.586;border:2px dashed rgba(59,130,246,0.5);border-radius:16px;position:relative;margin-bottom:20px;display:flex;align-items:center;justify-content:center;">
            <div style="position:absolute;top:-2px;left:-2px;width:24px;height:24px;border-top:3px solid #3B82F6;border-left:3px solid #3B82F6;border-radius:6px 0 0 0;"></div>
            <div style="position:absolute;top:-2px;right:-2px;width:24px;height:24px;border-top:3px solid #3B82F6;border-right:3px solid #3B82F6;border-radius:0 6px 0 0;"></div>
            <div style="position:absolute;bottom:-2px;left:-2px;width:24px;height:24px;border-bottom:3px solid #3B82F6;border-left:3px solid #3B82F6;border-radius:0 0 0 6px;"></div>
            <div style="position:absolute;bottom:-2px;right:-2px;width:24px;height:24px;border-bottom:3px solid #3B82F6;border-right:3px solid #3B82F6;border-radius:0 0 6px 0;"></div>
            <div style="font-size:13px;color:#64748B;">Position card here</div>
          </div>
          <div style="display:flex;gap:8px;margin-bottom:16px;">
            <span style="background:rgba(16,185,129,0.15);color:#10B981;padding:4px 10px;border-radius:99px;font-size:10px;font-weight:700;">✓ No glare</span>
            <span style="background:rgba(16,185,129,0.15);color:#10B981;padding:4px 10px;border-radius:99px;font-size:10px;font-weight:700;">✓ Not blurred</span>
          </div>
          <div style="font-size:11px;color:#94A3B8;">Hold steady to auto-capture</div>
        </div>
      \`;

    case 'kyc-selfie-liveness':
      return \`
        <div style="background:#09090B;color:#fff;border-radius:36px;padding:24px 20px;font-family:'Inter',sans-serif;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;">
          <div style="font-size:18px;font-weight:800;margin-bottom:24px;">Verify It's You</div>
          <div style="width:160px;height:200px;border-radius:50% 50% 50% 50% / 60% 60% 40% 40%;border:3px solid #3B82F6;display:flex;align-items:center;justify-content:center;margin-bottom:20px;position:relative;">
            <div style="font-size:64px;">😐</div>
            <div style="position:absolute;bottom:8px;left:50%;transform:translateX(-50%);background:#3B82F6;padding:4px 12px;border-radius:99px;font-size:10px;font-weight:700;">Blink slowly</div>
          </div>
          <div style="background:rgba(16,185,129,0.15);border:1px solid rgba(16,185,129,0.3);border-radius:14px;padding:10px 16px;margin-bottom:16px;">
            <div style="font-size:11px;color:#10B981;font-weight:700;">Liveness Score: 99.4%</div>
          </div>
          <div style="font-size:11px;color:#94A3B8;">Keep your face within the oval guide</div>
        </div>
      \`;

    case 'pin-lock-dial':
      return \`
        <div style="background:#09090B;color:#fff;border-radius:36px;padding:24px 20px;font-family:'Inter',sans-serif;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;">
          <div style="font-size:16px;font-weight:800;margin-bottom:8px;">Enter Security PIN</div>
          <div style="font-size:11px;color:#71717A;margin-bottom:24px;">Enter your 6-digit Rentenpe PIN</div>
          <div style="display:flex;gap:12px;margin-bottom:32px;">
            <div style="width:12px;height:12px;border-radius:50%;background:#10B981;"></div>
            <div style="width:12px;height:12px;border-radius:50%;background:#10B981;"></div>
            <div style="width:12px;height:12px;border-radius:50%;background:#10B981;"></div>
            <div style="width:12px;height:12px;border-radius:50%;background:#27272A;"></div>
            <div style="width:12px;height:12px;border-radius:50%;background:#27272A;"></div>
            <div style="width:12px;height:12px;border-radius:50%;background:#27272A;"></div>
          </div>
          <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:12px;max-width:240px;">
            <button style="width:60px;height:60px;border-radius:50%;background:#18181B;border:1px solid #27272A;color:#fff;font-size:20px;font-weight:700;cursor:pointer;display:flex;align-items:center;justify-content:center;">1</button>
            <button style="width:60px;height:60px;border-radius:50%;background:#18181B;border:1px solid #27272A;color:#fff;font-size:20px;font-weight:700;cursor:pointer;display:flex;align-items:center;justify-content:center;">2</button>
            <button style="width:60px;height:60px;border-radius:50%;background:#18181B;border:1px solid #27272A;color:#fff;font-size:20px;font-weight:700;cursor:pointer;display:flex;align-items:center;justify-content:center;">3</button>
            <button style="width:60px;height:60px;border-radius:50%;background:#18181B;border:1px solid #27272A;color:#fff;font-size:20px;font-weight:700;cursor:pointer;display:flex;align-items:center;justify-content:center;">4</button>
            <button style="width:60px;height:60px;border-radius:50%;background:#18181B;border:1px solid #27272A;color:#fff;font-size:20px;font-weight:700;cursor:pointer;display:flex;align-items:center;justify-content:center;">5</button>
            <button style="width:60px;height:60px;border-radius:50%;background:#18181B;border:1px solid #27272A;color:#fff;font-size:20px;font-weight:700;cursor:pointer;display:flex;align-items:center;justify-content:center;">6</button>
            <button style="width:60px;height:60px;border-radius:50%;background:#18181B;border:1px solid #27272A;color:#fff;font-size:20px;font-weight:700;cursor:pointer;display:flex;align-items:center;justify-content:center;">7</button>
            <button style="width:60px;height:60px;border-radius:50%;background:#18181B;border:1px solid #27272A;color:#fff;font-size:20px;font-weight:700;cursor:pointer;display:flex;align-items:center;justify-content:center;">8</button>
            <button style="width:60px;height:60px;border-radius:50%;background:#18181B;border:1px solid #27272A;color:#fff;font-size:20px;font-weight:700;cursor:pointer;display:flex;align-items:center;justify-content:center;">9</button>
            <div></div>
            <button style="width:60px;height:60px;border-radius:50%;background:#18181B;border:1px solid #27272A;color:#fff;font-size:20px;font-weight:700;cursor:pointer;display:flex;align-items:center;justify-content:center;">0</button>
            <button style="width:60px;height:60px;border-radius:50%;background:#18181B;border:1px solid #27272A;color:#fff;font-size:14px;cursor:pointer;display:flex;align-items:center;justify-content:center;">⌫</button>
          </div>
          <div style="font-size:11px;color:#3B82F6;margin-top:20px;cursor:pointer;">Forgot PIN?</div>
        </div>
      \`;

    case 'session-devices':
      return \`
        <div style="background:#09090B;color:#fff;border-radius:36px;padding:24px 20px;font-family:'Inter',sans-serif;height:100%;display:flex;flex-direction:column;">
          <div style="font-weight:700;font-size:16px;margin-bottom:20px;">🔒 Active Sessions</div>
          <div style="display:flex;flex-direction:column;gap:10px;margin-bottom:20px;">
            <div style="background:#18181B;border:2px solid #10B981;border-radius:16px;padding:14px;">
              <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">
                <span style="font-size:13px;font-weight:700;">📱 iPhone 16 Pro</span>
                <span style="background:rgba(16,185,129,0.15);color:#10B981;padding:2px 8px;border-radius:99px;font-size:9px;font-weight:700;">This Device</span>
              </div>
              <div style="font-size:10px;color:#71717A;">Active now • Bengaluru, India</div>
            </div>
            <div style="background:#18181B;border:1px solid #27272A;border-radius:16px;padding:14px;">
              <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">
                <span style="font-size:13px;font-weight:700;">💻 MacBook Pro</span>
                <span style="font-size:10px;color:#71717A;">2 hrs ago</span>
              </div>
              <div style="font-size:10px;color:#71717A;">Bengaluru, India • Chrome</div>
            </div>
            <div style="background:#18181B;border:1px solid #27272A;border-radius:16px;padding:14px;">
              <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">
                <span style="font-size:13px;font-weight:700;">🖥️ Windows Desktop</span>
                <span style="font-size:10px;color:#71717A;">3 days ago</span>
              </div>
              <div style="font-size:10px;color:#71717A;">Mumbai, India • Firefox</div>
            </div>
          </div>
          <div style="background:#18181B;border:1px solid #27272A;border-radius:14px;padding:14px;display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;">
            <span style="font-size:13px;font-weight:600;">Two-Factor Auth</span>
            <div style="width:40px;height:22px;border-radius:99px;background:#10B981;position:relative;cursor:pointer;">
              <div style="width:18px;height:18px;border-radius:50%;background:#fff;position:absolute;top:2px;right:2px;"></div>
            </div>
          </div>
          <button style="width:100%;padding:14px;background:#EF4444;color:#fff;border:none;border-radius:16px;font-weight:800;font-size:13px;cursor:pointer;margin-top:auto;">Revoke All Other Sessions</button>
        </div>
      \`;

`;

if (!code.includes(MARKER)) {
  console.error('Marker not found!');
  process.exit(1);
}

code = code.replace(MARKER, newCases + '\n' + MARKER);
fs.writeFileSync(file, code);
console.log('Batch 2 injected: Real Estate + Transport + Sleep + Security');

const cases = [...code.matchAll(/case\s+['"]([^'"]+)['"]/g)].map(m => m[1]);
console.log('Total cases now:', cases.length);
