/**
 * RentenPe UI Kit - Universal Component Engine
 * Generates authentic variant names and distinct, modern, clean UI components for all 245 components.
 */

const SPECIFIC_FAMILIES = {
  // Menus
  'mega-menu': [
    'Multi-Column Category Grid',
    'Icon Feature Showcase',
    'Featured Promo Split',
    'Quick Search & Shortcuts',
    'Segmented Role Tabs',
    'Dark Glass Command Center',
    'Cascading Flyout Submenu',
    'Floating Island Card',
    'Full-Width Command Bar',
    'Dark Frosted Precision'
  ],
  'nested-menu': [
    'Cascading Flyout Menu',
    'Collapsible Tree Accordion',
    'Multi-Tier Sidebar Drilldown',
    'Quick Action Submenu',
    'Breadcrumb Header Menu',
    'Dark Glass Directory Tree',
    'Cascading Flyout Submenu',
    'Floating Island Card',
    'Full-Width Command Bar',
    'Dark Frosted Precision'
  ],
  'profile-menu': [
    'Minimal User Dropdown',
    'Rich Account Card with Plan Badge',
    'Multi-Role Switcher',
    'Notification Split Menu',
    'Quick Wallet & Balance Sheet',
    'Dark Glass VIP Profile Sheet',
    'Cascading Flyout Submenu',
    'Floating Island Card',
    'Full-Width Command Bar',
    'Dark Frosted Precision'
  ],
  'command-palette': [
    'Spotlight Quick Search & Shortcuts',
    'AI Prompt & Action Runner',
    'Recent Properties & Leases Jumper',
    'Faceted Query Builder',
    'Keyboard Navigation Matrix',
    'Dark Glass Terminal Palette',
    'Cascading Flyout Submenu',
    'Floating Island Card',
    'Full-Width Command Bar',
    'Dark Frosted Precision'
  ],
  'context-menu': [
    'Document & Lease Actions',
    'Transaction Ledger Actions',
    'Tenant Profile Quick Actions',
    'Emoji Reactions & Status Menu',
    'Danger Confirmation Menu',
    'Dark Glass Context Menu',
    'Cascading Flyout Submenu',
    'Floating Island Card',
    'Full-Width Command Bar',
    'Dark Frosted Precision'
  ],
  'action-sheet': [
    'Payment Method Selector Sheet',
    'Document Upload & Scanner Sheet',
    'Maintenance Issue Category Sheet',
    'Share Property Sheet',
    'Multi-Option Destructive Sheet',
    'Dark Glass Mobile Action Sheet',
    'Cascading Flyout Submenu',
    'Floating Island Card',
    'Full-Width Command Bar',
    'Dark Frosted Precision'
  ],

  // Dropdowns
  'select': [
    'Single Select with Checkmark',
    'Icon-Leading Selector',
    'Floating Label Select',
    'Pill Status Selector',
    'Grouped Options Select',
    'Dark Luxury Select',
    'Cascading Flyout Submenu',
    'Floating Island Card',
    'Full-Width Command Bar',
    'Dark Frosted Precision'
  ],
  'searchable-select': [
    'Live Search Dropdown',
    'Multi-Category Filter Search',
    'Member Avatar Picker',
    'Tag-Generating Search',
    'Recent History Select',
    'Dark Search Command',
    'Cascading Flyout Submenu',
    'Floating Island Card',
    'Full-Width Command Bar',
    'Dark Frosted Precision'
  ],
  'multi-select': [
    'Removable Chip Cloud',
    'Checkbox List with Select All',
    'Count Badge Selector',
    'Dual-Panel Transfer List',
    'Compact Token Field',
    'Dark Glass Multi-Select',
    'Cascading Flyout Submenu',
    'Floating Island Card',
    'Full-Width Command Bar',
    'Dark Frosted Precision'
  ],
  'property-selector': [
    'Property Thumbnail Selector',
    'Apartment & Unit Switcher',
    'Building Floor Picker',
    'Occupancy Status Selector',
    'Portfolio Switcher',
    'Dark Investment Property Select',
    'Cascading Flyout Submenu',
    'Floating Island Card',
    'Full-Width Command Bar',
    'Dark Frosted Precision'
  ],
  'filter-dropdown': [
    'Price Range Slider & Presets',
    'Multi-Facet Filter Menu',
    'Date Range & Chips',
    'Toggle Switch Filter',
    'Quick Category Selector',
    'Dark Glass Filter Menu',
    'Cascading Flyout Submenu',
    'Floating Island Card',
    'Full-Width Command Bar',
    'Dark Frosted Precision'
  ],
  'cascading-dropdown': [
    'Country > State > City',
    'Property > Building > Unit',
    'Category > Subcategory > Item',
    'Department > Team > Role',
    'Territory > Zone > Branch',
    'Dark Glass Hierarchical Cascader',
    'Cascading Flyout Submenu',
    'Floating Island Card',
    'Full-Width Command Bar',
    'Dark Frosted Precision'
  ],

  // Navigation
  'sidebar': [
    'Standard Expanded Navigation',
    'Slim Icon Rail with Tooltip',
    'Collapsible Grouped Tree',
    'Brand Header & Workspace Switcher',
    'Floating Glass Sidebar',
    'Dark Command Sidebar',
    'Cascading Flyout Submenu',
    'Floating Island Card',
    'Full-Width Command Bar',
    'Dark Frosted Precision'
  ],
  'topbar': [
    'Search & Breadcrumbs Topbar',
    'Minimal Header with Actions',
    'Financial Balance & Stats Bar',
    'Multi-Role Tenant Header',
    'Notification & Quick Action Topbar',
    'Dark Glass Command Topbar',
    'Cascading Flyout Submenu',
    'Floating Island Card',
    'Full-Width Command Bar',
    'Dark Frosted Precision'
  ],
  'breadcrumbs': [
    'Slash Separator Breadcrumb',
    'Chevron Icon Breadcrumb',
    'Enclosed Pill Breadcrumb',
    'Home Icon Leading Path',
    'Dropdown Truncated Breadcrumb',
    'Dark Glass Path Bar',
    'Cascading Flyout Submenu',
    'Floating Island Card',
    'Full-Width Command Bar',
    'Dark Frosted Precision'
  ],
  'tabs': [
    'Underline Indicator Tabs',
    'Pill & Segmented Tabs',
    'Enclosed Card Tabs with Badges',
    'Vertical Sidebar Tabs',
    'Icon & Label Modern Tabs',
    'Dark Glass Glow Tabs',
    'Cascading Flyout Submenu',
    'Floating Island Card',
    'Full-Width Command Bar',
    'Dark Frosted Precision'
  ],
  'segmented': [
    'iOS 3D Sliding Pill',
    'Brutalist Outline Segmented',
    'Icon-Only Quick Toggle',
    'Multi-Step View Switcher',
    'Gradient Active Tab',
    'Dark Glass Toggle Bar',
    'Cascading Flyout Submenu',
    'Floating Island Card',
    'Full-Width Command Bar',
    'Dark Frosted Precision'
  ],
  'pagination': [
    'Numbered Pill Pages',
    'Prev & Next with Jump Input',
    'Compact Page Dropdown',
    'Infinite Scroll Trigger Button',
    'Dot Page Indicator',
    'Dark Glass Numeric Bar',
    'Cascading Flyout Submenu',
    'Floating Island Card',
    'Full-Width Command Bar',
    'Dark Frosted Precision'
  ],
  'stepper': [
    'Numbered Circle Stepper',
    'Vertical Milestone Timeline',
    'Icon-Guided Process Stepper',
    'Linear Progress Bar Stepper',
    'Compact Checkmark Stepper',
    'Dark Cybernetic Stepper',
    'Cascading Flyout Submenu',
    'Floating Island Card',
    'Full-Width Command Bar',
    'Dark Frosted Precision'
  ],
  'bottom-nav': [
    'Floating Pill Island with Active Glow',
    'Docked 5-Tab Bar with Center Action',
    'Labeled Nav with Unread Badges',
    'Micro-Haptic Slider Bar',
    'Curved Notch Tab Bar',
    'Dark Frosted Glass Dock',
    'Cascading Flyout Submenu',
    'Floating Island Card',
    'Full-Width Command Bar',
    'Dark Frosted Precision'
  ],

  // Tables
  'data-table': [
    'Enterprise Ledger Table',
    'Compact Financial Transactions',
    'Status & Action Matrix',
    'Expandable Tenant Roster',
    'Pinned Column Matrix',
    'Dark Glass Analytics Table',
    'Cascading Flyout Submenu',
    'Floating Island Card',
    'Full-Width Command Bar',
    'Dark Frosted Precision'
  ],
  'compact-table': [
    'Recent Payments Mini-Table',
    'Monthly Rent Summary',
    'Fee Breakdown Ledger',
    'Security Deposit Escrow Log',
    'Utility Consumption Table',
    'Dark Compact Financial Log',
    'Cascading Flyout Submenu',
    'Floating Island Card',
    'Full-Width Command Bar',
    'Dark Frosted Precision'
  ],
  'expandable-row': [
    'Invoice Details Expandable',
    'Lease Agreement Terms Row',
    'Maintenance Ticket Timeline',
    'Payment Breakdown Row',
    'Tenant Background Details',
    'Dark Glass Expandable Matrix',
    'Cascading Flyout Submenu',
    'Floating Island Card',
    'Full-Width Command Bar',
    'Dark Frosted Precision'
  ],

  // Lists
  'list-rows': [
    'Payment Transaction Row',
    'Tenant Lease Summary Row',
    'Maintenance Ticket Row',
    'Activity Audit Log Row',
    'File Attachment Row',
    'Dark Glass Summary Row',
    'Cascading Flyout Submenu',
    'Floating Island Card',
    'Full-Width Command Bar',
    'Dark Frosted Precision'
  ],
  'timeline': [
    'Lease Signing Process Tracker',
    'Rent Payment History Milestone',
    'Maintenance Repair Workflow',
    'Move-in Inspection Timeline',
    'Legal Eviction & Notice Pipeline',
    'Dark Node Status Timeline',
    'Cascading Flyout Submenu',
    'Floating Island Card',
    'Full-Width Command Bar',
    'Dark Frosted Precision'
  ],

  // Cards
  'entity-cards': [
    'Luxury Property Showcase Card',
    'Tenant Profile & Credit Card',
    'Landlord Agency Partner Card',
    'Rental Unit Availability Card',
    'Roommate Matching Card',
    'Dark Property Investment Card',
    'Cascading Flyout Submenu',
    'Floating Island Card',
    'Full-Width Command Bar',
    'Dark Frosted Precision'
  ],
  'stat-cards': [
    'Revenue Sparkline Card',
    'Occupancy Circular Meter',
    'Escrow Balance Breakdown',
    'Maintenance Request Volume',
    'Credit Score Progress Card',
    'Dark VIP Financial Metric',
    'Cascading Flyout Submenu',
    'Floating Island Card',
    'Full-Width Command Bar',
    'Dark Frosted Precision'
  ],
  'pricing-cards': [
    'Free Starter Tenant Plan',
    'Pro Landlord Automation Plan',
    'Enterprise Property Fleet',
    'Rent-to-Own Equity Tier',
    'Student Co-living Pass',
    'Dark Prestige VIP Membership',
    'Cascading Flyout Submenu',
    'Floating Island Card',
    'Full-Width Command Bar',
    'Dark Frosted Precision'
  ],
  'summary-cards': [
    'Monthly Rent Due Summary',
    'Security Deposit Escrow Status',
    'Lease Renewal Expiry Countdown',
    'Auto-Pay Active Card Summary',
    'Utility Consumption Overview',
    'Dark Executive Portfolio Summary',
    'Cascading Flyout Submenu',
    'Floating Island Card',
    'Full-Width Command Bar',
    'Dark Frosted Precision'
  ],

  // Overlays
  'form-modal': [
    'Add New Property Modal',
    'Instant Rent Payment Dialog',
    'Invite Tenant Invitation Sheet',
    'Maintenance Request Form',
    'Sign Lease Agreement Modal',
    'Dark Glass Settings Dialog',
    'Cascading Flyout Submenu',
    'Floating Island Card',
    'Full-Width Command Bar',
    'Dark Frosted Precision'
  ],
  'confirm-dialog': [
    'Cancel Lease Agreement Dialog',
    'Delete Property Warning Dialog',
    'Early Deposit Release Confirmation',
    'Approve Tenant Application',
    'Pause Auto-Debit Schedule',
    'Dark Glass Security Confirmation',
    'Cascading Flyout Submenu',
    'Floating Island Card',
    'Full-Width Command Bar',
    'Dark Frosted Precision'
  ],
  'bottom-sheet': [
    'Quick Payment Method Selector',
    'Property Filter Sheet',
    'Unit Amenities Checklist',
    'Document Signature Preview',
    'Upload Receipt Camera Sheet',
    'Dark Glass Bottom Sheet',
    'Cascading Flyout Submenu',
    'Floating Island Card',
    'Full-Width Command Bar',
    'Dark Frosted Precision'
  ],

  // Feedback
  'alert-banner': [
    'Payment Received Success Alert',
    'Lease Expiring Soon Warning',
    'Scheduled Maintenance Notice',
    'Payment Failed Action Alert',
    'RentenPe V2 System Announcement',
    'Dark Glass Platform Status Alert',
    'Cascading Flyout Submenu',
    'Floating Island Card',
    'Full-Width Command Bar',
    'Dark Frosted Precision'
  ],
  'empty-state': [
    'No Properties Listed Empty State',
    'No Transactions Found Filter State',
    'No Maintenance Tickets Clean Slate',
    'Zero Messages Inbox Zero',
    'No Saved Payment Cards',
    'Dark Glass Empty Workspace',
    'Cascading Flyout Submenu',
    'Floating Island Card',
    'Full-Width Command Bar',
    'Dark Frosted Precision'
  ],
  'skeleton': [
    'Property Card Loading Shimmer',
    'Financial Ledger Rows Skeleton',
    'Tenant Profile Hero Skeleton',
    'Dashboard Metric Cards Grid',
    'Payment History Timeline Shimmer',
    'Dark Mode Cyber Shimmer',
    'Cascading Flyout Submenu',
    'Floating Island Card',
    'Full-Width Command Bar',
    'Dark Frosted Precision'
  ],

  // Charts
  'bar-chart': [
    'Monthly Revenue 6-Month Bars',
    'On-Time vs Late Stacked Bars',
    'Expense Category Breakdown',
    'Quarterly Rent Growth Comparison',
    'Target vs Actual Rent Collected',
    'Dark Neon Financial Histogram',
    'Cascading Flyout Submenu',
    'Floating Island Card',
    'Full-Width Command Bar',
    'Dark Frosted Precision'
  ],
  'line-chart': [
    '12-Month Net Cashflow Spline',
    'Rent Index Growth Trajectory',
    'Tenant Credit Score Progression',
    'Portfolio Occupancy Rate Curve',
    'Utility Cost Fluctuations',
    'Dark Glowing Pulse Line',
    'Cascading Flyout Submenu',
    'Floating Island Card',
    'Full-Width Command Bar',
    'Dark Frosted Precision'
  ],
  'donut-chart': [
    'Portfolio Occupancy 94% Donut',
    'Expense Distribution Pie',
    'Payment Gateway Method Share',
    'Maintenance Resolution Status',
    'Tenant Demographic Breakdown',
    'Dark Radial Escrow Donut',
    'Cascading Flyout Submenu',
    'Floating Island Card',
    'Full-Width Command Bar',
    'Dark Frosted Precision'
  ],
  'score-display': [
    'RentenPe Credit Score (785/850)',
    'Tenant Reliability Index (98%)',
    'Property Quality Rating (4.9★)',
    'Maintenance SLA Compliance (99%)',
    'Financial Health Score (92/100)',
    'Dark VIP Credit Shield Gauge',
    'Cascading Flyout Submenu',
    'Floating Island Card',
    'Full-Width Command Bar',
    'Dark Frosted Precision'
  ],

  // Payments
  'payment-row': [
    'UPI Instant Rent Transfer',
    'ACH Bank Direct Debit',
    'Security Deposit Escrow Lock',
    'Maintenance Repair Reimbursement',
    'Late Fee Waiver Adjustment',
    'Dark Transaction Ledger Row',
    'Cascading Flyout Submenu',
    'Floating Island Card',
    'Full-Width Command Bar',
    'Dark Frosted Precision'
  ],
  'payment-card': [
    'RentenPe Platinum Black Card',
    'Visa Gold Smart Debit Card',
    'Rent-Backed Virtual Credit Card',
    'Mastercard World Elite Card',
    'Zero-Deposit Guarantee Card',
    'Dark Holographic Metal Card',
    'Cascading Flyout Submenu',
    'Floating Island Card',
    'Full-Width Command Bar',
    'Dark Frosted Precision'
  ],
  'bank-account': [
    'Chase Checking (Verified Account)',
    'Wells Fargo Savings Account',
    'HDFC Bank Direct NetBanking',
    'Plaid Instant Connected Bank',
    'Escrow Wire Transfer Account',
    'Dark Encrypted Vault Account',
    'Cascading Flyout Submenu',
    'Floating Island Card',
    'Full-Width Command Bar',
    'Dark Frosted Precision'
  ],
  'receipt': [
    'Official Rent Payment Receipt',
    'Security Deposit Escrow Certificate',
    'Maintenance Work Order Invoice',
    'Late Fee Waiver Voucher',
    'Annual Tax Statement Summary',
    'Dark Digital Stamp Receipt',
    'Cascading Flyout Submenu',
    'Floating Island Card',
    'Full-Width Command Bar',
    'Dark Frosted Precision'
  ],

  // Property
  'property-listing': [
    'Luxury Penthouse (3BHK)',
    'Cozy Downtown Studio Apartment',
    'Suburban Family Villa',
    'Commercial Office Suite',
    'Co-Living Private Suite',
    'Dark High-Yield Investment Asset',
    'Cascading Flyout Submenu',
    'Floating Island Card',
    'Full-Width Command Bar',
    'Dark Frosted Precision'
  ],
  'amenity-grid': [
    'Essential Amenities Icon Badge Grid',
    'Luxury Wellness & Spa Features',
    'Building Security & Smart Access',
    'Pet-Friendly & Green Living Perks',
    'EV Charging & Parking Features',
    'Dark Glass Smart Home Amenities',
    'Cascading Flyout Submenu',
    'Floating Island Card',
    'Full-Width Command Bar',
    'Dark Frosted Precision'
  ],
  'floor-plan': [
    '2D Dimensioned Architectural Plan',
    '3D Isometric Room Render Card',
    'Room Dimensions Metric Breakdown',
    'Multi-Unit Floor Comparison',
    'Virtual Tour Layout Card',
    'Dark Blueprint Schematic Card',
    'Cascading Flyout Submenu',
    'Floating Island Card',
    'Full-Width Command Bar',
    'Dark Frosted Precision'
  ],

  // Product
  'rent-reporting': [
    'Credit Bureau Direct Sync Card',
    'Score Boost Preview (+45 Pts)',
    '12-Month On-Time Payment Streak',
    'Bureau Official Certificate',
    'Automated Reporting Toggle',
    'Dark VIP Credit Booster Card',
    'Cascading Flyout Submenu',
    'Floating Island Card',
    'Full-Width Command Bar',
    'Dark Frosted Precision'
  ],
  'tenant-screening': [
    'Comprehensive Background Report',
    'Credit & Eviction History Card',
    'Income-to-Rent Ratio (3.2x)',
    'Landlord Reference Verification',
    'Identity KYC Badge Card',
    'Dark Executive Screening Dossier',
    'Cascading Flyout Submenu',
    'Floating Island Card',
    'Full-Width Command Bar',
    'Dark Frosted Precision'
  ],
  'deposit-shield': [
    'Zero-Cash Security Deposit Guarantee',
    'Escrow Protection Certificate',
    'Claim & Dispute History Tracker',
    'Landlord Damage Coverage Seal',
    'Coverage Limit Adjustment Slider',
    'Dark Escrow Vault Card',
    'Cascading Flyout Submenu',
    'Floating Island Card',
    'Full-Width Command Bar',
    'Dark Frosted Precision'
  ],

  // Rewards
  'streak': [
    '12-Month On-Time Rent Streak',
    'Weekly Challenge Bonus Streak',
    'Milestone Gold Trophy Unlock',
    'Multiplier Cashback Booster',
    'RentenPe Elite Club Tier',
    'Dark Diamond Streak Card',
    'Cascading Flyout Submenu',
    'Floating Island Card',
    'Full-Width Command Bar',
    'Dark Frosted Precision'
  ],
  'cashback': [
    'Scratch Card Mystery Cashback',
    'Instant 2% UPI Rent Rebate',
    'Milestone Coin Chest Reward',
    'Credit Booster Cashback Perk',
    'Referral Bonus Credit Card',
    'Dark Gold Vault Reward',
    'Cascading Flyout Submenu',
    'Floating Island Card',
    'Full-Width Command Bar',
    'Dark Frosted Precision'
  ],

  // Authentication
  'login': [
    'Email & Password Modern Card',
    'Mobile OTP Instant Login',
    'Magic Link Passwordless Card',
    'Biometric FaceID Auth Card',
    'Two-Factor Authenticator Code',
    'Dark Enterprise Single Sign-On',
    'Cascading Flyout Submenu',
    'Floating Island Card',
    'Full-Width Command Bar',
    'Dark Frosted Precision'
  ],
  'otp-verify': [
    '6-Digit Monospace SMS Code',
    '4-Digit Fast PIN Verification',
    'WhatsApp OTP Secure Prompt',
    'Biometric Fallback Prompt',
    'Security Hardware Key Card',
    'Dark Frosted Code Input',
    'Cascading Flyout Submenu',
    'Floating Island Card',
    'Full-Width Command Bar',
    'Dark Frosted Precision'
  ],

  // Foundations
  'typography': [
    'Display & Heading Type Hierarchy',
    'System Font Weight Matrix',
    'Body & Reading Paragraph Scale',
    'Data & Monospace Code Metrics',
    'Editorial Serif Headline Card',
    'Dark Futuristic Typographic Scale',
    'Cascading Flyout Submenu',
    'Floating Island Card',
    'Full-Width Command Bar',
    'Dark Frosted Precision'
  ],
  'colors': [
    'Core Brand Palette & Swatches',
    'Semantic Status Tokens (Pass/Warn/Fail)',
    'Surface & Background Neutral Scale',
    'Elevational Gradients & Glows',
    'Accent Neon Hues (Vibrant)',
    'Dark Mode Contrast Tokens',
    'Cascading Flyout Submenu',
    'Floating Island Card',
    'Full-Width Command Bar',
    'Dark Frosted Precision'
  ],
  'spacing': [
    '4px Base Spacing Scale Grid',
    'Component Padding Hierarchy',
    'Layout Margin & Gutters',
    'Responsive Breakpoint Grid',
    'Bento Box Alignment Matrix',
    'Dark Precision Spacing Guide',
    'Cascading Flyout Submenu',
    'Floating Island Card',
    'Full-Width Command Bar',
    'Dark Frosted Precision'
  ],
  'dividers': [
    'Subtle Border Line Separator',
    'Centered Text Badge Divider',
    'Icon & Pill Segment Divider',
    'Gradient Fade Line Divider',
    'Dotted Monospace Ledger Divider',
    'Dark Neon Glow Separator',
    'Cascading Flyout Submenu',
    'Floating Island Card',
    'Full-Width Command Bar',
    'Dark Frosted Precision'
  ],
  'icons': [
    'Financial & Currency Action Icons',
    'Property & Building Symbol Set',
    'Status & Security Badges',
    'Navigation & Directional Arrows',
    'Tenant Lifestyle & Amenities Icons',
    'Dark Glowing Cyber Icons',
    'Cascading Flyout Submenu',
    'Floating Island Card',
    'Full-Width Command Bar',
    'Dark Frosted Precision'
  ],
  'containers': [
    'Standard Clean Bordered Card',
    'Frosted Glassmorphism Card',
    'Elevated 3D Shadow Container',
    'Interactive Hover Outline Card',
    'Segmented Split Container',
    'Dark Luxury Command Box',
    'Cascading Flyout Submenu',
    'Floating Island Card',
    'Full-Width Command Bar',
    'Dark Frosted Precision'
  ],
  'otp-inputs': [
    'Glowing Amber Envelope 6-Digit Glass Input Boxes',
    'iOS SMS Autofill 4-Digit Fast PIN',
    'Apple Porcelain FaceID 6-Digit Track',
    'CRED Obsidian Acid Neon 4-Digit PIN',
    'Split Dual-Block 3+3 Verified Code',
    'Tactile iOS Numeric Keypad PIN Display',
    'Escrow Masked Privacy Dot PIN',
    'WhatsApp Instant Verification Card',
    'Minimalist Underline Dash PIN Entry',
    'Interactive Shake Error & Countdown Resend Timer'
  ],
  'pin-input': [
    'Glowing Amber Envelope 6-Digit Glass Input Boxes',
    'iOS SMS Autofill 4-Digit Fast PIN',
    'Apple Porcelain FaceID 6-Digit Track',
    'CRED Obsidian Acid Neon 4-Digit PIN',
    'Split Dual-Block 3+3 Verified Code',
    'Tactile iOS Numeric Keypad PIN Display',
    'Escrow Masked Privacy Dot PIN',
    'WhatsApp Instant Verification Card',
    'Minimalist Underline Dash PIN Entry',
    'Interactive Shake Error & Countdown Resend Timer'
  ],
  'file-upload': [
    'Cloud Drag & Drop Zone with Dotted Border',
    'KYC Aadhaar / PAN Verification Uploader',
    'Live Upload Progress Ring & File Item',
    'CRED Dark Obsidian Encrypted Vault Uploader',
    'Multi-File Batch Receipt Upload',
    '3x3 Property Inspection Photo Grid',
    'Minimal Single-Line Browse Pill',
    'e-Stamp Certificate Scanner with OCR Check',
    'Circular Avatar Uploader with Camera Overlay',
    'Upload Error State & File Rejection'
  ],
  'date-inputs': [
    'Calendar Rent Due Date Picker Grid',
    'Lease Agreement Range Picker',
    'Quick Date Selector Pills',
    'CRED Dark Obsidian Billing Cycle Wheel',
    'Inline Minimalist Date Input with Icon',
    'Property Visit Slot Scheduler',
    'Month & Year Expiry Wheel',
    'Recurring Payment Date Selector',
    'Compact Floating Island Date Card',
    'Historical Date Range Filter'
  ],
  'time-picker': [
    '12h Drum Wheel Time Selector',
    'Property Viewing Preset Time Slots',
    'Radial Analog Clock Hand Picker',
    'CRED Dark Obsidian Arrival Window Picker',
    'Duration & Stay Period Stepper',
    'Move-in Inspection Exact Time Badge',
    'Minimalist Digital Monospace Time Input',
    '24-Hour International Time Slider',
    'Maintenance Slot Card',
    'Restricted Visiting Hours Warning'
  ],
  'color-picker': [
    'Interior Wall Paint Palette Grid',
    'Hex Code Live Input with Swatch',
    'Circular Hue Ring & Saturation Disc',
    'CRED Dark Obsidian Neon Accent Grid',
    'RGB / HSL Dual Slider Matrix',
    'Society Building Theme Palette',
    'Eyedropper Tool Card',
    'Contrast Ratio WCAG Scorecard',
    'Dark/Light Mode Theme Shade',
    'Linear Gradient Creator'
  ],
  'signature-pad': [
    'Drawing Canvas with Smooth Spline Curve',
    'Type-to-Sign Cursive Generator',
    'Aadhaar e-Sign Digital Certificate Stamp',
    'CRED Dark Obsidian Encrypted Escrow Signature',
    'Tenant & Landlord Dual Sign Block',
    'Signature Pad with Redo / Undo Toolbar',
    'Biometric Touch-ID Stamp',
    'Digital Notary Seal',
    'Stored Signature Picker',
    'Audit Log Timestamp'
  ],
  'textarea': [
    'Maintenance Grievance Report with Counter',
    'Landlord Private Notes Field',
    'Rental Lease Terms Custom Clauses',
    'CRED Dark Obsidian Feedback',
    'Voice Dictation Field with Microphone Pulse',
    'Floating Label Multiline Comment',
    'Inspection Checklist Tags',
    'Society Broadcast Composer',
    'Move-in Instructions Card',
    'Textarea Error State'
  ],
  'star-rating': [
    '5-Star Interactive Rating with Gold Glow',
    'Society Breakdown Scorecard',
    'Emoji Sentiment Reaction',
    'CRED Dark Obsidian Acid Neon Rating',
    '1-10 NPS Segmented Bar',
    'Thumbs Up / Down Pill',
    'Google Reviews Sync Badge',
    'Staff Tip & Rating',
    'Favorite Heart Rating',
    'Rating Breakdown Gauge'
  ],
  'tags-input': [
    'Property Amenities Cloud',
    'Flatmate Preferences Tags',
    'Expense Split Category Tags',
    'CRED Dark Neon Token Cloud',
    'Priority Tags',
    'Location Landmarks',
    'Inline Add Pill',
    'Max Limit Badge',
    'Drag-to-Reorder Chips',
    'Filter Multi-Select'
  ],
  'rich-text': [
    'Full WYSIWYG Editing Toolbar',
    'Lease Clause Formatter with Callout',
    'Markdown Split Editor with Preview',
    'CRED Dark Obsidian Documentation Editor',
    'Minimal Floating Highlight Bubble Bar',
    'Property Listing SEO Description Formatter',
    'Voice-to-Text Rich Transcriber',
    'Landlord & Society Mention Composer',
    'Distraction-Free Zen Writing Canvas',
    'Cloud Auto-Saved Document Badge'
  ],
  'autocomplete': [
    'Bangalore Verified Localities Dropdown',
    'Property ID Instant Search with Pill',
    'Tenant Name & Flatmate Autocomplete',
    'CRED Dark Obsidian Command Autocomplete',
    'Recent Searches History Dropdown',
    'Multi-Select Autocomplete Token Field',
    'Google Places Street Suggestions',
    'Highlighted Substring Match Search',
    'Categorized Areas & Metro Stations Dropdown',
    'Zero-Results Coverage Request Card'
  ],
  'masked-inputs': [
    '16-Digit Credit Card Mask with RuPay Badge',
    'Government PAN Card Pattern Mask',
    'Aadhaar 12-Digit Masked Card',
    'Indian Bank IFSC Code Mask',
    'Bank Account Number Mask with Eye Toggle',
    'Date of Birth DD/MM/YYYY Mask',
    'Vehicle Registration Number Mask',
    'GSTIN Corporate Tax ID Mask',
    'Stamp Duty Reference Code Mask',
    'Mask Pattern Validation Error State'
  ]
};

const CATEGORY_DEFAULT_FAMILIES = {
  'Inputs': ["Floating Label Modern Input",
    "Icon-Leading Validated Field",
    "Search & Autocomplete Field",
    "Multi-Value Token Input",
    "Segmented Counter Stepper",
    "Dark Command Glass Field",
    "Inline Editable Text",
    "Floating Island Date Picker",
    "Full-Width Amount Entry",
    "Dark Terminal Input"],
  'Selection': ["Interactive Toggle Switch Card",
    "Custom Checkbox with Badge",
    "Segmented Radio Button Group",
    "Dual-Thumb Range Slider",
    "Pill Selection Chip Group",
    "Dark Tactile Selection Card",
    "Color Palette Selector Grid",
    "Floating Island Toggle",
    "Full-Width Comparison Strip",
    "Dark Tactile Selector"],
  'Dropdowns': ["Standard Select with Chevron",
    "Searchable Filter Dropdown",
    "Multi-Select Chip Dropdown",
    "Avatar Member Picker",
    "Hierarchical Cascading Menu",
    "Dark Glass Command Dropdown",
    "Status Pill Selector",
    "Split Button Dropdown",
    "Full-Width Category Selector",
    "Dark Glass Menu"],
  'Navigation': ["iOS Bottom Tab Bar",
    "Floating Pill Dock",
    "Segmented View Controller",
    "Breadcrumb Trail Navigation",
    "Multi-Step Process Stepper",
    "Dark Command Navigation Rail",
    "Underline Indicator Tabs",
    "Collapsible Sidebar",
    "Full-Width Progress Header",
    "Dark Rail Navigation"],
  'Menus': ["Multi-Column Category Grid",
    "Icon Feature Showcase",
    "Featured Promo Split",
    "Quick Search & Shortcuts",
    "Segmented Role Tabs",
    "Dark Frosted Command Menu",
    "Cascading Flyout Menu",
    "Context Action Sheet",
    "Full-Width Command Bar",
    "Dark Glass Menu Hub"],
  'Data Display': ["Metric Badge with Pulse",
    "Interactive Filter Pill",
    "Status Indicator Label",
    "Avatar Cluster Count",
    "Key-Value Data Strip",
    "Dark High-Contrast Tag",
    "Horizontal Stat Bar",
    "Floating Island Metric",
    "Full-Width Comparison Bar",
    "Dark Data Matrix"],
  'Lists': ["Payment Transaction Row",
    "Grouped Category List",
    "Timeline Milestone Feed",
    "Swipeable Action Row",
    "Expandable Accordion Row",
    "Dark Glass Transaction List",
    "Reorderable Drag List",
    "Kanban Board Column",
    "Full-Width Checklist Strip",
    "Dark Data List"],
  'Tables': ["Enterprise Financial Ledger",
    "Compact Mini Data Table",
    "Expandable Detail Row",
    "Column-Sortable Grid",
    "Paginated Data Table",
    "Dark Glass Analytics Grid",
    "Responsive Card Table",
    "Toolbar Filter Table",
    "Full-Width Summary Matrix",
    "Dark Analytics Grid"],
  'Cards': ["Property Showcase Card",
    "Metric KPI Bento Card",
    "Feature Highlight Card",
    "Interactive Action Card",
    "Horizontal Summary Strip",
    "Dark Neon Glass Card",
    "Media Gallery Card",
    "Gradient Premium Card",
    "Full-Width Hero Banner",
    "Dark Glass Card"],
  'Overlays': ["Form Entry Dialog",
    "Confirmation Alert Modal",
    "Mobile Bottom Sheet",
    "Side Drawer Panel",
    "Contextual Popover",
    "Dark Command Center Prompt",
    "Toast Snackbar Float",
    "Fullscreen Dialog",
    "Full-Width Inline Dialog",
    "Dark Modal"],
  'Feedback': ["Status Alert with CTA",
    "Toast Notification Float",
    "Empty State Illustration",
    "Shimmer Skeleton Card",
    "Progress Bar Milestones",
    "Dark System Health Status",
    "Inline Validation Error",
    "Success Animation Card",
    "Full-Width Banner Alert",
    "Dark Alert"],
  'States': ["Active & Verified State",
    "Pending Approval State",
    "Warning Required State",
    "Locked Restricted State",
    "Offline Disconnected State",
    "Dark Shield Protected State",
    "Success Complete State",
    "Maintenance Mode State",
    "Full-Width Progress State",
    "Dark State"],
  'Calendar': ["Interactive Month Grid",
    "Date Range Selector",
    "Time Slot Booking Chips",
    "Day Schedule View",
    "Mini Week Strip",
    "Dark Cybernetic Event Matrix",
    "Event Detail Card",
    "Availability Heatmap",
    "Full-Width Schedule Strip",
    "Dark Calendar"],
  'Charts': ["Revenue Bar Chart",
    "Cashflow Spline Line",
    "Occupancy Donut Gauge",
    "Stacked Distribution Bars",
    "Micro Sparkline Inline",
    "Dark Glowing Data Curve",
    "Filled Area Gradient",
    "Scatter Point Cloud",
    "Full-Width Comparison Bar",
    "Dark Chart"],
  'Analytics': ["KPI Scorecard",
    "Trend Sparkline Compare",
    "Cohort Breakdown Matrix",
    "Period Variance Card",
    "Funnel Conversion Display",
    "Dark Executive Command",
    "Distribution Ratio Card",
    "Real-Time Pulse Metric",
    "Full-Width Dashboard Strip",
    "Dark Analytics"],
  'Infographics': ["Multi-Tier Stats Counter",
    "Step Process Flow Diagram",
    "Comparative Feature Matrix",
    "Key Insight Banner",
    "Data Story Narrative",
    "Dark Infographic Data Board",
    "Timeline Visual History",
    "Icon Stat Display Grid",
    "Full-Width Data Story",
    "Dark Infographic"],
  'Rewards': ["Streak Fire Tracker",
    "Scratch Cashback Card",
    "Level Progression XP Bar",
    "Milestone Badge Card",
    "Referral Invite Strip",
    "Dark VIP Prestige Vault",
    "Daily Check-In Reward",
    "Loyalty Program Card",
    "Full-Width Celebration",
    "Dark Rewards"],
  'Authentication': ["Email & Password Card",
    "SMS OTP 6-Digit Code",
    "Magic Link Passwordless",
    "Biometric FaceID/TouchID",
    "SSO Identity Grid",
    "Dark Enterprise SSO Portal",
    "Numeric PIN Lock Screen",
    "Passkey WebAuthn Card",
    "Full-Width Welcome Gate",
    "Dark Auth"],
  'Onboarding': ["Welcome Hero Screen",
    "Feature Tour Spotlight",
    "Permission Request Card",
    "Setup Wizard Steps",
    "Complete Success Card",
    "Dark Fast-Track Onboard",
    "Profile Setup Form",
    "Invite Friends Card",
    "Full-Width Launch Banner",
    "Dark Onboard"],
  'Communication': ["Chat Speech Bubble",
    "Message Thread Card",
    "Urgent Announcement",
    "In-App Notification",
    "Email Compose Form",
    "Dark Glass Dispatch",
    "Support Ticket Card",
    "Feedback Form Card",
    "Full-Width Broadcast",
    "Dark Comms"],
  'Payments': ["UPI Instant Payment Row",
    "Platinum Black Card",
    "Bank Account Verified",
    "Digital Wallet Balance",
    "Official Receipt Voucher",
    "Dark Cryptographic Vault",
    "Invoice Breakdown",
    "Split Payment Calculator",
    "Full-Width Checkout Strip",
    "Dark Payments"],
  'Property': ["Luxury Listing Showcase",
    "Amenity Icon Grid",
    "Floor Plan Schematic",
    "Location Map Card",
    "Property Comparison",
    "Dark Investment Asset Card",
    "Maintenance Tracker",
    "Rent Estimate Widget",
    "Full-Width Gallery Hero",
    "Dark Property"],
  'Legal': ["Lease Signature Block",
    "Terms Accordion Section",
    "Consent Audit Block",
    "Compliance Disclaimer",
    "E-Signature Capture",
    "Dark Encrypted Ledger",
    "Document Attachment",
    "Audit Trail Log",
    "Full-Width Policy Banner",
    "Dark Legal"],
  'Social Proof': ["Verified Testimonial",
    "Star Rating Summary",
    "Review Showcase Card",
    "Trust Guarantee Badge",
    "Community Recommendation",
    "Dark Endorsement Shield",
    "Social Download Count",
    "Press Mention Badge",
    "Full-Width Trust Strip",
    "Dark Social"],
  'Media': ["Image Carousel Slider",
    "Video Walkthrough Player",
    "Gallery Masonry Grid",
    "Audio Playback Controls",
    "File Document Preview",
    "Dark Cinema Media Card",
    "Image Crop & Resize",
    "Thumbnail Strip Selector",
    "Full-Width Hero Media",
    "Dark Media"],
  'Settings': ["Toggle Switch List",
    "Profile Identity Form",
    "Notification Matrix",
    "Security 2FA Config",
    "Connected Accounts",
    "Dark System Console",
    "Data Export Options",
    "Delete Account Flow",
    "Full-Width Pref Strip",
    "Dark Settings"],
  'Sticky': ["Bottom Fixed Action Bar",
    "Cookie Consent Banner",
    "Top Alert Notice Strip",
    "Help Chat Trigger",
    "Countdown Promo Bar",
    "Dark Glass Sticky Dock",
    "Scroll-To-Top Button",
    "Sticky CTA Strip",
    "Full-Width Action Bar",
    "Dark Sticky"],
  'Transitions': ["Page Morph Animation",
    "Micro Button Bounce",
    "Shared Element Hero",
    "Stagger List Entrance",
    "Ripple Interaction",
    "Dark Cyber Kinetic",
    "Skeleton to Content",
    "Fade In/Out Smooth",
    "Full-Width Slide",
    "Dark Transition"],
  'Patterns': ["Search & Filter Bar",
    "Bulk Selection Strip",
    "Drag & Drop List",
    "Infinite Scroll Footer",
    "Pull Refresh Spinner",
    "Dark Workbench Panel",
    "Share Sheet Menu",
    "Undo Action Bar",
    "Swipe Reveal Action",
    "Dark Pattern"],
  'Product': ["Credit Bureau Sync",
    "Payment History Table",
    "Tenant Screening Checklist",
    "Maintenance Ticket Card",
    "Digital Lease Renewal",
    "Dark VIP PropTech Hub",
    "Auto-Debit Setup Card",
    "Deposit Shield Guard",
    "Rent Split Calculator",
    "Dark Product"],
  'Templates': ["Dashboard Overview Canvas",
    "Entity List & Filter Page",
    "Property Detail Profile",
    "Multi-Step Form Wizard",
    "Transaction Receipt Modal",
    "Dark Command Operations",
    "Settings Preference Page",
    "Onboarding Flow Page",
    "Checkout Flow Template",
    "Dark Template"],
  'Backgrounds': ["Subtle Dot Grid Pattern",
    "Aurora Mesh Gradient",
    "Geometric Lines Backdrop",
    "Frosted Glass Canvas",
    "Vibrant Gradient Wash",
    "Deep Obsidian Texture",
    "Blur Bokeh Background",
    "Cyberpunk Radial Glow",
    "Animated Particle Field",
    "Dark Space Canvas"],
  'Foundations': ["Display & Heading Type Scale",
    "Font Weight Matrix",
    "Color Token Palette Grid",
    "Spacing & Grid System",
    "Divider & Separator Set",
    "Dark Precision Token Matrix",
    "Icon Symbol Library",
    "Split-Screen Comparison",
    "Floating Island Design",
    "Full-Width Immersive"],
  'Actions': ["Filled Primary CTA",
    "Outlined Secondary Action",
    "Text-Only Tertiary Link",
    "Icon-Only Circular Action",
    "Floating Action Menu",
    "Dark Glowing Precision",
    "Hyperlink with Hover",
    "Split Dropdown Action",
    "Full-Width Banner Action",
    "Dark Action"],
  'Verification & Trust': ["Government ID Upload Card","Camera Document Scanner","Live Selfie Verification","Digital Signature Pad","FaceID / Biometric Prompt","Trust Score Meter Card","Verification Step Progress","Certificate Badge Card","Background Check Status","Dark Encrypted Vault Verify"],
  'Maps & Location': ["Property Pin Map Card","Neighborhood Score Guide","Commute Time Calculator","Nearby POI Grid","Overlay Filter Map Panel","Address Autocomplete Picker","Satellite View Selector","Route Direction Card","Area Price Heatmap","Dark Tactical Map Card"],
  'Financial Widgets': ["Balance Overview Hero Card","Transaction Detail Row","Category Spending Donut","Credit Score Gauge Meter","EMI Slider Calculator","Live Exchange Rate Ticker","Split Bill Calculator","Savings Goal Progress Ring","Budget Threshold Meter","Dark Vault Financial Card"],
  'Notifications': ["iOS Push Notification Card","In-App Top Banner Alert","Grouped Timeline Feed","Dot & Badge Indicators","Full Notification Center Panel","Stacked Group Notifications","Actionable CTA Notification","Preference Settings Panel","Toast Float Notification","Dark System Alert Card"],
  'Search': ["Global Search with Categories","In-Context Inline Search","Voice Command Search Bar","Multi-Filter Chip Search","Spotlight Command Palette","Recent & Trending History","Visual Result Grid Search","Autocomplete Dropdown Search","Location-Aware Map Search","Dark Hacker Terminal Search"],
  'Banners': ["Full-Width Hero Promo Banner","Slim Alert System Banner","Animated Feature Launch Banner","Critical Urgent Action Banner","Dismissible Offer Card","Step Progress Onboard Banner","Split Media & Text Banner","Countdown Timer Banner","Testimonial Slide Banner","Dark Announcement Broadcast"],
  'Chips & Tags': ["Success/Error Status Chip","Removable Input Tag Chip","Single-Select Choice Pill","AI Assist Suggestion Chip","Autocomplete Chip","Price Amount Chip","Category Filter Chip","Icon-Leading Action Chip","Multi-Select Count Chip","Dark Glass Command Chip"],
  'Avatars & Profiles': ["Circle Photo Avatar (SM/MD/LG)","Rounded Square Avatar","Stacked Group Avatar (+N)","Online/Offline Presence Dot","Notification Badge Count","Camera Edit Overlay Avatar","Initials Placeholder Avatar","Gradient Ring Avatar","Verified Check Avatar","Dark Profile Shield Avatar"],
  'Buttons': ["Filled Primary CTA Button","Outlined Secondary Button","Text-Only Tertiary Link","Icon-Only Circular Action","Pill Rounded Action Button","Premium Gradient CTA","Loading State Spinner Button","Split Dropdown Action","Segmented Button Group","Dark Prestige Action Button"],
  'Sheets & Drawers': ["Minimal Quick-Action Sheet","Scroll-Snap Multi-Stop Sheet","Full-Screen Immersive Sheet","Side-Sliding Panel Drawer","Nested Multi-Step Sheet Stack","Form-Focused Keyboard Sheet","Map & Location Sheet","Image Gallery Sheet","Search Results Sheet","Dark Glass Command Sheet"],
  'Bottom Bars': ["iOS Standard 5-Tab Bar","Floating Glass Pill Dock","Icon-Only Minimal Dock","Curved FAB Notch Bar","Dynamic Island Adaptive Bar","Labeled Icon Grid Bar","Scrollable Category Bar","Split Action Bottom Bar","Gradient Glow Dock","Dark Frosted Command Dock"],
};

function getFamiliesForSlug(slug, cat, title) {
  let list = [];
  if (SPECIFIC_FAMILIES[slug]) {
    list = [...SPECIFIC_FAMILIES[slug]];
  } else if (CATEGORY_DEFAULT_FAMILIES[cat]) {
    list = [...CATEGORY_DEFAULT_FAMILIES[cat]];
  } else {
    list = [
      'Standard Model A',
      'Featured Model B',
      'Interactive Model C',
      'Compact Model D',
      'Segmented Model E',
      'Dark Command Model F',
      'Split Comparison G',
      'Floating Island H',
      'Full-Width Banner I',
      'Dark Precision Matrix J'
    ];
  }

  // Ensure exactly 12 models: Model A through Model L
  // Model K (index 10): Apple Porcelain Light Luxury
  // Model L (index 11): CRED Titanium Acid Volt Dark Luxury
  const cleanTitle = title || slug.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' ');
  if (list.length < 11) {
    list.push(`${cleanTitle} Apple Porcelain Light`);
  }
  if (list.length < 12) {
    list.push(`${cleanTitle} CRED Titanium Dark`);
  }
  return list.slice(0, 12);
}

// ============================================================================
// COMPONENT MOCK RENDERERS
// ============================================================================

function renderMegaMenu(variantIndex) {
  switch (variantIndex) {
    case 0: // Multi-Column Category Grid
      return `<div style="width:100%;max-width:440px;background:#ffffff;border:1px solid #E2E8F0;border-radius:18px;box-shadow:0 14px 34px rgba(15,23,42,0.08);padding:22px;display:flex;flex-direction:column;gap:18px;">
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:20px;">
          <div>
            <div style="font-size:11px;font-weight:800;color:#94A3B8;letter-spacing:0.08em;text-transform:uppercase;margin-bottom:12px;">Financial Suite</div>
            <div style="display:flex;flex-direction:column;gap:10px;">
              <div style="display:flex;align-items:center;gap:10px;padding:6px 8px;border-radius:8px;background:#F8FAFC;">
                <span style="width:28px;height:28px;background:#EEF2FF;color:#4F46E5;border-radius:6px;display:flex;align-items:center;justify-content:center;font-size:14px;">💳</span>
                <div>
                  <div style="font-size:13px;font-weight:700;color:#0F172A;">Rent Payments</div>
                  <div style="font-size:11px;color:#64748B;">0% ACH & UPI transfers</div>
                </div>
              </div>
              <div style="display:flex;align-items:center;gap:10px;padding:6px 8px;border-radius:8px;">
                <span style="width:28px;height:28px;background:#ECFDF5;color:#059669;border-radius:6px;display:flex;align-items:center;justify-content:center;font-size:14px;">🛡️</span>
                <div>
                  <div style="font-size:13px;font-weight:700;color:#0F172A;">Deposit Shield</div>
                  <div style="font-size:11px;color:#64748B;">Zero-cash escrow security</div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div style="font-size:11px;font-weight:800;color:#94A3B8;letter-spacing:0.08em;text-transform:uppercase;margin-bottom:12px;">Tenant Tools</div>
            <div style="display:flex;flex-direction:column;gap:10px;">
              <div style="display:flex;align-items:center;gap:10px;padding:6px 8px;border-radius:8px;">
                <span style="width:28px;height:28px;background:#FAF5FF;color:#9333EA;border-radius:6px;display:flex;align-items:center;justify-content:center;font-size:14px;">📈</span>
                <div>
                  <div style="font-size:13px;font-weight:700;color:#0F172A;">Credit Booster</div>
                  <div style="font-size:11px;color:#64748B;">Direct bureau sync +45pts</div>
                </div>
              </div>
              <div style="display:flex;align-items:center;gap:10px;padding:6px 8px;border-radius:8px;">
                <span style="width:28px;height:28px;background:#FFFBEB;color:#D97706;border-radius:6px;display:flex;align-items:center;justify-content:center;font-size:14px;">📑</span>
                <div>
                  <div style="font-size:13px;font-weight:700;color:#0F172A;">Digital Leases</div>
                  <div style="font-size:11px;color:#64748B;">Fast compliant signatures</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style="padding-top:14px;border-top:1px solid #F1F5F9;display:flex;justify-content:space-between;align-items:center;">
          <span style="font-size:12px;color:#64748B;">Managing multiple properties?</span>
          <span style="font-size:12px;font-weight:700;color:#2563EB;cursor:pointer;">Explore Enterprise →</span>
        </div>
      </div>`;

    case 1: // Icon Feature Showcase (4-Tile Grid)
      return `<div style="width:100%;max-width:440px;background:#ffffff;border:1px solid #E2E8F0;border-radius:20px;box-shadow:0 16px 36px rgba(15,23,42,0.08);padding:22px;display:grid;grid-template-columns:1fr 1fr;gap:14px;">
        <div style="border:1px solid #F1F5F9;border-radius:14px;padding:16px;background:#FAFAFA;display:flex;flex-direction:column;gap:10px;cursor:pointer;transition:all 0.2s;" onmouseover="this.style.background='#fff';this.style.borderColor='#3B82F6';this.style.boxShadow='0 4px 12px rgba(59,130,246,0.1)'" onmouseout="this.style.background='#FAFAFA';this.style.borderColor='#F1F5F9';this.style.boxShadow='none'">
          <div style="width:38px;height:38px;border-radius:10px;background:#EFF6FF;color:#2563EB;display:flex;align-items:center;justify-content:center;font-size:18px;">💳</div>
          <div>
            <div style="font-size:14px;font-weight:700;color:#0F172A;margin-bottom:2px;">Rent Payments</div>
            <div style="font-size:11px;color:#64748B;line-height:1.4;">Instant automated transfers with 0% gateway fees.</div>
          </div>
          <span style="font-size:11px;font-weight:700;color:#2563EB;margin-top:auto;">Pay Now →</span>
        </div>
        <div style="border:1px solid #F1F5F9;border-radius:14px;padding:16px;background:#FAFAFA;display:flex;flex-direction:column;gap:10px;cursor:pointer;transition:all 0.2s;" onmouseover="this.style.background='#fff';this.style.borderColor='#10B981';this.style.boxShadow='0 4px 12px rgba(16,185,129,0.1)'" onmouseout="this.style.background='#FAFAFA';this.style.borderColor='#F1F5F9';this.style.boxShadow='none'">
          <div style="width:38px;height:38px;border-radius:10px;background:#ECFDF5;color:#059669;display:flex;align-items:center;justify-content:center;font-size:18px;">🛡️</div>
          <div>
            <div style="font-size:14px;font-weight:700;color:#0F172A;margin-bottom:2px;">Deposit Shield</div>
            <div style="font-size:11px;color:#64748B;line-height:1.4;">Zero upfront deposit with backed guarantee.</div>
          </div>
          <span style="font-size:11px;font-weight:700;color:#059669;margin-top:auto;">Protect →</span>
        </div>
        <div style="border:1px solid #F1F5F9;border-radius:14px;padding:16px;background:#FAFAFA;display:flex;flex-direction:column;gap:10px;cursor:pointer;transition:all 0.2s;" onmouseover="this.style.background='#fff';this.style.borderColor='#8B5CF6';this.style.boxShadow='0 4px 12px rgba(139,92,246,0.1)'" onmouseout="this.style.background='#FAFAFA';this.style.borderColor='#F1F5F9';this.style.boxShadow='none'">
          <div style="width:38px;height:38px;border-radius:10px;background:#F5F3FF;color:#7C3AED;display:flex;align-items:center;justify-content:center;font-size:18px;">📈</div>
          <div>
            <div style="font-size:14px;font-weight:700;color:#0F172A;margin-bottom:2px;">Credit Booster</div>
            <div style="font-size:11px;color:#64748B;line-height:1.4;">Automated Experian & Equifax monthly reporting.</div>
          </div>
          <span style="font-size:11px;font-weight:700;color:#7C3AED;margin-top:auto;">Boost Score →</span>
        </div>
        <div style="border:1px solid #F1F5F9;border-radius:14px;padding:16px;background:#FAFAFA;display:flex;flex-direction:column;gap:10px;cursor:pointer;transition:all 0.2s;" onmouseover="this.style.background='#fff';this.style.borderColor='#F59E0B';this.style.boxShadow='0 4px 12px rgba(245,158,11,0.1)'" onmouseout="this.style.background='#FAFAFA';this.style.borderColor='#F1F5F9';this.style.boxShadow='none'">
          <div style="width:38px;height:38px;border-radius:10px;background:#FFFBEB;color:#D97706;display:flex;align-items:center;justify-content:center;font-size:18px;">📑</div>
          <div>
            <div style="font-size:14px;font-weight:700;color:#0F172A;margin-bottom:2px;">Digital Leases</div>
            <div style="font-size:11px;color:#64748B;line-height:1.4;">State-law approved templates in under 3 minutes.</div>
          </div>
          <span style="font-size:11px;font-weight:700;color:#D97706;margin-top:auto;">Create Lease →</span>
        </div>
      </div>`;

    case 2: // Featured Promo Split
      return `<div style="width:100%;max-width:440px;background:#ffffff;border:1px solid #E2E8F0;border-radius:20px;box-shadow:0 16px 36px rgba(15,23,42,0.08);padding:22px;display:grid;grid-template-columns:1.1fr 1fr;gap:20px;align-items:stretch;">
        <div style="display:flex;flex-direction:column;justify-content:space-between;">
          <div>
            <div style="font-size:11px;font-weight:800;color:#94A3B8;letter-spacing:0.08em;text-transform:uppercase;margin-bottom:12px;">Core Navigation</div>
            <div style="display:flex;flex-direction:column;gap:12px;">
              <div style="display:flex;align-items:center;gap:8px;">
                <span style="font-size:13px;font-weight:700;color:#0F172A;">Tenant Screening</span>
                <span style="padding:2px 6px;background:#ECFDF5;color:#059669;border-radius:4px;font-size:10px;font-weight:800;">PASS</span>
              </div>
              <div style="font-size:13px;font-weight:700;color:#0F172A;">Maintenance Hub</div>
              <div style="font-size:13px;font-weight:700;color:#0F172A;">Auto Accounting</div>
              <div style="font-size:13px;font-weight:700;color:#0F172A;">Rent Escrow Vault</div>
            </div>
          </div>
          <div style="font-size:11px;color:#64748B;margin-top:16px;">Updated 2 hours ago</div>
        </div>
        <div style="background:linear-gradient(135deg, #0F172A 0%, #1E293B 100%);border-radius:14px;padding:18px;color:#fff;display:flex;flex-direction:column;justify-content:space-between;box-shadow:0 10px 20px rgba(15,23,42,0.25);">
          <div>
            <span style="display:inline-block;padding:4px 8px;background:rgba(239,68,68,0.2);border:1px solid rgba(239,68,68,0.4);color:#FCA5A5;border-radius:6px;font-size:10px;font-weight:800;letter-spacing:0.08em;margin-bottom:10px;">🔥 NEW V2.4</span>
            <div style="font-size:15px;font-weight:800;margin-bottom:6px;line-height:1.2;">Smart Auto-Pay</div>
            <div style="font-size:11px;color:#94A3B8;line-height:1.4;">Zero-touch rent clearing with up to ₹2,500 annual cashback.</div>
          </div>
          <button style="margin-top:14px;width:100%;padding:9px;background:#3B82F6;color:#fff;border:none;border-radius:8px;font-size:12px;font-weight:700;cursor:pointer;box-shadow:0 4px 10px rgba(59,130,246,0.4);">Activate Auto-Pay</button>
        </div>
      </div>`;

    case 3: // Quick Search & Shortcuts (Command Bar Mega)
      return `<div style="width:100%;max-width:440px;background:#ffffff;border:1px solid #E2E8F0;border-radius:20px;box-shadow:0 16px 36px rgba(15,23,42,0.08);padding:20px;display:flex;flex-direction:column;gap:16px;">
        <div style="display:flex;align-items:center;background:#F8FAFC;border:1px solid #E2E8F0;border-radius:12px;padding:10px 14px;gap:10px;">
          <span style="font-size:14px;color:#64748B;">🔍</span>
          <input type="text" placeholder="Type a command or search..." readonly value="Search properties, tenants, leases..." style="flex:1;background:transparent;border:none;outline:none;font-size:13px;color:#0F172A;font-weight:500;">
          <span style="padding:2px 6px;background:#E2E8F0;border-radius:6px;font-size:11px;font-family:monospace;font-weight:700;color:#475569;">⌘K</span>
        </div>
        <div>
          <div style="font-size:11px;font-weight:800;color:#94A3B8;letter-spacing:0.08em;text-transform:uppercase;margin-bottom:8px;">Recent Searches</div>
          <div style="display:flex;flex-wrap:wrap;gap:8px;">
            <span style="padding:4px 10px;background:#F1F5F9;border-radius:8px;font-size:11px;font-weight:600;color:#334155;">🏢 Downtown Lofts</span>
            <span style="padding:4px 10px;background:#F1F5F9;border-radius:8px;font-size:11px;font-weight:600;color:#334155;">⚡ Auto-Debit Active</span>
            <span style="padding:4px 10px;background:#F1F5F9;border-radius:8px;font-size:11px;font-weight:600;color:#334155;">📄 Lease V2 Renewal</span>
          </div>
        </div>
        <div style="border-top:1px solid #F1F5F9;padding-top:12px;display:flex;flex-direction:column;gap:8px;">
          <div style="display:flex;justify-content:space-between;align-items:center;padding:6px 8px;border-radius:8px;background:#FAFAFA;">
            <span style="font-size:12px;font-weight:600;color:#0F172A;">Pay Monthly Rent</span>
            <span style="padding:2px 6px;background:#E2E8F0;border-radius:4px;font-size:10px;font-family:monospace;font-weight:700;">P</span>
          </div>
          <div style="display:flex;justify-content:space-between;align-items:center;padding:6px 8px;border-radius:8px;">
            <span style="font-size:12px;font-weight:600;color:#0F172A;">Transfer Security Deposit</span>
            <span style="padding:2px 6px;background:#E2E8F0;border-radius:4px;font-size:10px;font-family:monospace;font-weight:700;">T</span>
          </div>
          <div style="display:flex;justify-content:space-between;align-items:center;padding:6px 8px;border-radius:8px;">
            <span style="font-size:12px;font-weight:600;color:#0F172A;">Report Maintenance Issue</span>
            <span style="padding:2px 6px;background:#E2E8F0;border-radius:4px;font-size:10px;font-family:monospace;font-weight:700;">M</span>
          </div>
        </div>
      </div>`;

    case 4: // Segmented Role Tabs
      return `<div style="width:100%;max-width:440px;background:#ffffff;border:1px solid #E2E8F0;border-radius:20px;box-shadow:0 16px 36px rgba(15,23,42,0.08);padding:22px;display:flex;flex-direction:column;gap:18px;">
        <div style="display:flex;background:#F1F5F9;padding:4px;border-radius:12px;gap:4px;">
          <button style="flex:1;padding:8px;background:#ffffff;border:none;border-radius:8px;font-size:12px;font-weight:700;color:#0F172A;box-shadow:0 2px 4px rgba(0,0,0,0.04);cursor:pointer;">Tenants</button>
          <button style="flex:1;padding:8px;background:transparent;border:none;border-radius:8px;font-size:12px;font-weight:600;color:#64748B;cursor:pointer;">Landlords</button>
          <button style="flex:1;padding:8px;background:transparent;border:none;border-radius:8px;font-size:12px;font-weight:600;color:#64748B;cursor:pointer;">Agencies</button>
        </div>
        <div style="display:flex;flex-direction:column;gap:12px;">
          <div style="display:flex;align-items:center;justify-content:space-between;padding:12px 14px;border:1px solid #F1F5F9;border-radius:12px;background:#FAFAFA;">
            <div style="display:flex;align-items:center;gap:12px;">
              <span style="width:32px;height:32px;border-radius:8px;background:#EFF6FF;color:#2563EB;display:flex;align-items:center;justify-content:center;font-size:16px;">💸</span>
              <div>
                <div style="font-size:13px;font-weight:700;color:#0F172A;">Monthly Rent: $1,850</div>
                <div style="font-size:11px;color:#059669;font-weight:600;">Due in 4 days (Oct 15)</div>
              </div>
            </div>
            <button style="padding:6px 12px;background:#0F172A;color:#fff;border:none;border-radius:6px;font-size:11px;font-weight:700;cursor:pointer;">Pay Now</button>
          </div>
          <div style="display:flex;align-items:center;justify-content:space-between;padding:12px 14px;border:1px solid #F1F5F9;border-radius:12px;">
            <div style="display:flex;align-items:center;gap:12px;">
              <span style="width:32px;height:32px;border-radius:8px;background:#ECFDF5;color:#059669;display:flex;align-items:center;justify-content:center;font-size:16px;">🔒</span>
              <div>
                <div style="font-size:13px;font-weight:700;color:#0F172A;">Escrow Deposit Balance</div>
                <div style="font-size:11px;color:#64748B;">$2,400 Held with interest</div>
              </div>
            </div>
            <span style="font-size:12px;font-weight:700;color:#2563EB;cursor:pointer;">View →</span>
          </div>
        </div>
      </div>`;

    case 5: // Dark Glass Command Center
      return `<div style="width:100%;max-width:440px;background:#09090B;border:1px solid #27272A;border-radius:20px;box-shadow:0 24px 48px rgba(0,0,0,0.5);padding:22px;color:#F43F5E;display:flex;flex-direction:column;gap:16px;">
        <div style="display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid #18181B;padding-bottom:14px;">
          <div style="display:flex;align-items:center;gap:8px;">
            <span style="width:8px;height:8px;border-radius:50%;background:#10B981;box-shadow:0 0 10px #10B981;"></span>
            <span style="font-size:12px;font-weight:700;color:#F4F4F5;">RentenPe Network Online</span>
          </div>
          <span style="font-size:11px;font-family:monospace;color:#71717A;">v3.14-PROD</span>
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">
          <div style="background:#18181B;border:1px solid #27272A;border-radius:12px;padding:12px;">
            <div style="font-size:11px;color:#A1A1AA;margin-bottom:4px;">Automated Webhooks</div>
            <div style="font-size:14px;font-weight:800;color:#38BDF8;">12 Active</div>
            <div style="font-size:10px;color:#71717A;margin-top:4px;">Zero failures last 30d</div>
          </div>
          <div style="background:#18181B;border:1px solid #27272A;border-radius:12px;padding:12px;">
            <div style="font-size:11px;color:#A1A1AA;margin-bottom:4px;">Escrow Liquidity</div>
            <div style="font-size:14px;font-weight:800;color:#34D399;">$4.2M Locked</div>
            <div style="font-size:10px;color:#71717A;margin-top:4px;">Multi-sig verified</div>
          </div>
        </div>
        <div style="display:flex;justify-content:space-between;align-items:center;font-size:11px;color:#71717A;padding-top:6px;">
          <span>Latency: <strong style="color:#A1A1AA;">12ms</strong></span>
          <span style="color:#60A5FA;cursor:pointer;font-weight:600;">Open Terminal Console →</span>
        </div>
      </div>`;

    case 6: // Cascading Flyout Submenu
      return `<div style="width:100%;max-width:440px;background:#ffffff;border:1px solid #E2E8F0;border-radius:20px;box-shadow:0 16px 36px rgba(15,23,42,0.08);padding:20px;display:flex;flex-direction:column;gap:12px;">
        <div style="display:flex;align-items:center;justify-content:space-between;padding:10px 14px;background:#F8FAFC;border-radius:12px;">
          <div style="display:flex;align-items:center;gap:10px;"><span style="font-size:16px;">🏢</span><span style="font-size:13px;font-weight:800;color:#0F172A;">Commercial Real Estate</span></div>
          <span style="font-size:12px;color:#2563EB;font-weight:700;">Submenu ›</span>
        </div>
        <div style="padding-left:16px;border-left:2px solid #2563EB;margin-left:14px;display:flex;flex-direction:column;gap:8px;">
          <div style="font-size:12px;font-weight:700;color:#0F172A;cursor:pointer;">• Co-Working Desks (Koramanagala)</div>
          <div style="font-size:12px;font-weight:700;color:#0F172A;cursor:pointer;">• Retail Shop Leases (Indiranagar)</div>
          <div style="font-size:12px;font-weight:700;color:#0F172A;cursor:pointer;">• Warehouse Storage (Whitefield)</div>
        </div>
      </div>`;

    case 7: // Floating Island Card
      return `<div style="width:100%;max-width:440px;background:rgba(255,255,255,0.9);backdrop-filter:blur(20px);border:1px solid #E2E8F0;border-radius:24px;padding:22px;box-shadow:0 20px 40px rgba(15,23,42,0.1);display:flex;flex-direction:column;gap:14px;">
        <div style="display:flex;justify-content:space-between;align-items:center;"><span style="font-size:14px;font-weight:800;color:#0F172A;">⚡ Quick Operations Island</span><span style="padding:2px 8px;background:#ECFDF5;color:#059669;border-radius:6px;font-size:10px;font-weight:800;">LIVE</span></div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
          <button style="padding:12px;background:#0F172A;color:#fff;border:none;border-radius:12px;font-size:12px;font-weight:700;cursor:pointer;">Sign Agreement</button>
          <button style="padding:12px;background:#EFF6FF;color:#2563EB;border:none;border-radius:12px;font-size:12px;font-weight:700;cursor:pointer;">Deposit Escrow</button>
        </div>
      </div>`;

    case 8: // Full-Width Command Bar
      return `<div style="width:100%;max-width:440px;background:#ffffff;border:1.5px solid #0F172A;border-radius:18px;padding:16px 20px;display:flex;align-items:center;justify-content:space-between;box-shadow:0 10px 25px rgba(0,0,0,0.06);">
        <div style="display:flex;align-items:center;gap:12px;"><span style="font-size:18px;">⌘</span><div><div style="font-size:13px;font-weight:800;color:#0F172A;">Terminal Command Action</div><div style="font-size:10px;color:#64748B;">Press ↵ to execute batch rent disbursement</div></div></div>
        <span style="padding:4px 10px;background:#0F172A;color:#fff;border-radius:8px;font-size:11px;font-weight:700;">RUN</span>
      </div>`;

    case 9: // Dark Frosted Precision Mega Sheet
      return `<div style="width:100%;max-width:440px;background:#09090B;border:1px solid #27272A;border-radius:22px;padding:22px;color:#fff;box-shadow:0 24px 48px rgba(0,0,0,0.6);display:flex;flex-direction:column;gap:14px;">
        <div style="display:flex;justify-content:space-between;align-items:center;"><span style="font-size:13px;font-weight:800;color:#F4F4F5;">VIP Portfolio Mega View</span><span style="font-size:11px;color:#38BDF8;font-weight:700;">8 Units Managed</span></div>
        <div style="padding:12px;background:#18181B;border-radius:12px;display:flex;justify-content:space-between;align-items:center;"><span style="font-size:12px;color:#A1A1AA;">Total Monthly Rental Inflow</span><span style="font-size:14px;font-weight:900;color:#34D399;">₹2,48,000</span></div>
        <button style="width:100%;padding:10px;background:#27272A;color:#fff;border:none;border-radius:10px;font-size:11px;font-weight:700;cursor:pointer;">Download Consolidated Tax Statement →</button>
      </div>`;

    case 10: // Model K: Apple Porcelain Multi-Tier Grid (Light Theme)
      return `<div style="width:100%;max-width:440px;background:#FFFFFF;border:1px solid #E2E8F0;border-radius:26px;box-shadow:0 16px 36px rgba(15,23,42,0.06);padding:24px;display:flex;flex-direction:column;gap:16px;">
        <div style="display:flex;align-items:center;justify-content:space-between;">
          <div style="display:flex;align-items:center;gap:10px;">
            <div style="width:36px;height:36px;border-radius:12px;background:#ECFDF5;color:#059669;display:flex;align-items:center;justify-content:center;font-size:18px;">🍏</div>
            <div>
              <div style="font-size:14px;font-weight:800;color:#0F172A;">RentenPe Apple Mega Hub</div>
              <div style="font-size:10px;color:#64748B;">Unified PropTech Ecosystem</div>
            </div>
          </div>
          <span style="padding:4px 8px;background:#ECFDF5;color:#059669;border-radius:99px;font-size:10px;font-weight:800;">PORCELAIN 2.0</span>
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">
          <div style="padding:14px;background:#F8FAFC;border:1px solid #F1F5F9;border-radius:16px;">
            <div style="font-size:12px;font-weight:800;color:#0F172A;margin-bottom:2px;">Deposit Escrow</div>
            <div style="font-size:10px;color:#64748B;">Instant 100% Protection</div>
          </div>
          <div style="padding:14px;background:#F8FAFC;border:1px solid #F1F5F9;border-radius:16px;">
            <div style="font-size:12px;font-weight:800;color:#0F172A;margin-bottom:2px;">Digital Leases</div>
            <div style="font-size:10px;color:#64748B;">Government e-Stamp Hash</div>
          </div>
        </div>
      </div>`;

    case 11: // Model L: CRED Monex Titanium Mega Command Sheet (Dark Theme)
    default:
      return `<div style="width:100%;max-width:440px;background:#09090B;border:1px solid rgba(204,255,0,0.3);border-radius:26px;box-shadow:0 24px 48px rgba(0,0,0,0.7);padding:24px;color:#FFFFFF;display:flex;flex-direction:column;gap:16px;">
        <div style="display:flex;justify-content:space-between;align-items:center;">
          <span style="font-size:11px;font-weight:900;letter-spacing:0.1em;color:#CCFF00;">TITANIUM COMMAND MATRIX</span>
          <span style="padding:2px 8px;background:rgba(204,255,0,0.12);color:#CCFF00;border-radius:4px;font-size:9px;font-weight:900;">⚡ VIP SYNC</span>
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
          <div style="padding:14px;background:#18181B;border:1px solid #27272A;border-radius:14px;">
            <div style="font-size:10px;color:#71717A;">DISBURSEMENT</div>
            <div style="font-size:14px;font-weight:900;color:#CCFF00;margin-top:2px;">0% ACH Direct</div>
          </div>
          <div style="padding:14px;background:#18181B;border:1px solid #27272A;border-radius:14px;">
            <div style="font-size:10px;color:#71717A;">TELEMETRY</div>
            <div style="font-size:14px;font-weight:900;color:#38BDF8;margin-top:2px;">Live 12 Nodes</div>
          </div>
        </div>
        <button style="width:100%;padding:12px;background:#CCFF00;color:#09090B;border:none;border-radius:14px;font-size:12px;font-weight:900;cursor:pointer;">
          Access Titanium Control Deck ≫
        </button>
      </div>`;
  }
}

// ============================================================================
// UNIVERSAL CATEGORY VARIANT BUILDER
// ============================================================================

const variantRenderers = require('./variant-renderers.js');

function renderCategoryVariant(cat, fam, icon, slug, variantIndex) {
  if (slug === 'mega-menu') return renderMegaMenu(variantIndex);
  return variantRenderers.renderCategoryVariant(cat, fam, icon, slug, variantIndex);
}


module.exports = {
  SPECIFIC_FAMILIES,
  CATEGORY_DEFAULT_FAMILIES,
  getFamiliesForSlug,
  renderMegaMenu,
  renderCategoryVariant
};
