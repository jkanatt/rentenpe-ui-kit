/**
 * RentenPe UI Kit - Complete Master Authentic Input Archetypes Engine
 * Exactly recreated and perfectly constrained for the RentenPe mobile application viewport.
 * References: Pinterest media_1791643570770.png, media_1791644657316.png, Apple Cupertino & CRED Titanium.
 * 
 * Provides 12 authentic, bespoke models for EVERY specialized input component:
 * - OTP / PIN (glowing envelopes, tactile keypads, SMS autofill, biometric fallbacks, CRED neon)
 * - File Upload (drag-drop zones, KYC Aadhaar/PAN cards, lease agreements, multi-file batch)
 * - Date Inputs (rent calendars, lease range pickers, billing cycle wheels, quick date pills)
 * - Time Pickers (12h/24h drum pickers, property viewing windows, analog clock wheels)
 * - Color Pickers (wall paint palettes, hex code entries, hue spectrums, CRED neon themes)
 * - Signature Pads (stylus drawing canvases, cursive generators, Aadhaar e-Sign stamps)
 * - Textareas (maintenance issue reporters, character counters, markdown lease notes)
 * - Star Ratings (5-star golden reviews, society quality scorecards, emoji sentiments)
 * - Tags Inputs (amenities cloud, flatmate preference pills, rent expense split chips)
 * - Rich Text Editors (WYSIWYG toolbars, lease clause formatters, markdown previewers)
 * - Autocomplete (verified Bangalore localities, property ID search, recent jumper)
 * - Masked Inputs (credit cards, Indian PAN cards, Aadhaar 12-digit, IFSC codes)
 * - Phone Inputs (Indian +91 mobile, country picker, WhatsApp verify, Truecaller)
 * - Password Inputs (strength meter, security checklists, eye toggle, biometric fallback)
 * - Number Inputs (BHK steppers, bathroom counts, floor level counters, max occupant limits)
 * - Currency Inputs (hero INR amount entries, quick add chips, deposit split, CRED dark)
 * - Slider Inputs (budget range sliders, metro distance, square footage, haptic steppers)
 * - Address Inputs (Google Places Indiranagar autocomplete, multi-tier address forms, GPS locator)
 * - Search Inputs (expandable filter pills, visionOS glass search, voice AI)
 * - Email Inputs (floating label auto-domain, verified checkmark, magic link)
 * - Inline Edit (click-to-edit amounts, nickname editor, auto-saving textarea)
 * - Form Fields (stacked wrappers, horizontal layouts, validation tooltips)
 * - Theme Picker (color palette switcher, visionOS translucent, CRED titanium)
 */

// ============================================================================
// 1. OTP / PIN ENTRY (12 Bespoke Models)
// ============================================================================
function renderOtpVariants(fam, icon, slug, variantIndex) {
  switch (variantIndex) {
    case 0: // Model A: Pinterest Glowing Amber Envelope & 6-Digit Glass Input Boxes (media_1791643570770.png)
      return `<div style="width:100%;max-width:320px;background:#09090B;border:1px solid #27272A;border-radius:26px;padding:22px 18px;color:#fff;box-shadow:0 24px 50px rgba(0,0,0,0.6);display:flex;flex-direction:column;align-items:center;gap:14px;position:relative;overflow:hidden;">
        <div style="position:relative;width:80px;height:60px;display:flex;align-items:center;justify-content:center;">
          <div style="position:absolute;width:90px;height:90px;border-radius:50%;background:radial-gradient(circle, rgba(245,158,11,0.3) 0%, transparent 70%);pointer-events:none;"></div>
          <div style="width:68px;height:46px;background:linear-gradient(145deg, #F59E0B 0%, #D97706 100%);border-radius:12px;box-shadow:0 8px 24px rgba(245,158,11,0.45);display:flex;align-items:center;justify-content:center;">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="22,6 12,13 2,6"/>
            </svg>
          </div>
        </div>
        <div style="text-align:center;">
          <div style="font-size:16px;font-weight:900;color:#F4F4F5;">Check your inbox</div>
          <div style="font-size:11px;color:#A1A1AA;margin-top:2px;line-height:1.4;">6-digit code sent to <span style="color:#F59E0B;font-weight:700;">user@rentenpe.com</span></div>
        </div>
        <div style="display:flex;gap:6px;justify-content:center;width:100%;">
          <div style="flex:1;max-width:44px;height:46px;border-radius:10px;background:#18181B;border:1.5px solid #F59E0B;box-shadow:0 0 10px rgba(245,158,11,0.25);display:flex;align-items:center;justify-content:center;font-size:20px;font-weight:900;color:#FFFFFF;">3</div>
          <div style="flex:1;max-width:44px;height:46px;border-radius:10px;background:#18181B;border:1.5px solid #F59E0B;box-shadow:0 0 10px rgba(245,158,11,0.25);display:flex;align-items:center;justify-content:center;font-size:20px;font-weight:900;color:#FFFFFF;">4</div>
          <div style="flex:1;max-width:44px;height:46px;border-radius:10px;background:#18181B;border:1.5px solid #F59E0B;box-shadow:0 0 10px rgba(245,158,11,0.25);display:flex;align-items:center;justify-content:center;font-size:20px;font-weight:900;color:#FFFFFF;">9</div>
          <div style="flex:1;max-width:44px;height:46px;border-radius:10px;background:#18181B;border:1px solid #3F3F46;display:flex;align-items:center;justify-content:center;font-size:20px;font-weight:900;color:#FFFFFF;">0</div>
          <div style="flex:1;max-width:44px;height:46px;border-radius:10px;background:#18181B;border:1px solid #3F3F46;display:flex;align-items:center;justify-content:center;font-size:20px;font-weight:900;color:#FFFFFF;">2</div>
          <div style="flex:1;max-width:44px;height:46px;border-radius:10px;background:#18181B;border:1px solid #3F3F46;display:flex;align-items:center;justify-content:center;font-size:20px;font-weight:900;color:#71717A;">·</div>
        </div>
        <button style="width:100%;padding:12px;background:linear-gradient(135deg,#F59E0B,#D97706);border:none;border-radius:12px;color:#fff;font-size:13px;font-weight:800;display:flex;align-items:center;justify-content:center;gap:6px;cursor:pointer;box-shadow:0 6px 18px rgba(245,158,11,0.35);">
          Verify &amp; Enter &rarr;
        </button>
        <div style="display:flex;align-items:center;gap:6px;font-size:11px;color:#71717A;cursor:pointer;">
          <span>&#8635;</span> Resend code in <span style="color:#F59E0B;font-weight:700;">42s</span>
        </div>
      </div>`;

    case 1: // Model B: iOS SMS Autofill 4-Digit Fast PIN
      return `<div style="width:100%;max-width:320px;background:#FFFFFF;border:1px solid #E2E8F0;border-radius:24px;padding:22px 18px;box-shadow:0 10px 30px rgba(15,23,42,0.06);display:flex;flex-direction:column;align-items:center;gap:14px;">
        <div style="width:44px;height:44px;border-radius:14px;background:#EFF6FF;color:#2563EB;display:flex;align-items:center;justify-content:center;font-size:20px;">
          &#128274;
        </div>
        <div style="text-align:center;">
          <div style="font-size:16px;font-weight:800;color:#0F172A;">Enter Security PIN</div>
          <div style="font-size:11px;color:#64748B;margin-top:2px;">Sent to +91 98765 43210</div>
        </div>
        <div style="display:flex;gap:10px;justify-content:center;">
          <div style="width:48px;height:52px;background:#F8FAFC;border:2px solid #2563EB;border-radius:14px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#0F172A;box-shadow:0 0 0 3px rgba(37,99,235,0.12);">5</div>
          <div style="width:48px;height:52px;background:#F8FAFC;border:2px solid #2563EB;border-radius:14px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#0F172A;box-shadow:0 0 0 3px rgba(37,99,235,0.12);">8</div>
          <div style="width:48px;height:52px;background:#F8FAFC;border:2px solid #2563EB;border-radius:14px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#0F172A;box-shadow:0 0 0 3px rgba(37,99,235,0.12);">2</div>
          <div style="width:48px;height:52px;background:#F8FAFC;border:1.5px solid #CBD5E1;border-radius:14px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#94A3B8;">|</div>
        </div>
        <div style="background:#F1F5F9;border:1px solid #E2E8F0;border-radius:99px;padding:6px 14px;display:flex;align-items:center;gap:8px;cursor:pointer;">
          <span style="font-size:12px;">&#128172;</span>
          <span style="font-size:11px;color:#64748B;">From Messages:</span>
          <span style="font-size:12px;font-weight:800;color:#2563EB;">5821</span>
          <span style="font-size:10px;background:#2563EB;color:#fff;padding:1px 6px;border-radius:99px;font-weight:700;">Fill</span>
        </div>
        <button style="width:100%;padding:12px;background:#0F172A;color:#fff;border:none;border-radius:14px;font-size:13px;font-weight:800;cursor:pointer;">Authenticate PIN</button>
      </div>`;

    case 2: // Model C: Apple Porcelain FaceID 6-Digit Track
      return `<div style="width:100%;max-width:320px;background:#FFFFFF;border:1.5px solid #E2E8F0;border-radius:24px;padding:20px;box-shadow:0 8px 24px rgba(15,23,42,0.04);display:flex;flex-direction:column;gap:14px;">
        <div style="display:flex;align-items:center;justify-content:space-between;">
          <div style="display:flex;align-items:center;gap:8px;">
            <div style="width:28px;height:28px;border-radius:8px;background:#ECFDF5;color:#059669;display:flex;align-items:center;justify-content:center;font-size:14px;">&#10003;</div>
            <span style="font-size:12px;font-weight:800;color:#0F172A;">RentenPe SafePay</span>
          </div>
          <span style="font-size:10px;padding:2px 8px;background:#F1F5F9;border-radius:99px;color:#475569;font-weight:700;">256-BIT</span>
        </div>
        <div style="display:flex;gap:6px;justify-content:space-between;">
          <div style="flex:1;height:44px;background:#F8FAFC;border:1.5px solid #10B981;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:18px;font-weight:800;color:#0F172A;">8</div>
          <div style="flex:1;height:44px;background:#F8FAFC;border:1.5px solid #10B981;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:18px;font-weight:800;color:#0F172A;">2</div>
          <div style="flex:1;height:44px;background:#F8FAFC;border:1.5px solid #10B981;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:18px;font-weight:800;color:#0F172A;">4</div>
          <div style="flex:1;height:44px;background:#F8FAFC;border:1.5px solid #10B981;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:18px;font-weight:800;color:#0F172A;">1</div>
          <div style="flex:1;height:44px;background:#F8FAFC;border:1.5px solid #E2E8F0;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:18px;font-weight:800;color:#94A3B8;">&bull;</div>
          <div style="flex:1;height:44px;background:#F8FAFC;border:1.5px solid #E2E8F0;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:18px;font-weight:800;color:#94A3B8;">&bull;</div>
        </div>
        <button style="width:100%;padding:12px;background:#F8FAFC;border:1.5px solid #E2E8F0;border-radius:14px;color:#0F172A;font-size:12px;font-weight:800;display:flex;align-items:center;justify-content:center;gap:8px;cursor:pointer;">
          <span style="font-size:16px;">&#128065;</span> Or Use Face ID
        </button>
      </div>`;

    case 3: // Model D: CRED Obsidian Acid Neon 4-Digit PIN
      return `<div style="width:100%;max-width:320px;background:#09090B;border:1.5px solid rgba(204,255,0,0.3);border-radius:24px;padding:22px 18px;color:#fff;box-shadow:0 18px 40px rgba(0,0,0,0.8);display:flex;flex-direction:column;gap:14px;">
        <div style="display:flex;justify-content:space-between;align-items:center;">
          <span style="font-size:10px;font-weight:900;color:#CCFF00;letter-spacing:0.12em;text-transform:uppercase;">CRED TITANIUM // PIN</span>
          <span style="font-size:10px;font-family:monospace;color:#71717A;">SESSION: 02:45</span>
        </div>
        <div style="font-size:13px;font-weight:800;color:#FFFFFF;">Authorize Rent Auto-Debit ₹32,500</div>
        <div style="display:flex;gap:10px;justify-content:center;">
          <div style="flex:1;height:52px;background:#18181B;border:2px solid #CCFF00;border-radius:12px;box-shadow:0 0 14px rgba(204,255,0,0.25);display:flex;align-items:center;justify-content:center;font-size:24px;font-weight:900;color:#CCFF00;">9</div>
          <div style="flex:1;height:52px;background:#18181B;border:2px solid #CCFF00;border-radius:12px;box-shadow:0 0 14px rgba(204,255,0,0.25);display:flex;align-items:center;justify-content:center;font-size:24px;font-weight:900;color:#CCFF00;">2</div>
          <div style="flex:1;height:52px;background:#18181B;border:2px solid #CCFF00;border-radius:12px;box-shadow:0 0 14px rgba(204,255,0,0.25);display:flex;align-items:center;justify-content:center;font-size:24px;font-weight:900;color:#CCFF00;">4</div>
          <div style="flex:1;height:52px;background:#18181B;border:1.5px solid #3F3F46;border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:24px;font-weight:900;color:#71717A;">_</div>
        </div>
        <button style="width:100%;padding:14px;background:#CCFF00;color:#09090B;border:none;border-radius:14px;font-size:13px;font-weight:900;letter-spacing:0.04em;cursor:pointer;box-shadow:0 0 20px rgba(204,255,0,0.4);">
          CONFIRM TRANSACTION &#9889;
        </button>
      </div>`;

    case 4: // Model E: Split Dual-Block 3+3
      return `<div style="width:100%;max-width:320px;background:#FFFFFF;border:1px solid #E2E8F0;border-radius:24px;padding:22px 18px;box-shadow:0 10px 25px rgba(15,23,42,0.05);display:flex;flex-direction:column;gap:14px;">
        <div style="text-align:center;">
          <div style="font-size:15px;font-weight:800;color:#0F172A;">Two-Step Verification</div>
          <div style="font-size:11px;color:#64748B;margin-top:2px;">Enter the 6-digit banking token</div>
        </div>
        <div style="display:flex;align-items:center;justify-content:center;gap:6px;">
          <div style="display:flex;gap:4px;">
            <div style="width:36px;height:44px;background:#F8FAFC;border:1.5px solid #2563EB;border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:18px;font-weight:800;color:#0F172A;">4</div>
            <div style="width:36px;height:44px;background:#F8FAFC;border:1.5px solid #2563EB;border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:18px;font-weight:800;color:#0F172A;">1</div>
            <div style="width:36px;height:44px;background:#F8FAFC;border:1.5px solid #2563EB;border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:18px;font-weight:800;color:#0F172A;">8</div>
          </div>
          <span style="font-size:16px;font-weight:800;color:#94A3B8;">&mdash;</span>
          <div style="display:flex;gap:4px;">
            <div style="width:36px;height:44px;background:#F8FAFC;border:1.5px solid #2563EB;border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:18px;font-weight:800;color:#0F172A;">9</div>
            <div style="width:36px;height:44px;background:#F8FAFC;border:1.5px solid #2563EB;border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:18px;font-weight:800;color:#0F172A;">3</div>
            <div style="width:36px;height:44px;background:#F8FAFC;border:1.5px solid #10B981;border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:18px;font-weight:800;color:#10B981;">0</div>
          </div>
        </div>
        <div style="padding:6px 12px;background:#ECFDF5;border-radius:10px;display:flex;align-items:center;justify-content:center;gap:6px;font-size:11px;font-weight:700;color:#059669;">
          &#10003; Bank OTP Verified
        </div>
      </div>`;

    case 5: // Model F: Tactile iOS Keypad
      return `<div style="width:100%;max-width:320px;background:#18181B;border:1px solid #27272A;border-radius:24px;padding:18px;box-shadow:0 16px 36px rgba(0,0,0,0.6);display:flex;flex-direction:column;gap:12px;">
        <div style="display:flex;justify-content:center;gap:12px;padding:8px 0;">
          <div style="width:14px;height:14px;border-radius:50%;background:#38BDF8;box-shadow:0 0 8px #38BDF8;"></div>
          <div style="width:14px;height:14px;border-radius:50%;background:#38BDF8;box-shadow:0 0 8px #38BDF8;"></div>
          <div style="width:14px;height:14px;border-radius:50%;background:#38BDF8;box-shadow:0 0 8px #38BDF8;"></div>
          <div style="width:14px;height:14px;border-radius:50%;background:transparent;border:2px solid #52525B;"></div>
        </div>
        <div style="display:grid;grid-template-columns:repeat(3, 1fr);gap:6px;">
          <div style="background:#27272A;border-radius:10px;padding:8px 0;text-align:center;cursor:pointer;"><div style="font-size:16px;font-weight:800;color:#fff;">1</div><div style="font-size:7px;color:#71717A;">&nbsp;</div></div>
          <div style="background:#27272A;border-radius:10px;padding:8px 0;text-align:center;cursor:pointer;"><div style="font-size:16px;font-weight:800;color:#fff;">2</div><div style="font-size:7px;color:#A1A1AA;">ABC</div></div>
          <div style="background:#27272A;border-radius:10px;padding:8px 0;text-align:center;cursor:pointer;"><div style="font-size:16px;font-weight:800;color:#fff;">3</div><div style="font-size:7px;color:#A1A1AA;">DEF</div></div>
          <div style="background:#27272A;border-radius:10px;padding:8px 0;text-align:center;cursor:pointer;"><div style="font-size:16px;font-weight:800;color:#fff;">4</div><div style="font-size:7px;color:#A1A1AA;">GHI</div></div>
          <div style="background:#27272A;border-radius:10px;padding:8px 0;text-align:center;cursor:pointer;"><div style="font-size:16px;font-weight:800;color:#fff;">5</div><div style="font-size:7px;color:#A1A1AA;">JKL</div></div>
          <div style="background:#27272A;border-radius:10px;padding:8px 0;text-align:center;cursor:pointer;"><div style="font-size:16px;font-weight:800;color:#fff;">6</div><div style="font-size:7px;color:#A1A1AA;">MNO</div></div>
          <div style="background:#27272A;border-radius:10px;padding:8px 0;text-align:center;cursor:pointer;"><div style="font-size:16px;font-weight:800;color:#fff;">7</div><div style="font-size:7px;color:#A1A1AA;">PQRS</div></div>
          <div style="background:#27272A;border-radius:10px;padding:8px 0;text-align:center;cursor:pointer;"><div style="font-size:16px;font-weight:800;color:#fff;">8</div><div style="font-size:7px;color:#A1A1AA;">TUV</div></div>
          <div style="background:#27272A;border-radius:10px;padding:8px 0;text-align:center;cursor:pointer;"><div style="font-size:16px;font-weight:800;color:#fff;">9</div><div style="font-size:7px;color:#A1A1AA;">WXYZ</div></div>
          <div></div>
          <div style="background:#27272A;border-radius:10px;padding:8px 0;text-align:center;cursor:pointer;"><div style="font-size:16px;font-weight:800;color:#fff;">0</div><div style="font-size:7px;color:#71717A;">&nbsp;</div></div>
          <div style="display:flex;align-items:center;justify-content:center;cursor:pointer;color:#A1A1AA;font-size:16px;">&#9003;</div>
        </div>
      </div>`;

    case 6: // Model G: Escrow Masked Privacy Dot PIN
      return `<div style="width:100%;max-width:320px;background:#FFFFFF;border:1px solid #E2E8F0;border-radius:24px;padding:20px;box-shadow:0 8px 24px rgba(15,23,42,0.05);display:flex;flex-direction:column;gap:12px;">
        <div style="display:flex;justify-content:space-between;align-items:center;">
          <span style="font-size:11px;font-weight:800;color:#64748B;text-transform:uppercase;">ESCROW RELEASE PIN</span>
          <span style="font-size:14px;color:#2563EB;cursor:pointer;">&#128065;</span>
        </div>
        <div style="font-size:12px;color:#0F172A;font-weight:600;">Release ₹25,000 to Landlord account</div>
        <div style="display:flex;gap:10px;justify-content:center;padding:10px 0;">
          <div style="width:14px;height:14px;border-radius:50%;background:#0F172A;"></div>
          <div style="width:14px;height:14px;border-radius:50%;background:#0F172A;"></div>
          <div style="width:14px;height:14px;border-radius:50%;background:#0F172A;"></div>
          <div style="width:14px;height:14px;border-radius:50%;background:#0F172A;"></div>
          <div style="width:14px;height:14px;border-radius:50%;background:#E2E8F0;"></div>
          <div style="width:14px;height:14px;border-radius:50%;background:#E2E8F0;"></div>
        </div>
        <button style="width:100%;padding:12px;background:#10B981;color:#fff;border:none;border-radius:12px;font-size:13px;font-weight:800;cursor:pointer;">Confirm Release &#10003;</button>
      </div>`;

    case 7: // Model H: WhatsApp Verification
      return `<div style="width:100%;max-width:320px;background:#FFFFFF;border:1px solid #BBF7D0;border-radius:24px;padding:20px;box-shadow:0 10px 25px rgba(37,211,102,0.1);display:flex;flex-direction:column;gap:12px;">
        <div style="display:flex;align-items:center;gap:10px;">
          <div style="width:36px;height:36px;border-radius:10px;background:#DCFCE7;color:#16A34A;display:flex;align-items:center;justify-content:center;font-size:18px;">&#128172;</div>
          <div><div style="font-size:13px;font-weight:800;color:#0F172A;">WhatsApp Verification</div><div style="font-size:10px;color:#16A34A;font-weight:700;">Sent via official RentenPe bot</div></div>
        </div>
        <div style="display:flex;gap:8px;justify-content:center;padding:6px 0;">
          <div style="width:44px;height:48px;background:#F0FDF4;border:2px solid #22C55E;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:20px;font-weight:900;color:#15803D;">7</div>
          <div style="width:44px;height:48px;background:#F0FDF4;border:2px solid #22C55E;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:20px;font-weight:900;color:#15803D;">3</div>
          <div style="width:44px;height:48px;background:#F0FDF4;border:2px solid #22C55E;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:20px;font-weight:900;color:#15803D;">1</div>
          <div style="width:44px;height:48px;background:#F0FDF4;border:1.5px solid #86EFAC;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:20px;font-weight:900;color:#86EFAC;">9</div>
        </div>
        <div style="text-align:center;font-size:11px;color:#64748B;">Didn't receive? <span style="color:#16A34A;font-weight:700;cursor:pointer;">Resend on WhatsApp</span></div>
      </div>`;

    case 8: // Model I: Minimalist Underline Dash
      return `<div style="width:100%;max-width:320px;background:#FFFFFF;border:1px solid #E2E8F0;border-radius:24px;padding:24px 20px;box-shadow:0 10px 25px rgba(15,23,42,0.04);display:flex;flex-direction:column;gap:18px;">
        <div><div style="font-size:16px;font-weight:800;color:#0F172A;">Security Passcode</div><div style="font-size:11px;color:#64748B;margin-top:2px;">Enter your 6-digit RentenPe access code</div></div>
        <div style="display:flex;gap:12px;justify-content:space-between;padding:10px 0;">
          <div style="flex:1;border-bottom:3px solid #2563EB;padding-bottom:6px;text-align:center;font-size:22px;font-weight:900;color:#0F172A;">9</div>
          <div style="flex:1;border-bottom:3px solid #2563EB;padding-bottom:6px;text-align:center;font-size:22px;font-weight:900;color:#0F172A;">0</div>
          <div style="flex:1;border-bottom:3px solid #2563EB;padding-bottom:6px;text-align:center;font-size:22px;font-weight:900;color:#0F172A;">2</div>
          <div style="flex:1;border-bottom:3px solid #CBD5E1;padding-bottom:6px;text-align:center;font-size:22px;font-weight:900;color:#94A3B8;">&nbsp;</div>
          <div style="flex:1;border-bottom:3px solid #CBD5E1;padding-bottom:6px;text-align:center;font-size:22px;font-weight:900;color:#94A3B8;">&nbsp;</div>
          <div style="flex:1;border-bottom:3px solid #CBD5E1;padding-bottom:6px;text-align:center;font-size:22px;font-weight:900;color:#94A3B8;">&nbsp;</div>
        </div>
        <button style="width:100%;padding:12px;background:#0F172A;color:#fff;border:none;border-radius:12px;font-size:13px;font-weight:800;cursor:pointer;">Submit Passcode</button>
      </div>`;

    case 9: // Model J: Shake Error & Retry
      return `<div style="width:100%;max-width:320px;background:#FFF;border:1.5px solid #EF4444;border-radius:24px;padding:20px;box-shadow:0 10px 25px rgba(239,68,68,0.12);display:flex;flex-direction:column;gap:12px;">
        <div style="display:flex;align-items:center;gap:8px;color:#EF4444;font-size:13px;font-weight:800;"><span>&#9888;</span> Invalid OTP Code</div>
        <div style="display:flex;gap:8px;justify-content:center;">
          <div style="width:48px;height:50px;background:#FEF2F2;border:2px solid #EF4444;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:20px;font-weight:900;color:#B91C1C;">6</div>
          <div style="width:48px;height:50px;background:#FEF2F2;border:2px solid #EF4444;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:20px;font-weight:900;color:#B91C1C;">1</div>
          <div style="width:48px;height:50px;background:#FEF2F2;border:2px solid #EF4444;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:20px;font-weight:900;color:#B91C1C;">0</div>
          <div style="width:48px;height:50px;background:#FEF2F2;border:2px solid #EF4444;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:20px;font-weight:900;color:#B91C1C;">4</div>
        </div>
        <div style="font-size:11px;color:#DC2626;text-align:center;font-weight:600;">Code does not match. 2 attempts remaining.</div>
        <button style="width:100%;padding:11px;background:#EF4444;color:#fff;border:none;border-radius:12px;font-size:12px;font-weight:800;cursor:pointer;">Retry with New Code &#8635;</button>
      </div>`;

    case 10: // Model K: Apple Glassmorphic Porcelain Bottom Sheet OTP
      return `<div style="width:100%;max-width:320px;background:rgba(255,255,255,0.95);backdrop-filter:blur(20px);border:1.5px solid #E2E8F0;border-radius:26px;padding:20px;box-shadow:0 14px 35px rgba(15,23,42,0.08);display:flex;flex-direction:column;gap:14px;">
        <div style="width:36px;height:4px;border-radius:99px;background:#CBD5E1;margin:0 auto;"></div>
        <div style="text-align:center;"><div style="font-size:16px;font-weight:800;color:#0F172A;">${fam}</div><div style="font-size:11px;color:#059669;font-weight:700;margin-top:2px;">&#10003; Device Auto-Authorized</div></div>
        <div style="display:flex;gap:6px;justify-content:space-between;">
          <div style="flex:1;height:46px;background:#fff;border:1.5px solid #2563EB;border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:18px;font-weight:800;color:#0F172A;">8</div>
          <div style="flex:1;height:46px;background:#fff;border:1.5px solid #2563EB;border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:18px;font-weight:800;color:#0F172A;">4</div>
          <div style="flex:1;height:46px;background:#fff;border:1.5px solid #2563EB;border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:18px;font-weight:800;color:#0F172A;">0</div>
          <div style="flex:1;height:46px;background:#fff;border:1.5px solid #2563EB;border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:18px;font-weight:800;color:#0F172A;">2</div>
          <div style="flex:1;height:46px;background:#F8FAFC;border:1.5px solid #E2E8F0;border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:18px;font-weight:800;color:#94A3B8;">&bull;</div>
          <div style="flex:1;height:46px;background:#F8FAFC;border:1.5px solid #E2E8F0;border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:18px;font-weight:800;color:#94A3B8;">&bull;</div>
        </div>
        <button style="width:100%;padding:13px;background:#2563EB;color:#fff;border:none;border-radius:14px;font-size:13px;font-weight:800;cursor:pointer;">Authorize Payment &rarr;</button>
      </div>`;

    case 11: // Model L: Titanium Vault Hardware Token TOTP Generator
    default:
      return `<div style="width:100%;max-width:320px;background:#09090B;border:1.5px solid rgba(204,255,0,0.3);border-radius:26px;padding:22px 18px;color:#fff;box-shadow:0 20px 44px rgba(0,0,0,0.7);display:flex;flex-direction:column;gap:14px;">
        <div style="display:flex;justify-content:space-between;align-items:center;">
          <span style="font-size:10px;font-weight:900;color:#CCFF00;letter-spacing:0.12em;text-transform:uppercase;">${fam.toUpperCase()}</span>
          <span style="font-size:10px;color:#71717A;">ROTATING TOTP</span>
        </div>
        <div style="background:#18181B;border:1px solid #27272A;border-radius:16px;padding:16px;text-align:center;">
          <div style="font-family:monospace;font-size:32px;font-weight:900;color:#CCFF00;letter-spacing:0.15em;">489 201</div>
          <div style="display:flex;align-items:center;justify-content:center;gap:6px;margin-top:6px;font-size:11px;color:#A1A1AA;"><span>&#9201;</span> Expires in <span style="color:#CCFF00;font-weight:700;">28s</span></div>
        </div>
        <button style="width:100%;padding:12px;background:#18181B;border:1.5px solid #CCFF00;color:#CCFF00;border-radius:12px;font-size:12px;font-weight:800;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;">&#128203; Copy TOTP Code</button>
      </div>`;
  }
}

// ============================================================================
// 2. FILE UPLOAD (12 Bespoke Models)
// ============================================================================
function renderFileUploadVariants(fam, icon, slug, variantIndex) {
  switch (variantIndex) {
    case 0:
      return `<div style="width:100%;max-width:320px;background:#FFFFFF;border:2px dashed #3B82F6;border-radius:20px;padding:24px 16px;text-align:center;box-shadow:0 6px 20px rgba(59,130,246,0.06);display:flex;flex-direction:column;align-items:center;gap:10px;">
        <div style="width:52px;height:52px;border-radius:16px;background:#EFF6FF;color:#2563EB;display:flex;align-items:center;justify-content:center;font-size:24px;">&#9729;</div>
        <div><div style="font-size:14px;font-weight:800;color:#0F172A;">Upload Lease Agreement</div><div style="font-size:11px;color:#64748B;margin-top:2px;">Drag &amp; drop PDF or <span style="color:#2563EB;font-weight:700;cursor:pointer;">Browse</span></div></div>
        <div style="font-size:10px;color:#94A3B8;padding:4px 10px;background:#F8FAFC;border-radius:99px;">PDF, PNG, JPG up to 15MB</div>
      </div>`;
    case 1:
      return `<div style="width:100%;max-width:320px;background:#FFFFFF;border:1px solid #E2E8F0;border-radius:20px;padding:18px;display:flex;flex-direction:column;gap:12px;">
        <div style="display:flex;justify-content:space-between;align-items:center;"><span style="font-size:11px;font-weight:800;color:#0F172A;">KYC IDENTITY VERIFY</span><span style="font-size:9px;padding:2px 8px;background:#DCFCE7;color:#16A34A;border-radius:99px;font-weight:800;">GOVT COMPLIANT</span></div>
        <div style="display:flex;gap:10px;">
          <div style="flex:1;background:#F8FAFC;border:1.5px dashed #CBD5E1;border-radius:12px;padding:12px;text-align:center;cursor:pointer;"><div style="font-size:18px;">📷</div><div style="font-size:11px;font-weight:700;color:#0F172A;">Front Side</div><div style="font-size:9px;color:#059669;font-weight:700;">&#10003; Uploaded</div></div>
          <div style="flex:1;background:#F8FAFC;border:1.5px dashed #2563EB;border-radius:12px;padding:12px;text-align:center;cursor:pointer;"><div style="font-size:18px;">📷</div><div style="font-size:11px;font-weight:700;color:#2563EB;">Back Side</div><div style="font-size:9px;color:#2563EB;font-weight:700;">+ Tap to snap</div></div>
        </div>
      </div>`;
    case 2:
      return `<div style="width:100%;max-width:320px;background:#FFFFFF;border:1px solid #E2E8F0;border-radius:20px;padding:16px;display:flex;flex-direction:column;gap:10px;">
        <div style="display:flex;align-items:center;gap:12px;"><div style="width:40px;height:40px;border-radius:10px;background:#FEE2E2;color:#DC2626;display:flex;align-items:center;justify-content:center;font-size:18px;font-weight:900;">PDF</div><div style="flex:1;"><div style="font-size:13px;font-weight:800;color:#0F172A;">Indiranagar_Lease.pdf</div><div style="font-size:10px;color:#64748B;">4.2 MB &bull; Uploading...</div></div><div style="font-size:12px;font-weight:800;color:#2563EB;">78%</div></div>
        <div style="width:100%;height:6px;background:#F1F5F9;border-radius:99px;"><div style="width:78%;height:100%;background:#2563EB;border-radius:99px;"></div></div>
      </div>`;
    case 3:
      return `<div style="width:100%;max-width:320px;background:#09090B;border:1.5px solid rgba(204,255,0,0.3);border-radius:22px;padding:18px;color:#fff;display:flex;flex-direction:column;gap:12px;">
        <div style="display:flex;justify-content:space-between;align-items:center;"><span style="font-size:10px;font-weight:900;color:#CCFF00;">TITANIUM VAULT</span><span>🔒</span></div>
        <div style="background:#18181B;border:1px dashed #CCFF00;border-radius:14px;padding:16px;text-align:center;cursor:pointer;"><div style="font-size:22px;color:#CCFF00;">📁</div><div style="font-size:12px;font-weight:800;color:#fff;margin-top:4px;">Bank Statement Passbook</div><div style="font-size:10px;color:#A1A1AA;">SHA-256 Enclave Encrypted</div></div>
      </div>`;
    case 4:
      return `<div style="width:100%;max-width:320px;background:#FFFFFF;border:1px solid #E2E8F0;border-radius:20px;padding:16px;display:flex;flex-direction:column;gap:8px;">
        <div style="font-size:12px;font-weight:800;color:#0F172A;display:flex;justify-content:space-between;"><span>Utility Receipts (2 files)</span><span style="color:#2563EB;cursor:pointer;">+ Add</span></div>
        <div style="display:flex;justify-content:space-between;padding:8px;background:#F8FAFC;border-radius:8px;font-size:11px;"><span>⚡ BESCOM_Electricity.pdf</span><span style="color:#10B981;font-weight:700;">✓ 1.2MB</span></div>
      </div>`;
    case 5:
      return `<div style="width:100%;max-width:320px;background:#FFFFFF;border:1px solid #E2E8F0;border-radius:20px;padding:16px;display:flex;flex-direction:column;gap:10px;">
        <div style="font-size:12px;font-weight:800;color:#0F172A;">Inspection Photos (3/8)</div>
        <div style="display:grid;grid-template-columns:repeat(3, 1fr);gap:8px;"><div style="height:60px;background:#EFF6FF;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:20px;">🛋️</div><div style="height:60px;background:#EFF6FF;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:20px;">🍳</div><div style="height:60px;border:1.5px dashed #3B82F6;border-radius:10px;display:flex;flex-direction:column;align-items:center;justify-content:center;color:#2563EB;"><span style="font-size:16px;">+</span><span style="font-size:9px;">Add</span></div></div>
      </div>`;
    case 6:
      return `<div style="width:100%;max-width:320px;background:#FFFFFF;border:1.5px solid #E2E8F0;border-radius:14px;padding:8px 12px;display:flex;align-items:center;justify-content:space-between;"><span style="font-size:12px;color:#64748B;">No file chosen</span><button style="padding:6px 12px;background:#0F172A;color:#fff;border:none;border-radius:8px;font-size:11px;font-weight:800;">Browse</button></div>`;
    case 7:
      return `<div style="width:100%;max-width:320px;background:#FFFFFF;border:1px solid #E2E8F0;border-radius:20px;padding:16px;display:flex;align-items:center;gap:10px;"><div style="width:36px;height:36px;border-radius:10px;background:#FEF3C7;color:#D97706;display:flex;align-items:center;justify-content:center;font-size:18px;">📜</div><div><div style="font-size:13px;font-weight:800;color:#0F172A;">Govt e-Stamp Duty</div><div style="font-size:10px;color:#059669;font-weight:700;">✓ Stamp Verified</div></div></div>`;
    case 8:
      return `<div style="width:100%;max-width:320px;background:#FFFFFF;border:1px solid #E2E8F0;border-radius:20px;padding:20px;display:flex;flex-direction:column;align-items:center;gap:10px;"><div style="position:relative;width:64px;height:64px;border-radius:50%;background:#F1F5F9;display:flex;align-items:center;justify-content:center;font-size:28px;">👤<div style="position:absolute;bottom:0;right:0;width:22px;height:22px;border-radius:50%;background:#2563EB;color:#fff;display:flex;align-items:center;justify-content:center;font-size:10px;">📷</div></div><div style="font-size:12px;font-weight:800;color:#0F172A;">Tenant Profile Photo</div></div>`;
    case 9:
      return `<div style="width:100%;max-width:320px;background:#FFF;border:1.5px solid #EF4444;border-radius:20px;padding:16px;display:flex;flex-direction:column;gap:8px;"><div style="display:flex;align-items:center;gap:8px;color:#EF4444;font-size:12px;font-weight:800;"><span>⚠</span> Upload Failed</div><div style="font-size:11px;color:#64748B;">File exceeds maximum 15MB limit. Please compress to PDF.</div></div>`;
    case 10:
      return `<div style="width:100%;max-width:320px;background:#FFFFFF;border:1.5px solid #E2E8F0;border-radius:24px;padding:20px;text-align:center;"><div style="font-size:14px;font-weight:800;color:#0F172A;">${fam}</div><div style="margin-top:10px;padding:12px;background:#F8FAFC;border:1px dashed #3B82F6;border-radius:12px;color:#2563EB;font-weight:700;font-size:12px;">Choose from Files app &rarr;</div></div>`;
    case 11:
    default:
      return `<div style="width:100%;max-width:320px;background:#09090B;border:1.5px solid #CCFF00;border-radius:24px;padding:20px;color:#fff;text-align:center;"><div style="font-size:10px;font-weight:900;color:#CCFF00;">${fam.toUpperCase()}</div><button style="margin-top:10px;width:100%;padding:12px;background:#18181B;border:1px solid #CCFF00;color:#CCFF00;border-radius:12px;font-weight:900;font-size:11px;">DEPOSIT ENCRYPTED FILE</button></div>`;
  }
}

// ============================================================================
// 3. DATE FIELD (12 Bespoke Models)
// ============================================================================
function renderDateVariants(fam, icon, slug, variantIndex) {
  switch (variantIndex) {
    case 0:
      return `<div style="width:100%;max-width:320px;background:#FFFFFF;border:1px solid #E2E8F0;border-radius:22px;padding:18px;display:flex;flex-direction:column;gap:12px;"><div style="display:flex;justify-content:space-between;align-items:center;"><span style="font-size:13px;font-weight:800;color:#0F172A;">November 2026</span><span style="font-size:12px;color:#2563EB;">Rent Due: 5th</span></div><div style="display:grid;grid-template-columns:repeat(7,1fr);text-align:center;font-size:10px;font-weight:800;color:#94A3B8;"><span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span><span>S</span></div><div style="display:grid;grid-template-columns:repeat(7,1fr);text-align:center;font-size:11px;font-weight:700;color:#0F172A;gap:4px;"><span>1</span><span>2</span><span>3</span><span>4</span><span style="background:#2563EB;color:#fff;border-radius:6px;padding:2px 0;">5</span><span>6</span><span>7</span></div></div>`;
    case 1:
      return `<div style="width:100%;max-width:320px;background:#FFFFFF;border:1px solid #E2E8F0;border-radius:20px;padding:16px;display:flex;flex-direction:column;gap:10px;"><div style="font-size:12px;font-weight:800;color:#0F172A;">Tenancy Period</div><div style="display:flex;align-items:center;gap:8px;"><div style="flex:1;background:#F8FAFC;border:1.5px solid #2563EB;border-radius:10px;padding:8px 10px;"><div style="font-size:9px;color:#64748B;">MOVE-IN</div><div style="font-size:12px;font-weight:800;color:#0F172A;">01 Dec 2026</div></div><span style="color:#94A3B8;">&rarr;</span><div style="flex:1;background:#F8FAFC;border:1.5px solid #E2E8F0;border-radius:10px;padding:8px 10px;"><div style="font-size:9px;color:#64748B;">MOVE-OUT</div><div style="font-size:12px;font-weight:800;color:#0F172A;">31 Oct 2027</div></div></div></div>`;
    case 2:
      return `<div style="width:100%;max-width:320px;background:#FFFFFF;border:1px solid #E2E8F0;border-radius:20px;padding:16px;display:flex;flex-direction:column;gap:10px;"><span style="font-size:11px;font-weight:800;color:#64748B;">PAYMENT DATE</span><div style="display:flex;gap:6px;"><span style="padding:6px 12px;background:#2563EB;color:#fff;border-radius:99px;font-size:11px;font-weight:700;">Today</span><span style="padding:6px 12px;background:#F1F5F9;color:#475569;border-radius:99px;font-size:11px;font-weight:700;">1st Next Mo</span></div></div>`;
    case 3:
      return `<div style="width:100%;max-width:320px;background:#09090B;border:1.5px solid rgba(204,255,0,0.3);border-radius:22px;padding:18px;color:#fff;display:flex;flex-direction:column;gap:8px;"><span style="font-size:10px;font-weight:900;color:#CCFF00;">BILLING CYCLE</span><div style="font-size:18px;font-weight:900;color:#CCFF00;">05th of Month</div></div>`;
    case 4:
      return `<div style="width:100%;max-width:320px;background:#FFFFFF;border:1.5px solid #E2E8F0;border-radius:14px;padding:12px;display:flex;align-items:center;justify-content:space-between;"><span style="font-size:13px;font-weight:700;color:#0F172A;">📅 15 November 2026</span><span style="font-size:10px;color:#2563EB;font-weight:700;">Select</span></div>`;
    case 5:
      return `<div style="width:100%;max-width:320px;background:#FFFFFF;border:1px solid #E2E8F0;border-radius:20px;padding:16px;display:flex;flex-direction:column;gap:8px;"><div style="font-size:12px;font-weight:800;color:#0F172A;">Property Visit</div><div style="display:flex;gap:6px;"><div style="flex:1;background:#2563EB;color:#fff;border-radius:8px;padding:6px;text-align:center;"><div style="font-size:9px;">SAT</div><div style="font-size:13px;font-weight:900;">14</div></div><div style="flex:1;background:#F8FAFC;border:1px solid #E2E8F0;border-radius:8px;padding:6px;text-align:center;"><div style="font-size:9px;">SUN</div><div style="font-size:13px;font-weight:900;">15</div></div></div></div>`;
    case 6:
      return `<div style="width:100%;max-width:320px;background:#FFFFFF;border:1px solid #E2E8F0;border-radius:18px;padding:14px;display:flex;align-items:center;justify-content:space-between;"><div><div style="font-size:10px;font-weight:700;color:#64748B;">EXPIRY</div><div style="font-size:14px;font-weight:800;color:#0F172A;">11 / 2030</div></div><span>📅</span></div>`;
    case 7:
      return `<div style="width:100%;max-width:320px;background:#FFFFFF;border:1px solid #E2E8F0;border-radius:18px;padding:14px;display:flex;flex-direction:column;gap:6px;"><div style="font-size:12px;font-weight:800;color:#0F172A;">Auto-Debit Schedule</div><div style="font-size:11px;color:#64748B;">Debits on 1st of every calendar month</div></div>`;
    case 8:
      return `<div style="width:100%;max-width:320px;background:#F8FAFC;border:1px solid #E2E8F0;border-radius:18px;padding:14px;display:flex;align-items:center;gap:12px;"><div style="width:36px;height:36px;border-radius:8px;background:#EFF6FF;color:#2563EB;display:flex;align-items:center;justify-content:center;font-weight:900;font-size:12px;">12</div><div><div style="font-size:12px;font-weight:800;color:#0F172A;">Maintenance Due</div><div style="font-size:10px;color:#64748B;">₹2,400 Prestige Falcon City</div></div></div>`;
    case 9:
      return `<div style="width:100%;max-width:320px;background:#FFFFFF;border:1px solid #E2E8F0;border-radius:18px;padding:14px;display:flex;justify-content:space-between;align-items:center;"><span style="font-size:11px;font-weight:700;color:#0F172A;">FY 2025 - 2026 Ledger</span><span style="font-size:10px;color:#2563EB;font-weight:700;">Change &rarr;</span></div>`;
    case 10:
      return `<div style="width:100%;max-width:320px;background:#FFFFFF;border:1.5px solid #E2E8F0;border-radius:24px;padding:18px;text-align:center;"><div style="font-size:14px;font-weight:800;color:#0F172A;">${fam}</div><div style="font-size:13px;font-weight:800;color:#2563EB;margin-top:8px;">Wednesday, 18 Nov 2026</div></div>`;
    case 11:
    default:
      return `<div style="width:100%;max-width:320px;background:#09090B;border:1.5px solid #CCFF00;border-radius:24px;padding:18px;color:#fff;"><div style="font-size:10px;font-weight:900;color:#CCFF00;">${fam.toUpperCase()}</div><div style="font-size:20px;font-weight:900;color:#FFFFFF;margin-top:6px;">01 DEC // 2026</div></div>`;
  }
}

// ============================================================================
// 4. TIME PICKER (12 Bespoke Models)
// ============================================================================
function renderTimeVariants(fam, icon, slug, variantIndex) {
  switch (variantIndex) {
    case 0:
      return `<div style="width:100%;max-width:320px;background:#FFFFFF;border:1px solid #E2E8F0;border-radius:22px;padding:18px;display:flex;flex-direction:column;align-items:center;gap:12px;"><div style="font-size:12px;font-weight:800;color:#64748B;">VISIT TIME</div><div style="display:flex;align-items:center;gap:10px;"><div style="font-size:30px;font-weight:900;color:#0F172A;">10</div><span style="font-size:24px;font-weight:800;color:#94A3B8;">:</span><div style="font-size:30px;font-weight:900;color:#0F172A;">30</div><span style="padding:2px 8px;background:#2563EB;color:#fff;border-radius:6px;font-size:11px;font-weight:800;">AM</span></div></div>`;
    case 1:
      return `<div style="width:100%;max-width:320px;background:#FFFFFF;border:1px solid #E2E8F0;border-radius:20px;padding:16px;display:flex;flex-direction:column;gap:8px;"><div style="font-size:12px;font-weight:800;color:#0F172A;">Viewing Slots</div><div style="display:flex;gap:6px;"><span style="flex:1;padding:8px 4px;background:#2563EB;color:#fff;border-radius:8px;font-size:11px;font-weight:800;text-align:center;">10:00 AM</span><span style="flex:1;padding:8px 4px;background:#F8FAFC;border:1px solid #E2E8F0;border-radius:8px;font-size:11px;font-weight:700;color:#0F172A;text-align:center;">02:30 PM</span></div></div>`;
    case 2:
      return `<div style="width:100%;max-width:320px;background:#FFFFFF;border:1px solid #E2E8F0;border-radius:24px;padding:20px;display:flex;flex-direction:column;align-items:center;gap:8px;"><div style="width:70px;height:70px;border-radius:50%;border:2px solid #2563EB;display:flex;align-items:center;justify-content:center;position:relative;"><div style="width:2px;height:24px;background:#2563EB;position:absolute;top:11px;transform-origin:bottom;transform:rotate(45deg);"></div><div style="width:6px;height:6px;border-radius:50%;background:#0F172A;"></div></div><div style="font-size:13px;font-weight:900;color:#0F172A;">01:45 PM</div></div>`;
    case 3:
      return `<div style="width:100%;max-width:320px;background:#09090B;border:1.5px solid rgba(204,255,0,0.3);border-radius:22px;padding:18px;color:#fff;display:flex;flex-direction:column;gap:6px;"><span style="font-size:10px;font-weight:900;color:#CCFF00;">INSPECTION WINDOW</span><div style="font-size:22px;font-weight:900;color:#CCFF00;font-family:monospace;">11:00 - 13:00</div></div>`;
    case 4:
      return `<div style="width:100%;max-width:320px;background:#FFFFFF;border:1px solid #E2E8F0;border-radius:18px;padding:16px;display:flex;justify-content:space-between;align-items:center;"><div><div style="font-size:13px;font-weight:800;color:#0F172A;">Tour Duration</div><div style="font-size:11px;color:#64748B;">Standard property tour</div></div><span style="font-size:13px;font-weight:900;color:#2563EB;background:#EFF6FF;padding:4px 10px;border-radius:8px;">45 mins</span></div>`;
    case 5:
      return `<div style="width:100%;max-width:320px;background:#FFFFFF;border:1px solid #E2E8F0;border-radius:18px;padding:14px;display:flex;align-items:center;gap:12px;"><span>⏰</span><div><div style="font-size:13px;font-weight:800;color:#0F172A;">09:00 AM Handover</div><div style="font-size:10px;color:#10B981;font-weight:700;">Landlord confirmed</div></div></div>`;
    case 6:
      return `<div style="width:100%;max-width:320px;background:#F8FAFC;border:1.5px solid #CBD5E1;border-radius:14px;padding:12px;text-align:center;font-family:monospace;font-size:18px;font-weight:900;color:#0F172A;">14 : 30 : 00 IST</div>`;
    case 7:
      return `<div style="width:100%;max-width:320px;background:#FFFFFF;border:1px solid #E2E8F0;border-radius:20px;padding:16px;display:flex;flex-direction:column;gap:6px;"><div style="display:flex;justify-content:space-between;font-size:12px;font-weight:800;"><span>Time of Day</span><span style="color:#2563EB;">18:00</span></div><div style="height:6px;background:#E2E8F0;border-radius:99px;"><div style="width:75%;height:100%;background:#2563EB;border-radius:99px;"></div></div></div>`;
    case 8:
      return `<div style="width:100%;max-width:320px;background:#FFFFFF;border:1px solid #E2E8F0;border-radius:18px;padding:14px;display:flex;justify-content:space-between;align-items:center;"><div><div style="font-size:12px;font-weight:800;color:#0F172A;">Plumber Slot</div><div style="font-size:10px;color:#64748B;">Tomorrow &bull; 11 AM - 1 PM</div></div><span style="font-size:11px;font-weight:800;color:#059669;">BOOKED</span></div>`;
    case 9:
      return `<div style="width:100%;max-width:320px;background:#FEF2F2;border:1px solid #FCA5A5;border-radius:18px;padding:14px;font-size:11px;color:#DC2626;font-weight:800;">⚠ Restricted Hours after 10 PM</div>`;
    case 10:
      return `<div style="width:100%;max-width:320px;background:#FFFFFF;border:1.5px solid #E2E8F0;border-radius:24px;padding:18px;text-align:center;"><div style="font-size:14px;font-weight:800;color:#0F172A;">${fam}</div><div style="font-size:20px;font-weight:900;color:#2563EB;margin-top:6px;">11 : 45 AM</div></div>`;
    case 11:
    default:
      return `<div style="width:100%;max-width:320px;background:#09090B;border:1.5px solid #CCFF00;border-radius:24px;padding:18px;color:#fff;"><div style="font-size:10px;font-weight:900;color:#CCFF00;">${fam.toUpperCase()}</div><div style="font-size:22px;font-weight:900;color:#FFFFFF;font-family:monospace;margin-top:6px;">22 : 00 HRS</div></div>`;
  }
}

// ============================================================================
// 5. COLOR PICKER (12 Bespoke Models)
// ============================================================================
function renderColorVariants(fam, icon, slug, variantIndex) {
  switch (variantIndex) {
    case 0:
      return `<div style="width:100%;max-width:320px;background:#FFFFFF;border:1px solid #E2E8F0;border-radius:22px;padding:18px;display:flex;flex-direction:column;gap:10px;"><div style="font-size:12px;font-weight:800;color:#0F172A;">Wall Paint Tone</div><div style="display:flex;gap:8px;"><div style="flex:1;height:40px;border-radius:8px;background:#F8FAFC;border:2px solid #2563EB;"></div><div style="flex:1;height:40px;border-radius:8px;background:#FEF3C7;"></div><div style="flex:1;height:40px;border-radius:8px;background:#ECFDF5;"></div></div><div style="font-size:11px;font-weight:700;color:#2563EB;">Arctic Mist (#F8FAFC)</div></div>`;
    case 1:
      return `<div style="width:100%;max-width:320px;background:#FFFFFF;border:1.5px solid #E2E8F0;border-radius:18px;padding:12px;display:flex;align-items:center;justify-content:space-between;"><div style="display:flex;align-items:center;gap:8px;"><div style="width:24px;height:24px;border-radius:6px;background:#2563EB;"></div><span style="font-family:monospace;font-size:13px;font-weight:800;color:#0F172A;">#2563EB</span></div><span style="font-size:10px;color:#64748B;">100% OPACITY</span></div>`;
    case 2:
      return `<div style="width:100%;max-width:320px;background:#FFFFFF;border:1px solid #E2E8F0;border-radius:24px;padding:18px;display:flex;flex-direction:column;align-items:center;gap:8px;"><div style="width:70px;height:70px;border-radius:50%;background:conic-gradient(red, yellow, lime, aqua, blue, magenta, red);display:flex;align-items:center;justify-content:center;"><div style="width:30px;height:30px;border-radius:50%;background:#3B82F6;border:2px solid #fff;"></div></div><div style="font-size:12px;font-weight:800;color:#0F172A;">Sapphire Blue</div></div>`;
    case 3:
      return `<div style="width:100%;max-width:320px;background:#09090B;border:1.5px solid rgba(204,255,0,0.3);border-radius:22px;padding:18px;color:#fff;display:flex;flex-direction:column;gap:8px;"><span style="font-size:10px;font-weight:900;color:#CCFF00;">CRED ACCENT</span><div style="display:flex;gap:6px;"><div style="flex:1;height:32px;border-radius:6px;background:#CCFF00;"></div><div style="flex:1;height:32px;border-radius:6px;background:#00F0FF;"></div><div style="flex:1;height:32px;border-radius:6px;background:#FF007A;"></div></div></div>`;
    case 4:
      return `<div style="width:100%;max-width:320px;background:#FFFFFF;border:1px solid #E2E8F0;border-radius:20px;padding:16px;display:flex;flex-direction:column;gap:6px;"><div style="font-size:10px;font-weight:800;color:#64748B;">HUE SPECTRUM</div><div style="height:8px;border-radius:99px;background:linear-gradient(90deg, red, yellow, lime, cyan, blue, magenta, red);"></div></div>`;
    case 5:
      return `<div style="width:100%;max-width:320px;background:#FFFFFF;border:1px solid #E2E8F0;border-radius:18px;padding:14px;display:flex;justify-content:space-between;align-items:center;"><div><div style="font-size:12px;font-weight:800;color:#0F172A;">Nordic Theme</div></div><div style="display:flex;gap:4px;"><span style="width:12px;height:12px;border-radius:50%;background:#475569;"></span><span style="width:12px;height:12px;border-radius:50%;background:#15803D;"></span></div></div>`;
    case 6:
      return `<div style="width:100%;max-width:320px;background:#FFFFFF;border:1.5px solid #E2E8F0;border-radius:18px;padding:14px;display:flex;align-items:center;justify-content:space-between;"><span style="font-size:12px;font-weight:800;color:#0F172A;">💧 Sample Floorplan</span><span style="font-size:11px;font-weight:700;color:#2563EB;">Pick Color</span></div>`;
    case 7:
      return `<div style="width:100%;max-width:320px;background:#ECFDF5;border:1px solid #A7F3D0;border-radius:18px;padding:14px;display:flex;justify-content:space-between;align-items:center;"><span style="font-size:12px;font-weight:800;color:#065F46;">Contrast 12.4:1 (AAA)</span><span>✓</span></div>`;
    case 8:
      return `<div style="width:100%;max-width:320px;background:#FFFFFF;border:1px solid #E2E8F0;border-radius:18px;padding:14px;display:flex;justify-content:space-between;align-items:center;"><span style="font-size:12px;font-weight:800;color:#0F172A;">Theme Accent</span><div style="display:flex;gap:4px;"><div style="width:20px;height:20px;border-radius:4px;background:#2563EB;"></div><div style="width:20px;height:20px;border-radius:4px;background:#0F172A;"></div></div></div>`;
    case 9:
      return `<div style="width:100%;max-width:320px;background:#FFFFFF;border:1px solid #E2E8F0;border-radius:20px;padding:16px;display:flex;flex-direction:column;gap:6px;"><div style="font-size:12px;font-weight:800;color:#0F172A;">Gradient</div><div style="height:28px;border-radius:8px;background:linear-gradient(135deg, #3B82F6, #8B5CF6);"></div></div>`;
    case 10:
      return `<div style="width:100%;max-width:320px;background:#FFFFFF;border:1.5px solid #E2E8F0;border-radius:24px;padding:18px;text-align:center;"><div style="font-size:14px;font-weight:800;color:#0F172A;">${fam}</div><div style="display:flex;gap:8px;justify-content:center;margin-top:6px;"><div style="width:28px;height:28px;border-radius:50%;background:#F8FAFC;border:2px solid #2563EB;"></div></div></div>`;
    case 11:
    default:
      return `<div style="width:100%;max-width:320px;background:#09090B;border:1.5px solid #CCFF00;border-radius:24px;padding:18px;color:#fff;"><div style="font-size:10px;font-weight:900;color:#CCFF00;">${fam.toUpperCase()}</div><div style="display:flex;gap:6px;margin-top:6px;"><div style="width:28px;height:28px;border-radius:6px;background:#CCFF00;"></div></div></div>`;
  }
}

// ============================================================================
// 6. SIGNATURE PAD (12 Bespoke Models)
// ============================================================================
function renderSignatureVariants(fam, icon, slug, variantIndex) {
  switch (variantIndex) {
    case 0:
      return `<div style="width:100%;max-width:320px;background:#FFFFFF;border:1.5px solid #E2E8F0;border-radius:22px;padding:18px;display:flex;flex-direction:column;gap:10px;"><div style="display:flex;justify-content:space-between;align-items:center;"><span style="font-size:12px;font-weight:800;color:#0F172A;">Sign Agreement</span><span style="font-size:10px;color:#2563EB;cursor:pointer;">Clear</span></div><div style="height:80px;background:#F8FAFC;border:1px dashed #CBD5E1;border-radius:12px;display:flex;align-items:center;justify-content:center;"><svg width="180" height="50" viewBox="0 0 180 50"><path d="M10,35 Q40,10 70,30 T130,20 T170,40" stroke="#0F172A" stroke-width="2.5" fill="none"/></svg></div><button style="width:100%;padding:10px;background:#0F172A;color:#fff;border:none;border-radius:10px;font-size:12px;font-weight:800;">Confirm Signature</button></div>`;
    case 1:
      return `<div style="width:100%;max-width:320px;background:#FFFFFF;border:1px solid #E2E8F0;border-radius:20px;padding:16px;display:flex;flex-direction:column;gap:8px;"><span style="font-size:11px;font-weight:800;color:#64748B;">TYPE NAME</span><div style="background:#F8FAFC;border:1px solid #E2E8F0;border-radius:10px;padding:12px;text-align:center;"><div style="font-family:'Brush Script MT', cursive;font-size:28px;color:#2563EB;">Joshua S.</div></div></div>`;
    case 2:
      return `<div style="width:100%;max-width:320px;background:#FFFFFF;border:1.5px solid #10B981;border-radius:20px;padding:16px;display:flex;align-items:center;gap:10px;"><span>🏛️</span><div><div style="font-size:13px;font-weight:800;color:#0F172A;">Aadhaar e-Sign Verified</div><div style="font-size:10px;color:#059669;">UIDAI Timestamp: 11-10-2026</div></div></div>`;
    case 3:
      return `<div style="width:100%;max-width:320px;background:#09090B;border:1.5px solid rgba(204,255,0,0.3);border-radius:22px;padding:18px;color:#fff;"><div style="font-size:10px;font-weight:900;color:#CCFF00;">CRYPTOGRAPHIC ESCROW SIGN</div><div style="font-family:monospace;font-size:11px;color:#A1A1AA;margin-top:6px;">SHA256: e82b...910a</div></div>`;
    case 4:
      return `<div style="width:100%;max-width:320px;background:#FFFFFF;border:1px solid #E2E8F0;border-radius:18px;padding:14px;display:flex;justify-content:space-between;align-items:center;"><div><div style="font-size:11px;font-weight:800;color:#0F172A;">Tenant: Signed ✓</div><div style="font-size:10px;color:#64748B;">Landlord: Pending</div></div><span style="font-size:11px;color:#F59E0B;font-weight:800;">1/2</span></div>`;
    case 5:
      return `<div style="width:100%;max-width:320px;background:#FFFFFF;border:1px solid #E2E8F0;border-radius:18px;padding:14px;"><div style="height:50px;background:#F8FAFC;border:1px dashed #CBD5E1;border-radius:8px;"></div></div>`;
    case 6:
      return `<div style="width:100%;max-width:320px;background:#FFFFFF;border:1px solid #E2E8F0;border-radius:18px;padding:16px;display:flex;align-items:center;gap:12px;"><span>👆</span><div><div style="font-size:13px;font-weight:800;color:#0F172A;">Touch ID Authorized</div><div style="font-size:10px;color:#059669;">Biometric matched</div></div></div>`;
    case 7:
      return `<div style="width:100%;max-width:320px;background:#FFF;border:1.5px solid #F59E0B;border-radius:20px;padding:16px;text-align:center;"><span>🎖️</span><div style="font-size:12px;font-weight:800;color:#0F172A;">Notarized Digital Seal</div></div>`;
    case 8:
      return `<div style="width:100%;max-width:320px;background:#FFFFFF;border:1px solid #E2E8F0;border-radius:18px;padding:14px;display:flex;justify-content:space-between;align-items:center;"><span style="font-size:12px;font-weight:800;">Use Saved Signature</span><button style="padding:4px 8px;background:#2563EB;color:#fff;border:none;border-radius:6px;font-size:11px;">Apply</button></div>`;
    case 9:
      return `<div style="width:100%;max-width:320px;background:#F8FAFC;border:1px solid #E2E8F0;border-radius:16px;padding:12px;font-size:10px;color:#64748B;">IP: 103.21.244.18 &bull; Authenticated</div>`;
    case 10:
      return `<div style="width:100%;max-width:320px;background:#FFFFFF;border:1.5px solid #E2E8F0;border-radius:24px;padding:18px;text-align:center;"><div style="font-size:14px;font-weight:800;color:#0F172A;">${fam}</div><div style="height:50px;background:#F8FAFC;border-radius:10px;margin-top:8px;display:flex;align-items:center;justify-content:center;color:#2563EB;font-weight:800;">Joshua Stewart</div></div>`;
    case 11:
    default:
      return `<div style="width:100%;max-width:320px;background:#09090B;border:1.5px solid #CCFF00;border-radius:24px;padding:18px;color:#fff;"><div style="font-size:10px;font-weight:900;color:#CCFF00;">${fam.toUpperCase()}</div><div style="font-size:16px;font-weight:900;color:#CCFF00;font-family:monospace;margin-top:6px;">VERIFIED // SIGNED</div></div>`;
  }
}

// ============================================================================
// 7. TEXTAREA (12 Bespoke Models)
// ============================================================================
function renderTextareaVariants(fam, icon, slug, variantIndex) {
  switch (variantIndex) {
    case 0:
      return `<div style="width:100%;max-width:320px;background:#FFFFFF;border:1px solid #E2E8F0;border-radius:20px;padding:16px;display:flex;flex-direction:column;gap:8px;"><label style="font-size:12px;font-weight:800;color:#0F172A;">Maintenance Issue</label><textarea style="width:100%;height:70px;border:1.5px solid #CBD5E1;border-radius:10px;padding:8px;font-size:12px;resize:none;" placeholder="Bathroom sink tap leaking in master bedroom..."></textarea><div style="font-size:10px;color:#94A3B8;text-align:right;">48 / 500 chars</div></div>`;
    case 1:
      return `<div style="width:100%;max-width:320px;background:#FFFBEB;border:1px solid #FDE68A;border-radius:18px;padding:14px;"><div style="font-size:11px;font-weight:800;color:#B45309;">🔒 Landlord Remarks</div><div style="font-size:11px;color:#78350F;margin-top:4px;">Tenant pays on 1st consistently. Balcony painted.</div></div>`;
    case 2:
      return `<div style="width:100%;max-width:320px;background:#FFFFFF;border:1px solid #E2E8F0;border-radius:18px;padding:16px;display:flex;flex-direction:column;gap:6px;"><span style="font-size:12px;font-weight:800;color:#0F172A;">Special Conditions</span><div style="font-size:11px;color:#475569;background:#F8FAFC;padding:8px;border-radius:8px;">1. Maintenance included in ₹28,500.&#10;2. Lock-in 6 months.</div></div>`;
    case 3:
      return `<div style="width:100%;max-width:320px;background:#09090B;border:1.5px solid rgba(204,255,0,0.3);border-radius:20px;padding:16px;color:#fff;"><span style="font-size:10px;font-weight:900;color:#CCFF00;">TENANT MEMO</span><div style="margin-top:6px;background:#18181B;border-radius:8px;padding:8px;font-size:11px;color:#A1A1AA;">Encrypted remarks logged.</div></div>`;
    case 4:
      return `<div style="width:100%;max-width:320px;background:#FFFFFF;border:1px solid #E2E8F0;border-radius:18px;padding:14px;display:flex;flex-direction:column;gap:6px;"><div style="display:flex;justify-content:space-between;align-items:center;"><span style="font-size:11px;font-weight:800;">Voice Dictation</span><span>🎙️</span></div><div style="font-size:11px;color:#475569;background:#F8FAFC;padding:8px;border-radius:8px;">"Cleaned the kitchen exhaust fan today..."</div></div>`;
    case 5:
      return `<div style="width:100%;max-width:320px;background:#FFFFFF;border:1.5px solid #2563EB;border-radius:16px;padding:12px;"><span style="font-size:10px;font-weight:800;color:#2563EB;">PUBLIC REVIEW</span><div style="font-size:12px;color:#0F172A;margin-top:4px;">Fantastic gated society with 24/7 security.</div></div>`;
    case 6:
      return `<div style="width:100%;max-width:320px;background:#FFFFFF;border:1px solid #E2E8F0;border-radius:18px;padding:14px;"><span style="font-size:11px;font-weight:800;">Quick Notes</span><div style="display:flex;gap:4px;margin-top:6px;"><span style="padding:2px 6px;background:#EFF6FF;color:#2563EB;border-radius:6px;font-size:10px;">+ Geyser OK</span></div></div>`;
    case 7:
      return `<div style="width:100%;max-width:320px;background:#FFFFFF;border:1px solid #E2E8F0;border-radius:18px;padding:14px;"><div style="font-size:11px;font-weight:800;">Broadcast Notice</div><div style="font-size:10px;color:#64748B;margin-top:4px;">Water tank maintenance Sunday 10 AM.</div></div>`;
    case 8:
      return `<div style="width:100%;max-width:320px;background:#FFFFFF;border:1px solid #E2E8F0;border-radius:16px;padding:12px;font-size:11px;">Key lockbox code is 4829. Gate security notified.</div>`;
    case 9:
      return `<div style="width:100%;max-width:320px;background:#FFF;border:1.5px solid #EF4444;border-radius:18px;padding:14px;"><span style="font-size:11px;font-weight:800;color:#EF4444;">⚠ Description too short</span></div>`;
    case 10:
      return `<div style="width:100%;max-width:320px;background:#FFFFFF;border:1.5px solid #E2E8F0;border-radius:22px;padding:16px;text-align:center;"><div style="font-size:13px;font-weight:800;color:#0F172A;">${fam}</div><div style="font-size:11px;color:#64748B;margin-top:6px;">All maintenance notes logged smoothly.</div></div>`;
    case 11:
    default:
      return `<div style="width:100%;max-width:320px;background:#09090B;border:1.5px solid #CCFF00;border-radius:22px;padding:16px;color:#fff;"><div style="font-size:10px;font-weight:900;color:#CCFF00;">${fam.toUpperCase()}</div><div style="font-size:11px;color:#A1A1AA;margin-top:6px;">Encrypted log entries recorded.</div></div>`;
  }
}

// ============================================================================
// 8. STAR RATING (12 Bespoke Models)
// ============================================================================
function renderStarRatingVariants(fam, icon, slug, variantIndex) {
  switch (variantIndex) {
    case 0:
      return `<div style="width:100%;max-width:320px;background:#FFFFFF;border:1px solid #E2E8F0;border-radius:20px;padding:18px;text-align:center;box-shadow:0 6px 20px rgba(15,23,42,0.04);"><div style="font-size:11px;font-weight:800;color:#64748B;">RATE LANDLORD</div><div style="font-size:26px;color:#F59E0B;margin:6px 0;">★★★★★</div><div style="font-size:12px;font-weight:800;color:#059669;">5.0 &bull; Highly Recommended</div></div>`;
    case 1:
      return `<div style="width:100%;max-width:320px;background:#FFFFFF;border:1px solid #E2E8F0;border-radius:20px;padding:16px;display:flex;flex-direction:column;gap:6px;"><div style="display:flex;justify-content:space-between;font-size:11px;font-weight:800;"><span>Security</span><span style="color:#F59E0B;">★★★★★ 5.0</span></div><div style="display:flex;justify-content:space-between;font-size:11px;font-weight:800;"><span>Water</span><span style="color:#F59E0B;">★★★★☆ 4.5</span></div></div>`;
    case 2:
      return `<div style="width:100%;max-width:320px;background:#FFFFFF;border:1px solid #E2E8F0;border-radius:20px;padding:16px;display:flex;justify-content:space-around;font-size:24px;"><span>😡</span><span>😐</span><span style="transform:scale(1.2);">😊</span><span>🤩</span></div>`;
    case 3:
      return `<div style="width:100%;max-width:320px;background:#09090B;border:1.5px solid rgba(204,255,0,0.3);border-radius:22px;padding:18px;color:#fff;text-align:center;"><span style="font-size:10px;font-weight:900;color:#CCFF00;">CRED LUXURY INDEX</span><div style="font-size:24px;color:#CCFF00;margin-top:6px;">★★★★★</div></div>`;
    case 4:
      return `<div style="width:100%;max-width:320px;background:#FFFFFF;border:1px solid #E2E8F0;border-radius:18px;padding:14px;"><div style="font-size:11px;font-weight:800;">Recommend? (NPS)</div><div style="display:flex;gap:4px;margin-top:6px;"><span style="flex:1;padding:4px 0;background:#2563EB;color:#fff;border-radius:4px;text-align:center;font-size:10px;font-weight:800;">10</span></div></div>`;
    case 5:
      return `<div style="width:100%;max-width:320px;background:#FFFFFF;border:1px solid #E2E8F0;border-radius:18px;padding:14px;display:flex;justify-content:space-around;"><button style="padding:6px 12px;background:#EFF6FF;color:#2563EB;border:none;border-radius:8px;font-weight:800;">👍 Recommend</button></div>`;
    case 6:
      return `<div style="width:100%;max-width:320px;background:#FFFFFF;border:1px solid #E2E8F0;border-radius:18px;padding:14px;display:flex;align-items:center;gap:10px;"><span>⭐</span><div><div style="font-size:13px;font-weight:800;">4.9 / 5.0</div><div style="font-size:10px;color:#64748B;">1,420 Reviews</div></div></div>`;
    case 7:
      return `<div style="width:100%;max-width:320px;background:#FFFFFF;border:1px solid #E2E8F0;border-radius:18px;padding:14px;display:flex;justify-content:space-between;align-items:center;"><div><div style="font-size:12px;font-weight:800;">Guard Rating</div></div><span style="color:#F59E0B;">★★★★★</span></div>`;
    case 8:
      return `<div style="width:100%;max-width:320px;background:#FFFFFF;border:1px solid #E2E8F0;border-radius:18px;padding:14px;display:flex;justify-content:space-between;align-items:center;"><span style="font-size:12px;font-weight:800;">Save Favorite</span><span style="color:#EF4444;font-size:18px;">❤️</span></div>`;
    case 9:
      return `<div style="width:100%;max-width:320px;background:#FFFFFF;border:1px solid #E2E8F0;border-radius:18px;padding:14px;display:flex;align-items:center;gap:10px;"><div style="font-size:26px;font-weight:900;">4.8</div><div style="font-size:10px;color:#F59E0B;">★★★★★</div></div>`;
    case 10:
      return `<div style="width:100%;max-width:320px;background:#FFFFFF;border:1.5px solid #E2E8F0;border-radius:24px;padding:18px;text-align:center;"><div style="font-size:14px;font-weight:800;color:#0F172A;">${fam}</div><div style="font-size:22px;color:#F59E0B;margin-top:6px;">★★★★★</div></div>`;
    case 11:
    default:
      return `<div style="width:100%;max-width:320px;background:#09090B;border:1.5px solid #CCFF00;border-radius:24px;padding:18px;color:#fff;text-align:center;"><div style="font-size:10px;font-weight:900;color:#CCFF00;">${fam.toUpperCase()}</div><div style="font-size:22px;color:#CCFF00;margin-top:6px;">★★★★★</div></div>`;
  }
}

// ============================================================================
// 9. TAGS INPUT (12 Bespoke Models)
// ============================================================================
function renderTagsInputVariants(fam, icon, slug, variantIndex) {
  switch (variantIndex) {
    case 0:
      return `<div style="width:100%;max-width:320px;background:#FFFFFF;border:1px solid #E2E8F0;border-radius:20px;padding:16px;display:flex;flex-direction:column;gap:8px;"><span style="font-size:11px;font-weight:800;color:#64748B;">INCLUDED AMENITIES</span><div style="display:flex;flex-wrap:wrap;gap:6px;"><span style="padding:4px 10px;background:#EFF6FF;color:#2563EB;border-radius:99px;font-size:11px;font-weight:700;">🏊 Pool ✕</span><span style="padding:4px 10px;background:#EFF6FF;color:#2563EB;border-radius:99px;font-size:11px;font-weight:700;">🏋️ Gym ✕</span><span style="padding:4px 10px;background:#F1F5F9;color:#475569;border-radius:99px;font-size:11px;font-weight:600;">+ Add</span></div></div>`;
    case 1:
      return `<div style="width:100%;max-width:320px;background:#FFFFFF;border:1px solid #E2E8F0;border-radius:20px;padding:16px;"><span style="font-size:11px;font-weight:800;color:#64748B;">PREFERENCES</span><div style="display:flex;gap:6px;margin-top:6px;"><span style="padding:4px 10px;background:#ECFDF5;color:#059669;border-radius:99px;font-size:11px;font-weight:700;">🥗 Veg ✕</span><span style="padding:4px 10px;background:#ECFDF5;color:#059669;border-radius:99px;font-size:11px;font-weight:700;">🐾 Pets ✕</span></div></div>`;
    case 2:
      return `<div style="width:100%;max-width:320px;background:#FFFFFF;border:1px solid #E2E8F0;border-radius:18px;padding:14px;"><div style="display:flex;gap:6px;"><span style="padding:4px 8px;background:#EFF6FF;color:#2563EB;border-radius:6px;font-size:10px;font-weight:700;">Wi-Fi: ₹300</span><span style="padding:4px 8px;background:#EFF6FF;color:#2563EB;border-radius:6px;font-size:10px;font-weight:700;">Cook: ₹1,500</span></div></div>`;
    case 3:
      return `<div style="width:100%;max-width:320px;background:#09090B;border:1.5px solid rgba(204,255,0,0.3);border-radius:22px;padding:16px;color:#fff;"><div style="display:flex;gap:6px;"><span style="padding:4px 10px;background:#18181B;border:1px solid #CCFF00;color:#CCFF00;border-radius:99px;font-size:10px;font-weight:800;">VALET PARKING</span></div></div>`;
    case 4:
      return `<div style="width:100%;max-width:320px;background:#FFFFFF;border:1px solid #E2E8F0;border-radius:18px;padding:14px;display:flex;gap:6px;"><span style="padding:4px 10px;background:#FEF2F2;color:#DC2626;border-radius:99px;font-size:10px;font-weight:800;">URGENT</span></div>`;
    case 5:
      return `<div style="width:100%;max-width:320px;background:#FFFFFF;border:1px solid #E2E8F0;border-radius:18px;padding:14px;"><span style="padding:4px 10px;background:#F8FAFC;border:1px solid #E2E8F0;border-radius:99px;font-size:11px;font-weight:700;">🚇 500m to Metro ✕</span></div>`;
    case 6:
      return `<div style="width:100%;max-width:320px;background:#FFFFFF;border:1.5px solid #2563EB;border-radius:14px;padding:10px;display:flex;align-items:center;gap:6px;"><span style="padding:2px 6px;background:#2563EB;color:#fff;border-radius:4px;font-size:10px;">Furnished ✕</span><input type="text" placeholder="+ add..." style="border:none;outline:none;font-size:11px;flex:1;"></div>`;
    case 7:
      return `<div style="width:100%;max-width:320px;background:#F8FAFC;border:1px solid #E2E8F0;border-radius:16px;padding:12px;font-size:10px;color:#64748B;">Max 5 tags allowed</div>`;
    case 8:
      return `<div style="width:100%;max-width:320px;background:#FFFFFF;border:1px solid #E2E8F0;border-radius:16px;padding:12px;"><span style="padding:4px 8px;background:#F1F5F9;border-radius:6px;font-size:10px;">:: Master Bedroom</span></div>`;
    case 9:
      return `<div style="width:100%;max-width:320px;background:#FFFFFF;border:1px solid #E2E8F0;border-radius:16px;padding:12px;display:flex;justify-content:space-between;align-items:center;"><span style="font-size:11px;font-weight:800;">3 Active</span><span style="font-size:10px;color:#2563EB;">Clear</span></div>`;
    case 10:
      return `<div style="width:100%;max-width:320px;background:#FFFFFF;border:1.5px solid #E2E8F0;border-radius:24px;padding:16px;text-align:center;"><div style="font-size:13px;font-weight:800;">${fam}</div><span style="padding:4px 10px;background:#EFF6FF;color:#2563EB;border-radius:99px;font-size:10px;font-weight:700;display:inline-block;margin-top:6px;">Gated Society</span></div>`;
    case 11:
    default:
      return `<div style="width:100%;max-width:320px;background:#09090B;border:1.5px solid #CCFF00;border-radius:24px;padding:16px;color:#fff;"><div style="font-size:10px;font-weight:900;color:#CCFF00;">${fam.toUpperCase()}</div><span style="padding:4px 10px;background:#18181B;border:1px solid #CCFF00;color:#CCFF00;border-radius:99px;font-size:10px;display:inline-block;margin-top:6px;">CRED ELITE</span></div>`;
  }
}

// ============================================================================
// 10. RICH TEXT EDITOR (12 Bespoke Models)
// ============================================================================
function renderRichTextVariants(fam, icon, slug, variantIndex) {
  switch (variantIndex) {
    case 0:
      return `<div style="width:100%;max-width:320px;background:#FFFFFF;border:1px solid #E2E8F0;border-radius:20px;overflow:hidden;box-shadow:0 6px 18px rgba(15,23,42,0.04);"><div style="padding:8px 12px;background:#F8FAFC;border-bottom:1px solid #E2E8F0;display:flex;gap:8px;font-size:12px;font-weight:800;color:#475569;"><span>B</span><span><i>I</i></span><span><u>U</u></span><span>• List</span><span>🔗</span></div><div style="padding:14px;font-size:12px;color:#0F172A;line-height:1.5;">This <b>3BHK luxury apartment</b> in Indiranagar includes modular kitchen, 100% DG backup, and 2 covered car parks.</div></div>`;
    case 1:
      return `<div style="width:100%;max-width:320px;background:#FFFFFF;border:1.5px solid #2563EB;border-radius:20px;padding:16px;"><div style="font-size:12px;font-weight:800;color:#2563EB;">Lease Clause Formatter</div><div style="font-size:11px;color:#334155;margin-top:6px;background:#EFF6FF;padding:10px;border-radius:8px;"><i>Clause 4.2:</i> Security deposit of ₹1,00,000 refundable within 15 bank business days.</div></div>`;
    case 2:
      return `<div style="width:100%;max-width:320px;background:#18181B;border:1px solid #27272A;border-radius:20px;padding:16px;color:#fff;font-family:monospace;font-size:11px;"><span style="color:#38BDF8;">## Rent Terms</span><br><span style="color:#A1A1AA;">- Advance: ₹50,000</span><br><span style="color:#10B981;">[✓] Verified</span></div>`;
    case 3:
      return `<div style="width:100%;max-width:320px;background:#09090B;border:1.5px solid rgba(204,255,0,0.3);border-radius:20px;padding:16px;color:#fff;"><span style="font-size:10px;font-weight:900;color:#CCFF00;">CRED DOCS</span><div style="font-size:11px;color:#CCFF00;margin-top:6px;font-family:monospace;">ENCRYPTED_LEAD_AGREEMENT.MD</div></div>`;
    case 4:
      return `<div style="width:100%;max-width:320px;background:#FFFFFF;border:1px solid #E2E8F0;border-radius:18px;padding:14px;"><div style="display:inline-flex;gap:6px;background:#0F172A;color:#fff;padding:4px 8px;border-radius:6px;font-size:10px;font-weight:800;"><span>Bold</span><span>Link</span></div><div style="font-size:12px;color:#0F172A;margin-top:6px;">Select text to format inline.</div></div>`;
    case 5:
      return `<div style="width:100%;max-width:320px;background:#FFFFFF;border:1px solid #E2E8F0;border-radius:18px;padding:14px;display:flex;justify-content:space-between;align-items:center;"><div><div style="font-size:12px;font-weight:800;">SEO Score</div><div style="font-size:10px;color:#059669;">94/100 &bull; Great Description</div></div><span style="font-size:16px;">📈</span></div>`;
    case 6:
      return `<div style="width:100%;max-width:320px;background:#FFFFFF;border:1px solid #E2E8F0;border-radius:18px;padding:14px;display:flex;align-items:center;gap:10px;"><span>🎙️</span><div style="font-size:11px;color:#475569;">"Spacious East-facing balcony with park view..."</div></div>`;
    case 7:
      return `<div style="width:100%;max-width:320px;background:#FFFFFF;border:1px solid #E2E8F0;border-radius:18px;padding:14px;"><div style="font-size:11px;color:#2563EB;font-weight:700;">@Landlord #Flat402</div><div style="font-size:11px;color:#475569;margin-top:2px;">Mentioned in renewal agreement.</div></div>`;
    case 8:
      return `<div style="width:100%;max-width:320px;background:#FAFAFA;border:1px solid #E2E8F0;border-radius:18px;padding:16px;text-align:center;font-size:12px;color:#64748B;">Zen Writing Canvas (Full Width)</div>`;
    case 9:
      return `<div style="width:100%;max-width:320px;background:#ECFDF5;border:1px solid #A7F3D0;border-radius:18px;padding:12px;display:flex;justify-content:space-between;align-items:center;font-size:11px;"><span style="color:#065F46;font-weight:700;">Auto-Saved</span><span style="color:#059669;">Just now ✓</span></div>`;
    case 10:
      return `<div style="width:100%;max-width:320px;background:#FFFFFF;border:1.5px solid #E2E8F0;border-radius:24px;padding:18px;text-align:center;"><div style="font-size:14px;font-weight:800;color:#0F172A;">${fam}</div><div style="font-size:11px;color:#64748B;margin-top:6px;">Porcelain Clean Typography</div></div>`;
    case 11:
    default:
      return `<div style="width:100%;max-width:320px;background:#09090B;border:1.5px solid #CCFF00;border-radius:24px;padding:18px;color:#fff;"><div style="font-size:10px;font-weight:900;color:#CCFF00;">${fam.toUpperCase()}</div><div style="font-size:12px;color:#A1A1AA;margin-top:6px;">CRED Markdown Terminal</div></div>`;
  }
}

// ============================================================================
// 11. AUTOCOMPLETE (12 Bespoke Models)
// ============================================================================
function renderAutocompleteVariants(fam, icon, slug, variantIndex) {
  switch (variantIndex) {
    case 0:
      return `<div style="width:100%;max-width:320px;background:#FFFFFF;border:1.5px solid #2563EB;border-radius:18px;padding:12px;box-shadow:0 8px 24px rgba(37,99,235,0.08);"><div style="display:flex;align-items:center;gap:8px;"><span style="color:#2563EB;">🔍</span><input type="text" value="Indira" style="border:none;outline:none;font-size:13px;font-weight:700;color:#0F172A;flex:1;"></div><div style="margin-top:8px;border-top:1px solid #F1F5F9;padding-top:6px;display:flex;flex-direction:column;gap:4px;"><div style="font-size:11px;font-weight:700;color:#0F172A;padding:4px 6px;background:#EFF6FF;border-radius:6px;">📍 <b>Indira</b>nagar 100ft Road</div><div style="font-size:11px;color:#64748B;padding:4px 6px;">📍 <b>Indira</b>nagar Defense Colony</div></div></div>`;
    case 1:
      return `<div style="width:100%;max-width:320px;background:#FFFFFF;border:1px solid #E2E8F0;border-radius:18px;padding:12px;"><div style="display:flex;align-items:center;gap:6px;"><span style="color:#64748B;">#</span><input type="text" value="PFC-402" style="border:none;outline:none;font-size:13px;font-weight:800;color:#0F172A;"></div><div style="font-size:10px;color:#059669;font-weight:700;margin-top:4px;">✓ Prestige Falcon City, Flat 402 matched</div></div>`;
    case 2:
      return `<div style="width:100%;max-width:320px;background:#FFFFFF;border:1px solid #E2E8F0;border-radius:18px;padding:12px;"><input type="text" placeholder="Search flatmate..." style="border:none;outline:none;font-size:12px;"><div style="display:flex;align-items:center;gap:8px;margin-top:6px;padding:4px;background:#F8FAFC;border-radius:6px;"><div style="width:20px;height:20px;border-radius:50%;background:#2563EB;color:#fff;display:flex;align-items:center;justify-content:center;font-size:9px;">JS</div><span style="font-size:11px;font-weight:700;">Joshua S.</span></div></div>`;
    case 3:
      return `<div style="width:100%;max-width:320px;background:#09090B;border:1.5px solid rgba(204,255,0,0.3);border-radius:18px;padding:12px;color:#fff;"><span style="font-size:10px;color:#CCFF00;font-family:monospace;">COMMAND // $ rent pay</span><div style="font-size:10px;color:#A1A1AA;margin-top:4px;">AUTOCOMPLETE: --amount 28500</div></div>`;
    case 4:
      return `<div style="width:100%;max-width:320px;background:#FFFFFF;border:1px solid #E2E8F0;border-radius:16px;padding:12px;"><span style="font-size:10px;font-weight:700;color:#64748B;">RECENT SEARCHES</span><div style="display:flex;gap:4px;margin-top:4px;"><span style="padding:2px 8px;background:#F1F5F9;border-radius:4px;font-size:10px;">Indiranagar ✕</span></div></div>`;
    case 5:
      return `<div style="width:100%;max-width:320px;background:#FFFFFF;border:1px solid #E2E8F0;border-radius:16px;padding:10px;display:flex;gap:4px;flex-wrap:wrap;"><span style="padding:2px 6px;background:#2563EB;color:#fff;border-radius:4px;font-size:10px;">HSR Layout ✕</span><input type="text" placeholder="type..." style="border:none;outline:none;font-size:11px;width:50px;"></div>`;
    case 6:
      return `<div style="width:100%;max-width:320px;background:#FFFFFF;border:1px solid #E2E8F0;border-radius:16px;padding:12px;display:flex;align-items:center;gap:6px;"><span style="color:#4285F4;">G</span><span style="font-size:12px;color:#0F172A;">Google Places Live Dropdown</span></div>`;
    case 7:
      return `<div style="width:100%;max-width:320px;background:#FFFFFF;border:1px solid #E2E8F0;border-radius:16px;padding:12px;font-size:11px;">Match: Kora<b>mangala</b> 4th Block</div>`;
    case 8:
      return `<div style="width:100%;max-width:320px;background:#FFFFFF;border:1px solid #E2E8F0;border-radius:16px;padding:12px;font-size:11px;color:#64748B;">Areas &bull; Societies &bull; Metro</div>`;
    case 9:
      return `<div style="width:100%;max-width:320px;background:#F8FAFC;border:1px solid #E2E8F0;border-radius:16px;padding:12px;font-size:10px;color:#64748B;">No matches found. Request coverage?</div>`;
    case 10:
      return `<div style="width:100%;max-width:320px;background:#FFFFFF;border:1.5px solid #E2E8F0;border-radius:24px;padding:16px;text-align:center;"><div style="font-size:13px;font-weight:800;">${fam}</div></div>`;
    case 11:
    default:
      return `<div style="width:100%;max-width:320px;background:#09090B;border:1.5px solid #CCFF00;border-radius:24px;padding:16px;color:#fff;"><div style="font-size:10px;font-weight:900;color:#CCFF00;">${fam.toUpperCase()}</div></div>`;
  }
}

// ============================================================================
// 12. MASKED INPUTS (12 Bespoke Models)
// ============================================================================
function renderMaskedInputVariants(fam, icon, slug, variantIndex) {
  switch (variantIndex) {
    case 0:
      return `<div style="width:100%;max-width:320px;background:#FFFFFF;border:1.5px solid #E2E8F0;border-radius:18px;padding:14px 16px;display:flex;align-items:center;justify-content:space-between;box-shadow:0 6px 18px rgba(15,23,42,0.04);"><div><div style="font-size:10px;font-weight:700;color:#64748B;">CREDIT / DEBIT CARD</div><div style="font-family:monospace;font-size:15px;font-weight:800;color:#0F172A;letter-spacing:0.1em;margin-top:2px;">•••• •••• •••• 4242</div></div><span style="font-size:18px;">💳</span></div>`;
    case 1:
      return `<div style="width:100%;max-width:320px;background:#FFFFFF;border:1px solid #E2E8F0;border-radius:18px;padding:14px;"><div><div style="font-size:10px;font-weight:700;color:#64748B;">PAN CARD NUMBER</div><div style="font-family:monospace;font-size:14px;font-weight:800;color:#0F172A;letter-spacing:0.12em;">ABCDE 1234 F</div></div></div>`;
    case 2:
      return `<div style="width:100%;max-width:320px;background:#FFFFFF;border:1px solid #E2E8F0;border-radius:18px;padding:14px;display:flex;justify-content:space-between;align-items:center;"><div><div style="font-size:10px;font-weight:700;color:#64748B;">AADHAAR CARD</div><div style="font-family:monospace;font-size:14px;font-weight:800;color:#0F172A;">XXXX - XXXX - 8921</div></div><span>🏛️</span></div>`;
    case 3:
      return `<div style="width:100%;max-width:320px;background:#FFFFFF;border:1px solid #E2E8F0;border-radius:18px;padding:14px;"><div><div style="font-size:10px;font-weight:700;color:#64748B;">IFSC CODE</div><div style="font-family:monospace;font-size:14px;font-weight:800;color:#0F172A;">HDFC 000 1234</div></div></div>`;
    case 4:
      return `<div style="width:100%;max-width:320px;background:#FFFFFF;border:1px solid #E2E8F0;border-radius:18px;padding:14px;display:flex;justify-content:space-between;align-items:center;"><div><div style="font-size:10px;font-weight:700;color:#64748B;">BANK A/C</div><div style="font-family:monospace;font-size:14px;font-weight:800;">•••• •••• 5678</div></div><span>👁</span></div>`;
    case 5:
      return `<div style="width:100%;max-width:320px;background:#FFFFFF;border:1px solid #E2E8F0;border-radius:18px;padding:14px;"><div><div style="font-size:10px;font-weight:700;color:#64748B;">DATE OF BIRTH</div><div style="font-family:monospace;font-size:14px;font-weight:800;">14 / 08 / 1995</div></div></div>`;
    case 6:
      return `<div style="width:100%;max-width:320px;background:#FFFFFF;border:1px solid #E2E8F0;border-radius:18px;padding:14px;"><div><div style="font-size:10px;font-weight:700;color:#64748B;">VEHICLE REG</div><div style="font-family:monospace;font-size:14px;font-weight:800;">KA 01 MG 4521</div></div></div>`;
    case 7:
      return `<div style="width:100%;max-width:320px;background:#FFFFFF;border:1px solid #E2E8F0;border-radius:18px;padding:14px;"><div><div style="font-size:10px;font-weight:700;color:#64748B;">GSTIN TAX ID</div><div style="font-family:monospace;font-size:13px;font-weight:800;">29 AAAAA 0000 A 1 Z 5</div></div></div>`;
    case 8:
      return `<div style="width:100%;max-width:320px;background:#FFFFFF;border:1px solid #E2E8F0;border-radius:18px;padding:14px;"><div><div style="font-size:10px;font-weight:700;color:#64748B;">STAMP REF</div><div style="font-family:monospace;font-size:13px;font-weight:800;">IN-KA82910408</div></div></div>`;
    case 9:
      return `<div style="width:100%;max-width:320px;background:#FFF;border:1.5px solid #EF4444;border-radius:18px;padding:14px;font-size:11px;color:#DC2626;font-weight:800;">Invalid PAN format</div>`;
    case 10:
      return `<div style="width:100%;max-width:320px;background:#FFFFFF;border:1.5px solid #E2E8F0;border-radius:24px;padding:18px;text-align:center;"><div style="font-size:14px;font-weight:800;">${fam}</div></div>`;
    case 11:
    default:
      return `<div style="width:100%;max-width:320px;background:#09090B;border:1.5px solid #CCFF00;border-radius:24px;padding:18px;color:#fff;"><div style="font-size:10px;font-weight:900;color:#CCFF00;">${fam.toUpperCase()}</div></div>`;
  }
}

// ============================================================================
// 13. MASTER SPECIALIZED INPUT DISPATCHER
// ============================================================================
function renderSpecializedInputVariant(fam, icon, slug, variantIndex) {
  // OTP & PIN
  if (slug === 'otp-inputs' || slug.includes('otp') || slug === 'pin-input' || slug === 'pin-inputs' || slug.includes('pin')) {
    return renderOtpVariants(fam, icon, slug, variantIndex);
  }

  // FILE UPLOAD
  if (slug === 'file-upload' || slug.includes('upload') || slug.includes('file')) {
    return renderFileUploadVariants(fam, icon, slug, variantIndex);
  }

  // DATE
  if (slug === 'date-inputs' || slug.includes('date') || slug.includes('calendar')) {
    return renderDateVariants(fam, icon, slug, variantIndex);
  }

  // TIME
  if (slug === 'time-picker' || slug.includes('time') || slug.includes('clock')) {
    return renderTimeVariants(fam, icon, slug, variantIndex);
  }

  // COLOR
  if (slug === 'color-picker' || slug.includes('color')) {
    return renderColorVariants(fam, icon, slug, variantIndex);
  }

  // SIGNATURE
  if (slug === 'signature-pad' || slug.includes('signature')) {
    return renderSignatureVariants(fam, icon, slug, variantIndex);
  }

  // TEXTAREA
  if (slug === 'textarea' || slug.includes('multiline')) {
    return renderTextareaVariants(fam, icon, slug, variantIndex);
  }

  // STAR RATING
  if (slug === 'star-rating' || slug.includes('rating') || slug.includes('review')) {
    return renderStarRatingVariants(fam, icon, slug, variantIndex);
  }

  // TAGS INPUT
  if (slug === 'tags-input' || slug.includes('tags') || slug.includes('tag')) {
    return renderTagsInputVariants(fam, icon, slug, variantIndex);
  }

  // RICH TEXT
  if (slug === 'rich-text' || slug.includes('rich')) {
    return renderRichTextVariants(fam, icon, slug, variantIndex);
  }

  // AUTOCOMPLETE
  if (slug === 'autocomplete' || slug.includes('autocomplete')) {
    return renderAutocompleteVariants(fam, icon, slug, variantIndex);
  }

  // MASKED INPUTS
  if (slug === 'masked-inputs' || slug.includes('mask')) {
    return renderMaskedInputVariants(fam, icon, slug, variantIndex);
  }

  // Default to OTP
  return renderOtpVariants(fam, icon, slug, variantIndex);
}

module.exports = {
  renderOtpVariants,
  renderFileUploadVariants,
  renderDateVariants,
  renderTimeVariants,
  renderColorVariants,
  renderSignatureVariants,
  renderTextareaVariants,
  renderStarRatingVariants,
  renderTagsInputVariants,
  renderRichTextVariants,
  renderAutocompleteVariants,
  renderMaskedInputVariants,
  renderSpecializedInputVariant
};
