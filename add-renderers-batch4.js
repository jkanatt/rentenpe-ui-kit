/**
 * Batch 4: GoBus Transport Suite (20 screens)
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
    // BATCH 4: GOBUS TRANSPORT SUITE (20 SCREENS)
    // ══════════════════════════════════════════════
    case 'gobus-onboard-1':
      return \`
        <div style="background:#FFFFFF;color:#0F172A;border-radius:36px;padding:24px 20px;font-family:'Inter',sans-serif;height:100%;display:flex;flex-direction:column;justify-content:space-between;text-align:center;">
          <div style="display:flex;justify-content:flex-end;"><span style="font-size:12px;color:#94A3B8;font-weight:700;cursor:pointer;">Skip</span></div>
          <div>
            <div style="width:120px;height:120px;border-radius:30px;background:#FFF7ED;border:2px solid #FFEDD5;display:flex;align-items:center;justify-content:center;margin:0 auto 24px;font-size:54px;box-shadow:0 12px 30px rgba(249,115,22,0.15);">
              🚌
            </div>
            <div style="font-size:24px;font-weight:900;color:#0F172A;letter-spacing:-0.02em;margin-bottom:10px;">Live GPS Bus Tracking</div>
            <div style="font-size:12px;color:#64748B;line-height:1.5;padding:0 12px;">Track your bus down to the exact second. Know arrival times with precision radar algorithms.</div>
          </div>
          <div>
            <div style="display:flex;justify-content:center;gap:6px;margin-bottom:24px;">
              <div style="width:24px;height:6px;border-radius:99px;background:#F97316;"></div>
              <div style="width:6px;height:6px;border-radius:99px;background:#E2E8F0;"></div>
              <div style="width:6px;height:6px;border-radius:99px;background:#E2E8F0;"></div>
            </div>
            <button style="width:100%;padding:16px;background:#F97316;color:#fff;border:none;border-radius:18px;font-weight:800;font-size:14px;cursor:pointer;box-shadow:0 10px 25px rgba(249,115,22,0.3);">Continue</button>
          </div>
        </div>
      \`;

    case 'gobus-onboard-2':
      return \`
        <div style="background:#FFFFFF;color:#0F172A;border-radius:36px;padding:24px 20px;font-family:'Inter',sans-serif;height:100%;display:flex;flex-direction:column;justify-content:space-between;text-align:center;">
          <div style="display:flex;justify-content:flex-end;"><span style="font-size:12px;color:#94A3B8;font-weight:700;cursor:pointer;">Skip</span></div>
          <div>
            <div style="width:120px;height:120px;border-radius:30px;background:#FFF7ED;border:2px solid #FFEDD5;display:flex;align-items:center;justify-content:center;margin:0 auto 24px;font-size:54px;box-shadow:0 12px 30px rgba(249,115,22,0.15);">
              💺
            </div>
            <div style="font-size:24px;font-weight:900;color:#0F172A;letter-spacing:-0.02em;margin-bottom:10px;">Guaranteed AC Seats</div>
            <div style="font-size:12px;color:#64748B;line-height:1.5;padding:0 12px;">Pre-book your favorite window seat in premium Volvo electric express coaches.</div>
          </div>
          <div>
            <div style="display:flex;justify-content:center;gap:6px;margin-bottom:24px;">
              <div style="width:6px;height:6px;border-radius:99px;background:#E2E8F0;"></div>
              <div style="width:24px;height:6px;border-radius:99px;background:#F97316;"></div>
              <div style="width:6px;height:6px;border-radius:99px;background:#E2E8F0;"></div>
            </div>
            <button style="width:100%;padding:16px;background:#F97316;color:#fff;border:none;border-radius:18px;font-weight:800;font-size:14px;cursor:pointer;box-shadow:0 10px 25px rgba(249,115,22,0.3);">Continue</button>
          </div>
        </div>
      \`;

    case 'gobus-onboard-3':
      return \`
        <div style="background:#FFFFFF;color:#0F172A;border-radius:36px;padding:24px 20px;font-family:'Inter',sans-serif;height:100%;display:flex;flex-direction:column;justify-content:space-between;text-align:center;">
          <div style="display:flex;justify-content:flex-end;"><span style="font-size:12px;color:#94A3B8;font-weight:700;cursor:pointer;">Skip</span></div>
          <div>
            <div style="width:120px;height:120px;border-radius:30px;background:#FFF7ED;border:2px solid #FFEDD5;display:flex;align-items:center;justify-content:center;margin:0 auto 24px;font-size:54px;box-shadow:0 12px 30px rgba(249,115,22,0.15);">
              📲
            </div>
            <div style="font-size:24px;font-weight:900;color:#0F172A;letter-spacing:-0.02em;margin-bottom:10px;">Tap-and-Go QR Pass</div>
            <div style="font-size:12px;color:#64748B;line-height:1.5;padding:0 12px;">No paper tickets. Seamless NFC and dynamic QR passes with zero conductor hassle.</div>
          </div>
          <div>
            <div style="display:flex;justify-content:center;gap:6px;margin-bottom:24px;">
              <div style="width:6px;height:6px;border-radius:99px;background:#E2E8F0;"></div>
              <div style="width:6px;height:6px;border-radius:99px;background:#E2E8F0;"></div>
              <div style="width:24px;height:6px;border-radius:99px;background:#F97316;"></div>
            </div>
            <button style="width:100%;padding:16px;background:#F97316;color:#fff;border:none;border-radius:18px;font-weight:800;font-size:14px;cursor:pointer;box-shadow:0 10px 25px rgba(249,115,22,0.3);">Get Started</button>
          </div>
        </div>
      \`;

    case 'gobus-search-home':
      return \`
        <div style="background:#F8FAFC;color:#0F172A;border-radius:36px;padding:24px 20px;font-family:'Inter',sans-serif;height:100%;display:flex;flex-direction:column;overflow-y:auto;">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:20px;">
            <div style="display:flex;align-items:center;gap:8px;">
              <div style="width:32px;height:32px;border-radius:10px;background:#F97316;color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900;">🚌</div>
              <span style="font-weight:900;font-size:16px;letter-spacing:-0.02em;">GoBus Daily</span>
            </div>
            <div style="width:32px;height:32px;border-radius:50%;background:#FFF;border:1px solid #E2E8F0;display:flex;align-items:center;justify-content:center;font-size:14px;">🔔</div>
          </div>
          <!-- Route Search Card -->
          <div style="background:#FFFFFF;border:1px solid #E2E8F0;border-radius:24px;padding:20px;box-shadow:0 8px 30px rgba(0,0,0,0.04);margin-bottom:16px;">
            <div style="display:flex;flex-direction:column;gap:12px;position:relative;">
              <div style="display:flex;align-items:center;gap:10px;">
                <div style="width:10px;height:10px;border-radius:50%;background:#10B981;"></div>
                <div style="flex:1;background:#F8FAFC;border:1px solid #E2E8F0;border-radius:12px;padding:10px 14px;">
                  <div style="font-size:9px;color:#94A3B8;font-weight:700;">PICKUP STOP</div>
                  <div style="font-size:12px;font-weight:800;">Indiranagar 100ft Rd</div>
                </div>
              </div>
              <div style="display:flex;align-items:center;gap:10px;">
                <div style="width:10px;height:10px;border-radius:50%;background:#EF4444;"></div>
                <div style="flex:1;background:#F8FAFC;border:1px solid #E2E8F0;border-radius:12px;padding:10px 14px;">
                  <div style="font-size:9px;color:#94A3B8;font-weight:700;">DESTINATION</div>
                  <div style="font-size:12px;font-weight:800;">Electronic City Phase 1</div>
                </div>
              </div>
            </div>
            <div style="display:flex;gap:10px;margin-top:14px;">
              <div style="flex:1;background:#F8FAFC;border:1px solid #E2E8F0;border-radius:12px;padding:10px 12px;font-size:11px;font-weight:700;">
                📅 Today, Oct 11
              </div>
              <div style="flex:1;background:#F8FAFC;border:1px solid #E2E8F0;border-radius:12px;padding:10px 12px;font-size:11px;font-weight:700;">
                👤 1 Passenger
              </div>
            </div>
            <button style="width:100%;margin-top:16px;padding:14px;background:#F97316;color:#fff;border:none;border-radius:16px;font-weight:800;font-size:13px;cursor:pointer;box-shadow:0 8px 20px rgba(249,115,22,0.3);">Find Live Buses</button>
          </div>
          <div style="font-size:12px;font-weight:800;margin-bottom:10px;">Recent Commutes</div>
          <div style="display:flex;flex-direction:column;gap:8px;">
            <div style="background:#fff;border:1px solid #F1F5F9;border-radius:14px;padding:12px;display:flex;justify-content:space-between;align-items:center;">
              <div>
                <div style="font-size:12px;font-weight:700;">Koramangala ⇄ Whitefield</div>
                <div style="font-size:10px;color:#94A3B8;">Route 500-D • Every 10 mins</div>
              </div>
              <span style="font-size:12px;color:#F97316;font-weight:800;">Book →</span>
            </div>
          </div>
        </div>
      \`;

    case 'gobus-bus-results':
      return \`
        <div style="background:#F8FAFC;color:#0F172A;border-radius:36px;padding:24px 20px;font-family:'Inter',sans-serif;height:100%;display:flex;flex-direction:column;overflow-y:auto;">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;">
            <span style="font-size:16px;cursor:pointer;">←</span>
            <span style="font-weight:800;font-size:15px;">Available Buses (4)</span>
            <span style="font-size:12px;color:#F97316;font-weight:700;">Filter</span>
          </div>
          <div style="display:flex;flex-direction:column;gap:12px;">
            <div style="background:#FFFFFF;border:2px solid #F97316;border-radius:20px;padding:16px;box-shadow:0 8px 20px rgba(249,115,22,0.1);">
              <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
                <span style="font-size:13px;font-weight:900;color:#F97316;">BUS #101-EXPRESS</span>
                <span style="font-size:10px;background:#DCFCE7;color:#15803D;padding:2px 8px;border-radius:99px;font-weight:800;">Arriving in 4 mins</span>
              </div>
              <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;">
                <div>
                  <div style="font-size:16px;font-weight:900;">08:45 AM → 09:25 AM</div>
                  <div style="font-size:10px;color:#64748B;">40 mins non-stop via Flyover</div>
                </div>
                <div style="text-align:right;">
                  <div style="font-size:18px;font-weight:900;color:#0F172A;">₹65</div>
                  <div style="font-size:9px;color:#10B981;font-weight:700;">12 Seats left</div>
                </div>
              </div>
              <button style="width:100%;padding:10px;background:#F97316;color:#fff;border:none;border-radius:12px;font-weight:800;font-size:11px;cursor:pointer;">Reserve Seat Now</button>
            </div>
            <div style="background:#FFFFFF;border:1px solid #E2E8F0;border-radius:20px;padding:16px;">
              <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
                <span style="font-size:13px;font-weight:900;color:#0F172A;">BUS #101-REGULAR</span>
                <span style="font-size:10px;background:#F1F5F9;color:#64748B;padding:2px 8px;border-radius:99px;font-weight:700;">In 14 mins</span>
              </div>
              <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;">
                <div>
                  <div style="font-size:16px;font-weight:900;">08:55 AM → 09:45 AM</div>
                  <div style="font-size:10px;color:#64748B;">50 mins • 6 intermediate stops</div>
                </div>
                <div style="text-align:right;">
                  <div style="font-size:18px;font-weight:900;color:#0F172A;">₹45</div>
                  <div style="font-size:9px;color:#64748B;">28 Seats left</div>
                </div>
              </div>
              <button style="width:100%;padding:10px;background:#F1F5F9;color:#0F172A;border:none;border-radius:12px;font-weight:800;font-size:11px;cursor:pointer;">Select</button>
            </div>
          </div>
        </div>
      \`;

    case 'gobus-gps-route-map':
      return \`
        <div style="background:#1E293B;color:#fff;border-radius:36px;padding:24px 20px;font-family:'Inter',sans-serif;height:100%;display:flex;flex-direction:column;justify-content:space-between;position:relative;overflow:hidden;">
          <!-- Mock Map Canvas -->
          <div style="position:absolute;inset:0;background:#0F172A;opacity:0.9;">
            <svg viewBox="0 0 400 600" style="width:100%;height:100%;position:absolute;top:0;left:0;">
              <!-- Road Paths -->
              <path d="M 50 100 Q 150 250 220 350 T 350 500" stroke="#334155" stroke-width="24" fill="none" stroke-linecap="round"/>
              <path d="M 50 100 Q 150 250 220 350 T 350 500" stroke="#F97316" stroke-width="8" fill="none" stroke-linecap="round"/>
              <!-- Bus Pin -->
              <circle cx="220" cy="350" r="14" fill="#F97316" stroke="#FFFFFF" stroke-width="4"/>
              <!-- Stops -->
              <circle cx="50" cy="100" r="8" fill="#10B981" stroke="#FFFFFF" stroke-width="2"/>
              <circle cx="350" cy="500" r="8" fill="#EF4444" stroke="#FFFFFF" stroke-width="2"/>
            </svg>
          </div>
          <!-- Top Floating Bar -->
          <div style="position:relative;z-index:2;display:flex;justify-content:space-between;align-items:center;">
            <div style="background:rgba(15,23,42,0.8);backdrop-filter:blur(10px);border:1px solid #334155;border-radius:99px;padding:8px 14px;display:flex;align-items:center;gap:8px;">
              <span style="font-size:12px;">←</span>
              <span style="font-size:12px;font-weight:800;">Live Bus #101 Tracker</span>
            </div>
            <div style="background:#10B981;color:#000;font-size:10px;font-weight:800;padding:6px 12px;border-radius:99px;">
              ● 38 km/h
            </div>
          </div>
          <!-- Bottom ETA Sheet -->
          <div style="position:relative;z-index:2;background:#FFFFFF;color:#0F172A;border-radius:24px;padding:18px;box-shadow:0 20px 40px rgba(0,0,0,0.5);">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
              <div>
                <div style="font-size:10px;color:#64748B;font-weight:700;">NEXT STOP</div>
                <div style="font-size:14px;font-weight:900;">Sony World Junction (200m)</div>
              </div>
              <div style="background:#FFF7ED;color:#F97316;padding:6px 12px;border-radius:12px;font-weight:900;font-size:13px;">
                ETA 2 min
              </div>
            </div>
            <div style="height:4px;background:#F1F5F9;border-radius:99px;overflow:hidden;margin-bottom:12px;">
              <div style="width:70%;height:100%;background:#F97316;border-radius:99px;"></div>
            </div>
            <button style="width:100%;padding:12px;background:#0F172A;color:#fff;border:none;border-radius:14px;font-weight:800;font-size:12px;cursor:pointer;">Get Off Alert Ring</button>
          </div>
        </div>
      \`;

    case 'gobus-passenger-config':
      return \`
        <div style="background:#FFFFFF;color:#0F172A;border-radius:36px;padding:24px 20px;font-family:'Inter',sans-serif;height:100%;display:flex;flex-direction:column;justify-content:space-between;">
          <div>
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:20px;">
              <span style="font-size:16px;cursor:pointer;">←</span>
              <span style="font-weight:800;font-size:15px;">Passenger & Fares</span>
              <span style="font-size:12px;color:#F97316;font-weight:700;">Clear</span>
            </div>
            <div style="display:flex;flex-direction:column;gap:12px;">
              <div style="background:#F8FAFC;border:1px solid #E2E8F0;border-radius:18px;padding:16px;display:flex;justify-content:space-between;align-items:center;">
                <div>
                  <div style="font-size:13px;font-weight:800;">Adult (Regular)</div>
                  <div style="font-size:10px;color:#64748B;">₹65 per ticket</div>
                </div>
                <div style="display:flex;align-items:center;gap:12px;">
                  <button style="width:28px;height:28px;border-radius:8px;background:#E2E8F0;border:none;font-weight:800;cursor:pointer;">-</button>
                  <span style="font-weight:900;font-size:14px;">2</span>
                  <button style="width:28px;height:28px;border-radius:8px;background:#F97316;color:#fff;border:none;font-weight:800;cursor:pointer;">+</button>
                </div>
              </div>
              <div style="background:#F8FAFC;border:1px solid #E2E8F0;border-radius:18px;padding:16px;display:flex;justify-content:space-between;align-items:center;">
                <div>
                  <div style="font-size:13px;font-weight:800;">Senior Citizen</div>
                  <div style="font-size:10px;color:#64748B;">50% Concession • ₹32</div>
                </div>
                <div style="display:flex;align-items:center;gap:12px;">
                  <button style="width:28px;height:28px;border-radius:8px;background:#E2E8F0;border:none;font-weight:800;cursor:pointer;">-</button>
                  <span style="font-weight:900;font-size:14px;">1</span>
                  <button style="width:28px;height:28px;border-radius:8px;background:#F97316;color:#fff;border:none;font-weight:800;cursor:pointer;">+</button>
                </div>
              </div>
              <div style="background:#F8FAFC;border:1px solid #E2E8F0;border-radius:18px;padding:16px;display:flex;justify-content:space-between;align-items:center;">
                <div>
                  <div style="font-size:13px;font-weight:800;">Child (Below 12)</div>
                  <div style="font-size:10px;color:#64748B;">Complimentary</div>
                </div>
                <div style="display:flex;align-items:center;gap:12px;">
                  <button style="width:28px;height:28px;border-radius:8px;background:#E2E8F0;border:none;font-weight:800;cursor:pointer;">-</button>
                  <span style="font-weight:900;font-size:14px;">0</span>
                  <button style="width:28px;height:28px;border-radius:8px;background:#F97316;color:#fff;border:none;font-weight:800;cursor:pointer;">+</button>
                </div>
              </div>
            </div>
          </div>
          <div style="border-top:1px solid #F1F5F9;padding-top:16px;">
            <div style="display:flex;justify-content:space-between;margin-bottom:12px;">
              <span style="font-size:12px;color:#64748B;">Total Fare (3 Passengers)</span>
              <span style="font-size:18px;font-weight:900;color:#0F172A;">₹162.00</span>
            </div>
            <button style="width:100%;padding:14px;background:#F97316;color:#fff;border:none;border-radius:16px;font-weight:800;font-size:13px;cursor:pointer;">Proceed to Seat Selection</button>
          </div>
        </div>
      \`;

    case 'gobus-route-detail':
      return \`
        <div style="background:#FFFFFF;color:#0F172A;border-radius:36px;padding:24px 20px;font-family:'Inter',sans-serif;height:100%;display:flex;flex-direction:column;overflow-y:auto;">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:18px;">
            <span style="font-size:16px;cursor:pointer;">←</span>
            <span style="font-weight:800;font-size:15px;">Route 101 Stops</span>
            <span style="font-size:12px;background:#FFF7ED;color:#F97316;padding:2px 8px;border-radius:99px;font-weight:700;">Active</span>
          </div>
          <!-- Stop Timeline -->
          <div style="position:relative;padding-left:24px;border-left:3px solid #F97316;margin-left:10px;display:flex;flex-direction:column;gap:20px;margin-bottom:20px;">
            <div style="position:relative;">
              <div style="position:absolute;left:-31px;top:2px;width:12px;height:12px;border-radius:50%;background:#10B981;border:2px solid #fff;"></div>
              <div style="font-size:13px;font-weight:800;">Majestic Central Station (Origin)</div>
              <div style="font-size:10px;color:#64748B;">Dep: 08:00 AM • Platform 4</div>
            </div>
            <div style="position:relative;">
              <div style="position:absolute;left:-31px;top:2px;width:12px;height:12px;border-radius:50%;background:#F97316;border:2px solid #fff;"></div>
              <div style="font-size:13px;font-weight:800;">Richmond Circle</div>
              <div style="font-size:10px;color:#64748B;">08:18 AM • Rapid Transfer Point</div>
            </div>
            <div style="position:relative;">
              <div style="position:absolute;left:-31px;top:2px;width:12px;height:12px;border-radius:50%;background:#F97316;border:2px solid #fff;"></div>
              <div style="font-size:13px;font-weight:800;">Koramangala Sony World</div>
              <div style="font-size:10px;color:#F97316;font-weight:700;">08:35 AM • Current Bus Location 🚌</div>
            </div>
            <div style="position:relative;">
              <div style="position:absolute;left:-31px;top:2px;width:12px;height:12px;border-radius:50%;background:#94A3B8;border:2px solid #fff;"></div>
              <div style="font-size:13px;font-weight:800;">Silk Board Junction</div>
              <div style="font-size:10px;color:#64748B;">08:48 AM Est.</div>
            </div>
            <div style="position:relative;">
              <div style="position:absolute;left:-31px;top:2px;width:12px;height:12px;border-radius:50%;background:#EF4444;border:2px solid #fff;"></div>
              <div style="font-size:13px;font-weight:800;">Electronic City Phase 1 (Terminus)</div>
              <div style="font-size:10px;color:#64748B;">09:10 AM Est.</div>
            </div>
          </div>
          <button style="width:100%;padding:14px;background:#F97316;color:#fff;border:none;border-radius:16px;font-weight:800;font-size:13px;cursor:pointer;margin-top:auto;">View Full Timetable</button>
        </div>
      \`;

    case 'gobus-routes-directory':
      return \`
        <div style="background:#F8FAFC;color:#0F172A;border-radius:36px;padding:24px 20px;font-family:'Inter',sans-serif;height:100%;display:flex;flex-direction:column;overflow-y:auto;">
          <div style="font-weight:900;font-size:16px;margin-bottom:14px;">Regional Routes Directory</div>
          <div style="background:#fff;border:1px solid #E2E8F0;border-radius:14px;padding:10px 14px;display:flex;align-items:center;gap:8px;margin-bottom:14px;">
            <span>🔍</span>
            <input type="text" placeholder="Search route by number or stop..." style="border:none;outline:none;font-size:11px;width:100%;background:transparent;" />
          </div>
          <div style="display:flex;flex-direction:column;gap:8px;flex:1;">
            <div style="background:#FFFFFF;border:1px solid #E2E8F0;border-radius:16px;padding:14px;">
              <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px;">
                <span style="font-weight:900;font-size:13px;color:#F97316;">ROUTE 500-D</span>
                <span style="font-size:10px;background:#DCFCE7;color:#15803D;padding:2px 6px;border-radius:99px;font-weight:700;">Every 8m</span>
              </div>
              <div style="font-size:11px;font-weight:700;">Hebbal ⇄ Central Silk Board</div>
              <div style="font-size:10px;color:#64748B;">Outer Ring Road Volvo Express</div>
            </div>
            <div style="background:#FFFFFF;border:1px solid #E2E8F0;border-radius:16px;padding:14px;">
              <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px;">
                <span style="font-weight:900;font-size:13px;color:#F97316;">ROUTE 335-E</span>
                <span style="font-size:10px;background:#DCFCE7;color:#15803D;padding:2px 6px;border-radius:99px;font-weight:700;">Every 12m</span>
              </div>
              <div style="font-size:11px;font-weight:700;">Majestic ⇄ ITPL Whitefield</div>
              <div style="font-size:10px;color:#64748B;">Tech Corridor Direct Express</div>
            </div>
            <div style="background:#FFFFFF;border:1px solid #E2E8F0;border-radius:16px;padding:14px;">
              <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px;">
                <span style="font-weight:900;font-size:13px;color:#F97316;">ROUTE KIA-9</span>
                <span style="font-size:10px;background:#FEF3C7;color:#B45309;padding:2px 6px;border-radius:99px;font-weight:700;">Airport Shuttle</span>
              </div>
              <div style="font-size:11px;font-weight:700;">Kempegowda Int. Airport ⇄ HSR Layout</div>
              <div style="font-size:10px;color:#64748B;">Vayu Vajra AC Coach with Luggage Racks</div>
            </div>
          </div>
        </div>
      \`;

    case 'gobus-pass-catalog':
      return \`
        <div style="background:#F8FAFC;color:#0F172A;border-radius:36px;padding:24px 20px;font-family:'Inter',sans-serif;height:100%;display:flex;flex-direction:column;overflow-y:auto;">
          <div style="font-weight:900;font-size:16px;margin-bottom:14px;">Transit Pass Plans</div>
          <div style="display:flex;flex-direction:column;gap:12px;">
            <div style="background:linear-gradient(135deg,#F97316,#EA580C);color:#fff;border-radius:20px;padding:18px;box-shadow:0 10px 25px rgba(249,115,22,0.25);">
              <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">
                <span style="font-size:11px;font-weight:800;letter-spacing:0.05em;">UNLIMITED MONTHLY</span>
                <span style="background:rgba(255,255,255,0.2);padding:2px 8px;border-radius:99px;font-size:9px;font-weight:800;">POPULAR</span>
              </div>
              <div style="font-size:26px;font-weight:900;margin-bottom:6px;">₹1,850 <span style="font-size:12px;font-weight:500;">/ month</span></div>
              <div style="font-size:11px;color:#FED7AA;">All AC Volvo & Non-AC routes across Greater Bengaluru.</div>
            </div>
            <div style="background:#FFFFFF;border:1px solid #E2E8F0;border-radius:20px;padding:18px;">
              <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">
                <span style="font-size:11px;font-weight:800;color:#64748B;">DAILY HOPPER PASS</span>
                <span style="font-size:12px;font-weight:900;color:#0F172A;">₹140</span>
              </div>
              <div style="font-size:11px;color:#64748B;">24 Hours unlimited rides from time of activation.</div>
            </div>
            <div style="background:#FFFFFF;border:1px solid #E2E8F0;border-radius:20px;padding:18px;">
              <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">
                <span style="font-size:11px;font-weight:800;color:#64748B;">STUDENT CONCESSION</span>
                <span style="font-size:12px;font-weight:900;color:#10B981;">₹650 / mo</span>
              </div>
              <div style="font-size:11px;color:#64748B;">For registered university & school scholars with valid ID.</div>
            </div>
          </div>
          <button style="width:100%;padding:14px;background:#F97316;color:#fff;border:none;border-radius:16px;font-weight:800;font-size:13px;cursor:pointer;margin-top:auto;">Purchase Pass</button>
        </div>
      \`;

    case 'gobus-package-selector':
      return \`
        <div style="background:#FFFFFF;color:#0F172A;border-radius:36px;padding:24px 20px;font-family:'Inter',sans-serif;height:100%;display:flex;flex-direction:column;justify-content:space-between;">
          <div>
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:20px;">
              <span style="font-size:16px;cursor:pointer;">←</span>
              <span style="font-weight:800;font-size:15px;">Configure Pass</span>
              <span></span>
            </div>
            <div style="font-size:12px;font-weight:800;margin-bottom:8px;">Choose Duration</div>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:16px;">
              <div style="border:2px solid #F97316;background:#FFF7ED;border-radius:14px;padding:12px;text-align:center;">
                <div style="font-size:14px;font-weight:900;color:#F97316;">30 Days</div>
                <div style="font-size:11px;font-weight:700;">₹1,850</div>
              </div>
              <div style="border:1px solid #E2E8F0;background:#F8FAFC;border-radius:14px;padding:12px;text-align:center;">
                <div style="font-size:14px;font-weight:900;">90 Days</div>
                <div style="font-size:11px;color:#64748B;">₹5,100 (Save 8%)</div>
              </div>
            </div>
            <div style="font-size:12px;font-weight:800;margin-bottom:8px;">Activation Date</div>
            <div style="background:#F8FAFC;border:1px solid #E2E8F0;border-radius:14px;padding:12px;display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;">
              <span style="font-size:12px;font-weight:700;">Start Immediately Today</span>
              <input type="radio" checked style="accent-color:#F97316;" />
            </div>
          </div>
          <div>
            <div style="display:flex;justify-content:space-between;margin-bottom:12px;">
              <span style="font-size:12px;color:#64748B;">Total Payable</span>
              <span style="font-size:18px;font-weight:900;">₹1,850.00</span>
            </div>
            <button style="width:100%;padding:14px;background:#F97316;color:#fff;border:none;border-radius:16px;font-weight:800;font-size:13px;cursor:pointer;">Pay via RentenPe UPI</button>
          </div>
        </div>
      \`;

    case 'gobus-trip-planner':
      return \`
        <div style="background:#F8FAFC;color:#0F172A;border-radius:36px;padding:24px 20px;font-family:'Inter',sans-serif;height:100%;display:flex;flex-direction:column;">
          <div style="font-weight:900;font-size:16px;margin-bottom:16px;">Smart Multi-Modal Trip</div>
          <div style="background:#FFFFFF;border:1px solid #E2E8F0;border-radius:20px;padding:16px;margin-bottom:14px;">
            <div style="font-size:11px;font-weight:800;color:#10B981;margin-bottom:6px;">RECOMMENDED ROUTE (FASTEST)</div>
            <div style="display:flex;align-items:center;gap:6px;font-size:12px;font-weight:800;margin-bottom:8px;">
              <span>🚶 5m</span><span>→</span><span>🚌 Bus 101 (20m)</span><span>→</span><span>🚇 Purple Metro (15m)</span>
            </div>
            <div style="font-size:10px;color:#64748B;">Total: 40 mins • Cost: ₹85 • 0 Transfers Walk < 200m</div>
          </div>
          <div style="background:#FFFFFF;border:1px solid #E2E8F0;border-radius:20px;padding:16px;">
            <div style="font-size:11px;font-weight:800;color:#64748B;margin-bottom:6px;">DIRECT BUS ONLY (CHEAPEST)</div>
            <div style="display:flex;align-items:center;gap:6px;font-size:12px;font-weight:800;margin-bottom:8px;">
              <span>🚌 Direct Volvo 500-D (52m)</span>
            </div>
            <div style="font-size:10px;color:#64748B;">Total: 52 mins • Cost: ₹55 • AC Seating Guaranteed</div>
          </div>
        </div>
      \`;

    case 'gobus-route-autocomplete':
      return \`
        <div style="background:#FFFFFF;color:#0F172A;border-radius:36px;padding:24px 20px;font-family:'Inter',sans-serif;height:100%;display:flex;flex-direction:column;">
          <div style="background:#F1F5F9;border-radius:14px;padding:10px 14px;display:flex;align-items:center;gap:10px;margin-bottom:16px;">
            <span style="color:#64748B;">🔍</span>
            <input type="text" value="Whitefield" style="border:none;background:transparent;outline:none;font-weight:700;font-size:13px;flex:1;" />
            <span style="cursor:pointer;color:#94A3B8;">✕</span>
          </div>
          <div style="font-size:11px;color:#94A3B8;font-weight:700;margin-bottom:10px;">MATCHING BUS HUBS</div>
          <div style="display:flex;flex-direction:column;gap:12px;">
            <div style="display:flex;align-items:center;gap:12px;cursor:pointer;">
              <span style="font-size:16px;">📍</span>
              <div>
                <div style="font-size:13px;font-weight:800;">Whitefield Main TTMC</div>
                <div style="font-size:10px;color:#64748B;">Hub for 24 routes • 120 buses/hr</div>
              </div>
            </div>
            <div style="display:flex;align-items:center;gap:12px;cursor:pointer;">
              <span style="font-size:16px;">📍</span>
              <div>
                <div style="font-size:13px;font-weight:800;">Whitefield Railway Station Gate 2</div>
                <div style="font-size:10px;color:#64748B;">Suburban rail interchange</div>
              </div>
            </div>
            <div style="display:flex;align-items:center;gap:12px;cursor:pointer;">
              <span style="font-size:16px;">📍</span>
              <div>
                <div style="font-size:13px;font-weight:800;">ITPL Hope Farm Circle</div>
                <div style="font-size:10px;color:#64748B;">Metro station connection</div>
              </div>
            </div>
          </div>
        </div>
      \`;

    case 'gobus-student-pass':
      return \`
        <div style="background:#FFFFFF;color:#0F172A;border-radius:36px;padding:24px 20px;font-family:'Inter',sans-serif;height:100%;display:flex;flex-direction:column;justify-content:space-between;">
          <div>
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:18px;">
              <span style="font-size:16px;cursor:pointer;">←</span>
              <span style="font-weight:800;font-size:15px;">Student Concession</span>
              <span style="font-size:11px;background:#DCFCE7;color:#15803D;padding:2px 8px;border-radius:99px;font-weight:700;">Verified ID</span>
            </div>
            <div style="background:#F8FAFC;border:1px solid #E2E8F0;border-radius:20px;padding:18px;margin-bottom:16px;">
              <div style="display:flex;gap:12px;align-items:center;margin-bottom:12px;">
                <div style="width:48px;height:48px;border-radius:50%;background:#FEE2E2;display:flex;align-items:center;justify-content:center;font-size:20px;">🎓</div>
                <div>
                  <div style="font-size:14px;font-weight:900;">Rohan Varma</div>
                  <div style="font-size:11px;color:#64748B;">IISc Bangalore • Roll #220914</div>
                </div>
              </div>
              <div style="font-size:11px;color:#10B981;font-weight:700;">Valid through: 31 May 2027</div>
            </div>
            <div style="font-size:12px;font-weight:800;margin-bottom:8px;">Subsidized Route Access</div>
            <div style="background:#EFF6FF;border-radius:12px;padding:12px;font-size:11px;color:#1E40AF;line-height:1.4;">
              Unlimited free transit between Hostel Gate 4 and Malleshwaram 18th Cross.
            </div>
          </div>
          <button style="width:100%;padding:14px;background:#0F172A;color:#fff;border:none;border-radius:16px;font-weight:800;font-size:13px;cursor:pointer;">Renew Concession ($0 Fee)</button>
        </div>
      \`;

    case 'gobus-account':
      return \`
        <div style="background:#F8FAFC;color:#0F172A;border-radius:36px;padding:24px 20px;font-family:'Inter',sans-serif;height:100%;display:flex;flex-direction:column;overflow-y:auto;">
          <div style="font-weight:900;font-size:16px;margin-bottom:18px;">GoBus Account</div>
          <div style="display:flex;align-items:center;gap:12px;background:#fff;border:1px solid #E2E8F0;border-radius:20px;padding:16px;margin-bottom:16px;">
            <div style="width:48px;height:48px;border-radius:50%;background:#F97316;color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900;font-size:18px;">RV</div>
            <div>
              <div style="font-size:14px;font-weight:900;">Rohan Varma</div>
              <div style="font-size:11px;color:#64748B;">+91 98450 12345 • Pro Commuter</div>
            </div>
          </div>
          <div style="display:flex;flex-direction:column;gap:8px;font-size:12px;font-weight:700;">
            <div style="background:#fff;border:1px solid #F1F5F9;padding:12px 14px;border-radius:14px;display:flex;justify-content:space-between;">
              <span>🎟️ My Active Tickets (2)</span>
              <span>→</span>
            </div>
            <div style="background:#fff;border:1px solid #F1F5F9;padding:12px 14px;border-radius:14px;display:flex;justify-content:space-between;">
              <span>💳 Transit Wallet (₹480.00)</span>
              <span style="color:#F97316;">Top Up</span>
            </div>
            <div style="background:#fff;border:1px solid #F1F5F9;padding:12px 14px;border-radius:14px;display:flex;justify-content:space-between;">
              <span>🚨 Emergency SOS Setup</span>
              <span>→</span>
            </div>
            <div style="background:#fff;border:1px solid #F1F5F9;padding:12px 14px;border-radius:14px;display:flex;justify-content:space-between;">
              <span>⚙️ Notification Alerts</span>
              <span>→</span>
            </div>
          </div>
        </div>
      \`;

    case 'gobus-emergency-contacts':
      return \`
        <div style="background:#FFFFFF;color:#0F172A;border-radius:36px;padding:24px 20px;font-family:'Inter',sans-serif;height:100%;display:flex;flex-direction:column;justify-content:space-between;">
          <div>
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:18px;">
              <span style="font-size:16px;cursor:pointer;">←</span>
              <span style="font-weight:800;font-size:15px;">SOS Emergency Contacts</span>
              <span style="font-size:12px;color:#F97316;font-weight:700;">+ Add</span>
            </div>
            <div style="font-size:11px;color:#64748B;line-height:1.4;margin-bottom:16px;">
              In the event you trigger GoBus SOS, your live GPS telemetry and bus CCTV clip will be automatically beamed to these verified guardians.
            </div>
            <div style="display:flex;flex-direction:column;gap:10px;">
              <div style="background:#F8FAFC;border:1px solid #E2E8F0;border-radius:16px;padding:12px;display:flex;justify-content:space-between;align-items:center;">
                <div>
                  <div style="font-size:12px;font-weight:800;">Mom (Anjali Varma)</div>
                  <div style="font-size:10px;color:#64748B;">+91 94480 99881 • Primary Guardian</div>
                </div>
                <span style="color:#10B981;font-size:12px;">✅ Synced</span>
              </div>
              <div style="background:#F8FAFC;border:1px solid #E2E8F0;border-radius:16px;padding:12px;display:flex;justify-content:space-between;align-items:center;">
                <div>
                  <div style="font-size:12px;font-weight:800;">Transit Police Dispatch</div>
                  <div style="font-size:10px;color:#64748B;">Dial 112 • Auto-Relay Enabled</div>
                </div>
                <span style="color:#10B981;font-size:12px;">✅ 24/7 Active</span>
              </div>
            </div>
          </div>
          <button style="width:100%;padding:14px;background:#F97316;color:#fff;border:none;border-radius:16px;font-weight:800;font-size:13px;cursor:pointer;">Save & Verify Contacts</button>
        </div>
      \`;

    case 'gobus-phone-login':
      return \`
        <div style="background:#FFFFFF;color:#0F172A;border-radius:36px;padding:24px 20px;font-family:'Inter',sans-serif;height:100%;display:flex;flex-direction:column;justify-content:space-between;">
          <div>
            <div style="width:48px;height:48px;border-radius:14px;background:#FFF7ED;border:1px solid #FFEDD5;display:flex;align-items:center;justify-content:center;font-size:24px;margin-bottom:16px;">
              📱
            </div>
            <div style="font-size:22px;font-weight:900;letter-spacing:-0.02em;margin-bottom:6px;">Enter Mobile Number</div>
            <div style="font-size:12px;color:#64748B;line-height:1.4;margin-bottom:24px;">We will send a 6-digit OTP code to instantly verify your commuter identity.</div>
            <div style="display:flex;gap:10px;background:#F8FAFC;border:1px solid #E2E8F0;border-radius:14px;padding:12px 14px;align-items:center;">
              <span style="font-weight:800;font-size:13px;">🇮🇳 +91</span>
              <input type="tel" placeholder="98450 12345" style="border:none;background:transparent;outline:none;font-weight:800;font-size:14px;width:100%;" />
            </div>
          </div>
          <div>
            <button style="width:100%;padding:16px;background:#F97316;color:#fff;border:none;border-radius:18px;font-weight:800;font-size:14px;cursor:pointer;margin-bottom:12px;">Send Verification OTP</button>
            <div style="text-align:center;font-size:10px;color:#94A3B8;">Powered by RentenPe Identity Cloud</div>
          </div>
        </div>
      \`;

    case 'gobus-pass-congrats':
      return \`
        <div style="background:#FFFFFF;color:#0F172A;border-radius:36px;padding:24px 20px;font-family:'Inter',sans-serif;height:100%;display:flex;flex-direction:column;justify-content:space-between;text-align:center;">
          <div>
            <div style="width:72px;height:72px;border-radius:50%;background:#DCFCE7;display:flex;align-items:center;justify-content:center;font-size:32px;margin:20px auto 16px;">
              🎉
            </div>
            <div style="font-size:22px;font-weight:900;letter-spacing:-0.02em;margin-bottom:6px;">Pass Issued Successfully!</div>
            <div style="font-size:12px;color:#64748B;margin-bottom:24px;">Your 30-Day Greater Bengaluru Transit Pass is active and ready for boarding.</div>
            <div style="background:#F8FAFC;border:2px dashed #CBD5E1;border-radius:20px;padding:20px;display:flex;flex-direction:column;align-items:center;gap:10px;">
              <div style="font-size:11px;font-weight:800;color:#F97316;">DYNAMIC NFC PASS #GB-8921</div>
              <div style="width:120px;height:120px;background:#000;border-radius:12px;display:flex;align-items:center;justify-content:center;color:#fff;font-size:11px;font-family:monospace;">
                [QR MATRIX]
              </div>
              <div style="font-size:10px;color:#94A3B8;">Refreshes every 30 seconds for fraud protection</div>
            </div>
          </div>
          <button style="width:100%;padding:16px;background:#0F172A;color:#fff;border:none;border-radius:18px;font-weight:800;font-size:14px;cursor:pointer;">Save to Apple Wallet</button>
        </div>
      \`;

    case 'gobus-sos-active':
      return \`
        <div style="background:#7F1D1D;color:#fff;border-radius:36px;padding:24px 20px;font-family:'Inter',sans-serif;height:100%;display:flex;flex-direction:column;justify-content:space-between;text-align:center;">
          <div>
            <div style="width:72px;height:72px;border-radius:50%;background:#EF4444;border:4px solid #FCA5A5;display:flex;align-items:center;justify-content:center;font-size:32px;margin:20px auto 16px;animation:pulse 1s infinite;">
              🚨
            </div>
            <div style="font-size:22px;font-weight:900;margin-bottom:6px;">EMERGENCY SOS BROADCAST</div>
            <div style="font-size:12px;color:#FECACA;line-height:1.5;">Police Dispatch 112 alerted. Live bus coordinates transmitting every 3s.</div>
            <div style="background:rgba(0,0,0,0.3);border-radius:16px;padding:14px;margin-top:20px;text-align:left;font-size:11px;">
              <div style="margin-bottom:4px;">🚌 <b>Bus #101-EXPRESS</b></div>
              <div style="margin-bottom:4px;">📍 <b>GPS:</b> 12.9352° N, 77.6245° E (Sony World)</div>
              <div>🛡️ <b>Assigned Unit:</b> Koramangala PCR #4 (ETA 3 mins)</div>
            </div>
          </div>
          <button style="width:100%;padding:14px;background:rgba(255,255,255,0.2);color:#fff;border:1px solid rgba(255,255,255,0.4);border-radius:16px;font-weight:800;font-size:12px;cursor:pointer;">False Alarm / Cancel SOS (Requires PIN)</button>
        </div>
      \`;

    case 'gobus-drawer-menu':
      return \`
        <div style="background:#0F172A;color:#fff;border-radius:36px;padding:24px 20px;font-family:'Inter',sans-serif;height:100%;display:flex;flex-direction:column;justify-content:space-between;">
          <div>
            <div style="display:flex;align-items:center;gap:12px;margin-bottom:24px;">
              <div style="width:44px;height:44px;border-radius:50%;background:#F97316;display:flex;align-items:center;justify-content:center;font-weight:900;font-size:16px;">RV</div>
              <div>
                <div style="font-size:14px;font-weight:900;">Rohan Varma</div>
                <div style="font-size:10px;color:#94A3B8;">Gold Commuter Member</div>
              </div>
            </div>
            <div style="display:flex;flex-direction:column;gap:12px;font-size:13px;font-weight:700;">
              <div style="padding:10px 12px;background:#1E293B;border-radius:12px;color:#F97316;">🏠 Home & Booking Hub</div>
              <div style="padding:10px 12px;border-radius:12px;color:#E2E8F0;">🎟️ My Active Passes</div>
              <div style="padding:10px 12px;border-radius:12px;color:#E2E8F0;">🗺️ Live Network Map</div>
              <div style="padding:10px 12px;border-radius:12px;color:#E2E8F0;">💳 Payment & Wallet</div>
              <div style="padding:10px 12px;border-radius:12px;color:#E2E8F0;">🚨 Emergency SOS Settings</div>
              <div style="padding:10px 12px;border-radius:12px;color:#E2E8F0;">💬 24/7 Helpline Support</div>
            </div>
          </div>
          <div style="font-size:10px;color:#64748B;">GoBus v3.4.1 • RentenPe Transit Core</div>
        </div>
      \`;
`;

if (!code.includes(MARKER)) {
  console.error('Marker not found in screen-renderers.js');
  process.exit(1);
}

code = code.replace(MARKER, newCases + '\n' + MARKER);
fs.writeFileSync(file, code);
console.log('Batch 4 (GoBus 20 screens) applied successfully!');
const cases = [...code.matchAll(/case\s+['"]([^'"]+)['"]/g)].map(m => m[1]);
console.log('Total cases now:', cases.length);
