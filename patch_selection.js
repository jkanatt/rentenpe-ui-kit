const fs = require('fs');
let fileStr = fs.readFileSync('generate-rich-pages.js', 'utf8');

const newSelection = `    if (fam.includes('Checkbox')) {
      if (fam.includes('Group')) return \`<div style="width:100%;max-width:280px;display:flex;flex-direction:column;gap:12px;"><label style="display:flex;align-items:center;gap:12px;padding:12px 16px;background:#F8FAFC;border-radius:12px;border:1px solid #E2E8F0;cursor:pointer;transition:all 0.2s;" onmouseover="this.style.borderColor='#3B82F6'" onmouseout="this.style.borderColor='#E2E8F0'"><input type="checkbox" checked style="width:20px;height:20px;accent-color:#3B82F6;cursor:pointer;"/><span style="font-size:14px;font-weight:500;color:#0F172A;">Email notifications</span></label><label style="display:flex;align-items:center;gap:12px;padding:12px 16px;background:#F8FAFC;border-radius:12px;border:1px solid #E2E8F0;cursor:pointer;transition:all 0.2s;" onmouseover="this.style.borderColor='#3B82F6'" onmouseout="this.style.borderColor='#E2E8F0'"><input type="checkbox" checked style="width:20px;height:20px;accent-color:#3B82F6;cursor:pointer;"/><span style="font-size:14px;font-weight:500;color:#0F172A;">SMS alerts</span></label><label style="display:flex;align-items:center;gap:12px;padding:12px 16px;background:#F8FAFC;border-radius:12px;border:1px solid #E2E8F0;cursor:pointer;transition:all 0.2s;" onmouseover="this.style.borderColor='#3B82F6'" onmouseout="this.style.borderColor='#E2E8F0'"><input type="checkbox" style="width:20px;height:20px;accent-color:#3B82F6;cursor:pointer;"/><span style="font-size:14px;font-weight:500;color:#0F172A;">Push notifications</span></label></div>\`;
      return \`<label style="display:flex;align-items:center;gap:12px;padding:14px 18px;background:#FFF;border:1.5px solid #E2E8F0;border-radius:12px;cursor:pointer;transition:all 0.2s;" onmouseover="this.style.borderColor='#3B82F6';this.style.boxShadow='0 4px 12px rgba(0,0,0,0.05)'" onmouseout="this.style.borderColor='#E2E8F0';this.style.boxShadow='none'"><input type="checkbox" checked style="width:20px;height:20px;accent-color:#3B82F6;cursor:pointer;"/><span style="font-size:14px;font-weight:500;color:#0F172A;">I agree to terms and conditions</span></label>\`;
    }
    if (fam.includes('Radio')) {
      if (fam.includes('Card')) return \`<div style="width:100%;max-width:280px;display:flex;flex-direction:column;gap:10px;"><label style="padding:16px;background:#EEF2FF;border:2px solid #4F46E5;border-radius:14px;display:flex;align-items:center;gap:12px;cursor:pointer;"><input type="radio" name="plan_\${slug}" checked style="width:20px;height:20px;accent-color:#4F46E5;cursor:pointer;"/><div><div style="font-size:14px;font-weight:600;color:#0F172A;">Monthly Plan</div><div style="font-size:12px;color:#64748B;">₹999/month</div></div></label><label style="padding:16px;background:#FFF;border:1.5px solid #E2E8F0;border-radius:14px;display:flex;align-items:center;gap:12px;cursor:pointer;transition:all 0.2s;" onmouseover="this.style.borderColor='#4F46E5'" onmouseout="this.style.borderColor='#E2E8F0'"><input type="radio" name="plan_\${slug}" style="width:20px;height:20px;accent-color:#4F46E5;cursor:pointer;"/><div><div style="font-size:14px;font-weight:600;color:#0F172A;">Annual Plan</div><div style="font-size:12px;color:#64748B;">₹9,999/year</div></div></label></div>\`;
      return \`<div style="display:flex;flex-direction:column;gap:10px;"><label style="display:flex;align-items:center;gap:10px;cursor:pointer;"><input type="radio" name="opt_\${slug}" checked style="width:20px;height:20px;accent-color:#3B82F6;cursor:pointer;"/><span style="font-size:14px;font-weight:500;color:#0F172A;">Option A</span></label><label style="display:flex;align-items:center;gap:10px;cursor:pointer;"><input type="radio" name="opt_\${slug}" style="width:20px;height:20px;accent-color:#3B82F6;cursor:pointer;"/><span style="font-size:14px;font-weight:500;color:#64748B;">Option B</span></label></div>\`;
    }
    if (fam.includes('Toggle') || fam.includes('Switch')) {
      return \`<label style="display:flex;align-items:center;justify-content:space-between;width:100%;max-width:280px;padding:14px 18px;background:#FFF;border:1.5px solid #E2E8F0;border-radius:14px;cursor:pointer;transition:all 0.2s;" onmouseover="this.style.borderColor='#3B82F6'" onmouseout="this.style.borderColor='#E2E8F0'"><span style="font-size:14px;font-weight:600;color:#0F172A;">Enable Feature</span><div style="position:relative;display:inline-block;width:48px;height:28px;"><input type="checkbox" checked style="opacity:0;width:0;height:0;" onchange="this.nextElementSibling.style.background=this.checked?'#3B82F6':'#CBD5E1';this.nextElementSibling.firstElementChild.style.transform=this.checked?'translateX(20px)':'translateX(0)'"/><div style="position:absolute;cursor:pointer;top:0;left:0;right:0;bottom:0;background-color:#3B82F6;border-radius:34px;transition:.4s;"><div style="position:absolute;content:'';height:20px;width:20px;left:4px;bottom:4px;background-color:white;border-radius:50%;transition:.4s;transform:translateX(20px);box-shadow:0 2px 4px rgba(0,0,0,0.2);"></div></div></div></label>\`;
    }
    if (fam.includes('Slider') || fam.includes('Range')) {
      return \`<div style="width:100%;max-width:280px;"><label style="font-size:13px;font-weight:600;color:#334155;display:flex;justify-content:space-between;margin-bottom:12px;"><span>Budget Range</span><span style="color:#3B82F6;" id="val_\${slug}">₹15,000</span></label><input type="range" min="0" max="50000" value="15000" style="width:100%;accent-color:#3B82F6;cursor:pointer;" oninput="document.getElementById('val_\${slug}').innerText='₹'+this.value.replace(/\\B(?=(\\d{3})+(?!\\d))/g, ',')"/></div>\`;
    }\n`;

const startSelStr = `    if (fam.includes('Checkbox')) {`;
const endSelStr = `  }\n\n  // =====================================================================\n  // PAYMENTS`;

let startIdx = fileStr.indexOf(startSelStr, fileStr.indexOf(`if (cat === 'Selection')`));
let endIdx = fileStr.indexOf(endSelStr, startIdx);

if (startIdx !== -1 && endIdx !== -1) {
    let before = fileStr.substring(0, startIdx);
    let after = fileStr.substring(endIdx);
    fileStr = before + newSelection + after;
}

// Now replace Dropdowns
const newDropdowns = `    if (fam.includes('Dropdown') || fam.includes('Select') || fam.includes('Menu')) {
      return \`<div style="width:100%; max-width:280px;">
  <label style="font-size:13px;font-weight:600;color:#334155;display:block;margin-bottom:8px;">\${fam}</label>
  <div style="position:relative;">
    <select style="width:100%; padding:14px 16px; background:#fff; border:1.5px solid #E2E8F0; border-radius:12px; font-size:14px; font-weight:500; color:#0F172A; appearance:none; cursor:pointer; outline:none; transition:all 0.2s; box-shadow:0 2px 4px rgba(0,0,0,0.02);" onfocus="this.style.borderColor='#3B82F6';this.style.boxShadow='0 0 0 3px rgba(59,130,246,0.1)'" onblur="this.style.borderColor='#E2E8F0';this.style.boxShadow='0 2px 4px rgba(0,0,0,0.02)'" onmouseover="this.style.borderColor='#3B82F6'" onmouseout="if(document.activeElement!==this)this.style.borderColor='#E2E8F0'">
      <option value="">\${icon} Select option...</option>
      <option value="1">Option A</option>
      <option value="2">Option B</option>
      <option value="3">Option C</option>
    </select>
    <div style="position:absolute; right:16px; top:50%; transform:translateY(-50%); pointer-events:none; font-size:10px; color:#64748B;">▼</div>
  </div>
</div>\`;
    }\n`;

const startDropStr = `    if (fam.includes('Dropdown') || fam.includes('Select') || fam.includes('Menu')) {`;
const endDropStr = `    if (fam.includes('Topbar') || fam.includes('Header')) {`;

let startIdx2 = fileStr.indexOf(startDropStr);
let endIdx2 = fileStr.indexOf(endDropStr, startIdx2);

if (startIdx2 !== -1 && endIdx2 !== -1) {
    let before = fileStr.substring(0, startIdx2);
    let after = fileStr.substring(endIdx2);
    fileStr = before + newDropdowns + after;
    fs.writeFileSync('generate-rich-pages.js', fileStr);
    console.log('Successfully patched Selection and Dropdowns to use REAL HTML elements!');
} else {
    console.log('Failed to find start or end index for Dropdowns.');
}

