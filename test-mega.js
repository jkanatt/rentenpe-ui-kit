const fs = require('fs');
const path = require('path');
const PAGES_DIR = path.join(__dirname, 'pages');

// Require the existing data from generate-pages.js
const ALL_PAGES = {
  // Foundations
  'typography': { cat: 'Foundations', title: 'Typography', desc: 'Type scale, font families, and text styles.', icon: '🔤', families: ['Type Scale', 'Font Weights', 'Text Colors', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'colors': { cat: 'Foundations', title: 'Colors & Tokens', desc: 'Complete color system with semantic tokens.', icon: '🎨', families: ['Primary Palette', 'Semantic Colors', 'Surface Colors', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'spacing': { cat: 'Foundations', title: 'Spacing & Grid', desc: 'Spacing scale and grid system.', icon: '📐', families: ['Spacing Scale', 'Grid System', 'Breakpoints', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'dividers': { cat: 'Foundations', title: 'Dividers', desc: 'Horizontal and vertical separators.', icon: '➖', families: ['Solid Divider', 'Dashed Divider', 'Labeled Divider', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'icons': { cat: 'Foundations', title: 'Icons & Symbols', desc: 'Icon library and symbol set.', icon: '✨', families: ['Action Icons', 'Status Icons', 'Navigation Icons', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'containers': { cat: 'Foundations', title: 'Containers', desc: 'Layout containers and wrappers.', icon: '📦', families: ['Standard Card', 'Glass Card', 'Elevated Card', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  
  // Actions
  'links': { cat: 'Actions', title: 'Text & Link Actions', desc: 'Inline text links and action text.', icon: '🔗', families: ['Standard Link', 'Action Link', 'Destructive Link', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'fab': { cat: 'Actions', title: 'Floating Actions', desc: 'Floating action buttons.', icon: '⊕', families: ['Standard FAB', 'Extended FAB', 'Mini FAB', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  
  // Inputs
  'search-inputs': { cat: 'Inputs', title: 'Search Input', desc: 'Search fields with suggestions.', icon: '🔍', families: ['Standard Search', 'Expandable Search', 'Search with Filters', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'email-inputs': { cat: 'Inputs', title: 'Email Input', desc: 'Email fields with validation.', icon: '📧', families: ['Standard Email', 'Email with Domain', 'Multi Email', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'phone-inputs': { cat: 'Inputs', title: 'Phone Input', desc: 'Phone number fields with country code.', icon: '📱', families: ['Standard Phone', 'With Country Picker', 'Split Phone', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'password-inputs': { cat: 'Inputs', title: 'Password Input', desc: 'Password fields with strength meter.', icon: '🔒', families: ['Standard Password', 'With Strength Meter', 'With Requirements', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'number-inputs': { cat: 'Inputs', title: 'Number Input', desc: 'Number fields with steppers.', icon: '🔢', families: ['Standard Number', 'With Stepper', 'Quantity Selector', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'currency-inputs': { cat: 'Inputs', title: 'Currency Input', desc: 'Currency amount fields with symbol.', icon: '💰', families: ['Standard Currency', 'Multi Currency', 'Amount Range', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'textarea': { cat: 'Inputs', title: 'Textarea', desc: 'Multi-line text areas.', icon: '📄', families: ['Standard Textarea', 'Auto Resize', 'With Character Count', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'date-inputs': { cat: 'Inputs', title: 'Date Field', desc: 'Date picker inputs.', icon: '📅', families: ['Standard Date', 'Date Range', 'Date with Time', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'otp-inputs': { cat: 'Inputs', title: 'OTP / PIN', desc: 'One-time password and PIN entry.', icon: '🔑', families: ['4 Digit OTP', '6 Digit OTP', 'Alphanumeric Code', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'masked-inputs': { cat: 'Inputs', title: 'Masked Input', desc: 'Inputs with format masks.', icon: '🎭', families: ['Card Number Mask', 'SSN Mask', 'Custom Pattern', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'file-upload': { cat: 'Inputs', title: 'File Upload', desc: 'File upload and drag-drop zones.', icon: '📤', families: ['Drop Zone', 'Button Upload', 'Multi File', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'autocomplete': { cat: 'Inputs', title: 'Autocomplete', desc: 'Type-ahead suggestion fields.', icon: '💡', families: ['Standard Autocomplete', 'With Categories', 'Multi Value', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'time-picker': { cat: 'Inputs', title: 'Time Picker', desc: 'Time selection controls.', icon: '🕐', families: ['Standard Time', 'Time Range', 'Duration Picker', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'color-picker': { cat: 'Inputs', title: 'Color Picker', desc: 'Color selection widgets.', icon: '🌈', families: ['Swatch Grid', 'Spectrum Picker', 'Hex Input', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'star-rating': { cat: 'Inputs', title: 'Star Rating', desc: 'Star-based rating input.', icon: '⭐', families: ['5 Star Rating', 'Emoji Rating', 'Slider Rating', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'tags-input': { cat: 'Inputs', title: 'Tags Input', desc: 'Tag creation and management.', icon: '🏷️', families: ['Standard Tags', 'Autocomplete Tags', 'Removable Tags', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'rich-text': { cat: 'Inputs', title: 'Rich Text Editor', desc: 'Rich text editing toolbar.', icon: '📝', families: ['Basic Editor', 'Full Toolbar', 'Markdown Editor', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'signature-pad': { cat: 'Inputs', title: 'Signature Pad', desc: 'Digital signature capture.', icon: '✍️', families: ['Standard Pad', 'Typed Signature', 'Upload Signature', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'form-fields': { cat: 'Inputs', title: 'Form Fields', desc: 'Complete form field wrappers.', icon: '📋', families: ['Stacked Field', 'Horizontal Field', 'Inline Field', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'inline-edit': { cat: 'Inputs', title: 'Inline Edit', desc: 'Click-to-edit inline fields.', icon: '✏️', families: ['Text Inline Edit', 'Select Inline Edit', 'Multi Line Edit', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  
  // Selection
  'checkbox': { cat: 'Selection', title: 'Checkbox', desc: 'Single and group checkboxes.', icon: '☑️', families: ['Standard Checkbox', 'Indeterminate', 'Checkbox Group', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'radio': { cat: 'Selection', title: 'Radio Group', desc: 'Exclusive selection controls.', icon: '🔘', families: ['Standard Radio', 'Card Radio', 'Button Radio', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'toggle': { cat: 'Selection', title: 'Toggle / Switch', desc: 'On/off binary controls.', icon: '🔀', families: ['Standard Toggle', 'With Label', 'Grouped Toggles', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'slider': { cat: 'Selection', title: 'Slider / Range', desc: 'Value range selectors.', icon: '🎚️', families: ['Standard Slider', 'Range Slider', 'Step Slider', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'adornments': { cat: 'Selection', title: 'Input Adornments', desc: 'Input prefix/suffix decorations.', icon: '🎀', families: ['Icon Adornment', 'Text Adornment', 'Action Adornment', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  
  // Dropdowns
  'select': { cat: 'Dropdowns', title: 'Standard Select', desc: 'Single value dropdown.', icon: '📋', families: ['Standard Select', 'With Icons', 'Grouped Options', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'searchable-select': { cat: 'Dropdowns', title: 'Searchable Select', desc: 'Filterable dropdown.', icon: '🔎', families: ['Standard Searchable', 'With Create', 'Async Search', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'multi-select': { cat: 'Dropdowns', title: 'Multi Select', desc: 'Multiple value selection.', icon: '☑️', families: ['Checkbox Multi', 'Chip Multi', 'Tree Multi', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'property-selector': { cat: 'Dropdowns', title: 'Property Selector', desc: 'Property-specific selector.', icon: '🏠', families: ['Standard Property', 'With Preview', 'Map Selector', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'filter-dropdown': { cat: 'Dropdowns', title: 'Filter Dropdown', desc: 'Preset filter menus.', icon: '🔻', families: ['Standard Filter', 'Multi Filter', 'Date Filter', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'sort-dropdown': { cat: 'Dropdowns', title: 'Sort Dropdown', desc: 'Sort order menus.', icon: '↕️', families: ['Standard Sort', 'With Direction', 'Multi Sort', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },

  // Navigation
  'sidebar': { cat: 'Navigation', title: 'Side Navigation', desc: 'Collapsible sidebar with groups.', icon: '📂', families: ['Full Sidebar', 'Collapsed Sidebar', 'Mobile Sidebar', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'topbar': { cat: 'Navigation', title: 'Top Bar / Header', desc: 'App header with actions.', icon: '📌', families: ['Standard Header', 'With Search', 'Breadcrumb Header', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'breadcrumbs': { cat: 'Navigation', title: 'Breadcrumbs', desc: 'Path navigation trail.', icon: '🥖', families: ['Standard Crumbs', 'With Icons', 'Collapsed Crumbs', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'tabs': { cat: 'Navigation', title: 'Page Tabs', desc: 'Content switching tabs.', icon: '📑', families: ['Standard Tabs', 'Underline Tabs', 'Pill Tabs', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'segmented': { cat: 'Navigation', title: 'Segmented Control', desc: 'Toggle between views.', icon: '⊞', families: ['Standard Segment', 'Icon Segment', 'Full Width', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'tabbar': { cat: 'Navigation', title: 'Tab Bar Nav', desc: 'Mobile bottom navigation.', icon: '📱', families: ['Standard Tab Bar', 'With Badge', 'Floating Tab Bar', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'pagination': { cat: 'Navigation', title: 'Pagination', desc: 'Page number navigation.', icon: '📄', families: ['Standard Pagination', 'Simple Prev/Next', 'Load More', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'stepper': { cat: 'Navigation', title: 'Stepper', desc: 'Multi-step progress.', icon: '🪜', families: ['Horizontal Stepper', 'Vertical Stepper', 'Dot Stepper', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'back-next': { cat: 'Navigation', title: 'Back / Next', desc: 'Sequential navigation.', icon: '↔️', families: ['Standard Nav', 'With Preview', 'Wizard Nav', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'header-utils': { cat: 'Navigation', title: 'Header Utilities', desc: 'Header action buttons.', icon: '🔔', families: ['Notification Bell', 'Search Toggle', 'User Menu', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'lifecycle-nav': { cat: 'Navigation', title: 'Lifecycle Nav', desc: 'Process lifecycle navigation.', icon: '🔄', families: ['Standard Lifecycle', 'Vertical Lifecycle', 'Interactive', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'footer': { cat: 'Navigation', title: 'Footer', desc: 'Page and app footers.', icon: '📎', families: ['Standard Footer', 'Minimal Footer', 'With Links', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'quick-actions': { cat: 'Navigation', title: 'Quick Actions', desc: 'Speed dial and shortcuts.', icon: '⚡', families: ['Speed Dial', 'Action Grid', 'Shortcut Bar', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },

  // Menus
  'context-menu': { cat: 'Menus', title: 'Context Menu', desc: 'Right-click context menus.', icon: '⋮', families: ['Standard Context', 'With Icons', 'Nested Context', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'profile-menu': { cat: 'Menus', title: 'Profile Menu', desc: 'User profile dropdown.', icon: '👤', families: ['Standard Profile', 'With Avatar', 'Extended Profile', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'command-palette': { cat: 'Menus', title: 'Command Palette', desc: 'Keyboard-first command search.', icon: '⌘', families: ['Standard Palette', 'With Categories', 'AI Enhanced', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'mega-menu': { cat: 'Menus', title: 'Mega Menu', desc: 'Large navigation menus.', icon: '📊', families: ['Column Mega', 'With Icons', 'With Featured', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'nested-menu': { cat: 'Menus', title: 'Nested Menu', desc: 'Multi-level submenus.', icon: '📂', families: ['Standard Nested', 'Hover Expand', 'Accordion', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'action-sheet': { cat: 'Menus', title: 'Action Sheet', desc: 'iOS-style action sheets.', icon: '📱', families: ['Standard Actions', 'With Icons', 'Destructive Actions', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },

  // Data Display
  'badges': { cat: 'Data Display', title: 'Status Badges', desc: 'Status indicator badges.', icon: '🏅', families: ['Standard Badge', 'Dot Badge', 'Outlined Badge', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'metadata-chips': { cat: 'Data Display', title: 'Metadata Chips', desc: 'Key-value metadata chips.', icon: '🏷️', families: ['Standard Chip', 'With Icon', 'Dismissible', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'filter-chips': { cat: 'Data Display', title: 'Filter Chips', desc: 'Active filter indicators.', icon: '🔖', families: ['Standard Filter', 'Toggle Filter', 'Group Filter', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'action-chips': { cat: 'Data Display', title: 'Action Chips', desc: 'Actionable chip buttons.', icon: '⚡', families: ['Standard Action', 'With Icon', 'Outlined Action', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'count-badge': { cat: 'Data Display', title: 'Count Badge', desc: 'Numeric count indicators.', icon: '🔴', families: ['Standard Count', 'Dot Only', 'Animated Count', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'dot-indicator': { cat: 'Data Display', title: 'Dot Indicator', desc: 'Status dot indicators.', icon: '●', families: ['Color Dot', 'Pulsing Dot', 'Labeled Dot', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'avatars': { cat: 'Data Display', title: 'Avatars', desc: 'User avatar components.', icon: '👤', families: ['Image Avatar', 'Initials Avatar', 'Avatar Group', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'verified-tag': { cat: 'Data Display', title: 'Verified Tags', desc: 'Verification status indicators.', icon: '✅', families: ['Verified Badge', 'Trust Seal', 'Certification', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },

  // Lists
  'list-rows': { cat: 'Lists', title: 'Standard List', desc: 'Standard list rows.', icon: '📋', families: ['Simple List', 'With Metadata', 'With Actions', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'compact-list': { cat: 'Lists', title: 'Compact List', desc: 'Dense list rows.', icon: '📑', families: ['Standard Compact', 'With Checkbox', 'With Avatar', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'timeline': { cat: 'Lists', title: 'Activity Timeline', desc: 'Chronological event timeline.', icon: '📅', families: ['Standard Timeline', 'Grouped Timeline', 'Interactive Timeline', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'grouped-list': { cat: 'Lists', title: 'Grouped List', desc: 'Categorized list sections.', icon: '📂', families: ['Standard Grouped', 'Collapsible', 'Sticky Headers', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'swipeable-list': { cat: 'Lists', title: 'Swipeable List', desc: 'Swipe-to-reveal actions.', icon: '👆', families: ['Swipe Delete', 'Swipe Actions', 'Swipe Archive', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'expandable-list': { cat: 'Lists', title: 'Expandable List', desc: 'Accordion list items.', icon: '📖', families: ['Standard Expand', 'With Preview', 'Multi Expand', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },

  // Tables
  'data-table': { cat: 'Tables', title: 'Standard Table', desc: 'Full-featured data table.', icon: '📊', families: ['Standard Table', 'Sortable Table', 'Selectable Table', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'compact-table': { cat: 'Tables', title: 'Compact Table', desc: 'Dense data table.', icon: '📉', families: ['Standard Compact', 'With Inline Edit', 'Minimal', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'responsive-table': { cat: 'Tables', title: 'Responsive Table', desc: 'Mobile-friendly tables.', icon: '📱', families: ['Card Stack', 'Horizontal Scroll', 'Priority Columns', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'table-toolbar': { cat: 'Tables', title: 'Table Toolbar', desc: 'Table action toolbar.', icon: '🔧', families: ['Standard Toolbar', 'With Bulk Actions', 'Filter Toolbar', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'expandable-row': { cat: 'Tables', title: 'Expandable Row', desc: 'Table rows with detail expansion.', icon: '📖', families: ['Standard Expand', 'With Sub Table', 'Accordion Row', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'editable-table': { cat: 'Tables', title: 'Editable Table', desc: 'Inline-editable table cells.', icon: '✏️', families: ['Cell Edit', 'Row Edit', 'Full Edit Mode', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },

  // Cards
  'entity-cards': { cat: 'Cards', title: 'Entity Cards', desc: 'Property and entity display cards.', icon: '🏢', families: ['Standard Entity', 'With Status', 'Compact Entity', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'report-cards': { cat: 'Cards', title: 'Report Cards', desc: 'Report summary cards.', icon: '📋', families: ['Standard Report', 'With Chart', 'Download Report', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'service-cards': { cat: 'Cards', title: 'Service Cards', desc: 'Service feature cards.', icon: '🛎️', families: ['Standard Service', 'With CTA', 'Comparison', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'membership-cards': { cat: 'Cards', title: 'Membership', desc: 'Membership tier display.', icon: '💳', families: ['Standard Tier', 'Premium Tier', 'Comparison Grid', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'info-cards': { cat: 'Cards', title: 'Information', desc: 'Informational display cards.', icon: 'ℹ️', families: ['Standard Info', 'With Icon', 'Dismissible Info', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'reward-cards': { cat: 'Cards', title: 'Reward Cards', desc: 'Reward and offer cards.', icon: '🎁', families: ['Standard Reward', 'Scratch Card', 'Coupon Card', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'rm-cards': { cat: 'Cards', title: 'RM Contact', desc: 'Relationship manager cards.', icon: '🤝', families: ['Standard RM', 'With Schedule', 'Chat RM', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'profile-cards': { cat: 'Cards', title: 'Profile Cards', desc: 'User profile cards.', icon: '👤', families: ['Standard Profile', 'Compact Profile', 'Team Card', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'pricing-cards': { cat: 'Cards', title: 'Pricing Cards', desc: 'Pricing plan cards.', icon: '💲', families: ['Standard Pricing', 'Highlighted Plan', 'Comparison', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'comparison-cards': { cat: 'Cards', title: 'Comparison', desc: 'Side-by-side comparison.', icon: '⚖️', families: ['Two Column', 'Multi Column', 'Feature Matrix', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'testimonial-cards': { cat: 'Cards', title: 'Testimonials', desc: 'User testimonial cards.', icon: '💬', families: ['Standard Quote', 'With Rating', 'Video Testimonial', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'feature-cards': { cat: 'Cards', title: 'Feature Cards', desc: 'Feature highlight cards.', icon: '⭐', families: ['Standard Feature', 'With Illustration', 'Grid Feature', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'notification-cards': { cat: 'Cards', title: 'Notification', desc: 'Notification display cards.', icon: '🔔', families: ['Standard Notification', 'Grouped', 'Action Required', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },

  // Overlays
  'bottom-sheet': { cat: 'Overlays', title: 'Bottom Sheet', desc: 'Mobile bottom drawer.', icon: '📱', families: ['Standard Sheet', 'With Handle', 'Full Screen', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'confirm-dialog': { cat: 'Overlays', title: 'Confirmation', desc: 'Destructive action confirmations.', icon: '❓', families: ['Standard Confirm', 'Danger Confirm', 'With Input', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'form-modal': { cat: 'Overlays', title: 'Form Modal', desc: 'Form-containing modals.', icon: '📝', families: ['Standard Form', 'Multi Step', 'Side Panel Form', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'success-dialog': { cat: 'Overlays', title: 'Success Dialog', desc: 'Success confirmation dialogs.', icon: '✅', families: ['Standard Success', 'With Action', 'Animated', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'warning-dialog': { cat: 'Overlays', title: 'Warning Dialog', desc: 'Warning and caution dialogs.', icon: '⚠️', families: ['Standard Warning', 'Blocking Warning', 'Timed Warning', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'fullscreen-dialog': { cat: 'Overlays', title: 'Fullscreen Dialog', desc: 'Full-screen modal views.', icon: '🖥️', families: ['Standard Full', 'With Header', 'Immersive', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'wizard-dialog': { cat: 'Overlays', title: 'Wizard Dialog', desc: 'Multi-step wizard modals.', icon: '🧙', families: ['Standard Wizard', 'With Sidebar', 'Linear Wizard', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'popover': { cat: 'Overlays', title: 'Popover', desc: 'Contextual floating panels.', icon: '💬', families: ['Standard Popover', 'With Arrow', 'Rich Popover', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'tooltip': { cat: 'Overlays', title: 'Tooltip', desc: 'Informational hover tips.', icon: '💡', families: ['Standard Tooltip', 'Rich Tooltip', 'Interactive Tooltip', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'lightbox': { cat: 'Overlays', title: 'Lightbox', desc: 'Image/media lightbox viewer.', icon: '🖼️', families: ['Standard Lightbox', 'Gallery Lightbox', 'Video Lightbox', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },

  // Feedback
  'alert-banner': { cat: 'Feedback', title: 'Alert Banner', desc: 'Full-width alert banners.', icon: '🚨', families: ['Info Banner', 'Warning Banner', 'Error Banner', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'empty-state': { cat: 'Feedback', title: 'Empty State', desc: 'No-data placeholder screens.', icon: '📭', families: ['Standard Empty', 'With Action', 'Illustrated Empty', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'error-state': { cat: 'Feedback', title: 'Error State', desc: 'Error fallback displays.', icon: '❌', families: ['Standard Error', 'Network Error', 'Permission Error', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'loading': { cat: 'Feedback', title: 'Loading Spinner', desc: 'Loading indicator animations.', icon: '⏳', families: ['Spinner', 'Dot Loading', 'Bar Loading', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'skeleton': { cat: 'Feedback', title: 'Skeleton Screen', desc: 'Content loading placeholders.', icon: '💀', families: ['Card Skeleton', 'List Skeleton', 'Table Skeleton', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'progress-bar': { cat: 'Feedback', title: 'Progress Bar', desc: 'Progress indicator bars.', icon: '📊', families: ['Standard Progress', 'Segmented Progress', 'Circular Progress', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'score-gauge': { cat: 'Feedback', title: 'Score Ring', desc: 'Circular score gauges.', icon: '🎯', families: ['Standard Ring', 'Gradient Ring', 'Multi Ring', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'status-indicator': { cat: 'Feedback', title: 'Status Indicator', desc: 'Live status displays.', icon: '🟢', families: ['Dot Status', 'Badge Status', 'Timeline Status', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'countdown': { cat: 'Feedback', title: 'Countdown', desc: 'Countdown timer displays.', icon: '⏱️', families: ['Standard Countdown', 'Flip Clock', 'Circular Countdown', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'confetti': { cat: 'Feedback', title: 'Confetti / Celebration', desc: 'Celebration animations.', icon: '🎉', families: ['Burst Confetti', 'Rain Confetti', 'Emoji Rain', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'connection-status': { cat: 'Feedback', title: 'Connection Status', desc: 'Network status indicators.', icon: '📶', families: ['Online/Offline', 'Signal Strength', 'Reconnecting', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },

  // States
  'state-offline': { cat: 'States', title: 'Offline State', desc: 'No-connection fallback.', icon: '📵', families: ['Standard Offline', 'Cached View', 'Retry Prompt', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'state-locked': { cat: 'States', title: 'Locked State', desc: 'Permission-restricted view.', icon: '🔒', families: ['Standard Locked', 'Upgrade Prompt', 'Request Access', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'state-expired': { cat: 'States', title: 'Expired State', desc: 'Time-elapsed fallback.', icon: '⌛', families: ['Standard Expired', 'Renewal Prompt', 'Grace Period', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'state-pending': { cat: 'States', title: 'Pending State', desc: 'Awaiting action/approval.', icon: '⏳', families: ['Standard Pending', 'With Timeline', 'Approval Pending', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'state-partial': { cat: 'States', title: 'Partial State', desc: 'Incomplete data display.', icon: '🔘', families: ['Standard Partial', 'Step Progress', 'Required Fields', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'state-success': { cat: 'States', title: 'Success State', desc: 'Operation complete display.', icon: '✅', families: ['Standard Success', 'With Confetti', 'With Next Steps', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },

  // Calendar
  'calendar': { cat: 'Calendar', title: 'Calendar View', desc: 'Monthly calendar component.', icon: '📅', families: ['Standard Calendar', 'With Events', 'Mini Calendar', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'date-range': { cat: 'Calendar', title: 'Date Range', desc: 'Date range selector.', icon: '📆', families: ['Standard Range', 'Preset Ranges', 'Custom Range', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'month-selector': { cat: 'Calendar', title: 'Month Selector', desc: 'Month selection control.', icon: '🗓️', families: ['Standard Month', 'Scroll Month', 'Grid Month', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'day-status': { cat: 'Calendar', title: 'Day Status Cell', desc: 'Calendar day with status.', icon: '📊', families: ['Standard Cell', 'Heatmap Cell', 'Multi Event Cell', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'schedule-view': { cat: 'Calendar', title: 'Schedule View', desc: 'Timeline schedule display.', icon: '📋', families: ['Day Schedule', 'Week Schedule', 'Agenda View', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },

  // Charts
  'bar-chart': { cat: 'Charts', title: 'Bar Chart', desc: 'Vertical and horizontal bars.', icon: '📊', families: ['Standard Bar', 'Horizontal Bar', 'Grouped Bar', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'stacked-bar': { cat: 'Charts', title: 'Stacked Bar', desc: 'Stacked bar compositions.', icon: '📊', families: ['Standard Stacked', 'Percent Stacked', 'Diverging', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'line-chart': { cat: 'Charts', title: 'Line / Area', desc: 'Line and area charts.', icon: '📈', families: ['Standard Line', 'Area Fill', 'Multi Series', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'donut-chart': { cat: 'Charts', title: 'Donut Chart', desc: 'Donut and pie charts.', icon: '🍩', families: ['Standard Donut', 'Half Donut', 'Nested Donut', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'chart-legend': { cat: 'Charts', title: 'Chart Legend', desc: 'Chart legend displays.', icon: '📋', families: ['Inline Legend', 'Card Legend', 'Interactive Legend', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'heatmap': { cat: 'Charts', title: 'Heatmap', desc: 'Density heatmap display.', icon: '🗺️', families: ['Standard Heatmap', 'Calendar Heat', 'Grid Heat', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'funnel-chart': { cat: 'Charts', title: 'Funnel Chart', desc: 'Conversion funnel display.', icon: '📉', families: ['Standard Funnel', 'Horizontal Funnel', 'Comparison', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'gauge-chart': { cat: 'Charts', title: 'Gauge Chart', desc: 'Gauge meter display.', icon: '⏱️', families: ['Standard Gauge', 'Semi Circle', 'Multi Gauge', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },

  // Analytics
  'score-display': { cat: 'Analytics', title: 'Score Display', desc: 'Score and metric display.', icon: '💯', families: ['Standard Score', 'Graded Score', 'Comparison Score', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'trend-sparkline': { cat: 'Analytics', title: 'Trend / Sparkline', desc: 'Inline trend displays.', icon: '📈', families: ['Standard Sparkline', 'With Change', 'Mini Area', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'comparison': { cat: 'Analytics', title: 'Comparison', desc: 'Value comparison displays.', icon: '⚖️', families: ['Side by Side', 'Percent Change', 'Trend Compare', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'breakdown': { cat: 'Analytics', title: 'Breakdown', desc: 'Data breakdown views.', icon: '📊', families: ['Standard Breakdown', 'Nested Breakdown', 'Visual Breakdown', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },

  // Infographics
  'stats-counter': { cat: 'Infographics', title: 'Stats Counter', desc: 'Animated number counters.', icon: '🔢', families: ['Standard Counter', 'Animated Counter', 'With Icon', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'comparison-visual': { cat: 'Infographics', title: 'Visual Comparison', desc: 'Before/after comparisons.', icon: '📊', families: ['Standard Comparison', 'Slider Compare', 'Overlay Compare', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'process-flow': { cat: 'Infographics', title: 'Process Flow', desc: 'Step-by-step flow diagrams.', icon: '🔄', families: ['Standard Flow', 'Branching Flow', 'Interactive Flow', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'key-insight': { cat: 'Infographics', title: 'Key Insight', desc: 'Highlighted data callouts.', icon: '💡', families: ['Standard Insight', 'With Chart', 'Actionable Insight', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'data-story': { cat: 'Infographics', title: 'Data Story', desc: 'Narrative data cards.', icon: '📖', families: ['Standard Story', 'With Timeline', 'Interactive Story', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },

  // Rewards
  'achievement': { cat: 'Rewards', title: 'Achievement Badge', desc: 'Milestone achievement badges.', icon: '🏆', families: ['Unlocked', 'Locked', 'Badge Grid', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'level-progress': { cat: 'Rewards', title: 'Level Progress', desc: 'User level and XP display.', icon: '📊', families: ['Standard Level', 'Tiered Level', 'XP Bar', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'streak': { cat: 'Rewards', title: 'Streak Counter', desc: 'Consecutive action tracking.', icon: '🔥', families: ['Flame Streak', 'Compact Badge', 'Streak Recovery', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'cashback': { cat: 'Rewards', title: 'Cashback Card', desc: 'Cashback and reward reveals.', icon: '💸', families: ['Earned Cashback', 'Offer Card', 'Scratch Reveal', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'leaderboard': { cat: 'Rewards', title: 'Leaderboard', desc: 'Competitive ranking display.', icon: '🏅', families: ['Full Leaderboard', 'Your Position', 'Podium Top 3', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'challenge': { cat: 'Rewards', title: 'Challenge Card', desc: 'Time-bound challenge display.', icon: '🎯', families: ['Active Challenge', 'Completed', 'Upcoming', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'referral': { cat: 'Rewards', title: 'Referral Card', desc: 'Referral invite cards.', icon: '👥', families: ['Invite Card', 'Progress Tracker', 'Dark Banner', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },

  // Authentication
  'login': { cat: 'Authentication', title: 'Login Form', desc: 'Email/password login.', icon: '🔑', families: ['Standard Login', 'With Social', 'OTP Login', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'signup': { cat: 'Authentication', title: 'Signup Form', desc: 'Registration flow.', icon: '📝', families: ['Standard Signup', 'Multi Step', 'With Invite', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'forgot-password': { cat: 'Authentication', title: 'Forgot Password', desc: 'Password reset flow.', icon: '🔒', families: ['Email Reset', 'Phone Reset', 'Security Questions', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'otp-verify': { cat: 'Authentication', title: 'OTP Verify', desc: 'Code verification screen.', icon: '📱', families: ['Standard OTP', 'With Timer', 'Voice OTP', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'biometric': { cat: 'Authentication', title: 'Biometric Auth', desc: 'Face/finger recognition.', icon: '👆', families: ['Face ID', 'Touch ID', 'PIN Fallback', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'social-login': { cat: 'Authentication', title: 'Social Login', desc: 'Google/Apple sign in.', icon: '🌐', families: ['Standard Social', 'Button Row', 'Icon Only', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },

  // Onboarding
  'welcome-screen': { cat: 'Onboarding', title: 'Welcome Screen', desc: 'First launch hero.', icon: '🎉', families: ['Standard Welcome', 'Animated Welcome', 'Video Welcome', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'feature-tour': { cat: 'Onboarding', title: 'Feature Tour', desc: 'Interactive walkthrough.', icon: '🗺️', families: ['Standard Tour', 'Spotlight Tour', 'Tooltip Tour', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'permission-request': { cat: 'Onboarding', title: 'Permission Request', desc: 'System permission ask.', icon: '🔐', families: ['Standard Permission', 'Explained Permission', 'Batch Permissions', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'setup-wizard': { cat: 'Onboarding', title: 'Setup Wizard', desc: 'Initial configuration.', icon: '🧙', families: ['Standard Wizard', 'Card Wizard', 'Progressive Wizard', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'onboard-complete': { cat: 'Onboarding', title: 'Completion', desc: 'Onboarding success.', icon: '✅', families: ['Standard Complete', 'With Confetti', 'Next Steps', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },

  // Communication
  'chat-bubble': { cat: 'Communication', title: 'Chat Bubble', desc: 'Message bubbles.', icon: '💬', families: ['Standard Bubble', 'With Media', 'System Message', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'message-thread': { cat: 'Communication', title: 'Message Thread', desc: 'Conversation list.', icon: '📧', families: ['Standard Thread', 'Compact Thread', 'With Preview', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'announcement': { cat: 'Communication', title: 'Announcement', desc: 'Platform updates.', icon: '📢', families: ['Standard Announcement', 'Banner', 'Modal Announcement', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'in-app-message': { cat: 'Communication', title: 'In App Message', desc: 'Targeted messages.', icon: '📩', families: ['Standard Message', 'Slide In', 'Full Screen', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },

  // Payments
  'payment-row': { cat: 'Payments', title: 'Payment Row', desc: 'Transaction list rows.', icon: '💳', families: ['Standard Row', 'With Status', 'Grouped Row', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'payment-card': { cat: 'Payments', title: 'Payment Method', desc: 'Card/bank display.', icon: '💳', families: ['Standard Card', 'With Default Badge', 'Add New', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'bank-account': { cat: 'Payments', title: 'Bank Account', desc: 'Linked bank account.', icon: '🏦', families: ['Standard Bank', 'With Balance', 'Verified Account', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'wallet': { cat: 'Payments', title: 'Wallet Balance', desc: 'Balance display.', icon: '👛', families: ['Standard Wallet', 'With History', 'Multi Currency', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'receipt': { cat: 'Payments', title: 'Receipt', desc: 'Payment receipt.', icon: '🧾', families: ['Standard Receipt', 'Detailed Receipt', 'Download Receipt', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'invoice': { cat: 'Payments', title: 'Invoice', desc: 'Bill/invoice view.', icon: '📄', families: ['Standard Invoice', 'With Breakdown', 'Past Due', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'split-payment': { cat: 'Payments', title: 'Split Payment', desc: 'Roommate split.', icon: '➗', families: ['Standard Split', 'Equal Split', 'Custom Split', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'autopay': { cat: 'Payments', title: 'Auto Pay', desc: 'Recurring setup.', icon: '🔁', families: ['Standard Autopay', 'With Schedule', 'Manage Autopay', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },

  // Property
  'property-listing': { cat: 'Property', title: 'Property Listing', desc: 'Property search cards.', icon: '🏠', families: ['Standard Listing', 'Grid Listing', 'Map Listing', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'property-gallery': { cat: 'Property', title: 'Property Gallery', desc: 'Image carousel.', icon: '🖼️', families: ['Standard Gallery', 'Full Screen', 'With Thumbnails', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'amenity-grid': { cat: 'Property', title: 'Amenity Grid', desc: 'Feature icons grid.', icon: '🏊', families: ['Standard Grid', 'Compact Grid', 'With Labels', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'location-map': { cat: 'Property', title: 'Location Map', desc: 'Map card.', icon: '📍', families: ['Standard Map', 'With Points of Interest', 'Street View', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'floor-plan': { cat: 'Property', title: 'Floor Plan', desc: 'Layout view.', icon: '📐', families: ['Standard Plan', 'Interactive Plan', 'With Measurements', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'property-compare': { cat: 'Property', title: 'Property Compare', desc: 'Side-by-side comparison.', icon: '⚖️', families: ['Standard Compare', 'Feature Matrix', 'With Scoring', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'maintenance': { cat: 'Property', title: 'Maintenance', desc: 'Repair request card.', icon: '🔧', families: ['Standard Request', 'With Timeline', 'Emergency', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'inspection': { cat: 'Property', title: 'Inspection', desc: 'Property inspection card.', icon: '📋', families: ['Standard Inspection', 'Checklist', 'Report', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'move-checklist': { cat: 'Property', title: 'Move Checklist', desc: 'Moving checklist.', icon: '📦', families: ['Standard Checklist', 'Timeline Checklist', 'Interactive', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },

  // Legal
  'lease-agreement': { cat: 'Legal', title: 'Lease Agreement', desc: 'Contract display.', icon: '📜', families: ['Standard Lease', 'Summary View', 'Clause Viewer', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'terms-section': { cat: 'Legal', title: 'Terms Section', desc: 'Legal disclosure.', icon: '📋', families: ['Standard Terms', 'Expandable Terms', 'Highlighted Terms', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'consent-block': { cat: 'Legal', title: 'Consent Block', desc: 'Agreement checkbox.', icon: '☑️', families: ['Standard Consent', 'Multi Consent', 'GDPR Consent', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'disclaimer': { cat: 'Legal', title: 'Disclaimer', desc: 'Legal notice.', icon: '⚠️', families: ['Standard Disclaimer', 'Inline Disclaimer', 'Footer Disclaimer', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'e-signature': { cat: 'Legal', title: 'E Signature', desc: 'Digital signing.', icon: '✍️', families: ['Draw Signature', 'Type Signature', 'Upload Signature', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'doc-attachment': { cat: 'Legal', title: 'Doc Attachment', desc: 'File display.', icon: '📎', families: ['Standard Attachment', 'Preview Attachment', 'Multi File', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'audit-log': { cat: 'Legal', title: 'Audit Log', desc: 'Activity trail.', icon: '📋', families: ['Standard Log', 'Filtered Log', 'Export Log', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'qr-code': { cat: 'Legal', title: 'QR Code', desc: 'Scannable code.', icon: '📱', families: ['Standard QR', 'Styled QR', 'Dynamic QR', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },

  // Social Proof
  'testimonial': { cat: 'Social Proof', title: 'Testimonial', desc: 'User testimonials.', icon: '💬', families: ['Standard Quote', 'Card Quote', 'Carousel', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'rating-summary': { cat: 'Social Proof', title: 'Rating Summary', desc: 'Aggregate ratings.', icon: '⭐', families: ['Standard Summary', 'With Breakdown', 'Compact', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'review-card': { cat: 'Social Proof', title: 'Review Card', desc: 'User review cards.', icon: '📝', families: ['Standard Review', 'With Photos', 'Verified Review', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'trust-badge': { cat: 'Social Proof', title: 'Trust Badge', desc: 'Trust and security badges.', icon: '🛡️', families: ['Standard Badge', 'Security Badge', 'Certification', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },

  // Media
  'image-carousel': { cat: 'Media', title: 'Image Carousel', desc: 'Image slider component.', icon: '🎠', families: ['Standard Carousel', 'Fullwidth', 'Thumbnail Nav', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'video-player': { cat: 'Media', title: 'Video Player', desc: 'Video playback component.', icon: '🎬', families: ['Standard Player', 'Mini Player', 'Inline Player', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'gallery-grid': { cat: 'Media', title: 'Gallery Grid', desc: 'Image grid layout.', icon: '🖼️', families: ['Standard Grid', 'Masonry Grid', 'With Lightbox', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },

  // Settings
  'settings-row': { cat: 'Settings', title: 'Settings Row', desc: 'Setting toggle rows.', icon: '⚙️', families: ['Standard Row', 'With Description', 'With Badge', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'notif-pref': { cat: 'Settings', title: 'Notification Pref', desc: 'Notification preferences.', icon: '🔔', families: ['Standard Pref', 'Grouped Pref', 'Channel Pref', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'privacy-setting': { cat: 'Settings', title: 'Privacy Setting', desc: 'Privacy controls.', icon: '🔐', families: ['Standard Privacy', 'With Explanation', 'Data Controls', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'account-manage': { cat: 'Settings', title: 'Account Manage', desc: 'Account management.', icon: '👤', families: ['Standard Account', 'With Danger Zone', 'Profile Edit', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'theme-picker': { cat: 'Settings', title: 'Theme Picker', desc: 'Theme selection.', icon: '🎨', families: ['Standard Theme', 'Color Scheme', 'Custom Theme', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'language-select': { cat: 'Settings', title: 'Language Select', desc: 'Language selection.', icon: '🌍', families: ['Standard Language', 'With Flags', 'Search Language', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },

  // Sticky
  'sticky-bar': { cat: 'Sticky', title: 'Sticky Action Bar', desc: 'Sticky bottom/top bars.', icon: '📌', families: ['Bottom Action', 'Top Alert', 'Floating Action', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'floating-banner': { cat: 'Sticky', title: 'Floating Banner', desc: 'Floating promotional banners.', icon: '🎯', families: ['Standard Float', 'Corner Float', 'Slide In', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'cookie-bar': { cat: 'Sticky', title: 'Cookie Consent', desc: 'Cookie consent bar.', icon: '🍪', families: ['Standard Cookie', 'With Preferences', 'Minimal', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'push-notif': { cat: 'Sticky', title: 'Push Notification', desc: 'Push notification display.', icon: '📲', families: ['Standard Push', 'Rich Push', 'Action Push', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },

  // Transitions
  'page-transition': { cat: 'Transitions', title: 'Page Transitions', desc: 'Page navigation animations.', icon: '🔄', families: ['Fade Transition', 'Slide Transition', 'Scale Transition', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'micro-animation': { cat: 'Transitions', title: 'Micro Animations', desc: 'Small interaction animations.', icon: '✨', families: ['Hover Effects', 'Loading Animations', 'State Changes', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'shared-element': { cat: 'Transitions', title: 'Shared Element', desc: 'Shared element transitions.', icon: '🔗', families: ['Card to Detail', 'List to Detail', 'Tab Transition', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },

  // Patterns
  'search-filter-bar': { cat: 'Patterns', title: 'Search + Filter', desc: 'Combined search and filter.', icon: '🔍', families: ['Standard Bar', 'With Chips', 'Advanced Filters', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'bulk-selection': { cat: 'Patterns', title: 'Bulk Selection', desc: 'Multi-item selection.', icon: '☑️', families: ['Standard Bulk', 'With Toolbar', 'Floating Actions', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'drag-drop': { cat: 'Patterns', title: 'Drag & Drop', desc: 'Drag and drop interfaces.', icon: '👆', families: ['List Reorder', 'Grid Reorder', 'Kanban', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'infinite-scroll': { cat: 'Patterns', title: 'Infinite Scroll', desc: 'Infinite scrolling lists.', icon: '📜', families: ['Standard Infinite', 'With Loader', 'Virtual Scroll', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'pull-refresh': { cat: 'Patterns', title: 'Pull to Refresh', desc: 'Pull-to-refresh gesture.', icon: '🔄', families: ['Standard Pull', 'Custom Animation', 'With Message', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'share-sheet': { cat: 'Patterns', title: 'Share Sheet', desc: 'Share action sheet.', icon: '📤', families: ['Standard Share', 'Social Share', 'Copy Link', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },

  // Product Patterns
  'rent-reporting': { cat: 'Product', title: 'Rent Reporting', desc: 'Credit reporting components.', icon: '📊', families: ['Standard Report', 'Score Impact', 'History View', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'payment-history': { cat: 'Product', title: 'Payment History', desc: 'Transaction log.', icon: '💰', families: ['Standard History', 'Grouped History', 'With Filters', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'tenant-invite': { cat: 'Product', title: 'Tenant Invite', desc: 'Invitation flow.', icon: '📧', families: ['Standard Invite', 'Bulk Invite', 'With Preview', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'add-property': { cat: 'Product', title: 'Add Property', desc: 'Property creation flow.', icon: '🏠', families: ['Standard Add', 'Wizard Add', 'Quick Add', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'tenant-screening': { cat: 'Product', title: 'Screening', desc: 'Background check.', icon: '🔍', families: ['Standard Screen', 'Detailed Screen', 'Quick Screen', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'verified-report': { cat: 'Product', title: 'Verified Report', desc: 'Verification card.', icon: '✅', families: ['Standard Verified', 'With Score', 'Download Report', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'investor-dash': { cat: 'Product', title: 'Investor Dash', desc: 'Investment view.', icon: '📈', families: ['Standard Dash', 'With Charts', 'Portfolio View', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'candidate-search': { cat: 'Product', title: 'Candidate Search', desc: 'Tenant search.', icon: '👥', families: ['Standard Search', 'With Filters', 'Map Search', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'sign-lease': { cat: 'Product', title: 'Sign & Lease', desc: 'Digital lease signing.', icon: '✍️', families: ['Standard Signing', 'Multi Party', 'With Preview', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'membership-life': { cat: 'Product', title: 'Membership Life', desc: 'Membership lifecycle.', icon: '💳', families: ['Active Member', 'Upgrade Path', 'Renewal', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'rewards-redeem': { cat: 'Product', title: 'Rewards Redeem', desc: 'Reward redemption.', icon: '🎁', families: ['Standard Redeem', 'Catalog View', 'Checkout', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'rm-pattern': { cat: 'Product', title: 'RM Pattern', desc: 'Relationship management.', icon: '🤝', families: ['Standard RM', 'Communication', 'Schedule', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'report-filter': { cat: 'Product', title: 'Report Filter', desc: 'Report filtering.', icon: '🔻', families: ['Standard Filter', 'Date Range', 'Multi Dimension', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'profile-edit': { cat: 'Product', title: 'Profile Edit', desc: 'Profile editing.', icon: '👤', families: ['Standard Edit', 'Photo Upload', 'Multi Section', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'notif-center': { cat: 'Product', title: 'Notification Center', desc: 'Notification management.', icon: '🔔', families: ['Standard Center', 'Grouped', 'With Actions', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'kyc-flow': { cat: 'Product', title: 'KYC Flow', desc: 'Identity verification.', icon: '🪪', families: ['Standard KYC', 'Document Upload', 'Video KYC', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'subscription': { cat: 'Product', title: 'Subscription', desc: 'Plan management.', icon: '🔁', families: ['Standard Plan', 'Comparison', 'Billing History', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },

  // Page Templates
  'page-list': { cat: 'Templates', title: 'List Page', desc: 'Data listing template.', icon: '📋', families: ['Standard List', 'With Sidebar', 'Split View', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'page-detail': { cat: 'Templates', title: 'Detail Page', desc: 'Single item view template.', icon: '📄', families: ['Standard Detail', 'Tabbed Detail', 'With Sidebar', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'page-dashboard': { cat: 'Templates', title: 'Dashboard Page', desc: 'Overview layout template.', icon: '📊', families: ['Standard Dashboard', 'KPI Focus', 'Activity Focus', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'page-form': { cat: 'Templates', title: 'Form Page', desc: 'Data entry template.', icon: '📝', families: ['Standard Form', 'Wizard Form', 'Side Panel Form', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'page-modal-flow': { cat: 'Templates', title: 'Modal Flow', desc: 'Multi-step modal template.', icon: '🪟', families: ['Standard Flow', 'With Preview', 'Split Modal', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'page-settings': { cat: 'Templates', title: 'Settings Page', desc: 'Preferences template.', icon: '⚙️', families: ['Standard Settings', 'Tabbed Settings', 'Grouped', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'page-onboarding': { cat: 'Templates', title: 'Onboarding Page', desc: 'Welcome flow template.', icon: '🎉', families: ['Standard Onboarding', 'Carousel', 'Progressive', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'page-error': { cat: 'Templates', title: 'Error Page', desc: '404/500 template.', icon: '❌', families: ['Standard 404', '500 Server Error', 'Maintenance', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'page-auth': { cat: 'Templates', title: 'Auth Page', desc: 'Login/signup template.', icon: '🔑', families: ['Standard Auth', 'Split Screen', 'Minimal', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'page-empty': { cat: 'Templates', title: 'Empty Page', desc: 'No content template.', icon: '📭', families: ['Standard Empty', 'With Actions', 'Illustrated', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'page-success': { cat: 'Templates', title: 'Success Page', desc: 'Completion template.', icon: '✅', families: ['Standard Success', 'With Confetti', 'Next Steps', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },

  // Backgrounds
  'solid-bg': { cat: 'Backgrounds', title: 'Solid Colors', desc: 'Solid background colors.', icon: '🎨', families: ['Primary Fill', 'Surface Fill', 'Muted Fill', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'mesh-bg': { cat: 'Backgrounds', title: 'Mesh Gradients', desc: 'Smooth mesh gradient backgrounds.', icon: '🌈', families: ['Brand Mesh', 'Subtle Mesh', 'Dark Mesh', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'pattern-bg': { cat: 'Backgrounds', title: 'Patterns', desc: 'Subtle repeating patterns.', icon: '🏁', families: ['Dot Grid', 'Line Grid', 'Noise Texture', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
  'animated-bg': { cat: 'Backgrounds', title: 'Animated', desc: 'Subtly moving backgrounds.', icon: '✨', families: ['Floating Orbs', 'Wave Motion', 'Aurora', 'Compact Variant', 'Expanded Variant', 'Ghost Variant'] },
};

function getMockHTML(cat, fam, icon, slug) {
  const glassStyle = "background: #fff; border: 1px solid #E2E8F0; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.05); padding: 16px;";

  // =====================================================================
  // HIGH-END VARIANT GENERATORS (Premium Glass / Neumorphic / CRED Dark)
  // =====================================================================
  if (fam === 'Premium Glass') {
    return `
      <div style="position:relative; width: 100%; max-width: 320px; height: 180px; display:flex; align-items:center; justify-content:center; border-radius: 24px; overflow:hidden;">
        <div style="position:absolute; top:-30px; left:-30px; width:120px; height:120px; background:#F43F5E; border-radius:50%; filter:blur(50px); opacity:0.5;"></div>
        <div style="position:absolute; bottom:-30px; right:-30px; width:140px; height:140px; background:#3B82F6; border-radius:50%; filter:blur(50px); opacity:0.5;"></div>
        <div style="position:absolute; top:40%; left:60%; width:80px; height:80px; background:#A855F7; border-radius:50%; filter:blur(40px); opacity:0.4;"></div>
        <div style="width:100%; height:100%; background: rgba(255, 255, 255, 0.35); backdrop-filter: blur(24px); -webkit-backdrop-filter: blur(24px); border: 1px solid rgba(255, 255, 255, 0.5); box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.12); border-radius: 24px; padding: 28px; display:flex; flex-direction:column; justify-content:space-between; position:relative; z-index:2;">
          <div style="display:flex; justify-content:space-between; align-items:center;">
            <div style="font-size:24px; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.1));">${icon}</div>
            <div style="background:rgba(255,255,255,0.7); padding:5px 14px; border-radius:99px; font-size:10px; font-weight:800; color:#334155; letter-spacing:0.08em; backdrop-filter:blur(10px);">GLASS</div>
          </div>
          <div>
            <div style="font-size:18px; font-weight:800; color:#0F172A; margin-bottom:4px; letter-spacing:-0.02em;">Premium Glass</div>
            <div style="font-size:13px; color:#475569; font-weight:500;">Apple VisionOS frosted aesthetic</div>
          </div>
        </div>
      </div>
    `;
  }

  if (fam === 'Neumorphic') {
    return `
      <div style="width: 100%; max-width: 320px; height: 180px; background: #E0E5EC; border-radius: 24px; padding: 28px; display:flex; flex-direction:column; justify-content:space-between; box-shadow: 12px 12px 24px #b8bcc2, -12px -12px 24px #ffffff;">
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <div style="width: 52px; height: 52px; border-radius: 16px; background: #E0E5EC; box-shadow: 6px 6px 12px #b8bcc2, -6px -6px 12px #ffffff; display:flex; align-items:center; justify-content:center; font-size:22px;">${icon}</div>
          <div style="font-size:10px; font-weight:800; color:#9BA7B9; letter-spacing:0.12em; text-transform:uppercase;">NEUMO</div>
        </div>
        <div>
          <div style="font-size:18px; font-weight:800; color:#4A5568; margin-bottom:4px; text-shadow: 1px 1px 0 #fff; letter-spacing:-0.02em;">Soft UI Extrusion</div>
          <div style="font-size:13px; color:#718096; font-weight:500;">Tactile continuous surface material</div>
        </div>
      </div>
    `;
  }

  if (fam === 'CRED Style Dark') {
    return `
      <div style="width: 100%; max-width: 320px; height: 180px; background: linear-gradient(145deg, #1A1A1D, #0B0B0C); border-radius: 24px; padding: 28px; display:flex; flex-direction:column; justify-content:space-between; box-shadow: 0 20px 60px -10px rgba(0,0,0,0.8); border: 1px solid #2A2A2D; position:relative; overflow:hidden;">
        <div style="position:absolute; top:0; left:0; right:0; height:1px; background:linear-gradient(90deg, transparent 10%, #D4AF37 50%, transparent 90%);"></div>
        <div style="position:absolute; bottom:0; left:0; right:0; height:1px; background:linear-gradient(90deg, transparent 10%, rgba(212,175,55,0.3) 50%, transparent 90%);"></div>
        <div style="display:flex; justify-content:space-between; align-items:center; position:relative; z-index:2;">
          <div style="font-size:28px; filter: drop-shadow(0 0 12px rgba(212,175,55,0.4));">${icon}</div>
          <div style="border:1px solid #D4AF37; color:#D4AF37; padding:5px 12px; border-radius:4px; font-size:10px; font-weight:800; letter-spacing:0.12em; background:rgba(212,175,55,0.05);">PRESTIGE</div>
        </div>
        <div style="position:relative; z-index:2;">
          <div style="font-size:18px; font-weight:700; color:#F3F4F6; margin-bottom:4px; font-family:Georgia,serif; letter-spacing:0.02em;">Bespoke Design</div>
          <div style="font-size:13px; color:#6B7280; font-weight:400;">High-contrast metallic aesthetic</div>
        </div>
      </div>
    `;
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
      return `
        <div style="display:flex; flex-direction:column; gap:12px; width:100%; max-width:300px;">
          ${colors.map(([c,n]) => `
            <div style="display:flex; align-items:center; gap:16px;">
              <div style="width:48px;height:48px;border-radius:12px;background:${c};box-shadow:0 4px 12px ${c}33; border: 1px solid rgba(0,0,0,0.05);"></div>
              <div>
                <div style="font-size:14px;font-weight:700;color:#0F172A;">${n}</div>
                <div style="font-size:12px;color:#94A3B8;font-family:monospace;">${c}</div>
              </div>
            </div>
          `).join('')}
        </div>
      `;
    }
    if (fam.includes('Type') || fam.includes('Font') || fam.includes('Text')) {
      const isWeight = fam.includes('Weight');
      if (isWeight) {
        return `<div style="text-align:left;width:100%;max-width:300px;">
          <div style="font-size:14px;font-weight:300;color:#64748B;margin-bottom:8px;">Light 300</div>
          <div style="font-size:16px;font-weight:400;color:#475569;margin-bottom:8px;">Regular 400</div>
          <div style="font-size:18px;font-weight:500;color:#334155;margin-bottom:8px;">Medium 500</div>
          <div style="font-size:20px;font-weight:600;color:#1E293B;margin-bottom:8px;">SemiBold 600</div>
          <div style="font-size:24px;font-weight:700;color:#0F172A;margin-bottom:8px;">Bold 700</div>
          <div style="font-size:28px;font-weight:800;color:#0F172A;">ExtraBold 800</div>
        </div>`;
      }
      return `<div style="text-align:left;width:100%;max-width:300px;">
        <div style="font-size:40px;font-weight:800;color:#0F172A;letter-spacing:-0.04em;line-height:1;">Aa</div>
        <div style="font-size:12px;font-weight:600;color:#94A3B8;margin:12px 0 16px;letter-spacing:0.1em;text-transform:uppercase;">Inter · Rentenpe Type System</div>
        <div style="font-size:28px;font-weight:700;color:#0F172A;margin-bottom:4px;">Display</div>
        <div style="font-size:20px;font-weight:600;color:#334155;margin-bottom:4px;">Heading</div>
        <div style="font-size:16px;font-weight:400;color:#475569;margin-bottom:4px;">Body text for readable content</div>
        <div style="font-size:12px;font-weight:500;color:#94A3B8;">Caption · Metadata</div>
      </div>`;
    }
    if (fam.includes('Spacing') || fam.includes('Grid') || fam.includes('Breakpoint')) {
      return `<div style="width:100%;max-width:300px;">
        <div style="display:flex;align-items:end;gap:4px;margin-bottom:16px;">
          ${[4,8,12,16,24,32,48].map(s => `<div style="width:${s}px;height:${s}px;background:#DBEAFE;border:1px solid #93C5FD;border-radius:4px;"></div>`).join('')}
        </div>
        <div style="font-size:12px;color:#64748B;font-family:monospace;">4px · 8px · 12px · 16px · 24px · 32px · 48px</div>
      </div>`;
    }
    if (fam.includes('Divider')) {
      if (fam.includes('Dashed')) return `<div style="width:100%;max-width:300px;"><div style="border-bottom:2px dashed #CBD5E1;width:100%;"></div></div>`;
      if (fam.includes('Label')) return `<div style="width:100%;max-width:300px;display:flex;align-items:center;color:#94A3B8;font-size:12px;font-weight:600;letter-spacing:0.05em;"><div style="flex:1;border-bottom:1px solid #E2E8F0;"></div><span style="margin:0 16px;">OR</span><div style="flex:1;border-bottom:1px solid #E2E8F0;"></div></div>`;
      return `<div style="width:100%;max-width:300px;"><div style="border-bottom:2px solid #CBD5E1;width:100%;"></div></div>`;
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
        grid += `<div style="display:flex;flex-direction:column;align-items:center;gap:6px;padding:12px;border:1px solid #E2E8F0;border-radius:10px;transition:all 0.2s;" onmouseover="this.style.borderColor='${color}';this.style.boxShadow='0 4px 12px ${color}22'" onmouseout="this.style.borderColor='#E2E8F0';this.style.boxShadow='none'">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">${paths[i % paths.length]}</svg>
          <span style="font-size:9px;color:#94A3B8;font-family:monospace;">ic_${String(i+1).padStart(2,'0')}</span>
        </div>`;
      }
      return `<div style="width:100%;"><div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(72px,1fr));gap:8px;">${grid}</div></div>`;
    }
    // Container fallback
    if (fam.includes('Card') || fam.includes('Container') || fam.includes('Standard') || fam.includes('Glass') || fam.includes('Elevated')) {
      const isGlass = fam.includes('Glass');
      const isElevated = fam.includes('Elevated');
      const bg = isGlass ? 'background:rgba(255,255,255,0.6);backdrop-filter:blur(20px);border:1px solid rgba(255,255,255,0.4);' : (isElevated ? 'background:#fff;box-shadow:0 20px 40px -10px rgba(0,0,0,0.12);border:1px solid #F1F5F9;' : 'background:#fff;border:1px solid #E2E8F0;');
      return `<div style="width:100%;max-width:280px;border-radius:16px;${bg}padding:24px;">
        <div style="width:48px;height:48px;background:#F1F5F9;border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:20px;margin-bottom:16px;">${icon}</div>
        <div style="font-size:16px;font-weight:700;color:#0F172A;margin-bottom:4px;">${fam}</div>
        <div style="font-size:13px;color:#64748B;">Structural container primitive for layout composition.</div>
      </div>`;
    }
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
      return `<div style="width:100%;max-width:320px;background:#0A0A0F;border-radius:32px;padding:48px 24px 32px;color:#fff;text-align:center;box-shadow:0 20px 40px rgba(0,0,0,0.4);border:1px solid #222;">
        <div style="width:72px;height:56px;margin:0 auto 32px;background:linear-gradient(135deg,#F97316,#EA580C);border-radius:14px;display:flex;align-items:center;justify-content:center;box-shadow:0 12px 24px rgba(249,115,22,0.35);">
          <svg width="28" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
        </div>
        <div style="font-size:22px;font-weight:700;margin-bottom:8px;">Enter ${isAlpha ? 'alphanumeric' : count+'-digit'} code</div>
        <div style="font-size:13px;color:#94A3B8;margin-bottom:32px;">Sent to your registered device</div>
        <div style="display:flex;gap:8px;justify-content:center;margin-bottom:32px;">
          ${chars.map((c,i) => `<div style="width:44px;height:52px;background:rgba(255,255,255,0.03);border:1px solid ${c?'rgba(255,255,255,0.1)':'#F97316'};border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:20px;font-weight:600;color:${c?'#fff':'#F97316'};${c?'':'box-shadow:0 0 16px rgba(249,115,22,0.3);'}">${c}</div>`).join('')}
        </div>
        <div style="display:inline-flex;align-items:center;gap:8px;background:rgba(255,255,255,0.04);padding:10px 20px;border-radius:99px;font-size:12px;color:#64748B;">↻ Resend code</div>
      </div>`;
    }

    // Search Input
    if (fam.includes('Search')) {
      if (fam.includes('Expandable')) return `<div style="width:100%;max-width:300px;display:flex;align-items:center;gap:12px;"><div style="width:44px;height:44px;background:#F1F5F9;border-radius:50%;display:flex;align-items:center;justify-content:center;cursor:pointer;">🔍</div><div style="flex:1;height:44px;background:#F1F5F9;border-radius:22px;display:flex;align-items:center;padding:0 16px;font-size:14px;color:#94A3B8;border:1px solid #E2E8F0;">Search...</div></div>`;
      if (fam.includes('Filter')) return `<div style="width:100%;max-width:300px;"><div style="display:flex;gap:8px;margin-bottom:12px;"><div style="flex:1;height:44px;background:#F8FAFC;border:1px solid #E2E8F0;border-radius:12px;display:flex;align-items:center;padding:0 14px;gap:8px;font-size:14px;color:#94A3B8;"><span>🔍</span>Search</div><div style="height:44px;width:44px;background:#0F172A;border-radius:12px;display:flex;align-items:center;justify-content:center;color:#fff;font-size:16px;cursor:pointer;">⚙</div></div><div style="display:flex;gap:8px;"><div style="padding:6px 14px;background:#EEF2FF;color:#4F46E5;border-radius:99px;font-size:12px;font-weight:600;">All</div><div style="padding:6px 14px;background:#F1F5F9;color:#64748B;border-radius:99px;font-size:12px;">Active</div><div style="padding:6px 14px;background:#F1F5F9;color:#64748B;border-radius:99px;font-size:12px;">Pending</div></div></div>`;
      return `<div style="width:100%;max-width:300px;height:48px;background:#F8FAFC;border:1.5px solid #E2E8F0;border-radius:14px;display:flex;align-items:center;padding:0 16px;gap:12px;transition:border-color 0.2s;" onmouseover="this.style.borderColor='#3B82F6'" onmouseout="this.style.borderColor='#E2E8F0'"><span style="color:#94A3B8;">🔍</span><span style="font-size:14px;color:#94A3B8;">Search components...</span></div>`;
    }

    // Email
    if (fam.includes('Email')) {
      if (fam.includes('Domain')) return `<div style="width:100%;max-width:300px;"><label style="font-size:13px;font-weight:600;color:#334155;display:block;margin-bottom:6px;">Email</label><div style="display:flex;border:1.5px solid #E2E8F0;border-radius:12px;overflow:hidden;"><input type="text" value="user" style="flex:1;padding:12px 14px;border:none;font-size:14px;outline:none;background:#F8FAFC;"/><div style="background:#F1F5F9;padding:12px 14px;font-size:14px;color:#64748B;border-left:1px solid #E2E8F0;">@rentenpe.com</div></div></div>`;
      if (fam.includes('Multi')) return `<div style="width:100%;max-width:300px;"><label style="font-size:13px;font-weight:600;color:#334155;display:block;margin-bottom:6px;">Recipients</label><div style="border:1.5px solid #E2E8F0;border-radius:12px;padding:8px;background:#F8FAFC;display:flex;flex-wrap:wrap;gap:6px;"><div style="background:#EEF2FF;color:#4F46E5;padding:4px 10px;border-radius:6px;font-size:12px;font-weight:600;display:flex;align-items:center;gap:4px;">josh@mail.com <span style="cursor:pointer;">✕</span></div><div style="background:#EEF2FF;color:#4F46E5;padding:4px 10px;border-radius:6px;font-size:12px;font-weight:600;display:flex;align-items:center;gap:4px;">admin@co.in <span style="cursor:pointer;">✕</span></div></div></div>`;
      return `<div style="width:100%;max-width:300px;"><label style="font-size:13px;font-weight:600;color:#334155;display:block;margin-bottom:6px;">Email Address</label><div style="border:1.5px solid #E2E8F0;border-radius:12px;padding:12px 14px;background:#F8FAFC;display:flex;align-items:center;gap:10px;"><span style="color:#94A3B8;">📧</span><span style="font-size:14px;color:#0F172A;">joshua@rentenpe.com</span></div><div style="font-size:11px;color:#10B981;margin-top:6px;font-weight:500;">✓ Valid email format</div></div>`;
    }

    // Phone
    if (fam.includes('Phone')) {
      if (fam.includes('Country')) return `<div style="width:100%;max-width:300px;"><label style="font-size:13px;font-weight:600;color:#334155;display:block;margin-bottom:6px;">Phone Number</label><div style="display:flex;gap:8px;"><div style="background:#F8FAFC;border:1.5px solid #E2E8F0;border-radius:12px;padding:12px;display:flex;align-items:center;gap:6px;cursor:pointer;"><span>🇮🇳</span><span style="font-size:14px;font-weight:600;">+91</span><span style="font-size:10px;">▼</span></div><div style="flex:1;background:#F8FAFC;border:1.5px solid #E2E8F0;border-radius:12px;padding:12px 14px;font-size:14px;color:#0F172A;">98765 43210</div></div></div>`;
      if (fam.includes('Split')) return `<div style="width:100%;max-width:300px;"><label style="font-size:13px;font-weight:600;color:#334155;display:block;margin-bottom:6px;">Phone Number</label><div style="display:flex;gap:6px;"><div style="width:60px;background:#F8FAFC;border:1.5px solid #E2E8F0;border-radius:12px;padding:12px;text-align:center;font-size:14px;font-weight:600;">+91</div><div style="width:48px;background:#F8FAFC;border:1.5px solid #E2E8F0;border-radius:12px;padding:12px;text-align:center;font-size:14px;">987</div><div style="width:48px;background:#F8FAFC;border:1.5px solid #E2E8F0;border-radius:12px;padding:12px;text-align:center;font-size:14px;">654</div><div style="flex:1;background:#F8FAFC;border:1.5px solid #E2E8F0;border-radius:12px;padding:12px;text-align:center;font-size:14px;">3210</div></div></div>`;
      return `<div style="width:100%;max-width:300px;"><label style="font-size:13px;font-weight:600;color:#334155;display:block;margin-bottom:6px;">Phone Number</label><div style="border:1.5px solid #E2E8F0;border-radius:12px;padding:12px 14px;background:#F8FAFC;display:flex;align-items:center;gap:10px;"><span style="font-size:16px;">📱</span><span style="font-size:14px;color:#0F172A;">+91 98765 43210</span></div></div>`;
    }

    // Password
    if (fam.includes('Password')) {
      if (fam.includes('Strength')) return `<div style="width:100%;max-width:300px;"><label style="font-size:13px;font-weight:600;color:#334155;display:block;margin-bottom:6px;">Password</label><div style="border:1.5px solid #E2E8F0;border-radius:12px;padding:12px 14px;background:#F8FAFC;display:flex;align-items:center;justify-content:space-between;"><div style="display:flex;align-items:center;gap:10px;"><span>🔒</span><span style="font-size:14px;color:#0F172A;letter-spacing:2px;">••••••••</span></div><span style="cursor:pointer;color:#64748B;">👁</span></div><div style="display:flex;gap:4px;margin-top:8px;"><div style="flex:1;height:4px;background:#10B981;border-radius:99px;"></div><div style="flex:1;height:4px;background:#10B981;border-radius:99px;"></div><div style="flex:1;height:4px;background:#10B981;border-radius:99px;"></div><div style="flex:1;height:4px;background:#E2E8F0;border-radius:99px;"></div></div><div style="font-size:11px;color:#10B981;margin-top:4px;">Good strength</div></div>`;
      if (fam.includes('Requirement')) return `<div style="width:100%;max-width:300px;"><label style="font-size:13px;font-weight:600;color:#334155;display:block;margin-bottom:6px;">Create Password</label><div style="border:1.5px solid #3B82F6;border-radius:12px;padding:12px 14px;background:#F8FAFC;display:flex;align-items:center;gap:10px;box-shadow:0 0 0 3px rgba(59,130,246,0.1);"><span>🔒</span><span style="font-size:14px;color:#0F172A;letter-spacing:2px;">••••••</span></div><div style="margin-top:10px;display:flex;flex-direction:column;gap:4px;font-size:12px;"><div style="color:#10B981;">✓ 8+ characters</div><div style="color:#10B981;">✓ One uppercase</div><div style="color:#EF4444;">✗ One number</div><div style="color:#94A3B8;">○ One special char</div></div></div>`;
      return `<div style="width:100%;max-width:300px;"><label style="font-size:13px;font-weight:600;color:#334155;display:block;margin-bottom:6px;">Password</label><div style="border:1.5px solid #E2E8F0;border-radius:12px;padding:12px 14px;background:#F8FAFC;display:flex;align-items:center;justify-content:space-between;"><div style="display:flex;align-items:center;gap:10px;"><span>🔒</span><span style="font-size:14px;color:#0F172A;letter-spacing:2px;">••••••••</span></div><span style="cursor:pointer;color:#94A3B8;">👁</span></div></div>`;
    }

    // Currency — PayPal-inspired dark balance card
    if (fam.includes('Currency') || fam.includes('Amount') || fam.includes('Multi Currency')) {
      if (fam.includes('Multi')) return `<div style="width:100%;max-width:300px;background:linear-gradient(145deg,#1A1A2E,#16213E);border-radius:20px;padding:24px;color:#fff;box-shadow:0 20px 40px rgba(0,0,0,0.3);">
        <div style="font-size:12px;color:#94A3B8;margin-bottom:4px;">Available Balance</div>
        <div style="font-size:32px;font-weight:800;margin-bottom:16px;letter-spacing:-0.02em;">₹1,590.00 <span style="font-size:14px;color:#64748B;font-weight:400;">INR</span></div>
        <div style="display:flex;gap:8px;"><div style="flex:1;background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.06);padding:10px;border-radius:12px;text-align:center;font-size:12px;font-weight:600;"><span style="display:block;font-size:16px;margin-bottom:2px;">↗</span>Send</div><div style="flex:1;background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.06);padding:10px;border-radius:12px;text-align:center;font-size:12px;font-weight:600;"><span style="display:block;font-size:16px;margin-bottom:2px;">↙</span>Receive</div><div style="flex:1;background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.06);padding:10px;border-radius:12px;text-align:center;font-size:12px;font-weight:600;"><span style="display:block;font-size:16px;margin-bottom:2px;">+</span>Add</div></div>
      </div>`;
      return `<div style="width:100%;max-width:300px;"><label style="font-size:13px;font-weight:600;color:#334155;display:block;margin-bottom:6px;">Amount</label><div style="border:1.5px solid #E2E8F0;border-radius:12px;padding:12px 14px;background:#F8FAFC;display:flex;align-items:center;gap:4px;"><span style="font-size:18px;font-weight:700;color:#0F172A;">₹</span><span style="font-size:24px;font-weight:700;color:#0F172A;">5,000</span><span style="font-size:14px;color:#94A3B8;margin-left:auto;">.00</span></div></div>`;
    }

    // Generic input fallback
    return `<div style="width:100%;max-width:300px;"><label style="font-size:13px;font-weight:600;color:#334155;display:block;margin-bottom:6px;">${fam}</label><div style="border:1.5px solid #E2E8F0;border-radius:12px;padding:12px 14px;background:#F8FAFC;display:flex;align-items:center;gap:10px;"><span style="color:#94A3B8;">${icon}</span><span style="font-size:14px;color:#94A3B8;">Enter value...</span></div></div>`;
  }

  // =====================================================================
  // ACTIONS — Links, FABs
  // =====================================================================
  if (cat === 'Actions') {
    if (fam.includes('Link')) {
      if (fam.includes('Destructive')) return `<div style="padding:24px;"><a href="#" style="color:#EF4444;font-weight:600;font-size:15px;text-decoration:none;display:inline-flex;align-items:center;gap:6px;">⚠ Delete Account</a></div>`;
      if (fam.includes('Action')) return `<div style="padding:24px;"><a href="#" style="color:#2563EB;font-weight:600;font-size:15px;text-decoration:none;display:inline-flex;align-items:center;gap:6px;">View Details →</a></div>`;
      return `<div style="padding:24px;"><a href="#" style="color:#0F172A;font-weight:500;font-size:15px;text-decoration:underline;text-underline-offset:3px;">Read Documentation</a></div>`;
    }
    if (fam.includes('FAB')) {
      if (fam.includes('Extended')) return `<div style="display:inline-flex;align-items:center;gap:10px;background:#0F172A;color:#fff;padding:14px 28px;border-radius:99px;font-weight:600;font-size:15px;box-shadow:0 12px 24px rgba(0,0,0,0.2);cursor:pointer;">+ New Payment</div>`;
      if (fam.includes('Mini')) return `<div style="width:44px;height:44px;background:#3B82F6;color:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:20px;box-shadow:0 8px 20px rgba(59,130,246,0.3);cursor:pointer;">+</div>`;
      return `<div style="width:56px;height:56px;background:#0F172A;color:#fff;border-radius:16px;display:flex;align-items:center;justify-content:center;font-size:24px;box-shadow:0 12px 24px rgba(0,0,0,0.2);cursor:pointer;">+</div>`;
    }
  }

  // =====================================================================
  // SELECTION
  // =====================================================================
  if (cat === 'Selection') {
    if (fam.includes('Checkbox')) {
      if (fam.includes('Group')) return `<div style="width:100%;max-width:280px;display:flex;flex-direction:column;gap:12px;"><div style="display:flex;align-items:center;gap:12px;padding:12px 16px;background:#F8FAFC;border-radius:12px;border:1px solid #E2E8F0;"><div style="width:20px;height:20px;background:#3B82F6;border-radius:4px;display:flex;align-items:center;justify-content:center;color:#fff;font-size:12px;">✓</div><span style="font-size:14px;font-weight:500;">Email notifications</span></div><div style="display:flex;align-items:center;gap:12px;padding:12px 16px;background:#F8FAFC;border-radius:12px;border:1px solid #E2E8F0;"><div style="width:20px;height:20px;background:#3B82F6;border-radius:4px;display:flex;align-items:center;justify-content:center;color:#fff;font-size:12px;">✓</div><span style="font-size:14px;font-weight:500;">SMS alerts</span></div><div style="display:flex;align-items:center;gap:12px;padding:12px 16px;background:#F8FAFC;border-radius:12px;border:1px solid #E2E8F0;"><div style="width:20px;height:20px;border:2px solid #CBD5E1;border-radius:4px;"></div><span style="font-size:14px;font-weight:500;color:#94A3B8;">Push notifications</span></div></div>`;
      if (fam.includes('Indeterminate')) return `<div style="display:flex;align-items:center;gap:12px;padding:14px 18px;background:#FFF;border:1.5px solid #E2E8F0;border-radius:12px;"><div style="width:20px;height:20px;background:#3B82F6;border-radius:4px;display:flex;align-items:center;justify-content:center;color:#fff;font-size:14px;font-weight:700;">−</div><span style="font-size:14px;font-weight:500;">Select all (2 of 5)</span></div>`;
      return `<div style="display:flex;align-items:center;gap:12px;padding:14px 18px;background:#FFF;border:1.5px solid #E2E8F0;border-radius:12px;"><div style="width:20px;height:20px;background:#3B82F6;border-radius:4px;display:flex;align-items:center;justify-content:center;color:#fff;font-size:12px;">✓</div><span style="font-size:14px;font-weight:500;">I agree to terms</span></div>`;
    }
    if (fam.includes('Radio')) {
      if (fam.includes('Card')) return `<div style="width:100%;max-width:280px;display:flex;flex-direction:column;gap:10px;"><div style="padding:16px;background:#EEF2FF;border:2px solid #4F46E5;border-radius:14px;display:flex;align-items:center;gap:12px;"><div style="width:20px;height:20px;border-radius:50%;border:2px solid #4F46E5;display:flex;align-items:center;justify-content:center;"><div style="width:10px;height:10px;background:#4F46E5;border-radius:50%;"></div></div><div><div style="font-size:14px;font-weight:600;color:#0F172A;">Monthly Plan</div><div style="font-size:12px;color:#64748B;">₹999/month</div></div></div><div style="padding:16px;background:#FFF;border:1.5px solid #E2E8F0;border-radius:14px;display:flex;align-items:center;gap:12px;"><div style="width:20px;height:20px;border-radius:50%;border:2px solid #CBD5E1;"></div><div><div style="font-size:14px;font-weight:600;color:#0F172A;">Annual Plan</div><div style="font-size:12px;color:#64748B;">₹9,999/year</div></div></div></div>`;
      return `<div style="display:flex;flex-direction:column;gap:10px;"><div style="display:flex;align-items:center;gap:10px;"><div style="width:20px;height:20px;border-radius:50%;border:2px solid #3B82F6;display:flex;align-items:center;justify-content:center;"><div style="width:10px;height:10px;background:#3B82F6;border-radius:50%;"></div></div><span style="font-size:14px;font-weight:500;">Option A</span></div><div style="display:flex;align-items:center;gap:10px;"><div style="width:20px;height:20px;border-radius:50%;border:2px solid #CBD5E1;"></div><span style="font-size:14px;font-weight:500;color:#64748B;">Option B</span></div></div>`;
    }
    if (fam.includes('Toggle') || fam.includes('Switch')) {
      return `<div style="display:flex;align-items:center;justify-content:space-between;width:100%;max-width:280px;padding:14px 18px;background:#FFF;border:1.5px solid #E2E8F0;border-radius:14px;"><span style="font-size:14px;font-weight:600;">Dark mode</span><div style="width:48px;height:28px;background:#3B82F6;border-radius:99px;padding:2px;cursor:pointer;position:relative;"><div style="width:24px;height:24px;background:#fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,0.1);position:absolute;right:2px;top:2px;"></div></div></div>`;
    }
    if (fam.includes('Slider') || fam.includes('Range')) {
      return `<div style="width:100%;max-width:280px;"><label style="font-size:13px;font-weight:600;color:#334155;display:flex;justify-content:space-between;margin-bottom:12px;"><span>Budget Range</span><span style="color:#3B82F6;">₹15,000</span></label><div style="width:100%;height:6px;background:#E2E8F0;border-radius:99px;position:relative;"><div style="width:60%;height:6px;background:linear-gradient(90deg,#3B82F6,#6366F1);border-radius:99px;"></div><div style="position:absolute;top:-7px;left:58%;width:20px;height:20px;background:#fff;border:2px solid #3B82F6;border-radius:50%;box-shadow:0 2px 6px rgba(0,0,0,0.1);"></div></div></div>`;
    }
  }

  // =====================================================================
  // PAYMENTS — Pinterest Fintech Wallet Inspired
  // =====================================================================
  if (cat === 'Payments') {
    if (fam.includes('Wallet') || fam.includes('Balance') || fam.includes('History') || fam.includes('Multi')) {
      return `<div style="width:100%;max-width:320px;background:linear-gradient(145deg,#0F172A,#1E293B);border-radius:24px;padding:28px;color:#fff;box-shadow:0 24px 48px rgba(0,0,0,0.3);position:relative;overflow:hidden;">
        <div style="position:absolute;top:-40px;right:-40px;width:150px;height:150px;background:radial-gradient(circle,rgba(59,130,246,0.15),transparent);border-radius:50%;"></div>
        <div style="font-size:12px;color:#94A3B8;margin-bottom:4px;">My Balance</div>
        <div style="font-size:36px;font-weight:800;margin-bottom:4px;letter-spacing:-0.03em;">₹23,400<span style="font-size:18px;color:#64748B;">.00</span></div>
        <div style="display:flex;gap:4px;align-items:center;font-size:12px;color:#10B981;margin-bottom:24px;">↑ +12% <span style="color:#64748B;">this month</span></div>
        <div style="display:flex;gap:10px;">
          <div style="flex:1;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.05);border-radius:14px;padding:12px;text-align:center;cursor:pointer;"><div style="font-size:18px;margin-bottom:4px;">↗</div><div style="font-size:11px;font-weight:600;">Send</div></div>
          <div style="flex:1;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.05);border-radius:14px;padding:12px;text-align:center;cursor:pointer;"><div style="font-size:18px;margin-bottom:4px;">↙</div><div style="font-size:11px;font-weight:600;">Receive</div></div>
          <div style="flex:1;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.05);border-radius:14px;padding:12px;text-align:center;cursor:pointer;"><div style="font-size:18px;margin-bottom:4px;">📋</div><div style="font-size:11px;font-weight:600;">History</div></div>
        </div>
      </div>`;
    }
    if (fam.includes('Card') || fam.includes('Method') || fam.includes('Default') || fam.includes('Add')) {
      return `<div style="width:100%;max-width:300px;background:linear-gradient(135deg,#1E293B,#334155);border-radius:16px;padding:20px;color:#fff;box-shadow:0 12px 24px rgba(0,0,0,0.2);">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:24px;"><span style="font-size:11px;font-weight:700;letter-spacing:0.1em;">VISA</span><span style="font-size:10px;color:#94A3B8;">•••• 5679</span></div>
        <div style="font-size:18px;font-weight:700;letter-spacing:3px;margin-bottom:20px;">•••• •••• •••• 5679</div>
        <div style="display:flex;justify-content:space-between;"><div><div style="font-size:9px;color:#64748B;">CARD HOLDER</div><div style="font-size:12px;font-weight:600;">Joshua M.</div></div><div><div style="font-size:9px;color:#64748B;">EXPIRES</div><div style="font-size:12px;font-weight:600;">12/28</div></div></div>
      </div>`;
    }
    if (fam.includes('Receipt') || fam.includes('Detailed') || fam.includes('Download')) {
      return `<div style="width:100%;max-width:280px;background:#fff;border:1px solid #E2E8F0;border-radius:16px;padding:24px;">
        <div style="text-align:center;margin-bottom:20px;"><div style="width:48px;height:48px;background:#ECFDF5;border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto 12px;font-size:24px;">✓</div><div style="font-size:16px;font-weight:700;color:#0F172A;">Payment Successful</div><div style="font-size:28px;font-weight:800;color:#0F172A;margin-top:4px;">₹2,500.00</div></div>
        <div style="border-top:1px dashed #E2E8F0;padding-top:16px;display:flex;flex-direction:column;gap:10px;">
          <div style="display:flex;justify-content:space-between;font-size:13px;"><span style="color:#64748B;">To</span><span style="font-weight:600;color:#0F172A;">Landlord</span></div>
          <div style="display:flex;justify-content:space-between;font-size:13px;"><span style="color:#64748B;">Date</span><span style="font-weight:600;color:#0F172A;">Oct 10, 2026</span></div>
          <div style="display:flex;justify-content:space-between;font-size:13px;"><span style="color:#64748B;">Ref</span><span style="font-weight:600;color:#0F172A;font-family:monospace;">#TXN8294</span></div>
        </div>
      </div>`;
    }
    if (fam.includes('Transaction') || fam.includes('Row') || fam.includes('Status') || fam.includes('Grouped')) {
      return `<div style="width:100%;max-width:300px;display:flex;flex-direction:column;gap:2px;">
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
      </div>`;
    }
  }

  // =====================================================================
  // CARDS — Starbucks Rewards / Savings Goals inspired
  // =====================================================================
  if (cat === 'Cards' || cat === 'Rewards') {
    if (fam.includes('Reward') || fam.includes('Scratch') || fam.includes('Coupon') || fam.includes('Cashback') || fam.includes('Earned') || fam.includes('Offer')) {
      return `<div style="width:100%;max-width:300px;background:linear-gradient(135deg,#92400E,#78350F);border-radius:20px;padding:28px;color:#fff;box-shadow:0 16px 32px rgba(0,0,0,0.2);">
        <div style="font-size:11px;font-weight:600;letter-spacing:0.1em;color:rgba(255,255,255,0.7);margin-bottom:16px;">REWARD PROGRESS</div>
        <div style="display:flex;align-items:baseline;gap:4px;margin-bottom:8px;"><span style="font-size:36px;font-weight:800;">84</span><span style="font-size:16px;color:#F59E0B;">/125★</span></div>
        <div style="font-size:13px;color:rgba(255,255,255,0.7);margin-bottom:16px;">41★ until your next Reward</div>
        <div style="width:100%;height:8px;background:rgba(0,0,0,0.3);border-radius:99px;overflow:hidden;"><div style="width:67%;height:100%;background:linear-gradient(90deg,#D97706,#F59E0B);border-radius:99px;"></div></div>
      </div>`;
    }
    if (fam.includes('Membership') || fam.includes('Tier') || fam.includes('Premium') || fam.includes('Comparison Grid') || fam.includes('Standard Tier')) {
      return `<div style="width:100%;max-width:300px;background:linear-gradient(135deg,#D4AF37 0%,#B8860B 50%,#DAA520 100%);border-radius:20px;padding:24px;color:#fff;box-shadow:0 16px 32px rgba(0,0,0,0.15);">
        <div style="font-size:20px;font-weight:700;margin-bottom:4px;">Josie Kolbech</div>
        <div style="font-size:14px;color:rgba(255,255,255,0.8);margin-bottom:12px;">Gold Status</div>
        <div style="display:flex;align-items:center;gap:8px;"><span style="font-size:24px;">★</span><span style="font-size:24px;opacity:0.5;">★</span></div>
      </div>`;
    }
    if (fam.includes('Streak') || fam.includes('Flame') || fam.includes('Compact Badge') || fam.includes('Recovery')) {
      return `<div style="width:100%;max-width:280px;background:#FFF;border:1px solid #E2E8F0;border-radius:20px;padding:24px;text-align:center;">
        <div style="font-size:48px;margin-bottom:8px;filter:drop-shadow(0 4px 8px rgba(234,88,12,0.3));">🔥</div>
        <div style="font-size:32px;font-weight:800;color:#0F172A;margin-bottom:4px;">15 Days</div>
        <div style="font-size:13px;color:#64748B;margin-bottom:16px;">Current Streak</div>
        <div style="display:flex;justify-content:center;gap:4px;">${Array(7).fill(0).map((_,i) => `<div style="width:28px;height:28px;background:${i<5?'#F97316':'#F1F5F9'};border-radius:6px;display:flex;align-items:center;justify-content:center;font-size:10px;${i<5?'color:#fff;':'color:#94A3B8;'}">${['M','T','W','T','F','S','S'][i]}</div>`).join('')}</div>
      </div>`;
    }
    if (fam.includes('Achievement') || fam.includes('Unlocked') || fam.includes('Locked') || fam.includes('Badge Grid')) {
      return `<div style="width:100%;max-width:280px;display:flex;gap:12px;flex-wrap:wrap;justify-content:center;">
        <div style="width:80px;text-align:center;"><div style="width:64px;height:64px;background:#FEF3C7;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:28px;margin:0 auto 8px;box-shadow:0 4px 12px rgba(245,158,11,0.2);">🏆</div><div style="font-size:11px;font-weight:600;color:#0F172A;">Early Bird</div></div>
        <div style="width:80px;text-align:center;"><div style="width:64px;height:64px;background:#DBEAFE;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:28px;margin:0 auto 8px;box-shadow:0 4px 12px rgba(59,130,246,0.2);">💎</div><div style="font-size:11px;font-weight:600;color:#0F172A;">Pro User</div></div>
        <div style="width:80px;text-align:center;opacity:0.4;"><div style="width:64px;height:64px;background:#F1F5F9;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:28px;margin:0 auto 8px;">🔒</div><div style="font-size:11px;font-weight:600;color:#94A3B8;">Locked</div></div>
      </div>`;
    }
    if (fam.includes('Profile') || fam.includes('Team') || fam.includes('Compact Profile')) {
      return `<div style="width:100%;max-width:280px;background:#fff;border:1px solid #E2E8F0;border-radius:20px;padding:24px;text-align:center;">
        <div style="width:64px;height:64px;background:linear-gradient(135deg,#6366F1,#8B5CF6);border-radius:50%;margin:0 auto 16px;display:flex;align-items:center;justify-content:center;font-size:24px;color:#fff;font-weight:700;">JM</div>
        <div style="font-size:18px;font-weight:700;color:#0F172A;margin-bottom:2px;">Joshua M.</div>
        <div style="font-size:13px;color:#64748B;margin-bottom:16px;">Gold Member · Since 2024</div>
        <div style="display:flex;gap:24px;justify-content:center;"><div><div style="font-size:18px;font-weight:800;color:#0F172A;">12</div><div style="font-size:11px;color:#94A3B8;">Properties</div></div><div><div style="font-size:18px;font-weight:800;color:#0F172A;">₹2.4L</div><div style="font-size:11px;color:#94A3B8;">Total Rent</div></div></div>
      </div>`;
    }
    // Savings Goals inspired by Pinterest
    if (fam.includes('Entity') || fam.includes('Standard Entity') || fam.includes('With Status') || fam.includes('Compact Entity')) {
      return `<div style="width:100%;max-width:300px;background:#fff;border:1px solid #E2E8F0;border-radius:20px;padding:20px;">
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
      </div>`;
    }
  }

  // =====================================================================
  // NAVIGATION — Bottom Tab Bar inspired by PhonePe/PayPal
  // =====================================================================
  if (cat === 'Navigation') {
    if (fam.includes('Tab Bar') || fam.includes('Bottom') || fam.includes('Floating')) {
      return `<div style="width:100%;max-width:340px;background:#FFFFFF;border-radius:24px;padding:12px 8px;box-shadow:0 -4px 24px rgba(0,0,0,0.08);display:flex;justify-content:space-around;align-items:center;border:1px solid #F1F5F9;">
        <div style="display:flex;flex-direction:column;align-items:center;gap:4px;color:#3B82F6;"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg><span style="font-size:10px;font-weight:700;">Home</span></div>
        <div style="display:flex;flex-direction:column;align-items:center;gap:4px;color:#94A3B8;"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg><span style="font-size:10px;font-weight:500;">Search</span></div>
        <div style="width:48px;height:48px;background:#0F172A;border-radius:50%;display:flex;align-items:center;justify-content:center;color:#fff;font-size:24px;margin-top:-20px;box-shadow:0 8px 16px rgba(0,0,0,0.2);">+</div>
        <div style="display:flex;flex-direction:column;align-items:center;gap:4px;color:#94A3B8;position:relative;"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/></svg><div style="position:absolute;top:-2px;right:-2px;width:8px;height:8px;background:#EF4444;border-radius:50%;border:2px solid #fff;"></div><span style="font-size:10px;font-weight:500;">Alerts</span></div>
        <div style="display:flex;flex-direction:column;align-items:center;gap:4px;color:#94A3B8;"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg><span style="font-size:10px;font-weight:500;">Profile</span></div>
      </div>`;
    }
        if (fam.includes('Stepper')) {
      return `<div style="display:flex;align-items:center;gap:12px;width:100%;max-width:320px;"><div style="width:24px;height:24px;background:#10B981;border-radius:50%;display:flex;align-items:center;justify-content:center;color:#fff;font-size:12px;font-weight:700;">✓</div><div style="flex:1;height:2px;background:#10B981;"></div><div style="width:24px;height:24px;background:#3B82F6;border-radius:50%;display:flex;align-items:center;justify-content:center;color:#fff;font-size:12px;font-weight:700;box-shadow:0 0 0 4px rgba(59,130,246,0.2);">2</div><div style="flex:1;height:2px;background:#E2E8F0;"></div><div style="width:24px;height:24px;background:#F1F5F9;border-radius:50%;display:flex;align-items:center;justify-content:center;color:#94A3B8;font-size:12px;font-weight:700;">3</div></div>`;
    }
    if (fam.includes('Footer')) {
      return `<div style="width:100%;max-width:320px;background:#F8FAFC;border-radius:16px;padding:24px;border:1px solid #E2E8F0;"><div style="display:flex;justify-content:space-between;margin-bottom:24px;"><div style="font-size:18px;font-weight:800;">Rentenpe.</div><div style="display:flex;gap:12px;"><div style="width:24px;height:24px;background:#E2E8F0;border-radius:50%;"></div><div style="width:24px;height:24px;background:#E2E8F0;border-radius:50%;"></div></div></div><div style="display:flex;justify-content:space-between;font-size:12px;color:#64748B;"><span>© 2024</span><span>Terms</span><span>Privacy</span></div></div>`;
    }
    if (fam.includes('Tabs') || fam.includes('Underline') || fam.includes('Pill')) {
      if (fam.includes('Pill')) return `<div style="display:flex;gap:6px;background:#F1F5F9;padding:4px;border-radius:99px;"><div style="padding:10px 20px;background:#0F172A;color:#fff;border-radius:99px;font-size:13px;font-weight:600;">Rewards</div><div style="padding:10px 20px;color:#64748B;font-size:13px;font-weight:500;">History</div><div style="padding:10px 20px;color:#64748B;font-size:13px;font-weight:500;">Settings</div></div>`;
      if (fam.includes('Underline')) return `<div style="display:flex;gap:24px;border-bottom:2px solid #E2E8F0;"><div style="padding-bottom:12px;border-bottom:2px solid #0F172A;margin-bottom:-2px;font-size:14px;font-weight:600;color:#0F172A;">Rewards</div><div style="padding-bottom:12px;font-size:14px;font-weight:500;color:#94A3B8;">History</div><div style="padding-bottom:12px;font-size:14px;font-weight:500;color:#94A3B8;">Expiration</div></div>`;
      return `<div style="display:flex;gap:24px;"><div style="padding-bottom:10px;border-bottom:3px solid #3B82F6;font-size:14px;font-weight:700;color:#0F172A;">Overview</div><div style="padding-bottom:10px;font-size:14px;font-weight:500;color:#94A3B8;">Analytics</div><div style="padding-bottom:10px;font-size:14px;font-weight:500;color:#94A3B8;">Reports</div></div>`;
    }
  }

  // =====================================================================
  // CHARTS — SVG-based unique chart types
  // =====================================================================
  if (cat === 'Charts' || cat === 'Analytics' || cat === 'Infographics') {
    if (fam.includes('Donut') || fam.includes('Pie')) {
      return `<div style="width:100%;max-width:280px;text-align:center;">
        <svg viewBox="0 0 120 120" width="140" height="140" style="display:block;margin:0 auto 16px;">
          <circle cx="60" cy="60" r="50" fill="none" stroke="#F1F5F9" stroke-width="12"/>
          <circle cx="60" cy="60" r="50" fill="none" stroke="#3B82F6" stroke-width="12" stroke-dasharray="188 126" stroke-dashoffset="0" transform="rotate(-90 60 60)"/>
          <circle cx="60" cy="60" r="50" fill="none" stroke="#10B981" stroke-width="12" stroke-dasharray="63 251" stroke-dashoffset="-188" transform="rotate(-90 60 60)"/>
          <text x="60" y="56" text-anchor="middle" font-size="20" font-weight="800" fill="#0F172A">67%</text>
          <text x="60" y="72" text-anchor="middle" font-size="10" fill="#94A3B8">On Track</text>
        </svg>
      </div>`;
    }
    if (fam.includes('Bar') || fam.includes('Horizontal') || fam.includes('Grouped') || fam.includes('Stacked')) {
      return `<div style="width:100%;max-width:300px;">
        <div style="display:flex;justify-content:space-between;margin-bottom:16px;"><span style="font-size:14px;font-weight:700;color:#0F172A;">Saving Analytics</span><span style="font-size:12px;color:#64748B;">Avg ₹1,202/mo</span></div>
        <div style="display:flex;align-items:end;gap:10px;height:120px;margin-bottom:8px;">
          ${[65,80,45,90,70,55].map((h,i) => `<div style="flex:1;display:flex;flex-direction:column;align-items:center;gap:4px;"><div style="width:100%;height:${h}%;background:${i===3?'#0F172A':'#E2E8F0'};border-radius:6px;transition:background 0.2s;" onmouseover="this.style.background='#0F172A'" onmouseout="this.style.background='${i===3?'#0F172A':'#E2E8F0'}'"></div></div>`).join('')}
        </div>
        <div style="display:flex;gap:10px;"><div style="flex:1;text-align:center;font-size:10px;color:#94A3B8;">Jan</div><div style="flex:1;text-align:center;font-size:10px;color:#94A3B8;">Feb</div><div style="flex:1;text-align:center;font-size:10px;color:#94A3B8;">Mar</div><div style="flex:1;text-align:center;font-size:10px;color:#94A3B8;">Apr</div><div style="flex:1;text-align:center;font-size:10px;color:#94A3B8;">May</div><div style="flex:1;text-align:center;font-size:10px;color:#94A3B8;">Jun</div></div>
      </div>`;
    }
    if (fam.includes('Line') || fam.includes('Area') || fam.includes('Sparkline') || fam.includes('Trend') || fam.includes('Mini')) {
      return `<div style="width:100%;max-width:300px;">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;"><div><div style="font-size:14px;font-weight:700;color:#0F172A;">Portfolio Value</div><div style="font-size:24px;font-weight:800;color:#0F172A;">₹63,000</div></div><div style="background:#ECFDF5;color:#10B981;padding:4px 10px;border-radius:99px;font-size:12px;font-weight:700;">+12.5%</div></div>
        <svg viewBox="0 0 300 80" width="100%" height="80" style="display:block;">
          <defs><linearGradient id="areaFill" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#3B82F6" stop-opacity="0.2"/><stop offset="100%" stop-color="#3B82F6" stop-opacity="0"/></linearGradient></defs>
          <path d="M0,60 Q30,40 60,50 T120,30 T180,35 T240,15 T300,20 L300,80 L0,80Z" fill="url(#areaFill)"/>
          <path d="M0,60 Q30,40 60,50 T120,30 T180,35 T240,15 T300,20" fill="none" stroke="#3B82F6" stroke-width="2.5"/>
          <circle cx="300" cy="20" r="4" fill="#3B82F6"/>
        </svg>
      </div>`;
    }
  }

  // =====================================================================
  // FEEDBACK
  // =====================================================================
  if (cat === 'Feedback') {
    if (fam.includes('Progress') || fam.includes('Segmented') || fam.includes('Circular')) {
      if (fam.includes('Circular')) return `<div style="text-align:center;"><svg viewBox="0 0 120 120" width="120" height="120"><circle cx="60" cy="60" r="50" fill="none" stroke="#F1F5F9" stroke-width="10"/><circle cx="60" cy="60" r="50" fill="none" stroke="#3B82F6" stroke-width="10" stroke-dasharray="220 94" stroke-linecap="round" transform="rotate(-90 60 60)"/><text x="60" y="56" text-anchor="middle" font-size="22" font-weight="800" fill="#0F172A">70%</text><text x="60" y="72" text-anchor="middle" font-size="10" fill="#94A3B8">Complete</text></svg></div>`;
      return `<div style="width:100%;max-width:280px;"><div style="display:flex;justify-content:space-between;font-size:13px;margin-bottom:8px;"><span style="font-weight:600;color:#0F172A;">Uploading...</span><span style="color:#3B82F6;font-weight:600;">72%</span></div><div style="width:100%;height:8px;background:#F1F5F9;border-radius:99px;overflow:hidden;"><div style="width:72%;height:100%;background:linear-gradient(90deg,#3B82F6,#6366F1);border-radius:99px;transition:width 0.3s;"></div></div></div>`;
    }
    if (fam.includes('Skeleton') || fam.includes('Loading')) {
      return `<div style="width:100%;max-width:280px;display:flex;flex-direction:column;gap:12px;"><div style="display:flex;gap:12px;align-items:center;"><div style="width:48px;height:48px;background:linear-gradient(90deg,#F1F5F9 25%,#E2E8F0 50%,#F1F5F9 75%);border-radius:12px;background-size:200% 100%;animation:shimmer 1.5s infinite;"></div><div style="flex:1;"><div style="height:14px;background:linear-gradient(90deg,#F1F5F9 25%,#E2E8F0 50%,#F1F5F9 75%);border-radius:4px;margin-bottom:8px;width:70%;background-size:200% 100%;"></div><div style="height:10px;background:linear-gradient(90deg,#F1F5F9 25%,#E2E8F0 50%,#F1F5F9 75%);border-radius:4px;width:40%;background-size:200% 100%;"></div></div></div><div style="height:100px;background:linear-gradient(90deg,#F1F5F9 25%,#E2E8F0 50%,#F1F5F9 75%);border-radius:12px;background-size:200% 100%;"></div></div>`;
    }
    if (fam.includes('Empty') || fam.includes('No-data') || fam.includes('Illustrated')) {
      return `<div style="width:100%;max-width:280px;text-align:center;padding:40px 20px;"><div style="font-size:48px;margin-bottom:16px;opacity:0.6;">📭</div><div style="font-size:18px;font-weight:700;color:#0F172A;margin-bottom:8px;">No results found</div><div style="font-size:14px;color:#64748B;margin-bottom:20px;">Try adjusting your search or filters</div><button style="background:#0F172A;color:#fff;border:none;padding:10px 24px;border-radius:10px;font-weight:600;font-size:14px;cursor:pointer;">Clear Filters</button></div>`;
    }
  }

  // =====================================================================
  // OVERLAYS
  // =====================================================================
  if (cat === 'Overlays') {
    if (fam.includes('Bottom Sheet') || fam.includes('Handle') || fam.includes('Full Screen')) {
      return `<div style="width:100%;max-width:320px;background:#fff;border-radius:24px 24px 0 0;padding:12px 24px 24px;box-shadow:0 -8px 32px rgba(0,0,0,0.1);border:1px solid #E2E8F0;">
        <div style="width:40px;height:4px;background:#CBD5E1;border-radius:99px;margin:0 auto 20px;"></div>
        <div style="font-size:18px;font-weight:700;color:#0F172A;margin-bottom:16px;">Payment Options</div>
        <div style="display:flex;flex-direction:column;gap:8px;">
          <div style="display:flex;align-items:center;gap:14px;padding:14px;background:#F8FAFC;border-radius:14px;"><div style="width:36px;height:36px;background:#DBEAFE;border-radius:10px;display:flex;align-items:center;justify-content:center;">💳</div><div style="flex:1;font-size:14px;font-weight:600;">Credit Card</div><span style="color:#94A3B8;">›</span></div>
          <div style="display:flex;align-items:center;gap:14px;padding:14px;background:#F8FAFC;border-radius:14px;"><div style="width:36px;height:36px;background:#ECFDF5;border-radius:10px;display:flex;align-items:center;justify-content:center;">🏦</div><div style="flex:1;font-size:14px;font-weight:600;">Bank Transfer</div><span style="color:#94A3B8;">›</span></div>
        </div>
      </div>`;
    }
    if (fam.includes('Confirm') || fam.includes('Danger') || fam.includes('Dialog')) {
      return `<div style="width:100%;max-width:300px;background:#fff;border-radius:20px;padding:28px;text-align:center;box-shadow:0 25px 50px rgba(0,0,0,0.12);">
        <div style="width:56px;height:56px;background:#FEE2E2;border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto 16px;font-size:28px;">⚠</div>
        <div style="font-size:18px;font-weight:700;color:#0F172A;margin-bottom:8px;">Are you sure?</div>
        <div style="font-size:14px;color:#64748B;margin-bottom:24px;">This action cannot be undone.</div>
        <div style="display:flex;gap:10px;"><button style="flex:1;padding:12px;background:#F1F5F9;border:none;border-radius:12px;font-weight:600;font-size:14px;color:#475569;cursor:pointer;">Cancel</button><button style="flex:1;padding:12px;background:#EF4444;border:none;border-radius:12px;font-weight:600;font-size:14px;color:#fff;cursor:pointer;">Delete</button></div>
      </div>`;
    }
  }

  // =====================================================================
  // AUTHENTICATION — Clean mobile auth screens
  // =====================================================================
  if (cat === 'Authentication' || cat === 'Onboarding') {
    if (fam.includes('Login') || fam.includes('Standard Login') || fam.includes('Social') || fam.includes('OTP Login')) {
      return `<div style="width:100%;max-width:300px;text-align:center;">
        <div style="width:64px;height:64px;background:#0F172A;border-radius:16px;display:flex;align-items:center;justify-content:center;margin:0 auto 24px;font-size:24px;color:#fff;font-weight:800;">R</div>
        <div style="font-size:24px;font-weight:800;color:#0F172A;margin-bottom:8px;">Welcome back</div>
        <div style="font-size:14px;color:#64748B;margin-bottom:32px;">Sign in to your Rentenpe account</div>
        <div style="text-align:left;margin-bottom:12px;"><label style="font-size:13px;font-weight:600;color:#334155;display:block;margin-bottom:6px;">Email</label><div style="border:1.5px solid #E2E8F0;border-radius:12px;padding:12px 14px;background:#F8FAFC;font-size:14px;color:#94A3B8;">you@example.com</div></div>
        <div style="text-align:left;margin-bottom:24px;"><label style="font-size:13px;font-weight:600;color:#334155;display:block;margin-bottom:6px;">Password</label><div style="border:1.5px solid #E2E8F0;border-radius:12px;padding:12px 14px;background:#F8FAFC;font-size:14px;color:#94A3B8;">••••••••</div></div>
        <button style="width:100%;padding:14px;background:#0F172A;color:#fff;border:none;border-radius:12px;font-weight:700;font-size:15px;">Sign In</button>
      </div>`;
    }
    if (fam.includes('Welcome') || fam.includes('Animated') || fam.includes('Video')) {
      return `<div style="width:100%;max-width:300px;text-align:center;padding:40px 0;">
        <div style="font-size:64px;margin-bottom:24px;">🎉</div>
        <div style="font-size:28px;font-weight:800;color:#0F172A;margin-bottom:12px;letter-spacing:-0.03em;">Welcome to<br/>Rentenpe</div>
        <div style="font-size:15px;color:#64748B;margin-bottom:32px;line-height:1.5;">Manage your properties,<br/>track payments, build credit.</div>
        <button style="width:100%;padding:16px;background:#0F172A;color:#fff;border:none;border-radius:14px;font-weight:700;font-size:16px;box-shadow:0 12px 24px rgba(0,0,0,0.15);">Get Started</button>
      </div>`;
    }
  }

  // =====================================================================
  // DATA DISPLAY
  // =====================================================================
  if (cat === 'Data Display' || cat === 'Lists' || cat === 'Tables') {
    if (fam.includes('Badge') || fam.includes('Dot') || fam.includes('Outlined') || fam.includes('Count') || fam.includes('Pulsing') || fam.includes('Animated')) {
      return `<div style="display:flex;flex-wrap:wrap;gap:8px;">
        <div style="padding:4px 12px;background:#ECFDF5;color:#059669;border-radius:99px;font-size:12px;font-weight:600;">Active</div>
        <div style="padding:4px 12px;background:#FEF3C7;color:#D97706;border-radius:99px;font-size:12px;font-weight:600;">Pending</div>
        <div style="padding:4px 12px;background:#FEE2E2;color:#DC2626;border-radius:99px;font-size:12px;font-weight:600;">Overdue</div>
        <div style="padding:4px 12px;background:#EEF2FF;color:#4F46E5;border-radius:99px;font-size:12px;font-weight:600;">New</div>
      </div>`;
    }
    if (fam.includes('Avatar') || fam.includes('Initials') || fam.includes('Avatar Group')) {
      if (fam.includes('Avatar Group')) return `<div style="display:flex;"><div style="width:40px;height:40px;background:#6366F1;border-radius:50%;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:700;font-size:14px;border:2px solid #fff;">JM</div><div style="width:40px;height:40px;background:#EC4899;border-radius:50%;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:700;font-size:14px;margin-left:-12px;border:2px solid #fff;">AK</div><div style="width:40px;height:40px;background:#10B981;border-radius:50%;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:700;font-size:14px;margin-left:-12px;border:2px solid #fff;">RS</div><div style="width:40px;height:40px;background:#F1F5F9;border-radius:50%;display:flex;align-items:center;justify-content:center;color:#64748B;font-weight:700;font-size:12px;margin-left:-12px;border:2px solid #fff;">+5</div></div>`;
      return `<div style="width:56px;height:56px;background:linear-gradient(135deg,#6366F1,#8B5CF6);border-radius:50%;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:700;font-size:20px;box-shadow:0 4px 12px rgba(99,102,241,0.3);">JM</div>`;
    }
    if (fam.includes('Timeline') || fam.includes('Grouped') || fam.includes('Interactive')) {
      return `<div style="width:100%;max-width:280px;display:flex;flex-direction:column;gap:0;">
        <div style="display:flex;gap:16px;padding-bottom:20px;"><div style="display:flex;flex-direction:column;align-items:center;"><div style="width:12px;height:12px;background:#3B82F6;border-radius:50%;"></div><div style="width:2px;flex:1;background:#E2E8F0;"></div></div><div><div style="font-size:13px;font-weight:600;color:#0F172A;">Payment received</div><div style="font-size:11px;color:#94A3B8;">Today · 2:30 PM</div></div></div>
        <div style="display:flex;gap:16px;padding-bottom:20px;"><div style="display:flex;flex-direction:column;align-items:center;"><div style="width:12px;height:12px;background:#10B981;border-radius:50%;"></div><div style="width:2px;flex:1;background:#E2E8F0;"></div></div><div><div style="font-size:13px;font-weight:600;color:#0F172A;">Lease signed</div><div style="font-size:11px;color:#94A3B8;">Oct 8 · 11:00 AM</div></div></div>
        <div style="display:flex;gap:16px;"><div style="display:flex;flex-direction:column;align-items:center;"><div style="width:12px;height:12px;background:#E2E8F0;border-radius:50%;"></div></div><div><div style="font-size:13px;font-weight:600;color:#94A3B8;">Inspection scheduled</div><div style="font-size:11px;color:#94A3B8;">Oct 15</div></div></div>
      </div>`;
    }
  }

  // =====================================================================
  // SIDEBARS & ADVANCED NAVIGATION
  // =====================================================================
  if (cat === 'Navigation' || cat === 'Dropdowns') {
    if (fam.includes('Sidebar') || fam.includes('Drawer')) {
      if (fam.includes('Collapsed')) return `<div style="width:72px; height:240px; background:#fff; border-right:1px solid #E2E8F0; display:flex; flex-direction:column; align-items:center; padding:20px 0; gap:24px; box-shadow:4px 0 24px rgba(0,0,0,0.02);"><div style="width:40px; height:40px; background:#0F172A; border-radius:12px; display:flex; align-items:center; justify-content:center; color:#fff; font-size:18px;">R</div><div style="display:flex; flex-direction:column; gap:16px;"><div style="width:40px; height:40px; background:#EEF2FF; color:#4F46E5; border-radius:10px; display:flex; align-items:center; justify-content:center;">${icon}</div><div style="width:40px; height:40px; color:#64748B; border-radius:10px; display:flex; align-items:center; justify-content:center;">📊</div><div style="width:40px; height:40px; color:#64748B; border-radius:10px; display:flex; align-items:center; justify-content:center;">⚙</div></div></div>`;
      if (fam.includes('Mobile')) return `<div style="width:100%; max-width:280px; background:#fff; border-radius:0 24px 24px 0; padding:24px; height:100%; box-shadow:24px 0 48px rgba(0,0,0,0.1);"><div style="display:flex; justify-content:space-between; margin-bottom:32px;"><span style="font-size:20px; font-weight:800;">Menu</span><span>✕</span></div><div style="display:flex; flex-direction:column; gap:4px;"><div style="padding:12px 16px; background:#F8FAFC; border-radius:12px; font-weight:600; color:#0F172A; display:flex; gap:12px;"><span>${icon}</span> Overview</div><div style="padding:12px 16px; color:#64748B; font-weight:500; display:flex; gap:12px;"><span>💳</span> Payments</div></div></div>`;
      return `<div style="width:240px; height:240px; background:#F8FAFC; border-right:1px solid #E2E8F0; padding:24px 16px; display:flex; flex-direction:column; gap:20px;"><div style="font-size:16px; font-weight:800; padding:0 8px;">Rentenpe.</div><div style="display:flex; flex-direction:column; gap:4px;"><div style="font-size:10px; font-weight:700; color:#94A3B8; text-transform:uppercase; padding:0 8px; margin-bottom:4px;">Main Menu</div><div style="display:flex; align-items:center; gap:12px; padding:8px; background:#fff; border-radius:8px; border:1px solid #E2E8F0; box-shadow:0 2px 4px rgba(0,0,0,0.02); font-weight:600; font-size:13px;"><span>${icon}</span> Dashboard</div><div style="display:flex; align-items:center; gap:12px; padding:8px; color:#64748B; font-weight:500; font-size:13px;"><span>👥</span> Tenants</div></div></div>`;
    }
    if (fam.includes('Dropdown') || fam.includes('Select') || fam.includes('Menu')) {
      return `<div style="width:100%; max-width:240px;"><div style="width:100%; padding:12px 16px; background:#fff; border:1px solid #E2E8F0; border-radius:12px; display:flex; justify-content:space-between; align-items:center; margin-bottom:8px; box-shadow:0 2px 4px rgba(0,0,0,0.02);"><span style="font-size:14px; font-weight:500;">Select option...</span><span style="font-size:10px;">▼</span></div><div style="background:#fff; border:1px solid #E2E8F0; border-radius:12px; padding:8px; box-shadow:0 12px 24px rgba(0,0,0,0.1);"><div style="padding:10px 12px; background:#EEF2FF; border-radius:8px; color:#4F46E5; font-weight:600; font-size:13px; display:flex; justify-content:space-between;"><span>${icon} ${fam}</span><span>✓</span></div><div style="padding:10px 12px; color:#475569; font-weight:500; font-size:13px;">Other Option A</div><div style="padding:10px 12px; color:#475569; font-weight:500; font-size:13px;">Other Option B</div></div></div>`;
    }
    if (fam.includes('Topbar') || fam.includes('Header')) {
      return `<div style="width:100%; max-width:320px; background:#fff; padding:16px 20px; border-bottom:1px solid #E2E8F0; display:flex; justify-content:space-between; align-items:center;"><div style="display:flex; align-items:center; gap:12px;"><div style="width:32px; height:32px; background:#0F172A; border-radius:8px; color:#fff; display:flex; align-items:center; justify-content:center; font-weight:800;">R</div><span style="font-weight:700; font-size:15px;">Dashboard</span></div><div style="display:flex; gap:12px;"><div style="width:32px; height:32px; background:#F1F5F9; border-radius:50%; display:flex; align-items:center; justify-content:center;">🔔</div><div style="width:32px; height:32px; background:#10B981; border-radius:50%; display:flex; align-items:center; justify-content:center; color:#fff; font-weight:700; font-size:12px;">JM</div></div></div>`;
    }
  }

  // =====================================================================
  
  // MEGA MENU
  if (cat === 'Menus' || cat === 'Dropdowns') {
    if (slug === 'mega-menu') {
      return `<div style="width:100%;max-width:400px;background:#fff;border-radius:16px;box-shadow:0 20px 40px rgba(0,0,0,0.1);padding:24px;border:1px solid #E2E8F0;display:grid;grid-template-columns:1fr 1fr;gap:24px;"><div style="display:flex;flex-direction:column;gap:12px;"><div style="font-size:12px;font-weight:800;color:#94A3B8;letter-spacing:1px;text-transform:uppercase;">Products</div><div style="font-size:14px;font-weight:600;color:#0F172A;">Payments</div><div style="font-size:14px;font-weight:600;color:#0F172A;">Credit</div></div><div style="background:#F8FAFC;border-radius:12px;padding:16px;"><div style="font-size:12px;font-weight:800;color:#3B82F6;margin-bottom:8px;">FEATURED</div><div style="font-size:14px;font-weight:700;color:#0F172A;margin-bottom:4px;">Rent Reporting</div><div style="font-size:11px;color:#64748B;">Build credit with every payment</div></div></div>`;
    }
  }

  // OVERLAYS & MODALS
  if (cat === 'Overlays' || cat === 'Modals' || cat === 'Forms') {
    if (fam.includes('Form') || fam.includes('Modal') || fam.includes('Dialog')) {
      return `<div style="width:100%;max-width:300px;background:#fff;border-radius:24px;padding:24px;box-shadow:0 24px 48px rgba(0,0,0,0.15);border:1px solid #E2E8F0;"><div style="font-size:18px;font-weight:700;margin-bottom:8px;">Edit Profile</div><div style="font-size:13px;color:#64748B;margin-bottom:20px;">Update your personal information.</div><div style="height:40px;background:#F1F5F9;border-radius:8px;margin-bottom:12px;"></div><div style="height:40px;background:#F1F5F9;border-radius:8px;margin-bottom:24px;"></div><div style="display:flex;justify-content:flex-end;gap:8px;"><div style="padding:10px 16px;font-size:13px;font-weight:600;color:#64748B;">Cancel</div><div style="padding:10px 16px;background:#0F172A;color:#fff;border-radius:8px;font-size:13px;font-weight:600;">Save Changes</div></div></div>`;
    }
  }

  // DETERMINISTIC GENERATIVE FALLBACK (For the 200+ remaining variants)
  // Ensures every single component looks totally different
  // =====================================================================
  
  // Create a deterministic hash from the family name to select a layout
  let hash = 0;
  for (let i = 0; i < fam.length; i++) hash = ((hash << 5) - hash) + fam.charCodeAt(i);
  const layoutType = Math.abs(hash) % 6;
  const colorType = Math.abs(hash) % 4;
  
  const colors = [
    { bg: '#EEF2FF', border: '#C7D2FE', text: '#4F46E5', dark: '#312E81' },
    { bg: '#ECFDF5', border: '#A7F3D0', text: '#059669', dark: '#064E3B' },
    { bg: '#FFFBEB', border: '#FDE68A', text: '#D97706', dark: '#78350F' },
    { bg: '#FEF2F2', border: '#FECACA', text: '#DC2626', dark: '#7F1D1D' }
  ][colorType];

  // ── SEMANTIC CATEGORY OVERRIDES ──
  // Rather than purely random shapes, give specific components a highly realistic base structure
  
  if (slug === 'gauge-chart' || slug === 'score-display') {
    return `<div style="width:100%;max-width:280px;background:#fff;border-radius:24px;padding:32px 24px;box-shadow:0 20px 40px rgba(0,0,0,0.08);border:1px solid #E2E8F0;display:flex;flex-direction:column;align-items:center;text-align:center;"><div style="position:relative;width:140px;height:140px;margin-bottom:24px;"><svg viewBox="0 0 100 100" style="transform:rotate(-90deg);width:100%;height:100%;"><circle cx="50" cy="50" r="45" fill="none" stroke="#F1F5F9" stroke-width="10"></circle><circle cx="50" cy="50" r="45" fill="none" stroke="${colors.text}" stroke-width="10" stroke-dasharray="283" stroke-dashoffset="60" stroke-linecap="round"></circle></svg><div style="position:absolute;top:0;left:0;width:100%;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;"><span style="font-size:28px;">${icon}</span><span style="font-size:32px;font-weight:900;color:#0F172A;margin-top:4px;">78</span></div></div><div style="font-size:16px;font-weight:800;color:#0F172A;margin-bottom:8px;">${fam}</div><div style="font-size:13px;color:#64748B;font-weight:500;">Performance metric overview</div></div>`;
  }
  
  if (slug === 'file-upload' || slug === 'image-upload') {
    return `<div style="width:100%;max-width:320px;background:#F8FAFC;border:2px dashed ${colors.border};border-radius:20px;padding:32px 24px;text-align:center;transition:all 0.2s;"><div style="width:64px;height:64px;background:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:28px;margin:0 auto 16px;box-shadow:0 8px 16px rgba(0,0,0,0.05);color:${colors.text};">${icon}</div><div style="font-size:15px;font-weight:700;color:#0F172A;margin-bottom:8px;">${fam}</div><div style="font-size:13px;color:#64748B;margin-bottom:20px;">Drag and drop files here, or click to browse.</div><div style="display:inline-block;padding:10px 20px;background:#fff;border:1px solid #E2E8F0;border-radius:8px;font-size:13px;font-weight:600;color:#0F172A;box-shadow:0 2px 4px rgba(0,0,0,0.02);">Browse Files</div></div>`;
  }
  
  if (slug === 'date-picker' || slug === 'time-picker' || slug === 'calendar') {
    return `<div style="width:100%;max-width:300px;background:#fff;border-radius:20px;padding:24px;box-shadow:0 12px 32px rgba(0,0,0,0.08);border:1px solid #E2E8F0;"><div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:20px;"><div style="font-size:15px;font-weight:800;color:#0F172A;">${fam}</div><div style="display:flex;gap:8px;"><div style="width:28px;height:28px;background:#F1F5F9;border-radius:6px;display:flex;align-items:center;justify-content:center;color:#64748B;">←</div><div style="width:28px;height:28px;background:#F1F5F9;border-radius:6px;display:flex;align-items:center;justify-content:center;color:#64748B;">→</div></div></div><div style="display:grid;grid-template-columns:repeat(7, 1fr);gap:8px;text-align:center;margin-bottom:12px;"><div style="font-size:11px;font-weight:700;color:#94A3B8;">M</div><div style="font-size:11px;font-weight:700;color:#94A3B8;">T</div><div style="font-size:11px;font-weight:700;color:#94A3B8;">W</div><div style="font-size:11px;font-weight:700;color:#94A3B8;">T</div><div style="font-size:11px;font-weight:700;color:#94A3B8;">F</div><div style="font-size:11px;font-weight:700;color:#94A3B8;">S</div><div style="font-size:11px;font-weight:700;color:#94A3B8;">S</div></div><div style="display:grid;grid-template-columns:repeat(7, 1fr);gap:8px;text-align:center;"><div style="height:28px;display:flex;align-items:center;justify-content:center;font-size:13px;color:#0F172A;font-weight:500;">12</div><div style="height:28px;display:flex;align-items:center;justify-content:center;font-size:13px;color:#0F172A;font-weight:500;">13</div><div style="height:28px;display:flex;align-items:center;justify-content:center;font-size:13px;color:#fff;font-weight:700;background:${colors.text};border-radius:6px;box-shadow:0 4px 12px ${colors.border};">14</div><div style="height:28px;display:flex;align-items:center;justify-content:center;font-size:13px;color:#0F172A;font-weight:500;">15</div><div style="height:28px;display:flex;align-items:center;justify-content:center;font-size:13px;color:#0F172A;font-weight:500;">16</div><div style="height:28px;display:flex;align-items:center;justify-content:center;font-size:13px;color:#94A3B8;font-weight:500;">17</div><div style="height:28px;display:flex;align-items:center;justify-content:center;font-size:13px;color:#94A3B8;font-weight:500;">18</div></div></div>`;
  }
  
  if (slug.includes('table') || slug.includes('grid')) {
    return `<div style="width:100%;background:#fff;border-radius:16px;box-shadow:0 4px 12px rgba(0,0,0,0.03);border:1px solid #E2E8F0;overflow:hidden;"><div style="padding:16px 20px;border-bottom:1px solid #E2E8F0;display:flex;justify-content:space-between;align-items:center;"><div style="font-size:15px;font-weight:700;color:#0F172A;display:flex;align-items:center;gap:8px;"><span>${icon}</span> ${fam}</div><div style="padding:6px 12px;background:#F8FAFC;border-radius:6px;font-size:12px;font-weight:600;color:#64748B;">Filter</div></div><div style="padding:12px 20px;background:#F8FAFC;display:grid;grid-template-columns:2fr 1fr 1fr;gap:16px;border-bottom:1px solid #E2E8F0;"><div style="font-size:11px;font-weight:700;color:#94A3B8;text-transform:uppercase;">Name</div><div style="font-size:11px;font-weight:700;color:#94A3B8;text-transform:uppercase;">Status</div><div style="font-size:11px;font-weight:700;color:#94A3B8;text-transform:uppercase;text-align:right;">Amount</div></div><div style="padding:16px 20px;display:grid;grid-template-columns:2fr 1fr 1fr;gap:16px;border-bottom:1px solid #F1F5F9;align-items:center;"><div style="font-size:13px;font-weight:600;color:#0F172A;">Payment #1024</div><div style="display:flex;"><span style="padding:4px 8px;background:#ECFDF5;color:#10B981;border-radius:4px;font-size:11px;font-weight:700;">Paid</span></div><div style="font-size:13px;font-weight:600;color:#0F172A;text-align:right;">$1,200</div></div><div style="padding:16px 20px;display:grid;grid-template-columns:2fr 1fr 1fr;gap:16px;align-items:center;"><div style="font-size:13px;font-weight:600;color:#0F172A;">Payment #1025</div><div style="display:flex;"><span style="padding:4px 8px;background:#FFFBEB;color:#D97706;border-radius:4px;font-size:11px;font-weight:700;">Pending</span></div><div style="font-size:13px;font-weight:600;color:#0F172A;text-align:right;">$850</div></div></div>`;
  }

  // ── END SEMANTIC OVERRIDES ──

  if (layoutType === 0) { // Horizontal Split
    return `<div style="width:100%; max-width:300px; display:flex; align-items:center; background:#fff; border:1px solid #E2E8F0; border-radius:16px; padding:16px; box-shadow:0 4px 6px rgba(0,0,0,0.02);"><div style="width:48px; height:48px; background:${colors.bg}; border-radius:12px; display:flex; align-items:center; justify-content:center; font-size:24px; margin-right:16px;">${icon}</div><div style="flex:1;"><div style="font-size:14px; font-weight:700; color:#0F172A; margin-bottom:4px;">${fam}</div><div style="font-size:12px; color:#64748B;">System Component Variant</div></div><div style="padding:4px 10px; background:#F1F5F9; border-radius:99px; font-size:10px; font-weight:700; color:#475569;">V.1</div></div>`;
  }
  if (layoutType === 1) { // Stacked Bento
    return `<div style="width:100%; max-width:280px; background:#F8FAFC; border:1px solid #E2E8F0; border-radius:20px; padding:20px;"><div style="display:flex; justify-content:space-between; margin-bottom:16px;"><span style="padding:4px 8px; background:${colors.bg}; color:${colors.text}; border-radius:6px; font-size:10px; font-weight:800; text-transform:uppercase;">${cat}</span><span style="color:#94A3B8;">⋯</span></div><div style="font-size:40px; margin-bottom:12px;">${icon}</div><div style="font-size:16px; font-weight:700; color:#0F172A;">${fam}</div></div>`;
  }
  if (layoutType === 2) { // Minimal Stroke
    return `<div style="width:100%; max-width:260px; border:2px dashed #CBD5E1; border-radius:16px; padding:24px; text-align:center; background:rgba(255,255,255,0.5);"><div style="width:56px; height:56px; border:2px solid ${colors.text}; border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:24px; margin:0 auto 16px;">${icon}</div><div style="font-size:15px; font-weight:600; color:#334155;">${fam}</div></div>`;
  }
  if (layoutType === 3) { // Dark Solid Card
    return `<div style="width:100%; max-width:280px; background:#0F172A; border-radius:24px; padding:24px; color:#fff; box-shadow:0 12px 24px rgba(15,23,42,0.3);"><div style="display:flex; align-items:center; gap:12px; margin-bottom:20px;"><div style="width:36px; height:36px; background:rgba(255,255,255,0.1); border-radius:10px; display:flex; align-items:center; justify-content:center;">${icon}</div><span style="font-weight:600; font-size:14px;">${fam}</span></div><div style="width:100%; height:8px; background:rgba(255,255,255,0.1); border-radius:99px;"><div style="width:65%; height:100%; background:${colors.bg}; border-radius:99px;"></div></div></div>`;
  }
  if (layoutType === 4) { // Compact Pill Row
    return `<div style="display:flex; flex-direction:column; gap:12px; width:100%; max-width:280px;"><div style="padding:16px; background:#fff; border:1px solid #E2E8F0; border-radius:16px; display:flex; align-items:center; justify-content:space-between; box-shadow:0 2px 8px rgba(0,0,0,0.04);"><div style="display:flex; align-items:center; gap:12px;"><span style="font-size:20px;">${icon}</span><span style="font-weight:600; font-size:14px; color:#0F172A;">${fam}</span></div><span style="color:${colors.text}; font-weight:700;">→</span></div></div>`;
  }
  // Layout 5: Glass Overlay Variant
  return `<div style="width:100%; max-width:280px; height:160px; background:linear-gradient(135deg, ${colors.bg}, #fff); border:1px solid ${colors.border}; border-radius:20px; position:relative; overflow:hidden; padding:24px;"><div style="position:absolute; top:-20px; right:-20px; font-size:80px; opacity:0.1; transform:rotate(15deg);">${icon}</div><div style="position:relative; z-index:2; display:flex; flex-direction:column; height:100%; justify-content:space-between;"><div style="width:40px; height:40px; background:#fff; border-radius:50%; display:flex; align-items:center; justify-content:center; box-shadow:0 4px 12px rgba(0,0,0,0.05); color:${colors.text}; font-size:20px;">${icon}</div><div><div style="font-size:16px; font-weight:800; color:${colors.dark}; margin-bottom:4px;">${fam}</div><div style="font-size:12px; font-weight:600; color:${colors.text}; opacity:0.8;">${cat.toUpperCase()}</div></div></div></div>`;
}

module.exports = { getMockHTML };
function generatePage(slug, data) {
  // Build FULL sidebar nav
  const groups = {};
  for (const [s, d] of Object.entries(ALL_PAGES)) {
    if (!groups[d.cat]) groups[d.cat] = [];
    groups[d.cat].push({ slug: s, ...d });
  }

  let fullNavHTML = '';
  for (const [category, items] of Object.entries(groups)) {
    fullNavHTML += `\n      <div class="catalog-nav-group">
        <div class="catalog-nav-group-label">${category.toUpperCase()}</div>\n`;
    for (const item of items) {
      const activeClass = item.slug === slug ? 'active' : '';
      const compCount = item.families ? item.families.length * 3 : 12; // Estimate
      const dotHTML = item.slug.includes('input') || item.slug.includes('file') ? `<span style="color:#10B981;font-size:16px;line-height:0;">•</span>` : '';
      
      fullNavHTML += `        <a href="${item.slug}.html?v=${Date.now()}" class="catalog-nav-item ${activeClass}">
          <span class="uk-nav-icon">${item.icon}</span> ${item.title}
          <div style="margin-left:auto; display:flex; align-items:center; gap:6px;">
            <span class="nav-count" style="background:#F1F5F9; color:#64748B; font-size:10px; padding:2px 8px; border-radius:99px;">${compCount}</span>
            ${dotHTML}
          </div>
        </a>\n`;
    }
    fullNavHTML += `      </div>\n`;
  }

  const paydashNote = data.paydash ? `<div style="padding:12px 16px;background:rgba(59,130,246,0.08);border:1px solid rgba(59,130,246,0.15);border-radius:8px;margin-bottom:24px;font-size:13px;color:var(--color-info)"><strong>PayDash Source:</strong> ${data.paydash} — Styles and interaction patterns extracted from the original repository.</div>` : '';

  const familyHTML = data.families.map((fam, i) => {
    const modelLetter = String.fromCharCode(65 + i);
    let mockContent = getMockHTML(data.cat, fam, data.icon, slug);
    
    // ── DYNAMIC VARIANT ARCHITECTURE MUTATOR ──
    // Automatically tweaks structural HTML (padding, sizing, layout) based on the variant name
    if (fam.includes('Compact')) {
      mockContent = mockContent.replace(/padding:(\d+)px/g, (m, p1) => `padding:${Math.max(4, parseInt(p1) - 10)}px`);
      mockContent = mockContent.replace(/font-size:(\d+)px/g, (m, p1) => `font-size:${Math.max(10, parseInt(p1) - 2)}px`);
      mockContent = mockContent.replace(/width:([0-9.]+)px/g, (m, p1) => `width:${Math.max(16, parseFloat(p1) * 0.8)}px`);
      mockContent = mockContent.replace(/gap:(\d+)px/g, (m, p1) => `gap:${Math.max(2, parseInt(p1) - 6)}px`);
    } else if (fam.includes('Expanded') || fam.includes('Large')) {
      mockContent = mockContent.replace(/padding:(\d+)px/g, (m, p1) => `padding:${parseInt(p1) + 12}px`);
      mockContent = mockContent.replace(/font-size:(\d+)px/g, (m, p1) => `font-size:${parseInt(p1) + 4}px`);
      mockContent = mockContent.replace(/gap:(\d+)px/g, (m, p1) => `gap:${parseInt(p1) + 8}px`);
    } else if (fam.includes('Ghost')) {
      mockContent = mockContent.replace(/background:[^;"]+;/g, 'background:transparent;');
      mockContent = mockContent.replace(/background-color:[^;"]+;/g, 'background-color:transparent;');
      mockContent = mockContent.replace(/border:[^;"]+;/g, 'border:2px dashed #CBD5E1;');
      mockContent = mockContent.replace(/box-shadow:[^;"]+;/g, 'box-shadow:none;');
    } else if (fam.includes('With Chart')) {
      mockContent = mockContent.replace(/(<div[^>]*>)/i, `$1<div style="width:100%;height:32px;display:flex;align-items:flex-end;gap:4px;margin-bottom:12px;border-bottom:1px solid #E2E8F0;padding-bottom:4px;"><div style="flex:1;background:#3B82F6;height:40%;border-radius:2px;"></div><div style="flex:1;background:#3B82F6;height:70%;border-radius:2px;"></div><div style="flex:1;background:#10B981;height:100%;border-radius:2px;"></div></div>`);
    }
    const cardId = `card-${slug}-${modelLetter}`;
    
    return `
        <div class="component-card" id="${cardId}" style="border: 1px solid #E2E8F0; border-radius: 20px; overflow: hidden; background: #fff; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);">
          
          <!-- Premium Dark Header -->
          <div class="component-card-header" style="background: linear-gradient(180deg, #18181B 0%, #09090B 100%); padding: 14px 20px; display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid #27272A;">
            <div style="display: flex; align-items: center; gap: 14px;">
              <div style="background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.08); padding: 5px 12px; border-radius: 6px;">
                <span class="component-card-id" style="font-family: monospace; font-size: 11px; font-weight: 600; color: #60A5FA; letter-spacing: 0.05em;">${slug.toUpperCase().replace(/-/g, '')}-${modelLetter}</span>
              </div>
              <span class="component-card-model" style="font-size: 14px; font-weight: 600; color: #A5B4FC;">${fam}</span>
            </div>
            
            <button style="width: 28px; height: 28px; border-radius: 50%; background: rgba(255,255,255,0.08); border: none; display: flex; align-items: center; justify-content: center; color: #71717A; cursor: pointer; transition: all 0.2s;" onmouseover="this.style.background='rgba(255,255,255,0.15)';this.style.color='#fff'" onmouseout="this.style.background='rgba(255,255,255,0.08)';this.style.color='#71717A'">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 6L6 18M6 6l12 12"></path></svg>
            </button>
          </div>

          <!-- Preview Area -->
          <div class="component-card-preview" id="${cardId}-preview" style="min-height: 260px; display: flex; align-items: center; justify-content: center; background: #FAFAFA; padding: 40px 32px; transition: background 0.3s ease;">
            ${mockContent}
          </div>

          <!-- Bottom Preview Toolbar -->
          <div class="component-card-toolbar" style="display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; padding: 16px 20px; background: #fff; border-top: 1px solid #F1F5F9; border-bottom-left-radius: 20px; border-bottom-right-radius: 20px; gap: 16px;">
            <div style="display: flex; align-items: center; gap: 12px; flex: 1; min-width: max-content;">
              <span style="font-size: 11px; font-weight: 800; color: #94A3B8; letter-spacing: 0.1em; text-transform: uppercase;">Preview</span>
              <div style="display: flex; padding: 4px; border-radius: 12px; border: 1px solid #E2E8F0; background: #fff;">
                <button onclick="setInlineCardBg(this, '${cardId}-preview', '#FFFFFF')" class="inline-bg-btn active paydash-3d-btn" style="padding: 8px 16px; border: none; border-radius: 8px !important; font-size: 13px; font-weight: 700; cursor: pointer;">Light</button>
                <button onclick="setInlineCardBg(this, '${cardId}-preview', '#0F172A')" class="inline-bg-btn" style="padding: 8px 16px; background: transparent; color: #475569; border: none; border-radius: 8px; font-size: 13px; font-weight: 700; cursor: pointer; transition: all 0.2s;">Dark</button>
                <button onclick="setInlineCardBg(this, '${cardId}-preview', '#F1F5F9')" class="inline-bg-btn" style="padding: 8px 16px; background: transparent; color: #475569; border: none; border-radius: 8px; font-size: 13px; font-weight: 700; cursor: pointer; transition: all 0.2s;">Grey</button>
              </div>
            </div>
            <div style="display: flex; align-items: center; gap: 12px;">
              <span style="font-size: 11px; font-weight: 800; color: #94A3B8; letter-spacing: 0.1em; text-transform: uppercase;">Viewport</span>
              <button onclick="toggleInlineMobileView(this, '${cardId}-preview')" class="paydash-3d-btn" style="display: flex; align-items: center; gap: 8px; padding: 10px 16px; border: none; border-radius: 10px !important; font-size: 13px; font-weight: 700; cursor: pointer;">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="5" y="2" width="14" height="20" rx="3" ry="3"/></svg>
                <span>Mobile View</span>
              </button>
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
    <div class="catalog-sidebar-header" style="margin-bottom: 24px; display:flex; flex-direction:column; gap:16px;">
      <div style="display: flex; align-items: center; gap: 16px;">
        <div style="width: 48px; height: 48px; background: #111; color: #fff; border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 20px; font-weight: 800; font-family: sans-serif;">R</div>
        <div style="display: flex; flex-direction: column;">
          <span style="font-size: 22px; font-weight: 800; color: #0F172A; letter-spacing: -0.02em; line-height: 1.1;">Rentenpe</span>
          <span style="font-size: 11px; font-weight: 600; color: #94A3B8; letter-spacing: 0.05em; text-transform: uppercase; margin-top: 2px;">DESIGN SYSTEM V1.0</span>
        </div>
      </div>
      <div class="sidebar-search" style="position: relative;">
        <span style="position: absolute; left: 12px; top: 50%; transform: translateY(-50%); font-size: 14px; color: #94A3B8;">🔍</span>
        <input type="text" placeholder="Search components..." style="width: 100%; padding: 12px 12px 12px 36px; background: #F1F5F9; border: 1px solid #E2E8F0; border-radius: 12px; font-size: 14px; outline: none; transition: border-color 0.2s;">
      </div>
    </div>
    <nav class="catalog-nav">
${fullNavHTML}
    </nav>
    <div class="catalog-sidebar-footer" style="padding-top: 16px;">
      <button onclick="window.openThemePicker()" style="width: 100%; margin-bottom: 16px; padding: 12px; background: #FFF; border: 1px solid #E2E8F0; border-radius: 12px; color: #0F172A; font-weight: 700; font-size: 14px; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 8px; box-shadow: 0 1px 2px rgba(0,0,0,0.05);">
        🎨 Customize Colors
      </button>
      <div style="background: #F1F5F9; border-radius: 99px; padding: 4px; display: flex; gap: 4px; position: relative;">
        <div style="flex: 1; text-align: center; padding: 8px; font-size: 13px; font-weight: 600; color: #0F172A; background: #FFF; border-radius: 99px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 6px;">
          <span style="font-size: 14px;">☀️</span> Light
        </div>
        <div style="flex: 1; text-align: center; padding: 8px; font-size: 13px; font-weight: 500; color: #64748B; border-radius: 99px; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 6px;">
          <span style="font-size: 14px;">🌙</span> Dark
        </div>
      </div>
    </div>
  </aside>

  <main class="catalog-main" style="background: #F8FAFC; padding: 48px;">
    
    <!-- Screenshot 2: Bolder Header Layout -->
    <div class="catalog-page-header" style="margin-bottom: 48px;">
      <h1 class="catalog-page-title" style="font-size: 48px; font-weight: 800; color: #0F172A; letter-spacing: -0.03em; margin: 0 0 16px 0;">${data.title}</h1>
      <p class="catalog-page-description" style="font-size: 20px; color: #64748B; margin: 0 0 32px 0; max-width: 800px; line-height: 1.5;"><strong>${data.families.length} variants.</strong> ${data.desc} Exactly recreated and perfectly constrained for the Rentenpe mobile application viewport.</p>
      
      <div style="display: inline-block; background: #F1F5F9; border-radius: 6px; padding: 4px 12px; font-family: monospace; font-size: 13px; font-weight: 600; color: #94A3B8; letter-spacing: 0.05em; margin-bottom: 16px;">
        ${slug.toUpperCase().replace(/-/g, '')}
      </div>
      <h2 style="font-size: 24px; font-weight: 700; color: #0F172A; margin: 0;">Global Monitoring System</h2>
    </div>

    ${paydashNote}

    <!-- Component Variants Grid -->
    <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 24px;">
      <h2 style="font-size: 20px; font-weight: 700; color: #0F172A; margin: 0;">All Variants</h2>
      <div style="font-size: 13px; color: #64748B;">${data.families.length} models</div>
    </div>

    <section class="component-section">
      <div class="component-grid">
${familyHTML}
      </div>
    </section>
  </main>

  <!-- Global Color Theme Picker Overlay -->
  <div id="themePickerOverlay" style="display:none; position:fixed; top:0; left:0; right:0; bottom:0; background:rgba(15, 23, 42, 0.4); backdrop-filter: blur(4px); -webkit-backdrop-filter: blur(4px); z-index:9999; align-items:center; justify-content:center;">
    <div style="background:#fff; border-radius:16px; padding:40px; width:100%; max-width:440px; box-shadow:0 25px 50px -12px rgba(0,0,0,0.25);">
      <h3 style="margin:0 0 12px 0; font-size:24px; font-weight:800; color:#0F172A; letter-spacing:-0.02em;">Theme Customization</h3>
      <p style="margin:0 0 32px 0; color:#64748B; font-size:16px;">Select the global color palette for the UI Kit.</p>
      
      <div style="display:flex; flex-direction:column; gap:24px; margin-bottom:40px;">
        <label style="display:flex; justify-content:space-between; align-items:center; font-size:16px; font-weight:600; color:#0F172A; cursor:pointer;">
          Primary Color
          <div style="padding: 2px; border: 1px solid #E2E8F0; border-radius: 4px; display: flex;">
            <input type="color" id="primaryColorInput" value="#0F172A" style="width:44px; height:44px; padding:0; border:none; cursor:pointer; border-radius: 2px;">
          </div>
        </label>
        <label style="display:flex; justify-content:space-between; align-items:center; font-size:16px; font-weight:600; color:#0F172A; cursor:pointer;">
          Secondary (Accent)
          <div style="padding: 2px; border: 1px solid #E2E8F0; border-radius: 4px; display: flex;">
            <input type="color" id="secondaryColorInput" value="#3B82F6" style="width:44px; height:44px; padding:0; border:none; cursor:pointer; border-radius: 2px;">
          </div>
        </label>
        <label style="display:flex; justify-content:space-between; align-items:center; font-size:16px; font-weight:600; color:#0F172A; cursor:pointer;">
          Success
          <div style="padding: 2px; border: 1px solid #E2E8F0; border-radius: 4px; display: flex;">
            <input type="color" id="successColorInput" value="#10B981" style="width:44px; height:44px; padding:0; border:none; cursor:pointer; border-radius: 2px;">
          </div>
        </label>
        <label style="display:flex; justify-content:space-between; align-items:center; font-size:16px; font-weight:600; color:#0F172A; cursor:pointer;">
          Warning
          <div style="padding: 2px; border: 1px solid #E2E8F0; border-radius: 4px; display: flex;">
            <input type="color" id="warningColorInput" value="#F59E0B" style="width:44px; height:44px; padding:0; border:none; cursor:pointer; border-radius: 2px;">
          </div>
        </label>
      </div>

      <button onclick="window.applyGlobalTheme()" style="width:100%; padding:16px; background:#0F172A; color:#fff; border:none; border-radius:12px; font-weight:700; font-size: 16px; cursor:pointer; transition: background 0.2s;" onmouseover="this.style.background='#1E293B'" onmouseout="this.style.background='#0F172A'">Apply Globally</button>
    </div>
  </div>
  <script>
    // Init local storage theme
    function initTheme() {
      const storedPrimary = localStorage.getItem('theme_primary');
      const storedSecondary = localStorage.getItem('theme_secondary');
      const storedSuccess = localStorage.getItem('theme_success');
      const storedWarning = localStorage.getItem('theme_warning');
      
      if (storedPrimary) { document.documentElement.style.setProperty('--color-primary', storedPrimary); document.getElementById('primaryColorInput').value = storedPrimary; }
      if (storedSecondary) { document.documentElement.style.setProperty('--color-info', storedSecondary); document.getElementById('secondaryColorInput').value = storedSecondary; }
      if (storedSuccess) { document.documentElement.style.setProperty('--color-success', storedSuccess); document.getElementById('successColorInput').value = storedSuccess; }
      if (storedWarning) { document.documentElement.style.setProperty('--color-warning', storedWarning); document.getElementById('warningColorInput').value = storedWarning; }
    }
    initTheme();

    window.openThemePicker = function() {
      document.getElementById('themePickerOverlay').style.display = 'flex';
    }

    window.applyGlobalTheme = function() {
      const p = document.getElementById('primaryColorInput').value;
      const s = document.getElementById('secondaryColorInput').value;
      const suc = document.getElementById('successColorInput').value;
      const w = document.getElementById('warningColorInput').value;
      
      document.documentElement.style.setProperty('--color-primary', p);
      document.documentElement.style.setProperty('--color-text-primary', p);
      document.documentElement.style.setProperty('--color-info', s);
      document.documentElement.style.setProperty('--color-success', suc);
      document.documentElement.style.setProperty('--color-warning', w);
      
      localStorage.setItem('theme_primary', p);
      localStorage.setItem('theme_secondary', s);
      localStorage.setItem('theme_success', suc);
      localStorage.setItem('theme_warning', w);
      
      document.getElementById('themePickerOverlay').style.display = 'none';
    }
  </script>
</div>
</body>
</html>`;
}

// Do not overwrite the ones we specifically built manually that are over 10KB
const DO_NOT_OVERWRITE = [
  'buttons.html', 'toast.html', 'modal.html', 'infographics.html', 
  'mobile-charts.html', 'rewards.html', 'text-inputs.html', 
  'metric-cards.html', 'points-display.html'
];

let updated = 0;
for (const [slug, data] of Object.entries(ALL_PAGES)) {
  if (DO_NOT_OVERWRITE.includes(slug + '.html')) continue;
  
  const filePath = path.join(PAGES_DIR, `${slug}.html`);
  fs.writeFileSync(filePath, generatePage(slug, data));
  updated++;
}
console.log(`Done: ${updated} rich stub pages updated.`);
