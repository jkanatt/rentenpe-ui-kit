const fs = require('fs');
const path = require('path');
const PAGES_DIR = path.join(__dirname, 'pages');
const { getFamiliesForSlug, renderCategoryVariant } = require('./component-engine.js');

// Require the existing data from generate-pages.js
const ALL_PAGES = {
  "typography": {
    "cat": "Foundations",
    "title": "Typography",
    "desc": "Type scale, font families, and text styles.",
    "icon": "🔤",
    "families": [
      "Type Scale",
      "Font Weights",
      "Text Colors",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "colors": {
    "cat": "Foundations",
    "title": "Colors & Tokens",
    "desc": "Complete color system with semantic tokens.",
    "icon": "🎨",
    "families": [
      "Primary Palette",
      "Semantic Colors",
      "Surface Colors",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "spacing": {
    "cat": "Foundations",
    "title": "Spacing & Grid",
    "desc": "Spacing scale and grid system.",
    "icon": "📐",
    "families": [
      "Spacing Scale",
      "Grid System",
      "Breakpoints",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "dividers": {
    "cat": "Foundations",
    "title": "Dividers",
    "desc": "Horizontal and vertical separators.",
    "icon": "➖",
    "families": [
      "Solid Divider",
      "Dashed Divider",
      "Labeled Divider",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "icons": {
    "cat": "Foundations",
    "title": "Icons & Symbols",
    "desc": "Icon library and symbol set.",
    "icon": "✨",
    "families": [
      "Action Icons",
      "Status Icons",
      "Navigation Icons",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "containers": {
    "cat": "Foundations",
    "title": "Containers",
    "desc": "Layout containers and wrappers.",
    "icon": "📦",
    "families": [
      "Standard Card",
      "Glass Card",
      "Elevated Card",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "links": {
    "cat": "Actions",
    "title": "Text & Link Actions",
    "desc": "Inline text links and action text.",
    "icon": "🔗",
    "families": [
      "Standard Link",
      "Action Link",
      "Destructive Link",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "fab": {
    "cat": "Actions",
    "title": "Floating Actions",
    "desc": "Floating action buttons.",
    "icon": "⊕",
    "families": [
      "Standard FAB",
      "Extended FAB",
      "Mini FAB",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "search-inputs": {
    "cat": "Inputs",
    "title": "Search Input",
    "desc": "Search fields with suggestions.",
    "icon": "🔍",
    "families": [
      "Standard Search",
      "Expandable Search",
      "Search with Filters",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "email-inputs": {
    "cat": "Inputs",
    "title": "Email Input",
    "desc": "Email fields with validation.",
    "icon": "📧",
    "families": [
      "Standard Email",
      "Email with Domain",
      "Multi Email",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "phone-inputs": {
    "cat": "Inputs",
    "title": "Phone Input",
    "desc": "Phone number fields with country code.",
    "icon": "📱",
    "families": [
      "Standard Phone",
      "With Country Picker",
      "Split Phone",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "password-inputs": {
    "cat": "Inputs",
    "title": "Password Input",
    "desc": "Password fields with strength meter.",
    "icon": "🔒",
    "families": [
      "Standard Password",
      "With Strength Meter",
      "With Requirements",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "number-inputs": {
    "cat": "Inputs",
    "title": "Number Input",
    "desc": "Number fields with steppers.",
    "icon": "🔢",
    "families": [
      "Standard Number",
      "With Stepper",
      "Quantity Selector",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "currency-inputs": {
    "cat": "Inputs",
    "title": "Currency Input",
    "desc": "Currency amount fields with symbol.",
    "icon": "💰",
    "families": [
      "Standard Currency",
      "Multi Currency",
      "Amount Range",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "textarea": {
    "cat": "Inputs",
    "title": "Textarea",
    "desc": "Multi-line text areas.",
    "icon": "📄",
    "families": [
      "Standard Textarea",
      "Auto Resize",
      "With Character Count",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "date-inputs": {
    "cat": "Inputs",
    "title": "Date Field",
    "desc": "Date picker inputs.",
    "icon": "📅",
    "families": [
      "Standard Date",
      "Date Range",
      "Date with Time",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "otp-inputs": {
    "cat": "Inputs",
    "title": "OTP / PIN",
    "desc": "One-time password and PIN entry.",
    "icon": "🔑",
    "families": [
      "4 Digit OTP",
      "6 Digit OTP",
      "Alphanumeric Code",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "masked-inputs": {
    "cat": "Inputs",
    "title": "Masked Input",
    "desc": "Inputs with format masks.",
    "icon": "🎭",
    "families": [
      "Card Number Mask",
      "SSN Mask",
      "Custom Pattern",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "file-upload": {
    "cat": "Inputs",
    "title": "File Upload",
    "desc": "File upload and drag-drop zones.",
    "icon": "📤",
    "families": [
      "Drop Zone",
      "Button Upload",
      "Multi File",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "autocomplete": {
    "cat": "Inputs",
    "title": "Autocomplete",
    "desc": "Type-ahead suggestion fields.",
    "icon": "💡",
    "families": [
      "Standard Autocomplete",
      "With Categories",
      "Multi Value",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "time-picker": {
    "cat": "Inputs",
    "title": "Time Picker",
    "desc": "Time selection controls.",
    "icon": "🕐",
    "families": [
      "Standard Time",
      "Time Range",
      "Duration Picker",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "color-picker": {
    "cat": "Inputs",
    "title": "Color Picker",
    "desc": "Color selection widgets.",
    "icon": "🌈",
    "families": [
      "Swatch Grid",
      "Spectrum Picker",
      "Hex Input",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "star-rating": {
    "cat": "Inputs",
    "title": "Star Rating",
    "desc": "Star-based rating input.",
    "icon": "⭐",
    "families": [
      "5 Star Rating",
      "Emoji Rating",
      "Slider Rating",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "tags-input": {
    "cat": "Inputs",
    "title": "Tags Input",
    "desc": "Tag creation and management.",
    "icon": "🏷️",
    "families": [
      "Standard Tags",
      "Autocomplete Tags",
      "Removable Tags",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "rich-text": {
    "cat": "Inputs",
    "title": "Rich Text Editor",
    "desc": "Rich text editing toolbar.",
    "icon": "📝",
    "families": [
      "Basic Editor",
      "Full Toolbar",
      "Markdown Editor",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "signature-pad": {
    "cat": "Inputs",
    "title": "Signature Pad",
    "desc": "Digital signature capture.",
    "icon": "✍️",
    "families": [
      "Standard Pad",
      "Typed Signature",
      "Upload Signature",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "form-fields": {
    "cat": "Inputs",
    "title": "Form Fields",
    "desc": "Complete form field wrappers.",
    "icon": "📋",
    "families": [
      "Stacked Field",
      "Horizontal Field",
      "Inline Field",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "inline-edit": {
    "cat": "Inputs",
    "title": "Inline Edit",
    "desc": "Click-to-edit inline fields.",
    "icon": "✏️",
    "families": [
      "Text Inline Edit",
      "Select Inline Edit",
      "Multi Line Edit",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "checkbox": {
    "cat": "Selection",
    "title": "Checkbox",
    "desc": "Single and group checkboxes.",
    "icon": "☑️",
    "families": [
      "Standard Checkbox",
      "Indeterminate",
      "Checkbox Group",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "radio": {
    "cat": "Selection",
    "title": "Radio Group",
    "desc": "Exclusive selection controls.",
    "icon": "🔘",
    "families": [
      "Standard Radio",
      "Card Radio",
      "Button Radio",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "toggle": {
    "cat": "Selection",
    "title": "Toggle / Switch",
    "desc": "On/off binary controls.",
    "icon": "🔀",
    "families": [
      "Standard Toggle",
      "With Label",
      "Grouped Toggles",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "slider": {
    "cat": "Selection",
    "title": "Slider / Range",
    "desc": "Value range selectors.",
    "icon": "🎚️",
    "families": [
      "Standard Slider",
      "Range Slider",
      "Step Slider",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "adornments": {
    "cat": "Selection",
    "title": "Input Adornments",
    "desc": "Input prefix/suffix decorations.",
    "icon": "🎀",
    "families": [
      "Icon Adornment",
      "Text Adornment",
      "Action Adornment",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "select": {
    "cat": "Dropdowns",
    "title": "Standard Select",
    "desc": "Single value dropdown.",
    "icon": "📋",
    "families": [
      "Standard Select",
      "With Icons",
      "Grouped Options",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "searchable-select": {
    "cat": "Dropdowns",
    "title": "Searchable Select",
    "desc": "Filterable dropdown.",
    "icon": "🔎",
    "families": [
      "Standard Searchable",
      "With Create",
      "Async Search",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "multi-select": {
    "cat": "Dropdowns",
    "title": "Multi Select",
    "desc": "Multiple value selection.",
    "icon": "☑️",
    "families": [
      "Checkbox Multi",
      "Chip Multi",
      "Tree Multi",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "property-selector": {
    "cat": "Dropdowns",
    "title": "Property Selector",
    "desc": "Property-specific selector.",
    "icon": "🏠",
    "families": [
      "Standard Property",
      "With Preview",
      "Map Selector",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "filter-dropdown": {
    "cat": "Dropdowns",
    "title": "Filter Dropdown",
    "desc": "Preset filter menus.",
    "icon": "🔻",
    "families": [
      "Standard Filter",
      "Multi Filter",
      "Date Filter",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "sort-dropdown": {
    "cat": "Dropdowns",
    "title": "Sort Dropdown",
    "desc": "Sort order menus.",
    "icon": "↕️",
    "families": [
      "Standard Sort",
      "With Direction",
      "Multi Sort",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "sidebar": {
    "cat": "Navigation",
    "title": "Side Navigation",
    "desc": "Collapsible sidebar with groups.",
    "icon": "📂",
    "families": [
      "Full Sidebar",
      "Collapsed Sidebar",
      "Mobile Sidebar",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "topbar": {
    "cat": "Navigation",
    "title": "Top Bar / Header",
    "desc": "App header with actions.",
    "icon": "📌",
    "families": [
      "Standard Header",
      "With Search",
      "Breadcrumb Header",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "breadcrumbs": {
    "cat": "Navigation",
    "title": "Breadcrumbs",
    "desc": "Path navigation trail.",
    "icon": "🥖",
    "families": [
      "Standard Crumbs",
      "With Icons",
      "Collapsed Crumbs",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "tabs": {
    "cat": "Navigation",
    "title": "Page Tabs",
    "desc": "Content switching tabs.",
    "icon": "📑",
    "families": [
      "Standard Tabs",
      "Underline Tabs",
      "Pill Tabs",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "segmented": {
    "cat": "Navigation",
    "title": "Segmented Control",
    "desc": "Toggle between views.",
    "icon": "⊞",
    "families": [
      "Standard Segment",
      "Icon Segment",
      "Full Width",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "tabbar": {
    "cat": "Navigation",
    "title": "Tab Bar Nav",
    "desc": "Mobile bottom navigation.",
    "icon": "📱",
    "families": [
      "Standard Tab Bar",
      "With Badge",
      "Floating Tab Bar",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "pagination": {
    "cat": "Navigation",
    "title": "Pagination",
    "desc": "Page number navigation.",
    "icon": "📄",
    "families": [
      "Standard Pagination",
      "Simple Prev/Next",
      "Load More",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "stepper": {
    "cat": "Navigation",
    "title": "Stepper",
    "desc": "Multi-step progress.",
    "icon": "🪜",
    "families": [
      "Horizontal Stepper",
      "Vertical Stepper",
      "Dot Stepper",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "back-next": {
    "cat": "Navigation",
    "title": "Back / Next",
    "desc": "Sequential navigation.",
    "icon": "↔️",
    "families": [
      "Standard Nav",
      "With Preview",
      "Wizard Nav",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "header-utils": {
    "cat": "Navigation",
    "title": "Header Utilities",
    "desc": "Header action buttons.",
    "icon": "🔔",
    "families": [
      "Notification Bell",
      "Search Toggle",
      "User Menu",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "lifecycle-nav": {
    "cat": "Navigation",
    "title": "Lifecycle Nav",
    "desc": "Process lifecycle navigation.",
    "icon": "🔄",
    "families": [
      "Standard Lifecycle",
      "Vertical Lifecycle",
      "Interactive",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "footer": {
    "cat": "Navigation",
    "title": "Footer",
    "desc": "Page and app footers.",
    "icon": "📎",
    "families": [
      "Standard Footer",
      "Minimal Footer",
      "With Links",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "quick-actions": {
    "cat": "Navigation",
    "title": "Quick Actions",
    "desc": "Speed dial and shortcuts.",
    "icon": "⚡",
    "families": [
      "Speed Dial",
      "Action Grid",
      "Shortcut Bar",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "context-menu": {
    "cat": "Menus",
    "title": "Context Menu",
    "desc": "Right-click context menus.",
    "icon": "⋮",
    "families": [
      "Standard Context",
      "With Icons",
      "Nested Context",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "profile-menu": {
    "cat": "Menus",
    "title": "Profile Menu",
    "desc": "User profile dropdown.",
    "icon": "👤",
    "families": [
      "Standard Profile",
      "With Avatar",
      "Extended Profile",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "command-palette": {
    "cat": "Menus",
    "title": "Command Palette",
    "desc": "Keyboard-first command search.",
    "icon": "⌘",
    "families": [
      "Standard Palette",
      "With Categories",
      "AI Enhanced",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "mega-menu": {
    "cat": "Menus",
    "title": "Mega Menu",
    "desc": "Large navigation menus.",
    "icon": "📊",
    "families": [
      "Column Mega",
      "With Icons",
      "With Featured",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "nested-menu": {
    "cat": "Menus",
    "title": "Nested Menu",
    "desc": "Multi-level submenus.",
    "icon": "📂",
    "families": [
      "Standard Nested",
      "Hover Expand",
      "Accordion",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "action-sheet": {
    "cat": "Menus",
    "title": "Action Sheet",
    "desc": "iOS-style action sheets.",
    "icon": "📱",
    "families": [
      "Standard Actions",
      "With Icons",
      "Destructive Actions",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "badges": {
    "cat": "Data Display",
    "title": "Status Badges",
    "desc": "Status indicator badges.",
    "icon": "🏅",
    "families": [
      "Standard Badge",
      "Dot Badge",
      "Outlined Badge",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "metadata-chips": {
    "cat": "Data Display",
    "title": "Metadata Chips",
    "desc": "Key-value metadata chips.",
    "icon": "🏷️",
    "families": [
      "Standard Chip",
      "With Icon",
      "Dismissible",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "filter-chips": {
    "cat": "Data Display",
    "title": "Filter Chips",
    "desc": "Active filter indicators.",
    "icon": "🔖",
    "families": [
      "Standard Filter",
      "Toggle Filter",
      "Group Filter",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "action-chips": {
    "cat": "Data Display",
    "title": "Action Chips",
    "desc": "Actionable chip buttons.",
    "icon": "⚡",
    "families": [
      "Standard Action",
      "With Icon",
      "Outlined Action",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "count-badge": {
    "cat": "Data Display",
    "title": "Count Badge",
    "desc": "Numeric count indicators.",
    "icon": "🔴",
    "families": [
      "Standard Count",
      "Dot Only",
      "Animated Count",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "dot-indicator": {
    "cat": "Data Display",
    "title": "Dot Indicator",
    "desc": "Status dot indicators.",
    "icon": "●",
    "families": [
      "Color Dot",
      "Pulsing Dot",
      "Labeled Dot",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "avatars": {
    "cat": "Data Display",
    "title": "Avatars",
    "desc": "User avatar components.",
    "icon": "👤",
    "families": [
      "Image Avatar",
      "Initials Avatar",
      "Avatar Group",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "verified-tag": {
    "cat": "Data Display",
    "title": "Verified Tags",
    "desc": "Verification status indicators.",
    "icon": "✅",
    "families": [
      "Verified Badge",
      "Trust Seal",
      "Certification",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "list-rows": {
    "cat": "Lists",
    "title": "Standard List",
    "desc": "Standard list rows.",
    "icon": "📋",
    "families": [
      "Simple List",
      "With Metadata",
      "With Actions",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "compact-list": {
    "cat": "Lists",
    "title": "Compact List",
    "desc": "Dense list rows.",
    "icon": "📑",
    "families": [
      "Standard Compact",
      "With Checkbox",
      "With Avatar",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "timeline": {
    "cat": "Lists",
    "title": "Activity Timeline",
    "desc": "Chronological event timeline.",
    "icon": "📅",
    "families": [
      "Standard Timeline",
      "Grouped Timeline",
      "Interactive Timeline",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "grouped-list": {
    "cat": "Lists",
    "title": "Grouped List",
    "desc": "Categorized list sections.",
    "icon": "📂",
    "families": [
      "Standard Grouped",
      "Collapsible",
      "Sticky Headers",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "swipeable-list": {
    "cat": "Lists",
    "title": "Swipeable List",
    "desc": "Swipe-to-reveal actions.",
    "icon": "👆",
    "families": [
      "Swipe Delete",
      "Swipe Actions",
      "Swipe Archive",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "expandable-list": {
    "cat": "Lists",
    "title": "Expandable List",
    "desc": "Accordion list items.",
    "icon": "📖",
    "families": [
      "Standard Expand",
      "With Preview",
      "Multi Expand",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "data-table": {
    "cat": "Tables",
    "title": "Standard Table",
    "desc": "Full-featured data table.",
    "icon": "📊",
    "families": [
      "Standard Table",
      "Sortable Table",
      "Selectable Table",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "compact-table": {
    "cat": "Tables",
    "title": "Compact Table",
    "desc": "Dense data table.",
    "icon": "📉",
    "families": [
      "Standard Compact",
      "With Inline Edit",
      "Minimal",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "responsive-table": {
    "cat": "Tables",
    "title": "Responsive Table",
    "desc": "Mobile-friendly tables.",
    "icon": "📱",
    "families": [
      "Card Stack",
      "Horizontal Scroll",
      "Priority Columns",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "table-toolbar": {
    "cat": "Tables",
    "title": "Table Toolbar",
    "desc": "Table action toolbar.",
    "icon": "🔧",
    "families": [
      "Standard Toolbar",
      "With Bulk Actions",
      "Filter Toolbar",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "expandable-row": {
    "cat": "Tables",
    "title": "Expandable Row",
    "desc": "Table rows with detail expansion.",
    "icon": "📖",
    "families": [
      "Standard Expand",
      "With Sub Table",
      "Accordion Row",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "editable-table": {
    "cat": "Tables",
    "title": "Editable Table",
    "desc": "Inline-editable table cells.",
    "icon": "✏️",
    "families": [
      "Cell Edit",
      "Row Edit",
      "Full Edit Mode",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "entity-cards": {
    "cat": "Cards",
    "title": "Entity Cards",
    "desc": "Property and entity display cards.",
    "icon": "🏢",
    "families": [
      "Standard Entity",
      "With Status",
      "Compact Entity",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "report-cards": {
    "cat": "Cards",
    "title": "Report Cards",
    "desc": "Report summary cards.",
    "icon": "📋",
    "families": [
      "Standard Report",
      "With Chart",
      "Download Report",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "service-cards": {
    "cat": "Cards",
    "title": "Service Cards",
    "desc": "Service feature cards.",
    "icon": "🛎️",
    "families": [
      "Standard Service",
      "With CTA",
      "Comparison",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "membership-cards": {
    "cat": "Cards",
    "title": "Membership",
    "desc": "Membership tier display.",
    "icon": "💳",
    "families": [
      "Standard Tier",
      "Premium Tier",
      "Comparison Grid",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "info-cards": {
    "cat": "Cards",
    "title": "Information",
    "desc": "Informational display cards.",
    "icon": "ℹ️",
    "families": [
      "Standard Info",
      "With Icon",
      "Dismissible Info",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "reward-cards": {
    "cat": "Cards",
    "title": "Reward Cards",
    "desc": "Reward and offer cards.",
    "icon": "🎁",
    "families": [
      "Standard Reward",
      "Scratch Card",
      "Coupon Card",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "rm-cards": {
    "cat": "Cards",
    "title": "RM Contact",
    "desc": "Relationship manager cards.",
    "icon": "🤝",
    "families": [
      "Standard RM",
      "With Schedule",
      "Chat RM",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "profile-cards": {
    "cat": "Cards",
    "title": "Profile Cards",
    "desc": "User profile cards.",
    "icon": "👤",
    "families": [
      "Standard Profile",
      "Compact Profile",
      "Team Card",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "pricing-cards": {
    "cat": "Cards",
    "title": "Pricing Cards",
    "desc": "Pricing plan cards.",
    "icon": "💲",
    "families": [
      "Standard Pricing",
      "Highlighted Plan",
      "Comparison",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "comparison-cards": {
    "cat": "Cards",
    "title": "Comparison",
    "desc": "Side-by-side comparison.",
    "icon": "⚖️",
    "families": [
      "Two Column",
      "Multi Column",
      "Feature Matrix",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "testimonial-cards": {
    "cat": "Cards",
    "title": "Testimonials",
    "desc": "User testimonial cards.",
    "icon": "💬",
    "families": [
      "Standard Quote",
      "With Rating",
      "Video Testimonial",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "feature-cards": {
    "cat": "Cards",
    "title": "Feature Cards",
    "desc": "Feature highlight cards.",
    "icon": "⭐",
    "families": [
      "Standard Feature",
      "With Illustration",
      "Grid Feature",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "notification-cards": {
    "cat": "Cards",
    "title": "Notification",
    "desc": "Notification display cards.",
    "icon": "🔔",
    "families": [
      "Standard Notification",
      "Grouped",
      "Action Required",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "bottom-sheet": {
    "cat": "Overlays",
    "title": "Bottom Sheet",
    "desc": "Mobile bottom drawer.",
    "icon": "📱",
    "families": [
      "Standard Sheet",
      "With Handle",
      "Full Screen",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "confirm-dialog": {
    "cat": "Overlays",
    "title": "Confirmation",
    "desc": "Destructive action confirmations.",
    "icon": "❓",
    "families": [
      "Standard Confirm",
      "Danger Confirm",
      "With Input",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "form-modal": {
    "cat": "Overlays",
    "title": "Form Modal",
    "desc": "Form-containing modals.",
    "icon": "📝",
    "families": [
      "Standard Form",
      "Multi Step",
      "Side Panel Form",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "success-dialog": {
    "cat": "Overlays",
    "title": "Success Dialog",
    "desc": "Success confirmation dialogs.",
    "icon": "✅",
    "families": [
      "Standard Success",
      "With Action",
      "Animated",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "warning-dialog": {
    "cat": "Overlays",
    "title": "Warning Dialog",
    "desc": "Warning and caution dialogs.",
    "icon": "⚠️",
    "families": [
      "Standard Warning",
      "Blocking Warning",
      "Timed Warning",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "fullscreen-dialog": {
    "cat": "Overlays",
    "title": "Fullscreen Dialog",
    "desc": "Full-screen modal views.",
    "icon": "🖥️",
    "families": [
      "Standard Full",
      "With Header",
      "Immersive",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "wizard-dialog": {
    "cat": "Overlays",
    "title": "Wizard Dialog",
    "desc": "Multi-step wizard modals.",
    "icon": "🧙",
    "families": [
      "Standard Wizard",
      "With Sidebar",
      "Linear Wizard",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "popover": {
    "cat": "Overlays",
    "title": "Popover",
    "desc": "Contextual floating panels.",
    "icon": "💬",
    "families": [
      "Standard Popover",
      "With Arrow",
      "Rich Popover",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "tooltip": {
    "cat": "Overlays",
    "title": "Tooltip",
    "desc": "Informational hover tips.",
    "icon": "💡",
    "families": [
      "Standard Tooltip",
      "Rich Tooltip",
      "Interactive Tooltip",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "lightbox": {
    "cat": "Overlays",
    "title": "Lightbox",
    "desc": "Image/media lightbox viewer.",
    "icon": "🖼️",
    "families": [
      "Standard Lightbox",
      "Gallery Lightbox",
      "Video Lightbox",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "alert-banner": {
    "cat": "Feedback",
    "title": "Alert Banner",
    "desc": "Full-width alert banners.",
    "icon": "🚨",
    "families": [
      "Info Banner",
      "Warning Banner",
      "Error Banner",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "empty-state": {
    "cat": "Feedback",
    "title": "Empty State",
    "desc": "No-data placeholder screens.",
    "icon": "📭",
    "families": [
      "Standard Empty",
      "With Action",
      "Illustrated Empty",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "error-state": {
    "cat": "Feedback",
    "title": "Error State",
    "desc": "Error fallback displays.",
    "icon": "❌",
    "families": [
      "Standard Error",
      "Network Error",
      "Permission Error",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "loading": {
    "cat": "Feedback",
    "title": "Loading Spinner",
    "desc": "Loading indicator animations.",
    "icon": "⏳",
    "families": [
      "Spinner",
      "Dot Loading",
      "Bar Loading",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "skeleton": {
    "cat": "Feedback",
    "title": "Skeleton Screen",
    "desc": "Content loading placeholders.",
    "icon": "💀",
    "families": [
      "Card Skeleton",
      "List Skeleton",
      "Table Skeleton",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "progress-bar": {
    "cat": "Feedback",
    "title": "Progress Bar",
    "desc": "Progress indicator bars.",
    "icon": "📊",
    "families": [
      "Standard Progress",
      "Segmented Progress",
      "Circular Progress",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "score-gauge": {
    "cat": "Feedback",
    "title": "Score Ring",
    "desc": "Circular score gauges.",
    "icon": "🎯",
    "families": [
      "Standard Ring",
      "Gradient Ring",
      "Multi Ring",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "status-indicator": {
    "cat": "Feedback",
    "title": "Status Indicator",
    "desc": "Live status displays.",
    "icon": "🟢",
    "families": [
      "Dot Status",
      "Badge Status",
      "Timeline Status",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "countdown": {
    "cat": "Feedback",
    "title": "Countdown",
    "desc": "Countdown timer displays.",
    "icon": "⏱️",
    "families": [
      "Standard Countdown",
      "Flip Clock",
      "Circular Countdown",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "confetti": {
    "cat": "Feedback",
    "title": "Confetti / Celebration",
    "desc": "Celebration animations.",
    "icon": "🎉",
    "families": [
      "Burst Confetti",
      "Rain Confetti",
      "Emoji Rain",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "connection-status": {
    "cat": "Feedback",
    "title": "Connection Status",
    "desc": "Network status indicators.",
    "icon": "📶",
    "families": [
      "Online/Offline",
      "Signal Strength",
      "Reconnecting",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "state-offline": {
    "cat": "States",
    "title": "Offline State",
    "desc": "No-connection fallback.",
    "icon": "📵",
    "families": [
      "Standard Offline",
      "Cached View",
      "Retry Prompt",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "state-locked": {
    "cat": "States",
    "title": "Locked State",
    "desc": "Permission-restricted view.",
    "icon": "🔒",
    "families": [
      "Standard Locked",
      "Upgrade Prompt",
      "Request Access",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "state-expired": {
    "cat": "States",
    "title": "Expired State",
    "desc": "Time-elapsed fallback.",
    "icon": "⌛",
    "families": [
      "Standard Expired",
      "Renewal Prompt",
      "Grace Period",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "state-pending": {
    "cat": "States",
    "title": "Pending State",
    "desc": "Awaiting action/approval.",
    "icon": "⏳",
    "families": [
      "Standard Pending",
      "With Timeline",
      "Approval Pending",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "state-partial": {
    "cat": "States",
    "title": "Partial State",
    "desc": "Incomplete data display.",
    "icon": "🔘",
    "families": [
      "Standard Partial",
      "Step Progress",
      "Required Fields",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "state-success": {
    "cat": "States",
    "title": "Success State",
    "desc": "Operation complete display.",
    "icon": "✅",
    "families": [
      "Standard Success",
      "With Confetti",
      "With Next Steps",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "calendar": {
    "cat": "Calendar",
    "title": "Calendar View",
    "desc": "Monthly calendar component.",
    "icon": "📅",
    "families": [
      "Standard Calendar",
      "With Events",
      "Mini Calendar",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "date-range": {
    "cat": "Calendar",
    "title": "Date Range",
    "desc": "Date range selector.",
    "icon": "📆",
    "families": [
      "Standard Range",
      "Preset Ranges",
      "Custom Range",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "month-selector": {
    "cat": "Calendar",
    "title": "Month Selector",
    "desc": "Month selection control.",
    "icon": "🗓️",
    "families": [
      "Standard Month",
      "Scroll Month",
      "Grid Month",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "day-status": {
    "cat": "Calendar",
    "title": "Day Status Cell",
    "desc": "Calendar day with status.",
    "icon": "📊",
    "families": [
      "Standard Cell",
      "Heatmap Cell",
      "Multi Event Cell",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "schedule-view": {
    "cat": "Calendar",
    "title": "Schedule View",
    "desc": "Timeline schedule display.",
    "icon": "📋",
    "families": [
      "Day Schedule",
      "Week Schedule",
      "Agenda View",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "bar-chart": {
    "cat": "Charts",
    "title": "Bar Chart",
    "desc": "Vertical and horizontal bars.",
    "icon": "📊",
    "families": [
      "Standard Bar",
      "Horizontal Bar",
      "Grouped Bar",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "stacked-bar": {
    "cat": "Charts",
    "title": "Stacked Bar",
    "desc": "Stacked bar compositions.",
    "icon": "📊",
    "families": [
      "Standard Stacked",
      "Percent Stacked",
      "Diverging",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "line-chart": {
    "cat": "Charts",
    "title": "Line / Area",
    "desc": "Line and area charts.",
    "icon": "📈",
    "families": [
      "Standard Line",
      "Area Fill",
      "Multi Series",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "donut-chart": {
    "cat": "Charts",
    "title": "Donut Chart",
    "desc": "Donut and pie charts.",
    "icon": "🍩",
    "families": [
      "Standard Donut",
      "Half Donut",
      "Nested Donut",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "chart-legend": {
    "cat": "Charts",
    "title": "Chart Legend",
    "desc": "Chart legend displays.",
    "icon": "📋",
    "families": [
      "Inline Legend",
      "Card Legend",
      "Interactive Legend",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "heatmap": {
    "cat": "Charts",
    "title": "Heatmap",
    "desc": "Density heatmap display.",
    "icon": "🗺️",
    "families": [
      "Standard Heatmap",
      "Calendar Heat",
      "Grid Heat",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "funnel-chart": {
    "cat": "Charts",
    "title": "Funnel Chart",
    "desc": "Conversion funnel display.",
    "icon": "📉",
    "families": [
      "Standard Funnel",
      "Horizontal Funnel",
      "Comparison",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "gauge-chart": {
    "cat": "Charts",
    "title": "Gauge Chart",
    "desc": "Gauge meter display.",
    "icon": "⏱️",
    "families": [
      "Standard Gauge",
      "Semi Circle",
      "Multi Gauge",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "score-display": {
    "cat": "Analytics",
    "title": "Score Display",
    "desc": "Score and metric display.",
    "icon": "💯",
    "families": [
      "Standard Score",
      "Graded Score",
      "Comparison Score",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "trend-sparkline": {
    "cat": "Analytics",
    "title": "Trend / Sparkline",
    "desc": "Inline trend displays.",
    "icon": "📈",
    "families": [
      "Standard Sparkline",
      "With Change",
      "Mini Area",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "comparison": {
    "cat": "Analytics",
    "title": "Comparison",
    "desc": "Value comparison displays.",
    "icon": "⚖️",
    "families": [
      "Side by Side",
      "Percent Change",
      "Trend Compare",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "breakdown": {
    "cat": "Analytics",
    "title": "Breakdown",
    "desc": "Data breakdown views.",
    "icon": "📊",
    "families": [
      "Standard Breakdown",
      "Nested Breakdown",
      "Visual Breakdown",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "stats-counter": {
    "cat": "Infographics",
    "title": "Stats Counter",
    "desc": "Animated number counters.",
    "icon": "🔢",
    "families": [
      "Standard Counter",
      "Animated Counter",
      "With Icon",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "comparison-visual": {
    "cat": "Infographics",
    "title": "Visual Comparison",
    "desc": "Before/after comparisons.",
    "icon": "📊",
    "families": [
      "Standard Comparison",
      "Slider Compare",
      "Overlay Compare",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "process-flow": {
    "cat": "Infographics",
    "title": "Process Flow",
    "desc": "Step-by-step flow diagrams.",
    "icon": "🔄",
    "families": [
      "Standard Flow",
      "Branching Flow",
      "Interactive Flow",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "key-insight": {
    "cat": "Infographics",
    "title": "Key Insight",
    "desc": "Highlighted data callouts.",
    "icon": "💡",
    "families": [
      "Standard Insight",
      "With Chart",
      "Actionable Insight",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "data-story": {
    "cat": "Infographics",
    "title": "Data Story",
    "desc": "Narrative data cards.",
    "icon": "📖",
    "families": [
      "Standard Story",
      "With Timeline",
      "Interactive Story",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "achievement": {
    "cat": "Rewards",
    "title": "Achievement Badge",
    "desc": "Milestone achievement badges.",
    "icon": "🏆",
    "families": [
      "Unlocked",
      "Locked",
      "Badge Grid",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "level-progress": {
    "cat": "Rewards",
    "title": "Level Progress",
    "desc": "User level and XP display.",
    "icon": "📊",
    "families": [
      "Standard Level",
      "Tiered Level",
      "XP Bar",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "streak": {
    "cat": "Rewards",
    "title": "Streak Counter",
    "desc": "Consecutive action tracking.",
    "icon": "🔥",
    "families": [
      "Flame Streak",
      "Compact Badge",
      "Streak Recovery",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "cashback": {
    "cat": "Rewards",
    "title": "Cashback Card",
    "desc": "Cashback and reward reveals.",
    "icon": "💸",
    "families": [
      "Earned Cashback",
      "Offer Card",
      "Scratch Reveal",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "leaderboard": {
    "cat": "Rewards",
    "title": "Leaderboard",
    "desc": "Competitive ranking display.",
    "icon": "🏅",
    "families": [
      "Full Leaderboard",
      "Your Position",
      "Podium Top 3",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "challenge": {
    "cat": "Rewards",
    "title": "Challenge Card",
    "desc": "Time-bound challenge display.",
    "icon": "🎯",
    "families": [
      "Active Challenge",
      "Completed",
      "Upcoming",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "referral": {
    "cat": "Rewards",
    "title": "Referral Card",
    "desc": "Referral invite cards.",
    "icon": "👥",
    "families": [
      "Invite Card",
      "Progress Tracker",
      "Dark Banner",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "login": {
    "cat": "Authentication",
    "title": "Login Form",
    "desc": "Email/password login.",
    "icon": "🔑",
    "families": [
      "Standard Login",
      "With Social",
      "OTP Login",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "signup": {
    "cat": "Authentication",
    "title": "Signup Form",
    "desc": "Registration flow.",
    "icon": "📝",
    "families": [
      "Standard Signup",
      "Multi Step",
      "With Invite",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "forgot-password": {
    "cat": "Authentication",
    "title": "Forgot Password",
    "desc": "Password reset flow.",
    "icon": "🔒",
    "families": [
      "Email Reset",
      "Phone Reset",
      "Security Questions",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "otp-verify": {
    "cat": "Authentication",
    "title": "OTP Verify",
    "desc": "Code verification screen.",
    "icon": "📱",
    "families": [
      "Standard OTP",
      "With Timer",
      "Voice OTP",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "biometric": {
    "cat": "Authentication",
    "title": "Biometric Auth",
    "desc": "Face/finger recognition.",
    "icon": "👆",
    "families": [
      "Face ID",
      "Touch ID",
      "PIN Fallback",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "social-login": {
    "cat": "Authentication",
    "title": "Social Login",
    "desc": "Google/Apple sign in.",
    "icon": "🌐",
    "families": [
      "Standard Social",
      "Button Row",
      "Icon Only",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "welcome-screen": {
    "cat": "Onboarding",
    "title": "Welcome Screen",
    "desc": "First launch hero.",
    "icon": "🎉",
    "families": [
      "Standard Welcome",
      "Animated Welcome",
      "Video Welcome",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "feature-tour": {
    "cat": "Onboarding",
    "title": "Feature Tour",
    "desc": "Interactive walkthrough.",
    "icon": "🗺️",
    "families": [
      "Standard Tour",
      "Spotlight Tour",
      "Tooltip Tour",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "permission-request": {
    "cat": "Onboarding",
    "title": "Permission Request",
    "desc": "System permission ask.",
    "icon": "🔐",
    "families": [
      "Standard Permission",
      "Explained Permission",
      "Batch Permissions",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "setup-wizard": {
    "cat": "Onboarding",
    "title": "Setup Wizard",
    "desc": "Initial configuration.",
    "icon": "🧙",
    "families": [
      "Standard Wizard",
      "Card Wizard",
      "Progressive Wizard",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "onboard-complete": {
    "cat": "Onboarding",
    "title": "Completion",
    "desc": "Onboarding success.",
    "icon": "✅",
    "families": [
      "Standard Complete",
      "With Confetti",
      "Next Steps",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "chat-bubble": {
    "cat": "Communication",
    "title": "Chat Bubble",
    "desc": "Message bubbles.",
    "icon": "💬",
    "families": [
      "Standard Bubble",
      "With Media",
      "System Message",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "message-thread": {
    "cat": "Communication",
    "title": "Message Thread",
    "desc": "Conversation list.",
    "icon": "📧",
    "families": [
      "Standard Thread",
      "Compact Thread",
      "With Preview",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "announcement": {
    "cat": "Communication",
    "title": "Announcement",
    "desc": "Platform updates.",
    "icon": "📢",
    "families": [
      "Standard Announcement",
      "Banner",
      "Modal Announcement",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "in-app-message": {
    "cat": "Communication",
    "title": "In App Message",
    "desc": "Targeted messages.",
    "icon": "📩",
    "families": [
      "Standard Message",
      "Slide In",
      "Full Screen",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "payment-row": {
    "cat": "Payments",
    "title": "Payment Row",
    "desc": "Transaction list rows.",
    "icon": "💳",
    "families": [
      "Standard Row",
      "With Status",
      "Grouped Row",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "payment-card": {
    "cat": "Payments",
    "title": "Payment Method",
    "desc": "Card/bank display.",
    "icon": "💳",
    "families": [
      "Standard Card",
      "With Default Badge",
      "Add New",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "bank-account": {
    "cat": "Payments",
    "title": "Bank Account",
    "desc": "Linked bank account.",
    "icon": "🏦",
    "families": [
      "Standard Bank",
      "With Balance",
      "Verified Account",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "wallet": {
    "cat": "Payments",
    "title": "Wallet Balance",
    "desc": "Balance display.",
    "icon": "👛",
    "families": [
      "Standard Wallet",
      "With History",
      "Multi Currency",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "receipt": {
    "cat": "Payments",
    "title": "Receipt",
    "desc": "Payment receipt.",
    "icon": "🧾",
    "families": [
      "Standard Receipt",
      "Detailed Receipt",
      "Download Receipt",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "invoice": {
    "cat": "Payments",
    "title": "Invoice",
    "desc": "Bill/invoice view.",
    "icon": "📄",
    "families": [
      "Standard Invoice",
      "With Breakdown",
      "Past Due",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "split-payment": {
    "cat": "Payments",
    "title": "Split Payment",
    "desc": "Roommate split.",
    "icon": "➗",
    "families": [
      "Standard Split",
      "Equal Split",
      "Custom Split",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "autopay": {
    "cat": "Payments",
    "title": "Auto Pay",
    "desc": "Recurring setup.",
    "icon": "🔁",
    "families": [
      "Standard Autopay",
      "With Schedule",
      "Manage Autopay",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "property-listing": {
    "cat": "Property",
    "title": "Property Listing",
    "desc": "Property search cards.",
    "icon": "🏠",
    "families": [
      "Standard Listing",
      "Grid Listing",
      "Map Listing",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "property-gallery": {
    "cat": "Property",
    "title": "Property Gallery",
    "desc": "Image carousel.",
    "icon": "🖼️",
    "families": [
      "Standard Gallery",
      "Full Screen",
      "With Thumbnails",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "amenity-grid": {
    "cat": "Property",
    "title": "Amenity Grid",
    "desc": "Feature icons grid.",
    "icon": "🏊",
    "families": [
      "Standard Grid",
      "Compact Grid",
      "With Labels",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "location-map": {
    "cat": "Property",
    "title": "Location Map",
    "desc": "Map card.",
    "icon": "📍",
    "families": [
      "Standard Map",
      "With Points of Interest",
      "Street View",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "floor-plan": {
    "cat": "Property",
    "title": "Floor Plan",
    "desc": "Layout view.",
    "icon": "📐",
    "families": [
      "Standard Plan",
      "Interactive Plan",
      "With Measurements",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "property-compare": {
    "cat": "Property",
    "title": "Property Compare",
    "desc": "Side-by-side comparison.",
    "icon": "⚖️",
    "families": [
      "Standard Compare",
      "Feature Matrix",
      "With Scoring",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "maintenance": {
    "cat": "Property",
    "title": "Maintenance",
    "desc": "Repair request card.",
    "icon": "🔧",
    "families": [
      "Standard Request",
      "With Timeline",
      "Emergency",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "inspection": {
    "cat": "Property",
    "title": "Inspection",
    "desc": "Property inspection card.",
    "icon": "📋",
    "families": [
      "Standard Inspection",
      "Checklist",
      "Report",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "move-checklist": {
    "cat": "Property",
    "title": "Move Checklist",
    "desc": "Moving checklist.",
    "icon": "📦",
    "families": [
      "Standard Checklist",
      "Timeline Checklist",
      "Interactive",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "lease-agreement": {
    "cat": "Legal",
    "title": "Lease Agreement",
    "desc": "Contract display.",
    "icon": "📜",
    "families": [
      "Standard Lease",
      "Summary View",
      "Clause Viewer",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "terms-section": {
    "cat": "Legal",
    "title": "Terms Section",
    "desc": "Legal disclosure.",
    "icon": "📋",
    "families": [
      "Standard Terms",
      "Expandable Terms",
      "Highlighted Terms",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "consent-block": {
    "cat": "Legal",
    "title": "Consent Block",
    "desc": "Agreement checkbox.",
    "icon": "☑️",
    "families": [
      "Standard Consent",
      "Multi Consent",
      "GDPR Consent",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "disclaimer": {
    "cat": "Legal",
    "title": "Disclaimer",
    "desc": "Legal notice.",
    "icon": "⚠️",
    "families": [
      "Standard Disclaimer",
      "Inline Disclaimer",
      "Footer Disclaimer",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "e-signature": {
    "cat": "Legal",
    "title": "E Signature",
    "desc": "Digital signing.",
    "icon": "✍️",
    "families": [
      "Draw Signature",
      "Type Signature",
      "Upload Signature",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "doc-attachment": {
    "cat": "Legal",
    "title": "Doc Attachment",
    "desc": "File display.",
    "icon": "📎",
    "families": [
      "Standard Attachment",
      "Preview Attachment",
      "Multi File",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "audit-log": {
    "cat": "Legal",
    "title": "Audit Log",
    "desc": "Activity trail.",
    "icon": "📋",
    "families": [
      "Standard Log",
      "Filtered Log",
      "Export Log",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "qr-code": {
    "cat": "Legal",
    "title": "QR Code",
    "desc": "Scannable code.",
    "icon": "📱",
    "families": [
      "Standard QR",
      "Styled QR",
      "Dynamic QR",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "testimonial": {
    "cat": "Social Proof",
    "title": "Testimonial",
    "desc": "User testimonials.",
    "icon": "💬",
    "families": [
      "Standard Quote",
      "Card Quote",
      "Carousel",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "rating-summary": {
    "cat": "Social Proof",
    "title": "Rating Summary",
    "desc": "Aggregate ratings.",
    "icon": "⭐",
    "families": [
      "Standard Summary",
      "With Breakdown",
      "Compact",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "review-card": {
    "cat": "Social Proof",
    "title": "Review Card",
    "desc": "User review cards.",
    "icon": "📝",
    "families": [
      "Standard Review",
      "With Photos",
      "Verified Review",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "trust-badge": {
    "cat": "Social Proof",
    "title": "Trust Badge",
    "desc": "Trust and security badges.",
    "icon": "🛡️",
    "families": [
      "Standard Badge",
      "Security Badge",
      "Certification",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "image-carousel": {
    "cat": "Media",
    "title": "Image Carousel",
    "desc": "Image slider component.",
    "icon": "🎠",
    "families": [
      "Standard Carousel",
      "Fullwidth",
      "Thumbnail Nav",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "video-player": {
    "cat": "Media",
    "title": "Video Player",
    "desc": "Video playback component.",
    "icon": "🎬",
    "families": [
      "Standard Player",
      "Mini Player",
      "Inline Player",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "gallery-grid": {
    "cat": "Media",
    "title": "Gallery Grid",
    "desc": "Image grid layout.",
    "icon": "🖼️",
    "families": [
      "Standard Grid",
      "Masonry Grid",
      "With Lightbox",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "settings-row": {
    "cat": "Settings",
    "title": "Settings Row",
    "desc": "Setting toggle rows.",
    "icon": "⚙️",
    "families": [
      "Standard Row",
      "With Description",
      "With Badge",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "notif-pref": {
    "cat": "Settings",
    "title": "Notification Pref",
    "desc": "Notification preferences.",
    "icon": "🔔",
    "families": [
      "Standard Pref",
      "Grouped Pref",
      "Channel Pref",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "privacy-setting": {
    "cat": "Settings",
    "title": "Privacy Setting",
    "desc": "Privacy controls.",
    "icon": "🔐",
    "families": [
      "Standard Privacy",
      "With Explanation",
      "Data Controls",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "account-manage": {
    "cat": "Settings",
    "title": "Account Manage",
    "desc": "Account management.",
    "icon": "👤",
    "families": [
      "Standard Account",
      "With Danger Zone",
      "Profile Edit",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "theme-picker": {
    "cat": "Settings",
    "title": "Theme Picker",
    "desc": "Theme selection.",
    "icon": "🎨",
    "families": [
      "Standard Theme",
      "Color Scheme",
      "Custom Theme",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "language-select": {
    "cat": "Settings",
    "title": "Language Select",
    "desc": "Language selection.",
    "icon": "🌍",
    "families": [
      "Standard Language",
      "With Flags",
      "Search Language",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "sticky-bar": {
    "cat": "Sticky",
    "title": "Sticky Action Bar",
    "desc": "Sticky bottom/top bars.",
    "icon": "📌",
    "families": [
      "Bottom Action",
      "Top Alert",
      "Floating Action",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "floating-banner": {
    "cat": "Sticky",
    "title": "Floating Banner",
    "desc": "Floating promotional banners.",
    "icon": "🎯",
    "families": [
      "Standard Float",
      "Corner Float",
      "Slide In",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "cookie-bar": {
    "cat": "Sticky",
    "title": "Cookie Consent",
    "desc": "Cookie consent bar.",
    "icon": "🍪",
    "families": [
      "Standard Cookie",
      "With Preferences",
      "Minimal",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "push-notif": {
    "cat": "Sticky",
    "title": "Push Notification",
    "desc": "Push notification display.",
    "icon": "📲",
    "families": [
      "Standard Push",
      "Rich Push",
      "Action Push",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "page-transition": {
    "cat": "Transitions",
    "title": "Page Transitions",
    "desc": "Page navigation animations.",
    "icon": "🔄",
    "families": [
      "Fade Transition",
      "Slide Transition",
      "Scale Transition",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "micro-animation": {
    "cat": "Transitions",
    "title": "Micro Animations",
    "desc": "Small interaction animations.",
    "icon": "✨",
    "families": [
      "Hover Effects",
      "Loading Animations",
      "State Changes",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "shared-element": {
    "cat": "Transitions",
    "title": "Shared Element",
    "desc": "Shared element transitions.",
    "icon": "🔗",
    "families": [
      "Card to Detail",
      "List to Detail",
      "Tab Transition",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "search-filter-bar": {
    "cat": "Patterns",
    "title": "Search + Filter",
    "desc": "Combined search and filter.",
    "icon": "🔍",
    "families": [
      "Standard Bar",
      "With Chips",
      "Advanced Filters",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "bulk-selection": {
    "cat": "Patterns",
    "title": "Bulk Selection",
    "desc": "Multi-item selection.",
    "icon": "☑️",
    "families": [
      "Standard Bulk",
      "With Toolbar",
      "Floating Actions",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "drag-drop": {
    "cat": "Patterns",
    "title": "Drag & Drop",
    "desc": "Drag and drop interfaces.",
    "icon": "👆",
    "families": [
      "List Reorder",
      "Grid Reorder",
      "Kanban",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "infinite-scroll": {
    "cat": "Patterns",
    "title": "Infinite Scroll",
    "desc": "Infinite scrolling lists.",
    "icon": "📜",
    "families": [
      "Standard Infinite",
      "With Loader",
      "Virtual Scroll",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "pull-refresh": {
    "cat": "Patterns",
    "title": "Pull to Refresh",
    "desc": "Pull-to-refresh gesture.",
    "icon": "🔄",
    "families": [
      "Standard Pull",
      "Custom Animation",
      "With Message",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "share-sheet": {
    "cat": "Patterns",
    "title": "Share Sheet",
    "desc": "Share action sheet.",
    "icon": "📤",
    "families": [
      "Standard Share",
      "Social Share",
      "Copy Link",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "rent-reporting": {
    "cat": "Product",
    "title": "Rent Reporting",
    "desc": "Credit reporting components.",
    "icon": "📊",
    "families": [
      "Standard Report",
      "Score Impact",
      "History View",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "payment-history": {
    "cat": "Product",
    "title": "Payment History",
    "desc": "Transaction log.",
    "icon": "💰",
    "families": [
      "Standard History",
      "Grouped History",
      "With Filters",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "tenant-invite": {
    "cat": "Product",
    "title": "Tenant Invite",
    "desc": "Invitation flow.",
    "icon": "📧",
    "families": [
      "Standard Invite",
      "Bulk Invite",
      "With Preview",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "add-property": {
    "cat": "Product",
    "title": "Add Property",
    "desc": "Property creation flow.",
    "icon": "🏠",
    "families": [
      "Standard Add",
      "Wizard Add",
      "Quick Add",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "tenant-screening": {
    "cat": "Product",
    "title": "Screening",
    "desc": "Background check.",
    "icon": "🔍",
    "families": [
      "Standard Screen",
      "Detailed Screen",
      "Quick Screen",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "verified-report": {
    "cat": "Product",
    "title": "Verified Report",
    "desc": "Verification card.",
    "icon": "✅",
    "families": [
      "Standard Verified",
      "With Score",
      "Download Report",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "investor-dash": {
    "cat": "Product",
    "title": "Investor Dash",
    "desc": "Investment view.",
    "icon": "📈",
    "families": [
      "Standard Dash",
      "With Charts",
      "Portfolio View",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "candidate-search": {
    "cat": "Product",
    "title": "Candidate Search",
    "desc": "Tenant search.",
    "icon": "👥",
    "families": [
      "Standard Search",
      "With Filters",
      "Map Search",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "sign-lease": {
    "cat": "Product",
    "title": "Sign & Lease",
    "desc": "Digital lease signing.",
    "icon": "✍️",
    "families": [
      "Standard Signing",
      "Multi Party",
      "With Preview",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "membership-life": {
    "cat": "Product",
    "title": "Membership Life",
    "desc": "Membership lifecycle.",
    "icon": "💳",
    "families": [
      "Active Member",
      "Upgrade Path",
      "Renewal",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "rewards-redeem": {
    "cat": "Product",
    "title": "Rewards Redeem",
    "desc": "Reward redemption.",
    "icon": "🎁",
    "families": [
      "Standard Redeem",
      "Catalog View",
      "Checkout",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "rm-pattern": {
    "cat": "Product",
    "title": "RM Pattern",
    "desc": "Relationship management.",
    "icon": "🤝",
    "families": [
      "Standard RM",
      "Communication",
      "Schedule",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "report-filter": {
    "cat": "Product",
    "title": "Report Filter",
    "desc": "Report filtering.",
    "icon": "🔻",
    "families": [
      "Standard Filter",
      "Date Range",
      "Multi Dimension",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "profile-edit": {
    "cat": "Product",
    "title": "Profile Edit",
    "desc": "Profile editing.",
    "icon": "👤",
    "families": [
      "Standard Edit",
      "Photo Upload",
      "Multi Section",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "notif-center": {
    "cat": "Product",
    "title": "Notification Center",
    "desc": "Notification management.",
    "icon": "🔔",
    "families": [
      "Standard Center",
      "Grouped",
      "With Actions",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "kyc-flow": {
    "cat": "Product",
    "title": "KYC Flow",
    "desc": "Identity verification.",
    "icon": "🪪",
    "families": [
      "Standard KYC",
      "Document Upload",
      "Video KYC",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "subscription": {
    "cat": "Product",
    "title": "Subscription",
    "desc": "Plan management.",
    "icon": "🔁",
    "families": [
      "Standard Plan",
      "Comparison",
      "Billing History",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "page-list": {
    "cat": "Templates",
    "title": "List Page",
    "desc": "Data listing template.",
    "icon": "📋",
    "families": [
      "Standard List",
      "With Sidebar",
      "Split View",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "page-detail": {
    "cat": "Templates",
    "title": "Detail Page",
    "desc": "Single item view template.",
    "icon": "📄",
    "families": [
      "Standard Detail",
      "Tabbed Detail",
      "With Sidebar",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "page-dashboard": {
    "cat": "Templates",
    "title": "Dashboard Page",
    "desc": "Overview layout template.",
    "icon": "📊",
    "families": [
      "Standard Dashboard",
      "KPI Focus",
      "Activity Focus",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "page-form": {
    "cat": "Templates",
    "title": "Form Page",
    "desc": "Data entry template.",
    "icon": "📝",
    "families": [
      "Standard Form",
      "Wizard Form",
      "Side Panel Form",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "page-modal-flow": {
    "cat": "Templates",
    "title": "Modal Flow",
    "desc": "Multi-step modal template.",
    "icon": "🪟",
    "families": [
      "Standard Flow",
      "With Preview",
      "Split Modal",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "page-settings": {
    "cat": "Templates",
    "title": "Settings Page",
    "desc": "Preferences template.",
    "icon": "⚙️",
    "families": [
      "Standard Settings",
      "Tabbed Settings",
      "Grouped",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "page-onboarding": {
    "cat": "Templates",
    "title": "Onboarding Page",
    "desc": "Welcome flow template.",
    "icon": "🎉",
    "families": [
      "Standard Onboarding",
      "Carousel",
      "Progressive",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "page-error": {
    "cat": "Templates",
    "title": "Error Page",
    "desc": "404/500 template.",
    "icon": "❌",
    "families": [
      "Standard 404",
      "500 Server Error",
      "Maintenance",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "page-auth": {
    "cat": "Templates",
    "title": "Auth Page",
    "desc": "Login/signup template.",
    "icon": "🔑",
    "families": [
      "Standard Auth",
      "Split Screen",
      "Minimal",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "page-empty": {
    "cat": "Templates",
    "title": "Empty Page",
    "desc": "No content template.",
    "icon": "📭",
    "families": [
      "Standard Empty",
      "With Actions",
      "Illustrated",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "page-success": {
    "cat": "Templates",
    "title": "Success Page",
    "desc": "Completion template.",
    "icon": "✅",
    "families": [
      "Standard Success",
      "With Confetti",
      "Next Steps",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "solid-bg": {
    "cat": "Backgrounds",
    "title": "Solid Colors",
    "desc": "Solid background colors.",
    "icon": "🎨",
    "families": [
      "Primary Fill",
      "Surface Fill",
      "Muted Fill",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "mesh-bg": {
    "cat": "Backgrounds",
    "title": "Mesh Gradients",
    "desc": "Smooth mesh gradient backgrounds.",
    "icon": "🌈",
    "families": [
      "Brand Mesh",
      "Subtle Mesh",
      "Dark Mesh",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "pattern-bg": {
    "cat": "Backgrounds",
    "title": "Patterns",
    "desc": "Subtle repeating patterns.",
    "icon": "🏁",
    "families": [
      "Dot Grid",
      "Line Grid",
      "Noise Texture",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },
  "animated-bg": {
    "cat": "Backgrounds",
    "title": "Animated",
    "desc": "Subtly moving backgrounds.",
    "icon": "✨",
    "families": [
      "Floating Orbs",
      "Wave Motion",
      "Aurora",
      "With Helper Text",
      "Error State",
      "Disabled State"
    ]
  },

  // ══════════════════════════════════════════════════════════════
  // AUTO-EXPANSION: 255+ NEW COMPONENTS (preserving all existing)
  // ══════════════════════════════════════════════════════════════
  "bottom-tab-bar": { "cat": "Bottom Bars", "title": "Tab Bottom Bar", "desc": "Standard tab-based bottom navigation.", "icon": "📱", "families": ["iOS Standard 5-Tab Bar","Floating Glass Pill Dock","Icon-Only Minimal Dock","Curved FAB Notch Bar","Dynamic Island Adaptive Bar","Labeled Icon Grid Bar","Scrollable Category Bar","Split Action Bottom Bar","Gradient Glow Dock","Dark Frosted Command Dock"] },
  "floating-pill-nav": { "cat": "Bottom Bars", "title": "Floating Pill Nav", "desc": "Floating pill-shaped bottom nav bar.", "icon": "💊", "families": ["iOS Standard 5-Tab Bar","Floating Glass Pill Dock","Icon-Only Minimal Dock","Curved FAB Notch Bar","Dynamic Island Adaptive Bar","Labeled Icon Grid Bar","Scrollable Category Bar","Split Action Bottom Bar","Gradient Glow Dock","Dark Frosted Command Dock"] },
  "icon-only-nav": { "cat": "Bottom Bars", "title": "Icon-Only Dock", "desc": "Minimal icon-only navigation dock.", "icon": "⚡", "families": ["iOS Standard 5-Tab Bar","Floating Glass Pill Dock","Icon-Only Minimal Dock","Curved FAB Notch Bar","Dynamic Island Adaptive Bar","Labeled Icon Grid Bar","Scrollable Category Bar","Split Action Bottom Bar","Gradient Glow Dock","Dark Frosted Command Dock"] },
  "curved-notch-nav": { "cat": "Bottom Bars", "title": "Curved Notch Nav", "desc": "Curved center-notch with FAB.", "icon": "🌊", "families": ["iOS Standard 5-Tab Bar","Floating Glass Pill Dock","Icon-Only Minimal Dock","Curved FAB Notch Bar","Dynamic Island Adaptive Bar","Labeled Icon Grid Bar","Scrollable Category Bar","Split Action Bottom Bar","Gradient Glow Dock","Dark Frosted Command Dock"] },
  "dynamic-island-nav": { "cat": "Bottom Bars", "title": "Dynamic Island Nav", "desc": "Apple-style Dynamic Island bottom bar.", "icon": "🏝️", "families": ["iOS Standard 5-Tab Bar","Floating Glass Pill Dock","Icon-Only Minimal Dock","Curved FAB Notch Bar","Dynamic Island Adaptive Bar","Labeled Icon Grid Bar","Scrollable Category Bar","Split Action Bottom Bar","Gradient Glow Dock","Dark Frosted Command Dock"] },
  "gesture-nav": { "cat": "Bottom Bars", "title": "Gesture Nav Bar", "desc": "Swipe/gesture-based minimal nav.", "icon": "👆", "families": ["iOS Standard 5-Tab Bar","Floating Glass Pill Dock","Icon-Only Minimal Dock","Curved FAB Notch Bar","Dynamic Island Adaptive Bar","Labeled Icon Grid Bar","Scrollable Category Bar","Split Action Bottom Bar","Gradient Glow Dock","Dark Frosted Command Dock"] },
  "compact-sheet": { "cat": "Sheets & Drawers", "title": "Compact Sheet", "desc": "Small quick-action bottom sheet.", "icon": "📋", "families": ["Minimal Quick-Action Sheet","Scroll-Snap Multi-Stop Sheet","Full-Screen Immersive Sheet","Side-Sliding Panel Drawer","Nested Multi-Step Sheet Stack","Form-Focused Keyboard Sheet","Map & Location Sheet","Image Gallery Sheet","Search Results Sheet","Dark Glass Command Sheet"] },
  "full-sheet": { "cat": "Sheets & Drawers", "title": "Full Sheet", "desc": "Full-screen expandable sheet.", "icon": "📄", "families": ["Minimal Quick-Action Sheet","Scroll-Snap Multi-Stop Sheet","Full-Screen Immersive Sheet","Side-Sliding Panel Drawer","Nested Multi-Step Sheet Stack","Form-Focused Keyboard Sheet","Map & Location Sheet","Image Gallery Sheet","Search Results Sheet","Dark Glass Command Sheet"] },
  "side-drawer": { "cat": "Sheets & Drawers", "title": "Side Drawer", "desc": "Side-sliding drawer panel.", "icon": "🗂️", "families": ["Minimal Quick-Action Sheet","Scroll-Snap Multi-Stop Sheet","Full-Screen Immersive Sheet","Side-Sliding Panel Drawer","Nested Multi-Step Sheet Stack","Form-Focused Keyboard Sheet","Map & Location Sheet","Image Gallery Sheet","Search Results Sheet","Dark Glass Command Sheet"] },
  "nested-sheet": { "cat": "Sheets & Drawers", "title": "Nested Sheet", "desc": "Multi-step nested sheet stack.", "icon": "📚", "families": ["Minimal Quick-Action Sheet","Scroll-Snap Multi-Stop Sheet","Full-Screen Immersive Sheet","Side-Sliding Panel Drawer","Nested Multi-Step Sheet Stack","Form-Focused Keyboard Sheet","Map & Location Sheet","Image Gallery Sheet","Search Results Sheet","Dark Glass Command Sheet"] },
  "scroll-sheet": { "cat": "Sheets & Drawers", "title": "Scroll Sheet", "desc": "Scrollable content sheet.", "icon": "📜", "families": ["Minimal Quick-Action Sheet","Scroll-Snap Multi-Stop Sheet","Full-Screen Immersive Sheet","Side-Sliding Panel Drawer","Nested Multi-Step Sheet Stack","Form-Focused Keyboard Sheet","Map & Location Sheet","Image Gallery Sheet","Search Results Sheet","Dark Glass Command Sheet"] },
  "modal-sheet": { "cat": "Sheets & Drawers", "title": "Modal Sheet", "desc": "Modal-style centered sheet.", "icon": "🪟", "families": ["Minimal Quick-Action Sheet","Scroll-Snap Multi-Stop Sheet","Full-Screen Immersive Sheet","Side-Sliding Panel Drawer","Nested Multi-Step Sheet Stack","Form-Focused Keyboard Sheet","Map & Location Sheet","Image Gallery Sheet","Search Results Sheet","Dark Glass Command Sheet"] },
  "keyboard-sheet": { "cat": "Sheets & Drawers", "title": "Keyboard Sheet", "desc": "Input-focused keyboard-aware sheet.", "icon": "⌨️", "families": ["Minimal Quick-Action Sheet","Scroll-Snap Multi-Stop Sheet","Full-Screen Immersive Sheet","Side-Sliding Panel Drawer","Nested Multi-Step Sheet Stack","Form-Focused Keyboard Sheet","Map & Location Sheet","Image Gallery Sheet","Search Results Sheet","Dark Glass Command Sheet"] },
  "map-sheet": { "cat": "Sheets & Drawers", "title": "Map Sheet", "desc": "Location/map-integrated sheet.", "icon": "🗺️", "families": ["Minimal Quick-Action Sheet","Scroll-Snap Multi-Stop Sheet","Full-Screen Immersive Sheet","Side-Sliding Panel Drawer","Nested Multi-Step Sheet Stack","Form-Focused Keyboard Sheet","Map & Location Sheet","Image Gallery Sheet","Search Results Sheet","Dark Glass Command Sheet"] },
  "primary-btn": { "cat": "Buttons", "title": "Primary Button", "desc": "Main CTA action button.", "icon": "🔵", "families": ["Filled Primary CTA Button","Outlined Secondary Button","Text-Only Tertiary Link","Icon-Only Circular Action","Pill Rounded Action Button","Premium Gradient CTA","Loading State Spinner Button","Split Dropdown Action","Segmented Button Group","Dark Prestige Action Button"] },
  "secondary-btn": { "cat": "Buttons", "title": "Secondary Button", "desc": "Secondary outlined action.", "icon": "⚪", "families": ["Filled Primary CTA Button","Outlined Secondary Button","Text-Only Tertiary Link","Icon-Only Circular Action","Pill Rounded Action Button","Premium Gradient CTA","Loading State Spinner Button","Split Dropdown Action","Segmented Button Group","Dark Prestige Action Button"] },
  "tertiary-btn": { "cat": "Buttons", "title": "Tertiary Button", "desc": "Text-only action button.", "icon": "📝", "families": ["Filled Primary CTA Button","Outlined Secondary Button","Text-Only Tertiary Link","Icon-Only Circular Action","Pill Rounded Action Button","Premium Gradient CTA","Loading State Spinner Button","Split Dropdown Action","Segmented Button Group","Dark Prestige Action Button"] },
  "icon-btn": { "cat": "Buttons", "title": "Icon Button", "desc": "Icon-only circular action.", "icon": "⭕", "families": ["Filled Primary CTA Button","Outlined Secondary Button","Text-Only Tertiary Link","Icon-Only Circular Action","Pill Rounded Action Button","Premium Gradient CTA","Loading State Spinner Button","Split Dropdown Action","Segmented Button Group","Dark Prestige Action Button"] },
  "pill-btn": { "cat": "Buttons", "title": "Pill Button", "desc": "Pill-shaped rounded button.", "icon": "💊", "families": ["Filled Primary CTA Button","Outlined Secondary Button","Text-Only Tertiary Link","Icon-Only Circular Action","Pill Rounded Action Button","Premium Gradient CTA","Loading State Spinner Button","Split Dropdown Action","Segmented Button Group","Dark Prestige Action Button"] },
  "gradient-btn": { "cat": "Buttons", "title": "Gradient Button", "desc": "Premium gradient-filled button.", "icon": "🌈", "families": ["Filled Primary CTA Button","Outlined Secondary Button","Text-Only Tertiary Link","Icon-Only Circular Action","Pill Rounded Action Button","Premium Gradient CTA","Loading State Spinner Button","Split Dropdown Action","Segmented Button Group","Dark Prestige Action Button"] },
  "loading-btn": { "cat": "Buttons", "title": "Loading Button", "desc": "Button with loading spinner states.", "icon": "⏳", "families": ["Filled Primary CTA Button","Outlined Secondary Button","Text-Only Tertiary Link","Icon-Only Circular Action","Pill Rounded Action Button","Premium Gradient CTA","Loading State Spinner Button","Split Dropdown Action","Segmented Button Group","Dark Prestige Action Button"] },
  "split-btn": { "cat": "Buttons", "title": "Split Button", "desc": "Button with dropdown menu.", "icon": "✂️", "families": ["Filled Primary CTA Button","Outlined Secondary Button","Text-Only Tertiary Link","Icon-Only Circular Action","Pill Rounded Action Button","Premium Gradient CTA","Loading State Spinner Button","Split Dropdown Action","Segmented Button Group","Dark Prestige Action Button"] },
  "group-btn": { "cat": "Buttons", "title": "Button Group", "desc": "Grouped button toolbar.", "icon": "🔲", "families": ["Filled Primary CTA Button","Outlined Secondary Button","Text-Only Tertiary Link","Icon-Only Circular Action","Pill Rounded Action Button","Premium Gradient CTA","Loading State Spinner Button","Split Dropdown Action","Segmented Button Group","Dark Prestige Action Button"] },
  "toggle-btn": { "cat": "Buttons", "title": "Toggle Button", "desc": "Toggle button with active state.", "icon": "🔘", "families": ["Filled Primary CTA Button","Outlined Secondary Button","Text-Only Tertiary Link","Icon-Only Circular Action","Pill Rounded Action Button","Premium Gradient CTA","Loading State Spinner Button","Split Dropdown Action","Segmented Button Group","Dark Prestige Action Button"] },
  "destructive-btn": { "cat": "Buttons", "title": "Destructive Button", "desc": "Danger/delete action button.", "icon": "🗑️", "families": ["Filled Primary CTA Button","Outlined Secondary Button","Text-Only Tertiary Link","Icon-Only Circular Action","Pill Rounded Action Button","Premium Gradient CTA","Loading State Spinner Button","Split Dropdown Action","Segmented Button Group","Dark Prestige Action Button"] },
  "social-btn": { "cat": "Buttons", "title": "Social Button", "desc": "Social media login buttons.", "icon": "🔗", "families": ["Filled Primary CTA Button","Outlined Secondary Button","Text-Only Tertiary Link","Icon-Only Circular Action","Pill Rounded Action Button","Premium Gradient CTA","Loading State Spinner Button","Split Dropdown Action","Segmented Button Group","Dark Prestige Action Button"] },
  "avatar-single": { "cat": "Avatars & Profiles", "title": "Single Avatar", "desc": "User avatar with size variants.", "icon": "👤", "families": ["Circle Photo Avatar (SM/MD/LG)","Rounded Square Avatar","Stacked Group Avatar (+N)","Online/Offline Presence Dot","Notification Badge Count","Camera Edit Overlay Avatar","Initials Placeholder Avatar","Gradient Ring Avatar","Verified Check Avatar","Dark Profile Shield Avatar"] },
  "avatar-group": { "cat": "Avatars & Profiles", "title": "Avatar Group", "desc": "Stacked avatar group display.", "icon": "👥", "families": ["Circle Photo Avatar (SM/MD/LG)","Rounded Square Avatar","Stacked Group Avatar (+N)","Online/Offline Presence Dot","Notification Badge Count","Camera Edit Overlay Avatar","Initials Placeholder Avatar","Gradient Ring Avatar","Verified Check Avatar","Dark Profile Shield Avatar"] },
  "avatar-presence": { "cat": "Avatars & Profiles", "title": "Avatar Presence", "desc": "Avatar with online/offline status.", "icon": "🟢", "families": ["Circle Photo Avatar (SM/MD/LG)","Rounded Square Avatar","Stacked Group Avatar (+N)","Online/Offline Presence Dot","Notification Badge Count","Camera Edit Overlay Avatar","Initials Placeholder Avatar","Gradient Ring Avatar","Verified Check Avatar","Dark Profile Shield Avatar"] },
  "avatar-badge": { "cat": "Avatars & Profiles", "title": "Avatar Badge", "desc": "Avatar with notification count.", "icon": "🔴", "families": ["Circle Photo Avatar (SM/MD/LG)","Rounded Square Avatar","Stacked Group Avatar (+N)","Online/Offline Presence Dot","Notification Badge Count","Camera Edit Overlay Avatar","Initials Placeholder Avatar","Gradient Ring Avatar","Verified Check Avatar","Dark Profile Shield Avatar"] },
  "avatar-edit": { "cat": "Avatars & Profiles", "title": "Avatar Edit", "desc": "Editable avatar with camera overlay.", "icon": "📸", "families": ["Circle Photo Avatar (SM/MD/LG)","Rounded Square Avatar","Stacked Group Avatar (+N)","Online/Offline Presence Dot","Notification Badge Count","Camera Edit Overlay Avatar","Initials Placeholder Avatar","Gradient Ring Avatar","Verified Check Avatar","Dark Profile Shield Avatar"] },
  "avatar-placeholder": { "cat": "Avatars & Profiles", "title": "Avatar Placeholder", "desc": "Initials/icon placeholder avatar.", "icon": "🅰️", "families": ["Circle Photo Avatar (SM/MD/LG)","Rounded Square Avatar","Stacked Group Avatar (+N)","Online/Offline Presence Dot","Notification Badge Count","Camera Edit Overlay Avatar","Initials Placeholder Avatar","Gradient Ring Avatar","Verified Check Avatar","Dark Profile Shield Avatar"] },
  "status-chip": { "cat": "Chips & Tags", "title": "Status Chip", "desc": "Colored status indicator chips.", "icon": "🏷️", "families": ["Success/Error Status Chip","Removable Input Tag Chip","Single-Select Choice Pill","AI Assist Suggestion Chip","Autocomplete Chip","Price Amount Chip","Category Filter Chip","Icon-Leading Action Chip","Multi-Select Count Chip","Dark Glass Command Chip"] },
  "input-chip": { "cat": "Chips & Tags", "title": "Input Chip", "desc": "User-entered removable chips.", "icon": "✏️", "families": ["Success/Error Status Chip","Removable Input Tag Chip","Single-Select Choice Pill","AI Assist Suggestion Chip","Autocomplete Chip","Price Amount Chip","Category Filter Chip","Icon-Leading Action Chip","Multi-Select Count Chip","Dark Glass Command Chip"] },
  "choice-chip": { "cat": "Chips & Tags", "title": "Choice Chip", "desc": "Single-select choice chips.", "icon": "☑️", "families": ["Success/Error Status Chip","Removable Input Tag Chip","Single-Select Choice Pill","AI Assist Suggestion Chip","Autocomplete Chip","Price Amount Chip","Category Filter Chip","Icon-Leading Action Chip","Multi-Select Count Chip","Dark Glass Command Chip"] },
  "assist-chip": { "cat": "Chips & Tags", "title": "Assist Chip", "desc": "AI/smart suggestion chips.", "icon": "🤖", "families": ["Success/Error Status Chip","Removable Input Tag Chip","Single-Select Choice Pill","AI Assist Suggestion Chip","Autocomplete Chip","Price Amount Chip","Category Filter Chip","Icon-Leading Action Chip","Multi-Select Count Chip","Dark Glass Command Chip"] },
  "suggestion-chip": { "cat": "Chips & Tags", "title": "Suggestion Chip", "desc": "Auto-complete suggestion chips.", "icon": "💡", "families": ["Success/Error Status Chip","Removable Input Tag Chip","Single-Select Choice Pill","AI Assist Suggestion Chip","Autocomplete Chip","Price Amount Chip","Category Filter Chip","Icon-Leading Action Chip","Multi-Select Count Chip","Dark Glass Command Chip"] },
  "price-chip": { "cat": "Chips & Tags", "title": "Price Chip", "desc": "Price/amount display chips.", "icon": "💰", "families": ["Success/Error Status Chip","Removable Input Tag Chip","Single-Select Choice Pill","AI Assist Suggestion Chip","Autocomplete Chip","Price Amount Chip","Category Filter Chip","Icon-Leading Action Chip","Multi-Select Count Chip","Dark Glass Command Chip"] },
  "promo-banner": { "cat": "Banners", "title": "Promo Banner", "desc": "Promotional marketing banner.", "icon": "📢", "families": ["Full-Width Hero Promo Banner","Slim Alert System Banner","Animated Feature Launch Banner","Critical Urgent Action Banner","Dismissible Offer Card","Step Progress Onboard Banner","Split Media & Text Banner","Countdown Timer Banner","Testimonial Slide Banner","Dark Announcement Broadcast"] },
  "system-banner": { "cat": "Banners", "title": "System Banner", "desc": "System maintenance/update banner.", "icon": "⚙️", "families": ["Full-Width Hero Promo Banner","Slim Alert System Banner","Animated Feature Launch Banner","Critical Urgent Action Banner","Dismissible Offer Card","Step Progress Onboard Banner","Split Media & Text Banner","Countdown Timer Banner","Testimonial Slide Banner","Dark Announcement Broadcast"] },
  "feature-banner": { "cat": "Banners", "title": "Feature Banner", "desc": "New feature announcement banner.", "icon": "✨", "families": ["Full-Width Hero Promo Banner","Slim Alert System Banner","Animated Feature Launch Banner","Critical Urgent Action Banner","Dismissible Offer Card","Step Progress Onboard Banner","Split Media & Text Banner","Countdown Timer Banner","Testimonial Slide Banner","Dark Announcement Broadcast"] },
  "urgent-banner": { "cat": "Banners", "title": "Urgent Banner", "desc": "Critical urgent action banner.", "icon": "🚨", "families": ["Full-Width Hero Promo Banner","Slim Alert System Banner","Animated Feature Launch Banner","Critical Urgent Action Banner","Dismissible Offer Card","Step Progress Onboard Banner","Split Media & Text Banner","Countdown Timer Banner","Testimonial Slide Banner","Dark Announcement Broadcast"] },
  "offer-banner": { "cat": "Banners", "title": "Offer Banner", "desc": "Limited-time offer banner.", "icon": "🎁", "families": ["Full-Width Hero Promo Banner","Slim Alert System Banner","Animated Feature Launch Banner","Critical Urgent Action Banner","Dismissible Offer Card","Step Progress Onboard Banner","Split Media & Text Banner","Countdown Timer Banner","Testimonial Slide Banner","Dark Announcement Broadcast"] },
  "onboard-banner": { "cat": "Banners", "title": "Onboard Banner", "desc": "Onboarding progress banner.", "icon": "🚀", "families": ["Full-Width Hero Promo Banner","Slim Alert System Banner","Animated Feature Launch Banner","Critical Urgent Action Banner","Dismissible Offer Card","Step Progress Onboard Banner","Split Media & Text Banner","Countdown Timer Banner","Testimonial Slide Banner","Dark Announcement Broadcast"] },
  "global-search": { "cat": "Search", "title": "Global Search", "desc": "Full app search with categories.", "icon": "🔍", "families": ["Global Search with Categories","In-Context Inline Search","Voice Command Search Bar","Multi-Filter Chip Search","Spotlight Command Palette","Recent & Trending History","Visual Result Grid Search","Autocomplete Dropdown Search","Location-Aware Map Search","Dark Hacker Terminal Search"] },
  "contextual-search": { "cat": "Search", "title": "Contextual Search", "desc": "In-page contextual search.", "icon": "🔎", "families": ["Global Search with Categories","In-Context Inline Search","Voice Command Search Bar","Multi-Filter Chip Search","Spotlight Command Palette","Recent & Trending History","Visual Result Grid Search","Autocomplete Dropdown Search","Location-Aware Map Search","Dark Hacker Terminal Search"] },
  "voice-search": { "cat": "Search", "title": "Voice Search", "desc": "Voice-input search interface.", "icon": "🎤", "families": ["Global Search with Categories","In-Context Inline Search","Voice Command Search Bar","Multi-Filter Chip Search","Spotlight Command Palette","Recent & Trending History","Visual Result Grid Search","Autocomplete Dropdown Search","Location-Aware Map Search","Dark Hacker Terminal Search"] },
  "filter-search": { "cat": "Search", "title": "Filter Search", "desc": "Search with inline filter chips.", "icon": "🏷️", "families": ["Global Search with Categories","In-Context Inline Search","Voice Command Search Bar","Multi-Filter Chip Search","Spotlight Command Palette","Recent & Trending History","Visual Result Grid Search","Autocomplete Dropdown Search","Location-Aware Map Search","Dark Hacker Terminal Search"] },
  "spotlight-search": { "cat": "Search", "title": "Spotlight Search", "desc": "macOS-style spotlight search.", "icon": "💫", "families": ["Global Search with Categories","In-Context Inline Search","Voice Command Search Bar","Multi-Filter Chip Search","Spotlight Command Palette","Recent & Trending History","Visual Result Grid Search","Autocomplete Dropdown Search","Location-Aware Map Search","Dark Hacker Terminal Search"] },
  "recent-search": { "cat": "Search", "title": "Recent Search", "desc": "Recent searches with history.", "icon": "🕐", "families": ["Global Search with Categories","In-Context Inline Search","Voice Command Search Bar","Multi-Filter Chip Search","Spotlight Command Palette","Recent & Trending History","Visual Result Grid Search","Autocomplete Dropdown Search","Location-Aware Map Search","Dark Hacker Terminal Search"] },
  "push-notification": { "cat": "Notifications", "title": "Push Notification", "desc": "System push notification card.", "icon": "🔔", "families": ["iOS Push Notification Card","In-App Top Banner Alert","Grouped Timeline Feed","Dot & Badge Indicators","Full Notification Center Panel","Stacked Group Notifications","Actionable CTA Notification","Preference Settings Panel","Toast Float Notification","Dark System Alert Card"] },
  "in-app-banner-notif": { "cat": "Notifications", "title": "In-App Banner", "desc": "In-app top banner notification.", "icon": "📣", "families": ["iOS Push Notification Card","In-App Top Banner Alert","Grouped Timeline Feed","Dot & Badge Indicators","Full Notification Center Panel","Stacked Group Notifications","Actionable CTA Notification","Preference Settings Panel","Toast Float Notification","Dark System Alert Card"] },
  "notification-list": { "cat": "Notifications", "title": "Notification List", "desc": "Full notification feed list.", "icon": "📋", "families": ["iOS Push Notification Card","In-App Top Banner Alert","Grouped Timeline Feed","Dot & Badge Indicators","Full Notification Center Panel","Stacked Group Notifications","Actionable CTA Notification","Preference Settings Panel","Toast Float Notification","Dark System Alert Card"] },
  "notification-dot": { "cat": "Notifications", "title": "Notification Dot", "desc": "Badge/dot notification indicators.", "icon": "🔴", "families": ["iOS Push Notification Card","In-App Top Banner Alert","Grouped Timeline Feed","Dot & Badge Indicators","Full Notification Center Panel","Stacked Group Notifications","Actionable CTA Notification","Preference Settings Panel","Toast Float Notification","Dark System Alert Card"] },
  "notif-group": { "cat": "Notifications", "title": "Notification Group", "desc": "Grouped notification stack.", "icon": "📬", "families": ["iOS Push Notification Card","In-App Top Banner Alert","Grouped Timeline Feed","Dot & Badge Indicators","Full Notification Center Panel","Stacked Group Notifications","Actionable CTA Notification","Preference Settings Panel","Toast Float Notification","Dark System Alert Card"] },
  "notif-action": { "cat": "Notifications", "title": "Actionable Notification", "desc": "Notification with CTA actions.", "icon": "⚡", "families": ["iOS Push Notification Card","In-App Top Banner Alert","Grouped Timeline Feed","Dot & Badge Indicators","Full Notification Center Panel","Stacked Group Notifications","Actionable CTA Notification","Preference Settings Panel","Toast Float Notification","Dark System Alert Card"] },
  "notif-settings": { "cat": "Notifications", "title": "Notification Settings", "desc": "Notification preferences panel.", "icon": "⚙️", "families": ["iOS Push Notification Card","In-App Top Banner Alert","Grouped Timeline Feed","Dot & Badge Indicators","Full Notification Center Panel","Stacked Group Notifications","Actionable CTA Notification","Preference Settings Panel","Toast Float Notification","Dark System Alert Card"] },
  "balance-card": { "cat": "Financial Widgets", "title": "Balance Card", "desc": "Account balance display card.", "icon": "💳", "families": ["Balance Overview Hero Card","Transaction Detail Row","Category Spending Donut","Credit Score Gauge Meter","EMI Slider Calculator","Live Exchange Rate Ticker","Split Bill Calculator","Savings Goal Progress Ring","Budget Threshold Meter","Dark Vault Financial Card"] },
  "transaction-card": { "cat": "Financial Widgets", "title": "Transaction Card", "desc": "Individual transaction detail.", "icon": "💸", "families": ["Balance Overview Hero Card","Transaction Detail Row","Category Spending Donut","Credit Score Gauge Meter","EMI Slider Calculator","Live Exchange Rate Ticker","Split Bill Calculator","Savings Goal Progress Ring","Budget Threshold Meter","Dark Vault Financial Card"] },
  "spending-chart": { "cat": "Financial Widgets", "title": "Spending Chart", "desc": "Spending category breakdown.", "icon": "📊", "families": ["Balance Overview Hero Card","Transaction Detail Row","Category Spending Donut","Credit Score Gauge Meter","EMI Slider Calculator","Live Exchange Rate Ticker","Split Bill Calculator","Savings Goal Progress Ring","Budget Threshold Meter","Dark Vault Financial Card"] },
  "credit-score": { "cat": "Financial Widgets", "title": "Credit Score", "desc": "Credit score gauge card.", "icon": "📈", "families": ["Balance Overview Hero Card","Transaction Detail Row","Category Spending Donut","Credit Score Gauge Meter","EMI Slider Calculator","Live Exchange Rate Ticker","Split Bill Calculator","Savings Goal Progress Ring","Budget Threshold Meter","Dark Vault Financial Card"] },
  "emi-calculator": { "cat": "Financial Widgets", "title": "EMI Calculator", "desc": "EMI/loan calculator widget.", "icon": "🧮", "families": ["Balance Overview Hero Card","Transaction Detail Row","Category Spending Donut","Credit Score Gauge Meter","EMI Slider Calculator","Live Exchange Rate Ticker","Split Bill Calculator","Savings Goal Progress Ring","Budget Threshold Meter","Dark Vault Financial Card"] },
  "exchange-rate": { "cat": "Financial Widgets", "title": "Exchange Rate", "desc": "Currency exchange rate card.", "icon": "💱", "families": ["Balance Overview Hero Card","Transaction Detail Row","Category Spending Donut","Credit Score Gauge Meter","EMI Slider Calculator","Live Exchange Rate Ticker","Split Bill Calculator","Savings Goal Progress Ring","Budget Threshold Meter","Dark Vault Financial Card"] },
  "bill-split": { "cat": "Financial Widgets", "title": "Bill Split", "desc": "Bill splitting calculator.", "icon": "✂️", "families": ["Balance Overview Hero Card","Transaction Detail Row","Category Spending Donut","Credit Score Gauge Meter","EMI Slider Calculator","Live Exchange Rate Ticker","Split Bill Calculator","Savings Goal Progress Ring","Budget Threshold Meter","Dark Vault Financial Card"] },
  "savings-goal": { "cat": "Financial Widgets", "title": "Savings Goal", "desc": "Savings goal progress tracker.", "icon": "🎯", "families": ["Balance Overview Hero Card","Transaction Detail Row","Category Spending Donut","Credit Score Gauge Meter","EMI Slider Calculator","Live Exchange Rate Ticker","Split Bill Calculator","Savings Goal Progress Ring","Budget Threshold Meter","Dark Vault Financial Card"] },
  "budget-meter": { "cat": "Financial Widgets", "title": "Budget Meter", "desc": "Monthly budget meter/gauge.", "icon": "📉", "families": ["Balance Overview Hero Card","Transaction Detail Row","Category Spending Donut","Credit Score Gauge Meter","EMI Slider Calculator","Live Exchange Rate Ticker","Split Bill Calculator","Savings Goal Progress Ring","Budget Threshold Meter","Dark Vault Financial Card"] },
  "tax-summary": { "cat": "Financial Widgets", "title": "Tax Summary", "desc": "Tax calculation summary card.", "icon": "🧾", "families": ["Balance Overview Hero Card","Transaction Detail Row","Category Spending Donut","Credit Score Gauge Meter","EMI Slider Calculator","Live Exchange Rate Ticker","Split Bill Calculator","Savings Goal Progress Ring","Budget Threshold Meter","Dark Vault Financial Card"] },
  "property-map": { "cat": "Maps & Location", "title": "Property Map", "desc": "Interactive property map marker.", "icon": "📍", "families": ["Property Pin Map Card","Neighborhood Score Guide","Commute Time Calculator","Nearby POI Grid","Overlay Filter Map Panel","Address Autocomplete Picker","Satellite View Selector","Route Direction Card","Area Price Heatmap","Dark Tactical Map Card"] },
  "area-guide": { "cat": "Maps & Location", "title": "Area Guide", "desc": "Neighborhood/area guide card.", "icon": "🏘️", "families": ["Property Pin Map Card","Neighborhood Score Guide","Commute Time Calculator","Nearby POI Grid","Overlay Filter Map Panel","Address Autocomplete Picker","Satellite View Selector","Route Direction Card","Area Price Heatmap","Dark Tactical Map Card"] },
  "commute-time": { "cat": "Maps & Location", "title": "Commute Time", "desc": "Commute time calculator.", "icon": "🚗", "families": ["Property Pin Map Card","Neighborhood Score Guide","Commute Time Calculator","Nearby POI Grid","Overlay Filter Map Panel","Address Autocomplete Picker","Satellite View Selector","Route Direction Card","Area Price Heatmap","Dark Tactical Map Card"] },
  "nearby-places": { "cat": "Maps & Location", "title": "Nearby Places", "desc": "Nearby amenities grid.", "icon": "📌", "families": ["Property Pin Map Card","Neighborhood Score Guide","Commute Time Calculator","Nearby POI Grid","Overlay Filter Map Panel","Address Autocomplete Picker","Satellite View Selector","Route Direction Card","Area Price Heatmap","Dark Tactical Map Card"] },
  "map-filter": { "cat": "Maps & Location", "title": "Map Filter", "desc": "Map with filter overlay.", "icon": "🗺️", "families": ["Property Pin Map Card","Neighborhood Score Guide","Commute Time Calculator","Nearby POI Grid","Overlay Filter Map Panel","Address Autocomplete Picker","Satellite View Selector","Route Direction Card","Area Price Heatmap","Dark Tactical Map Card"] },
  "location-picker": { "cat": "Maps & Location", "title": "Location Picker", "desc": "Address/location picker.", "icon": "🏠", "families": ["Property Pin Map Card","Neighborhood Score Guide","Commute Time Calculator","Nearby POI Grid","Overlay Filter Map Panel","Address Autocomplete Picker","Satellite View Selector","Route Direction Card","Area Price Heatmap","Dark Tactical Map Card"] },
  "id-verification": { "cat": "Verification & Trust", "title": "ID Verification", "desc": "KYC identity verification card.", "icon": "🪪", "families": ["Government ID Upload Card","Camera Document Scanner","Live Selfie Verification","Digital Signature Pad","FaceID / Biometric Prompt","Trust Score Meter Card","Verification Step Progress","Certificate Badge Card","Background Check Status","Dark Encrypted Vault Verify"] },
  "document-scan": { "cat": "Verification & Trust", "title": "Document Scan", "desc": "Document scanner interface.", "icon": "📄", "families": ["Government ID Upload Card","Camera Document Scanner","Live Selfie Verification","Digital Signature Pad","FaceID / Biometric Prompt","Trust Score Meter Card","Verification Step Progress","Certificate Badge Card","Background Check Status","Dark Encrypted Vault Verify"] },
  "selfie-verify": { "cat": "Verification & Trust", "title": "Selfie Verify", "desc": "Selfie verification camera.", "icon": "🤳", "families": ["Government ID Upload Card","Camera Document Scanner","Live Selfie Verification","Digital Signature Pad","FaceID / Biometric Prompt","Trust Score Meter Card","Verification Step Progress","Certificate Badge Card","Background Check Status","Dark Encrypted Vault Verify"] },
  "signature-capture": { "cat": "Verification & Trust", "title": "Signature Capture", "desc": "Digital signature capture.", "icon": "✍️", "families": ["Government ID Upload Card","Camera Document Scanner","Live Selfie Verification","Digital Signature Pad","FaceID / Biometric Prompt","Trust Score Meter Card","Verification Step Progress","Certificate Badge Card","Background Check Status","Dark Encrypted Vault Verify"] },
  "biometric-verify": { "cat": "Verification & Trust", "title": "Biometric Verify", "desc": "Biometric verification prompt.", "icon": "🔐", "families": ["Government ID Upload Card","Camera Document Scanner","Live Selfie Verification","Digital Signature Pad","FaceID / Biometric Prompt","Trust Score Meter Card","Verification Step Progress","Certificate Badge Card","Background Check Status","Dark Encrypted Vault Verify"] },
  "trust-score": { "cat": "Verification & Trust", "title": "Trust Score", "desc": "Trust/reliability score card.", "icon": "🛡️", "families": ["Government ID Upload Card","Camera Document Scanner","Live Selfie Verification","Digital Signature Pad","FaceID / Biometric Prompt","Trust Score Meter Card","Verification Step Progress","Certificate Badge Card","Background Check Status","Dark Encrypted Vault Verify"] },
  "copy-btn": { "cat": "Actions", "title": "Copy Action", "desc": "Copy-to-clipboard with feedback.", "icon": "📋", "families": ["Filled Primary CTA","Outlined Secondary Action","Text-Only Tertiary Link","Icon-Only Circular Action","Floating Action Menu","Dark Glowing Precision","Hyperlink with Hover","Split Dropdown Action","Full-Width Banner Action","Dark Action"] },
  "share-btn": { "cat": "Actions", "title": "Share Action", "desc": "Social share action button.", "icon": "📤", "families": ["Filled Primary CTA","Outlined Secondary Action","Text-Only Tertiary Link","Icon-Only Circular Action","Floating Action Menu","Dark Glowing Precision","Hyperlink with Hover","Split Dropdown Action","Full-Width Banner Action","Dark Action"] },
  "download-btn": { "cat": "Actions", "title": "Download Action", "desc": "Download with progress action.", "icon": "⬇️", "families": ["Filled Primary CTA","Outlined Secondary Action","Text-Only Tertiary Link","Icon-Only Circular Action","Floating Action Menu","Dark Glowing Precision","Hyperlink with Hover","Split Dropdown Action","Full-Width Banner Action","Dark Action"] },
  "bookmark-btn": { "cat": "Actions", "title": "Bookmark Action", "desc": "Save/bookmark toggle action.", "icon": "🔖", "families": ["Filled Primary CTA","Outlined Secondary Action","Text-Only Tertiary Link","Icon-Only Circular Action","Floating Action Menu","Dark Glowing Precision","Hyperlink with Hover","Split Dropdown Action","Full-Width Banner Action","Dark Action"] },
  "key-value": { "cat": "Data Display", "title": "Key-Value Pair", "desc": "Label-value data display rows.", "icon": "📊", "families": ["Metric Badge with Pulse","Interactive Filter Pill","Status Indicator Label","Avatar Cluster Count","Key-Value Data Strip","Dark High-Contrast Tag","Horizontal Stat Bar","Floating Island Metric","Full-Width Comparison Bar","Dark Data Matrix"] },
  "stat-bar": { "cat": "Data Display", "title": "Stat Bar", "desc": "Horizontal stat comparison bar.", "icon": "📈", "families": ["Metric Badge with Pulse","Interactive Filter Pill","Status Indicator Label","Avatar Cluster Count","Key-Value Data Strip","Dark High-Contrast Tag","Horizontal Stat Bar","Floating Island Metric","Full-Width Comparison Bar","Dark Data Matrix"] },
  "data-label": { "cat": "Data Display", "title": "Data Label", "desc": "Highlighted data label tag.", "icon": "🏷️", "families": ["Metric Badge with Pulse","Interactive Filter Pill","Status Indicator Label","Avatar Cluster Count","Key-Value Data Strip","Dark High-Contrast Tag","Horizontal Stat Bar","Floating Island Metric","Full-Width Comparison Bar","Dark Data Matrix"] },
  "metric-row": { "cat": "Data Display", "title": "Metric Row", "desc": "Single metric display row.", "icon": "📏", "families": ["Metric Badge with Pulse","Interactive Filter Pill","Status Indicator Label","Avatar Cluster Count","Key-Value Data Strip","Dark High-Contrast Tag","Horizontal Stat Bar","Floating Island Metric","Full-Width Comparison Bar","Dark Data Matrix"] },
  "reorderable-list": { "cat": "Lists", "title": "Reorderable List", "desc": "Drag-to-reorder list items.", "icon": "☰", "families": ["Payment Transaction Row","Grouped Category List","Timeline Milestone Feed","Swipeable Action Row","Expandable Accordion Row","Dark Glass Transaction List","Reorderable Drag List","Kanban Board Column","Full-Width Checklist Strip","Dark Data List"] },
  "kanban-list": { "cat": "Lists", "title": "Kanban List", "desc": "Kanban column card list.", "icon": "📋", "families": ["Payment Transaction Row","Grouped Category List","Timeline Milestone Feed","Swipeable Action Row","Expandable Accordion Row","Dark Glass Transaction List","Reorderable Drag List","Kanban Board Column","Full-Width Checklist Strip","Dark Data List"] },
  "checklist": { "cat": "Lists", "title": "Checklist", "desc": "Interactive checklist items.", "icon": "✅", "families": ["Payment Transaction Row","Grouped Category List","Timeline Milestone Feed","Swipeable Action Row","Expandable Accordion Row","Dark Glass Transaction List","Reorderable Drag List","Kanban Board Column","Full-Width Checklist Strip","Dark Data List"] },
  "chat-list": { "cat": "Lists", "title": "Chat List", "desc": "Chat conversation list.", "icon": "💬", "families": ["Payment Transaction Row","Grouped Category List","Timeline Milestone Feed","Swipeable Action Row","Expandable Accordion Row","Dark Glass Transaction List","Reorderable Drag List","Kanban Board Column","Full-Width Checklist Strip","Dark Data List"] },
  "stat-cards": { "cat": "Cards", "title": "Stat Cards", "desc": "Metric/KPI statistic cards.", "icon": "📊", "families": ["Property Showcase Card","Metric KPI Bento Card","Feature Highlight Card","Interactive Action Card","Horizontal Summary Strip","Dark Neon Glass Card","Media Gallery Card","Gradient Premium Card","Full-Width Hero Banner","Dark Glass Card"] },
  "summary-cards": { "cat": "Cards", "title": "Summary Cards", "desc": "Quick summary overview cards.", "icon": "📋", "families": ["Property Showcase Card","Metric KPI Bento Card","Feature Highlight Card","Interactive Action Card","Horizontal Summary Strip","Dark Neon Glass Card","Media Gallery Card","Gradient Premium Card","Full-Width Hero Banner","Dark Glass Card"] },
  "action-card": { "cat": "Cards", "title": "Action Card", "desc": "Card with primary CTA action.", "icon": "⚡", "families": ["Property Showcase Card","Metric KPI Bento Card","Feature Highlight Card","Interactive Action Card","Horizontal Summary Strip","Dark Neon Glass Card","Media Gallery Card","Gradient Premium Card","Full-Width Hero Banner","Dark Glass Card"] },
  "media-card": { "cat": "Cards", "title": "Media Card", "desc": "Card with image/video media.", "icon": "🖼️", "families": ["Property Showcase Card","Metric KPI Bento Card","Feature Highlight Card","Interactive Action Card","Horizontal Summary Strip","Dark Neon Glass Card","Media Gallery Card","Gradient Premium Card","Full-Width Hero Banner","Dark Glass Card"] },
  "horizontal-card": { "cat": "Cards", "title": "Horizontal Card", "desc": "Horizontal layout row card.", "icon": "↔️", "families": ["Property Showcase Card","Metric KPI Bento Card","Feature Highlight Card","Interactive Action Card","Horizontal Summary Strip","Dark Neon Glass Card","Media Gallery Card","Gradient Premium Card","Full-Width Hero Banner","Dark Glass Card"] },
  "glass-card": { "cat": "Cards", "title": "Glass Card", "desc": "Frosted glassmorphism card.", "icon": "🔮", "families": ["Property Showcase Card","Metric KPI Bento Card","Feature Highlight Card","Interactive Action Card","Horizontal Summary Strip","Dark Neon Glass Card","Media Gallery Card","Gradient Premium Card","Full-Width Hero Banner","Dark Glass Card"] },
  "gradient-card": { "cat": "Cards", "title": "Gradient Card", "desc": "Vibrant gradient background card.", "icon": "🌈", "families": ["Property Showcase Card","Metric KPI Bento Card","Feature Highlight Card","Interactive Action Card","Horizontal Summary Strip","Dark Neon Glass Card","Media Gallery Card","Gradient Premium Card","Full-Width Hero Banner","Dark Glass Card"] },
  "drawer-overlay": { "cat": "Overlays", "title": "Side Drawer", "desc": "Side-sliding overlay drawer.", "icon": "📂", "families": ["Form Entry Dialog","Confirmation Alert Modal","Mobile Bottom Sheet","Side Drawer Panel","Contextual Popover","Dark Command Center Prompt","Toast Snackbar Float","Fullscreen Dialog","Full-Width Inline Dialog","Dark Modal"] },
  "inline-dialog": { "cat": "Overlays", "title": "Inline Dialog", "desc": "Inline expandable dialog.", "icon": "💬", "families": ["Form Entry Dialog","Confirmation Alert Modal","Mobile Bottom Sheet","Side Drawer Panel","Contextual Popover","Dark Command Center Prompt","Toast Snackbar Float","Fullscreen Dialog","Full-Width Inline Dialog","Dark Modal"] },
  "snackbar": { "cat": "Overlays", "title": "Snackbar", "desc": "Bottom floating snackbar message.", "icon": "📢", "families": ["Form Entry Dialog","Confirmation Alert Modal","Mobile Bottom Sheet","Side Drawer Panel","Contextual Popover","Dark Command Center Prompt","Toast Snackbar Float","Fullscreen Dialog","Full-Width Inline Dialog","Dark Modal"] },
  "toast-notification": { "cat": "Feedback", "title": "Toast Notification", "desc": "Floating toast message popup.", "icon": "🍞", "families": ["Status Alert with CTA","Toast Notification Float","Empty State Illustration","Shimmer Skeleton Card","Progress Bar Milestones","Dark System Health Status","Inline Validation Error","Success Animation Card","Full-Width Banner Alert","Dark Alert"] },
  "inline-error": { "cat": "Feedback", "title": "Inline Error", "desc": "Inline field validation error.", "icon": "❌", "families": ["Status Alert with CTA","Toast Notification Float","Empty State Illustration","Shimmer Skeleton Card","Progress Bar Milestones","Dark System Health Status","Inline Validation Error","Success Animation Card","Full-Width Banner Alert","Dark Alert"] },
  "success-animation": { "cat": "Feedback", "title": "Success Animation", "desc": "Animated success checkmark.", "icon": "✅", "families": ["Status Alert with CTA","Toast Notification Float","Empty State Illustration","Shimmer Skeleton Card","Progress Bar Milestones","Dark System Health Status","Inline Validation Error","Success Animation Card","Full-Width Banner Alert","Dark Alert"] },
  "rating-prompt": { "cat": "Feedback", "title": "Rating Prompt", "desc": "App rating request prompt.", "icon": "⭐", "families": ["Status Alert with CTA","Toast Notification Float","Empty State Illustration","Shimmer Skeleton Card","Progress Bar Milestones","Dark System Health Status","Inline Validation Error","Success Animation Card","Full-Width Banner Alert","Dark Alert"] },
  "event-card": { "cat": "Calendar", "title": "Event Card", "desc": "Calendar event detail card.", "icon": "📅", "families": ["Interactive Month Grid","Date Range Selector","Time Slot Booking Chips","Day Schedule View","Mini Week Strip","Dark Cybernetic Event Matrix","Event Detail Card","Availability Heatmap","Full-Width Schedule Strip","Dark Calendar"] },
  "booking-slot": { "cat": "Calendar", "title": "Booking Slot", "desc": "Time slot booking selector.", "icon": "🕐", "families": ["Interactive Month Grid","Date Range Selector","Time Slot Booking Chips","Day Schedule View","Mini Week Strip","Dark Cybernetic Event Matrix","Event Detail Card","Availability Heatmap","Full-Width Schedule Strip","Dark Calendar"] },
  "availability": { "cat": "Calendar", "title": "Availability Grid", "desc": "Week availability heatmap.", "icon": "📊", "families": ["Interactive Month Grid","Date Range Selector","Time Slot Booking Chips","Day Schedule View","Mini Week Strip","Dark Cybernetic Event Matrix","Event Detail Card","Availability Heatmap","Full-Width Schedule Strip","Dark Calendar"] },
  "area-chart": { "cat": "Charts", "title": "Area Chart", "desc": "Filled area chart with gradient.", "icon": "📈", "families": ["Revenue Bar Chart","Cashflow Spline Line","Occupancy Donut Gauge","Stacked Distribution Bars","Micro Sparkline Inline","Dark Glowing Data Curve","Filled Area Gradient","Scatter Point Cloud","Full-Width Comparison Bar","Dark Chart"] },
  "scatter-plot": { "cat": "Charts", "title": "Scatter Plot", "desc": "Point distribution scatter plot.", "icon": "⚬", "families": ["Revenue Bar Chart","Cashflow Spline Line","Occupancy Donut Gauge","Stacked Distribution Bars","Micro Sparkline Inline","Dark Glowing Data Curve","Filled Area Gradient","Scatter Point Cloud","Full-Width Comparison Bar","Dark Chart"] },
  "comparison-chart": { "cat": "Charts", "title": "Comparison Chart", "desc": "Side-by-side comparison chart.", "icon": "↔️", "families": ["Revenue Bar Chart","Cashflow Spline Line","Occupancy Donut Gauge","Stacked Distribution Bars","Micro Sparkline Inline","Dark Glowing Data Curve","Filled Area Gradient","Scatter Point Cloud","Full-Width Comparison Bar","Dark Chart"] },
  "progress-ring": { "cat": "Charts", "title": "Progress Ring", "desc": "Circular progress ring chart.", "icon": "⭕", "families": ["Revenue Bar Chart","Cashflow Spline Line","Occupancy Donut Gauge","Stacked Distribution Bars","Micro Sparkline Inline","Dark Glowing Data Curve","Filled Area Gradient","Scatter Point Cloud","Full-Width Comparison Bar","Dark Chart"] },
  "daily-reward": { "cat": "Rewards", "title": "Daily Reward", "desc": "Daily check-in reward card.", "icon": "🎁", "families": ["Streak Fire Tracker","Scratch Cashback Card","Level Progression XP Bar","Milestone Badge Card","Referral Invite Strip","Dark VIP Prestige Vault","Daily Check-In Reward","Loyalty Program Card","Full-Width Celebration","Dark Rewards"] },
  "loyalty-card": { "cat": "Rewards", "title": "Loyalty Card", "desc": "Loyalty program card.", "icon": "💎", "families": ["Streak Fire Tracker","Scratch Cashback Card","Level Progression XP Bar","Milestone Badge Card","Referral Invite Strip","Dark VIP Prestige Vault","Daily Check-In Reward","Loyalty Program Card","Full-Width Celebration","Dark Rewards"] },
  "coupon": { "cat": "Rewards", "title": "Coupon Code", "desc": "Discount coupon card.", "icon": "🎫", "families": ["Streak Fire Tracker","Scratch Cashback Card","Level Progression XP Bar","Milestone Badge Card","Referral Invite Strip","Dark VIP Prestige Vault","Daily Check-In Reward","Loyalty Program Card","Full-Width Celebration","Dark Rewards"] },
  "pin-lock": { "cat": "Authentication", "title": "PIN Lock", "desc": "Numeric PIN lock screen.", "icon": "🔢", "families": ["Email & Password Card","SMS OTP 6-Digit Code","Magic Link Passwordless","Biometric FaceID/TouchID","SSO Identity Grid","Dark Enterprise SSO Portal","Numeric PIN Lock Screen","Passkey WebAuthn Card","Full-Width Welcome Gate","Dark Auth"] },
  "passkey": { "cat": "Authentication", "title": "Passkey Auth", "desc": "Passkey/WebAuthn authentication.", "icon": "🔑", "families": ["Email & Password Card","SMS OTP 6-Digit Code","Magic Link Passwordless","Biometric FaceID/TouchID","SSO Identity Grid","Dark Enterprise SSO Portal","Numeric PIN Lock Screen","Passkey WebAuthn Card","Full-Width Welcome Gate","Dark Auth"] },
  "email-compose": { "cat": "Communication", "title": "Email Compose", "desc": "Email composition form.", "icon": "📧", "families": ["Chat Speech Bubble","Message Thread Card","Urgent Announcement","In-App Notification","Email Compose Form","Dark Glass Dispatch","Support Ticket Card","Feedback Form Card","Full-Width Broadcast","Dark Comms"] },
  "support-ticket": { "cat": "Communication", "title": "Support Ticket", "desc": "Support ticket submission.", "icon": "🎫", "families": ["Chat Speech Bubble","Message Thread Card","Urgent Announcement","In-App Notification","Email Compose Form","Dark Glass Dispatch","Support Ticket Card","Feedback Form Card","Full-Width Broadcast","Dark Comms"] },
  "feedback-form": { "cat": "Communication", "title": "Feedback Form", "desc": "User feedback submission.", "icon": "📝", "families": ["Chat Speech Bubble","Message Thread Card","Urgent Announcement","In-App Notification","Email Compose Form","Dark Glass Dispatch","Support Ticket Card","Feedback Form Card","Full-Width Broadcast","Dark Comms"] },
  "rent-estimate": { "cat": "Property", "title": "Rent Estimate", "desc": "Market rent estimate widget.", "icon": "💰", "families": ["Luxury Listing Showcase","Amenity Icon Grid","Floor Plan Schematic","Location Map Card","Property Comparison","Dark Investment Asset Card","Maintenance Tracker","Rent Estimate Widget","Full-Width Gallery Hero","Dark Property"] },
  "occupancy-status": { "cat": "Property", "title": "Occupancy Status", "desc": "Unit occupancy indicator.", "icon": "🏠", "families": ["Luxury Listing Showcase","Amenity Icon Grid","Floor Plan Schematic","Location Map Card","Property Comparison","Dark Investment Asset Card","Maintenance Tracker","Rent Estimate Widget","Full-Width Gallery Hero","Dark Property"] },
  "utility-tracker": { "cat": "Property", "title": "Utility Tracker", "desc": "Monthly utility tracking.", "icon": "💡", "families": ["Luxury Listing Showcase","Amenity Icon Grid","Floor Plan Schematic","Location Map Card","Property Comparison","Dark Investment Asset Card","Maintenance Tracker","Rent Estimate Widget","Full-Width Gallery Hero","Dark Property"] },
  "neighbor-score": { "cat": "Property", "title": "Neighborhood Score", "desc": "Area livability score.", "icon": "🏘️", "families": ["Luxury Listing Showcase","Amenity Icon Grid","Floor Plan Schematic","Location Map Card","Property Comparison","Dark Investment Asset Card","Maintenance Tracker","Rent Estimate Widget","Full-Width Gallery Hero","Dark Property"] },
  "privacy-policy": { "cat": "Legal", "title": "Privacy Policy", "desc": "Privacy policy display block.", "icon": "🔒", "families": ["Lease Signature Block","Terms Accordion Section","Consent Audit Block","Compliance Disclaimer","E-Signature Capture","Dark Encrypted Ledger","Document Attachment","Audit Trail Log","Full-Width Policy Banner","Dark Legal"] },
  "compliance-badge": { "cat": "Legal", "title": "Compliance Badge", "desc": "Regulatory compliance badge.", "icon": "✅", "families": ["Lease Signature Block","Terms Accordion Section","Consent Audit Block","Compliance Disclaimer","E-Signature Capture","Dark Encrypted Ledger","Document Attachment","Audit Trail Log","Full-Width Policy Banner","Dark Legal"] },
  "data-export": { "cat": "Settings", "title": "Data Export", "desc": "Data export/download settings.", "icon": "📤", "families": ["Toggle Switch List","Profile Identity Form","Notification Matrix","Security 2FA Config","Connected Accounts","Dark System Console","Data Export Options","Delete Account Flow","Full-Width Pref Strip","Dark Settings"] },
  "delete-account": { "cat": "Settings", "title": "Delete Account", "desc": "Account deletion flow.", "icon": "🗑️", "families": ["Toggle Switch List","Profile Identity Form","Notification Matrix","Security 2FA Config","Connected Accounts","Dark System Console","Data Export Options","Delete Account Flow","Full-Width Pref Strip","Dark Settings"] },
  "app-info": { "cat": "Settings", "title": "App Info", "desc": "App version and info display.", "icon": "ℹ️", "families": ["Toggle Switch List","Profile Identity Form","Notification Matrix","Security 2FA Config","Connected Accounts","Dark System Console","Data Export Options","Delete Account Flow","Full-Width Pref Strip","Dark Settings"] },
  "scroll-to-top": { "cat": "Sticky", "title": "Scroll To Top", "desc": "Floating scroll-to-top button.", "icon": "⬆️", "families": ["Bottom Fixed Action Bar","Cookie Consent Banner","Top Alert Notice Strip","Help Chat Trigger","Countdown Promo Bar","Dark Glass Sticky Dock","Scroll-To-Top Button","Sticky CTA Strip","Full-Width Action Bar","Dark Sticky"] },
  "sticky-cta": { "cat": "Sticky", "title": "Sticky CTA", "desc": "Sticky bottom call-to-action.", "icon": "📌", "families": ["Bottom Fixed Action Bar","Cookie Consent Banner","Top Alert Notice Strip","Help Chat Trigger","Countdown Promo Bar","Dark Glass Sticky Dock","Scroll-To-Top Button","Sticky CTA Strip","Full-Width Action Bar","Dark Sticky"] },
  "skeleton-transition": { "cat": "Transitions", "title": "Skeleton Transition", "desc": "Skeleton to content transition.", "icon": "💀", "families": ["Page Morph Animation","Micro Button Bounce","Shared Element Hero","Stagger List Entrance","Ripple Interaction","Dark Cyber Kinetic","Skeleton to Content","Fade In/Out Smooth","Full-Width Slide","Dark Transition"] },
  "fade-transition": { "cat": "Transitions", "title": "Fade Transition", "desc": "Smooth fade in/out transition.", "icon": "🌫️", "families": ["Page Morph Animation","Micro Button Bounce","Shared Element Hero","Stagger List Entrance","Ripple Interaction","Dark Cyber Kinetic","Skeleton to Content","Fade In/Out Smooth","Full-Width Slide","Dark Transition"] },
  "undo-bar": { "cat": "Patterns", "title": "Undo Bar", "desc": "Undoable action snackbar.", "icon": "↩️", "families": ["Search & Filter Bar","Bulk Selection Strip","Drag & Drop List","Infinite Scroll Footer","Pull Refresh Spinner","Dark Workbench Panel","Share Sheet Menu","Undo Action Bar","Swipe Reveal Action","Dark Pattern"] },
  "swipe-action": { "cat": "Patterns", "title": "Swipe Action", "desc": "Swipe-to-reveal action pattern.", "icon": "👉", "families": ["Search & Filter Bar","Bulk Selection Strip","Drag & Drop List","Infinite Scroll Footer","Pull Refresh Spinner","Dark Workbench Panel","Share Sheet Menu","Undo Action Bar","Swipe Reveal Action","Dark Pattern"] },
  "long-press": { "cat": "Patterns", "title": "Long Press Menu", "desc": "Long press context actions.", "icon": "👆", "families": ["Search & Filter Bar","Bulk Selection Strip","Drag & Drop List","Infinite Scroll Footer","Pull Refresh Spinner","Dark Workbench Panel","Share Sheet Menu","Undo Action Bar","Swipe Reveal Action","Dark Pattern"] },
  "peek-preview": { "cat": "Patterns", "title": "Peek Preview", "desc": "3D Touch/peek preview card.", "icon": "👁️", "families": ["Search & Filter Bar","Bulk Selection Strip","Drag & Drop List","Infinite Scroll Footer","Pull Refresh Spinner","Dark Workbench Panel","Share Sheet Menu","Undo Action Bar","Swipe Reveal Action","Dark Pattern"] },
  "auto-debit": { "cat": "Product", "title": "Auto Debit Setup", "desc": "Recurring auto-debit configuration.", "icon": "🔄", "families": ["Credit Bureau Sync","Payment History Table","Tenant Screening Checklist","Maintenance Ticket Card","Digital Lease Renewal","Dark VIP PropTech Hub","Auto-Debit Setup Card","Deposit Shield Guard","Rent Split Calculator","Dark Product"] },
  "deposit-shield": { "cat": "Product", "title": "Deposit Shield", "desc": "Zero-deposit guarantee shield.", "icon": "🛡️", "families": ["Credit Bureau Sync","Payment History Table","Tenant Screening Checklist","Maintenance Ticket Card","Digital Lease Renewal","Dark VIP PropTech Hub","Auto-Debit Setup Card","Deposit Shield Guard","Rent Split Calculator","Dark Product"] },
  "rent-split": { "cat": "Product", "title": "Rent Split", "desc": "Split rent between roommates.", "icon": "✂️", "families": ["Credit Bureau Sync","Payment History Table","Tenant Screening Checklist","Maintenance Ticket Card","Digital Lease Renewal","Dark VIP PropTech Hub","Auto-Debit Setup Card","Deposit Shield Guard","Rent Split Calculator","Dark Product"] },
  "credit-builder": { "cat": "Product", "title": "Credit Builder", "desc": "Credit score builder program.", "icon": "📈", "families": ["Credit Bureau Sync","Payment History Table","Tenant Screening Checklist","Maintenance Ticket Card","Digital Lease Renewal","Dark VIP PropTech Hub","Auto-Debit Setup Card","Deposit Shield Guard","Rent Split Calculator","Dark Product"] },
  "move-out": { "cat": "Product", "title": "Move Out Flow", "desc": "Move-out process workflow.", "icon": "📦", "families": ["Credit Bureau Sync","Payment History Table","Tenant Screening Checklist","Maintenance Ticket Card","Digital Lease Renewal","Dark VIP PropTech Hub","Auto-Debit Setup Card","Deposit Shield Guard","Rent Split Calculator","Dark Product"] },
  "rent-negotiation": { "cat": "Product", "title": "Rent Negotiation", "desc": "Rent negotiation tools.", "icon": "🤝", "families": ["Credit Bureau Sync","Payment History Table","Tenant Screening Checklist","Maintenance Ticket Card","Digital Lease Renewal","Dark VIP PropTech Hub","Auto-Debit Setup Card","Deposit Shield Guard","Rent Split Calculator","Dark Product"] },
  "page-checkout": { "cat": "Templates", "title": "Checkout Flow", "desc": "Multi-step checkout template.", "icon": "🛒", "families": ["Dashboard Overview Canvas","Entity List & Filter Page","Property Detail Profile","Multi-Step Form Wizard","Transaction Receipt Modal","Dark Command Operations","Settings Preference Page","Onboarding Flow Page","Checkout Flow Template","Dark Template"] },
  "page-profile": { "cat": "Templates", "title": "Profile Page", "desc": "User profile page template.", "icon": "👤", "families": ["Dashboard Overview Canvas","Entity List & Filter Page","Property Detail Profile","Multi-Step Form Wizard","Transaction Receipt Modal","Dark Command Operations","Settings Preference Page","Onboarding Flow Page","Checkout Flow Template","Dark Template"] },
  "page-activity": { "cat": "Templates", "title": "Activity Feed", "desc": "Activity feed page template.", "icon": "📰", "families": ["Dashboard Overview Canvas","Entity List & Filter Page","Property Detail Profile","Multi-Step Form Wizard","Transaction Receipt Modal","Dark Command Operations","Settings Preference Page","Onboarding Flow Page","Checkout Flow Template","Dark Template"] },
  "page-search": { "cat": "Templates", "title": "Search Results", "desc": "Search results page template.", "icon": "🔍", "families": ["Dashboard Overview Canvas","Entity List & Filter Page","Property Detail Profile","Multi-Step Form Wizard","Transaction Receipt Modal","Dark Command Operations","Settings Preference Page","Onboarding Flow Page","Checkout Flow Template","Dark Template"] },
  "page-gallery": { "cat": "Templates", "title": "Gallery Page", "desc": "Media gallery page template.", "icon": "🖼️", "families": ["Dashboard Overview Canvas","Entity List & Filter Page","Property Detail Profile","Multi-Step Form Wizard","Transaction Receipt Modal","Dark Command Operations","Settings Preference Page","Onboarding Flow Page","Checkout Flow Template","Dark Template"] },
  "gradient-bg": { "cat": "Backgrounds", "title": "Gradient Bg", "desc": "Vibrant gradient background.", "icon": "🌈", "families": ["Subtle Dot Grid Pattern","Aurora Mesh Gradient","Geometric Lines Backdrop","Frosted Glass Canvas","Vibrant Gradient Wash","Deep Obsidian Texture","Blur Bokeh Background","Cyberpunk Radial Glow","Animated Particle Field","Dark Space Canvas"] },
  "blur-bg": { "cat": "Backgrounds", "title": "Blur Bg", "desc": "Frosted blur glass background.", "icon": "🔮", "families": ["Subtle Dot Grid Pattern","Aurora Mesh Gradient","Geometric Lines Backdrop","Frosted Glass Canvas","Vibrant Gradient Wash","Deep Obsidian Texture","Blur Bokeh Background","Cyberpunk Radial Glow","Animated Particle Field","Dark Space Canvas"] },
  "address-input": { "cat": "Inputs", "title": "Address Input", "desc": "Multi-line address entry.", "icon": "🏠", "families": ["Floating Label Modern Input","Icon-Leading Validated Field","Search & Autocomplete Field","Multi-Value Token Input","Segmented Counter Stepper","Dark Command Glass Field","Inline Editable Text","Floating Island Date Picker","Full-Width Amount Entry","Dark Terminal Input"] },
  "amount-input": { "cat": "Inputs", "title": "Amount Input", "desc": "Large amount input with numpad.", "icon": "💰", "families": ["Floating Label Modern Input","Icon-Leading Validated Field","Search & Autocomplete Field","Multi-Value Token Input","Segmented Counter Stepper","Dark Command Glass Field","Inline Editable Text","Floating Island Date Picker","Full-Width Amount Entry","Dark Terminal Input"] },
  "pin-input": { "cat": "Inputs", "title": "PIN Input", "desc": "Secure 4-6 digit PIN entry.", "icon": "🔢", "families": ["Floating Label Modern Input","Icon-Leading Validated Field","Search & Autocomplete Field","Multi-Value Token Input","Segmented Counter Stepper","Dark Command Glass Field","Inline Editable Text","Floating Island Date Picker","Full-Width Amount Entry","Dark Terminal Input"] },
  "slider-input": { "cat": "Inputs", "title": "Slider Input", "desc": "Draggable value slider input.", "icon": "🎚️", "families": ["Floating Label Modern Input","Icon-Leading Validated Field","Search & Autocomplete Field","Multi-Value Token Input","Segmented Counter Stepper","Dark Command Glass Field","Inline Editable Text","Floating Island Date Picker","Full-Width Amount Entry","Dark Terminal Input"] },
  "switch-group": { "cat": "Selection", "title": "Switch Group", "desc": "Grouped toggle switches.", "icon": "🔀", "families": ["Interactive Toggle Switch Card","Custom Checkbox with Badge","Segmented Radio Button Group","Dual-Thumb Range Slider","Pill Selection Chip Group","Dark Tactile Selection Card","Color Palette Selector Grid","Floating Island Toggle","Full-Width Comparison Strip","Dark Tactile Selector"] },
  "color-select": { "cat": "Selection", "title": "Color Select", "desc": "Color palette selector.", "icon": "🎨", "families": ["Interactive Toggle Switch Card","Custom Checkbox with Badge","Segmented Radio Button Group","Dual-Thumb Range Slider","Pill Selection Chip Group","Dark Tactile Selection Card","Color Palette Selector Grid","Floating Island Toggle","Full-Width Comparison Strip","Dark Tactile Selector"] },
  "size-select": { "cat": "Selection", "title": "Size Select", "desc": "Size/dimension selector.", "icon": "📐", "families": ["Interactive Toggle Switch Card","Custom Checkbox with Badge","Segmented Radio Button Group","Dual-Thumb Range Slider","Pill Selection Chip Group","Dark Tactile Selection Card","Color Palette Selector Grid","Floating Island Toggle","Full-Width Comparison Strip","Dark Tactile Selector"] },
  "sortable-table": { "cat": "Tables", "title": "Sortable Table", "desc": "Column-sortable data table.", "icon": "↕️", "families": ["Enterprise Financial Ledger","Compact Mini Data Table","Expandable Detail Row","Column-Sortable Grid","Paginated Data Table","Dark Glass Analytics Grid","Responsive Card Table","Toolbar Filter Table","Full-Width Summary Matrix","Dark Analytics Grid"] },
  "paginated-table": { "cat": "Tables", "title": "Paginated Table", "desc": "Table with pagination controls.", "icon": "📄", "families": ["Enterprise Financial Ledger","Compact Mini Data Table","Expandable Detail Row","Column-Sortable Grid","Paginated Data Table","Dark Glass Analytics Grid","Responsive Card Table","Toolbar Filter Table","Full-Width Summary Matrix","Dark Analytics Grid"] },
  "bottom-nav": { "cat": "Navigation", "title": "Bottom Tab Bar", "desc": "iOS/Android bottom tab navigation.", "icon": "📱", "families": ["iOS Bottom Tab Bar","Floating Pill Dock","Segmented View Controller","Breadcrumb Trail Navigation","Multi-Step Process Stepper","Dark Command Navigation Rail","Underline Indicator Tabs","Collapsible Sidebar","Full-Width Progress Header","Dark Rail Navigation"] },
  "app-bar": { "cat": "Navigation", "title": "App Bar", "desc": "Material-style collapsible app bar.", "icon": "📐", "families": ["iOS Bottom Tab Bar","Floating Pill Dock","Segmented View Controller","Breadcrumb Trail Navigation","Multi-Step Process Stepper","Dark Command Navigation Rail","Underline Indicator Tabs","Collapsible Sidebar","Full-Width Progress Header","Dark Rail Navigation"] },
  "scroll-tabs": { "cat": "Navigation", "title": "Scroll Tabs", "desc": "Horizontally scrollable tab bar.", "icon": "↔️", "families": ["iOS Bottom Tab Bar","Floating Pill Dock","Segmented View Controller","Breadcrumb Trail Navigation","Multi-Step Process Stepper","Dark Command Navigation Rail","Underline Indicator Tabs","Collapsible Sidebar","Full-Width Progress Header","Dark Rail Navigation"] },
  "social-count": { "cat": "Social Proof", "title": "Social Count", "desc": "Social follower/download count.", "icon": "👥", "families": ["Verified Testimonial","Star Rating Summary","Review Showcase Card","Trust Guarantee Badge","Community Recommendation","Dark Endorsement Shield","Social Download Count","Press Mention Badge","Full-Width Trust Strip","Dark Social"] },
  "press-mention": { "cat": "Social Proof", "title": "Press Mention", "desc": "Media/press mention badge.", "icon": "📰", "families": ["Verified Testimonial","Star Rating Summary","Review Showcase Card","Trust Guarantee Badge","Community Recommendation","Dark Endorsement Shield","Social Download Count","Press Mention Badge","Full-Width Trust Strip","Dark Social"] },
  "audio-player": { "cat": "Media", "title": "Audio Player", "desc": "Audio playback controls.", "icon": "🎵", "families": ["Image Carousel Slider","Video Walkthrough Player","Gallery Masonry Grid","Audio Playback Controls","File Document Preview","Dark Cinema Media Card","Image Crop & Resize","Thumbnail Strip Selector","Full-Width Hero Media","Dark Media"] },
  "file-preview": { "cat": "Media", "title": "File Preview", "desc": "Document file preview card.", "icon": "📄", "families": ["Image Carousel Slider","Video Walkthrough Player","Gallery Masonry Grid","Audio Playback Controls","File Document Preview","Dark Cinema Media Card","Image Crop & Resize","Thumbnail Strip Selector","Full-Width Hero Media","Dark Media"] },
  "image-cropper": { "cat": "Media", "title": "Image Cropper", "desc": "Image crop and resize tool.", "icon": "✂️", "families": ["Image Carousel Slider","Video Walkthrough Player","Gallery Masonry Grid","Audio Playback Controls","File Document Preview","Dark Cinema Media Card","Image Crop & Resize","Thumbnail Strip Selector","Full-Width Hero Media","Dark Media"] },
  "profile-setup": { "cat": "Onboarding", "title": "Profile Setup", "desc": "Initial profile setup card.", "icon": "👤", "families": ["Welcome Hero Screen","Feature Tour Spotlight","Permission Request Card","Setup Wizard Steps","Complete Success Card","Dark Fast-Track Onboard","Profile Setup Form","Invite Friends Card","Full-Width Launch Banner","Dark Onboard"] },
  "invite-friends": { "cat": "Onboarding", "title": "Invite Friends", "desc": "Friend invitation flow.", "icon": "👥", "families": ["Welcome Hero Screen","Feature Tour Spotlight","Permission Request Card","Setup Wizard Steps","Complete Success Card","Dark Fast-Track Onboard","Profile Setup Form","Invite Friends Card","Full-Width Launch Banner","Dark Onboard"] },
  "timeline-visual": { "cat": "Infographics", "title": "Timeline Visual", "desc": "Visual timeline infographic.", "icon": "📅", "families": ["Multi-Tier Stats Counter","Step Process Flow Diagram","Comparative Feature Matrix","Key Insight Banner","Data Story Narrative","Dark Infographic Data Board","Timeline Visual History","Icon Stat Display Grid","Full-Width Data Story","Dark Infographic"] },
  "icon-stat": { "cat": "Infographics", "title": "Icon Stat", "desc": "Icon-based statistic display.", "icon": "🔢", "families": ["Multi-Tier Stats Counter","Step Process Flow Diagram","Comparative Feature Matrix","Key Insight Banner","Data Story Narrative","Dark Infographic Data Board","Timeline Visual History","Icon Stat Display Grid","Full-Width Data Story","Dark Infographic"] },
  "cohort-chart": { "cat": "Analytics", "title": "Cohort Chart", "desc": "User cohort retention chart.", "icon": "📊", "families": ["KPI Scorecard","Trend Sparkline Compare","Cohort Breakdown Matrix","Period Variance Card","Funnel Conversion Display","Dark Executive Command","Distribution Ratio Card","Real-Time Pulse Metric","Full-Width Dashboard Strip","Dark Analytics"] },
  "funnel-display": { "cat": "Analytics", "title": "Funnel Display", "desc": "Conversion funnel visualization.", "icon": "🏁", "families": ["KPI Scorecard","Trend Sparkline Compare","Cohort Breakdown Matrix","Period Variance Card","Funnel Conversion Display","Dark Executive Command","Distribution Ratio Card","Real-Time Pulse Metric","Full-Width Dashboard Strip","Dark Analytics"] },
  "state-maintenance": { "cat": "States", "title": "Maintenance State", "desc": "System under maintenance state.", "icon": "🔧", "families": ["Active & Verified State","Pending Approval State","Warning Required State","Locked Restricted State","Offline Disconnected State","Dark Shield Protected State","Success Complete State","Maintenance Mode State","Full-Width Progress State","Dark State"] },
  "state-upgrade": { "cat": "States", "title": "Upgrade State", "desc": "App upgrade required state.", "icon": "⬆️", "families": ["Active & Verified State","Pending Approval State","Warning Required State","Locked Restricted State","Offline Disconnected State","Dark Shield Protected State","Success Complete State","Maintenance Mode State","Full-Width Progress State","Dark State"] },
};

for (const [slug, data] of Object.entries(ALL_PAGES)) {
  data.families = getFamiliesForSlug(slug, data.cat, data.title);
}

function getMockHTML(cat, fam, icon, slug, variantIndex) {
  if (typeof variantIndex === 'number') {
    return renderCategoryVariant(cat, fam, icon, slug, variantIndex);
  }

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
    if (fam.includes('Type') || fam.includes('Font') || fam.includes('Text') || fam.includes('Headings')) {
      const isWeight = fam.includes('Weight');
      if (isWeight) {
        return `<div style="text-align:left;width:100%;max-width:340px;background:#fff;border:1px solid #E2E8F0;border-radius:16px;padding:24px;box-shadow:0 12px 24px rgba(0,0,0,0.02);">
          <div style="font-size:10px;font-weight:700;color:#94A3B8;letter-spacing:0.1em;text-transform:uppercase;margin-bottom:16px;">Font Weights</div>
          <div style="display:flex;flex-direction:column;gap:12px;">
            <div style="display:flex;justify-content:space-between;align-items:center;padding-bottom:12px;border-bottom:1px solid #F1F5F9;"><div style="font-size:16px;font-weight:300;color:#64748B;">Light</div><div style="font-size:12px;font-family:monospace;color:#94A3B8;background:#F8FAFC;padding:4px 8px;border-radius:6px;">300</div></div>
            <div style="display:flex;justify-content:space-between;align-items:center;padding-bottom:12px;border-bottom:1px solid #F1F5F9;"><div style="font-size:16px;font-weight:400;color:#475569;">Regular</div><div style="font-size:12px;font-family:monospace;color:#94A3B8;background:#F8FAFC;padding:4px 8px;border-radius:6px;">400</div></div>
            <div style="display:flex;justify-content:space-between;align-items:center;padding-bottom:12px;border-bottom:1px solid #F1F5F9;"><div style="font-size:16px;font-weight:500;color:#334155;">Medium</div><div style="font-size:12px;font-family:monospace;color:#94A3B8;background:#F8FAFC;padding:4px 8px;border-radius:6px;">500</div></div>
            <div style="display:flex;justify-content:space-between;align-items:center;padding-bottom:12px;border-bottom:1px solid #F1F5F9;"><div style="font-size:16px;font-weight:600;color:#1E293B;">SemiBold</div><div style="font-size:12px;font-family:monospace;color:#94A3B8;background:#F8FAFC;padding:4px 8px;border-radius:6px;">600</div></div>
            <div style="display:flex;justify-content:space-between;align-items:center;padding-bottom:12px;border-bottom:1px solid #F1F5F9;"><div style="font-size:16px;font-weight:700;color:#0F172A;">Bold</div><div style="font-size:12px;font-family:monospace;color:#94A3B8;background:#F8FAFC;padding:4px 8px;border-radius:6px;">700</div></div>
            <div style="display:flex;justify-content:space-between;align-items:center;"><div style="font-size:16px;font-weight:800;color:#0F172A;">ExtraBold</div><div style="font-size:12px;font-family:monospace;color:#94A3B8;background:#F8FAFC;padding:4px 8px;border-radius:6px;">800</div></div>
          </div>
        </div>`;
      }
      return `<div style="text-align:left;width:100%;max-width:340px;background:#fff;border:1px solid #E2E8F0;border-radius:16px;padding:28px;box-shadow:0 12px 24px rgba(0,0,0,0.02);">
        <div style="display:flex;align-items:baseline;gap:16px;margin-bottom:24px;border-bottom:1px solid #F1F5F9;padding-bottom:20px;">
          <div style="font-size:48px;font-weight:800;color:#0F172A;letter-spacing:-0.04em;line-height:1;">Aa</div>
          <div>
            <div style="font-size:14px;font-weight:700;color:#0F172A;margin-bottom:2px;">Inter Typeface</div>
            <div style="font-size:11px;font-weight:600;color:#94A3B8;letter-spacing:0.1em;text-transform:uppercase;">Primary System Font</div>
          </div>
        </div>
        <div style="display:flex;flex-direction:column;gap:16px;">
          <div><div style="font-size:32px;font-weight:700;color:#0F172A;margin-bottom:4px;letter-spacing:-0.02em;">Display H1</div><div style="font-size:12px;color:#94A3B8;font-family:monospace;">32px / Bold / -2%</div></div>
          <div><div style="font-size:24px;font-weight:600;color:#1E293B;margin-bottom:4px;letter-spacing:-0.01em;">Heading H2</div><div style="font-size:12px;color:#94A3B8;font-family:monospace;">24px / SemiBold / -1%</div></div>
          <div><div style="font-size:16px;font-weight:400;color:#475569;line-height:1.6;margin-bottom:4px;">Body text optimized for high legibility and pleasant reading experience across devices.</div><div style="font-size:12px;color:#94A3B8;font-family:monospace;">16px / Regular / 160%</div></div>
          <div><div style="font-size:12px;font-weight:500;color:#64748B;margin-bottom:4px;letter-spacing:0.02em;">Caption and metadata text</div><div style="font-size:12px;color:#94A3B8;font-family:monospace;">12px / Medium / 2%</div></div>
        </div>
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
      if (fam.includes('Expandable')) return `<div style="width:100%;max-width:300px;display:flex;align-items:center;gap:12px;"><div style="width:44px;height:44px;background:#F1F5F9;border-radius:50%;display:flex;align-items:center;justify-content:center;cursor:pointer;">🔍</div><input type="text" placeholder="Search..." style="flex:1;height:44px;background:#F1F5F9;border-radius:22px;padding:0 16px;font-size:14px;color:#0F172A;border:1px solid #E2E8F0;outline:none;transition:all 0.2s;" onfocus="this.style.borderColor='#3B82F6';this.style.boxShadow='0 0 0 3px rgba(59,130,246,0.1)'" onblur="this.style.borderColor='#E2E8F0';this.style.boxShadow='none'"/></div>`;
      if (fam.includes('Filter')) return `<div style="width:100%;max-width:300px;"><div style="display:flex;gap:8px;margin-bottom:12px;"><div style="flex:1;height:44px;background:#F8FAFC;border:1px solid #E2E8F0;border-radius:12px;display:flex;align-items:center;padding:0 14px;gap:8px;transition:all 0.2s;" id="search-wrapper-${slug}"><span style="color:#94A3B8;">🔍</span><input type="text" placeholder="Search" style="border:none;background:transparent;outline:none;font-size:14px;color:#0F172A;width:100%;" onfocus="document.getElementById('search-wrapper-${slug}').style.borderColor='#3B82F6';document.getElementById('search-wrapper-${slug}').style.boxShadow='0 0 0 3px rgba(59,130,246,0.1)'" onblur="document.getElementById('search-wrapper-${slug}').style.borderColor='#E2E8F0';document.getElementById('search-wrapper-${slug}').style.boxShadow='none'"/></div><button style="height:44px;width:44px;background:#0F172A;border-radius:12px;display:flex;align-items:center;justify-content:center;color:#fff;font-size:16px;cursor:pointer;border:none;outline:none;transition:background 0.2s;" onmouseover="this.style.background='#1E293B'" onmouseout="this.style.background='#0F172A'">⚙</button></div><div style="display:flex;gap:8px;"><button style="padding:6px 14px;background:#EEF2FF;color:#4F46E5;border-radius:99px;font-size:12px;font-weight:600;border:none;cursor:pointer;">All</button><button style="padding:6px 14px;background:#F1F5F9;color:#64748B;border-radius:99px;font-size:12px;border:none;cursor:pointer;transition:background 0.2s;" onmouseover="this.style.background='#E2E8F0'" onmouseout="this.style.background='#F1F5F9'">Active</button><button style="padding:6px 14px;background:#F1F5F9;color:#64748B;border-radius:99px;font-size:12px;border:none;cursor:pointer;transition:background 0.2s;" onmouseover="this.style.background='#E2E8F0'" onmouseout="this.style.background='#F1F5F9'">Pending</button></div></div>`;
      return `<div style="width:100%;max-width:300px;height:48px;background:#F8FAFC;border:1.5px solid #E2E8F0;border-radius:14px;display:flex;align-items:center;padding:0 16px;gap:12px;transition:all 0.2s;" id="basic-search-${slug}"><span style="color:#94A3B8;">🔍</span><input type="text" placeholder="Search components..." style="border:none;background:transparent;outline:none;font-size:14px;color:#0F172A;width:100%;" onfocus="document.getElementById('basic-search-${slug}').style.borderColor='#3B82F6';document.getElementById('basic-search-${slug}').style.background='#FFF';document.getElementById('basic-search-${slug}').style.boxShadow='0 4px 12px rgba(0,0,0,0.05)'" onblur="document.getElementById('basic-search-${slug}').style.borderColor='#E2E8F0';document.getElementById('basic-search-${slug}').style.background='#F8FAFC';document.getElementById('basic-search-${slug}').style.boxShadow='none'"/></div>`;
    }

    // Email
    if (fam.includes('Email')) {
      if (fam.includes('Domain')) return `<div style="width:100%;max-width:300px;"><label style="font-size:13px;font-weight:600;color:#334155;display:block;margin-bottom:6px;">Email</label><div style="display:flex;border:1.5px solid #E2E8F0;border-radius:12px;overflow:hidden;transition:all 0.2s;" id="email-domain-${slug}"><input type="text" placeholder="user" style="flex:1;padding:12px 14px;border:none;font-size:14px;outline:none;background:#F8FAFC;color:#0F172A;" onfocus="document.getElementById('email-domain-${slug}').style.borderColor='#3B82F6'" onblur="document.getElementById('email-domain-${slug}').style.borderColor='#E2E8F0'"/><div style="background:#F1F5F9;padding:12px 14px;font-size:14px;color:#64748B;border-left:1px solid #E2E8F0;">@rentenpe.com</div></div></div>`;
      if (fam.includes('Multi')) return `<div style="width:100%;max-width:300px;"><label style="font-size:13px;font-weight:600;color:#334155;display:block;margin-bottom:6px;">Recipients</label><div style="border:1.5px solid #E2E8F0;border-radius:12px;padding:8px;background:#F8FAFC;display:flex;flex-wrap:wrap;gap:6px;min-height:48px;" id="email-multi-${slug}"><div style="background:#EEF2FF;color:#4F46E5;padding:4px 10px;border-radius:6px;font-size:12px;font-weight:600;display:flex;align-items:center;gap:4px;">josh@mail.com <span style="cursor:pointer;opacity:0.7;" onmouseover="this.style.opacity='1'" onmouseout="this.style.opacity='0.7'">✕</span></div><input type="text" placeholder="Add more..." style="border:none;background:transparent;outline:none;font-size:13px;color:#0F172A;min-width:80px;flex:1;" onfocus="document.getElementById('email-multi-${slug}').style.borderColor='#3B82F6';document.getElementById('email-multi-${slug}').style.background='#FFF'" onblur="document.getElementById('email-multi-${slug}').style.borderColor='#E2E8F0';document.getElementById('email-multi-${slug}').style.background='#F8FAFC'"/></div></div>`;
      return `<div style="width:100%;max-width:300px;"><label style="font-size:13px;font-weight:600;color:#334155;display:block;margin-bottom:6px;">Email Address</label><div style="border:1.5px solid #E2E8F0;border-radius:12px;padding:12px 14px;background:#F8FAFC;display:flex;align-items:center;gap:10px;transition:all 0.2s;" id="email-std-${slug}"><span style="color:#94A3B8;">📧</span><input type="email" placeholder="joshua@rentenpe.com" style="border:none;background:transparent;outline:none;font-size:14px;color:#0F172A;width:100%;" onfocus="document.getElementById('email-std-${slug}').style.borderColor='#3B82F6';document.getElementById('email-std-${slug}').style.background='#FFF'" onblur="document.getElementById('email-std-${slug}').style.borderColor='#E2E8F0';document.getElementById('email-std-${slug}').style.background='#F8FAFC'"/></div><div style="font-size:11px;color:#10B981;margin-top:6px;font-weight:500;">✓ Valid email format</div></div>`;
    }

    // Phone
    if (fam.includes('Phone')) {
      if (fam.includes('Country')) return `<div style="width:100%;max-width:300px;"><label style="font-size:13px;font-weight:600;color:#334155;display:block;margin-bottom:6px;">Phone Number</label><div style="display:flex;gap:8px;"><button style="background:#F8FAFC;border:1.5px solid #E2E8F0;border-radius:12px;padding:0 12px;display:flex;align-items:center;gap:6px;cursor:pointer;outline:none;transition:background 0.2s;" onmouseover="this.style.background='#F1F5F9'" onmouseout="this.style.background='#F8FAFC'"><span>🇮🇳</span><span style="font-size:14px;font-weight:600;color:#0F172A;">+91</span><span style="font-size:10px;color:#64748B;">▼</span></button><div style="flex:1;background:#F8FAFC;border:1.5px solid #E2E8F0;border-radius:12px;padding:12px 14px;transition:all 0.2s;" id="phone-ctry-${slug}"><input type="tel" placeholder="98765 43210" style="border:none;background:transparent;outline:none;font-size:14px;color:#0F172A;width:100%;letter-spacing:1px;" onfocus="document.getElementById('phone-ctry-${slug}').style.borderColor='#3B82F6';document.getElementById('phone-ctry-${slug}').style.background='#FFF'" onblur="document.getElementById('phone-ctry-${slug}').style.borderColor='#E2E8F0';document.getElementById('phone-ctry-${slug}').style.background='#F8FAFC'"/></div></div></div>`;
      return `<div style="width:100%;max-width:300px;"><label style="font-size:13px;font-weight:600;color:#334155;display:block;margin-bottom:6px;">Phone Number</label><div style="border:1.5px solid #E2E8F0;border-radius:12px;padding:12px 14px;background:#F8FAFC;display:flex;align-items:center;gap:10px;transition:all 0.2s;" id="phone-std-${slug}"><span style="font-size:16px;">📱</span><input type="tel" placeholder="+91 98765 43210" style="border:none;background:transparent;outline:none;font-size:14px;color:#0F172A;width:100%;letter-spacing:0.5px;" onfocus="document.getElementById('phone-std-${slug}').style.borderColor='#3B82F6';document.getElementById('phone-std-${slug}').style.background='#FFF'" onblur="document.getElementById('phone-std-${slug}').style.borderColor='#E2E8F0';document.getElementById('phone-std-${slug}').style.background='#F8FAFC'"/></div></div>`;
    }

    // Password
    if (fam.includes('Password')) {
      if (fam.includes('Requirement')) return `<div style="width:100%;max-width:300px;background:#fff;border-radius:16px;padding:24px;border:1px solid #E2E8F0;box-shadow:0 8px 16px rgba(0,0,0,0.02);"><label style="font-size:13px;font-weight:600;color:#334155;display:block;margin-bottom:8px;">Create Password</label><div style="border:1.5px solid #3B82F6;border-radius:12px;padding:12px 14px;background:#FFF;display:flex;align-items:center;gap:10px;box-shadow:0 0 0 3px rgba(59,130,246,0.1);"><span>🔒</span><input type="password" value="secret" style="border:none;background:transparent;outline:none;font-size:14px;color:#0F172A;letter-spacing:3px;width:100%;font-family:monospace;"/></div><div style="margin-top:12px;display:flex;flex-direction:column;gap:6px;font-size:12px;"><div style="color:#10B981;">✓ 8+ characters</div><div style="color:#10B981;">✓ One uppercase</div><div style="color:#EF4444;">✗ One number</div><div style="color:#94A3B8;">○ One special char</div></div></div>`;
      return `<div style="width:100%;max-width:300px;background:#fff;border-radius:16px;padding:24px;border:1px solid #E2E8F0;box-shadow:0 8px 16px rgba(0,0,0,0.02);"><label style="font-size:13px;font-weight:600;color:#334155;display:block;margin-bottom:8px;">Password</label><div style="border:1.5px solid #E2E8F0;border-radius:12px;padding:12px 14px;background:#F8FAFC;display:flex;align-items:center;justify-content:space-between;transition:all 0.2s;" id="pass-std-${slug}"><div style="display:flex;align-items:center;gap:10px;flex:1;"><span>🔒</span><input type="password" placeholder="••••••••" style="border:none;background:transparent;outline:none;font-size:14px;color:#0F172A;letter-spacing:2px;width:100%;font-family:monospace;" onfocus="document.getElementById('pass-std-${slug}').style.borderColor='#3B82F6';document.getElementById('pass-std-${slug}').style.background='#FFF'" onblur="document.getElementById('pass-std-${slug}').style.borderColor='#E2E8F0';document.getElementById('pass-std-${slug}').style.background='#F8FAFC'"/></div><button style="background:none;border:none;cursor:pointer;color:#94A3B8;padding:0;outline:none;" onmouseover="this.style.color='#64748B'" onmouseout="this.style.color='#94A3B8'">👁</button></div></div>`;
    }

    // Textarea
    if (fam.includes('Textarea') || fam.includes('Editor')) {
        return `<div style="width:100%;max-width:300px;background:#fff;border-radius:16px;padding:24px;border:1px solid #E2E8F0;box-shadow:0 8px 16px rgba(0,0,0,0.02);"><label style="font-size:13px;font-weight:600;color:#334155;display:block;margin-bottom:8px;">${fam}</label><div style="border:1.5px solid #E2E8F0;border-radius:12px;background:#F8FAFC;transition:all 0.2s;" id="textarea-${slug}"><textarea placeholder="Enter your message here..." style="border:none;background:transparent;outline:none;font-size:14px;color:#0F172A;width:100%;min-height:80px;padding:12px 14px;resize:vertical;font-family:inherit;" onfocus="document.getElementById('textarea-${slug}').style.borderColor='#3B82F6';document.getElementById('textarea-${slug}').style.background='#FFF'" onblur="document.getElementById('textarea-${slug}').style.borderColor='#E2E8F0';document.getElementById('textarea-${slug}').style.background='#F8FAFC'"></textarea></div></div>`;
    }

    // Date
    if (fam.includes('Date')) {
        return `<div style="width:100%;max-width:300px;background:#fff;border-radius:16px;padding:24px;border:1px solid #E2E8F0;box-shadow:0 8px 16px rgba(0,0,0,0.02);"><label style="font-size:13px;font-weight:600;color:#334155;display:block;margin-bottom:8px;">${fam}</label><div style="border:1.5px solid #E2E8F0;border-radius:12px;padding:12px 14px;background:#F8FAFC;display:flex;align-items:center;gap:10px;transition:all 0.2s;" id="date-${slug}"><span style="color:#94A3B8;">📅</span><input type="date" style="border:none;background:transparent;outline:none;font-size:14px;color:#0F172A;width:100%;font-family:inherit;" onfocus="document.getElementById('date-${slug}').style.borderColor='#3B82F6';document.getElementById('date-${slug}').style.background='#FFF'" onblur="document.getElementById('date-${slug}').style.borderColor='#E2E8F0';document.getElementById('date-${slug}').style.background='#F8FAFC'"/></div></div>`;
    }

    // Number
    if (fam.includes('Number')) {
        return `<div style="width:100%;max-width:300px;background:#fff;border-radius:16px;padding:24px;border:1px solid #E2E8F0;box-shadow:0 8px 16px rgba(0,0,0,0.02);"><label style="font-size:13px;font-weight:600;color:#334155;display:block;margin-bottom:8px;">${fam}</label><div style="border:1.5px solid #E2E8F0;border-radius:12px;background:#F8FAFC;display:flex;align-items:center;overflow:hidden;transition:all 0.2s;" id="num-${slug}"><button style="width:40px;height:44px;background:#F1F5F9;border:none;border-right:1px solid #E2E8F0;cursor:pointer;font-size:18px;color:#475569;outline:none;transition:background 0.2s;" onmouseover="this.style.background='#E2E8F0'" onmouseout="this.style.background='#F1F5F9'">−</button><input type="number" value="1" style="flex:1;height:44px;border:none;background:transparent;outline:none;font-size:14px;color:#0F172A;text-align:center;font-weight:600;" onfocus="document.getElementById('num-${slug}').style.borderColor='#3B82F6';document.getElementById('num-${slug}').style.background='#FFF'" onblur="document.getElementById('num-${slug}').style.borderColor='#E2E8F0';document.getElementById('num-${slug}').style.background='#F8FAFC'"/><button style="width:40px;height:44px;background:#F1F5F9;border:none;border-left:1px solid #E2E8F0;cursor:pointer;font-size:18px;color:#475569;outline:none;transition:background 0.2s;" onmouseover="this.style.background='#E2E8F0'" onmouseout="this.style.background='#F1F5F9'">+</button></div></div>`;
    }

    // Generic input fallback
    return `<div style="width:100%;max-width:300px;background:#fff;border-radius:16px;padding:24px;border:1px solid #E2E8F0;box-shadow:0 8px 16px rgba(0,0,0,0.02);"><label style="font-size:13px;font-weight:600;color:#334155;display:block;margin-bottom:8px;">${fam}</label><div style="border:1.5px solid #E2E8F0;border-radius:12px;padding:12px 14px;background:#F8FAFC;display:flex;align-items:center;gap:10px;transition:all 0.2s;" id="gen-${slug}"><span style="color:#94A3B8;">${icon}</span><input type="text" placeholder="Enter value..." style="border:none;background:transparent;outline:none;font-size:14px;color:#0F172A;width:100%;" onfocus="document.getElementById('gen-${slug}').style.borderColor='#3B82F6';document.getElementById('gen-${slug}').style.background='#FFF'" onblur="document.getElementById('gen-${slug}').style.borderColor='#E2E8F0';document.getElementById('gen-${slug}').style.background='#F8FAFC'"/></div></div>`;
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
      if (fam.includes('Group')) return `<div style="width:100%;max-width:280px;display:flex;flex-direction:column;gap:12px;"><label style="display:flex;align-items:center;gap:12px;padding:12px 16px;background:#F8FAFC;border-radius:12px;border:1px solid #E2E8F0;cursor:pointer;transition:all 0.2s;" onmouseover="this.style.borderColor='#3B82F6'" onmouseout="this.style.borderColor='#E2E8F0'"><input type="checkbox" checked style="width:20px;height:20px;accent-color:#3B82F6;cursor:pointer;"/><span style="font-size:14px;font-weight:500;color:#0F172A;">Email notifications</span></label><label style="display:flex;align-items:center;gap:12px;padding:12px 16px;background:#F8FAFC;border-radius:12px;border:1px solid #E2E8F0;cursor:pointer;transition:all 0.2s;" onmouseover="this.style.borderColor='#3B82F6'" onmouseout="this.style.borderColor='#E2E8F0'"><input type="checkbox" checked style="width:20px;height:20px;accent-color:#3B82F6;cursor:pointer;"/><span style="font-size:14px;font-weight:500;color:#0F172A;">SMS alerts</span></label><label style="display:flex;align-items:center;gap:12px;padding:12px 16px;background:#F8FAFC;border-radius:12px;border:1px solid #E2E8F0;cursor:pointer;transition:all 0.2s;" onmouseover="this.style.borderColor='#3B82F6'" onmouseout="this.style.borderColor='#E2E8F0'"><input type="checkbox" style="width:20px;height:20px;accent-color:#3B82F6;cursor:pointer;"/><span style="font-size:14px;font-weight:500;color:#0F172A;">Push notifications</span></label></div>`;
      return `<label style="display:flex;align-items:center;gap:12px;padding:14px 18px;background:#FFF;border:1.5px solid #E2E8F0;border-radius:12px;cursor:pointer;transition:all 0.2s;" onmouseover="this.style.borderColor='#3B82F6';this.style.boxShadow='0 4px 12px rgba(0,0,0,0.05)'" onmouseout="this.style.borderColor='#E2E8F0';this.style.boxShadow='none'"><input type="checkbox" checked style="width:20px;height:20px;accent-color:#3B82F6;cursor:pointer;"/><span style="font-size:14px;font-weight:500;color:#0F172A;">I agree to terms and conditions</span></label>`;
    }
    if (fam.includes('Radio')) {
      if (fam.includes('Card')) return `<div style="width:100%;max-width:280px;display:flex;flex-direction:column;gap:10px;"><label style="padding:16px;background:#EEF2FF;border:2px solid #4F46E5;border-radius:14px;display:flex;align-items:center;gap:12px;cursor:pointer;"><input type="radio" name="plan_${slug}" checked style="width:20px;height:20px;accent-color:#4F46E5;cursor:pointer;"/><div><div style="font-size:14px;font-weight:600;color:#0F172A;">Monthly Plan</div><div style="font-size:12px;color:#64748B;">₹999/month</div></div></label><label style="padding:16px;background:#FFF;border:1.5px solid #E2E8F0;border-radius:14px;display:flex;align-items:center;gap:12px;cursor:pointer;transition:all 0.2s;" onmouseover="this.style.borderColor='#4F46E5'" onmouseout="this.style.borderColor='#E2E8F0'"><input type="radio" name="plan_${slug}" style="width:20px;height:20px;accent-color:#4F46E5;cursor:pointer;"/><div><div style="font-size:14px;font-weight:600;color:#0F172A;">Annual Plan</div><div style="font-size:12px;color:#64748B;">₹9,999/year</div></div></label></div>`;
      return `<div style="display:flex;flex-direction:column;gap:10px;"><label style="display:flex;align-items:center;gap:10px;cursor:pointer;"><input type="radio" name="opt_${slug}" checked style="width:20px;height:20px;accent-color:#3B82F6;cursor:pointer;"/><span style="font-size:14px;font-weight:500;color:#0F172A;">Option A</span></label><label style="display:flex;align-items:center;gap:10px;cursor:pointer;"><input type="radio" name="opt_${slug}" style="width:20px;height:20px;accent-color:#3B82F6;cursor:pointer;"/><span style="font-size:14px;font-weight:500;color:#64748B;">Option B</span></label></div>`;
    }
    if (fam.includes('Toggle') || fam.includes('Switch')) {
      return `<label style="display:flex;align-items:center;justify-content:space-between;width:100%;max-width:280px;padding:14px 18px;background:#FFF;border:1.5px solid #E2E8F0;border-radius:14px;cursor:pointer;transition:all 0.2s;" onmouseover="this.style.borderColor='#3B82F6'" onmouseout="this.style.borderColor='#E2E8F0'"><span style="font-size:14px;font-weight:600;color:#0F172A;">Enable Feature</span><div style="position:relative;display:inline-block;width:48px;height:28px;"><input type="checkbox" checked style="opacity:0;width:0;height:0;" onchange="this.nextElementSibling.style.background=this.checked?'#3B82F6':'#CBD5E1';this.nextElementSibling.firstElementChild.style.transform=this.checked?'translateX(20px)':'translateX(0)'"/><div style="position:absolute;cursor:pointer;top:0;left:0;right:0;bottom:0;background-color:#3B82F6;border-radius:34px;transition:.4s;"><div style="position:absolute;content:'';height:20px;width:20px;left:4px;bottom:4px;background-color:white;border-radius:50%;transition:.4s;transform:translateX(20px);box-shadow:0 2px 4px rgba(0,0,0,0.2);"></div></div></div></label>`;
    }
    if (fam.includes('Slider') || fam.includes('Range')) {
      return `<div style="width:100%;max-width:280px;"><label style="font-size:13px;font-weight:600;color:#334155;display:flex;justify-content:space-between;margin-bottom:12px;"><span>Budget Range</span><span style="color:#3B82F6;" id="val_${slug}">₹15,000</span></label><input type="range" min="0" max="50000" value="15000" style="width:100%;accent-color:#3B82F6;cursor:pointer;" oninput="document.getElementById('val_${slug}').innerText='₹'+this.value.replace(/\B(?=(\d{3})+(?!\d))/g, ',')"/></div>`;
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
      return `<div style="width:100%; max-width:280px;">
  <label style="font-size:13px;font-weight:600;color:#334155;display:block;margin-bottom:8px;">${fam}</label>
  <div style="position:relative;">
    <select style="width:100%; padding:14px 16px; background:#fff; border:1.5px solid #E2E8F0; border-radius:12px; font-size:14px; font-weight:500; color:#0F172A; appearance:none; cursor:pointer; outline:none; transition:all 0.2s; box-shadow:0 2px 4px rgba(0,0,0,0.02);" onfocus="this.style.borderColor='#3B82F6';this.style.boxShadow='0 0 0 3px rgba(59,130,246,0.1)'" onblur="this.style.borderColor='#E2E8F0';this.style.boxShadow='0 2px 4px rgba(0,0,0,0.02)'" onmouseover="this.style.borderColor='#3B82F6'" onmouseout="if(document.activeElement!==this)this.style.borderColor='#E2E8F0'">
      <option value="">${icon} Select option...</option>
      <option value="1">Option A</option>
      <option value="2">Option B</option>
      <option value="3">Option C</option>
    </select>
    <div style="position:absolute; right:16px; top:50%; transform:translateY(-50%); pointer-events:none; font-size:10px; color:#64748B;">▼</div>
  </div>
</div>`;
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
          <span class="uk-nav-icon">${item.icon}</span> <span class="nav-text" style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${item.title}</span>
          <div style="margin-left:auto; display:flex; align-items:center; gap:6px;">
            <span class="nav-count">${compCount}</span>
            ${dotHTML}
          </div>
        </a>\n`;
    }
    fullNavHTML += `      </div>\n`;
  }

  const paydashNote = data.paydash ? `<div style="padding:12px 16px;background:rgba(59,130,246,0.08);border:1px solid rgba(59,130,246,0.15);border-radius:8px;margin-bottom:24px;font-size:13px;color:var(--color-info)"><strong>PayDash Source:</strong> ${data.paydash} — Styles and interaction patterns extracted from the original repository.</div>` : '';

  const familyHTML = data.families.map((fam, i) => {
    const modelLetter = String.fromCharCode(65 + i);
    let mockContent = renderCategoryVariant(data.cat, fam, data.icon, slug, i);
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
  <aside class="catalog-sidebar" style="background: var(--color-surface); border-right: 1px solid var(--color-divider); display: flex; flex-direction: column; height: 100vh;">
    
    <!-- Ultra Modern Header -->
    <div class="catalog-sidebar-header" style="padding: 24px 20px 16px 20px;">
      <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 24px;">
        <div style="width: 36px; height: 36px; background: #0F172A; color: #fff; border-radius: 10px; display: flex; align-items: center; justify-content: center; font-size: 16px; font-weight: 800; font-family: Inter, sans-serif; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
          R
        </div>
        <div style="display: flex; flex-direction: column; justify-content: center;">
          <span style="font-size: 18px; font-weight: 800; color: #0F172A; letter-spacing: -0.03em; line-height: 1;">Rentenpe</span>
          <span style="font-size: 10px; font-weight: 700; color: #94A3B8; letter-spacing: 0.1em; text-transform: uppercase; margin-top: 4px;">Design System</span>
        </div>
      </div>
      
      <!-- Modern Search Bar -->
      <div class="sidebar-search catalog-search" style="position: relative;">
        <svg style="position: absolute; left: 14px; top: 50%; transform: translateY(-50%); width: 14px; height: 14px; color: #94A3B8;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
        <input type="text" placeholder="Search components..." style="width: 100%; padding: 10px 12px 10px 36px; background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 10px; font-size: 13px; font-weight: 500; color: #0F172A; outline: none; transition: all 0.2s;" onfocus="this.style.background='#fff';this.style.borderColor='#3B82F6';this.style.boxShadow='0 0 0 3px rgba(59,130,246,0.1)';" onblur="this.style.background='#F8FAFC';this.style.borderColor='#E2E8F0';this.style.boxShadow='none';">
      </div>
    </div>

    <!-- Navigation -->
    <nav class="catalog-nav">
${fullNavHTML}
    </nav>

    <!-- Modern Footer -->
    <div class="catalog-sidebar-footer">
      
      <button onclick="window.openThemePicker()" style="width: 100%; margin-bottom: 12px; padding: 10px; background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 10px; color: #0F172A; font-weight: 600; font-size: 13px; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 8px; box-shadow: 0 1px 2px rgba(0,0,0,0.05); transition: all 0.2s;" onmouseover="this.style.borderColor='#CBD5E1';this.style.boxShadow='0 2px 4px rgba(0,0,0,0.05)';" onmouseout="this.style.borderColor='#E2E8F0';this.style.boxShadow='0 1px 2px rgba(0,0,0,0.05)';">
        <span style="font-size: 14px;">🎨</span> Customize
      </button>
      
      <div style="background: #E2E8F0; border-radius: 10px; padding: 3px; display: flex; position: relative;">
        <div style="flex: 1; text-align: center; padding: 6px; font-size: 12px; font-weight: 600; color: #0F172A; background: #FFFFFF; border-radius: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 6px;">
          <span style="font-size: 12px;">☀️</span> Light
        </div>
        <div style="flex: 1; text-align: center; padding: 6px; font-size: 12px; font-weight: 500; color: #64748B; border-radius: 8px; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 6px;">
          <span style="font-size: 12px;">🌙</span> Dark
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
