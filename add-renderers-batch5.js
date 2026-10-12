/**
 * Batch 5: Fitness Suite (15) + Botanical & Gourmet Suite (9) = 24 screens
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
    // BATCH 5: FITNESS & BOTANICAL & GOURMET (24 SCREENS)
    // ══════════════════════════════════════════════
    case 'fitfuel-onboard':
      return \`
        <div style="background:#FFFFFF;color:#0F172A;border-radius:36px;padding:24px 20px;font-family:'Inter',sans-serif;height:100%;display:flex;flex-direction:column;justify-content:space-between;text-align:center;">
          <div style="display:flex;justify-content:flex-end;"><span style="font-size:12px;color:#94A3B8;font-weight:700;">Skip</span></div>
          <div>
            <div style="width:110px;height:110px;border-radius:32px;background:#F0FDF4;border:2px solid #DCFCE7;display:flex;align-items:center;justify-content:center;margin:0 auto 20px;font-size:48px;">
              🏃‍♂️
            </div>
            <div style="font-size:24px;font-weight:900;letter-spacing:-0.02em;margin-bottom:8px;">Fitness Made Effortless</div>
            <div style="font-size:12px;color:#64748B;line-height:1.5;">Personalized calisthenics, Apple Health sync, and real-time biometric tracking for peak human performance.</div>
          </div>
          <div>
            <button style="width:100%;padding:16px;background:#10B981;color:#fff;border:none;border-radius:18px;font-weight:800;font-size:14px;cursor:pointer;box-shadow:0 10px 25px rgba(16,185,129,0.3);">Start 14-Day Free Trial</button>
            <div style="font-size:10px;color:#94A3B8;margin-top:10px;">Already a member? <span style="color:#10B981;font-weight:700;cursor:pointer;">Log in</span></div>
          </div>
        </div>
      \`;

    case 'fitfuel-home':
      return \`
        <div style="background:#F8FAFC;color:#0F172A;border-radius:36px;padding:24px 20px;font-family:'Inter',sans-serif;height:100%;display:flex;flex-direction:column;overflow-y:auto;">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:18px;">
            <div>
              <div style="font-size:10px;color:#64748B;font-weight:600;">WEDNESDAY, OCT 11</div>
              <div style="font-size:18px;font-weight:900;">Daily Activity</div>
            </div>
            <div style="width:36px;height:36px;border-radius:50%;background:#E2E8F0;display:flex;align-items:center;justify-content:center;font-size:16px;">🔥</div>
          </div>
          <!-- Bento Health Metrics -->
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:14px;">
            <div style="background:#FFFFFF;border:1px solid #E2E8F0;border-radius:20px;padding:14px;">
              <div style="font-size:10px;color:#EF4444;font-weight:800;">ACTIVE BURN</div>
              <div style="font-size:22px;font-weight:900;margin:4px 0;">640 <span style="font-size:11px;font-weight:500;">kcal</span></div>
              <div style="font-size:9px;color:#94A3B8;">Goal: 750 kcal (85%)</div>
            </div>
            <div style="background:#FFFFFF;border:1px solid #E2E8F0;border-radius:20px;padding:14px;">
              <div style="font-size:10px;color:#10B981;font-weight:800;">EXERCISE</div>
              <div style="font-size:22px;font-weight:900;margin:4px 0;">42 <span style="font-size:11px;font-weight:500;">mins</span></div>
              <div style="font-size:9px;color:#94A3B8;">Goal: 30 mins (+140%)</div>
            </div>
          </div>
          <div style="background:#FFFFFF;border:1px solid #E2E8F0;border-radius:20px;padding:16px;margin-bottom:14px;">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
              <span style="font-size:12px;font-weight:800;">Next Scheduled Workout</span>
              <span style="font-size:10px;background:#F0FDF4;color:#16A34A;padding:2px 8px;border-radius:99px;font-weight:700;">Today 5:30 PM</span>
            </div>
            <div style="font-size:14px;font-weight:900;">Upper Body Calisthenics & Core</div>
            <div style="font-size:10px;color:#64748B;margin-top:2px;">Coach Chris Heria • 45 mins • Intermediate</div>
            <button style="width:100%;margin-top:12px;padding:10px;background:#0F172A;color:#fff;border:none;border-radius:12px;font-weight:700;font-size:11px;cursor:pointer;">Start Routine</button>
          </div>
        </div>
      \`;

    case 'fitfuel-workouts':
      return \`
        <div style="background:#FFFFFF;color:#0F172A;border-radius:36px;padding:24px 20px;font-family:'Inter',sans-serif;height:100%;display:flex;flex-direction:column;overflow-y:auto;">
          <div style="font-weight:900;font-size:16px;margin-bottom:14px;">Workout Library</div>
          <div style="display:flex;gap:8px;margin-bottom:14px;overflow-x:auto;">
            <button style="padding:6px 14px;border-radius:99px;background:#0F172A;color:#fff;border:none;font-size:11px;font-weight:700;">All</button>
            <button style="padding:6px 14px;border-radius:99px;background:#F1F5F9;color:#64748B;border:none;font-size:11px;font-weight:600;">Calisthenics</button>
            <button style="padding:6px 14px;border-radius:99px;background:#F1F5F9;color:#64748B;border:none;font-size:11px;font-weight:600;">HIIT</button>
            <button style="padding:6px 14px;border-radius:99px;background:#F1F5F9;color:#64748B;border:none;font-size:11px;font-weight:600;">Yoga</button>
          </div>
          <div style="display:flex;flex-direction:column;gap:12px;">
            <div style="border-radius:20px;background:#F8FAFC;border:1px solid #E2E8F0;padding:14px;display:flex;gap:12px;align-items:center;">
              <div style="width:60px;height:60px;border-radius:14px;background:#EFF6FF;display:flex;align-items:center;justify-content:center;font-size:24px;">🏋️</div>
              <div style="flex:1;">
                <div style="font-size:13px;font-weight:800;">Barbell Compound Power</div>
                <div style="font-size:10px;color:#64748B;">45 mins • 5 Sets • Strength</div>
                <div style="font-size:10px;color:#3B82F6;font-weight:700;margin-top:2px;">★ 4.9 (1.2k reviews)</div>
              </div>
            </div>
            <div style="border-radius:20px;background:#F8FAFC;border:1px solid #E2E8F0;padding:14px;display:flex;gap:12px;align-items:center;">
              <div style="width:60px;height:60px;border-radius:14px;background:#FEF2F2;display:flex;align-items:center;justify-content:center;font-size:24px;">🥊</div>
              <div style="flex:1;">
                <div style="font-size:13px;font-weight:800;">Shadow Boxing Shred</div>
                <div style="font-size:10px;color:#64748B;">30 mins • High Intensity HIIT</div>
                <div style="font-size:10px;color:#EF4444;font-weight:700;margin-top:2px;">Burn 420 kcal</div>
              </div>
            </div>
          </div>
        </div>
      \`;

    case 'fitfuel-workout-detail':
      return \`
        <div style="background:#FFFFFF;color:#0F172A;border-radius:36px;padding:24px 20px;font-family:'Inter',sans-serif;height:100%;display:flex;flex-direction:column;justify-content:space-between;">
          <div>
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;">
              <span style="font-size:16px;cursor:pointer;">←</span>
              <span style="font-weight:800;font-size:15px;">Session Breakdown</span>
              <span style="font-size:14px;">❤️</span>
            </div>
            <div style="font-size:20px;font-weight:900;margin-bottom:4px;">Muscle-Up Progression</div>
            <div style="font-size:11px;color:#64748B;margin-bottom:16px;">Phase 1: Explosive Pull-Ups & Straight Bar Dips</div>
            <div style="display:flex;flex-direction:column;gap:10px;">
              <div style="background:#F8FAFC;border:1px solid #E2E8F0;border-radius:14px;padding:12px;display:flex;justify-content:space-between;align-items:center;">
                <div>
                  <div style="font-size:12px;font-weight:800;">1. High Explosive Pull-Ups</div>
                  <div style="font-size:10px;color:#64748B;">4 sets × 8 reps • 90s rest</div>
                </div>
                <span style="font-size:11px;font-weight:800;color:#10B981;">Complete</span>
              </div>
              <div style="background:#F8FAFC;border:1px solid #E2E8F0;border-radius:14px;padding:12px;display:flex;justify-content:space-between;align-items:center;">
                <div>
                  <div style="font-size:12px;font-weight:800;">2. Straight Bar Dips</div>
                  <div style="font-size:10px;color:#64748B;">4 sets × 12 reps • 60s rest</div>
                </div>
                <span style="font-size:11px;font-weight:800;color:#3B82F6;">Next Up</span>
              </div>
            </div>
          </div>
          <button style="width:100%;padding:14px;background:#10B981;color:#fff;border:none;border-radius:16px;font-weight:800;font-size:13px;cursor:pointer;">Start Set 2 Timer</button>
        </div>
      \`;

    case 'fitfuel-activity-rings':
      return \`
        <div style="background:#000000;color:#fff;border-radius:36px;padding:24px 20px;font-family:'Inter',sans-serif;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:space-between;">
          <div style="width:100%;display:flex;justify-content:space-between;align-items:center;">
            <span style="font-weight:800;font-size:15px;">Apple Health Rings</span>
            <span style="font-size:11px;color:#94A3B8;">Today</span>
          </div>
          <!-- Concentric SVG Activity Rings -->
          <svg viewBox="0 0 200 200" style="width:160px;height:160px;">
            <!-- Outer Red (Move) -->
            <circle cx="100" cy="100" r="80" stroke="#330000" stroke-width="14" fill="none"/>
            <circle cx="100" cy="100" r="80" stroke="#FA114F" stroke-width="14" fill="none" stroke-dasharray="502" stroke-dashoffset="100" stroke-linecap="round"/>
            <!-- Middle Green (Exercise) -->
            <circle cx="100" cy="100" r="62" stroke="#003300" stroke-width="14" fill="none"/>
            <circle cx="100" cy="100" r="62" stroke="#A1FF00" stroke-width="14" fill="none" stroke-dasharray="389" stroke-dashoffset="50" stroke-linecap="round"/>
            <!-- Inner Cyan (Stand) -->
            <circle cx="100" cy="100" r="44" stroke="#002233" stroke-width="14" fill="none"/>
            <circle cx="100" cy="100" r="44" stroke="#00F0FF" stroke-width="14" fill="none" stroke-dasharray="276" stroke-dashoffset="60" stroke-linecap="round"/>
          </svg>
          <div style="width:100%;display:flex;justify-content:space-between;font-size:11px;text-align:center;">
            <div>
              <div style="color:#FA114F;font-weight:900;font-size:14px;">620</div>
              <div style="color:#71717A;">MOVE (CAL)</div>
            </div>
            <div>
              <div style="color:#A1FF00;font-weight:900;font-size:14px;">45</div>
              <div style="color:#71717A;">EXERCISE (MIN)</div>
            </div>
            <div>
              <div style="color:#00F0FF;font-weight:900;font-size:14px;">11/12</div>
              <div style="color:#71717A;">STAND (HRS)</div>
            </div>
          </div>
        </div>
      \`;

    case 'fitfuel-nutrition':
      return \`
        <div style="background:#FFFFFF;color:#0F172A;border-radius:36px;padding:24px 20px;font-family:'Inter',sans-serif;height:100%;display:flex;flex-direction:column;overflow-y:auto;">
          <div style="font-weight:900;font-size:16px;margin-bottom:14px;">Macros & Nutrition</div>
          <!-- Calories Bento -->
          <div style="background:#F8FAFC;border:1px solid #E2E8F0;border-radius:20px;padding:16px;margin-bottom:14px;">
            <div style="font-size:11px;color:#64748B;font-weight:700;">Remaining Energy</div>
            <div style="font-size:28px;font-weight:900;margin:4px 0;">1,240 <span style="font-size:12px;font-weight:500;">kcal</span></div>
            <div style="display:flex;gap:8px;margin-top:10px;">
              <div style="flex:1;background:#fff;border-radius:10px;padding:8px;text-align:center;border:1px solid #E2E8F0;">
                <div style="font-size:10px;color:#3B82F6;font-weight:700;">PROTEIN</div>
                <div style="font-size:13px;font-weight:900;">145g / 180g</div>
              </div>
              <div style="flex:1;background:#fff;border-radius:10px;padding:8px;text-align:center;border:1px solid #E2E8F0;">
                <div style="font-size:10px;color:#EAB308;font-weight:700;">CARBS</div>
                <div style="font-size:13px;font-weight:900;">190g / 220g</div>
              </div>
              <div style="flex:1;background:#fff;border-radius:10px;padding:8px;text-align:center;border:1px solid #E2E8F0;">
                <div style="font-size:10px;color:#EC4899;font-weight:700;">FAT</div>
                <div style="font-size:13px;font-weight:900;">45g / 65g</div>
              </div>
            </div>
          </div>
          <div style="font-size:12px;font-weight:800;margin-bottom:8px;">Logged Meals</div>
          <div style="display:flex;flex-direction:column;gap:8px;">
            <div style="background:#fff;border:1px solid #F1F5F9;border-radius:14px;padding:12px;display:flex;justify-content:space-between;">
              <span style="font-size:12px;font-weight:700;">🍳 3 Eggs + Sourdough Toast</span>
              <span style="font-size:12px;font-weight:800;">480 kcal</span>
            </div>
            <div style="background:#fff;border:1px solid #F1F5F9;border-radius:14px;padding:12px;display:flex;justify-content:space-between;">
              <span style="font-size:12px;font-weight:700;">🥗 Grilled Chicken Quinoa Bowl</span>
              <span style="font-size:12px;font-weight:800;">620 kcal</span>
            </div>
          </div>
        </div>
      \`;

    case 'credfit-browse':
      return \`
        <div style="background:#09090B;color:#fff;border-radius:36px;padding:24px 20px;font-family:'Inter',sans-serif;height:100%;display:flex;flex-direction:column;overflow-y:auto;">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:18px;">
            <span style="font-size:14px;font-weight:900;letter-spacing:0.1em;color:#CCFF00;">CRED FITNESS</span>
            <span style="font-size:10px;background:#18181B;border:1px solid #27272A;color:#CCFF00;padding:4px 8px;border-radius:99px;font-weight:800;">PASS ACTIVE</span>
          </div>
          <!-- Neon Grid Cards -->
          <div style="background:linear-gradient(135deg,#121215,#1F2317);border:1px solid #2A331A;border-radius:24px;padding:18px;margin-bottom:14px;box-shadow:0 12px 30px rgba(204,255,0,0.08);">
            <div style="font-size:10px;color:#CCFF00;font-weight:800;letter-spacing:0.1em;margin-bottom:4px;">PRO SPRINT</div>
            <div style="font-size:20px;font-weight:900;margin-bottom:6px;">Metabolic Acid Burn</div>
            <div style="font-size:11px;color:#A1A1AA;line-height:1.4;margin-bottom:12px;">Curated by Olympic conditioning coaches. High VO2 max intervals.</div>
            <button style="padding:10px 18px;background:#CCFF00;color:#000;border:none;border-radius:12px;font-weight:900;font-size:11px;cursor:pointer;">BOOK SPOT</button>
          </div>
          <div style="background:linear-gradient(135deg,#121215,#18181B);border:1px solid #27272A;border-radius:24px;padding:18px;">
            <div style="font-size:10px;color:#71717A;font-weight:800;letter-spacing:0.1em;margin-bottom:4px;">CALISTHENICS</div>
            <div style="font-size:20px;font-weight:900;margin-bottom:6px;">Planetary Front Lever</div>
            <div style="font-size:11px;color:#A1A1AA;">Straight-arm isometric mastery session.</div>
          </div>
        </div>
      \`;

    case 'credfit-splash':
      return \`
        <div style="background:#000000;color:#fff;border-radius:36px;padding:24px 20px;font-family:'Inter',sans-serif;height:100%;display:flex;flex-direction:column;justify-content:space-between;align-items:center;text-align:center;">
          <div></div>
          <div>
            <div style="font-size:38px;font-weight:900;letter-spacing:-0.04em;color:#CCFF00;margin-bottom:6px;">CRED_FIT</div>
            <div style="font-size:12px;letter-spacing:0.15em;color:#71717A;text-transform:uppercase;">Discipline Over Motivation</div>
          </div>
          <button style="width:100%;padding:16px;background:#CCFF00;color:#000;border:none;border-radius:16px;font-weight:900;font-size:13px;letter-spacing:0.05em;cursor:pointer;">ENTER SANCTUARY</button>
        </div>
      \`;

    case 'credfit-booking-confirmed':
      return \`
        <div style="background:#09090B;color:#fff;border-radius:36px;padding:24px 20px;font-family:'Inter',sans-serif;height:100%;display:flex;flex-direction:column;justify-content:space-between;text-align:center;">
          <div>
            <div style="width:72px;height:72px;border-radius:50%;background:#1F2317;border:2px solid #CCFF00;display:flex;align-items:center;justify-content:center;font-size:32px;margin:24px auto 16px;">
              ⚡
            </div>
            <div style="font-size:22px;font-weight:900;letter-spacing:-0.02em;margin-bottom:6px;">Spot Reserved</div>
            <div style="font-size:12px;color:#71717A;margin-bottom:24px;">CRED Calisthenics Lab • Indiranagar Center</div>
            <div style="background:#18181B;border:1px solid #27272A;border-radius:20px;padding:18px;text-align:left;">
              <div style="font-size:10px;color:#CCFF00;font-weight:800;margin-bottom:4px;">TIME & DATE</div>
              <div style="font-size:14px;font-weight:900;margin-bottom:12px;">Tomorrow, Oct 12 • 06:30 AM</div>
              <div style="font-size:10px;color:#CCFF00;font-weight:800;margin-bottom:4px;">INSTRUCTOR</div>
              <div style="font-size:14px;font-weight:900;">Chris Heria (Master Class)</div>
            </div>
          </div>
          <button style="width:100%;padding:14px;background:#CCFF00;color:#000;border:none;border-radius:16px;font-weight:900;font-size:12px;cursor:pointer;">Add to Apple Calendar</button>
        </div>
      \`;

    case 'credfit-workout-detail':
      return \`
        <div style="background:#09090B;color:#fff;border-radius:36px;padding:24px 20px;font-family:'Inter',sans-serif;height:100%;display:flex;flex-direction:column;justify-content:space-between;">
          <div>
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:18px;">
              <span style="font-size:16px;cursor:pointer;">←</span>
              <span style="font-size:12px;font-weight:800;color:#CCFF00;">PROTOCOL #401</span>
              <span></span>
            </div>
            <div style="font-size:22px;font-weight:900;margin-bottom:6px;">Full Planche Progression</div>
            <div style="font-size:11px;color:#71717A;margin-bottom:20px;">Tuck planche → Advanced tuck → Straddle hold</div>
            <div style="display:flex;flex-direction:column;gap:10px;">
              <div style="background:#18181B;border-left:4px solid #CCFF00;padding:12px;border-radius:10px;">
                <div style="font-size:12px;font-weight:800;">1. Scapular Protraction Lean</div>
                <div style="font-size:10px;color:#71717A;">5 Sets × 15s Hold</div>
              </div>
              <div style="background:#18181B;border-left:4px solid #CCFF00;padding:12px;border-radius:10px;">
                <div style="font-size:12px;font-weight:800;">2. Pseudo Planche Push-Ups</div>
                <div style="font-size:10px;color:#71717A;">4 Sets × 10 Reps</div>
              </div>
            </div>
          </div>
          <button style="width:100%;padding:14px;background:#CCFF00;color:#000;border:none;border-radius:16px;font-weight:900;font-size:13px;cursor:pointer;">INITIALIZE TIMER</button>
        </div>
      \`;

    case 'credfit-exercise-timer':
      return \`
        <div style="background:#000000;color:#fff;border-radius:36px;padding:24px 20px;font-family:'Inter',sans-serif;height:100%;display:flex;flex-direction:column;justify-content:space-between;align-items:center;text-align:center;">
          <div style="width:100%;display:flex;justify-content:space-between;font-size:12px;color:#71717A;">
            <span>SET 3 / 5</span>
            <span style="color:#CCFF00;">WORK INTERVAL</span>
          </div>
          <div>
            <div style="font-size:72px;font-weight:900;font-family:monospace;letter-spacing:-0.05em;color:#CCFF00;">00:45</div>
            <div style="font-size:13px;font-weight:800;color:#A1A1AA;">TUCK PLANCHE HOLD</div>
          </div>
          <div style="width:100%;display:flex;gap:12px;">
            <button style="flex:1;padding:14px;background:#18181B;border:1px solid #27272A;color:#fff;border-radius:14px;font-weight:800;font-size:12px;cursor:pointer;">PAUSE</button>
            <button style="flex:1;padding:14px;background:#CCFF00;color:#000;border:none;border-radius:14px;font-weight:900;font-size:12px;cursor:pointer;">COMPLETE</button>
          </div>
        </div>
      \`;

    case 'credfit-trainer-profile':
      return \`
        <div style="background:#09090B;color:#fff;border-radius:36px;padding:24px 20px;font-family:'Inter',sans-serif;height:100%;display:flex;flex-direction:column;overflow-y:auto;">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:18px;">
            <span style="font-size:16px;cursor:pointer;">←</span>
            <span style="font-weight:800;font-size:15px;">Trainer Profile</span>
            <span style="font-size:14px;">⭐</span>
          </div>
          <div style="text-align:center;margin-bottom:16px;">
            <div style="width:72px;height:72px;border-radius:50%;background:#18181B;border:2px solid #CCFF00;display:flex;align-items:center;justify-content:center;margin:0 auto 10px;font-size:32px;">
              ⚡
            </div>
            <div style="font-size:18px;font-weight:900;">Chris Heria</div>
            <div style="font-size:11px;color:#CCFF00;font-weight:700;">Global Calisthenics Master</div>
          </div>
          <div style="display:flex;justify-content:space-around;background:#18181B;border:1px solid #27272A;border-radius:16px;padding:12px;margin-bottom:16px;font-size:11px;text-align:center;">
            <div><div style="font-size:14px;font-weight:900;color:#CCFF00;">4.2M</div><div style="color:#71717A;">Athletes</div></div>
            <div><div style="font-size:14px;font-weight:900;color:#CCFF00;">4.98</div><div style="color:#71717A;">Rating</div></div>
            <div><div style="font-size:14px;font-weight:900;color:#CCFF00;">14</div><div style="color:#71717A;">Protocols</div></div>
          </div>
          <button style="width:100%;padding:14px;background:#CCFF00;color:#000;border:none;border-radius:16px;font-weight:900;font-size:13px;cursor:pointer;margin-top:auto;">Book 1-on-1 Mentorship</button>
        </div>
      \`;

    case 'credfit-reviews':
      return \`
        <div style="background:#09090B;color:#fff;border-radius:36px;padding:24px 20px;font-family:'Inter',sans-serif;height:100%;display:flex;flex-direction:column;overflow-y:auto;">
          <div style="font-weight:900;font-size:16px;margin-bottom:14px;">Athlete Feedback</div>
          <div style="display:flex;flex-direction:column;gap:10px;">
            <div style="background:#18181B;border:1px solid #27272A;border-radius:16px;padding:14px;">
              <div style="display:flex;justify-content:space-between;margin-bottom:4px;">
                <span style="font-size:12px;font-weight:800;color:#CCFF00;">Vikram S.</span>
                <span style="font-size:10px;color:#71717A;">Yesterday</span>
              </div>
              <div style="font-size:11px;color:#D4D4D8;line-height:1.4;">Achieved my first 10-second front lever after 6 weeks on this CRED routine. Phenomenal cueing.</div>
            </div>
            <div style="background:#18181B;border:1px solid #27272A;border-radius:16px;padding:14px;">
              <div style="display:flex;justify-content:space-between;margin-bottom:4px;">
                <span style="font-size:12px;font-weight:800;color:#CCFF00;">Ananya M.</span>
                <span style="font-size:10px;color:#71717A;">3 days ago</span>
              </div>
              <div style="font-size:11px;color:#D4D4D8;line-height:1.4;">Pure discipline. No fluff or generic gym music. Highly recommended.</div>
            </div>
          </div>
        </div>
      \`;

    case 'fitbite-onboard':
      return \`
        <div style="background:#FFFFFF;color:#0F172A;border-radius:36px;padding:24px 20px;font-family:'Inter',sans-serif;height:100%;display:flex;flex-direction:column;justify-content:space-between;text-align:center;">
          <div></div>
          <div>
            <div style="width:100px;height:100px;border-radius:30px;background:#FEF3C7;display:flex;align-items:center;justify-content:center;margin:0 auto 20px;font-size:48px;">
              🥑
            </div>
            <div style="font-size:24px;font-weight:900;letter-spacing:-0.02em;margin-bottom:8px;">AI Food Scanner</div>
            <div style="font-size:12px;color:#64748B;line-height:1.5;">Snap a photo of your meal. Our computer vision computes calories and macros in under 2 seconds.</div>
          </div>
          <button style="width:100%;padding:16px;background:#F59E0B;color:#fff;border:none;border-radius:18px;font-weight:800;font-size:14px;cursor:pointer;">Scan First Plate</button>
        </div>
      \`;

    case 'fitbite-dashboard':
      return \`
        <div style="background:#F8FAFC;color:#0F172A;border-radius:36px;padding:24px 20px;font-family:'Inter',sans-serif;height:100%;display:flex;flex-direction:column;overflow-y:auto;">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:18px;">
            <span style="font-weight:900;font-size:16px;">Daily Nutrition Log</span>
            <span style="font-size:12px;background:#DCFCE7;color:#15803D;padding:2px 8px;border-radius:99px;font-weight:700;">On Track</span>
          </div>
          <div style="background:#FFFFFF;border:1px solid #E2E8F0;border-radius:20px;padding:16px;margin-bottom:14px;">
            <div style="font-size:11px;color:#64748B;font-weight:700;">Water Intake Tracker</div>
            <div style="font-size:22px;font-weight:900;margin:4px 0;">2.4L / 3.0L</div>
            <div style="height:6px;background:#E0F2FE;border-radius:99px;overflow:hidden;margin-top:8px;">
              <div style="width:80%;height:100%;background:#0284C7;border-radius:99px;"></div>
            </div>
          </div>
          <button style="width:100%;padding:14px;background:#0F172A;color:#fff;border:none;border-radius:16px;font-weight:800;font-size:13px;cursor:pointer;">+ Log Water (+250ml)</button>
        </div>
      \`;

    case 'leafora-splash':
      return \`
        <div style="background:linear-gradient(180deg,#064E3B 0%,#022C22 100%);color:#fff;border-radius:36px;padding:24px 20px;font-family:'Inter',sans-serif;height:100%;display:flex;flex-direction:column;justify-content:space-between;text-align:center;">
          <div></div>
          <div>
            <div style="font-size:48px;margin-bottom:12px;">🌿</div>
            <div style="font-size:26px;font-weight:900;letter-spacing:-0.02em;color:#A7F3D0;margin-bottom:6px;">Leafora Flora</div>
            <div style="font-size:12px;color:#6EE7B7;line-height:1.5;">Botanical sanctuaries & rare indoor plant collections delivered to your home.</div>
          </div>
          <button style="width:100%;padding:16px;background:#10B981;color:#022C22;border:none;border-radius:18px;font-weight:900;font-size:14px;cursor:pointer;">Explore Nursery</button>
        </div>
      \`;

    case 'leafora-shop-home':
      return \`
        <div style="background:#F0FDF4;color:#064E3B;border-radius:36px;padding:24px 20px;font-family:'Inter',sans-serif;height:100%;display:flex;flex-direction:column;overflow-y:auto;">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;">
            <span style="font-weight:900;font-size:16px;">Botanical Shop</span>
            <span style="font-size:14px;">🛒 2</span>
          </div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">
            <div style="background:#FFFFFF;border:1px solid #DCFCE7;border-radius:20px;padding:12px;text-align:center;">
              <div style="font-size:36px;margin-bottom:6px;">🪴</div>
              <div style="font-size:12px;font-weight:800;">Monstera Deliciosa</div>
              <div style="font-size:11px;color:#059669;font-weight:900;">$34.00</div>
            </div>
            <div style="background:#FFFFFF;border:1px solid #DCFCE7;border-radius:20px;padding:12px;text-align:center;">
              <div style="font-size:36px;margin-bottom:6px;">🌵</div>
              <div style="font-size:12px;font-weight:800;">Golden Barrel Cactus</div>
              <div style="font-size:11px;color:#059669;font-weight:900;">$18.50</div>
            </div>
          </div>
        </div>
      \`;

    case 'leafora-cart-checkout':
      return \`
        <div style="background:#FFFFFF;color:#0F172A;border-radius:36px;padding:24px 20px;font-family:'Inter',sans-serif;height:100%;display:flex;flex-direction:column;justify-content:space-between;">
          <div>
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:18px;">
              <span style="font-size:16px;cursor:pointer;">←</span>
              <span style="font-weight:800;font-size:15px;">Your Cart (2 items)</span>
              <span></span>
            </div>
            <div style="display:flex;flex-direction:column;gap:10px;">
              <div style="background:#F8FAFC;border:1px solid #E2E8F0;border-radius:14px;padding:12px;display:flex;justify-content:space-between;align-items:center;">
                <div>
                  <div style="font-size:12px;font-weight:800;">Monstera Deliciosa (Large)</div>
                  <div style="font-size:10px;color:#64748B;">Ceramic Pot Included</div>
                </div>
                <span style="font-size:12px;font-weight:900;">$34.00</span>
              </div>
            </div>
          </div>
          <div>
            <div style="display:flex;justify-content:space-between;margin-bottom:12px;">
              <span style="font-size:12px;color:#64748B;">Total with Eco-Delivery</span>
              <span style="font-size:18px;font-weight:900;">$38.50</span>
            </div>
            <button style="width:100%;padding:14px;background:#059669;color:#fff;border:none;border-radius:16px;font-weight:800;font-size:13px;cursor:pointer;">Instant 1-Click Checkout</button>
          </div>
        </div>
      \`;

    case 'plantcare-home':
      return \`
        <div style="background:#FFFFFF;color:#0F172A;border-radius:36px;padding:24px 20px;font-family:'Inter',sans-serif;height:100%;display:flex;flex-direction:column;overflow-y:auto;">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:18px;">
            <span style="font-weight:900;font-size:16px;">My IoT Plants</span>
            <span style="font-size:12px;color:#10B981;font-weight:700;">+ Pair Sensor</span>
          </div>
          <div style="background:#F0FDF4;border:1px solid #BBF7D0;border-radius:20px;padding:16px;margin-bottom:12px;">
            <div style="display:flex;justify-content:space-between;align-items:center;">
              <div style="display:flex;align-items:center;gap:10px;">
                <span style="font-size:28px;">🪴</span>
                <div>
                  <div style="font-size:13px;font-weight:900;">Fiddle Leaf Fig</div>
                  <div style="font-size:10px;color:#16A34A;">Living Room Window</div>
                </div>
              </div>
              <span style="font-size:11px;font-weight:800;color:#16A34A;">Healthy 94%</span>
            </div>
          </div>
        </div>
      \`;

    case 'plantcare-detail':
      return \`
        <div style="background:#FFFFFF;color:#0F172A;border-radius:36px;padding:24px 20px;font-family:'Inter',sans-serif;height:100%;display:flex;flex-direction:column;justify-content:space-between;">
          <div>
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:18px;">
              <span style="font-size:16px;cursor:pointer;">←</span>
              <span style="font-weight:800;font-size:15px;">Soil Telemetry</span>
              <span></span>
            </div>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
              <div style="background:#F8FAFC;border:1px solid #E2E8F0;border-radius:16px;padding:14px;text-align:center;">
                <div style="font-size:10px;color:#64748B;">MOISTURE</div>
                <div style="font-size:20px;font-weight:900;color:#0284C7;margin:4px 0;">68%</div>
                <div style="font-size:9px;color:#10B981;">Optimal Level</div>
              </div>
              <div style="background:#F8FAFC;border:1px solid #E2E8F0;border-radius:16px;padding:14px;text-align:center;">
                <div style="font-size:10px;color:#64748B;">SUNLIGHT</div>
                <div style="font-size:20px;font-weight:900;color:#D97706;margin:4px 0;">4,200 lx</div>
                <div style="font-size:9px;color:#10B981;">Bright Indirect</div>
              </div>
            </div>
          </div>
          <button style="width:100%;padding:14px;background:#0F172A;color:#fff;border:none;border-radius:16px;font-weight:800;font-size:13px;cursor:pointer;">Trigger Smart Sprinkler</button>
        </div>
      \`;

    case 'coffee-shop-home':
      return \`
        <div style="background:#1C1917;color:#F5F5F4;border-radius:36px;padding:24px 20px;font-family:'Inter',sans-serif;height:100%;display:flex;flex-direction:column;overflow-y:auto;">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:18px;">
            <span style="font-size:15px;font-weight:900;color:#D97706;">ROAST & BREW</span>
            <span style="font-size:14px;">☕</span>
          </div>
          <div style="background:#292524;border-radius:20px;padding:16px;margin-bottom:14px;">
            <div style="font-size:10px;color:#D97706;font-weight:800;">TODAY'S SINGLE ORIGIN</div>
            <div style="font-size:16px;font-weight:900;margin:4px 0;">Ethiopia Yirgacheffe Washed</div>
            <div style="font-size:11px;color:#A8A29E;">Jasmine floral notes with bright bergamot acidity.</div>
            <div style="font-size:14px;font-weight:900;color:#F59E0B;margin-top:8px;">$5.50</div>
          </div>
        </div>
      \`;

    case 'coffee-shop-detail':
      return \`
        <div style="background:#1C1917;color:#F5F5F4;border-radius:36px;padding:24px 20px;font-family:'Inter',sans-serif;height:100%;display:flex;flex-direction:column;justify-content:space-between;">
          <div>
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:18px;">
              <span style="font-size:16px;cursor:pointer;">←</span>
              <span style="font-weight:800;font-size:15px;">Flat White Specs</span>
              <span></span>
            </div>
            <div style="font-size:12px;font-weight:800;margin-bottom:8px;">Choose Milk</div>
            <div style="display:flex;gap:8px;margin-bottom:16px;">
              <button style="flex:1;padding:10px;border-radius:12px;background:#D97706;color:#000;border:none;font-weight:800;font-size:11px;">Oat (Oatly)</button>
              <button style="flex:1;padding:10px;border-radius:12px;background:#292524;color:#A8A29E;border:none;font-weight:700;font-size:11px;">Almond</button>
              <button style="flex:1;padding:10px;border-radius:12px;background:#292524;color:#A8A29E;border:none;font-weight:700;font-size:11px;">Whole Milk</button>
            </div>
          </div>
          <button style="width:100%;padding:14px;background:#D97706;color:#000;border:none;border-radius:16px;font-weight:900;font-size:13px;cursor:pointer;">Add to Cup ($6.00)</button>
        </div>
      \`;

    case 'coffee-landing-desktop':
      return \`
        <div style="background:#292524;color:#FAF7F2;border-radius:36px;padding:24px 20px;font-family:'Inter',sans-serif;height:100%;display:flex;flex-direction:column;justify-content:center;text-align:center;">
          <div style="font-size:32px;margin-bottom:8px;">☕</div>
          <div style="font-size:22px;font-weight:900;letter-spacing:-0.02em;margin-bottom:8px;">Artisan Coffee Roasters</div>
          <div style="font-size:11px;color:#D6D3D1;line-height:1.5;margin-bottom:20px;">Micro-lot single origin beans direct from fair-trade high-altitude estates.</div>
          <button style="padding:14px 24px;background:#D97706;color:#000;border:none;border-radius:16px;font-weight:900;font-size:12px;cursor:pointer;">Order Bag Delivery</button>
        </div>
      \`;

    case 'gourmet-food-home':
      return \`
        <div style="background:#FAFAFA;color:#18181B;border-radius:36px;padding:24px 20px;font-family:'Inter',sans-serif;height:100%;display:flex;flex-direction:column;overflow-y:auto;">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;">
            <span style="font-weight:900;font-size:16px;">Gourmet Kitchen</span>
            <span style="font-size:14px;">🍜</span>
          </div>
          <div style="display:flex;flex-direction:column;gap:10px;">
            <div style="background:#FFFFFF;border:1px solid #E4E4E7;border-radius:18px;padding:14px;display:flex;gap:12px;align-items:center;">
              <span style="font-size:32px;">🍜</span>
              <div style="flex:1;">
                <div style="font-size:13px;font-weight:800;">Tokyo Tonkotsu Ramen</div>
                <div style="font-size:10px;color:#71717A;">18hr bone marrow broth, chashu, ajitsuke egg</div>
                <div style="font-size:12px;font-weight:900;color:#E11D48;margin-top:2px;">$16.50</div>
              </div>
            </div>
            <div style="background:#FFFFFF;border:1px solid #E4E4E7;border-radius:18px;padding:14px;display:flex;gap:12px;align-items:center;">
              <span style="font-size:32px;">🍣</span>
              <div style="flex:1;">
                <div style="font-size:13px;font-weight:800;">Salmon Truffle Nigiri Set</div>
                <div style="font-size:10px;color:#71717A;">8 pieces fresh Atlantic salmon with black truffle glaze</div>
                <div style="font-size:12px;font-weight:900;color:#E11D48;margin-top:2px;">$24.00</div>
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
console.log('Batch 5 (Fitness & Botanical 24 screens) applied successfully!');
const cases = [...code.matchAll(/case\s+['"]([^'"]+)['"]/g)].map(m => m[1]);
console.log('Total cases now:', cases.length);
