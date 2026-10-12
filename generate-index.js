const fs = require('fs');
const path = require('path');
const { getFamiliesForSlug } = require('./component-engine.js');
const { SCREEN_SUITES } = require('./js/screens-data.js');
const { renderScreenHTML } = require('./js/screen-renderers.js');

// Extract ALL_PAGES from generate-rich-pages.js
const ALL_PAGES = {
  // Foundations
  'typography': { cat: 'Foundations', title: 'Typography', desc: 'Type scale, font families, and text styles.', icon: '🔤', families: ['Type Scale', 'Font Weights', 'Text Colors', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'colors': { cat: 'Foundations', title: 'Colors & Tokens', desc: 'Complete color system with semantic tokens.', icon: '🎨', families: ['Primary Palette', 'Semantic Colors', 'Surface Colors', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'spacing': { cat: 'Foundations', title: 'Spacing & Grid', desc: 'Spacing scale and grid system.', icon: '📐', families: ['Spacing Scale', 'Grid System', 'Breakpoints', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'dividers': { cat: 'Foundations', title: 'Dividers', desc: 'Horizontal and vertical separators.', icon: '➖', families: ['Solid Divider', 'Dashed Divider', 'Labeled Divider', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'icons': { cat: 'Foundations', title: 'Icons & Symbols', desc: 'Icon library and symbol set.', icon: '✨', families: ['Action Icons', 'Status Icons', 'Navigation Icons', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'containers': { cat: 'Foundations', title: 'Containers', desc: 'Layout containers and wrappers.', icon: '📦', families: ['Standard Card', 'Glass Card', 'Elevated Card', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  
  // Actions
  'buttons': { cat: 'Actions', title: 'Buttons', desc: 'Primary, secondary, and tertiary actions.', icon: '◎', families: ['Primary Button', 'Secondary Button', 'Tertiary Button', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'links': { cat: 'Actions', title: 'Text & Link Actions', desc: 'Inline text links and action text.', icon: '🔗', families: ['Standard Link', 'Action Link', 'Destructive Link', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'fab': { cat: 'Actions', title: 'Floating Actions', desc: 'Floating action buttons.', icon: '⊕', families: ['Standard FAB', 'Extended FAB', 'Mini FAB', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  
  // Inputs
  'search-inputs': { cat: 'Inputs', title: 'Search Input', desc: 'Search fields with suggestions.', icon: '🔍', families: ['Standard Search', 'Expandable Search', 'Search with Filters', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'email-inputs': { cat: 'Inputs', title: 'Email Input', desc: 'Email fields with validation.', icon: '📧', families: ['Standard Email', 'Email with Domain', 'Multi Email', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'phone-inputs': { cat: 'Inputs', title: 'Phone Input', desc: 'Phone number fields with country code.', icon: '📱', families: ['Standard Phone', 'With Country Picker', 'Split Phone', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'password-inputs': { cat: 'Inputs', title: 'Password Input', desc: 'Password fields with strength meter.', icon: '🔒', families: ['Standard Password', 'With Strength Meter', 'With Requirements', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'number-inputs': { cat: 'Inputs', title: 'Number Input', desc: 'Number fields with steppers.', icon: '🔢', families: ['Standard Number', 'With Stepper', 'Quantity Selector', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'currency-inputs': { cat: 'Inputs', title: 'Currency Input', desc: 'Currency amount fields with symbol.', icon: '💰', families: ['Standard Currency', 'Multi Currency', 'Amount Range', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'textarea': { cat: 'Inputs', title: 'Textarea', desc: 'Multi-line text areas.', icon: '📄', families: ['Standard Textarea', 'Auto Resize', 'With Character Count', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'date-inputs': { cat: 'Inputs', title: 'Date Field', desc: 'Date picker inputs.', icon: '📅', families: ['Standard Date', 'Date Range', 'Date with Time', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'otp-inputs': { cat: 'Inputs', title: 'OTP / PIN', desc: 'One-time password and PIN entry.', icon: '🔑', families: ['4 Digit OTP', '6 Digit OTP', 'Alphanumeric Code', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'masked-inputs': { cat: 'Inputs', title: 'Masked Input', desc: 'Inputs with format masks.', icon: '🎭', families: ['Card Number Mask', 'SSN Mask', 'Custom Pattern', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'file-upload': { cat: 'Inputs', title: 'File Upload', desc: 'File upload and drag-drop zones.', icon: '📤', families: ['Drop Zone', 'Button Upload', 'Multi File', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'autocomplete': { cat: 'Inputs', title: 'Autocomplete', desc: 'Type-ahead suggestion fields.', icon: '💡', families: ['Standard Autocomplete', 'With Categories', 'Multi Value', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'time-picker': { cat: 'Inputs', title: 'Time Picker', desc: 'Time selection controls.', icon: '🕐', families: ['Standard Time', 'Time Range', 'Duration Picker', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'color-picker': { cat: 'Inputs', title: 'Color Picker', desc: 'Color selection widgets.', icon: '🌈', families: ['Swatch Grid', 'Spectrum Picker', 'Hex Input', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'star-rating': { cat: 'Inputs', title: 'Star Rating', desc: 'Star-based rating input.', icon: '⭐', families: ['5 Star Rating', 'Emoji Rating', 'Slider Rating', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'tags-input': { cat: 'Inputs', title: 'Tags Input', desc: 'Tag creation and management.', icon: '🏷️', families: ['Standard Tags', 'Autocomplete Tags', 'Removable Tags', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'rich-text': { cat: 'Inputs', title: 'Rich Text Editor', desc: 'Rich text editing toolbar.', icon: '📝', families: ['Basic Editor', 'Full Toolbar', 'Markdown Editor', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'signature-pad': { cat: 'Inputs', title: 'Signature Pad', desc: 'Digital signature capture.', icon: '✍️', families: ['Standard Pad', 'Typed Signature', 'Upload Signature', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'form-fields': { cat: 'Inputs', title: 'Form Fields', desc: 'Complete form field wrappers.', icon: '📋', families: ['Stacked Field', 'Horizontal Field', 'Inline Field', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'inline-edit': { cat: 'Inputs', title: 'Inline Edit', desc: 'Click-to-edit inline fields.', icon: '✏️', families: ['Text Inline Edit', 'Select Inline Edit', 'Multi Line Edit', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  
  // Selection
  'checkbox': { cat: 'Selection', title: 'Checkbox', desc: 'Single and group checkboxes.', icon: '☑️', families: ['Standard Checkbox', 'Indeterminate', 'Checkbox Group', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'radio': { cat: 'Selection', title: 'Radio Group', desc: 'Exclusive selection controls.', icon: '🔘', families: ['Standard Radio', 'Card Radio', 'Button Radio', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'toggle': { cat: 'Selection', title: 'Toggle / Switch', desc: 'On/off binary controls.', icon: '🔀', families: ['Standard Toggle', 'With Label', 'Grouped Toggles', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'slider': { cat: 'Selection', title: 'Slider / Range', desc: 'Value range selectors.', icon: '🎚️', families: ['Standard Slider', 'Range Slider', 'Step Slider', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'adornments': { cat: 'Selection', title: 'Input Adornments', desc: 'Input prefix/suffix decorations.', icon: '🎀', families: ['Icon Adornment', 'Text Adornment', 'Action Adornment', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  
  // Dropdowns
  'select': { cat: 'Dropdowns', title: 'Standard Select', desc: 'Single value dropdown.', icon: '📋', families: ['Standard Select', 'With Icons', 'Grouped Options', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'searchable-select': { cat: 'Dropdowns', title: 'Searchable Select', desc: 'Filterable dropdown.', icon: '🔎', families: ['Standard Searchable', 'With Create', 'Async Search', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'multi-select': { cat: 'Dropdowns', title: 'Multi Select', desc: 'Multiple value selection.', icon: '☑️', families: ['Checkbox Multi', 'Chip Multi', 'Tree Multi', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'property-selector': { cat: 'Dropdowns', title: 'Property Selector', desc: 'Property-specific selector.', icon: '🏠', families: ['Standard Property', 'With Preview', 'Map Selector', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'filter-dropdown': { cat: 'Dropdowns', title: 'Filter Dropdown', desc: 'Preset filter menus.', icon: '🔻', families: ['Standard Filter', 'Multi Filter', 'Date Filter', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'sort-dropdown': { cat: 'Dropdowns', title: 'Sort Dropdown', desc: 'Sort order menus.', icon: '↕️', families: ['Standard Sort', 'With Direction', 'Multi Sort', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },

  // Navigation
  'sidebar': { cat: 'Navigation', title: 'Side Navigation', desc: 'Collapsible sidebar with groups.', icon: '📂', families: ['Full Sidebar', 'Collapsed Sidebar', 'Mobile Sidebar', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'topbar': { cat: 'Navigation', title: 'Top Bar / Header', desc: 'App header with actions.', icon: '📌', families: ['Standard Header', 'With Search', 'Breadcrumb Header', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'breadcrumbs': { cat: 'Navigation', title: 'Breadcrumbs', desc: 'Path navigation trail.', icon: '🥖', families: ['Standard Crumbs', 'With Icons', 'Collapsed Crumbs', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'tabs': { cat: 'Navigation', title: 'Page Tabs', desc: 'Content switching tabs.', icon: '📑', families: ['Standard Tabs', 'Underline Tabs', 'Pill Tabs', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'segmented': { cat: 'Navigation', title: 'Segmented Control', desc: 'Toggle between views.', icon: '⊞', families: ['Standard Segment', 'Icon Segment', 'Full Width', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'tabbar': { cat: 'Navigation', title: 'Tab Bar Nav', desc: 'Mobile bottom navigation.', icon: '📱', families: ['Standard Tab Bar', 'With Badge', 'Floating Tab Bar', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'pagination': { cat: 'Navigation', title: 'Pagination', desc: 'Page number navigation.', icon: '📄', families: ['Standard Pagination', 'Simple Prev/Next', 'Load More', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'stepper': { cat: 'Navigation', title: 'Stepper', desc: 'Multi-step progress.', icon: '🪜', families: ['Horizontal Stepper', 'Vertical Stepper', 'Dot Stepper', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'back-next': { cat: 'Navigation', title: 'Back / Next', desc: 'Sequential navigation.', icon: '↔️', families: ['Standard Nav', 'With Preview', 'Wizard Nav', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'header-utils': { cat: 'Navigation', title: 'Header Utilities', desc: 'Header action buttons.', icon: '🔔', families: ['Notification Bell', 'Search Toggle', 'User Menu', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'lifecycle-nav': { cat: 'Navigation', title: 'Lifecycle Nav', desc: 'Process lifecycle navigation.', icon: '🔄', families: ['Standard Lifecycle', 'Vertical Lifecycle', 'Interactive', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'footer': { cat: 'Navigation', title: 'Footer', desc: 'Page and app footers.', icon: '📎', families: ['Standard Footer', 'Minimal Footer', 'With Links', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'quick-actions': { cat: 'Navigation', title: 'Quick Actions', desc: 'Speed dial and shortcuts.', icon: '⚡', families: ['Speed Dial', 'Action Grid', 'Shortcut Bar', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },

  // Menus
  'context-menu': { cat: 'Menus', title: 'Context Menu', desc: 'Right-click context menus.', icon: '⋮', families: ['Standard Context', 'With Icons', 'Nested Context', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'profile-menu': { cat: 'Menus', title: 'Profile Menu', desc: 'User profile dropdown.', icon: '👤', families: ['Standard Profile', 'With Avatar', 'Extended Profile', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'command-palette': { cat: 'Menus', title: 'Command Palette', desc: 'Keyboard-first command search.', icon: '⌘', families: ['Standard Palette', 'With Categories', 'AI Enhanced', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'mega-menu': { cat: 'Menus', title: 'Mega Menu', desc: 'Large navigation menus.', icon: '📊', families: ['Column Mega', 'With Icons', 'With Featured', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'nested-menu': { cat: 'Menus', title: 'Nested Menu', desc: 'Multi-level submenus.', icon: '📂', families: ['Standard Nested', 'Hover Expand', 'Accordion', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'action-sheet': { cat: 'Menus', title: 'Action Sheet', desc: 'iOS-style action sheets.', icon: '📱', families: ['Standard Actions', 'With Icons', 'Destructive Actions', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },

  // Data Display
  'badges': { cat: 'Data Display', title: 'Status Badges', desc: 'Status indicator badges.', icon: '🏅', families: ['Standard Badge', 'Dot Badge', 'Outlined Badge', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'metadata-chips': { cat: 'Data Display', title: 'Metadata Chips', desc: 'Key-value metadata chips.', icon: '🏷️', families: ['Standard Chip', 'With Icon', 'Dismissible', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'filter-chips': { cat: 'Data Display', title: 'Filter Chips', desc: 'Active filter indicators.', icon: '🔖', families: ['Standard Filter', 'Toggle Filter', 'Group Filter', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'action-chips': { cat: 'Data Display', title: 'Action Chips', desc: 'Actionable chip buttons.', icon: '⚡', families: ['Standard Action', 'With Icon', 'Outlined Action', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'count-badge': { cat: 'Data Display', title: 'Count Badge', desc: 'Numeric count indicators.', icon: '🔴', families: ['Standard Count', 'Dot Only', 'Animated Count', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'dot-indicator': { cat: 'Data Display', title: 'Dot Indicator', desc: 'Status dot indicators.', icon: '●', families: ['Color Dot', 'Pulsing Dot', 'Labeled Dot', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'avatars': { cat: 'Data Display', title: 'Avatars', desc: 'User avatar components.', icon: '👤', families: ['Image Avatar', 'Initials Avatar', 'Avatar Group', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'verified-tag': { cat: 'Data Display', title: 'Verified Tags', desc: 'Verification status indicators.', icon: '✅', families: ['Verified Badge', 'Trust Seal', 'Certification', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },

  // Lists
  'list-rows': { cat: 'Lists', title: 'Standard List', desc: 'Standard list rows.', icon: '📋', families: ['Simple List', 'With Metadata', 'With Actions', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'compact-list': { cat: 'Lists', title: 'Compact List', desc: 'Dense list rows.', icon: '📑', families: ['Standard Compact', 'With Checkbox', 'With Avatar', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'timeline': { cat: 'Lists', title: 'Activity Timeline', desc: 'Chronological event timeline.', icon: '📅', families: ['Standard Timeline', 'Grouped Timeline', 'Interactive Timeline', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'grouped-list': { cat: 'Lists', title: 'Grouped List', desc: 'Categorized list sections.', icon: '📂', families: ['Standard Grouped', 'Collapsible', 'Sticky Headers', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'swipeable-list': { cat: 'Lists', title: 'Swipeable List', desc: 'Swipe-to-reveal actions.', icon: '👆', families: ['Swipe Delete', 'Swipe Actions', 'Swipe Archive', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'expandable-list': { cat: 'Lists', title: 'Expandable List', desc: 'Accordion list items.', icon: '📖', families: ['Standard Expand', 'With Preview', 'Multi Expand', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },

  // Tables
  'data-table': { cat: 'Tables', title: 'Standard Table', desc: 'Full-featured data table.', icon: '📊', families: ['Standard Table', 'Sortable Table', 'Selectable Table', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'compact-table': { cat: 'Tables', title: 'Compact Table', desc: 'Dense data table.', icon: '📉', families: ['Standard Compact', 'With Inline Edit', 'Minimal', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'responsive-table': { cat: 'Tables', title: 'Responsive Table', desc: 'Mobile-friendly tables.', icon: '📱', families: ['Card Stack', 'Horizontal Scroll', 'Priority Columns', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'table-toolbar': { cat: 'Tables', title: 'Table Toolbar', desc: 'Table action toolbar.', icon: '🔧', families: ['Standard Toolbar', 'With Bulk Actions', 'Filter Toolbar', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'expandable-row': { cat: 'Tables', title: 'Expandable Row', desc: 'Table rows with detail expansion.', icon: '📖', families: ['Standard Expand', 'With Sub Table', 'Accordion Row', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'editable-table': { cat: 'Tables', title: 'Editable Table', desc: 'Inline-editable table cells.', icon: '✏️', families: ['Cell Edit', 'Row Edit', 'Full Edit Mode', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },

  // Cards
  'entity-cards': { cat: 'Cards', title: 'Entity Cards', desc: 'Property and entity display cards.', icon: '🏢', families: ['Standard Entity', 'With Status', 'Compact Entity', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'report-cards': { cat: 'Cards', title: 'Report Cards', desc: 'Report summary cards.', icon: '📋', families: ['Standard Report', 'With Chart', 'Download Report', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'service-cards': { cat: 'Cards', title: 'Service Cards', desc: 'Service feature cards.', icon: '🛎️', families: ['Standard Service', 'With CTA', 'Comparison', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'membership-cards': { cat: 'Cards', title: 'Membership', desc: 'Membership tier display.', icon: '💳', families: ['Standard Tier', 'Premium Tier', 'Comparison Grid', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'info-cards': { cat: 'Cards', title: 'Information', desc: 'Informational display cards.', icon: 'ℹ️', families: ['Standard Info', 'With Icon', 'Dismissible Info', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'reward-cards': { cat: 'Cards', title: 'Reward Cards', desc: 'Reward and offer cards.', icon: '🎁', families: ['Standard Reward', 'Scratch Card', 'Coupon Card', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'rm-cards': { cat: 'Cards', title: 'RM Contact', desc: 'Relationship manager cards.', icon: '🤝', families: ['Standard RM', 'With Schedule', 'Chat RM', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'profile-cards': { cat: 'Cards', title: 'Profile Cards', desc: 'User profile cards.', icon: '👤', families: ['Standard Profile', 'Compact Profile', 'Team Card', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'pricing-cards': { cat: 'Cards', title: 'Pricing Cards', desc: 'Pricing plan cards.', icon: '💲', families: ['Standard Pricing', 'Highlighted Plan', 'Comparison', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'comparison-cards': { cat: 'Cards', title: 'Comparison', desc: 'Side-by-side comparison.', icon: '⚖️', families: ['Two Column', 'Multi Column', 'Feature Matrix', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'testimonial-cards': { cat: 'Cards', title: 'Testimonials', desc: 'User testimonial cards.', icon: '💬', families: ['Standard Quote', 'With Rating', 'Video Testimonial', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'feature-cards': { cat: 'Cards', title: 'Feature Cards', desc: 'Feature highlight cards.', icon: '⭐', families: ['Standard Feature', 'With Illustration', 'Grid Feature', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'notification-cards': { cat: 'Cards', title: 'Notification', desc: 'Notification display cards.', icon: '🔔', families: ['Standard Notification', 'Grouped', 'Action Required', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },

  // Overlays
  'bottom-sheet': { cat: 'Overlays', title: 'Bottom Sheet', desc: 'Mobile bottom drawer.', icon: '📱', families: ['Standard Sheet', 'With Handle', 'Full Screen', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'confirm-dialog': { cat: 'Overlays', title: 'Confirmation', desc: 'Destructive action confirmations.', icon: '❓', families: ['Standard Confirm', 'Danger Confirm', 'With Input', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'form-modal': { cat: 'Overlays', title: 'Form Modal', desc: 'Form-containing modals.', icon: '📝', families: ['Standard Form', 'Multi Step', 'Side Panel Form', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'success-dialog': { cat: 'Overlays', title: 'Success Dialog', desc: 'Success confirmation dialogs.', icon: '✅', families: ['Standard Success', 'With Action', 'Animated', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'warning-dialog': { cat: 'Overlays', title: 'Warning Dialog', desc: 'Warning and caution dialogs.', icon: '⚠️', families: ['Standard Warning', 'Blocking Warning', 'Timed Warning', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'fullscreen-dialog': { cat: 'Overlays', title: 'Fullscreen Dialog', desc: 'Full-screen modal views.', icon: '🖥️', families: ['Standard Full', 'With Header', 'Immersive', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'wizard-dialog': { cat: 'Overlays', title: 'Wizard Dialog', desc: 'Multi-step wizard modals.', icon: '🧙', families: ['Standard Wizard', 'With Sidebar', 'Linear Wizard', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'popover': { cat: 'Overlays', title: 'Popover', desc: 'Contextual floating panels.', icon: '💬', families: ['Standard Popover', 'With Arrow', 'Rich Popover', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'tooltip': { cat: 'Overlays', title: 'Tooltip', desc: 'Informational hover tips.', icon: '💡', families: ['Standard Tooltip', 'Rich Tooltip', 'Interactive Tooltip', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'lightbox': { cat: 'Overlays', title: 'Lightbox', desc: 'Image/media lightbox viewer.', icon: '🖼️', families: ['Standard Lightbox', 'Gallery Lightbox', 'Video Lightbox', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },

  // Feedback
  'alert-banner': { cat: 'Feedback', title: 'Alert Banner', desc: 'Full-width alert banners.', icon: '🚨', families: ['Info Banner', 'Warning Banner', 'Error Banner', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'empty-state': { cat: 'Feedback', title: 'Empty State', desc: 'No-data placeholder screens.', icon: '📭', families: ['Standard Empty', 'With Action', 'Illustrated Empty', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'error-state': { cat: 'Feedback', title: 'Error State', desc: 'Error fallback displays.', icon: '❌', families: ['Standard Error', 'Network Error', 'Permission Error', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'loading': { cat: 'Feedback', title: 'Loading Spinner', desc: 'Loading indicator animations.', icon: '⏳', families: ['Spinner', 'Dot Loading', 'Bar Loading', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'skeleton': { cat: 'Feedback', title: 'Skeleton Screen', desc: 'Content loading placeholders.', icon: '💀', families: ['Card Skeleton', 'List Skeleton', 'Table Skeleton', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'progress-bar': { cat: 'Feedback', title: 'Progress Bar', desc: 'Progress indicator bars.', icon: '📊', families: ['Standard Progress', 'Segmented Progress', 'Circular Progress', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'score-gauge': { cat: 'Feedback', title: 'Score Ring', desc: 'Circular score gauges.', icon: '🎯', families: ['Standard Ring', 'Gradient Ring', 'Multi Ring', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'status-indicator': { cat: 'Feedback', title: 'Status Indicator', desc: 'Live status displays.', icon: '🟢', families: ['Dot Status', 'Badge Status', 'Timeline Status', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'countdown': { cat: 'Feedback', title: 'Countdown', desc: 'Countdown timer displays.', icon: '⏱️', families: ['Standard Countdown', 'Flip Clock', 'Circular Countdown', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'confetti': { cat: 'Feedback', title: 'Confetti / Celebration', desc: 'Celebration animations.', icon: '🎉', families: ['Burst Confetti', 'Rain Confetti', 'Emoji Rain', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'connection-status': { cat: 'Feedback', title: 'Connection Status', desc: 'Network status indicators.', icon: '📶', families: ['Online/Offline', 'Signal Strength', 'Reconnecting', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },

  // States
  'state-offline': { cat: 'States', title: 'Offline State', desc: 'No-connection fallback.', icon: '📵', families: ['Standard Offline', 'Cached View', 'Retry Prompt', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'state-locked': { cat: 'States', title: 'Locked State', desc: 'Permission-restricted view.', icon: '🔒', families: ['Standard Locked', 'Upgrade Prompt', 'Request Access', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'state-expired': { cat: 'States', title: 'Expired State', desc: 'Time-elapsed fallback.', icon: '⌛', families: ['Standard Expired', 'Renewal Prompt', 'Grace Period', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'state-pending': { cat: 'States', title: 'Pending State', desc: 'Awaiting action/approval.', icon: '⏳', families: ['Standard Pending', 'With Timeline', 'Approval Pending', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'state-partial': { cat: 'States', title: 'Partial State', desc: 'Incomplete data display.', icon: '🔘', families: ['Standard Partial', 'Step Progress', 'Required Fields', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'state-success': { cat: 'States', title: 'Success State', desc: 'Operation complete display.', icon: '✅', families: ['Standard Success', 'With Confetti', 'With Next Steps', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },

  // Calendar
  'calendar': { cat: 'Calendar', title: 'Calendar View', desc: 'Monthly calendar component.', icon: '📅', families: ['Standard Calendar', 'With Events', 'Mini Calendar', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'date-range': { cat: 'Calendar', title: 'Date Range', desc: 'Date range selector.', icon: '📆', families: ['Standard Range', 'Preset Ranges', 'Custom Range', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'month-selector': { cat: 'Calendar', title: 'Month Selector', desc: 'Month selection control.', icon: '🗓️', families: ['Standard Month', 'Scroll Month', 'Grid Month', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'day-status': { cat: 'Calendar', title: 'Day Status Cell', desc: 'Calendar day with status.', icon: '📊', families: ['Standard Cell', 'Heatmap Cell', 'Multi Event Cell', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'schedule-view': { cat: 'Calendar', title: 'Schedule View', desc: 'Timeline schedule display.', icon: '📋', families: ['Day Schedule', 'Week Schedule', 'Agenda View', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },

  // Charts
  'bar-chart': { cat: 'Charts', title: 'Bar Chart', desc: 'Vertical and horizontal bars.', icon: '📊', families: ['Standard Bar', 'Horizontal Bar', 'Grouped Bar', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'stacked-bar': { cat: 'Charts', title: 'Stacked Bar', desc: 'Stacked bar compositions.', icon: '📊', families: ['Standard Stacked', 'Percent Stacked', 'Diverging', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'line-chart': { cat: 'Charts', title: 'Line / Area', desc: 'Line and area charts.', icon: '📈', families: ['Standard Line', 'Area Fill', 'Multi Series', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'donut-chart': { cat: 'Charts', title: 'Donut Chart', desc: 'Donut and pie charts.', icon: '🍩', families: ['Standard Donut', 'Half Donut', 'Nested Donut', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'chart-legend': { cat: 'Charts', title: 'Chart Legend', desc: 'Chart legend displays.', icon: '📋', families: ['Inline Legend', 'Card Legend', 'Interactive Legend', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'heatmap': { cat: 'Charts', title: 'Heatmap', desc: 'Density heatmap display.', icon: '🗺️', families: ['Standard Heatmap', 'Calendar Heat', 'Grid Heat', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'funnel-chart': { cat: 'Charts', title: 'Funnel Chart', desc: 'Conversion funnel display.', icon: '📉', families: ['Standard Funnel', 'Horizontal Funnel', 'Comparison', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'gauge-chart': { cat: 'Charts', title: 'Gauge Chart', desc: 'Gauge meter display.', icon: '⏱️', families: ['Standard Gauge', 'Semi Circle', 'Multi Gauge', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },

  // Analytics
  'score-display': { cat: 'Analytics', title: 'Score Display', desc: 'Score and metric display.', icon: '💯', families: ['Standard Score', 'Graded Score', 'Comparison Score', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'trend-sparkline': { cat: 'Analytics', title: 'Trend / Sparkline', desc: 'Inline trend displays.', icon: '📈', families: ['Standard Sparkline', 'With Change', 'Mini Area', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'comparison': { cat: 'Analytics', title: 'Comparison', desc: 'Value comparison displays.', icon: '⚖️', families: ['Side by Side', 'Percent Change', 'Trend Compare', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'breakdown': { cat: 'Analytics', title: 'Breakdown', desc: 'Data breakdown views.', icon: '📊', families: ['Standard Breakdown', 'Nested Breakdown', 'Visual Breakdown', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },

  // Infographics
  'stats-counter': { cat: 'Infographics', title: 'Stats Counter', desc: 'Animated number counters.', icon: '🔢', families: ['Standard Counter', 'Animated Counter', 'With Icon', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'comparison-visual': { cat: 'Infographics', title: 'Visual Comparison', desc: 'Before/after comparisons.', icon: '📊', families: ['Standard Comparison', 'Slider Compare', 'Overlay Compare', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'process-flow': { cat: 'Infographics', title: 'Process Flow', desc: 'Step-by-step flow diagrams.', icon: '🔄', families: ['Standard Flow', 'Branching Flow', 'Interactive Flow', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'key-insight': { cat: 'Infographics', title: 'Key Insight', desc: 'Highlighted data callouts.', icon: '💡', families: ['Standard Insight', 'With Chart', 'Actionable Insight', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'data-story': { cat: 'Infographics', title: 'Data Story', desc: 'Narrative data cards.', icon: '📖', families: ['Standard Story', 'With Timeline', 'Interactive Story', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },

  // Rewards
  'achievement': { cat: 'Rewards', title: 'Achievement Badge', desc: 'Milestone achievement badges.', icon: '🏆', families: ['Unlocked', 'Locked', 'Badge Grid', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'level-progress': { cat: 'Rewards', title: 'Level Progress', desc: 'User level and XP display.', icon: '📊', families: ['Standard Level', 'Tiered Level', 'XP Bar', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'streak': { cat: 'Rewards', title: 'Streak Counter', desc: 'Consecutive action tracking.', icon: '🔥', families: ['Flame Streak', 'Compact Badge', 'Streak Recovery', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'cashback': { cat: 'Rewards', title: 'Cashback Card', desc: 'Cashback and reward reveals.', icon: '💸', families: ['Earned Cashback', 'Offer Card', 'Scratch Reveal', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'leaderboard': { cat: 'Rewards', title: 'Leaderboard', desc: 'Competitive ranking display.', icon: '🏅', families: ['Full Leaderboard', 'Your Position', 'Podium Top 3', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'challenge': { cat: 'Rewards', title: 'Challenge Card', desc: 'Time-bound challenge display.', icon: '🎯', families: ['Active Challenge', 'Completed', 'Upcoming', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'referral': { cat: 'Rewards', title: 'Referral Card', desc: 'Referral invite cards.', icon: '👥', families: ['Invite Card', 'Progress Tracker', 'Dark Banner', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },

  // Authentication
  'login': { cat: 'Authentication', title: 'Login Form', desc: 'Email/password login.', icon: '🔑', families: ['Standard Login', 'With Social', 'OTP Login', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'signup': { cat: 'Authentication', title: 'Signup Form', desc: 'Registration flow.', icon: '📝', families: ['Standard Signup', 'Multi Step', 'With Invite', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'forgot-password': { cat: 'Authentication', title: 'Forgot Password', desc: 'Password reset flow.', icon: '🔒', families: ['Email Reset', 'Phone Reset', 'Security Questions', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'otp-verify': { cat: 'Authentication', title: 'OTP Verify', desc: 'Code verification screen.', icon: '📱', families: ['Standard OTP', 'With Timer', 'Voice OTP', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'biometric': { cat: 'Authentication', title: 'Biometric Auth', desc: 'Face/finger recognition.', icon: '👆', families: ['Face ID', 'Touch ID', 'PIN Fallback', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'social-login': { cat: 'Authentication', title: 'Social Login', desc: 'Google/Apple sign in.', icon: '🌐', families: ['Standard Social', 'Button Row', 'Icon Only', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },

  // Onboarding
  'welcome-screen': { cat: 'Onboarding', title: 'Welcome Screen', desc: 'First launch hero.', icon: '🎉', families: ['Standard Welcome', 'Animated Welcome', 'Video Welcome', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'feature-tour': { cat: 'Onboarding', title: 'Feature Tour', desc: 'Interactive walkthrough.', icon: '🗺️', families: ['Standard Tour', 'Spotlight Tour', 'Tooltip Tour', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'permission-request': { cat: 'Onboarding', title: 'Permission Request', desc: 'System permission ask.', icon: '🔐', families: ['Standard Permission', 'Explained Permission', 'Batch Permissions', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'setup-wizard': { cat: 'Onboarding', title: 'Setup Wizard', desc: 'Initial configuration.', icon: '🧙', families: ['Standard Wizard', 'Card Wizard', 'Progressive Wizard', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'onboard-complete': { cat: 'Onboarding', title: 'Completion', desc: 'Onboarding success.', icon: '✅', families: ['Standard Complete', 'With Confetti', 'Next Steps', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },

  // Communication
  'chat-bubble': { cat: 'Communication', title: 'Chat Bubble', desc: 'Message bubbles.', icon: '💬', families: ['Standard Bubble', 'With Media', 'System Message', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'message-thread': { cat: 'Communication', title: 'Message Thread', desc: 'Conversation list.', icon: '📧', families: ['Standard Thread', 'Compact Thread', 'With Preview', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'announcement': { cat: 'Communication', title: 'Announcement', desc: 'Platform updates.', icon: '📢', families: ['Standard Announcement', 'Banner', 'Modal Announcement', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'in-app-message': { cat: 'Communication', title: 'In App Message', desc: 'Targeted messages.', icon: '📩', families: ['Standard Message', 'Slide In', 'Full Screen', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },

  // Payments
  'payment-row': { cat: 'Payments', title: 'Payment Row', desc: 'Transaction list rows.', icon: '💳', families: ['Standard Row', 'With Status', 'Grouped Row', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'payment-card': { cat: 'Payments', title: 'Payment Method', desc: 'Card/bank display.', icon: '💳', families: ['Standard Card', 'With Default Badge', 'Add New', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'bank-account': { cat: 'Payments', title: 'Bank Account', desc: 'Linked bank account.', icon: '🏦', families: ['Standard Bank', 'With Balance', 'Verified Account', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'wallet': { cat: 'Payments', title: 'Wallet Balance', desc: 'Balance display.', icon: '👛', families: ['Standard Wallet', 'With History', 'Multi Currency', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'receipt': { cat: 'Payments', title: 'Receipt', desc: 'Payment receipt.', icon: '🧾', families: ['Standard Receipt', 'Detailed Receipt', 'Download Receipt', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'invoice': { cat: 'Payments', title: 'Invoice', desc: 'Bill/invoice view.', icon: '📄', families: ['Standard Invoice', 'With Breakdown', 'Past Due', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'split-payment': { cat: 'Payments', title: 'Split Payment', desc: 'Roommate split.', icon: '➗', families: ['Standard Split', 'Equal Split', 'Custom Split', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'autopay': { cat: 'Payments', title: 'Auto Pay', desc: 'Recurring setup.', icon: '🔁', families: ['Standard Autopay', 'With Schedule', 'Manage Autopay', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },

  // Property
  'property-listing': { cat: 'Property', title: 'Property Listing', desc: 'Property search cards.', icon: '🏠', families: ['Standard Listing', 'Grid Listing', 'Map Listing', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'property-gallery': { cat: 'Property', title: 'Property Gallery', desc: 'Image carousel.', icon: '🖼️', families: ['Standard Gallery', 'Full Screen', 'With Thumbnails', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'amenity-grid': { cat: 'Property', title: 'Amenity Grid', desc: 'Feature icons grid.', icon: '🏊', families: ['Standard Grid', 'Compact Grid', 'With Labels', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'location-map': { cat: 'Property', title: 'Location Map', desc: 'Map card.', icon: '📍', families: ['Standard Map', 'With Points of Interest', 'Street View', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'floor-plan': { cat: 'Property', title: 'Floor Plan', desc: 'Layout view.', icon: '📐', families: ['Standard Plan', 'Interactive Plan', 'With Measurements', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'property-compare': { cat: 'Property', title: 'Property Compare', desc: 'Side-by-side comparison.', icon: '⚖️', families: ['Standard Compare', 'Feature Matrix', 'With Scoring', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'maintenance': { cat: 'Property', title: 'Maintenance', desc: 'Repair request card.', icon: '🔧', families: ['Standard Request', 'With Timeline', 'Emergency', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'inspection': { cat: 'Property', title: 'Inspection', desc: 'Property inspection card.', icon: '📋', families: ['Standard Inspection', 'Checklist', 'Report', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'move-checklist': { cat: 'Property', title: 'Move Checklist', desc: 'Moving checklist.', icon: '📦', families: ['Standard Checklist', 'Timeline Checklist', 'Interactive', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },

  // Legal
  'lease-agreement': { cat: 'Legal', title: 'Lease Agreement', desc: 'Contract display.', icon: '📜', families: ['Standard Lease', 'Summary View', 'Clause Viewer', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'terms-section': { cat: 'Legal', title: 'Terms Section', desc: 'Legal disclosure.', icon: '📋', families: ['Standard Terms', 'Expandable Terms', 'Highlighted Terms', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'consent-block': { cat: 'Legal', title: 'Consent Block', desc: 'Agreement checkbox.', icon: '☑️', families: ['Standard Consent', 'Multi Consent', 'GDPR Consent', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'disclaimer': { cat: 'Legal', title: 'Disclaimer', desc: 'Legal notice.', icon: '⚠️', families: ['Standard Disclaimer', 'Inline Disclaimer', 'Footer Disclaimer', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'e-signature': { cat: 'Legal', title: 'E Signature', desc: 'Digital signing.', icon: '✍️', families: ['Draw Signature', 'Type Signature', 'Upload Signature', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'doc-attachment': { cat: 'Legal', title: 'Doc Attachment', desc: 'File display.', icon: '📎', families: ['Standard Attachment', 'Preview Attachment', 'Multi File', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'audit-log': { cat: 'Legal', title: 'Audit Log', desc: 'Activity trail.', icon: '📋', families: ['Standard Log', 'Filtered Log', 'Export Log', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'qr-code': { cat: 'Legal', title: 'QR Code', desc: 'Scannable code.', icon: '📱', families: ['Standard QR', 'Styled QR', 'Dynamic QR', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },

  // Social Proof
  'testimonial': { cat: 'Social Proof', title: 'Testimonial', desc: 'User testimonials.', icon: '💬', families: ['Standard Quote', 'Card Quote', 'Carousel', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'rating-summary': { cat: 'Social Proof', title: 'Rating Summary', desc: 'Aggregate ratings.', icon: '⭐', families: ['Standard Summary', 'With Breakdown', 'Compact', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'review-card': { cat: 'Social Proof', title: 'Review Card', desc: 'User review cards.', icon: '📝', families: ['Standard Review', 'With Photos', 'Verified Review', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'trust-badge': { cat: 'Social Proof', title: 'Trust Badge', desc: 'Trust and security badges.', icon: '🛡️', families: ['Standard Badge', 'Security Badge', 'Certification', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },

  // Media
  'image-carousel': { cat: 'Media', title: 'Image Carousel', desc: 'Image slider component.', icon: '🎠', families: ['Standard Carousel', 'Fullwidth', 'Thumbnail Nav', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'video-player': { cat: 'Media', title: 'Video Player', desc: 'Video playback component.', icon: '🎬', families: ['Standard Player', 'Mini Player', 'Inline Player', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'gallery-grid': { cat: 'Media', title: 'Gallery Grid', desc: 'Image grid layout.', icon: '🖼️', families: ['Standard Grid', 'Masonry Grid', 'With Lightbox', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },

  // Settings
  'settings-row': { cat: 'Settings', title: 'Settings Row', desc: 'Setting toggle rows.', icon: '⚙️', families: ['Standard Row', 'With Description', 'With Badge', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'notif-pref': { cat: 'Settings', title: 'Notification Pref', desc: 'Notification preferences.', icon: '🔔', families: ['Standard Pref', 'Grouped Pref', 'Channel Pref', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'privacy-setting': { cat: 'Settings', title: 'Privacy Setting', desc: 'Privacy controls.', icon: '🔐', families: ['Standard Privacy', 'With Explanation', 'Data Controls', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'account-manage': { cat: 'Settings', title: 'Account Manage', desc: 'Account management.', icon: '👤', families: ['Standard Account', 'With Danger Zone', 'Profile Edit', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'theme-picker': { cat: 'Settings', title: 'Theme Picker', desc: 'Theme selection.', icon: '🎨', families: ['Standard Theme', 'Color Scheme', 'Custom Theme', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'language-select': { cat: 'Settings', title: 'Language Select', desc: 'Language selection.', icon: '🌍', families: ['Standard Language', 'With Flags', 'Search Language', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },

  // Sticky
  'sticky-bar': { cat: 'Sticky', title: 'Sticky Action Bar', desc: 'Sticky bottom/top bars.', icon: '📌', families: ['Bottom Action', 'Top Alert', 'Floating Action', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'floating-banner': { cat: 'Sticky', title: 'Floating Banner', desc: 'Floating promotional banners.', icon: '🎯', families: ['Standard Float', 'Corner Float', 'Slide In', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'cookie-bar': { cat: 'Sticky', title: 'Cookie Consent', desc: 'Cookie consent bar.', icon: '🍪', families: ['Standard Cookie', 'With Preferences', 'Minimal', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'push-notif': { cat: 'Sticky', title: 'Push Notification', desc: 'Push notification display.', icon: '📲', families: ['Standard Push', 'Rich Push', 'Action Push', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },

  // Transitions
  'page-transition': { cat: 'Transitions', title: 'Page Transitions', desc: 'Page navigation animations.', icon: '🔄', families: ['Fade Transition', 'Slide Transition', 'Scale Transition', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'micro-animation': { cat: 'Transitions', title: 'Micro Animations', desc: 'Small interaction animations.', icon: '✨', families: ['Hover Effects', 'Loading Animations', 'State Changes', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'shared-element': { cat: 'Transitions', title: 'Shared Element', desc: 'Shared element transitions.', icon: '🔗', families: ['Card to Detail', 'List to Detail', 'Tab Transition', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },

  // Patterns
  'search-filter-bar': { cat: 'Patterns', title: 'Search + Filter', desc: 'Combined search and filter.', icon: '🔍', families: ['Standard Bar', 'With Chips', 'Advanced Filters', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'bulk-selection': { cat: 'Patterns', title: 'Bulk Selection', desc: 'Multi-item selection.', icon: '☑️', families: ['Standard Bulk', 'With Toolbar', 'Floating Actions', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'drag-drop': { cat: 'Patterns', title: 'Drag & Drop', desc: 'Drag and drop interfaces.', icon: '👆', families: ['List Reorder', 'Grid Reorder', 'Kanban', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'infinite-scroll': { cat: 'Patterns', title: 'Infinite Scroll', desc: 'Infinite scrolling lists.', icon: '📜', families: ['Standard Infinite', 'With Loader', 'Virtual Scroll', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'pull-refresh': { cat: 'Patterns', title: 'Pull to Refresh', desc: 'Pull-to-refresh gesture.', icon: '🔄', families: ['Standard Pull', 'Custom Animation', 'With Message', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'share-sheet': { cat: 'Patterns', title: 'Share Sheet', desc: 'Share action sheet.', icon: '📤', families: ['Standard Share', 'Social Share', 'Copy Link', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },

  // Product Patterns
  'rent-reporting': { cat: 'Product', title: 'Rent Reporting', desc: 'Credit reporting components.', icon: '📊', families: ['Standard Report', 'Score Impact', 'History View', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'payment-history': { cat: 'Product', title: 'Payment History', desc: 'Transaction log.', icon: '💰', families: ['Standard History', 'Grouped History', 'With Filters', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'tenant-invite': { cat: 'Product', title: 'Tenant Invite', desc: 'Invitation flow.', icon: '📧', families: ['Standard Invite', 'Bulk Invite', 'With Preview', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'add-property': { cat: 'Product', title: 'Add Property', desc: 'Property creation flow.', icon: '🏠', families: ['Standard Add', 'Wizard Add', 'Quick Add', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'tenant-screening': { cat: 'Product', title: 'Screening', desc: 'Background check.', icon: '🔍', families: ['Standard Screen', 'Detailed Screen', 'Quick Screen', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'verified-report': { cat: 'Product', title: 'Verified Report', desc: 'Verification card.', icon: '✅', families: ['Standard Verified', 'With Score', 'Download Report', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'investor-dash': { cat: 'Product', title: 'Investor Dash', desc: 'Investment view.', icon: '📈', families: ['Standard Dash', 'With Charts', 'Portfolio View', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'candidate-search': { cat: 'Product', title: 'Candidate Search', desc: 'Tenant search.', icon: '👥', families: ['Standard Search', 'With Filters', 'Map Search', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'sign-lease': { cat: 'Product', title: 'Sign & Lease', desc: 'Digital lease signing.', icon: '✍️', families: ['Standard Signing', 'Multi Party', 'With Preview', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'membership-life': { cat: 'Product', title: 'Membership Life', desc: 'Membership lifecycle.', icon: '💳', families: ['Active Member', 'Upgrade Path', 'Renewal', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'rewards-redeem': { cat: 'Product', title: 'Rewards Redeem', desc: 'Reward redemption.', icon: '🎁', families: ['Standard Redeem', 'Catalog View', 'Checkout', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'rm-pattern': { cat: 'Product', title: 'RM Pattern', desc: 'Relationship management.', icon: '🤝', families: ['Standard RM', 'Communication', 'Schedule', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'report-filter': { cat: 'Product', title: 'Report Filter', desc: 'Report filtering.', icon: '🔻', families: ['Standard Filter', 'Date Range', 'Multi Dimension', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'profile-edit': { cat: 'Product', title: 'Profile Edit', desc: 'Profile editing.', icon: '👤', families: ['Standard Edit', 'Photo Upload', 'Multi Section', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'notif-center': { cat: 'Product', title: 'Notification Center', desc: 'Notification management.', icon: '🔔', families: ['Standard Center', 'Grouped', 'With Actions', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'kyc-flow': { cat: 'Product', title: 'KYC Flow', desc: 'Identity verification.', icon: '🪪', families: ['Standard KYC', 'Document Upload', 'Video KYC', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'subscription': { cat: 'Product', title: 'Subscription', desc: 'Plan management.', icon: '🔁', families: ['Standard Plan', 'Comparison', 'Billing History', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },

  // Page Templates
  'page-list': { cat: 'Templates', title: 'List Page', desc: 'Data listing template.', icon: '📋', families: ['Standard List', 'With Sidebar', 'Split View', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'page-detail': { cat: 'Templates', title: 'Detail Page', desc: 'Single item view template.', icon: '📄', families: ['Standard Detail', 'Tabbed Detail', 'With Sidebar', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'page-dashboard': { cat: 'Templates', title: 'Dashboard Page', desc: 'Overview layout template.', icon: '📊', families: ['Standard Dashboard', 'KPI Focus', 'Activity Focus', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'page-form': { cat: 'Templates', title: 'Form Page', desc: 'Data entry template.', icon: '📝', families: ['Standard Form', 'Wizard Form', 'Side Panel Form', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'page-modal-flow': { cat: 'Templates', title: 'Modal Flow', desc: 'Multi-step modal template.', icon: '🪟', families: ['Standard Flow', 'With Preview', 'Split Modal', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'page-settings': { cat: 'Templates', title: 'Settings Page', desc: 'Preferences template.', icon: '⚙️', families: ['Standard Settings', 'Tabbed Settings', 'Grouped', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'page-onboarding': { cat: 'Templates', title: 'Onboarding Page', desc: 'Welcome flow template.', icon: '🎉', families: ['Standard Onboarding', 'Carousel', 'Progressive', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'page-error': { cat: 'Templates', title: 'Error Page', desc: '404/500 template.', icon: '❌', families: ['Standard 404', '500 Server Error', 'Maintenance', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'page-auth': { cat: 'Templates', title: 'Auth Page', desc: 'Login/signup template.', icon: '🔑', families: ['Standard Auth', 'Split Screen', 'Minimal', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'page-empty': { cat: 'Templates', title: 'Empty Page', desc: 'No content template.', icon: '📭', families: ['Standard Empty', 'With Actions', 'Illustrated', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'page-success': { cat: 'Templates', title: 'Success Page', desc: 'Completion template.', icon: '✅', families: ['Standard Success', 'With Confetti', 'Next Steps', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },

  // Backgrounds
  'solid-bg': { cat: 'Backgrounds', title: 'Solid Colors', desc: 'Solid background colors.', icon: '🎨', families: ['Primary Fill', 'Surface Fill', 'Muted Fill', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'mesh-bg': { cat: 'Backgrounds', title: 'Mesh Gradients', desc: 'Smooth mesh gradient backgrounds.', icon: '🌈', families: ['Brand Mesh', 'Subtle Mesh', 'Dark Mesh', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'pattern-bg': { cat: 'Backgrounds', title: 'Patterns', desc: 'Subtle repeating patterns.', icon: '🏁', families: ['Dot Grid', 'Line Grid', 'Noise Texture', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },
  'animated-bg': { cat: 'Backgrounds', title: 'Animated', desc: 'Subtly moving backgrounds.', icon: '✨', families: ['Floating Orbs', 'Wave Motion', 'Aurora', 'Premium Glass', 'Neumorphic', 'CRED Style Dark'] },

  // AUTO-EXPANSION
  'bottom-tab-bar': { cat: 'Bottom Bars', title: 'Tab Bottom Bar', desc: 'Standard tab-based bottom navigation.', icon: '📱', families: ["iOS Standard 5-Tab Bar","Floating Glass Pill Dock","Icon-Only Minimal Dock","Curved FAB Notch Bar","Dynamic Island Adaptive Bar","Labeled Icon Grid Bar","Scrollable Category Bar","Split Action Bottom Bar","Gradient Glow Dock","Dark Frosted Command Dock"] },
  'floating-pill-nav': { cat: 'Bottom Bars', title: 'Floating Pill Nav', desc: 'Floating pill-shaped bottom nav bar.', icon: '💊', families: ["iOS Standard 5-Tab Bar","Floating Glass Pill Dock","Icon-Only Minimal Dock","Curved FAB Notch Bar","Dynamic Island Adaptive Bar","Labeled Icon Grid Bar","Scrollable Category Bar","Split Action Bottom Bar","Gradient Glow Dock","Dark Frosted Command Dock"] },
  'icon-only-nav': { cat: 'Bottom Bars', title: 'Icon-Only Dock', desc: 'Minimal icon-only navigation dock.', icon: '⚡', families: ["iOS Standard 5-Tab Bar","Floating Glass Pill Dock","Icon-Only Minimal Dock","Curved FAB Notch Bar","Dynamic Island Adaptive Bar","Labeled Icon Grid Bar","Scrollable Category Bar","Split Action Bottom Bar","Gradient Glow Dock","Dark Frosted Command Dock"] },
  'curved-notch-nav': { cat: 'Bottom Bars', title: 'Curved Notch Nav', desc: 'Curved center-notch with FAB.', icon: '🌊', families: ["iOS Standard 5-Tab Bar","Floating Glass Pill Dock","Icon-Only Minimal Dock","Curved FAB Notch Bar","Dynamic Island Adaptive Bar","Labeled Icon Grid Bar","Scrollable Category Bar","Split Action Bottom Bar","Gradient Glow Dock","Dark Frosted Command Dock"] },
  'dynamic-island-nav': { cat: 'Bottom Bars', title: 'Dynamic Island Nav', desc: 'Apple-style Dynamic Island bottom bar.', icon: '🏝️', families: ["iOS Standard 5-Tab Bar","Floating Glass Pill Dock","Icon-Only Minimal Dock","Curved FAB Notch Bar","Dynamic Island Adaptive Bar","Labeled Icon Grid Bar","Scrollable Category Bar","Split Action Bottom Bar","Gradient Glow Dock","Dark Frosted Command Dock"] },
  'gesture-nav': { cat: 'Bottom Bars', title: 'Gesture Nav Bar', desc: 'Swipe/gesture-based minimal nav.', icon: '👆', families: ["iOS Standard 5-Tab Bar","Floating Glass Pill Dock","Icon-Only Minimal Dock","Curved FAB Notch Bar","Dynamic Island Adaptive Bar","Labeled Icon Grid Bar","Scrollable Category Bar","Split Action Bottom Bar","Gradient Glow Dock","Dark Frosted Command Dock"] },
  'compact-sheet': { cat: 'Sheets & Drawers', title: 'Compact Sheet', desc: 'Small quick-action bottom sheet.', icon: '📋', families: ["Minimal Quick-Action Sheet","Scroll-Snap Multi-Stop Sheet","Full-Screen Immersive Sheet","Side-Sliding Panel Drawer","Nested Multi-Step Sheet Stack","Form-Focused Keyboard Sheet","Map & Location Sheet","Image Gallery Sheet","Search Results Sheet","Dark Glass Command Sheet"] },
  'full-sheet': { cat: 'Sheets & Drawers', title: 'Full Sheet', desc: 'Full-screen expandable sheet.', icon: '📄', families: ["Minimal Quick-Action Sheet","Scroll-Snap Multi-Stop Sheet","Full-Screen Immersive Sheet","Side-Sliding Panel Drawer","Nested Multi-Step Sheet Stack","Form-Focused Keyboard Sheet","Map & Location Sheet","Image Gallery Sheet","Search Results Sheet","Dark Glass Command Sheet"] },
  'side-drawer': { cat: 'Sheets & Drawers', title: 'Side Drawer', desc: 'Side-sliding drawer panel.', icon: '🗂️', families: ["Minimal Quick-Action Sheet","Scroll-Snap Multi-Stop Sheet","Full-Screen Immersive Sheet","Side-Sliding Panel Drawer","Nested Multi-Step Sheet Stack","Form-Focused Keyboard Sheet","Map & Location Sheet","Image Gallery Sheet","Search Results Sheet","Dark Glass Command Sheet"] },
  'nested-sheet': { cat: 'Sheets & Drawers', title: 'Nested Sheet', desc: 'Multi-step nested sheet stack.', icon: '📚', families: ["Minimal Quick-Action Sheet","Scroll-Snap Multi-Stop Sheet","Full-Screen Immersive Sheet","Side-Sliding Panel Drawer","Nested Multi-Step Sheet Stack","Form-Focused Keyboard Sheet","Map & Location Sheet","Image Gallery Sheet","Search Results Sheet","Dark Glass Command Sheet"] },
  'scroll-sheet': { cat: 'Sheets & Drawers', title: 'Scroll Sheet', desc: 'Scrollable content sheet.', icon: '📜', families: ["Minimal Quick-Action Sheet","Scroll-Snap Multi-Stop Sheet","Full-Screen Immersive Sheet","Side-Sliding Panel Drawer","Nested Multi-Step Sheet Stack","Form-Focused Keyboard Sheet","Map & Location Sheet","Image Gallery Sheet","Search Results Sheet","Dark Glass Command Sheet"] },
  'modal-sheet': { cat: 'Sheets & Drawers', title: 'Modal Sheet', desc: 'Modal-style centered sheet.', icon: '🪟', families: ["Minimal Quick-Action Sheet","Scroll-Snap Multi-Stop Sheet","Full-Screen Immersive Sheet","Side-Sliding Panel Drawer","Nested Multi-Step Sheet Stack","Form-Focused Keyboard Sheet","Map & Location Sheet","Image Gallery Sheet","Search Results Sheet","Dark Glass Command Sheet"] },
  'keyboard-sheet': { cat: 'Sheets & Drawers', title: 'Keyboard Sheet', desc: 'Input-focused keyboard-aware sheet.', icon: '⌨️', families: ["Minimal Quick-Action Sheet","Scroll-Snap Multi-Stop Sheet","Full-Screen Immersive Sheet","Side-Sliding Panel Drawer","Nested Multi-Step Sheet Stack","Form-Focused Keyboard Sheet","Map & Location Sheet","Image Gallery Sheet","Search Results Sheet","Dark Glass Command Sheet"] },
  'map-sheet': { cat: 'Sheets & Drawers', title: 'Map Sheet', desc: 'Location/map-integrated sheet.', icon: '🗺️', families: ["Minimal Quick-Action Sheet","Scroll-Snap Multi-Stop Sheet","Full-Screen Immersive Sheet","Side-Sliding Panel Drawer","Nested Multi-Step Sheet Stack","Form-Focused Keyboard Sheet","Map & Location Sheet","Image Gallery Sheet","Search Results Sheet","Dark Glass Command Sheet"] },
  'primary-btn': { cat: 'Buttons', title: 'Primary Button', desc: 'Main CTA action button.', icon: '🔵', families: ["Filled Primary CTA Button","Outlined Secondary Button","Text-Only Tertiary Link","Icon-Only Circular Action","Pill Rounded Action Button","Premium Gradient CTA","Loading State Spinner Button","Split Dropdown Action","Segmented Button Group","Dark Prestige Action Button"] },
  'secondary-btn': { cat: 'Buttons', title: 'Secondary Button', desc: 'Secondary outlined action.', icon: '⚪', families: ["Filled Primary CTA Button","Outlined Secondary Button","Text-Only Tertiary Link","Icon-Only Circular Action","Pill Rounded Action Button","Premium Gradient CTA","Loading State Spinner Button","Split Dropdown Action","Segmented Button Group","Dark Prestige Action Button"] },
  'tertiary-btn': { cat: 'Buttons', title: 'Tertiary Button', desc: 'Text-only action button.', icon: '📝', families: ["Filled Primary CTA Button","Outlined Secondary Button","Text-Only Tertiary Link","Icon-Only Circular Action","Pill Rounded Action Button","Premium Gradient CTA","Loading State Spinner Button","Split Dropdown Action","Segmented Button Group","Dark Prestige Action Button"] },
  'icon-btn': { cat: 'Buttons', title: 'Icon Button', desc: 'Icon-only circular action.', icon: '⭕', families: ["Filled Primary CTA Button","Outlined Secondary Button","Text-Only Tertiary Link","Icon-Only Circular Action","Pill Rounded Action Button","Premium Gradient CTA","Loading State Spinner Button","Split Dropdown Action","Segmented Button Group","Dark Prestige Action Button"] },
  'pill-btn': { cat: 'Buttons', title: 'Pill Button', desc: 'Pill-shaped rounded button.', icon: '💊', families: ["Filled Primary CTA Button","Outlined Secondary Button","Text-Only Tertiary Link","Icon-Only Circular Action","Pill Rounded Action Button","Premium Gradient CTA","Loading State Spinner Button","Split Dropdown Action","Segmented Button Group","Dark Prestige Action Button"] },
  'gradient-btn': { cat: 'Buttons', title: 'Gradient Button', desc: 'Premium gradient-filled button.', icon: '🌈', families: ["Filled Primary CTA Button","Outlined Secondary Button","Text-Only Tertiary Link","Icon-Only Circular Action","Pill Rounded Action Button","Premium Gradient CTA","Loading State Spinner Button","Split Dropdown Action","Segmented Button Group","Dark Prestige Action Button"] },
  'loading-btn': { cat: 'Buttons', title: 'Loading Button', desc: 'Button with loading spinner states.', icon: '⏳', families: ["Filled Primary CTA Button","Outlined Secondary Button","Text-Only Tertiary Link","Icon-Only Circular Action","Pill Rounded Action Button","Premium Gradient CTA","Loading State Spinner Button","Split Dropdown Action","Segmented Button Group","Dark Prestige Action Button"] },
  'split-btn': { cat: 'Buttons', title: 'Split Button', desc: 'Button with dropdown menu.', icon: '✂️', families: ["Filled Primary CTA Button","Outlined Secondary Button","Text-Only Tertiary Link","Icon-Only Circular Action","Pill Rounded Action Button","Premium Gradient CTA","Loading State Spinner Button","Split Dropdown Action","Segmented Button Group","Dark Prestige Action Button"] },
  'group-btn': { cat: 'Buttons', title: 'Button Group', desc: 'Grouped button toolbar.', icon: '🔲', families: ["Filled Primary CTA Button","Outlined Secondary Button","Text-Only Tertiary Link","Icon-Only Circular Action","Pill Rounded Action Button","Premium Gradient CTA","Loading State Spinner Button","Split Dropdown Action","Segmented Button Group","Dark Prestige Action Button"] },
  'toggle-btn': { cat: 'Buttons', title: 'Toggle Button', desc: 'Toggle button with active state.', icon: '🔘', families: ["Filled Primary CTA Button","Outlined Secondary Button","Text-Only Tertiary Link","Icon-Only Circular Action","Pill Rounded Action Button","Premium Gradient CTA","Loading State Spinner Button","Split Dropdown Action","Segmented Button Group","Dark Prestige Action Button"] },
  'destructive-btn': { cat: 'Buttons', title: 'Destructive Button', desc: 'Danger/delete action button.', icon: '🗑️', families: ["Filled Primary CTA Button","Outlined Secondary Button","Text-Only Tertiary Link","Icon-Only Circular Action","Pill Rounded Action Button","Premium Gradient CTA","Loading State Spinner Button","Split Dropdown Action","Segmented Button Group","Dark Prestige Action Button"] },
  'social-btn': { cat: 'Buttons', title: 'Social Button', desc: 'Social media login buttons.', icon: '🔗', families: ["Filled Primary CTA Button","Outlined Secondary Button","Text-Only Tertiary Link","Icon-Only Circular Action","Pill Rounded Action Button","Premium Gradient CTA","Loading State Spinner Button","Split Dropdown Action","Segmented Button Group","Dark Prestige Action Button"] },
  'avatar-single': { cat: 'Avatars & Profiles', title: 'Single Avatar', desc: 'User avatar with size variants.', icon: '👤', families: ["Circle Photo Avatar (SM/MD/LG)","Rounded Square Avatar","Stacked Group Avatar (+N)","Online/Offline Presence Dot","Notification Badge Count","Camera Edit Overlay Avatar","Initials Placeholder Avatar","Gradient Ring Avatar","Verified Check Avatar","Dark Profile Shield Avatar"] },
  'avatar-group': { cat: 'Avatars & Profiles', title: 'Avatar Group', desc: 'Stacked avatar group display.', icon: '👥', families: ["Circle Photo Avatar (SM/MD/LG)","Rounded Square Avatar","Stacked Group Avatar (+N)","Online/Offline Presence Dot","Notification Badge Count","Camera Edit Overlay Avatar","Initials Placeholder Avatar","Gradient Ring Avatar","Verified Check Avatar","Dark Profile Shield Avatar"] },
  'avatar-presence': { cat: 'Avatars & Profiles', title: 'Avatar Presence', desc: 'Avatar with online/offline status.', icon: '🟢', families: ["Circle Photo Avatar (SM/MD/LG)","Rounded Square Avatar","Stacked Group Avatar (+N)","Online/Offline Presence Dot","Notification Badge Count","Camera Edit Overlay Avatar","Initials Placeholder Avatar","Gradient Ring Avatar","Verified Check Avatar","Dark Profile Shield Avatar"] },
  'avatar-badge': { cat: 'Avatars & Profiles', title: 'Avatar Badge', desc: 'Avatar with notification count.', icon: '🔴', families: ["Circle Photo Avatar (SM/MD/LG)","Rounded Square Avatar","Stacked Group Avatar (+N)","Online/Offline Presence Dot","Notification Badge Count","Camera Edit Overlay Avatar","Initials Placeholder Avatar","Gradient Ring Avatar","Verified Check Avatar","Dark Profile Shield Avatar"] },
  'avatar-edit': { cat: 'Avatars & Profiles', title: 'Avatar Edit', desc: 'Editable avatar with camera overlay.', icon: '📸', families: ["Circle Photo Avatar (SM/MD/LG)","Rounded Square Avatar","Stacked Group Avatar (+N)","Online/Offline Presence Dot","Notification Badge Count","Camera Edit Overlay Avatar","Initials Placeholder Avatar","Gradient Ring Avatar","Verified Check Avatar","Dark Profile Shield Avatar"] },
  'avatar-placeholder': { cat: 'Avatars & Profiles', title: 'Avatar Placeholder', desc: 'Initials/icon placeholder avatar.', icon: '🅰️', families: ["Circle Photo Avatar (SM/MD/LG)","Rounded Square Avatar","Stacked Group Avatar (+N)","Online/Offline Presence Dot","Notification Badge Count","Camera Edit Overlay Avatar","Initials Placeholder Avatar","Gradient Ring Avatar","Verified Check Avatar","Dark Profile Shield Avatar"] },
  'status-chip': { cat: 'Chips & Tags', title: 'Status Chip', desc: 'Colored status indicator chips.', icon: '🏷️', families: ["Success/Error Status Chip","Removable Input Tag Chip","Single-Select Choice Pill","AI Assist Suggestion Chip","Autocomplete Chip","Price Amount Chip","Category Filter Chip","Icon-Leading Action Chip","Multi-Select Count Chip","Dark Glass Command Chip"] },
  'input-chip': { cat: 'Chips & Tags', title: 'Input Chip', desc: 'User-entered removable chips.', icon: '✏️', families: ["Success/Error Status Chip","Removable Input Tag Chip","Single-Select Choice Pill","AI Assist Suggestion Chip","Autocomplete Chip","Price Amount Chip","Category Filter Chip","Icon-Leading Action Chip","Multi-Select Count Chip","Dark Glass Command Chip"] },
  'choice-chip': { cat: 'Chips & Tags', title: 'Choice Chip', desc: 'Single-select choice chips.', icon: '☑️', families: ["Success/Error Status Chip","Removable Input Tag Chip","Single-Select Choice Pill","AI Assist Suggestion Chip","Autocomplete Chip","Price Amount Chip","Category Filter Chip","Icon-Leading Action Chip","Multi-Select Count Chip","Dark Glass Command Chip"] },
  'assist-chip': { cat: 'Chips & Tags', title: 'Assist Chip', desc: 'AI/smart suggestion chips.', icon: '🤖', families: ["Success/Error Status Chip","Removable Input Tag Chip","Single-Select Choice Pill","AI Assist Suggestion Chip","Autocomplete Chip","Price Amount Chip","Category Filter Chip","Icon-Leading Action Chip","Multi-Select Count Chip","Dark Glass Command Chip"] },
  'suggestion-chip': { cat: 'Chips & Tags', title: 'Suggestion Chip', desc: 'Auto-complete suggestion chips.', icon: '💡', families: ["Success/Error Status Chip","Removable Input Tag Chip","Single-Select Choice Pill","AI Assist Suggestion Chip","Autocomplete Chip","Price Amount Chip","Category Filter Chip","Icon-Leading Action Chip","Multi-Select Count Chip","Dark Glass Command Chip"] },
  'price-chip': { cat: 'Chips & Tags', title: 'Price Chip', desc: 'Price/amount display chips.', icon: '💰', families: ["Success/Error Status Chip","Removable Input Tag Chip","Single-Select Choice Pill","AI Assist Suggestion Chip","Autocomplete Chip","Price Amount Chip","Category Filter Chip","Icon-Leading Action Chip","Multi-Select Count Chip","Dark Glass Command Chip"] },
  'promo-banner': { cat: 'Banners', title: 'Promo Banner', desc: 'Promotional marketing banner.', icon: '📢', families: ["Full-Width Hero Promo Banner","Slim Alert System Banner","Animated Feature Launch Banner","Critical Urgent Action Banner","Dismissible Offer Card","Step Progress Onboard Banner","Split Media & Text Banner","Countdown Timer Banner","Testimonial Slide Banner","Dark Announcement Broadcast"] },
  'system-banner': { cat: 'Banners', title: 'System Banner', desc: 'System maintenance/update banner.', icon: '⚙️', families: ["Full-Width Hero Promo Banner","Slim Alert System Banner","Animated Feature Launch Banner","Critical Urgent Action Banner","Dismissible Offer Card","Step Progress Onboard Banner","Split Media & Text Banner","Countdown Timer Banner","Testimonial Slide Banner","Dark Announcement Broadcast"] },
  'feature-banner': { cat: 'Banners', title: 'Feature Banner', desc: 'New feature announcement banner.', icon: '✨', families: ["Full-Width Hero Promo Banner","Slim Alert System Banner","Animated Feature Launch Banner","Critical Urgent Action Banner","Dismissible Offer Card","Step Progress Onboard Banner","Split Media & Text Banner","Countdown Timer Banner","Testimonial Slide Banner","Dark Announcement Broadcast"] },
  'urgent-banner': { cat: 'Banners', title: 'Urgent Banner', desc: 'Critical urgent action banner.', icon: '🚨', families: ["Full-Width Hero Promo Banner","Slim Alert System Banner","Animated Feature Launch Banner","Critical Urgent Action Banner","Dismissible Offer Card","Step Progress Onboard Banner","Split Media & Text Banner","Countdown Timer Banner","Testimonial Slide Banner","Dark Announcement Broadcast"] },
  'offer-banner': { cat: 'Banners', title: 'Offer Banner', desc: 'Limited-time offer banner.', icon: '🎁', families: ["Full-Width Hero Promo Banner","Slim Alert System Banner","Animated Feature Launch Banner","Critical Urgent Action Banner","Dismissible Offer Card","Step Progress Onboard Banner","Split Media & Text Banner","Countdown Timer Banner","Testimonial Slide Banner","Dark Announcement Broadcast"] },
  'onboard-banner': { cat: 'Banners', title: 'Onboard Banner', desc: 'Onboarding progress banner.', icon: '🚀', families: ["Full-Width Hero Promo Banner","Slim Alert System Banner","Animated Feature Launch Banner","Critical Urgent Action Banner","Dismissible Offer Card","Step Progress Onboard Banner","Split Media & Text Banner","Countdown Timer Banner","Testimonial Slide Banner","Dark Announcement Broadcast"] },
  'global-search': { cat: 'Search', title: 'Global Search', desc: 'Full app search with categories.', icon: '🔍', families: ["Global Search with Categories","In-Context Inline Search","Voice Command Search Bar","Multi-Filter Chip Search","Spotlight Command Palette","Recent & Trending History","Visual Result Grid Search","Autocomplete Dropdown Search","Location-Aware Map Search","Dark Hacker Terminal Search"] },
  'contextual-search': { cat: 'Search', title: 'Contextual Search', desc: 'In-page contextual search.', icon: '🔎', families: ["Global Search with Categories","In-Context Inline Search","Voice Command Search Bar","Multi-Filter Chip Search","Spotlight Command Palette","Recent & Trending History","Visual Result Grid Search","Autocomplete Dropdown Search","Location-Aware Map Search","Dark Hacker Terminal Search"] },
  'voice-search': { cat: 'Search', title: 'Voice Search', desc: 'Voice-input search interface.', icon: '🎤', families: ["Global Search with Categories","In-Context Inline Search","Voice Command Search Bar","Multi-Filter Chip Search","Spotlight Command Palette","Recent & Trending History","Visual Result Grid Search","Autocomplete Dropdown Search","Location-Aware Map Search","Dark Hacker Terminal Search"] },
  'filter-search': { cat: 'Search', title: 'Filter Search', desc: 'Search with inline filter chips.', icon: '🏷️', families: ["Global Search with Categories","In-Context Inline Search","Voice Command Search Bar","Multi-Filter Chip Search","Spotlight Command Palette","Recent & Trending History","Visual Result Grid Search","Autocomplete Dropdown Search","Location-Aware Map Search","Dark Hacker Terminal Search"] },
  'spotlight-search': { cat: 'Search', title: 'Spotlight Search', desc: 'macOS-style spotlight search.', icon: '💫', families: ["Global Search with Categories","In-Context Inline Search","Voice Command Search Bar","Multi-Filter Chip Search","Spotlight Command Palette","Recent & Trending History","Visual Result Grid Search","Autocomplete Dropdown Search","Location-Aware Map Search","Dark Hacker Terminal Search"] },
  'recent-search': { cat: 'Search', title: 'Recent Search', desc: 'Recent searches with history.', icon: '🕐', families: ["Global Search with Categories","In-Context Inline Search","Voice Command Search Bar","Multi-Filter Chip Search","Spotlight Command Palette","Recent & Trending History","Visual Result Grid Search","Autocomplete Dropdown Search","Location-Aware Map Search","Dark Hacker Terminal Search"] },
  'push-notification': { cat: 'Notifications', title: 'Push Notification', desc: 'System push notification card.', icon: '🔔', families: ["iOS Push Notification Card","In-App Top Banner Alert","Grouped Timeline Feed","Dot & Badge Indicators","Full Notification Center Panel","Stacked Group Notifications","Actionable CTA Notification","Preference Settings Panel","Toast Float Notification","Dark System Alert Card"] },
  'in-app-banner-notif': { cat: 'Notifications', title: 'In-App Banner', desc: 'In-app top banner notification.', icon: '📣', families: ["iOS Push Notification Card","In-App Top Banner Alert","Grouped Timeline Feed","Dot & Badge Indicators","Full Notification Center Panel","Stacked Group Notifications","Actionable CTA Notification","Preference Settings Panel","Toast Float Notification","Dark System Alert Card"] },
  'notification-list': { cat: 'Notifications', title: 'Notification List', desc: 'Full notification feed list.', icon: '📋', families: ["iOS Push Notification Card","In-App Top Banner Alert","Grouped Timeline Feed","Dot & Badge Indicators","Full Notification Center Panel","Stacked Group Notifications","Actionable CTA Notification","Preference Settings Panel","Toast Float Notification","Dark System Alert Card"] },
  'notification-dot': { cat: 'Notifications', title: 'Notification Dot', desc: 'Badge/dot notification indicators.', icon: '🔴', families: ["iOS Push Notification Card","In-App Top Banner Alert","Grouped Timeline Feed","Dot & Badge Indicators","Full Notification Center Panel","Stacked Group Notifications","Actionable CTA Notification","Preference Settings Panel","Toast Float Notification","Dark System Alert Card"] },
  'notif-group': { cat: 'Notifications', title: 'Notification Group', desc: 'Grouped notification stack.', icon: '📬', families: ["iOS Push Notification Card","In-App Top Banner Alert","Grouped Timeline Feed","Dot & Badge Indicators","Full Notification Center Panel","Stacked Group Notifications","Actionable CTA Notification","Preference Settings Panel","Toast Float Notification","Dark System Alert Card"] },
  'notif-action': { cat: 'Notifications', title: 'Actionable Notification', desc: 'Notification with CTA actions.', icon: '⚡', families: ["iOS Push Notification Card","In-App Top Banner Alert","Grouped Timeline Feed","Dot & Badge Indicators","Full Notification Center Panel","Stacked Group Notifications","Actionable CTA Notification","Preference Settings Panel","Toast Float Notification","Dark System Alert Card"] },
  'notif-settings': { cat: 'Notifications', title: 'Notification Settings', desc: 'Notification preferences panel.', icon: '⚙️', families: ["iOS Push Notification Card","In-App Top Banner Alert","Grouped Timeline Feed","Dot & Badge Indicators","Full Notification Center Panel","Stacked Group Notifications","Actionable CTA Notification","Preference Settings Panel","Toast Float Notification","Dark System Alert Card"] },
  'balance-card': { cat: 'Financial Widgets', title: 'Balance Card', desc: 'Account balance display card.', icon: '💳', families: ["Balance Overview Hero Card","Transaction Detail Row","Category Spending Donut","Credit Score Gauge Meter","EMI Slider Calculator","Live Exchange Rate Ticker","Split Bill Calculator","Savings Goal Progress Ring","Budget Threshold Meter","Dark Vault Financial Card"] },
  'transaction-card': { cat: 'Financial Widgets', title: 'Transaction Card', desc: 'Individual transaction detail.', icon: '💸', families: ["Balance Overview Hero Card","Transaction Detail Row","Category Spending Donut","Credit Score Gauge Meter","EMI Slider Calculator","Live Exchange Rate Ticker","Split Bill Calculator","Savings Goal Progress Ring","Budget Threshold Meter","Dark Vault Financial Card"] },
  'spending-chart': { cat: 'Financial Widgets', title: 'Spending Chart', desc: 'Spending category breakdown.', icon: '📊', families: ["Balance Overview Hero Card","Transaction Detail Row","Category Spending Donut","Credit Score Gauge Meter","EMI Slider Calculator","Live Exchange Rate Ticker","Split Bill Calculator","Savings Goal Progress Ring","Budget Threshold Meter","Dark Vault Financial Card"] },
  'credit-score': { cat: 'Financial Widgets', title: 'Credit Score', desc: 'Credit score gauge card.', icon: '📈', families: ["Balance Overview Hero Card","Transaction Detail Row","Category Spending Donut","Credit Score Gauge Meter","EMI Slider Calculator","Live Exchange Rate Ticker","Split Bill Calculator","Savings Goal Progress Ring","Budget Threshold Meter","Dark Vault Financial Card"] },
  'emi-calculator': { cat: 'Financial Widgets', title: 'EMI Calculator', desc: 'EMI/loan calculator widget.', icon: '🧮', families: ["Balance Overview Hero Card","Transaction Detail Row","Category Spending Donut","Credit Score Gauge Meter","EMI Slider Calculator","Live Exchange Rate Ticker","Split Bill Calculator","Savings Goal Progress Ring","Budget Threshold Meter","Dark Vault Financial Card"] },
  'exchange-rate': { cat: 'Financial Widgets', title: 'Exchange Rate', desc: 'Currency exchange rate card.', icon: '💱', families: ["Balance Overview Hero Card","Transaction Detail Row","Category Spending Donut","Credit Score Gauge Meter","EMI Slider Calculator","Live Exchange Rate Ticker","Split Bill Calculator","Savings Goal Progress Ring","Budget Threshold Meter","Dark Vault Financial Card"] },
  'bill-split': { cat: 'Financial Widgets', title: 'Bill Split', desc: 'Bill splitting calculator.', icon: '✂️', families: ["Balance Overview Hero Card","Transaction Detail Row","Category Spending Donut","Credit Score Gauge Meter","EMI Slider Calculator","Live Exchange Rate Ticker","Split Bill Calculator","Savings Goal Progress Ring","Budget Threshold Meter","Dark Vault Financial Card"] },
  'savings-goal': { cat: 'Financial Widgets', title: 'Savings Goal', desc: 'Savings goal progress tracker.', icon: '🎯', families: ["Balance Overview Hero Card","Transaction Detail Row","Category Spending Donut","Credit Score Gauge Meter","EMI Slider Calculator","Live Exchange Rate Ticker","Split Bill Calculator","Savings Goal Progress Ring","Budget Threshold Meter","Dark Vault Financial Card"] },
  'budget-meter': { cat: 'Financial Widgets', title: 'Budget Meter', desc: 'Monthly budget meter/gauge.', icon: '📉', families: ["Balance Overview Hero Card","Transaction Detail Row","Category Spending Donut","Credit Score Gauge Meter","EMI Slider Calculator","Live Exchange Rate Ticker","Split Bill Calculator","Savings Goal Progress Ring","Budget Threshold Meter","Dark Vault Financial Card"] },
  'tax-summary': { cat: 'Financial Widgets', title: 'Tax Summary', desc: 'Tax calculation summary card.', icon: '🧾', families: ["Balance Overview Hero Card","Transaction Detail Row","Category Spending Donut","Credit Score Gauge Meter","EMI Slider Calculator","Live Exchange Rate Ticker","Split Bill Calculator","Savings Goal Progress Ring","Budget Threshold Meter","Dark Vault Financial Card"] },
  'property-map': { cat: 'Maps & Location', title: 'Property Map', desc: 'Interactive property map marker.', icon: '📍', families: ["Property Pin Map Card","Neighborhood Score Guide","Commute Time Calculator","Nearby POI Grid","Overlay Filter Map Panel","Address Autocomplete Picker","Satellite View Selector","Route Direction Card","Area Price Heatmap","Dark Tactical Map Card"] },
  'area-guide': { cat: 'Maps & Location', title: 'Area Guide', desc: 'Neighborhood/area guide card.', icon: '🏘️', families: ["Property Pin Map Card","Neighborhood Score Guide","Commute Time Calculator","Nearby POI Grid","Overlay Filter Map Panel","Address Autocomplete Picker","Satellite View Selector","Route Direction Card","Area Price Heatmap","Dark Tactical Map Card"] },
  'commute-time': { cat: 'Maps & Location', title: 'Commute Time', desc: 'Commute time calculator.', icon: '🚗', families: ["Property Pin Map Card","Neighborhood Score Guide","Commute Time Calculator","Nearby POI Grid","Overlay Filter Map Panel","Address Autocomplete Picker","Satellite View Selector","Route Direction Card","Area Price Heatmap","Dark Tactical Map Card"] },
  'nearby-places': { cat: 'Maps & Location', title: 'Nearby Places', desc: 'Nearby amenities grid.', icon: '📌', families: ["Property Pin Map Card","Neighborhood Score Guide","Commute Time Calculator","Nearby POI Grid","Overlay Filter Map Panel","Address Autocomplete Picker","Satellite View Selector","Route Direction Card","Area Price Heatmap","Dark Tactical Map Card"] },
  'map-filter': { cat: 'Maps & Location', title: 'Map Filter', desc: 'Map with filter overlay.', icon: '🗺️', families: ["Property Pin Map Card","Neighborhood Score Guide","Commute Time Calculator","Nearby POI Grid","Overlay Filter Map Panel","Address Autocomplete Picker","Satellite View Selector","Route Direction Card","Area Price Heatmap","Dark Tactical Map Card"] },
  'location-picker': { cat: 'Maps & Location', title: 'Location Picker', desc: 'Address/location picker.', icon: '🏠', families: ["Property Pin Map Card","Neighborhood Score Guide","Commute Time Calculator","Nearby POI Grid","Overlay Filter Map Panel","Address Autocomplete Picker","Satellite View Selector","Route Direction Card","Area Price Heatmap","Dark Tactical Map Card"] },
  'id-verification': { cat: 'Verification & Trust', title: 'ID Verification', desc: 'KYC identity verification card.', icon: '🪪', families: ["Government ID Upload Card","Camera Document Scanner","Live Selfie Verification","Digital Signature Pad","FaceID / Biometric Prompt","Trust Score Meter Card","Verification Step Progress","Certificate Badge Card","Background Check Status","Dark Encrypted Vault Verify"] },
  'document-scan': { cat: 'Verification & Trust', title: 'Document Scan', desc: 'Document scanner interface.', icon: '📄', families: ["Government ID Upload Card","Camera Document Scanner","Live Selfie Verification","Digital Signature Pad","FaceID / Biometric Prompt","Trust Score Meter Card","Verification Step Progress","Certificate Badge Card","Background Check Status","Dark Encrypted Vault Verify"] },
  'selfie-verify': { cat: 'Verification & Trust', title: 'Selfie Verify', desc: 'Selfie verification camera.', icon: '🤳', families: ["Government ID Upload Card","Camera Document Scanner","Live Selfie Verification","Digital Signature Pad","FaceID / Biometric Prompt","Trust Score Meter Card","Verification Step Progress","Certificate Badge Card","Background Check Status","Dark Encrypted Vault Verify"] },
  'signature-capture': { cat: 'Verification & Trust', title: 'Signature Capture', desc: 'Digital signature capture.', icon: '✍️', families: ["Government ID Upload Card","Camera Document Scanner","Live Selfie Verification","Digital Signature Pad","FaceID / Biometric Prompt","Trust Score Meter Card","Verification Step Progress","Certificate Badge Card","Background Check Status","Dark Encrypted Vault Verify"] },
  'biometric-verify': { cat: 'Verification & Trust', title: 'Biometric Verify', desc: 'Biometric verification prompt.', icon: '🔐', families: ["Government ID Upload Card","Camera Document Scanner","Live Selfie Verification","Digital Signature Pad","FaceID / Biometric Prompt","Trust Score Meter Card","Verification Step Progress","Certificate Badge Card","Background Check Status","Dark Encrypted Vault Verify"] },
  'trust-score': { cat: 'Verification & Trust', title: 'Trust Score', desc: 'Trust/reliability score card.', icon: '🛡️', families: ["Government ID Upload Card","Camera Document Scanner","Live Selfie Verification","Digital Signature Pad","FaceID / Biometric Prompt","Trust Score Meter Card","Verification Step Progress","Certificate Badge Card","Background Check Status","Dark Encrypted Vault Verify"] },
  'copy-btn': { cat: 'Actions', title: 'Copy Action', desc: 'Copy-to-clipboard with feedback.', icon: '📋', families: ["Filled Primary CTA","Outlined Secondary Action","Text-Only Tertiary Link","Icon-Only Circular Action","Floating Action Menu","Dark Glowing Precision","Hyperlink with Hover","Split Dropdown Action","Full-Width Banner Action","Dark Action"] },
  'share-btn': { cat: 'Actions', title: 'Share Action', desc: 'Social share action button.', icon: '📤', families: ["Filled Primary CTA","Outlined Secondary Action","Text-Only Tertiary Link","Icon-Only Circular Action","Floating Action Menu","Dark Glowing Precision","Hyperlink with Hover","Split Dropdown Action","Full-Width Banner Action","Dark Action"] },
  'download-btn': { cat: 'Actions', title: 'Download Action', desc: 'Download with progress action.', icon: '⬇️', families: ["Filled Primary CTA","Outlined Secondary Action","Text-Only Tertiary Link","Icon-Only Circular Action","Floating Action Menu","Dark Glowing Precision","Hyperlink with Hover","Split Dropdown Action","Full-Width Banner Action","Dark Action"] },
  'bookmark-btn': { cat: 'Actions', title: 'Bookmark Action', desc: 'Save/bookmark toggle action.', icon: '🔖', families: ["Filled Primary CTA","Outlined Secondary Action","Text-Only Tertiary Link","Icon-Only Circular Action","Floating Action Menu","Dark Glowing Precision","Hyperlink with Hover","Split Dropdown Action","Full-Width Banner Action","Dark Action"] },
  'key-value': { cat: 'Data Display', title: 'Key-Value Pair', desc: 'Label-value data display rows.', icon: '📊', families: ["Metric Badge with Pulse","Interactive Filter Pill","Status Indicator Label","Avatar Cluster Count","Key-Value Data Strip","Dark High-Contrast Tag","Horizontal Stat Bar","Floating Island Metric","Full-Width Comparison Bar","Dark Data Matrix"] },
  'stat-bar': { cat: 'Data Display', title: 'Stat Bar', desc: 'Horizontal stat comparison bar.', icon: '📈', families: ["Metric Badge with Pulse","Interactive Filter Pill","Status Indicator Label","Avatar Cluster Count","Key-Value Data Strip","Dark High-Contrast Tag","Horizontal Stat Bar","Floating Island Metric","Full-Width Comparison Bar","Dark Data Matrix"] },
  'data-label': { cat: 'Data Display', title: 'Data Label', desc: 'Highlighted data label tag.', icon: '🏷️', families: ["Metric Badge with Pulse","Interactive Filter Pill","Status Indicator Label","Avatar Cluster Count","Key-Value Data Strip","Dark High-Contrast Tag","Horizontal Stat Bar","Floating Island Metric","Full-Width Comparison Bar","Dark Data Matrix"] },
  'metric-row': { cat: 'Data Display', title: 'Metric Row', desc: 'Single metric display row.', icon: '📏', families: ["Metric Badge with Pulse","Interactive Filter Pill","Status Indicator Label","Avatar Cluster Count","Key-Value Data Strip","Dark High-Contrast Tag","Horizontal Stat Bar","Floating Island Metric","Full-Width Comparison Bar","Dark Data Matrix"] },
  'reorderable-list': { cat: 'Lists', title: 'Reorderable List', desc: 'Drag-to-reorder list items.', icon: '☰', families: ["Payment Transaction Row","Grouped Category List","Timeline Milestone Feed","Swipeable Action Row","Expandable Accordion Row","Dark Glass Transaction List","Reorderable Drag List","Kanban Board Column","Full-Width Checklist Strip","Dark Data List"] },
  'kanban-list': { cat: 'Lists', title: 'Kanban List', desc: 'Kanban column card list.', icon: '📋', families: ["Payment Transaction Row","Grouped Category List","Timeline Milestone Feed","Swipeable Action Row","Expandable Accordion Row","Dark Glass Transaction List","Reorderable Drag List","Kanban Board Column","Full-Width Checklist Strip","Dark Data List"] },
  'checklist': { cat: 'Lists', title: 'Checklist', desc: 'Interactive checklist items.', icon: '✅', families: ["Payment Transaction Row","Grouped Category List","Timeline Milestone Feed","Swipeable Action Row","Expandable Accordion Row","Dark Glass Transaction List","Reorderable Drag List","Kanban Board Column","Full-Width Checklist Strip","Dark Data List"] },
  'chat-list': { cat: 'Lists', title: 'Chat List', desc: 'Chat conversation list.', icon: '💬', families: ["Payment Transaction Row","Grouped Category List","Timeline Milestone Feed","Swipeable Action Row","Expandable Accordion Row","Dark Glass Transaction List","Reorderable Drag List","Kanban Board Column","Full-Width Checklist Strip","Dark Data List"] },
  'stat-cards': { cat: 'Cards', title: 'Stat Cards', desc: 'Metric/KPI statistic cards.', icon: '📊', families: ["Property Showcase Card","Metric KPI Bento Card","Feature Highlight Card","Interactive Action Card","Horizontal Summary Strip","Dark Neon Glass Card","Media Gallery Card","Gradient Premium Card","Full-Width Hero Banner","Dark Glass Card"] },
  'summary-cards': { cat: 'Cards', title: 'Summary Cards', desc: 'Quick summary overview cards.', icon: '📋', families: ["Property Showcase Card","Metric KPI Bento Card","Feature Highlight Card","Interactive Action Card","Horizontal Summary Strip","Dark Neon Glass Card","Media Gallery Card","Gradient Premium Card","Full-Width Hero Banner","Dark Glass Card"] },
  'action-card': { cat: 'Cards', title: 'Action Card', desc: 'Card with primary CTA action.', icon: '⚡', families: ["Property Showcase Card","Metric KPI Bento Card","Feature Highlight Card","Interactive Action Card","Horizontal Summary Strip","Dark Neon Glass Card","Media Gallery Card","Gradient Premium Card","Full-Width Hero Banner","Dark Glass Card"] },
  'media-card': { cat: 'Cards', title: 'Media Card', desc: 'Card with image/video media.', icon: '🖼️', families: ["Property Showcase Card","Metric KPI Bento Card","Feature Highlight Card","Interactive Action Card","Horizontal Summary Strip","Dark Neon Glass Card","Media Gallery Card","Gradient Premium Card","Full-Width Hero Banner","Dark Glass Card"] },
  'horizontal-card': { cat: 'Cards', title: 'Horizontal Card', desc: 'Horizontal layout row card.', icon: '↔️', families: ["Property Showcase Card","Metric KPI Bento Card","Feature Highlight Card","Interactive Action Card","Horizontal Summary Strip","Dark Neon Glass Card","Media Gallery Card","Gradient Premium Card","Full-Width Hero Banner","Dark Glass Card"] },
  'glass-card': { cat: 'Cards', title: 'Glass Card', desc: 'Frosted glassmorphism card.', icon: '🔮', families: ["Property Showcase Card","Metric KPI Bento Card","Feature Highlight Card","Interactive Action Card","Horizontal Summary Strip","Dark Neon Glass Card","Media Gallery Card","Gradient Premium Card","Full-Width Hero Banner","Dark Glass Card"] },
  'gradient-card': { cat: 'Cards', title: 'Gradient Card', desc: 'Vibrant gradient background card.', icon: '🌈', families: ["Property Showcase Card","Metric KPI Bento Card","Feature Highlight Card","Interactive Action Card","Horizontal Summary Strip","Dark Neon Glass Card","Media Gallery Card","Gradient Premium Card","Full-Width Hero Banner","Dark Glass Card"] },
  'drawer-overlay': { cat: 'Overlays', title: 'Side Drawer', desc: 'Side-sliding overlay drawer.', icon: '📂', families: ["Form Entry Dialog","Confirmation Alert Modal","Mobile Bottom Sheet","Side Drawer Panel","Contextual Popover","Dark Command Center Prompt","Toast Snackbar Float","Fullscreen Dialog","Full-Width Inline Dialog","Dark Modal"] },
  'inline-dialog': { cat: 'Overlays', title: 'Inline Dialog', desc: 'Inline expandable dialog.', icon: '💬', families: ["Form Entry Dialog","Confirmation Alert Modal","Mobile Bottom Sheet","Side Drawer Panel","Contextual Popover","Dark Command Center Prompt","Toast Snackbar Float","Fullscreen Dialog","Full-Width Inline Dialog","Dark Modal"] },
  'snackbar': { cat: 'Overlays', title: 'Snackbar', desc: 'Bottom floating snackbar message.', icon: '📢', families: ["Form Entry Dialog","Confirmation Alert Modal","Mobile Bottom Sheet","Side Drawer Panel","Contextual Popover","Dark Command Center Prompt","Toast Snackbar Float","Fullscreen Dialog","Full-Width Inline Dialog","Dark Modal"] },
  'toast-notification': { cat: 'Feedback', title: 'Toast Notification', desc: 'Floating toast message popup.', icon: '🍞', families: ["Status Alert with CTA","Toast Notification Float","Empty State Illustration","Shimmer Skeleton Card","Progress Bar Milestones","Dark System Health Status","Inline Validation Error","Success Animation Card","Full-Width Banner Alert","Dark Alert"] },
  'inline-error': { cat: 'Feedback', title: 'Inline Error', desc: 'Inline field validation error.', icon: '❌', families: ["Status Alert with CTA","Toast Notification Float","Empty State Illustration","Shimmer Skeleton Card","Progress Bar Milestones","Dark System Health Status","Inline Validation Error","Success Animation Card","Full-Width Banner Alert","Dark Alert"] },
  'success-animation': { cat: 'Feedback', title: 'Success Animation', desc: 'Animated success checkmark.', icon: '✅', families: ["Status Alert with CTA","Toast Notification Float","Empty State Illustration","Shimmer Skeleton Card","Progress Bar Milestones","Dark System Health Status","Inline Validation Error","Success Animation Card","Full-Width Banner Alert","Dark Alert"] },
  'rating-prompt': { cat: 'Feedback', title: 'Rating Prompt', desc: 'App rating request prompt.', icon: '⭐', families: ["Status Alert with CTA","Toast Notification Float","Empty State Illustration","Shimmer Skeleton Card","Progress Bar Milestones","Dark System Health Status","Inline Validation Error","Success Animation Card","Full-Width Banner Alert","Dark Alert"] },
  'event-card': { cat: 'Calendar', title: 'Event Card', desc: 'Calendar event detail card.', icon: '📅', families: ["Interactive Month Grid","Date Range Selector","Time Slot Booking Chips","Day Schedule View","Mini Week Strip","Dark Cybernetic Event Matrix","Event Detail Card","Availability Heatmap","Full-Width Schedule Strip","Dark Calendar"] },
  'booking-slot': { cat: 'Calendar', title: 'Booking Slot', desc: 'Time slot booking selector.', icon: '🕐', families: ["Interactive Month Grid","Date Range Selector","Time Slot Booking Chips","Day Schedule View","Mini Week Strip","Dark Cybernetic Event Matrix","Event Detail Card","Availability Heatmap","Full-Width Schedule Strip","Dark Calendar"] },
  'availability': { cat: 'Calendar', title: 'Availability Grid', desc: 'Week availability heatmap.', icon: '📊', families: ["Interactive Month Grid","Date Range Selector","Time Slot Booking Chips","Day Schedule View","Mini Week Strip","Dark Cybernetic Event Matrix","Event Detail Card","Availability Heatmap","Full-Width Schedule Strip","Dark Calendar"] },
  'area-chart': { cat: 'Charts', title: 'Area Chart', desc: 'Filled area chart with gradient.', icon: '📈', families: ["Revenue Bar Chart","Cashflow Spline Line","Occupancy Donut Gauge","Stacked Distribution Bars","Micro Sparkline Inline","Dark Glowing Data Curve","Filled Area Gradient","Scatter Point Cloud","Full-Width Comparison Bar","Dark Chart"] },
  'scatter-plot': { cat: 'Charts', title: 'Scatter Plot', desc: 'Point distribution scatter plot.', icon: '⚬', families: ["Revenue Bar Chart","Cashflow Spline Line","Occupancy Donut Gauge","Stacked Distribution Bars","Micro Sparkline Inline","Dark Glowing Data Curve","Filled Area Gradient","Scatter Point Cloud","Full-Width Comparison Bar","Dark Chart"] },
  'comparison-chart': { cat: 'Charts', title: 'Comparison Chart', desc: 'Side-by-side comparison chart.', icon: '↔️', families: ["Revenue Bar Chart","Cashflow Spline Line","Occupancy Donut Gauge","Stacked Distribution Bars","Micro Sparkline Inline","Dark Glowing Data Curve","Filled Area Gradient","Scatter Point Cloud","Full-Width Comparison Bar","Dark Chart"] },
  'progress-ring': { cat: 'Charts', title: 'Progress Ring', desc: 'Circular progress ring chart.', icon: '⭕', families: ["Revenue Bar Chart","Cashflow Spline Line","Occupancy Donut Gauge","Stacked Distribution Bars","Micro Sparkline Inline","Dark Glowing Data Curve","Filled Area Gradient","Scatter Point Cloud","Full-Width Comparison Bar","Dark Chart"] },
  'daily-reward': { cat: 'Rewards', title: 'Daily Reward', desc: 'Daily check-in reward card.', icon: '🎁', families: ["Streak Fire Tracker","Scratch Cashback Card","Level Progression XP Bar","Milestone Badge Card","Referral Invite Strip","Dark VIP Prestige Vault","Daily Check-In Reward","Loyalty Program Card","Full-Width Celebration","Dark Rewards"] },
  'loyalty-card': { cat: 'Rewards', title: 'Loyalty Card', desc: 'Loyalty program card.', icon: '💎', families: ["Streak Fire Tracker","Scratch Cashback Card","Level Progression XP Bar","Milestone Badge Card","Referral Invite Strip","Dark VIP Prestige Vault","Daily Check-In Reward","Loyalty Program Card","Full-Width Celebration","Dark Rewards"] },
  'coupon': { cat: 'Rewards', title: 'Coupon Code', desc: 'Discount coupon card.', icon: '🎫', families: ["Streak Fire Tracker","Scratch Cashback Card","Level Progression XP Bar","Milestone Badge Card","Referral Invite Strip","Dark VIP Prestige Vault","Daily Check-In Reward","Loyalty Program Card","Full-Width Celebration","Dark Rewards"] },
  'pin-lock': { cat: 'Authentication', title: 'PIN Lock', desc: 'Numeric PIN lock screen.', icon: '🔢', families: ["Email & Password Card","SMS OTP 6-Digit Code","Magic Link Passwordless","Biometric FaceID/TouchID","SSO Identity Grid","Dark Enterprise SSO Portal","Numeric PIN Lock Screen","Passkey WebAuthn Card","Full-Width Welcome Gate","Dark Auth"] },
  'passkey': { cat: 'Authentication', title: 'Passkey Auth', desc: 'Passkey/WebAuthn authentication.', icon: '🔑', families: ["Email & Password Card","SMS OTP 6-Digit Code","Magic Link Passwordless","Biometric FaceID/TouchID","SSO Identity Grid","Dark Enterprise SSO Portal","Numeric PIN Lock Screen","Passkey WebAuthn Card","Full-Width Welcome Gate","Dark Auth"] },
  'email-compose': { cat: 'Communication', title: 'Email Compose', desc: 'Email composition form.', icon: '📧', families: ["Chat Speech Bubble","Message Thread Card","Urgent Announcement","In-App Notification","Email Compose Form","Dark Glass Dispatch","Support Ticket Card","Feedback Form Card","Full-Width Broadcast","Dark Comms"] },
  'support-ticket': { cat: 'Communication', title: 'Support Ticket', desc: 'Support ticket submission.', icon: '🎫', families: ["Chat Speech Bubble","Message Thread Card","Urgent Announcement","In-App Notification","Email Compose Form","Dark Glass Dispatch","Support Ticket Card","Feedback Form Card","Full-Width Broadcast","Dark Comms"] },
  'feedback-form': { cat: 'Communication', title: 'Feedback Form', desc: 'User feedback submission.', icon: '📝', families: ["Chat Speech Bubble","Message Thread Card","Urgent Announcement","In-App Notification","Email Compose Form","Dark Glass Dispatch","Support Ticket Card","Feedback Form Card","Full-Width Broadcast","Dark Comms"] },
  'rent-estimate': { cat: 'Property', title: 'Rent Estimate', desc: 'Market rent estimate widget.', icon: '💰', families: ["Luxury Listing Showcase","Amenity Icon Grid","Floor Plan Schematic","Location Map Card","Property Comparison","Dark Investment Asset Card","Maintenance Tracker","Rent Estimate Widget","Full-Width Gallery Hero","Dark Property"] },
  'occupancy-status': { cat: 'Property', title: 'Occupancy Status', desc: 'Unit occupancy indicator.', icon: '🏠', families: ["Luxury Listing Showcase","Amenity Icon Grid","Floor Plan Schematic","Location Map Card","Property Comparison","Dark Investment Asset Card","Maintenance Tracker","Rent Estimate Widget","Full-Width Gallery Hero","Dark Property"] },
  'utility-tracker': { cat: 'Property', title: 'Utility Tracker', desc: 'Monthly utility tracking.', icon: '💡', families: ["Luxury Listing Showcase","Amenity Icon Grid","Floor Plan Schematic","Location Map Card","Property Comparison","Dark Investment Asset Card","Maintenance Tracker","Rent Estimate Widget","Full-Width Gallery Hero","Dark Property"] },
  'neighbor-score': { cat: 'Property', title: 'Neighborhood Score', desc: 'Area livability score.', icon: '🏘️', families: ["Luxury Listing Showcase","Amenity Icon Grid","Floor Plan Schematic","Location Map Card","Property Comparison","Dark Investment Asset Card","Maintenance Tracker","Rent Estimate Widget","Full-Width Gallery Hero","Dark Property"] },
  'privacy-policy': { cat: 'Legal', title: 'Privacy Policy', desc: 'Privacy policy display block.', icon: '🔒', families: ["Lease Signature Block","Terms Accordion Section","Consent Audit Block","Compliance Disclaimer","E-Signature Capture","Dark Encrypted Ledger","Document Attachment","Audit Trail Log","Full-Width Policy Banner","Dark Legal"] },
  'compliance-badge': { cat: 'Legal', title: 'Compliance Badge', desc: 'Regulatory compliance badge.', icon: '✅', families: ["Lease Signature Block","Terms Accordion Section","Consent Audit Block","Compliance Disclaimer","E-Signature Capture","Dark Encrypted Ledger","Document Attachment","Audit Trail Log","Full-Width Policy Banner","Dark Legal"] },
  'data-export': { cat: 'Settings', title: 'Data Export', desc: 'Data export/download settings.', icon: '📤', families: ["Toggle Switch List","Profile Identity Form","Notification Matrix","Security 2FA Config","Connected Accounts","Dark System Console","Data Export Options","Delete Account Flow","Full-Width Pref Strip","Dark Settings"] },
  'delete-account': { cat: 'Settings', title: 'Delete Account', desc: 'Account deletion flow.', icon: '🗑️', families: ["Toggle Switch List","Profile Identity Form","Notification Matrix","Security 2FA Config","Connected Accounts","Dark System Console","Data Export Options","Delete Account Flow","Full-Width Pref Strip","Dark Settings"] },
  'app-info': { cat: 'Settings', title: 'App Info', desc: 'App version and info display.', icon: 'ℹ️', families: ["Toggle Switch List","Profile Identity Form","Notification Matrix","Security 2FA Config","Connected Accounts","Dark System Console","Data Export Options","Delete Account Flow","Full-Width Pref Strip","Dark Settings"] },
  'scroll-to-top': { cat: 'Sticky', title: 'Scroll To Top', desc: 'Floating scroll-to-top button.', icon: '⬆️', families: ["Bottom Fixed Action Bar","Cookie Consent Banner","Top Alert Notice Strip","Help Chat Trigger","Countdown Promo Bar","Dark Glass Sticky Dock","Scroll-To-Top Button","Sticky CTA Strip","Full-Width Action Bar","Dark Sticky"] },
  'sticky-cta': { cat: 'Sticky', title: 'Sticky CTA', desc: 'Sticky bottom call-to-action.', icon: '📌', families: ["Bottom Fixed Action Bar","Cookie Consent Banner","Top Alert Notice Strip","Help Chat Trigger","Countdown Promo Bar","Dark Glass Sticky Dock","Scroll-To-Top Button","Sticky CTA Strip","Full-Width Action Bar","Dark Sticky"] },
  'skeleton-transition': { cat: 'Transitions', title: 'Skeleton Transition', desc: 'Skeleton to content transition.', icon: '💀', families: ["Page Morph Animation","Micro Button Bounce","Shared Element Hero","Stagger List Entrance","Ripple Interaction","Dark Cyber Kinetic","Skeleton to Content","Fade In/Out Smooth","Full-Width Slide","Dark Transition"] },
  'fade-transition': { cat: 'Transitions', title: 'Fade Transition', desc: 'Smooth fade in/out transition.', icon: '🌫️', families: ["Page Morph Animation","Micro Button Bounce","Shared Element Hero","Stagger List Entrance","Ripple Interaction","Dark Cyber Kinetic","Skeleton to Content","Fade In/Out Smooth","Full-Width Slide","Dark Transition"] },
  'undo-bar': { cat: 'Patterns', title: 'Undo Bar', desc: 'Undoable action snackbar.', icon: '↩️', families: ["Search & Filter Bar","Bulk Selection Strip","Drag & Drop List","Infinite Scroll Footer","Pull Refresh Spinner","Dark Workbench Panel","Share Sheet Menu","Undo Action Bar","Swipe Reveal Action","Dark Pattern"] },
  'swipe-action': { cat: 'Patterns', title: 'Swipe Action', desc: 'Swipe-to-reveal action pattern.', icon: '👉', families: ["Search & Filter Bar","Bulk Selection Strip","Drag & Drop List","Infinite Scroll Footer","Pull Refresh Spinner","Dark Workbench Panel","Share Sheet Menu","Undo Action Bar","Swipe Reveal Action","Dark Pattern"] },
  'long-press': { cat: 'Patterns', title: 'Long Press Menu', desc: 'Long press context actions.', icon: '👆', families: ["Search & Filter Bar","Bulk Selection Strip","Drag & Drop List","Infinite Scroll Footer","Pull Refresh Spinner","Dark Workbench Panel","Share Sheet Menu","Undo Action Bar","Swipe Reveal Action","Dark Pattern"] },
  'peek-preview': { cat: 'Patterns', title: 'Peek Preview', desc: '3D Touch/peek preview card.', icon: '👁️', families: ["Search & Filter Bar","Bulk Selection Strip","Drag & Drop List","Infinite Scroll Footer","Pull Refresh Spinner","Dark Workbench Panel","Share Sheet Menu","Undo Action Bar","Swipe Reveal Action","Dark Pattern"] },
  'auto-debit': { cat: 'Product', title: 'Auto Debit Setup', desc: 'Recurring auto-debit configuration.', icon: '🔄', families: ["Credit Bureau Sync","Payment History Table","Tenant Screening Checklist","Maintenance Ticket Card","Digital Lease Renewal","Dark VIP PropTech Hub","Auto-Debit Setup Card","Deposit Shield Guard","Rent Split Calculator","Dark Product"] },
  'deposit-shield': { cat: 'Product', title: 'Deposit Shield', desc: 'Zero-deposit guarantee shield.', icon: '🛡️', families: ["Credit Bureau Sync","Payment History Table","Tenant Screening Checklist","Maintenance Ticket Card","Digital Lease Renewal","Dark VIP PropTech Hub","Auto-Debit Setup Card","Deposit Shield Guard","Rent Split Calculator","Dark Product"] },
  'rent-split': { cat: 'Product', title: 'Rent Split', desc: 'Split rent between roommates.', icon: '✂️', families: ["Credit Bureau Sync","Payment History Table","Tenant Screening Checklist","Maintenance Ticket Card","Digital Lease Renewal","Dark VIP PropTech Hub","Auto-Debit Setup Card","Deposit Shield Guard","Rent Split Calculator","Dark Product"] },
  'credit-builder': { cat: 'Product', title: 'Credit Builder', desc: 'Credit score builder program.', icon: '📈', families: ["Credit Bureau Sync","Payment History Table","Tenant Screening Checklist","Maintenance Ticket Card","Digital Lease Renewal","Dark VIP PropTech Hub","Auto-Debit Setup Card","Deposit Shield Guard","Rent Split Calculator","Dark Product"] },
  'move-out': { cat: 'Product', title: 'Move Out Flow', desc: 'Move-out process workflow.', icon: '📦', families: ["Credit Bureau Sync","Payment History Table","Tenant Screening Checklist","Maintenance Ticket Card","Digital Lease Renewal","Dark VIP PropTech Hub","Auto-Debit Setup Card","Deposit Shield Guard","Rent Split Calculator","Dark Product"] },
  'rent-negotiation': { cat: 'Product', title: 'Rent Negotiation', desc: 'Rent negotiation tools.', icon: '🤝', families: ["Credit Bureau Sync","Payment History Table","Tenant Screening Checklist","Maintenance Ticket Card","Digital Lease Renewal","Dark VIP PropTech Hub","Auto-Debit Setup Card","Deposit Shield Guard","Rent Split Calculator","Dark Product"] },
  'page-checkout': { cat: 'Templates', title: 'Checkout Flow', desc: 'Multi-step checkout template.', icon: '🛒', families: ["Dashboard Overview Canvas","Entity List & Filter Page","Property Detail Profile","Multi-Step Form Wizard","Transaction Receipt Modal","Dark Command Operations","Settings Preference Page","Onboarding Flow Page","Checkout Flow Template","Dark Template"] },
  'page-profile': { cat: 'Templates', title: 'Profile Page', desc: 'User profile page template.', icon: '👤', families: ["Dashboard Overview Canvas","Entity List & Filter Page","Property Detail Profile","Multi-Step Form Wizard","Transaction Receipt Modal","Dark Command Operations","Settings Preference Page","Onboarding Flow Page","Checkout Flow Template","Dark Template"] },
  'page-activity': { cat: 'Templates', title: 'Activity Feed', desc: 'Activity feed page template.', icon: '📰', families: ["Dashboard Overview Canvas","Entity List & Filter Page","Property Detail Profile","Multi-Step Form Wizard","Transaction Receipt Modal","Dark Command Operations","Settings Preference Page","Onboarding Flow Page","Checkout Flow Template","Dark Template"] },
  'page-search': { cat: 'Templates', title: 'Search Results', desc: 'Search results page template.', icon: '🔍', families: ["Dashboard Overview Canvas","Entity List & Filter Page","Property Detail Profile","Multi-Step Form Wizard","Transaction Receipt Modal","Dark Command Operations","Settings Preference Page","Onboarding Flow Page","Checkout Flow Template","Dark Template"] },
  'page-gallery': { cat: 'Templates', title: 'Gallery Page', desc: 'Media gallery page template.', icon: '🖼️', families: ["Dashboard Overview Canvas","Entity List & Filter Page","Property Detail Profile","Multi-Step Form Wizard","Transaction Receipt Modal","Dark Command Operations","Settings Preference Page","Onboarding Flow Page","Checkout Flow Template","Dark Template"] },
  'gradient-bg': { cat: 'Backgrounds', title: 'Gradient Bg', desc: 'Vibrant gradient background.', icon: '🌈', families: ["Subtle Dot Grid Pattern","Aurora Mesh Gradient","Geometric Lines Backdrop","Frosted Glass Canvas","Vibrant Gradient Wash","Deep Obsidian Texture","Blur Bokeh Background","Cyberpunk Radial Glow","Animated Particle Field","Dark Space Canvas"] },
  'blur-bg': { cat: 'Backgrounds', title: 'Blur Bg', desc: 'Frosted blur glass background.', icon: '🔮', families: ["Subtle Dot Grid Pattern","Aurora Mesh Gradient","Geometric Lines Backdrop","Frosted Glass Canvas","Vibrant Gradient Wash","Deep Obsidian Texture","Blur Bokeh Background","Cyberpunk Radial Glow","Animated Particle Field","Dark Space Canvas"] },
  'address-input': { cat: 'Inputs', title: 'Address Input', desc: 'Multi-line address entry.', icon: '🏠', families: ["Floating Label Modern Input","Icon-Leading Validated Field","Search & Autocomplete Field","Multi-Value Token Input","Segmented Counter Stepper","Dark Command Glass Field","Inline Editable Text","Floating Island Date Picker","Full-Width Amount Entry","Dark Terminal Input"] },
  'amount-input': { cat: 'Inputs', title: 'Amount Input', desc: 'Large amount input with numpad.', icon: '💰', families: ["Floating Label Modern Input","Icon-Leading Validated Field","Search & Autocomplete Field","Multi-Value Token Input","Segmented Counter Stepper","Dark Command Glass Field","Inline Editable Text","Floating Island Date Picker","Full-Width Amount Entry","Dark Terminal Input"] },
  'pin-input': { cat: 'Inputs', title: 'PIN Input', desc: 'Secure 4-6 digit PIN entry.', icon: '🔢', families: ["Floating Label Modern Input","Icon-Leading Validated Field","Search & Autocomplete Field","Multi-Value Token Input","Segmented Counter Stepper","Dark Command Glass Field","Inline Editable Text","Floating Island Date Picker","Full-Width Amount Entry","Dark Terminal Input"] },
  'slider-input': { cat: 'Inputs', title: 'Slider Input', desc: 'Draggable value slider input.', icon: '🎚️', families: ["Floating Label Modern Input","Icon-Leading Validated Field","Search & Autocomplete Field","Multi-Value Token Input","Segmented Counter Stepper","Dark Command Glass Field","Inline Editable Text","Floating Island Date Picker","Full-Width Amount Entry","Dark Terminal Input"] },
  'switch-group': { cat: 'Selection', title: 'Switch Group', desc: 'Grouped toggle switches.', icon: '🔀', families: ["Interactive Toggle Switch Card","Custom Checkbox with Badge","Segmented Radio Button Group","Dual-Thumb Range Slider","Pill Selection Chip Group","Dark Tactile Selection Card","Color Palette Selector Grid","Floating Island Toggle","Full-Width Comparison Strip","Dark Tactile Selector"] },
  'color-select': { cat: 'Selection', title: 'Color Select', desc: 'Color palette selector.', icon: '🎨', families: ["Interactive Toggle Switch Card","Custom Checkbox with Badge","Segmented Radio Button Group","Dual-Thumb Range Slider","Pill Selection Chip Group","Dark Tactile Selection Card","Color Palette Selector Grid","Floating Island Toggle","Full-Width Comparison Strip","Dark Tactile Selector"] },
  'size-select': { cat: 'Selection', title: 'Size Select', desc: 'Size/dimension selector.', icon: '📐', families: ["Interactive Toggle Switch Card","Custom Checkbox with Badge","Segmented Radio Button Group","Dual-Thumb Range Slider","Pill Selection Chip Group","Dark Tactile Selection Card","Color Palette Selector Grid","Floating Island Toggle","Full-Width Comparison Strip","Dark Tactile Selector"] },
  'sortable-table': { cat: 'Tables', title: 'Sortable Table', desc: 'Column-sortable data table.', icon: '↕️', families: ["Enterprise Financial Ledger","Compact Mini Data Table","Expandable Detail Row","Column-Sortable Grid","Paginated Data Table","Dark Glass Analytics Grid","Responsive Card Table","Toolbar Filter Table","Full-Width Summary Matrix","Dark Analytics Grid"] },
  'paginated-table': { cat: 'Tables', title: 'Paginated Table', desc: 'Table with pagination controls.', icon: '📄', families: ["Enterprise Financial Ledger","Compact Mini Data Table","Expandable Detail Row","Column-Sortable Grid","Paginated Data Table","Dark Glass Analytics Grid","Responsive Card Table","Toolbar Filter Table","Full-Width Summary Matrix","Dark Analytics Grid"] },
  'bottom-nav': { cat: 'Navigation', title: 'Bottom Tab Bar', desc: 'iOS/Android bottom tab navigation.', icon: '📱', families: ["iOS Bottom Tab Bar","Floating Pill Dock","Segmented View Controller","Breadcrumb Trail Navigation","Multi-Step Process Stepper","Dark Command Navigation Rail","Underline Indicator Tabs","Collapsible Sidebar","Full-Width Progress Header","Dark Rail Navigation"] },
  'app-bar': { cat: 'Navigation', title: 'App Bar', desc: 'Material-style collapsible app bar.', icon: '📐', families: ["iOS Bottom Tab Bar","Floating Pill Dock","Segmented View Controller","Breadcrumb Trail Navigation","Multi-Step Process Stepper","Dark Command Navigation Rail","Underline Indicator Tabs","Collapsible Sidebar","Full-Width Progress Header","Dark Rail Navigation"] },
  'scroll-tabs': { cat: 'Navigation', title: 'Scroll Tabs', desc: 'Horizontally scrollable tab bar.', icon: '↔️', families: ["iOS Bottom Tab Bar","Floating Pill Dock","Segmented View Controller","Breadcrumb Trail Navigation","Multi-Step Process Stepper","Dark Command Navigation Rail","Underline Indicator Tabs","Collapsible Sidebar","Full-Width Progress Header","Dark Rail Navigation"] },
  'social-count': { cat: 'Social Proof', title: 'Social Count', desc: 'Social follower/download count.', icon: '👥', families: ["Verified Testimonial","Star Rating Summary","Review Showcase Card","Trust Guarantee Badge","Community Recommendation","Dark Endorsement Shield","Social Download Count","Press Mention Badge","Full-Width Trust Strip","Dark Social"] },
  'press-mention': { cat: 'Social Proof', title: 'Press Mention', desc: 'Media/press mention badge.', icon: '📰', families: ["Verified Testimonial","Star Rating Summary","Review Showcase Card","Trust Guarantee Badge","Community Recommendation","Dark Endorsement Shield","Social Download Count","Press Mention Badge","Full-Width Trust Strip","Dark Social"] },
  'audio-player': { cat: 'Media', title: 'Audio Player', desc: 'Audio playback controls.', icon: '🎵', families: ["Image Carousel Slider","Video Walkthrough Player","Gallery Masonry Grid","Audio Playback Controls","File Document Preview","Dark Cinema Media Card","Image Crop & Resize","Thumbnail Strip Selector","Full-Width Hero Media","Dark Media"] },
  'file-preview': { cat: 'Media', title: 'File Preview', desc: 'Document file preview card.', icon: '📄', families: ["Image Carousel Slider","Video Walkthrough Player","Gallery Masonry Grid","Audio Playback Controls","File Document Preview","Dark Cinema Media Card","Image Crop & Resize","Thumbnail Strip Selector","Full-Width Hero Media","Dark Media"] },
  'image-cropper': { cat: 'Media', title: 'Image Cropper', desc: 'Image crop and resize tool.', icon: '✂️', families: ["Image Carousel Slider","Video Walkthrough Player","Gallery Masonry Grid","Audio Playback Controls","File Document Preview","Dark Cinema Media Card","Image Crop & Resize","Thumbnail Strip Selector","Full-Width Hero Media","Dark Media"] },
  'profile-setup': { cat: 'Onboarding', title: 'Profile Setup', desc: 'Initial profile setup card.', icon: '👤', families: ["Welcome Hero Screen","Feature Tour Spotlight","Permission Request Card","Setup Wizard Steps","Complete Success Card","Dark Fast-Track Onboard","Profile Setup Form","Invite Friends Card","Full-Width Launch Banner","Dark Onboard"] },
  'invite-friends': { cat: 'Onboarding', title: 'Invite Friends', desc: 'Friend invitation flow.', icon: '👥', families: ["Welcome Hero Screen","Feature Tour Spotlight","Permission Request Card","Setup Wizard Steps","Complete Success Card","Dark Fast-Track Onboard","Profile Setup Form","Invite Friends Card","Full-Width Launch Banner","Dark Onboard"] },
  'timeline-visual': { cat: 'Infographics', title: 'Timeline Visual', desc: 'Visual timeline infographic.', icon: '📅', families: ["Multi-Tier Stats Counter","Step Process Flow Diagram","Comparative Feature Matrix","Key Insight Banner","Data Story Narrative","Dark Infographic Data Board","Timeline Visual History","Icon Stat Display Grid","Full-Width Data Story","Dark Infographic"] },
  'icon-stat': { cat: 'Infographics', title: 'Icon Stat', desc: 'Icon-based statistic display.', icon: '🔢', families: ["Multi-Tier Stats Counter","Step Process Flow Diagram","Comparative Feature Matrix","Key Insight Banner","Data Story Narrative","Dark Infographic Data Board","Timeline Visual History","Icon Stat Display Grid","Full-Width Data Story","Dark Infographic"] },
  'cohort-chart': { cat: 'Analytics', title: 'Cohort Chart', desc: 'User cohort retention chart.', icon: '📊', families: ["KPI Scorecard","Trend Sparkline Compare","Cohort Breakdown Matrix","Period Variance Card","Funnel Conversion Display","Dark Executive Command","Distribution Ratio Card","Real-Time Pulse Metric","Full-Width Dashboard Strip","Dark Analytics"] },
  'funnel-display': { cat: 'Analytics', title: 'Funnel Display', desc: 'Conversion funnel visualization.', icon: '🏁', families: ["KPI Scorecard","Trend Sparkline Compare","Cohort Breakdown Matrix","Period Variance Card","Funnel Conversion Display","Dark Executive Command","Distribution Ratio Card","Real-Time Pulse Metric","Full-Width Dashboard Strip","Dark Analytics"] },
  'state-maintenance': { cat: 'States', title: 'Maintenance State', desc: 'System under maintenance state.', icon: '🔧', families: ["Active & Verified State","Pending Approval State","Warning Required State","Locked Restricted State","Offline Disconnected State","Dark Shield Protected State","Success Complete State","Maintenance Mode State","Full-Width Progress State","Dark State"] },
  'state-upgrade': { cat: 'States', title: 'Upgrade State', desc: 'App upgrade required state.', icon: '⬆️', families: ["Active & Verified State","Pending Approval State","Warning Required State","Locked Restricted State","Offline Disconnected State","Dark Shield Protected State","Success Complete State","Maintenance Mode State","Full-Width Progress State","Dark State"] },
};

// Group by category
const groups = {};
for (const [slug, data] of Object.entries(ALL_PAGES)) {
  data.families = getFamiliesForSlug(slug, data.cat, data.title);
}

for (const [slug, data] of Object.entries(ALL_PAGES)) {
  if (!groups[data.cat]) {
    groups[data.cat] = [];
  }
  groups[data.cat].push({ slug, ...data });
}

let navHTML = '';
for (const [cat, items] of Object.entries(groups)) {
  navHTML += `\n      <div class="catalog-nav-group">
        <div class="catalog-nav-group-label">${cat.toUpperCase()}</div>\n`;
  for (const item of items) {
    const compCount = item.families ? item.families.length * 3 : 12; // Estimate
    const dotHTML = item.slug.includes('input') || item.slug.includes('file') ? `<span style="color:#10B981;font-size:16px;line-height:0;">•</span>` : '';
    
    navHTML += `        <a href="pages/${item.slug}.html?v=${Date.now()}" class="catalog-nav-item">
          <span class="uk-nav-icon">${item.icon}</span> ${item.title}
          <div style="margin-left:auto; display:flex; align-items:center; gap:6px;">
            <span class="nav-count" style="background:#F1F5F9; color:#64748B; font-size:10px; padding:2px 8px; border-radius:99px;">${compCount}</span>
            ${dotHTML}
          </div>
        </a>\n`;
  }
  navHTML += `      </div>\n`;
}

// Generate navPagesHTML for Pages tab
let navPagesHTML = '';
for (const [key, suite] of Object.entries(SCREEN_SUITES)) {
  navPagesHTML += `
      <div class="catalog-nav-group">
        <div class="catalog-nav-group-label" style="display:flex; justify-content:space-between; align-items:center;">
          <span>${suite.icon} ${suite.title.toUpperCase()}</span>
          <span style="font-size:9px; background:#F1F5F9; color:#64748B; padding:2px 6px; border-radius:99px;">${suite.screens.length}</span>
        </div>
        <a href="pages/${key}-suite.html" class="catalog-nav-item" style="font-weight:700;">
          <span class="uk-nav-icon">📱</span> View Full Suite
          <div style="margin-left:auto;"><span class="nav-count" style="background:#F1F5F9; color:#64748B; font-size:10px; padding:2px 8px; border-radius:99px;">${suite.screens.length} screens</span></div>
        </a>
  `;
  suite.screens.forEach(s => {
    navPagesHTML += `        <a href="pages/${key}-suite.html#${s.id}" class="catalog-nav-item" style="padding-left:26px; font-size:12px;">
          <span style="color:#94A3B8; font-size:10px;">↳</span> <span class="nav-text" style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${s.title}</span>
        </a>\n`;
  });
  navPagesHTML += `      </div>\n`;
}

// Generate Pages Showcase HTML for main content
let pagesShowcaseHTML = `
  <!-- Pages Showcase Hero -->
  <div class="hero-card" style="background: linear-gradient(135deg, #09090B 0%, #18181B 100%);">
    <div>
      <div class="hero-title-sub" style="color: #38BDF8;">Pinterest Reverse-Engineered Architecture</div>
      <h1 class="hero-title">125+ Application Screens</h1>
      <p class="hero-desc">10 end-to-end mobile & web application suites designed with Apple & CRED aesthetic fidelity.</p>
      <div style="margin-top:20px; display:flex; gap:12px;">
        <a href="pages/screens-gallery.html" style="display:inline-flex; align-items:center; gap:8px; padding:12px 20px; background:#10B981; color:#064E3B; border-radius:12px; font-size:13px; font-weight:800; text-decoration:none; box-shadow:0 4px 14px rgba(16,185,129,0.3);">
          <span>Browse All 125 Screens Together</span> →
        </a>
      </div>
    </div>
    <div class="hero-stats">
      <div class="hero-stat-item">
        <div class="hero-stat-icon">🏦</div>
        <div class="hero-stat-label">Banking</div>
      </div>
      <div class="hero-stat-item">
        <div class="hero-stat-icon">🚌</div>
        <div class="hero-stat-label">Transit</div>
      </div>
      <div class="hero-stat-item">
        <div class="hero-stat-icon">🏋️</div>
        <div class="hero-stat-label">Fitness</div>
      </div>
      <div class="hero-stat-item">
        <div class="hero-stat-icon">🏠</div>
        <div class="hero-stat-label">Real Estate</div>
      </div>
    </div>
  </div>

  <!-- Suite Showcase Grid -->
  <div style="display:grid; grid-template-columns:repeat(auto-fill, minmax(360px, 1fr)); gap:24px; margin-bottom:48px;">
`;

for (const [key, suite] of Object.entries(SCREEN_SUITES)) {
  const featuredScreen = suite.screens[0];
  const featuredLiveHTML = renderScreenHTML(featuredScreen.id);
  const elementsPreview = featuredScreen.elements.slice(0, 3).map(el => `<span class="screen-element-tag">${el}</span>`).join('');

  pagesShowcaseHTML += `
    <div style="background:var(--color-surface, #fff); border:1px solid var(--color-border, #E2E8F0); border-radius:24px; overflow:hidden; box-shadow:0 4px 16px rgba(0,0,0,0.04); display:flex; flex-direction:column; justify-content:space-between; transition:transform 0.2s, box-shadow 0.2s;">
      <div style="padding:24px;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
          <div style="display:flex; align-items:center; gap:10px;">
            <span style="font-size:24px;">${suite.icon}</span>
            <h3 style="font-size:18px; font-weight:900; margin:0; color:var(--color-text-primary);">${suite.title}</h3>
          </div>
          <span style="background:rgba(16,185,129,0.1); color:#10B981; font-size:11px; font-weight:800; padding:4px 10px; border-radius:99px;">${suite.screens.length} Screens</span>
        </div>
        <p style="font-size:13px; color:var(--color-text-secondary, #64748B); line-height:1.5; margin:0 0 16px 0;">${suite.desc}</p>
        
        <!-- Live Featured Mini Frame -->
        <div style="background:#09090B; border-radius:24px; padding:16px 12px; margin-bottom:16px; border:4px solid #27272A; max-height:280px; overflow:hidden; position:relative; box-shadow:0 8px 20px rgba(0,0,0,0.15);">
          <div style="transform:scale(0.85); transform-origin:top center; pointer-events:none;">
            ${featuredLiveHTML}
          </div>
          <div style="position:absolute; bottom:0; left:0; right:0; height:60px; background:linear-gradient(transparent, #09090B); pointer-events:none;"></div>
        </div>

        <div style="font-size:10px; font-weight:700; color:#94A3B8; text-transform:uppercase; letter-spacing:0.05em; margin-bottom:8px;">Featured Elements:</div>
        <div style="display:flex; flex-wrap:wrap; gap:6px;">
          ${elementsPreview}
        </div>
      </div>

      <div style="padding:16px 24px; background:var(--color-surface-sunken, #F8FAFC); border-top:1px solid var(--color-border, #E2E8F0); display:flex; justify-content:space-between; align-items:center;">
        <span style="font-size:11px; font-weight:700; color:#64748B;">Pin Ref: ${featuredScreen.pin.toUpperCase()}</span>
        <a href="pages/${key}-suite.html" style="font-size:12px; font-weight:800; color:#3B82F6; text-decoration:none; display:flex; align-items:center; gap:4px;">
          Explore Suite (${suite.screens.length} screens) →
        </a>
      </div>
    </div>
  `;
}
pagesShowcaseHTML += `</div>`;

const html = `<!DOCTYPE html>
<html lang="en" data-theme="light">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Rentenpe UI Kit</title>
  <link rel="stylesheet" href="css/tokens.css">
  <link rel="stylesheet" href="css/catalog.css">
  <script src="js/catalog.js" defer></script>
  <style>
    /* INDEX SPECIFIC STYLES */
    .hero-card {
      background: #1C1C1F;
      border-radius: 16px;
      padding: 48px;
      color: #fff;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 40px;
      box-shadow: 0 20px 40px rgba(0,0,0,0.1);
    }
    .hero-title-sub {
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: #8E8E93;
      margin-bottom: 12px;
    }
    .hero-title {
      font-size: 40px;
      font-weight: 700;
      margin: 0 0 12px 0;
      letter-spacing: -0.02em;
    }
    .hero-desc {
      font-size: 15px;
      color: #8E8E93;
      margin: 0;
    }
    .hero-stats {
      display: flex;
      gap: 24px;
    }
    .hero-stat-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 8px;
    }
    .hero-stat-icon {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      background: rgba(255,255,255,0.1);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 20px;
    }
    .hero-stat-label {
      font-size: 11px;
      color: #8E8E93;
    }

    .section-header {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 24px;
    }
    .section-title {
      font-size: 18px;
      font-weight: 700;
      margin: 0;
    }
    .badge-exact {
      background: #10B981;
      color: #fff;
      font-size: 10px;
      font-weight: 700;
      padding: 4px 8px;
      border-radius: 4px;
      letter-spacing: 0.05em;
    }
    .badge-count {
      background: #F1F5F9;
      color: #64748B;
      font-size: 11px;
      font-weight: 600;
      padding: 4px 10px;
      border-radius: 99px;
      margin-left: auto;
    }

    .replica-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 16px;
      margin-bottom: 48px;
    }
    .replica-card {
      background: #fff;
      border: 1px solid #E2E8F0;
      border-radius: 12px;
      padding: 20px;
      display: flex;
      align-items: center;
      gap: 16px;
      cursor: pointer;
      transition: all 0.2s ease;
      box-shadow: 0 2px 4px rgba(0,0,0,0.02);
    }
    .replica-card:hover {
      box-shadow: 0 8px 16px rgba(0,0,0,0.06);
      border-color: #CBD5E1;
      transform: translateY(-2px);
    }
    .replica-icon {
      width: 40px;
      height: 40px;
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 20px;
    }
    .replica-info h4 {
      margin: 0 0 6px 0;
      font-size: 14px;
      font-family: monospace;
      color: #0F172A;
    }
    .replica-info p {
      margin: 0;
      font-size: 12px;
      color: #64748B;
      display: flex;
      align-items: center;
      gap: 6px;
    }

    .category-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 16px;
    }
    .category-card {
      background: #fff;
      border: 1px solid #E2E8F0;
      border-radius: 12px;
      padding: 24px 20px;
      display: flex;
      align-items: flex-start;
      gap: 16px;
      cursor: pointer;
      transition: all 0.2s ease;
      position: relative;
      overflow: hidden;
    }
    .category-card:hover {
      border-color: var(--color-primary);
    }
    .category-card.active::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 20px;
      right: 20px;
      height: 3px;
      background: #10B981;
      border-radius: 3px 3px 0 0;
    }
    .cat-icon {
      width: 32px;
      height: 32px;
      border-radius: 8px;
      background: #F8FAFC;
      border: 1px solid #E2E8F0;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 16px;
    }
    .cat-info h4 {
      margin: 0 0 4px 0;
      font-size: 14px;
      font-weight: 600;
      color: #0F172A;
    }
    .cat-info p {
      margin: 0;
      font-size: 11px;
      color: #94A3B8;
    }
  </style>
</head>
<body>
<div class="catalog-shell">
  <aside class="catalog-sidebar">
    <div class="catalog-sidebar-header">
      <div style="margin-bottom: 12px; display:flex; align-items:center; justify-content:space-between;">
        <div style="display:flex; align-items:center; gap:8px;">
          <div style="width:28px; height:28px; border-radius:8px; background:#0F172A; color:#fff; display:flex; align-items:center; justify-content:center; font-weight:900; font-size:13px;">R</div>
          <span style="font-size: 15px; font-weight: 800; color: var(--color-text-primary);">RentenPe</span>
        </div>
        <span style="font-size: 10px; font-weight: 800; color: #10B981; background:rgba(16,185,129,0.1); padding:2px 8px; border-radius:99px;">PRO 2.0</span>
      </div>
      <div class="sidebar-search" style="position: relative;">
        <span style="position: absolute; left: 12px; top: 10px; font-size: 14px; color: #94A3B8;">🔍</span>
        <input type="text" id="catalogSearch" placeholder="Search components & pages..." style="width: 100%; padding: 10px 10px 10px 36px; background: var(--color-surface-sunken, #F1F5F9); border: none; border-radius: 8px; font-size: 13px; outline: none;">
      </div>
    </div>

    <!-- Top Sidebar Tab Switcher -->
    <div class="sidebar-tab-switcher">
      <button class="sidebar-tab-btn active" id="tabBtnComponents" onclick="switchSidebarTab('components')">
        <span>🧩 Components</span>
        <span class="sidebar-tab-badge">320+</span>
      </button>
      <button class="sidebar-tab-btn" id="tabBtnPages" onclick="switchSidebarTab('pages')">
        <span>📱 Pages</span>
        <span class="sidebar-tab-badge">125</span>
      </button>
    </div>

    <nav class="catalog-nav" id="navComponentsList">
${navHTML}
    </nav>

    <nav class="catalog-nav" id="navPagesList" style="display:none;">
${navPagesHTML}
    </nav>
    <div class="catalog-sidebar-footer">
      <!-- Theme Selection Button that triggers color picker -->
      <button onclick="window.openThemePicker()" style="width: 100%; margin-bottom: 16px; padding: 10px; background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 8px; color: #0F172A; font-weight: 600; font-size: 13px; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 8px;">
        🎨 Customize Colors
      </button>

      <div class="theme-toggle">
        <button class="theme-toggle-option active" data-theme="light">☀️ Light</button>
        <button class="theme-toggle-option" data-theme="dark">🌙 Dark</button>
      </div>
    </div>
  </aside>

  <main class="catalog-main" style="background: var(--color-surface-sunken, #F8FAFC); padding: 32px 48px;">
    <!-- Main Components View -->
    <div id="mainComponentsView">
    
    <!-- Hero Card -->
    <div class="hero-card">
      <div>
        <div class="hero-title-sub">Rentenpe Design System</div>
        <h1 class="hero-title">580+ Components</h1>
        <p class="hero-desc">Every component from PayDash extracted + 400 new fintech patterns</p>
      </div>
      <div class="hero-stats">
        <div class="hero-stat-item">
          <div class="hero-stat-icon">◎</div>
          <div class="hero-stat-label">Buttons</div>
        </div>
        <div class="hero-stat-item">
          <div class="hero-stat-icon">📝</div>
          <div class="hero-stat-label">Inputs</div>
        </div>
        <div class="hero-stat-item">
          <div class="hero-stat-icon">🪟</div>
          <div class="hero-stat-label">Modals</div>
        </div>
        <div class="hero-stat-item">
          <div class="hero-stat-icon">🏆</div>
          <div class="hero-stat-label">Rewards</div>
        </div>
      </div>
    </div>

    <!-- Replicas Section -->
    <div class="section-header">
      <h2 class="section-title">PayDash Exact Replicas</h2>
      <span class="badge-exact">SOURCE</span>
      <span class="badge-count">13 components</span>
    </div>

    <div class="replica-grid">
      <div class="replica-card" onclick="window.location.href='pages/modal.html'">
        <div class="replica-icon" style="background: #FEE2E2; color: #EF4444;">🪟</div>
        <div class="replica-info">
          <h4>ModalProvider.tsx</h4>
          <p><span class="badge-exact">EXACT</span> 3D Glassmorphic, Black Headers</p>
        </div>
      </div>
      <div class="replica-card" onclick="window.location.href='pages/drawer.html'">
        <div class="replica-icon" style="background: #DBEAFE; color: #3B82F6;">📁</div>
        <div class="replica-info">
          <h4>DrawerPanel.tsx</h4>
          <p><span class="badge-exact">EXACT</span> Neo-Brutalist Slide Panel</p>
        </div>
      </div>
      <div class="replica-card" onclick="window.location.href='pages/infographics.html'">
        <div class="replica-icon" style="background: #D1FAE5; color: #10B981;">🤖</div>
        <div class="replica-info">
          <h4>AIPanel.tsx</h4>
          <p><span class="badge-exact">EXACT</span> Floating AI Assistant</p>
        </div>
      </div>
      <div class="replica-card" onclick="window.location.href='pages/confirm-dialog.html'">
        <div class="replica-icon" style="background: #FEF3C7; color: #F59E0B;">❓</div>
        <div class="replica-info">
          <h4>ConfirmDialog.tsx</h4>
          <p><span class="badge-exact">EXACT</span> Confirm/Cancel Modal</p>
        </div>
      </div>
      <div class="replica-card" onclick="window.location.href='pages/data-table.html'">
        <div class="replica-icon" style="background: #E0E7FF; color: #6366F1;">📊</div>
        <div class="replica-info">
          <h4>DataTable.tsx</h4>
          <p><span class="badge-exact">EXACT</span> <span style="text-decoration:underline;color:#3B82F6;">Sort, Paginate, Export</span></p>
        </div>
      </div>
      <div class="replica-card" onclick="window.location.href='pages/toggle.html'">
        <div class="replica-icon" style="background: #E0E7FF; color: #6366F1;">🔀</div>
        <div class="replica-info">
          <h4>Toggle.tsx</h4>
          <p><span class="badge-exact">EXACT</span> Switch sm/md</p>
        </div>
      </div>
    </div>

    <!-- Categories Section -->
    <div class="section-header">
      <h2 class="section-title">All Component Categories</h2>
      <span class="badge-count">42 categories</span>
    </div>

    <div class="category-grid">
      <div class="category-card active" onclick="window.location.href='pages/buttons.html'">
        <div class="cat-icon">◎</div>
        <div class="cat-info">
          <h4>Buttons & Actions</h4>
          <p>10 families • 30 components</p>
        </div>
      </div>
      <div class="category-card" onclick="window.location.href='pages/text-inputs.html'">
        <div class="cat-icon">📝</div>
        <div class="cat-info">
          <h4>Inputs & Forms</h4>
          <p>22 families • 66 components</p>
        </div>
      </div>
      <div class="category-card" onclick="window.location.href='pages/checkbox.html'">
        <div class="cat-icon">☑️</div>
        <div class="cat-info">
          <h4>Selection Controls</h4>
          <p>5 families • 15 components</p>
        </div>
      </div>
      <div class="category-card" onclick="window.location.href='pages/select.html'">
        <div class="cat-icon">📋</div>
        <div class="cat-info">
          <h4>Dropdowns & Selects</h4>
          <p>6 families • 18 components</p>
        </div>
      </div>
      <div class="category-card" onclick="window.location.href='pages/sidebar.html'">
        <div class="cat-icon">📂</div>
        <div class="cat-info">
          <h4>Navigation</h4>
          <p>13 families • 39 components</p>
        </div>
      </div>
      <div class="category-card" onclick="window.location.href='pages/context-menu.html'">
        <div class="cat-icon">⋮</div>
        <div class="cat-info">
          <h4>Menus</h4>
          <p>6 families • 18 components</p>
        </div>
      </div>
      <div class="category-card" onclick="window.location.href='pages/badges.html'">
        <div class="cat-icon">🏅</div>
        <div class="cat-info">
          <h4>Badges & Chips</h4>
          <p>8 families • 24 components</p>
        </div>
      </div>
      <div class="category-card" onclick="window.location.href='pages/list-rows.html'">
        <div class="cat-icon">📋</div>
        <div class="cat-info">
          <h4>Lists</h4>
          <p>6 families • 18 components</p>
      </div>
    </div>
    <!-- End Main Components View -->

    <!-- Main Pages View (125+ Complete Screens Showcase) -->
    <div id="mainPagesView" style="display:none;">
      ${pagesShowcaseHTML}
    </div>
  </main>

  <!-- Global Color Theme Customization Overlay (Redesigned) -->
  <div id="themePickerOverlay" class="theme-modal-overlay" onclick="if(event.target === this) window.closeThemePicker()">
    <div class="theme-modal-card" onclick="event.stopPropagation()">
      <!-- Modal Header -->
      <div class="theme-modal-header">
        <div class="theme-modal-title-wrap">
          <div class="theme-modal-badge">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="13.5" cy="6.5" r=".5" fill="currentColor"></circle>
              <circle cx="17.5" cy="10.5" r=".5" fill="currentColor"></circle>
              <circle cx="8.5" cy="7.5" r=".5" fill="currentColor"></circle>
              <circle cx="6.5" cy="12.5" r=".5" fill="currentColor"></circle>
              <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.563-2.512 5.563-5.563C22 6.5 17.5 2 12 2z"></path>
            </svg>
          </div>
          <div>
            <h3 class="theme-modal-title">Theme Customization</h3>
            <p class="theme-modal-desc">Configure global color tokens, test live previews, and export CSS.</p>
          </div>
        </div>
        <button type="button" class="theme-modal-close-btn" onclick="window.closeThemePicker()" title="Close (Esc)" aria-label="Close modal">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>

      <!-- Modal Body -->
      <div class="theme-modal-body">
        <!-- Curated Presets -->
        <div>
          <div class="theme-modal-section-title">
            <span>Curated Palettes</span>
            <span style="font-weight: 500; text-transform: none; font-size: 11px;">1-Click Apply</span>
          </div>
          <div class="theme-presets-grid">
            <button type="button" class="theme-preset-btn active" onclick="window.selectThemePreset('rentenpe', this)">
              <div class="theme-preset-name">RentenPe Classic</div>
              <div class="theme-preset-dots">
                <span class="theme-preset-dot" style="background:#0F172A;"></span>
                <span class="theme-preset-dot" style="background:#3B82F6;"></span>
                <span class="theme-preset-dot" style="background:#10B981;"></span>
                <span class="theme-preset-dot" style="background:#F59E0B;"></span>
              </div>
            </button>
            <button type="button" class="theme-preset-btn" onclick="window.selectThemePreset('cred', this)">
              <div class="theme-preset-name">CRED Obsidian</div>
              <div class="theme-preset-dots">
                <span class="theme-preset-dot" style="background:#0A0A0C;"></span>
                <span class="theme-preset-dot" style="background:#EC4899;"></span>
                <span class="theme-preset-dot" style="background:#10B981;"></span>
                <span class="theme-preset-dot" style="background:#F59E0B;"></span>
              </div>
            </button>
            <button type="button" class="theme-preset-btn" onclick="window.selectThemePreset('indigo', this)">
              <div class="theme-preset-name">Electric Indigo</div>
              <div class="theme-preset-dots">
                <span class="theme-preset-dot" style="background:#1E1B4B;"></span>
                <span class="theme-preset-dot" style="background:#6366F1;"></span>
                <span class="theme-preset-dot" style="background:#10B981;"></span>
                <span class="theme-preset-dot" style="background:#F59E0B;"></span>
              </div>
            </button>
            <button type="button" class="theme-preset-btn" onclick="window.selectThemePreset('emerald', this)">
              <div class="theme-preset-name">Emerald Luxury</div>
              <div class="theme-preset-dots">
                <span class="theme-preset-dot" style="background:#064E3B;"></span>
                <span class="theme-preset-dot" style="background:#10B981;"></span>
                <span class="theme-preset-dot" style="background:#059669;"></span>
                <span class="theme-preset-dot" style="background:#F59E0B;"></span>
              </div>
            </button>
            <button type="button" class="theme-preset-btn" onclick="window.selectThemePreset('amethyst', this)">
              <div class="theme-preset-name">Royal Amethyst</div>
              <div class="theme-preset-dots">
                <span class="theme-preset-dot" style="background:#2E1065;"></span>
                <span class="theme-preset-dot" style="background:#8B5CF6;"></span>
                <span class="theme-preset-dot" style="background:#10B981;"></span>
                <span class="theme-preset-dot" style="background:#F59E0B;"></span>
              </div>
            </button>
            <button type="button" class="theme-preset-btn" onclick="window.selectThemePreset('sunset', this)">
              <div class="theme-preset-name">Sunset Copper</div>
              <div class="theme-preset-dots">
                <span class="theme-preset-dot" style="background:#431407;"></span>
                <span class="theme-preset-dot" style="background:#EA580C;"></span>
                <span class="theme-preset-dot" style="background:#10B981;"></span>
                <span class="theme-preset-dot" style="background:#F59E0B;"></span>
              </div>
            </button>
          </div>
        </div>

        <!-- Color Tokens List -->
        <div>
          <div class="theme-modal-section-title">
            <span>Color Tokens</span>
            <span style="font-weight: 500; text-transform: none; font-size: 11px;">Click Swatch or Edit HEX</span>
          </div>
          <div class="theme-token-list">
            <!-- Primary -->
            <div class="theme-token-row">
              <div class="theme-token-info">
                <span class="theme-token-name">Primary Color</span>
                <span class="theme-token-code">--color-primary</span>
              </div>
              <div class="theme-token-ctrl">
                <div class="theme-swatch-wrap" id="primarySwatchWrap" style="background: #0F172A;" title="Pick color">
                  <input type="color" id="primaryColorInput" class="theme-swatch-input" value="#0F172A" oninput="window.handleColorInput('primary', this.value)">
                </div>
                <input type="text" id="primaryHexInput" class="theme-hex-input" value="#0F172A" maxlength="7" spellcheck="false" oninput="window.handleHexInput('primary', this.value)">
                <button type="button" class="theme-copy-hex-btn" onclick="window.copySingleHex('primaryHexInput', this)" title="Copy Hex">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                </button>
              </div>
            </div>

            <!-- Secondary -->
            <div class="theme-token-row">
              <div class="theme-token-info">
                <span class="theme-token-name">Secondary (Accent)</span>
                <span class="theme-token-code">--color-info / --color-accent</span>
              </div>
              <div class="theme-token-ctrl">
                <div class="theme-swatch-wrap" id="secondarySwatchWrap" style="background: #3B82F6;" title="Pick color">
                  <input type="color" id="secondaryColorInput" class="theme-swatch-input" value="#3B82F6" oninput="window.handleColorInput('secondary', this.value)">
                </div>
                <input type="text" id="secondaryHexInput" class="theme-hex-input" value="#3B82F6" maxlength="7" spellcheck="false" oninput="window.handleHexInput('secondary', this.value)">
                <button type="button" class="theme-copy-hex-btn" onclick="window.copySingleHex('secondaryHexInput', this)" title="Copy Hex">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                </button>
              </div>
            </div>

            <!-- Success -->
            <div class="theme-token-row">
              <div class="theme-token-info">
                <span class="theme-token-name">Success</span>
                <span class="theme-token-code">--color-success</span>
              </div>
              <div class="theme-token-ctrl">
                <div class="theme-swatch-wrap" id="successSwatchWrap" style="background: #10B981;" title="Pick color">
                  <input type="color" id="successColorInput" class="theme-swatch-input" value="#10B981" oninput="window.handleColorInput('success', this.value)">
                </div>
                <input type="text" id="successHexInput" class="theme-hex-input" value="#10B981" maxlength="7" spellcheck="false" oninput="window.handleHexInput('success', this.value)">
                <button type="button" class="theme-copy-hex-btn" onclick="window.copySingleHex('successHexInput', this)" title="Copy Hex">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                </button>
              </div>
            </div>

            <!-- Warning -->
            <div class="theme-token-row">
              <div class="theme-token-info">
                <span class="theme-token-name">Warning</span>
                <span class="theme-token-code">--color-warning</span>
              </div>
              <div class="theme-token-ctrl">
                <div class="theme-swatch-wrap" id="warningSwatchWrap" style="background: #F59E0B;" title="Pick color">
                  <input type="color" id="warningColorInput" class="theme-swatch-input" value="#F59E0B" oninput="window.handleColorInput('warning', this.value)">
                </div>
                <input type="text" id="warningHexInput" class="theme-hex-input" value="#F59E0B" maxlength="7" spellcheck="false" oninput="window.handleHexInput('warning', this.value)">
                <button type="button" class="theme-copy-hex-btn" onclick="window.copySingleHex('warningHexInput', this)" title="Copy Hex">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Real-Time Live Preview -->
        <div>
          <div class="theme-modal-section-title">
            <span>Real-Time Component Preview</span>
            <span style="font-weight: 500; text-transform: none; font-size: 11px;">Instant Dynamic Feedback</span>
          </div>
          <div class="theme-preview-card">
            <div class="theme-preview-header">
              <div style="display: flex; align-items: center; gap: 8px;">
                <div id="prevBrandDot" style="width: 8px; height: 8px; border-radius: 50%; background: #0F172A;"></div>
                <span style="font-size: 12px; font-weight: 700; color: #0F172A;">RentenPe PayDash</span>
              </div>
              <span id="prevAccentPill" class="theme-preview-pill" style="background: rgba(59,130,246,0.12); color: #3B82F6;">Pro Member</span>
            </div>
            <div class="theme-preview-demo-row">
              <button type="button" id="prevPrimaryBtn" class="theme-preview-btn" style="background: #0F172A; color: #FFFFFF;">
                Primary CTA
              </button>
              <button type="button" id="prevSecondaryBtn" class="theme-preview-btn" style="background: rgba(59,130,246,0.1); color: #3B82F6; border: 1px solid rgba(59,130,246,0.2);">
                Explore →
              </button>
              <span id="prevSuccessBadge" class="theme-preview-pill" style="background: rgba(16,185,129,0.12); color: #10B981;">
                ● Active
              </span>
              <span id="prevWarningBadge" class="theme-preview-pill" style="background: rgba(245,158,11,0.12); color: #F59E0B;">
                ● Due in 2d
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- Modal Footer -->
      <div class="theme-modal-footer">
        <div class="theme-footer-left">
          <button type="button" class="theme-footer-btn-secondary" onclick="window.resetThemeToDefault()" title="Reset to RentenPe default">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path></svg>
            Reset
          </button>
          <button type="button" id="copyCssBtn" class="theme-footer-btn-secondary" onclick="window.copyThemeCSS()" title="Copy CSS Variables">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            <span>Copy CSS</span>
          </button>
        </div>
        <div class="theme-footer-right">
          <button type="button" class="theme-footer-btn-secondary" onclick="window.closeThemePicker()">Cancel</button>
          <button type="button" id="applyThemeBtn" class="theme-apply-btn" onclick="window.applyGlobalTheme()">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
            <span>Apply Globally</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
</body>
</html>`;

fs.writeFileSync(path.join(__dirname, 'index.html'), html);
console.log('index.html fully updated with 100+ links.');
