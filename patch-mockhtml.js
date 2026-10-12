// This script patches generate-rich-pages.js with a completely new getMockHTML engine
// that generates unique, Pinterest-inspired designs for every single component family.
const fs = require('fs');
const path = require('path');

const FILE = path.join(__dirname, 'generate-rich-pages.js');
let src = fs.readFileSync(FILE, 'utf-8');

// We'll replace everything from "function getMockHTML" to the closing "}" of that function
const startMarker = 'function getMockHTML(cat, fam, icon) {';
const startIdx = src.indexOf(startMarker);

// Find the matching closing brace
let braceCount = 0;
let endIdx = -1;
for (let i = src.indexOf('{', startIdx); i < src.length; i++) {
  if (src[i] === '{') braceCount++;
  if (src[i] === '}') braceCount--;
  if (braceCount === 0) { endIdx = i + 1; break; }
}

const newFunction = `function getMockHTML(cat, fam, icon) {
  const glassStyle = "background: #fff; border: 1px solid #E2E8F0; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.05); padding: 16px;";

  // =====================================================================
  // HIGH-END VARIANT GENERATORS (Premium Glass / Neumorphic / CRED Dark)
  // =====================================================================
  if (fam === 'Premium Glass') {
    return \`
      <div style="position:relative; width: 100%; max-width: 320px; height: 180px; display:flex; align-items:center; justify-content:center; border-radius: 24px; overflow:hidden;">
        <div style="position:absolute; top:-30px; left:-30px; width:120px; height:120px; background:#F43F5E; border-radius:50%; filter:blur(50px); opacity:0.5;"></div>
        <div style="position:absolute; bottom:-30px; right:-30px; width:140px; height:140px; background:#3B82F6; border-radius:50%; filter:blur(50px); opacity:0.5;"></div>
        <div style="position:absolute; top:40%; left:60%; width:80px; height:80px; background:#A855F7; border-radius:50%; filter:blur(40px); opacity:0.4;"></div>
        <div style="width:100%; height:100%; background: rgba(255, 255, 255, 0.35); backdrop-filter: blur(24px); -webkit-backdrop-filter: blur(24px); border: 1px solid rgba(255, 255, 255, 0.5); box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.12); border-radius: 24px; padding: 28px; display:flex; flex-direction:column; justify-content:space-between; position:relative; z-index:2;">
          <div style="display:flex; justify-content:space-between; align-items:center;">
            <div style="font-size:24px; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.1));">\${icon}</div>
            <div style="background:rgba(255,255,255,0.7); padding:5px 14px; border-radius:99px; font-size:10px; font-weight:800; color:#334155; letter-spacing:0.08em; backdrop-filter:blur(10px);">GLASS</div>
          </div>
          <div>
            <div style="font-size:18px; font-weight:800; color:#0F172A; margin-bottom:4px; letter-spacing:-0.02em;">Premium Glass</div>
            <div style="font-size:13px; color:#475569; font-weight:500;">Apple VisionOS frosted aesthetic</div>
          </div>
        </div>
      </div>
    \`;
  }

  if (fam === 'Neumorphic') {
    return \`
      <div style="width: 100%; max-width: 320px; height: 180px; background: #E0E5EC; border-radius: 24px; padding: 28px; display:flex; flex-direction:column; justify-content:space-between; box-shadow: 12px 12px 24px #b8bcc2, -12px -12px 24px #ffffff;">
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <div style="width: 52px; height: 52px; border-radius: 16px; background: #E0E5EC; box-shadow: 6px 6px 12px #b8bcc2, -6px -6px 12px #ffffff; display:flex; align-items:center; justify-content:center; font-size:22px;">\${icon}</div>
          <div style="font-size:10px; font-weight:800; color:#9BA7B9; letter-spacing:0.12em; text-transform:uppercase;">NEUMO</div>
        </div>
        <div>
          <div style="font-size:18px; font-weight:800; color:#4A5568; margin-bottom:4px; text-shadow: 1px 1px 0 #fff; letter-spacing:-0.02em;">Soft UI Extrusion</div>
          <div style="font-size:13px; color:#718096; font-weight:500;">Tactile continuous surface material</div>
        </div>
      </div>
    \`;
  }

  if (fam === 'CRED Style Dark') {
    return \`
      <div style="width: 100%; max-width: 320px; height: 180px; background: linear-gradient(145deg, #1A1A1D, #0B0B0C); border-radius: 24px; padding: 28px; display:flex; flex-direction:column; justify-content:space-between; box-shadow: 0 20px 60px -10px rgba(0,0,0,0.8); border: 1px solid #2A2A2D; position:relative; overflow:hidden;">
        <div style="position:absolute; top:0; left:0; right:0; height:1px; background:linear-gradient(90deg, transparent 10%, #D4AF37 50%, transparent 90%);"></div>
        <div style="position:absolute; bottom:0; left:0; right:0; height:1px; background:linear-gradient(90deg, transparent 10%, rgba(212,175,55,0.3) 50%, transparent 90%);"></div>
        <div style="display:flex; justify-content:space-between; align-items:center; position:relative; z-index:2;">
          <div style="font-size:28px; filter: drop-shadow(0 0 12px rgba(212,175,55,0.4));">\${icon}</div>
          <div style="border:1px solid #D4AF37; color:#D4AF37; padding:5px 12px; border-radius:4px; font-size:10px; font-weight:800; letter-spacing:0.12em; background:rgba(212,175,55,0.05);">PRESTIGE</div>
        </div>
        <div style="position:relative; z-index:2;">
          <div style="font-size:18px; font-weight:700; color:#F3F4F6; margin-bottom:4px; font-family:Georgia,serif; letter-spacing:0.02em;">Bespoke Design</div>
          <div style="font-size:13px; color:#6B7280; font-weight:400;">High-contrast metallic aesthetic</div>
        </div>
      </div>
    \`;
  }

  // =====================================================================
  // FOUNDATIONS
  // =====================================================================
  if (cat === 'Foundations') {
    if (fam.includes('Color') || fam.includes('Palette') || fam.includes('Semantic') || fam.includes('Surface')) {
      const colors = fam.includes('Semantic') 
        ? [['#EF4444','Error'],['#F59E0B','Warn'],['#10B981','Pass'],['#3B82F6','Info']]
        : fam.includes('Surface')
        ? [['#FFFFFF','Base'],['#F8FAFC','Muted'],['#F1F5F9','Alt'],['#E2E8F0','Border']]
        : [['#0F172A','Primary'],['#3B82F6','Accent'],['#10B981','Success'],['#F59E0B','Warning']];
      return \`
        <div style="display:flex; flex-direction:column; gap:12px; width:100%; max-width:300px;">
          \${colors.map(([c,n]) => \`
            <div style="display:flex; align-items:center; gap:16px;">
              <div style="width:48px;height:48px;border-radius:12px;background:\${c};box-shadow:0 4px 12px \${c}33; border: 1px solid rgba(0,0,0,0.05);"></div>
              <div>
                <div style="font-size:14px;font-weight:700;color:#0F172A;">\${n}</div>
                <div style="font-size:12px;color:#94A3B8;font-family:monospace;">\${c}</div>
              </div>
            </div>
          \`).join('')}
        </div>
      \`;
    }
    if (fam.includes('Type') || fam.includes('Font') || fam.includes('Text')) {
      const isWeight = fam.includes('Weight');
      if (isWeight) {
        return \`<div style="text-align:left;width:100%;max-width:300px;">
          <div style="font-size:14px;font-weight:300;color:#64748B;margin-bottom:8px;">Light 300</div>
          <div style="font-size:16px;font-weight:400;color:#475569;margin-bottom:8px;">Regular 400</div>
          <div style="font-size:18px;font-weight:500;color:#334155;margin-bottom:8px;">Medium 500</div>
          <div style="font-size:20px;font-weight:600;color:#1E293B;margin-bottom:8px;">SemiBold 600</div>
          <div style="font-size:24px;font-weight:700;color:#0F172A;margin-bottom:8px;">Bold 700</div>
          <div style="font-size:28px;font-weight:800;color:#0F172A;">ExtraBold 800</div>
        </div>\`;
      }
      return \`<div style="text-align:left;width:100%;max-width:300px;">
        <div style="font-size:40px;font-weight:800;color:#0F172A;letter-spacing:-0.04em;line-height:1;">Aa</div>
        <div style="font-size:12px;font-weight:600;color:#94A3B8;margin:12px 0 16px;letter-spacing:0.1em;text-transform:uppercase;">Inter · Rentenpe Type System</div>
        <div style="font-size:28px;font-weight:700;color:#0F172A;margin-bottom:4px;">Display</div>
        <div style="font-size:20px;font-weight:600;color:#334155;margin-bottom:4px;">Heading</div>
        <div style="font-size:16px;font-weight:400;color:#475569;margin-bottom:4px;">Body text for readable content</div>
        <div style="font-size:12px;font-weight:500;color:#94A3B8;">Caption · Metadata</div>
      </div>\`;
    }
    if (fam.includes('Spacing') || fam.includes('Grid') || fam.includes('Breakpoint')) {
      return \`<div style="width:100%;max-width:300px;">
        <div style="display:flex;align-items:end;gap:4px;margin-bottom:16px;">
          \${[4,8,12,16,24,32,48].map(s => \`<div style="width:\${s}px;height:\${s}px;background:#DBEAFE;border:1px solid #93C5FD;border-radius:4px;"></div>\`).join('')}
        </div>
        <div style="font-size:12px;color:#64748B;font-family:monospace;">4px · 8px · 12px · 16px · 24px · 32px · 48px</div>
      </div>\`;
    }
    if (fam.includes('Divider')) {
      if (fam.includes('Dashed')) return \`<div style="width:100%;max-width:300px;"><div style="border-bottom:2px dashed #CBD5E1;width:100%;"></div></div>\`;
      if (fam.includes('Label')) return \`<div style="width:100%;max-width:300px;display:flex;align-items:center;color:#94A3B8;font-size:12px;font-weight:600;letter-spacing:0.05em;"><div style="flex:1;border-bottom:1px solid #E2E8F0;"></div><span style="margin:0 16px;">OR</span><div style="flex:1;border-bottom:1px solid #E2E8F0;"></div></div>\`;
      return \`<div style="width:100%;max-width:300px;"><div style="border-bottom:2px solid #CBD5E1;width:100%;"></div></div>\`;
    }
    if (fam.includes('Icon') || fam.includes('icon')) {
      const isAction = fam.includes('Action');
      const isStatus = fam.includes('Status');
      const color = isAction ? '#3B82F6' : (isStatus ? '#10B981' : '#64748B');
      const paths = [
        '<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>','<circle cx="12" cy="12" r="10"/>',
        '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>','<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>',
        '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
        '<rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>',
        '<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>','<polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>',
        '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>',
        '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>',
        '<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>',
        '<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>',
        '<path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>'
      ];
      let grid = '';
      for(let i=0; i<24; i++) {
        grid += \`<div style="display:flex;flex-direction:column;align-items:center;gap:6px;padding:12px;border:1px solid #E2E8F0;border-radius:10px;transition:all 0.2s;" onmouseover="this.style.borderColor='\${color}';this.style.boxShadow='0 4px 12px \${color}22'" onmouseout="this.style.borderColor='#E2E8F0';this.style.boxShadow='none'">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="\${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">\${paths[i % paths.length]}</svg>
          <span style="font-size:9px;color:#94A3B8;font-family:monospace;">ic_\${String(i+1).padStart(2,'0')}</span>
        </div>\`;
      }
      return \`<div style="width:100%;"><div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(72px,1fr));gap:8px;">\${grid}</div></div>\`;
    }
    // Container fallback
    if (fam.includes('Card') || fam.includes('Container') || fam.includes('Standard') || fam.includes('Glass') || fam.includes('Elevated')) {
      const isGlass = fam.includes('Glass');
      const isElevated = fam.includes('Elevated');
      const bg = isGlass ? 'background:rgba(255,255,255,0.6);backdrop-filter:blur(20px);border:1px solid rgba(255,255,255,0.4);' : (isElevated ? 'background:#fff;box-shadow:0 20px 40px -10px rgba(0,0,0,0.12);border:1px solid #F1F5F9;' : 'background:#fff;border:1px solid #E2E8F0;');
      return \`<div style="width:100%;max-width:280px;border-radius:16px;\${bg}padding:24px;">
        <div style="width:48px;height:48px;background:#F1F5F9;border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:20px;margin-bottom:16px;">\${icon}</div>
        <div style="font-size:16px;font-weight:700;color:#0F172A;margin-bottom:4px;">\${fam}</div>
        <div style="font-size:13px;color:#64748B;">Structural container primitive for layout composition.</div>
      </div>\`;
    }
    return \`<div style="\${glassStyle} width:100%;max-width:280px;text-align:center;">
      <div style="font-size:32px;margin-bottom:8px;">\${icon}</div>
      <div style="font-weight:700;">\${fam}</div>
      <div style="font-size:12px;color:#64748B;">Foundation token</div>
    </div>\`;
  }

  // =====================================================================
  // INPUTS — Each family gets truly unique design
  // =====================================================================
  if (cat === 'Inputs') {
    // OTP / PIN — keep existing hyper-realistic mobile frame
    if (fam.includes('OTP') || fam.includes('PIN') || fam.includes('Digit') || fam.includes('Alphanumeric') || fam.includes('Code')) {
      const is6 = fam.includes('6');
      const isAlpha = fam.includes('Alpha');
      const count = is6 ? 6 : (isAlpha ? 5 : 4);
      const chars = is6 ? ['3','4','9','0','2',''] : (isAlpha ? ['A','7','X','2',''] : ['1','8','5','']);
      return \`<div style="width:100%;max-width:320px;background:#0A0A0F;border-radius:32px;padding:48px 24px 32px;color:#fff;text-align:center;box-shadow:0 20px 40px rgba(0,0,0,0.4);border:1px solid #222;">
        <div style="width:72px;height:56px;margin:0 auto 32px;background:linear-gradient(135deg,#F97316,#EA580C);border-radius:14px;display:flex;align-items:center;justify-content:center;box-shadow:0 12px 24px rgba(249,115,22,0.35);">
          <svg width="28" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
        </div>
        <div style="font-size:22px;font-weight:700;margin-bottom:8px;">Enter \${isAlpha ? 'alphanumeric' : count+'-digit'} code</div>
        <div style="font-size:13px;color:#94A3B8;margin-bottom:32px;">Sent to your registered device</div>
        <div style="display:flex;gap:8px;justify-content:center;margin-bottom:32px;">
          \${chars.map((c,i) => \`<div style="width:44px;height:52px;background:rgba(255,255,255,0.03);border:1px solid \${c?'rgba(255,255,255,0.1)':'#F97316'};border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:20px;font-weight:600;color:\${c?'#fff':'#F97316'};\${c?'':'box-shadow:0 0 16px rgba(249,115,22,0.3);'}">\${c}</div>\`).join('')}
        </div>
        <div style="display:inline-flex;align-items:center;gap:8px;background:rgba(255,255,255,0.04);padding:10px 20px;border-radius:99px;font-size:12px;color:#64748B;">↻ Resend code</div>
      </div>\`;
    }

    // Search Input
    if (fam.includes('Search')) {
      if (fam.includes('Expandable')) return \`<div style="width:100%;max-width:300px;display:flex;align-items:center;gap:12px;"><div style="width:44px;height:44px;background:#F1F5F9;border-radius:50%;display:flex;align-items:center;justify-content:center;cursor:pointer;">🔍</div><div style="flex:1;height:44px;background:#F1F5F9;border-radius:22px;display:flex;align-items:center;padding:0 16px;font-size:14px;color:#94A3B8;border:1px solid #E2E8F0;">Search...</div></div>\`;
      if (fam.includes('Filter')) return \`<div style="width:100%;max-width:300px;"><div style="display:flex;gap:8px;margin-bottom:12px;"><div style="flex:1;height:44px;background:#F8FAFC;border:1px solid #E2E8F0;border-radius:12px;display:flex;align-items:center;padding:0 14px;gap:8px;font-size:14px;color:#94A3B8;"><span>🔍</span>Search</div><div style="height:44px;width:44px;background:#0F172A;border-radius:12px;display:flex;align-items:center;justify-content:center;color:#fff;font-size:16px;cursor:pointer;">⚙</div></div><div style="display:flex;gap:8px;"><div style="padding:6px 14px;background:#EEF2FF;color:#4F46E5;border-radius:99px;font-size:12px;font-weight:600;">All</div><div style="padding:6px 14px;background:#F1F5F9;color:#64748B;border-radius:99px;font-size:12px;">Active</div><div style="padding:6px 14px;background:#F1F5F9;color:#64748B;border-radius:99px;font-size:12px;">Pending</div></div></div>\`;
      return \`<div style="width:100%;max-width:300px;height:48px;background:#F8FAFC;border:1.5px solid #E2E8F0;border-radius:14px;display:flex;align-items:center;padding:0 16px;gap:12px;transition:border-color 0.2s;" onmouseover="this.style.borderColor='#3B82F6'" onmouseout="this.style.borderColor='#E2E8F0'"><span style="color:#94A3B8;">🔍</span><span style="font-size:14px;color:#94A3B8;">Search components...</span></div>\`;
    }

    // Email
    if (fam.includes('Email')) {
      if (fam.includes('Domain')) return \`<div style="width:100%;max-width:300px;"><label style="font-size:13px;font-weight:600;color:#334155;display:block;margin-bottom:6px;">Email</label><div style="display:flex;border:1.5px solid #E2E8F0;border-radius:12px;overflow:hidden;"><input type="text" value="user" style="flex:1;padding:12px 14px;border:none;font-size:14px;outline:none;background:#F8FAFC;"/><div style="background:#F1F5F9;padding:12px 14px;font-size:14px;color:#64748B;border-left:1px solid #E2E8F0;">@rentenpe.com</div></div></div>\`;
      if (fam.includes('Multi')) return \`<div style="width:100%;max-width:300px;"><label style="font-size:13px;font-weight:600;color:#334155;display:block;margin-bottom:6px;">Recipients</label><div style="border:1.5px solid #E2E8F0;border-radius:12px;padding:8px;background:#F8FAFC;display:flex;flex-wrap:wrap;gap:6px;"><div style="background:#EEF2FF;color:#4F46E5;padding:4px 10px;border-radius:6px;font-size:12px;font-weight:600;display:flex;align-items:center;gap:4px;">josh@mail.com <span style="cursor:pointer;">✕</span></div><div style="background:#EEF2FF;color:#4F46E5;padding:4px 10px;border-radius:6px;font-size:12px;font-weight:600;display:flex;align-items:center;gap:4px;">admin@co.in <span style="cursor:pointer;">✕</span></div></div></div>\`;
      return \`<div style="width:100%;max-width:300px;"><label style="font-size:13px;font-weight:600;color:#334155;display:block;margin-bottom:6px;">Email Address</label><div style="border:1.5px solid #E2E8F0;border-radius:12px;padding:12px 14px;background:#F8FAFC;display:flex;align-items:center;gap:10px;"><span style="color:#94A3B8;">📧</span><span style="font-size:14px;color:#0F172A;">joshua@rentenpe.com</span></div><div style="font-size:11px;color:#10B981;margin-top:6px;font-weight:500;">✓ Valid email format</div></div>\`;
    }

    // Phone
    if (fam.includes('Phone')) {
      if (fam.includes('Country')) return \`<div style="width:100%;max-width:300px;"><label style="font-size:13px;font-weight:600;color:#334155;display:block;margin-bottom:6px;">Phone Number</label><div style="display:flex;gap:8px;"><div style="background:#F8FAFC;border:1.5px solid #E2E8F0;border-radius:12px;padding:12px;display:flex;align-items:center;gap:6px;cursor:pointer;"><span>🇮🇳</span><span style="font-size:14px;font-weight:600;">+91</span><span style="font-size:10px;">▼</span></div><div style="flex:1;background:#F8FAFC;border:1.5px solid #E2E8F0;border-radius:12px;padding:12px 14px;font-size:14px;color:#0F172A;">98765 43210</div></div></div>\`;
      if (fam.includes('Split')) return \`<div style="width:100%;max-width:300px;"><label style="font-size:13px;font-weight:600;color:#334155;display:block;margin-bottom:6px;">Phone Number</label><div style="display:flex;gap:6px;"><div style="width:60px;background:#F8FAFC;border:1.5px solid #E2E8F0;border-radius:12px;padding:12px;text-align:center;font-size:14px;font-weight:600;">+91</div><div style="width:48px;background:#F8FAFC;border:1.5px solid #E2E8F0;border-radius:12px;padding:12px;text-align:center;font-size:14px;">987</div><div style="width:48px;background:#F8FAFC;border:1.5px solid #E2E8F0;border-radius:12px;padding:12px;text-align:center;font-size:14px;">654</div><div style="flex:1;background:#F8FAFC;border:1.5px solid #E2E8F0;border-radius:12px;padding:12px;text-align:center;font-size:14px;">3210</div></div></div>\`;
      return \`<div style="width:100%;max-width:300px;"><label style="font-size:13px;font-weight:600;color:#334155;display:block;margin-bottom:6px;">Phone Number</label><div style="border:1.5px solid #E2E8F0;border-radius:12px;padding:12px 14px;background:#F8FAFC;display:flex;align-items:center;gap:10px;"><span style="font-size:16px;">📱</span><span style="font-size:14px;color:#0F172A;">+91 98765 43210</span></div></div>\`;
    }

    // Password
    if (fam.includes('Password')) {
      if (fam.includes('Strength')) return \`<div style="width:100%;max-width:300px;"><label style="font-size:13px;font-weight:600;color:#334155;display:block;margin-bottom:6px;">Password</label><div style="border:1.5px solid #E2E8F0;border-radius:12px;padding:12px 14px;background:#F8FAFC;display:flex;align-items:center;justify-content:space-between;"><div style="display:flex;align-items:center;gap:10px;"><span>🔒</span><span style="font-size:14px;color:#0F172A;letter-spacing:2px;">••••••••</span></div><span style="cursor:pointer;color:#64748B;">👁</span></div><div style="display:flex;gap:4px;margin-top:8px;"><div style="flex:1;height:4px;background:#10B981;border-radius:99px;"></div><div style="flex:1;height:4px;background:#10B981;border-radius:99px;"></div><div style="flex:1;height:4px;background:#10B981;border-radius:99px;"></div><div style="flex:1;height:4px;background:#E2E8F0;border-radius:99px;"></div></div><div style="font-size:11px;color:#10B981;margin-top:4px;">Good strength</div></div>\`;
      if (fam.includes('Requirement')) return \`<div style="width:100%;max-width:300px;"><label style="font-size:13px;font-weight:600;color:#334155;display:block;margin-bottom:6px;">Create Password</label><div style="border:1.5px solid #3B82F6;border-radius:12px;padding:12px 14px;background:#F8FAFC;display:flex;align-items:center;gap:10px;box-shadow:0 0 0 3px rgba(59,130,246,0.1);"><span>🔒</span><span style="font-size:14px;color:#0F172A;letter-spacing:2px;">••••••</span></div><div style="margin-top:10px;display:flex;flex-direction:column;gap:4px;font-size:12px;"><div style="color:#10B981;">✓ 8+ characters</div><div style="color:#10B981;">✓ One uppercase</div><div style="color:#EF4444;">✗ One number</div><div style="color:#94A3B8;">○ One special char</div></div></div>\`;
      return \`<div style="width:100%;max-width:300px;"><label style="font-size:13px;font-weight:600;color:#334155;display:block;margin-bottom:6px;">Password</label><div style="border:1.5px solid #E2E8F0;border-radius:12px;padding:12px 14px;background:#F8FAFC;display:flex;align-items:center;justify-content:space-between;"><div style="display:flex;align-items:center;gap:10px;"><span>🔒</span><span style="font-size:14px;color:#0F172A;letter-spacing:2px;">••••••••</span></div><span style="cursor:pointer;color:#94A3B8;">👁</span></div></div>\`;
    }

    // Currency — PayPal-inspired dark balance card
    if (fam.includes('Currency') || fam.includes('Amount') || fam.includes('Multi Currency')) {
      if (fam.includes('Multi')) return \`<div style="width:100%;max-width:300px;background:linear-gradient(145deg,#1A1A2E,#16213E);border-radius:20px;padding:24px;color:#fff;box-shadow:0 20px 40px rgba(0,0,0,0.3);">
        <div style="font-size:12px;color:#94A3B8;margin-bottom:4px;">Available Balance</div>
        <div style="font-size:32px;font-weight:800;margin-bottom:16px;letter-spacing:-0.02em;">₹1,590.00 <span style="font-size:14px;color:#64748B;font-weight:400;">INR</span></div>
        <div style="display:flex;gap:8px;"><div style="flex:1;background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.06);padding:10px;border-radius:12px;text-align:center;font-size:12px;font-weight:600;"><span style="display:block;font-size:16px;margin-bottom:2px;">↗</span>Send</div><div style="flex:1;background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.06);padding:10px;border-radius:12px;text-align:center;font-size:12px;font-weight:600;"><span style="display:block;font-size:16px;margin-bottom:2px;">↙</span>Receive</div><div style="flex:1;background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.06);padding:10px;border-radius:12px;text-align:center;font-size:12px;font-weight:600;"><span style="display:block;font-size:16px;margin-bottom:2px;">+</span>Add</div></div>
      </div>\`;
      return \`<div style="width:100%;max-width:300px;"><label style="font-size:13px;font-weight:600;color:#334155;display:block;margin-bottom:6px;">Amount</label><div style="border:1.5px solid #E2E8F0;border-radius:12px;padding:12px 14px;background:#F8FAFC;display:flex;align-items:center;gap:4px;"><span style="font-size:18px;font-weight:700;color:#0F172A;">₹</span><span style="font-size:24px;font-weight:700;color:#0F172A;">5,000</span><span style="font-size:14px;color:#94A3B8;margin-left:auto;">.00</span></div></div>\`;
    }

    // Generic input fallback
    return \`<div style="width:100%;max-width:300px;"><label style="font-size:13px;font-weight:600;color:#334155;display:block;margin-bottom:6px;">\${fam}</label><div style="border:1.5px solid #E2E8F0;border-radius:12px;padding:12px 14px;background:#F8FAFC;display:flex;align-items:center;gap:10px;"><span style="color:#94A3B8;">\${icon}</span><span style="font-size:14px;color:#94A3B8;">Enter value...</span></div></div>\`;
  }

  // =====================================================================
  // ACTIONS — Links, FABs
  // =====================================================================
  if (cat === 'Actions') {
    if (fam.includes('Link')) {
      if (fam.includes('Destructive')) return \`<div style="padding:24px;"><a href="#" style="color:#EF4444;font-weight:600;font-size:15px;text-decoration:none;display:inline-flex;align-items:center;gap:6px;">⚠ Delete Account</a></div>\`;
      if (fam.includes('Action')) return \`<div style="padding:24px;"><a href="#" style="color:#2563EB;font-weight:600;font-size:15px;text-decoration:none;display:inline-flex;align-items:center;gap:6px;">View Details →</a></div>\`;
      return \`<div style="padding:24px;"><a href="#" style="color:#0F172A;font-weight:500;font-size:15px;text-decoration:underline;text-underline-offset:3px;">Read Documentation</a></div>\`;
    }
    if (fam.includes('FAB')) {
      if (fam.includes('Extended')) return \`<div style="display:inline-flex;align-items:center;gap:10px;background:#0F172A;color:#fff;padding:14px 28px;border-radius:99px;font-weight:600;font-size:15px;box-shadow:0 12px 24px rgba(0,0,0,0.2);cursor:pointer;">+ New Payment</div>\`;
      if (fam.includes('Mini')) return \`<div style="width:44px;height:44px;background:#3B82F6;color:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:20px;box-shadow:0 8px 20px rgba(59,130,246,0.3);cursor:pointer;">+</div>\`;
      return \`<div style="width:56px;height:56px;background:#0F172A;color:#fff;border-radius:16px;display:flex;align-items:center;justify-content:center;font-size:24px;box-shadow:0 12px 24px rgba(0,0,0,0.2);cursor:pointer;">+</div>\`;
    }
  }

  // =====================================================================
  // SELECTION
  // =====================================================================
  if (cat === 'Selection') {
    if (fam.includes('Checkbox')) {
      if (fam.includes('Group')) return \`<div style="width:100%;max-width:280px;display:flex;flex-direction:column;gap:12px;"><div style="display:flex;align-items:center;gap:12px;padding:12px 16px;background:#F8FAFC;border-radius:12px;border:1px solid #E2E8F0;"><div style="width:20px;height:20px;background:#3B82F6;border-radius:4px;display:flex;align-items:center;justify-content:center;color:#fff;font-size:12px;">✓</div><span style="font-size:14px;font-weight:500;">Email notifications</span></div><div style="display:flex;align-items:center;gap:12px;padding:12px 16px;background:#F8FAFC;border-radius:12px;border:1px solid #E2E8F0;"><div style="width:20px;height:20px;background:#3B82F6;border-radius:4px;display:flex;align-items:center;justify-content:center;color:#fff;font-size:12px;">✓</div><span style="font-size:14px;font-weight:500;">SMS alerts</span></div><div style="display:flex;align-items:center;gap:12px;padding:12px 16px;background:#F8FAFC;border-radius:12px;border:1px solid #E2E8F0;"><div style="width:20px;height:20px;border:2px solid #CBD5E1;border-radius:4px;"></div><span style="font-size:14px;font-weight:500;color:#94A3B8;">Push notifications</span></div></div>\`;
      if (fam.includes('Indeterminate')) return \`<div style="display:flex;align-items:center;gap:12px;padding:14px 18px;background:#FFF;border:1.5px solid #E2E8F0;border-radius:12px;"><div style="width:20px;height:20px;background:#3B82F6;border-radius:4px;display:flex;align-items:center;justify-content:center;color:#fff;font-size:14px;font-weight:700;">−</div><span style="font-size:14px;font-weight:500;">Select all (2 of 5)</span></div>\`;
      return \`<div style="display:flex;align-items:center;gap:12px;padding:14px 18px;background:#FFF;border:1.5px solid #E2E8F0;border-radius:12px;"><div style="width:20px;height:20px;background:#3B82F6;border-radius:4px;display:flex;align-items:center;justify-content:center;color:#fff;font-size:12px;">✓</div><span style="font-size:14px;font-weight:500;">I agree to terms</span></div>\`;
    }
    if (fam.includes('Radio')) {
      if (fam.includes('Card')) return \`<div style="width:100%;max-width:280px;display:flex;flex-direction:column;gap:10px;"><div style="padding:16px;background:#EEF2FF;border:2px solid #4F46E5;border-radius:14px;display:flex;align-items:center;gap:12px;"><div style="width:20px;height:20px;border-radius:50%;border:2px solid #4F46E5;display:flex;align-items:center;justify-content:center;"><div style="width:10px;height:10px;background:#4F46E5;border-radius:50%;"></div></div><div><div style="font-size:14px;font-weight:600;color:#0F172A;">Monthly Plan</div><div style="font-size:12px;color:#64748B;">₹999/month</div></div></div><div style="padding:16px;background:#FFF;border:1.5px solid #E2E8F0;border-radius:14px;display:flex;align-items:center;gap:12px;"><div style="width:20px;height:20px;border-radius:50%;border:2px solid #CBD5E1;"></div><div><div style="font-size:14px;font-weight:600;color:#0F172A;">Annual Plan</div><div style="font-size:12px;color:#64748B;">₹9,999/year</div></div></div></div>\`;
      return \`<div style="display:flex;flex-direction:column;gap:10px;"><div style="display:flex;align-items:center;gap:10px;"><div style="width:20px;height:20px;border-radius:50%;border:2px solid #3B82F6;display:flex;align-items:center;justify-content:center;"><div style="width:10px;height:10px;background:#3B82F6;border-radius:50%;"></div></div><span style="font-size:14px;font-weight:500;">Option A</span></div><div style="display:flex;align-items:center;gap:10px;"><div style="width:20px;height:20px;border-radius:50%;border:2px solid #CBD5E1;"></div><span style="font-size:14px;font-weight:500;color:#64748B;">Option B</span></div></div>\`;
    }
    if (fam.includes('Toggle') || fam.includes('Switch')) {
      return \`<div style="display:flex;align-items:center;justify-content:space-between;width:100%;max-width:280px;padding:14px 18px;background:#FFF;border:1.5px solid #E2E8F0;border-radius:14px;"><span style="font-size:14px;font-weight:600;">Dark mode</span><div style="width:48px;height:28px;background:#3B82F6;border-radius:99px;padding:2px;cursor:pointer;position:relative;"><div style="width:24px;height:24px;background:#fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,0.1);position:absolute;right:2px;top:2px;"></div></div></div>\`;
    }
    if (fam.includes('Slider') || fam.includes('Range')) {
      return \`<div style="width:100%;max-width:280px;"><label style="font-size:13px;font-weight:600;color:#334155;display:flex;justify-content:space-between;margin-bottom:12px;"><span>Budget Range</span><span style="color:#3B82F6;">₹15,000</span></label><div style="width:100%;height:6px;background:#E2E8F0;border-radius:99px;position:relative;"><div style="width:60%;height:6px;background:linear-gradient(90deg,#3B82F6,#6366F1);border-radius:99px;"></div><div style="position:absolute;top:-7px;left:58%;width:20px;height:20px;background:#fff;border:2px solid #3B82F6;border-radius:50%;box-shadow:0 2px 6px rgba(0,0,0,0.1);"></div></div></div>\`;
    }
    return \`<div style="\${glassStyle} text-align:center;"><div style="font-size:32px;margin-bottom:8px;">\${icon}</div><div style="font-weight:700;">\${fam}</div></div>\`;
  }

  // =====================================================================
  // PAYMENTS — Pinterest Fintech Wallet Inspired
  // =====================================================================
  if (cat === 'Payments') {
    if (fam.includes('Wallet') || fam.includes('Balance') || fam.includes('History') || fam.includes('Multi')) {
      return \`<div style="width:100%;max-width:320px;background:linear-gradient(145deg,#0F172A,#1E293B);border-radius:24px;padding:28px;color:#fff;box-shadow:0 24px 48px rgba(0,0,0,0.3);position:relative;overflow:hidden;">
        <div style="position:absolute;top:-40px;right:-40px;width:150px;height:150px;background:radial-gradient(circle,rgba(59,130,246,0.15),transparent);border-radius:50%;"></div>
        <div style="font-size:12px;color:#94A3B8;margin-bottom:4px;">My Balance</div>
        <div style="font-size:36px;font-weight:800;margin-bottom:4px;letter-spacing:-0.03em;">₹23,400<span style="font-size:18px;color:#64748B;">.00</span></div>
        <div style="display:flex;gap:4px;align-items:center;font-size:12px;color:#10B981;margin-bottom:24px;">↑ +12% <span style="color:#64748B;">this month</span></div>
        <div style="display:flex;gap:10px;">
          <div style="flex:1;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.05);border-radius:14px;padding:12px;text-align:center;cursor:pointer;"><div style="font-size:18px;margin-bottom:4px;">↗</div><div style="font-size:11px;font-weight:600;">Send</div></div>
          <div style="flex:1;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.05);border-radius:14px;padding:12px;text-align:center;cursor:pointer;"><div style="font-size:18px;margin-bottom:4px;">↙</div><div style="font-size:11px;font-weight:600;">Receive</div></div>
          <div style="flex:1;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.05);border-radius:14px;padding:12px;text-align:center;cursor:pointer;"><div style="font-size:18px;margin-bottom:4px;">📋</div><div style="font-size:11px;font-weight:600;">History</div></div>
        </div>
      </div>\`;
    }
    if (fam.includes('Card') || fam.includes('Method') || fam.includes('Default') || fam.includes('Add')) {
      return \`<div style="width:100%;max-width:300px;background:linear-gradient(135deg,#1E293B,#334155);border-radius:16px;padding:20px;color:#fff;box-shadow:0 12px 24px rgba(0,0,0,0.2);">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:24px;"><span style="font-size:11px;font-weight:700;letter-spacing:0.1em;">VISA</span><span style="font-size:10px;color:#94A3B8;">•••• 5679</span></div>
        <div style="font-size:18px;font-weight:700;letter-spacing:3px;margin-bottom:20px;">•••• •••• •••• 5679</div>
        <div style="display:flex;justify-content:space-between;"><div><div style="font-size:9px;color:#64748B;">CARD HOLDER</div><div style="font-size:12px;font-weight:600;">Joshua M.</div></div><div><div style="font-size:9px;color:#64748B;">EXPIRES</div><div style="font-size:12px;font-weight:600;">12/28</div></div></div>
      </div>\`;
    }
    if (fam.includes('Receipt') || fam.includes('Detailed') || fam.includes('Download')) {
      return \`<div style="width:100%;max-width:280px;background:#fff;border:1px solid #E2E8F0;border-radius:16px;padding:24px;">
        <div style="text-align:center;margin-bottom:20px;"><div style="width:48px;height:48px;background:#ECFDF5;border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto 12px;font-size:24px;">✓</div><div style="font-size:16px;font-weight:700;color:#0F172A;">Payment Successful</div><div style="font-size:28px;font-weight:800;color:#0F172A;margin-top:4px;">₹2,500.00</div></div>
        <div style="border-top:1px dashed #E2E8F0;padding-top:16px;display:flex;flex-direction:column;gap:10px;">
          <div style="display:flex;justify-content:space-between;font-size:13px;"><span style="color:#64748B;">To</span><span style="font-weight:600;color:#0F172A;">Landlord</span></div>
          <div style="display:flex;justify-content:space-between;font-size:13px;"><span style="color:#64748B;">Date</span><span style="font-weight:600;color:#0F172A;">Oct 10, 2026</span></div>
          <div style="display:flex;justify-content:space-between;font-size:13px;"><span style="color:#64748B;">Ref</span><span style="font-weight:600;color:#0F172A;font-family:monospace;">#TXN8294</span></div>
        </div>
      </div>\`;
    }
    if (fam.includes('Transaction') || fam.includes('Row') || fam.includes('Status') || fam.includes('Grouped')) {
      return \`<div style="width:100%;max-width:300px;display:flex;flex-direction:column;gap:2px;">
        <div style="display:flex;align-items:center;gap:14px;padding:14px 16px;background:#fff;border-radius:14px;border:1px solid #F1F5F9;">
          <div style="width:40px;height:40px;background:#FEE2E2;border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:18px;">N</div>
          <div style="flex:1;"><div style="font-size:14px;font-weight:600;color:#0F172A;">Netflix</div><div style="font-size:11px;color:#94A3B8;">Oct 8, 2026 · 09:42 AM</div></div>
          <div style="font-size:14px;font-weight:700;color:#EF4444;">−₹649</div>
        </div>
        <div style="display:flex;align-items:center;gap:14px;padding:14px 16px;background:#fff;border-radius:14px;border:1px solid #F1F5F9;">
          <div style="width:40px;height:40px;background:#DBEAFE;border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:18px;">💰</div>
          <div style="flex:1;"><div style="font-size:14px;font-weight:600;color:#0F172A;">Salary Credit</div><div style="font-size:11px;color:#94A3B8;">Oct 1, 2026 · 12:00 PM</div></div>
          <div style="font-size:14px;font-weight:700;color:#10B981;">+₹45,000</div>
        </div>
      </div>\`;
    }
    return \`<div style="\${glassStyle} text-align:center;width:100%;max-width:280px;"><div style="font-size:32px;margin-bottom:8px;">\${icon}</div><div style="font-weight:700;">\${fam}</div><div style="font-size:12px;color:#64748B;">Payment component</div></div>\`;
  }

  // =====================================================================
  // CARDS — Starbucks Rewards / Savings Goals inspired
  // =====================================================================
  if (cat === 'Cards' || cat === 'Rewards') {
    if (fam.includes('Reward') || fam.includes('Scratch') || fam.includes('Coupon') || fam.includes('Cashback') || fam.includes('Earned') || fam.includes('Offer')) {
      return \`<div style="width:100%;max-width:300px;background:linear-gradient(135deg,#92400E,#78350F);border-radius:20px;padding:28px;color:#fff;box-shadow:0 16px 32px rgba(0,0,0,0.2);">
        <div style="font-size:11px;font-weight:600;letter-spacing:0.1em;color:rgba(255,255,255,0.7);margin-bottom:16px;">REWARD PROGRESS</div>
        <div style="display:flex;align-items:baseline;gap:4px;margin-bottom:8px;"><span style="font-size:36px;font-weight:800;">84</span><span style="font-size:16px;color:#F59E0B;">/125★</span></div>
        <div style="font-size:13px;color:rgba(255,255,255,0.7);margin-bottom:16px;">41★ until your next Reward</div>
        <div style="width:100%;height:8px;background:rgba(0,0,0,0.3);border-radius:99px;overflow:hidden;"><div style="width:67%;height:100%;background:linear-gradient(90deg,#D97706,#F59E0B);border-radius:99px;"></div></div>
      </div>\`;
    }
    if (fam.includes('Membership') || fam.includes('Tier') || fam.includes('Premium') || fam.includes('Comparison Grid') || fam.includes('Standard Tier')) {
      return \`<div style="width:100%;max-width:300px;background:linear-gradient(135deg,#D4AF37 0%,#B8860B 50%,#DAA520 100%);border-radius:20px;padding:24px;color:#fff;box-shadow:0 16px 32px rgba(0,0,0,0.15);">
        <div style="font-size:20px;font-weight:700;margin-bottom:4px;">Josie Kolbech</div>
        <div style="font-size:14px;color:rgba(255,255,255,0.8);margin-bottom:12px;">Gold Status</div>
        <div style="display:flex;align-items:center;gap:8px;"><span style="font-size:24px;">★</span><span style="font-size:24px;opacity:0.5;">★</span></div>
      </div>\`;
    }
    if (fam.includes('Streak') || fam.includes('Flame') || fam.includes('Compact Badge') || fam.includes('Recovery')) {
      return \`<div style="width:100%;max-width:280px;background:#FFF;border:1px solid #E2E8F0;border-radius:20px;padding:24px;text-align:center;">
        <div style="font-size:48px;margin-bottom:8px;filter:drop-shadow(0 4px 8px rgba(234,88,12,0.3));">🔥</div>
        <div style="font-size:32px;font-weight:800;color:#0F172A;margin-bottom:4px;">15 Days</div>
        <div style="font-size:13px;color:#64748B;margin-bottom:16px;">Current Streak</div>
        <div style="display:flex;justify-content:center;gap:4px;">\${Array(7).fill(0).map((_,i) => \`<div style="width:28px;height:28px;background:\${i<5?'#F97316':'#F1F5F9'};border-radius:6px;display:flex;align-items:center;justify-content:center;font-size:10px;\${i<5?'color:#fff;':'color:#94A3B8;'}">\${['M','T','W','T','F','S','S'][i]}</div>\`).join('')}</div>
      </div>\`;
    }
    if (fam.includes('Achievement') || fam.includes('Unlocked') || fam.includes('Locked') || fam.includes('Badge Grid')) {
      return \`<div style="width:100%;max-width:280px;display:flex;gap:12px;flex-wrap:wrap;justify-content:center;">
        <div style="width:80px;text-align:center;"><div style="width:64px;height:64px;background:#FEF3C7;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:28px;margin:0 auto 8px;box-shadow:0 4px 12px rgba(245,158,11,0.2);">🏆</div><div style="font-size:11px;font-weight:600;color:#0F172A;">Early Bird</div></div>
        <div style="width:80px;text-align:center;"><div style="width:64px;height:64px;background:#DBEAFE;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:28px;margin:0 auto 8px;box-shadow:0 4px 12px rgba(59,130,246,0.2);">💎</div><div style="font-size:11px;font-weight:600;color:#0F172A;">Pro User</div></div>
        <div style="width:80px;text-align:center;opacity:0.4;"><div style="width:64px;height:64px;background:#F1F5F9;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:28px;margin:0 auto 8px;">🔒</div><div style="font-size:11px;font-weight:600;color:#94A3B8;">Locked</div></div>
      </div>\`;
    }
    if (fam.includes('Profile') || fam.includes('Team') || fam.includes('Compact Profile')) {
      return \`<div style="width:100%;max-width:280px;background:#fff;border:1px solid #E2E8F0;border-radius:20px;padding:24px;text-align:center;">
        <div style="width:64px;height:64px;background:linear-gradient(135deg,#6366F1,#8B5CF6);border-radius:50%;margin:0 auto 16px;display:flex;align-items:center;justify-content:center;font-size:24px;color:#fff;font-weight:700;">JM</div>
        <div style="font-size:18px;font-weight:700;color:#0F172A;margin-bottom:2px;">Joshua M.</div>
        <div style="font-size:13px;color:#64748B;margin-bottom:16px;">Gold Member · Since 2024</div>
        <div style="display:flex;gap:24px;justify-content:center;"><div><div style="font-size:18px;font-weight:800;color:#0F172A;">12</div><div style="font-size:11px;color:#94A3B8;">Properties</div></div><div><div style="font-size:18px;font-weight:800;color:#0F172A;">₹2.4L</div><div style="font-size:11px;color:#94A3B8;">Total Rent</div></div></div>
      </div>\`;
    }
    // Savings Goals inspired by Pinterest
    if (fam.includes('Entity') || fam.includes('Standard Entity') || fam.includes('With Status') || fam.includes('Compact Entity')) {
      return \`<div style="width:100%;max-width:300px;background:#fff;border:1px solid #E2E8F0;border-radius:20px;padding:20px;">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;">
          <div style="display:flex;align-items:center;gap:12px;">
            <div style="width:40px;height:40px;background:#F1F5F9;border-radius:12px;display:flex;align-items:center;justify-content:center;">🏖</div>
            <div><div style="font-size:14px;font-weight:700;color:#0F172A;">Summer Vacation</div></div>
          </div>
          <span style="font-size:14px;color:#94A3B8;">›</span>
        </div>
        <div style="display:flex;justify-content:space-between;font-size:13px;font-weight:600;margin-bottom:8px;"><span style="color:#0F172A;">₹15,000</span><span style="color:#94A3B8;">₹50,000</span></div>
        <div style="width:100%;height:6px;background:#F1F5F9;border-radius:99px;overflow:hidden;margin-bottom:8px;"><div style="width:30%;height:100%;background:#10B981;border-radius:99px;"></div></div>
        <div style="display:flex;justify-content:space-between;font-size:11px;color:#94A3B8;"><span>20 days to go</span><span>30%</span></div>
      </div>\`;
    }
    return \`<div style="\${glassStyle} text-align:center;width:100%;max-width:280px;"><div style="font-size:32px;margin-bottom:8px;">\${icon}</div><div style="font-weight:700;">\${fam}</div><div style="font-size:12px;color:#64748B;">Component variant</div></div>\`;
  }

  // =====================================================================
  // NAVIGATION — Bottom Tab Bar inspired by PhonePe/PayPal
  // =====================================================================
  if (cat === 'Navigation') {
    if (fam.includes('Tab Bar') || fam.includes('Bottom') || fam.includes('Floating')) {
      return \`<div style="width:100%;max-width:340px;background:#FFFFFF;border-radius:24px;padding:12px 8px;box-shadow:0 -4px 24px rgba(0,0,0,0.08);display:flex;justify-content:space-around;align-items:center;border:1px solid #F1F5F9;">
        <div style="display:flex;flex-direction:column;align-items:center;gap:4px;color:#3B82F6;"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg><span style="font-size:10px;font-weight:700;">Home</span></div>
        <div style="display:flex;flex-direction:column;align-items:center;gap:4px;color:#94A3B8;"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg><span style="font-size:10px;font-weight:500;">Search</span></div>
        <div style="width:48px;height:48px;background:#0F172A;border-radius:50%;display:flex;align-items:center;justify-content:center;color:#fff;font-size:24px;margin-top:-20px;box-shadow:0 8px 16px rgba(0,0,0,0.2);">+</div>
        <div style="display:flex;flex-direction:column;align-items:center;gap:4px;color:#94A3B8;position:relative;"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/></svg><div style="position:absolute;top:-2px;right:-2px;width:8px;height:8px;background:#EF4444;border-radius:50%;border:2px solid #fff;"></div><span style="font-size:10px;font-weight:500;">Alerts</span></div>
        <div style="display:flex;flex-direction:column;align-items:center;gap:4px;color:#94A3B8;"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg><span style="font-size:10px;font-weight:500;">Profile</span></div>
      </div>\`;
    }
    if (fam.includes('Tabs') || fam.includes('Underline') || fam.includes('Pill')) {
      if (fam.includes('Pill')) return \`<div style="display:flex;gap:6px;background:#F1F5F9;padding:4px;border-radius:99px;"><div style="padding:10px 20px;background:#0F172A;color:#fff;border-radius:99px;font-size:13px;font-weight:600;">Rewards</div><div style="padding:10px 20px;color:#64748B;font-size:13px;font-weight:500;">History</div><div style="padding:10px 20px;color:#64748B;font-size:13px;font-weight:500;">Settings</div></div>\`;
      if (fam.includes('Underline')) return \`<div style="display:flex;gap:24px;border-bottom:2px solid #E2E8F0;"><div style="padding-bottom:12px;border-bottom:2px solid #0F172A;margin-bottom:-2px;font-size:14px;font-weight:600;color:#0F172A;">Rewards</div><div style="padding-bottom:12px;font-size:14px;font-weight:500;color:#94A3B8;">History</div><div style="padding-bottom:12px;font-size:14px;font-weight:500;color:#94A3B8;">Expiration</div></div>\`;
      return \`<div style="display:flex;gap:24px;"><div style="padding-bottom:10px;border-bottom:3px solid #3B82F6;font-size:14px;font-weight:700;color:#0F172A;">Overview</div><div style="padding-bottom:10px;font-size:14px;font-weight:500;color:#94A3B8;">Analytics</div><div style="padding-bottom:10px;font-size:14px;font-weight:500;color:#94A3B8;">Reports</div></div>\`;
    }
    return \`<div style="\${glassStyle} text-align:center;width:100%;max-width:280px;"><div style="font-size:32px;margin-bottom:8px;">\${icon}</div><div style="font-weight:700;">\${fam}</div><div style="font-size:12px;color:#64748B;">Navigation component</div></div>\`;
  }

  // =====================================================================
  // CHARTS — SVG-based unique chart types
  // =====================================================================
  if (cat === 'Charts' || cat === 'Analytics' || cat === 'Infographics') {
    if (fam.includes('Donut') || fam.includes('Pie')) {
      return \`<div style="width:100%;max-width:280px;text-align:center;">
        <svg viewBox="0 0 120 120" width="140" height="140" style="display:block;margin:0 auto 16px;">
          <circle cx="60" cy="60" r="50" fill="none" stroke="#F1F5F9" stroke-width="12"/>
          <circle cx="60" cy="60" r="50" fill="none" stroke="#3B82F6" stroke-width="12" stroke-dasharray="188 126" stroke-dashoffset="0" transform="rotate(-90 60 60)"/>
          <circle cx="60" cy="60" r="50" fill="none" stroke="#10B981" stroke-width="12" stroke-dasharray="63 251" stroke-dashoffset="-188" transform="rotate(-90 60 60)"/>
          <text x="60" y="56" text-anchor="middle" font-size="20" font-weight="800" fill="#0F172A">67%</text>
          <text x="60" y="72" text-anchor="middle" font-size="10" fill="#94A3B8">On Track</text>
        </svg>
      </div>\`;
    }
    if (fam.includes('Bar') || fam.includes('Horizontal') || fam.includes('Grouped') || fam.includes('Stacked')) {
      return \`<div style="width:100%;max-width:300px;">
        <div style="display:flex;justify-content:space-between;margin-bottom:16px;"><span style="font-size:14px;font-weight:700;color:#0F172A;">Saving Analytics</span><span style="font-size:12px;color:#64748B;">Avg ₹1,202/mo</span></div>
        <div style="display:flex;align-items:end;gap:10px;height:120px;margin-bottom:8px;">
          \${[65,80,45,90,70,55].map((h,i) => \`<div style="flex:1;display:flex;flex-direction:column;align-items:center;gap:4px;"><div style="width:100%;height:\${h}%;background:\${i===3?'#0F172A':'#E2E8F0'};border-radius:6px;transition:background 0.2s;" onmouseover="this.style.background='#0F172A'" onmouseout="this.style.background='\${i===3?'#0F172A':'#E2E8F0'}'"></div></div>\`).join('')}
        </div>
        <div style="display:flex;gap:10px;"><div style="flex:1;text-align:center;font-size:10px;color:#94A3B8;">Jan</div><div style="flex:1;text-align:center;font-size:10px;color:#94A3B8;">Feb</div><div style="flex:1;text-align:center;font-size:10px;color:#94A3B8;">Mar</div><div style="flex:1;text-align:center;font-size:10px;color:#94A3B8;">Apr</div><div style="flex:1;text-align:center;font-size:10px;color:#94A3B8;">May</div><div style="flex:1;text-align:center;font-size:10px;color:#94A3B8;">Jun</div></div>
      </div>\`;
    }
    if (fam.includes('Line') || fam.includes('Area') || fam.includes('Sparkline') || fam.includes('Trend') || fam.includes('Mini')) {
      return \`<div style="width:100%;max-width:300px;">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;"><div><div style="font-size:14px;font-weight:700;color:#0F172A;">Portfolio Value</div><div style="font-size:24px;font-weight:800;color:#0F172A;">₹63,000</div></div><div style="background:#ECFDF5;color:#10B981;padding:4px 10px;border-radius:99px;font-size:12px;font-weight:700;">+12.5%</div></div>
        <svg viewBox="0 0 300 80" width="100%" height="80" style="display:block;">
          <defs><linearGradient id="areaFill" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#3B82F6" stop-opacity="0.2"/><stop offset="100%" stop-color="#3B82F6" stop-opacity="0"/></linearGradient></defs>
          <path d="M0,60 Q30,40 60,50 T120,30 T180,35 T240,15 T300,20 L300,80 L0,80Z" fill="url(#areaFill)"/>
          <path d="M0,60 Q30,40 60,50 T120,30 T180,35 T240,15 T300,20" fill="none" stroke="#3B82F6" stroke-width="2.5"/>
          <circle cx="300" cy="20" r="4" fill="#3B82F6"/>
        </svg>
      </div>\`;
    }
    return \`<div style="\${glassStyle} text-align:center;width:100%;max-width:280px;"><div style="font-size:32px;margin-bottom:8px;">\${icon}</div><div style="font-weight:700;">\${fam}</div><div style="font-size:12px;color:#64748B;">Data visualization</div></div>\`;
  }

  // =====================================================================
  // FEEDBACK
  // =====================================================================
  if (cat === 'Feedback') {
    if (fam.includes('Progress') || fam.includes('Segmented') || fam.includes('Circular')) {
      if (fam.includes('Circular')) return \`<div style="text-align:center;"><svg viewBox="0 0 120 120" width="120" height="120"><circle cx="60" cy="60" r="50" fill="none" stroke="#F1F5F9" stroke-width="10"/><circle cx="60" cy="60" r="50" fill="none" stroke="#3B82F6" stroke-width="10" stroke-dasharray="220 94" stroke-linecap="round" transform="rotate(-90 60 60)"/><text x="60" y="56" text-anchor="middle" font-size="22" font-weight="800" fill="#0F172A">70%</text><text x="60" y="72" text-anchor="middle" font-size="10" fill="#94A3B8">Complete</text></svg></div>\`;
      return \`<div style="width:100%;max-width:280px;"><div style="display:flex;justify-content:space-between;font-size:13px;margin-bottom:8px;"><span style="font-weight:600;color:#0F172A;">Uploading...</span><span style="color:#3B82F6;font-weight:600;">72%</span></div><div style="width:100%;height:8px;background:#F1F5F9;border-radius:99px;overflow:hidden;"><div style="width:72%;height:100%;background:linear-gradient(90deg,#3B82F6,#6366F1);border-radius:99px;transition:width 0.3s;"></div></div></div>\`;
    }
    if (fam.includes('Skeleton') || fam.includes('Loading')) {
      return \`<div style="width:100%;max-width:280px;display:flex;flex-direction:column;gap:12px;"><div style="display:flex;gap:12px;align-items:center;"><div style="width:48px;height:48px;background:linear-gradient(90deg,#F1F5F9 25%,#E2E8F0 50%,#F1F5F9 75%);border-radius:12px;background-size:200% 100%;animation:shimmer 1.5s infinite;"></div><div style="flex:1;"><div style="height:14px;background:linear-gradient(90deg,#F1F5F9 25%,#E2E8F0 50%,#F1F5F9 75%);border-radius:4px;margin-bottom:8px;width:70%;background-size:200% 100%;"></div><div style="height:10px;background:linear-gradient(90deg,#F1F5F9 25%,#E2E8F0 50%,#F1F5F9 75%);border-radius:4px;width:40%;background-size:200% 100%;"></div></div></div><div style="height:100px;background:linear-gradient(90deg,#F1F5F9 25%,#E2E8F0 50%,#F1F5F9 75%);border-radius:12px;background-size:200% 100%;"></div></div>\`;
    }
    if (fam.includes('Empty') || fam.includes('No-data') || fam.includes('Illustrated')) {
      return \`<div style="width:100%;max-width:280px;text-align:center;padding:40px 20px;"><div style="font-size:48px;margin-bottom:16px;opacity:0.6;">📭</div><div style="font-size:18px;font-weight:700;color:#0F172A;margin-bottom:8px;">No results found</div><div style="font-size:14px;color:#64748B;margin-bottom:20px;">Try adjusting your search or filters</div><button style="background:#0F172A;color:#fff;border:none;padding:10px 24px;border-radius:10px;font-weight:600;font-size:14px;cursor:pointer;">Clear Filters</button></div>\`;
    }
    return \`<div style="\${glassStyle} text-align:center;width:100%;max-width:280px;"><div style="font-size:32px;margin-bottom:8px;">\${icon}</div><div style="font-weight:700;">\${fam}</div><div style="font-size:12px;color:#64748B;">Feedback component</div></div>\`;
  }

  // =====================================================================
  // OVERLAYS
  // =====================================================================
  if (cat === 'Overlays') {
    if (fam.includes('Bottom Sheet') || fam.includes('Handle') || fam.includes('Full Screen')) {
      return \`<div style="width:100%;max-width:320px;background:#fff;border-radius:24px 24px 0 0;padding:12px 24px 24px;box-shadow:0 -8px 32px rgba(0,0,0,0.1);border:1px solid #E2E8F0;">
        <div style="width:40px;height:4px;background:#CBD5E1;border-radius:99px;margin:0 auto 20px;"></div>
        <div style="font-size:18px;font-weight:700;color:#0F172A;margin-bottom:16px;">Payment Options</div>
        <div style="display:flex;flex-direction:column;gap:8px;">
          <div style="display:flex;align-items:center;gap:14px;padding:14px;background:#F8FAFC;border-radius:14px;"><div style="width:36px;height:36px;background:#DBEAFE;border-radius:10px;display:flex;align-items:center;justify-content:center;">💳</div><div style="flex:1;font-size:14px;font-weight:600;">Credit Card</div><span style="color:#94A3B8;">›</span></div>
          <div style="display:flex;align-items:center;gap:14px;padding:14px;background:#F8FAFC;border-radius:14px;"><div style="width:36px;height:36px;background:#ECFDF5;border-radius:10px;display:flex;align-items:center;justify-content:center;">🏦</div><div style="flex:1;font-size:14px;font-weight:600;">Bank Transfer</div><span style="color:#94A3B8;">›</span></div>
        </div>
      </div>\`;
    }
    if (fam.includes('Confirm') || fam.includes('Danger') || fam.includes('Dialog')) {
      return \`<div style="width:100%;max-width:300px;background:#fff;border-radius:20px;padding:28px;text-align:center;box-shadow:0 25px 50px rgba(0,0,0,0.12);">
        <div style="width:56px;height:56px;background:#FEE2E2;border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto 16px;font-size:28px;">⚠</div>
        <div style="font-size:18px;font-weight:700;color:#0F172A;margin-bottom:8px;">Are you sure?</div>
        <div style="font-size:14px;color:#64748B;margin-bottom:24px;">This action cannot be undone.</div>
        <div style="display:flex;gap:10px;"><button style="flex:1;padding:12px;background:#F1F5F9;border:none;border-radius:12px;font-weight:600;font-size:14px;color:#475569;cursor:pointer;">Cancel</button><button style="flex:1;padding:12px;background:#EF4444;border:none;border-radius:12px;font-weight:600;font-size:14px;color:#fff;cursor:pointer;">Delete</button></div>
      </div>\`;
    }
    return \`<div style="\${glassStyle} text-align:center;width:100%;max-width:280px;"><div style="font-size:32px;margin-bottom:8px;">\${icon}</div><div style="font-weight:700;">\${fam}</div><div style="font-size:12px;color:#64748B;">Overlay component</div></div>\`;
  }

  // =====================================================================
  // AUTHENTICATION — Clean mobile auth screens
  // =====================================================================
  if (cat === 'Authentication' || cat === 'Onboarding') {
    if (fam.includes('Login') || fam.includes('Standard Login') || fam.includes('Social') || fam.includes('OTP Login')) {
      return \`<div style="width:100%;max-width:300px;text-align:center;">
        <div style="width:64px;height:64px;background:#0F172A;border-radius:16px;display:flex;align-items:center;justify-content:center;margin:0 auto 24px;font-size:24px;color:#fff;font-weight:800;">R</div>
        <div style="font-size:24px;font-weight:800;color:#0F172A;margin-bottom:8px;">Welcome back</div>
        <div style="font-size:14px;color:#64748B;margin-bottom:32px;">Sign in to your Rentenpe account</div>
        <div style="text-align:left;margin-bottom:12px;"><label style="font-size:13px;font-weight:600;color:#334155;display:block;margin-bottom:6px;">Email</label><div style="border:1.5px solid #E2E8F0;border-radius:12px;padding:12px 14px;background:#F8FAFC;font-size:14px;color:#94A3B8;">you@example.com</div></div>
        <div style="text-align:left;margin-bottom:24px;"><label style="font-size:13px;font-weight:600;color:#334155;display:block;margin-bottom:6px;">Password</label><div style="border:1.5px solid #E2E8F0;border-radius:12px;padding:12px 14px;background:#F8FAFC;font-size:14px;color:#94A3B8;">••••••••</div></div>
        <button style="width:100%;padding:14px;background:#0F172A;color:#fff;border:none;border-radius:12px;font-weight:700;font-size:15px;">Sign In</button>
      </div>\`;
    }
    if (fam.includes('Welcome') || fam.includes('Animated') || fam.includes('Video')) {
      return \`<div style="width:100%;max-width:300px;text-align:center;padding:40px 0;">
        <div style="font-size:64px;margin-bottom:24px;">🎉</div>
        <div style="font-size:28px;font-weight:800;color:#0F172A;margin-bottom:12px;letter-spacing:-0.03em;">Welcome to<br/>Rentenpe</div>
        <div style="font-size:15px;color:#64748B;margin-bottom:32px;line-height:1.5;">Manage your properties,<br/>track payments, build credit.</div>
        <button style="width:100%;padding:16px;background:#0F172A;color:#fff;border:none;border-radius:14px;font-weight:700;font-size:16px;box-shadow:0 12px 24px rgba(0,0,0,0.15);">Get Started</button>
      </div>\`;
    }
    return \`<div style="\${glassStyle} text-align:center;width:100%;max-width:280px;"><div style="font-size:32px;margin-bottom:8px;">\${icon}</div><div style="font-weight:700;">\${fam}</div><div style="font-size:12px;color:#64748B;">Auth component</div></div>\`;
  }

  // =====================================================================
  // DATA DISPLAY
  // =====================================================================
  if (cat === 'Data Display' || cat === 'Lists' || cat === 'Tables') {
    if (fam.includes('Badge') || fam.includes('Dot') || fam.includes('Outlined') || fam.includes('Count') || fam.includes('Pulsing') || fam.includes('Animated')) {
      return \`<div style="display:flex;flex-wrap:wrap;gap:8px;">
        <div style="padding:4px 12px;background:#ECFDF5;color:#059669;border-radius:99px;font-size:12px;font-weight:600;">Active</div>
        <div style="padding:4px 12px;background:#FEF3C7;color:#D97706;border-radius:99px;font-size:12px;font-weight:600;">Pending</div>
        <div style="padding:4px 12px;background:#FEE2E2;color:#DC2626;border-radius:99px;font-size:12px;font-weight:600;">Overdue</div>
        <div style="padding:4px 12px;background:#EEF2FF;color:#4F46E5;border-radius:99px;font-size:12px;font-weight:600;">New</div>
      </div>\`;
    }
    if (fam.includes('Avatar') || fam.includes('Initials') || fam.includes('Group')) {
      if (fam.includes('Group')) return \`<div style="display:flex;"><div style="width:40px;height:40px;background:#6366F1;border-radius:50%;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:700;font-size:14px;border:2px solid #fff;">JM</div><div style="width:40px;height:40px;background:#EC4899;border-radius:50%;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:700;font-size:14px;margin-left:-12px;border:2px solid #fff;">AK</div><div style="width:40px;height:40px;background:#10B981;border-radius:50%;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:700;font-size:14px;margin-left:-12px;border:2px solid #fff;">RS</div><div style="width:40px;height:40px;background:#F1F5F9;border-radius:50%;display:flex;align-items:center;justify-content:center;color:#64748B;font-weight:700;font-size:12px;margin-left:-12px;border:2px solid #fff;">+5</div></div>\`;
      return \`<div style="width:56px;height:56px;background:linear-gradient(135deg,#6366F1,#8B5CF6);border-radius:50%;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:700;font-size:20px;box-shadow:0 4px 12px rgba(99,102,241,0.3);">JM</div>\`;
    }
    if (fam.includes('Timeline') || fam.includes('Grouped') || fam.includes('Interactive')) {
      return \`<div style="width:100%;max-width:280px;display:flex;flex-direction:column;gap:0;">
        <div style="display:flex;gap:16px;padding-bottom:20px;"><div style="display:flex;flex-direction:column;align-items:center;"><div style="width:12px;height:12px;background:#3B82F6;border-radius:50%;"></div><div style="width:2px;flex:1;background:#E2E8F0;"></div></div><div><div style="font-size:13px;font-weight:600;color:#0F172A;">Payment received</div><div style="font-size:11px;color:#94A3B8;">Today · 2:30 PM</div></div></div>
        <div style="display:flex;gap:16px;padding-bottom:20px;"><div style="display:flex;flex-direction:column;align-items:center;"><div style="width:12px;height:12px;background:#10B981;border-radius:50%;"></div><div style="width:2px;flex:1;background:#E2E8F0;"></div></div><div><div style="font-size:13px;font-weight:600;color:#0F172A;">Lease signed</div><div style="font-size:11px;color:#94A3B8;">Oct 8 · 11:00 AM</div></div></div>
        <div style="display:flex;gap:16px;"><div style="display:flex;flex-direction:column;align-items:center;"><div style="width:12px;height:12px;background:#E2E8F0;border-radius:50%;"></div></div><div><div style="font-size:13px;font-weight:600;color:#94A3B8;">Inspection scheduled</div><div style="font-size:11px;color:#94A3B8;">Oct 15</div></div></div>
      </div>\`;
    }
    return \`<div style="width:100%;max-width:280px;background:#fff;border:1px solid #E2E8F0;border-radius:16px;padding:0;overflow:hidden;">
      <div style="padding:12px 16px;border-bottom:1px solid #F1F5F9;display:flex;align-items:center;gap:12px;"><div style="width:36px;height:36px;background:#F1F5F9;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:16px;">\${icon}</div><div style="flex:1;"><div style="font-size:13px;font-weight:600;color:#0F172A;">\${fam}</div><div style="font-size:11px;color:#94A3B8;">Data display component</div></div></div>
    </div>\`;
  }

  // =====================================================================
  // GENERIC FALLBACK — still unique per icon
  // =====================================================================
  return \`
    <div style="text-align:center;padding:20px;">
      <div style="font-size:40px;margin-bottom:12px;">\${icon}</div>
      <div style="font-size:15px;font-weight:700;color:#0F172A;margin-bottom:4px;">\${fam}</div>
      <div style="font-size:12px;color:#64748B;">Design system component</div>
    </div>
  \`;
}`;

src = src.substring(0, startIdx) + newFunction + src.substring(endIdx);
fs.writeFileSync(FILE, src);
console.log('✅ getMockHTML completely replaced with Pinterest-inspired engine');
