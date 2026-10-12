/**
 * Batch 3: Banking (5) + Crypto/Web3 (8) + Real Estate (7) screens = 20 screens
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
    // BATCH 3: BANKING & CRYPTO & REAL ESTATE
    // ══════════════════════════════════════════════
    case 'salung-goal-detail':
      return \`
        <div style="background:#F8FAFC;color:#0F172A;border-radius:36px;padding:24px 20px;font-family:'Inter',sans-serif;height:100%;display:flex;flex-direction:column;overflow-y:auto;">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:18px;">
            <span style="font-size:18px;cursor:pointer;">←</span>
            <span style="font-weight:700;font-size:15px;">Tokyo Trip Goal</span>
            <span style="font-size:14px;cursor:pointer;">⚙️</span>
          </div>
          <div style="background:#FFFFFF;border:1px solid #E2E8F0;border-radius:24px;padding:20px;text-align:center;box-shadow:0 4px 20px rgba(0,0,0,0.03);margin-bottom:16px;">
            <div style="width:64px;height:64px;border-radius:20px;background:#EFF6FF;display:flex;align-items:center;justify-content:center;margin:0 auto 12px;font-size:28px;">🗼</div>
            <div style="font-size:12px;color:#64748B;font-weight:600;margin-bottom:4px;">Saved so far</div>
            <div style="font-size:32px;font-weight:900;letter-spacing:-0.03em;color:#0F172A;margin-bottom:6px;">$3,450.00</div>
            <div style="font-size:11px;color:#10B981;font-weight:700;margin-bottom:16px;">69% of $5,000 target</div>
            <div style="height:8px;background:#F1F5F9;border-radius:99px;overflow:hidden;margin-bottom:12px;">
              <div style="width:69%;height:100%;background:linear-gradient(90deg,#3B82F6,#60A5FA);border-radius:99px;"></div>
            </div>
            <div style="display:flex;justify-content:space-between;font-size:10px;color:#94A3B8;font-weight:600;">
              <span>Started Jan 10</span>
              <span>Deadline Nov 15</span>
            </div>
          </div>
          <div style="display:flex;gap:10px;margin-bottom:16px;">
            <button style="flex:1;padding:12px;background:#0F172A;color:#fff;border:none;border-radius:14px;font-weight:700;font-size:12px;cursor:pointer;">+ Quick Top-Up</button>
            <button style="flex:1;padding:12px;background:#FFFFFF;border:1px solid #E2E8F0;color:#0F172A;border-radius:14px;font-weight:700;font-size:12px;cursor:pointer;">Auto-Save Rule</button>
          </div>
          <div style="font-size:12px;font-weight:700;margin-bottom:10px;">Recent Deposits</div>
          <div style="display:flex;flex-direction:column;gap:8px;">
            <div style="background:#fff;border:1px solid #F1F5F9;border-radius:14px;padding:12px;display:flex;justify-content:space-between;align-items:center;">
              <div>
                <div style="font-size:12px;font-weight:700;">Weekly Round-up</div>
                <div style="font-size:10px;color:#94A3B8;">Yesterday, 4:15 PM</div>
              </div>
              <div style="font-size:13px;font-weight:800;color:#10B981;">+$42.50</div>
            </div>
            <div style="background:#fff;border:1px solid #F1F5F9;border-radius:14px;padding:12px;display:flex;justify-content:space-between;align-items:center;">
              <div>
                <div style="font-size:12px;font-weight:700;">Monthly Salary Sweep</div>
                <div style="font-size:10px;color:#94A3B8;">Oct 1, 9:00 AM</div>
              </div>
              <div style="font-size:13px;font-weight:800;color:#10B981;">+$500.00</div>
            </div>
          </div>
        </div>
      \`;

    case 'monero-wallet':
      return \`
        <div style="background:#000000;color:#FFFFFF;border-radius:36px;padding:24px 20px;font-family:'JetBrains Mono',monospace;height:100%;display:flex;flex-direction:column;box-shadow:inset 0 0 40px rgba(255,102,0,0.05);">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:24px;">
            <div style="display:flex;align-items:center;gap:8px;">
              <span style="width:24px;height:24px;border-radius:50%;background:#FF6600;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:900;color:#000;">M</span>
              <span style="font-size:14px;font-weight:800;letter-spacing:0.05em;color:#FF6600;">XMR VAULT</span>
            </div>
            <span style="font-size:9px;background:#18181B;border:1px solid #27272A;color:#10B981;padding:3px 8px;border-radius:99px;">● SYNCHRONIZED</span>
          </div>
          <div style="background:linear-gradient(180deg,#111111 0%,#0A0A0A 100%);border:1px solid #222;border-radius:20px;padding:20px;margin-bottom:20px;position:relative;">
            <div style="font-size:9px;color:#71717A;text-transform:uppercase;letter-spacing:0.1em;margin-bottom:6px;">Stealth Balance</div>
            <div style="font-size:28px;font-weight:800;color:#FFF;letter-spacing:-0.02em;margin-bottom:4px;">142.8592 XMR</div>
            <div style="font-size:11px;color:#FF6600;font-weight:700;">≈ $22,467.45 USD</div>
            <div style="margin-top:16px;padding:8px 12px;background:#050505;border:1px solid #1A1A1A;border-radius:10px;font-size:9px;color:#A1A1AA;word-break:break-all;">
              888tNkZrpn6JsE...9bFxZ (Primary Subaddress)
            </div>
          </div>
          <div style="display:flex;gap:10px;margin-bottom:20px;">
            <button style="flex:1;padding:12px;background:#FF6600;color:#000;border:none;border-radius:12px;font-weight:800;font-size:11px;cursor:pointer;letter-spacing:0.05em;">SEND PRIVATE</button>
            <button style="flex:1;padding:12px;background:#18181B;border:1px solid #27272A;color:#FFF;border-radius:12px;font-weight:700;font-size:11px;cursor:pointer;">RECEIVE</button>
          </div>
          <div style="font-size:10px;color:#71717A;text-transform:uppercase;letter-spacing:0.08em;margin-bottom:10px;">Ring Signature Log</div>
          <div style="display:flex;flex-direction:column;gap:8px;font-size:10px;">
            <div style="background:#0D0D0D;border:1px solid #1A1A1A;padding:10px 12px;border-radius:10px;display:flex;justify-content:space-between;">
              <span style="color:#A1A1AA;">16-Ring Mixin</span>
              <span style="color:#10B981;font-weight:700;">+4.500 XMR</span>
            </div>
            <div style="background:#0D0D0D;border:1px solid #1A1A1A;padding:10px 12px;border-radius:10px;display:flex;justify-content:space-between;">
              <span style="color:#A1A1AA;">Torus Relay</span>
              <span style="color:#EF4444;font-weight:700;">-12.200 XMR</span>
            </div>
          </div>
        </div>
      \`;

    case 'shipping-wallet':
      return \`
        <div style="background:#FAFAFA;color:#171717;border-radius:36px;padding:24px 20px;font-family:'Inter',sans-serif;height:100%;display:flex;flex-direction:column;">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:20px;">
            <span style="font-weight:800;font-size:16px;letter-spacing:-0.02em;">Logistics Hub</span>
            <div style="font-size:11px;background:#000;color:#fff;padding:4px 10px;border-radius:99px;font-weight:700;">PRO TIER</div>
          </div>
          <div style="background:#000;color:#fff;border-radius:20px;padding:20px;margin-bottom:18px;">
            <div style="font-size:11px;color:#A3A3A3;margin-bottom:4px;">Prepaid Freight Escrow</div>
            <div style="font-size:30px;font-weight:900;letter-spacing:-0.03em;margin-bottom:12px;">$12,840.00</div>
            <div style="display:flex;gap:12px;font-size:10px;color:#D4D4D4;">
              <span>📦 18 In-Transit</span>
              <span>✅ 142 Delivered</span>
            </div>
          </div>
          <div style="font-size:12px;font-weight:800;margin-bottom:10px;letter-spacing:-0.01em;">Active Shipments</div>
          <div style="display:flex;flex-direction:column;gap:10px;flex:1;">
            <div style="background:#FFFFFF;border:1px solid #E5E5E5;border-radius:16px;padding:14px;">
              <div style="display:flex;justify-content:space-between;margin-bottom:6px;">
                <span style="font-size:12px;font-weight:700;">Air Cargo #SHP-9921</span>
                <span style="font-size:10px;background:#DCFCE7;color:#15803D;padding:2px 8px;border-radius:99px;font-weight:700;">Customs Clear</span>
              </div>
              <div style="font-size:10px;color:#737373;margin-bottom:8px;">Frankfurt → Singapore (ETA 6h)</div>
              <div style="height:4px;background:#F5F5F5;border-radius:99px;overflow:hidden;">
                <div style="width:75%;height:100%;background:#000;border-radius:99px;"></div>
              </div>
            </div>
            <div style="background:#FFFFFF;border:1px solid #E5E5E5;border-radius:16px;padding:14px;">
              <div style="display:flex;justify-content:space-between;margin-bottom:6px;">
                <span style="font-size:12px;font-weight:700;">Sea Freight #SHP-8842</span>
                <span style="font-size:10px;background:#FEF9C3;color:#854D0E;padding:2px 8px;border-radius:99px;font-weight:700;">Port Docking</span>
              </div>
              <div style="font-size:10px;color:#737373;margin-bottom:8px;">Rotterdam → Mumbai (ETA 2d)</div>
              <div style="height:4px;background:#F5F5F5;border-radius:99px;overflow:hidden;">
                <div style="width:40%;height:100%;background:#000;border-radius:99px;"></div>
              </div>
            </div>
          </div>
          <button style="width:100%;padding:14px;background:#000;color:#fff;border:none;border-radius:16px;font-weight:800;font-size:13px;cursor:pointer;margin-top:auto;">+ Create Air Waybill</button>
        </div>
      \`;

    case 'pastel-finance-home':
      return \`
        <div style="background:#FDFBF7;color:#2D2D2D;border-radius:36px;padding:24px 20px;font-family:'Inter',sans-serif;height:100%;display:flex;flex-direction:column;overflow-y:auto;">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:20px;">
            <div style="display:flex;align-items:center;gap:10px;">
              <div style="width:36px;height:36px;border-radius:50%;background:#FCE7F3;display:flex;align-items:center;justify-content:center;font-size:16px;">🌸</div>
              <div>
                <div style="font-size:10px;color:#78716C;font-weight:600;">Good morning,</div>
                <div style="font-size:14px;font-weight:800;">Sophia Ellis</div>
              </div>
            </div>
            <div style="width:34px;height:34px;border-radius:50%;background:#F5F5F4;display:flex;align-items:center;justify-content:center;font-size:14px;">🔍</div>
          </div>
          <div style="background:#FFF1F2;border:1px solid #FFE4E6;border-radius:24px;padding:20px;margin-bottom:16px;">
            <div style="font-size:11px;color:#9F1239;font-weight:700;">Net Liquidity</div>
            <div style="font-size:32px;font-weight:900;letter-spacing:-0.03em;color:#881337;margin:6px 0;">$48,290.15</div>
            <div style="display:inline-block;background:#FFE4E6;color:#BE123C;padding:4px 10px;border-radius:99px;font-size:10px;font-weight:800;">+12.4% vs last month</div>
          </div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:16px;">
            <div style="background:#FEF3C7;border-radius:20px;padding:16px;">
              <div style="font-size:18px;margin-bottom:6px;">🍯</div>
              <div style="font-size:10px;color:#92400E;font-weight:700;">Honey Pot</div>
              <div style="font-size:18px;font-weight:900;color:#78350F;">$14,200</div>
            </div>
            <div style="background:#E0E7FF;border-radius:20px;padding:16px;">
              <div style="font-size:18px;margin-bottom:6px;">🫐</div>
              <div style="font-size:10px;color:#3730A3;font-weight:700;">Investments</div>
              <div style="font-size:18px;font-weight:900;color:#312E81;">$22,540</div>
            </div>
          </div>
          <div style="font-size:12px;font-weight:800;margin-bottom:10px;">Quick Transfers</div>
          <div style="display:flex;gap:12px;overflow-x:auto;padding-bottom:6px;">
            <div style="display:flex;flex-direction:column;align-items:center;gap:4px;">
              <div style="width:44px;height:44px;border-radius:50%;background:#D1FAE5;display:flex;align-items:center;justify-content:center;font-size:18px;">🌿</div>
              <span style="font-size:10px;font-weight:700;">Rent</span>
            </div>
            <div style="display:flex;flex-direction:column;align-items:center;gap:4px;">
              <div style="width:44px;height:44px;border-radius:50%;background:#FEE2E2;display:flex;align-items:center;justify-content:center;font-size:18px;">⚡</div>
              <span style="font-size:10px;font-weight:700;">Bills</span>
            </div>
            <div style="display:flex;flex-direction:column;align-items:center;gap:4px;">
              <div style="width:44px;height:44px;border-radius:50%;background:#DBEAFE;display:flex;align-items:center;justify-content:center;font-size:18px;">✈️</div>
              <span style="font-size:10px;font-weight:700;">Travel</span>
            </div>
            <div style="display:flex;flex-direction:column;align-items:center;gap:4px;">
              <div style="width:44px;height:44px;border-radius:50%;background:#FEF3C7;display:flex;align-items:center;justify-content:center;font-size:18px;">☕</div>
              <span style="font-size:10px;font-weight:700;">Dining</span>
            </div>
          </div>
        </div>
      \`;

    case 'pastel-finance-chart':
      return \`
        <div style="background:#FAF5FF;color:#3B0764;border-radius:36px;padding:24px 20px;font-family:'Inter',sans-serif;height:100%;display:flex;flex-direction:column;">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:20px;">
            <span style="font-size:16px;cursor:pointer;">←</span>
            <span style="font-weight:800;font-size:15px;">Monthly Spline</span>
            <span style="font-size:12px;background:#F3E8FF;padding:4px 10px;border-radius:99px;font-weight:700;">2026</span>
          </div>
          <div style="background:#FFFFFF;border:1px solid #F3E8FF;border-radius:24px;padding:20px;margin-bottom:18px;box-shadow:0 8px 30px rgba(168,85,247,0.06);">
            <div style="font-size:11px;color:#7E22CE;font-weight:700;">Cash Inflow Trend</div>
            <div style="font-size:28px;font-weight:900;margin:6px 0;">+$8,450.00</div>
            <!-- Interactive SVG Spline Wave -->
            <svg viewBox="0 0 300 100" style="width:100%;height:100px;margin-top:10px;">
              <defs>
                <linearGradient id="pastelGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stop-color="#C084FC" stop-opacity="0.4"/>
                  <stop offset="100%" stop-color="#C084FC" stop-opacity="0.0"/>
                </linearGradient>
              </defs>
              <path d="M0,80 Q50,20 100,50 T200,30 T300,10 L300,100 L0,100 Z" fill="url(#pastelGrad)" />
              <path d="M0,80 Q50,20 100,50 T200,30 T300,10" fill="none" stroke="#9333EA" stroke-width="3" stroke-linecap="round" />
              <circle cx="200" cy="30" r="5" fill="#9333EA" stroke="#fff" stroke-width="2"/>
            </svg>
            <div style="display:flex;justify-content:space-between;font-size:10px;color:#A855F7;font-weight:700;margin-top:6px;">
              <span>Week 1</span><span>Week 2</span><span>Week 3</span><span>Week 4</span>
            </div>
          </div>
          <div style="font-size:12px;font-weight:800;margin-bottom:10px;">Breakdown by Category</div>
          <div style="display:flex;flex-direction:column;gap:8px;">
            <div style="background:#fff;border-radius:14px;padding:12px;display:flex;justify-content:space-between;align-items:center;">
              <span style="font-size:12px;font-weight:700;">🏠 Rental Yield</span>
              <span style="font-weight:800;font-size:12px;color:#16A34A;">$5,200.00 (62%)</span>
            </div>
            <div style="background:#fff;border-radius:14px;padding:12px;display:flex;justify-content:space-between;align-items:center;">
              <span style="font-size:12px;font-weight:700;">📈 Index Dividends</span>
              <span style="font-weight:800;font-size:12px;color:#2563EB;">$2,150.00 (25%)</span>
            </div>
            <div style="background:#fff;border-radius:14px;padding:12px;display:flex;justify-content:space-between;align-items:center;">
              <span style="font-size:12px;font-weight:700;">🤝 Consulting Fees</span>
              <span style="font-weight:800;font-size:12px;color:#9333EA;">$1,100.00 (13%)</span>
            </div>
          </div>
        </div>
      \`;

    case 'trantor-dashboard':
      return \`
        <div style="background:#0B0E14;color:#E6EDF3;border-radius:36px;padding:24px 20px;font-family:'Inter',sans-serif;height:100%;display:flex;flex-direction:column;">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:18px;">
            <div style="display:flex;align-items:center;gap:8px;">
              <div style="width:28px;height:28px;border-radius:8px;background:#38BDF8;color:#0B0E14;font-weight:900;display:flex;align-items:center;justify-content:center;font-size:14px;">T</div>
              <span style="font-weight:800;font-size:15px;letter-spacing:0.02em;">TRANTOR PRO</span>
            </div>
            <div style="background:#1E293B;padding:4px 10px;border-radius:99px;font-size:10px;color:#38BDF8;font-weight:700;">BTC/USDT</div>
          </div>
          <div style="background:#161B22;border:1px solid #30363D;border-radius:20px;padding:18px;margin-bottom:16px;">
            <div style="display:flex;justify-content:space-between;align-items:baseline;margin-bottom:6px;">
              <span style="font-size:26px;font-weight:900;color:#FFF;letter-spacing:-0.02em;">$97,420.50</span>
              <span style="color:#22C55E;font-size:12px;font-weight:800;">+5.82% ▲</span>
            </div>
            <!-- Candlestick Graphic Mock -->
            <div style="display:flex;align-items:flex-end;gap:8px;height:70px;padding:10px 0;border-bottom:1px solid #21262D;">
              <div style="flex:1;height:40px;background:#22C55E;border-radius:2px;position:relative;"><div style="position:absolute;top:-8px;bottom:-8px;left:50%;width:1px;background:#22C55E;"></div></div>
              <div style="flex:1;height:55px;background:#22C55E;border-radius:2px;position:relative;"><div style="position:absolute;top:-6px;bottom:-6px;left:50%;width:1px;background:#22C55E;"></div></div>
              <div style="flex:1;height:30px;background:#EF4444;border-radius:2px;position:relative;"><div style="position:absolute;top:-5px;bottom:-5px;left:50%;width:1px;background:#EF4444;"></div></div>
              <div style="flex:1;height:65px;background:#22C55E;border-radius:2px;position:relative;"><div style="position:absolute;top:-4px;bottom:-4px;left:50%;width:1px;background:#22C55E;"></div></div>
              <div style="flex:1;height:45px;background:#EF4444;border-radius:2px;position:relative;"><div style="position:absolute;top:-8px;bottom:-8px;left:50%;width:1px;background:#EF4444;"></div></div>
              <div style="flex:1;height:70px;background:#22C55E;border-radius:2px;position:relative;"><div style="position:absolute;top:-2px;bottom:-2px;left:50%;width:1px;background:#22C55E;"></div></div>
            </div>
            <div style="display:flex;justify-content:space-between;font-size:10px;color:#8B949E;margin-top:8px;">
              <span>24h Vol: 42.1K BTC</span>
              <span>RSI: 64.2</span>
            </div>
          </div>
          <div style="display:flex;gap:10px;margin-bottom:16px;">
            <button style="flex:1;padding:12px;background:#22C55E;color:#052e16;border:none;border-radius:12px;font-weight:800;font-size:12px;cursor:pointer;">LONG / BUY</button>
            <button style="flex:1;padding:12px;background:#EF4444;color:#450a0a;border:none;border-radius:12px;font-weight:800;font-size:12px;cursor:pointer;">SHORT / SELL</button>
          </div>
          <div style="font-size:11px;font-weight:700;color:#8B949E;margin-bottom:8px;">OPEN POSITIONS</div>
          <div style="background:#161B22;border:1px solid #30363D;border-radius:14px;padding:12px;display:flex;justify-content:space-between;align-items:center;">
            <div>
              <div style="font-size:12px;font-weight:800;color:#FFF;">BTCUSDT 10x Cross</div>
              <div style="font-size:10px;color:#8B949E;">Entry: $94,100 • Margin: $5,000</div>
            </div>
            <div style="text-align:right;">
              <div style="font-size:12px;font-weight:800;color:#22C55E;">+$1,760.50</div>
              <div style="font-size:9px;color:#22C55E;">+35.21% ROE</div>
            </div>
          </div>
        </div>
      \`;

    case 'trantor-goal-pool':
      return \`
        <div style="background:#0B0E14;color:#fff;border-radius:36px;padding:24px 20px;font-family:'Inter',sans-serif;height:100%;display:flex;flex-direction:column;">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:20px;">
            <span style="font-size:16px;cursor:pointer;">←</span>
            <span style="font-weight:800;font-size:15px;">Syndicate Pool #402</span>
            <span style="font-size:14px;">👥 4/5</span>
          </div>
          <div style="background:linear-gradient(135deg,#1E293B,#0F172A);border:1px solid #334155;border-radius:24px;padding:20px;margin-bottom:16px;position:relative;">
            <div style="font-size:11px;color:#94A3B8;font-weight:700;">Total Pool Collateral</div>
            <div style="font-size:32px;font-weight:900;letter-spacing:-0.03em;color:#38BDF8;margin:6px 0;">$250,000.00</div>
            <div style="font-size:11px;color:#10B981;font-weight:700;">Target: Bay Area Multi-Family Loft</div>
            <div style="height:6px;background:#334155;border-radius:99px;margin-top:14px;overflow:hidden;">
              <div style="width:83%;height:100%;background:linear-gradient(90deg,#38BDF8,#818CF8);border-radius:99px;"></div>
            </div>
          </div>
          <div style="font-size:12px;font-weight:700;margin-bottom:10px;">Syndicate Members</div>
          <div style="display:flex;flex-direction:column;gap:8px;flex:1;">
            <div style="background:#161B22;border:1px solid #30363D;border-radius:14px;padding:12px;display:flex;justify-content:space-between;align-items:center;">
              <div style="display:flex;align-items:center;gap:10px;">
                <div style="width:32px;height:32px;border-radius:50%;background:#F59E0B;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:12px;color:#000;">JD</div>
                <div>
                  <div style="font-size:12px;font-weight:700;">Joshua D. (Lead)</div>
                  <div style="font-size:9px;color:#94A3B8;">40% Share</div>
                </div>
              </div>
              <span style="font-size:12px;font-weight:800;color:#38BDF8;">$100,000</span>
            </div>
            <div style="background:#161B22;border:1px solid #30363D;border-radius:14px;padding:12px;display:flex;justify-content:space-between;align-items:center;">
              <div style="display:flex;align-items:center;gap:10px;">
                <div style="width:32px;height:32px;border-radius:50%;background:#8B5CF6;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:12px;color:#fff;">AK</div>
                <div>
                  <div style="font-size:12px;font-weight:700;">Alex K.</div>
                  <div style="font-size:9px;color:#94A3B8;">30% Share</div>
                </div>
              </div>
              <span style="font-size:12px;font-weight:800;color:#38BDF8;">$75,000</span>
            </div>
          </div>
          <button style="width:100%;padding:14px;background:#38BDF8;color:#0B0E14;border:none;border-radius:16px;font-weight:800;font-size:13px;cursor:pointer;margin-top:auto;">Deposit Final $25,000</button>
        </div>
      \`;

    case 'web3-onboard-cards':
      return \`
        <div style="background:radial-gradient(circle at 50% 10%,#2E1065 0%,#090A1A 80%);color:#fff;border-radius:36px;padding:24px 20px;font-family:'Inter',sans-serif;height:100%;display:flex;flex-direction:column;justify-content:space-between;text-align:center;">
          <div style="display:flex;justify-content:flex-end;">
            <span style="font-size:12px;color:#A78BFA;font-weight:700;cursor:pointer;">Skip</span>
          </div>
          <!-- Stacked Glass Asset Cards -->
          <div style="position:relative;height:240px;display:flex;align-items:center;justify-content:center;">
            <div style="position:absolute;width:200px;height:130px;background:rgba(139,92,246,0.15);border:1px solid rgba(139,92,246,0.3);border-radius:20px;transform:translateY(-24px) scale(0.85);backdrop-filter:blur(10px);"></div>
            <div style="position:absolute;width:220px;height:140px;background:rgba(167,139,250,0.2);border:1px solid rgba(167,139,250,0.4);border-radius:22px;transform:translateY(-12px) scale(0.92);backdrop-filter:blur(12px);"></div>
            <div style="position:absolute;width:240px;height:150px;background:linear-gradient(135deg,rgba(192,132,252,0.4),rgba(126,34,206,0.2));border:1px solid rgba(216,180,254,0.6);border-radius:24px;padding:18px;backdrop-filter:blur(20px);box-shadow:0 20px 40px rgba(0,0,0,0.5);display:flex;flex-direction:column;justify-content:space-between;text-align:left;">
              <div style="display:flex;justify-content:space-between;align-items:center;">
                <span style="font-size:11px;font-weight:700;color:#E9D5FF;">RentenPe On-Chain Lease</span>
                <span style="font-size:16px;">🔑</span>
              </div>
              <div>
                <div style="font-size:18px;font-weight:900;color:#FFF;">Property NFT #809</div>
                <div style="font-size:10px;color:#C4B5FD;">Yield: 9.8% APY Paid Daily</div>
              </div>
            </div>
          </div>
          <div>
            <div style="font-size:24px;font-weight:900;letter-spacing:-0.02em;margin-bottom:10px;background:linear-gradient(90deg,#DDD6FE,#C084FC);-webkit-background-clip:text;-webkit-text-fill-color:transparent;">Decentralized Leases</div>
            <div style="font-size:12px;color:#94A3B8;line-height:1.5;margin-bottom:24px;padding:0 10px;">Tokenize real-world rental income and earn daily smart-contract yields straight to your custody.</div>
            <button style="width:100%;padding:16px;background:linear-gradient(90deg,#7C3AED,#A855F7);color:#fff;border:none;border-radius:18px;font-weight:800;font-size:14px;cursor:pointer;box-shadow:0 10px 25px rgba(124,58,237,0.4);">Connect Web3 Wallet</button>
          </div>
        </div>
      \`;

    case 'web3-nft-gallery':
      return \`
        <div style="background:#09090B;color:#fff;border-radius:36px;padding:24px 20px;font-family:'Inter',sans-serif;height:100%;display:flex;flex-direction:column;overflow-y:auto;">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:18px;">
            <span style="font-weight:800;font-size:16px;">BAYC Curated Vault</span>
            <span style="font-size:11px;background:#27272A;padding:4px 10px;border-radius:99px;color:#A1A1AA;">Floor: 24.5 ETH</span>
          </div>
          <div style="border-radius:24px;overflow:hidden;background:#18181B;border:1px solid #27272A;margin-bottom:16px;">
            <div style="height:180px;background:linear-gradient(135deg,#3B82F6,#8B5CF6);display:flex;align-items:center;justify-content:center;font-size:64px;">
              🦍
            </div>
            <div style="padding:16px;">
              <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px;">
                <span style="font-size:14px;font-weight:800;">Bored Ape #7491</span>
                <span style="font-size:13px;font-weight:800;color:#38BDF8;">32.00 ETH</span>
              </div>
              <div style="font-size:10px;color:#71717A;">Laser Eyes • Golden Fur • Captain Hat</div>
            </div>
          </div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
            <div style="background:#18181B;border:1px solid #27272A;border-radius:16px;padding:10px;">
              <div style="height:80px;background:#6366F1;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:32px;margin-bottom:8px;">🐵</div>
              <div style="font-size:11px;font-weight:700;">#4920</div>
              <div style="font-size:10px;color:#38BDF8;font-weight:800;">26.4 ETH</div>
            </div>
            <div style="background:#18181B;border:1px solid #27272A;border-radius:16px;padding:10px;">
              <div style="height:80px;background:#EC4899;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:32px;margin-bottom:8px;">💎</div>
              <div style="font-size:11px;font-weight:700;">#1082</div>
              <div style="font-size:10px;color:#38BDF8;font-weight:800;">29.1 ETH</div>
            </div>
          </div>
        </div>
      \`;

    case 'web3-purple-auth':
      return \`
        <div style="background:#12072B;color:#fff;border-radius:36px;padding:24px 20px;font-family:'Inter',sans-serif;height:100%;display:flex;flex-direction:column;justify-content:space-between;">
          <div>
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:28px;">
              <span style="font-size:18px;">←</span>
              <span style="font-size:12px;color:#A78BFA;font-weight:700;">Help</span>
            </div>
            <div style="width:52px;height:52px;border-radius:18px;background:linear-gradient(135deg,#7C3AED,#C084FC);display:flex;align-items:center;justify-content:center;font-size:24px;margin-bottom:16px;">
              🟣
            </div>
            <div style="font-size:22px;font-weight:900;letter-spacing:-0.02em;margin-bottom:6px;">Web3 Passkey SSO</div>
            <div style="font-size:12px;color:#A78BFA;line-height:1.5;margin-bottom:24px;">Biometric seedless authentication powered by ERC-4337 account abstraction.</div>
            
            <div style="display:flex;flex-direction:column;gap:12px;">
              <button style="padding:14px;background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.15);border-radius:16px;color:#fff;font-weight:700;font-size:13px;display:flex;align-items:center;justify-content:center;gap:10px;cursor:pointer;">
                <span>🍎</span> Sign in with Apple FaceID
              </button>
              <button style="padding:14px;background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.15);border-radius:16px;color:#fff;font-weight:700;font-size:13px;display:flex;align-items:center;justify-content:center;gap:10px;cursor:pointer;">
                <span>🦊</span> Connect MetaMask
              </button>
              <button style="padding:14px;background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.15);border-radius:16px;color:#fff;font-weight:700;font-size:13px;display:flex;align-items:center;justify-content:center;gap:10px;cursor:pointer;">
                <span>👻</span> Connect Phantom (Solana)
              </button>
            </div>
          </div>
          <div style="text-align:center;font-size:10px;color:#6B7280;">
            By signing in you accept RentenPe Smart Contract Terms & Zero-Knowledge Privacy.
          </div>
        </div>
      \`;

    case 'fuse-plus-membership':
      return \`
        <div style="background:#000;color:#fff;border-radius:36px;padding:24px 20px;font-family:'Inter',sans-serif;height:100%;display:flex;flex-direction:column;justify-content:space-between;border:1px solid #1F1F1F;">
          <div>
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:20px;">
              <span style="font-size:14px;font-weight:900;letter-spacing:0.1em;color:#9945FF;">FUSE+ VIP</span>
              <span style="font-size:10px;background:#14F195;color:#000;padding:3px 8px;border-radius:99px;font-weight:800;">SOLANA GENESIS</span>
            </div>
            <!-- Obsidian VIP Card -->
            <div style="background:linear-gradient(135deg,#1E1E24 0%,#0A0A0C 100%);border:1px solid #33333E;border-radius:24px;padding:22px;box-shadow:0 20px 40px rgba(153,69,255,0.15);margin-bottom:20px;">
              <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:28px;">
                <span style="font-size:12px;font-weight:800;color:#A1A1AA;">BLACK MEMBERSHIP</span>
                <span style="font-size:18px;">⚡</span>
              </div>
              <div style="font-size:20px;font-weight:900;letter-spacing:0.15em;font-family:monospace;color:#FFF;margin-bottom:12px;">7920 •••• •••• 1092</div>
              <div style="display:flex;justify-content:space-between;font-size:10px;color:#71717A;">
                <span>VALID THRU: 12/30</span>
                <span style="color:#14F195;font-weight:700;">0% RENT FEES</span>
              </div>
            </div>
            <div style="font-size:12px;font-weight:800;margin-bottom:12px;">VIP Privilege Perks</div>
            <div style="display:flex;flex-direction:column;gap:10px;font-size:11px;">
              <div style="display:flex;align-items:center;gap:10px;background:#0C0C0E;padding:12px;border-radius:14px;border:1px solid #1C1C22;">
                <span style="font-size:16px;">🛡️</span>
                <span>Zero Security Deposit via Smart Bond</span>
              </div>
              <div style="display:flex;align-items:center;gap:10px;background:#0C0C0E;padding:12px;border-radius:14px;border:1px solid #1C1C22;">
                <span style="font-size:16px;">💎</span>
                <span>3x Rewards Cashback on All Rent Payments</span>
              </div>
              <div style="display:flex;align-items:center;gap:10px;background:#0C0C0E;padding:12px;border-radius:14px;border:1px solid #1C1C22;">
                <span style="font-size:16px;">🛎️</span>
                <span>24/7 Dedicated Concierge & Move-In Helper</span>
              </div>
            </div>
          </div>
          <button style="width:100%;padding:16px;background:linear-gradient(90deg,#9945FF,#14F195);color:#000;border:none;border-radius:18px;font-weight:900;font-size:13px;cursor:pointer;letter-spacing:0.05em;">UPGRADE TO FUSE+ ($19/MO)</button>
        </div>
      \`;

    case 'crypto-bento-card':
      return \`
        <div style="background:#030712;color:#F9FAFB;border-radius:36px;padding:24px 20px;font-family:'Inter',sans-serif;height:100%;display:flex;flex-direction:column;overflow-y:auto;">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:20px;">
            <span style="font-weight:800;font-size:16px;">Protocol Staking</span>
            <span style="font-size:11px;background:#1F2937;color:#10B981;padding:4px 10px;border-radius:99px;font-weight:700;">Audited by CertiK</span>
          </div>
          <!-- Bento Grid of Protocol Yields -->
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:14px;">
            <div style="background:rgba(31,41,55,0.6);border:1px solid rgba(75,85,99,0.4);border-radius:20px;padding:16px;backdrop-filter:blur(10px);">
              <div style="font-size:11px;color:#9CA3AF;margin-bottom:4px;">USDC Vault</div>
              <div style="font-size:22px;font-weight:900;color:#10B981;">14.2%</div>
              <div style="font-size:9px;color:#6B7280;margin-top:4px;">Daily Auto-Compound</div>
            </div>
            <div style="background:rgba(31,41,55,0.6);border:1px solid rgba(75,85,99,0.4);border-radius:20px;padding:16px;backdrop-filter:blur(10px);">
              <div style="font-size:11px;color:#9CA3AF;margin-bottom:4px;">ETH Liquid Restake</div>
              <div style="font-size:22px;font-weight:900;color:#60A5FA;">6.8%</div>
              <div style="font-size:9px;color:#6B7280;margin-top:4px;">EigenLayer Protected</div>
            </div>
          </div>
          <div style="background:linear-gradient(135deg,#1E1B4B,#312E81);border:1px solid #4338CA;border-radius:20px;padding:18px;margin-bottom:16px;">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">
              <span style="font-size:12px;font-weight:800;color:#E0E7FF;">Your Staked Collateral</span>
              <span style="font-size:10px;background:#4F46E5;color:#fff;padding:2px 8px;border-radius:99px;">Active</span>
            </div>
            <div style="font-size:28px;font-weight:900;color:#fff;margin-bottom:4px;">$42,190.00</div>
            <div style="font-size:11px;color:#A5B4FC;">Claimable: +$312.45 USDC</div>
          </div>
          <button style="width:100%;padding:14px;background:#6366F1;color:#fff;border:none;border-radius:16px;font-weight:800;font-size:13px;cursor:pointer;margin-top:auto;">Claim All Rewards</button>
        </div>
      \`;

    case 'crypto-integrations':
      return \`
        <div style="background:#0F172A;color:#fff;border-radius:36px;padding:24px 20px;font-family:'Inter',sans-serif;height:100%;display:flex;flex-direction:column;">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:20px;">
            <span style="font-weight:800;font-size:15px;">Connected Blockchains</span>
            <span style="font-size:11px;color:#38BDF8;font-weight:700;">+ Add Chain</span>
          </div>
          <div style="display:flex;flex-direction:column;gap:10px;flex:1;">
            <div style="background:#1E293B;border:1px solid #334155;border-radius:18px;padding:14px;display:flex;justify-content:space-between;align-items:center;">
              <div style="display:flex;align-items:center;gap:12px;">
                <div style="width:36px;height:36px;border-radius:50%;background:#627EEA;display:flex;align-items:center;justify-content:center;font-weight:900;">Ξ</div>
                <div>
                  <div style="font-size:13px;font-weight:800;">Ethereum Mainnet</div>
                  <div style="font-size:10px;color:#94A3B8;">0x49e...88b1 • 4.12 ETH</div>
                </div>
              </div>
              <span style="color:#10B981;font-size:14px;">●</span>
            </div>
            <div style="background:#1E293B;border:1px solid #334155;border-radius:18px;padding:14px;display:flex;justify-content:space-between;align-items:center;">
              <div style="display:flex;align-items:center;gap:12px;">
                <div style="width:36px;height:36px;border-radius:50%;background:#9945FF;display:flex;align-items:center;justify-content:center;font-weight:900;">◎</div>
                <div>
                  <div style="font-size:13px;font-weight:800;">Solana High-Speed</div>
                  <div style="font-size:10px;color:#94A3B8;">9xK3...pQ8 • 184.2 SOL</div>
                </div>
              </div>
              <span style="color:#10B981;font-size:14px;">●</span>
            </div>
            <div style="background:#1E293B;border:1px solid #334155;border-radius:18px;padding:14px;display:flex;justify-content:space-between;align-items:center;">
              <div style="display:flex;align-items:center;gap:12px;">
                <div style="width:36px;height:36px;border-radius:50%;background:#E84142;display:flex;align-items:center;justify-content:center;font-weight:900;">▲</div>
                <div>
                  <div style="font-size:13px;font-weight:800;">Avalanche Subnet</div>
                  <div style="font-size:10px;color:#94A3B8;">0x12a...77cd • 450 AVAX</div>
                </div>
              </div>
              <span style="color:#10B981;font-size:14px;">●</span>
            </div>
          </div>
          <button style="width:100%;padding:14px;background:#38BDF8;color:#0F172A;border:none;border-radius:16px;font-weight:800;font-size:13px;cursor:pointer;margin-top:auto;">Sync Cross-Chain Assets</button>
        </div>
      \`;

    case 'findora-tenant-screening':
      return \`
        <div style="background:#FFFFFF;color:#0F172A;border-radius:36px;padding:24px 20px;font-family:'Inter',sans-serif;height:100%;display:flex;flex-direction:column;overflow-y:auto;">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:18px;">
            <span style="font-size:16px;cursor:pointer;">←</span>
            <span style="font-weight:800;font-size:15px;">Tenant Screening</span>
            <span style="font-size:12px;background:#DCFCE7;color:#15803D;padding:3px 8px;border-radius:99px;font-weight:700;">PASSED</span>
          </div>
          <div style="text-align:center;padding:16px 0;border-bottom:1px solid #F1F5F9;margin-bottom:16px;">
            <div style="width:72px;height:72px;border-radius:50%;background:#EFF6FF;border:4px solid #3B82F6;display:flex;align-items:center;justify-content:center;margin:0 auto 10px;font-size:24px;font-weight:900;color:#1D4ED8;">
              840
            </div>
            <div style="font-size:14px;font-weight:800;">Exceptional RentenPe Score</div>
            <div style="font-size:11px;color:#64748B;">Top 2% of reliable urban tenants</div>
          </div>
          <div style="display:flex;flex-direction:column;gap:10px;flex:1;">
            <div style="background:#F8FAFC;border:1px solid #E2E8F0;border-radius:14px;padding:12px;display:flex;justify-content:space-between;">
              <span style="font-size:12px;color:#475569;">CIBIL / Experian Credit</span>
              <span style="font-size:12px;font-weight:800;color:#0F172A;">790 (Tier 1)</span>
            </div>
            <div style="background:#F8FAFC;border:1px solid #E2E8F0;border-radius:14px;padding:12px;display:flex;justify-content:space-between;">
              <span style="font-size:12px;color:#475569;">Income-to-Rent Ratio</span>
              <span style="font-size:12px;font-weight:800;color:#10B981;">4.2x (Req: 3x)</span>
            </div>
            <div style="background:#F8FAFC;border:1px solid #E2E8F0;border-radius:14px;padding:12px;display:flex;justify-content:space-between;">
              <span style="font-size:12px;color:#475569;">Past Eviction History</span>
              <span style="font-size:12px;font-weight:800;color:#10B981;">Clean (0 Records)</span>
            </div>
            <div style="background:#F8FAFC;border:1px solid #E2E8F0;border-radius:14px;padding:12px;display:flex;justify-content:space-between;">
              <span style="font-size:12px;color:#475569;">Employer Verification</span>
              <span style="font-size:12px;font-weight:800;color:#0F172A;">Google India Pvt Ltd</span>
            </div>
          </div>
          <button style="width:100%;padding:14px;background:#0F172A;color:#fff;border:none;border-radius:16px;font-weight:800;font-size:13px;cursor:pointer;margin-top:auto;">Issue Pre-Approved Lease</button>
        </div>
      \`;

    case 'findora-move-in-checklist':
      return \`
        <div style="background:#FFFFFF;color:#0F172A;border-radius:36px;padding:24px 20px;font-family:'Inter',sans-serif;height:100%;display:flex;flex-direction:column;overflow-y:auto;">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:18px;">
            <span style="font-size:16px;cursor:pointer;">←</span>
            <span style="font-weight:800;font-size:15px;">Move-In Inspection</span>
            <span style="font-size:11px;color:#3B82F6;font-weight:700;">4/6 Checked</span>
          </div>
          <div style="background:#EFF6FF;border-radius:16px;padding:14px;margin-bottom:16px;">
            <div style="font-size:12px;font-weight:800;color:#1E40AF;margin-bottom:2px;">Apt 402 — Skyline Residency</div>
            <div style="font-size:10px;color:#60A5FA;">Digital timestamp stored on IPFS with landlord signature</div>
          </div>
          <div style="display:flex;flex-direction:column;gap:10px;flex:1;">
            <div style="background:#F8FAFC;border:1px solid #E2E8F0;border-radius:14px;padding:12px;display:flex;align-items:center;justify-content:space-between;">
              <div style="display:flex;align-items:center;gap:10px;">
                <span style="color:#10B981;font-size:16px;">✅</span>
                <span style="font-size:12px;font-weight:700;">Hardwood Floor Pristine</span>
              </div>
              <span style="font-size:10px;color:#64748B;">2 Photos</span>
            </div>
            <div style="background:#F8FAFC;border:1px solid #E2E8F0;border-radius:14px;padding:12px;display:flex;align-items:center;justify-content:between;">
              <div style="display:flex;align-items:center;gap:10px;">
                <span style="color:#10B981;font-size:16px;">✅</span>
                <span style="font-size:12px;font-weight:700;">HVAC & Thermostat Operable</span>
              </div>
              <span style="font-size:10px;color:#64748B;">Video Verified</span>
            </div>
            <div style="background:#FFFBEB;border:1px solid #FDE68A;border-radius:14px;padding:12px;display:flex;align-items:center;justify-content:space-between;">
              <div style="display:flex;align-items:center;gap:10px;">
                <span style="color:#F59E0B;font-size:16px;">⚠️</span>
                <span style="font-size:12px;font-weight:700;color:#92400E;">Minor scratch on kitchen sink</span>
              </div>
              <span style="font-size:10px;color:#B45309;font-weight:700;">Flagged</span>
            </div>
            <div style="background:#F8FAFC;border:1px solid #E2E8F0;border-radius:14px;padding:12px;display:flex;align-items:center;justify-content:space-between;">
              <div style="display:flex;align-items:center;gap:10px;">
                <span style="color:#94A3B8;font-size:16px;">⚪</span>
                <span style="font-size:12px;color:#64748B;">Electrical Sockets Test</span>
              </div>
              <span style="font-size:10px;color:#3B82F6;font-weight:700;cursor:pointer;">+ Add Photo</span>
            </div>
          </div>
          <button style="width:100%;padding:14px;background:#0F172A;color:#fff;border:none;border-radius:16px;font-weight:800;font-size:13px;cursor:pointer;margin-top:auto;">Sign & Lock Condition Report</button>
        </div>
      \`;

    case 'findora-maintenance-req':
      return \`
        <div style="background:#FFFFFF;color:#0F172A;border-radius:36px;padding:24px 20px;font-family:'Inter',sans-serif;height:100%;display:flex;flex-direction:column;overflow-y:auto;">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:18px;">
            <span style="font-size:16px;cursor:pointer;">←</span>
            <span style="font-weight:800;font-size:15px;">1-Tap Maintenance</span>
            <span style="font-size:12px;color:#64748B;">History</span>
          </div>
          <div style="margin-bottom:14px;">
            <label style="font-size:11px;font-weight:700;color:#475569;display:block;margin-bottom:6px;">Issue Category</label>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;">
              <button style="padding:10px;border-radius:12px;background:#EFF6FF;border:2px solid #3B82F6;color:#1D4ED8;font-weight:700;font-size:11px;cursor:pointer;">🚰 Plumbing</button>
              <button style="padding:10px;border-radius:12px;background:#F8FAFC;border:1px solid #E2E8F0;color:#64748B;font-weight:600;font-size:11px;cursor:pointer;">⚡ Electrical</button>
              <button style="padding:10px;border-radius:12px;background:#F8FAFC;border:1px solid #E2E8F0;color:#64748B;font-weight:600;font-size:11px;cursor:pointer;">❄️ HVAC / AC</button>
              <button style="padding:10px;border-radius:12px;background:#F8FAFC;border:1px solid #E2E8F0;color:#64748B;font-weight:600;font-size:11px;cursor:pointer;">🔑 Locks & Keys</button>
            </div>
          </div>
          <div style="margin-bottom:14px;">
            <label style="font-size:11px;font-weight:700;color:#475569;display:block;margin-bottom:6px;">Urgency Level</label>
            <div style="display:flex;gap:8px;">
              <button style="flex:1;padding:8px;border-radius:10px;background:#FEF2F2;border:1px solid #F87171;color:#B91C1C;font-size:10px;font-weight:700;">🚨 Emergency</button>
              <button style="flex:1;padding:8px;border-radius:10px;background:#F1F5F9;border:1px solid #E2E8F0;color:#475569;font-size:10px;font-weight:600;">Within 24h</button>
              <button style="flex:1;padding:8px;border-radius:10px;background:#F1F5F9;border:1px solid #E2E8F0;color:#475569;font-size:10px;font-weight:600;">Standard</button>
            </div>
          </div>
          <div style="margin-bottom:16px;">
            <label style="font-size:11px;font-weight:700;color:#475569;display:block;margin-bottom:6px;">Description & Attachments</label>
            <div style="background:#F8FAFC;border:1px solid #E2E8F0;border-radius:12px;padding:12px;font-size:11px;color:#64748B;min-height:50px;">
              Kitchen sink drain is leaking under the counter...
            </div>
          </div>
          <button style="width:100%;padding:14px;background:#EF4444;color:#fff;border:none;border-radius:16px;font-weight:800;font-size:13px;cursor:pointer;margin-top:auto;">Dispatch Plumber Now</button>
        </div>
      \`;

    case 'findora-rewards-hub':
      return \`
        <div style="background:#0F172A;color:#fff;border-radius:36px;padding:24px 20px;font-family:'Inter',sans-serif;height:100%;display:flex;flex-direction:column;overflow-y:auto;">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:20px;">
            <span style="font-weight:800;font-size:16px;">RentenPe Rewards</span>
            <span style="font-size:11px;background:#334155;color:#FACC15;padding:4px 10px;border-radius:99px;font-weight:800;">★ GOLD TIER</span>
          </div>
          <div style="background:linear-gradient(135deg,#D97706,#B45309);border-radius:24px;padding:20px;margin-bottom:16px;box-shadow:0 12px 30px rgba(217,119,6,0.25);">
            <div style="font-size:11px;font-weight:700;color:#FEF3C7;">Available Reward Coins</div>
            <div style="font-size:34px;font-weight:900;letter-spacing:-0.03em;color:#FFF;margin:4px 0;">18,450</div>
            <div style="font-size:11px;color:#FEF3C7;font-weight:600;">≈ ₹1,845 Cashback value on next rent</div>
          </div>
          <div style="font-size:12px;font-weight:800;margin-bottom:10px;">Exclusive Partner Vouchers</div>
          <div style="display:flex;flex-direction:column;gap:10px;flex:1;">
            <div style="background:#1E293B;border:1px solid #334155;border-radius:16px;padding:12px;display:flex;justify-content:space-between;align-items:center;">
              <div style="display:flex;align-items:center;gap:10px;">
                <div style="width:36px;height:36px;border-radius:10px;background:#fff;display:flex;align-items:center;justify-content:center;font-size:18px;">🛋️</div>
                <div>
                  <div style="font-size:12px;font-weight:800;">IKEA Furnishing</div>
                  <div style="font-size:10px;color:#94A3B8;">₹2,000 Off on ₹10,000+</div>
                </div>
              </div>
              <button style="padding:6px 12px;background:#FACC15;color:#000;border:none;border-radius:8px;font-weight:800;font-size:10px;cursor:pointer;">Claim</button>
            </div>
            <div style="background:#1E293B;border:1px solid #334155;border-radius:16px;padding:12px;display:flex;justify-content:space-between;align-items:center;">
              <div style="display:flex;align-items:center;gap:10px;">
                <div style="width:36px;height:36px;border-radius:10px;background:#fff;display:flex;align-items:center;justify-content:center;font-size:18px;">🧹</div>
                <div>
                  <div style="font-size:12px;font-weight:800;">Urban Company Deep Clean</div>
                  <div style="font-size:10px;color:#94A3B8;">Flat 25% Off Voucher</div>
                </div>
              </div>
              <button style="padding:6px 12px;background:#FACC15;color:#000;border:none;border-radius:8px;font-weight:800;font-size:10px;cursor:pointer;">Claim</button>
            </div>
          </div>
        </div>
      \`;

    case 'findora-neighborhood-guide':
      return \`
        <div style="background:#FFFFFF;color:#0F172A;border-radius:36px;padding:24px 20px;font-family:'Inter',sans-serif;height:100%;display:flex;flex-direction:column;overflow-y:auto;">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:18px;">
            <span style="font-size:16px;cursor:pointer;">←</span>
            <span style="font-weight:800;font-size:15px;">Koramangala 4th Block</span>
            <span style="font-size:14px;">📍</span>
          </div>
          <!-- Neighborhood Score Card -->
          <div style="background:#F8FAFC;border:1px solid #E2E8F0;border-radius:20px;padding:16px;margin-bottom:16px;">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;">
              <span style="font-size:12px;font-weight:800;">Livability Index</span>
              <span style="font-size:14px;font-weight:900;color:#10B981;">9.4 / 10</span>
            </div>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;font-size:11px;">
              <div style="background:#fff;padding:8px;border-radius:10px;border:1px solid #F1F5F9;">🚇 Metro: 400m walk</div>
              <div style="background:#fff;padding:8px;border-radius:10px;border:1px solid #F1F5F9;">☕ Cafes: 34 within 1km</div>
              <div style="background:#fff;padding:8px;border-radius:10px;border:1px solid #F1F5F9;">🌳 Parks: 3 Jogging Tracks</div>
              <div style="background:#fff;padding:8px;border-radius:10px;border:1px solid #F1F5F9;">🏥 Hospital: 1.2km away</div>
            </div>
          </div>
          <div style="font-size:12px;font-weight:800;margin-bottom:10px;">Commute Times to Major Tech Parks</div>
          <div style="display:flex;flex-direction:column;gap:8px;">
            <div style="display:flex;justify-content:space-between;align-items:center;padding:10px 12px;background:#F8FAFC;border-radius:12px;">
              <span style="font-size:12px;font-weight:600;">Embassy Golf Links (EGL)</span>
              <span style="font-size:12px;font-weight:800;color:#3B82F6;">12 mins by cab</span>
            </div>
            <div style="display:flex;justify-content:space-between;align-items:center;padding:10px 12px;background:#F8FAFC;border-radius:12px;">
              <span style="font-size:12px;font-weight:600;">Bagmane Tech Park</span>
              <span style="font-size:12px;font-weight:800;color:#3B82F6;">18 mins by metro</span>
            </div>
            <div style="display:flex;justify-content:space-between;align-items:center;padding:10px 12px;background:#F8FAFC;border-radius:12px;">
              <span style="font-size:12px;font-weight:600;">Ecospace Outer Ring Rd</span>
              <span style="font-size:12px;font-weight:800;color:#F59E0B;">25 mins peak</span>
            </div>
          </div>
        </div>
      \`;

    case 'findora-deposit-escrow':
      return \`
        <div style="background:#0F172A;color:#fff;border-radius:36px;padding:24px 20px;font-family:'Inter',sans-serif;height:100%;display:flex;flex-direction:column;justify-content:space-between;">
          <div>
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:20px;">
              <span style="font-weight:800;font-size:15px;">Deposit Shield Escrow</span>
              <span style="font-size:10px;background:#10B981;color:#000;padding:3px 8px;border-radius:99px;font-weight:800;">ZERO-DEPOSIT ACTIVE</span>
            </div>
            <div style="background:#1E293B;border:1px solid #334155;border-radius:24px;padding:20px;margin-bottom:20px;">
              <div style="font-size:11px;color:#94A3B8;margin-bottom:4px;">Institutional Guarantee Bond</div>
              <div style="font-size:32px;font-weight:900;letter-spacing:-0.03em;color:#10B981;margin-bottom:10px;">₹1,50,000</div>
              <div style="font-size:11px;color:#CBD5E1;line-height:1.4;">Backed by HDFC Ergo Insurance. Tenant paid ₹0 upfront security deposit.</div>
            </div>
            <div style="font-size:12px;font-weight:800;margin-bottom:12px;">Escrow Rules & Protections</div>
            <div style="display:flex;flex-direction:column;gap:10px;font-size:11px;color:#CBD5E1;">
              <div style="display:flex;gap:10px;align-items:center;background:#1E293B;padding:10px 12px;border-radius:12px;">
                <span>🛡️</span>
                <span>Landlord covered up to 6 months unpaid rent</span>
              </div>
              <div style="display:flex;gap:10px;align-items:center;background:#1E293B;padding:10px 12px;border-radius:12px;">
                <span>⚖️</span>
                <span>Fair arbitrated deduction for property damage</span>
              </div>
              <div style="display:flex;gap:10px;align-items:center;background:#1E293B;padding:10px 12px;border-radius:12px;">
                <span>⚡</span>
                <span>Immediate bond return on lease completion</span>
              </div>
            </div>
          </div>
          <button style="width:100%;padding:14px;background:#10B981;color:#064E3B;border:none;border-radius:16px;font-weight:800;font-size:13px;cursor:pointer;">View Legal Guarantee Policy</button>
        </div>
      \`;

    case 'findora-owner-analytics':
      return \`
        <div style="background:#09090B;color:#fff;border-radius:36px;padding:24px 20px;font-family:'Inter',sans-serif;height:100%;display:flex;flex-direction:column;overflow-y:auto;">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:20px;">
            <span style="font-weight:800;font-size:16px;">Owner Portfolio Yield</span>
            <span style="font-size:11px;background:#27272A;padding:4px 10px;border-radius:99px;color:#A1A1AA;">8 Units</span>
          </div>
          <div style="background:linear-gradient(135deg,#18181B,#27272A);border:1px solid #3F3F46;border-radius:24px;padding:20px;margin-bottom:16px;">
            <div style="font-size:11px;color:#A1A1AA;font-weight:600;">Monthly Rental Revenue</div>
            <div style="font-size:32px;font-weight:900;letter-spacing:-0.03em;color:#FFF;margin:4px 0;">₹4,25,000</div>
            <div style="display:flex;gap:10px;margin-top:10px;font-size:11px;">
              <span style="color:#10B981;font-weight:700;">100% Occupancy</span>
              <span style="color:#71717A;">•</span>
              <span style="color:#38BDF8;font-weight:700;">Avg Yield: 6.8%</span>
            </div>
          </div>
          <div style="font-size:12px;font-weight:800;margin-bottom:10px;">Unit Collection Status</div>
          <div style="display:flex;flex-direction:column;gap:8px;">
            <div style="background:#18181B;border:1px solid #27272A;border-radius:14px;padding:12px;display:flex;justify-content:space-between;align-items:center;">
              <div>
                <div style="font-size:12px;font-weight:800;">Apt 402, Skyline Tower</div>
                <div style="font-size:10px;color:#71717A;">Tenant: Joshua K.</div>
              </div>
              <div style="text-align:right;">
                <div style="font-size:12px;font-weight:800;color:#10B981;">₹65,000 Paid</div>
                <div style="font-size:9px;color:#71717A;">Auto-Debited Oct 1</div>
              </div>
            </div>
            <div style="background:#18181B;border:1px solid #27272A;border-radius:14px;padding:12px;display:flex;justify-content:space-between;align-items:center;">
              <div>
                <div style="font-size:12px;font-weight:800;">Villa 12, Palm Meadows</div>
                <div style="font-size:10px;color:#71717A;">Tenant: Natasha P.</div>
              </div>
              <div style="text-align:right;">
                <div style="font-size:12px;font-weight:800;color:#10B981;">₹1,40,000 Paid</div>
                <div style="font-size:9px;color:#71717A;">Auto-Debited Oct 1</div>
              </div>
            </div>
          </div>
        </div>
      \`;
`;

if (!code.includes(MARKER)) {
  console.error('Marker not found in screen-renderers.js');
  process.exit(1);
}

code = code.replace(MARKER, newCases + '\n' + MARKER);
fs.writeFileSync(file, code);
console.log('Batch 3 applied successfully!');
const cases = [...code.matchAll(/case\s+['"]([^'"]+)['"]/g)].map(m => m[1]);
console.log('Total cases now:', cases.length);
