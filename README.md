# ChillHub Wholesale — Multi-Branch Beverage Distributor Portal

High-efficiency, responsive wholesale cool drinks distributor web application built for Visual Studio Code. Includes **real-time beverage photography**, **interactive multi-branch routing**, **live search and category filtering**, and **automated WhatsApp order generation**.

---

## 🌟 What Was Upgraded & Made More Efficient

1. **Real-Time Drinks Photography:**
   - Every product card now features authentic, high-resolution chilled beverage photography (Glass bottle colas, PET packs, cans on ice, Alphonso mango juices, energy drinks, packaged water, Kerala marble goli soda, badam milk, chocolate shakes, and spiced buttermilk).
   - Fast loading with `loading="lazy"` and built-in SVG fallback placeholders so cards never show broken images.

2. **Multi-Branch Support ("with branch"):**
   - **4 Configured Distribution Hubs:**
     - **Ottapalam (Central Hub & Warehouse)** — Main warehouse, 25 km radius.
     - **Palakkad City Depot** — Express 2-hour town delivery, Big Bazaar & Industrial belt.
     - **Shoranur Junction Branch** — Transit hub, railway stalls & cool bars.
     - **Cherpulassery & Pattambi Point** — North Palakkad wedding & catering depot.
   - **Interactive Branch Switching:**
     - Quick branch selector pill in the header.
     - Dedicated Branch Selection Modal with route timings, operating hours, and warehouse locations.
     - Branch selection is saved in `localStorage` so it persists across refreshes.
   - **Dynamic Synchronization:**
     - Delivery routes table automatically adapts to show routes for the active branch.
     - Contact numbers, WhatsApp links, and physical addresses update on the fly.
     - Order drawer routes WhatsApp messages directly to that branch manager.

3. **Performance & Code Efficiency:**
   - **Zero Build Tools Required:** Pure semantic HTML5, modern CSS3 variables, and clean vanilla JavaScript.
   - **Local Storage Cart:** Order items and branch selections are retained even if the browser closes.
   - **Debounced Instant Search:** Instant filtering across names, packages, categories, and descriptions without lag.
   - **Volume Tier Progress Bar:** Live visual feedback in the drawer showing cases needed to unlock bulk rates (5+ cases for delivery, 25+ cases for 3–5% discount, 100+ cases for event tier).

---

## 🚀 How to Run in Visual Studio Code

### Step 1: Open the Project in VS Code
1. Open **Visual Studio Code**.
2. Click **File** > **Open Folder...** (or press `Ctrl + K, Ctrl + O`).
3. Navigate to:
   ```
   C:\Users\rosha\.gemini\antigravity\scratch\chillhub-wholesale
   ```
4. Click **Select Folder**.

### Step 2: Run with Live Server
1. In VS Code, open the Extensions tab (`Ctrl + Shift + X`).
2. Search for **Live Server** (by *Ritwick Dey*) and click **Install** (if not already installed).
3. Right-click on `index.html` in the file explorer.
4. Select **"Open with Live Server"** (or click **"Go Live"** in the bottom-right status bar).
5. The website will open at `http://127.0.0.1:5500`.

*(Alternatively, you can simply double-click `index.html` in Windows File Explorer to open it in Chrome, Edge, or Firefox).*

---

## 📁 File Structure

```
chillhub-wholesale/
│
├── index.html        # Complete semantic layout (Header, Hero, Categories, Catalog, Pricing, Delivery, FAQ, Contact, Drawer, Branch Modal)
├── style.css         # Modern design tokens, product card layouts, branch cards, drawer animations, and mobile responsive rules
├── app.js            # Branch management, drink product database, search/filter engine, cart calculations, and WhatsApp dispatcher
└── README.md         # Documentation and setup guide
```

---

## ⚙️ How to Customize Branch Details & Products

### Updating Branch Phone Numbers & Addresses
Open `app.js` and locate the `BRANCHES` array at the top:
```javascript
const BRANCHES = [
  {
    id: 'ottapalam',
    name: 'Ottapalam (Central Hub)',
    phone: '+91 90480 50905',
    waNumber: '919048050905', // Country code without '+' or dashes
    address: 'Main Road, Near Bus Stand, Ottapalam, Kerala 679101',
    // ...
  },
  // Add or edit other branches here
];
```

### Adding New Drinks or Adjusting Prices
In `app.js`, look for the `PRODUCTS` array:
```javascript
{
  id: 'new-drink-id',
  cat: 'soft', // soft | juice | energy | water | soda | dairy
  name: 'Drink Name',
  pack: '600 ml × 24 bottles',
  price: 750, // Wholesale case rate in ₹
  tag: 'Best seller', // Optional badge
  stock: 'In stock',
  image: 'https://images.unsplash.com/...',
  desc: 'Short product description for retailers.'
}
```

---

## 📱 WhatsApp Order Message Preview
When a retailer adds cases and clicks **"Send Order on WhatsApp"**, it automatically generates a formatted message:

```text
*CHILLHUB WHOLESALE ORDER REQUEST*
----------------------------------------
📍 *Dispatch Branch:* Ottapalam (Central Hub)
🏢 *Branch Address:* Main Road, Near Bus Stand, Ottapalam, Kerala 679101
📞 *Branch Phone:* +91 90480 50905
----------------------------------------
*ORDERED ITEMS:*
1. *10 × Cola Glass Bottle (Chilled)* (250 ml × 24 bottles) = ₹3,600
2. *5 × Alphonso Mango Tetra Drink* (200 ml × 30 packs) = ₹2,400
3. *4 × Packaged Mineral Water 1L* (1 L × 12 bottles) = ₹440

----------------------------------------
📦 *Total Quantity:* 19 cases
💰 *Estimated Total:* ₹6,440
🏷️ *Volume Tier:* Retail Route Rate (Tier 1)

----------------------------------------
*CUSTOMER / BUSINESS DETAILS:*
Shop / Business Name: 
Location / Landmark: 
Contact Person & Phone: 
Preferred Delivery Slot: Today / Tomorrow Morning

_Please confirm live stock and today's final company price list._
```
