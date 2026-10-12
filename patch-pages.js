const fs = require('fs');

const replacement = `const ALL_PAGES = {
  // Foundations
  'typography': { cat: 'Foundations', title: 'Typography', desc: 'Type scale, font families, and text styles.', icon: '🔤', families: ['Type Scale', 'Font Weights', 'Text Colors', 'Display Headings', 'Paragraph Styles', 'Monospace Fonts'] },
  'colors': { cat: 'Foundations', title: 'Colors & Tokens', desc: 'Complete color system with semantic tokens.', icon: '🎨', families: ['Primary Palette', 'Semantic Colors', 'Surface Colors', 'Brand Gradients', 'Background Opacities', 'State Colors'] },
  'spacing': { cat: 'Foundations', title: 'Spacing & Grid', desc: 'Spacing scale and grid system.', icon: '📐', families: ['Spacing Scale', 'Grid System', 'Breakpoints', 'Padding Tokens', 'Margin Utility', 'Gap Scale'] },
  'dividers': { cat: 'Foundations', title: 'Dividers', desc: 'Horizontal and vertical separators.', icon: '➖', families: ['Solid Divider', 'Dashed Divider', 'Labeled Divider', 'Vertical Rule', 'Dotted Line', 'Gradient Divider'] },
  'icons': { cat: 'Foundations', title: 'Icons & Symbols', desc: 'Icon library and symbol set.', icon: '✨', families: ['Action Icons', 'Status Icons', 'Navigation Icons', 'File Icons', 'Payment Icons', 'Social Icons'] },
  'containers': { cat: 'Foundations', title: 'Containers', desc: 'Layout containers and wrappers.', icon: '📦', families: ['Standard Card', 'Glass Card', 'Elevated Card', 'Outlined Container', 'Scrollable Box', 'Responsive Grid'] },
  
  // Actions
  'links': { cat: 'Actions', title: 'Text & Link Actions', desc: 'Inline text links and action text.', icon: '🔗', families: ['Standard Link', 'Action Link', 'Destructive Link', 'External Link', 'Underlined Nav', 'Disabled Link'] },
  'fab': { cat: 'Actions', title: 'Floating Actions', desc: 'Floating action buttons.', icon: '⊕', families: ['Standard FAB', 'Extended FAB', 'Mini FAB', 'Animated FAB', 'Bottom Corner FAB', 'Menu FAB'] },
  
  // Inputs
  'search-inputs': { cat: 'Inputs', title: 'Search Input', desc: 'Search fields with suggestions.', icon: '🔍', families: ['Standard Search', 'Expandable Search', 'Search with Filters', 'Recent Searches', 'Voice Search', 'Global Search'] },
  'email-inputs': { cat: 'Inputs', title: 'Email Input', desc: 'Email fields with validation.', icon: '📧', families: ['Standard Email', 'Email with Domain', 'Multi Email', 'Validated Email', 'Work Email Only', 'Newsletter Signup'] },
  'phone-inputs': { cat: 'Inputs', title: 'Phone Input', desc: 'Phone number fields with country code.', icon: '📱', families: ['Standard Phone', 'With Country Picker', 'Split Phone', 'Verified Phone', 'Mobile Only', 'Toll Free Format'] },
  'password-inputs': { cat: 'Inputs', title: 'Password Input', desc: 'Password fields with strength meter.', icon: '🔒', families: ['Standard Password', 'With Strength Meter', 'With Requirements', 'Pin Code Fallback', 'Show/Hide Toggle', 'Confirm Password'] },
  'number-inputs': { cat: 'Inputs', title: 'Number Input', desc: 'Number fields with steppers.', icon: '🔢', families: ['Standard Number', 'With Stepper', 'Quantity Selector', 'Slider Bound', 'Decimals Allowed', 'Large Counter'] },
  'currency-inputs': { cat: 'Inputs', title: 'Currency Input', desc: 'Currency amount fields with symbol.', icon: '💰', families: ['Standard Currency', 'Multi Currency', 'Amount Range', 'Crypto Input', 'Exchange Rate', 'Tip Calculator'] },
  'textarea': { cat: 'Inputs', title: 'Textarea', desc: 'Multi-line text areas.', icon: '📄', families: ['Standard Textarea', 'Auto Resize', 'With Character Count', 'Code Editor', 'Comment Box', 'Markdown Support'] },
  'date-inputs': { cat: 'Inputs', title: 'Date Field', desc: 'Date picker inputs.', icon: '📅', families: ['Standard Date', 'Date Range', 'Date with Time', 'Calendar Dropdown', 'Birthdate Picker', 'Fiscal Year'] },
  'otp-inputs': { cat: 'Inputs', title: 'OTP / PIN', desc: 'One-time password and PIN entry.', icon: '🔑', families: ['4 Digit OTP', '6 Digit OTP', 'Alphanumeric Code', 'Hidden PIN', 'SMS Autofill', 'Secure Pad'] },
  'masked-inputs': { cat: 'Inputs', title: 'Masked Input', desc: 'Inputs with format masks.', icon: '🎭', families: ['Card Number Mask', 'SSN Mask', 'Custom Pattern', 'License Plate', 'IP Address', 'MAC Address'] },
  'file-upload': { cat: 'Inputs', title: 'File Upload', desc: 'File upload and drag-drop zones.', icon: '📤', families: ['Drop Zone', 'Button Upload', 'Multi File', 'Image Crop', 'PDF Only', 'Cloud Picker'] },
  'autocomplete': { cat: 'Inputs', title: 'Autocomplete', desc: 'Type-ahead suggestion fields.', icon: '💡', families: ['Standard Autocomplete', 'With Categories', 'Multi Value', 'Async Fetch', 'Highlight Match', 'Command Menu'] },
  'time-picker': { cat: 'Inputs', title: 'Time Picker', desc: 'Time selection controls.', icon: '🕐', families: ['Standard Time', 'Time Range', 'Duration Picker', '24 Hour Format', 'Timezone Select', 'Meeting Slot'] },
  'color-picker': { cat: 'Inputs', title: 'Color Picker', desc: 'Color selection widgets.', icon: '🌈', families: ['Swatch Grid', 'Spectrum Picker', 'Hex Input', 'RGBA Sliders', 'Brand Colors', 'Eyedropper'] },
  'star-rating': { cat: 'Inputs', title: 'Star Rating', desc: 'Star-based rating input.', icon: '⭐', families: ['5 Star Rating', 'Emoji Rating', 'Slider Rating', 'Half Stars', 'Feedback Prompt', 'NPS Score'] },
  'tags-input': { cat: 'Inputs', title: 'Tags Input', desc: 'Tag creation and management.', icon: '🏷️', families: ['Standard Tags', 'Autocomplete Tags', 'Removable Tags', 'Colored Tags', 'Max Limit', 'Drag Reorder'] },
  'rich-text': { cat: 'Inputs', title: 'Rich Text Editor', desc: 'Rich text editing toolbar.', icon: '📝', families: ['Basic Editor', 'Full Toolbar', 'Markdown Editor', 'Notion Style', 'Inline Bubble', 'Read Only'] },
  'signature-pad': { cat: 'Inputs', title: 'Signature Pad', desc: 'Digital signature capture.', icon: '✍️', families: ['Standard Pad', 'Typed Signature', 'Upload Signature', 'Legal Checkbox', 'DocuSign Style', 'Clear Button'] },
  'form-fields': { cat: 'Inputs', title: 'Form Fields', desc: 'Complete form field wrappers.', icon: '📋', families: ['Stacked Field', 'Horizontal Field', 'Inline Field', 'Floating Label', 'Helper Text', 'Error State'] },
  'inline-edit': { cat: 'Inputs', title: 'Inline Edit', desc: 'Click-to-edit inline fields.', icon: '✏️', families: ['Text Inline Edit', 'Select Inline Edit', 'Multi Line Edit', 'Hover Highlight', 'Table Cell Edit', 'Double Click'] },
  
  // Selection
  'checkbox': { cat: 'Selection', title: 'Checkbox', desc: 'Single and group checkboxes.', icon: '☑️', families: ['Standard Checkbox', 'Indeterminate', 'Checkbox Group', 'Card Checkbox', 'List Checkbox', 'Custom Icon'] },
  'radio': { cat: 'Selection', title: 'Radio Group', desc: 'Exclusive selection controls.', icon: '🔘', families: ['Standard Radio', 'Card Radio', 'Button Radio', 'Inline Radio', 'Image Radio', 'Nested Radio'] },
  'toggle': { cat: 'Selection', title: 'Toggle / Switch', desc: 'On/off binary controls.', icon: '🔀', families: ['Standard Toggle', 'With Label', 'Grouped Toggles', 'Icon Toggle', 'Large Switch', 'iOS Style'] },
  'slider': { cat: 'Selection', title: 'Slider / Range', desc: 'Value range selectors.', icon: '🎚️', families: ['Standard Slider', 'Range Slider', 'Step Slider', 'Vertical Slider', 'Volume Control', 'Price Range'] },
  'adornments': { cat: 'Selection', title: 'Input Adornments', desc: 'Input prefix/suffix decorations.', icon: '🎀', families: ['Icon Adornment', 'Text Adornment', 'Action Adornment', 'Loading Spinner', 'Clear Button', 'Tooltip Icon'] },
  
  // Dropdowns
  'select': { cat: 'Dropdowns', title: 'Standard Select', desc: 'Single value dropdown.', icon: '📋', families: ['Standard Select', 'With Icons', 'Grouped Options', 'Native Select', 'Floating Menu', 'Country Select'] },
  'searchable-select': { cat: 'Dropdowns', title: 'Searchable Select', desc: 'Filterable dropdown.', icon: '🔎', families: ['Standard Searchable', 'With Create', 'Async Search', 'Virtual Scroll', 'Fuzzy Match', 'Category Search'] },
  'multi-select': { cat: 'Dropdowns', title: 'Multi Select', desc: 'Multiple value selection.', icon: '☑️', families: ['Checkbox Multi', 'Chip Multi', 'Tree Multi', 'Select All Option', 'Limited Selection', 'Drag Sort'] },
  'property-selector': { cat: 'Dropdowns', title: 'Property Selector', desc: 'Property-specific selector.', icon: '🏠', families: ['Standard Property', 'With Preview', 'Map Selector', 'Recent Properties', 'Grid View', 'List View'] },
  'filter-dropdown': { cat: 'Dropdowns', title: 'Filter Dropdown', desc: 'Preset filter menus.', icon: '🔻', families: ['Standard Filter', 'Multi Filter', 'Date Filter', 'Range Filter', 'Boolean Filter', 'Saved Filters'] },
  'sort-dropdown': { cat: 'Dropdowns', title: 'Sort Dropdown', desc: 'Sort order menus.', icon: '↕️', families: ['Standard Sort', 'With Direction', 'Multi Sort', 'Table Header Sort', 'Priority Sort', 'Drag Handle'] },

  // Navigation
  'sidebar': { cat: 'Navigation', title: 'Side Navigation', desc: 'Collapsible sidebar with groups.', icon: '📂', families: ['Full Sidebar', 'Collapsed Sidebar', 'Mobile Sidebar', 'Floating Sidebar', 'Multi Level', 'Mini Rail'] },
  'topbar': { cat: 'Navigation', title: 'Top Bar / Header', desc: 'App header with actions.', icon: '📌', families: ['Standard Header', 'With Search', 'Breadcrumb Header', 'Transparent Header', 'Sticky Header', 'Mega Header'] },
  'breadcrumbs': { cat: 'Navigation', title: 'Breadcrumbs', desc: 'Path navigation trail.', icon: '🥖', families: ['Standard Crumbs', 'With Icons', 'Collapsed Crumbs', 'Slash Separator', 'Chevron Separator', 'Current Page'] },
  'tabs': { cat: 'Navigation', title: 'Page Tabs', desc: 'Content switching tabs.', icon: '📑', families: ['Standard Tabs', 'Underline Tabs', 'Pill Tabs', 'Vertical Tabs', 'Icon Tabs', 'Full Width Tabs'] },
  'segmented': { cat: 'Navigation', title: 'Segmented Control', desc: 'Toggle between views.', icon: '⊞', families: ['Standard Segment', 'Icon Segment', 'Full Width', 'Small Segment', 'Dark Theme', 'Animated Switch'] },
  'tabbar': { cat: 'Navigation', title: 'Tab Bar Nav', desc: 'Mobile bottom navigation.', icon: '📱', families: ['Standard Tab Bar', 'With Badge', 'Floating Tab Bar', 'Curved Tab Bar', 'Icon Only', 'Labels Below'] },
  'pagination': { cat: 'Navigation', title: 'Pagination', desc: 'Page number navigation.', icon: '📄', families: ['Standard Pagination', 'Simple Prev/Next', 'Load More', 'Infinite Scroll', 'Compact Dots', 'Numbered List'] },
  'stepper': { cat: 'Navigation', title: 'Stepper', desc: 'Multi-step progress.', icon: '🪜', families: ['Horizontal Stepper', 'Vertical Stepper', 'Dot Stepper', 'Numbered Stepper', 'Icon Stepper', 'Linear Progress'] },
  'back-next': { cat: 'Navigation', title: 'Back / Next', desc: 'Sequential navigation.', icon: '↔️', families: ['Standard Nav', 'With Preview', 'Wizard Nav', 'Floating Arrows', 'Bottom Bar', 'Swipe Gestures'] },
  'header-utils': { cat: 'Navigation', title: 'Header Utilities', desc: 'Header action buttons.', icon: '🔔', families: ['Notification Bell', 'Search Toggle', 'User Menu', 'Language Selector', 'Theme Toggle', 'Help Icon'] },
  'lifecycle-nav': { cat: 'Navigation', title: 'Lifecycle Nav', desc: 'Process lifecycle navigation.', icon: '🔄', families: ['Standard Lifecycle', 'Vertical Lifecycle', 'Interactive', 'Stage Gates', 'Milestones', 'Linear Flow'] },
  'footer': { cat: 'Navigation', title: 'Footer', desc: 'Page and app footers.', icon: '📎', families: ['Standard Footer', 'Minimal Footer', 'With Links', 'Social Footer', 'Legal Footer', 'Sitemap'] },
  'quick-actions': { cat: 'Navigation', title: 'Quick Actions', desc: 'Speed dial and shortcuts.', icon: '⚡', families: ['Speed Dial', 'Action Grid', 'Shortcut Bar', 'Floating Menu', 'Swipe Actions', 'Command K'] },

  // Menus
  'context-menu': { cat: 'Menus', title: 'Context Menu', desc: 'Right-click context menus.', icon: '⋮', families: ['Standard Context', 'With Icons', 'Nested Context', 'Destructive Action', 'Divider', 'Keyboard Hints'] },
  'profile-menu': { cat: 'Menus', title: 'Profile Menu', desc: 'User profile dropdown.', icon: '👤', families: ['Standard Profile', 'With Avatar', 'Extended Profile', 'Workspace Switcher', 'Status Picker', 'Account Settings'] },
  'command-palette': { cat: 'Menus', title: 'Command Palette', desc: 'Keyboard-first command search.', icon: '⌘', families: ['Standard Palette', 'With Categories', 'AI Enhanced', 'Recent Commands', 'Fuzzy Search', 'Action Preview'] },
  'mega-menu': { cat: 'Menus', title: 'Mega Menu', desc: 'Large navigation menus.', icon: '📊', families: ['Column Mega', 'With Icons', 'With Featured', 'Hover Trigger', 'Image Cards', 'Deep Links'] },
  'nested-menu': { cat: 'Menus', title: 'Nested Menu', desc: 'Multi-level submenus.', icon: '📂', families: ['Standard Nested', 'Hover Expand', 'Accordion', 'Drilldown', 'Flyout', 'Tree View'] },
  'action-sheet': { cat: 'Menus', title: 'Action Sheet', desc: 'iOS-style action sheets.', icon: '📱', families: ['Standard Actions', 'With Icons', 'Destructive Actions', 'Cancel Button', 'Share Sheet', 'Grid Actions'] },

  // Data Display
  'badges': { cat: 'Data Display', title: 'Status Badges', desc: 'Status indicator badges.', icon: '🏅', families: ['Standard Badge', 'Dot Badge', 'Outlined Badge', 'Pill Badge', 'Square Badge', 'Icon Badge'] },
  'metadata-chips': { cat: 'Data Display', title: 'Metadata Chips', desc: 'Key-value metadata chips.', icon: '🏷️', families: ['Standard Chip', 'With Icon', 'Dismissible', 'Avatar Chip', 'Color Coded', 'Filter Chip'] },
  'filter-chips': { cat: 'Data Display', title: 'Filter Chips', desc: 'Active filter indicators.', icon: '🔖', families: ['Standard Filter', 'Toggle Filter', 'Group Filter', 'Clear All', 'Count Badge', 'Sort Chip'] },
  'action-chips': { cat: 'Data Display', title: 'Action Chips', desc: 'Actionable chip buttons.', icon: '⚡', families: ['Standard Action', 'With Icon', 'Outlined Action', 'Elevated Chip', 'Dropdown Chip', 'Toggle Chip'] },
  'count-badge': { cat: 'Data Display', title: 'Count Badge', desc: 'Numeric count indicators.', icon: '🔴', families: ['Standard Count', 'Dot Only', 'Animated Count', 'Over 99+', 'Zero State', 'Inverse Colors'] },
  'dot-indicator': { cat: 'Data Display', title: 'Dot Indicator', desc: 'Status dot indicators.', icon: '●', families: ['Color Dot', 'Pulsing Dot', 'Labeled Dot', 'Hollow Dot', 'Online Dot', 'Offline Dot'] },
  'avatars': { cat: 'Data Display', title: 'Avatars', desc: 'User avatar components.', icon: '👤', families: ['Image Avatar', 'Initials Avatar', 'Avatar Group', 'Status Avatar', 'Fallback Icon', 'Square Avatar'] },
  'verified-tag': { cat: 'Data Display', title: 'Verified Tags', desc: 'Verification status indicators.', icon: '✅', families: ['Verified Badge', 'Trust Seal', 'Certification', 'KYC Check', 'Official Brand', 'Premium User'] },

  // Lists
  'list-rows': { cat: 'Lists', title: 'Standard List', desc: 'Standard list rows.', icon: '📋', families: ['Simple List', 'With Metadata', 'With Actions', 'Icon List', 'Avatar List', 'Divided List'] },
  'compact-list': { cat: 'Lists', title: 'Compact List', desc: 'Dense list rows.', icon: '📑', families: ['Standard Compact', 'With Checkbox', 'With Avatar', 'No Dividers', 'Action Icons', 'Zebra Stripes'] },
  'timeline': { cat: 'Lists', title: 'Activity Timeline', desc: 'Chronological event timeline.', icon: '📅', families: ['Standard Timeline', 'Grouped Timeline', 'Interactive Timeline', 'Opposite Content', 'Icon Nodes', 'Dashed Line'] },
  'grouped-list': { cat: 'Lists', title: 'Grouped List', desc: 'Categorized list sections.', icon: '📂', families: ['Standard Grouped', 'Collapsible', 'Sticky Headers', 'A-Z Index', 'Date Groups', 'Status Groups'] },
  'swipeable-list': { cat: 'Lists', title: 'Swipeable List', desc: 'Swipe-to-reveal actions.', icon: '👆', families: ['Swipe Delete', 'Swipe Actions', 'Swipe Archive', 'Both Sides', 'Threshold Trigger', 'Elastic Scroll'] },
  'expandable-list': { cat: 'Lists', title: 'Expandable List', desc: 'Accordion list items.', icon: '📖', families: ['Standard Expand', 'With Preview', 'Multi Expand', 'Chevron Icon', 'Plus Minus', 'Animated Reveal'] },

  // Tables
  'data-table': { cat: 'Tables', title: 'Standard Table', desc: 'Full-featured data table.', icon: '📊', families: ['Standard Table', 'Sortable Table', 'Selectable Table', 'Pagination', 'Sticky Header', 'Row Actions'] },
  'compact-table': { cat: 'Tables', title: 'Compact Table', desc: 'Dense data table.', icon: '📉', families: ['Standard Compact', 'With Inline Edit', 'Minimal', 'Bordered', 'Zebra Striped', 'Hover Rows'] },
  'responsive-table': { cat: 'Tables', title: 'Responsive Table', desc: 'Mobile-friendly tables.', icon: '📱', families: ['Card Stack', 'Horizontal Scroll', 'Priority Columns', 'Accordion Rows', 'List View', 'Grid View'] },
  'table-toolbar': { cat: 'Tables', title: 'Table Toolbar', desc: 'Table action toolbar.', icon: '🔧', families: ['Standard Toolbar', 'With Bulk Actions', 'Filter Toolbar', 'Search Bar', 'Export Button', 'Column Toggle'] },
  'expandable-row': { cat: 'Tables', title: 'Expandable Row', desc: 'Table rows with detail expansion.', icon: '📖', families: ['Standard Expand', 'With Sub Table', 'Accordion Row', 'Detail Card', 'Inline Form', 'Preview Pane'] },
  'editable-table': { cat: 'Tables', title: 'Editable Table', desc: 'Inline-editable table cells.', icon: '✏️', families: ['Cell Edit', 'Row Edit', 'Full Edit Mode', 'Validation', 'Save Cancel', 'Batch Edit'] },

  // Cards
  'entity-cards': { cat: 'Cards', title: 'Entity Cards', desc: 'Property and entity display cards.', icon: '🏢', families: ['Standard Entity', 'With Status', 'Compact Entity', 'Image Gallery', 'Map View', 'Pricing Info'] },
  'report-cards': { cat: 'Cards', title: 'Report Cards', desc: 'Report summary cards.', icon: '📋', families: ['Standard Report', 'With Chart', 'Download Report', 'Key Metrics', 'Date Range', 'Comparison'] },
  'service-cards': { cat: 'Cards', title: 'Service Cards', desc: 'Service feature cards.', icon: '🛎️', families: ['Standard Service', 'With CTA', 'Comparison', 'Icon Top', 'Horizontal Card', 'Pricing Tier'] },
  'membership-cards': { cat: 'Cards', title: 'Membership', desc: 'Membership tier display.', icon: '💳', families: ['Standard Tier', 'Premium Tier', 'Comparison Grid', 'Benefits List', 'Upgrade Button', 'Current Plan'] },
  'info-cards': { cat: 'Cards', title: 'Information', desc: 'Informational display cards.', icon: 'ℹ️', families: ['Standard Info', 'With Icon', 'Dismissible Info', 'Colored Background', 'Border Left', 'Quick Tips'] },
  'reward-cards': { cat: 'Cards', title: 'Reward Cards', desc: 'Reward and offer cards.', icon: '🎁', families: ['Standard Reward', 'Scratch Card', 'Coupon Card', 'Progress Bar', 'Claim Button', 'Expires Soon'] },
  'rm-cards': { cat: 'Cards', title: 'RM Contact', desc: 'Relationship manager cards.', icon: '🤝', families: ['Standard RM', 'With Schedule', 'Chat RM', 'Phone Call', 'Email Contact', 'Profile Photo'] },
  'profile-cards': { cat: 'Cards', title: 'Profile Cards', desc: 'User profile cards.', icon: '👤', families: ['Standard Profile', 'Compact Profile', 'Team Card', 'Social Links', 'Cover Image', 'Stats Grid'] },
  'pricing-cards': { cat: 'Cards', title: 'Pricing Cards', desc: 'Pricing plan cards.', icon: '💲', families: ['Standard Pricing', 'Highlighted Plan', 'Comparison', 'Annual Toggle', 'Feature List', 'CTA Button'] },
  'comparison-cards': { cat: 'Cards', title: 'Comparison', desc: 'Side-by-side comparison.', icon: '⚖️', families: ['Two Column', 'Multi Column', 'Feature Matrix', 'Winner Highlight', 'Checkmarks', 'Mobile Stack'] },
  'testimonial-cards': { cat: 'Cards', title: 'Testimonials', desc: 'User testimonial cards.', icon: '💬', families: ['Standard Quote', 'With Rating', 'Video Testimonial', 'Avatar Source', 'Company Logo', 'Carousel Item'] },
  'feature-cards': { cat: 'Cards', title: 'Feature Cards', desc: 'Feature highlight cards.', icon: '⭐', families: ['Standard Feature', 'With Illustration', 'Grid Feature', 'Hover Effect', 'Number Step', 'Dark Mode'] },
  'notification-cards': { cat: 'Cards', title: 'Notification', desc: 'Notification display cards.', icon: '🔔', families: ['Standard Notification', 'Grouped', 'Action Required', 'Unread Dot', 'Time Ago', 'Dismiss Button'] },

  // Overlays
  'bottom-sheet': { cat: 'Overlays', title: 'Bottom Sheet', desc: 'Mobile bottom drawer.', icon: '📱', families: ['Standard Sheet', 'With Handle', 'Full Screen', 'Scrollable Content', 'Fixed Footer', 'Sticky Header'] },
  'confirm-dialog': { cat: 'Overlays', title: 'Confirmation', desc: 'Destructive action confirmations.', icon: '❓', families: ['Standard Confirm', 'Danger Confirm', 'With Input', 'Double Check', 'Icon Header', 'Stacked Buttons'] },
  'form-modal': { cat: 'Overlays', title: 'Form Modal', desc: 'Form-containing modals.', icon: '📝', families: ['Standard Form', 'Multi Step', 'Side Panel Form', 'Scrollable Body', 'Fixed Actions', 'Validation Errors'] },
  'success-dialog': { cat: 'Overlays', title: 'Success Dialog', desc: 'Success confirmation dialogs.', icon: '✅', families: ['Standard Success', 'With Action', 'Animated', 'Confetti Drop', 'Auto Close', 'Next Steps'] },
  'warning-dialog': { cat: 'Overlays', title: 'Warning Dialog', desc: 'Warning and caution dialogs.', icon: '⚠️', families: ['Standard Warning', 'Blocking Warning', 'Timed Warning', 'Acknowledge Checkbox', 'Support Link', 'Yellow Accent'] },
  'fullscreen-dialog': { cat: 'Overlays', title: 'Fullscreen Dialog', desc: 'Full-screen modal views.', icon: '🖥️', families: ['Standard Full', 'With Header', 'Immersive', 'Image Viewer', 'Video Player', 'Complex Flow'] },
  'wizard-dialog': { cat: 'Overlays', title: 'Wizard Dialog', desc: 'Multi-step wizard modals.', icon: '🧙', families: ['Standard Wizard', 'With Sidebar', 'Linear Wizard', 'Progress Bar', 'Skip Button', 'Save Draft'] },
  'popover': { cat: 'Overlays', title: 'Popover', desc: 'Contextual floating panels.', icon: '💬', families: ['Standard Popover', 'With Arrow', 'Rich Popover', 'Form Popover', 'Action List', 'Hover Trigger'] },
  'tooltip': { cat: 'Overlays', title: 'Tooltip', desc: 'Informational hover tips.', icon: '💡', families: ['Standard Tooltip', 'Rich Tooltip', 'Interactive Tooltip', 'Delay Show', 'Arrow Pointer', 'Shortcut Hint'] },
  'lightbox': { cat: 'Overlays', title: 'Lightbox', desc: 'Image/media lightbox viewer.', icon: '🖼️', families: ['Standard Lightbox', 'Gallery Lightbox', 'Video Lightbox', 'Zoom Controls', 'Thumbnail Strip', 'Caption Overlay'] },

  // Feedback
  'alert-banner': { cat: 'Feedback', title: 'Alert Banner', desc: 'Full-width alert banners.', icon: '🚨', families: ['Info Banner', 'Warning Banner', 'Error Banner', 'Success Banner', 'Dismissible', 'Fixed Top'] },
  'empty-state': { cat: 'Feedback', title: 'Empty State', desc: 'No-data placeholder screens.', icon: '📭', families: ['Standard Empty', 'With Action', 'Illustrated Empty', 'Search Results', 'Inbox Empty', 'Cart Empty'] },
  'error-state': { cat: 'Feedback', title: 'Error State', desc: 'Error fallback displays.', icon: '❌', families: ['Standard Error', 'Network Error', 'Permission Error', '404 Page', '500 Page', 'Retry Button'] },
  'loading': { cat: 'Feedback', title: 'Loading Spinner', desc: 'Loading indicator animations.', icon: '⏳', families: ['Spinner', 'Dot Loading', 'Bar Loading', 'Logo Pulse', 'Skeleton Overlay', 'Percentage Text'] },
  'skeleton': { cat: 'Feedback', title: 'Skeleton Screen', desc: 'Content loading placeholders.', icon: '💀', families: ['Card Skeleton', 'List Skeleton', 'Table Skeleton', 'Profile Skeleton', 'Text Lines', 'Image Box'] },
  'progress-bar': { cat: 'Feedback', title: 'Progress Bar', desc: 'Progress indicator bars.', icon: '📊', families: ['Standard Progress', 'Segmented Progress', 'Circular Progress', 'Animated Stripes', 'Gradient Fill', 'With Label'] },
  'score-gauge': { cat: 'Feedback', title: 'Score Ring', desc: 'Circular score gauges.', icon: '🎯', families: ['Standard Ring', 'Gradient Ring', 'Multi Ring', 'Half Circle', 'Credit Score', 'Health Meter'] },
  'status-indicator': { cat: 'Feedback', title: 'Status Indicator', desc: 'Live status displays.', icon: '🟢', families: ['Dot Status', 'Badge Status', 'Timeline Status', 'Pulse Animation', 'Text Label', 'Offline Grey'] },
  'countdown': { cat: 'Feedback', title: 'Countdown', desc: 'Countdown timer displays.', icon: '⏱️', families: ['Standard Countdown', 'Flip Clock', 'Circular Countdown', 'Text Only', 'Urgency Red', 'Days Hours Mins'] },
  'confetti': { cat: 'Feedback', title: 'Confetti / Celebration', desc: 'Celebration animations.', icon: '🎉', families: ['Burst Confetti', 'Rain Confetti', 'Emoji Rain', 'Cannon Shoot', 'Subtle Sparkles', 'Full Screen'] },
  'connection-status': { cat: 'Feedback', title: 'Connection Status', desc: 'Network status indicators.', icon: '📶', families: ['Online/Offline', 'Signal Strength', 'Reconnecting', 'Syncing Data', 'Cloud Error', 'WiFi Icon'] },

  // States
  'state-offline': { cat: 'States', title: 'Offline State', desc: 'No-connection fallback.', icon: '📵', families: ['Standard Offline', 'Cached View', 'Retry Prompt', 'Banner Alert', 'Greyed Out', 'Download Prompt'] },
  'state-locked': { cat: 'States', title: 'Locked State', desc: 'Permission-restricted view.', icon: '🔒', families: ['Standard Locked', 'Upgrade Prompt', 'Request Access', 'Blur Overlay', 'Padlock Icon', 'Paywall Gate'] },
  'state-expired': { cat: 'States', title: 'Expired State', desc: 'Time-elapsed fallback.', icon: '⌛', families: ['Standard Expired', 'Renewal Prompt', 'Grace Period', 'Session Timeout', 'Link Expired', 'Offer Ended'] },
  'state-pending': { cat: 'States', title: 'Pending State', desc: 'Awaiting action/approval.', icon: '⏳', families: ['Standard Pending', 'With Timeline', 'Approval Pending', 'Processing Loop', 'Check Back Later', 'Verification'] },
  'state-partial': { cat: 'States', title: 'Partial State', desc: 'Incomplete data display.', icon: '🔘', families: ['Standard Partial', 'Step Progress', 'Required Fields', 'Profile Completeness', 'Draft Saved', 'Resume Button'] },
  'state-success': { cat: 'States', title: 'Success State', desc: 'Operation complete display.', icon: '✅', families: ['Standard Success', 'With Confetti', 'With Next Steps', 'Feedback Prompt', 'Auto Redirect', 'Receipt Info'] },

  // Calendar
  'calendar': { cat: 'Calendar', title: 'Calendar View', desc: 'Monthly calendar component.', icon: '📅', families: ['Standard Calendar', 'With Events', 'Mini Calendar', 'Heatmap Calendar', 'Week View', 'Agenda List'] },
  'date-range': { cat: 'Calendar', title: 'Date Range', desc: 'Date range selector.', icon: '📆', families: ['Standard Range', 'Preset Ranges', 'Custom Range', 'Dual Calendar', 'Timeline Scrub', 'Fiscal Quarters'] },
  'time-slot': { cat: 'Calendar', title: 'Time Slot Picker', desc: 'Appointment time slots.', icon: '⏰', families: ['Standard Slots', 'With Avatars', 'Multi Day Slots', 'Duration Select', 'Waitlist Slot', 'Timezone Toggle'] },
  'schedule': { cat: 'Calendar', title: 'Schedule Timeline', desc: 'Daily schedule view.', icon: '⏱️', families: ['Standard Schedule', 'Overlapping Events', 'Resource Schedule', 'Drag and Drop', 'Current Time Line', 'Block Out Time'] },
  'event-card': { cat: 'Calendar', title: 'Event Card', desc: 'Upcoming event displays.', icon: '🎟️', families: ['Standard Event', 'With RSVP', 'Live Event', 'Past Event', 'Webinar Link', 'Location Map'] },

  // Files
  'file-list': { cat: 'Files', title: 'File List', desc: 'Document list views.', icon: '📁', families: ['Standard List', 'With Previews', 'Folder Hierarchy', 'Download Actions', 'Shared With', 'Version History'] },
  'file-grid': { cat: 'Files', title: 'File Grid', desc: 'Thumbnail grid views.', icon: '🗂️', families: ['Standard Grid', 'Large Thumbnails', 'Masonry Layout', 'Selection Mode', 'Media Types', 'Grid Actions'] },
  'document-viewer': { cat: 'Files', title: 'Document Viewer', desc: 'Inline document preview.', icon: '📄', families: ['PDF Viewer', 'Image Viewer', 'Code Viewer', 'Zoom Controls', 'Page Thumbnails', 'Print Action'] },
  'attachment': { cat: 'Files', title: 'Attachment Pill', desc: 'Inline file attachments.', icon: '📎', families: ['Standard Pill', 'Image Pill', 'Removeable Pill', 'Uploading State', 'Error State', 'Multiple Pills'] },
  
  // E-Commerce
  'product-card': { cat: 'E-Commerce', title: 'Product Card', desc: 'Item display cards.', icon: '🛍️', families: ['Standard Product', 'With Rating', 'Discount Label', 'Out of Stock', 'Add to Cart', 'Favorite Toggle'] },
  'cart-item': { cat: 'E-Commerce', title: 'Cart Item', desc: 'Shopping cart rows.', icon: '🛒', families: ['Standard Item', 'With Quantity', 'Saved for Later', 'Gift Wrap Option', 'Subscription Item', 'Error State'] },
  'checkout-step': { cat: 'E-Commerce', title: 'Checkout Step', desc: 'Checkout flow panels.', icon: '💳', families: ['Shipping Address', 'Payment Method', 'Order Review', 'Billing Address', 'Promo Code', 'Guest Checkout'] },
  'order-summary': { cat: 'E-Commerce', title: 'Order Summary', desc: 'Purchase receipt breakdown.', icon: '🧾', families: ['Standard Summary', 'With Discounts', 'Tax Breakdown', 'Tracking Link', 'Return Action', 'Reorder Button'] },
  
  // Charts
  'bar-chart': { cat: 'Charts', title: 'Bar Chart', desc: 'Vertical and horizontal bars.', icon: '📊', families: ['Standard Bar', 'Stacked Bar', 'Grouped Bar', 'Horizontal Bar', 'Waterfall Chart', 'Negative Values'] },
  'line-chart': { cat: 'Charts', title: 'Line Chart', desc: 'Time series data lines.', icon: '📈', families: ['Standard Line', 'Smooth Curve', 'Step Line', 'Multi Line', 'Area Chart', 'Sparkline'] },
  'pie-chart': { cat: 'Charts', title: 'Pie Chart', desc: 'Proportional data rings.', icon: '🥧', families: ['Standard Pie', 'Donut Chart', 'Half Donut', 'Exploded Pie', 'Legend Right', 'Legend Bottom'] }
};

let file = fs.readFileSync('generate-rich-pages.js', 'utf8');
// String replace by taking substring before and after the ALL_PAGES declaration
const startIdx = file.indexOf('const ALL_PAGES = {');
const endMarker = '\n  // =====================================================================\n  // DYNAMIC HTML MOCK GENERATOR';
const endIdx = file.indexOf(endMarker);

if (startIdx !== -1 && endIdx !== -1) {
    const before = file.substring(0, startIdx);
    const after = file.substring(endIdx);
    fs.writeFileSync('generate-rich-pages.js', before + replacement + after);
    console.log('Successfully patched ALL_PAGES to have 6 unique variants for every component using string slicing!');
} else {
    console.log('Failed to find start or end index.');
}
