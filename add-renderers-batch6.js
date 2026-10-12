/**
 * Batch 6: Sleep (4) + Gaming/Events (8) + Dashboards/SaaS (12) = 24 screens
 * Completing 100% of all 125 screens in all_screens.json!
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
    // BATCH 6: SLEEP, GAMING, EVENTS, DASHBOARDS & SAAS (24 SCREENS)
    // ══════════════════════════════════════════════
    case 'moonie-color-palette':
      return \`
        <div style="background:#0F172A;color:#E2E8F0;border-radius:36px;padding:24px 20px;font-family:'Inter',sans-serif;height:100%;display:flex;flex-direction:column;justify-content:space-between;text-align:center;">
          <div>
            <div style="font-size:32px;margin:12px auto;">🌙</div>
            <div style="font-size:22px;font-weight:900;letter-spacing:-0.02em;margin-bottom:6px;">Moonie Sleep Ambient</div>
            <div style="font-size:12px;color:#94A3B8;line-height:1.4;margin-bottom:20px;">Circadian lighting spectrum to trigger natural melatonin release.</div>
            <div style="display:flex;flex-direction:column;gap:10px;">
              <div style="background:linear-gradient(90deg,#1E1B4B,#312E81);border:2px solid #818CF8;border-radius:16px;padding:14px;display:flex;justify-content:space-between;align-items:center;">
                <span style="font-size:12px;font-weight:800;color:#C7D2FE;">Deep Starlight (430nm)</span>
                <span style="font-size:11px;color:#818CF8;font-weight:800;">ACTIVE</span>
              </div>
              <div style="background:linear-gradient(90deg,#451A03,#78350F);border:1px solid #78350F;border-radius:16px;padding:14px;display:flex;justify-content:space-between;align-items:center;">
                <span style="font-size:12px;font-weight:800;color:#FDE68A;">Warm Amber Candle (1800K)</span>
                <span style="font-size:11px;color:#D97706;">Select</span>
              </div>
            </div>
          </div>
          <button style="width:100%;padding:14px;background:#6366F1;color:#fff;border:none;border-radius:16px;font-weight:800;font-size:13px;cursor:pointer;">Start 8hr Sleep Session</button>
        </div>
      \`;

    case 'habit-timeline':
      return \`
        <div style="background:#09090B;color:#fff;border-radius:36px;padding:24px 20px;font-family:'Inter',sans-serif;height:100%;display:flex;flex-direction:column;overflow-y:auto;">
          <div style="font-weight:900;font-size:16px;margin-bottom:14px;">Color-Coded Routine Axis</div>
          <div style="display:flex;flex-direction:column;gap:10px;">
            <div style="background:#18181B;border-left:4px solid #3B82F6;border-radius:12px;padding:12px;display:flex;justify-content:space-between;">
              <div>
                <div style="font-size:12px;font-weight:800;">07:00 AM • Cold Plunge & Hydration</div>
                <div style="font-size:10px;color:#71717A;">Habit streak: 21 days</div>
              </div>
              <span style="font-size:14px;">✅</span>
            </div>
            <div style="background:#18181B;border-left:4px solid #10B981;border-radius:12px;padding:12px;display:flex;justify-content:space-between;">
              <div>
                <div style="font-size:12px;font-weight:800;">08:30 AM • 90m Deep Focus Work</div>
                <div style="font-size:10px;color:#71717A;">No slack / phone notifications</div>
              </div>
              <span style="font-size:14px;">✅</span>
            </div>
            <div style="background:#18181B;border-left:4px solid #F59E0B;border-radius:12px;padding:12px;display:flex;justify-content:space-between;">
              <div>
                <div style="font-size:12px;font-weight:800;">06:00 PM • Calisthenics Session</div>
                <div style="font-size:10px;color:#71717A;">Upcoming in 2 hours</div>
              </div>
              <span style="font-size:14px;">⏳</span>
            </div>
          </div>
        </div>
      \`;

    case 'neumorphic-widget':
      return \`
        <div style="background:#E0E5EC;color:#334155;border-radius:36px;padding:24px 20px;font-family:'Inter',sans-serif;height:100%;display:flex;flex-direction:column;justify-content:space-between;align-items:center;">
          <div style="font-weight:800;font-size:15px;letter-spacing:0.05em;color:#475569;">NEUMORPHIC WHITE</div>
          <!-- Tactile Neumorphic Dial -->
          <div style="width:140px;height:140px;border-radius:50%;background:#E0E5EC;box-shadow:9px 9px 18px #bcc1c8, -9px -9px 18px #ffffff;display:flex;align-items:center;justify-content:center;">
            <div style="width:70px;height:70px;border-radius:50%;background:#E0E5EC;box-shadow:inset 6px 6px 12px #bcc1c8, inset -6px -6px 12px #ffffff;display:flex;align-items:center;justify-content:center;font-size:24px;">
              ⏱️
            </div>
          </div>
          <div style="display:flex;gap:16px;">
            <div style="width:48px;height:48px;border-radius:16px;background:#E0E5EC;box-shadow:6px 6px 12px #bcc1c8, -6px -6px 12px #ffffff;display:flex;align-items:center;justify-content:center;cursor:pointer;font-size:16px;">⏮</div>
            <div style="width:48px;height:48px;border-radius:16px;background:#E0E5EC;box-shadow:inset 4px 4px 8px #bcc1c8, inset -4px -4px 8px #ffffff;display:flex;align-items:center;justify-content:center;cursor:pointer;font-size:16px;color:#3B82F6;">⏸</div>
            <div style="width:48px;height:48px;border-radius:16px;background:#E0E5EC;box-shadow:6px 6px 12px #bcc1c8, -6px -6px 12px #ffffff;display:flex;align-items:center;justify-content:center;cursor:pointer;font-size:16px;">⏭</div>
          </div>
        </div>
      \`;

    case 'mood-diary-suite':
      return \`
        <div style="background:#FFFBEB;color:#78350F;border-radius:36px;padding:24px 20px;font-family:'Inter',sans-serif;height:100%;display:flex;flex-direction:column;justify-content:space-between;text-align:center;">
          <div>
            <div style="font-size:18px;font-weight:900;margin-bottom:4px;">Daily Mood Check-In</div>
            <div style="font-size:11px;color:#B45309;margin-bottom:20px;">How is your mental headspace today?</div>
            <div style="display:flex;justify-content:space-between;font-size:32px;background:#FEF3C7;padding:16px;border-radius:24px;margin-bottom:16px;">
              <span style="cursor:pointer;">😴</span>
              <span style="cursor:pointer;">🌧️</span>
              <span style="cursor:pointer;transform:scale(1.3);">✨</span>
              <span style="cursor:pointer;">🚀</span>
              <span style="cursor:pointer;">🧘</span>
            </div>
            <div style="font-size:13px;font-weight:800;color:#92400E;">Radiant & Energized</div>
          </div>
          <button style="width:100%;padding:14px;background:#D97706;color:#fff;border:none;border-radius:16px;font-weight:800;font-size:13px;cursor:pointer;">Save Mood Reflection</button>
        </div>
      \`;

    case 'minecraft-store':
      return \`
        <div style="background:#18181B;color:#fff;border-radius:36px;padding:24px 20px;font-family:'Inter',sans-serif;height:100%;display:flex;flex-direction:column;overflow-y:auto;">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;">
            <span style="font-family:monospace;font-weight:900;font-size:15px;color:#4ADE80;">MINECRAFT MARKET</span>
            <span style="font-size:11px;background:#27272A;padding:4px 8px;border-radius:99px;">💎 1,420</span>
          </div>
          <div style="background:linear-gradient(135deg,#15803D,#166534);border-radius:20px;padding:18px;margin-bottom:12px;">
            <div style="font-size:10px;font-weight:800;color:#BBF7D0;">SEASON PASS 12</div>
            <div style="font-size:18px;font-weight:900;margin:4px 0;">Caves & Cliffs Redux</div>
            <div style="font-size:11px;color:#DCFCE7;">32 Custom Skins • 8 HD Texture Packs</div>
          </div>
        </div>
      \`;

    case 'minecraft-detail':
      return \`
        <div style="background:#09090B;color:#fff;border-radius:36px;padding:24px 20px;font-family:'Inter',sans-serif;height:100%;display:flex;flex-direction:column;justify-content:space-between;">
          <div>
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;">
              <span style="font-size:16px;cursor:pointer;">←</span>
              <span style="font-weight:800;font-size:15px;">Add-On Details</span>
              <span></span>
            </div>
            <div style="height:120px;background:#27272A;border-radius:18px;display:flex;align-items:center;justify-content:center;font-size:40px;margin-bottom:14px;">
              🗡️
            </div>
            <div style="font-size:18px;font-weight:900;margin-bottom:4px;">Netherite Armory 4K</div>
            <div style="font-size:11px;color:#A1A1AA;line-height:1.4;">Custom glowing enchantments and realistic sound effects for survival mode.</div>
          </div>
          <button style="width:100%;padding:14px;background:#22C55E;color:#052e16;border:none;border-radius:16px;font-weight:900;font-size:13px;cursor:pointer;">Unlock for 640 Minecoins</button>
        </div>
      \`;

    case 'music-festival-timeline':
      return \`
        <div style="background:#FFF1F2;color:#881337;border-radius:36px;padding:24px 20px;font-family:'Inter',sans-serif;height:100%;display:flex;flex-direction:column;overflow-y:auto;">
          <div style="font-weight:900;font-size:16px;margin-bottom:14px;">Coachella Lineup Timeline</div>
          <div style="display:flex;flex-direction:column;gap:10px;">
            <div style="background:#fff;border:1px solid #FFE4E6;border-radius:16px;padding:12px;display:flex;justify-content:space-between;align-items:center;">
              <div>
                <div style="font-size:13px;font-weight:800;color:#BE123C;">08:00 PM • Main Stage</div>
                <div style="font-size:11px;color:#9F1239;">Daft Punk Hologram Experience</div>
              </div>
              <span style="font-size:10px;background:#FFE4E6;color:#9F1239;padding:2px 8px;border-radius:99px;font-weight:800;">HEADLINER</span>
            </div>
            <div style="background:#fff;border:1px solid #FFE4E6;border-radius:16px;padding:12px;display:flex;justify-content:space-between;align-items:center;">
              <div>
                <div style="font-size:13px;font-weight:800;color:#BE123C;">10:30 PM • Sahara Tent</div>
                <div style="font-size:11px;color:#9F1239;">Peggy Gou DJ Set</div>
              </div>
              <span style="font-size:10px;background:#FFE4E6;color:#9F1239;padding:2px 8px;border-radius:99px;font-weight:800;">LIVE</span>
            </div>
          </div>
        </div>
      \`;

    case 'music-festival-invites':
      return \`
        <div style="background:#0F172A;color:#fff;border-radius:36px;padding:24px 20px;font-family:'Inter',sans-serif;height:100%;display:flex;flex-direction:column;justify-content:space-between;text-align:center;">
          <div>
            <div style="width:64px;height:64px;border-radius:50%;background:#F43F5E;display:flex;align-items:center;justify-content:center;font-size:28px;margin:16px auto;">🎪</div>
            <div style="font-size:22px;font-weight:900;margin-bottom:6px;">VIP Pass Invitation</div>
            <div style="font-size:12px;color:#94A3B8;margin-bottom:20px;">Joshua invited you to join the Desert Glamping Cabana camp.</div>
            <div style="background:#1E293B;border:1px solid #334155;border-radius:16px;padding:14px;text-align:left;">
              <div style="font-size:10px;color:#F43F5E;font-weight:800;">DATES</div>
              <div style="font-size:13px;font-weight:800;">April 18 - 21, 2027 • Indio, CA</div>
            </div>
          </div>
          <button style="width:100%;padding:14px;background:#F43F5E;color:#fff;border:none;border-radius:16px;font-weight:800;font-size:13px;cursor:pointer;">Accept & Confirm RSVP</button>
        </div>
      \`;

    case 'music-festival-directory':
      return \`
        <div style="background:#FFFFFF;color:#0F172A;border-radius:36px;padding:24px 20px;font-family:'Inter',sans-serif;height:100%;display:flex;flex-direction:column;overflow-y:auto;">
          <div style="font-weight:900;font-size:16px;margin-bottom:14px;">Festival Squad Directory</div>
          <div style="display:flex;flex-direction:column;gap:8px;">
            <div style="background:#F8FAFC;border:1px solid #E2E8F0;border-radius:14px;padding:12px;display:flex;justify-content:space-between;align-items:center;">
              <div style="display:flex;align-items:center;gap:10px;">
                <div style="width:32px;height:32px;border-radius:50%;background:#EC4899;color:#fff;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:11px;">SP</div>
                <div>
                  <div style="font-size:12px;font-weight:800;">Sophia Patel</div>
                  <div style="font-size:10px;color:#64748B;">Tent #4 • Battery: 88%</div>
                </div>
              </div>
              <span style="font-size:10px;color:#10B981;font-weight:700;">At Main Stage</span>
            </div>
          </div>
        </div>
      \`;

    case 'sports-booking-home':
      return \`
        <div style="background:#FFF7ED;color:#7C2D12;border-radius:36px;padding:24px 20px;font-family:'Inter',sans-serif;height:100%;display:flex;flex-direction:column;justify-content:space-between;">
          <div>
            <div style="font-weight:900;font-size:16px;margin-bottom:14px;">Turf & Court Booking</div>
            <div style="background:#FFFFFF;border:1px solid #FED7AA;border-radius:20px;padding:16px;margin-bottom:12px;">
              <div style="font-size:10px;color:#EA580C;font-weight:800;">FIFA APPROVED</div>
              <div style="font-size:15px;font-weight:900;color:#9A3412;margin:4px 0;">Play Arena — Turf A (7-a-side)</div>
              <div style="font-size:11px;color:#7C2D12;">Available slots today: 08:00 PM - 09:30 PM</div>
              <div style="font-size:14px;font-weight:900;color:#EA580C;margin-top:8px;">₹1,200 / hr</div>
            </div>
          </div>
          <button style="width:100%;padding:14px;background:#EA580C;color:#fff;border:none;border-radius:16px;font-weight:800;font-size:13px;cursor:pointer;">Reserve Turf Slot</button>
        </div>
      \`;

    case 'event-marketplace-home':
      return \`
        <div style="background:#F0FDF4;color:#14532D;border-radius:36px;padding:24px 20px;font-family:'Inter',sans-serif;height:100%;display:flex;flex-direction:column;overflow-y:auto;">
          <div style="font-weight:900;font-size:16px;margin-bottom:14px;">Event Marketplace</div>
          <div style="background:#FFFFFF;border:1px solid #BBF7D0;border-radius:20px;padding:16px;">
            <div style="font-size:10px;color:#16A34A;font-weight:800;">TECH SUMMIT</div>
            <div style="font-size:16px;font-weight:900;color:#0F172A;margin:4px 0;">Bangalore AI Founders Meet</div>
            <div style="font-size:11px;color:#64748B;">450 Founders • Demo Pitches • VC Matchmaking</div>
            <div style="font-size:13px;font-weight:900;color:#16A34A;margin-top:8px;">₹499 (Standard Pass)</div>
          </div>
        </div>
      \`;

    case 'event-marketplace-vendors':
      return \`
        <div style="background:#FFFFFF;color:#0F172A;border-radius:36px;padding:24px 20px;font-family:'Inter',sans-serif;height:100%;display:flex;flex-direction:column;">
          <div style="font-weight:900;font-size:16px;margin-bottom:14px;">Verified Event Vendors</div>
          <div style="display:flex;flex-direction:column;gap:10px;">
            <div style="background:#F8FAFC;border:1px solid #E2E8F0;border-radius:16px;padding:12px;display:flex;justify-content:space-between;align-items:center;">
              <div>
                <div style="font-size:12px;font-weight:800;">Stage Sound & Light Co.</div>
                <div style="font-size:10px;color:#64748B;">L-Acoustics K2 Rig • 4.9★</div>
              </div>
              <button style="padding:6px 12px;background:#0F172A;color:#fff;border:none;border-radius:8px;font-size:10px;font-weight:700;">Request Quote</button>
            </div>
          </div>
        </div>
      \`;

    case 'leaderboard-podium':
      return \`
        <div style="background:#0F172A;color:#fff;border-radius:36px;padding:24px 20px;font-family:'Inter',sans-serif;height:100%;display:flex;flex-direction:column;justify-content:space-between;text-align:center;">
          <div>
            <div style="font-weight:900;font-size:16px;margin-bottom:16px;">🏆 Weekly Leaderboard</div>
            <!-- 3D Podium Stacks -->
            <div style="display:flex;align-items:flex-end;justify-content:center;gap:10px;height:160px;margin-bottom:20px;">
              <div style="flex:1;background:#334155;border-radius:12px 12px 0 0;height:90px;padding:8px;display:flex;flex-direction:column;justify-content:flex-end;">
                <div style="font-size:10px;font-weight:800;">🥈 Alex</div>
                <div style="font-size:9px;color:#94A3B8;">8,420 pts</div>
              </div>
              <div style="flex:1;background:linear-gradient(180deg,#F59E0B,#B45309);border-radius:14px 14px 0 0;height:130px;padding:8px;display:flex;flex-direction:column;justify-content:flex-end;box-shadow:0 0 20px rgba(245,158,11,0.3);">
                <div style="font-size:18px;">👑</div>
                <div style="font-size:11px;font-weight:900;color:#fff;">🥇 Joshua</div>
                <div style="font-size:9px;color:#FEF3C7;">12,950 pts</div>
              </div>
              <div style="flex:1;background:#1E293B;border-radius:12px 12px 0 0;height:70px;padding:8px;display:flex;flex-direction:column;justify-content:flex-end;">
                <div style="font-size:10px;font-weight:800;">🥉 Maria</div>
                <div style="font-size:9px;color:#94A3B8;">6,100 pts</div>
              </div>
            </div>
          </div>
          <div style="background:#1E293B;border:1px solid #334155;border-radius:14px;padding:12px;display:flex;justify-content:space-between;align-items:center;">
            <span style="font-size:12px;font-weight:700;">Your Position: #1</span>
            <span style="font-size:12px;font-weight:800;color:#F59E0B;">+2,400 pts today</span>
          </div>
        </div>
      \`;

    case 'calendar-day-agenda':
      return \`
        <div style="background:#FFFFFF;color:#0F172A;border-radius:36px;padding:24px 20px;font-family:'Inter',sans-serif;height:100%;display:flex;flex-direction:column;overflow-y:auto;">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;">
            <div>
              <div style="font-size:10px;color:#64748B;font-weight:700;">TODAY</div>
              <div style="font-size:16px;font-weight:900;">Wednesday, Oct 11</div>
            </div>
            <span style="font-size:14px;">📅</span>
          </div>
          <div style="display:flex;flex-direction:column;gap:10px;">
            <div style="background:#EFF6FF;border-left:4px solid #3B82F6;border-radius:12px;padding:12px;">
              <div style="font-size:11px;color:#1D4ED8;font-weight:700;">10:00 AM - 11:00 AM</div>
              <div style="font-size:13px;font-weight:900;">Product Sprint Kickoff</div>
            </div>
            <div style="background:#F0FDF4;border-left:4px solid #10B981;border-radius:12px;padding:12px;">
              <div style="font-size:11px;color:#15803D;font-weight:700;">02:30 PM - 03:15 PM</div>
              <div style="font-size:13px;font-weight:900;">RentenPe UI Kit Review</div>
            </div>
          </div>
        </div>
      \`;

    case 'calendar-week-timeblocks':
      return \`
        <div style="background:#F8FAFC;color:#0F172A;border-radius:36px;padding:24px 20px;font-family:'Inter',sans-serif;height:100%;display:flex;flex-direction:column;">
          <div style="font-weight:900;font-size:15px;margin-bottom:12px;">Weekly Timeblock Matrix</div>
          <div style="display:grid;grid-template-columns:repeat(5,1fr);gap:6px;text-align:center;font-size:10px;font-weight:700;margin-bottom:12px;">
            <div style="padding:6px;background:#E2E8F0;border-radius:8px;">Mon</div>
            <div style="padding:6px;background:#E2E8F0;border-radius:8px;">Tue</div>
            <div style="padding:6px;background:#0F172A;color:#fff;border-radius:8px;">Wed</div>
            <div style="padding:6px;background:#E2E8F0;border-radius:8px;">Thu</div>
            <div style="padding:6px;background:#E2E8F0;border-radius:8px;">Fri</div>
          </div>
          <div style="flex:1;background:#fff;border:1px solid #E2E8F0;border-radius:16px;padding:12px;display:flex;flex-direction:column;gap:8px;">
            <div style="background:#EFF6FF;color:#1E40AF;padding:8px;border-radius:8px;font-size:11px;font-weight:700;">09:00 - Deep Focus Block</div>
            <div style="background:#FEF3C7;color:#92400E;padding:8px;border-radius:8px;font-size:11px;font-weight:700;">14:00 - Design Review</div>
          </div>
        </div>
      \`;

    case 'calendar-year-grid':
      return \`
        <div style="background:#FFFFFF;color:#0F172A;border-radius:36px;padding:24px 20px;font-family:'Inter',sans-serif;height:100%;display:flex;flex-direction:column;overflow-y:auto;">
          <div style="font-weight:900;font-size:15px;margin-bottom:12px;">Annual 12-Month Grid</div>
          <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;font-size:10px;">
            <div style="background:#F8FAFC;border:1px solid #E2E8F0;border-radius:10px;padding:8px;text-align:center;font-weight:700;">Jan</div>
            <div style="background:#F8FAFC;border:1px solid #E2E8F0;border-radius:10px;padding:8px;text-align:center;font-weight:700;">Feb</div>
            <div style="background:#F8FAFC;border:1px solid #E2E8F0;border-radius:10px;padding:8px;text-align:center;font-weight:700;">Mar</div>
            <div style="background:#F8FAFC;border:1px solid #E2E8F0;border-radius:10px;padding:8px;text-align:center;font-weight:700;">Apr</div>
            <div style="background:#F8FAFC;border:1px solid #E2E8F0;border-radius:10px;padding:8px;text-align:center;font-weight:700;">May</div>
            <div style="background:#F8FAFC;border:1px solid #E2E8F0;border-radius:10px;padding:8px;text-align:center;font-weight:700;">Jun</div>
            <div style="background:#F8FAFC;border:1px solid #E2E8F0;border-radius:10px;padding:8px;text-align:center;font-weight:700;">Jul</div>
            <div style="background:#F8FAFC;border:1px solid #E2E8F0;border-radius:10px;padding:8px;text-align:center;font-weight:700;">Aug</div>
            <div style="background:#F8FAFC;border:1px solid #E2E8F0;border-radius:10px;padding:8px;text-align:center;font-weight:700;">Sep</div>
            <div style="background:#0F172A;color:#fff;border-radius:10px;padding:8px;text-align:center;font-weight:800;">Oct (Current)</div>
            <div style="background:#F8FAFC;border:1px solid #E2E8F0;border-radius:10px;padding:8px;text-align:center;font-weight:700;">Nov</div>
            <div style="background:#F8FAFC;border:1px solid #E2E8F0;border-radius:10px;padding:8px;text-align:center;font-weight:700;">Dec</div>
          </div>
        </div>
      \`;

    case 'task-manager-dark':
      return \`
        <div style="background:#09090B;color:#fff;border-radius:36px;padding:24px 20px;font-family:'Inter',sans-serif;height:100%;display:flex;flex-direction:column;overflow-y:auto;">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px;">
            <span style="font-weight:900;font-size:16px;">Task Board</span>
            <span style="font-size:12px;background:#27272A;padding:3px 8px;border-radius:99px;">3 Pending</span>
          </div>
          <div style="display:flex;flex-direction:column;gap:8px;">
            <div style="background:#18181B;border:1px solid #27272A;border-radius:14px;padding:12px;display:flex;justify-content:space-between;align-items:center;">
              <span style="font-size:12px;font-weight:700;">Ship PayDash v2 Preview</span>
              <span style="font-size:10px;color:#10B981;">Done</span>
            </div>
            <div style="background:#18181B;border:1px solid #27272A;border-radius:14px;padding:12px;display:flex;justify-content:space-between;align-items:center;">
              <span style="font-size:12px;font-weight:700;">Generate All 125 Screen Renderers</span>
              <span style="font-size:10px;color:#F59E0B;">In Progress</span>
            </div>
          </div>
        </div>
      \`;

    case 'deployment-status-split':
      return \`
        <div style="background:#0B0F19;color:#fff;border-radius:36px;padding:24px 20px;font-family:'Inter',sans-serif;height:100%;display:flex;flex-direction:column;justify-content:space-between;">
          <div>
            <div style="font-weight:900;font-size:15px;margin-bottom:14px;">DevOps Deployment Matrix</div>
            <div style="background:#111827;border:1px solid #1F2937;border-radius:16px;padding:14px;margin-bottom:10px;">
              <div style="display:flex;justify-content:space-between;margin-bottom:4px;">
                <span style="font-size:12px;font-weight:800;">Production (us-east-1)</span>
                <span style="font-size:10px;color:#10B981;font-weight:800;">HEALTHY (v2.4.0)</span>
              </div>
              <div style="font-size:10px;color:#6B7280;">Uptime 99.99% • Latency 14ms</div>
            </div>
            <div style="background:#111827;border:1px solid #1F2937;border-radius:16px;padding:14px;">
              <div style="display:flex;justify-content:space-between;margin-bottom:4px;">
                <span style="font-size:12px;font-weight:800;">Staging (ap-south-1)</span>
                <span style="font-size:10px;color:#3B82F6;font-weight:800;">BUILDING (commit #f89a)</span>
              </div>
              <div style="font-size:10px;color:#6B7280;">Running test suite: 124/125 passed</div>
            </div>
          </div>
          <button style="width:100%;padding:14px;background:#3B82F6;color:#fff;border:none;border-radius:16px;font-weight:800;font-size:13px;cursor:pointer;">Promote Staging to Production</button>
        </div>
      \`;

    case 'data-usage-gauge':
      return \`
        <div style="background:#FFFFFF;color:#0F172A;border-radius:36px;padding:24px 20px;font-family:'Inter',sans-serif;height:100%;display:flex;flex-direction:column;justify-content:space-between;align-items:center;text-align:center;">
          <div style="font-weight:800;font-size:15px;">5G Data Plan Usage</div>
          <!-- Semi-Circle Gauge -->
          <svg viewBox="0 0 200 120" style="width:160px;height:100px;">
            <path d="M 20 100 A 80 80 0 0 1 180 100" stroke="#E2E8F0" stroke-width="16" fill="none" stroke-linecap="round"/>
            <path d="M 20 100 A 80 80 0 0 1 148 40" stroke="#3B82F6" stroke-width="16" fill="none" stroke-linecap="round"/>
          </svg>
          <div>
            <div style="font-size:26px;font-weight:900;">38.4 GB</div>
            <div style="font-size:11px;color:#64748B;">used of 50.0 GB (11 days left)</div>
          </div>
          <button style="width:100%;padding:14px;background:#0F172A;color:#fff;border:none;border-radius:16px;font-weight:800;font-size:13px;cursor:pointer;">Add 10GB Booster Pack</button>
        </div>
      \`;

    case 'transaction-table-dark':
      return \`
        <div style="background:#09090B;color:#fff;border-radius:36px;padding:24px 20px;font-family:'Inter',sans-serif;height:100%;display:flex;flex-direction:column;overflow-y:auto;">
          <div style="font-weight:900;font-size:16px;margin-bottom:14px;">Dense Ledger Feed</div>
          <div style="display:flex;flex-direction:column;gap:8px;font-size:11px;">
            <div style="background:#18181B;border:1px solid #27272A;border-radius:12px;padding:10px 12px;display:flex;justify-content:space-between;">
              <span>TX-8821 • Stripe Payout</span>
              <span style="color:#10B981;font-weight:800;">+$4,210.00</span>
            </div>
            <div style="background:#18181B;border:1px solid #27272A;border-radius:12px;padding:10px 12px;display:flex;justify-content:space-between;">
              <span>TX-8820 • AWS Infrastructure</span>
              <span style="color:#EF4444;font-weight:800;">-$840.20</span>
            </div>
          </div>
        </div>
      \`;

    case 'fitness-dashboard-dark':
      return \`
        <div style="background:#09090B;color:#fff;border-radius:36px;padding:24px 20px;font-family:'Inter',sans-serif;height:100%;display:flex;flex-direction:column;overflow-y:auto;">
          <div style="font-weight:900;font-size:16px;margin-bottom:14px;">Telemetry Rings SaaS</div>
          <div style="background:#18181B;border:1px solid #27272A;border-radius:20px;padding:16px;margin-bottom:12px;">
            <div style="font-size:11px;color:#A1A1AA;">ATHLETE VO2 MAX</div>
            <div style="font-size:28px;font-weight:900;color:#10B981;margin:4px 0;">58.4 <span style="font-size:12px;color:#71717A;">ml/kg/min</span></div>
            <div style="font-size:10px;color:#10B981;">Superior (Top 5% of age bracket)</div>
          </div>
        </div>
      \`;

    case 'brandbuzz-agency-hero':
      return \`
        <div style="background:#FF5722;color:#fff;border-radius:36px;padding:24px 20px;font-family:'Inter',sans-serif;height:100%;display:flex;flex-direction:column;justify-content:space-between;text-align:center;">
          <div></div>
          <div>
            <div style="font-size:32px;font-weight:900;letter-spacing:-0.03em;line-height:1.1;margin-bottom:10px;">Scale Your Brand With Impact</div>
            <div style="font-size:12px;color:#FFCCBC;line-height:1.5;">Award-winning creative design agency building next-generation digital products.</div>
          </div>
          <button style="width:100%;padding:16px;background:#000;color:#fff;border:none;border-radius:18px;font-weight:900;font-size:13px;cursor:pointer;">Start a Project</button>
        </div>
      \`;

    case 'brandbuzz-testimonials':
      return \`
        <div style="background:#FFFFFF;color:#0F172A;border-radius:36px;padding:24px 20px;font-family:'Inter',sans-serif;height:100%;display:flex;flex-direction:column;justify-content:space-between;">
          <div>
            <div style="font-weight:900;font-size:16px;margin-bottom:16px;">Client Testimonials</div>
            <div style="background:#F8FAFC;border:1px solid #E2E8F0;border-radius:20px;padding:18px;">
              <div style="font-size:16px;color:#F59E0B;margin-bottom:8px;">★★★★★</div>
              <div style="font-size:12px;font-style:italic;line-height:1.5;margin-bottom:12px;">"RentenPe UI Kit completely transformed our mobile app turnaround time. Simply the highest quality system on the web."</div>
              <div style="font-size:11px;font-weight:800;">— David Miller, VP of Product</div>
            </div>
          </div>
          <button style="width:100%;padding:14px;background:#0F172A;color:#fff;border:none;border-radius:16px;font-weight:800;font-size:13px;cursor:pointer;">Read All 50+ Case Studies</button>
        </div>
      \`;

    case 'medical-doctor-booking':
      return \`
        <div style="background:#F0FDFA;color:#134E4A;border-radius:36px;padding:24px 20px;font-family:'Inter',sans-serif;height:100%;display:flex;flex-direction:column;justify-content:space-between;">
          <div>
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:18px;">
              <span style="font-size:16px;cursor:pointer;">←</span>
              <span style="font-weight:800;font-size:15px;">Book Specialist</span>
              <span></span>
            </div>
            <div style="background:#FFFFFF;border:1px solid #CCFBF1;border-radius:20px;padding:16px;display:flex;gap:12px;align-items:center;margin-bottom:14px;">
              <div style="width:50px;height:50px;border-radius:50%;background:#0D9488;color:#fff;display:flex;align-items:center;justify-content:center;font-size:22px;">👨‍⚕️</div>
              <div>
                <div style="font-size:13px;font-weight:900;">Dr. Arjun Nambiar</div>
                <div style="font-size:11px;color:#14B8A6;font-weight:700;">Cardiology Specialist • MD</div>
                <div style="font-size:10px;color:#64748B;">Manipal Hospital Bangalore</div>
              </div>
            </div>
            <div style="font-size:12px;font-weight:800;margin-bottom:8px;">Available Consultation Slot</div>
            <div style="background:#FFFFFF;border:1px solid #CCFBF1;border-radius:14px;padding:12px;font-size:12px;font-weight:700;color:#0F766E;">
              📅 Tomorrow, Oct 12 • 11:30 AM (In-Clinic)
            </div>
          </div>
          <button style="width:100%;padding:14px;background:#0D9488;color:#fff;border:none;border-radius:16px;font-weight:800;font-size:13px;cursor:pointer;">Confirm Appointment ($40)</button>
        </div>
      \`;
`;

if (!code.includes(MARKER)) {
  console.error('Marker not found in screen-renderers.js');
  process.exit(1);
}

code = code.replace(MARKER, newCases + '\n' + MARKER);
fs.writeFileSync(file, code);
console.log('Batch 6 (24 screens) applied successfully!');
const cases = [...code.matchAll(/case\s+['"]([^'"]+)['"]/g)].map(m => m[1]);
console.log('Total cases now:', cases.length);
