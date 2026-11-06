/**
 * ChillHub Wholesale — High-Efficiency Distributor Portal
 * Multi-Branch Routing & Real-Time Drink Product Engine
 */
(() => {
  'use strict';

  // --- BRANCH CONFIGURATION (PATHANAMTHITTA DISTRICT & SUB-DISTRICTS) ---
  const BRANCHES = [
    {
      id: 'pathanamthitta',
      name: 'Pathanamthitta (Central Hub)',
      tagline: 'Central Warehouse & District Distribution Depot',
      area: 'Kozhencherry Taluk (District HQ)',
      badge: 'Main Warehouse',
      address: 'Ring Road, Near KSRTC & Private Bus Stand, Pathanamthitta, Kerala 689645',
      phone: '+91 94470 50905',
      waNumber: '919447050905',
      hours: 'Mon–Sat: 6:00 AM – 9:00 PM | Sun: 8:00 AM – 1:00 PM',
      deliveryInfo: 'Early morning van fleet leaves 6:30 AM & 2:00 PM. Same-day in 25 km.',
      routes: [
        { place: 'Pathanamthitta Town & College Road', time: 'Same day (Twice daily)', badge: 'Express' },
        { place: 'Kumbazha, Omalloor & Mylapra', time: 'Same day (Morning & Noon)', badge: 'Daily' },
        { place: 'Kozhencherry & Maramon Market', time: 'Same day', badge: 'Daily' },
        { place: 'Elanthoor & Naranganam', time: 'Same day', badge: 'Daily' },
        { place: 'Pramadam & V-Kottayam', time: 'Daily morning', badge: 'Morning' },
        { place: 'Malayalapuzha Route', time: 'Daily afternoon', badge: 'Scheduled' },
        { place: 'Pandalam Border Link', time: 'Daily morning (7:00 AM)', badge: 'Morning' },
        { place: 'Sabarimala Pilgrimage Route', time: 'On request / Event bulk', badge: 'Custom' }
      ]
    },
    {
      id: 'thiruvalla',
      name: 'Thiruvalla Commercial Hub',
      tagline: 'MC Road Express Fleet & Cool Bar Distribution',
      area: 'Thiruvalla Taluk & Commercial Belt',
      badge: 'Commercial Hub',
      address: 'MC Road, Near Pushpagiri Junction, Thiruvalla, Kerala 689101',
      phone: '+91 94470 12345',
      waNumber: '919447012345',
      hours: 'Mon–Sat: 6:30 AM – 9:30 PM | Sun: 8:00 AM – 2:00 PM',
      deliveryInfo: 'Express 2-hr town delivery + 7:00 AM daily wholesale logistics fleet.',
      routes: [
        { place: 'Thiruvalla Town, Deepa Jct & Crossway', time: 'Express 2-hr / Daily 7:00 AM', badge: 'Express' },
        { place: 'Pushpagiri & Medical College Zone', time: 'Same day (Morning & Afternoon)', badge: 'Daily' },
        { place: 'Kuttoor & Podiyadi Bypass', time: 'Same day', badge: 'Daily' },
        { place: 'Muthoor & Manjadi Junction', time: 'Same day', badge: 'Daily' },
        { place: 'Kavumbhagom & Idinjillam', time: 'Same day', badge: 'Daily' },
        { place: 'Mallappally Taluk Link Road', time: 'Daily morning', badge: 'Morning' },
        { place: 'Changanassery Border', time: 'Daily afternoon', badge: 'Scheduled' },
        { place: 'Chengannur / Alappuzha Border', time: 'On request / Bulk loads', badge: 'Custom' }
      ]
    },
    {
      id: 'adoor',
      name: 'Adoor Central Depot',
      tagline: 'KP Road Transit Hub & Wholesale Market Supply',
      area: 'Adoor Taluk & Parakode Wholesale Zone',
      badge: 'Transit Hub',
      address: 'KP Road, Near Central Bypass & Stadium, Adoor, Kerala 691523',
      phone: '+91 98460 67890',
      waNumber: '919846067890',
      hours: 'Mon–Sat: 6:00 AM – 8:30 PM | Sun: 8:00 AM – 12:00 PM',
      deliveryInfo: 'Morning dispatch 6:30 AM, afternoon dispatch 1:30 PM.',
      routes: [
        { place: 'Adoor Town & KSRTC Station Area', time: 'Same day (6:30 AM & 1:30 PM)', badge: 'Express' },
        { place: 'Parakode Wholesale Vegetable & Grain Market', time: 'Same day (6:00 AM)', badge: 'Daily' },
        { place: 'Ezhamkulam & Kadampanad', time: 'Same day', badge: 'Daily' },
        { place: 'Pandalam Town & Medical Mission', time: 'Same day', badge: 'Daily' },
        { place: 'Enathu & Kollam Border', time: 'Daily afternoon', badge: 'Scheduled' },
        { place: 'Pathanapuram Link Road', time: 'Daily morning', badge: 'Morning' }
      ]
    },
    {
      id: 'ranni',
      name: 'Ranni Highland Depot',
      tagline: 'Highland Cool Drinks & Catering Wholesale Supply',
      area: 'Ranni Taluk (Gateway to Sabarimala)',
      badge: 'Highland Depot',
      address: 'Ittichuvadu Junction, Main Road, Ranni, Kerala 689672',
      phone: '+91 97450 43210',
      waNumber: '9745043210',
      hours: 'Mon–Sat: 6:30 AM – 8:30 PM | Sun: 9:00 AM – 1:00 PM',
      deliveryInfo: 'Specialized wedding & catering supply with insulated ice boxes on hire.',
      routes: [
        { place: 'Ranni Town, Ittichuvadu & Angadi', time: 'Same day (7:00 AM & 3:00 PM)', badge: 'Express' },
        { place: 'Vadasserikkara & Perunad', time: 'Same day', badge: 'Daily' },
        { place: 'Pazhavangadi & Chettimukku', time: 'Same day', badge: 'Daily' },
        { place: 'Ayroor & Cherukolpuzha', time: 'Same day', badge: 'Daily' },
        { place: 'Seethathode & Chittar Route', time: 'Daily morning', badge: 'Morning' },
        { place: 'Plappally & Sabarimala Foothills', time: 'Special event wholesale', badge: 'Custom' }
      ]
    },
    {
      id: 'konni',
      name: 'Konni & Mallappally Sub-Hub',
      tagline: 'Sub-District Route Fleet for Konni & Mallappally',
      area: 'Konni & Mallappally Taluks',
      badge: 'Sub-District Hub',
      address: 'Main Junction, Near Medical College Road, Konni, Kerala 689691',
      phone: '+91 94950 88776',
      waNumber: '919495088776',
      hours: 'Mon–Sat: 6:30 AM – 8:00 PM | Sun: 8:30 AM – 1:00 PM',
      deliveryInfo: 'Dedicated daily route vans serving eastern & northern sub-district ranges.',
      routes: [
        { place: 'Konni Town, Aruvapulam & Kallely', time: 'Same day (Twice daily)', badge: 'Express' },
        { place: 'Mallappally Town & Anicadu', time: 'Same day (Morning fleet)', badge: 'Daily' },
        { place: 'Vennikulam & Kaviyoor Route', time: 'Same day', badge: 'Daily' },
        { place: 'Konni Medical College Zone', time: 'Same day (7:30 AM & 2:00 PM)', badge: 'Express' },
        { place: 'Thannithode & Chittar Foothills', time: 'Daily afternoon', badge: 'Scheduled' },
        { place: 'Kottangal & Chungappara Border', time: 'Mon · Wed · Fri', badge: 'Scheduled' }
      ]
    }
  ];

  // --- REAL-TIME DRINKS CATALOG WITH HIGH-RES REAL IMAGES ---
  // Using high-speed cached beverage images with automatic fallback
  const PRODUCTS = [
    {
      id: 'cola-250',
      cat: 'soft',
      name: 'Cola Glass Bottle (Chilled)',
      pack: '250 ml × 24 bottles',
      price: 360,
      tag: 'Best seller',
      stock: 'In stock',
      image: 'https://images.unsplash.com/photo-1554866585-cd94860890b7?auto=format&fit=crop&w=600&q=80',
      desc: 'Classic chilled cola in returnable glass bottles. The undisputed favorite for bakeries, tea stalls, and weddings.'
    },
    {
      id: 'cola-600',
      cat: 'soft',
      name: 'Cola PET Chilled Pack',
      pack: '600 ml × 24 bottles',
      price: 820,
      tag: 'Popular',
      stock: 'In stock',
      image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=600&q=80',
      desc: '600 ml on-the-go PET bottles. Heavy seller for grocery stores, supermarkets, and bakery coolers.'
    },
    {
      id: 'cola-2l',
      cat: 'soft',
      name: 'Cola Family Pack PET',
      pack: '2.25 L × 9 bottles',
      price: 760,
      tag: 'Hot',
      stock: 'In stock',
      image: 'https://images.unsplash.com/photo-1567103472667-6898f3a79cf2?auto=format&fit=crop&w=600&q=80',
      desc: 'Large family celebration bottles. Essential stock for weekend dinner rushes, hotels, and caterers.'
    },
    {
      id: 'orange-600',
      cat: 'soft',
      name: 'Orange Fizz Sparkling PET',
      pack: '600 ml × 24 bottles',
      price: 800,
      tag: 'Fast moving',
      stock: 'In stock',
      image: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=600&q=80',
      desc: 'Vibrant tangy orange carbonated drink with rich fruit punch notes. High demand among kids & youth.'
    },
    {
      id: 'lime-750',
      cat: 'soft',
      name: 'Clear Lemon-Lime Sparkling',
      pack: '750 ml × 24 bottles',
      price: 900,
      tag: 'Summer special',
      stock: 'In stock',
      image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=600&q=80',
      desc: 'Crisp, crystal clear sparkling lemon-lime thirst quencher. Ideal mixer for cool bars and hotel lounges.'
    },
    {
      id: 'can-300',
      cat: 'soft',
      name: 'Assorted Soft Drink Cans',
      pack: '300 ml × 24 sleek cans',
      price: 840,
      tag: 'Chilled ready',
      stock: 'In stock',
      image: 'https://images.unsplash.com/photo-1581636625402-29b2a704ef13?auto=format&fit=crop&w=600&q=80',
      desc: 'Assorted pack: Cola, Orange, Lemon & Clear Lime. Elegant cans for cafes, drive-ins, and party chillers.'
    },
    {
      id: 'mango-200',
      cat: 'juice',
      name: 'Alphonso Mango Tetra Drink',
      pack: '200 ml × 30 packs',
      price: 480,
      tag: 'Best seller',
      stock: 'In stock',
      image: 'https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=600&q=80',
      desc: 'Thick, sweet, delicious mango pulp nectar. Top-selling item in school zones, petty shops, and bakeries.'
    },
    {
      id: 'mango-1l',
      cat: 'juice',
      name: 'Mango Drink Jumbo PET',
      pack: '1.2 L × 12 bottles',
      price: 780,
      tag: 'Value pack',
      stock: 'In stock',
      image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=600&q=80',
      desc: '1.2 litre mango nectar bottles. Excellent margin item for family dine-ins, restaurants, and catering events.'
    },
    {
      id: 'guava-1l',
      cat: 'juice',
      name: 'Pink Guava Nectar Juice',
      pack: '1 L × 12 tetra packs',
      price: 1260,
      tag: 'Premium',
      stock: 'In stock',
      image: 'https://images.unsplash.com/photo-1534353473418-4cfa6c56fd38?auto=format&fit=crop&w=600&q=80',
      desc: 'Real pink guava fruit pulp with a mild chili-salt kick sensation. High recurring orders from hotels.'
    },
    {
      id: 'mixed-200',
      cat: 'juice',
      name: 'Mixed Fruit Tropical Tetra',
      pack: '200 ml × 30 packs',
      price: 540,
      tag: 'Kids favorite',
      stock: 'In stock',
      image: 'https://images.unsplash.com/photo-1589733955941-5eeaf752f6dd?auto=format&fit=crop&w=600&q=80',
      desc: 'Nutritious blend of orange, apple, pineapple and banana extracts with added Vitamin C.'
    },
    {
      id: 'energy-250',
      cat: 'energy',
      name: 'Cold Energy Drink Can',
      pack: '250 ml × 24 cans',
      price: 2280,
      tag: 'Hot item',
      stock: 'In stock',
      image: 'https://images.unsplash.com/photo-1622543925917-763c34d1a86e?auto=format&fit=crop&w=600&q=80',
      desc: 'High-caffeine taurine formulation for instant alertness. Top mover at night bakeries and fuel station kiosks.'
    },
    {
      id: 'energy-pet',
      cat: 'energy',
      name: 'Red Energy Drink PET',
      pack: '250 ml × 30 bottles',
      price: 540,
      tag: 'Value mover',
      stock: 'In stock',
      image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=600&q=80',
      desc: 'Pocket-friendly mass-market energy boost in sleek PET bottles. Huge turnover volume across rural routes.'
    },
    {
      id: 'sports-500',
      cat: 'energy',
      name: 'Sports Isotonic Hydration',
      pack: '500 ml × 24 bottles',
      price: 960,
      tag: 'Electrolyte',
      stock: 'In stock',
      image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=600&q=80',
      desc: 'Electrolyte rehydration drink for football turf grounds, gym tuck shops, and summer outdoor stalls.'
    },
    {
      id: 'water-500',
      cat: 'water',
      name: 'Packaged Drinking Water',
      pack: '500 ml × 24 bottles',
      price: 140,
      tag: 'Daily staple',
      stock: 'In stock',
      image: 'https://images.unsplash.com/photo-1560023907-5f339617ea30?auto=format&fit=crop&w=600&q=80',
      desc: 'ISI certified packaged drinking water with essential minerals. Fast turnover for conferences & events.'
    },
    {
      id: 'water-1l',
      cat: 'water',
      name: 'Packaged Mineral Water 1L',
      pack: '1 L × 12 bottles',
      price: 110,
      tag: 'Best seller',
      stock: 'In stock',
      image: 'https://images.unsplash.com/photo-1559839914-17aae19cec71?auto=format&fit=crop&w=600&q=80',
      desc: '1-Litre chilled or room temperature cartons. The bedrock product for every hotel table and wayside kiosk.'
    },
    {
      id: 'water-2l',
      cat: 'water',
      name: 'Packaged Water 2L Travel Pack',
      pack: '2 L × 9 bottles',
      price: 150,
      tag: 'Travel pack',
      stock: 'In stock',
      image: 'https://images.unsplash.com/photo-1523362628745-0c100150b504?auto=format&fit=crop&w=600&q=80',
      desc: 'Large travel water bottles. Very popular at highway bypass shops, bus stands, and railway stalls.'
    },
    {
      id: 'water-20l',
      cat: 'water',
      name: '20L Commercial Water Jar',
      pack: '1 jar (Clean refill)',
      price: 45,
      tag: 'Bulk refill',
      stock: 'In stock',
      image: 'https://images.unsplash.com/photo-1527661591475-527312dd65f5?auto=format&fit=crop&w=600&q=80',
      desc: 'Food-grade sealed 20-litre water bubble top jars with tamper-proof cap seal for offices and marriage halls.'
    },
    {
      id: 'goli',
      cat: 'soda',
      name: 'Kerala Goli Soda (Marble Bottle)',
      pack: '200 ml × 24 glass bottles',
      price: 240,
      tag: 'Kerala fav',
      stock: 'In stock',
      image: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?auto=format&fit=crop&w=600&q=80',
      desc: 'Vintage Indian codd-neck marble goli soda. Nostalgic fizz punch in classic lemon and paneer flavors.'
    },
    {
      id: 'soda-750',
      cat: 'soda',
      name: 'Extra Fizz Club Soda PET',
      pack: '750 ml × 24 bottles',
      price: 480,
      tag: 'High carbonation',
      stock: 'In stock',
      image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=600&q=80',
      desc: 'Ultra-carbonated premium club soda with punchy bubbles that hold strong for lemon sodas and cocktail mixers.'
    },
    {
      id: 'lemon-soda',
      cat: 'soda',
      name: 'Fresh Lemon Mint Soda',
      pack: '250 ml × 24 bottles',
      price: 360,
      tag: 'Refreshing',
      stock: 'In stock',
      image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=600&q=80',
      desc: 'Ready-to-drink fizzy nimbu soda with real lemon juice extract, black salt, and natural mint notes.'
    },
    {
      id: 'tonic',
      cat: 'soda',
      name: 'Sparkling Tonic Water Can',
      pack: '300 ml × 24 cans',
      price: 1080,
      tag: 'Mixer',
      stock: 'In stock',
      image: 'https://images.unsplash.com/photo-1527661591475-527312dd65f5?auto=format&fit=crop&w=600&q=80',
      desc: 'Infused with natural quinine and subtle botanical citrus. Essential mixer for upscale restaurants and clubs.'
    },
    {
      id: 'milk-badam',
      cat: 'dairy',
      name: 'Badam Flavoured Milk Glass Bottle',
      pack: '180 ml × 30 bottles',
      price: 750,
      tag: 'High margin',
      stock: 'In stock',
      image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=600&q=80',
      desc: 'Rich sterilized double toned milk infused with saffron, crunchy almond bits and cardamom aroma.'
    },
    {
      id: 'milk-choco',
      cat: 'dairy',
      name: 'Rich Chocolate Dairy Milkshake',
      pack: '180 ml × 30 bottles',
      price: 750,
      tag: 'Kids favorite',
      stock: 'In stock',
      image: 'https://images.unsplash.com/photo-1541658016709-82535e94bc69?auto=format&fit=crop&w=600&q=80',
      desc: 'Creamy chocolate dairy milkshake with smooth mouthfeel. High sales in school & college bakery counters.'
    },
    {
      id: 'buttermilk',
      cat: 'dairy',
      name: 'Kerala Spiced Sambharam (Moru)',
      pack: '200 ml × 30 pouches/cups',
      price: 350,
      tag: 'Traditional',
      stock: 'In stock',
      image: 'https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&w=600&q=80',
      desc: 'Authentic Kerala spiced buttermilk blended with ginger, curry leaves, and green chilies. Ultimate summer coolant.'
    }
  ];

  const CAT_LABELS = {
    all: 'All beverages',
    soft: 'Soft drinks',
    juice: 'Fruit juices',
    energy: 'Energy & sports',
    water: 'Packaged water',
    soda: 'Soda & mixers',
    dairy: 'Dairy drinks'
  };

  // --- STATE MANAGEMENT ---
  const fmt = n => '₹' + Number(n).toLocaleString('en-IN');
  const fallbackSvg = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300' width='400' height='300'%3E%3Crect width='400' height='300' fill='%23e7f0ee'/%3E%3Cpath d='M170 110h60v20l20 30v90a10 10 0 0 1-10 10h-80a10 10 0 0 1-10-10V160l20-30v-20z' fill='none' stroke='%230e7c7b' stroke-width='6'/%3E%3Ccircle cx='200' cy='200' r='12' fill='%23e8590c'/%3E%3Ctext x='200' y='280' font-family='sans-serif' font-size='14' text-anchor='middle' fill='%2355696b'%3EChillHub Beverage%3C/text%3E%3C/svg%3E";

  let currentBranchId = localStorage.getItem('chillhub_branch') || 'pathanamthitta';
  // Ensure branch exists
  if (!BRANCHES.some(b => b.id === currentBranchId)) currentBranchId = 'pathanamthitta';

  const cart = new Map(); // id -> qty
  // Load saved cart from localStorage
  try {
    const saved = localStorage.getItem('chillhub_cart');
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed)) {
        parsed.forEach(([id, qty]) => {
          if (PRODUCTS.some(p => p.id === id) && qty > 0) cart.set(id, qty);
        });
      }
    }
  } catch (err) {
    console.warn('Could not load cart from storage', err);
  }

  function saveCart() {
    try {
      localStorage.setItem('chillhub_cart', JSON.stringify([...cart.entries()]));
    } catch (e) {}
  }

  let filter = 'all';
  let query = '';

  const $ = selector => document.querySelector(selector);
  const $$ = selector => document.querySelectorAll(selector);

  // --- CURRENT BRANCH HELPERS ---
  function getBranch() {
    return BRANCHES.find(b => b.id === currentBranchId) || BRANCHES[0];
  }

  function setBranch(branchId) {
    const branch = BRANCHES.find(b => b.id === branchId);
    if (!branch) return;
    currentBranchId = branchId;
    localStorage.setItem('chillhub_branch', branchId);
    renderBranchUI();
    updateCart(false);
    toast(`Branch switched to: ${branch.name}`);
  }

  // --- RENDER DYNAMIC BRANCH INFORMATION ---
  function renderBranchUI() {
    const b = getBranch();

    // 1. Header branch buttons and badges
    const headerBranchName = $('#headerBranchName');
    if (headerBranchName) headerBranchName.textContent = b.name;

    const branchBadge = $('#headerBranchBadge');
    if (branchBadge) branchBadge.textContent = b.badge;

    // 2. Delivery section
    const deliveryBranchTitle = $('#deliveryBranchTitle');
    if (deliveryBranchTitle) deliveryBranchTitle.textContent = `${b.name} — Route Fleet`;

    const deliveryLead = $('#deliveryLead');
    if (deliveryLead) {
      deliveryLead.innerHTML = `<strong>${b.tagline}</strong>. ${b.deliveryInfo}`;
    }

    const deliveryAddress = $('#deliveryAddress');
    if (deliveryAddress) deliveryAddress.textContent = b.address;

    const deliveryHours = $('#deliveryHours');
    if (deliveryHours) deliveryHours.textContent = b.hours;

    // Render Routes table
    const routesList = $('#routesList');
    if (routesList) {
      routesList.innerHTML = b.routes.map(r => `
        <li>
          <div>
            <span class="route-place">${r.place}</span>
            <span class="route-badge">${r.badge}</span>
          </div>
          <em>${r.time}</em>
        </li>
      `).join('');
    }

    // 3. Contact section dynamic updates
    const contactBranchName = $('#contactBranchName');
    if (contactBranchName) contactBranchName.textContent = `Ask ${b.name} for Today's Rates`;

    const contactPhone = $('#contactPhone');
    if (contactPhone) {
      contactPhone.textContent = b.phone;
      contactPhone.href = `tel:${b.phone.replace(/[\s-]/g, '')}`;
    }

    const contactWa = $('#contactWa');
    if (contactWa) {
      contactWa.href = `https://wa.me/${b.waNumber}?text=${encodeURIComponent(`Hi ChillHub ${b.name}, please share today's wholesale beverage price list and delivery slot.`)}`;
    }

    const contactAddress = $('#contactAddress');
    if (contactAddress) contactAddress.textContent = b.address;

    // 4. Modal / selector active buttons
    $$('.branch-card').forEach(card => {
      const isActive = card.dataset.branchId === b.id;
      card.classList.toggle('is-active', isActive);
      const btn = card.querySelector('.btn-branch-select');
      if (btn) {
        btn.textContent = isActive ? '✓ Selected Branch' : 'Select Branch';
        btn.className = isActive ? 'btn btn--outline btn--sm' : 'btn btn--primary btn--sm';
      }
    });

    // Update select element in quote form
    const quoteBranchSelect = $('#quoteBranchSelect');
    if (quoteBranchSelect) quoteBranchSelect.value = b.id;
  }

  // --- RENDER PRODUCTS GRID WITH REAL DRINK PICTURES ---
  const grid = $('#products');
  const empty = $('#empty');

  function renderProducts() {
    const q = query.trim().toLowerCase();
    const list = PRODUCTS.filter(p => {
      const matchCat = (filter === 'all' || p.cat === filter);
      const matchQuery = !q || (
        p.name.toLowerCase().includes(q) ||
        p.pack.toLowerCase().includes(q) ||
        p.desc.toLowerCase().includes(q) ||
        CAT_LABELS[p.cat].toLowerCase().includes(q)
      );
      return matchCat && matchQuery;
    });

    if (empty) empty.hidden = list.length > 0;

    grid.innerHTML = list.map(p => `
      <article class="product-card" data-product-id="${p.id}">
        <div class="product-card__media">
          <img
            src="${p.image}"
            alt="${p.name} — ${p.pack}"
            loading="lazy"
            width="400"
            height="280"
            onerror="this.onerror=null; this.src='${fallbackSvg}';"
          />
          <div class="product-card__badges">
            <span class="tag tag--cat">${CAT_LABELS[p.cat]}</span>
            ${p.tag ? `<span class="tag tag--feature">${p.tag}</span>` : ''}
          </div>
          <span class="stock-pill"><span class="stock-dot"></span>${p.stock}</span>
        </div>

        <div class="product-card__content">
          <div class="product-card__head">
            <h3 class="product-card__title">${p.name}</h3>
            <p class="product-card__pack">${p.pack}</p>
          </div>

          <p class="product-card__desc">${p.desc}</p>

          <div class="product-card__pricing">
            <div class="price-wrap">
              <span class="price-val">${fmt(p.price)}</span>
              <span class="price-unit">/ ${p.id === 'water-20l' ? 'jar' : 'case'}</span>
            </div>
            <span class="price-tax">Wholesale Net Rate</span>
          </div>

          <div class="product-card__actions">
            <div class="qty" data-id="${p.id}">
              <button type="button" data-step="-1" aria-label="Decrease quantity">−</button>
              <input type="number" min="1" max="999" value="1" inputmode="numeric" aria-label="Cases of ${p.name}">
              <button type="button" data-step="1" aria-label="Increase quantity">+</button>
            </div>
            <button class="btn btn--primary add-btn" type="button" data-add="${p.id}">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 5v14M5 12h14"/></svg>
              <span>Add</span>
            </button>
          </div>
        </div>
      </article>
    `).join('');
  }

  // --- PRODUCT GRID EVENT DELEGATION ---
  grid.addEventListener('click', e => {
    // Stepper buttons
    const step = e.target.closest('[data-step]');
    if (step) {
      const input = step.parentElement.querySelector('input');
      const cur = Math.max(1, Math.min(999, (+input.value || 1) + +step.dataset.step));
      input.value = cur;
      return;
    }

    // Add to cart button
    const addBtn = e.target.closest('[data-add]');
    if (addBtn) {
      const id = addBtn.dataset.add;
      const card = addBtn.closest('.product-card');
      const input = card ? card.querySelector('.qty input') : null;
      const qty = Math.max(1, input ? +input.value || 1 : 1);
      
      const prev = cart.get(id) || 0;
      cart.set(id, prev + qty);
      saveCart();

      const p = PRODUCTS.find(x => x.id === id);
      toast(`Added ${qty} × ${p.name} to order list!`);
      updateCart(true);

      // Button ripple / feedback
      addBtn.classList.add('added');
      setTimeout(() => addBtn.classList.remove('added'), 400);
    }
  });

  // --- FILTER & SEARCH ENGINE ---
  const filterBtns = $$('#filters button');
  function setFilter(cat) {
    filter = cat;
    filterBtns.forEach(b => {
      const active = b.dataset.filter === cat;
      b.setAttribute('aria-selected', active);
      b.classList.toggle('active', active);
    });
    renderProducts();
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => setFilter(btn.dataset.filter));
  });

  // Category jump cards
  $$('[data-jump]').forEach(card => {
    card.addEventListener('click', e => {
      const jumpCat = card.dataset.jump;
      if (jumpCat) {
        setFilter(jumpCat);
      }
    });
  });

  // Search input with instant debounce
  const searchInput = $('#search');
  if (searchInput) {
    let debounceTimer;
    searchInput.addEventListener('input', e => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => {
        query = e.target.value;
        renderProducts();
      }, 120);
    });
  }

  // --- CART DRAWER & WHATSAPP GENERATOR ---
  const drawer = $('#drawer');
  const backdrop = $('#backdrop');
  const cartBtn = $('#cartBtn');
  const closeDrawerBtn = $('#closeDrawer');

  function openDrawer() {
    $('#toast').classList.remove('show');
    drawer.classList.add('open');
    drawer.setAttribute('aria-hidden', 'false');
    backdrop.hidden = false;
    closeDrawerBtn.focus();
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    drawer.classList.remove('open');
    drawer.setAttribute('aria-hidden', 'true');
    backdrop.hidden = true;
    document.body.style.overflow = '';
  }

  if (cartBtn) cartBtn.addEventListener('click', openDrawer);
  if (closeDrawerBtn) closeDrawerBtn.addEventListener('click', closeDrawer);
  if (backdrop) backdrop.addEventListener('click', () => { closeDrawer(); closeBranchModal(); });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      closeDrawer();
      closeBranchModal();
      closeMenu();
    }
  });

  function updateCart(bump = false) {
    let totalCases = 0;
    let totalValue = 0;

    const items = [...cart.entries()].map(([id, qty]) => {
      const p = PRODUCTS.find(x => x.id === id);
      totalCases += qty;
      totalValue += qty * (p ? p.price : 0);
      return { p, qty };
    }).filter(item => item.p != null);

    // Header counter badge
    const countEl = $('#cartCount');
    if (countEl) {
      countEl.textContent = totalCases;
      if (bump) {
        countEl.classList.remove('bump');
        void countEl.offsetWidth; // retrigger animation
        countEl.classList.add('bump');
      }
    }

    const drawerTotalCases = $('#totalCases');
    if (drawerTotalCases) drawerTotalCases.textContent = `${totalCases} cases`;

    const drawerTotalVal = $('#totalValue');
    if (drawerTotalVal) drawerTotalVal.textContent = fmt(totalValue);

    const drawerEmpty = $('#drawerEmpty');
    if (drawerEmpty) drawerEmpty.hidden = items.length > 0;

    const drawerItems = $('#drawerItems');
    if (drawerItems) {
      drawerItems.innerHTML = items.map(({ p, qty }) => `
        <li class="cart-item">
          <img src="${p.image}" alt="${p.name}" class="cart-item__thumb" onerror="this.src='${fallbackSvg}';" />
          <div class="cart-item__details">
            <h4 class="cart-item__title">${p.name}</h4>
            <p class="cart-item__meta">${p.pack} · <strong>${fmt(p.price * qty)}</strong> (${fmt(p.price)}/case)</p>
          </div>
          <div class="qty qty--sm" data-cart="${p.id}">
            <button type="button" data-cstep="-1" aria-label="Decrease quantity">−</button>
            <input type="number" value="${qty}" min="0" max="999" aria-label="Quantity of ${p.name}">
            <button type="button" data-cstep="1" aria-label="Increase quantity">+</button>
          </div>
        </li>
      `).join('');
    }

    // Tier Progress & Discount Calculation
    const tierBar = $('#tierProgressBar');
    const tierText = $('#tierNote');
    const b = getBranch();

    let discountTier = 'Standard Wholesale';
    if (totalCases >= 100) {
      discountTier = 'Event / Sub-Dealer Quote (Tier 3)';
      if (tierText) tierText.innerHTML = `<strong>★ Top Volume Tier Unlocked!</strong> Custom distributor quote + free cooler hire.`;
      if (tierBar) tierBar.style.width = '100%';
    } else if (totalCases >= 25) {
      discountTier = 'Bulk Buyer Rate (Tier 2)';
      const remainingToEvent = 100 - totalCases;
      if (tierText) tierText.innerHTML = `<strong>✓ Bulk Discount Unlocked!</strong> Extra 3–5% off applied. Add ${remainingToEvent} more cases for Tier 3 event rate.`;
      if (tierBar) tierBar.style.width = `${Math.min(100, (totalCases / 100) * 100)}%`;
    } else if (totalCases >= 5) {
      discountTier = 'Retail Route Rate (Tier 1)';
      const remaining = 25 - totalCases;
      if (tierText) tierText.innerHTML = `Route delivery eligible! Add <strong>${remaining} more case${remaining > 1 ? 's' : ''}</strong> to unlock 3–5% bulk buyer discount.`;
      if (tierBar) tierBar.style.width = `${(totalCases / 25) * 60}%`;
    } else if (totalCases > 0) {
      const remaining = 5 - totalCases;
      if (tierText) tierText.innerHTML = `Warehouse pickup available. Add <strong>${remaining} more case${remaining > 1 ? 's' : ''}</strong> for door delivery.`;
      if (tierBar) tierBar.style.width = `${(totalCases / 5) * 20}%`;
    } else {
      if (tierText) tierText.textContent = 'Add 5 cases to unlock route delivery.';
      if (tierBar) tierBar.style.width = '0%';
    }

    // Branch indicator inside drawer
    const drawerBranchLabel = $('#drawerBranchLabel');
    if (drawerBranchLabel) drawerBranchLabel.textContent = b.name;

    // WhatsApp Message Builder targeting the selected branch
    const sendWaBtn = $('#sendWa');
    if (sendWaBtn) {
      if (items.length) {
        const lines = items.map(({ p, qty }, i) => `${i + 1}. *${qty} × ${p.name}* (${p.pack}) = ${fmt(p.price * qty)}`).join('\n');
        
        const message = 
`*CHILLHUB WHOLESALE ORDER REQUEST*
----------------------------------------
📍 *Dispatch Branch:* ${b.name}
🏢 *Branch Address:* ${b.address}
📞 *Branch Phone:* ${b.phone}
----------------------------------------
*ORDERED ITEMS:*
${lines}

----------------------------------------
📦 *Total Quantity:* ${totalCases} cases
💰 *Estimated Total:* ${fmt(totalValue)}
🏷️ *Volume Tier:* ${discountTier}

----------------------------------------
*CUSTOMER / BUSINESS DETAILS:*
Shop / Business Name: 
Location / Landmark: 
Contact Person & Phone: 
Preferred Delivery Slot: Today / Tomorrow Morning

_Please confirm live stock and today's final company price list._`;

        sendWaBtn.href = `https://wa.me/${b.waNumber}?text=${encodeURIComponent(message)}`;
        sendWaBtn.removeAttribute('aria-disabled');
      } else {
        sendWaBtn.href = '#';
        sendWaBtn.setAttribute('aria-disabled', 'true');
      }
    }
  }

  // Drawer items event handlers
  const drawerItems = $('#drawerItems');
  if (drawerItems) {
    drawerItems.addEventListener('click', e => {
      const s = e.target.closest('[data-cstep]');
      if (!s) return;
      const wrap = s.parentElement;
      const id = wrap.dataset.cart;
      const step = +s.dataset.cstep;
      const current = cart.get(id) || 0;
      const next = current + step;

      if (next <= 0) {
        cart.delete(id);
      } else {
        cart.set(id, next);
      }
      saveCart();
      updateCart();
    });

    drawerItems.addEventListener('change', e => {
      const wrap = e.target.closest('[data-cart]');
      if (!wrap) return;
      const id = wrap.dataset.cart;
      const q = Math.floor(+e.target.value || 0);
      if (q <= 0) {
        cart.delete(id);
      } else {
        cart.set(id, Math.min(999, q));
      }
      saveCart();
      updateCart();
    });
  }

  const clearCartBtn = $('#clearCart');
  if (clearCartBtn) {
    clearCartBtn.addEventListener('click', () => {
      if (cart.size > 0 && confirm('Are you sure you want to clear your order list?')) {
        cart.clear();
        saveCart();
        updateCart();
        toast('Order list cleared');
      }
    });
  }

  // --- BRANCH SELECTOR MODAL ---
  const branchModal = $('#branchModal');
  const openBranchModalBtns = $$('[data-action="open-branch-modal"]');
  const closeBranchModalBtn = $('#closeBranchModal');

  function openBranchModal() {
    if (!branchModal) return;
    branchModal.classList.add('open');
    branchModal.setAttribute('aria-hidden', 'false');
    backdrop.hidden = false;
    document.body.style.overflow = 'hidden';
  }

  function closeBranchModal() {
    if (!branchModal) return;
    branchModal.classList.remove('open');
    branchModal.setAttribute('aria-hidden', 'true');
    if (!drawer.classList.contains('open')) {
      backdrop.hidden = true;
      document.body.style.overflow = '';
    }
  }

  openBranchModalBtns.forEach(btn => btn.addEventListener('click', openBranchModal));
  if (closeBranchModalBtn) closeBranchModalBtn.addEventListener('click', closeBranchModal);

  // Render Branch Cards inside Modal
  const branchCardsContainer = $('#branchCardsContainer');
  if (branchCardsContainer) {
    branchCardsContainer.innerHTML = BRANCHES.map(b => `
      <div class="branch-card ${b.id === currentBranchId ? 'is-active' : ''}" data-branch-id="${b.id}">
        <div class="branch-card__head">
          <div>
            <span class="branch-badge">${b.badge}</span>
            <h3 class="branch-card__title">${b.name}</h3>
            <p class="branch-card__area">${b.area}</p>
          </div>
          <span class="branch-check" aria-hidden="true">✓</span>
        </div>
        <p class="branch-card__address">📍 ${b.address}</p>
        <p class="branch-card__meta">⏰ ${b.hours}</p>
        <p class="branch-card__meta">🚚 ${b.deliveryInfo}</p>
        <div class="branch-card__foot">
          <a href="tel:${b.phone.replace(/[\s-]/g, '')}" class="branch-phone">${b.phone}</a>
          <button type="button" class="btn btn-branch-select ${b.id === currentBranchId ? 'btn--outline' : 'btn--primary'} btn--sm" data-select-branch="${b.id}">
            ${b.id === currentBranchId ? '✓ Selected' : 'Select Branch'}
          </button>
        </div>
      </div>
    `).join('');

    branchCardsContainer.addEventListener('click', e => {
      const selectBtn = e.target.closest('[data-select-branch]');
      const card = e.target.closest('.branch-card');
      const bId = selectBtn ? selectBtn.dataset.selectBranch : (card ? card.dataset.branchId : null);
      if (bId) {
        setBranch(bId);
        closeBranchModal();
      }
    });
  }

  // Form branch selector
  const quoteBranchSelect = $('#quoteBranchSelect');
  if (quoteBranchSelect) {
    quoteBranchSelect.innerHTML = BRANCHES.map(b => `<option value="${b.id}">${b.name} — ${b.badge}</option>`).join('');
    quoteBranchSelect.value = currentBranchId;
    quoteBranchSelect.addEventListener('change', e => {
      setBranch(e.target.value);
    });
  }

  // --- TOAST NOTIFICATION ---
  let toastTimer;
  function toast(msg) {
    const t = $('#toast');
    if (!t) return;
    t.textContent = msg;
    t.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => t.classList.remove('show'), 2600);
  }

  // --- MOBILE NAVIGATION ---
  const menuBtn = $('#menuBtn');
  const nav = $('#nav');

  function closeMenu() {
    if (!nav) return;
    nav.classList.remove('open');
    if (menuBtn) {
      menuBtn.setAttribute('aria-expanded', 'false');
      menuBtn.setAttribute('aria-label', 'Open navigation menu');
    }
  }

  if (menuBtn && nav) {
    menuBtn.addEventListener('click', () => {
      const isOpen = !nav.classList.contains('open');
      nav.classList.toggle('open', isOpen);
      menuBtn.setAttribute('aria-expanded', isOpen);
      menuBtn.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
    });
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
  }

  // --- HEADER SCROLL SHADOW ---
  const header = document.querySelector('.header');
  const handleScroll = () => {
    if (header) {
      header.classList.toggle('is-scrolled', window.scrollY > 12);
    }
  };
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // --- QUOTE FORM HANDLING ---
  const quoteForm = $('#quoteForm');
  if (quoteForm) {
    quoteForm.addEventListener('submit', e => {
      e.preventDefault();
      const f = e.target;
      const status = $('#formStatus');
      const name = f.name.value.trim();
      const phone = f.phone.value.replace(/\D/g, '');
      const shop = f.shop.value.trim();
      const type = f.type.value;
      const msg = f.msg.value.trim();
      const branchObj = getBranch();

      f.name.classList.toggle('invalid', !name);
      f.phone.classList.toggle('invalid', phone.length < 10);

      if (!name || phone.length < 10) {
        status.className = 'form__status err';
        status.textContent = 'Please enter your name and a valid 10-digit mobile number.';
        return;
      }

      // Generate direct WhatsApp link for this quote request
      const quoteText = 
`*NEW WHOLESALE RATE ENQUIRY*
----------------------------------------
📍 *Branch:* ${branchObj.name}
👤 *Name:* ${name}
🏢 *Shop / Business:* ${shop || 'Not specified'}
📱 *Phone:* ${f.phone.value.trim()}
🏷️ *Buyer Type:* ${type}
📝 *Requirement:* ${msg || 'Latest wholesale rates and stock sheet'}
----------------------------------------
_Sent via ChillHub Distributor Portal_`;

      const directWaUrl = `https://wa.me/${branchObj.waNumber}?text=${encodeURIComponent(quoteText)}`;

      status.className = 'form__status ok';
      status.innerHTML = `
        <span>✓ Thank you <strong>${name}</strong>! Quote registered for <strong>${branchObj.name}</strong>.</span>
        <div style="margin-top:8px">
          <a href="${directWaUrl}" target="_blank" rel="noopener" class="btn btn--primary btn--sm" style="display:inline-flex;">
            Click to send quote details instantly on WhatsApp ➔
          </a>
        </div>
      `;
      f.reset();
    });
  }

  // --- INTERSECTION OBSERVER REVEAL ---
  if ('IntersectionObserver' in window) {
    const revealEls = $$('.reveal, .section__head, .cat, .tier, .quotes figure, .routes, .steps li, .branch-card');
    revealEls.forEach(el => el.classList.add('reveal'));
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -6% 0px' });
    revealEls.forEach(el => observer.observe(el));
  }

  // --- INITIALIZE PORTAL ---
  renderBranchUI();
  renderProducts();
  updateCart(false);

  // Expose global API for console debugging if needed
  window.ChillHub = {
    setBranch,
    getBranch,
    BRANCHES,
    PRODUCTS,
    cart
  };
})();
