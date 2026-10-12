/**
 * RentenPe UI Kit - Table Archetypes
 * 100% Authentic, pixel-perfect, mobile-constrained Table variants for all 8 Table slugs.
 * Mobile constrained (max-width: 320px to 340px) with horizontal scroll containers or stacked rows.
 */

function renderTableVariants(fam, icon, slug, variantIndex) {
  const isCompact = slug === 'compact-table';
  const isToolbar = slug === 'table-toolbar';
  const isExpandable = slug === 'expandable-row';
  const isEditable = slug === 'editable-table';
  const isSortable = slug === 'sortable-table';
  const isPaginated = slug === 'paginated-table';

  switch (variantIndex) {
    case 0: // Model A: Rent Collection Ledger Table
      return `<div style="width:100%;max-width:320px;background:#fff;border:1px solid #E2E8F0;border-radius:20px;box-shadow:0 4px 14px rgba(0,0,0,0.04);overflow:hidden;">
        <div style="padding:14px 16px;background:#F8FAFC;border-bottom:1px solid #E2E8F0;display:flex;justify-content:space-between;align-items:center;">
          <div><div style="font-size:13px;font-weight:800;color:#0F172A;">Monthly Rent Ledger</div><div style="font-size:10px;color:#64748B;">FY 2025-26 • 3 Units</div></div>
          <span style="font-size:10px;font-weight:800;color:#059669;background:#ECFDF5;padding:2px 8px;border-radius:6px;">LIVE SYNC</span>
        </div>
        <div style="overflow-x:auto;">
          <table style="width:100%;border-collapse:collapse;font-size:11px;text-align:left;">
            <thead>
              <tr style="background:#F1F5F9;color:#64748B;font-weight:700;">
                <th style="padding:8px 12px;">Unit</th>
                <th style="padding:8px 12px;">Tenant</th>
                <th style="padding:8px 12px;">Rent</th>
                <th style="padding:8px 12px;">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr style="border-bottom:1px solid #F1F5F9;">
                <td style="padding:10px 12px;font-weight:800;color:#0F172A;">#402</td>
                <td style="padding:10px 12px;color:#334155;">Joshua K.</td>
                <td style="padding:10px 12px;font-weight:800;color:#0F172A;">₹28.5k</td>
                <td style="padding:10px 12px;"><span style="color:#059669;font-weight:800;">● Paid</span></td>
              </tr>
              <tr style="border-bottom:1px solid #F1F5F9;">
                <td style="padding:10px 12px;font-weight:800;color:#0F172A;">#201</td>
                <td style="padding:10px 12px;color:#334155;">Priya S.</td>
                <td style="padding:10px 12px;font-weight:800;color:#0F172A;">₹32.0k</td>
                <td style="padding:10px 12px;"><span style="color:#D97706;font-weight:800;">● Due 2d</span></td>
              </tr>
              <tr>
                <td style="padding:10px 12px;font-weight:800;color:#0F172A;">#105</td>
                <td style="padding:10px 12px;color:#334155;">Rahul M.</td>
                <td style="padding:10px 12px;font-weight:800;color:#0F172A;">₹24.0k</td>
                <td style="padding:10px 12px;"><span style="color:#059669;font-weight:800;">● Paid</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>`;

    case 1: // Model B: Tenant Directory Table with Avatars
      return `<div style="width:100%;max-width:320px;background:#fff;border:1px solid #E2E8F0;border-radius:18px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.04);">
        <div style="padding:12px 14px;border-bottom:1px solid #E2E8F0;display:flex;justify-content:space-between;align-items:center;">
          <span style="font-size:12px;font-weight:800;color:#0F172A;">Active Tenant Roster</span>
          <span style="font-size:11px;color:#2563EB;font-weight:700;">+ Invite</span>
        </div>
        <div style="overflow-x:auto;">
          <table style="width:100%;border-collapse:collapse;font-size:11px;">
            <tbody>
              <tr style="border-bottom:1px solid #F1F5F9;">
                <td style="padding:8px 12px;"><div style="width:28px;height:28px;border-radius:50%;background:#2563EB;color:#fff;display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:800;">JK</div></td>
                <td style="padding:8px 6px;"><div style="font-weight:800;color:#0F172A;">Joshua Kanatt</div><div style="font-size:9px;color:#64748B;">Indiranagar Duplex</div></td>
                <td style="padding:8px 12px;text-align:right;"><span style="padding:2px 6px;background:#ECFDF5;color:#059669;border-radius:4px;font-size:9px;font-weight:800;">ACTIVE</span></td>
              </tr>
              <tr>
                <td style="padding:8px 12px;"><div style="width:28px;height:28px;border-radius:50%;background:#10B981;color:#fff;display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:800;">PS</div></td>
                <td style="padding:8px 6px;"><div style="font-weight:800;color:#0F172A;">Priya Sharma</div><div style="font-size:9px;color:#64748B;">Koramangala 2BHK</div></td>
                <td style="padding:8px 12px;text-align:right;"><span style="padding:2px 6px;background:#FFFBEB;color:#D97706;border-radius:4px;font-size:9px;font-weight:800;">RENEWAL</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>`;

    case 2: // Model C: Maintenance Request Log Table
      return `<div style="width:100%;max-width:320px;background:#fff;border:1px solid #E2E8F0;border-radius:18px;overflow:hidden;">
        <div style="padding:12px 14px;background:#F8FAFC;border-bottom:1px solid #E2E8F0;font-size:12px;font-weight:800;color:#0F172A;">
          Maintenance Dispatch Log
        </div>
        <table style="width:100%;border-collapse:collapse;font-size:11px;">
          <thead>
            <tr style="background:#F1F5F9;color:#64748B;">
              <th style="padding:6px 10px;text-align:left;">Issue</th>
              <th style="padding:6px 10px;text-align:center;">Cost</th>
              <th style="padding:6px 10px;text-align:right;">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr style="border-bottom:1px solid #F1F5F9;">
              <td style="padding:8px 10px;font-weight:700;">AC Servicing</td>
              <td style="padding:8px 10px;text-align:center;font-weight:800;">₹1,800</td>
              <td style="padding:8px 10px;text-align:right;color:#059669;font-weight:800;">Done ✓</td>
            </tr>
            <tr>
              <td style="padding:8px 10px;font-weight:700;">Geyser Valve</td>
              <td style="padding:8px 10px;text-align:center;font-weight:800;">₹650</td>
              <td style="padding:8px 10px;text-align:right;color:#2563EB;font-weight:800;">In Progress</td>
            </tr>
          </tbody>
        </table>
      </div>`;

    case 3: // Model D: Utility Billing Meter Table
      return `<div style="width:100%;max-width:320px;background:#fff;border:1px solid #E2E8F0;border-radius:18px;overflow:hidden;">
        <div style="padding:12px 14px;border-bottom:1px solid #E2E8F0;display:flex;justify-content:space-between;align-items:center;">
          <span style="font-size:12px;font-weight:800;">Utility Split (March)</span>
          <span style="font-size:11px;font-weight:900;color:#2563EB;">₹ 4,320 Total</span>
        </div>
        <table style="width:100%;border-collapse:collapse;font-size:11px;">
          <tr style="border-bottom:1px solid #F1F5F9;">
            <td style="padding:8px 12px;">⚡ BESCOM Electricity</td>
            <td style="padding:8px 12px;text-align:right;font-weight:800;">₹ 2,480</td>
          </tr>
          <tr style="border-bottom:1px solid #F1F5F9;">
            <td style="padding:8px 12px;">💧 BWSSB Water & Tanker</td>
            <td style="padding:8px 12px;text-align:right;font-weight:800;">₹ 1,140</td>
          </tr>
          <tr>
            <td style="padding:8px 12px;">📶 ACT High-Speed Fiber</td>
            <td style="padding:8px 12px;text-align:right;font-weight:800;">₹ 700</td>
          </tr>
        </table>
      </div>`;

    case 4: // Model E: Security Deposit Escrow Ledger Table
      return `<div style="width:100%;max-width:320px;background:#fff;border:1.5px solid #2563EB;border-radius:18px;overflow:hidden;box-shadow:0 4px 14px rgba(37,99,235,0.06);">
        <div style="padding:12px 14px;background:#EFF6FF;border-bottom:1px solid #DBEAFE;display:flex;justify-content:space-between;align-items:center;">
          <span style="font-size:11px;font-weight:900;color:#1E40AF;letter-spacing:0.04em;">ESCROW VAULT DEPOSIT</span>
          <span style="font-size:10px;font-weight:800;color:#2563EB;">LOCKED</span>
        </div>
        <table style="width:100%;border-collapse:collapse;font-size:11px;">
          <tr style="border-bottom:1px solid #F1F5F9;"><td style="padding:8px 12px;color:#64748B;">Total Deposit Escrow</td><td style="padding:8px 12px;text-align:right;font-weight:900;color:#0F172A;">₹1,00,000</td></tr>
          <tr style="border-bottom:1px solid #F1F5F9;"><td style="padding:8px 12px;color:#64748B;">Yield Interest (6.2%)</td><td style="padding:8px 12px;text-align:right;font-weight:800;color:#059669;">+ ₹6,200</td></tr>
          <tr><td style="padding:8px 12px;color:#64748B;">Refundable Balance</td><td style="padding:8px 12px;text-align:right;font-weight:900;color:#2563EB;">₹1,06,200</td></tr>
        </table>
      </div>`;

    case 5: // Model F: Roommate Split Matrix Table
      return `<div style="width:100%;max-width:320px;background:#fff;border:1px solid #E2E8F0;border-radius:18px;overflow:hidden;">
        <div style="padding:12px 14px;background:#F8FAFC;font-size:12px;font-weight:800;color:#0F172A;">Roommate Split Ledger</div>
        <table style="width:100%;border-collapse:collapse;font-size:11px;">
          <thead><tr style="background:#F1F5F9;color:#64748B;"><th style="padding:6px 12px;text-align:left;">Member</th><th style="padding:6px 12px;text-align:center;">Share</th><th style="padding:6px 12px;text-align:right;">Status</th></tr></thead>
          <tbody>
            <tr style="border-bottom:1px solid #F1F5F9;"><td style="padding:8px 12px;font-weight:800;">Joshua</td><td style="padding:8px 12px;text-align:center;">₹14,250</td><td style="padding:8px 12px;text-align:right;color:#059669;font-weight:800;">Settled ✓</td></tr>
            <tr><td style="padding:8px 12px;font-weight:800;">Karan</td><td style="padding:8px 12px;text-align:center;">₹14,250</td><td style="padding:8px 12px;text-align:right;color:#D97706;font-weight:800;">Pending</td></tr>
          </tbody>
        </table>
      </div>`;

    case 6: // Model G: Table with Actions Toolbar
      return `<div style="width:100%;max-width:320px;background:#fff;border:1px solid #E2E8F0;border-radius:18px;overflow:hidden;">
        <div style="padding:10px 12px;background:#F8FAFC;display:flex;gap:6px;border-bottom:1px solid #E2E8F0;">
          <input type="text" placeholder="Filter rows..." style="flex:1;padding:4px 8px;border:1px solid #E2E8F0;border-radius:6px;font-size:11px;">
          <button style="padding:4px 8px;background:#0F172A;color:#fff;border:none;border-radius:6px;font-size:10px;font-weight:700;">Export</button>
        </div>
        <table style="width:100%;border-collapse:collapse;font-size:11px;">
          <tr style="border-bottom:1px solid #F1F5F9;"><td style="padding:8px 12px;font-weight:700;">Mar 2026</td><td style="padding:8px 12px;text-align:right;font-weight:800;">₹28,500</td><td style="padding:8px 12px;text-align:right;color:#2563EB;">Download ↓</td></tr>
          <tr><td style="padding:8px 12px;font-weight:700;">Feb 2026</td><td style="padding:8px 12px;text-align:right;font-weight:800;">₹28,500</td><td style="padding:8px 12px;text-align:right;color:#2563EB;">Download ↓</td></tr>
        </table>
      </div>`;

    case 7: // Model H: Expandable Inspection Row Table
      return `<div style="width:100%;max-width:320px;background:#fff;border:1px solid #E2E8F0;border-radius:18px;overflow:hidden;">
        <div style="padding:12px 14px;background:#F8FAFC;border-bottom:1px solid #E2E8F0;font-size:12px;font-weight:800;">Inspection Checklist</div>
        <table style="width:100%;border-collapse:collapse;font-size:11px;">
          <tr style="border-bottom:1px solid #F1F5F9;"><td style="padding:8px 12px;font-weight:800;">Living Room Wooden Flooring</td><td style="padding:8px 12px;text-align:right;color:#059669;font-weight:800;">Pristine ✓ ▾</td></tr>
          <tr style="background:#F8FAFC;"><td colspan="2" style="padding:6px 12px;font-size:10px;color:#64748B;">No scratches observed. Polished on 12-Feb-2026 by Urban Company.</td></tr>
          <tr><td style="padding:8px 12px;font-weight:800;">Kitchen Chimney & Hob</td><td style="padding:8px 12px;text-align:right;color:#059669;font-weight:800;">Working ✓ ▸</td></tr>
        </table>
      </div>`;

    case 8: // Model I: Editable Table Row
      return `<div style="width:100%;max-width:320px;background:#fff;border:1px solid #E2E8F0;border-radius:18px;overflow:hidden;">
        <div style="padding:12px 14px;border-bottom:1px solid #E2E8F0;font-size:12px;font-weight:800;">Editable Expense Ledger</div>
        <table style="width:100%;border-collapse:collapse;font-size:11px;">
          <tr style="border-bottom:1px solid #F1F5F9;">
            <td style="padding:8px 12px;font-weight:700;">Plumbing Fix</td>
            <td style="padding:8px 12px;text-align:right;"><input type="text" value="₹ 450" style="width:60px;padding:2px 4px;border:1px solid #2563EB;border-radius:4px;font-size:11px;font-weight:800;text-align:right;"></td>
            <td style="padding:8px 10px;text-align:right;color:#10B981;font-weight:800;">Save</td>
          </tr>
        </table>
      </div>`;

    case 9: // Model J: Sortable Column Table
      return `<div style="width:100%;max-width:320px;background:#fff;border:1px solid #E2E8F0;border-radius:18px;overflow:hidden;">
        <table style="width:100%;border-collapse:collapse;font-size:11px;">
          <thead>
            <tr style="background:#0F172A;color:#fff;">
              <th style="padding:10px 12px;text-align:left;cursor:pointer;">Date ▾</th>
              <th style="padding:10px 12px;text-align:left;">Property</th>
              <th style="padding:10px 12px;text-align:right;cursor:pointer;">Amount ▴</th>
            </tr>
          </thead>
          <tbody>
            <tr style="border-bottom:1px solid #F1F5F9;"><td style="padding:8px 12px;color:#64748B;">01 Mar</td><td style="padding:8px 12px;font-weight:800;">Duplex</td><td style="padding:8px 12px;text-align:right;font-weight:900;">₹28.5k</td></tr>
            <tr><td style="padding:8px 12px;color:#64748B;">01 Feb</td><td style="padding:8px 12px;font-weight:800;">Duplex</td><td style="padding:8px 12px;text-align:right;font-weight:900;">₹28.5k</td></tr>
          </tbody>
        </table>
      </div>`;

    case 10: // Model K: Apple Porcelain Clean Table (Light)
      return `<div style="width:100%;max-width:320px;background:#FFFFFF;border:1px solid #E2E8F0;border-radius:24px;box-shadow:0 12px 30px rgba(15,23,42,0.04);overflow:hidden;">
        <div style="padding:16px 18px;display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid #F1F5F9;">
          <div style="display:flex;align-items:center;gap:8px;"><span style="font-size:16px;">🍏</span><span style="font-size:13px;font-weight:800;color:#0F172A;">Porcelain Ledger</span></div>
          <span style="padding:2px 8px;background:#ECFDF5;color:#059669;border-radius:99px;font-size:9px;font-weight:800;">AUDITED</span>
        </div>
        <table style="width:100%;border-collapse:collapse;font-size:11px;">
          <tbody>
            <tr style="border-bottom:1px solid #F8FAFC;"><td style="padding:12px 18px;font-weight:800;color:#0F172A;">Indiranagar Duplex</td><td style="padding:12px 18px;text-align:right;font-weight:900;color:#059669;">₹ 28,500.00</td></tr>
            <tr><td style="padding:12px 18px;font-weight:800;color:#0F172A;">Koramangala Flat</td><td style="padding:12px 18px;text-align:right;font-weight:900;color:#059669;">₹ 34,000.00</td></tr>
          </tbody>
        </table>
      </div>`;

    case 11: // Model L: CRED Acid Neon Titanium Table (Dark)
    default:
      return `<div style="width:100%;max-width:320px;background:#09090B;border:1px solid rgba(204,255,0,0.3);border-radius:24px;padding:16px;box-shadow:0 20px 40px rgba(0,0,0,0.8);color:#FFFFFF;">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;padding-bottom:8px;border-bottom:1px solid #18181B;">
          <span style="font-size:10px;font-weight:900;color:#CCFF00;letter-spacing:0.1em;text-transform:uppercase;">TITANIUM ESCROW LEDGER</span>
          <span style="font-family:monospace;font-size:10px;color:#71717A;">NODE::04</span>
        </div>
        <table style="width:100%;border-collapse:collapse;font-size:11px;font-family:monospace;">
          <tr style="border-bottom:1px solid #18181B;"><td style="padding:8px 4px;color:#A1A1AA;">TX_9021</td><td style="padding:8px 4px;color:#FFFFFF;font-weight:700;">ESCROW CLEAR</td><td style="padding:8px 4px;text-align:right;color:#CCFF00;font-weight:900;">₹28,500</td></tr>
          <tr><td style="padding:8px 4px;color:#A1A1AA;">TX_8914</td><td style="padding:8px 4px;color:#FFFFFF;font-weight:700;">ESCROW CLEAR</td><td style="padding:8px 4px;text-align:right;color:#CCFF00;font-weight:900;">₹28,500</td></tr>
        </table>
      </div>`;
  }
}

module.exports = {
  renderTableVariants
};
