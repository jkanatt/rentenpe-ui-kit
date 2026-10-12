/**
 * RentenPe UI Kit - Financial Widgets & Payments Archetypes
 * 100% Authentic, domain-specific variants for Payments, Receipts, Invoices, Wallets, and Ledgers.
 */

function renderPaymentsAndFinancialVariants(fam, icon, slug, variantIndex) {
  const isReceipt = slug.includes('receipt') || slug.includes('invoice');
  const isWallet = slug.includes('wallet') || slug.includes('balance');
  const isSplit = slug.includes('split');
  const isScore = slug.includes('score');
  const isEmi = slug.includes('emi');
  const isBank = slug.includes('bank');

  switch (variantIndex) {
    case 0: // Model A: PayPal Hero Stacked Debit Card with Concave Action Island (media_1791644893142.png)
      return `<div style="width:100%;max-width:320px;background:#09090B;border-radius:26px;padding:22px;color:#fff;box-shadow:0 20px 40px rgba(0,0,0,0.45);display:flex;flex-direction:column;gap:16px;position:relative;overflow:hidden;border:1px solid #1E293B;">
        <div style="position:absolute;top:0;left:0;right:0;height:4px;background:linear-gradient(90deg, #3B82F6, #60A5FA, #93C5FD);"></div>
        <div style="display:flex;align-items:center;justify-content:space-between;">
          <div style="display:flex;align-items:center;gap:8px;">
            <div style="width:28px;height:28px;border-radius:8px;background:#1E293B;display:flex;align-items:center;justify-content:center;font-size:14px;color:#60A5FA;">💳</div>
            <span style="font-size:13px;font-weight:700;color:#94A3B8;">RentenPe Vault</span>
          </div>
          <span style="padding:2px 8px;background:rgba(255,255,255,0.08);border-radius:99px;font-size:10px;color:#CBD5E1;">INR Wallet</span>
        </div>
        <div>
          <div style="font-size:10px;font-weight:700;color:#64748B;letter-spacing:0.04em;text-transform:uppercase;">Available Rent Balance</div>
          <div style="font-size:30px;font-weight:900;letter-spacing:-0.03em;color:#FFFFFF;margin-top:2px;">₹1,45,280<span style="font-size:16px;color:#94A3B8;">.00</span></div>
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:6px;">
          <button style="background:#FFFFFF;color:#09090B;border:none;border-radius:14px;padding:10px;display:flex;flex-direction:column;align-items:center;gap:2px;cursor:pointer;"><span style="font-size:14px;font-weight:900;">↗</span><span style="font-size:10px;font-weight:800;">Send</span></button>
          <button style="background:#FFFFFF;color:#09090B;border:none;border-radius:14px;padding:10px;display:flex;flex-direction:column;align-items:center;gap:2px;cursor:pointer;"><span style="font-size:14px;font-weight:900;">↓</span><span style="font-size:10px;font-weight:800;">Receive</span></button>
          <button style="background:#FFFFFF;color:#09090B;border:none;border-radius:14px;padding:10px;display:flex;flex-direction:column;align-items:center;gap:2px;cursor:pointer;"><span style="font-size:14px;font-weight:900;">+</span><span style="font-size:10px;font-weight:800;">Add</span></button>
        </div>
      </div>`;

    case 1: // Model B: Perforated Receipt Voucher with Scalloped Edge & QR
      return `<div style="width:100%;max-width:320px;background:#FFFBEB;border:1.5px dashed #F59E0B;border-radius:20px;padding:20px;position:relative;display:flex;flex-direction:column;gap:12px;box-shadow:0 8px 20px rgba(245,158,11,0.08);">
        <div style="display:flex;justify-content:space-between;align-items:center;">
          <span style="font-size:10px;font-weight:900;color:#B45309;letter-spacing:0.08em;text-transform:uppercase;">OFFICIAL RENT RECEIPT</span>
          <span style="padding:2px 8px;background:#FEF3C7;color:#92400E;border-radius:6px;font-size:10px;font-weight:800;">#RP-2026-904</span>
        </div>
        <div style="display:flex;justify-content:space-between;align-items:baseline;">
          <div><div style="font-size:11px;color:#78350F;">Monthly Rent Paid</div><div style="font-size:24px;font-weight:900;color:#78350F;">₹28,500</div></div>
          <span style="font-size:11px;color:#059669;font-weight:800;">● HDFC Auto-Pay</span>
        </div>
        <div style="border-top:1px dashed #F59E0B;padding-top:10px;font-size:10px;color:#92400E;display:flex;justify-content:space-between;">
          <span>March 2026 • Indiranagar Duplex</span>
          <strong>Tax Exempt (Sec 10)</strong>
        </div>
      </div>`;

    case 2: // Model C: UPI Landlord Transaction Row
      return `<div style="width:100%;max-width:320px;background:#fff;border:1px solid #E2E8F0;border-radius:18px;padding:16px;display:flex;align-items:center;justify-content:space-between;box-shadow:0 2px 8px rgba(0,0,0,0.04);">
        <div style="display:flex;align-items:center;gap:12px;">
          <div style="width:40px;height:40px;border-radius:12px;background:#EFF6FF;color:#2563EB;display:flex;align-items:center;justify-content:center;font-size:18px;">⚡</div>
          <div><div style="font-size:13px;font-weight:800;color:#0F172A;">Rent to Rahul Anand</div><div style="font-size:10px;color:#64748B;">Today 09:42 AM • UPI Instant</div></div>
        </div>
        <span style="font-size:13px;font-weight:900;color:#0F172A;">-₹28,500</span>
      </div>`;

    case 3: // Model D: Roommate Expense Split Card
      return `<div style="width:100%;max-width:320px;background:#fff;border:1px solid #E2E8F0;border-radius:20px;padding:18px;display:flex;flex-direction:column;gap:12px;">
        <div style="display:flex;justify-content:space-between;align-items:center;">
          <span style="font-size:12px;font-weight:800;color:#0F172A;">Duplex Rent Split (50/50)</span>
          <span style="font-size:11px;font-weight:800;color:#2563EB;">₹28,500 Total</span>
        </div>
        <div style="display:flex;align-items:center;justify-content:space-between;padding:10px 14px;background:#F8FAFC;border-radius:12px;">
          <div><div style="font-size:12px;font-weight:800;color:#0F172A;">Rahul M. owes you</div><div style="font-size:10px;color:#64748B;">March share pending</div></div>
          <span style="font-size:14px;font-weight:900;color:#059669;">+₹14,250</span>
        </div>
        <button style="width:100%;padding:10px;background:#0F172A;color:#fff;border:none;border-radius:10px;font-size:11px;font-weight:800;cursor:pointer;">Send WhatsApp Payment Reminder</button>
      </div>`;

    case 4: // Model E: EMI Rent Loan Calculator Card
      return `<div style="width:100%;max-width:320px;background:#fff;border:1px solid #E2E8F0;border-radius:20px;padding:18px;display:flex;flex-direction:column;gap:12px;">
        <div style="display:flex;justify-content:space-between;"><span style="font-size:11px;font-weight:800;color:#64748B;">DEPOSIT EMI LOAN</span><span style="font-size:11px;font-weight:800;color:#059669;">0% INTEREST</span></div>
        <div style="font-size:24px;font-weight:900;color:#0F172A;">₹ 8,333 <span style="font-size:12px;color:#64748B;font-weight:500;">/ mo</span></div>
        <div style="font-size:11px;color:#64748B;">Pay 1 Lakh deposit over 12 easy monthly installments.</div>
      </div>`;

    case 5: // Model F: Multi-Bank Account Switcher
      return `<div style="width:100%;max-width:320px;background:#fff;border:1.5px solid #2563EB;border-radius:20px;padding:16px;display:flex;align-items:center;justify-content:space-between;">
        <div style="display:flex;align-items:center;gap:10px;">
          <span style="font-size:24px;">🏦</span>
          <div><div style="font-size:13px;font-weight:800;color:#0F172A;">HDFC Bank •• 4902</div><div style="font-size:10px;color:#059669;font-weight:700;">● Primary Auto-Debit Account</div></div>
        </div>
        <span style="font-size:11px;color:#2563EB;font-weight:800;">Change ▾</span>
      </div>`;

    case 6: // Model G: GST Rent Invoice Card
      return `<div style="width:100%;max-width:320px;background:#fff;border:1px solid #E2E8F0;border-radius:18px;padding:16px;display:flex;flex-direction:column;gap:8px;">
        <div style="display:flex;justify-content:space-between;font-size:11px;"><span style="color:#64748B;">Invoice #INV-2026-03</span><span style="font-weight:800;color:#059669;">TAX PAID</span></div>
        <div style="display:flex;justify-content:space-between;font-size:13px;font-weight:800;color:#0F172A;"><span>Base Rent + 18% GST</span><span>₹ 33,630</span></div>
      </div>`;

    case 7: // Model H: Tesla Tactile Swipe-to-Pay Slider
      return `<div style="width:100%;max-width:320px;background:#0F172A;border-radius:99px;padding:6px 8px;display:flex;align-items:center;position:relative;">
        <div style="width:42px;height:42px;border-radius:50%;background:#2563EB;color:#fff;display:flex;align-items:center;justify-content:center;font-size:18px;font-weight:900;box-shadow:0 4px 12px rgba(37,99,235,0.4);cursor:pointer;">→</div>
        <div style="flex:1;text-align:center;font-size:12px;font-weight:800;color:#fff;">Slide to Pay ₹28,500</div>
      </div>`;

    case 8: // Model I: Tax Deduction Summary
      return `<div style="width:100%;max-width:320px;background:#EFF6FF;border:1px solid #BFDBFE;border-radius:18px;padding:16px;display:flex;flex-direction:column;gap:8px;">
        <span style="font-size:10px;font-weight:800;color:#1E40AF;">HRA TAX BENEFIT FY26</span>
        <div style="font-size:20px;font-weight:900;color:#1E40AF;">₹ 1,02,600</div>
        <div style="font-size:10px;color:#3B82F6;">Total tax deduction claimed with receipts</div>
      </div>`;

    case 9: // Model J: Minimal Monoline Balance Tile
      return `<div style="width:100%;max-width:320px;background:#fff;border:1.5px solid #0F172A;border-radius:16px;padding:16px;display:flex;justify-content:space-between;align-items:center;">
        <div><div style="font-size:10px;font-weight:800;color:#64748B;">WALLET ESCROW</div><div style="font-size:20px;font-weight:900;color:#0F172A;">₹ 1,45,280</div></div>
        <span style="font-size:14px;font-weight:900;">→</span>
      </div>`;

    case 10: // Model K: Apple Cupertino Porcelain Balance (Light)
      return `<div style="width:100%;max-width:320px;background:#FFFFFF;border:1px solid #E2E8F0;border-radius:24px;padding:22px;box-shadow:0 12px 30px rgba(15,23,42,0.04);display:flex;flex-direction:column;gap:12px;">
        <div style="display:flex;justify-content:space-between;align-items:center;"><span style="font-size:11px;font-weight:800;color:#64748B;">PORCELAIN WALLET</span><span style="font-size:16px;">🍏</span></div>
        <div style="font-size:28px;font-weight:900;color:#0F172A;">₹ 1,45,280<span style="font-size:14px;color:#059669;">.00</span></div>
      </div>`;

    case 11: // Model L: CRED Acid Neon Titanium Escrow Card (Dark)
    default:
      return `<div style="width:100%;max-width:320px;background:#09090B;border:1.5px solid rgba(204,255,0,0.4);border-radius:24px;padding:22px;color:#FFFFFF;box-shadow:0 20px 40px rgba(0,0,0,0.8);display:flex;flex-direction:column;gap:12px;">
        <div style="display:flex;justify-content:space-between;align-items:center;">
          <span style="font-size:10px;font-weight:900;color:#CCFF00;letter-spacing:0.1em;text-transform:uppercase;">CRED TITANIUM VAULT</span>
          <span style="color:#CCFF00;">⚡</span>
        </div>
        <div style="font-size:28px;font-weight:900;color:#CCFF00;">₹ 1,45,280</div>
        <div style="font-size:10px;color:#A1A1AA;font-family:monospace;">ESCROW HASH: 0x882A...19E2</div>
      </div>`;
  }
}

module.exports = {
  renderPaymentsAndFinancialVariants
};
