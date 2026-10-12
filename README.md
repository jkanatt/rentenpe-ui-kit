# RentenPe UI Kit & Design System 🏢✨

> Modern Pro, ultra-high-fidelity mobile-first component library and design system for RentenPe PropTech & FinTech applications.

[![Vercel Deployment](https://img.shields.io/badge/Deployed-Vercel-black?logo=vercel)](https://vercel.com)
[![Components](https://img.shields.io/badge/Components-420%2B-blue)](pages/)
[![Design](https://img.shields.io/badge/Aesthetics-Modern%20Pro-purple)](https://github.com/jkanatt/rentenpe-ui-kit)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

---

## 🌟 Highlights

- **420+ Production-Ready Components & Screens**: Covering Foundations, Inputs, Actions, Selection, Dropdowns, Cards, Tables, Feeds, Modals, Navigation, and Banking Suites.
- **Modern Pro Design Language**: Inspired by Apple visionOS glassmorphism, Linear, Stripe, and CRED Obsidian/Neon Titanium aesthetics.
- **Mobile-Constrained High Density**: Strictly constrained (`max-width: 320px` to `340px`) with 0 horizontal overflow.
- **Zero Raw Emojis**: Crisp, handcrafted vector SVGs across all components for enterprise-grade finish.
- **Rich PropTech Domain Metadata**: Built-in rental escrow status, tenant verification shields, property inspection timelines, and real-time bank ledger rows.
- **Interactive Multi-Model System**: 12 archetypal variants (Model A through Model L) per component family.

---

## 📂 Architecture

```
rentenpe-ui-kit/
├── index.html                           # Interactive Mega Catalog Showcase
├── pages/                               # 440+ Individual Component & Screen Pages
│   ├── multi-select.html                # 12 Animated Multi-Select Models
│   ├── select.html                      # Modern Pro Dropdowns
│   ├── searchable-select.html           # Live Spotlight Search Select
│   ├── property-selector.html           # Real Estate Unit Switcher
│   ├── banking-suite.html               # Escrow & Wallet Suite
│   └── ...
├── css/                                 # Tokens, Design System, & Catalog Layouts
├── js/                                  # Catalog Interactive Engine
├── selection-dropdown-archetypes.js     # Dropdown & Selection Variant Engine
├── component-engine.js                  # Master Component Generation Architecture
├── generate-rich-pages.js               # Rich Catalog Page Compiler
├── vercel.json                          # Vercel Deployment Configuration
└── package.json                         # Project Scripts & Metadata
```

---

## 🚀 Quick Start

### Local Development
```bash
# Clone the repository
git clone https://github.com/jkanatt/rentenpe-ui-kit.git
cd rentenpe-ui-kit

# Start local server
npm run dev
# Opens at http://localhost:3000
```

### Build & Audit
```bash
# Rebuild all 420+ pages
npm run build

# Run deep audit for zero visual/structural leaks
npm run audit
```

---

## 🎨 Component Highlights

- **Removable Chip Cloud (Beak Popover)**: Top toolbar with active royal blue tab, upward triangular caret popover, and dismissible chip deck.
- **Dark Glass Multi-Select (visionOS)**: Frosted charcoal container (`#232220`), sleek vector glyphs, and active capsule item with glowing pulse indicator dot.
- **Cascading Flyout Submenu (Linear Slate)**: Dark slate action menu with active flyout indicator.
- **Dark Frosted Precision (Tactile Caliper)**: Physical caliper ruler ticker-tape slider with amber center needle.
- **Apple Porcelain Drawer (Amie iOS Sheet)**: Clean white sheet with pill grab handle, segmented control switcher, and numbered step cards.
- **CRED Acid Neon Titanium**: Obsidian black with electric `#CCFF00` neon matrix node cards.

---

## 📄 License
MIT © [Joshua J Kanatt](https://github.com/jkanatt)
