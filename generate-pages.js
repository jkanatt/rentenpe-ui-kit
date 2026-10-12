#!/usr/bin/env node
// Generate all missing component pages for Rentenpe UI Kit
const fs = require('fs');
const path = require('path');

const PAGES_DIR = path.join(__dirname, 'pages');

// PayDash exact component data for cross-reference
const PAYDASH_COMPONENTS = {
  'Input.tsx': { styles: 'padding:12px 16px, border:1px solid var(--color-border-outer), borderRadius:var(--radius-md), background:var(--color-surface)' },
  'Select.tsx': { styles: 'CustomSelect: border:1px solid #CBD5E1, borderRadius:8, boxShadow:0 1px 2px rgba(0,0,0,0.05); BrutalistSelect: border:2px solid #000, borderRadius:0, boxShadow:2px 2px 0px #000' },
  'Toggle.tsx': { styles: 'checked:var(--color-primary), unchecked:rgba(0,0,0,0.06), dotShadow:0 2px 4px rgba(0,0,0,0.1)' },
  'ConfirmDialog.tsx': { styles: 'borderRadius:16, padding:28px 32px, boxShadow:0 20px 60px rgba(0,0,0,0.15)' },
  'DataTable.tsx': { styles: 'searchable, selectable, sortable, paginated, exportable, bulk actions' },
  'DrawerPanel.tsx': { styles: 'borderLeft:4px solid #000, header:bg-black, footer:borderTop 4px solid #000' },
  'ModalProvider.tsx': { styles: 'boxShadow:3D glassmorphic, header:bg-black, innerCard:#FAFAFA, footer:#F8FAFC' },
  'AIPanel.tsx': { styles: 'right:20px floating, borderRadius:16, gradient icon, chat bubbles' },
  'GlobalUI.tsx': { styles: 'Toast:bg-black borderRadius:0, CommandPalette:blur backdrop' },
  'FloatingAI.tsx': { styles: 'Fixed bottom-right, gradient background, expand/collapse' },
  'ActivityFeed.tsx': { styles: 'Timeline with avatars and relative timestamps' },
  'FileDropZone.tsx': { styles: 'Drag and drop with OCR scanning' },
  'DocumentDrawer.tsx': { styles: 'PDF viewer drawer with metadata sidebar' },
};

// All page definitions with category, title, description, and 3 model variants
const ALL_PAGES = {
  // ═══ FOUNDATIONS ═══
  'typography': { cat: 'Foundations', title: 'Typography', desc: 'Type scale, font families, and text styles.', icon: '🔤', families: ['Type Scale', 'Font Weights', 'Text Colors', 'Line Heights'] },
  'colors': { cat: 'Foundations', title: 'Colors & Tokens', desc: 'Complete color system with semantic tokens.', icon: '🎨', families: ['Primary Palette', 'Semantic Colors', 'Surface Colors', 'Gradient Presets', 'Shadow Tokens', 'Opacity Levels'] },
  'spacing': { cat: 'Foundations', title: 'Spacing & Grid', desc: 'Spacing scale and grid system.', icon: '📐', families: ['Spacing Scale', 'Grid System', 'Breakpoints'] },
  'dividers': { cat: 'Foundations', title: 'Dividers', desc: 'Horizontal and vertical separators.', icon: '➖', families: ['Solid Divider', 'Dashed Divider', 'Labeled Divider'] },
  'icons': { cat: 'Foundations', title: 'Icons & Symbols', desc: 'Icon library and symbol set.', icon: '✨', families: ['Action Icons', 'Status Icons', 'Navigation Icons'] },
  'containers': { cat: 'Foundations', title: 'Containers', desc: 'Layout containers and wrappers.', icon: '📦', families: ['Standard Card', 'Glass Card', 'Elevated Card', 'Bordered Section', 'Inset Panel'] },

  // ═══ ACTIONS ═══
  'links': { cat: 'Actions', title: 'Text & Link Actions', desc: 'Inline text links and action text.', icon: '🔗', families: ['Standard Link', 'Action Link', 'Destructive Link'] },
  'fab': { cat: 'Actions', title: 'Floating Actions', desc: 'Floating action buttons.', icon: '⊕', families: ['Standard FAB', 'Extended FAB', 'Mini FAB'] },

  // ═══ INPUTS (sub-pages, main page text-inputs.html already exists) ═══
  'search-inputs': { cat: 'Inputs', title: 'Search Input', desc: 'Search fields with suggestions.', icon: '🔍', families: ['Standard Search', 'Expandable Search', 'Search with Filters'], paydash: 'Input.tsx' },
  'email-inputs': { cat: 'Inputs', title: 'Email Input', desc: 'Email fields with validation.', icon: '📧', families: ['Standard Email', 'Email with Domain', 'Multi Email'], paydash: 'Input.tsx' },
  'phone-inputs': { cat: 'Inputs', title: 'Phone Input', desc: 'Phone number fields with country code.', icon: '📱', families: ['Standard Phone', 'With Country Picker', 'Split Phone'], paydash: 'Input.tsx' },
  'password-inputs': { cat: 'Inputs', title: 'Password Input', desc: 'Password fields with strength meter.', icon: '🔒', families: ['Standard Password', 'With Strength Meter', 'With Requirements'], paydash: 'Input.tsx' },
  'number-inputs': { cat: 'Inputs', title: 'Number Input', desc: 'Number fields with steppers.', icon: '🔢', families: ['Standard Number', 'With Stepper', 'Quantity Selector'], paydash: 'Input.tsx' },
  'currency-inputs': { cat: 'Inputs', title: 'Currency Input', desc: 'Currency amount fields with symbol.', icon: '💰', families: ['Standard Currency', 'Multi Currency', 'Amount Range'], paydash: 'Input.tsx' },
  'textarea': { cat: 'Inputs', title: 'Textarea', desc: 'Multi-line text areas.', icon: '📄', families: ['Standard Textarea', 'Auto Resize', 'With Character Count'], paydash: 'Input.tsx' },
  'date-inputs': { cat: 'Inputs', title: 'Date Field', desc: 'Date picker inputs.', icon: '📅', families: ['Standard Date', 'Date Range', 'Date with Time'] },
  'otp-inputs': { cat: 'Inputs', title: 'OTP / PIN', desc: 'One-time password and PIN entry.', icon: '🔑', families: ['4 Digit OTP', '6 Digit OTP', 'Alphanumeric Code'] },
  'masked-inputs': { cat: 'Inputs', title: 'Masked Input', desc: 'Inputs with format masks.', icon: '🎭', families: ['Card Number Mask', 'SSN Mask', 'Custom Pattern'] },
  'file-upload': { cat: 'Inputs', title: 'File Upload', desc: 'File upload and drag-drop zones.', icon: '📤', families: ['Drop Zone', 'Button Upload', 'Multi File'], paydash: 'FileDropZone.tsx' },
  'autocomplete': { cat: 'Inputs', title: 'Autocomplete', desc: 'Type-ahead suggestion fields.', icon: '💡', families: ['Standard Autocomplete', 'With Categories', 'Multi Value'] },
  'time-picker': { cat: 'Inputs', title: 'Time Picker', desc: 'Time selection controls.', icon: '🕐', families: ['Standard Time', 'Time Range', 'Duration Picker'] },
  'color-picker': { cat: 'Inputs', title: 'Color Picker', desc: 'Color selection widgets.', icon: '🌈', families: ['Swatch Grid', 'Spectrum Picker', 'Hex Input'] },
  'star-rating': { cat: 'Inputs', title: 'Star Rating', desc: 'Star-based rating input.', icon: '⭐', families: ['5 Star Rating', 'Emoji Rating', 'Slider Rating'] },
  'tags-input': { cat: 'Inputs', title: 'Tags Input', desc: 'Tag creation and management.', icon: '🏷️', families: ['Standard Tags', 'Autocomplete Tags', 'Removable Tags'] },
  'rich-text': { cat: 'Inputs', title: 'Rich Text Editor', desc: 'Rich text editing toolbar.', icon: '📝', families: ['Basic Editor', 'Full Toolbar', 'Markdown Editor'] },
  'signature-pad': { cat: 'Inputs', title: 'Signature Pad', desc: 'Digital signature capture.', icon: '✍️', families: ['Standard Pad', 'Typed Signature', 'Upload Signature'] },
  'form-fields': { cat: 'Inputs', title: 'Form Fields', desc: 'Complete form field wrappers.', icon: '📋', families: ['Stacked Field', 'Horizontal Field', 'Inline Field'] },
  'inline-edit': { cat: 'Inputs', title: 'Inline Edit', desc: 'Click-to-edit inline fields.', icon: '✏️', families: ['Text Inline Edit', 'Select Inline Edit', 'Multi Line Edit'] },

  // ═══ SELECTION ═══
  'checkbox': { cat: 'Selection', title: 'Checkbox', desc: 'Single and group checkboxes.', icon: '☑️', families: ['Standard Checkbox', 'Indeterminate', 'Checkbox Group'] },
  'radio': { cat: 'Selection', title: 'Radio Group', desc: 'Exclusive selection controls.', icon: '🔘', families: ['Standard Radio', 'Card Radio', 'Button Radio'] },
  'toggle': { cat: 'Selection', title: 'Toggle / Switch', desc: 'On/off binary controls.', icon: '🔀', families: ['Standard Toggle', 'With Label', 'Grouped Toggles'], paydash: 'Toggle.tsx' },
  'slider': { cat: 'Selection', title: 'Slider / Range', desc: 'Value range selectors.', icon: '🎚️', families: ['Standard Slider', 'Range Slider', 'Step Slider'] },
  'adornments': { cat: 'Selection', title: 'Input Adornments', desc: 'Input prefix/suffix decorations.', icon: '🎀', families: ['Icon Adornment', 'Text Adornment', 'Action Adornment'] },

  // ═══ DROPDOWNS ═══
  'select': { cat: 'Dropdowns', title: 'Standard Select', desc: 'Single value dropdown.', icon: '📋', families: ['Standard Select', 'With Icons', 'Grouped Options'], paydash: 'Select.tsx (CustomSelect)' },
  'searchable-select': { cat: 'Dropdowns', title: 'Searchable Select', desc: 'Filterable dropdown.', icon: '🔎', families: ['Standard Searchable', 'With Create', 'Async Search'], paydash: 'Select.tsx' },
  'multi-select': { cat: 'Dropdowns', title: 'Multi Select', desc: 'Multiple value selection.', icon: '☑️', families: ['Checkbox Multi', 'Chip Multi', 'Tree Multi'] },
  'property-selector': { cat: 'Dropdowns', title: 'Property Selector', desc: 'Property-specific selector.', icon: '🏠', families: ['Standard Property', 'With Preview', 'Map Selector'] },
  'filter-dropdown': { cat: 'Dropdowns', title: 'Filter Dropdown', desc: 'Preset filter menus.', icon: '🔻', families: ['Standard Filter', 'Multi Filter', 'Date Filter'] },
  'sort-dropdown': { cat: 'Dropdowns', title: 'Sort Dropdown', desc: 'Sort order menus.', icon: '↕️', families: ['Standard Sort', 'With Direction', 'Multi Sort'] },

  // ═══ NAVIGATION ═══
  'sidebar': { cat: 'Navigation', title: 'Side Navigation', desc: 'Collapsible sidebar with groups.', icon: '📂', families: ['Full Sidebar', 'Collapsed Sidebar', 'Mobile Sidebar'] },
  'topbar': { cat: 'Navigation', title: 'Top Bar / Header', desc: 'App header with actions.', icon: '📌', families: ['Standard Header', 'With Search', 'Breadcrumb Header'] },
  'breadcrumbs': { cat: 'Navigation', title: 'Breadcrumbs', desc: 'Path navigation trail.', icon: '🥖', families: ['Standard Crumbs', 'With Icons', 'Collapsed Crumbs'] },
  'tabs': { cat: 'Navigation', title: 'Page Tabs', desc: 'Content switching tabs.', icon: '📑', families: ['Standard Tabs', 'Underline Tabs', 'Pill Tabs'] },
  'segmented': { cat: 'Navigation', title: 'Segmented Control', desc: 'Toggle between views.', icon: '⊞', families: ['Standard Segment', 'Icon Segment', 'Full Width'] },
  'tabbar': { cat: 'Navigation', title: 'Tab Bar Nav', desc: 'Mobile bottom navigation.', icon: '📱', families: ['Standard Tab Bar', 'With Badge', 'Floating Tab Bar'] },
  'pagination': { cat: 'Navigation', title: 'Pagination', desc: 'Page number navigation.', icon: '📄', families: ['Standard Pagination', 'Simple Prev/Next', 'Load More'] },
  'stepper': { cat: 'Navigation', title: 'Stepper', desc: 'Multi-step progress.', icon: '🪜', families: ['Horizontal Stepper', 'Vertical Stepper', 'Dot Stepper'] },
  'back-next': { cat: 'Navigation', title: 'Back / Next', desc: 'Sequential navigation.', icon: '↔️', families: ['Standard Nav', 'With Preview', 'Wizard Nav'] },
  'header-utils': { cat: 'Navigation', title: 'Header Utilities', desc: 'Header action buttons.', icon: '🔔', families: ['Notification Bell', 'Search Toggle', 'User Menu'] },
  'lifecycle-nav': { cat: 'Navigation', title: 'Lifecycle Nav', desc: 'Process lifecycle navigation.', icon: '🔄', families: ['Standard Lifecycle', 'Vertical Lifecycle', 'Interactive'] },
  'footer': { cat: 'Navigation', title: 'Footer', desc: 'Page and app footers.', icon: '📎', families: ['Standard Footer', 'Minimal Footer', 'With Links'] },
  'quick-actions': { cat: 'Navigation', title: 'Quick Actions', desc: 'Speed dial and shortcuts.', icon: '⚡', families: ['Speed Dial', 'Action Grid', 'Shortcut Bar'] },

  // ═══ MENUS ═══
  'context-menu': { cat: 'Menus', title: 'Context Menu', desc: 'Right-click context menus.', icon: '⋮', families: ['Standard Context', 'With Icons', 'Nested Context'] },
  'profile-menu': { cat: 'Menus', title: 'Profile Menu', desc: 'User profile dropdown.', icon: '👤', families: ['Standard Profile', 'With Avatar', 'Extended Profile'] },
  'command-palette': { cat: 'Menus', title: 'Command Palette', desc: 'Keyboard-first command search.', icon: '⌘', families: ['Standard Palette', 'With Categories', 'AI Enhanced'], paydash: 'GlobalUI.tsx (CommandPalette)' },
  'mega-menu': { cat: 'Menus', title: 'Mega Menu', desc: 'Large navigation menus.', icon: '📊', families: ['Column Mega', 'With Icons', 'With Featured'] },
  'nested-menu': { cat: 'Menus', title: 'Nested Menu', desc: 'Multi-level submenus.', icon: '📂', families: ['Standard Nested', 'Hover Expand', 'Accordion'] },
  'action-sheet': { cat: 'Menus', title: 'Action Sheet', desc: 'iOS-style action sheets.', icon: '📱', families: ['Standard Actions', 'With Icons', 'Destructive Actions'] },

  // ═══ DATA DISPLAY ═══
  'badges': { cat: 'Data Display', title: 'Status Badges', desc: 'Status indicator badges.', icon: '🏅', families: ['Standard Badge', 'Dot Badge', 'Outlined Badge'] },
  'metadata-chips': { cat: 'Data Display', title: 'Metadata Chips', desc: 'Key-value metadata chips.', icon: '🏷️', families: ['Standard Chip', 'With Icon', 'Dismissible'] },
  'filter-chips': { cat: 'Data Display', title: 'Filter Chips', desc: 'Active filter indicators.', icon: '🔖', families: ['Standard Filter', 'Toggle Filter', 'Group Filter'] },
  'action-chips': { cat: 'Data Display', title: 'Action Chips', desc: 'Actionable chip buttons.', icon: '⚡', families: ['Standard Action', 'With Icon', 'Outlined Action'] },
  'count-badge': { cat: 'Data Display', title: 'Count Badge', desc: 'Numeric count indicators.', icon: '🔴', families: ['Standard Count', 'Dot Only', 'Animated Count'] },
  'dot-indicator': { cat: 'Data Display', title: 'Dot Indicator', desc: 'Status dot indicators.', icon: '●', families: ['Color Dot', 'Pulsing Dot', 'Labeled Dot'] },
  'avatars': { cat: 'Data Display', title: 'Avatars', desc: 'User avatar components.', icon: '👤', families: ['Image Avatar', 'Initials Avatar', 'Avatar Group'] },
  'verified-tag': { cat: 'Data Display', title: 'Verified Tags', desc: 'Verification status indicators.', icon: '✅', families: ['Verified Badge', 'Trust Seal', 'Certification'] },

  // ═══ LISTS ═══
  'list-rows': { cat: 'Lists', title: 'Standard List', desc: 'Standard list rows.', icon: '📋', families: ['Simple List', 'With Metadata', 'With Actions'] },
  'compact-list': { cat: 'Lists', title: 'Compact List', desc: 'Dense list rows.', icon: '📑', families: ['Standard Compact', 'With Checkbox', 'With Avatar'] },
  'timeline': { cat: 'Lists', title: 'Activity Timeline', desc: 'Chronological event timeline.', icon: '📅', families: ['Standard Timeline', 'Grouped Timeline', 'Interactive Timeline'], paydash: 'ActivityFeed.tsx' },
  'grouped-list': { cat: 'Lists', title: 'Grouped List', desc: 'Categorized list sections.', icon: '📂', families: ['Standard Grouped', 'Collapsible', 'Sticky Headers'] },
  'swipeable-list': { cat: 'Lists', title: 'Swipeable List', desc: 'Swipe-to-reveal actions.', icon: '👆', families: ['Swipe Delete', 'Swipe Actions', 'Swipe Archive'] },
  'expandable-list': { cat: 'Lists', title: 'Expandable List', desc: 'Accordion list items.', icon: '📖', families: ['Standard Expand', 'With Preview', 'Multi Expand'] },

  // ═══ TABLES ═══
  'data-table': { cat: 'Tables', title: 'Standard Table', desc: 'Full-featured data table.', icon: '📊', families: ['Standard Table', 'Sortable Table', 'Selectable Table'], paydash: 'DataTable.tsx' },
  'compact-table': { cat: 'Tables', title: 'Compact Table', desc: 'Dense data table.', icon: '📉', families: ['Standard Compact', 'With Inline Edit', 'Minimal'] },
  'responsive-table': { cat: 'Tables', title: 'Responsive Table', desc: 'Mobile-friendly tables.', icon: '📱', families: ['Card Stack', 'Horizontal Scroll', 'Priority Columns'] },
  'table-toolbar': { cat: 'Tables', title: 'Table Toolbar', desc: 'Table action toolbar.', icon: '🔧', families: ['Standard Toolbar', 'With Bulk Actions', 'Filter Toolbar'] },
  'expandable-row': { cat: 'Tables', title: 'Expandable Row', desc: 'Table rows with detail expansion.', icon: '📖', families: ['Standard Expand', 'With Sub Table', 'Accordion Row'] },
  'editable-table': { cat: 'Tables', title: 'Editable Table', desc: 'Inline-editable table cells.', icon: '✏️', families: ['Cell Edit', 'Row Edit', 'Full Edit Mode'] },

  // ═══ CARDS (sub-pages, main exists) ═══
  'entity-cards': { cat: 'Cards', title: 'Entity Cards', desc: 'Property and entity display cards.', icon: '🏢', families: ['Standard Entity', 'With Status', 'Compact Entity'] },
  'report-cards': { cat: 'Cards', title: 'Report Cards', desc: 'Report summary cards.', icon: '📋', families: ['Standard Report', 'With Chart', 'Download Report'] },
  'service-cards': { cat: 'Cards', title: 'Service Cards', desc: 'Service feature cards.', icon: '🛎️', families: ['Standard Service', 'With CTA', 'Comparison'] },
  'membership-cards': { cat: 'Cards', title: 'Membership', desc: 'Membership tier display.', icon: '💳', families: ['Standard Tier', 'Premium Tier', 'Comparison Grid'] },
  'info-cards': { cat: 'Cards', title: 'Information', desc: 'Informational display cards.', icon: 'ℹ️', families: ['Standard Info', 'With Icon', 'Dismissible Info'] },
  'reward-cards': { cat: 'Cards', title: 'Reward Cards', desc: 'Reward and offer cards.', icon: '🎁', families: ['Standard Reward', 'Scratch Card', 'Coupon Card'] },
  'rm-cards': { cat: 'Cards', title: 'RM Contact', desc: 'Relationship manager cards.', icon: '🤝', families: ['Standard RM', 'With Schedule', 'Chat RM'] },
  'profile-cards': { cat: 'Cards', title: 'Profile Cards', desc: 'User profile cards.', icon: '👤', families: ['Standard Profile', 'Compact Profile', 'Team Card'] },
  'pricing-cards': { cat: 'Cards', title: 'Pricing Cards', desc: 'Pricing plan cards.', icon: '💲', families: ['Standard Pricing', 'Highlighted Plan', 'Comparison'] },
  'comparison-cards': { cat: 'Cards', title: 'Comparison', desc: 'Side-by-side comparison.', icon: '⚖️', families: ['Two Column', 'Multi Column', 'Feature Matrix'] },
  'testimonial-cards': { cat: 'Cards', title: 'Testimonials', desc: 'User testimonial cards.', icon: '💬', families: ['Standard Quote', 'With Rating', 'Video Testimonial'] },
  'feature-cards': { cat: 'Cards', title: 'Feature Cards', desc: 'Feature highlight cards.', icon: '⭐', families: ['Standard Feature', 'With Illustration', 'Grid Feature'] },
  'notification-cards': { cat: 'Cards', title: 'Notification', desc: 'Notification display cards.', icon: '🔔', families: ['Standard Notification', 'Grouped', 'Action Required'] },

  // ═══ OVERLAYS ═══
  'bottom-sheet': { cat: 'Overlays', title: 'Bottom Sheet', desc: 'Mobile bottom drawer.', icon: '📱', families: ['Standard Sheet', 'With Handle', 'Full Screen'] },
  'confirm-dialog': { cat: 'Overlays', title: 'Confirmation', desc: 'Destructive action confirmations.', icon: '❓', families: ['Standard Confirm', 'Danger Confirm', 'With Input'], paydash: 'ConfirmDialog.tsx' },
  'form-modal': { cat: 'Overlays', title: 'Form Modal', desc: 'Form-containing modals.', icon: '📝', families: ['Standard Form', 'Multi Step', 'Side Panel Form'], paydash: 'ModalProvider.tsx' },
  'success-dialog': { cat: 'Overlays', title: 'Success Dialog', desc: 'Success confirmation dialogs.', icon: '✅', families: ['Standard Success', 'With Action', 'Animated'] },
  'warning-dialog': { cat: 'Overlays', title: 'Warning Dialog', desc: 'Warning and caution dialogs.', icon: '⚠️', families: ['Standard Warning', 'Blocking Warning', 'Timed Warning'] },
  'fullscreen-dialog': { cat: 'Overlays', title: 'Fullscreen Dialog', desc: 'Full-screen modal views.', icon: '🖥️', families: ['Standard Full', 'With Header', 'Immersive'] },
  'wizard-dialog': { cat: 'Overlays', title: 'Wizard Dialog', desc: 'Multi-step wizard modals.', icon: '🧙', families: ['Standard Wizard', 'With Sidebar', 'Linear Wizard'] },
  'popover': { cat: 'Overlays', title: 'Popover', desc: 'Contextual floating panels.', icon: '💬', families: ['Standard Popover', 'With Arrow', 'Rich Popover'] },
  'tooltip': { cat: 'Overlays', title: 'Tooltip', desc: 'Informational hover tips.', icon: '💡', families: ['Standard Tooltip', 'Rich Tooltip', 'Interactive Tooltip'] },
  'lightbox': { cat: 'Overlays', title: 'Lightbox', desc: 'Image/media lightbox viewer.', icon: '🖼️', families: ['Standard Lightbox', 'Gallery Lightbox', 'Video Lightbox'] },

  // ═══ FEEDBACK ═══
  'snackbar': { cat: 'Feedback', title: 'Snackbar', desc: 'Bottom action notifications.', icon: '📢', families: ['Standard Snackbar', 'With Action', 'Persistent'], paydash: 'GlobalUI.tsx (Toast)' },
  'alert-banner': { cat: 'Feedback', title: 'Alert Banner', desc: 'Full-width alert banners.', icon: '🚨', families: ['Info Banner', 'Warning Banner', 'Error Banner'] },
  'empty-state': { cat: 'Feedback', title: 'Empty State', desc: 'No-data placeholder screens.', icon: '📭', families: ['Standard Empty', 'With Action', 'Illustrated Empty'] },
  'error-state': { cat: 'Feedback', title: 'Error State', desc: 'Error fallback displays.', icon: '❌', families: ['Standard Error', 'Network Error', 'Permission Error'] },
  'loading': { cat: 'Feedback', title: 'Loading Spinner', desc: 'Loading indicator animations.', icon: '⏳', families: ['Spinner', 'Dot Loading', 'Bar Loading'] },
  'skeleton': { cat: 'Feedback', title: 'Skeleton Screen', desc: 'Content loading placeholders.', icon: '💀', families: ['Card Skeleton', 'List Skeleton', 'Table Skeleton', 'Detail Skeleton', 'Dashboard Skeleton'] },
  'progress-bar': { cat: 'Feedback', title: 'Progress Bar', desc: 'Progress indicator bars.', icon: '📊', families: ['Standard Progress', 'Segmented Progress', 'Circular Progress'] },
  'score-gauge': { cat: 'Feedback', title: 'Score Ring', desc: 'Circular score gauges.', icon: '🎯', families: ['Standard Ring', 'Gradient Ring', 'Multi Ring'] },
  'status-indicator': { cat: 'Feedback', title: 'Status Indicator', desc: 'Live status displays.', icon: '🟢', families: ['Dot Status', 'Badge Status', 'Timeline Status'] },
  'countdown': { cat: 'Feedback', title: 'Countdown', desc: 'Countdown timer displays.', icon: '⏱️', families: ['Standard Countdown', 'Flip Clock', 'Circular Countdown'] },
  'confetti': { cat: 'Feedback', title: 'Confetti / Celebration', desc: 'Celebration animations.', icon: '🎉', families: ['Burst Confetti', 'Rain Confetti', 'Emoji Rain'] },
  'connection-status': { cat: 'Feedback', title: 'Connection Status', desc: 'Network status indicators.', icon: '📶', families: ['Online/Offline', 'Signal Strength', 'Reconnecting'] },

  // ═══ STATES ═══
  'state-offline': { cat: 'States', title: 'Offline State', desc: 'No-connection fallback.', icon: '📵', families: ['Standard Offline', 'Cached View', 'Retry Prompt'] },
  'state-locked': { cat: 'States', title: 'Locked State', desc: 'Permission-restricted view.', icon: '🔒', families: ['Standard Locked', 'Upgrade Prompt', 'Request Access'] },
  'state-expired': { cat: 'States', title: 'Expired State', desc: 'Time-elapsed fallback.', icon: '⌛', families: ['Standard Expired', 'Renewal Prompt', 'Grace Period'] },
  'state-pending': { cat: 'States', title: 'Pending State', desc: 'Awaiting action/approval.', icon: '⏳', families: ['Standard Pending', 'With Timeline', 'Approval Pending'] },
  'state-partial': { cat: 'States', title: 'Partial State', desc: 'Incomplete data display.', icon: '🔘', families: ['Standard Partial', 'Step Progress', 'Required Fields'] },
  'state-success': { cat: 'States', title: 'Success State', desc: 'Operation complete display.', icon: '✅', families: ['Standard Success', 'With Confetti', 'With Next Steps'] },

  // ═══ CALENDAR ═══
  'calendar': { cat: 'Calendar', title: 'Calendar View', desc: 'Monthly calendar component.', icon: '📅', families: ['Standard Calendar', 'With Events', 'Mini Calendar'] },
  'date-range': { cat: 'Calendar', title: 'Date Range', desc: 'Date range selector.', icon: '📆', families: ['Standard Range', 'Preset Ranges', 'Custom Range'] },
  'month-selector': { cat: 'Calendar', title: 'Month Selector', desc: 'Month selection control.', icon: '🗓️', families: ['Standard Month', 'Scroll Month', 'Grid Month'] },
  'day-status': { cat: 'Calendar', title: 'Day Status Cell', desc: 'Calendar day with status.', icon: '📊', families: ['Standard Cell', 'Heatmap Cell', 'Multi Event Cell'] },
  'schedule-view': { cat: 'Calendar', title: 'Schedule View', desc: 'Timeline schedule display.', icon: '📋', families: ['Day Schedule', 'Week Schedule', 'Agenda View'] },

  // ═══ CHARTS ═══
  'bar-chart': { cat: 'Charts', title: 'Bar Chart', desc: 'Vertical and horizontal bars.', icon: '📊', families: ['Standard Bar', 'Horizontal Bar', 'Grouped Bar'] },
  'stacked-bar': { cat: 'Charts', title: 'Stacked Bar', desc: 'Stacked bar compositions.', icon: '📊', families: ['Standard Stacked', 'Percent Stacked', 'Diverging'] },
  'line-chart': { cat: 'Charts', title: 'Line / Area', desc: 'Line and area charts.', icon: '📈', families: ['Standard Line', 'Area Fill', 'Multi Series'] },
  'donut-chart': { cat: 'Charts', title: 'Donut Chart', desc: 'Donut and pie charts.', icon: '🍩', families: ['Standard Donut', 'Half Donut', 'Nested Donut'] },
  'chart-legend': { cat: 'Charts', title: 'Chart Legend', desc: 'Chart legend displays.', icon: '📋', families: ['Inline Legend', 'Card Legend', 'Interactive Legend'] },
  'heatmap': { cat: 'Charts', title: 'Heatmap', desc: 'Density heatmap display.', icon: '🗺️', families: ['Standard Heatmap', 'Calendar Heat', 'Grid Heat'] },
  'funnel-chart': { cat: 'Charts', title: 'Funnel Chart', desc: 'Conversion funnel display.', icon: '📉', families: ['Standard Funnel', 'Horizontal Funnel', 'Comparison'] },
  'gauge-chart': { cat: 'Charts', title: 'Gauge Chart', desc: 'Gauge meter display.', icon: '⏱️', families: ['Standard Gauge', 'Semi Circle', 'Multi Gauge'] },

  // ═══ ANALYTICS ═══
  'score-display': { cat: 'Analytics', title: 'Score Display', desc: 'Score and metric display.', icon: '💯', families: ['Standard Score', 'Graded Score', 'Comparison Score'] },
  'trend-sparkline': { cat: 'Analytics', title: 'Trend / Sparkline', desc: 'Inline trend displays.', icon: '📈', families: ['Standard Sparkline', 'With Change', 'Mini Area'] },
  'comparison': { cat: 'Analytics', title: 'Comparison', desc: 'Value comparison displays.', icon: '⚖️', families: ['Side by Side', 'Percent Change', 'Trend Compare'] },
  'breakdown': { cat: 'Analytics', title: 'Breakdown', desc: 'Data breakdown views.', icon: '📊', families: ['Standard Breakdown', 'Nested Breakdown', 'Visual Breakdown'] },

  // ═══ INFOGRAPHICS ═══
  'stats-counter': { cat: 'Infographics', title: 'Stats Counter', desc: 'Animated number counters.', icon: '🔢', families: ['Standard Counter', 'Animated Counter', 'With Icon'] },
  'comparison-visual': { cat: 'Infographics', title: 'Visual Comparison', desc: 'Before/after comparisons.', icon: '📊', families: ['Standard Comparison', 'Slider Compare', 'Overlay Compare'] },
  'process-flow': { cat: 'Infographics', title: 'Process Flow', desc: 'Step-by-step flow diagrams.', icon: '🔄', families: ['Standard Flow', 'Branching Flow', 'Interactive Flow'] },
  'key-insight': { cat: 'Infographics', title: 'Key Insight', desc: 'Highlighted data callouts.', icon: '💡', families: ['Standard Insight', 'With Chart', 'Actionable Insight'] },
  'data-story': { cat: 'Infographics', title: 'Data Story', desc: 'Narrative data cards.', icon: '📖', families: ['Standard Story', 'With Timeline', 'Interactive Story'] },

  // ═══ REWARDS (sub-pages) ═══
  'achievement': { cat: 'Rewards', title: 'Achievement Badge', desc: 'Milestone achievement badges.', icon: '🏆', families: ['Unlocked', 'Locked', 'Badge Grid'] },
  'level-progress': { cat: 'Rewards', title: 'Level Progress', desc: 'User level and XP display.', icon: '📊', families: ['Standard Level', 'Tiered Level', 'XP Bar'] },
  'streak': { cat: 'Rewards', title: 'Streak Counter', desc: 'Consecutive action tracking.', icon: '🔥', families: ['Flame Streak', 'Compact Badge', 'Streak Recovery'] },
  'cashback': { cat: 'Rewards', title: 'Cashback Card', desc: 'Cashback and reward reveals.', icon: '💸', families: ['Earned Cashback', 'Offer Card', 'Scratch Reveal'] },
  'leaderboard': { cat: 'Rewards', title: 'Leaderboard', desc: 'Competitive ranking display.', icon: '🏅', families: ['Full Leaderboard', 'Your Position', 'Podium Top 3'] },
  'challenge': { cat: 'Rewards', title: 'Challenge Card', desc: 'Time-bound challenge display.', icon: '🎯', families: ['Active Challenge', 'Completed', 'Upcoming'] },
  'referral': { cat: 'Rewards', title: 'Referral Card', desc: 'Referral invite cards.', icon: '👥', families: ['Invite Card', 'Progress Tracker', 'Dark Banner'] },

  // ═══ AUTHENTICATION ═══
  'login': { cat: 'Authentication', title: 'Login Form', desc: 'Email/password login.', icon: '🔑', families: ['Standard Login', 'With Social', 'OTP Login'] },
  'signup': { cat: 'Authentication', title: 'Signup Form', desc: 'Registration flow.', icon: '📝', families: ['Standard Signup', 'Multi Step', 'With Invite'] },
  'forgot-password': { cat: 'Authentication', title: 'Forgot Password', desc: 'Password reset flow.', icon: '🔒', families: ['Email Reset', 'Phone Reset', 'Security Questions'] },
  'otp-verify': { cat: 'Authentication', title: 'OTP Verify', desc: 'Code verification screen.', icon: '📱', families: ['Standard OTP', 'With Timer', 'Voice OTP'] },
  'biometric': { cat: 'Authentication', title: 'Biometric Auth', desc: 'Face/finger recognition.', icon: '👆', families: ['Face ID', 'Touch ID', 'PIN Fallback'] },
  'social-login': { cat: 'Authentication', title: 'Social Login', desc: 'Google/Apple sign in.', icon: '🌐', families: ['Standard Social', 'Button Row', 'Icon Only'] },

  // ═══ ONBOARDING ═══
  'welcome-screen': { cat: 'Onboarding', title: 'Welcome Screen', desc: 'First launch hero.', icon: '🎉', families: ['Standard Welcome', 'Animated Welcome', 'Video Welcome'] },
  'feature-tour': { cat: 'Onboarding', title: 'Feature Tour', desc: 'Interactive walkthrough.', icon: '🗺️', families: ['Standard Tour', 'Spotlight Tour', 'Tooltip Tour'] },
  'permission-request': { cat: 'Onboarding', title: 'Permission Request', desc: 'System permission ask.', icon: '🔐', families: ['Standard Permission', 'Explained Permission', 'Batch Permissions'] },
  'setup-wizard': { cat: 'Onboarding', title: 'Setup Wizard', desc: 'Initial configuration.', icon: '🧙', families: ['Standard Wizard', 'Card Wizard', 'Progressive Wizard'] },
  'onboard-complete': { cat: 'Onboarding', title: 'Completion', desc: 'Onboarding success.', icon: '✅', families: ['Standard Complete', 'With Confetti', 'Next Steps'] },

  // ═══ COMMUNICATION ═══
  'chat-bubble': { cat: 'Communication', title: 'Chat Bubble', desc: 'Message bubbles.', icon: '💬', families: ['Standard Bubble', 'With Media', 'System Message'] },
  'message-thread': { cat: 'Communication', title: 'Message Thread', desc: 'Conversation list.', icon: '📧', families: ['Standard Thread', 'Compact Thread', 'With Preview'] },
  'announcement': { cat: 'Communication', title: 'Announcement', desc: 'Platform updates.', icon: '📢', families: ['Standard Announcement', 'Banner', 'Modal Announcement'] },
  'in-app-message': { cat: 'Communication', title: 'In App Message', desc: 'Targeted messages.', icon: '📩', families: ['Standard Message', 'Slide In', 'Full Screen'] },

  // ═══ PAYMENTS ═══
  'payment-row': { cat: 'Payments', title: 'Payment Row', desc: 'Transaction list rows.', icon: '💳', families: ['Standard Row', 'With Status', 'Grouped Row'] },
  'payment-card': { cat: 'Payments', title: 'Payment Method', desc: 'Card/bank display.', icon: '💳', families: ['Standard Card', 'With Default Badge', 'Add New'] },
  'bank-account': { cat: 'Payments', title: 'Bank Account', desc: 'Linked bank account.', icon: '🏦', families: ['Standard Bank', 'With Balance', 'Verified Account'] },
  'wallet': { cat: 'Payments', title: 'Wallet Balance', desc: 'Balance display.', icon: '👛', families: ['Standard Wallet', 'With History', 'Multi Currency'] },
  'receipt': { cat: 'Payments', title: 'Receipt', desc: 'Payment receipt.', icon: '🧾', families: ['Standard Receipt', 'Detailed Receipt', 'Download Receipt'] },
  'invoice': { cat: 'Payments', title: 'Invoice', desc: 'Bill/invoice view.', icon: '📄', families: ['Standard Invoice', 'With Breakdown', 'Past Due'] },
  'split-payment': { cat: 'Payments', title: 'Split Payment', desc: 'Roommate split.', icon: '➗', families: ['Standard Split', 'Equal Split', 'Custom Split'] },
  'autopay': { cat: 'Payments', title: 'Auto Pay', desc: 'Recurring setup.', icon: '🔁', families: ['Standard Autopay', 'With Schedule', 'Manage Autopay'] },

  // ═══ PROPERTY ═══
  'property-listing': { cat: 'Property', title: 'Property Listing', desc: 'Property search cards.', icon: '🏠', families: ['Standard Listing', 'Grid Listing', 'Map Listing'] },
  'property-gallery': { cat: 'Property', title: 'Property Gallery', desc: 'Image carousel.', icon: '🖼️', families: ['Standard Gallery', 'Full Screen', 'With Thumbnails'] },
  'amenity-grid': { cat: 'Property', title: 'Amenity Grid', desc: 'Feature icons grid.', icon: '🏊', families: ['Standard Grid', 'Compact Grid', 'With Labels'] },
  'location-map': { cat: 'Property', title: 'Location Map', desc: 'Map card.', icon: '📍', families: ['Standard Map', 'With Points of Interest', 'Street View'] },
  'floor-plan': { cat: 'Property', title: 'Floor Plan', desc: 'Layout view.', icon: '📐', families: ['Standard Plan', 'Interactive Plan', 'With Measurements'] },
  'property-compare': { cat: 'Property', title: 'Property Compare', desc: 'Side-by-side comparison.', icon: '⚖️', families: ['Standard Compare', 'Feature Matrix', 'With Scoring'] },
  'maintenance': { cat: 'Property', title: 'Maintenance', desc: 'Repair request card.', icon: '🔧', families: ['Standard Request', 'With Timeline', 'Emergency'] },
  'inspection': { cat: 'Property', title: 'Inspection', desc: 'Property inspection card.', icon: '📋', families: ['Standard Inspection', 'Checklist', 'Report'] },
  'move-checklist': { cat: 'Property', title: 'Move Checklist', desc: 'Moving checklist.', icon: '📦', families: ['Standard Checklist', 'Timeline Checklist', 'Interactive'] },

  // ═══ LEGAL ═══
  'lease-agreement': { cat: 'Legal', title: 'Lease Agreement', desc: 'Contract display.', icon: '📜', families: ['Standard Lease', 'Summary View', 'Clause Viewer'] },
  'terms-section': { cat: 'Legal', title: 'Terms Section', desc: 'Legal disclosure.', icon: '📋', families: ['Standard Terms', 'Expandable Terms', 'Highlighted Terms'] },
  'consent-block': { cat: 'Legal', title: 'Consent Block', desc: 'Agreement checkbox.', icon: '☑️', families: ['Standard Consent', 'Multi Consent', 'GDPR Consent'] },
  'disclaimer': { cat: 'Legal', title: 'Disclaimer', desc: 'Legal notice.', icon: '⚠️', families: ['Standard Disclaimer', 'Inline Disclaimer', 'Footer Disclaimer'] },
  'e-signature': { cat: 'Legal', title: 'E Signature', desc: 'Digital signing.', icon: '✍️', families: ['Draw Signature', 'Type Signature', 'Upload Signature'] },
  'doc-attachment': { cat: 'Legal', title: 'Doc Attachment', desc: 'File display.', icon: '📎', families: ['Standard Attachment', 'Preview Attachment', 'Multi File'], paydash: 'DocumentDrawer.tsx' },
  'audit-log': { cat: 'Legal', title: 'Audit Log', desc: 'Activity trail.', icon: '📋', families: ['Standard Log', 'Filtered Log', 'Export Log'] },
  'qr-code': { cat: 'Legal', title: 'QR Code', desc: 'Scannable code.', icon: '📱', families: ['Standard QR', 'Styled QR', 'Dynamic QR'] },

  // ═══ SOCIAL PROOF ═══
  'testimonial': { cat: 'Social Proof', title: 'Testimonial', desc: 'User testimonials.', icon: '💬', families: ['Standard Quote', 'Card Quote', 'Carousel'] },
  'rating-summary': { cat: 'Social Proof', title: 'Rating Summary', desc: 'Aggregate ratings.', icon: '⭐', families: ['Standard Summary', 'With Breakdown', 'Compact'] },
  'review-card': { cat: 'Social Proof', title: 'Review Card', desc: 'User review cards.', icon: '📝', families: ['Standard Review', 'With Photos', 'Verified Review'] },
  'trust-badge': { cat: 'Social Proof', title: 'Trust Badge', desc: 'Trust and security badges.', icon: '🛡️', families: ['Standard Badge', 'Security Badge', 'Certification'] },

  // ═══ MEDIA ═══
  'image-carousel': { cat: 'Media', title: 'Image Carousel', desc: 'Image slider component.', icon: '🎠', families: ['Standard Carousel', 'Fullwidth', 'Thumbnail Nav'] },
  'video-player': { cat: 'Media', title: 'Video Player', desc: 'Video playback component.', icon: '🎬', families: ['Standard Player', 'Mini Player', 'Inline Player'] },
  'gallery-grid': { cat: 'Media', title: 'Gallery Grid', desc: 'Image grid layout.', icon: '🖼️', families: ['Standard Grid', 'Masonry Grid', 'With Lightbox'] },

  // ═══ SETTINGS ═══
  'settings-row': { cat: 'Settings', title: 'Settings Row', desc: 'Setting toggle rows.', icon: '⚙️', families: ['Standard Row', 'With Description', 'With Badge'] },
  'notif-pref': { cat: 'Settings', title: 'Notification Pref', desc: 'Notification preferences.', icon: '🔔', families: ['Standard Pref', 'Grouped Pref', 'Channel Pref'] },
  'privacy-setting': { cat: 'Settings', title: 'Privacy Setting', desc: 'Privacy controls.', icon: '🔐', families: ['Standard Privacy', 'With Explanation', 'Data Controls'] },
  'account-manage': { cat: 'Settings', title: 'Account Manage', desc: 'Account management.', icon: '👤', families: ['Standard Account', 'With Danger Zone', 'Profile Edit'] },
  'theme-picker': { cat: 'Settings', title: 'Theme Picker', desc: 'Theme selection.', icon: '🎨', families: ['Standard Theme', 'Color Scheme', 'Custom Theme'] },
  'language-select': { cat: 'Settings', title: 'Language Select', desc: 'Language selection.', icon: '🌍', families: ['Standard Language', 'With Flags', 'Search Language'] },

  // ═══ STICKY & BANNERS ═══
  'sticky-bar': { cat: 'Sticky', title: 'Sticky Action Bar', desc: 'Sticky bottom/top bars.', icon: '📌', families: ['Bottom Action', 'Top Alert', 'Floating Action'] },
  'floating-banner': { cat: 'Sticky', title: 'Floating Banner', desc: 'Floating promotional banners.', icon: '🎯', families: ['Standard Float', 'Corner Float', 'Slide In'] },
  'cookie-bar': { cat: 'Sticky', title: 'Cookie Consent', desc: 'Cookie consent bar.', icon: '🍪', families: ['Standard Cookie', 'With Preferences', 'Minimal'] },
  'push-notif': { cat: 'Sticky', title: 'Push Notification', desc: 'Push notification display.', icon: '📲', families: ['Standard Push', 'Rich Push', 'Action Push'] },

  // ═══ TRANSITIONS ═══
  'page-transition': { cat: 'Transitions', title: 'Page Transitions', desc: 'Page navigation animations.', icon: '🔄', families: ['Fade Transition', 'Slide Transition', 'Scale Transition'] },
  'micro-animation': { cat: 'Transitions', title: 'Micro Animations', desc: 'Small interaction animations.', icon: '✨', families: ['Hover Effects', 'Loading Animations', 'State Changes'] },
  'shared-element': { cat: 'Transitions', title: 'Shared Element', desc: 'Shared element transitions.', icon: '🔗', families: ['Card to Detail', 'List to Detail', 'Tab Transition'] },

  // ═══ UI PATTERNS ═══
  'search-filter-bar': { cat: 'Patterns', title: 'Search + Filter', desc: 'Combined search and filter.', icon: '🔍', families: ['Standard Bar', 'With Chips', 'Advanced Filters'] },
  'bulk-selection': { cat: 'Patterns', title: 'Bulk Selection', desc: 'Multi-item selection.', icon: '☑️', families: ['Standard Bulk', 'With Toolbar', 'Floating Actions'] },
  'drag-drop': { cat: 'Patterns', title: 'Drag & Drop', desc: 'Drag and drop interfaces.', icon: '👆', families: ['List Reorder', 'Grid Reorder', 'Kanban'] },
  'infinite-scroll': { cat: 'Patterns', title: 'Infinite Scroll', desc: 'Infinite scrolling lists.', icon: '📜', families: ['Standard Infinite', 'With Loader', 'Virtual Scroll'] },
  'pull-refresh': { cat: 'Patterns', title: 'Pull to Refresh', desc: 'Pull-to-refresh gesture.', icon: '🔄', families: ['Standard Pull', 'Custom Animation', 'With Message'] },
  'share-sheet': { cat: 'Patterns', title: 'Share Sheet', desc: 'Share action sheet.', icon: '📤', families: ['Standard Share', 'Social Share', 'Copy Link'] },

  // ═══ PRODUCT PATTERNS ═══
  'rent-reporting': { cat: 'Product', title: 'Rent Reporting', desc: 'Credit reporting components.', icon: '📊', families: ['Standard Report', 'Score Impact', 'History View'] },
  'payment-history': { cat: 'Product', title: 'Payment History', desc: 'Transaction log.', icon: '💰', families: ['Standard History', 'Grouped History', 'With Filters'] },
  'tenant-invite': { cat: 'Product', title: 'Tenant Invite', desc: 'Invitation flow.', icon: '📧', families: ['Standard Invite', 'Bulk Invite', 'With Preview'] },
  'add-property': { cat: 'Product', title: 'Add Property', desc: 'Property creation flow.', icon: '🏠', families: ['Standard Add', 'Wizard Add', 'Quick Add'] },
  'tenant-screening': { cat: 'Product', title: 'Screening', desc: 'Background check.', icon: '🔍', families: ['Standard Screen', 'Detailed Screen', 'Quick Screen'] },
  'verified-report': { cat: 'Product', title: 'Verified Report', desc: 'Verification card.', icon: '✅', families: ['Standard Verified', 'With Score', 'Download Report'] },
  'investor-dash': { cat: 'Product', title: 'Investor Dash', desc: 'Investment view.', icon: '📈', families: ['Standard Dash', 'With Charts', 'Portfolio View'] },
  'candidate-search': { cat: 'Product', title: 'Candidate Search', desc: 'Tenant search.', icon: '👥', families: ['Standard Search', 'With Filters', 'Map Search'] },
  'sign-lease': { cat: 'Product', title: 'Sign & Lease', desc: 'Digital lease signing.', icon: '✍️', families: ['Standard Signing', 'Multi Party', 'With Preview'] },
  'membership-life': { cat: 'Product', title: 'Membership Life', desc: 'Membership lifecycle.', icon: '💳', families: ['Active Member', 'Upgrade Path', 'Renewal'] },
  'rewards-redeem': { cat: 'Product', title: 'Rewards Redeem', desc: 'Reward redemption.', icon: '🎁', families: ['Standard Redeem', 'Catalog View', 'Checkout'] },
  'rm-pattern': { cat: 'Product', title: 'RM Pattern', desc: 'Relationship management.', icon: '🤝', families: ['Standard RM', 'Communication', 'Schedule'] },
  'report-filter': { cat: 'Product', title: 'Report Filter', desc: 'Report filtering.', icon: '🔻', families: ['Standard Filter', 'Date Range', 'Multi Dimension'] },
  'profile-edit': { cat: 'Product', title: 'Profile Edit', desc: 'Profile editing.', icon: '👤', families: ['Standard Edit', 'Photo Upload', 'Multi Section'] },
  'notif-center': { cat: 'Product', title: 'Notification Center', desc: 'Notification management.', icon: '🔔', families: ['Standard Center', 'Grouped', 'With Actions'] },
  'kyc-flow': { cat: 'Product', title: 'KYC Flow', desc: 'Identity verification.', icon: '🪪', families: ['Standard KYC', 'Document Upload', 'Video KYC'] },
  'subscription': { cat: 'Product', title: 'Subscription', desc: 'Plan management.', icon: '🔁', families: ['Standard Plan', 'Comparison', 'Billing History'] },

  // ═══ PAGE TEMPLATES ═══
  'page-list': { cat: 'Templates', title: 'List Page', desc: 'Data listing template.', icon: '📋', families: ['Standard List', 'With Sidebar', 'Split View'] },
  'page-detail': { cat: 'Templates', title: 'Detail Page', desc: 'Single item view template.', icon: '📄', families: ['Standard Detail', 'Tabbed Detail', 'With Sidebar'] },
  'page-dashboard': { cat: 'Templates', title: 'Dashboard Page', desc: 'Overview layout template.', icon: '📊', families: ['Standard Dashboard', 'KPI Focus', 'Activity Focus'] },
  'page-form': { cat: 'Templates', title: 'Form Page', desc: 'Data entry template.', icon: '📝', families: ['Standard Form', 'Wizard Form', 'Side Panel Form'] },
  'page-modal-flow': { cat: 'Templates', title: 'Modal Flow', desc: 'Multi-step modal template.', icon: '🪟', families: ['Standard Flow', 'With Preview', 'Split Modal'] },
  'page-settings': { cat: 'Templates', title: 'Settings Page', desc: 'Preferences template.', icon: '⚙️', families: ['Standard Settings', 'Tabbed Settings', 'Grouped'] },
  'page-onboarding': { cat: 'Templates', title: 'Onboarding Page', desc: 'Welcome flow template.', icon: '🎉', families: ['Standard Onboarding', 'Carousel', 'Progressive'] },
  'page-error': { cat: 'Templates', title: 'Error Page', desc: '404/500 template.', icon: '❌', families: ['Standard 404', '500 Server Error', 'Maintenance'] },
  'page-auth': { cat: 'Templates', title: 'Auth Page', desc: 'Login/signup template.', icon: '🔑', families: ['Standard Auth', 'Split Screen', 'Minimal'] },
  'page-empty': { cat: 'Templates', title: 'Empty Page', desc: 'No content template.', icon: '📭', families: ['Standard Empty', 'With Actions', 'Illustrated'] },
  'page-success': { cat: 'Templates', title: 'Success Page', desc: 'Completion template.', icon: '✅', families: ['Standard Success', 'With Confetti', 'Next Steps'] },
};

function generatePage(slug, data) {
  const paydashNote = data.paydash ? `<div style="padding:12px 16px;background:rgba(59,130,246,0.08);border:1px solid rgba(59,130,246,0.15);border-radius:8px;margin-bottom:24px;font-size:13px;color:var(--color-info)"><strong>PayDash Source:</strong> ${data.paydash} — Styles and interaction patterns extracted from the original repository.</div>` : '';

  const familyHTML = data.families.map((fam, i) => {
    const modelLetter = String.fromCharCode(65 + i);
    return `
        <div class="component-card">
          <div class="component-card-header">
            <span class="component-card-id">${slug.toUpperCase().replace(/-/g, '')}·${modelLetter}</span>
            <span class="component-card-model">Model ${modelLetter} — ${fam}</span>
          </div>
          <div class="component-card-preview" style="min-height:120px;display:flex;align-items:center;justify-content:center">
            <div style="text-align:center;padding:32px">
              <div style="font-size:40px;margin-bottom:12px;filter:grayscale(0)">${data.icon}</div>
              <div style="font-size:15px;font-weight:700;color:var(--color-text-primary);margin-bottom:4px">${fam}</div>
              <div style="font-size:12px;color:var(--color-text-tertiary)">${data.desc}</div>
            </div>
          </div>
        </div>`;
  }).join('\n');

  return `<!DOCTYPE html>
<html lang="en" data-theme="light">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${data.title} — Rentenpe UI Kit</title>
  <link rel="stylesheet" href="../css/tokens.css">
  <link rel="stylesheet" href="../css/catalog.css">
  <script src="../js/catalog.js" defer></script>
</head>
<body>
<div class="catalog-shell">
  <aside class="catalog-sidebar">
    <div class="catalog-sidebar-header">
      <div class="catalog-logo"><div class="catalog-logo-mark">R</div><div><div class="catalog-logo-text">Rentenpe</div><div class="catalog-logo-sub">Design System</div></div></div>
    </div>
    <nav class="catalog-nav">
      <div class="catalog-nav-group">
        <div class="catalog-nav-group-label">${data.cat}</div>
        <a href="#" class="catalog-nav-item active">${data.icon} ${data.title}</a>
      </div>
      <div class="catalog-nav-group">
        <div class="catalog-nav-group-label">Navigate</div>
        <a href="../index.html" class="catalog-nav-item">← Back to Index</a>
      </div>
    </nav>
    <div class="catalog-sidebar-footer">
      <div class="theme-toggle">
        <button class="theme-toggle-option active" data-theme="light">☀️ Light</button>
        <button class="theme-toggle-option" data-theme="dark">🌙 Dark</button>
      </div>
    </div>
  </aside>

  <main class="catalog-main">
    <div class="catalog-page-header">
      <h1 class="catalog-page-title">${data.title}</h1>
      <p class="catalog-page-description">${data.families.length} variants. ${data.desc}</p>
    </div>

    ${paydashNote}

    <section class="component-section">
      <div class="component-section-header">
        <div>
          <span class="component-family-id">${slug.toUpperCase().replace(/-/g, '')}</span>
          <h2 class="component-family-name">${data.title}</h2>
          <p class="component-family-desc">${data.desc}</p>
        </div>
      </div>
      <div class="component-grid">
${familyHTML}
      </div>
    </section>
  </main>
</div>
</body>
</html>`;
}

// Generate all missing pages
let created = 0;
let skipped = 0;
for (const [slug, data] of Object.entries(ALL_PAGES)) {
  const filePath = path.join(PAGES_DIR, `${slug}.html`);
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, generatePage(slug, data));
    created++;
  } else {
    skipped++;
  }
}
console.log(`Done: ${created} pages created, ${skipped} already existed.`);
