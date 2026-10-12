/**
 * RentenPe UI Kit - Rich Multi-Archetype Variant Engine
 * Guarantees every component page (and all 10 variant models A through J)
 * has distinct, clean, modern, premium UI layouts inspired by Apple, Tesla, CRED, and Pinterest.
 */

// ============================================================================
// 1. DOWNLOAD ACTION (10 Bespoke Models)
// ============================================================================
function renderDownloadVariants(fam, icon, variantIndex) {
  switch (variantIndex) {
    case 0: // Model A: Hero Radial Progress Download Card
      return `<div style="width:100%;max-width:340px;background:#ffffff;border:1px solid #E2E8F0;border-radius:24px;box-shadow:0 12px 30px rgba(15,23,42,0.06);padding:24px;display:flex;flex-direction:column;gap:18px;">
        <div style="display:flex;align-items:center;justify-content:space-between;">
          <div style="display:flex;align-items:center;gap:12px;">
            <div style="width:44px;height:44px;border-radius:14px;background:#EFF6FF;color:#2563EB;display:flex;align-items:center;justify-content:center;font-size:22px;">📄</div>
            <div>
              <div style="font-size:14px;font-weight:800;color:#0F172A;line-height:1.2;">Rental_Agreement_2026.pdf</div>
              <div style="font-size:11px;color:#64748B;margin-top:3px;">4.2 MB • Ready for download</div>
            </div>
          </div>
          <span style="padding:4px 8px;background:#ECFDF5;color:#059669;border-radius:6px;font-size:10px;font-weight:800;">VERIFIED</span>
        </div>
        <div style="background:#F8FAFC;border:1px solid #F1F5F9;border-radius:16px;padding:16px;display:flex;align-items:center;gap:16px;">
          <div style="position:relative;width:56px;height:56px;display:flex;align-items:center;justify-content:center;">
            <svg width="56" height="56" viewBox="0 0 56 56">
              <circle cx="28" cy="28" r="22" stroke="#E2E8F0" stroke-width="4.5" fill="none"/>
              <circle cx="28" cy="28" r="22" stroke="#2563EB" stroke-width="4.5" fill="none" stroke-dasharray="138.2" stroke-dashoffset="35.9" stroke-linecap="round" transform="rotate(-90 28 28)"/>
            </svg>
            <span style="position:absolute;font-size:12px;font-weight:800;color:#0F172A;">74%</span>
          </div>
          <div style="flex:1;">
            <div style="display:flex;justify-content:space-between;font-size:11px;font-weight:700;margin-bottom:6px;">
              <span style="color:#0F172A;">Downloading...</span>
              <span style="color:#2563EB;">2.4 MB / s</span>
            </div>
            <div style="font-size:10px;color:#64748B;">3.1 MB of 4.2 MB • 1.2s remaining</div>
          </div>
        </div>
        <div style="display:flex;gap:10px;">
          <button style="flex:1;padding:12px;background:#0F172A;color:#fff;border:none;border-radius:12px;font-size:12px;font-weight:700;display:flex;align-items:center;justify-content:center;gap:6px;cursor:pointer;">
            <span>⏸</span> Pause
          </button>
          <button style="padding:12px 16px;background:#F1F5F9;color:#64748B;border:none;border-radius:12px;font-size:12px;font-weight:700;cursor:pointer;">
            ✕ Cancel
          </button>
        </div>
      </div>`;

    case 1: // Model B: Split Dropdown Format Selector
      return `<div style="width:100%;max-width:340px;background:#ffffff;border:1px solid #E2E8F0;border-radius:24px;padding:22px;display:flex;flex-direction:column;gap:14px;box-shadow:0 8px 24px rgba(15,23,42,0.05);">
        <div style="display:flex;align-items:center;justify-content:space-between;">
          <span style="font-size:11px;font-weight:800;color:#64748B;text-transform:uppercase;letter-spacing:0.05em;">FINANCIAL STATEMENT</span>
          <span style="padding:2px 8px;background:#EFF6FF;color:#2563EB;border-radius:6px;font-size:10px;font-weight:700;">FY 2025-26</span>
        </div>
        <div style="display:flex;align-items:stretch;border-radius:14px;overflow:hidden;box-shadow:0 4px 14px rgba(15,23,42,0.12);">
          <button style="flex:1;padding:14px 18px;background:#0F172A;color:#fff;border:none;font-size:13px;font-weight:700;display:flex;align-items:center;justify-content:center;gap:8px;cursor:pointer;">
            <span>⬇️</span> Download Statement
          </button>
          <div style="width:1px;background:rgba(255,255,255,0.15);"></div>
          <button style="padding:14px 16px;background:#0F172A;color:#fff;border:none;font-size:12px;font-weight:700;cursor:pointer;">
            ▼
          </button>
        </div>
        <div style="display:flex;gap:8px;">
          <button style="flex:1;padding:8px 10px;background:#EFF6FF;border:1.5px solid #2563EB;border-radius:10px;color:#2563EB;font-size:11px;font-weight:700;cursor:pointer;">
            ● PDF (4.2 MB)
          </button>
          <button style="flex:1;padding:8px 10px;background:#F8FAFC;border:1px solid #E2E8F0;border-radius:10px;color:#64748B;font-size:11px;font-weight:600;cursor:pointer;">
            CSV (1.1 MB)
          </button>
          <button style="flex:1;padding:8px 10px;background:#F8FAFC;border:1px solid #E2E8F0;border-radius:10px;color:#64748B;font-size:11px;font-weight:600;cursor:pointer;">
            XLSX (890 KB)
          </button>
        </div>
      </div>`;

    case 2: // Model C: Minimal Inline File Strip with Cloud Sync
      return `<div style="width:100%;max-width:340px;background:#fff;border:1px solid #E2E8F0;border-radius:18px;padding:18px 20px;display:flex;align-items:center;justify-content:space-between;box-shadow:0 4px 12px rgba(15,23,42,0.04);">
        <div style="display:flex;align-items:center;gap:12px;">
          <div style="width:38px;height:38px;border-radius:10px;background:#F0FDF4;color:#16A34A;display:flex;align-items:center;justify-content:center;font-size:18px;">☁️</div>
          <div>
            <div style="font-size:13px;font-weight:700;color:#0F172A;">Rent_Receipt_Mar26.pdf</div>
            <div style="font-size:11px;color:#64748B;">320 KB • Synced to Drive</div>
          </div>
        </div>
        <button style="padding:8px 14px;background:#F8FAFC;border:1px solid #E2E8F0;border-radius:10px;color:#0F172A;font-size:12px;font-weight:700;cursor:pointer;display:inline-flex;align-items:center;gap:4px;">
          Save ↓
        </button>
      </div>`;

    case 3: // Model D: Circular Tactile FAB Disc
      return `<div style="width:100%;max-width:340px;background:#fff;border:1px solid #E2E8F0;border-radius:24px;padding:26px;display:flex;flex-direction:column;align-items:center;gap:14px;box-shadow:0 8px 24px rgba(15,23,42,0.05);">
        <div style="position:relative;width:72px;height:72px;border-radius:50%;background:#0F172A;display:flex;align-items:center;justify-content:center;box-shadow:0 14px 28px rgba(15,23,42,0.35), 0 0 0 4px rgba(37,99,235,0.2);cursor:pointer;">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7 10 12 15 17 10"></polyline>
            <line x1="12" y1="15" x2="12" y2="3"></line>
          </svg>
          <span style="position:absolute;top:-2px;right:-2px;padding:3px 7px;background:#2563EB;color:#fff;border-radius:99px;font-size:10px;font-weight:800;border:2px solid #fff;">3</span>
        </div>
        <div style="text-align:center;">
          <div style="font-size:14px;font-weight:800;color:#0F172A;">Tap to Download Bundle</div>
          <div style="font-size:11px;color:#64748B;margin-top:3px;">3 legal attachments • 8.4 MB</div>
        </div>
      </div>`;

    case 4: // Model E: VisionOS Frosted Glass Floating Dock
      return `<div style="width:100%;max-width:340px;background:rgba(255,255,255,0.8);backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);border:1px solid rgba(255,255,255,0.9);border-radius:24px;padding:16px 20px;box-shadow:0 20px 40px rgba(15,23,42,0.08), 0 1px 3px rgba(0,0,0,0.05);display:flex;align-items:center;justify-content:space-between;gap:14px;">
        <div style="display:flex;align-items:center;gap:10px;">
          <span style="width:10px;height:10px;border-radius:50%;background:#10B981;box-shadow:0 0 8px #10B981;"></span>
          <div>
            <div style="font-size:12px;font-weight:800;color:#0F172A;">3 Files Ready</div>
            <div style="font-size:10px;color:#64748B;">12.8 MB Total Size</div>
          </div>
        </div>
        <button style="padding:10px 18px;background:#0F172A;color:#fff;border:none;border-radius:99px;font-size:12px;font-weight:700;display:flex;align-items:center;gap:6px;cursor:pointer;box-shadow:0 4px 12px rgba(15,23,42,0.2);">
          <span>Download All</span>
          <span>↓</span>
        </button>
      </div>`;

    case 5: // Model F: Obsidian Cyber Holographic Vault Button
      return `<div style="width:100%;max-width:340px;background:#09090B;border:1px solid #27272A;border-radius:22px;padding:22px;color:#fff;box-shadow:0 20px 40px rgba(0,0,0,0.6), 0 0 20px rgba(56,189,248,0.12);display:flex;flex-direction:column;gap:16px;">
        <div style="display:flex;justify-content:space-between;align-items:center;">
          <div style="display:flex;align-items:center;gap:8px;">
            <span style="color:#38BDF8;font-size:14px;">🛡️</span>
            <span style="font-size:12px;font-weight:800;color:#F4F4F5;letter-spacing:0.04em;">ENCRYPTED VAULT</span>
          </div>
          <span style="font-family:monospace;font-size:10px;color:#38BDF8;background:rgba(56,189,248,0.12);padding:2px 6px;border-radius:4px;border:1px solid rgba(56,189,248,0.25);">AES-256</span>
        </div>
        <div style="font-size:12px;color:#A1A1AA;line-height:1.4;">Zero-knowledge cryptographic lease archive. Signed with Ed25519 tenant key.</div>
        <button style="width:100%;padding:14px;background:linear-gradient(135deg, #0284C7 0%, #0369A1 100%);color:#fff;border:none;border-radius:12px;font-size:13px;font-weight:700;display:flex;align-items:center;justify-content:center;gap:8px;box-shadow:0 8px 20px rgba(2,132,199,0.35);cursor:pointer;">
          <span>⬇</span>
          <span>Decrypt & Download</span>
        </button>
      </div>`;

    case 6: // Model G: Perforated Voucher Ticket Download Card
      return `<div style="width:100%;max-width:340px;background:#FFFBEB;border:1.5px dashed #F59E0B;border-radius:20px;padding:22px;position:relative;display:flex;flex-direction:column;gap:14px;box-shadow:0 8px 20px rgba(245,158,11,0.08);">
        <div style="display:flex;justify-content:space-between;align-items:center;">
          <span style="font-size:10px;font-weight:900;color:#B45309;letter-spacing:0.08em;text-transform:uppercase;">OFFICIAL RENT VOUCHER</span>
          <span style="padding:2px 8px;background:#FEF3C7;color:#92400E;border-radius:6px;font-size:10px;font-weight:800;">#RP-2026-904</span>
        </div>
        <div style="display:flex;justify-content:space-between;align-items:baseline;">
          <div>
            <div style="font-size:11px;color:#78350F;">Monthly Rent Paid</div>
            <div style="font-size:24px;font-weight:900;color:#78350F;letter-spacing:-0.02em;">₹28,500</div>
          </div>
          <span style="font-size:12px;color:#059669;font-weight:800;">● Verified HDFC</span>
        </div>
        <div style="border-top:1px dashed #FCD34D;padding-top:12px;">
          <button style="width:100%;padding:12px;background:#B45309;color:#fff;border:none;border-radius:10px;font-size:12px;font-weight:700;display:flex;align-items:center;justify-content:center;gap:6px;cursor:pointer;">
            <span>✂</span> Download PDF Voucher (384 KB)
          </button>
        </div>
      </div>`;

    case 7: // Model H: Multi-Document Batch Download Manager
      return `<div style="width:100%;max-width:340px;background:#fff;border:1px solid #E2E8F0;border-radius:22px;padding:20px;box-shadow:0 8px 24px rgba(15,23,42,0.05);display:flex;flex-direction:column;gap:12px;">
        <div style="display:flex;justify-content:space-between;align-items:center;">
          <span style="font-size:13px;font-weight:800;color:#0F172A;">Batch Documents</span>
          <span style="font-size:11px;color:#2563EB;font-weight:700;cursor:pointer;">Select All (3)</span>
        </div>
        <div style="display:flex;flex-direction:column;gap:8px;">
          <label style="display:flex;align-items:center;justify-content:space-between;padding:8px 10px;background:#F8FAFC;border-radius:10px;cursor:pointer;">
            <div style="display:flex;align-items:center;gap:8px;">
              <input type="checkbox" checked style="accent-color:#2563EB;">
              <span style="font-size:12px;font-weight:600;color:#0F172A;">Lease_Agreement.pdf</span>
            </div>
            <span style="font-size:11px;color:#64748B;">3.8 MB</span>
          </label>
          <label style="display:flex;align-items:center;justify-content:space-between;padding:8px 10px;background:#F8FAFC;border-radius:10px;cursor:pointer;">
            <div style="display:flex;align-items:center;gap:8px;">
              <input type="checkbox" checked style="accent-color:#2563EB;">
              <span style="font-size:12px;font-weight:600;color:#0F172A;">Deposit_Receipt.pdf</span>
            </div>
            <span style="font-size:11px;color:#64748B;">1.4 MB</span>
          </label>
          <label style="display:flex;align-items:center;justify-content:space-between;padding:8px 10px;background:#F8FAFC;border-radius:10px;cursor:pointer;">
            <div style="display:flex;align-items:center;gap:8px;">
              <input type="checkbox" checked style="accent-color:#2563EB;">
              <span style="font-size:12px;font-weight:600;color:#0F172A;">KYC_Aadhaar_PAN.pdf</span>
            </div>
            <span style="font-size:11px;color:#64748B;">2.1 MB</span>
          </label>
        </div>
        <button style="width:100%;margin-top:4px;padding:12px;background:#0F172A;color:#fff;border:none;border-radius:12px;font-size:12px;font-weight:700;display:flex;align-items:center;justify-content:center;gap:6px;cursor:pointer;">
          <span>⬇</span> Download Selected (7.3 MB)
        </button>
      </div>`;

    case 8: // Model I: Tesla Swipe-to-Download Slider Track
      return `<div style="width:100%;max-width:340px;background:#fff;border:1px solid #E2E8F0;border-radius:22px;padding:20px;box-shadow:0 8px 24px rgba(15,23,42,0.05);display:flex;flex-direction:column;gap:14px;">
        <div style="display:flex;justify-content:space-between;align-items:center;">
          <span style="font-size:12px;font-weight:800;color:#0F172A;">Lease Executed Contract</span>
          <span style="font-size:11px;color:#64748B;">10.4 MB</span>
        </div>
        <div style="height:52px;background:#F1F5F9;border-radius:99px;position:relative;display:flex;align-items:center;padding:4px;overflow:hidden;">
          <div style="width:44px;height:44px;background:#0F172A;border-radius:50%;display:flex;align-items:center;justify-content:center;color:#fff;font-size:16px;box-shadow:0 4px 10px rgba(15,23,42,0.25);cursor:pointer;z-index:2;">
            ➔
          </div>
          <div style="position:absolute;left:0;right:0;text-align:center;font-size:12px;font-weight:700;color:#64748B;letter-spacing:0.02em;">
            Swipe to Confirm Download ≫
          </div>
        </div>
        <div style="text-align:center;font-size:10px;color:#94A3B8;">Accidental tap protection enabled</div>
      </div>`;

    case 9: // Model J: Biometric Authenticated Download Button
      return `<div style="width:100%;max-width:340px;background:linear-gradient(145deg, #18181B 0%, #09090B 100%);border:1px solid #27272A;border-radius:24px;padding:22px;color:#fff;box-shadow:0 16px 36px rgba(0,0,0,0.5);display:flex;flex-direction:column;gap:16px;">
        <div style="display:flex;align-items:center;gap:12px;">
          <div style="width:42px;height:42px;border-radius:12px;background:rgba(255,255,255,0.08);display:flex;align-items:center;justify-content:center;font-size:20px;">🪪</div>
          <div>
            <div style="font-size:13px;font-weight:800;color:#fff;">Protected Legal Record</div>
            <div style="font-size:11px;color:#71717A;">Contains sensitive PAN / Bank info</div>
          </div>
        </div>
        <button style="width:100%;padding:14px;background:#F59E0B;color:#000;border:none;border-radius:12px;font-size:13px;font-weight:800;display:flex;align-items:center;justify-content:center;gap:8px;box-shadow:0 8px 24px rgba(245,158,11,0.25);cursor:pointer;">
          <span>🔒</span> FaceID Tap to Download
        </button>
        <div style="text-align:center;font-size:10px;color:#71717A;">Zero logs retained on client device</div>
      </div>`;

    case 10: // Model K: Apple Porcelain Quick-AirDrop & Offline Lease Vault Card (Light Theme)
      return `<div style="width:100%;max-width:340px;background:#FFFFFF;border:1px solid #E2E8F0;border-radius:26px;padding:22px;box-shadow:0 12px 32px rgba(15,23,42,0.04);display:flex;flex-direction:column;gap:16px;">
        <div style="display:flex;align-items:center;justify-content:space-between;">
          <div style="display:flex;align-items:center;gap:10px;">
            <div style="width:36px;height:36px;border-radius:12px;background:#EFF6FF;color:#2563EB;display:flex;align-items:center;justify-content:center;font-size:18px;">📄</div>
            <div>
              <div style="font-size:13px;font-weight:800;color:#0F172A;">Digital Tenancy Deed.pdf</div>
              <div style="font-size:10px;color:#64748B;">4.8 MB • AirDrop Ready</div>
            </div>
          </div>
          <span style="padding:4px 8px;background:#ECFDF5;color:#059669;border-radius:6px;font-size:10px;font-weight:800;">VERIFIED E-STAMP</span>
        </div>
        <div style="background:#F8FAFC;border:1px solid #F1F5F9;border-radius:18px;padding:14px;display:flex;align-items:center;justify-content:space-between;">
          <div style="display:flex;align-items:center;gap:10px;">
            <div style="width:10px;height:10px;border-radius:50%;background:#10B981;box-shadow:0 0 6px #10B981;"></div>
            <span style="font-size:12px;font-weight:700;color:#0F172A;">Encrypted Local Storage</span>
          </div>
          <span style="font-size:11px;font-weight:700;color:#2563EB;">100% Downloaded</span>
        </div>
        <div style="display:flex;gap:8px;">
          <button style="flex:1;padding:12px;background:#0F172A;color:#FFFFFF;border:none;border-radius:12px;font-size:12px;font-weight:800;cursor:pointer;">
            Open Document ↗
          </button>
          <button style="padding:12px 16px;background:#F1F5F9;color:#0F172A;border:none;border-radius:12px;font-size:12px;font-weight:800;cursor:pointer;">
            AirDrop 📡
          </button>
        </div>
      </div>`;

    case 11: // Model L: CRED Obsidian Cyber Vault Download Sheet (Dark Theme)
    default:
      return `<div style="width:100%;max-width:340px;background:#09090B;border:1px solid rgba(204,255,0,0.3);border-radius:26px;padding:22px;box-shadow:0 24px 48px rgba(0,0,0,0.7),inset 0 1px 0 rgba(204,255,0,0.2);color:#FFFFFF;display:flex;flex-direction:column;gap:16px;">
        <div style="display:flex;align-items:center;justify-content:space-between;">
          <span style="font-size:11px;font-weight:900;letter-spacing:0.08em;color:#CCFF00;text-transform:uppercase;">TITANIUM VAULT SECURE</span>
          <span style="font-family:monospace;font-size:10px;color:#71717A;">HASH::0x8F92</span>
        </div>
        <div>
          <div style="font-size:15px;font-weight:900;color:#FFFFFF;">Government Executed Deed 2026</div>
          <div style="font-size:11px;color:#A1A1AA;margin-top:2px;">Karnataka Stamp Office Registered</div>
        </div>
        <div style="width:100%;height:6px;background:#27272A;border-radius:99px;overflow:hidden;">
          <div style="width:100%;height:100%;background:#CCFF00;box-shadow:0 0 12px #CCFF00;"></div>
        </div>
        <button style="width:100%;padding:12px;background:#CCFF00;color:#09090B;border:none;border-radius:14px;font-size:12px;font-weight:900;display:flex;align-items:center;justify-content:center;gap:6px;box-shadow:0 0 20px rgba(204,255,0,0.45);cursor:pointer;">
          <span>⬇️</span> Instant Decrypt & Download
        </button>
      </div>`;
  }
}

// ============================================================================
// 2. COPY ACTION (10 Bespoke Models)
// ============================================================================
function renderCopyVariants(fam, icon, variantIndex) {
  switch (variantIndex) {
    case 0:
      return `<div style="width:100%;max-width:320px;background:#fff;border:1px solid #E2E8F0;border-radius:20px;padding:20px;box-shadow:0 8px 24px rgba(0,0,0,0.04);display:flex;flex-direction:column;gap:12px;">
        <span style="font-size:11px;font-weight:800;color:#64748B;text-transform:uppercase;">Bank Account Number</span>
        <div style="display:flex;align-items:center;justify-content:space-between;padding:12px 14px;background:#F8FAFC;border:1px solid #E2E8F0;border-radius:12px;">
          <span style="font-family:monospace;font-size:15px;font-weight:800;color:#0F172A;letter-spacing:0.08em;">50100492819021</span>
          <button style="padding:6px 12px;background:#0F172A;color:#fff;border:none;border-radius:8px;font-size:11px;font-weight:700;cursor:pointer;">Copy</button>
        </div>
        <span style="font-size:11px;color:#10B981;font-weight:700;">✓ Ready to paste for NEFT / RTGS</span>
      </div>`;
    case 1:
      return `<div style="width:100%;max-width:320px;background:#09090B;border:1px solid #27272A;border-radius:18px;padding:18px;color:#fff;">
        <div style="display:flex;justify-content:space-between;margin-bottom:10px;font-size:11px;color:#A1A1AA;">
          <span>IFSC CODE</span>
          <span style="color:#60A5FA;cursor:pointer;font-weight:700;">📋 Click to Copy</span>
        </div>
        <div style="background:#18181B;border-radius:10px;padding:12px;font-family:monospace;font-size:16px;font-weight:800;color:#38BDF8;letter-spacing:0.1em;text-align:center;">
          HDFC0000240
        </div>
      </div>`;
    case 2:
      return `<div style="width:100%;max-width:320px;background:#fff;border:1px solid #E2E8F0;border-radius:16px;padding:16px 20px;display:flex;align-items:center;justify-content:space-between;">
        <div><div style="font-size:11px;color:#64748B;">UPI ID</div><div style="font-size:14px;font-weight:800;color:#0F172A;">rentenpe.rent@okhdfc</div></div>
        <button style="width:36px;height:36px;border-radius:10px;background:#EFF6FF;color:#2563EB;border:none;font-size:16px;display:flex;align-items:center;justify-content:center;cursor:pointer;">📋</button>
      </div>`;
    case 3:
      return `<div style="width:100%;max-width:320px;background:linear-gradient(135deg,#FEF3C7 0%,#FFFBEB 100%);border:1.5px dashed #F59E0B;border-radius:18px;padding:18px;text-align:center;">
        <div style="font-size:11px;font-weight:800;color:#B45309;margin-bottom:6px;">REFERRAL CODE (₹500 OFF)</div>
        <div style="font-size:22px;font-weight:900;letter-spacing:0.15em;color:#78350F;margin-bottom:10px;">JOSHUA500</div>
        <button style="width:100%;padding:10px;background:#B45309;color:#fff;border:none;border-radius:10px;font-size:12px;font-weight:700;cursor:pointer;">Copy Code & Apply</button>
      </div>`;
    case 4:
      return `<div style="width:100%;max-width:320px;background:#fff;border:1px solid #E2E8F0;border-radius:18px;padding:18px;display:flex;flex-direction:column;gap:10px;">
        <div style="display:flex;justify-content:space-between;font-size:12px;"><span style="color:#64748B;">Beneficiary:</span><span style="font-weight:700;color:#0F172A;">RentenPe Escrow Ltd 📋</span></div>
        <div style="display:flex;justify-content:space-between;font-size:12px;"><span style="color:#64748B;">Branch:</span><span style="font-weight:700;color:#0F172A;">Indiranagar, BLR 📋</span></div>
      </div>`;
    case 5:
      return `<div style="width:100%;max-width:320px;background:rgba(255,255,255,0.8);backdrop-filter:blur(16px);border:1px solid rgba(255,255,255,0.9);border-radius:20px;padding:18px;box-shadow:0 12px 30px rgba(0,0,0,0.06);">
        <div style="font-size:11px;font-weight:700;color:#64748B;margin-bottom:6px;">API Key (Secret)</div>
        <div style="display:flex;align-items:center;gap:8px;">
          <input type="password" value="sk_live_904829104812" readonly style="flex:1;padding:8px 12px;background:#F1F5F9;border:none;border-radius:8px;font-family:monospace;font-size:12px;">
          <button style="padding:8px 14px;background:#0F172A;color:#fff;border:none;border-radius:8px;font-size:11px;font-weight:700;cursor:pointer;">Copy Key</button>
        </div>
      </div>`;
    case 6:
      return `<div style="width:100%;max-width:320px;padding:12px 18px;background:#0F172A;color:#fff;border-radius:99px;display:flex;align-items:center;justify-content:space-between;box-shadow:0 10px 24px rgba(15,23,42,0.3);">
        <div style="display:flex;align-items:center;gap:8px;"><span style="color:#10B981;">✓</span><span style="font-size:12px;font-weight:700;">Copied to clipboard</span></div>
        <span style="font-size:11px;color:#94A3B8;">Ready</span>
      </div>`;
    case 7:
      return `<div style="width:100%;max-width:320px;background:#fff;border:1px solid #E2E8F0;border-radius:20px;padding:18px;display:flex;gap:10px;">
        <button style="flex:1;padding:10px;background:#EFF6FF;color:#2563EB;border:1px solid #BFDBFE;border-radius:10px;font-size:11px;font-weight:700;cursor:pointer;">🔗 Copy Link</button>
        <button style="flex:1;padding:10px;background:#F8FAFC;color:#0F172A;border:1px solid #E2E8F0;border-radius:10px;font-size:11px;font-weight:700;cursor:pointer;">📱 Copy UPI ID</button>
      </div>`;
    case 8:
      return `<div style="width:100%;max-width:320px;display:flex;justify-content:center;">
        <div style="padding:8px 16px;background:#F1F5F9;border-radius:99px;display:inline-flex;align-items:center;gap:8px;cursor:pointer;">
          <span style="font-size:12px;font-weight:700;color:#0F172A;">#RENTENPE-BLR-402</span>
          <span style="font-size:12px;color:#64748B;">📋</span>
        </div>
      </div>`;
    case 9:
      return `<div style="width:100%;max-width:320px;background:#FEF2F2;border:1px solid #FECACA;border-radius:18px;padding:18px;text-align:center;">
        <div style="font-size:11px;font-weight:700;color:#991B1B;margin-bottom:4px;">⏱ ONE-TIME TRANSACTION TOKEN</div>
        <div style="font-size:18px;font-weight:900;font-family:monospace;color:#991B1B;margin-bottom:8px;">948201</div>
        <div style="font-size:10px;color:#EF4444;">Auto-clears from clipboard in 30s</div>
      </div>`;

    case 10: // Model K: Apple Porcelain One-Tap UPI Copy Capsule (Light Theme)
      return `<div style="width:100%;max-width:320px;background:#FFFFFF;border:1px solid #E2E8F0;border-radius:24px;padding:18px 20px;box-shadow:0 10px 28px rgba(15,23,42,0.04);display:flex;align-items:center;justify-content:space-between;">
        <div style="display:flex;align-items:center;gap:10px;">
          <div style="width:36px;height:36px;border-radius:12px;background:#ECFDF5;color:#059669;display:flex;align-items:center;justify-content:center;font-size:16px;">🍏</div>
          <div>
            <div style="font-size:10px;font-weight:700;color:#64748B;letter-spacing:0.04em;text-transform:uppercase;">VPA ADDRESS</div>
            <div style="font-size:13px;font-weight:800;color:#0F172A;font-family:monospace;">rentenpe@icici</div>
          </div>
        </div>
        <button style="padding:8px 14px;background:#0F172A;color:#FFFFFF;border:none;border-radius:99px;font-size:11px;font-weight:800;cursor:pointer;box-shadow:0 2px 8px rgba(15,23,42,0.15);">
          Copy 📋
        </button>
      </div>`;

    case 11: // Model L: CRED Monex Neon Clipboard Card (Dark Theme)
    default:
      return `<div style="width:100%;max-width:320px;background:#09090B;border:1px solid rgba(204,255,0,0.3);border-radius:24px;padding:20px;box-shadow:0 20px 40px rgba(0,0,0,0.7);display:flex;flex-direction:column;gap:12px;">
        <div style="display:flex;justify-content:space-between;align-items:center;">
          <span style="font-size:10px;font-weight:900;color:#CCFF00;letter-spacing:0.1em;text-transform:uppercase;">TITANIUM ESCROW VPA</span>
          <span style="padding:2px 6px;background:rgba(204,255,0,0.12);color:#CCFF00;border-radius:4px;font-size:9px;font-weight:800;">ZERO FEES</span>
        </div>
        <div style="background:#18181B;border:1px solid #27272A;border-radius:14px;padding:12px;display:flex;align-items:center;justify-content:space-between;">
          <span style="font-family:monospace;font-size:14px;font-weight:800;color:#FFFFFF;letter-spacing:0.04em;">rent.escrow@credmonex</span>
          <button style="background:#CCFF00;border:none;color:#09090B;border-radius:8px;padding:6px 12px;font-size:11px;font-weight:900;cursor:pointer;box-shadow:0 0 12px rgba(204,255,0,0.4);">
            Copy ⚡
          </button>
        </div>
      </div>`;
  }
}

// ============================================================================
// 3. SHARE ACTION (10 Bespoke Models)
// ============================================================================
function renderShareVariants(fam, icon, variantIndex) {
  switch (variantIndex) {
    case 0:
      return `<div style="width:100%;max-width:340px;background:#fff;border:1px solid #E2E8F0;border-radius:24px;padding:22px;box-shadow:0 10px 30px rgba(0,0,0,0.06);display:flex;flex-direction:column;gap:16px;">
        <div style="font-size:13px;font-weight:800;color:#0F172A;">Quick Share Lease</div>
        <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:10px;text-align:center;">
          <div style="display:flex;flex-direction:column;align-items:center;gap:6px;cursor:pointer;"><div style="width:44px;height:44px;border-radius:50%;background:#22C55E;color:#fff;display:flex;align-items:center;justify-content:center;font-size:20px;">💬</div><span style="font-size:10px;font-weight:600;">WhatsApp</span></div>
          <div style="display:flex;flex-direction:column;align-items:center;gap:6px;cursor:pointer;"><div style="width:44px;height:44px;border-radius:50%;background:#0284C7;color:#fff;display:flex;align-items:center;justify-content:center;font-size:20px;">✈️</div><span style="font-size:10px;font-weight:600;">Telegram</span></div>
          <div style="display:flex;flex-direction:column;align-items:center;gap:6px;cursor:pointer;"><div style="width:44px;height:44px;border-radius:50%;background:#EF4444;color:#fff;display:flex;align-items:center;justify-content:center;font-size:20px;">✉️</div><span style="font-size:10px;font-weight:600;">Gmail</span></div>
          <div style="display:flex;flex-direction:column;align-items:center;gap:6px;cursor:pointer;"><div style="width:44px;height:44px;border-radius:50%;background:#0F172A;color:#fff;display:flex;align-items:center;justify-content:center;font-size:20px;">🔗</div><span style="font-size:10px;font-weight:600;">Copy</span></div>
        </div>
      </div>`;
    case 1:
      return `<div style="width:100%;max-width:340px;background:#fff;border:1px solid #E2E8F0;border-radius:20px;padding:16px;display:flex;gap:12px;align-items:center;box-shadow:0 6px 18px rgba(0,0,0,0.04);">
        <div style="width:60px;height:60px;border-radius:12px;background:#EFF6FF;display:flex;align-items:center;justify-content:center;font-size:26px;">🏢</div>
        <div style="flex:1;">
          <div style="font-size:13px;font-weight:800;color:#0F172A;">Indiranagar 3BHK</div>
          <div style="font-size:11px;color:#2563EB;font-weight:700;">₹42,000 / mo</div>
        </div>
        <button style="padding:10px 14px;background:#0F172A;color:#fff;border:none;border-radius:10px;font-size:11px;font-weight:700;cursor:pointer;">Share 📤</button>
      </div>`;
    case 2:
      return `<div style="width:100%;max-width:320px;display:flex;gap:8px;">
        <button style="flex:1;padding:12px;background:#22C55E;color:#fff;border:none;border-radius:12px;font-size:12px;font-weight:700;display:flex;align-items:center;justify-content:center;gap:6px;cursor:pointer;">
          <span>💬</span> WhatsApp
        </button>
        <button style="flex:1;padding:12px;background:#F1F5F9;color:#0F172A;border:none;border-radius:12px;font-size:12px;font-weight:700;cursor:pointer;">
          🔗 Copy Link
        </button>
      </div>`;
    case 3:
      return `<div style="width:100%;max-width:320px;background:#fff;border:1px solid #E2E8F0;border-radius:22px;padding:20px;text-align:center;">
        <div style="font-size:13px;font-weight:800;color:#0F172A;margin-bottom:12px;">Scan to Split Rent</div>
        <div style="width:120px;height:120px;margin:0 auto 12px;background:#F8FAFC;border:2px solid #E2E8F0;border-radius:16px;display:flex;align-items:center;justify-content:center;font-size:40px;">📱</div>
        <div style="font-size:11px;color:#64748B;">Roommate split link generated</div>
      </div>`;
    case 4:
      return `<div style="width:100%;max-width:340px;background:linear-gradient(135deg,#09090B 0%,#18181B 100%);border:1px solid #27272A;border-radius:22px;padding:22px;color:#fff;">
        <div style="font-size:11px;font-weight:800;color:#F59E0B;margin-bottom:6px;">VIP REFERRAL INVITE</div>
        <div style="font-size:14px;font-weight:800;margin-bottom:14px;">Gift ₹1,000 off 1st month rent</div>
        <button style="width:100%;padding:12px;background:#F59E0B;color:#000;border:none;border-radius:12px;font-size:12px;font-weight:800;cursor:pointer;">Share Exclusive Invite →</button>
      </div>`;
    case 5:
      return `<div style="width:100%;max-width:340px;background:#fff;border:1px solid #E2E8F0;border-radius:99px;padding:8px 14px;display:flex;align-items:center;justify-content:space-between;">
        <span style="font-size:12px;font-weight:700;color:#64748B;">Share to</span>
        <div style="display:flex;gap:6px;">
          <button style="width:32px;height:32px;border-radius:50%;background:#22C55E;color:#fff;border:none;font-size:14px;cursor:pointer;">💬</button>
          <button style="width:32px;height:32px;border-radius:50%;background:#3B82F6;color:#fff;border:none;font-size:14px;cursor:pointer;">✈️</button>
          <button style="width:32px;height:32px;border-radius:50%;background:#E11D48;color:#fff;border:none;font-size:14px;cursor:pointer;">📸</button>
        </div>
      </div>`;
    case 6:
      return `<div style="width:100%;max-width:320px;background:#EFF6FF;border:1px solid #BFDBFE;border-radius:18px;padding:16px;display:flex;align-items:center;justify-content:space-between;">
        <div><div style="font-size:13px;font-weight:800;color:#1E40AF;">Instagram Story</div><div style="font-size:11px;color:#3B82F6;">Share rent milestone badge</div></div>
        <button style="padding:8px 14px;background:#2563EB;color:#fff;border:none;border-radius:8px;font-size:11px;font-weight:700;cursor:pointer;">Create ✨</button>
      </div>`;
    case 7:
      return `<div style="width:100%;max-width:320px;background:#fff;border:1px solid #E2E8F0;border-radius:20px;padding:16px;box-shadow:0 8px 24px rgba(0,0,0,0.06);">
        <div style="font-size:12px;font-weight:700;color:#64748B;margin-bottom:10px;">Recent Landlords & Tenants</div>
        <div style="display:flex;gap:10px;">
          <div style="text-align:center;"><div style="width:40px;height:40px;border-radius:50%;background:#EFF6FF;display:flex;align-items:center;justify-content:center;font-weight:800;color:#2563EB;">AK</div><span style="font-size:10px;color:#64748B;">Anand</span></div>
          <div style="text-align:center;"><div style="width:40px;height:40px;border-radius:50%;background:#F0FDF4;display:flex;align-items:center;justify-content:center;font-weight:800;color:#16A34A;">PS</div><span style="font-size:10px;color:#64748B;">Priya</span></div>
        </div>
      </div>`;
    case 8:
      return `<div style="width:100%;max-width:300px;display:flex;justify-content:center;">
        <button style="padding:10px 20px;background:#F8FAFC;border:1px solid #E2E8F0;border-radius:99px;font-size:12px;font-weight:700;color:#0F172A;display:flex;align-items:center;gap:8px;cursor:pointer;">
          <span>📤</span> Share (284 times)
        </button>
      </div>`;
    case 9:
      return `<div style="width:100%;max-width:340px;background:#09090B;border:1px solid #27272A;border-radius:20px;padding:18px;color:#fff;">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
          <span style="font-size:12px;font-weight:800;color:#60A5FA;">🔒 Expiring Secure Link</span>
          <span style="font-size:10px;color:#94A3B8;">Expires in 24h</span>
        </div>
        <button style="width:100%;padding:10px;background:#2563EB;color:#fff;border:none;border-radius:10px;font-size:12px;font-weight:700;cursor:pointer;">Generate Temporary Link</button>
      </div>`;

    case 10: // Model K: Apple AirDrop / iOS Share Sheet Modal (Light Theme)
      return `<div style="width:100%;max-width:340px;background:#FFFFFF;border:1px solid #E2E8F0;border-radius:26px;padding:22px;box-shadow:0 12px 32px rgba(15,23,42,0.04);display:flex;flex-direction:column;gap:14px;">
        <div style="display:flex;align-items:center;justify-content:space-between;">
          <span style="font-size:13px;font-weight:800;color:#0F172A;">Share Property with Roommates</span>
          <span style="font-size:11px;font-weight:700;color:#2563EB;">AirDrop Active 📡</span>
        </div>
        <div style="display:flex;gap:12px;overflow-x:auto;padding-bottom:4px;">
          <div style="display:flex;flex-direction:column;align-items:center;gap:6px;cursor:pointer;"><div style="width:48px;height:48px;border-radius:50%;background:#EFF6FF;color:#2563EB;font-weight:800;display:flex;align-items:center;justify-content:center;font-size:14px;border:2px solid #DBEAFE;">RK</div><span style="font-size:10px;color:#475569;font-weight:700;">Rahul K.</span></div>
          <div style="display:flex;flex-direction:column;align-items:center;gap:6px;cursor:pointer;"><div style="width:48px;height:48px;border-radius:50%;background:#ECFDF5;color:#059669;font-weight:800;display:flex;align-items:center;justify-content:center;font-size:14px;border:2px solid #A7F3D0;">PS</div><span style="font-size:10px;color:#475569;font-weight:700;">Priya S.</span></div>
          <div style="display:flex;flex-direction:column;align-items:center;gap:6px;cursor:pointer;"><div style="width:48px;height:48px;border-radius:50%;background:#FAF5FF;color:#9333EA;font-weight:800;display:flex;align-items:center;justify-content:center;font-size:14px;border:2px solid #E9D5FF;">AM</div><span style="font-size:10px;color:#475569;font-weight:700;">Amit M.</span></div>
          <div style="display:flex;flex-direction:column;align-items:center;gap:6px;cursor:pointer;"><div style="width:48px;height:48px;border-radius:50%;background:#F1F5F9;color:#64748B;font-weight:800;display:flex;align-items:center;justify-content:center;font-size:18px;">+</div><span style="font-size:10px;color:#475569;font-weight:700;">More</span></div>
        </div>
        <button style="width:100%;padding:10px;background:#0F172A;color:#FFFFFF;border:none;border-radius:12px;font-size:12px;font-weight:800;cursor:pointer;">
          Copy Direct Roommate Link 🔗
        </button>
      </div>`;

    case 11: // Model L: CRED Obsidian Viral Invite Pass (Dark Theme)
    default:
      return `<div style="width:100%;max-width:340px;background:#09090B;border:1px solid rgba(204,255,0,0.3);border-radius:26px;padding:22px;box-shadow:0 24px 48px rgba(0,0,0,0.7);color:#FFFFFF;display:flex;flex-direction:column;gap:14px;">
        <div style="display:flex;align-items:center;justify-content:space-between;">
          <span style="font-size:11px;font-weight:900;letter-spacing:0.08em;color:#CCFF00;">VIRAL ESCROW SPLIT</span>
          <span style="padding:2px 8px;background:rgba(204,255,0,0.12);color:#CCFF00;border-radius:4px;font-size:9px;font-weight:900;">UNLIMITED</span>
        </div>
        <div style="font-size:14px;font-weight:800;">Split Rent • Both Earn ₹1,000 Voucher</div>
        <div style="padding:12px;background:#18181B;border:1px solid #27272A;border-radius:12px;font-family:monospace;font-size:13px;font-weight:800;color:#38BDF8;display:flex;justify-content:space-between;align-items:center;">
          <span>rentenpe.co/split/BLR849</span>
          <span style="color:#CCFF00;font-size:11px;cursor:pointer;">SHARE ⚡</span>
        </div>
        <button style="width:100%;padding:12px;background:#CCFF00;color:#09090B;border:none;border-radius:14px;font-size:12px;font-weight:900;cursor:pointer;box-shadow:0 0 16px rgba(204,255,0,0.4);">
          Broadcast on WhatsApp 💬
        </button>
      </div>`;
  }
}

// ============================================================================
// 4. BOOKMARK ACTION (10 Bespoke Models)
// ============================================================================
function renderBookmarkVariants(fam, icon, variantIndex) {
  switch (variantIndex) {
    case 0:
      return `<div style="width:100%;max-width:320px;background:#fff;border:1px solid #E2E8F0;border-radius:20px;padding:18px 22px;display:flex;align-items:center;justify-content:space-between;box-shadow:0 6px 18px rgba(0,0,0,0.04);">
        <div><div style="font-size:14px;font-weight:800;color:#0F172A;">Save to Favorites</div><div style="font-size:11px;color:#64748B;">1,482 people saved this flat</div></div>
        <button style="width:44px;height:44px;border-radius:14px;background:#FEE2E2;color:#EF4444;border:none;font-size:20px;cursor:pointer;display:flex;align-items:center;justify-content:center;">❤️</button>
      </div>`;
    case 1:
      return `<div style="width:100%;max-width:320px;background:#fff;border:1px solid #E2E8F0;border-radius:18px;padding:16px;box-shadow:0 6px 18px rgba(0,0,0,0.04);">
        <div style="font-size:11px;font-weight:700;color:#64748B;margin-bottom:8px;">SAVED TO FOLDER:</div>
        <div style="padding:10px 12px;background:#F8FAFC;border:1px solid #E2E8F0;border-radius:10px;display:flex;justify-content:space-between;align-items:center;font-size:13px;font-weight:700;color:#0F172A;">
          <span>📁 Luxury Flats Indiranagar</span>
          <span>▾</span>
        </div>
      </div>`;
    case 2:
      return `<div style="width:100%;max-width:320px;background:#EFF6FF;border:1px solid #BFDBFE;border-radius:18px;padding:18px;display:flex;align-items:center;justify-content:space-between;">
        <div><div style="font-size:13px;font-weight:800;color:#1E40AF;">Price Drop Alert</div><div style="font-size:11px;color:#3B82F6;">Notify if rent drops &lt; ₹30k</div></div>
        <div style="width:40px;height:24px;background:#2563EB;border-radius:99px;position:relative;cursor:pointer;"><div style="width:20px;height:20px;background:#fff;border-radius:50%;position:absolute;top:2px;left:2px;transform:translateX(16px);box-shadow:0 2px 4px rgba(0,0,0,0.2);"></div></div>
      </div>`;
    case 3:
      return `<div style="width:100%;max-width:300px;display:flex;justify-content:center;">
        <button style="padding:10px 20px;background:#0F172A;color:#fff;border:none;border-radius:99px;font-size:13px;font-weight:700;display:flex;align-items:center;gap:8px;cursor:pointer;">
          <span style="color:#F59E0B;">★</span>
          <span>Bookmarked</span>
        </button>
      </div>`;
    case 4:
      return `<div style="width:100%;max-width:320px;display:flex;gap:8px;">
        <button style="flex:1;padding:12px;background:#0F172A;color:#fff;border:none;border-radius:12px;font-size:12px;font-weight:700;cursor:pointer;">★ Bookmarked</button>
        <button style="padding:12px 16px;background:#F1F5F9;color:#0F172A;border:none;border-radius:12px;font-size:12px;font-weight:700;cursor:pointer;">Add Note 📝</button>
      </div>`;
    case 5:
      return `<div style="width:100%;max-width:320px;background:#09090B;border:1px solid #27272A;border-radius:20px;padding:18px;color:#fff;">
        <div style="font-size:12px;font-weight:800;color:#A1A1AA;margin-bottom:8px;">LEGAL ARCHIVE</div>
        <div style="font-size:14px;font-weight:700;color:#F4F4F5;margin-bottom:10px;">Indiranagar Lease 2026.pdf</div>
        <span style="padding:4px 8px;background:rgba(16,185,129,0.15);color:#34D399;border-radius:6px;font-size:10px;font-weight:800;">SAVED PERMANENTLY</span>
      </div>`;
    case 6:
      return `<div style="width:100%;max-width:320px;background:#fff;border:1px solid #E2E8F0;border-radius:18px;padding:16px;display:flex;align-items:center;justify-content:space-between;">
        <div><div style="font-size:13px;font-weight:700;color:#0F172A;">Compare Wishlist</div><div style="font-size:11px;color:#64748B;">2 of 3 flats selected</div></div>
        <button style="padding:6px 12px;background:#F8FAFC;border:1px solid #E2E8F0;border-radius:8px;font-size:11px;font-weight:700;cursor:pointer;">View ⇄</button>
      </div>`;
    case 7:
      return `<div style="width:100%;max-width:320px;background:#F0FDF4;border:1px solid #BBF7D0;border-radius:18px;padding:16px;display:flex;align-items:center;gap:12px;">
        <span style="font-size:20px;">💾</span>
        <div><div style="font-size:13px;font-weight:800;color:#166534;">Cached Offline</div><div style="font-size:11px;color:#15803D;">Available without network</div></div>
      </div>`;
    case 8:
      return `<div style="width:100%;max-width:320px;height:120px;background:linear-gradient(135deg,#F8FAFC,#EFF6FF);border:1px solid #E2E8F0;border-radius:20px;position:relative;padding:16px;">
        <div style="position:absolute;top:12px;right:16px;width:32px;height:40px;background:#2563EB;border-radius:4px 4px 0 0;display:flex;align-items:center;justify-content:center;color:#fff;font-size:14px;box-shadow:0 4px 8px rgba(37,99,235,0.3);">★</div>
        <div style="font-size:14px;font-weight:800;color:#0F172A;margin-top:20px;">Corner Ribbon Bookmark</div>
      </div>`;
    case 9:
      return `<div style="width:100%;max-width:320px;background:#18181B;border:1px solid #27272A;border-radius:20px;padding:18px;color:#fff;text-align:center;">
        <div style="font-size:24px;margin-bottom:6px;">🔒</div>
        <div style="font-size:13px;font-weight:800;">Private Vault Bookmark</div>
        <div style="font-size:11px;color:#71717A;margin-top:4px;">Requires Biometric Unlock</div>
      </div>`;

    case 10: // Model K: Apple Porcelain Wishlist Capsule (Light Theme)
      return `<div style="width:100%;max-width:320px;background:#FFFFFF;border:1px solid #E2E8F0;border-radius:24px;padding:20px;box-shadow:0 10px 28px rgba(15,23,42,0.04);display:flex;align-items:center;justify-content:space-between;">
        <div style="display:flex;align-items:center;gap:12px;">
          <div style="width:40px;height:40px;border-radius:12px;background:#FDF2F8;color:#DB2777;display:flex;align-items:center;justify-content:center;font-size:18px;">❤️</div>
          <div>
            <div style="font-size:13px;font-weight:800;color:#0F172A;">Saved Penthouse</div>
            <div style="font-size:10px;color:#64748B;">Prestige Falcon City</div>
          </div>
        </div>
        <span style="padding:4px 10px;background:#ECFDF5;color:#059669;border-radius:99px;font-size:10px;font-weight:800;">SAVED</span>
      </div>`;

    case 11: // Model L: CRED Titanium Saved Vault (Dark Theme)
    default:
      return `<div style="width:100%;max-width:320px;background:#09090B;border:1px solid rgba(204,255,0,0.3);border-radius:24px;padding:20px;color:#FFFFFF;box-shadow:0 20px 40px rgba(0,0,0,0.7);display:flex;flex-direction:column;gap:12px;">
        <div style="display:flex;justify-content:space-between;align-items:center;">
          <span style="font-size:11px;font-weight:900;color:#CCFF00;letter-spacing:0.08em;">EXCLUSIVE WATCHLIST</span>
          <span style="font-size:14px;color:#CCFF00;">★</span>
        </div>
        <div style="font-size:13px;font-weight:800;color:#FFFFFF;">Indiranagar Duplex Villa 402</div>
        <div style="font-size:11px;color:#38BDF8;font-weight:700;">₹65,000 / mo • Priority Booking Unlocked</div>
        <button style="width:100%;padding:10px;background:#18181B;border:1px solid #27272A;color:#CCFF00;border-radius:10px;font-size:11px;font-weight:800;cursor:pointer;">
          Manage Saved Vault ⚡
        </button>
      </div>`;
  }
}

// ============================================================================
// 5. BUTTONS & ACTIONS (Universal 10 Archetypes)
// ============================================================================
function renderButtonVariants(fam, icon, slug, variantIndex) {
  // Check bespoke slugs first
  if (slug === 'download-btn') return renderDownloadVariants(fam, icon, variantIndex);
  if (slug === 'copy-btn') return renderCopyVariants(fam, icon, variantIndex);
  if (slug === 'share-btn') return renderShareVariants(fam, icon, variantIndex);
  if (slug === 'bookmark-btn') return renderBookmarkVariants(fam, icon, variantIndex);

  switch (variantIndex) {
    case 0: // Model A: Tactile 3D Hero Primary Button
      return `<div style="width:100%;max-width:300px;display:flex;flex-direction:column;gap:10px;align-items:center;">
        <button style="width:100%;padding:16px 24px;background:#0F172A;color:#fff;border:none;border-radius:14px;font-size:14px;font-weight:800;box-shadow:0 8px 0 #000, 0 14px 25px rgba(0,0,0,0.25);cursor:pointer;display:flex;align-items:center;justify-content:center;gap:10px;transition:all 0.1s;" onmousedown="this.style.transform='translateY(4px)';this.style.boxShadow='0 4px 0 #000, 0 8px 15px rgba(0,0,0,0.2)'" onmouseup="this.style.transform='none';this.style.boxShadow='0 8px 0 #000, 0 14px 25px rgba(0,0,0,0.25)'">
          <span style="font-size:16px;">${icon}</span>
          <span>${fam}</span>
        </button>
      </div>`;

    case 1: // Model B: Crisp Outlined Secondary Action
      return `<div style="width:100%;max-width:300px;display:flex;flex-direction:column;gap:10px;align-items:center;">
        <button style="width:100%;padding:14px 22px;background:#fff;color:#0F172A;border:2px solid #0F172A;border-radius:14px;font-size:13px;font-weight:800;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;box-shadow:0 4px 12px rgba(0,0,0,0.04);">
          <span>${icon}</span>
          <span>${fam}</span>
        </button>
      </div>`;

    case 2: // Model C: VisionOS Frosted Glass Button
      return `<div style="width:100%;max-width:300px;display:flex;flex-direction:column;gap:10px;align-items:center;">
        <button style="width:100%;padding:14px 24px;background:rgba(255,255,255,0.75);backdrop-filter:blur(16px);-webkit-backdrop-filter:blur(16px);border:1px solid rgba(255,255,255,0.9);color:#0F172A;border-radius:99px;font-size:13px;font-weight:800;box-shadow:0 12px 28px rgba(0,0,0,0.06);cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;">
          <span>✨</span>
          <span>${fam}</span>
        </button>
      </div>`;

    case 3: // Model D: Dark Luxury Obsidian CRED Button
      return `<div style="width:100%;max-width:300px;display:flex;flex-direction:column;gap:10px;align-items:center;">
        <button style="width:100%;padding:15px 24px;background:linear-gradient(180deg,#18181B 0%,#09090B 100%);color:#F59E0B;border:1.5px solid #F59E0B;border-radius:14px;font-size:13px;font-weight:800;letter-spacing:0.04em;box-shadow:0 10px 25px rgba(245,158,11,0.2);cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;">
          <span>⚡</span>
          <span>${fam}</span>
        </button>
      </div>`;

    case 4: // Model E: Split Dropdown Action Button
      return `<div style="width:100%;max-width:300px;display:flex;border-radius:14px;overflow:hidden;box-shadow:0 6px 18px rgba(15,23,42,0.12);">
        <button style="flex:1;padding:14px 18px;background:#2563EB;color:#fff;border:none;font-size:13px;font-weight:700;display:flex;align-items:center;justify-content:center;gap:8px;cursor:pointer;">
          <span>${icon}</span>
          <span>${fam}</span>
        </button>
        <div style="width:1px;background:rgba(255,255,255,0.2);"></div>
        <button style="padding:14px 16px;background:#1D4ED8;color:#fff;border:none;font-size:12px;font-weight:700;cursor:pointer;">
          ▼
        </button>
      </div>`;

    case 5: // Model F: Animated Loading State Button
      return `<div style="width:100%;max-width:300px;display:flex;flex-direction:column;gap:8px;align-items:center;">
        <button style="width:100%;padding:14px 24px;background:#1E293B;color:#fff;border:none;border-radius:14px;font-size:13px;font-weight:700;cursor:wait;display:flex;align-items:center;justify-content:center;gap:10px;">
          <svg style="animation:spin 1s linear infinite;width:18px;height:18px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83"/></svg>
          <span>Processing Payment...</span>
        </button>
        <span style="font-size:10px;color:#64748B;">Connecting to HDFC Payment Gateway</span>
      </div>`;

    case 6: // Model G: Segmented Tab Switcher Button
      return `<div style="width:100%;max-width:300px;background:#F1F5F9;border-radius:14px;padding:4px;display:flex;gap:4px;">
        <button style="flex:1;padding:10px;background:#fff;color:#0F172A;border:none;border-radius:10px;font-size:12px;font-weight:800;box-shadow:0 2px 6px rgba(0,0,0,0.06);cursor:pointer;">Pay Now</button>
        <button style="flex:1;padding:10px;background:transparent;color:#64748B;border:none;border-radius:10px;font-size:12px;font-weight:600;cursor:pointer;">Schedule</button>
      </div>`;

    case 7: // Model H: Circular Tactile FAB Disc
      return `<div style="display:flex;align-items:center;justify-content:center;">
        <button style="width:64px;height:64px;border-radius:50%;background:#0F172A;color:#fff;border:none;font-size:24px;box-shadow:0 12px 28px rgba(15,23,42,0.35);cursor:pointer;display:flex;align-items:center;justify-content:center;">
          ${icon}
        </button>
      </div>`;

    case 8: // Model I: Full-Width Mobile Action Strip
      return `<div style="width:100%;max-width:340px;background:#EFF6FF;border:1px solid #BFDBFE;border-radius:16px;padding:14px 18px;display:flex;align-items:center;justify-content:space-between;cursor:pointer;">
        <div style="display:flex;align-items:center;gap:10px;">
          <span style="font-size:18px;">${icon}</span>
          <span style="font-size:13px;font-weight:800;color:#1E40AF;">${fam}</span>
        </div>
        <span style="font-size:16px;color:#2563EB;font-weight:800;">→</span>
      </div>`;

    case 9: // Model J: Destructive Danger Confirmation Button
      return `<div style="width:100%;max-width:300px;display:flex;flex-direction:column;gap:8px;">
        <button style="width:100%;padding:14px 20px;background:#FEE2E2;color:#DC2626;border:1.5px solid #FCA5A5;border-radius:14px;font-size:13px;font-weight:800;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;">
          <span>⚠️</span>
          <span>Terminate Lease</span>
        </button>
        <div style="text-align:center;font-size:10px;color:#991B1B;">Requires 30 days mandatory notice</div>
      </div>`;

    case 10: // Model K: Apple / Tesla Tactile Porcelain Pill Button (Light Theme)
      return `<div style="display:flex;align-items:center;justify-content:center;padding:10px;">
        <button style="padding:14px 28px;background:#FFFFFF;color:#0F172A;border:1.5px solid #E2E8F0;border-radius:99px;font-size:13px;font-weight:800;box-shadow:0 8px 24px rgba(15,23,42,0.06),inset 0 1px 0 #FFFFFF;cursor:pointer;display:inline-flex;align-items:center;gap:10px;transition:all 0.15s cubic-bezier(0.16,1,0.3,1);" onmousedown="this.style.transform='scale(0.96)'" onmouseup="this.style.transform='scale(1)'">
          <span style="width:24px;height:24px;border-radius:50%;background:#ECFDF5;color:#059669;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:900;">✓</span>
          <span>${fam}</span>
          <span style="font-size:12px;color:#94A3B8;">→</span>
        </button>
      </div>`;

    case 11: // Model L: CRED Monex Acid Neon Glow Pulsing Button (Dark Theme)
    default:
      return `<div style="display:flex;align-items:center;justify-content:center;padding:10px;">
        <button style="padding:14px 28px;background:#09090B;color:#CCFF00;border:1.5px solid #CCFF00;border-radius:18px;font-size:13px;font-weight:900;letter-spacing:0.04em;box-shadow:0 0 24px rgba(204,255,0,0.35);cursor:pointer;display:inline-flex;align-items:center;gap:10px;transition:all 0.15s cubic-bezier(0.16,1,0.3,1);" onmouseover="this.style.boxShadow='0 0 32px rgba(204,255,0,0.6)'" onmouseout="this.style.boxShadow='0 0 24px rgba(204,255,0,0.35)'" onmousedown="this.style.transform='scale(0.95)'" onmouseup="this.style.transform='scale(1)'">
          <span style="font-size:14px;">⚡</span>
          <span>${fam.toUpperCase()}</span>
          <span style="color:#CCFF00;font-size:14px;">≫</span>
        </button>
      </div>`;
  }
}

// ============================================================================
// 6. INPUTS & FORMS (10 Distinct Archetypes)
// ============================================================================
function renderInputVariants(fam, icon, slug, variantIndex) {
  const isEmail = slug === 'email-inputs' || slug.includes('email');
  const isPhone = slug === 'phone-inputs' || slug.includes('phone');
  const isPass = slug === 'password-inputs' || slug.includes('password');
  const isNum = slug === 'number-inputs' || slug.includes('number');
  const isCurr = slug === 'currency-inputs' || slug === 'amount-input' || slug.includes('currency') || slug.includes('amount');
  const isAddr = slug === 'address-input' || slug === 'location-picker' || slug.includes('address') || slug.includes('location');
  const isSearch = slug === 'search-inputs' || slug.includes('search');

  // Dynamic context values
  let valA = fam || 'RentenPe Verified Field';
  if (isEmail) valA = 'tenant@rentenpe.com';
  else if (isPhone) valA = '+91 98765 43210';
  else if (isPass) valA = '••••••••••••';
  else if (isNum) valA = '3 BHK Luxury Apartment';
  else if (isCurr) valA = '₹ 28,500 / mo';
  else if (isAddr) valA = 'Prestige Falcon City, Indiranagar, Bengaluru';
  else if (isSearch) valA = '2 BHK near Metro Station under 30k';

  switch (variantIndex) {
    case 0: // Model A: Floating Animated Label Input
      return `<div style="width:100%;max-width:320px;background:#fff;border:1.5px solid #2563EB;border-radius:16px;padding:12px 16px;box-shadow:0 0 0 4px rgba(37,99,235,0.1);display:flex;flex-direction:column;gap:2px;">
        <span style="font-size:10px;font-weight:800;color:#2563EB;text-transform:uppercase;">${fam}</span>
        <input type="${isPass ? 'password' : (isEmail ? 'email' : (isPhone ? 'tel' : 'text'))}" value="${valA}" style="border:none;outline:none;font-size:14px;font-weight:700;color:#0F172A;background:transparent;">
      </div>`;

    case 1: // Model B: Segmented Country / Currency Prefix Input
      return `<div style="width:100%;max-width:320px;display:flex;border:1.5px solid #E2E8F0;border-radius:16px;overflow:hidden;background:#fff;">
        <div style="padding:12px 14px;background:#F8FAFC;border-right:1px solid #E2E8F0;font-size:13px;font-weight:800;color:#0F172A;display:flex;align-items:center;gap:4px;">
          <span>${isCurr ? '₹ INR' : (isEmail ? '✉' : '🇮🇳 +91')}</span>
        </div>
        <input type="${isPhone ? 'tel' : (isCurr ? 'text' : 'text')}" value="${isPhone ? '98765 43210' : (isCurr ? '28,500' : (isEmail ? 'joshua@rentenpe.com' : '98765 43210'))}" style="flex:1;padding:12px 14px;border:none;outline:none;font-size:14px;font-weight:700;color:#0F172A;">
      </div>`;

    case 2: // Model C: VisionOS Frosted Glass Input
      return `<div style="width:100%;max-width:320px;background:rgba(255,255,255,0.75);backdrop-filter:blur(16px);border:1px solid rgba(255,255,255,0.9);border-radius:18px;padding:14px 18px;box-shadow:0 8px 24px rgba(0,0,0,0.05);display:flex;align-items:center;gap:10px;">
        <span style="font-size:16px;color:#64748B;">${isSearch ? '🔍' : (isAddr ? '📍' : (isEmail ? '✉' : '🔍'))}</span>
        <input type="text" placeholder="${isAddr ? 'Search locality or landmark...' : (isEmail ? 'Enter email address...' : 'Search verified properties...')}" style="border:none;outline:none;background:transparent;font-size:13px;font-weight:600;color:#0F172A;width:100%;">
        <span style="padding:2px 6px;background:#E2E8F0;color:#64748B;border-radius:4px;font-size:10px;font-family:monospace;">⌘K</span>
      </div>`;

    case 3: // Model D: Dark Obsidian Terminal Input
      return `<div style="width:100%;max-width:320px;background:#09090B;border:1px solid #27272A;border-radius:18px;padding:16px;color:#fff;">
        <div style="font-size:10px;font-family:monospace;color:#38BDF8;margin-bottom:6px;">TERMINAL // RENTENPE_CLI</div>
        <div style="display:flex;align-items:center;gap:8px;">
          <span style="color:#10B981;font-family:monospace;">$</span>
          <input type="text" value="${isCurr ? 'pay --amount 28500 --auto' : (isAddr ? 'lookup --pincode 560038' : 'pay --amount 28500 --auto')}" style="border:none;outline:none;background:transparent;color:#F4F4F5;font-family:monospace;font-size:12px;width:100%;">
        </div>
      </div>`;

    case 4: // Model E: Validated Checklist Input
      return `<div style="width:100%;max-width:320px;background:#fff;border:1.5px solid #10B981;border-radius:18px;padding:16px;display:flex;flex-direction:column;gap:8px;box-shadow:0 4px 12px rgba(16,185,129,0.08);">
        <div style="display:flex;justify-content:space-between;align-items:center;">
          <span style="font-size:11px;font-weight:700;color:#334155;">${isPass ? 'Secure Password' : (isEmail ? 'Verified Email' : (isPhone ? 'Primary Mobile' : 'Verified Input'))}</span>
          <span style="font-size:12px;color:#10B981;font-weight:800;">${isPass ? 'Strong ✓' : 'Verified ✓'}</span>
        </div>
        <input type="${isPass ? 'password' : 'text'}" value="${isPass ? '••••••••••••' : (isEmail ? 'verified.tenant@gmail.com' : (isPhone ? '+91 98765 43210' : 'Prestige Falcon City'))}" style="border:none;outline:none;font-size:14px;color:#0F172A;">
        <div style="display:flex;gap:4px;height:4px;border-radius:99px;overflow:hidden;">
          <div style="flex:1;background:#10B981;"></div><div style="flex:1;background:#10B981;"></div><div style="flex:1;background:#10B981;"></div><div style="flex:1;background:#10B981;"></div>
        </div>
      </div>`;

    case 5: // Model F: Tactile Numeric Stepper Counter
      return `<div style="width:100%;max-width:320px;background:#fff;border:1px solid #E2E8F0;border-radius:18px;padding:16px 20px;display:flex;align-items:center;justify-content:space-between;">
        <div><div style="font-size:13px;font-weight:800;color:#0F172A;">${isNum ? 'Bedrooms (BHK)' : (isCurr ? 'Rental Advance' : 'Floor Level')}</div><div style="font-size:11px;color:#64748B;">${isNum ? 'Indiranagar Area' : 'Standard Unit'}</div></div>
        <div style="display:flex;align-items:center;gap:12px;">
          <button style="width:32px;height:32px;border-radius:8px;background:#F1F5F9;border:none;font-weight:900;cursor:pointer;">-</button>
          <span style="font-size:16px;font-weight:800;color:#0F172A;">3</span>
          <button style="width:32px;height:32px;border-radius:8px;background:#0F172A;color:#fff;border:none;font-weight:900;cursor:pointer;">+</button>
        </div>
      </div>`;

    case 6: // Model G: Multi-Pill Filter Tag Input
      return `<div style="width:100%;max-width:320px;background:#fff;border:1px solid #E2E8F0;border-radius:18px;padding:16px;display:flex;flex-direction:column;gap:8px;">
        <span style="font-size:11px;font-weight:700;color:#64748B;">${isAddr ? 'Target Localities' : 'Included Amenities'}</span>
        <div style="display:flex;flex-wrap:wrap;gap:6px;">
          <span style="padding:4px 10px;background:#EFF6FF;color:#2563EB;border-radius:99px;font-size:11px;font-weight:700;">${isAddr ? '📍 Indiranagar ✕' : '🏊 Pool ✕'}</span>
          <span style="padding:4px 10px;background:#EFF6FF;color:#2563EB;border-radius:99px;font-size:11px;font-weight:700;">${isAddr ? '📍 Koramangala ✕' : '🏋️ Gym ✕'}</span>
          <input type="text" placeholder="+ Add" style="border:none;outline:none;font-size:11px;width:60px;background:transparent;">
        </div>
      </div>`;

    case 7: // Model H: Masked Sensitive Input with Eye Toggle
      return `<div style="width:100%;max-width:320px;background:#fff;border:1px solid #E2E8F0;border-radius:16px;padding:14px 16px;display:flex;align-items:center;justify-content:space-between;">
        <div><div style="font-size:10px;font-weight:700;color:#64748B;">${isPass ? 'CONFIDENTIAL PASSWORD' : 'CARD CVV / CVC'}</div><div style="font-size:14px;font-family:monospace;font-weight:800;letter-spacing:0.2em;">${isPass ? '••••••••' : '829'}</div></div>
        <span style="font-size:16px;color:#64748B;cursor:pointer;">👁</span>
      </div>`;

    case 8: // Model I: AI Voice Natural Language Input Bar
      return `<div style="width:100%;max-width:320px;background:linear-gradient(135deg,#EFF6FF 0%,#F5F3FF 100%);border:1px solid #C7D2FE;border-radius:99px;padding:10px 18px;display:flex;align-items:center;justify-content:space-between;">
        <div style="display:flex;align-items:center;gap:8px;">
          <span style="font-size:16px;">🎙️</span>
          <span style="font-size:12px;font-weight:700;color:#4338CA;">"Find 2BHK near Metro under 30k"</span>
        </div>
        <div style="width:8px;height:8px;border-radius:50%;background:#6366F1;box-shadow:0 0 8px #6366F1;"></div>
      </div>`;

    case 9: // Model J: Bottom Sheet Inline Input with Suggestions
      return `<div style="width:100%;max-width:320px;background:#fff;border:1px solid #E2E8F0;border-radius:20px;padding:18px;display:flex;flex-direction:column;gap:10px;box-shadow:0 8px 24px rgba(0,0,0,0.06);">
        <label style="font-size:12px;font-weight:800;color:#0F172A;">${isCurr ? 'Rent Payment Amount' : 'Tenancy Fee'}</label>
        <div style="font-size:28px;font-weight:900;color:#0F172A;">₹ 28,500</div>
        <div style="display:flex;gap:6px;">
          <button style="flex:1;padding:6px;background:#F1F5F9;border:none;border-radius:8px;font-size:11px;font-weight:700;color:#475569;">+ ₹500</button>
          <button style="flex:1;padding:6px;background:#F1F5F9;border:none;border-radius:8px;font-size:11px;font-weight:700;color:#475569;">+ ₹1,000</button>
          <button style="flex:1;padding:6px;background:#EFF6FF;border:none;border-radius:8px;font-size:11px;font-weight:700;color:#2563EB;">Full Rent</button>
        </div>
      </div>`;

    case 10: // Model K: Apple Minimalist Floating Label Porcelain Field (Light Theme)
      return `<div style="width:100%;max-width:320px;background:#FFFFFF;border:1.5px solid #E2E8F0;border-radius:20px;padding:14px 18px;box-shadow:0 8px 24px rgba(15,23,42,0.04);display:flex;flex-direction:column;gap:4px;">
        <div style="display:flex;align-items:center;justify-content:space-between;">
          <span style="font-size:10px;font-weight:800;color:#64748B;letter-spacing:0.06em;text-transform:uppercase;">${fam}</span>
          <span style="padding:2px 8px;background:#ECFDF5;color:#059669;border-radius:99px;font-size:9px;font-weight:800;">VALIDATED</span>
        </div>
        <div style="display:flex;align-items:center;gap:8px;">
          <span style="font-size:16px;color:#2563EB;">${isPhone ? '📱' : (isEmail ? '✉' : '🔍')}</span>
          <input type="text" value="${valA}" style="flex:1;border:none;outline:none;font-size:13px;font-weight:700;color:#0F172A;background:transparent;">
          <span style="width:16px;height:16px;border-radius:50%;background:#F1F5F9;color:#64748B;display:flex;align-items:center;justify-content:center;font-size:10px;cursor:pointer;">✕</span>
        </div>
      </div>`;

    case 11: // Model L: CRED Monex High-Contrast Obsidian Input (Dark Theme)
    default:
      return `<div style="width:100%;max-width:320px;background:#09090B;border:1.5px solid rgba(204,255,0,0.4);border-radius:20px;padding:16px 20px;box-shadow:0 16px 36px rgba(0,0,0,0.7),inset 0 1px 0 rgba(204,255,0,0.2);display:flex;flex-direction:column;gap:6px;">
        <div style="display:flex;justify-content:space-between;align-items:center;">
          <span style="font-size:10px;font-weight:900;color:#CCFF00;letter-spacing:0.1em;text-transform:uppercase;">${fam.toUpperCase()}</span>
          <span style="width:6px;height:6px;border-radius:50%;background:#CCFF00;box-shadow:0 0 8px #CCFF00;"></span>
        </div>
        <div style="display:flex;align-items:center;gap:10px;">
          <span style="font-size:14px;color:#CCFF00;">⚡</span>
          <input type="text" value="${isCurr ? '₹ 45,000 / mo' : (isPhone ? '+91 98765 43210' : (isEmail ? 'vip.tenant@rentenpe.com' : '₹ 45,000 / mo'))}" style="flex:1;border:none;outline:none;font-family:monospace;font-size:16px;font-weight:900;color:#FFFFFF;background:transparent;letter-spacing:0.04em;">
          <span style="font-family:monospace;font-size:10px;color:#71717A;">${isCurr ? 'INR' : 'SECURE'}</span>
        </div>
        <div style="width:100%;height:1px;background:rgba(204,255,0,0.3);margin-top:2px;"></div>
      </div>`;
  }
}

// ============================================================================
// 7. SELECTION (10 Distinct Archetypes)
// ============================================================================
function renderSelectionVariants(fam, icon, slug, variantIndex) {
  switch (variantIndex) {
    case 0: // Model A: Feature Card Checkbox
      return `<div style="width:100%;max-width:320px;padding:16px;background:#EFF6FF;border:2px solid #2563EB;border-radius:18px;display:flex;align-items:center;justify-content:space-between;cursor:pointer;">
        <div style="display:flex;align-items:center;gap:12px;">
          <span style="font-size:20px;">🛡️</span>
          <div><div style="font-size:13px;font-weight:800;color:#0F172A;">Zero-Deposit Guarantee</div><div style="font-size:11px;color:#2563EB;font-weight:600;">₹199 / mo coverage</div></div>
        </div>
        <div style="width:22px;height:22px;border-radius:6px;background:#2563EB;color:#fff;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:900;">✓</div>
      </div>`;

    case 1: // Model B: iOS Cupertino Switch with Status
      return `<div style="width:100%;max-width:320px;background:#fff;border:1px solid #E2E8F0;border-radius:18px;padding:18px;display:flex;align-items:center;justify-content:space-between;">
        <div><div style="font-size:13px;font-weight:700;color:#0F172A;">Auto-Debit Rent</div><div style="font-size:11px;color:#10B981;font-weight:700;">● Active on 1st of month</div></div>
        <div style="width:48px;height:28px;background:#10B981;border-radius:99px;position:relative;cursor:pointer;"><div style="width:24px;height:24px;background:#fff;border-radius:50%;position:absolute;top:2px;left:2px;transform:translateX(20px);box-shadow:0 2px 5px rgba(0,0,0,0.2);"></div></div>
      </div>`;

    case 2: // Model C: Segmented Pricing Plan Radio
      return `<div style="width:100%;max-width:320px;background:#fff;border:1.5px solid #2563EB;border-radius:18px;padding:18px;box-shadow:0 4px 16px rgba(37,99,235,0.08);">
        <div style="display:flex;justify-content:space-between;margin-bottom:6px;"><span style="font-size:13px;font-weight:800;color:#0F172A;">Annual Prepaid</span><span style="padding:2px 6px;background:#2563EB;color:#fff;border-radius:4px;font-size:10px;font-weight:800;">SAVE 10%</span></div>
        <div style="font-size:22px;font-weight:900;color:#0F172A;">₹21,600 <span style="font-size:12px;color:#64748B;font-weight:500;">/ mo</span></div>
      </div>`;

    case 3: // Model D: Dual-Handle Price Range Slider
      return `<div style="width:100%;max-width:320px;background:#fff;border:1px solid #E2E8F0;border-radius:18px;padding:22px;display:flex;flex-direction:column;gap:14px;">
        <div style="display:flex;justify-content:space-between;align-items:center;"><span style="font-size:11px;font-weight:700;color:#64748B;">RENT BUDGET</span><span style="font-size:14px;font-weight:800;color:#2563EB;">₹20,000 – ₹45,000</span></div>
        <div style="position:relative;height:6px;background:#E2E8F0;border-radius:99px;"><div style="position:absolute;left:25%;right:25%;height:100%;background:#2563EB;border-radius:99px;"></div><div style="width:18px;height:18px;background:#fff;border:3px solid #2563EB;border-radius:50%;position:absolute;top:-6px;left:23%;box-shadow:0 2px 6px rgba(0,0,0,0.15);"></div><div style="width:18px;height:18px;background:#fff;border:3px solid #2563EB;border-radius:50%;position:absolute;top:-6px;right:23%;box-shadow:0 2px 6px rgba(0,0,0,0.15);"></div></div>
      </div>`;

    case 4: // Model E: Swatch / Furnishing Option Grid
      return `<div style="width:100%;max-width:320px;display:grid;grid-template-columns:1fr 1fr;gap:10px;">
        <div style="padding:14px;background:#EFF6FF;border:2px solid #2563EB;border-radius:14px;text-align:center;"><div style="font-size:20px;">🛋️</div><div style="font-size:12px;font-weight:800;color:#0F172A;margin-top:4px;">Fully Furnished</div></div>
        <div style="padding:14px;background:#F8FAFC;border:1px solid #E2E8F0;border-radius:14px;text-align:center;"><div style="font-size:20px;">📦</div><div style="font-size:12px;font-weight:600;color:#64748B;margin-top:4px;">Semi-Furnished</div></div>
      </div>`;

    case 5: // Model F: Obsidian Dark Radio Group
      return `<div style="width:100%;max-width:320px;background:#09090B;border:1px solid #27272A;border-radius:18px;padding:18px;color:#fff;">
        <div style="display:flex;align-items:center;justify-content:space-between;"><div style="display:flex;align-items:center;gap:10px;"><div style="width:18px;height:18px;border-radius:50%;border:2px solid #38BDF8;display:flex;align-items:center;justify-content:center;"><div style="width:8px;height:8px;border-radius:50%;background:#38BDF8;"></div></div><span style="font-size:13px;font-weight:700;">Biometric Fingerprint</span></div><span style="font-size:11px;color:#38BDF8;font-weight:700;">DEFAULT</span></div>
      </div>`;

    case 6: // Model G: Removable Chip Filter Cloud
      return `<div style="width:100%;max-width:320px;display:flex;flex-wrap:wrap;gap:8px;">
        <span style="padding:6px 12px;background:#0F172A;color:#fff;border-radius:99px;font-size:11px;font-weight:700;">Indiranagar ✕</span>
        <span style="padding:6px 12px;background:#0F172A;color:#fff;border-radius:99px;font-size:11px;font-weight:700;">Gated Society ✕</span>
        <span style="padding:6px 12px;background:#F1F5F9;color:#475569;border-radius:99px;font-size:11px;font-weight:600;">+ Pet Friendly</span>
      </div>`;

    case 7: // Model H: Star Rating Feedback Selector
      return `<div style="width:100%;max-width:320px;background:#fff;border:1px solid #E2E8F0;border-radius:18px;padding:18px;text-align:center;">
        <div style="font-size:12px;font-weight:700;color:#64748B;margin-bottom:8px;">RATE APARTMENT MAINTENANCE</div>
        <div style="font-size:24px;letter-spacing:6px;color:#F59E0B;margin-bottom:6px;">★★★★★</div>
        <div style="font-size:12px;font-weight:800;color:#059669;">5.0 / 5.0 • Exceptional Quality</div>
      </div>`;

    case 8: // Model I: Toggle List Item with Subtext
      return `<div style="width:100%;max-width:320px;background:#fff;border:1px solid #E2E8F0;border-radius:18px;padding:18px;display:flex;align-items:center;justify-content:space-between;">
        <div><div style="font-size:13px;font-weight:800;color:#0F172A;">WhatsApp Receipts</div><div style="font-size:11px;color:#64748B;">Instant PDF on payment</div></div>
        <div style="width:44px;height:24px;background:#2563EB;border-radius:99px;position:relative;cursor:pointer;"><div style="width:20px;height:20px;background:#fff;border-radius:50%;position:absolute;top:2px;left:2px;transform:translateX(20px);box-shadow:0 2px 4px rgba(0,0,0,0.2);"></div></div>
      </div>`;

    case 9: // Model J: Floorplan Visual Tiles
      return `<div style="width:100%;max-width:320px;display:grid;grid-template-columns:repeat(3,1fr);gap:8px;">
        <div style="padding:12px;background:#EFF6FF;border:2px solid #2563EB;border-radius:12px;text-align:center;"><div style="font-size:14px;font-weight:800;color:#2563EB;">1 BHK</div><div style="font-size:10px;color:#64748B;">650 sqft</div></div>
        <div style="padding:12px;background:#F8FAFC;border:1px solid #E2E8F0;border-radius:12px;text-align:center;"><div style="font-size:14px;font-weight:800;color:#0F172A;">2 BHK</div><div style="font-size:10px;color:#64748B;">1,150 sqft</div></div>
        <div style="padding:12px;background:#F8FAFC;border:1px solid #E2E8F0;border-radius:12px;text-align:center;"><div style="font-size:14px;font-weight:800;color:#0F172A;">3 BHK</div><div style="font-size:10px;color:#64748B;">1,680 sqft</div></div>
      </div>`;

    case 10: // Model K: Apple iOS Tactile Smooth Switch & Porcelain Radio Capsule (Light Theme)
      return `<div style="width:100%;max-width:320px;background:#FFFFFF;border:1px solid #E2E8F0;border-radius:24px;padding:20px;box-shadow:0 10px 28px rgba(15,23,42,0.04);display:flex;align-items:center;justify-content:space-between;">
        <div style="display:flex;align-items:center;gap:12px;">
          <div style="width:38px;height:38px;border-radius:12px;background:#ECFDF5;color:#059669;display:flex;align-items:center;justify-content:center;font-size:16px;">🍏</div>
          <div>
            <div style="font-size:13px;font-weight:800;color:#0F172A;">${fam}</div>
            <div style="font-size:10px;color:#059669;font-weight:700;">Haptic Feedback Enabled</div>
          </div>
        </div>
        <div style="width:50px;height:30px;background:#10B981;border-radius:99px;position:relative;cursor:pointer;box-shadow:inset 0 1px 2px rgba(0,0,0,0.1);">
          <div style="width:26px;height:26px;background:#FFFFFF;border-radius:50%;position:absolute;top:2px;left:2px;transform:translateX(20px);box-shadow:0 2px 6px rgba(0,0,0,0.18);"></div>
        </div>
      </div>`;

    case 11: // Model L: CRED Monex Cyber Toggle with Acid Neon Track (Dark Theme)
    default:
      return `<div style="width:100%;max-width:320px;background:#09090B;border:1px solid rgba(204,255,0,0.3);border-radius:24px;padding:20px;color:#FFFFFF;box-shadow:0 20px 40px rgba(0,0,0,0.7);display:flex;align-items:center;justify-content:space-between;">
        <div>
          <div style="font-size:10px;font-weight:900;color:#CCFF00;letter-spacing:0.1em;text-transform:uppercase;">${fam.toUpperCase()}</div>
          <div style="font-size:13px;font-weight:800;color:#FFFFFF;margin-top:2px;">Titanium Auto-Settle</div>
        </div>
        <div style="width:52px;height:30px;background:#18181B;border:1.5px solid #CCFF00;border-radius:99px;position:relative;cursor:pointer;box-shadow:0 0 14px rgba(204,255,0,0.25);">
          <div style="width:22px;height:22px;background:#CCFF00;border-radius:50%;position:absolute;top:2.5px;left:3px;transform:translateX(24px);box-shadow:0 0 10px #CCFF00;"></div>
        </div>
      </div>`;
  }
}

// ============================================================================
// 8. NAVIGATION (10 Distinct Archetypes)
// ============================================================================
function renderNavigationVariants(fam, icon, slug, variantIndex) {
  switch (variantIndex) {
    case 0:
      return `<div style="width:100%;max-width:340px;background:rgba(255,255,255,0.85);backdrop-filter:blur(20px);border:1px solid rgba(255,255,255,0.9);border-radius:99px;padding:8px 14px;display:flex;align-items:center;justify-content:space-around;box-shadow:0 14px 30px rgba(0,0,0,0.08);">
        <span style="padding:8px 16px;background:#0F172A;color:#fff;border-radius:99px;font-size:12px;font-weight:800;">Home</span>
        <span style="font-size:12px;font-weight:600;color:#64748B;">Leases</span>
        <span style="font-size:12px;font-weight:600;color:#64748B;">Payments</span>
        <span style="font-size:12px;font-weight:600;color:#64748B;">Profile</span>
      </div>`;
    case 1:
      return `<div style="width:100%;max-width:340px;background:#0F172A;color:#fff;border-radius:18px;padding:14px 20px;display:flex;align-items:center;justify-content:space-between;">
        <span style="font-size:14px;font-weight:800;">RentenPe Pro</span>
        <div style="display:flex;gap:12px;"><span style="font-size:16px;">🔔</span><span style="font-size:16px;">⚙️</span></div>
      </div>`;
    case 2:
      return `<div style="width:100%;max-width:320px;display:flex;flex-direction:column;gap:10px;">
        <div style="display:flex;align-items:center;gap:10px;"><div style="width:24px;height:24px;border-radius:50%;background:#10B981;color:#fff;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:900;">✓</div><span style="font-size:13px;font-weight:700;color:#0F172A;">1. KYC Verified</span></div>
        <div style="display:flex;align-items:center;gap:10px;"><div style="width:24px;height:24px;border-radius:50%;background:#2563EB;color:#fff;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:900;">2</div><span style="font-size:13px;font-weight:800;color:#2563EB;">2. Sign Digital Lease (Current)</span></div>
        <div style="display:flex;align-items:center;gap:10px;"><div style="width:24px;height:24px;border-radius:50%;background:#E2E8F0;color:#64748B;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:700;">3</div><span style="font-size:13px;font-weight:500;color:#94A3B8;">3. Pay Security Deposit</span></div>
      </div>`;
    case 3:
      return `<div style="width:100%;max-width:320px;border-bottom:2px solid #E2E8F0;display:flex;gap:20px;">
        <div style="padding-bottom:10px;border-bottom:3px solid #2563EB;font-size:13px;font-weight:800;color:#2563EB;">All Units (24)</div>
        <div style="padding-bottom:10px;font-size:13px;font-weight:600;color:#64748B;">Occupied (21)</div>
        <div style="padding-bottom:10px;font-size:13px;font-weight:600;color:#64748B;">Vacant (3)</div>
      </div>`;
    case 4:
      return `<div style="width:100%;max-width:320px;display:flex;align-items:center;gap:6px;font-size:12px;color:#64748B;">
        <span>Properties</span> <span>›</span> <span>Indiranagar</span> <span>›</span> <span style="font-weight:800;color:#0F172A;">Flat 402</span>
      </div>`;
    case 5:
      return `<div style="display:flex;gap:6px;align-items:center;">
        <button style="width:32px;height:32px;border-radius:8px;background:#F1F5F9;border:none;font-weight:800;">‹</button>
        <button style="width:32px;height:32px;border-radius:8px;background:#0F172A;color:#fff;border:none;font-weight:800;">1</button>
        <button style="width:32px;height:32px;border-radius:8px;background:#fff;border:1px solid #E2E8F0;font-weight:700;">2</button>
        <button style="width:32px;height:32px;border-radius:8px;background:#fff;border:1px solid #E2E8F0;font-weight:700;">3</button>
        <button style="width:32px;height:32px;border-radius:8px;background:#F1F5F9;border:none;font-weight:800;">›</button>
      </div>`;
    case 6:
      return `<div style="width:100%;max-width:340px;background:#fff;border:1px solid #E2E8F0;border-radius:24px;padding:12px 20px;display:flex;justify-content:space-between;align-items:center;position:relative;">
        <span style="font-size:12px;font-weight:700;color:#2563EB;">Home</span>
        <span style="font-size:12px;font-weight:600;color:#64748B;">Search</span>
        <div style="width:48px;height:48px;border-radius:50%;background:#0F172A;color:#fff;display:flex;align-items:center;justify-content:center;font-size:22px;margin-top:-24px;box-shadow:0 8px 18px rgba(15,23,42,0.3);">+</div>
        <span style="font-size:12px;font-weight:600;color:#64748B;">Rent</span>
        <span style="font-size:12px;font-weight:600;color:#64748B;">Me</span>
      </div>`;
    case 7:
      return `<div style="width:100%;max-width:340px;background:#09090B;border:1px solid #27272A;border-radius:18px;padding:16px 20px;color:#fff;display:flex;justify-content:space-between;align-items:center;">
        <div><div style="font-size:11px;color:#71717A;">ESCROW LEDGER</div><div style="font-size:15px;font-weight:800;color:#38BDF8;">v3.2 Connected</div></div>
        <span style="padding:4px 8px;background:rgba(56,189,248,0.15);color:#38BDF8;border-radius:6px;font-size:10px;font-weight:800;">ONLINE</span>
      </div>`;
    case 8:
      return `<div style="display:flex;gap:12px;background:#F8FAFC;padding:8px;border-radius:12px;border:1px solid #E2E8F0;">
        <span style="padding:6px 12px;background:#fff;border-radius:8px;font-size:12px;font-weight:700;box-shadow:0 2px 4px rgba(0,0,0,0.05);">Grid View</span>
        <span style="padding:6px 12px;font-size:12px;font-weight:600;color:#64748B;">Map View</span>
      </div>`;
    case 9:
      return `<div style="width:100%;max-width:340px;display:flex;gap:8px;overflow-x:auto;">
        <span style="padding:8px 16px;background:#0F172A;color:#fff;border-radius:99px;font-size:12px;font-weight:700;white-space:nowrap;">Trending</span>
        <span style="padding:8px 16px;background:#F1F5F9;color:#475569;border-radius:99px;font-size:12px;font-weight:600;white-space:nowrap;">Zero Deposit</span>
        <span style="padding:8px 16px;background:#F1F5F9;color:#475569;border-radius:99px;font-size:12px;font-weight:600;white-space:nowrap;">Near Metro</span>
      </div>`;

    case 10: // Model K: Apple Porcelain Segmented Nav Capsule (Light Theme)
      return `<div style="display:flex;align-items:center;justify-content:center;width:100%;">
        <div style="background:#FFFFFF;border:1px solid #E2E8F0;border-radius:99px;padding:6px;box-shadow:0 10px 28px rgba(15,23,42,0.05);display:flex;align-items:center;gap:4px;">
          <span style="padding:8px 16px;background:#0F172A;color:#FFFFFF;border-radius:99px;font-size:12px;font-weight:800;">● Active</span>
          <span style="padding:8px 14px;color:#64748B;font-size:12px;font-weight:600;cursor:pointer;">Pending (2)</span>
          <span style="padding:8px 14px;color:#64748B;font-size:12px;font-weight:600;cursor:pointer;">Archive</span>
        </div>
      </div>`;

    case 11: // Model L: CRED Obsidian Neon Segmented Bar (Dark Theme)
    default:
      return `<div style="width:100%;max-width:340px;background:#09090B;border:1px solid rgba(204,255,0,0.3);border-radius:99px;padding:6px;box-shadow:0 16px 36px rgba(0,0,0,0.7);display:flex;align-items:center;justify-content:space-between;">
        <div style="padding:8px 16px;background:#18181B;border:1px solid rgba(204,255,0,0.4);border-radius:99px;display:flex;align-items:center;gap:6px;">
          <span style="width:6px;height:6px;border-radius:50%;background:#CCFF00;box-shadow:0 0 8px #CCFF00;"></span>
          <span style="font-size:11px;font-weight:900;color:#CCFF00;letter-spacing:0.04em;">VIP FEED</span>
        </div>
        <span style="font-size:11px;font-weight:700;color:#71717A;padding:0 12px;cursor:pointer;">ESCROW</span>
        <span style="font-size:11px;font-weight:700;color:#71717A;padding:0 12px;cursor:pointer;">LEASES</span>
      </div>`;
  }
}

// ============================================================================
// 9. DATA DISPLAY & METRICS (10 Distinct Archetypes)
// ============================================================================
function renderDataDisplayVariants(fam, icon, slug, variantIndex) {
  switch (variantIndex) {
    case 0: // Bento Metric Card
      return `<div style="width:100%;max-width:320px;background:#fff;border:1px solid #E2E8F0;border-radius:22px;padding:22px;box-shadow:0 8px 24px rgba(0,0,0,0.04);">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;"><span style="font-size:12px;font-weight:700;color:#64748B;">Total Rent Collected</span><span style="padding:2px 8px;background:#ECFDF5;color:#059669;border-radius:6px;font-size:10px;font-weight:800;">↑ +14.2%</span></div>
        <div style="font-size:28px;font-weight:900;color:#0F172A;letter-spacing:-0.02em;">₹4,28,000</div>
      </div>`;
    case 1: // Status Badge Matrix
      return `<div style="display:flex;gap:8px;flex-wrap:wrap;">
        <span style="padding:6px 12px;background:#ECFDF5;color:#059669;border:1px solid #A7F3D0;border-radius:8px;font-size:12px;font-weight:800;">● Paid</span>
        <span style="padding:6px 12px;background:#FFFBEB;color:#D97706;border:1px solid #FDE68A;border-radius:8px;font-size:12px;font-weight:800;">● Due in 2d</span>
        <span style="padding:6px 12px;background:#FEF2F2;color:#DC2626;border:1px solid #FECACA;border-radius:8px;font-size:12px;font-weight:800;">● Overdue</span>
      </div>`;
    case 2: // Avatar Stack with Counter
      return `<div style="display:flex;align-items:center;gap:12px;">
        <div style="display:flex;margin-left:8px;">
          <div style="width:36px;height:36px;border-radius:50%;background:#2563EB;color:#fff;border:2px solid #fff;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:800;margin-left:-8px;">JK</div>
          <div style="width:36px;height:36px;border-radius:50%;background:#10B981;color:#fff;border:2px solid #fff;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:800;margin-left:-8px;">PS</div>
          <div style="width:36px;height:36px;border-radius:50%;background:#F59E0B;color:#fff;border:2px solid #fff;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:800;margin-left:-8px;">+4</div>
        </div>
        <span style="font-size:12px;font-weight:700;color:#0F172A;">6 Active Roommates</span>
      </div>`;
    case 3: // Two-Column Key-Value Breakdown
      return `<div style="width:100%;max-width:320px;background:#fff;border:1px solid #E2E8F0;border-radius:18px;padding:18px;display:flex;flex-direction:column;gap:8px;">
        <div style="display:flex;justify-content:space-between;font-size:12px;"><span style="color:#64748B;">Security Deposit:</span><span style="font-weight:800;color:#0F172A;">₹1,00,000</span></div>
        <div style="display:flex;justify-content:space-between;font-size:12px;"><span style="color:#64748B;">Lock-in Period:</span><span style="font-weight:800;color:#0F172A;">6 Months</span></div>
      </div>`;
    case 4: // Circular Radial Gauge / Score Meter
      return `<div style="width:100%;max-width:320px;background:#fff;border:1px solid #E2E8F0;border-radius:20px;padding:22px;text-align:center;">
        <div style="font-size:11px;font-weight:800;color:#64748B;letter-spacing:0.05em;margin-bottom:10px;">CREDIT RENT SCORE</div>
        <div style="font-size:32px;font-weight:900;color:#059669;">814</div>
        <div style="font-size:11px;color:#059669;font-weight:700;">Top 5% of Tenants in BLR</div>
      </div>`;
    case 5: // Dark Glass Stat Widget
      return `<div style="width:100%;max-width:320px;background:#09090B;border:1px solid #27272A;border-radius:20px;padding:20px;color:#fff;">
        <div style="font-size:11px;color:#71717A;margin-bottom:4px;">TOTAL ESCROW BALANCE</div>
        <div style="font-size:26px;font-weight:900;color:#38BDF8;">₹18.4 Lakhs</div>
      </div>`;
    case 6: // Milestone Progress Bar
      return `<div style="width:100%;max-width:320px;display:flex;flex-direction:column;gap:8px;">
        <div style="display:flex;justify-content:space-between;font-size:12px;font-weight:700;"><span>Lease Validity</span><span>8 / 11 Months</span></div>
        <div style="height:8px;background:#E2E8F0;border-radius:99px;overflow:hidden;"><div style="width:72%;height:100%;background:#2563EB;"></div></div>
      </div>`;
    case 7: // Trust & Verified Badge
      return `<div style="display:inline-flex;align-items:center;gap:8px;padding:8px 16px;background:#F0FDF4;border:1.5px solid #86EFAC;border-radius:99px;color:#166534;font-size:12px;font-weight:800;">
        <span>🔒</span> Government e-Stamp Verified
      </div>`;
    case 8: // Tag Cloud
      return `<div style="display:flex;gap:6px;flex-wrap:wrap;">
        <span style="padding:4px 10px;background:#EFF6FF;color:#2563EB;border-radius:6px;font-size:11px;font-weight:700;">#Indiranagar</span>
        <span style="padding:4px 10px;background:#F0FDF4;color:#16A34A;border-radius:6px;font-size:11px;font-weight:700;">#ZeroBrokerage</span>
        <span style="padding:4px 10px;background:#FFFBEB;color:#D97706;border-radius:6px;font-size:11px;font-weight:700;">#VerifiedOwner</span>
      </div>`;
    case 9: // Comparative Delta Split
      return `<div style="width:100%;max-width:320px;display:grid;grid-template-columns:1fr 1fr;gap:10px;">
        <div style="padding:14px;background:#fff;border:1px solid #E2E8F0;border-radius:14px;"><div style="font-size:11px;color:#64748B;">This Month</div><div style="font-size:18px;font-weight:900;color:#0F172A;">₹28,500</div></div>
        <div style="padding:14px;background:#fff;border:1px solid #E2E8F0;border-radius:14px;"><div style="font-size:11px;color:#64748B;">Last Month</div><div style="font-size:18px;font-weight:900;color:#64748B;">₹28,500</div></div>
      </div>`;

    case 10: // Model K: Apple Porcelain Bento Metric Card (Light Theme)
      return `<div style="width:100%;max-width:320px;background:#FFFFFF;border:1px solid #E2E8F0;border-radius:24px;padding:22px;box-shadow:0 12px 30px rgba(15,23,42,0.04);display:flex;flex-direction:column;gap:12px;">
        <div style="display:flex;justify-content:space-between;align-items:center;">
          <span style="font-size:11px;font-weight:800;color:#64748B;letter-spacing:0.04em;text-transform:uppercase;">${fam}</span>
          <span style="padding:3px 8px;background:#ECFDF5;color:#059669;border-radius:99px;font-size:10px;font-weight:800;">● STABLE</span>
        </div>
        <div style="font-size:26px;font-weight:900;color:#0F172A;letter-spacing:-0.03em;">
          ₹1,45,200 <span style="font-size:13px;font-weight:600;color:#059669;">+12%</span>
        </div>
        <div style="padding:10px;background:#F8FAFC;border-radius:12px;font-size:11px;color:#64748B;display:flex;justify-content:space-between;">
          <span>Porcelain Ledger</span>
          <strong style="color:#0F172A;">99.8% On-Time</strong>
        </div>
      </div>`;

    case 11: // Model L: CRED Monex Titanium Telemetry Scorecard (Dark Theme)
    default:
      return `<div style="width:100%;max-width:320px;background:#09090B;border:1px solid rgba(204,255,0,0.3);border-radius:24px;padding:22px;box-shadow:0 20px 40px rgba(0,0,0,0.7);color:#FFFFFF;display:flex;flex-direction:column;gap:12px;">
        <div style="display:flex;justify-content:space-between;align-items:center;">
          <span style="font-size:10px;font-weight:900;color:#CCFF00;letter-spacing:0.1em;text-transform:uppercase;">${fam.toUpperCase()}</span>
          <span style="font-family:monospace;font-size:10px;color:#71717A;">NODE::01</span>
        </div>
        <div style="font-size:28px;font-weight:900;color:#CCFF00;letter-spacing:-0.02em;text-shadow:0 0 16px rgba(204,255,0,0.3);">
          840 <span style="font-size:14px;color:#FFFFFF;font-weight:700;">SCORE</span>
        </div>
        <div style="background:#18181B;border-radius:10px;padding:8px 12px;display:flex;justify-content:space-between;align-items:center;font-size:11px;">
          <span style="color:#A1A1AA;">CRED Rent Tier:</span>
          <strong style="color:#38BDF8;">TITANIUM PRESTIGE</strong>
        </div>
      </div>`;
  }
}

// ============================================================================
// 10. UNIVERSAL CATEGORY FALLBACK (10 Rich Archetypes)
// ============================================================================
function renderUniversalArchetypes(cat, fam, icon, slug, variantIndex) {
  switch (variantIndex) {
    case 0: // Archetype 0: High-Impact Hero Action Card
      return `<div style="width:100%;max-width:340px;background:#ffffff;border:1px solid #E2E8F0;border-radius:24px;box-shadow:0 12px 30px rgba(15,23,42,0.06);padding:24px;display:flex;flex-direction:column;gap:16px;">
        <div style="display:flex;align-items:center;justify-content:space-between;">
          <div style="display:flex;align-items:center;gap:12px;">
            <span style="width:44px;height:44px;border-radius:14px;background:#EFF6FF;color:#2563EB;display:flex;align-items:center;justify-content:center;font-size:22px;">${icon}</span>
            <div><div style="font-size:15px;font-weight:800;color:#0F172A;">${fam}</div><div style="font-size:11px;color:#64748B;">${cat} Enterprise Unit</div></div>
          </div>
          <span style="padding:4px 8px;background:#ECFDF5;color:#059669;border-radius:6px;font-size:10px;font-weight:800;">ACTIVE</span>
        </div>
        <div style="padding:12px 14px;background:#F8FAFC;border-radius:12px;font-size:12px;color:#475569;line-height:1.5;">Verified mobile interface unit built for maximum contrast and responsive touch target accuracy.</div>
        <button style="width:100%;padding:12px;background:#0F172A;color:#fff;border:none;border-radius:12px;font-size:12px;font-weight:700;cursor:pointer;">Engage Action →</button>
      </div>`;

    case 1: // Archetype 1: Segmented Split Control Card
      return `<div style="width:100%;max-width:340px;background:#ffffff;border:1px solid #E2E8F0;border-radius:22px;padding:20px;display:flex;flex-direction:column;gap:14px;box-shadow:0 6px 20px rgba(0,0,0,0.04);">
        <div style="display:flex;justify-content:space-between;align-items:center;"><span style="font-size:13px;font-weight:800;color:#0F172A;">${fam}</span><span style="font-size:11px;color:#2563EB;font-weight:700;">Mode Selector</span></div>
        <div style="background:#F1F5F9;border-radius:12px;padding:4px;display:flex;gap:4px;">
          <button style="flex:1;padding:8px;background:#fff;border:none;border-radius:8px;font-size:12px;font-weight:800;color:#0F172A;box-shadow:0 2px 4px rgba(0,0,0,0.05);cursor:pointer;">Primary</button>
          <button style="flex:1;padding:8px;background:transparent;border:none;border-radius:8px;font-size:12px;font-weight:600;color:#64748B;cursor:pointer;">Secondary</button>
        </div>
      </div>`;

    case 2: // Archetype 2: VisionOS Frosted Glass Island
      return `<div style="width:100%;max-width:340px;background:rgba(255,255,255,0.78);backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);border:1px solid rgba(255,255,255,0.9);border-radius:24px;padding:22px;box-shadow:0 20px 40px rgba(15,23,42,0.08);display:flex;flex-direction:column;gap:14px;">
        <div style="display:flex;align-items:center;gap:12px;"><span style="font-size:24px;">${icon}</span><div><div style="font-size:14px;font-weight:800;color:#0F172A;">${fam}</div><div style="font-size:11px;color:#64748B;">VisionOS Spatial Component</div></div></div>
        <div style="display:flex;justify-content:space-between;align-items:center;padding-top:4px;"><span style="font-size:11px;font-weight:700;color:#2563EB;">● 120Hz Fluid Motion</span><button style="padding:6px 14px;background:#0F172A;color:#fff;border:none;border-radius:99px;font-size:11px;font-weight:700;cursor:pointer;">Inspect</button></div>
      </div>`;

    case 3: // Archetype 3: Dark Luxury Obsidian Card
      return `<div style="width:100%;max-width:340px;background:#09090B;border:1px solid #27272A;border-radius:24px;padding:22px;color:#fff;box-shadow:0 20px 40px rgba(0,0,0,0.6);display:flex;flex-direction:column;gap:14px;">
        <div style="display:flex;justify-content:space-between;align-items:center;"><div style="display:flex;align-items:center;gap:8px;"><span style="color:#F59E0B;">⚡</span><span style="font-size:13px;font-weight:800;color:#F4F4F5;">${fam}</span></div><span style="font-family:monospace;font-size:10px;color:#71717A;">PROD-3.2</span></div>
        <div style="font-size:12px;color:#A1A1AA;line-height:1.5;">High-security encrypted ledger container with sub-millisecond local state sync.</div>
        <button style="width:100%;padding:12px;background:#F59E0B;color:#000;border:none;border-radius:12px;font-size:12px;font-weight:800;cursor:pointer;">Unlock Access →</button>
      </div>`;

    case 4: // Archetype 4: Bento Multi-Metric Grid
      return `<div style="width:100%;max-width:340px;display:grid;grid-template-columns:1fr 1fr;gap:10px;">
        <div style="padding:16px;background:#fff;border:1px solid #E2E8F0;border-radius:18px;box-shadow:0 4px 12px rgba(0,0,0,0.03);"><div style="font-size:20px;margin-bottom:6px;">${icon}</div><div style="font-size:13px;font-weight:800;color:#0F172A;">${fam}</div><div style="font-size:10px;color:#64748B;margin-top:2px;">Primary View</div></div>
        <div style="padding:16px;background:#F8FAFC;border:1px solid #E2E8F0;border-radius:18px;display:flex;flex-direction:column;justify-content:center;"><div style="font-size:11px;color:#64748B;">Status</div><div style="font-size:14px;font-weight:800;color:#10B981;">Online ●</div></div>
      </div>`;

    case 5: // Archetype 5: Perforated Voucher / Ticket Card
      return `<div style="width:100%;max-width:340px;background:#FFFBEB;border:1.5px dashed #F59E0B;border-radius:20px;padding:20px;display:flex;flex-direction:column;gap:12px;">
        <div style="display:flex;justify-content:space-between;align-items:center;"><span style="font-size:11px;font-weight:900;color:#B45309;">OFFICIAL RECEIPT</span><span style="font-size:10px;font-weight:700;color:#78350F;">#8942</span></div>
        <div style="font-size:18px;font-weight:900;color:#78350F;">${fam}</div>
        <button style="width:100%;padding:10px;background:#B45309;color:#fff;border:none;border-radius:10px;font-size:11px;font-weight:800;cursor:pointer;">Verify Certificate ✂</button>
      </div>`;

    case 6: // Archetype 6: Interactive Form / Input Row
      return `<div style="width:100%;max-width:340px;background:#fff;border:1px solid #E2E8F0;border-radius:18px;padding:16px 20px;display:flex;align-items:center;justify-content:space-between;box-shadow:0 4px 14px rgba(0,0,0,0.04);">
        <div><div style="font-size:13px;font-weight:800;color:#0F172A;">${fam}</div><div style="font-size:11px;color:#64748B;">Tap to edit value</div></div>
        <span style="padding:6px 12px;background:#EFF6FF;color:#2563EB;border-radius:8px;font-size:11px;font-weight:800;cursor:pointer;">Edit ✎</span>
      </div>`;

    case 7: // Archetype 7: Dynamic Status Banner
      return `<div style="width:100%;max-width:340px;background:#EFF6FF;border:1px solid #BFDBFE;border-radius:16px;padding:16px;display:flex;align-items:center;justify-content:space-between;">
        <div style="display:flex;align-items:center;gap:10px;"><span style="font-size:20px;">${icon}</span><span style="font-size:13px;font-weight:800;color:#1E40AF;">${fam}</span></div>
        <button style="padding:6px 12px;background:#2563EB;color:#fff;border:none;border-radius:8px;font-size:11px;font-weight:700;cursor:pointer;">Action →</button>
      </div>`;

    case 8: // Archetype 8: Minimalist Monoline Border Tile
      return `<div style="width:100%;max-width:340px;background:#fff;border:1.5px solid #0F172A;border-radius:16px;padding:18px 20px;display:flex;align-items:center;justify-content:space-between;">
        <span style="font-size:13px;font-weight:800;color:#0F172A;">${fam}</span>
        <span style="font-size:16px;font-weight:800;">→</span>
      </div>`;

    case 9: // Archetype 9: Micro-Action Tactile Disc / Floating Capsule
      return `<div style="display:flex;align-items:center;justify-content:center;">
        <div style="padding:12px 24px;background:#0F172A;color:#fff;border-radius:99px;display:inline-flex;align-items:center;gap:10px;box-shadow:0 10px 25px rgba(15,23,42,0.3);cursor:pointer;">
          <span style="font-size:18px;">${icon}</span>
          <span style="font-size:13px;font-weight:800;">${fam}</span>
          <span style="color:#60A5FA;">●</span>
        </div>
      </div>`;

    case 10: // Archetype 10: Apple Porcelain Clean Tile (Light Theme)
      return `<div style="width:100%;max-width:340px;background:#FFFFFF;border:1px solid #E2E8F0;border-radius:24px;padding:22px;box-shadow:0 12px 30px rgba(15,23,42,0.04);display:flex;flex-direction:column;gap:12px;">
        <div style="display:flex;align-items:center;justify-content:space-between;">
          <div style="display:flex;align-items:center;gap:10px;">
            <span style="width:36px;height:36px;border-radius:10px;background:#ECFDF5;color:#059669;display:flex;align-items:center;justify-content:center;font-size:16px;">🍏</span>
            <div><div style="font-size:13px;font-weight:800;color:#0F172A;">${fam}</div><div style="font-size:10px;color:#64748B;">Apple Luxury Suite</div></div>
          </div>
          <span style="padding:3px 8px;background:#ECFDF5;color:#059669;border-radius:99px;font-size:9px;font-weight:800;">PORCELAIN</span>
        </div>
        <div style="font-size:11px;color:#64748B;line-height:1.4;">Bespoke precision mobile component engineered with high visual hierarchy and tactile micro-interactions.</div>
        <button style="width:100%;padding:10px;background:#0F172A;color:#FFFFFF;border:none;border-radius:12px;font-size:11px;font-weight:800;cursor:pointer;">
          View Porcelain Specs ↗
        </button>
      </div>`;

    case 11: // Archetype 11: CRED Titanium Dark Capsule (Dark Theme)
    default:
      return `<div style="width:100%;max-width:340px;background:#09090B;border:1px solid rgba(204,255,0,0.3);border-radius:24px;padding:22px;box-shadow:0 20px 40px rgba(0,0,0,0.7);color:#FFFFFF;display:flex;flex-direction:column;gap:12px;">
        <div style="display:flex;align-items:center;justify-content:space-between;">
          <span style="font-size:10px;font-weight:900;color:#CCFF00;letter-spacing:0.1em;text-transform:uppercase;">${fam.toUpperCase()}</span>
          <span style="font-size:12px;color:#CCFF00;">⚡</span>
        </div>
        <div style="font-size:13px;font-weight:800;color:#FFFFFF;">CRED Monex Titanium Precision</div>
        <div style="font-size:11px;color:#A1A1AA;line-height:1.4;">Zero-latency hardware accelerated component with haptic feedback and neon luminescent styling.</div>
        <button style="width:100%;padding:10px;background:#18181B;border:1px solid #27272A;color:#CCFF00;border-radius:12px;font-size:11px;font-weight:900;cursor:pointer;transition:all 0.15s;" onmouseover="this.style.borderColor='#CCFF00'" onmouseout="this.style.borderColor='#27272A'">
          Execute Action ≫
        </button>
      </div>`;
  }
}

module.exports = {
  renderDownloadVariants,
  renderCopyVariants,
  renderShareVariants,
  renderBookmarkVariants,
  renderButtonVariants,
  renderInputVariants,
  renderSelectionVariants,
  renderNavigationVariants,
  renderDataDisplayVariants,
  renderUniversalArchetypes
};
