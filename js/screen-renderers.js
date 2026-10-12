/**
 * RentenPe UI Kit — 100+ Screens Pixel-Perfect Interactive Renderers
 * Realistic Apple iPhone 16 Pro & CRED UI components
 */

function renderScreenHTML(screenId) {
  switch (screenId) {
    // ══════════════════════════════════════════════
    // 1. BANKING & NEO-BANK SCREENS
    // ══════════════════════════════════════════════
    case 'monex-home-glow':
      return `
        <div style="background:#09090B; color:#fff; border-radius:36px; padding:24px 20px; font-family:'Inter', sans-serif; height:100%; display:flex; flex-direction:column; justify-content:space-between; box-shadow:0 25px 50px -12px rgba(0,0,0,0.5);">
          <!-- Top Bar -->
          <div>
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:20px;">
              <span style="font-weight:700; font-size:16px;">Home</span>
              <div style="width:36px; height:36px; border-radius:50%; background:#18181B; display:flex; align-items:center; justify-content:center; border:1px solid #27272A; cursor:pointer;">
                <span style="font-size:14px;">🔔</span>
              </div>
            </div>
            
            <!-- Lime Glowing Card -->
            <div style="background:linear-gradient(135deg, #10B981 0%, #059669 100%); border-radius:22px; padding:22px 20px; color:#064E3B; margin-bottom:20px; box-shadow:0 12px 30px rgba(16,185,129,0.3); position:relative; overflow:hidden;">
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
                <span style="font-size:11px; font-weight:700; letter-spacing:0.05em; text-transform:uppercase; color:#064E3B; opacity:0.8;">Total Balance</span>
                <span style="font-size:11px; font-weight:800; background:rgba(0,0,0,0.1); padding:3px 8px; border-radius:99px;">+$4,560.50</span>
              </div>
              <div style="font-size:32px; font-weight:900; letter-spacing:-0.03em; color:#022C22; margin-bottom:20px;">$6,324.49</div>
              
              <!-- Quick Action Pills -->
              <div style="display:flex; gap:8px;">
                <button style="flex:1; padding:10px 0; border-radius:12px; background:rgba(255,255,255,0.3); border:none; font-size:11px; font-weight:700; color:#022C22; cursor:pointer; display:flex; align-items:center; justify-content:center; gap:4px;">
                  ↑ Withdraw
                </button>
                <button style="flex:1; padding:10px 0; border-radius:12px; background:rgba(255,255,255,0.3); border:none; font-size:11px; font-weight:700; color:#022C22; cursor:pointer; display:flex; align-items:center; justify-content:center; gap:4px;">
                  ↓ Top up
                </button>
                <button style="flex:1; padding:10px 0; border-radius:12px; background:rgba(255,255,255,0.3); border:none; font-size:11px; font-weight:700; color:#022C22; cursor:pointer; display:flex; align-items:center; justify-content:center; gap:4px;">
                  ⇆ Exchange
                </button>
              </div>
            </div>

            <!-- Recent Transfers Header -->
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:14px;">
              <span style="font-size:13px; font-weight:700; color:#E4E4E7;">Recent Transfers</span>
              <a href="#" style="font-size:11px; color:#A1A1AA; text-decoration:none;">View All</a>
            </div>

            <!-- Transfer List -->
            <div style="display:flex; flex-direction:column; gap:10px;">
              <div style="display:flex; align-items:center; justify-content:space-between; background:#18181B; padding:12px 14px; border-radius:16px; border:1px solid #27272A;">
                <div style="display:flex; align-items:center; gap:12px;">
                  <div style="width:38px; height:38px; border-radius:12px; background:#10B981; color:#064E3B; font-weight:900; display:flex; align-items:center; justify-content:center; font-size:12px;">Bolt</div>
                  <div>
                    <div style="font-size:13px; font-weight:700;">Bolt Food</div>
                    <div style="font-size:11px; color:#71717A;">12:15 • Lunch</div>
                  </div>
                </div>
                <div style="text-align:right;">
                  <div style="font-size:13px; font-weight:800; color:#EF4444;">-26.81 $</div>
                  <div style="font-size:10px; color:#71717A;">-123.31 lei</div>
                </div>
              </div>

              <div style="display:flex; align-items:center; justify-content:space-between; background:#18181B; padding:12px 14px; border-radius:16px; border:1px solid #27272A;">
                <div style="display:flex; align-items:center; gap:12px;">
                  <div style="width:38px; height:38px; border-radius:12px; background:#F43F5E; color:#fff; font-weight:900; display:flex; align-items:center; justify-content:center; font-size:12px;">M</div>
                  <div>
                    <div style="font-size:13px; font-weight:700;">Marie</div>
                    <div style="font-size:11px; color:#71717A;">26 March, 16:24</div>
                  </div>
                </div>
                <div style="text-align:right;">
                  <div style="font-size:13px; font-weight:800; color:#EF4444;">-100.00 $</div>
                  <div style="font-size:10px; color:#71717A;">-100 $</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Bottom Nav Dock -->
          <div style="background:#18181B; border-radius:24px; padding:10px 16px; display:flex; justify-content:space-around; align-items:center; border:1px solid #27272A; margin-top:20px;">
            <div style="color:#10B981; font-size:18px; cursor:pointer;">🏠</div>
            <div style="color:#71717A; font-size:18px; cursor:pointer;">📊</div>
            <div style="width:36px; height:36px; border-radius:50%; background:#10B981; color:#064E3B; font-weight:900; display:flex; align-items:center; justify-content:center; cursor:pointer;">+</div>
            <div style="color:#71717A; font-size:18px; cursor:pointer;">🪙</div>
            <div style="color:#71717A; font-size:18px; cursor:pointer;">⚙️</div>
          </div>
        </div>
      `;

    case 'monex-card-reveal':
      return `
        <div style="background:#09090B; color:#fff; border-radius:36px; padding:24px 20px; font-family:'Inter', sans-serif; height:100%; display:flex; flex-direction:column; justify-content:space-between; box-shadow:0 25px 50px -12px rgba(0,0,0,0.5);">
          <div>
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:20px;">
              <span style="font-weight:700; font-size:16px;">Virtual Cards</span>
              <div style="font-size:11px; background:#18181B; padding:6px 12px; border-radius:99px; border:1px solid #27272A; color:#10B981;">● Active</div>
            </div>

            <!-- Virtual Visa Card -->
            <div style="background:linear-gradient(135deg, #A3E635 0%, #4D7C0F 100%); border-radius:24px; padding:24px 20px; color:#14532D; margin-bottom:24px; position:relative; box-shadow:0 15px 35px rgba(163,230,53,0.25);">
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:32px;">
                <span style="font-size:14px; font-weight:800; letter-spacing:0.05em;">Standard</span>
                <span style="font-size:18px; font-weight:900; font-style:italic;">VISA</span>
              </div>

              <!-- Card Number with Copy -->
              <div style="background:rgba(255,255,255,0.3); backdrop-filter:blur(10px); padding:10px 14px; border-radius:12px; display:flex; justify-content:space-between; align-items:center; margin-bottom:16px; border:1px solid rgba(255,255,255,0.4);">
                <span style="font-family:monospace; font-size:14px; font-weight:800; letter-spacing:0.1em; color:#052E16;">3456 5667 3211 3377</span>
                <span style="cursor:pointer; font-size:12px;" title="Copy">📋</span>
              </div>

              <!-- Expiry & CVV -->
              <div style="display:flex; gap:12px;">
                <div style="flex:1; background:rgba(255,255,255,0.25); padding:8px 12px; border-radius:10px;">
                  <div style="font-size:9px; text-transform:uppercase; font-weight:700; color:#14532D; opacity:0.8;">Expiry</div>
                  <div style="font-family:monospace; font-size:12px; font-weight:800; color:#052E16;">01/29</div>
                </div>
                <div style="flex:1; background:rgba(255,255,255,0.25); padding:8px 12px; border-radius:10px; display:flex; justify-content:space-between; align-items:center;">
                  <div>
                    <div style="font-size:9px; text-transform:uppercase; font-weight:700; color:#14532D; opacity:0.8;">CVV</div>
                    <div style="font-family:monospace; font-size:12px; font-weight:800; color:#052E16;">277</div>
                  </div>
                  <span style="font-size:11px;">🔒</span>
                </div>
              </div>
            </div>

            <!-- Card Controls -->
            <div style="display:flex; flex-direction:column; gap:8px;">
              <div style="display:flex; justify-content:space-between; align-items:center; background:#18181B; padding:14px 16px; border-radius:16px; border:1px solid #27272A;">
                <span style="font-size:13px; font-weight:600;">Freeze Card</span>
                <input type="checkbox" style="accent-color:#10B981; width:18px; height:18px;">
              </div>
              <div style="display:flex; justify-content:space-between; align-items:center; background:#18181B; padding:14px 16px; border-radius:16px; border:1px solid #27272A;">
                <span style="font-size:13px; font-weight:600;">Online Payments</span>
                <span style="font-size:12px; color:#10B981; font-weight:700;">Enabled</span>
              </div>
            </div>
          </div>

          <button style="width:100%; padding:14px 0; background:#10B981; color:#064E3B; border:none; border-radius:16px; font-weight:800; font-size:14px; cursor:pointer; margin-top:20px;">
            + Add to Apple Wallet
          </button>
        </div>
      `;

    case 'monex-send-money':
      return `
        <div style="background:#09090B; color:#fff; border-radius:36px; padding:24px 20px; font-family:'Inter', sans-serif; height:100%; display:flex; flex-direction:column; justify-content:space-between; box-shadow:0 25px 50px -12px rgba(0,0,0,0.5);">
          <div>
            <!-- Header -->
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:16px;">
              <span style="cursor:pointer; font-size:16px;">←</span>
              <span style="font-weight:700; font-size:15px;">Send Money</span>
              <span style="font-size:16px;">⋮</span>
            </div>

            <!-- Recipient Avatar Stack -->
            <div style="display:flex; gap:12px; overflow-x:auto; padding:6px 0 16px 0; margin-bottom:12px;">
              <div style="display:flex; flex-direction:column; align-items:center; gap:6px;">
                <div style="width:44px; height:44px; border-radius:50%; background:#27272A; display:flex; align-items:center; justify-content:center; border:1px dashed #71717A; cursor:pointer;">+</div>
                <span style="font-size:10px; color:#71717A;">New</span>
              </div>
              <div style="display:flex; flex-direction:column; align-items:center; gap:6px;">
                <div style="width:44px; height:44px; border-radius:50%; background:#3B82F6; display:flex; align-items:center; justify-content:center; font-weight:800; font-size:13px; border:2px solid #10B981;">J</div>
                <span style="font-size:10px; font-weight:600;">James</span>
              </div>
              <div style="display:flex; flex-direction:column; align-items:center; gap:6px;">
                <div style="width:44px; height:44px; border-radius:50%; background:#EC4899; display:flex; align-items:center; justify-content:center; font-weight:800; font-size:13px;">M</div>
                <span style="font-size:10px; color:#A1A1AA;">Marie</span>
              </div>
              <div style="display:flex; flex-direction:column; align-items:center; gap:6px;">
                <div style="width:44px; height:44px; border-radius:50%; background:#F59E0B; display:flex; align-items:center; justify-content:center; font-weight:800; font-size:13px;">J</div>
                <span style="font-size:10px; color:#A1A1AA;">John</span>
              </div>
            </div>

            <!-- Large Amount Display -->
            <div style="text-align:center; margin:16px 0 20px 0;">
              <div style="font-size:11px; color:#71717A; text-transform:uppercase; font-weight:700; margin-bottom:6px;">Enter amount</div>
              <div style="font-size:38px; font-weight:900; letter-spacing:-0.03em; color:#fff;">$6,324<span style="color:#10B981;">.49</span></div>
            </div>

            <!-- Quick Preset Chips -->
            <div style="display:flex; justify-content:center; gap:6px; margin-bottom:20px;">
              <span style="background:#18181B; border:1px solid #27272A; padding:6px 12px; border-radius:99px; font-size:11px; font-weight:600; cursor:pointer;">$50</span>
              <span style="background:#18181B; border:1px solid #27272A; padding:6px 12px; border-radius:99px; font-size:11px; font-weight:600; cursor:pointer;">$100</span>
              <span style="background:#18181B; border:1px solid #27272A; padding:6px 12px; border-radius:99px; font-size:11px; font-weight:600; cursor:pointer;">$500</span>
              <span style="background:#18181B; border:1px solid #27272A; padding:6px 12px; border-radius:99px; font-size:11px; font-weight:600; cursor:pointer;">$1000</span>
            </div>

            <!-- Numeric Keypad -->
            <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:10px; max-width:260px; margin:0 auto 16px auto;">
              <button style="padding:14px; background:#18181B; border:1px solid #27272A; border-radius:14px; color:#fff; font-size:16px; font-weight:700; cursor:pointer;">1</button>
              <button style="padding:14px; background:#18181B; border:1px solid #27272A; border-radius:14px; color:#fff; font-size:16px; font-weight:700; cursor:pointer;">2</button>
              <button style="padding:14px; background:#18181B; border:1px solid #27272A; border-radius:14px; color:#fff; font-size:16px; font-weight:700; cursor:pointer;">3</button>
              <button style="padding:14px; background:#18181B; border:1px solid #27272A; border-radius:14px; color:#fff; font-size:16px; font-weight:700; cursor:pointer;">4</button>
              <button style="padding:14px; background:#18181B; border:1px solid #27272A; border-radius:14px; color:#fff; font-size:16px; font-weight:700; cursor:pointer;">5</button>
              <button style="padding:14px; background:#18181B; border:1px solid #27272A; border-radius:14px; color:#fff; font-size:16px; font-weight:700; cursor:pointer;">6</button>
              <button style="padding:14px; background:#18181B; border:1px solid #27272A; border-radius:14px; color:#fff; font-size:16px; font-weight:700; cursor:pointer;">7</button>
              <button style="padding:14px; background:#18181B; border:1px solid #27272A; border-radius:14px; color:#fff; font-size:16px; font-weight:700; cursor:pointer;">8</button>
              <button style="padding:14px; background:#18181B; border:1px solid #27272A; border-radius:14px; color:#fff; font-size:16px; font-weight:700; cursor:pointer;">9</button>
              <button style="padding:14px; background:#18181B; border:1px solid #27272A; border-radius:14px; color:#fff; font-size:16px; font-weight:700; cursor:pointer;">.</button>
              <button style="padding:14px; background:#18181B; border:1px solid #27272A; border-radius:14px; color:#fff; font-size:16px; font-weight:700; cursor:pointer;">0</button>
              <button style="padding:14px; background:#18181B; border:1px solid #27272A; border-radius:14px; color:#fff; font-size:16px; font-weight:700; cursor:pointer;">⌫</button>
            </div>
          </div>

          <button style="width:100%; padding:14px 0; background:#10B981; color:#064E3B; border:none; border-radius:16px; font-weight:800; font-size:14px; cursor:pointer;">
            Send money
          </button>
        </div>
      `;

    case 'alimbank-receipt':
      return `
        <div style="background:#0F172A; color:#0F172A; border-radius:36px; padding:24px 20px; font-family:'Inter', sans-serif; height:100%; display:flex; flex-direction:column; justify-content:space-between; box-shadow:0 25px 50px -12px rgba(0,0,0,0.5);">
          <!-- Jagged Ticket Card -->
          <div style="background:#FFFDF7; border-radius:24px; padding:24px 20px; box-shadow:0 10px 25px rgba(0,0,0,0.2); position:relative; overflow:hidden;">
            <!-- Perforated top deco -->
            <div style="text-align:center; margin-bottom:16px;">
              <div style="width:44px; height:44px; border-radius:50%; background:#10B981; color:#fff; display:flex; align-items:center; justify-content:center; margin:0 auto 10px auto; font-size:18px;">✓</div>
              <div style="font-size:11px; font-weight:800; color:#10B981; letter-spacing:0.05em; text-transform:uppercase;">Transaction Success</div>
              <div style="font-size:18px; font-weight:900; color:#0F172A; margin-top:4px;">TOKO HYPERSHOP.CO</div>
              <div style="font-size:10px; color:#64748B;">Transaction #8512857528</div>
            </div>

            <!-- Dotted Divider -->
            <div style="border-top:2px dashed #CBD5E1; margin:18px 0;"></div>

            <!-- Receipt Metadata -->
            <div style="display:flex; flex-direction:column; gap:10px; font-size:11px;">
              <div style="display:flex; justify-content:space-between;">
                <span style="color:#64748B;">Date & time</span>
                <span style="font-weight:700;">Dec 15, 2022 | 8:58 PM</span>
              </div>
              <div style="display:flex; justify-content:space-between;">
                <span style="color:#64748B;">Reference number</span>
                <span style="font-weight:700; font-family:monospace;">442774356886</span>
              </div>
              <div style="display:flex; justify-content:space-between;">
                <span style="color:#64748B;">Source of funds</span>
                <span style="font-weight:700;">Fatimah Azzahrah</span>
              </div>
              <div style="display:flex; justify-content:space-between;">
                <span style="color:#64748B;">Recipient alias</span>
                <span style="font-weight:700;">Kevin Hypershop</span>
              </div>
            </div>

            <!-- Dotted Divider -->
            <div style="border-top:2px dashed #CBD5E1; margin:18px 0;"></div>

            <div style="display:flex; justify-content:space-between; align-items:center;">
              <span style="font-size:12px; font-weight:600; color:#64748B;">Total transaction</span>
              <span style="font-size:22px; font-weight:900; color:#059669;">$10.525</span>
            </div>
          </div>

          <!-- Bottom Action Buttons -->
          <div style="display:flex; gap:12px; margin-top:20px;">
            <button style="flex:1; padding:12px 0; background:#1E293B; color:#fff; border:1px solid #334155; border-radius:14px; font-weight:700; font-size:13px; cursor:pointer;">
              Share 📤
            </button>
            <button style="flex:1; padding:12px 0; background:#10B981; color:#064E3B; border:none; border-radius:14px; font-weight:800; font-size:13px; cursor:pointer;">
              Done →
            </button>
          </div>
        </div>
      `;

    // ══════════════════════════════════════════════
    // 2. REAL ESTATE & FINDORA RENTENPE SCREENS
    // ══════════════════════════════════════════════
    case 'findora-welcome':
      return `
        <div style="background:#000; color:#fff; border-radius:36px; overflow:hidden; font-family:'Inter', sans-serif; height:100%; display:flex; flex-direction:column; justify-content:space-between; box-shadow:0 25px 50px -12px rgba(0,0,0,0.5); position:relative;">
          <!-- Top Architectural House Background -->
          <div style="height:55%; background:linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%), #1E293B; display:flex; flex-direction:column; align-items:center; justify-content:center; padding:20px; text-align:center; position:relative;">
            <div style="width:70px; height:70px; border-radius:50%; background:#fff; color:#0F172A; display:flex; flex-direction:column; align-items:center; justify-content:center; box-shadow:0 10px 25px rgba(0,0,0,0.3); margin-bottom:12px;">
              <span style="font-size:24px;">🏠</span>
              <span style="font-size:7px; font-weight:900; letter-spacing:0.1em; text-transform:uppercase;">RentenPe</span>
            </div>
            <div style="font-size:22px; font-weight:900; letter-spacing:-0.02em;">FINDORA</div>
            <div style="font-size:11px; color:#CBD5E1; letter-spacing:0.1em; text-transform:uppercase;">Dream Rental House</div>
          </div>

          <!-- Curved White Bottom Sheet -->
          <div style="height:50%; background:#fff; color:#0F172A; border-top-left-radius:36px; border-top-right-radius:36px; margin-top:-20px; z-index:2; padding:32px 24px; display:flex; flex-direction:column; justify-content:space-between; text-align:center;">
            <div>
              <h2 style="font-size:24px; font-weight:900; letter-spacing:-0.03em; margin:0 0 8px 0;">WELCOME</h2>
              <p style="font-size:13px; color:#64748B; margin:0; line-height:1.5;">Find your next space, feel at home.<br>Where comfort meets convenience.</p>
            </div>

            <div style="display:flex; flex-direction:column; gap:10px;">
              <button style="width:100%; padding:14px 0; background:#0F172A; color:#fff; border:none; border-radius:16px; font-weight:800; font-size:14px; cursor:pointer;">
                Login
              </button>
              <button style="width:100%; padding:14px 0; background:#fff; color:#0F172A; border:1px solid #CBD5E1; border-radius:16px; font-weight:800; font-size:14px; cursor:pointer;">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      `;

    case 'findora-discovery-home':
      return `
        <div style="background:#FAFAFA; color:#0F172A; border-radius:36px; padding:20px 16px; font-family:'Inter', sans-serif; height:100%; display:flex; flex-direction:column; justify-content:space-between; box-shadow:0 25px 50px -12px rgba(0,0,0,0.15);">
          <div>
            <!-- Header -->
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:14px;">
              <div style="display:flex; align-items:center; gap:6px; background:#0F172A; color:#fff; padding:6px 12px; border-radius:99px; font-size:11px; font-weight:700;">
                <span>📍</span> Kochi, Kerala
              </div>
              <div style="display:flex; align-items:center; gap:8px;">
                <div style="width:34px; height:34px; border-radius:50%; background:#F1F5F9; display:flex; align-items:center; justify-content:center; font-size:13px;">🔔</div>
                <div style="width:34px; height:34px; border-radius:50%; background:#3B82F6; color:#fff; font-weight:800; display:flex; align-items:center; justify-content:center; font-size:12px;">JK</div>
              </div>
            </div>

            <!-- Title & Search -->
            <h1 style="font-size:20px; font-weight:900; letter-spacing:-0.03em; margin:0 0 12px 0;">Discover<br>Your New House</h1>

            <div style="display:flex; gap:8px; margin-bottom:14px;">
              <div style="flex:1; background:#fff; border:1px solid #E2E8F0; border-radius:12px; padding:10px 12px; display:flex; align-items:center; gap:8px;">
                <span style="color:#94A3B8; font-size:13px;">🔍</span>
                <input type="text" placeholder="Search Place..." style="border:none; outline:none; font-size:12px; width:100%;">
              </div>
              <button style="width:40px; height:40px; border-radius:12px; background:#0F172A; color:#fff; border:none; display:flex; align-items:center; justify-content:center; cursor:pointer;">
                ⚙️
              </button>
            </div>

            <!-- Category Pills -->
            <div style="display:flex; gap:6px; margin-bottom:16px; overflow-x:auto;">
              <span style="background:#0F172A; color:#fff; font-size:11px; font-weight:700; padding:6px 12px; border-radius:99px; white-space:nowrap;">Rental House</span>
              <span style="background:#F1F5F9; color:#64748B; font-size:11px; font-weight:600; padding:6px 12px; border-radius:99px; white-space:nowrap;">Apartment</span>
              <span style="background:#F1F5F9; color:#64748B; font-size:11px; font-weight:600; padding:6px 12px; border-radius:99px; white-space:nowrap;">Houses</span>
              <span style="background:#F1F5F9; color:#64748B; font-size:11px; font-weight:600; padding:6px 12px; border-radius:99px; white-space:nowrap;">Rooms</span>
            </div>

            <!-- Property Cards Grid -->
            <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px;">
              <div style="background:#fff; border:1px solid #E2E8F0; border-radius:16px; overflow:hidden; box-shadow:0 2px 4px rgba(0,0,0,0.02);">
                <div style="height:85px; background:linear-gradient(135deg, #334155, #1E293B); position:relative; padding:6px;">
                  <span style="background:#3B82F6; color:#fff; font-size:8px; font-weight:800; padding:2px 6px; border-radius:4px;">✓ Verified</span>
                  <span style="position:absolute; right:6px; top:6px; background:rgba(0,0,0,0.6); color:#fff; font-size:9px; font-weight:700; padding:2px 6px; border-radius:4px;">₹10,000/mo</span>
                </div>
                <div style="padding:8px 10px;">
                  <div style="font-size:11px; font-weight:800;">Georgie House</div>
                  <div style="font-size:9px; color:#64748B;">📍 Kochi, Kerala</div>
                  <div style="font-size:9px; color:#F59E0B; font-weight:700; margin-top:4px;">★ 4.5</div>
                </div>
              </div>

              <div style="background:#fff; border:1px solid #E2E8F0; border-radius:16px; overflow:hidden; box-shadow:0 2px 4px rgba(0,0,0,0.02);">
                <div style="height:85px; background:linear-gradient(135deg, #475569, #334155); position:relative; padding:6px;">
                  <span style="background:#3B82F6; color:#fff; font-size:8px; font-weight:800; padding:2px 6px; border-radius:4px;">✓ Verified</span>
                  <span style="position:absolute; right:6px; top:6px; background:rgba(0,0,0,0.6); color:#fff; font-size:9px; font-weight:700; padding:2px 6px; border-radius:4px;">₹12,000/mo</span>
                </div>
                <div style="padding:8px 10px;">
                  <div style="font-size:11px; font-weight:800;">Max Luxury House</div>
                  <div style="font-size:9px; color:#64748B;">📍 Edappally, Kerala</div>
                  <div style="font-size:9px; color:#F59E0B; font-weight:700; margin-top:4px;">★ 4.8</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Bottom Nav -->
          <div style="background:#fff; border-top:1px solid #E2E8F0; padding:10px 16px; display:flex; justify-content:space-around; align-items:center; border-radius:20px; margin-top:12px;">
            <div style="color:#0F172A; font-size:18px;">🏠</div>
            <div style="color:#94A3B8; font-size:18px;">📍</div>
            <div style="color:#94A3B8; font-size:18px;">💬</div>
            <div style="color:#94A3B8; font-size:18px;">⚙️</div>
          </div>
        </div>
      `;

    // ══════════════════════════════════════════════
    // 3. GOBUS 24-SCREEN TRANSIT SUITE
    // ══════════════════════════════════════════════
    case 'gobus-qr-ticket':
      return `
        <div style="background:#F8FAFC; color:#0F172A; border-radius:36px; padding:24px 20px; font-family:'Inter', sans-serif; height:100%; display:flex; flex-direction:column; justify-content:space-between; box-shadow:0 25px 50px -12px rgba(0,0,0,0.15);">
          <!-- Top Bar -->
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:16px;">
            <span style="font-size:16px; cursor:pointer;">←</span>
            <span style="font-weight:800; font-size:16px; color:#EA580C;">GoBus Digital Ticket</span>
            <span style="font-size:16px;">⋮</span>
          </div>

          <!-- Digital Ticket Card -->
          <div style="background:#fff; border-radius:24px; border:1px solid #E2E8F0; overflow:hidden; box-shadow:0 10px 25px rgba(234,88,12,0.1); position:relative;">
            <!-- Orange Route Banner -->
            <div style="background:linear-gradient(135deg, #EA580C 0%, #C2410C 100%); color:#fff; padding:16px 20px;">
              <div style="font-size:10px; font-weight:800; letter-spacing:0.1em; text-transform:uppercase; opacity:0.9;">Express Route</div>
              <div style="font-size:20px; font-weight:900; margin-top:2px;">Bus No. 01</div>
              <div style="display:flex; justify-content:space-between; align-items:center; margin-top:10px; font-size:12px; font-weight:700;">
                <span>Kadamwadi</span>
                <span>→</span>
                <span>Binduchowk</span>
              </div>
            </div>

            <!-- Ticket Details -->
            <div style="padding:20px;">
              <div style="display:flex; justify-content:space-between; margin-bottom:14px; font-size:12px;">
                <div>
                  <div style="color:#64748B; font-size:10px;">Departure</div>
                  <div style="font-weight:800; font-size:14px; margin-top:2px;">10:20 AM</div>
                </div>
                <div style="text-align:right;">
                  <div style="color:#64748B; font-size:10px;">Arrival (ETA)</div>
                  <div style="font-weight:800; font-size:14px; margin-top:2px;">10:45 AM</div>
                </div>
              </div>

              <!-- Dotted Punch Line -->
              <div style="border-top:2px dashed #E2E8F0; margin:16px -20px;"></div>

              <!-- Scannable High-Res QR Code Frame -->
              <div style="text-align:center; padding:10px 0;">
                <div style="width:140px; height:140px; margin:0 auto; background:#0F172A; border-radius:16px; padding:10px; display:flex; align-items:center; justify-content:center; box-shadow:0 4px 12px rgba(0,0,0,0.1);">
                  <!-- SVG High Density QR Code Matrix -->
                  <svg width="120" height="120" viewBox="0 0 100 100" fill="#fff">
                    <rect x="5" y="5" width="25" height="25" fill="#fff" />
                    <rect x="9" y="9" width="17" height="17" fill="#0F172A" />
                    <rect x="13" y="13" width="9" height="9" fill="#fff" />
                    <rect x="70" y="5" width="25" height="25" fill="#fff" />
                    <rect x="74" y="9" width="17" height="17" fill="#0F172A" />
                    <rect x="78" y="13" width="9" height="9" fill="#fff" />
                    <rect x="5" y="70" width="25" height="25" fill="#fff" />
                    <rect x="9" y="74" width="17" height="17" fill="#0F172A" />
                    <rect x="13" y="78" width="9" height="9" fill="#fff" />
                    <rect x="36" y="10" width="8" height="8" fill="#fff" />
                    <rect x="48" y="15" width="8" height="8" fill="#fff" />
                    <rect x="36" y="36" width="28" height="28" fill="#fff" />
                    <rect x="42" y="42" width="16" height="16" fill="#0F172A" />
                    <rect x="72" y="45" width="14" height="8" fill="#fff" />
                    <rect x="15" y="45" width="8" height="14" fill="#fff" />
                    <rect x="45" y="75" width="18" height="8" fill="#fff" />
                    <rect x="75" y="75" width="12" height="12" fill="#fff" />
                  </svg>
                </div>
                <div style="font-size:11px; font-weight:800; color:#64748B; margin-top:8px; font-family:monospace;">TKT-8291-KLP-506</div>
                <div style="font-size:10px; color:#10B981; font-weight:700; margin-top:2px;">● Valid for Conductor Scan</div>
              </div>
            </div>
          </div>

          <!-- Bottom Actions -->
          <div style="display:flex; gap:10px; margin-top:16px;">
            <button style="flex:1; padding:12px 0; background:#fff; border:1px solid #E2E8F0; border-radius:14px; font-weight:700; font-size:12px; cursor:pointer;">
              Share Ticket 📤
            </button>
            <button style="flex:1; padding:12px 0; background:#EA580C; color:#fff; border:none; border-radius:14px; font-weight:800; font-size:12px; cursor:pointer;">
              Live GPS Track 📍
            </button>
          </div>
        </div>
      `;

    // ══════════════════════════════════════════════
    // 4. CRED NEON FITNESS SUITE
    // ══════════════════════════════════════════════
    case 'credfit-activity':
      return `
        <div style="background:#09090B; color:#fff; border-radius:36px; padding:24px 20px; font-family:'Inter', sans-serif; height:100%; display:flex; flex-direction:column; justify-content:space-between; box-shadow:0 25px 50px -12px rgba(0,0,0,0.5);">
          <div>
            <!-- Header -->
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:20px;">
              <div>
                <div style="font-size:11px; color:#A1A1AA; font-weight:600;">Good morning,</div>
                <div style="font-size:18px; font-weight:900; color:#fff;">Lester!</div>
              </div>
              <div style="width:38px; height:38px; border-radius:50%; background:#18181B; border:1px solid #27272A; display:flex; align-items:center; justify-content:center; color:#A3E635; font-size:16px;">🏆</div>
            </div>

            <!-- Steps Goal Banner -->
            <div style="background:#18181B; border:1px solid #27272A; border-radius:20px; padding:16px 18px; margin-bottom:18px;">
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
                <span style="font-size:12px; font-weight:700; color:#A1A1AA;">Daily Steps</span>
                <span style="font-size:12px; font-weight:900; color:#A3E635;">68%</span>
              </div>
              <div style="font-size:24px; font-weight:900; color:#fff; margin-bottom:10px;">11,000 <span style="font-size:13px; color:#71717A; font-weight:600;">/ 16,000</span></div>
              <div style="width:100%; height:8px; background:#27272A; border-radius:99px; overflow:hidden;">
                <div style="width:68%; height:100%; background:#A3E635; border-radius:99px; box-shadow:0 0 12px #A3E635;"></div>
              </div>
            </div>

            <!-- Concentric Triple Activity Rings Card -->
            <div style="background:#18181B; border:1px solid #27272A; border-radius:20px; padding:18px; margin-bottom:18px; display:flex; justify-content:space-between; align-items:center;">
              <div>
                <div style="font-size:11px; font-weight:800; color:#A3E635; text-transform:uppercase; letter-spacing:0.05em; margin-bottom:8px;">Daily Activity</div>
                <div style="font-size:12px; margin-bottom:4px;"><span style="color:#A3E635;">●</span> Steps: <strong>11,000</strong></div>
                <div style="font-size:12px; margin-bottom:4px;"><span style="color:#38BDF8;">●</span> Calories: <strong>440 Cal</strong></div>
                <div style="font-size:12px;"><span style="color:#F43F5E;">●</span> Water: <strong>1.8 L</strong></div>
              </div>

              <!-- SVG Activity Rings -->
              <svg width="80" height="80" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" fill="none" stroke="#27272A" stroke-width="8" />
                <circle cx="50" cy="50" r="40" fill="none" stroke="#A3E635" stroke-width="8" stroke-dasharray="251" stroke-dashoffset="80" stroke-linecap="round" />
                <circle cx="50" cy="50" r="28" fill="none" stroke="#27272A" stroke-width="8" />
                <circle cx="50" cy="50" r="28" fill="none" stroke="#38BDF8" stroke-width="8" stroke-dasharray="175" stroke-dashoffset="60" stroke-linecap="round" />
                <circle cx="50" cy="50" r="16" fill="none" stroke="#27272A" stroke-width="8" />
                <circle cx="50" cy="50" r="16" fill="none" stroke="#F43F5E" stroke-width="8" stroke-dasharray="100" stroke-dashoffset="30" stroke-linecap="round" />
              </svg>
            </div>
          </div>

          <!-- CRED Neon Bottom Dock -->
          <div style="background:#18181B; border-radius:24px; padding:10px 16px; display:flex; justify-content:space-around; align-items:center; border:1px solid #27272A;">
            <span style="color:#A3E635; font-size:18px;">🏠</span>
            <span style="color:#71717A; font-size:18px;">🥗</span>
            <div style="width:38px; height:38px; border-radius:50%; background:#A3E635; color:#09090B; font-weight:900; display:flex; align-items:center; justify-content:center; box-shadow:0 0 15px rgba(163,230,53,0.4);">+</div>
            <span style="color:#71717A; font-size:18px;">📊</span>
            <span style="color:#71717A; font-size:18px;">👤</span>
          </div>
        </div>
      `;

    // ══════════════════════════════════════════════
    // 5. LEAFORA BOTANICAL GLASS SUITE
    // ══════════════════════════════════════════════
    case 'leafora-product-detail':
      return `
        <div style="background:linear-gradient(180deg, #064E3B 0%, #022C22 100%); color:#fff; border-radius:36px; padding:24px 20px; font-family:'Inter', sans-serif; height:100%; display:flex; flex-direction:column; justify-content:space-between; box-shadow:0 25px 50px -12px rgba(0,0,0,0.5);">
          <div>
            <!-- Top Controls -->
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:16px;">
              <div style="width:36px; height:36px; border-radius:50%; background:rgba(255,255,255,0.1); backdrop-filter:blur(10px); display:flex; align-items:center; justify-content:center; cursor:pointer;">←</div>
              <div style="display:flex; gap:8px;">
                <div style="width:36px; height:36px; border-radius:50%; background:rgba(255,255,255,0.1); backdrop-filter:blur(10px); display:flex; align-items:center; justify-content:center; cursor:pointer;">🤍</div>
                <div style="width:36px; height:36px; border-radius:50%; background:rgba(255,255,255,0.1); backdrop-filter:blur(10px); display:flex; align-items:center; justify-content:center; cursor:pointer;">📤</div>
              </div>
            </div>

            <!-- Plant Visual Area -->
            <div style="text-align:center; padding:10px 0 20px 0;">
              <div style="font-size:72px; margin-bottom:12px; filter:drop-shadow(0 15px 25px rgba(0,0,0,0.4));">🪴</div>
              <div style="font-size:24px; font-weight:900; letter-spacing:-0.02em;">Snake Plant</div>
              <div style="font-size:12px; color:#A7F3D0; font-style:italic;">Sansevieria trifasciata</div>
              <div style="display:flex; justify-content:center; align-items:center; gap:8px; margin-top:8px;">
                <span style="font-size:11px; background:rgba(255,255,255,0.15); padding:3px 10px; border-radius:99px;">★ 4.8 (120)</span>
                <span style="font-size:11px; background:rgba(255,255,255,0.15); padding:3px 10px; border-radius:99px;">☀️ Low Light</span>
              </div>
            </div>

            <!-- 4 Care Telemetry Specs -->
            <div style="display:grid; grid-template-columns:repeat(4, 1fr); gap:8px; background:rgba(255,255,255,0.08); backdrop-filter:blur(12px); border:1px solid rgba(255,255,255,0.15); border-radius:20px; padding:14px 10px; text-align:center;">
              <div>
                <div style="font-size:16px;">💧</div>
                <div style="font-size:9px; color:#A7F3D0; margin-top:4px;">Water</div>
                <div style="font-size:10px; font-weight:800; margin-top:2px;">2-3 Wks</div>
              </div>
              <div>
                <div style="font-size:16px;">☀️</div>
                <div style="font-size:9px; color:#A7F3D0; margin-top:4px;">Light</div>
                <div style="font-size:10px; font-weight:800; margin-top:2px;">Low-Med</div>
              </div>
              <div>
                <div style="font-size:16px;">💨</div>
                <div style="font-size:9px; color:#A7F3D0; margin-top:4px;">Humidity</div>
                <div style="font-size:10px; font-weight:800; margin-top:2px;">Average</div>
              </div>
              <div>
                <div style="font-size:16px;">🐾</div>
                <div style="font-size:9px; color:#A7F3D0; margin-top:4px;">Pet Safe</div>
                <div style="font-size:10px; font-weight:800; margin-top:2px;">Yes</div>
              </div>
            </div>
          </div>

          <!-- Bottom Sticky Price & Cart Button -->
          <div style="display:flex; justify-content:space-between; align-items:center; background:rgba(0,0,0,0.4); backdrop-filter:blur(20px); border:1px solid rgba(255,255,255,0.15); border-radius:24px; padding:12px 18px; margin-top:16px;">
            <div>
              <div style="font-size:10px; color:#A7F3D0; text-transform:uppercase; font-weight:700;">Price</div>
              <div style="font-size:24px; font-weight:900; color:#fff;">$24.99</div>
            </div>
            <button style="padding:14px 24px; background:#10B981; color:#064E3B; border:none; border-radius:16px; font-weight:800; font-size:14px; cursor:pointer; display:flex; align-items:center; gap:8px;">
              <span>Add to Cart</span> 🛍️
            </button>
          </div>
        </div>
      `;


    // ══════════════════════════════════════════════
    // BANKING — Monex Analytics
    // ══════════════════════════════════════════════
    case 'monex-analytics':
      return `
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
      `;

    case 'monex-crypto':
      return `
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
      `;

    case 'monex-settings':
      return `
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
      `;

    case 'alimbank-home':
      return `
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
      `;

    case 'bluebank-home':
      return `
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
      `;

    case 'salung-savings':
      return `
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
      `;

    case 'monero-pay':
      return `
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
      `;

    case 'shipping-tracker':
      return `
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
      `;

    case 'deposit-premium':
      return `
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
      `;

    case 'neo-wallet-3d':
      return `
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
      `;

    // ══════════════════════════════════════════════
    // CRYPTO SCREENS
    // ══════════════════════════════════════════════
    case 'trantor-candlestick':
      return `
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
      `;

    case 'trantor-swap':
      return `
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
      `;

    case 'trantor-pool':
      return `
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
      `;

    case 'nft-onboarding':
      return `
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
      `;

    case 'crypto-wallet-skeuo':
      return `
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
      `;

    case 'fuse-vip-home':
      return `
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
      `;

    case 'defi-yield-farm':
      return `
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
      `;

    case 'token-launch-countdown':
      return `
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
      `;

    case 'portfolio-pie':
      return `
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
      `;



    // ══════════════════════════════════════════════
    // REAL ESTATE SCREENS
    // ══════════════════════════════════════════════
    case 'findora-filters':
      return `
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
      `;

    case 'findora-property-detail':
      return `
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
      `;

    case 'findora-map-search':
      return `
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
      `;

    case 'findora-lease-signing':
      return `
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
      `;

    case 'findora-rent-split':
      return `
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
      `;

    case 'findora-screening':
      return `
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
      `;

    case 'findora-maintenance':
      return `
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
      `;

    case 'findora-payment-history':
      return `
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
      `;

    case 'findora-virtual-tour':
      return `
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
      `;

    case 'findora-neighborhood':
      return `
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
      `;

    case 'findora-documents':
      return `
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
      `;

    // ══════════════════════════════════════════════
    // GOBUS TRANSPORT — Key screens
    // ══════════════════════════════════════════════
    case 'gobus-splash':
      return `
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
      `;

    case 'gobus-onboard-tracking':
      return `
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
      `;

    case 'gobus-home-search':
      return `
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
      `;

    case 'gobus-route-results':
      return `
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
      `;

    case 'gobus-live-map':
      return `
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
      `;

    case 'gobus-notifications':
      return `
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
      `;

    case 'gobus-payment-success':
      return `
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
      `;

    // ══════════════════════════════════════════════
    // MOONIE SLEEP/WELLNESS SCREENS
    // ══════════════════════════════════════════════
    case 'moonie-splash':
      return `
        <div style="background:linear-gradient(180deg,#1E1B4B 0%,#312E81 40%,#4338CA 100%);color:#fff;border-radius:36px;padding:24px 20px;font-family:'Inter',sans-serif;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;position:relative;overflow:hidden;">
          <div style="position:absolute;top:15%;left:50%;transform:translateX(-50%);width:80px;height:80px;border-radius:50%;background:radial-gradient(circle,#FEF3C7 20%,#FBBF24 60%,transparent 70%);box-shadow:0 0 40px rgba(251,191,36,0.3);"></div>
          <div style="font-size:36px;font-weight:900;letter-spacing:0.05em;margin-top:120px;font-style:italic;">Moonie</div>
          <div style="font-size:11px;color:rgba(255,255,255,0.6);margin-top:12px;">🎧 Better with headphones</div>
        </div>
      `;

    case 'moonie-name-input':
      return `
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
      `;

    case 'moonie-interests':
      return `
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
      `;

    case 'moonie-personalize':
      return `
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
      `;

    case 'moonie-time-picker':
      return `
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
      `;

    case 'moonie-paywall':
      return `
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
      `;

    // ══════════════════════════════════════════════
    // SECURITY SCREENS
    // ══════════════════════════════════════════════
    case 'dark-curl-login':
      return `
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
      `;

    case 'otp-bottom-sheet':
      return `
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
      `;

    case 'biometric-faceid':
      return `
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
      `;

    case 'passkey-enrollment':
      return `
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
      `;

    case 'kyc-id-scanner':
      return `
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
      `;

    case 'kyc-selfie-liveness':
      return `
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
      `;

    case 'pin-lock-dial':
      return `
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
      `;

    case 'session-devices':
      return `
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
      `;



    // ══════════════════════════════════════════════
    // BATCH 3: BANKING & CRYPTO & REAL ESTATE
    // ══════════════════════════════════════════════
    case 'salung-goal-detail':
      return `
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
      `;

    case 'monero-wallet':
      return `
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
      `;

    case 'shipping-wallet':
      return `
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
      `;

    case 'pastel-finance-home':
      return `
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
      `;

    case 'pastel-finance-chart':
      return `
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
      `;

    case 'trantor-dashboard':
      return `
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
      `;

    case 'trantor-goal-pool':
      return `
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
      `;

    case 'web3-onboard-cards':
      return `
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
      `;

    case 'web3-nft-gallery':
      return `
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
      `;

    case 'web3-purple-auth':
      return `
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
      `;

    case 'fuse-plus-membership':
      return `
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
      `;

    case 'crypto-bento-card':
      return `
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
      `;

    case 'crypto-integrations':
      return `
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
      `;

    case 'findora-tenant-screening':
      return `
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
      `;

    case 'findora-move-in-checklist':
      return `
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
      `;

    case 'findora-maintenance-req':
      return `
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
      `;

    case 'findora-rewards-hub':
      return `
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
      `;

    case 'findora-neighborhood-guide':
      return `
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
      `;

    case 'findora-deposit-escrow':
      return `
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
      `;

    case 'findora-owner-analytics':
      return `
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
      `;


    // ══════════════════════════════════════════════
    // BATCH 4: GOBUS TRANSPORT SUITE (20 SCREENS)
    // ══════════════════════════════════════════════
    case 'gobus-onboard-1':
      return `
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
      `;

    case 'gobus-onboard-2':
      return `
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
      `;

    case 'gobus-onboard-3':
      return `
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
      `;

    case 'gobus-search-home':
      return `
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
      `;

    case 'gobus-bus-results':
      return `
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
      `;

    case 'gobus-gps-route-map':
      return `
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
      `;

    case 'gobus-passenger-config':
      return `
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
      `;

    case 'gobus-route-detail':
      return `
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
      `;

    case 'gobus-routes-directory':
      return `
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
      `;

    case 'gobus-pass-catalog':
      return `
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
      `;

    case 'gobus-package-selector':
      return `
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
      `;

    case 'gobus-trip-planner':
      return `
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
      `;

    case 'gobus-route-autocomplete':
      return `
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
      `;

    case 'gobus-student-pass':
      return `
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
      `;

    case 'gobus-account':
      return `
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
      `;

    case 'gobus-emergency-contacts':
      return `
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
      `;

    case 'gobus-phone-login':
      return `
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
      `;

    case 'gobus-pass-congrats':
      return `
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
      `;

    case 'gobus-sos-active':
      return `
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
      `;

    case 'gobus-drawer-menu':
      return `
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
      `;


    // ══════════════════════════════════════════════
    // BATCH 5: FITNESS & BOTANICAL & GOURMET (24 SCREENS)
    // ══════════════════════════════════════════════
    case 'fitfuel-onboard':
      return `
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
      `;

    case 'fitfuel-home':
      return `
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
      `;

    case 'fitfuel-workouts':
      return `
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
      `;

    case 'fitfuel-workout-detail':
      return `
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
      `;

    case 'fitfuel-activity-rings':
      return `
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
      `;

    case 'fitfuel-nutrition':
      return `
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
      `;

    case 'credfit-browse':
      return `
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
      `;

    case 'credfit-splash':
      return `
        <div style="background:#000000;color:#fff;border-radius:36px;padding:24px 20px;font-family:'Inter',sans-serif;height:100%;display:flex;flex-direction:column;justify-content:space-between;align-items:center;text-align:center;">
          <div></div>
          <div>
            <div style="font-size:38px;font-weight:900;letter-spacing:-0.04em;color:#CCFF00;margin-bottom:6px;">CRED_FIT</div>
            <div style="font-size:12px;letter-spacing:0.15em;color:#71717A;text-transform:uppercase;">Discipline Over Motivation</div>
          </div>
          <button style="width:100%;padding:16px;background:#CCFF00;color:#000;border:none;border-radius:16px;font-weight:900;font-size:13px;letter-spacing:0.05em;cursor:pointer;">ENTER SANCTUARY</button>
        </div>
      `;

    case 'credfit-booking-confirmed':
      return `
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
      `;

    case 'credfit-workout-detail':
      return `
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
      `;

    case 'credfit-exercise-timer':
      return `
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
      `;

    case 'credfit-trainer-profile':
      return `
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
      `;

    case 'credfit-reviews':
      return `
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
      `;

    case 'fitbite-onboard':
      return `
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
      `;

    case 'fitbite-dashboard':
      return `
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
      `;

    case 'leafora-splash':
      return `
        <div style="background:linear-gradient(180deg,#064E3B 0%,#022C22 100%);color:#fff;border-radius:36px;padding:24px 20px;font-family:'Inter',sans-serif;height:100%;display:flex;flex-direction:column;justify-content:space-between;text-align:center;">
          <div></div>
          <div>
            <div style="font-size:48px;margin-bottom:12px;">🌿</div>
            <div style="font-size:26px;font-weight:900;letter-spacing:-0.02em;color:#A7F3D0;margin-bottom:6px;">Leafora Flora</div>
            <div style="font-size:12px;color:#6EE7B7;line-height:1.5;">Botanical sanctuaries & rare indoor plant collections delivered to your home.</div>
          </div>
          <button style="width:100%;padding:16px;background:#10B981;color:#022C22;border:none;border-radius:18px;font-weight:900;font-size:14px;cursor:pointer;">Explore Nursery</button>
        </div>
      `;

    case 'leafora-shop-home':
      return `
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
      `;

    case 'leafora-cart-checkout':
      return `
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
      `;

    case 'plantcare-home':
      return `
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
      `;

    case 'plantcare-detail':
      return `
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
      `;

    case 'coffee-shop-home':
      return `
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
      `;

    case 'coffee-shop-detail':
      return `
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
      `;

    case 'coffee-landing-desktop':
      return `
        <div style="background:#292524;color:#FAF7F2;border-radius:36px;padding:24px 20px;font-family:'Inter',sans-serif;height:100%;display:flex;flex-direction:column;justify-content:center;text-align:center;">
          <div style="font-size:32px;margin-bottom:8px;">☕</div>
          <div style="font-size:22px;font-weight:900;letter-spacing:-0.02em;margin-bottom:8px;">Artisan Coffee Roasters</div>
          <div style="font-size:11px;color:#D6D3D1;line-height:1.5;margin-bottom:20px;">Micro-lot single origin beans direct from fair-trade high-altitude estates.</div>
          <button style="padding:14px 24px;background:#D97706;color:#000;border:none;border-radius:16px;font-weight:900;font-size:12px;cursor:pointer;">Order Bag Delivery</button>
        </div>
      `;

    case 'gourmet-food-home':
      return `
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
      `;


    // ══════════════════════════════════════════════
    // BATCH 6: SLEEP, GAMING, EVENTS, DASHBOARDS & SAAS (24 SCREENS)
    // ══════════════════════════════════════════════
    case 'moonie-color-palette':
      return `
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
      `;

    case 'habit-timeline':
      return `
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
      `;

    case 'neumorphic-widget':
      return `
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
      `;

    case 'mood-diary-suite':
      return `
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
      `;

    case 'minecraft-store':
      return `
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
      `;

    case 'minecraft-detail':
      return `
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
      `;

    case 'music-festival-timeline':
      return `
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
      `;

    case 'music-festival-invites':
      return `
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
      `;

    case 'music-festival-directory':
      return `
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
      `;

    case 'sports-booking-home':
      return `
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
      `;

    case 'event-marketplace-home':
      return `
        <div style="background:#F0FDF4;color:#14532D;border-radius:36px;padding:24px 20px;font-family:'Inter',sans-serif;height:100%;display:flex;flex-direction:column;overflow-y:auto;">
          <div style="font-weight:900;font-size:16px;margin-bottom:14px;">Event Marketplace</div>
          <div style="background:#FFFFFF;border:1px solid #BBF7D0;border-radius:20px;padding:16px;">
            <div style="font-size:10px;color:#16A34A;font-weight:800;">TECH SUMMIT</div>
            <div style="font-size:16px;font-weight:900;color:#0F172A;margin:4px 0;">Bangalore AI Founders Meet</div>
            <div style="font-size:11px;color:#64748B;">450 Founders • Demo Pitches • VC Matchmaking</div>
            <div style="font-size:13px;font-weight:900;color:#16A34A;margin-top:8px;">₹499 (Standard Pass)</div>
          </div>
        </div>
      `;

    case 'event-marketplace-vendors':
      return `
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
      `;

    case 'leaderboard-podium':
      return `
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
      `;

    case 'calendar-day-agenda':
      return `
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
      `;

    case 'calendar-week-timeblocks':
      return `
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
      `;

    case 'calendar-year-grid':
      return `
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
      `;

    case 'task-manager-dark':
      return `
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
      `;

    case 'deployment-status-split':
      return `
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
      `;

    case 'data-usage-gauge':
      return `
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
      `;

    case 'transaction-table-dark':
      return `
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
      `;

    case 'fitness-dashboard-dark':
      return `
        <div style="background:#09090B;color:#fff;border-radius:36px;padding:24px 20px;font-family:'Inter',sans-serif;height:100%;display:flex;flex-direction:column;overflow-y:auto;">
          <div style="font-weight:900;font-size:16px;margin-bottom:14px;">Telemetry Rings SaaS</div>
          <div style="background:#18181B;border:1px solid #27272A;border-radius:20px;padding:16px;margin-bottom:12px;">
            <div style="font-size:11px;color:#A1A1AA;">ATHLETE VO2 MAX</div>
            <div style="font-size:28px;font-weight:900;color:#10B981;margin:4px 0;">58.4 <span style="font-size:12px;color:#71717A;">ml/kg/min</span></div>
            <div style="font-size:10px;color:#10B981;">Superior (Top 5% of age bracket)</div>
          </div>
        </div>
      `;

    case 'brandbuzz-agency-hero':
      return `
        <div style="background:#FF5722;color:#fff;border-radius:36px;padding:24px 20px;font-family:'Inter',sans-serif;height:100%;display:flex;flex-direction:column;justify-content:space-between;text-align:center;">
          <div></div>
          <div>
            <div style="font-size:32px;font-weight:900;letter-spacing:-0.03em;line-height:1.1;margin-bottom:10px;">Scale Your Brand With Impact</div>
            <div style="font-size:12px;color:#FFCCBC;line-height:1.5;">Award-winning creative design agency building next-generation digital products.</div>
          </div>
          <button style="width:100%;padding:16px;background:#000;color:#fff;border:none;border-radius:18px;font-weight:900;font-size:13px;cursor:pointer;">Start a Project</button>
        </div>
      `;

    case 'brandbuzz-testimonials':
      return `
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
      `;

    case 'medical-doctor-booking':
      return `
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
      `;

    // ══════════════════════════════════════════════
    // 6. DEFAULT / FALLBACK PREMIUM TEMPLATE
    // ══════════════════════════════════════════════
    default:
      return `
        <div style="background:#0F172A; color:#fff; border-radius:36px; padding:28px 24px; font-family:'Inter', sans-serif; height:100%; display:flex; flex-direction:column; justify-content:space-between; box-shadow:0 25px 50px -12px rgba(0,0,0,0.5);">
          <div>
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:20px;">
              <span style="font-size:11px; font-weight:800; color:#38BDF8; letter-spacing:0.1em; text-transform:uppercase;">${screenId.toUpperCase()}</span>
              <span style="font-size:10px; background:#1E293B; padding:4px 8px; border-radius:6px; color:#94A3B8;">Apple & CRED Standard</span>
            </div>

            <div style="background:#1E293B; border:1px solid #334155; border-radius:20px; padding:24px 20px; text-align:center; margin-bottom:20px;">
              <div style="font-size:36px; margin-bottom:12px;">✨</div>
              <div style="font-size:18px; font-weight:800; margin-bottom:6px;">Screen Prototype</div>
              <div style="font-size:12px; color:#94A3B8; line-height:1.5;">Designed according to Pinterest inspiration specifications with pixel-level precision.</div>
            </div>

            <div style="display:flex; flex-direction:column; gap:10px;">
              <div style="background:#1E293B; border:1px solid #334155; border-radius:14px; padding:12px 14px; display:flex; justify-content:space-between; align-items:center;">
                <span style="font-size:12px; font-weight:600;">Status</span>
                <span style="font-size:11px; color:#10B981; font-weight:700;">● Live Prototype</span>
              </div>
              <div style="background:#1E293B; border:1px solid #334155; border-radius:14px; padding:12px 14px; display:flex; justify-content:space-between; align-items:center;">
                <span style="font-size:12px; font-weight:600;">Design Tokens</span>
                <span style="font-size:11px; color:#38BDF8; font-weight:700;">Active</span>
              </div>
            </div>
          </div>

          <button style="width:100%; padding:14px 0; background:#38BDF8; color:#0F172A; border:none; border-radius:16px; font-weight:800; font-size:13px; cursor:pointer;">
            Interact with Screen
          </button>
        </div>
      `;
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { renderScreenHTML };
}
