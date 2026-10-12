/**
 * Batch 1: Inject Banking (remaining) + Crypto + Real Estate screen renderers
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
    // BANKING — Monex Analytics
    // ══════════════════════════════════════════════
    case 'monex-analytics':
      return \`
        <div style="background:#09090B;color:#fff;border-radius:36px;padding:24px 20px;font-family:'Inter',sans-serif;height:100%;display:flex;flex-direction:column;justify-content:space-between;">
          <div>
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:20px;">
              <span style="font-weight:700;font-size:16px;">Analytics</span>
              <div style="width:36px;height:36px;border-radius:50%;background:#18181B;display:flex;align-items:center;justify-content:center;border:1px solid #27272A;">🔔</div>
            </div>
            <div style="display:flex;gap:6px;margin-bottom:16px;">
              <span style="background:#10B981;color:#064E3B;padding:6px 14px;border-radius:99px;font-size:11px;font-weight:800;">Monthly</span>
              <span style="background:#18181B;color:#A1A1AA;padding:6px 14px;border-radius:99px;font-size:11px;font-weight:600;border:1px solid #27272A;">Weekly</span>
              <span style="background:#18181B;color:#A1A1AA;padding:6px 14px;border-radius:99px;font-size:11px;font-weight:600;border:1px solid #27272A;">Daily</span>
            </div>
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
              <div>
                <div style="font-size:11px;color:#71717A;font-weight:600;">Total Balance</div>
                <div style="font-size:24px;font-weight:900;">$6,324</div>
              </div>
              <span style="font-size:12px;color:#10B981;font-weight:700;">▲ $4,560.50</span>
            </div>
            <div style="background:#18181B;border-radius:16px;padding:16px;margin-bottom:16px;border:1px solid #27272A;height:100px;position:relative;overflow:hidden;">
              <svg viewBox="0 0 260 80" style="width:100%;height:100%;">
                <defs><linearGradient id="cg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#10B981" stop-opacity="0.4"/><stop offset="100%" stop-color="#10B981" stop-opacity="0"/></linearGradient></defs>
                <path d="M0,60 Q30,55 60,40 T120,25 T180,35 T240,15 L260,15 L260,80 L0,80Z" fill="url(#cg)"/>
                <path d="M0,60 Q30,55 60,40 T120,25 T180,35 T240,15" fill="none" stroke="#10B981" stroke-width="2.5"/>
                <circle cx="240" cy="15" r="4" fill="#10B981" stroke="#09090B" stroke-width="2"/>
              </svg>
            </div>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
              <div style="background:#18181B;border:1px solid #27272A;border-radius:14px;padding:12px;">
                <div style="font-size:10px;color:#71717A;font-weight:600;">Income</div>
                <div style="font-size:18px;font-weight:900;margin-top:4px;">$8,567</div>
                <div style="font-size:10px;color:#EF4444;margin-top:2px;">▼ $4,560.50</div>
              </div>
              <div style="background:#18181B;border:1px solid #27272A;border-radius:14px;padding:12px;">
                <div style="font-size:10px;color:#71717A;font-weight:600;">Income</div>
                <div style="font-size:18px;font-weight:900;margin-top:4px;">$8,567</div>
                <div style="font-size:10px;color:#10B981;margin-top:2px;">● Positive</div>
                <div style="height:4px;background:#27272A;border-radius:99px;margin-top:6px;overflow:hidden;"><div style="height:100%;width:70%;background:linear-gradient(90deg,#10B981,#A3E635);border-radius:99px;"></div></div>
              </div>
            </div>
            <div style="background:#18181B;border:1px solid #27272A;border-radius:14px;padding:12px;margin-top:10px;">
              <div style="font-size:10px;color:#71717A;font-weight:600;">Budget</div>
              <div style="display:flex;justify-content:space-between;align-items:center;margin-top:4px;">
                <span style="font-size:16px;font-weight:900;">$0</span>
                <span style="font-size:10px;color:#EF4444;font-weight:700;">● Overspent</span>
              </div>
              <div style="height:4px;background:#27272A;border-radius:99px;margin-top:6px;overflow:hidden;"><div style="height:100%;width:100%;background:#EF4444;border-radius:99px;"></div></div>
            </div>
          </div>
          <div style="background:#18181B;border-radius:24px;padding:10px 16px;display:flex;justify-content:space-around;align-items:center;border:1px solid #27272A;margin-top:14px;">
            <div style="color:#71717A;font-size:18px;">🏠</div>
            <div style="color:#10B981;font-size:18px;">📊</div>
            <div style="width:36px;height:36px;border-radius:50%;background:#10B981;color:#064E3B;font-weight:900;display:flex;align-items:center;justify-content:center;">+</div>
            <div style="color:#71717A;font-size:18px;">🪙</div>
            <div style="color:#71717A;font-size:18px;">⚙️</div>
          </div>
        </div>
      \`;

    case 'monex-crypto':
      return \`
        <div style="background:#09090B;color:#fff;border-radius:36px;padding:24px 20px;font-family:'Inter',sans-serif;height:100%;display:flex;flex-direction:column;justify-content:space-between;">
          <div>
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:20px;">
              <span style="font-weight:700;font-size:16px;">Crypto</span>
              <div style="width:36px;height:36px;border-radius:50%;background:#18181B;display:flex;align-items:center;justify-content:center;border:1px solid #27272A;">🔔</div>
            </div>
            <div style="margin-bottom:4px;">
              <div style="font-size:11px;color:#71717A;font-weight:600;">Total Balance</div>
              <div style="font-size:28px;font-weight:900;margin-top:4px;">$6,324.49</div>
              <div style="font-size:12px;color:#10B981;font-weight:700;">+$456 (+7.21%)</div>
            </div>
            <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin:16px 0;">
              <button style="padding:10px;background:#18181B;border:1px solid #27272A;border-radius:14px;color:#fff;font-size:11px;font-weight:700;cursor:pointer;display:flex;flex-direction:column;align-items:center;gap:4px;"><span>📈</span>Trade</button>
              <button style="padding:10px;background:#18181B;border:1px solid #27272A;border-radius:14px;color:#fff;font-size:11px;font-weight:700;cursor:pointer;display:flex;flex-direction:column;align-items:center;gap:4px;"><span>↑</span>Send</button>
              <button style="padding:10px;background:#18181B;border:1px solid #27272A;border-radius:14px;color:#fff;font-size:11px;font-weight:700;cursor:pointer;display:flex;flex-direction:column;align-items:center;gap:4px;"><span>↓</span>Receive</button>
            </div>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:12px;">
              <div style="background:#18181B;border:1px solid #27272A;border-radius:16px;padding:14px;">
                <div style="display:flex;align-items:center;gap:6px;margin-bottom:8px;">
                  <div style="width:24px;height:24px;border-radius:50%;background:#F7931A;font-size:12px;display:flex;align-items:center;justify-content:center;font-weight:900;">₿</div>
                  <span style="font-size:12px;font-weight:700;">BTC</span>
                </div>
                <div style="font-size:16px;font-weight:900;">$82,567.6</div>
                <div style="font-size:10px;color:#10B981;margin-top:2px;">▲ +2.20%</div>
                <svg viewBox="0 0 100 30" style="width:100%;height:24px;margin-top:6px;"><path d="M0,20 Q15,18 30,12 T60,15 T90,5 L100,8" fill="none" stroke="#10B981" stroke-width="1.5"/></svg>
              </div>
              <div style="background:#18181B;border:1px solid #27272A;border-radius:16px;padding:14px;">
                <div style="display:flex;align-items:center;gap:6px;margin-bottom:8px;">
                  <div style="width:24px;height:24px;border-radius:50%;background:#627EEA;font-size:12px;display:flex;align-items:center;justify-content:center;font-weight:900;">Ξ</div>
                  <span style="font-size:12px;font-weight:700;">ETH</span>
                </div>
                <div style="font-size:16px;font-weight:900;">$1,818.6</div>
                <div style="font-size:10px;color:#EF4444;margin-top:2px;">▼ -3.99%</div>
                <svg viewBox="0 0 100 30" style="width:100%;height:24px;margin-top:6px;"><path d="M0,8 Q15,12 30,18 T60,14 T90,22 L100,20" fill="none" stroke="#EF4444" stroke-width="1.5"/></svg>
              </div>
            </div>
            <div style="background:#18181B;border:1px solid #27272A;border-radius:14px;padding:12px;display:flex;align-items:center;gap:10px;">
              <div style="font-size:11px;color:#71717A;font-weight:600;">All crypto</div>
              <div style="display:flex;align-items:center;gap:6px;margin-left:auto;">
                <div style="width:20px;height:20px;border-radius:50%;background:#F7931A;font-size:9px;display:flex;align-items:center;justify-content:center;font-weight:900;">₿</div>
                <span style="font-size:12px;font-weight:700;">Bitcoin</span>
              </div>
              <span style="font-size:12px;font-weight:700;margin-left:auto;">$82,567.6</span>
            </div>
          </div>
          <div style="background:#18181B;border-radius:24px;padding:10px 16px;display:flex;justify-content:space-around;align-items:center;border:1px solid #27272A;margin-top:14px;">
            <div style="color:#71717A;font-size:18px;">🏠</div>
            <div style="color:#71717A;font-size:18px;">📊</div>
            <div style="width:36px;height:36px;border-radius:50%;background:#10B981;color:#064E3B;font-weight:900;display:flex;align-items:center;justify-content:center;">+</div>
            <div style="color:#10B981;font-size:18px;">🪙</div>
            <div style="color:#71717A;font-size:18px;">⚙️</div>
          </div>
        </div>
      \`;

    case 'monex-settings':
      return \`
        <div style="background:#09090B;color:#fff;border-radius:36px;padding:24px 20px;font-family:'Inter',sans-serif;height:100%;display:flex;flex-direction:column;justify-content:space-between;">
          <div>
            <div style="font-weight:700;font-size:16px;margin-bottom:20px;">Settings</div>
            <div style="text-align:center;margin-bottom:20px;">
              <div style="width:64px;height:64px;border-radius:50%;background:linear-gradient(135deg,#10B981,#059669);margin:0 auto 10px auto;display:flex;align-items:center;justify-content:center;font-size:24px;font-weight:900;color:#064E3B;">L</div>
              <div style="font-size:16px;font-weight:800;">Leonard Lopez</div>
              <div style="font-size:11px;color:#71717A;">@leonardlopez</div>
            </div>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:16px;">
              <div style="background:#18181B;border:1px solid #27272A;border-radius:14px;padding:14px;text-align:center;">
                <div style="font-size:16px;margin-bottom:4px;">⭐</div>
                <div style="font-size:12px;font-weight:800;">Standard</div>
                <div style="font-size:10px;color:#71717A;">Your plan</div>
              </div>
              <div style="background:#18181B;border:1px solid #27272A;border-radius:14px;padding:14px;text-align:center;">
                <div style="font-size:16px;margin-bottom:4px;">👥</div>
                <div style="font-size:12px;font-weight:800;">Referrals</div>
                <div style="font-size:10px;color:#71717A;">Invite & earn</div>
              </div>
            </div>
            <div style="display:flex;flex-direction:column;gap:2px;">
              <div style="display:flex;align-items:center;gap:10px;padding:12px 14px;background:#18181B;border-radius:12px 12px 4px 4px;border:1px solid #27272A;">
                <span style="font-size:14px;">❓</span><span style="font-size:13px;font-weight:600;">Help</span>
                <span style="margin-left:auto;color:#71717A;font-size:12px;">›</span>
              </div>
              <div style="display:flex;align-items:center;gap:10px;padding:12px 14px;background:#18181B;border:1px solid #27272A;">
                <span style="font-size:14px;">👤</span><span style="font-size:13px;font-weight:600;">Account</span>
                <span style="margin-left:auto;color:#71717A;font-size:12px;">›</span>
              </div>
              <div style="display:flex;align-items:center;gap:10px;padding:12px 14px;background:#18181B;border:1px solid #27272A;">
                <span style="font-size:14px;">📄</span><span style="font-size:13px;font-weight:600;">Documents & statements</span>
                <span style="margin-left:auto;color:#71717A;font-size:12px;">›</span>
              </div>
              <div style="display:flex;align-items:center;gap:10px;padding:12px 14px;background:#18181B;border-radius:4px 4px 12px 12px;border:1px solid #27272A;">
                <span style="font-size:14px;">📚</span><span style="font-size:13px;font-weight:600;">Learn</span>
                <span style="margin-left:auto;color:#71717A;font-size:12px;">›</span>
              </div>
            </div>
          </div>
          <div style="background:#18181B;border-radius:24px;padding:10px 16px;display:flex;justify-content:space-around;align-items:center;border:1px solid #27272A;margin-top:14px;">
            <div style="color:#71717A;font-size:18px;">🏠</div>
            <div style="color:#71717A;font-size:18px;">📊</div>
            <div style="width:36px;height:36px;border-radius:50%;background:#10B981;color:#064E3B;font-weight:900;display:flex;align-items:center;justify-content:center;">+</div>
            <div style="color:#71717A;font-size:18px;">🪙</div>
            <div style="color:#10B981;font-size:18px;">⚙️</div>
          </div>
        </div>
      \`;

    case 'alimbank-home':
      return \`
        <div style="background:#0A1628;color:#fff;border-radius:36px;padding:24px 20px;font-family:'Inter',sans-serif;height:100%;display:flex;flex-direction:column;justify-content:space-between;">
          <div>
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;">
              <div style="display:flex;align-items:center;gap:8px;">
                <span style="font-size:18px;">🏦</span>
                <span style="font-weight:800;font-size:15px;">Alim<span style="color:#10B981;">Bank</span></span>
              </div>
              <div style="width:32px;height:32px;border-radius:50%;background:#18181B;display:flex;align-items:center;justify-content:center;">🔔</div>
            </div>
            <div style="font-size:12px;color:#94A3B8;margin-bottom:4px;">Good Evening</div>
            <div style="font-size:18px;font-weight:800;margin-bottom:16px;">Fatimah Azzahrah</div>
            <div style="background:linear-gradient(135deg,#10B981,#059669);border-radius:20px;padding:18px;margin-bottom:16px;">
              <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
                <span style="font-size:11px;color:#064E3B;font-weight:700;">Account Balance</span>
                <span style="font-size:11px;cursor:pointer;">→</span>
              </div>
              <div style="display:flex;align-items:center;gap:8px;">
                <span style="font-size:26px;font-weight:900;color:#022C22;">$2,235.1145</span>
                <span style="font-size:14px;cursor:pointer;">👁</span>
              </div>
              <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:6px;margin-top:14px;">
                <div style="text-align:center;background:rgba(255,255,255,0.2);border-radius:12px;padding:10px 4px;">
                  <div style="font-size:14px;">✈️</div>
                  <div style="font-size:9px;font-weight:700;margin-top:4px;color:#064E3B;">Transfer</div>
                </div>
                <div style="text-align:center;background:rgba(255,255,255,0.2);border-radius:12px;padding:10px 4px;">
                  <div style="font-size:14px;">💰</div>
                  <div style="font-size:9px;font-weight:700;margin-top:4px;color:#064E3B;">Withdraw</div>
                </div>
                <div style="text-align:center;background:rgba(255,255,255,0.2);border-radius:12px;padding:10px 4px;">
                  <div style="font-size:14px;">📥</div>
                  <div style="font-size:9px;font-weight:700;margin-top:4px;color:#064E3B;">Deposit</div>
                </div>
                <div style="text-align:center;background:rgba(255,255,255,0.2);border-radius:12px;padding:10px 4px;">
                  <div style="font-size:14px;">💳</div>
                  <div style="font-size:9px;font-weight:700;margin-top:4px;color:#064E3B;">Pay & Buy</div>
                </div>
              </div>
            </div>
            <div style="font-size:13px;font-weight:700;margin-bottom:10px;">● Promos & Reminders</div>
            <div style="display:flex;gap:8px;overflow-x:auto;">
              <div style="min-width:140px;background:#18181B;border:1px solid #27272A;border-radius:14px;padding:14px;">
                <div style="font-size:11px;color:#94A3B8;">Discount up to</div>
                <div style="font-size:20px;font-weight:900;margin-top:4px;">$15.25</div>
                <div style="font-size:9px;color:#71717A;margin-top:4px;">every non-cash transactions</div>
              </div>
              <div style="min-width:140px;background:#18181B;border:1px solid #27272A;border-radius:14px;padding:14px;">
                <div style="font-size:11px;color:#94A3B8;">Monthly</div>
                <div style="font-size:20px;font-weight:900;margin-top:4px;">$18</div>
                <div style="font-size:9px;color:#71717A;margin-top:4px;">saving oct</div>
              </div>
            </div>
          </div>
          <div style="background:#18181B;border-radius:24px;padding:10px 16px;display:flex;justify-content:space-around;align-items:center;border:1px solid #27272A;margin-top:14px;">
            <div style="color:#10B981;font-size:11px;font-weight:700;display:flex;flex-direction:column;align-items:center;gap:4px;">🏠<span>Home</span></div>
            <div style="color:#71717A;font-size:11px;display:flex;flex-direction:column;align-items:center;gap:4px;">💱<span>Transaction</span></div>
            <div style="width:40px;height:40px;border-radius:50%;background:#10B981;color:#064E3B;font-weight:900;display:flex;align-items:center;justify-content:center;font-size:16px;">📷</div>
            <div style="color:#71717A;font-size:11px;display:flex;flex-direction:column;align-items:center;gap:4px;">📊<span>Report</span></div>
            <div style="color:#71717A;font-size:11px;display:flex;flex-direction:column;align-items:center;gap:4px;">⚙️<span>Setting</span></div>
          </div>
        </div>
      \`;

    case 'bluebank-home':
      return \`
        <div style="background:linear-gradient(180deg,#2E3A8C 0%,#4A5BC7 40%,#F8F9FE 40%);color:#fff;border-radius:36px;padding:24px 20px;font-family:'Inter',sans-serif;height:100%;display:flex;flex-direction:column;justify-content:space-between;">
          <div>
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:20px;">
              <span style="font-size:18px;">⊞</span>
              <div style="width:32px;height:32px;border-radius:50%;background:rgba(255,255,255,0.2);display:flex;align-items:center;justify-content:center;font-size:12px;">👤</div>
            </div>
            <div style="font-size:22px;font-weight:900;margin-bottom:16px;">Hi, Mark</div>
            <div style="display:flex;gap:16px;align-items:flex-end;margin-bottom:20px;">
              <div>
                <div style="font-size:12px;color:rgba(255,255,255,0.7);">Balance</div>
                <div style="font-size:32px;font-weight:900;">$3,567</div>
                <div style="font-size:12px;color:#A3E635;">+ $223.74</div>
              </div>
              <div style="background:#fff;border-radius:16px;padding:16px;color:#0F172A;min-width:140px;">
                <div style="width:28px;height:16px;background:linear-gradient(90deg,#EB001B 50%,#F79E1B 50%);border-radius:10px;margin-bottom:12px;"></div>
                <div style="font-size:11px;color:#64748B;">FlexPerks Travel</div>
                <div style="font-size:14px;font-weight:800;letter-spacing:0.05em;margin-top:4px;">3759 ···· 2100</div>
              </div>
            </div>
            <div style="display:flex;gap:8px;overflow-x:auto;margin-bottom:16px;">
              <div style="min-width:120px;background:#3B82F6;border-radius:16px;padding:14px;">
                <div style="font-size:11px;font-weight:700;">Save part of your recent deposit</div>
                <div style="font-size:24px;margin-top:8px;">📊</div>
              </div>
              <div style="min-width:120px;background:#EF4444;border-radius:16px;padding:14px;">
                <div style="font-size:11px;font-weight:700;color:#fff;">Car insurance</div>
                <div style="font-size:11px;color:rgba(255,255,255,0.8);">from $149/year</div>
                <div style="font-size:24px;margin-top:4px;">🚗</div>
              </div>
            </div>
            <div style="color:#0F172A;">
              <div style="display:flex;gap:16px;margin-bottom:12px;border-bottom:2px solid #E2E8F0;padding-bottom:8px;">
                <span style="font-size:14px;font-weight:800;border-bottom:2px solid #0F172A;padding-bottom:6px;">History</span>
                <span style="font-size:14px;font-weight:600;color:#94A3B8;">Statistics</span>
              </div>
              <div style="display:flex;align-items:center;justify-content:space-between;padding:10px 0;border-bottom:1px solid #F1F5F9;">
                <div style="display:flex;align-items:center;gap:10px;">
                  <div style="width:36px;height:36px;border-radius:12px;background:#FEE2E2;display:flex;align-items:center;justify-content:center;font-size:14px;">🛒</div>
                  <div><div style="font-size:13px;font-weight:700;">Shopping</div><div style="font-size:10px;color:#94A3B8;">3:40 pm</div></div>
                </div>
                <span style="font-size:13px;font-weight:800;color:#EF4444;">- $140.59</span>
              </div>
              <div style="display:flex;align-items:center;justify-content:space-between;padding:10px 0;">
                <div style="display:flex;align-items:center;gap:10px;">
                  <div style="width:36px;height:36px;border-radius:12px;background:#DBEAFE;display:flex;align-items:center;justify-content:center;font-size:14px;">🌐</div>
                  <div><div style="font-size:13px;font-weight:700;">Internet</div><div style="font-size:10px;color:#94A3B8;">3:56 pm</div></div>
                </div>
                <span style="font-size:13px;font-weight:800;color:#EF4444;">- $56.00</span>
              </div>
            </div>
          </div>
          <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:8px;margin-top:12px;color:#64748B;">
            <div style="text-align:center;font-size:10px;font-weight:600;display:flex;flex-direction:column;align-items:center;gap:4px;"><span style="font-size:16px;">↔</span>Transfer</div>
            <div style="text-align:center;font-size:10px;font-weight:600;display:flex;flex-direction:column;align-items:center;gap:4px;"><span style="font-size:16px;">📷</span>Deposit</div>
            <div style="text-align:center;font-size:10px;font-weight:600;display:flex;flex-direction:column;align-items:center;gap:4px;"><span style="font-size:16px;">📋</span>Pay bill</div>
            <div style="text-align:center;font-size:10px;font-weight:600;display:flex;flex-direction:column;align-items:center;gap:4px;"><span style="font-size:16px;">📤</span>Send</div>
          </div>
        </div>
      \`;

    case 'salung-savings':
      return \`
        <div style="background:#FFFFFF;color:#0F172A;border-radius:36px;padding:24px 20px;font-family:'Inter',sans-serif;height:100%;display:flex;flex-direction:column;">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:20px;">
            <span style="font-weight:800;font-size:16px;">💰 Savings Goals</span>
            <div style="width:32px;height:32px;border-radius:50%;background:#F1F5F9;display:flex;align-items:center;justify-content:center;font-size:14px;">+</div>
          </div>
          <div style="background:#F8FAFC;border:1px solid #E2E8F0;border-radius:20px;padding:16px;margin-bottom:12px;">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
              <span style="font-size:13px;font-weight:700;">🏖️ Vacation Fund</span>
              <span style="font-size:11px;color:#10B981;font-weight:700;">67%</span>
            </div>
            <div style="height:6px;background:#E2E8F0;border-radius:99px;overflow:hidden;margin-bottom:6px;"><div style="height:100%;width:67%;background:linear-gradient(90deg,#10B981,#A3E635);border-radius:99px;"></div></div>
            <div style="font-size:11px;color:#64748B;">$3,350 of $5,000</div>
          </div>
          <div style="background:#F8FAFC;border:1px solid #E2E8F0;border-radius:20px;padding:16px;margin-bottom:12px;">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
              <span style="font-size:13px;font-weight:700;">🚗 New Car</span>
              <span style="font-size:11px;color:#3B82F6;font-weight:700;">25%</span>
            </div>
            <div style="height:6px;background:#E2E8F0;border-radius:99px;overflow:hidden;margin-bottom:6px;"><div style="height:100%;width:25%;background:linear-gradient(90deg,#3B82F6,#60A5FA);border-radius:99px;"></div></div>
            <div style="font-size:11px;color:#64748B;">$7,500 of $30,000</div>
          </div>
          <div style="background:#F8FAFC;border:1px solid #E2E8F0;border-radius:20px;padding:16px;margin-bottom:12px;">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
              <span style="font-size:13px;font-weight:700;">🏠 Down Payment</span>
              <span style="font-size:11px;color:#F59E0B;font-weight:700;">12%</span>
            </div>
            <div style="height:6px;background:#E2E8F0;border-radius:99px;overflow:hidden;margin-bottom:6px;"><div style="height:100%;width:12%;background:linear-gradient(90deg,#F59E0B,#FBBF24);border-radius:99px;"></div></div>
            <div style="font-size:11px;color:#64748B;">$6,000 of $50,000</div>
          </div>
          <button style="width:100%;padding:14px;background:#0F172A;color:#fff;border:none;border-radius:16px;font-weight:800;font-size:13px;cursor:pointer;margin-top:auto;">+ Create New Goal</button>
        </div>
      \`;

    case 'monero-pay':
      return \`
        <div style="background:#09090B;color:#fff;border-radius:36px;padding:24px 20px;font-family:'Inter',sans-serif;height:100%;display:flex;flex-direction:column;justify-content:space-between;">
          <div>
            <div style="font-weight:700;font-size:16px;margin-bottom:20px;">Payment</div>
            <div style="background:linear-gradient(135deg,#F97316,#DC2626);border-radius:20px;padding:20px;margin-bottom:16px;">
              <div style="font-size:11px;color:rgba(255,255,255,0.8);font-weight:600;">Monero Balance</div>
              <div style="font-size:28px;font-weight:900;margin-top:4px;">ɱ 12.458</div>
              <div style="font-size:11px;color:rgba(255,255,255,0.7);margin-top:4px;">≈ $2,145.30 USD</div>
            </div>
            <div style="background:#18181B;border:1px solid #27272A;border-radius:16px;padding:14px;margin-bottom:10px;display:flex;align-items:center;justify-content:space-between;">
              <span style="font-size:13px;font-weight:600;">To: Coffee Shop</span>
              <span style="font-size:13px;font-weight:800;color:#10B981;">ɱ 0.025</span>
            </div>
            <div style="text-align:center;padding:20px 0;">
              <div style="width:120px;height:120px;background:#fff;border-radius:16px;margin:0 auto;display:flex;align-items:center;justify-content:center;">
                <div style="width:100px;height:100px;background:repeating-conic-gradient(#09090B 0% 25%, #fff 0% 50%) 50%/10px 10px;border-radius:8px;"></div>
              </div>
              <div style="font-size:11px;color:#71717A;margin-top:10px;">Scan to pay</div>
            </div>
          </div>
          <button style="width:100%;padding:14px;background:#F97316;color:#fff;border:none;border-radius:16px;font-weight:800;font-size:14px;cursor:pointer;">Confirm Payment</button>
        </div>
      \`;

    case 'shipping-tracker':
      return \`
        <div style="background:#FFFFFF;color:#0F172A;border-radius:36px;padding:24px 20px;font-family:'Inter',sans-serif;height:100%;display:flex;flex-direction:column;">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:20px;">
            <span style="font-size:16px;cursor:pointer;">←</span>
            <span style="font-weight:700;font-size:15px;">Track Shipment</span>
            <span style="font-size:16px;">⋮</span>
          </div>
          <div style="background:#F0FDF4;border:1px solid #BBF7D0;border-radius:16px;padding:16px;margin-bottom:16px;text-align:center;">
            <div style="font-size:32px;margin-bottom:8px;">📦</div>
            <div style="font-size:14px;font-weight:800;color:#166534;">In Transit</div>
            <div style="font-size:11px;color:#15803D;">Estimated: Oct 15, 2026</div>
          </div>
          <div style="position:relative;padding-left:24px;margin-bottom:16px;">
            <div style="position:absolute;left:8px;top:0;bottom:0;width:2px;background:#E2E8F0;"></div>
            <div style="margin-bottom:16px;position:relative;">
              <div style="position:absolute;left:-20px;width:12px;height:12px;border-radius:50%;background:#10B981;border:2px solid #fff;"></div>
              <div style="font-size:12px;font-weight:700;">Shipped</div>
              <div style="font-size:10px;color:#64748B;">Oct 11, 9:00 AM — Mumbai</div>
            </div>
            <div style="margin-bottom:16px;position:relative;">
              <div style="position:absolute;left:-20px;width:12px;height:12px;border-radius:50%;background:#10B981;border:2px solid #fff;"></div>
              <div style="font-size:12px;font-weight:700;">In Transit</div>
              <div style="font-size:10px;color:#64748B;">Oct 12, 2:30 PM — Delhi Hub</div>
            </div>
            <div style="margin-bottom:16px;position:relative;">
              <div style="position:absolute;left:-20px;width:12px;height:12px;border-radius:50%;background:#E2E8F0;border:2px solid #fff;"></div>
              <div style="font-size:12px;font-weight:600;color:#94A3B8;">Out for Delivery</div>
              <div style="font-size:10px;color:#CBD5E1;">Pending</div>
            </div>
            <div style="position:relative;">
              <div style="position:absolute;left:-20px;width:12px;height:12px;border-radius:50%;background:#E2E8F0;border:2px solid #fff;"></div>
              <div style="font-size:12px;font-weight:600;color:#94A3B8;">Delivered</div>
              <div style="font-size:10px;color:#CBD5E1;">Pending</div>
            </div>
          </div>
          <div style="background:#F8FAFC;border:1px solid #E2E8F0;border-radius:14px;padding:12px;margin-top:auto;">
            <div style="font-size:10px;color:#64748B;font-weight:600;margin-bottom:4px;">TRACKING ID</div>
            <div style="font-size:13px;font-weight:800;font-family:monospace;">RNT-2026-78451-IN</div>
          </div>
        </div>
      \`;

    case 'deposit-premium':
      return \`
        <div style="background:#09090B;color:#fff;border-radius:36px;padding:24px 20px;font-family:'Inter',sans-serif;height:100%;display:flex;flex-direction:column;justify-content:space-between;">
          <div>
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:20px;">
              <span style="cursor:pointer;">←</span>
              <span style="font-weight:700;font-size:15px;">Fixed Deposit</span>
              <span style="font-size:14px;">ℹ️</span>
            </div>
            <div style="background:linear-gradient(135deg,#7C3AED,#4F46E5);border-radius:20px;padding:20px;margin-bottom:16px;">
              <div style="font-size:11px;color:rgba(255,255,255,0.7);font-weight:600;">Premium FD</div>
              <div style="font-size:28px;font-weight:900;margin-top:6px;">7.5% p.a.</div>
              <div style="font-size:11px;color:rgba(255,255,255,0.8);margin-top:4px;">12 months • Min ₹10,000</div>
            </div>
            <div style="display:flex;flex-direction:column;gap:10px;">
              <div style="background:#18181B;border:1px solid #27272A;border-radius:14px;padding:14px;">
                <div style="font-size:10px;color:#71717A;font-weight:600;">Deposit Amount</div>
                <div style="font-size:20px;font-weight:900;margin-top:4px;">₹1,00,000</div>
              </div>
              <div style="background:#18181B;border:1px solid #27272A;border-radius:14px;padding:14px;">
                <div style="font-size:10px;color:#71717A;font-weight:600;">Maturity Amount</div>
                <div style="font-size:20px;font-weight:900;margin-top:4px;color:#10B981;">₹1,07,500</div>
              </div>
              <div style="background:#18181B;border:1px solid #27272A;border-radius:14px;padding:14px;">
                <div style="font-size:10px;color:#71717A;font-weight:600;">Interest Earned</div>
                <div style="font-size:20px;font-weight:900;margin-top:4px;color:#A3E635;">₹7,500</div>
              </div>
            </div>
          </div>
          <button style="width:100%;padding:14px;background:#7C3AED;color:#fff;border:none;border-radius:16px;font-weight:800;font-size:14px;cursor:pointer;">Open Fixed Deposit</button>
        </div>
      \`;

    case 'neo-wallet-3d':
      return \`
        <div style="background:#09090B;color:#fff;border-radius:36px;padding:24px 20px;font-family:'Inter',sans-serif;height:100%;display:flex;flex-direction:column;justify-content:space-between;">
          <div>
            <div style="font-weight:700;font-size:16px;margin-bottom:20px;">Neo Wallet</div>
            <div style="background:linear-gradient(135deg,#18181B,#27272A);border-radius:24px;padding:22px;border:1px solid #3F3F46;margin-bottom:16px;position:relative;overflow:hidden;">
              <div style="position:absolute;top:-20px;right:-20px;width:80px;height:80px;border-radius:50%;background:radial-gradient(circle,rgba(99,102,241,0.3),transparent);"></div>
              <div style="font-size:11px;color:#A1A1AA;font-weight:600;">Wallet Balance</div>
              <div style="font-size:30px;font-weight:900;margin-top:6px;">₹2,45,890</div>
              <div style="font-size:11px;color:#10B981;margin-top:4px;">+₹12,456 this month</div>
              <div style="display:flex;gap:8px;margin-top:14px;">
                <span style="background:rgba(255,255,255,0.1);padding:4px 10px;border-radius:99px;font-size:10px;font-weight:600;">UPI Linked</span>
                <span style="background:rgba(99,102,241,0.2);color:#818CF8;padding:4px 10px;border-radius:99px;font-size:10px;font-weight:600;">Premium</span>
              </div>
            </div>
            <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-bottom:16px;">
              <button style="padding:12px;background:#18181B;border:1px solid #27272A;border-radius:14px;color:#fff;font-size:10px;font-weight:700;cursor:pointer;display:flex;flex-direction:column;align-items:center;gap:4px;"><span style="font-size:16px;">📲</span>Pay</button>
              <button style="padding:12px;background:#18181B;border:1px solid #27272A;border-radius:14px;color:#fff;font-size:10px;font-weight:700;cursor:pointer;display:flex;flex-direction:column;align-items:center;gap:4px;"><span style="font-size:16px;">💸</span>Send</button>
              <button style="padding:12px;background:#18181B;border:1px solid #27272A;border-radius:14px;color:#fff;font-size:10px;font-weight:700;cursor:pointer;display:flex;flex-direction:column;align-items:center;gap:4px;"><span style="font-size:16px;">📊</span>Invest</button>
            </div>
            <div style="font-size:12px;font-weight:700;color:#A1A1AA;margin-bottom:8px;">RECENT</div>
            <div style="display:flex;flex-direction:column;gap:8px;">
              <div style="display:flex;align-items:center;justify-content:space-between;background:#18181B;padding:10px 12px;border-radius:12px;border:1px solid #27272A;">
                <div style="display:flex;align-items:center;gap:8px;">
                  <div style="width:32px;height:32px;border-radius:10px;background:#7C3AED;display:flex;align-items:center;justify-content:center;font-size:12px;">🏪</div>
                  <div><div style="font-size:12px;font-weight:700;">Amazon</div><div style="font-size:9px;color:#71717A;">2 hrs ago</div></div>
                </div>
                <span style="font-size:12px;font-weight:800;color:#EF4444;">-₹2,499</span>
              </div>
              <div style="display:flex;align-items:center;justify-content:space-between;background:#18181B;padding:10px 12px;border-radius:12px;border:1px solid #27272A;">
                <div style="display:flex;align-items:center;gap:8px;">
                  <div style="width:32px;height:32px;border-radius:10px;background:#10B981;display:flex;align-items:center;justify-content:center;font-size:12px;">💰</div>
                  <div><div style="font-size:12px;font-weight:700;">Salary Credit</div><div style="font-size:9px;color:#71717A;">Yesterday</div></div>
                </div>
                <span style="font-size:12px;font-weight:800;color:#10B981;">+₹85,000</span>
              </div>
            </div>
          </div>
          <div style="background:#18181B;border-radius:24px;padding:10px;display:flex;justify-content:space-around;border:1px solid #27272A;margin-top:14px;">
            <div style="color:#818CF8;font-size:18px;">🏠</div>
            <div style="color:#71717A;font-size:18px;">💳</div>
            <div style="color:#71717A;font-size:18px;">📊</div>
            <div style="color:#71717A;font-size:18px;">⚙️</div>
          </div>
        </div>
      \`;

    // ══════════════════════════════════════════════
    // CRYPTO SCREENS
    // ══════════════════════════════════════════════
    case 'trantor-candlestick':
      return \`
        <div style="background:#09090B;color:#fff;border-radius:36px;padding:24px 20px;font-family:'Inter',sans-serif;height:100%;display:flex;flex-direction:column;">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;">
            <span style="cursor:pointer;">←</span>
            <span style="font-weight:700;font-size:15px;">BTC/USDT</span>
            <span>⭐</span>
          </div>
          <div style="display:flex;align-items:center;gap:8px;margin-bottom:12px;">
            <span style="font-size:24px;font-weight:900;">$82,567.60</span>
            <span style="font-size:12px;color:#10B981;font-weight:700;">+2.20%</span>
          </div>
          <div style="display:flex;gap:4px;margin-bottom:12px;">
            <span style="background:#27272A;padding:4px 10px;border-radius:6px;font-size:10px;font-weight:700;">1H</span>
            <span style="background:#10B981;color:#064E3B;padding:4px 10px;border-radius:6px;font-size:10px;font-weight:700;">1D</span>
            <span style="background:#27272A;padding:4px 10px;border-radius:6px;font-size:10px;font-weight:700;">1W</span>
            <span style="background:#27272A;padding:4px 10px;border-radius:6px;font-size:10px;font-weight:700;">1M</span>
          </div>
          <div style="background:#18181B;border-radius:16px;padding:12px;margin-bottom:12px;height:140px;position:relative;overflow:hidden;border:1px solid #27272A;">
            <svg viewBox="0 0 280 120" style="width:100%;height:100%;">
              <line x1="20" y1="90" x2="20" y2="30" stroke="#EF4444" stroke-width="1.5"/>
              <rect x="14" y="40" width="12" height="30" fill="#EF4444" rx="1"/>
              <line x1="50" y1="85" x2="50" y2="20" stroke="#10B981" stroke-width="1.5"/>
              <rect x="44" y="25" width="12" height="35" fill="#10B981" rx="1"/>
              <line x1="80" y1="80" x2="80" y2="15" stroke="#10B981" stroke-width="1.5"/>
              <rect x="74" y="20" width="12" height="30" fill="#10B981" rx="1"/>
              <line x1="110" y1="70" x2="110" y2="25" stroke="#EF4444" stroke-width="1.5"/>
              <rect x="104" y="30" width="12" height="25" fill="#EF4444" rx="1"/>
              <line x1="140" y1="75" x2="140" y2="20" stroke="#10B981" stroke-width="1.5"/>
              <rect x="134" y="25" width="12" height="28" fill="#10B981" rx="1"/>
              <line x1="170" y1="65" x2="170" y2="10" stroke="#10B981" stroke-width="1.5"/>
              <rect x="164" y="15" width="12" height="32" fill="#10B981" rx="1"/>
              <line x1="200" y1="60" x2="200" y2="18" stroke="#EF4444" stroke-width="1.5"/>
              <rect x="194" y="22" width="12" height="22" fill="#EF4444" rx="1"/>
              <line x1="230" y1="55" x2="230" y2="12" stroke="#10B981" stroke-width="1.5"/>
              <rect x="224" y="16" width="12" height="24" fill="#10B981" rx="1"/>
              <line x1="260" y1="50" x2="260" y2="8" stroke="#10B981" stroke-width="1.5"/>
              <rect x="254" y="12" width="12" height="26" fill="#10B981" rx="1"/>
            </svg>
          </div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:12px;">
            <div style="background:#18181B;border:1px solid #27272A;border-radius:12px;padding:10px;">
              <div style="font-size:9px;color:#71717A;">24h High</div>
              <div style="font-size:14px;font-weight:800;color:#10B981;">$83,245</div>
            </div>
            <div style="background:#18181B;border:1px solid #27272A;border-radius:12px;padding:10px;">
              <div style="font-size:9px;color:#71717A;">24h Low</div>
              <div style="font-size:14px;font-weight:800;color:#EF4444;">$80,120</div>
            </div>
          </div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:auto;">
            <button style="padding:14px;background:#10B981;color:#064E3B;border:none;border-radius:14px;font-weight:800;font-size:14px;cursor:pointer;">Buy</button>
            <button style="padding:14px;background:#EF4444;color:#fff;border:none;border-radius:14px;font-weight:800;font-size:14px;cursor:pointer;">Sell</button>
          </div>
        </div>
      \`;

    case 'trantor-swap':
      return \`
        <div style="background:#09090B;color:#fff;border-radius:36px;padding:24px 20px;font-family:'Inter',sans-serif;height:100%;display:flex;flex-direction:column;justify-content:space-between;">
          <div>
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:20px;">
              <span style="cursor:pointer;">←</span>
              <span style="font-weight:700;">Swap</span>
              <span style="font-size:14px;">⚙️</span>
            </div>
            <div style="background:#18181B;border:1px solid #27272A;border-radius:20px;padding:18px;margin-bottom:-8px;position:relative;z-index:2;">
              <div style="font-size:10px;color:#71717A;font-weight:600;margin-bottom:6px;">From</div>
              <div style="display:flex;justify-content:space-between;align-items:center;">
                <div style="display:flex;align-items:center;gap:6px;">
                  <div style="width:28px;height:28px;border-radius:50%;background:#627EEA;font-size:12px;display:flex;align-items:center;justify-content:center;font-weight:900;">Ξ</div>
                  <span style="font-weight:700;">ETH</span>
                </div>
                <span style="font-size:22px;font-weight:900;">1.5</span>
              </div>
              <div style="font-size:10px;color:#71717A;text-align:right;margin-top:4px;">≈ $2,727.90</div>
            </div>
            <div style="text-align:center;z-index:3;position:relative;">
              <div style="width:36px;height:36px;border-radius:50%;background:#10B981;color:#064E3B;display:flex;align-items:center;justify-content:center;font-weight:900;margin:0 auto;border:3px solid #09090B;cursor:pointer;">⇅</div>
            </div>
            <div style="background:#18181B;border:1px solid #27272A;border-radius:20px;padding:18px;margin-top:-8px;position:relative;z-index:1;">
              <div style="font-size:10px;color:#71717A;font-weight:600;margin-bottom:6px;">To</div>
              <div style="display:flex;justify-content:space-between;align-items:center;">
                <div style="display:flex;align-items:center;gap:6px;">
                  <div style="width:28px;height:28px;border-radius:50%;background:#F7931A;font-size:12px;display:flex;align-items:center;justify-content:center;font-weight:900;">₿</div>
                  <span style="font-weight:700;">BTC</span>
                </div>
                <span style="font-size:22px;font-weight:900;">0.033</span>
              </div>
              <div style="font-size:10px;color:#71717A;text-align:right;margin-top:4px;">≈ $2,724.73</div>
            </div>
            <div style="background:#18181B;border:1px solid #27272A;border-radius:14px;padding:12px;margin-top:16px;">
              <div style="display:flex;justify-content:space-between;font-size:11px;margin-bottom:6px;">
                <span style="color:#71717A;">Rate</span>
                <span style="font-weight:700;">1 ETH = 0.022 BTC</span>
              </div>
              <div style="display:flex;justify-content:space-between;font-size:11px;margin-bottom:6px;">
                <span style="color:#71717A;">Fee</span>
                <span style="font-weight:700;">0.3%</span>
              </div>
              <div style="display:flex;justify-content:space-between;font-size:11px;">
                <span style="color:#71717A;">Slippage</span>
                <span style="font-weight:700;color:#F59E0B;">0.5%</span>
              </div>
            </div>
          </div>
          <button style="width:100%;padding:14px;background:#10B981;color:#064E3B;border:none;border-radius:16px;font-weight:800;font-size:14px;cursor:pointer;">Swap Now</button>
        </div>
      \`;

    case 'trantor-pool':
      return \`
        <div style="background:#09090B;color:#fff;border-radius:36px;padding:24px 20px;font-family:'Inter',sans-serif;height:100%;display:flex;flex-direction:column;">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:20px;">
            <span style="cursor:pointer;">←</span>
            <span style="font-weight:700;">Liquidity Pool</span>
            <span>+</span>
          </div>
          <div style="background:linear-gradient(135deg,#1E1B4B,#312E81);border-radius:20px;padding:18px;margin-bottom:16px;">
            <div style="font-size:11px;color:#A5B4FC;">Total Liquidity</div>
            <div style="font-size:28px;font-weight:900;margin-top:4px;">$124,567.89</div>
            <div style="font-size:11px;color:#10B981;margin-top:4px;">APY: 12.5%</div>
          </div>
          <div style="display:flex;flex-direction:column;gap:8px;">
            <div style="background:#18181B;border:1px solid #27272A;border-radius:16px;padding:14px;">
              <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
                <div style="display:flex;align-items:center;gap:6px;">
                  <div style="display:flex;"><div style="width:24px;height:24px;border-radius:50%;background:#627EEA;font-size:10px;display:flex;align-items:center;justify-content:center;font-weight:900;z-index:1;">Ξ</div><div style="width:24px;height:24px;border-radius:50%;background:#2775CA;font-size:10px;display:flex;align-items:center;justify-content:center;font-weight:900;margin-left:-8px;">$</div></div>
                  <span style="font-size:13px;font-weight:700;">ETH/USDC</span>
                </div>
                <span style="font-size:11px;color:#10B981;font-weight:700;">15.2% APY</span>
              </div>
              <div style="display:flex;justify-content:space-between;font-size:10px;color:#71717A;">
                <span>TVL: $45.2M</span><span>Your share: $2,450</span>
              </div>
            </div>
            <div style="background:#18181B;border:1px solid #27272A;border-radius:16px;padding:14px;">
              <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
                <div style="display:flex;align-items:center;gap:6px;">
                  <div style="display:flex;"><div style="width:24px;height:24px;border-radius:50%;background:#F7931A;font-size:10px;display:flex;align-items:center;justify-content:center;font-weight:900;z-index:1;">₿</div><div style="width:24px;height:24px;border-radius:50%;background:#627EEA;font-size:10px;display:flex;align-items:center;justify-content:center;font-weight:900;margin-left:-8px;">Ξ</div></div>
                  <span style="font-size:13px;font-weight:700;">BTC/ETH</span>
                </div>
                <span style="font-size:11px;color:#F59E0B;font-weight:700;">8.7% APY</span>
              </div>
              <div style="display:flex;justify-content:space-between;font-size:10px;color:#71717A;">
                <span>TVL: $89.1M</span><span>Your share: $5,120</span>
              </div>
            </div>
          </div>
          <button style="width:100%;padding:14px;background:#6366F1;color:#fff;border:none;border-radius:16px;font-weight:800;font-size:14px;cursor:pointer;margin-top:auto;">Add Liquidity</button>
        </div>
      \`;

    case 'nft-onboarding':
      return \`
        <div style="background:linear-gradient(180deg,#1E1B4B 0%,#09090B 100%);color:#fff;border-radius:36px;padding:24px 20px;font-family:'Inter',sans-serif;height:100%;display:flex;flex-direction:column;justify-content:space-between;">
          <div>
            <div style="text-align:center;margin-bottom:20px;">
              <div style="font-size:64px;margin-bottom:16px;filter:drop-shadow(0 10px 20px rgba(99,102,241,0.4));">🎨</div>
              <h2 style="font-size:24px;font-weight:900;margin:0 0 8px 0;">Discover NFTs</h2>
              <p style="font-size:13px;color:#A5B4FC;line-height:1.5;margin:0;">Collect, trade & showcase unique digital art from world-class creators.</p>
            </div>
            <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:10px;">
              <div style="background:linear-gradient(135deg,#7C3AED,#EC4899);border-radius:16px;padding:14px;aspect-ratio:1;display:flex;flex-direction:column;justify-content:flex-end;">
                <div style="font-size:11px;font-weight:800;">Cosmic Ape #4521</div>
                <div style="font-size:10px;color:rgba(255,255,255,0.7);">2.5 ETH</div>
              </div>
              <div style="background:linear-gradient(135deg,#0EA5E9,#6366F1);border-radius:16px;padding:14px;aspect-ratio:1;display:flex;flex-direction:column;justify-content:flex-end;">
                <div style="font-size:11px;font-weight:800;">Digital Dreams #891</div>
                <div style="font-size:10px;color:rgba(255,255,255,0.7);">1.2 ETH</div>
              </div>
            </div>
          </div>
          <div style="display:flex;flex-direction:column;gap:10px;">
            <button style="width:100%;padding:14px;background:#6366F1;color:#fff;border:none;border-radius:16px;font-weight:800;font-size:14px;cursor:pointer;">Connect Wallet</button>
            <button style="width:100%;padding:14px;background:transparent;color:#A5B4FC;border:1px solid #3730A3;border-radius:16px;font-weight:700;font-size:13px;cursor:pointer;">Browse Collection</button>
          </div>
        </div>
      \`;

    case 'crypto-wallet-skeuo':
      return \`
        <div style="background:#09090B;color:#fff;border-radius:36px;padding:24px 20px;font-family:'Inter',sans-serif;height:100%;display:flex;flex-direction:column;">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:20px;">
            <span style="font-weight:800;font-size:16px;">💎 Vault</span>
            <div style="display:flex;gap:8px;">
              <div style="width:32px;height:32px;border-radius:50%;background:#18181B;border:1px solid #27272A;display:flex;align-items:center;justify-content:center;font-size:12px;">🔍</div>
              <div style="width:32px;height:32px;border-radius:50%;background:#18181B;border:1px solid #27272A;display:flex;align-items:center;justify-content:center;font-size:12px;">🔔</div>
            </div>
          </div>
          <div style="text-align:center;margin-bottom:20px;">
            <div style="font-size:11px;color:#71717A;">Portfolio Value</div>
            <div style="font-size:32px;font-weight:900;margin-top:4px;">$45,672.83</div>
            <div style="font-size:12px;color:#10B981;margin-top:4px;">+$1,234.56 (2.78%) today</div>
          </div>
          <div style="display:flex;flex-direction:column;gap:8px;flex:1;">
            <div style="display:flex;align-items:center;justify-content:space-between;background:#18181B;padding:12px;border-radius:14px;border:1px solid #27272A;">
              <div style="display:flex;align-items:center;gap:10px;">
                <div style="width:36px;height:36px;border-radius:50%;background:#F7931A;font-size:14px;display:flex;align-items:center;justify-content:center;font-weight:900;">₿</div>
                <div><div style="font-size:13px;font-weight:700;">Bitcoin</div><div style="font-size:10px;color:#71717A;">0.45 BTC</div></div>
              </div>
              <div style="text-align:right;"><div style="font-size:13px;font-weight:800;">$37,155</div><div style="font-size:10px;color:#10B981;">+2.1%</div></div>
            </div>
            <div style="display:flex;align-items:center;justify-content:space-between;background:#18181B;padding:12px;border-radius:14px;border:1px solid #27272A;">
              <div style="display:flex;align-items:center;gap:10px;">
                <div style="width:36px;height:36px;border-radius:50%;background:#627EEA;font-size:14px;display:flex;align-items:center;justify-content:center;font-weight:900;">Ξ</div>
                <div><div style="font-size:13px;font-weight:700;">Ethereum</div><div style="font-size:10px;color:#71717A;">2.8 ETH</div></div>
              </div>
              <div style="text-align:right;"><div style="font-size:13px;font-weight:800;">$5,092</div><div style="font-size:10px;color:#EF4444;">-1.2%</div></div>
            </div>
            <div style="display:flex;align-items:center;justify-content:space-between;background:#18181B;padding:12px;border-radius:14px;border:1px solid #27272A;">
              <div style="display:flex;align-items:center;gap:10px;">
                <div style="width:36px;height:36px;border-radius:50%;background:#26A17B;font-size:14px;display:flex;align-items:center;justify-content:center;font-weight:900;">₮</div>
                <div><div style="font-size:13px;font-weight:700;">Tether</div><div style="font-size:10px;color:#71717A;">3,425 USDT</div></div>
              </div>
              <div style="text-align:right;"><div style="font-size:13px;font-weight:800;">$3,425</div><div style="font-size:10px;color:#71717A;">0.0%</div></div>
            </div>
          </div>
        </div>
      \`;

    case 'fuse-vip-home':
      return \`
        <div style="background:#09090B;color:#fff;border-radius:36px;padding:24px 20px;font-family:'Inter',sans-serif;height:100%;display:flex;flex-direction:column;justify-content:space-between;">
          <div>
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;">
              <span style="font-weight:800;font-size:15px;">Fuse <span style="color:#F59E0B;">VIP</span></span>
              <div style="background:linear-gradient(135deg,#F59E0B,#D97706);padding:4px 10px;border-radius:99px;font-size:10px;font-weight:800;">PREMIUM</div>
            </div>
            <div style="background:linear-gradient(135deg,#18181B,#27272A);border:1px solid #F59E0B33;border-radius:24px;padding:20px;margin-bottom:16px;">
              <div style="font-size:11px;color:#F59E0B;">Exclusive Member</div>
              <div style="font-size:28px;font-weight:900;margin-top:6px;">$156,780</div>
              <div style="font-size:11px;color:#10B981;margin-top:4px;">+$8,234 (5.5%)</div>
              <div style="display:flex;gap:8px;margin-top:12px;">
                <span style="background:rgba(245,158,11,0.15);color:#F59E0B;padding:4px 10px;border-radius:99px;font-size:10px;font-weight:700;">0% Trading Fee</span>
                <span style="background:rgba(16,185,129,0.15);color:#10B981;padding:4px 10px;border-radius:99px;font-size:10px;font-weight:700;">Priority Support</span>
              </div>
            </div>
            <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:10px;">
              <div style="background:#18181B;border:1px solid #27272A;border-radius:16px;padding:16px;text-align:center;">
                <div style="font-size:20px;margin-bottom:4px;">📈</div>
                <div style="font-size:12px;font-weight:700;">Stake</div>
                <div style="font-size:10px;color:#10B981;">Up to 18% APY</div>
              </div>
              <div style="background:#18181B;border:1px solid #27272A;border-radius:16px;padding:16px;text-align:center;">
                <div style="font-size:20px;margin-bottom:4px;">🔮</div>
                <div style="font-size:12px;font-weight:700;">Launchpad</div>
                <div style="font-size:10px;color:#A78BFA;">Early Access</div>
              </div>
            </div>
          </div>
          <div style="background:#18181B;border-radius:24px;padding:10px;display:flex;justify-content:space-around;border:1px solid #27272A;">
            <div style="color:#F59E0B;font-size:18px;">🏠</div>
            <div style="color:#71717A;font-size:18px;">📊</div>
            <div style="color:#71717A;font-size:18px;">🔄</div>
            <div style="color:#71717A;font-size:18px;">👤</div>
          </div>
        </div>
      \`;

    case 'defi-yield-farm':
      return \`
        <div style="background:#09090B;color:#fff;border-radius:36px;padding:24px 20px;font-family:'Inter',sans-serif;height:100%;display:flex;flex-direction:column;">
          <div style="font-weight:700;font-size:16px;margin-bottom:16px;">🌾 Yield Farming</div>
          <div style="background:linear-gradient(135deg,#065F46,#059669);border-radius:20px;padding:18px;margin-bottom:16px;">
            <div style="font-size:11px;color:#A7F3D0;">Total Earned</div>
            <div style="font-size:26px;font-weight:900;margin-top:4px;">$12,456.78</div>
            <div style="font-size:11px;color:#D1FAE5;margin-top:4px;">24h: +$234.56</div>
          </div>
          <div style="display:flex;flex-direction:column;gap:8px;flex:1;">
            <div style="background:#18181B;border:1px solid #27272A;border-radius:14px;padding:14px;">
              <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
                <span style="font-size:13px;font-weight:700;">🌿 USDC/DAI</span>
                <span style="background:rgba(16,185,129,0.15);color:#10B981;padding:4px 10px;border-radius:99px;font-size:10px;font-weight:700;">Active</span>
              </div>
              <div style="display:flex;justify-content:space-between;font-size:11px;color:#71717A;">
                <span>APY: <span style="color:#10B981;font-weight:800;">24.5%</span></span>
                <span>Staked: $5,000</span>
              </div>
              <div style="height:4px;background:#27272A;border-radius:99px;margin-top:8px;overflow:hidden;"><div style="height:100%;width:65%;background:#10B981;border-radius:99px;"></div></div>
            </div>
            <div style="background:#18181B;border:1px solid #27272A;border-radius:14px;padding:14px;">
              <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
                <span style="font-size:13px;font-weight:700;">🔥 ETH/MATIC</span>
                <span style="background:rgba(245,158,11,0.15);color:#F59E0B;padding:4px 10px;border-radius:99px;font-size:10px;font-weight:700;">Hot</span>
              </div>
              <div style="display:flex;justify-content:space-between;font-size:11px;color:#71717A;">
                <span>APY: <span style="color:#F59E0B;font-weight:800;">42.1%</span></span>
                <span>Staked: $3,200</span>
              </div>
              <div style="height:4px;background:#27272A;border-radius:99px;margin-top:8px;overflow:hidden;"><div style="height:100%;width:80%;background:#F59E0B;border-radius:99px;"></div></div>
            </div>
          </div>
          <button style="width:100%;padding:14px;background:#10B981;color:#064E3B;border:none;border-radius:16px;font-weight:800;font-size:14px;cursor:pointer;margin-top:12px;">Harvest Rewards</button>
        </div>
      \`;

    case 'token-launch-countdown':
      return \`
        <div style="background:linear-gradient(180deg,#09090B 0%,#1E1B4B 100%);color:#fff;border-radius:36px;padding:24px 20px;font-family:'Inter',sans-serif;height:100%;display:flex;flex-direction:column;justify-content:space-between;">
          <div>
            <div style="text-align:center;margin-bottom:20px;">
              <div style="font-size:11px;color:#A5B4FC;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;">Token Launch</div>
              <div style="font-size:24px;font-weight:900;margin-top:8px;">🚀 RentCoin IDO</div>
            </div>
            <div style="display:flex;justify-content:center;gap:12px;margin-bottom:24px;">
              <div style="text-align:center;background:#18181B;border:1px solid #3730A3;border-radius:16px;padding:12px 16px;min-width:56px;">
                <div style="font-size:24px;font-weight:900;color:#A5B4FC;">02</div>
                <div style="font-size:9px;color:#71717A;margin-top:2px;">DAYS</div>
              </div>
              <div style="text-align:center;background:#18181B;border:1px solid #3730A3;border-radius:16px;padding:12px 16px;min-width:56px;">
                <div style="font-size:24px;font-weight:900;color:#A5B4FC;">14</div>
                <div style="font-size:9px;color:#71717A;margin-top:2px;">HRS</div>
              </div>
              <div style="text-align:center;background:#18181B;border:1px solid #3730A3;border-radius:16px;padding:12px 16px;min-width:56px;">
                <div style="font-size:24px;font-weight:900;color:#A5B4FC;">37</div>
                <div style="font-size:9px;color:#71717A;margin-top:2px;">MIN</div>
              </div>
            </div>
            <div style="background:#18181B;border:1px solid #27272A;border-radius:16px;padding:14px;">
              <div style="display:flex;justify-content:space-between;font-size:11px;margin-bottom:8px;">
                <span style="color:#71717A;">Price</span><span style="font-weight:700;">$0.025</span>
              </div>
              <div style="display:flex;justify-content:space-between;font-size:11px;margin-bottom:8px;">
                <span style="color:#71717A;">Total Supply</span><span style="font-weight:700;">100M RENT</span>
              </div>
              <div style="display:flex;justify-content:space-between;font-size:11px;margin-bottom:8px;">
                <span style="color:#71717A;">Hard Cap</span><span style="font-weight:700;">$2,500,000</span>
              </div>
              <div style="height:6px;background:#27272A;border-radius:99px;margin-top:8px;overflow:hidden;">
                <div style="height:100%;width:73%;background:linear-gradient(90deg,#6366F1,#A78BFA);border-radius:99px;"></div>
              </div>
              <div style="font-size:10px;color:#A5B4FC;text-align:right;margin-top:4px;">73% filled</div>
            </div>
          </div>
          <button style="width:100%;padding:14px;background:#6366F1;color:#fff;border:none;border-radius:16px;font-weight:800;font-size:14px;cursor:pointer;">Join Whitelist</button>
        </div>
      \`;

    case 'portfolio-pie':
      return \`
        <div style="background:#09090B;color:#fff;border-radius:36px;padding:24px 20px;font-family:'Inter',sans-serif;height:100%;display:flex;flex-direction:column;">
          <div style="font-weight:700;font-size:16px;margin-bottom:16px;">Portfolio</div>
          <div style="text-align:center;margin-bottom:16px;position:relative;">
            <svg viewBox="0 0 120 120" style="width:120px;height:120px;margin:0 auto;">
              <circle cx="60" cy="60" r="50" fill="none" stroke="#27272A" stroke-width="12"/>
              <circle cx="60" cy="60" r="50" fill="none" stroke="#F7931A" stroke-width="12" stroke-dasharray="190 314" stroke-dashoffset="0" transform="rotate(-90 60 60)"/>
              <circle cx="60" cy="60" r="50" fill="none" stroke="#627EEA" stroke-width="12" stroke-dasharray="75 314" stroke-dashoffset="-190" transform="rotate(-90 60 60)"/>
              <circle cx="60" cy="60" r="50" fill="none" stroke="#26A17B" stroke-width="12" stroke-dasharray="49 314" stroke-dashoffset="-265" transform="rotate(-90 60 60)"/>
              <text x="60" y="56" text-anchor="middle" fill="#fff" font-size="14" font-weight="900">$45.6K</text>
              <text x="60" y="70" text-anchor="middle" fill="#71717A" font-size="8">Total</text>
            </svg>
          </div>
          <div style="display:flex;flex-direction:column;gap:8px;">
            <div style="display:flex;align-items:center;gap:10px;background:#18181B;padding:10px 12px;border-radius:12px;border:1px solid #27272A;">
              <div style="width:8px;height:8px;border-radius:50%;background:#F7931A;"></div>
              <span style="font-size:12px;font-weight:700;flex:1;">Bitcoin</span>
              <span style="font-size:12px;font-weight:700;">60.5%</span>
            </div>
            <div style="display:flex;align-items:center;gap:10px;background:#18181B;padding:10px 12px;border-radius:12px;border:1px solid #27272A;">
              <div style="width:8px;height:8px;border-radius:50%;background:#627EEA;"></div>
              <span style="font-size:12px;font-weight:700;flex:1;">Ethereum</span>
              <span style="font-size:12px;font-weight:700;">24.0%</span>
            </div>
            <div style="display:flex;align-items:center;gap:10px;background:#18181B;padding:10px 12px;border-radius:12px;border:1px solid #27272A;">
              <div style="width:8px;height:8px;border-radius:50%;background:#26A17B;"></div>
              <span style="font-size:12px;font-weight:700;flex:1;">Stablecoins</span>
              <span style="font-size:12px;font-weight:700;">15.5%</span>
            </div>
          </div>
        </div>
      \`;

`;

if (!code.includes(MARKER)) {
  console.error('Marker not found in screen-renderers.js!');
  process.exit(1);
}

code = code.replace(MARKER, newCases + '\n' + MARKER);
fs.writeFileSync(file, code);
console.log('Batch 1 injected: Banking (remaining) + Crypto screens');

// Verify
const cases = [...code.matchAll(/case\s+['"]([^'"]+)['"]/g)].map(m => m[1]);
console.log('Total cases now:', cases.length);
