// ===== FULL STOCK DATA =====
const STOCK = [
  // ===== BRAND NEW (sealed — not graded) =====
  { type: "Phone", brand: "Apple", model: "iPhone 17 Pro Max", storage: "1TB", grade: "NEW", price: 1399, stock: 1,
    why: "Brand new, sealed in original box. Never activated.",
    image: "https://images.pexels.com/photos/18525574/pexels-photo-18525574.jpeg?auto=compress&cs=tinysrgb&w=800",
    specs: { display: "6.9\" Super Retina XDR OLED, 120Hz", chip: "Apple A19 Pro (2 nm)", camera: "48MP Main | 48MP UW | 12MP Telephoto", battery: "100% Health (Unused)", material: "Titanium Frame" } },
  { type: "Phone", brand: "Apple", model: "iPhone 17", storage: "256GB", grade: "NEW", price: 899, stock: 1,
    why: "Brand new, sealed in original box.",
    image: "https://images.pexels.com/photos/1647976/pexels-photo-1647976.jpeg?auto=compress&cs=tinysrgb&w=800",
    specs: { display: "6.3\" Super Retina XDR OLED", chip: "Apple A18 Bionic (3 nm)", camera: "48MP Main | 48MP UW", battery: "100% Health (Unused)", feature: "Dynamic Island, USB-C" } },

  // ===== PRE-OWNED PHONES (graded A / B / C) =====
  { type: "Phone", brand: "Apple", model: "iPhone 15 Pro Max", storage: "512GB", grade: "A", price: 949, stock: 1,
    why: "Immaculate condition. Zero marks, 99% battery health.",
    image: "https://images.pexels.com/photos/18525574/pexels-photo-18525574.jpeg?auto=compress&cs=tinysrgb&w=800",
    specs: { display: "6.7\" Super Retina XDR", chip: "Apple A17 Pro (3 nm)", camera: "48MP Main | 5x Telephoto", battery: "4422 mAh (Up to 29h video)" } },
  { type: "Phone", brand: "Apple", model: "iPhone 15 Pro", storage: "256GB", grade: "A", price: 729, stock: 1,
    why: "Zero marks, 98% battery health, all original parts.",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&auto=format&fit=crop",
    specs: { display: "6.1\" Super Retina XDR OLED, 120Hz", chip: "Apple A17 Pro (3 nm)", camera: "48MP Main | 12MP UW | 12MP Telephoto", battery: "3274 mAh (Up to 23h video)", material: "Titanium Frame" } },
  { type: "Phone", brand: "Apple", model: "iPhone 15", storage: "128GB", grade: "B", price: 549, stock: 1,
    why: "Faint scratch on frame (photographed), screen flawless.",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=400&auto=format&fit=crop",
    specs: { display: "6.1\" Super Retina XDR OLED", chip: "Apple A16 Bionic (4 nm)", camera: "48MP Main | 12MP UW", battery: "3349 mAh (Up to 20h video)", feature: "Dynamic Island, USB-C" } },
  { type: "Phone", brand: "Apple", model: "iPhone 14", storage: "128GB", grade: "A", price: 449, stock: 0,
    why: "Like new. One owner, boxed, 96% battery.",
    image: "https://images.unsplash.com/photo-1530319067432-f2a729c03db5?q=80&w=400&auto=format&fit=crop",
    specs: { display: "6.1\" Super Retina XDR OLED", chip: "Apple A15 Bionic (5 nm)", camera: "12MP Main | 12MP UW", battery: "3279 mAh (Up to 20h video)", feature: "Face ID, MagSafe" } },
  { type: "Phone", brand: "Apple", model: "iPhone 13", storage: "256GB", grade: "C", price: 319, stock: 1,
    why: "Visible wear on back glass. Fully tested, new battery fitted.",
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?q=80&w=400&auto=format&fit=crop",
    specs: { display: "6.1\" Super Retina XDR OLED", chip: "Apple A15 Bionic (5 nm)", camera: "12MP Main | 12MP UW", battery: "3240 mAh (Brand New)", feature: "Ceramic Shield front" } },
  { type: "Phone", brand: "Samsung", model: "Galaxy S24", storage: "256GB", grade: "A", price: 579, stock: 1,
    why: "Pristine. Screen protector fitted since day one.",
    image: "https://images.unsplash.com/photo-1610945264803-c22b62d2a7b3?auto=format&fit=crop&w=400&q=80",
    specs: { display: "6.2\" AMOLED, 120Hz", chip: "Exynos 2400", camera: "50MP Main | 12MP UW | 10MP Tele", battery: "4000 mAh" } },
  { type: "Phone", brand: "Samsung", model: "Galaxy S23", storage: "128GB", grade: "B", price: 419, stock: 1,
    why: "Light corner wear. 100% functional, verified IMEI.",
    image: "https://images.unsplash.com/photo-1678911820864-e2c567c655d7?auto=format&fit=crop&w=400&q=80",
    specs: { display: "6.1\" AMOLED, 120Hz", chip: "Snapdragon 8 Gen 2", camera: "50MP Main | 12MP UW | 10MP Tele", battery: "3900 mAh" } },
  { type: "Phone", brand: "Google", model: "Pixel 8", storage: "128GB", grade: "B", price: 389, stock: 1,
    why: "Minor micro-scratches on screen, invisible when on.",
    image: "https://images.unsplash.com/photo-1595941069915-4ebc5197c14a?q=80&w=400&auto=format&fit=crop",
    specs: { display: "6.2\" OLED, 120Hz, HDR10+", chip: "Google Tensor G3 (4 nm)", camera: "50MP Main | 12MP UW", battery: "4575 mAh (27W Fast Charge)", feature: "Magic Eraser, AI Photo" } },

  // ===== ACCESSORIES =====
  { type: "Accessory", brand: "Apple", model: "20W USB-C Charger", storage: "Genuine", grade: "A", price: 15, stock: 1,
    why: "Original Apple, tested output verified.",
    image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?q=80&w=400&auto=format&fit=crop",
    specs: { output: "20W Fast Charging", port: "1x USB-C", compatibility: "iPhone 8 to 17 Series", condition: "Pristine Original" } },
  { type: "Accessory", brand: "Apple", model: "AirPods (3rd Gen)", storage: "Boxed", grade: "B", price: 89, stock: 1,
    why: "Light case wear, both pods tested, 90%+ battery.",
    image: "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?q=80&w=400&auto=format&fit=crop",
    specs: { audio: "Spatial Audio with head tracking", battery: "Up to 6h listening time", case: "Lightning Charging Case", feature: "Sweat and water resistant" } },
  { type: "Accessory", brand: "Samsung", model: "45W Super Fast Charger", storage: "Genuine", grade: "A", price: 18, stock: 1,
    why: "Boxed, unused — customer trade-in extra.",
    image: "https://images.unsplash.com/photo-1615526675159-e248c3021d3f?q=80&w=400&auto=format&fit=crop",
    specs: { output: "45W Super Fast Charging 2.0", port: "1x USB-C", compatibility: "S22/S23/S24 Ultra & Plus", cable: "Includes 5A Cable" } },
  { type: "Accessory", brand: "PhoneBank", model: "Tempered Glass (iPhone 13–17)", storage: "New", grade: "NEW", price: 8, stock: 1,
    why: "Brand new stock, fitted free in store.",
    image: "https://images.unsplash.com/photo-1605170439002-90845e8c0137?q=80&w=400&auto=format&fit=crop",
    specs: { hardness: "9H Scratch Resistance", clarity: "99.9% HD Transparency", coating: "Oleophobic (Anti-fingerprint)", feature: "Shatter-proof design" } },
  { type: "Accessory", brand: "PhoneBank", model: "Clear Case (all models)", storage: "New", grade: "NEW", price: 10, stock: 1,
    why: "Brand new stock, drop-tested TPU.",
    image: "https://images.unsplash.com/photo-1603313011101-320f26a4f6f6?q=80&w=400&auto=format&fit=crop",
    specs: { material: "Anti-yellowing TPU", protection: "Military-grade drop tested", corners: "Air-cushion technology", compatibility: "MagSafe compatible" } }
];

const GRADE_COLOURS = { "NEW": "#0a66ff", "A": "#0a7d33", "B": "#0a2540", "C": "#8a6d00" };
const gradeLabel = g => g === "NEW" ? "BRAND NEW" : "GRADE " + g;

// ===== ELEMENTS =====
const grid = document.getElementById("shop-grid");
const filterTypeEl = document.getElementById("filter-type");
const filterBrandEl = document.getElementById("filter-brand");
const toggleStockEl = document.getElementById("toggle-stock");
const toggleTradeEl = document.getElementById("toggle-trade");

// ===== RENDER =====
function render(items) {
  const countEl = document.getElementById("result-count");
  if (countEl) countEl.textContent = items.length + " item" + (items.length === 1 ? "" : "s");

  if (items.length === 0) {
    grid.innerHTML = `<p style="grid-column:1/-1; text-align:center; padding:48px; font-size:1.1rem; color:#666;">Nothing matches that filter.</p>`;
    return;
  }
  const showTradeIn = toggleTradeEl && toggleTradeEl.checked;

  grid.innerHTML = items.map(p => {
    const soldOut = p.stock === 0;
    const displayPrice = showTradeIn ? Math.floor(p.price * 0.6) : p.price;
    const priceLabel = showTradeIn ? "<span style='font-size:0.85rem; font-weight:500; color:#666;'>We buy for </span>" : "";

    return `
    <div style="padding:24px; border:1px solid #eee; border-radius:16px; background:#fff; display:flex; flex-direction:column; height:100%; ${soldOut ? 'opacity:.55;' : ''} transition:transform .2s, box-shadow .2s;"
      onmouseover="this.style.transform='translateY(-4px)'; this.style.boxShadow='0 12px 24px rgba(0,0,0,0.08)';"
      onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='none';">

      <div onclick="openModal('${p.brand}','${p.model}')" style="height:220px; border-radius:12px; margin-bottom:16px; overflow:hidden; background:#f0f0f0; cursor:pointer;" title="Click for details">
        <img src="${p.image}" alt="${p.model}" style="width:100%; height:100%; object-fit:contain; padding:16px;" onerror="this.style.display='none'">
      </div>

      <div style="display:flex; gap:8px; flex-wrap:wrap;">
        <span style="background:${GRADE_COLOURS[p.grade] || '#333'}; color:#fff; font-size:.75rem; font-weight:700; padding:4px 12px; border-radius:99px;">${gradeLabel(p.grade)}</span>
        ${soldOut ? `<span style="background:#999; color:#fff; font-size:.75rem; font-weight:700; padding:4px 12px; border-radius:99px;">OUT OF STOCK</span>` : ''}
      </div>

      <h3 style="margin:12px 0 4px; cursor:pointer; font-size:1.3rem;" onclick="openModal('${p.brand}','${p.model}')">${p.brand} ${p.model}</h3>
      <p style="font-size:.95rem; color:#666;">${p.storage}</p>

      <div style="flex-grow:1;"></div>

      <div style="display:flex; justify-content:space-between; align-items:center; margin:20px 0 16px;">
        <p style="font-size:1.8rem; font-weight:700; color:#111; margin:0;">${priceLabel}£${displayPrice}</p>
        <button onclick="openModal('${p.brand}','${p.model}')" style="padding:10px 20px; background:#111; color:#fff; font-size:.95rem; font-weight:600; border-radius:8px; border:none; cursor:pointer;">Details</button>
      </div>

      <p style="font-size:.85rem; border-top:1px solid #eee; padding-top:16px; margin:0; line-height:1.4;">
        <strong style="color:#111;">Audit:</strong> ${p.why}
      </p>
    </div>`;
  }).join("");
}

// ===== FILTERS & HEADING =====
function applyFilters() {
  let items = STOCK;
  const typeVal = filterTypeEl ? filterTypeEl.value : "";
  const brandVal = filterBrandEl ? filterBrandEl.value : "";

  if (typeVal) items = items.filter(p => p.type === typeVal);
  if (brandVal) items = items.filter(p => p.brand === brandVal);
  if (toggleStockEl && !toggleStockEl.checked) items = items.filter(p => p.stock !== 0);

  const titleEl = document.getElementById("page-title");
  if (titleEl) {
    const displayType = typeVal === "Accessory" ? "Accessories" : (typeVal ? typeVal + "s" : "");
    if (brandVal && typeVal) titleEl.innerText = `${brandVal} ${displayType}`;
    else if (brandVal) titleEl.innerText = `${brandVal} Devices`;
    else if (typeVal) titleEl.innerText = `All ${displayType}`;
    else titleEl.innerText = "All Devices";
  }
  render(items);
}

if (filterBrandEl) filterBrandEl.addEventListener("change", applyFilters);
if (filterTypeEl) filterTypeEl.addEventListener("change", applyFilters);
if (toggleStockEl) toggleStockEl.addEventListener("change", applyFilters);
if (toggleTradeEl) toggleTradeEl.addEventListener("change", applyFilters);

// ===== MODAL (Details + Reserve & Collect) =====
function openModal(brand, model) {
  const p = STOCK.find(x => x.brand === brand && x.model === model);
  if (!p) return;

  document.getElementById("modal-image").src = p.image;

  const specsHtml = p.specs
    ? Object.entries(p.specs).map(([k, v]) =>
        `<div style="display:flex; justify-content:space-between; gap:16px; padding:8px 0; border-bottom:1px solid #f0f0f0; font-size:.92rem;">
           <span style="color:#888; text-transform:capitalize;">${k}</span><span style="color:#111; font-weight:600; text-align:right;">${v}</span>
         </div>`).join("")
    : "";

  document.getElementById("modal-details-content").innerHTML = `
    <span style="background:${GRADE_COLOURS[p.grade] || '#333'}; color:#fff; font-size:.75rem; font-weight:700; padding:4px 12px; border-radius:99px;">${gradeLabel(p.grade)}</span>
    <h2 style="margin:14px 0 4px;">${p.brand} ${p.model}</h2>
    <p style="color:#666; margin-bottom:12px;">${p.storage}</p>
    <p style="font-size:2rem; font-weight:800; margin-bottom:16px;">£${p.price}</p>
    <p style="font-size:.9rem; background:#f5f5f7; padding:12px 16px; border-radius:10px; margin-bottom:16px;"><strong>Audit:</strong> ${p.why}</p>
    ${specsHtml}
    <div id="reserve-area" style="margin-top:20px;">
      ${p.stock === 0
        ? `<button disabled style="width:100%; padding:15px; background:#ccc; color:#666; border:none; border-radius:10px; font-weight:700;">Out of stock</button>`
        : `<button onclick="showReserveForm()" style="width:100%; padding:15px; background:#0a66ff; color:#fff; border:none; border-radius:10px; font-weight:700; font-size:1rem; cursor:pointer;">Reserve &amp; Collect — pay in store</button>
           <p style="font-size:.8rem; color:#888; text-align:center; margin-top:8px;">No online payment. We hold it 48 hours at our Exeter counter.</p>`}
    </div>`;

  document.getElementById("product-modal").style.display = "flex";
}

function showReserveForm() {
  document.getElementById("reserve-area").innerHTML = `
    <div style="background:#f5f5f7; padding:16px; border-radius:12px;">
      <label style="font-size:.85rem; font-weight:600;">Your name</label>
      <input id="rsv-name" type="text" style="width:100%; padding:12px; margin:6px 0 12px; border:1px solid #ddd; border-radius:8px;">
      <label style="font-size:.85rem; font-weight:600;">Email or phone</label>
      <input id="rsv-contact" type="text" style="width:100%; padding:12px; margin:6px 0 14px; border:1px solid #ddd; border-radius:8px;">
      <button onclick="confirmReserve()" style="width:100%; padding:14px; background:#0a7d33; color:#fff; border:none; border-radius:10px; font-weight:700; cursor:pointer;">Confirm reservation</button>
    </div>`;
}

function confirmReserve() {
  const name = document.getElementById("rsv-name").value.trim();
  if (!name) { document.getElementById("rsv-name").style.border = "1px solid #d00"; return; }
  document.getElementById("reserve-area").innerHTML = `
    <div style="background:#eafaf0; border:1px solid #b7e4c7; padding:20px; border-radius:12px; text-align:center;">
      <p style="font-size:1.4rem; margin-bottom:6px;">✅ Reserved, ${name}!</p>
      <p style="font-size:.9rem; color:#444;">We're holding it for 48 hours at The Branch, High Street, Exeter. Pay when you collect — after we walk you through the grade, on the counter.</p>
      <p style="font-size:.75rem; color:#999; margin-top:10px;">(Concept demo — no real reservation is made.)</p>
    </div>`;
}

function closeModal() {
  document.getElementById("product-modal").style.display = "none";
}

document.getElementById("product-modal").addEventListener("click", (e) => {
  if (e.target.id === "product-modal") closeModal();
});

// ===== INITIAL LOAD =====
applyFilters();