/**
 * RentenPe UI Kit - Calendar, Charts, Analytics, Feedback & States Archetypes
 * 100% Authentic, pixel-perfect, mobile-constrained variants.
 */

function renderCalendarVariants(fam, icon, slug, variantIndex) {
  switch (variantIndex) {
    case 0: // Model A: Monthly Rent Due Calendar Grid
      return `<div style="width:100%;max-width:320px;background:#fff;border:1px solid #E2E8F0;border-radius:22px;padding:18px;box-shadow:0 6px 20px rgba(0,0,0,0.04);">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
          <span style="font-size:13px;font-weight:800;color:#0F172A;">March 2026</span>
          <div style="display:flex;gap:4px;"><button style="border:none;background:#F1F5F9;padding:4px 8px;border-radius:6px;cursor:pointer;">‹</button><button style="border:none;background:#F1F5F9;padding:4px 8px;border-radius:6px;cursor:pointer;">›</button></div>
        </div>
        <div style="display:grid;grid-template-columns:repeat(7,1fr);gap:4px;text-align:center;font-size:10px;font-weight:700;color:#64748B;margin-bottom:6px;">
          <span>S</span><span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span>
        </div>
        <div style="display:grid;grid-template-columns:repeat(7,1fr);gap:4px;text-align:center;font-size:11px;font-weight:700;">
          <span style="padding:6px 0;background:#2563EB;color:#fff;border-radius:8px;font-weight:900;">1★</span>
          <span style="padding:6px 0;color:#334155;">2</span><span style="padding:6px 0;color:#334155;">3</span><span style="padding:6px 0;color:#334155;">4</span><span style="padding:6px 0;color:#334155;">5</span>
          <span style="padding:6px 0;background:#ECFDF5;color:#059669;border-radius:8px;">6✓</span><span style="padding:6px 0;color:#334155;">7</span>
        </div>
        <div style="margin-top:10px;padding:8px 10px;background:#EFF6FF;border-radius:10px;font-size:11px;color:#1E40AF;font-weight:700;display:flex;justify-content:space-between;">
          <span>★ 1st March: Rent Due</span><strong>₹28,500</strong>
        </div>
      </div>`;

    case 1: // Model B: Date Range Lease Term Selector
      return `<div style="width:100%;max-width:320px;background:#fff;border:1px solid #E2E8F0;border-radius:20px;padding:18px;display:flex;flex-direction:column;gap:12px;">
        <span style="font-size:10px;font-weight:800;color:#64748B;letter-spacing:0.04em;">LEASE AGREEMENT DURATION</span>
        <div style="display:flex;align-items:center;justify-content:space-between;padding:10px 14px;background:#F8FAFC;border:1px solid #E2E8F0;border-radius:12px;">
          <div><div style="font-size:10px;color:#64748B;">Move-in</div><div style="font-size:12px;font-weight:800;color:#0F172A;">01 Apr 2026</div></div>
          <span style="color:#2563EB;font-weight:900;">→</span>
          <div><div style="font-size:10px;color:#64748B;">Move-out (11 mo)</div><div style="font-size:12px;font-weight:800;color:#0F172A;">28 Feb 2027</div></div>
        </div>
      </div>`;

    case 2: // Model C: Flat Visit Booking Slot Picker
      return `<div style="width:100%;max-width:320px;background:#fff;border:1px solid #E2E8F0;border-radius:20px;padding:18px;display:flex;flex-direction:column;gap:12px;">
        <div style="display:flex;justify-content:space-between;align-items:center;">
          <span style="font-size:12px;font-weight:800;color:#0F172A;">Schedule Property Tour</span>
          <span style="font-size:10px;color:#059669;font-weight:800;">4 SLOTS LEFT</span>
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;">
          <button style="padding:10px;background:#EFF6FF;border:1.5px solid #2563EB;border-radius:10px;color:#2563EB;font-size:11px;font-weight:800;cursor:pointer;">10:30 AM ✓</button>
          <button style="padding:10px;background:#F8FAFC;border:1px solid #E2E8F0;border-radius:10px;color:#334155;font-size:11px;font-weight:700;cursor:pointer;">02:00 PM</button>
          <button style="padding:10px;background:#F8FAFC;border:1px solid #E2E8F0;border-radius:10px;color:#334155;font-size:11px;font-weight:700;cursor:pointer;">04:30 PM</button>
          <button style="padding:10px;background:#F8FAFC;border:1px solid #E2E8F0;border-radius:10px;color:#334155;font-size:11px;font-weight:700;cursor:pointer;">06:00 PM</button>
        </div>
      </div>`;

    case 3: // Model D: Weekly Schedule View Strip
      return `<div style="width:100%;max-width:320px;background:#fff;border:1px solid #E2E8F0;border-radius:18px;padding:14px;display:flex;justify-content:space-between;">
        <div style="padding:8px;text-align:center;border-radius:10px;background:#F8FAFC;"><div style="font-size:9px;color:#64748B;">MON</div><div style="font-size:12px;font-weight:800;">23</div></div>
        <div style="padding:8px;text-align:center;border-radius:10px;background:#F8FAFC;"><div style="font-size:9px;color:#64748B;">TUE</div><div style="font-size:12px;font-weight:800;">24</div></div>
        <div style="padding:8px;text-align:center;border-radius:10px;background:#0F172A;color:#fff;"><div style="font-size:9px;color:#94A3B8;">WED</div><div style="font-size:12px;font-weight:800;">25</div></div>
        <div style="padding:8px;text-align:center;border-radius:10px;background:#F8FAFC;"><div style="font-size:9px;color:#64748B;">THU</div><div style="font-size:12px;font-weight:800;">26</div></div>
        <div style="padding:8px;text-align:center;border-radius:10px;background:#F8FAFC;"><div style="font-size:9px;color:#64748B;">FRI</div><div style="font-size:12px;font-weight:800;">27</div></div>
      </div>`;

    case 4: // Model E: Scheduled Move-in Event Card
      return `<div style="width:100%;max-width:320px;background:#EFF6FF;border:1.5px solid #BFDBFE;border-radius:18px;padding:16px;display:flex;align-items:center;gap:12px;">
        <div style="padding:10px;background:#2563EB;color:#fff;border-radius:12px;text-align:center;min-width:44px;"><div style="font-size:10px;font-weight:700;">APR</div><div style="font-size:16px;font-weight:900;">01</div></div>
        <div><div style="font-size:13px;font-weight:800;color:#1E40AF;">Key Handover & Move-in</div><div style="font-size:11px;color:#3B82F6;">Indiranagar Duplex #402 • 10:00 AM</div></div>
      </div>`;

    case 5: // Model F: Availability Grid Cell Matrix
      return `<div style="width:100%;max-width:320px;background:#fff;border:1px solid #E2E8F0;border-radius:18px;padding:16px;">
        <div style="font-size:12px;font-weight:800;color:#0F172A;margin-bottom:8px;">Apartment Availability Grid</div>
        <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:6px;text-align:center;font-size:11px;font-weight:800;">
          <span style="padding:8px 0;background:#ECFDF5;color:#059669;border-radius:8px;">101 Vac</span>
          <span style="padding:8px 0;background:#F1F5F9;color:#94A3B8;border-radius:8px;">102 Occ</span>
          <span style="padding:8px 0;background:#ECFDF5;color:#059669;border-radius:8px;">201 Vac</span>
          <span style="padding:8px 0;background:#F1F5F9;color:#94A3B8;border-radius:8px;">202 Occ</span>
        </div>
      </div>`;

    case 6: // Model G: Month Selector Carousel
      return `<div style="width:100%;max-width:320px;background:#fff;border:1px solid #E2E8F0;border-radius:16px;padding:12px 16px;display:flex;align-items:center;justify-content:space-between;">
        <span style="font-size:12px;color:#64748B;">Feb 2026</span>
        <span style="font-size:13px;font-weight:800;color:#2563EB;padding:4px 10px;background:#EFF6FF;border-radius:8px;">March 2026 ●</span>
        <span style="font-size:12px;color:#64748B;">Apr 2026</span>
      </div>`;

    case 7: // Model H: Day Status Cell Indicator
      return `<div style="width:100%;max-width:320px;background:#fff;border:1px solid #E2E8F0;border-radius:16px;padding:14px;display:flex;align-items:center;justify-content:space-between;">
        <div style="display:flex;align-items:center;gap:10px;"><span style="font-size:20px;">📅</span><div><div style="font-size:12px;font-weight:800;">Rent Clearing Window</div><div style="font-size:10px;color:#10B981;">1st to 5th of each month</div></div></div>
        <span style="padding:2px 8px;background:#ECFDF5;color:#059669;border-radius:99px;font-size:10px;font-weight:800;">OPEN</span>
      </div>`;

    case 8: // Model I: Inspection Reschedule Picker
      return `<div style="width:100%;max-width:320px;background:#FFFBEB;border:1px solid #FDE68A;border-radius:16px;padding:14px;display:flex;justify-content:space-between;align-items:center;">
        <div><div style="font-size:12px;font-weight:800;color:#92400E;">Reschedule Inspection</div><div style="font-size:10px;color:#B45309;">Next available: 28-Mar (Sat)</div></div>
        <button style="padding:6px 10px;background:#D97706;color:#fff;border:none;border-radius:8px;font-size:10px;font-weight:800;cursor:pointer;">Change</button>
      </div>`;

    case 9: // Model J: Minimal Monoline Calendar
      return `<div style="width:100%;max-width:320px;background:#fff;border:1.5px solid #0F172A;border-radius:14px;padding:12px 16px;display:flex;justify-content:space-between;align-items:center;">
        <span style="font-size:12px;font-weight:800;color:#0F172A;">Rent Due in 6 Days (01-Apr)</span>
        <span style="font-size:12px;color:#0F172A;font-weight:900;">→</span>
      </div>`;

    case 10: // Model K: Apple Cupertino Porcelain Calendar (Light)
      return `<div style="width:100%;max-width:320px;background:#FFFFFF;border:1px solid #E2E8F0;border-radius:24px;padding:20px;box-shadow:0 12px 30px rgba(15,23,42,0.04);display:flex;flex-direction:column;gap:12px;">
        <div style="display:flex;justify-content:space-between;align-items:center;">
          <div style="display:flex;align-items:center;gap:8px;"><span style="font-size:16px;">🍏</span><span style="font-size:13px;font-weight:800;color:#0F172A;">Porcelain Calendar</span></div>
          <span style="padding:2px 8px;background:#ECFDF5;color:#059669;border-radius:99px;font-size:9px;font-weight:800;">ACTIVE LEASE</span>
        </div>
        <div style="font-size:24px;font-weight:900;color:#0F172A;">March 2026</div>
        <div style="font-size:11px;color:#64748B;">Rent clearing synchronized with Apple Wallet</div>
      </div>`;

    case 11: // Model L: CRED Acid Neon Titanium Calendar (Dark)
    default:
      return `<div style="width:100%;max-width:320px;background:#09090B;border:1.5px solid rgba(204,255,0,0.4);border-radius:24px;padding:20px;color:#FFFFFF;box-shadow:0 20px 40px rgba(0,0,0,0.8);">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
          <span style="font-size:10px;font-weight:900;color:#CCFF00;letter-spacing:0.1em;text-transform:uppercase;">TITANIUM SETTLEMENT CYCLE</span>
          <span style="color:#CCFF00;font-size:12px;">⚡</span>
        </div>
        <div style="font-size:22px;font-weight:900;color:#FFFFFF;">01 MAR • AUTO PAY</div>
        <div style="font-size:11px;color:#A1A1AA;margin-top:4px;">Disbursement via HDFC Escrow Node</div>
      </div>`;
  }
}

function renderChartVariants(fam, icon, slug, variantIndex) {
  const isLine = slug.includes('line') || slug.includes('area');
  const isDonut = slug.includes('donut') || slug.includes('ring');
  const isGauge = slug.includes('gauge') || slug.includes('score');

  switch (variantIndex) {
    case 0: // Model A: Pinterest Rounded Capsule Pill Bar Chart (media_1791644905690.png)
      return `<div style="width:100%;max-width:320px;background:#fff;border:1px solid #E2E8F0;border-radius:24px;padding:22px;box-shadow:0 8px 24px rgba(15,23,42,0.05);display:flex;flex-direction:column;gap:16px;">
        <div style="display:flex;justify-content:space-between;align-items:baseline;">
          <div><div style="font-size:11px;font-weight:700;color:#64748B;">OUTFLOW ANALYSIS</div><div style="font-size:24px;font-weight:900;color:#0F172A;">₹32,450</div></div>
          <span style="padding:3px 8px;background:#EFF6FF;color:#2563EB;border-radius:6px;font-size:10px;font-weight:800;">MAR 2026</span>
        </div>
        <div style="display:flex;align-items:flex-end;justify-content:space-between;height:120px;padding-top:10px;">
          <div style="display:flex;flex-direction:column;align-items:center;gap:6px;"><div style="width:16px;height:60px;background:#E2E8F0;border-radius:99px;"></div><span style="font-size:9px;color:#64748B;font-weight:700;">Nov</span></div>
          <div style="display:flex;flex-direction:column;align-items:center;gap:6px;"><div style="width:16px;height:75px;background:#E2E8F0;border-radius:99px;"></div><span style="font-size:9px;color:#64748B;font-weight:700;">Dec</span></div>
          <div style="display:flex;flex-direction:column;align-items:center;gap:6px;"><div style="width:16px;height:90px;background:#E2E8F0;border-radius:99px;"></div><span style="font-size:9px;color:#64748B;font-weight:700;">Jan</span></div>
          <div style="display:flex;flex-direction:column;align-items:center;gap:6px;"><div style="width:16px;height:80px;background:#E2E8F0;border-radius:99px;"></div><span style="font-size:9px;color:#64748B;font-weight:700;">Feb</span></div>
          <div style="display:flex;flex-direction:column;align-items:center;gap:6px;"><div style="width:16px;height:115px;background:linear-gradient(180deg,#3B82F6,#1D4ED8);border-radius:99px;box-shadow:0 4px 12px rgba(37,99,235,0.3);"></div><span style="font-size:9px;color:#2563EB;font-weight:900;">Mar</span></div>
        </div>
      </div>`;

    case 1: // Model B: Multi-Segment Expense Donut Ring
      return `<div style="width:100%;max-width:320px;background:#fff;border:1px solid #E2E8F0;border-radius:24px;padding:22px;box-shadow:0 8px 24px rgba(15,23,42,0.05);display:flex;align-items:center;gap:18px;">
        <div style="position:relative;width:90px;height:90px;display:flex;align-items:center;justify-content:center;">
          <svg width="90" height="90" viewBox="0 0 90 90">
            <circle cx="45" cy="45" r="34" stroke="#F1F5F9" stroke-width="10" fill="none"/>
            <circle cx="45" cy="45" r="34" stroke="#2563EB" stroke-width="10" fill="none" stroke-dasharray="213.6" stroke-dashoffset="64" stroke-linecap="round" transform="rotate(-90 45 45)"/>
            <circle cx="45" cy="45" r="34" stroke="#10B981" stroke-width="10" fill="none" stroke-dasharray="213.6" stroke-dashoffset="170" stroke-linecap="round" transform="rotate(45 45 45)"/>
          </svg>
          <div style="position:absolute;text-align:center;"><div style="font-size:13px;font-weight:900;color:#0F172A;">72%</div><div style="font-size:8px;color:#64748B;">Rent</div></div>
        </div>
        <div style="display:flex;flex-direction:column;gap:6px;font-size:11px;">
          <div style="display:flex;align-items:center;gap:6px;"><span style="width:8px;height:8px;border-radius:50%;background:#2563EB;"></span><span style="font-weight:700;">Rent (₹28.5k)</span></div>
          <div style="display:flex;align-items:center;gap:6px;"><span style="width:8px;height:8px;border-radius:50%;background:#10B981;"></span><span style="font-weight:700;">Maintenance (₹3k)</span></div>
          <div style="display:flex;align-items:center;gap:6px;"><span style="width:8px;height:8px;border-radius:50%;background:#F1F5F9;"></span><span style="color:#64748B;">Power & Water</span></div>
        </div>
      </div>`;

    case 2: // Model C: Smooth Curved SVG Area Graph
      return `<div style="width:100%;max-width:320px;background:#fff;border:1px solid #E2E8F0;border-radius:24px;padding:22px;display:flex;flex-direction:column;gap:12px;">
        <div style="display:flex;justify-content:space-between;align-items:baseline;">
          <div><div style="font-size:10px;font-weight:800;color:#64748B;">RENT YIELD TREND</div><div style="font-size:22px;font-weight:900;color:#0F172A;">₹ 3,42,000</div></div>
          <span style="color:#059669;font-weight:800;font-size:11px;">↑ +14.2%</span>
        </div>
        <svg width="100%" height="70" viewBox="0 0 280 70" preserveAspectRatio="none">
          <defs><linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#2563EB" stop-opacity="0.3"/><stop offset="100%" stop-color="#2563EB" stop-opacity="0"/></linearGradient></defs>
          <path d="M0,55 Q70,20 140,40 T280,10 L280,70 L0,70 Z" fill="url(#areaGrad)"/>
          <path d="M0,55 Q70,20 140,40 T280,10" fill="none" stroke="#2563EB" stroke-width="3" stroke-linecap="round"/>
        </svg>
      </div>`;

    case 3: // Model D: CRED Semi-Circle Credit Rent Score Gauge
      return `<div style="width:100%;max-width:320px;background:#09090B;border:1px solid #27272A;border-radius:24px;padding:22px;color:#fff;text-align:center;">
        <div style="font-size:10px;font-weight:800;color:#71717A;letter-spacing:0.08em;">CREDIT RENT SCORE</div>
        <div style="font-size:36px;font-weight:900;color:#10B981;margin:6px 0;">814 <span style="font-size:14px;color:#71717A;">/ 900</span></div>
        <div style="font-size:11px;color:#38BDF8;font-weight:700;">Top 5% of Tenants in Bengaluru</div>
      </div>`;

    case 4: // Model E: Monthly Rent Stacked Bar Chart
      return `<div style="width:100%;max-width:320px;background:#fff;border:1px solid #E2E8F0;border-radius:20px;padding:18px;">
        <div style="font-size:12px;font-weight:800;color:#0F172A;margin-bottom:12px;">Rent + Utility Breakdown</div>
        <div style="display:flex;height:24px;border-radius:8px;overflow:hidden;margin-bottom:8px;">
          <div style="width:75%;background:#2563EB;"></div>
          <div style="width:15%;background:#10B981;"></div>
          <div style="width:10%;background:#F59E0B;"></div>
        </div>
        <div style="display:flex;justify-content:space-between;font-size:10px;color:#64748B;font-weight:700;"><span>75% Rent</span><span>15% Maint.</span><span>10% Utility</span></div>
      </div>`;

    case 5: // Model F: Concentric Activity Rings
      return `<div style="width:100%;max-width:320px;background:#fff;border:1px solid #E2E8F0;border-radius:22px;padding:20px;display:flex;align-items:center;justify-content:space-around;">
        <div style="position:relative;width:80px;height:80px;">
          <svg width="80" height="80" viewBox="0 0 80 80">
            <circle cx="40" cy="40" r="32" stroke="#EFF6FF" stroke-width="6" fill="none"/>
            <circle cx="40" cy="40" r="32" stroke="#2563EB" stroke-width="6" fill="none" stroke-dasharray="201" stroke-dashoffset="40" stroke-linecap="round" transform="rotate(-90 40 40)"/>
            <circle cx="40" cy="40" r="22" stroke="#ECFDF5" stroke-width="6" fill="none"/>
            <circle cx="40" cy="40" r="22" stroke="#10B981" stroke-width="6" fill="none" stroke-dasharray="138" stroke-dashoffset="20" stroke-linecap="round" transform="rotate(-90 40 40)"/>
          </svg>
        </div>
        <div><div style="font-size:12px;font-weight:800;color:#0F172A;">92% On-Time Ratio</div><div style="font-size:10px;color:#059669;font-weight:700;">11 of 12 Months Clear</div></div>
      </div>`;

    case 6: // Model G: Sparkline Mini Card
      return `<div style="width:100%;max-width:320px;background:#fff;border:1px solid #E2E8F0;border-radius:18px;padding:16px;display:flex;align-items:center;justify-content:space-between;">
        <div><div style="font-size:11px;color:#64748B;">Power Units</div><div style="font-size:18px;font-weight:900;color:#0F172A;">284 kWh</div></div>
        <svg width="90" height="30" viewBox="0 0 90 30"><polyline points="0,25 20,20 40,28 60,10 80,15 90,5" fill="none" stroke="#2563EB" stroke-width="2.5" stroke-linecap="round"/></svg>
      </div>`;

    case 7: // Model H: Occupancy Heatmap Strip
      return `<div style="width:100%;max-width:320px;background:#fff;border:1px solid #E2E8F0;border-radius:18px;padding:16px;">
        <div style="font-size:11px;font-weight:800;color:#64748B;margin-bottom:8px;">ANNUAL OCCUPANCY (12 MO)</div>
        <div style="display:grid;grid-template-columns:repeat(12,1fr);gap:3px;height:24px;">
          <div style="background:#10B981;border-radius:4px;"></div><div style="background:#10B981;border-radius:4px;"></div><div style="background:#10B981;border-radius:4px;"></div>
          <div style="background:#10B981;border-radius:4px;"></div><div style="background:#10B981;border-radius:4px;"></div><div style="background:#10B981;border-radius:4px;"></div>
          <div style="background:#10B981;border-radius:4px;"></div><div style="background:#10B981;border-radius:4px;"></div><div style="background:#FDE68A;border-radius:4px;"></div>
          <div style="background:#10B981;border-radius:4px;"></div><div style="background:#10B981;border-radius:4px;"></div><div style="background:#10B981;border-radius:4px;"></div>
        </div>
      </div>`;

    case 8: // Model I: Funnel Conversion Display
      return `<div style="width:100%;max-width:320px;background:#fff;border:1px solid #E2E8F0;border-radius:18px;padding:16px;display:flex;flex-direction:column;gap:6px;">
        <div style="font-size:11px;font-weight:800;color:#64748B;">LISTING VIEWS TO LEASE</div>
        <div style="background:#EFF6FF;padding:6px 12px;border-radius:6px;font-size:11px;font-weight:800;color:#2563EB;">1,420 Inquiries (100%)</div>
        <div style="background:#DBEAFE;padding:6px 12px;border-radius:6px;font-size:11px;font-weight:800;color:#1D4ED8;width:80%;">142 Visits (10%)</div>
        <div style="background:#1D4ED8;color:#fff;padding:6px 12px;border-radius:6px;font-size:11px;font-weight:800;width:40%;">14 Leases (1%)</div>
      </div>`;

    case 9: // Model J: Minimal Monoline Bar Chart
      return `<div style="width:100%;max-width:320px;background:#fff;border:1.5px solid #0F172A;border-radius:16px;padding:16px;display:flex;justify-content:space-between;align-items:flex-end;height:70px;">
        <div style="width:20px;height:30px;background:#0F172A;border-radius:4px;"></div>
        <div style="width:20px;height:45px;background:#0F172A;border-radius:4px;"></div>
        <div style="width:20px;height:60px;background:#0F172A;border-radius:4px;"></div>
        <div style="width:20px;height:40px;background:#0F172A;border-radius:4px;"></div>
      </div>`;

    case 10: // Model K: Apple Cupertino Porcelain Chart (Light)
      return `<div style="width:100%;max-width:320px;background:#FFFFFF;border:1px solid #E2E8F0;border-radius:24px;padding:22px;box-shadow:0 12px 30px rgba(15,23,42,0.04);display:flex;flex-direction:column;gap:12px;">
        <div style="display:flex;justify-content:space-between;align-items:center;">
          <div style="display:flex;align-items:center;gap:8px;"><span style="font-size:16px;">🍏</span><span style="font-size:13px;font-weight:800;color:#0F172A;">Porcelain Health Ring</span></div>
          <span style="padding:2px 8px;background:#ECFDF5;color:#059669;border-radius:99px;font-size:9px;font-weight:800;">100% HEALTH</span>
        </div>
        <div style="font-size:24px;font-weight:900;color:#0F172A;">₹ 28,500 <span style="font-size:13px;color:#059669;font-weight:700;">Clearing</span></div>
      </div>`;

    case 11: // Model L: CRED Acid Neon Titanium Chart (Dark)
    default:
      return `<div style="width:100%;max-width:320px;background:#09090B;border:1.5px solid rgba(204,255,0,0.4);border-radius:24px;padding:22px;color:#FFFFFF;box-shadow:0 20px 40px rgba(0,0,0,0.8);">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
          <span style="font-size:10px;font-weight:900;color:#CCFF00;letter-spacing:0.1em;text-transform:uppercase;">TITANIUM TELEMETRY ARC</span>
          <span style="color:#CCFF00;font-size:12px;">⚡</span>
        </div>
        <div style="font-size:28px;font-weight:900;color:#CCFF00;">840 <span style="font-size:14px;color:#FFFFFF;">PRESTIGE SCORE</span></div>
      </div>`;
  }
}

function renderFeedbackAndStatesVariants(fam, icon, slug, variantIndex) {
  const isEmpty = slug.includes('empty');
  const isError = slug.includes('error');
  const isLoading = slug.includes('loading') || slug.includes('spinner');
  const isSkeleton = slug.includes('skeleton');
  const isToast = slug.includes('toast');

  switch (variantIndex) {
    case 0: // Model A: Empty State Card with Action
      return `<div style="width:100%;max-width:320px;background:#fff;border:1px solid #E2E8F0;border-radius:22px;padding:26px 20px;text-align:center;box-shadow:0 4px 14px rgba(0,0,0,0.04);">
        <div style="width:56px;height:56px;border-radius:18px;background:#EFF6FF;color:#2563EB;display:flex;align-items:center;justify-content:center;font-size:26px;margin:0 auto 12px;">📭</div>
        <div style="font-size:14px;font-weight:800;color:#0F172A;">No Active Maintenance Requests</div>
        <div style="font-size:11px;color:#64748B;margin:6px 0 16px;line-height:1.4;">All electrical, plumbing, and amenity tickets have been resolved.</div>
        <button style="padding:10px 18px;background:#0F172A;color:#fff;border:none;border-radius:12px;font-size:12px;font-weight:800;cursor:pointer;">+ Report New Issue</button>
      </div>`;

    case 1: // Model B: Error State Alert Dialog
      return `<div style="width:100%;max-width:320px;background:#FEF2F2;border:1.5px solid #FECACA;border-radius:20px;padding:20px;display:flex;flex-direction:column;gap:12px;">
        <div style="display:flex;align-items:center;gap:10px;">
          <span style="font-size:22px;">🚨</span>
          <div><div style="font-size:13px;font-weight:800;color:#991B1B;">Payment Authorization Failed</div><div style="font-size:10px;color:#DC2626;">Error code: UPI_DEBIT_TIMEOUT_402</div></div>
        </div>
        <div style="font-size:11px;color:#7F1D1D;line-height:1.4;">Bank did not acknowledge transaction within 30 seconds. Your account was not debited.</div>
        <button style="width:100%;padding:10px;background:#DC2626;color:#fff;border:none;border-radius:10px;font-size:11px;font-weight:800;cursor:pointer;">Retry Payment ↻</button>
      </div>`;

    case 2: // Model C: Shimmering Property Skeleton Card
      return `<div style="width:100%;max-width:320px;background:#fff;border:1px solid #E2E8F0;border-radius:22px;padding:16px;display:flex;flex-direction:column;gap:12px;">
        <div style="width:100%;height:100px;background:linear-gradient(90deg, #F1F5F9 25%, #E2E8F0 50%, #F1F5F9 75%);border-radius:14px;"></div>
        <div style="width:70%;height:14px;background:#E2E8F0;border-radius:4px;"></div>
        <div style="width:40%;height:10px;background:#F1F5F9;border-radius:4px;"></div>
      </div>`;

    case 3: // Model D: Circular Loading Spinner with Status
      return `<div style="width:100%;max-width:320px;background:#fff;border:1px solid #E2E8F0;border-radius:20px;padding:22px;text-align:center;">
        <div style="width:36px;height:36px;border:3.5px solid #EFF6FF;border-top-color:#2563EB;border-radius:50%;margin:0 auto 12px;animation:spin 0.8s linear infinite;"></div>
        <div style="font-size:13px;font-weight:800;color:#0F172A;">Verifying e-Stamp Certificate...</div>
        <div style="font-size:11px;color:#64748B;margin-top:4px;">Communicating with State Escrow Server</div>
      </div>`;

    case 4: // Model E: Liquid Gradient Success Notification Banner
      return `<div style="width:100%;max-width:320px;background:linear-gradient(135deg, #10B981 0%, #059669 100%);color:#fff;border-radius:20px;padding:18px;display:flex;align-items:center;justify-content:space-between;box-shadow:0 12px 28px rgba(16,185,129,0.3);">
        <div style="display:flex;align-items:center;gap:12px;">
          <div style="width:36px;height:36px;border-radius:50%;background:rgba(255,255,255,0.25);display:flex;align-items:center;justify-content:center;font-size:18px;">✓</div>
          <div><div style="font-size:13px;font-weight:900;">Rent Payment Complete</div><div style="font-size:10px;opacity:0.9;">₹28,500 transferred to Owner</div></div>
        </div>
      </div>`;

    case 5: // Model F: Amber Offline Floating Pill
      return `<div style="width:100%;max-width:320px;background:#FEF3C7;border:1.5px solid #F59E0B;border-radius:99px;padding:10px 16px;display:flex;align-items:center;justify-content:space-between;">
        <div style="display:flex;align-items:center;gap:8px;"><span style="width:8px;height:8px;border-radius:50%;background:#D97706;"></span><span style="font-size:11px;font-weight:800;color:#92400E;">Offline • Queued 1 Payment</span></div>
        <span style="font-size:10px;color:#92400E;font-weight:800;">Syncing</span>
      </div>`;

    case 6: // Model G: Toast Notification Pill with Action
      return `<div style="width:100%;max-width:320px;background:#0F172A;color:#fff;border-radius:99px;padding:10px 18px;display:flex;align-items:center;justify-content:space-between;box-shadow:0 10px 25px rgba(15,23,42,0.35);">
        <span style="font-size:12px;font-weight:700;">📋 UPI ID Copied to Clipboard</span>
        <span style="font-size:11px;color:#60A5FA;font-weight:800;cursor:pointer;">Undo</span>
      </div>`;

    case 7: // Model H: Destructive Warning Dialog
      return `<div style="width:100%;max-width:320px;background:#fff;border:1.5px solid #EF4444;border-radius:20px;padding:20px;display:flex;flex-direction:column;gap:12px;box-shadow:0 8px 24px rgba(239,68,68,0.1);">
        <div style="display:flex;align-items:center;gap:10px;"><span style="font-size:22px;">⚠️</span><div style="font-size:13px;font-weight:800;color:#991B1B;">Cancel Lease Agreement?</div></div>
        <div style="font-size:11px;color:#64748B;line-height:1.4;">Cancelling before the 6-month lock-in period incurs a 1-month rent forfeiture fee.</div>
        <div style="display:flex;gap:8px;"><button style="flex:1;padding:8px;background:#EF4444;color:#fff;border:none;border-radius:8px;font-size:11px;font-weight:800;">Confirm Cancel</button><button style="flex:1;padding:8px;background:#F1F5F9;color:#334155;border:none;border-radius:8px;font-size:11px;font-weight:700;">Keep Lease</button></div>
      </div>`;

    case 8: // Model I: Interactive Star Rating Prompt
      return `<div style="width:100%;max-width:320px;background:#fff;border:1px solid #E2E8F0;border-radius:20px;padding:20px;text-align:center;">
        <div style="font-size:12px;font-weight:800;color:#0F172A;margin-bottom:6px;">Rate Apartment Move-in Experience</div>
        <div style="font-size:22px;color:#F59E0B;margin-bottom:8px;">★★★★★</div>
        <div style="font-size:11px;color:#059669;font-weight:800;">5.0 • Smooth Handover</div>
      </div>`;

    case 9: // Model J: Micro Animated Confetti / Celebration Card
      return `<div style="width:100%;max-width:320px;background:linear-gradient(135deg,#EFF6FF,#FEF3C7);border:1px solid #FCD34D;border-radius:20px;padding:18px;text-align:center;">
        <span style="font-size:28px;">🎉</span>
        <div style="font-size:13px;font-weight:900;color:#0F172A;margin:6px 0;">Lease Signed & Verified!</div>
        <div style="font-size:11px;color:#64748B;">Digital keys deposited to your wallet.</div>
      </div>`;

    case 10: // Model K: Apple Cupertino Porcelain Feedback (Light)
      return `<div style="width:100%;max-width:320px;background:#FFFFFF;border:1px solid #E2E8F0;border-radius:24px;padding:20px;box-shadow:0 12px 30px rgba(15,23,42,0.04);display:flex;align-items:center;gap:12px;">
        <span style="font-size:20px;">🍏</span>
        <div><div style="font-size:13px;font-weight:800;color:#0F172A;">Porcelain System Stable</div><div style="font-size:10px;color:#059669;font-weight:700;">Haptic Feedback Confirmed</div></div>
      </div>`;

    case 11: // Model L: CRED Acid Neon Titanium Alert (Dark)
    default:
      return `<div style="width:100%;max-width:320px;background:#09090B;border:1.5px solid rgba(204,255,0,0.4);border-radius:24px;padding:20px;box-shadow:0 20px 40px rgba(0,0,0,0.8);color:#FFFFFF;display:flex;align-items:center;gap:12px;">
        <span style="font-size:20px;color:#CCFF00;">⚡</span>
        <div><div style="font-size:11px;font-weight:900;color:#CCFF00;letter-spacing:0.1em;text-transform:uppercase;">TITANIUM SYSTEM ACTIVE</div><div style="font-size:13px;font-weight:800;color:#FFFFFF;margin-top:2px;">Escrow Latency: 42ms</div></div>
      </div>`;
  }
}

module.exports = {
  renderCalendarVariants,
  renderChartVariants,
  renderFeedbackAndStatesVariants
};
