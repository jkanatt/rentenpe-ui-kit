/**
 * RentenPe UI Kit - Authentication, Onboarding, Property, Legal & Social Proof Archetypes
 * 100% Authentic, pixel-perfect, mobile-constrained variants.
 */

function renderAuthVariants(fam, icon, slug, variantIndex) {
  const isSignup = slug.includes('signup');
  const isForgot = slug.includes('forgot');
  const isBiometric = slug.includes('biometric');
  const isSocial = slug.includes('social');
  const isPasskey = slug.includes('passkey');

  switch (variantIndex) {
    case 0: // Model A: Modern Mobile Login Form with Remember Me
      return `<div style="width:100%;max-width:320px;background:#fff;border:1px solid #E2E8F0;border-radius:24px;padding:24px;box-shadow:0 8px 24px rgba(15,23,42,0.06);display:flex;flex-direction:column;gap:14px;">
        <div><div style="font-size:18px;font-weight:900;color:#0F172A;">${isSignup ? 'Create Account' : (isForgot ? 'Reset Password' : 'Welcome to RentenPe')}</div><div style="font-size:11px;color:#64748B;margin-top:2px;">${isSignup ? 'Join verified tenant network' : 'Enter your credentials to continue'}</div></div>
        <div style="display:flex;flex-direction:column;gap:10px;">
          <input type="text" placeholder="${isSignup ? 'Full Name' : 'Mobile or Email'}" value="${isSignup ? 'Joshua Kanatt' : 'joshua@rentenpe.com'}" style="padding:12px 14px;border:1.5px solid #E2E8F0;border-radius:12px;font-size:12px;outline:none;font-weight:600;color:#0F172A;">
          ${!isForgot ? `<input type="password" value="••••••••••••" style="padding:12px 14px;border:1.5px solid #E2E8F0;border-radius:12px;font-size:12px;outline:none;color:#0F172A;">` : ''}
        </div>
        <div style="display:flex;justify-content:space-between;align-items:center;font-size:11px;">
          <label style="display:flex;align-items:center;gap:6px;color:#64748B;"><input type="checkbox" checked> Remember</label>
          <span style="color:#2563EB;font-weight:700;cursor:pointer;">Forgot Password?</span>
        </div>
        <button style="width:100%;padding:13px;background:#0F172A;color:#fff;border:none;border-radius:14px;font-size:13px;font-weight:800;cursor:pointer;">
          ${isSignup ? 'Sign Up →' : (isForgot ? 'Send Reset Link' : 'Sign In →')}
        </button>
      </div>`;

    case 1: // Model B: Social SSO Fast Login Grid
      return `<div style="width:100%;max-width:320px;background:#fff;border:1px solid #E2E8F0;border-radius:24px;padding:22px;display:flex;flex-direction:column;gap:12px;box-shadow:0 4px 16px rgba(0,0,0,0.04);">
        <div style="text-align:center;"><div style="font-size:14px;font-weight:800;color:#0F172A;">Instant Verification Login</div><div style="font-size:10px;color:#64748B;">One-tap secure access</div></div>
        <button style="width:100%;padding:11px;background:#F8FAFC;border:1px solid #E2E8F0;border-radius:12px;font-size:12px;font-weight:700;display:flex;align-items:center;justify-content:center;gap:8px;cursor:pointer;"><span>🌐</span> Continue with Google</button>
        <button style="width:100%;padding:11px;background:#0F172A;color:#fff;border:none;border-radius:12px;font-size:12px;font-weight:700;display:flex;align-items:center;justify-content:center;gap:8px;cursor:pointer;"><span>🍏</span> Continue with Apple</button>
      </div>`;

    case 2: // Model C: Biometric FaceID Holographic Scan
      return `<div style="width:100%;max-width:320px;background:#09090B;border:1px solid #27272A;border-radius:24px;padding:26px 20px;text-align:center;color:#fff;box-shadow:0 20px 40px rgba(0,0,0,0.6);">
        <div style="width:64px;height:64px;border-radius:50%;border:2px dashed #38BDF8;display:flex;align-items:center;justify-content:center;font-size:28px;margin:0 auto 14px;box-shadow:0 0 20px rgba(56,189,248,0.25);">🛡️</div>
        <div style="font-size:14px;font-weight:800;">FaceID Authentication</div>
        <div style="font-size:11px;color:#A1A1AA;margin:6px 0 16px;">Biometric cryptographic tenant signature</div>
        <button style="width:100%;padding:12px;background:#38BDF8;color:#09090B;border:none;border-radius:12px;font-size:12px;font-weight:900;cursor:pointer;">Tap to Authenticate</button>
      </div>`;

    case 3: // Model D: Role Selection Signup (Tenant vs Landlord)
      return `<div style="width:100%;max-width:320px;background:#fff;border:1px solid #E2E8F0;border-radius:22px;padding:20px;display:flex;flex-direction:column;gap:12px;">
        <div style="font-size:13px;font-weight:800;color:#0F172A;">Select Your Account Role</div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
          <div style="padding:14px;background:#EFF6FF;border:2px solid #2563EB;border-radius:14px;text-align:center;"><div style="font-size:20px;">🔑</div><div style="font-size:12px;font-weight:800;color:#0F172A;margin-top:4px;">I am a Tenant</div></div>
          <div style="padding:14px;background:#F8FAFC;border:1px solid #E2E8F0;border-radius:14px;text-align:center;"><div style="font-size:20px;">🏢</div><div style="font-size:12px;font-weight:600;color:#64748B;margin-top:4px;">I am an Owner</div></div>
        </div>
      </div>`;

    case 4: // Model E: Passkey FIDO2 Hardware Key Form
      return `<div style="width:100%;max-width:320px;background:#fff;border:1px solid #E2E8F0;border-radius:20px;padding:20px;display:flex;flex-direction:column;gap:12px;">
        <div style="display:flex;align-items:center;gap:10px;"><span style="font-size:22px;">🔐</span><div><div style="font-size:13px;font-weight:800;color:#0F172A;">Passkey Enabled</div><div style="font-size:10px;color:#10B981;font-weight:700;">Passwordless WebAuthn</div></div></div>
        <button style="width:100%;padding:11px;background:#0F172A;color:#fff;border:none;border-radius:12px;font-size:12px;font-weight:800;cursor:pointer;">Sign in with Passkey</button>
      </div>`;

    case 5: // Model F: Phone OTP Quick Login
      return `<div style="width:100%;max-width:320px;background:#fff;border:1px solid #E2E8F0;border-radius:20px;padding:20px;display:flex;flex-direction:column;gap:12px;">
        <div style="font-size:13px;font-weight:800;color:#0F172A;">Fast Mobile Login</div>
        <div style="display:flex;border:1.5px solid #2563EB;border-radius:12px;overflow:hidden;"><span style="padding:10px 12px;background:#F8FAFC;font-size:12px;font-weight:800;color:#0F172A;">🇮🇳 +91</span><input type="tel" value="98765 43210" style="flex:1;padding:10px;border:none;outline:none;font-size:13px;font-weight:700;"></div>
        <button style="width:100%;padding:11px;background:#2563EB;color:#fff;border:none;border-radius:12px;font-size:12px;font-weight:800;cursor:pointer;">Get OTP →</button>
      </div>`;

    case 6: // Model G: Minimal Monoline Login Form
      return `<div style="width:100%;max-width:320px;background:#fff;border:1.5px solid #0F172A;border-radius:18px;padding:20px;display:flex;flex-direction:column;gap:10px;">
        <div style="font-size:14px;font-weight:900;color:#0F172A;">Member Authentication</div>
        <input type="text" value="tenant@rentenpe.com" style="padding:10px;border:1px solid #0F172A;border-radius:8px;font-size:12px;">
        <button style="padding:10px;background:#0F172A;color:#fff;border:none;border-radius:8px;font-size:12px;font-weight:800;">Log In</button>
      </div>`;

    case 7: // Model H: Password Strength Indicator Form
      return `<div style="width:100%;max-width:320px;background:#fff;border:1px solid #E2E8F0;border-radius:20px;padding:20px;display:flex;flex-direction:column;gap:10px;">
        <div style="font-size:12px;font-weight:800;color:#0F172A;">Set Secure Password</div>
        <input type="password" value="RentSecure@2026" style="padding:10px 12px;border:1px solid #10B981;border-radius:10px;font-size:12px;color:#0F172A;">
        <div style="display:flex;gap:4px;height:4px;"><div style="flex:1;background:#10B981;border-radius:99px;"></div><div style="flex:1;background:#10B981;border-radius:99px;"></div><div style="flex:1;background:#10B981;border-radius:99px;"></div></div>
        <div style="font-size:10px;color:#059669;font-weight:800;">Very Strong Password ✓</div>
      </div>`;

    case 8: // Model I: Landlord Verification Onboarding
      return `<div style="width:100%;max-width:320px;background:#F0FDF4;border:1.5px solid #86EFAC;border-radius:20px;padding:18px;display:flex;flex-direction:column;gap:10px;">
        <div style="display:flex;align-items:center;gap:10px;"><span style="font-size:22px;">📜</span><div style="font-size:13px;font-weight:800;color:#166534;">Property Deed Verification</div></div>
        <div style="font-size:11px;color:#15803D;">Upload Title Deed or Tax Receipt to receive Verified Landlord badge.</div>
        <button style="padding:10px;background:#16A34A;color:#fff;border:none;border-radius:10px;font-size:11px;font-weight:800;">Upload Document</button>
      </div>`;

    case 9: // Model J: Magic Link Sent Confirmation
      return `<div style="width:100%;max-width:320px;background:#EFF6FF;border:1px solid #BFDBFE;border-radius:20px;padding:22px;text-align:center;">
        <span style="font-size:26px;">✉️</span>
        <div style="font-size:13px;font-weight:800;color:#1E40AF;margin:6px 0;">Magic Link Dispatched</div>
        <div style="font-size:11px;color:#3B82F6;">Check joshua@rentenpe.com to log in with one tap.</div>
      </div>`;

    case 10: // Model K: Apple Cupertino Porcelain Auth (Light)
      return `<div style="width:100%;max-width:320px;background:#FFFFFF;border:1px solid #E2E8F0;border-radius:24px;padding:24px;box-shadow:0 12px 30px rgba(15,23,42,0.04);display:flex;flex-direction:column;gap:14px;">
        <div style="display:flex;justify-content:space-between;align-items:center;">
          <span style="font-size:14px;font-weight:900;color:#0F172A;">Apple ID Passkey</span>
          <span style="font-size:16px;">🍏</span>
        </div>
        <div style="font-size:11px;color:#64748B;">Instant FaceID passkey matching for RentenPe Enterprise.</div>
        <button style="width:100%;padding:12px;background:#0F172A;color:#fff;border:none;border-radius:12px;font-size:12px;font-weight:800;">Sign in with Apple</button>
      </div>`;

    case 11: // Model L: CRED Acid Neon Titanium Auth (Dark)
    default:
      return `<div style="width:100%;max-width:320px;background:#09090B;border:1.5px solid rgba(204,255,0,0.4);border-radius:24px;padding:24px;color:#FFFFFF;box-shadow:0 20px 40px rgba(0,0,0,0.8);display:flex;flex-direction:column;gap:14px;">
        <div style="display:flex;justify-content:space-between;align-items:center;">
          <span style="font-size:10px;font-weight:900;color:#CCFF00;letter-spacing:0.1em;text-transform:uppercase;">CRED TITANIUM AUTH</span>
          <span style="color:#CCFF00;">⚡</span>
        </div>
        <div style="font-size:14px;font-weight:900;">Hardware Escrow Vault</div>
        <button style="width:100%;padding:12px;background:#CCFF00;color:#09090B;border:none;border-radius:12px;font-size:12px;font-weight:900;">Authenticate via CRED ≫</button>
      </div>`;
  }
}

function renderPropertyVariants(fam, icon, slug, variantIndex) {
  const isAmenity = slug === 'amenity-grid';
  const isFloor = slug === 'floor-plan';
  const isGallery = slug === 'property-gallery';

  switch (variantIndex) {
    case 0: // Model A: Luxury Property Listing with Floating Rent Pill (media_1791644657316.png)
      return `<div style="width:100%;max-width:320px;background:#fff;border:1px solid #E2E8F0;border-radius:24px;box-shadow:0 12px 30px rgba(15,23,42,0.06);overflow:hidden;display:flex;flex-direction:column;">
        <div style="position:relative;width:100%;height:150px;background:linear-gradient(135deg,#1E293B,#0F172A);display:flex;align-items:center;justify-content:center;color:#fff;">
          <span style="font-size:44px;">🏢</span>
          <div style="position:absolute;top:12px;left:12px;padding:4px 10px;background:rgba(15,23,42,0.75);backdrop-filter:blur(8px);border-radius:99px;font-size:10px;font-weight:800;color:#38BDF8;">● VERIFIED OWNER</div>
          <div style="position:absolute;bottom:12px;right:12px;padding:6px 14px;background:#2563EB;color:#fff;border-radius:99px;font-size:13px;font-weight:900;box-shadow:0 4px 12px rgba(37,99,235,0.4);">₹28,500<span style="font-size:9px;font-weight:500;">/mo</span></div>
        </div>
        <div style="padding:18px;display:flex;flex-direction:column;gap:10px;">
          <div><div style="font-size:15px;font-weight:800;color:#0F172A;">Prestige Falcon City Duplex</div><div style="font-size:11px;color:#64748B;margin-top:2px;">Indiranagar 100ft Road, Bengaluru</div></div>
          <div style="display:flex;gap:8px;font-size:11px;color:#475569;font-weight:700;"><span style="padding:4px 8px;background:#F1F5F9;border-radius:6px;">3 Beds</span><span style="padding:4px 8px;background:#F1F5F9;border-radius:6px;">3 Baths</span><span style="padding:4px 8px;background:#F1F5F9;border-radius:6px;">1,850 sqft</span></div>
        </div>
      </div>`;

    case 1: // Model B: Interactive Amenity Bento Grid
      return `<div style="width:100%;max-width:320px;display:grid;grid-template-columns:1fr 1fr;gap:10px;">
        <div style="padding:14px;background:#EFF6FF;border:1.5px solid #BFDBFE;border-radius:18px;"><div style="font-size:22px;">🏊</div><div style="font-size:12px;font-weight:800;color:#1E40AF;margin-top:4px;">Olympic Pool</div><div style="font-size:9px;color:#3B82F6;">Clubhouse Access</div></div>
        <div style="padding:14px;background:#ECFDF5;border:1.5px solid #A7F3D0;border-radius:18px;"><div style="font-size:22px;">⚡</div><div style="font-size:12px;font-weight:800;color:#065F46;margin-top:4px;">100% Power</div><div style="font-size:9px;color:#059669;">DG Generator</div></div>
        <div style="padding:14px;background:#FFFBEB;border:1.5px solid #FDE68A;border-radius:18px;"><div style="font-size:22px;">🏋️</div><div style="font-size:12px;font-weight:800;color:#92400E;margin-top:4px;">Fitness Gym</div><div style="font-size:9px;color:#D97706;">24/7 Trainer</div></div>
        <div style="padding:14px;background:#F5F3FF;border:1.5px solid #DDD6FE;border-radius:18px;"><div style="font-size:22px;">🚗</div><div style="font-size:12px;font-weight:800;color:#5B21B6;margin-top:4px;">EV Charging</div><div style="font-size:9px;color:#7C3AED;">2 Reserved Slots</div></div>
      </div>`;

    case 2: // Model C: 2D Architectural Floor Plan Card
      return `<div style="width:100%;max-width:320px;background:#fff;border:1px solid #E2E8F0;border-radius:22px;padding:20px;display:flex;flex-direction:column;gap:14px;">
        <div style="display:flex;justify-content:space-between;align-items:center;">
          <div><div style="font-size:13px;font-weight:800;color:#0F172A;">Floor Plan • Type B</div><div style="font-size:10px;color:#64748B;">Carpet Area: 1,420 sq.ft</div></div>
          <span style="padding:4px 8px;background:#EFF6FF;color:#2563EB;border-radius:6px;font-size:10px;font-weight:800;">3 BHK</span>
        </div>
        <div style="background:#F8FAFC;border:1.5px dashed #CBD5E1;border-radius:14px;padding:24px;text-align:center;">
          <div style="font-size:28px;">📐</div>
          <div style="font-size:11px;font-weight:700;color:#475569;margin-top:6px;">Living: 18x14 • Master Bed: 14x12</div>
        </div>
      </div>`;

    case 3: // Model D: Maintenance Service Request Card
      return `<div style="width:100%;max-width:320px;background:#fff;border:1px solid #E2E8F0;border-radius:20px;padding:18px;display:flex;align-items:center;justify-content:space-between;">
        <div style="display:flex;align-items:center;gap:12px;">
          <div style="width:40px;height:40px;border-radius:12px;background:#FEF3C7;color:#D97706;display:flex;align-items:center;justify-content:center;font-size:20px;">🔧</div>
          <div><div style="font-size:13px;font-weight:800;color:#0F172A;">Plumbing Ticket #902</div><div style="font-size:10px;color:#D97706;font-weight:700;">● Tech Assigned (Today 2 PM)</div></div>
        </div>
        <span style="font-size:12px;color:#2563EB;font-weight:800;">Track →</span>
      </div>`;

    case 4: // Model E: Neighborhood Proximity Score
      return `<div style="width:100%;max-width:320px;background:#fff;border:1px solid #E2E8F0;border-radius:20px;padding:20px;display:flex;flex-direction:column;gap:12px;">
        <div style="display:flex;justify-content:space-between;align-items:baseline;">
          <span style="font-size:12px;font-weight:800;color:#0F172A;">Neighborhood Score</span>
          <span style="font-size:20px;font-weight:900;color:#059669;">9.4 <span style="font-size:10px;color:#64748B;">/ 10</span></span>
        </div>
        <div style="font-size:11px;color:#475569;display:flex;flex-direction:column;gap:4px;">
          <div>🚇 400m from Indiranagar Metro</div>
          <div>🛒 200m from Nature's Basket</div>
          <div>🏥 1.2km from Manipal Hospital</div>
        </div>
      </div>`;

    case 5: // Model F: Move-in Inspection Checklist Card
      return `<div style="width:100%;max-width:320px;background:#fff;border:1px solid #E2E8F0;border-radius:20px;padding:18px;display:flex;flex-direction:column;gap:8px;">
        <div style="font-size:12px;font-weight:800;color:#0F172A;margin-bottom:4px;">Move-in Handover Items</div>
        <div style="display:flex;justify-content:space-between;font-size:11px;padding:4px 0;border-bottom:1px solid #F1F5F9;"><span>Keys Handed Over (3 Sets)</span><strong style="color:#059669;">✓ Done</strong></div>
        <div style="display:flex;justify-content:space-between;font-size:11px;padding:4px 0;"><span>Electricity Meter Reading: 4902</span><strong style="color:#059669;">✓ Verified</strong></div>
      </div>`;

    case 6: // Model G: Rent Estimate Calculator
      return `<div style="width:100%;max-width:320px;background:#EFF6FF;border:1px solid #BFDBFE;border-radius:20px;padding:18px;display:flex;flex-direction:column;gap:8px;">
        <span style="font-size:10px;font-weight:800;color:#1E40AF;">AI RENT VALUATION</span>
        <div style="font-size:22px;font-weight:900;color:#1E40AF;">₹27,000 – ₹30,000</div>
        <div style="font-size:10px;color:#3B82F6;">Based on 14 recent leases in Indiranagar 100ft Road</div>
      </div>`;

    case 7: // Model H: Property Photo Gallery Strip
      return `<div style="width:100%;max-width:320px;display:grid;grid-template-columns:repeat(3,1fr);gap:6px;">
        <div style="height:70px;background:#1E293B;border-radius:10px;display:flex;align-items:center;justify-content:center;color:#fff;">🛋️</div>
        <div style="height:70px;background:#334155;border-radius:10px;display:flex;align-items:center;justify-content:center;color:#fff;">🛏️</div>
        <div style="height:70px;background:#475569;border-radius:10px;display:flex;align-items:center;justify-content:center;color:#fff;">🍽️</div>
      </div>`;

    case 8: // Model I: Occupancy Status Live Tag
      return `<div style="width:100%;max-width:320px;background:#fff;border:1px solid #E2E8F0;border-radius:16px;padding:14px;display:flex;justify-content:space-between;align-items:center;">
        <div><div style="font-size:12px;font-weight:800;color:#0F172A;">Unit #402 Status</div><div style="font-size:10px;color:#64748B;">Lease expires 28-Feb-2027</div></div>
        <span style="padding:4px 8px;background:#ECFDF5;color:#059669;border-radius:6px;font-size:10px;font-weight:800;">OCCUPIED</span>
      </div>`;

    case 9: // Model J: Minimal Monoline Property Card
      return `<div style="width:100%;max-width:320px;background:#fff;border:1.5px solid #0F172A;border-radius:16px;padding:16px;display:flex;justify-content:space-between;align-items:center;">
        <div><div style="font-size:13px;font-weight:800;color:#0F172A;">Indiranagar Duplex</div><div style="font-size:10px;color:#64748B;">₹28,500 / mo</div></div>
        <span style="font-size:14px;font-weight:800;">→</span>
      </div>`;

    case 10: // Model K: Apple Cupertino Porcelain Property Card (Light)
      return `<div style="width:100%;max-width:320px;background:#FFFFFF;border:1px solid #E2E8F0;border-radius:24px;padding:20px;box-shadow:0 12px 30px rgba(15,23,42,0.04);display:flex;flex-direction:column;gap:12px;">
        <div style="display:flex;justify-content:space-between;align-items:center;">
          <span style="font-size:14px;font-weight:900;color:#0F172A;">Porcelain Luxury Villa</span>
          <span style="font-size:16px;">🍏</span>
        </div>
        <div style="font-size:24px;font-weight:900;color:#059669;">₹ 45,000<span style="font-size:11px;color:#64748B;">/mo</span></div>
      </div>`;

    case 11: // Model L: CRED Acid Neon Titanium Property Pass (Dark)
    default:
      return `<div style="width:100%;max-width:320px;background:#09090B;border:1.5px solid rgba(204,255,0,0.4);border-radius:24px;padding:22px;color:#FFFFFF;box-shadow:0 20px 40px rgba(0,0,0,0.8);">
        <div style="font-size:10px;font-weight:900;color:#CCFF00;letter-spacing:0.1em;text-transform:uppercase;">TITANIUM RESIDENCY NODE</div>
        <div style="font-size:16px;font-weight:900;margin:6px 0;">Prestige Falcon Penthouse</div>
        <div style="font-size:22px;font-weight:900;color:#CCFF00;">₹ 65,000 / mo</div>
      </div>`;
  }
}

function renderLegalAndSocialVariants(fam, icon, slug, variantIndex) {
  switch (variantIndex) {
    case 0: // Model A: Government e-Stamp Legal Lease Certificate
      return `<div style="width:100%;max-width:320px;background:#FFFBEB;border:1.5px solid #F59E0B;border-radius:22px;padding:20px;box-shadow:0 8px 24px rgba(245,158,11,0.1);display:flex;flex-direction:column;gap:12px;">
        <div style="display:flex;justify-content:space-between;align-items:center;">
          <span style="font-size:10px;font-weight:900;color:#B45309;letter-spacing:0.08em;text-transform:uppercase;">GOVERNMENT E-STAMP SEAL</span>
          <span style="font-size:10px;font-weight:800;color:#78350F;background:#FEF3C7;padding:2px 6px;border-radius:4px;">#KA-2026-9041</span>
        </div>
        <div><div style="font-size:14px;font-weight:900;color:#78350F;">11-Month Residential Tenancy</div><div style="font-size:10px;color:#92400E;margin-top:2px;">Karnataka State Registration Dept.</div></div>
        <div style="padding:8px 12px;background:#FEF3C7;border-radius:8px;font-size:11px;color:#78350F;display:flex;justify-content:space-between;">
          <span>Tenant: Joshua K.</span>
          <strong>Duty Paid: ₹500</strong>
        </div>
      </div>`;

    case 1: // Model B: Tenant Testimonial Review Card
      return `<div style="width:100%;max-width:320px;background:#fff;border:1px solid #E2E8F0;border-radius:20px;padding:20px;box-shadow:0 4px 14px rgba(0,0,0,0.04);display:flex;flex-direction:column;gap:10px;">
        <div style="display:flex;justify-content:space-between;align-items:center;">
          <div style="display:flex;align-items:center;gap:10px;">
            <div style="width:36px;height:36px;border-radius:50%;background:#2563EB;color:#fff;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:800;">AK</div>
            <div><div style="font-size:12px;font-weight:800;color:#0F172A;">Ananya Kashyap</div><div style="font-size:10px;color:#059669;font-weight:700;">Verified Tenant (14 mo)</div></div>
          </div>
          <span style="color:#F59E0B;font-size:12px;">★★★★★</span>
        </div>
        <div style="font-size:11px;color:#475569;line-height:1.5;">"Deposit was safely held in escrow and returned within 24 hours of checkout. Complete peace of mind!"</div>
      </div>`;

    case 2: // Model C: E-Signature Capture Pad Preview
      return `<div style="width:100%;max-width:320px;background:#fff;border:1px solid #E2E8F0;border-radius:20px;padding:18px;display:flex;flex-direction:column;gap:10px;">
        <div style="display:flex;justify-content:space-between;"><span style="font-size:11px;font-weight:800;color:#64748B;">DIGITAL SIGNATURE</span><span style="font-size:10px;color:#059669;font-weight:800;">VERIFIED AADHAAR</span></div>
        <div style="height:60px;background:#F8FAFC;border:1.5px dashed #CBD5E1;border-radius:10px;display:flex;align-items:center;justify-content:center;font-family:'Brush Script MT', cursive, sans-serif;font-size:24px;color:#1E40AF;">Joshua Kanatt</div>
        <div style="font-size:9px;color:#94A3B8;text-align:right;">Signed on 2026-03-01 10:42 AM IST</div>
      </div>`;

    case 3: // Model D: Trust Badge Matrix
      return `<div style="width:100%;max-width:320px;background:#F0FDF4;border:1.5px solid #86EFAC;border-radius:18px;padding:16px;display:flex;align-items:center;gap:12px;">
        <span style="font-size:24px;">🛡️</span>
        <div><div style="font-size:13px;font-weight:800;color:#166534;">₹10 Lakh Deposit Shield</div><div style="font-size:10px;color:#15803D;">Underwritten by ICICI Lombard</div></div>
      </div>`;

    case 4: // Model E: Audit Log Trail Block
      return `<div style="width:100%;max-width:320px;background:#fff;border:1px solid #E2E8F0;border-radius:18px;padding:16px;display:flex;flex-direction:column;gap:8px;">
        <div style="font-size:11px;font-weight:800;color:#64748B;">IMMUTABLE AUDIT TRAIL</div>
        <div style="font-size:11px;color:#334155;">● Lease drafted by Landlord (24-Feb)</div>
        <div style="font-size:11px;color:#334155;">● e-Signed by Joshua K. (25-Feb)</div>
        <div style="font-size:11px;color:#059669;font-weight:800;">● Escrow deposit locked (01-Mar)</div>
      </div>`;

    case 5: // Model F: Document Attachment Card
      return `<div style="width:100%;max-width:320px;background:#fff;border:1px solid #E2E8F0;border-radius:16px;padding:14px;display:flex;align-items:center;justify-content:space-between;">
        <div style="display:flex;align-items:center;gap:10px;"><span style="font-size:20px;">📄</span><div><div style="font-size:12px;font-weight:800;color:#0F172A;">Rental_Agreement_Final.pdf</div><div style="font-size:10px;color:#64748B;">3.4 MB • Cryptographically Signed</div></div></div>
        <span style="font-size:12px;color:#2563EB;font-weight:800;">View ↗</span>
      </div>`;

    case 6: // Model G: Consent Block Switch
      return `<div style="width:100%;max-width:320px;background:#fff;border:1px solid #E2E8F0;border-radius:16px;padding:14px;display:flex;align-items:center;gap:10px;">
        <input type="checkbox" checked style="width:18px;height:18px;">
        <span style="font-size:11px;color:#334155;line-height:1.4;">I consent to credit bureau pull for Rent-to-Credit reporting.</span>
      </div>`;

    case 7: // Model H: QR Code Lease Verification
      return `<div style="width:100%;max-width:320px;background:#fff;border:1px solid #E2E8F0;border-radius:20px;padding:18px;display:flex;align-items:center;gap:14px;">
        <div style="width:50px;height:50px;background:#0F172A;border-radius:8px;display:flex;align-items:center;justify-content:center;color:#fff;font-size:24px;">📱</div>
        <div><div style="font-size:12px;font-weight:800;color:#0F172A;">Scan to Verify Lease</div><div style="font-size:10px;color:#64748B;">Government Portal Instant Lookup</div></div>
      </div>`;

    case 8: // Model I: Privacy Policy Compliance Badge
      return `<div style="width:100%;max-width:320px;background:#F8FAFC;border:1px solid #E2E8F0;border-radius:16px;padding:14px;display:flex;align-items:center;gap:10px;">
        <span style="font-size:18px;">🔒</span>
        <span style="font-size:11px;color:#475569;font-weight:600;">ISO 27001 & DPDP Act 2023 Compliant</span>
      </div>`;

    case 9: // Model J: Minimal Monoline Terms Block
      return `<div style="width:100%;max-width:320px;background:#fff;border:1.5px solid #0F172A;border-radius:14px;padding:14px;display:flex;justify-content:space-between;align-items:center;">
        <span style="font-size:12px;font-weight:800;">Terms & Conditions (11 Mo)</span>
        <span>→</span>
      </div>`;

    case 10: // Model K: Apple Cupertino Porcelain Certificate (Light)
      return `<div style="width:100%;max-width:320px;background:#FFFFFF;border:1px solid #E2E8F0;border-radius:24px;padding:22px;box-shadow:0 12px 30px rgba(15,23,42,0.04);display:flex;flex-direction:column;gap:10px;">
        <div style="display:flex;justify-content:space-between;"><span style="font-size:13px;font-weight:900;">Porcelain Trust Seal</span><span style="font-size:16px;">🍏</span></div>
        <div style="font-size:11px;color:#64748B;">Hardware Secure Enclave e-Signature verification.</div>
      </div>`;

    case 11: // Model L: CRED Acid Neon Titanium Seal (Dark)
    default:
      return `<div style="width:100%;max-width:320px;background:#09090B;border:1.5px solid rgba(204,255,0,0.4);border-radius:24px;padding:22px;color:#FFFFFF;box-shadow:0 20px 40px rgba(0,0,0,0.8);">
        <div style="font-size:10px;font-weight:900;color:#CCFF00;letter-spacing:0.1em;text-transform:uppercase;">CRED TITANIUM LEGAL NODE</div>
        <div style="font-size:14px;font-weight:900;margin:6px 0;">Cryptographic Lease Hash</div>
        <div style="font-size:10px;font-family:monospace;color:#A1A1AA;">0x9F41...D201 (VERIFIED)</div>
      </div>`;
  }
}

module.exports = {
  renderAuthVariants,
  renderPropertyVariants,
  renderLegalAndSocialVariants
};
