/**
 * RentenPe UI Kit - Pinterest Authentication, Security, Cards & Property Archetypes
 * Direct implementation of top 50 Pinterest references:
 * - media_1791643570770.png Glowing Amber Envelope OTP Verification
 * - media_1791643570770.png iOS Numeric Dial Keypad with Autofill Pill
 * - Apple FaceID Holographic Ring Scan
 * - media_1791644657316.png Luxury Property Listing with Floating Rent Pill
 * - Landlord & Roommate Stack Cards
 * - Titanium Obsidian VIP Tenant Card
 * - Interactive Amenity Bento Grid
 * - Lease Summary with e-Stamp Seal
 */

function renderAuthAndPropertyVariants(fam, icon, slug, variantIndex) {
  switch (variantIndex) {
    case 0: // Model A: Pinterest Glowing Amber Envelope & 6-Digit OTP Box (media_1791643570770.png)
      return `<div style="width:100%;max-width:340px;background:#09090B;border:1px solid #27272A;border-radius:28px;padding:26px 20px;color:#fff;box-shadow:0 24px 50px rgba(0,0,0,0.6);display:flex;flex-direction:column;align-items:center;gap:18px;position:relative;overflow:hidden;">
        <!-- Glowing Envelope Opening Visual -->
        <div style="position:relative;width:90px;height:70px;display:flex;align-items:center;justify-content:center;margin-top:6px;">
          <div style="position:absolute;width:110px;height:110px;border-radius:50%;background:radial-gradient(circle, rgba(245,158,11,0.35) 0%, transparent 70%);pointer-events:none;"></div>
          <!-- Envelope Body -->
          <div style="width:76px;height:52px;background:linear-gradient(145deg, #F59E0B 0%, #D97706 100%);border-radius:12px;box-shadow:0 8px 24px rgba(245,158,11,0.5);display:flex;align-items:center;justify-content:center;position:relative;">
            <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="22,6 12,13 2,6"/>
            </svg>
          </div>
        </div>

        <div style="text-align:center;">
          <div style="font-size:18px;font-weight:900;color:#F4F4F5;">Check your inbox</div>
          <div style="font-size:11px;color:#A1A1AA;margin-top:4px;line-height:1.4;">We've sent a unique 6-digit code to your email. Type it in here to authenticate.</div>
        </div>

        <!-- 6 Illuminated Glass Input Digit Boxes -->
        <div style="display:flex;gap:6px;justify-content:center;">
          <div style="width:38px;height:48px;border-radius:12px;background:#18181B;border:1.5px solid #F59E0B;box-shadow:0 0 10px rgba(245,158,11,0.25);display:flex;align-items:center;justify-content:center;font-size:20px;font-weight:900;color:#FFFFFF;">3</div>
          <div style="width:38px;height:48px;border-radius:12px;background:#18181B;border:1.5px solid #F59E0B;box-shadow:0 0 10px rgba(245,158,11,0.25);display:flex;align-items:center;justify-content:center;font-size:20px;font-weight:900;color:#FFFFFF;">4</div>
          <div style="width:38px;height:48px;border-radius:12px;background:#18181B;border:1.5px solid #F59E0B;box-shadow:0 0 10px rgba(245,158,11,0.25);display:flex;align-items:center;justify-content:center;font-size:20px;font-weight:900;color:#FFFFFF;">9</div>
          <div style="width:38px;height:48px;border-radius:12px;background:#18181B;border:1px solid #3F3F46;display:flex;align-items:center;justify-content:center;font-size:20px;font-weight:900;color:#FFFFFF;">0</div>
          <div style="width:38px;height:48px;border-radius:12px;background:#18181B;border:1px solid #3F3F46;display:flex;align-items:center;justify-content:center;font-size:20px;font-weight:900;color:#FFFFFF;">2</div>
          <div style="width:38px;height:48px;border-radius:12px;background:#18181B;border:1px solid #3F3F46;display:flex;align-items:center;justify-content:center;font-size:20px;font-weight:900;color:#FFFFFF;">0</div>
        </div>

        <!-- Confirm Button with 3 Loading Dots -->
        <button style="width:100%;padding:14px;background:#18181B;border:1px solid #27272A;border-radius:14px;color:#fff;font-size:13px;font-weight:800;display:flex;align-items:center;justify-content:center;gap:6px;cursor:pointer;">
          <span style="letter-spacing:0.2em;color:#F59E0B;">● ● ●</span>
        </button>

        <div style="display:flex;align-items:center;gap:6px;font-size:11px;color:#71717A;cursor:pointer;">
          <span>⟳</span> Resend code in 42s
        </div>
      </div>`;

    case 1: // Model B: iOS Numeric Dial Keypad with "From Mail" Autofill Pill (media_1791643570770.png)
      return `<div style="width:100%;max-width:340px;background:#18181B;border:1px solid #27272A;border-radius:26px;padding:20px;box-shadow:0 20px 40px rgba(0,0,0,0.5);display:flex;flex-direction:column;gap:12px;">
        <!-- Autofill Suggestion Pill -->
        <div style="align-self:center;background:#27272A;border:1px solid #3F3F46;border-radius:99px;padding:6px 14px;display:flex;align-items:center;gap:8px;cursor:pointer;">
          <span style="font-size:10px;color:#A1A1AA;">From Mail:</span>
          <span style="font-size:12px;font-weight:800;color:#38BDF8;">349020</span>
        </div>

        <!-- 3x4 Numeric Keypad Grid -->
        <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;">
          <div style="background:#27272A;border-radius:12px;padding:12px 0;text-align:center;cursor:pointer;"><div style="font-size:18px;font-weight:700;color:#fff;">1</div><div style="font-size:8px;color:#71717A;">&nbsp;</div></div>
          <div style="background:#27272A;border-radius:12px;padding:12px 0;text-align:center;cursor:pointer;"><div style="font-size:18px;font-weight:700;color:#fff;">2</div><div style="font-size:8px;color:#A1A1AA;">ABC</div></div>
          <div style="background:#27272A;border-radius:12px;padding:12px 0;text-align:center;cursor:pointer;"><div style="font-size:18px;font-weight:700;color:#fff;">3</div><div style="font-size:8px;color:#A1A1AA;">DEF</div></div>
          <div style="background:#27272A;border-radius:12px;padding:12px 0;text-align:center;cursor:pointer;"><div style="font-size:18px;font-weight:700;color:#fff;">4</div><div style="font-size:8px;color:#A1A1AA;">GHI</div></div>
          <div style="background:#27272A;border-radius:12px;padding:12px 0;text-align:center;cursor:pointer;"><div style="font-size:18px;font-weight:700;color:#fff;">5</div><div style="font-size:8px;color:#A1A1AA;">JKL</div></div>
          <div style="background:#27272A;border-radius:12px;padding:12px 0;text-align:center;cursor:pointer;"><div style="font-size:18px;font-weight:700;color:#fff;">6</div><div style="font-size:8px;color:#A1A1AA;">MNO</div></div>
          <div style="background:#27272A;border-radius:12px;padding:12px 0;text-align:center;cursor:pointer;"><div style="font-size:18px;font-weight:700;color:#fff;">7</div><div style="font-size:8px;color:#A1A1AA;">PQRS</div></div>
          <div style="background:#27272A;border-radius:12px;padding:12px 0;text-align:center;cursor:pointer;"><div style="font-size:18px;font-weight:700;color:#fff;">8</div><div style="font-size:8px;color:#A1A1AA;">TUV</div></div>
          <div style="background:#27272A;border-radius:12px;padding:12px 0;text-align:center;cursor:pointer;"><div style="font-size:18px;font-weight:700;color:#fff;">9</div><div style="font-size:8px;color:#A1A1AA;">WXYZ</div></div>
          <div></div>
          <div style="background:#27272A;border-radius:12px;padding:12px 0;text-align:center;cursor:pointer;"><div style="font-size:18px;font-weight:700;color:#fff;">0</div><div style="font-size:8px;color:#71717A;">&nbsp;</div></div>
          <div style="display:flex;align-items:center;justify-content:center;cursor:pointer;color:#A1A1AA;font-size:18px;">⌫</div>
        </div>
      </div>`;

    case 2: // Model C: Apple FaceID Biometric Holographic Ring Scan
      return `<div style="width:100%;max-width:340px;background:#09090B;border:1px solid #27272A;border-radius:26px;padding:24px;color:#fff;box-shadow:0 20px 40px rgba(0,0,0,0.5);display:flex;flex-direction:column;align-items:center;gap:16px;">
        <div style="position:relative;width:90px;height:90px;display:flex;align-items:center;justify-content:center;">
          <!-- Holographic Scan Box -->
          <div style="position:absolute;width:100%;height:100%;border:2px dashed #38BDF8;border-radius:22px;box-shadow:0 0 20px rgba(56,189,248,0.25);"></div>
          <!-- Face Icon -->
          <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#38BDF8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M9 10h.01M15 10h.01M9.5 15a3.5 3.5 0 0 0 5 0"/>
            <rect x="3" y="3" width="18" height="18" rx="5"/>
          </svg>
        </div>

        <div style="text-align:center;">
          <div style="font-size:15px;font-weight:800;color:#F4F4F5;">Face ID Authentication</div>
          <div style="font-size:11px;color:#A1A1AA;margin-top:2px;">Look directly into front camera</div>
        </div>

        <div style="padding:4px 10px;background:rgba(52,211,153,0.15);color:#34D399;border-radius:99px;font-size:11px;font-weight:800;">
          ● 99.8% Match Confidence
        </div>
      </div>`;

    case 3: // Model D: Luxury Property Listing with Floating Rent Pill (media_1791644657316.png)
      return `<div style="width:100%;max-width:340px;background:#ffffff;border:1px solid #E2E8F0;border-radius:26px;overflow:hidden;box-shadow:0 12px 30px rgba(15,23,42,0.06);display:flex;flex-direction:column;">
        <!-- Hero Photography Mock with Floating Badges -->
        <div style="position:relative;height:140px;background:linear-gradient(135deg, #1E293B 0%, #334155 100%);padding:14px;display:flex;flex-direction:column;justify-content:space-between;">
          <div style="display:flex;justify-content:space-between;align-items:flex-start;">
            <span style="padding:4px 10px;background:rgba(15,23,42,0.75);backdrop-filter:blur(8px);color:#fff;border-radius:99px;font-size:10px;font-weight:800;">
              VERIFIED RESIDENCE
            </span>
            <div style="width:32px;height:32px;border-radius:50%;background:rgba(255,255,255,0.9);display:flex;align-items:center;justify-content:center;cursor:pointer;font-size:14px;">
              ❤️
            </div>
          </div>
          <!-- Floating Rent Pill -->
          <div style="align-self:flex-start;background:#FFFFFF;color:#0F172A;border-radius:12px;padding:6px 12px;font-weight:900;font-size:15px;box-shadow:0 6px 16px rgba(0,0,0,0.15);">
            ₹32,500<span style="font-size:11px;font-weight:600;color:#64748B;">/month</span>
          </div>
        </div>

        <!-- Body Details -->
        <div style="padding:18px;display:flex;flex-direction:column;gap:12px;">
          <div>
            <div style="font-size:15px;font-weight:800;color:#0F172A;">Indiranagar Sky Villa #402</div>
            <div style="font-size:11px;color:#64748B;margin-top:2px;">100ft Road, Bengaluru • 3 BHK (1,450 sqft)</div>
          </div>

          <div style="display:flex;gap:6px;flex-wrap:wrap;">
            <span style="padding:3px 8px;background:#F1F5F9;border-radius:6px;font-size:10px;font-weight:700;color:#475569;">Fully Furnished</span>
            <span style="padding:3px 8px;background:#ECFDF5;color:#059669;border-radius:6px;font-size:10px;font-weight:800;">Zero Brokerage</span>
            <span style="padding:3px 8px;background:#EFF6FF;color:#2563EB;border-radius:6px;font-size:10px;font-weight:700;">Deposit: 2 Months</span>
          </div>

          <button style="width:100%;padding:11px;background:#0F172A;color:#fff;border:none;border-radius:12px;font-size:12px;font-weight:800;cursor:pointer;">
            Schedule Site Tour →
          </button>
        </div>
      </div>`;

    case 4: // Model E: Verified Landlord & Roommate Stack Card
      return `<div style="width:100%;max-width:340px;background:#ffffff;border:1px solid #E2E8F0;border-radius:24px;padding:20px;box-shadow:0 8px 24px rgba(15,23,42,0.05);display:flex;flex-direction:column;gap:14px;">
        <div style="display:flex;align-items:center;justify-content:space-between;">
          <div style="display:flex;align-items:center;gap:12px;">
            <div style="width:44px;height:44px;border-radius:50%;background:#0F172A;color:#fff;display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:800;">
              VK
            </div>
            <div>
              <div style="display:flex;align-items:center;gap:6px;">
                <span style="font-size:14px;font-weight:800;color:#0F172A;">Vikram Kumar</span>
                <span style="padding:2px 6px;background:#FEF3C7;color:#B45309;border-radius:4px;font-size:9px;font-weight:800;">SUPER HOST</span>
              </div>
              <div style="font-size:11px;color:#64748B;">4.9 ★ Rating (38 Reviews) • Responds < 15m</div>
            </div>
          </div>
        </div>

        <!-- Roommate Stack -->
        <div style="padding:10px;background:#F8FAFC;border-radius:12px;display:flex;align-items:center;justify-content:space-between;">
          <div style="display:flex;align-items:center;gap:8px;">
            <div style="display:flex;margin-left:6px;">
              <div style="width:28px;height:28px;border-radius:50%;background:#2563EB;color:#fff;border:2px solid #fff;display:flex;align-items:center;justify-content:center;font-size:9px;font-weight:800;margin-left:-6px;">A</div>
              <div style="width:28px;height:28px;border-radius:50%;background:#10B981;color:#fff;border:2px solid #fff;display:flex;align-items:center;justify-content:center;font-size:9px;font-weight:800;margin-left:-6px;">B</div>
            </div>
            <span style="font-size:11px;font-weight:700;color:#0F172A;">2 Existing Tenants</span>
          </div>
          <span style="font-size:10px;color:#2563EB;font-weight:800;cursor:pointer;">View Profiles</span>
        </div>

        <button style="width:100%;padding:11px;background:#2563EB;color:#fff;border:none;border-radius:12px;font-size:12px;font-weight:800;cursor:pointer;">
          Direct Chat with Host 💬
        </button>
      </div>`;

    case 5: // Model F: Titanium Obsidian VIP Tenant Pass
      return `<div style="width:100%;max-width:340px;background:linear-gradient(135deg, #18181B 0%, #09090B 100%);border:1px solid #3F3F46;border-radius:24px;padding:22px;color:#fff;box-shadow:0 16px 36px rgba(0,0,0,0.6);position:relative;overflow:hidden;">
        <div style="position:absolute;top:0;right:0;width:100px;height:100px;background:radial-gradient(circle, rgba(245,158,11,0.2) 0%, transparent 70%);"></div>
        <div style="display:flex;justify-content:space-between;align-items:center;">
          <span style="font-size:12px;font-weight:900;letter-spacing:0.1em;color:#F59E0B;">RENTENPE BLACK</span>
          <span style="font-family:monospace;font-size:10px;color:#71717A;">VIP #00492</span>
        </div>
        <div style="margin:20px 0 14px 0;">
          <div style="font-size:18px;font-weight:900;color:#FFFFFF;letter-spacing:0.04em;">Joshua Kanatt</div>
          <div style="font-size:11px;color:#A1A1AA;margin-top:2px;">Zero Security Deposit Pass Holder</div>
        </div>
        <div style="display:flex;justify-content:space-between;font-size:10px;color:#71717A;border-top:1px solid #27272A;padding-top:10px;">
          <span>VALID THRU: 12/28</span>
          <span>TIER: DIAMOND</span>
        </div>
      </div>`;

    case 6: // Model G: Interactive Amenity Bento Grid
      return `<div style="width:100%;max-width:340px;display:flex;flex-direction:column;gap:10px;">
        <div style="font-size:12px;font-weight:800;color:#0F172A;">Property Amenities</div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;">
          <div style="padding:12px;background:#fff;border:1px solid #E2E8F0;border-radius:14px;display:flex;align-items:center;gap:10px;">
            <span style="font-size:18px;">📶</span>
            <div><div style="font-size:11px;font-weight:800;color:#0F172A;">1Gbps Fiber</div><div style="font-size:9px;color:#64748B;">Included in rent</div></div>
          </div>
          <div style="padding:12px;background:#fff;border:1px solid #E2E8F0;border-radius:14px;display:flex;align-items:center;gap:10px;">
            <span style="font-size:18px;">🚗</span>
            <div><div style="font-size:11px;font-weight:800;color:#0F172A;">Covered Parking</div><div style="font-size:9px;color:#64748B;">Dedicated slot</div></div>
          </div>
          <div style="padding:12px;background:#fff;border:1px solid #E2E8F0;border-radius:14px;display:flex;align-items:center;gap:10px;">
            <span style="font-size:18px;">⚡</span>
            <div><div style="font-size:11px;font-weight:800;color:#0F172A;">Power Backup</div><div style="font-size:9px;color:#64748B;">24/7 DG support</div></div>
          </div>
          <div style="padding:12px;background:#fff;border:1px solid #E2E8F0;border-radius:14px;display:flex;align-items:center;gap:10px;">
            <span style="font-size:18px;">🏊</span>
            <div><div style="font-size:11px;font-weight:800;color:#0F172A;">Club Access</div><div style="font-size:9px;color:#64748B;">Gym & Pool</div></div>
          </div>
        </div>
      </div>`;

    case 7: // Model H: Lease Summary Card with e-Stamp Seal
      return `<div style="width:100%;max-width:340px;background:#ffffff;border:1px solid #E2E8F0;border-radius:22px;padding:20px;box-shadow:0 8px 24px rgba(15,23,42,0.05);display:flex;flex-direction:column;gap:12px;">
        <div style="display:flex;justify-content:space-between;align-items:center;">
          <div style="font-size:13px;font-weight:800;color:#0F172A;">Active Lease Summary</div>
          <span style="padding:2px 8px;background:#ECFDF5;color:#059669;border-radius:6px;font-size:10px;font-weight:800;">VERIFIED E-STAMP</span>
        </div>
        <div style="display:flex;flex-direction:column;gap:6px;font-size:11px;">
          <div style="display:flex;justify-content:space-between;"><span style="color:#64748B;">Lock-in Period:</span><strong style="color:#0F172A;">6 Months (Oct 2026)</strong></div>
          <div style="display:flex;justify-content:space-between;"><span style="color:#64748B;">Notice Period:</span><strong style="color:#0F172A;">30 Calendar Days</strong></div>
          <div style="display:flex;justify-content:space-between;"><span style="color:#64748B;">Escrow Protection:</span><strong style="color:#10B981;">100% Guaranteed</strong></div>
        </div>
        <button style="width:100%;padding:10px;background:#F1F5F9;color:#0F172A;border:none;border-radius:10px;font-size:11px;font-weight:800;cursor:pointer;">
          View Full Legal Agreement 📄
        </button>
      </div>`;

    case 8: // Model I: Property Maintenance Service Request Card
      return `<div style="width:100%;max-width:340px;background:#ffffff;border:1px solid #E2E8F0;border-radius:22px;padding:18px;box-shadow:0 8px 20px rgba(0,0,0,0.05);display:flex;flex-direction:column;gap:12px;">
        <div style="display:flex;justify-content:space-between;align-items:center;">
          <span style="font-size:13px;font-weight:800;color:#0F172A;">Plumbing Request #849</span>
          <span style="padding:3px 8px;background:#EFF6FF;color:#2563EB;border-radius:6px;font-size:10px;font-weight:800;">EN ROUTE (14m)</span>
        </div>
        <div style="font-size:11px;color:#64748B;">Assigned Technician: Suresh P. (Urban Company Certified)</div>
        <button style="width:100%;padding:9px;background:#0F172A;color:#fff;border:none;border-radius:10px;font-size:11px;font-weight:700;cursor:pointer;">
          Track Real-Time Location 📍
        </button>
      </div>`;

    case 9: // Model J: Interactive Floor Plan Specification Card
      return `<div style="width:100%;max-width:340px;background:#ffffff;border:1px solid #E2E8F0;border-radius:22px;padding:20px;box-shadow:0 8px 20px rgba(0,0,0,0.04);display:flex;flex-direction:column;gap:12px;">
        <div style="display:flex;justify-content:space-between;align-items:center;">
          <span style="font-size:13px;font-weight:800;color:#0F172A;">3 BHK Architecture Layout</span>
          <span style="font-size:11px;font-weight:700;color:#64748B;">1,450 sqft</span>
        </div>
        <div style="background:#F8FAFC;border:1.5px dashed #CBD5E1;border-radius:14px;padding:16px;text-align:center;">
          <div style="font-size:24px;margin-bottom:4px;">📐</div>
          <div style="font-size:12px;font-weight:700;color:#0F172A;">Master Bedroom (14' x 16') • East Balcony</div>
          <div style="font-size:10px;color:#64748B;margin-top:2px;">Vastu Compliant Natural Sunlight</div>
        </div>
        <button style="width:100%;padding:10px;background:#2563EB;color:#fff;border:none;border-radius:10px;font-size:11px;font-weight:800;cursor:pointer;">
          Launch 3D Virtual Walkthrough 🕶
        </button>
      </div>`;

    case 10: // Model K: Tesla / Apple Minimalist Porcelain Digital Key Card (Light Theme)
      return `<div style="width:100%;max-width:340px;background:#FFFFFF;border:1px solid #E2E8F0;border-radius:26px;padding:22px;box-shadow:0 12px 32px rgba(15,23,42,0.04);display:flex;flex-direction:column;gap:16px;">
        <div style="display:flex;align-items:center;justify-content:space-between;">
          <div>
            <div style="font-size:14px;font-weight:800;color:#0F172A;">Penthouse 402 Key</div>
            <div style="font-size:10px;color:#64748B;">Prestige Falcon City • NFC Ready</div>
          </div>
          <span style="padding:4px 10px;background:#ECFDF5;color:#059669;border-radius:20px;font-size:10px;font-weight:800;">⚡ 98% BATTERY</span>
        </div>

        <div style="background:#F8FAFC;border:1px solid #F1F5F9;border-radius:20px;padding:24px 16px;display:flex;flex-direction:column;align-items:center;gap:12px;text-align:center;">
          <div style="width:68px;height:68px;border-radius:50%;background:#EFF6FF;border:2px solid #DBEAFE;display:flex;align-items:center;justify-content:center;font-size:28px;box-shadow:0 8px 20px rgba(59,130,246,0.12);">
            🔑
          </div>
          <div>
            <div style="font-size:13px;font-weight:800;color:#0F172A;">Digital Smart Lock Active</div>
            <div style="font-size:10px;color:#64748B;margin-top:2px;">Hold device within 2 inches of door pad</div>
          </div>
        </div>

        <!-- Tactile Slide-to-Unlock Rail -->
        <div style="background:#F1F5F9;border-radius:99px;padding:4px;display:flex;align-items:center;position:relative;">
          <div style="width:40px;height:40px;border-radius:50%;background:#0F172A;color:#FFFFFF;display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:800;box-shadow:0 4px 10px rgba(15,23,42,0.25);cursor:pointer;">
            ➔
          </div>
          <span style="position:absolute;left:0;right:0;text-align:center;font-size:11px;font-weight:700;color:#64748B;pointer-events:none;">
            Slide to Unlock Door ≫
          </span>
        </div>
      </div>`;

    case 11: // Model L: CRED Monex Obsidian Metal Black VIP Titanium Pass (Dark Theme)
    default:
      return `<div style="width:100%;max-width:340px;background:linear-gradient(135deg, #18181B 0%, #09090B 100%);border:1px solid rgba(204,255,0,0.3);border-radius:26px;padding:22px;box-shadow:0 24px 48px rgba(0,0,0,0.8),inset 0 1px 0 rgba(204,255,0,0.2);color:#FFFFFF;position:relative;overflow:hidden;display:flex;flex-direction:column;gap:16px;">
        <div style="position:absolute;top:0;right:0;width:120px;height:120px;background:radial-gradient(circle, rgba(204,255,0,0.15) 0%, transparent 70%);border-radius:50%;pointer-events:none;"></div>
        
        <div style="display:flex;align-items:center;justify-content:space-between;">
          <span style="font-size:13px;font-weight:900;letter-spacing:0.12em;color:#FFFFFF;">RENTENPE TITANIUM</span>
          <span style="padding:3px 8px;background:rgba(204,255,0,0.12);border:1px solid rgba(204,255,0,0.3);color:#CCFF00;border-radius:6px;font-size:9px;font-weight:900;letter-spacing:0.08em;">VIP NO. 8492</span>
        </div>

        <!-- Acid Lime Smart Chip -->
        <div style="display:flex;align-items:center;justify-content:space-between;padding-top:4px;">
          <div style="width:42px;height:30px;border-radius:6px;background:linear-gradient(135deg, #CCFF00 0%, #84CC16 100%);box-shadow:0 0 12px rgba(204,255,0,0.3);position:relative;">
            <div style="position:absolute;top:4px;bottom:4px;left:12px;right:12px;border:1px solid rgba(0,0,0,0.3);border-radius:2px;"></div>
          </div>
          <span style="font-size:18px;">📶</span>
        </div>

        <div>
          <div style="font-family:monospace;font-size:16px;font-weight:800;letter-spacing:0.12em;color:#FFFFFF;text-shadow:0 2px 4px rgba(0,0,0,0.5);">
            8492 •••• •••• 1004
          </div>
          <div style="display:flex;justify-content:space-between;align-items:center;margin-top:10px;font-size:10px;color:#A1A1AA;">
            <div><span style="color:#71717A;">MEMBER</span><br><strong style="color:#FFFFFF;font-size:11px;">JOSHUA KANATT</strong></div>
            <div><span style="color:#71717A;">VALID THRU</span><br><strong style="color:#CCFF00;font-size:11px;">08/29</strong></div>
          </div>
        </div>

        <button style="width:100%;padding:11px;background:#18181B;border:1px solid #27272A;color:#CCFF00;border-radius:12px;font-size:11px;font-weight:800;display:flex;align-items:center;justify-content:center;gap:6px;cursor:pointer;transition:all 0.15s;" onmouseover="this.style.borderColor='#CCFF00';this.style.boxShadow='0 0 14px rgba(204,255,0,0.2)'" onmouseout="this.style.borderColor='#27272A';this.style.boxShadow='none'">
          <span>⚡</span> Haptic Biometric Tap to Verify
        </button>
      </div>`;
  }
}

module.exports = {
  renderAuthAndPropertyVariants
};
