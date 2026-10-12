/**
 * RentenPe UI Kit — 100+ Screens & Pages Registry
 * Deep element-by-element breakdown extracted from 65 Pinterest pins
 * Crafted with Apple & CRED aesthetic standards
 */

const SCREEN_SUITES = {
  'banking': {
    title: 'Banking & Neo-Bank Suites',
    icon: '🏦',
    badge: '18 screens',
    desc: 'Cutting-edge digital banking, dark luxury wallets, perforated receipts, and savings meters.',
    screens: [
      {
        id: 'monex-home-glow',
        suite: 'banking',
        title: 'Monex Home — Card Glow',
        pin: 'pin_48',
        theme: 'dark-neon',
        desc: 'Hero balance card with lime neon edge illumination, quick action pills, and transaction feed.',
        elements: ['Lime gradient card', 'Total Balance $6,324.49', 'Withdraw / Top up / Exchange pills', 'Bolt Food & Uber transaction feed', 'Floating bottom dock']
      },
      {
        id: 'monex-card-reveal',
        suite: 'banking',
        title: 'Monex Card — Credentials Flip',
        pin: 'pin_48',
        theme: 'dark-neon',
        desc: 'Interactive Visa card reveal with masked numbers, 1-click copy icons, and expiry/CVV security badges.',
        elements: ['Card number 3456 5667 3211 3377 with copy icon', 'CVV 277 with security shield', 'Expiry 01/29 badge', 'Balance summary overlay']
      },
      {
        id: 'monex-send-money',
        suite: 'banking',
        title: 'Monex — Instant Send Money Keypad',
        pin: 'pin_48',
        theme: 'dark-neon',
        desc: 'Tactile circular recipient selector, custom numeric dial keypad, and quick preset amount chips.',
        elements: ['Recipient avatar stack', 'Quick amount chips ($50, $100, $500, $1000)', 'Custom glass numeric keypad (1-9, ., 0, ⌫)', 'Neon lime Send Money button']
      },
      {
        id: 'monex-analytics',
        suite: 'banking',
        title: 'Monex — Financial Analytics & Spline',
        pin: 'pin_48',
        theme: 'dark-neon',
        desc: 'Monthly/Weekly/Daily balance spline chart with neon green glow, income cards, and budget meter.',
        elements: ['Timeframe segmented control', 'Glowing gradient line chart', 'Income $8,567 card', 'Overspent budget progress bar']
      },
      {
        id: 'monex-crypto',
        suite: 'banking',
        title: 'Monex — Crypto Asset Overview',
        pin: 'pin_48',
        theme: 'dark-neon',
        desc: 'Real-time crypto portfolio tracker with mini trend sparklines and quick buy/sell trade triggers.',
        elements: ['Crypto total balance $6,324.49 (+7.21%)', 'BTC sparkline card ($82,567.6)', 'ETH sparkline card ($1,818.6)', 'Trade / Send / Receive actions']
      },
      {
        id: 'monex-settings',
        suite: 'banking',
        title: 'Monex — Profile & Tier Management',
        pin: 'pin_48',
        theme: 'dark-neon',
        desc: 'User identity header, Standard membership tier card, referral invite card, and account settings.',
        elements: ['Leonard Lopez profile avatar', 'Standard plan badge', 'Referrals invite rewards card', 'Security & Statements menu rows']
      },
      {
        id: 'alimbank-home',
        suite: 'banking',
        title: 'AlimBank — Emerald Dashboard',
        pin: 'pin_30',
        theme: 'emerald-dark',
        desc: 'Curved emerald account balance card with hidden privacy toggle, promo banners, and glowing QR dock.',
        elements: ['Emerald card $2,235.1145', 'Eye privacy toggle', '4-action matrix (Transfer, Withdraw, Deposit, Pay)', 'POS promo card', 'Glowing QR scanner dock']
      },
      {
        id: 'alimbank-receipt',
        suite: 'banking',
        title: 'AlimBank — Perforated Serrated Receipt',
        pin: 'pin_30',
        theme: 'emerald-light',
        desc: 'Apple Wallet style perforated ticket voucher with serrated edges, transaction metadata, and share action.',
        elements: ['Jagged serrated top & bottom edges', 'Success badge & Merchant TOKO HYPERSHOP', 'Reference number #442774356886', 'Total $10.525', 'Share & Back actions']
      },
      {
        id: 'bluebank-home',
        suite: 'banking',
        title: 'Sapphire Blue — Neo-Bank Home',
        pin: 'pin_34',
        theme: 'sapphire-blue',
        desc: 'Gradient sapphire hero with FlexPerks travel credit card, horizontal insurance feature cards, and expense history.',
        elements: ['Balance $3,567 (+$223.74)', 'FlexPerks Mastercard 3759..2100', 'Deposit & Insurance 3D feature cards', 'History vs Statistics tabs', 'Shopping & Internet expenses']
      },
      {
        id: 'salung-savings',
        suite: 'banking',
        title: 'Salung — Savings Goals Hub',
        pin: 'pin_4',
        theme: 'minimal-light',
        desc: 'Clean matte black card with 4-button dock, multi-category savings goal progress bars, and timeline indicators.',
        elements: ['Black card $23,400.00', 'Summer vacation goal ($15,000 / $50,000 - 40%)', 'Real estate goal ($60,500 / $230,000)', 'Education goal progress bar', 'Bottom pill dock']
      },
      {
        id: 'salung-goal-detail',
        suite: 'banking',
        title: 'Salung — Goal Analytics & Top-Up',
        pin: 'pin_4',
        theme: 'minimal-light',
        desc: 'Detailed savings analytics screen with average per month, stippled bar chart, and sticky Top-up action.',
        elements: ['+112.00% growth indicator', 'Stipple texture bar chart', 'Average per month $1,202', 'Goal top up transaction row', 'Sticky + Top up CTA']
      },
      {
        id: 'monero-wallet',
        suite: 'banking',
        title: 'Monero — Dark Privacy Wallet',
        pin: 'pin_5',
        theme: 'pure-black',
        desc: 'Minimalist obsidian dark crypto wallet with live synchronization pill and multi-token portfolio breakdown.',
        elements: ['Pure black container', '$63,000 (210.43 XMR)', 'Receive / (+) / Send pill dock', '• Synchronized status pill', 'Tether & Ethereum token cards']
      },
      {
        id: 'shipping-wallet',
        suite: 'banking',
        title: 'Logistics — Shipping Balance & Tracker',
        pin: 'pin_2',
        theme: 'clean-mono',
        desc: 'Black balance card with Top-up trigger, active consignment stepper, and delivery rider contact.',
        elements: ['Balance $245.00', 'New Shipping & Track Shipping pills', 'Live tracking ID PAQ-327-P21', '3-step delivery progress bar', 'Rider chat & call buttons']
      },
      {
        id: 'pastel-finance-home',
        suite: 'banking',
        title: 'Pastel Minimal — Bento Financial Overview',
        pin: 'pin_50',
        theme: 'soft-pastel',
        desc: 'Gentle mint, peach, and lavender bento tiles for activity, weekly sales, and expense stream.',
        elements: ['Mint activity bar chart', 'Peach sales card $280.99', 'Lavender revenue card', 'Nike & Pepsi transaction feed', 'Floating light nav']
      },
      {
        id: 'pastel-finance-chart',
        suite: 'banking',
        title: 'Pastel Minimal — Income Spline & Trades',
        pin: 'pin_50',
        theme: 'soft-pastel',
        desc: 'Total income $6,289.00 USD with chart/table toggle, smooth spline curve, and Buy/Sell crypto cards.',
        elements: ['Total Income $6,289.00', 'Savings spline area card $2,738.00', 'Chart / Table toggle', 'Buy BTC +0.82 card', 'Sell BTC +0.98 card']
      }
    ]
  },
  'crypto': {
    title: 'Crypto & Web3 Suites',
    icon: '⚡',
    badge: '10 screens',
    desc: 'Web3 onboarding, NFT visual collections, swap rate timers, and decentralized goal pools.',
    screens: [
      {
        id: 'trantor-dashboard',
        suite: 'crypto',
        title: 'Trantor — Portfolio & Candlestick',
        pin: 'pin_18',
        theme: 'cyber-dark',
        desc: 'High-contrast portfolio screen with connected pill transfer buttons and candlestick volume chart.',
        elements: ['Current Value $12,788.56', 'Transfer ⇋ Receive connected pill', 'ETH 7-day candlestick chart', 'Bitcoin & Ethereum balance rows', 'Curved bottom nav dock']
      },
      {
        id: 'trantor-swap',
        suite: 'crypto',
        title: 'Trantor — Exchange Rate Timer & Swap',
        pin: 'pin_18',
        theme: 'cyber-dark',
        desc: 'Interlocking mint & black token swap cards, 10-second exchange rate countdown timer, and swipe-to-swap CTA.',
        elements: ['Rate lock countdown 00:08:43', 'USDT 300.00 Pay card', 'BNB 1.37 Get card', 'Center interlocking coin icon', 'Swipe to Swap slider']
      },
      {
        id: 'trantor-goal-pool',
        suite: 'crypto',
        title: 'Trantor — Collaborative Savings Pool',
        pin: 'pin_18',
        theme: 'cyber-dark',
        desc: 'Community goal funding screen with participant avatars, dual withdraw/share pills, and deposit trigger.',
        elements: ['For Dream pool 50,000.00 USDT', 'Progress bar 27% >> 73%', 'Your top-ups 9,230.55', '16 Additions participants avatar stack', 'USDT 250 Top-up card']
      },
      {
        id: 'web3-onboard-cards',
        suite: 'crypto',
        title: 'Web3 — Stacked Glass Asset Onboarding',
        pin: 'pin_27',
        theme: 'deep-space',
        desc: 'Dark full-bleed onboarding with 3D stacked pastel asset cards and neon curved accent border.',
        elements: ['Stacked Satya, Jay, Rico asset cards', 'Neon curved bottom boundary', 'Your journey into crypto starts here', 'Get Started CTA button']
      },
      {
        id: 'web3-nft-gallery',
        suite: 'crypto',
        title: 'Web3 — Bored Ape Curated Gallery',
        pin: 'pin_27',
        theme: 'deep-space',
        desc: 'Floating 3D NFT avatar cards with live Buy Now tooltips and tactile spotlight illumination.',
        elements: ['Tilted 3D Bored Ape character cards', 'Buy Now tooltip indicator', 'Your Journey Into Crypto Starts Here', 'Glass Get Started button']
      },
      {
        id: 'web3-purple-auth',
        suite: 'crypto',
        title: 'Web3 — Lavender SSO & Account Creation',
        pin: 'pin_27',
        theme: 'deep-space',
        desc: 'Purple radiant gradient backdrop with Google SSO authentication button and clean credential inputs.',
        elements: ['Google SSO single-tap button', 'Username input field', 'Email & Password fields', 'Already have an account link']
      },
      {
        id: 'fuse-plus-membership',
        suite: 'crypto',
        title: 'Fuse Plus — Solana VIP Membership Sheet',
        pin: 'pin_28',
        theme: 'luxury-obsidian',
        desc: 'Apple Card style luxury black membership card with Solana zero-fee badge and bottom glow button.',
        elements: ['Sparkle logo & Fuse Plus Membership', 'Free Transactions Solana card', 'Free Off-Ramps up to $25K/month card', 'Deposit $100+ into Earn criteria', 'Deposit and get Fuse+ glowing CTA']
      },
      {
        id: 'crypto-wallet-skeuo',
        suite: 'crypto',
        title: 'Wallet — 3D Skeuomorphic Leather Stack',
        pin: 'pin_6',
        theme: 'tactile-3d',
        desc: 'Ultra-realistic stitched leather wallet with stacked physical debit cards and tactile pull interaction.',
        elements: ['Stitched leather texture', 'Stacked embossed credit cards', 'Tactile card pull animation', 'Balance readout']
      },
      {
        id: 'crypto-bento-card',
        suite: 'crypto',
        title: 'Web3 — Bento High-Yield Protocol Card',
        pin: 'pin_16',
        theme: 'vision-glass',
        desc: 'Frosted VisionOS glassmorphism card with real-time APY ticker and glass specular sheen.',
        elements: ['Frosted glass backdrop', 'High-Yield APY counter', 'Specular border highlight', 'Invest now CTA']
      },
      {
        id: 'crypto-integrations',
        suite: 'crypto',
        title: 'Web3 — Multi-Chain Integration Hub',
        pin: 'pin_20',
        theme: 'vision-glass',
        desc: 'Floating multi-chain network icons (Ethereum, Solana, Polygon, Arbitrum) with connection toggles.',
        elements: ['Floating network tokens', 'Glass border container', 'One-click wallet connect', 'Active status badge']
      }
    ]
  },
  'realestate': {
    title: 'Real Estate & Rental Suites',
    icon: '🏠',
    badge: '12 screens',
    desc: 'The complete Findora Dream House rental experience tailored for Rentenpe property management.',
    screens: [
      {
        id: 'findora-welcome',
        suite: 'realestate',
        title: 'Findora — Full-Bleed Welcome & Hero',
        pin: 'pin_43',
        theme: 'clean-architectural',
        desc: 'Modern Scandinavian black home photo, brand insignia, curved bottom sheet, and dual Login/Sign Up CTAs.',
        elements: ['Full-bleed architectural house image', 'Findora Dream House round mark', 'Curved white bottom sheet', 'Login dark pill CTA', 'Sign Up outlined pill CTA']
      },
      {
        id: 'findora-discovery-home',
        suite: 'realestate',
        title: 'Findora — Property Discovery & Grid',
        pin: 'pin_43',
        theme: 'clean-architectural',
        desc: 'Location selector (Kochi, Kerala), Search bar with filter tile, Rental House category pills, and verified property cards.',
        elements: ['Kochi, Kerala location badge', 'Search Place... with filter button', 'Rental House / Apartment / Rooms pills', 'Georgie House (10,000/ Month, ★ 4.5)', 'Max House (12,000/ Month)', 'Bottom 4-tab nav']
      },
      {
        id: 'findora-property-detail',
        suite: 'realestate',
        title: 'Findora — Property Gallery & Specifications',
        pin: 'pin_43',
        theme: 'clean-architectural',
        desc: 'High-res image carousel, host verification seal, room amenities grid, and interactive rent calculator.',
        elements: ['Multi-photo carousel', 'Verified Landlord seal', 'BHK & square footage specs', 'Monthly rent breakdown', 'Book Inspection CTA']
      },
      {
        id: 'findora-lease-signing',
        suite: 'realestate',
        title: 'Findora — Digital Lease & E-Signature',
        pin: 'pin_43',
        theme: 'clean-architectural',
        desc: 'Legally binding e-lease contract viewer with clause checklist, deposit escrow terms, and tactile signature pad.',
        elements: ['Digital contract clauses', 'Security deposit escrow badge', 'Landlord & tenant terms', 'Tactile E-signature canvas', 'Confirm & Pay First Rent']
      },
      {
        id: 'findora-rent-split',
        suite: 'realestate',
        title: 'Findora — Roommate Rent Splitter',
        pin: 'pin_43',
        theme: 'clean-architectural',
        desc: 'Collaborative apartment rent split calculator with roommate avatars, UPI autopay toggles, and payment status.',
        elements: ['Total apartment rent ₹45,000', 'Roommate share breakdown', 'Roommate payment status chips', 'Remind via WhatsApp button', 'UPI Autopay toggle']
      },
      {
        id: 'findora-tenant-screening',
        suite: 'realestate',
        title: 'Findora — Instant Tenant Screening Score',
        pin: 'pin_43',
        theme: 'clean-architectural',
        desc: 'Comprehensive tenant trust report with Experian credit score, employment verification, and landlord references.',
        elements: ['Trust Score 820/900', 'Employment verified badge', 'Rental history timeline', 'Background verification shield']
      },
      {
        id: 'findora-move-in-checklist',
        suite: 'realestate',
        title: 'Findora — Move-In Condition Checklist',
        pin: 'pin_43',
        theme: 'clean-architectural',
        desc: 'Room-by-room inspection camera tool with timestamped photos, meter readings, and maintenance sign-off.',
        elements: ['Room checklist (Living room, Kitchen, Master Bedroom)', 'Photo upload zone', 'Electricity meter reading input', 'Landlord digital sign-off']
      },
      {
        id: 'findora-maintenance-req',
        suite: 'realestate',
        title: 'Findora — 1-Tap Maintenance Request',
        pin: 'pin_43',
        theme: 'clean-architectural',
        desc: 'Emergency plumber/electrician booking screen with issue photo upload, urgency selector, and live technician ETA.',
        elements: ['Urgency toggle (Standard / Urgent)', 'Category picker (Plumbing, Electrical, AC)', 'Live technician ETA map', 'Track repair status']
      },
      {
        id: 'findora-rewards-hub',
        suite: 'realestate',
        title: 'Findora — On-Time Rent Cashback Rewards',
        pin: 'pin_43',
        theme: 'clean-architectural',
        desc: 'Gamified reward center earning RentCoins on every rent payment with partner brand vouchers (IKEA, Urban Company).',
        elements: ['RentCoins balance 2,450', 'On-time rent streak: 8 months', 'Cashback scratch card', 'Brand gift vouchers']
      },
      {
        id: 'findora-neighborhood-guide',
        suite: 'realestate',
        title: 'Findora — Commute & Neighborhood Index',
        pin: 'pin_43',
        theme: 'clean-architectural',
        desc: 'Proximity radar displaying metro station distance, grocery delivery speed, safety index, and noise levels.',
        elements: ['Metro station: 400m (5 min walk)', 'Safety index: 9.2/10', 'Zomato/Blinkit delivery: 8 mins', 'Quiet residential zone badge']
      },
      {
        id: 'findora-deposit-escrow',
        suite: 'realestate',
        title: 'Findora — Deposit Shield & Zero-Deposit Bond',
        pin: 'pin_43',
        theme: 'clean-architectural',
        desc: 'Security deposit interest accrual tracker and alternative zero-deposit rental guarantee bond enrollment.',
        elements: ['Interest-earning escrow account', 'Annual return: 6.5%', 'Zero-deposit bond option', 'Instant return guarantee']
      },
      {
        id: 'findora-owner-analytics',
        suite: 'realestate',
        title: 'Findora — Property Owner Yield Dashboard',
        pin: 'pin_43',
        theme: 'clean-architectural',
        desc: 'Multi-unit portfolio overview with occupancy rate, rent collection health, tax deduction summary, and net yield.',
        elements: ['Portfolio value ₹3.2 Cr', 'Occupancy rate: 100%', 'Net annual yield: 7.8%', 'Export tax report PDF']
      }
    ]
  },
  'transport': {
    title: 'GoBus Transport & Travel Suite',
    icon: '🚌',
    badge: '24 screens',
    desc: 'The complete end-to-end GoBus public transit app extracted from 24 detailed pin screens.',
    screens: [
      {
        id: 'gobus-splash',
        suite: 'transport',
        title: 'GoBus — Splash & Brand Launch',
        pin: 'pin_51',
        theme: 'gobus-orange',
        desc: 'Vibrant orange splash screen with iconic bus glyph and clean brand typography.',
        elements: ['GoBus brand mark', 'Minimal orange canvas', 'Smooth load transition']
      },
      {
        id: 'gobus-onboard-1',
        suite: 'transport',
        title: 'GoBus — Onboarding 1: Real-Time Tracking',
        pin: 'pin_51',
        theme: 'gobus-orange',
        desc: 'Bus stop waiting shelter illustration with GPS live ETA description and circular next arrow button.',
        elements: ['Bus shelter illustration', 'Quick and Reliable Bus Tracking', 'Skip text link', 'Circular arrow next CTA']
      },
      {
        id: 'gobus-onboard-2',
        suite: 'transport',
        title: 'GoBus — Onboarding 2: Fleet Welcome',
        pin: 'pin_51',
        theme: 'gobus-orange',
        desc: 'Modern interstate transit coach illustration with fleet network introduction.',
        elements: ['Interstate bus illustration', 'Welcome to GoBus!', 'Pagination dots', 'Circular arrow CTA']
      },
      {
        id: 'gobus-onboard-3',
        suite: 'transport',
        title: 'GoBus — Onboarding 3: Effortless Payments',
        pin: 'pin_51',
        theme: 'gobus-orange',
        desc: 'Digital smartphone payments illustration with 1-tap pass recharge and ticket booking introduction.',
        elements: ['Mobile wallet illustration', 'Effortless Payments', 'Get Started primary CTA']
      },
      {
        id: 'gobus-search-home',
        suite: 'transport',
        title: 'GoBus — Origin & Destination Booking Hub',
        pin: 'pin_51',
        theme: 'gobus-orange',
        desc: 'Where would you like to go? From/To inputs with swap arrows, date picker, recent searches, and popular routes.',
        elements: ['Where would you like to go? header', 'From & To location inputs with ⇅ swap', 'Date picker calendar strip', 'Search buses button', 'Recent Search list', 'Popular routes chips']
      },
      {
        id: 'gobus-bus-results',
        suite: 'transport',
        title: 'GoBus — Live Bus Results & Timetable',
        pin: 'pin_51',
        theme: 'gobus-orange',
        desc: 'Recommended bus options with distance away, departure timetable, pricing, and AC/Non-AC filter pills.',
        elements: ['Search results count', 'Bus No. 37 (12 min away)', 'Kadamwadi to Binduchowk', 'Departure & arrival times', 'Filter & Sort actions']
      },
      {
        id: 'gobus-gps-route-map',
        suite: 'transport',
        title: 'GoBus — Live GPS Bus Tracking Map',
        pin: 'pin_51',
        theme: 'gobus-orange',
        desc: 'Interactive map with moving bus position, route line, stop markers, and real-time traffic delay indicator.',
        elements: ['Interactive GPS route map', 'Live moving bus marker', 'Intermediate stop pins', 'Estimated arrival time: 10:25 AM', 'Share trip link']
      },
      {
        id: 'gobus-notifications',
        suite: 'transport',
        title: 'GoBus — Transit Alerts & Delay Feed',
        pin: 'pin_51',
        theme: 'gobus-orange',
        desc: 'Chronological feed of bus arrival reminders, traffic congestion alerts, and scheduled departure updates.',
        elements: ['Bus arriving in 5 min alert', 'Delay notice due to heavy traffic', 'Yesterday departure logs', 'Clear all notifications']
      },
      {
        id: 'gobus-passenger-config',
        suite: 'transport',
        title: 'GoBus — Passenger & Fare Calculator',
        pin: 'pin_51',
        theme: 'gobus-orange',
        desc: 'Adult and child quantity steppers, base fare, surcharge breakdown, and Pay Rs. 35 bottom bar.',
        elements: ['Adult quantity stepper (- 1 +)', 'Child quantity stepper', 'Base fare Rs. 35 breakdown', 'Terms and conditions link', 'Pay Rs. 35 sticky action']
      },
      {
        id: 'gobus-payment-success',
        suite: 'transport',
        title: 'GoBus — Payment Success Celebration',
        pin: 'pin_51',
        theme: 'gobus-orange',
        desc: 'Celebratory ticket confirmation with Continue Tracking Bus and Download Ticket PDF actions.',
        elements: ['Success confetti illustration', 'Payment Successful! title', 'Continue Tracking Bus primary CTA', 'Download Ticket outline button']
      },
      {
        id: 'gobus-route-detail',
        suite: 'transport',
        title: 'GoBus — Route 101 Stop-by-Stop Timeline',
        pin: 'pin_51',
        theme: 'gobus-orange',
        desc: 'Complete timeline of Route No: 101 with driver details, bus number, and arrival times for all stops.',
        elements: ['Route No: 101 Kolhapur to Sangli', 'Driver Yusuf Pathan', 'Stop timeline with green passed stops', 'Next stop ETA: 9:45 AM']
      },
      {
        id: 'gobus-routes-directory',
        suite: 'transport',
        title: 'GoBus — Regional Bus Directory',
        pin: 'pin_51',
        theme: 'gobus-orange',
        desc: 'List of all intercity routes (Belgaum, Jayashingpur, Miraj, Pune, Mumbai) with daily frequencies.',
        elements: ['Search route number or name', 'Route No: 101 to Belgaum', 'Route No: 101 to Pune', 'Route No: 101 to Mumbai', 'Arrow detail triggers']
      },
      {
        id: 'gobus-pass-catalog',
        suite: 'transport',
        title: 'GoBus — Transit Pass Types',
        pin: 'pin_51',
        theme: 'gobus-orange',
        desc: 'Catalog of passes: Point-to-Point Pass, Student Pass, Unlimited City Pass, Senior Citizen Super Saver Pass.',
        elements: ['Point-to-Point Pass card', 'Student Pass discounted card', 'Unlimited Rides Pass card', 'Senior Citizen Pass card']
      },
      {
        id: 'gobus-package-selector',
        suite: 'transport',
        title: 'GoBus — Pass Package Duration & Buy',
        pin: 'pin_51',
        theme: 'gobus-orange',
        desc: 'Weekly (Rs. 100), Monthly (Rs. 600), and Quarterly pass pricing cards with instant checkout.',
        elements: ['Weekly Pass Rs. 100 card', 'Monthly Pass Rs. 600 best value card', 'Route details summary', 'Instant Buy CTA']
      },
      {
        id: 'gobus-trip-planner',
        suite: 'transport',
        title: 'GoBus — Route & Stop Lookup',
        pin: 'pin_51',
        theme: 'gobus-orange',
        desc: 'Fast trip lookup form with route number, start stop (Nagala Park), and destination stop (Rankala Lake).',
        elements: ['Route number input: 506', 'Start stop: Nagala park', 'Destination: Rankala Lake', 'Next button']
      },
      {
        id: 'gobus-route-autocomplete',
        suite: 'transport',
        title: 'GoBus — Live Route Autocomplete Search',
        pin: 'pin_51',
        theme: 'gobus-orange',
        desc: 'Instant keyword search across all transit corridors with live highlighted search matches.',
        elements: ['Search bar with active focus', 'Live matching route results', 'Quick tap selection']
      },
      {
        id: 'gobus-student-pass',
        suite: 'transport',
        title: 'GoBus — Student Concession Pass',
        pin: 'pin_51',
        theme: 'gobus-orange',
        desc: 'Verified student pass duration tiers: 1 Month (Rs. 200), 3 Month (Rs. 600), 6 Month (Rs. 1200).',
        elements: ['Student ID verified badge', '1 Month Rs. 200 card', '3 Month Rs. 600 card', '6 Month Rs. 1200 card', 'Buy Pass button']
      },
      {
        id: 'gobus-qr-ticket',
        suite: 'transport',
        title: 'GoBus — High-Res Digital QR Ticket Pass',
        pin: 'pin_51',
        theme: 'gobus-orange',
        desc: 'Crisp scan-ready digital ticket with scannable QR code, route number Bus 01, validity time, and security watermark.',
        elements: ['Bus 01 Kadamwadi to Binduchowk', 'Departure 10:20 AM - Arrival 10:45 AM', 'High-density QR code for conductor scanning', 'Ticket ID & Security hash']
      },
      {
        id: 'gobus-account',
        suite: 'transport',
        title: 'GoBus — My Account & Preferences',
        pin: 'pin_51',
        theme: 'gobus-orange',
        desc: 'Profile screen with Ashna Khan avatar, My Bookings, Language, Location, Refer & Earn, and Call Support.',
        elements: ['Ashna Khan profile card', 'My bookings menu item', 'Language & Location options', 'Refer & Earn rewards', 'Help & Call Support']
      },
      {
        id: 'gobus-emergency-contacts',
        suite: 'transport',
        title: 'GoBus — Emergency SOS Contact Config',
        pin: 'pin_51',
        theme: 'gobus-orange',
        desc: 'Safety setup screen for configuring emergency SMS recipients with customizable distress message.',
        elements: ['Emergency message: "I am in danger. Please help me."', 'Configured contacts (Mr. Khan, Mrs. Khan)', '+ Add Contact button', 'Send Alert trigger']
      },
      {
        id: 'gobus-phone-login',
        suite: 'transport',
        title: 'GoBus — Mobile OTP Login & SSO',
        pin: 'pin_51',
        theme: 'gobus-orange',
        desc: 'Phone number entry form (+91 9482943002), Continue button, and Google / Facebook / Apple SSO options.',
        elements: ['Phone number input', 'Continue CTA button', 'Or Sign Up with divider', 'Google / Facebook / Apple SSO buttons', 'Continue as guest link']
      },
      {
        id: 'gobus-pass-congrats',
        suite: 'transport',
        title: 'GoBus — Monthly Pass Issued Celebration',
        pin: 'pin_51',
        theme: 'gobus-orange',
        desc: 'Confirmation screen with celebratory illustration: "Congratulations! Your monthly package has been added successfully".',
        elements: ['Package active illustration', 'Go Back To Home primary button', 'Download Pass PDF option']
      },
      {
        id: 'gobus-sos-active',
        suite: 'transport',
        title: 'GoBus — Active Emergency SOS Screen',
        pin: 'pin_51',
        theme: 'gobus-orange',
        desc: 'High-urgency emergency screen with live police sharing and broadcast alert to emergency contacts.',
        elements: ['Urgent red beacon animation', 'Broadcast SMS dispatched', 'Share live bus GPS location', 'Cancel within 5 seconds countdown']
      },
      {
        id: 'gobus-drawer-menu',
        suite: 'transport',
        title: 'GoBus — Slide-Out Navigation Drawer',
        pin: 'pin_51',
        theme: 'gobus-orange',
        desc: 'Comprehensive side drawer with quick links to Tickets, Wallet, Card Recharge, Stops, Offers, and SOS.',
        elements: ['Profile header with View Profile', 'Tickets & Passes link', 'Wallet balance shortcut', 'Card Recharge trigger', 'SOS emergency quick tap']
      }
    ]
  },
  'fitness': {
    title: 'Fitness, Nutrition & Health Suites',
    icon: '🏋️',
    badge: '16 screens',
    desc: 'Apple Health FitFuel light elegance, CRED Neon lime dark calisthenics, and FitBite nutrition tracking.',
    screens: [
      {
        id: 'fitfuel-onboard',
        suite: 'fitness',
        title: 'FitFuel — Light Fitness Onboarding',
        pin: 'pin_44',
        theme: 'apple-light',
        desc: 'Inspiring female athlete visual with "Your Fitness Journey Starts Here", "Get Started →", and 2M+ users proof.',
        elements: ['Athlete hero visual', 'Your Fitness Journey Starts Here', 'Get Started arrow CTA', 'Join Over 2M+ Users avatar stack']
      },
      {
        id: 'fitfuel-home',
        suite: 'fitness',
        title: 'FitFuel — Health & Activity Dashboard',
        pin: 'pin_44',
        theme: 'apple-light',
        desc: '75% circular progress ring, weekly activity bar chart, and quick actions (Start Workout, Log Food, Body Stats).',
        elements: ['Hi, Alex greeting', '75% circular progress ring (45 min, 520 kcal, 8,752 steps)', 'Weekly activity bar graph', 'Quick action bento grid', 'Bottom nav dock']
      },
      {
        id: 'fitfuel-workouts',
        suite: 'fitness',
        title: 'FitFuel — Workout Library & Filters',
        pin: 'pin_44',
        theme: 'apple-light',
        desc: 'Search bar, category pills (All, Strength, Cardio, Yoga, HIIT), and high-res workout cards.',
        elements: ['Search workouts input', 'Category filter pills', 'Full Body Strength card', 'HIIT Burn card', 'Core Crusher card']
      },
      {
        id: 'fitfuel-workout-detail',
        suite: 'fitness',
        title: 'FitFuel — Exercise Session & Rep List',
        pin: 'pin_44',
        theme: 'apple-light',
        desc: 'Exercise demo video with play trigger, difficulty specs, and structured rep checklist (Goblet Squat, Push Ups).',
        elements: ['Video demo thumbnail with play button', 'Duration 45 min & 320 kcal stats', 'Goblet Squat (4 Sets × 12 Reps)', 'Push Ups & Bent Over Row rows', 'Start Workout action bar']
      },
      {
        id: 'fitfuel-activity-rings',
        suite: 'fitness',
        title: 'FitFuel — Apple-Style Activity Rings & Spline',
        pin: 'pin_44',
        theme: 'apple-light',
        desc: 'Timeframe tabs, Calories Burned 2,450 kcal gradient spline chart, and Move/Exercise/Stand activity rings.',
        elements: ['Day / Week / Month / Year tabs', 'Calories Burned 2,450 kcal spline chart', 'Move, Exercise, Stand triple rings', 'Steps bar chart (8,752 Steps)']
      },
      {
        id: 'fitfuel-nutrition',
        suite: 'fitness',
        title: 'FitFuel — Macros Bento & Meal Diary',
        pin: 'pin_44',
        theme: 'apple-light',
        desc: 'Calorie goal 2,000 kcal progress bar, Carbs/Protein/Fats macro bento cards, and today meal log with checkmarks.',
        elements: ['Calorie Goal 2,000 kcal meter', 'Carbs 180g (45%), Protein 120g, Fats 60g cards', 'Breakfast Oatmeal with Fruits (450 kcal ✓)', 'Lunch Grilled Chicken Salad (550 kcal ✓)', 'Log Food peach CTA']
      },
      {
        id: 'credfit-browse',
        suite: 'fitness',
        title: 'CRED Fitness — Neon Lime Workout Grid',
        pin: 'pin_53',
        theme: 'cred-dark',
        desc: 'High-contrast dark mode with neon lime pills (Workouts, Fitness, Plans), filter bar, and trainer cards.',
        elements: ['Neon lime pill tabs', 'Filters / Sorting / Search bar', 'Home Chest Workout video card', 'Complete Home Leg Workout card', 'CRED neon glowing accents']
      },
      {
        id: 'credfit-splash',
        suite: 'fitness',
        title: 'CRED Fitness — Minimalist Neon Splash',
        pin: 'pin_53',
        theme: 'cred-dark',
        desc: 'Bold full-screen neon lime canvas with clean typography: "Get ready".',
        elements: ['Full neon lime viewport', 'Ultra-bold black typography: "Get ready"']
      },
      {
        id: 'credfit-activity',
        suite: 'fitness',
        title: 'CRED Fitness — Daily Activity & Step Goal',
        pin: 'pin_53',
        theme: 'cred-dark',
        desc: 'Steps progress bar (11,000 / 16,000), concentric neon activity rings (Calories, Water), and workout log.',
        elements: ['Hello Lester! greeting with trophy icon', 'Steps 11,000 / 16,000 neon bar', 'Concentric lime activity rings', 'Indoor Walk & Running logs']
      },
      {
        id: 'credfit-booking-confirmed',
        suite: 'fitness',
        title: 'CRED Fitness — Neon Lime Confirmation Card',
        pin: 'pin_53',
        theme: 'cred-dark',
        desc: 'Giant checkmark card on neon lime card: "Congratulation - Your Booking has been confirmed".',
        elements: ['Neon lime modal card', 'Giant checkmark icon', 'Confirmation email note', 'Close button']
      },
      {
        id: 'credfit-workout-detail',
        suite: 'fitness',
        title: 'CRED Fitness — Calisthenics Routine Specs',
        pin: 'pin_53',
        theme: 'cred-dark',
        desc: 'Hero photo, routine specs (Level AAA Hard, Progress 0%, Focus Chest), and trainer profile link.',
        elements: ['Home Chest Workout hero photo', '45 min & 381 Cal pills', 'Level AAA Hard indicator', 'Chris Heria trainer card']
      },
      {
        id: 'credfit-exercise-timer',
        suite: 'fitness',
        title: 'CRED Fitness — Giant Countdown Rep Timer',
        pin: 'pin_53',
        theme: 'cred-dark',
        desc: 'Dramatic exercise screen with giant neon countdown numeral "10" and Previous / Next triggers.',
        elements: ['Giant neon numeral 10', 'Explosive neg. Push Ups label', 'Previous & Next navigation buttons']
      },
      {
        id: 'credfit-trainer-profile',
        suite: 'fitness',
        title: 'CRED Fitness — Chris Heria Trainer Profile',
        pin: 'pin_53',
        theme: 'cred-dark',
        desc: 'Trainer credentials (Experience 7 years, Completed 88, Active Clients 32), bio, and online programs.',
        elements: ['Chris Heria portrait', 'Experience / Completed / Clients stats', 'Calisthenics bio summary', 'Online Programs trigger']
      },
      {
        id: 'credfit-reviews',
        suite: 'fitness',
        title: 'CRED Fitness — Rating Breakdown & Exercise List',
        pin: 'pin_53',
        theme: 'cred-dark',
        desc: '4.6 star distribution bar chart, verified testimonial review, and 8-step routine list with thumbnails.',
        elements: ['4.6 rating histogram', 'David Lewis review card', 'Push Ups (20 reps) thumbnail row', '90° Hold (20 sec) row']
      },
      {
        id: 'fitbite-onboard',
        suite: 'fitness',
        title: 'FitBite — Smarter Eating Food Scanning',
        pin: 'pin_59',
        theme: 'apple-light',
        desc: 'Clean organic produce visual with interactive calorie tags (132 Kcal, 504 Kcal) and slider button.',
        elements: ['Your Daily Guide to Smarter Eating', 'Floating calorie callout pins', 'Slide to Get Started button']
      },
      {
        id: 'fitbite-dashboard',
        suite: 'fitness',
        title: 'FitBite — Daily Nutrition & Water Counter',
        pin: 'pin_59',
        theme: 'apple-light',
        desc: 'Lime green Weekly Progress card with 6-day ring, Step counter, 12-glass water counter, and meal list.',
        elements: ['Good morning! Sajibur Rahman header', 'Lime weekly progress card', 'Step to walk 5,500 steps', 'Drink Water 12 glass counter', 'Camera meal scanner button']
      }
    ]
  },
  'botanical': {
    title: 'Botanical, IoT & E-Commerce Suites',
    icon: '🌿',
    badge: '10 screens',
    desc: 'Leafora dark emerald frosted botanical store, smart plant IoT telemetry, and artisan coffee.',
    screens: [
      {
        id: 'leafora-splash',
        suite: 'botanical',
        title: 'Leafora — Frosted Glass Welcome',
        pin: 'pin_49',
        theme: 'emerald-glass',
        desc: 'Dark emerald botanical leaf backdrop with floating frosted glass card and Get Started button.',
        elements: ['Dark green leaf photography', 'Frosted glass container', 'Leafora - Bring Nature Home', 'Get Started → action pill', '3-dot carousel']
      },
      {
        id: 'leafora-shop-home',
        suite: 'botanical',
        title: 'Leafora — Botanical Shop & Best Sellers',
        pin: 'pin_49',
        theme: 'emerald-glass',
        desc: 'Search bar with filter button, "Bring Greenery to Life" banner, category icon chips, and best seller grid.',
        elements: ['Bring Greenery to Life hero card', 'Category pills (All Plants, Indoor, Outdoor, Pet Friendly)', 'Snake Plant $24.99 card', 'ZZ Plant $23.99 card', 'Bottom nav with cart count']
      },
      {
        id: 'leafora-product-detail',
        suite: 'botanical',
        title: 'Leafora — Snake Plant Care Specs & Buy',
        pin: 'pin_49',
        theme: 'emerald-glass',
        desc: 'Floating plant ceramic pot, rating ★ 4.8, 4 care icon metrics (Water, Light, Humidity, Pet Friendly), and sticky Add to Cart.',
        elements: ['Sansevieria trifasciata photo', 'Rating ★ 4.8 (120)', 'Care specs: Water 2-3 weeks, Low light, Pet friendly Yes', 'Price $24.99', 'Add to Cart sticky bar']
      },
      {
        id: 'leafora-cart-checkout',
        suite: 'botanical',
        title: 'Leafora — My Cart & Order Breakdown',
        pin: 'pin_49',
        theme: 'emerald-glass',
        desc: 'Cart items with quantity steppers and trash icons, promo code input, subtotal breakdown, and secure checkout CTA.',
        elements: ['Cart items (Snake Plant, Pothos, Ceramic Pot)', 'Quantity steppers (- 1 +)', 'Promo Code input + Apply', 'Total $62.96', '🔒 Secure Checkout Proceed CTA']
      },
      {
        id: 'plantcare-home',
        suite: 'botanical',
        title: 'PlantCare IoT — My Plants Carousel',
        pin: 'pin_61',
        theme: 'clean-green',
        desc: 'My plants card carousel with status badges (Monstera ✓, Cactus ⚠️, Howea ✓), explore grid, and quick watering action.',
        elements: ['My plants (3) carousel', 'Status warning on Cactus', 'Explore catalog (Gazania $12, Bamboo $20)', 'Adjust the watering of plants pill']
      },
      {
        id: 'plantcare-detail',
        suite: 'botanical',
        title: 'PlantCare IoT — Soil & Moisture Telemetry',
        pin: 'pin_61',
        theme: 'clean-green',
        desc: 'Calathea plant telemetry: 19% Humidity, 86% Fertilizer, 36 min Next watering, Water tank warning card (10% ⚠️).',
        elements: ['Calathea photo', 'Humidity 19% & Fertilizer 86%', 'Next watering in 36 min', 'Water tank 10% ⚠️ warning card', 'Statistics / Information tabs']
      },
      {
        id: 'coffee-shop-home',
        suite: 'botanical',
        title: 'Artisan Coffee — Dark Roast Home',
        pin: 'pin_38',
        theme: 'coffee-dark',
        desc: 'Warm dark coffee aroma backdrop, text category tabs with active orange dot, and product cards with [+] buttons.',
        elements: ['Find the best coffee for you', 'Search field', 'Cappuccino (orange active dot) / Espresso / Latte tabs', 'Cappuccino With Oat Milk $4.20 card', 'Orange [+] add button']
      },
      {
        id: 'coffee-shop-detail',
        suite: 'botanical',
        title: 'Artisan Coffee — Cup Detail & Size Picker',
        pin: 'pin_38',
        theme: 'coffee-dark',
        desc: 'Overhead latte art visual, glass overlay specs card, description with Read More, S/M/L size selector, and Buy Now CTA.',
        elements: ['Overhead latte art saucer', 'Cappuccino with Oat Milk overlay', 'Coffee & Milk droplet badges', 'Size selector (S, M, L)', 'Price $4.20 + Buy Now warm orange button']
      },
      {
        id: 'coffee-landing-desktop',
        suite: 'botanical',
        title: 'Artisan Coffee — Desktop Responsive Showcase',
        pin: 'pin_58',
        theme: 'coffee-warm',
        desc: 'Full desktop landing page with navigation bar, hero cup with rising steam, features grid, and promo showcase.',
        elements: ['Desktop navigation', 'Hero: Savor the Perfect Brew!', 'Features: Espresso, Latte, Cold Brew', 'Why Choose Us split banner', 'Morning Happy gallery']
      },
      {
        id: 'gourmet-food-home',
        suite: 'botanical',
        title: 'Gourmet Food — Ramen & Sushi Discovery',
        pin: 'pin_26',
        theme: 'minimal-light',
        desc: 'New York location selector, Ramen/Sushi/Rolls category pills, 50% discount banner, and 2-column food grid.',
        elements: ['Location: New York', 'Popular Food category pills', 'Discount 50% bento banner', 'Ichiraku Ramen ($15.00, ★ 4.5)', 'Philadelphia roll ($9.50, ★ 4.8)']
      }
    ]
  },
  'sleep': {
    title: 'Sleep, Wellness & Onboarding Suites',
    icon: '🌙',
    badge: '10 screens',
    desc: 'Moonie calming night sky wellness onboarding, bed time wheel pickers, and habit tracking.',
    screens: [
      {
        id: 'moonie-splash',
        suite: 'sleep',
        title: 'Moonie — Night Sky Splash & Cottage',
        pin: 'pin_47',
        theme: 'night-sky',
        desc: 'Calming full-moon illustration over a sleepy cottage: "Moonie — Better with headphones".',
        elements: ['Full moon & starlight night sky', 'Illuminated cottage illustration', 'Moonie brand title', 'Better with headphones note']
      },
      {
        id: 'moonie-name-input',
        suite: 'sleep',
        title: 'Moonie — Name Input with Frosted Keyboard',
        pin: 'pin_47',
        theme: 'night-sky',
        desc: 'What do your friends call you? Lizzie input field with native iOS frosted dark keyboard and Continue button.',
        elements: ['Welcome to Moonie! header', 'What do your friends call you?', 'Name input: Lizzie', 'Frosted iOS qwerty keyboard', 'Purple gradient Continue CTA']
      },
      {
        id: 'moonie-interests',
        suite: 'sleep',
        title: 'Moonie — Interest Selection Cards',
        pin: 'pin_47',
        theme: 'night-sky',
        desc: 'What interests you most about Moonie? 2x2 grid (Sleep tracking, Calm sounds [active pink glow], Meditations, Visual art).',
        elements: ['2x2 interest grid', 'Sleep tracking card with crescent moon', 'Calm sounds card with glowing pink border', 'Meditations lotus card', 'Visual art card']
      },
      {
        id: 'moonie-personalize',
        suite: 'sleep',
        title: 'Moonie — Wellness Goal Checkboxes',
        pin: 'pin_47',
        theme: 'night-sky',
        desc: 'Lizzie, let\'s personalise your experience: Trouble falling asleep ✓, Calming a busy mind, Reduce stress or anxiety ✓.',
        elements: ['Personalization checklist', 'Trouble falling asleep pill with check', 'Calming a busy mind pill', 'Reduce stress or anxiety pill', 'Continue CTA']
      },
      {
        id: 'moonie-time-picker',
        suite: 'sleep',
        title: 'Moonie — Bedtime Frosted Wheel Dial',
        pin: 'pin_47',
        theme: 'night-sky',
        desc: 'What time do you want to try sleep sound? Frosted cylindrical wheel selector (11:00 pm) with reminder stats.',
        elements: ['What time do you want to try sleep sound?', 'Cylindrical wheel dial (10:00 am, 11:00 pm, 12:00 am)', 'People who set reminders fall asleep 83% faster', 'Save & Skip actions']
      },
      {
        id: 'moonie-paywall',
        suite: 'sleep',
        title: 'Moonie PLUS — Sleeping Fox Paywall',
        pin: 'pin_47',
        theme: 'night-sky',
        desc: 'Sleeping fox surrounded by nature: "Leave stress behind", 5-star social proof, Monthly vs Yearly (SAVE 51%) toggle.',
        elements: ['Sleeping fox illustration', 'Leave stress behind title', '5-star rating by Annie', 'Monthly 2,99 $ vs Yearly 19,99 $ (SAVE 51%)', 'Try free and subscribe button']
      },
      {
        id: 'moonie-color-palette',
        suite: 'sleep',
        title: 'Moonie — Calming Palette Selector',
        pin: 'pin_47',
        theme: 'night-sky',
        desc: 'Choose 1 or more calming colors that you like — We\'ll adjust your sleepscape palette with ambient gradients.',
        elements: ['Color palette selection prompt', 'Interactive calming swatches', 'Ambient gradient preview']
      },
      {
        id: 'habit-timeline',
        suite: 'sleep',
        title: 'Daily Routine — Color-Coded Habit Timeline',
        pin: 'pin_1',
        theme: 'tactile-dark',
        desc: 'Chronological timeline axis with circular colored habit icons, timestamps, and detailed workout/nutrition logs.',
        elements: ['Vertical timeline axis with connecting line', '22:10 Sleep with moon icon', '06:30 Walk 7.5K with running icon', '08:30 Workout details (Chin-Up, Dumbbell Row)', '10:09 Nutrition breakdown (Macros P15g C10g F3g)']
      },
      {
        id: 'neumorphic-widget',
        suite: 'sleep',
        title: 'Neumorphic White — Analog Clock & Audio Player',
        pin: 'pin_52',
        theme: 'neumorphic-white',
        desc: 'Soft recessed skeuomorphic white widget with analog ticking clock, favorite badge, and dual pill audio buttons.',
        elements: ['Soft embossed shadow container', 'Inset concave analog clock with hands', 'Track 099 / New audio player with heart', 'Dual capsule playback triggers (◀ ▶)', 'Inset upload pill button']
      },
      {
        id: 'mood-diary-suite',
        suite: 'sleep',
        title: 'Mood Diary — Gamified Journey & World Clock',
        pin: 'pin_56',
        theme: 'warm-cream',
        desc: '9-screen suite including desert peephole, diary list with emoji moods, path map, world clock, and alarm toggles.',
        elements: ['Circular peephole magnifying glass', 'Month/Year selector pills', 'Emoji mood list rows', 'Milestone journey path', 'World clock & Alarm toggles (12:00, 13:20, 14:50)']
      }
    ]
  },
  'gaming': {
    title: 'Gaming & Entertainment Suites',
    icon: '🎮',
    badge: '8 screens',
    desc: 'Minecraft gaming store & telemetry, music festival timeline axis, and sports league booking.',
    screens: [
      {
        id: 'minecraft-store',
        suite: 'gaming',
        title: 'Minecraft Store — 3D Game Carousel',
        pin: 'pin_9',
        theme: 'gamer-dark',
        desc: 'Search bar, category tabs (Action, Survival, Adventure), 3D Minecraft card with play overlay, and central (+) dock.',
        elements: ['Search your Games field', 'Category tabs (Action, Survival, Adventure, Casual)', 'Minecraft 3D cover card with play button', 'Bottom dock with center raised (+) action']
      },
      {
        id: 'minecraft-detail',
        suite: 'gaming',
        title: 'Minecraft Detail — Trailer & Player Stats',
        pin: 'pin_9',
        theme: 'gamer-dark',
        desc: 'Gameplay trailer with play trigger, Adventure badge, stats (55/80 Achievements, 16.2 Hours played), and Play Now CTA.',
        elements: ['Gameplay video trailer', 'Minecraft - Mobile - Multiplayer', '55/80 Achievements badge', '16.2 Hours played & 5 Dec Last played', 'Play Now primary button + Download & Heart']
      },
      {
        id: 'music-festival-timeline',
        suite: 'gaming',
        title: 'Music Festival — Date Axis & Event Cards',
        pin: 'pin_35',
        theme: 'clean-coral',
        desc: 'Vertical date timeline axis (17 AUG, 23 AUG, 2 SEP), tag badges (PREMIUM, VIP), and floating coral dock.',
        elements: ['Vertical calendar timeline line', '17 AUG date indicator', 'Fuji Rock Festival 2019 card (PREMIUM)', 'Ultra Music Festival card (VIP)', 'Floating coral bottom nav']
      },
      {
        id: 'music-festival-invites',
        suite: 'gaming',
        title: 'Music Festival — Hero RSVP & Upcoming Events',
        pin: 'pin_35',
        theme: 'clean-coral',
        desc: 'Hero event invite card (Bumbershoot 2019 with Going dark pill) and upcoming events list (Glastonbury, Summerfest).',
        elements: ['Bumbershoot 2019 hero invite card', 'You are invited notification', 'Going dark pill RSVP button', 'Upcoming events list with Going buttons']
      },
      {
        id: 'music-festival-directory',
        suite: 'gaming',
        title: 'Music Festival — Attendee Stacks & Filter Tabs',
        pin: 'pin_35',
        theme: 'clean-coral',
        desc: 'Category tabs (All, Now, Past, Draft), attendee avatar stacks on timeline ("Going NOW"), and event cards.',
        elements: ['Category tabs (All, Now, Past, Draft)', 'Going NOW attendee avatar stack', 'Event cards with attendee count', 'Floating (+) action button']
      },
      {
        id: 'sports-booking-home',
        suite: 'gaming',
        title: 'Sports League — Sunset Orange Match Booking',
        pin: 'pin_39',
        theme: 'sunset-orange',
        desc: 'Avatar greeting, search field, calendar day strip (Wed 24 active), and match cards with "Join Game" action.',
        elements: ['Hey Alex greeting + settings', 'Search: Browse games near you', 'Horizontal day selector (Wed 24 active orange)', 'Friday Night League (€12.50, 12/16 players)', 'Courtside Futsal Night card + Join Game button']
      },
      {
        id: 'event-marketplace-home',
        suite: 'gaming',
        title: 'Event Market — Buy Tickets & Featured Fest',
        pin: 'pin_63',
        theme: 'sage-light',
        desc: 'User greeting, search input with filter tile, "Buy, Book & Host" hero, 3 action cards, and Motorbikes & FoodFest card.',
        elements: ['Hello, Reginald header', 'Search with filter square button', 'Buy, Book & Host hero banner', '3 Action cards (Buy Tickets, Explore Vendors, Host Event)', 'Motorbikes & FoodFest card ($5,000)']
      },
      {
        id: 'event-marketplace-vendors',
        suite: 'gaming',
        title: 'Event Market — Vendor Discovery & Ratings',
        pin: 'pin_63',
        theme: 'sage-light',
        desc: 'Vendor category pills (All, Caterers, Photographers) and vendor list cards with star ratings and bookmark buttons.',
        elements: ['Category pills (All Vendors, Caterers, Photographers)', 'Mama Tee\'s Catering (★ 5.0, bookmark icon)', 'The Golden Spoon (★ 4.5)', 'Everlasting Events Co. (★ 4.4)']
      }
    ]
  },
  'dashboards': {
    title: 'Dashboards & SaaS Suites',
    icon: '📊',
    badge: '12 screens',
    desc: '3D Leaderboard podium, calendar week planners, dark task boards, and agency landing pages.',
    screens: [
      {
        id: 'leaderboard-podium',
        suite: 'dashboards',
        title: '3D Podium — Gamified Leaderboard',
        pin: 'pin_40',
        theme: 'gold-spotlight',
        desc: 'Spotlight header, 3D Gold/Orange podium with Rank 1 ($500), Rank 2 ($300), Rank 3 ($200) avatars, and ranked list.',
        elements: ['September 2026 Spotlight header', '3D Podium with Rank 1 (Designer eno. $500)', 'Rank 2 & Rank 3 avatars with prize pool', 'Timeframe tabs (All time, This Week, This Month)', 'Runner-up ranked rows with prize tags']
      },
      {
        id: 'calendar-day-agenda',
        suite: 'dashboards',
        title: 'Agenda Planner — Day View & Meetings',
        pin: 'pin_45',
        theme: 'warm-planner',
        desc: 'Day view "Thursday 25 JANUARY", Today/Tomorrow/All pill tabs, meeting cards with attendee avatars.',
        elements: ['Good Morning, Aditya header', 'Thursday 25 JANUARY display', 'Today / Tomorrow / All tabs', 'Meeting at Lotte Lounge (10.45) with avatars', 'Lunch W/ Client card (12.10)']
      },
      {
        id: 'calendar-week-timeblocks',
        suite: 'dashboards',
        title: 'Agenda Planner — Weekly Timeblock Matrix',
        pin: 'pin_45',
        theme: 'warm-planner',
        desc: 'Colored daily timeblock rows (SAT 27 JAN, SUN 28 JAN, MON 29 JAN) with 3-column time slots.',
        elements: ['Month switcher (DEC < JAN > FEB)', 'Colored daily block rows', 'Time slots (09.00, 12.00, 19.00)', '+ add event buttons']
      },
      {
        id: 'calendar-year-grid',
        suite: 'dashboards',
        title: 'Agenda Planner — 12-Month Color Grid',
        pin: 'pin_45',
        theme: 'warm-planner',
        desc: 'Overview screen displaying all 12 months in distinct pastel color-coded miniature calendar matrices.',
        elements: ['Search bar for events', '12 colored month cards (Jan green, Feb purple, Mar burgundy, Apr teal...)', 'Active date indicators']
      },
      {
        id: 'task-manager-dark',
        suite: 'dashboards',
        title: 'Task Board — Dark Calendar Strip & Tasks',
        pin: 'pin_11',
        theme: 'tactile-dark',
        desc: 'Horizontal calendar date strip, project priority cards, progress meters, and timeline schedule.',
        elements: ['Horizontal date strip', 'Priority task cards with tags', 'Progress completion bars', 'Team assignee avatars']
      },
      {
        id: 'deployment-status-split',
        suite: 'dashboards',
        title: 'DevOps — Light/Dark Deployment Matrix',
        pin: 'pin_10',
        theme: 'split-theme',
        desc: 'Split-card layout showing build statuses, git commit hashes, environment indicators, and error telemetry.',
        elements: ['Environment cards (Production, Staging, Dev)', 'Git commit hash badges', 'Build status chips (Success, Building, Failed)', 'Latency sparklines']
      },
      {
        id: 'data-usage-gauge',
        suite: 'dashboards',
        title: 'Telemetry — 3D Apple-Style Data Gauge',
        pin: 'pin_12',
        theme: 'apple-light',
        desc: 'Apple-style 3D layered ring gauge displaying cellular data bandwidth, roll-over GB, and speed benchmark.',
        elements: ['3D layered circular ring gauge', 'Remaining data readout (42.5 GB / 50 GB)', 'Rollover data indicator', 'Billing cycle days remaining']
      },
      {
        id: 'transaction-table-dark',
        suite: 'dashboards',
        title: 'Finance SaaS — Dense Data Table & Search',
        pin: 'pin_14',
        theme: 'cyber-dark',
        desc: 'Dense tabular ledger with column sorting, status chips, multi-row selection, and command palette integration.',
        elements: ['Command palette search bar', 'Dense data table with zebra striping', 'Status indicator badges (Paid, Pending, Overdue)', 'Row checkbox selectors', 'Export CSV action']
      },
      {
        id: 'fitness-dashboard-dark',
        suite: 'dashboards',
        title: 'Health SaaS — Multi-Metric Ring Dashboard',
        pin: 'pin_21',
        theme: 'cyber-dark',
        desc: 'Dark theme wellness metrics with calorie expenditure ring, step histogram, and resting heart rate tracker.',
        elements: ['Calorie burn circular ring', 'Step count histogram', 'Resting heart rate BPM graph', 'Sleep quality score pill']
      },
      {
        id: 'brandbuzz-agency-hero',
        suite: 'dashboards',
        title: 'BrandBuzz — Agency Landing Page Hero',
        pin: 'pin_60',
        theme: 'orange-modern',
        desc: 'Navbar (BrandBuzz, Services, Blog, Sign Up), Hero headline with 3D characters, and services grid.',
        elements: ['Top navigation bar', 'Hero: We create solutions for your business', 'Services grid (SEO/SEM, Marketing, Viral Campaign)', '4-step process stepper (Contact, Consult, Order, Payment)']
      },
      {
        id: 'brandbuzz-testimonials',
        suite: 'dashboards',
        title: 'BrandBuzz — Client Testimonial Carousel',
        pin: 'pin_60',
        theme: 'orange-modern',
        desc: 'What Clients Say! 5-star testimonial card carousel, agency metrics section, and bottom CTA banner.',
        elements: ['What Clients Say! heading', '5-star testimonial cards with client avatars', 'Our Agency data story', 'Ready to get started? CTA banner']
      },
      {
        id: 'medical-doctor-booking',
        suite: 'dashboards',
        title: 'HealthCare — Doctor Booking & Specialists',
        pin: 'pin_64',
        theme: 'medical-teal',
        desc: 'Specialist categories (Cardiology, Check-up, Dental), Go Premium promo card, and Doctor list with ratings.',
        elements: ['Hi, Nicholas header', 'Go Premium for Better Care promo banner', 'Specialty category icons', 'Mark Kaert General Practitioner card (★ 4.9)', 'Filter pills (All, Cardiologists, GP, Neuro)']
      }
    ]
  },
  'security': {
    title: 'Auth, Security & Verification Suites',
    icon: '🔒',
    badge: '8 screens',
    desc: 'Dark corner-curl login, OTP verification sheets, biometric face ID, and KYC flow.',
    screens: [
      {
        id: 'dark-curl-login',
        suite: 'security',
        title: 'Auth — Dark Corner-Curl Reveal Login',
        pin: 'pin_54',
        theme: 'tactile-dark',
        desc: 'Matte dark login screen with realistic 3D curled corner revealing settings cog, and neon blue SIGN IN button.',
        elements: ['Brand insignia', 'Username & Password fields with icons', 'Neon blue SIGN IN button', 'Curled bottom corner revealing gear icon', 'Not a member? Sign up now link']
      },
      {
        id: 'otp-bottom-sheet',
        suite: 'security',
        title: 'Auth — 4-Digit OTP Verification Sheet',
        pin: 'pin_8',
        theme: 'pure-black',
        desc: 'Dark slide-up modal with 4 discrete numeric input cells, auto-focus, countdown timer, and resend trigger.',
        elements: ['Slide-up sheet modal backdrop', 'Verification Code title', '4 discrete input boxes with active border glow', 'Resend code in 0:45 countdown', 'Verify & Proceed action']
      },
      {
        id: 'biometric-faceid',
        suite: 'security',
        title: 'Security — Apple FaceID Authentication',
        pin: 'pin_48',
        theme: 'vision-glass',
        desc: 'VisionOS frosted glass overlay with animated FaceID scanning radar, haptic feedback prompt, and PIN fallback.',
        elements: ['Frosted glass backdrop', 'Animated FaceID vector glyph', 'Scanning state indicator', 'Authenticate with Passcode fallback']
      },
      {
        id: 'passkey-enrollment',
        suite: 'security',
        title: 'Security — WebAuthn Passkey Registration',
        pin: 'pin_48',
        theme: 'vision-glass',
        desc: 'Passwordless security key registration with biometric hardware token pairing and iCloud Keychain sync.',
        elements: ['Hardware security shield icon', 'Create Passkey for Rentenpe', 'Synced with iCloud Keychain badge', 'Continue with Touch/Face ID']
      },
      {
        id: 'kyc-id-scanner',
        suite: 'security',
        title: 'KYC — Government ID Card Scanner',
        pin: 'pin_48',
        theme: 'vision-glass',
        desc: 'Camera frame with corner brackets for scanning Aadhaar / Passport with real-time glare & blur detection.',
        elements: ['Camera viewport overlay', 'Corner alignment brackets', 'Glares & Blur auto-detection chip', 'Take Photo tactile shutter button']
      },
      {
        id: 'kyc-selfie-liveness',
        suite: 'security',
        title: 'KYC — Biometric Liveness Selfie',
        pin: 'pin_48',
        theme: 'vision-glass',
        desc: 'Oval head alignment guide with instruction prompts ("Blink your eyes", "Turn your head slightly to the right").',
        elements: ['Oval facial guide', 'Instruction prompt: "Blink slowly"', 'Liveness verification score 99.4%', 'Confirm Identity button']
      },
      {
        id: 'pin-lock-dial',
        suite: 'security',
        title: 'Security — 6-Digit App Security Lock',
        pin: 'pin_48',
        theme: 'pure-black',
        desc: 'Full-screen app lock with 6 filled/empty indicator dots and sleek circular numeric touch dial.',
        elements: ['Enter Rentenpe Security PIN', '6 circular pin state dots', '3x4 numeric button matrix with haptic clicks', 'Forgot PIN recovery link']
      },
      {
        id: 'session-devices',
        suite: 'security',
        title: 'Security — Active Sessions & Device Revoke',
        pin: 'pin_48',
        theme: 'tactile-dark',
        desc: 'List of currently authenticated devices (MacBook Pro, iPhone 16 Pro) with IP locations and 1-tap Revoke.',
        elements: ['This Device: iPhone 16 Pro (Active now)', 'MacBook Pro — Bengaluru, India', 'Revoke All Other Sessions red button', 'Two-Factor Authentication toggle']
      }
    ]
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { SCREEN_SUITES };
}
