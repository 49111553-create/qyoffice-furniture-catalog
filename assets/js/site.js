const ALIBABA_STORE = "https://qyofficefurniture.en.alibaba.com";

// Replace these placeholders with the real sales email and WhatsApp number before public promotion.
const CONTACT = {
  email: "sales@qianyang-furniture.com",
  whatsappNumber: "8613800000000"
};

const PRODUCTS = [
  {
    "id": "QY-RD-001",
    "name": "Modern L-Shaped Reception Desk",
    "category": "Reception Desk",
    "subcategory": "L-Shaped Reception Desk",
    "applications": [
      "Office",
      "Hotel",
      "Clinic",
      "Salon"
    ],
    "materials": [
      "MDF",
      "Plywood",
      "LED",
      "Stainless Steel"
    ],
    "style": "Modern / Minimalist",
    "moq": "2 pieces",
    "size": "Custom size available",
    "color": "White / Wood Grain / Custom",
    "image": "assets/images/product-rd-lshape.svg",
    "scene": "assets/images/scene-office-reception.svg",
    "detail": "assets/images/detail-led-storage.svg",
    "dimension": "assets/images/dimension-lshape.svg",
    "summary": "A modern L-shaped reception counter for office lobbies, clinics, hotels and salon reception areas.",
    "features": [
      "L-shaped working layout",
      "Optional LED logo panel",
      "Integrated storage cabinets",
      "Cable management ready",
      "Custom color and finish"
    ],
    "customOptions": [
      "Size",
      "Color",
      "Logo panel",
      "LED lighting",
      "Storage layout",
      "Countertop material"
    ]
  },
  {
    "id": "QY-RD-002",
    "name": "Curved Commercial Front Desk",
    "category": "Reception Desk",
    "subcategory": "Curved Reception Desk",
    "applications": [
      "Office",
      "Hotel",
      "Retail"
    ],
    "materials": [
      "MDF",
      "Plywood",
      "Stone Look",
      "LED"
    ],
    "style": "Curved / Luxury",
    "moq": "2 pieces",
    "size": "Custom size available",
    "color": "Cream / Black / Custom",
    "image": "assets/images/product-rd-curved.svg",
    "scene": "assets/images/scene-hotel-lobby.svg",
    "detail": "assets/images/detail-curved-finish.svg",
    "dimension": "assets/images/dimension-curved.svg",
    "summary": "A curved front desk designed for premium office, hotel lobby and retail entrance projects.",
    "features": [
      "Curved visual structure",
      "Premium front panel finish",
      "Brand logo customization",
      "Reception and cashier function",
      "Export packaging"
    ],
    "customOptions": [
      "Arc size",
      "Front panel finish",
      "Logo",
      "LED",
      "Countertop",
      "Back storage"
    ]
  },
  {
    "id": "QY-RD-003",
    "name": "Luxury Marble-Look Reception Counter",
    "category": "Reception Desk",
    "subcategory": "Luxury Reception Desk",
    "applications": [
      "Hotel",
      "Salon",
      "Clinic",
      "Commercial Lobby"
    ],
    "materials": [
      "MDF",
      "Stone Look",
      "Metal",
      "LED"
    ],
    "style": "Luxury / Contemporary",
    "moq": "2 pieces",
    "size": "Custom size available",
    "color": "Marble Look / Gold / Custom",
    "image": "assets/images/product-rd-marble.svg",
    "scene": "assets/images/scene-salon-reception.svg",
    "detail": "assets/images/detail-marble-metal.svg",
    "dimension": "assets/images/dimension-straight.svg",
    "summary": "A high-end marble-look reception counter for beauty salons, hotels, clinics and commercial projects.",
    "features": [
      "Marble-look front panel",
      "Optional metal trim",
      "Custom brand logo",
      "Storage and cashier space",
      "Premium lobby appearance"
    ],
    "customOptions": [
      "Size",
      "Marble pattern",
      "Metal trim",
      "Logo",
      "Lighting",
      "Storage"
    ]
  },
  {
    "id": "QY-NS-001",
    "name": "Modular Hospital Nurse Station",
    "category": "Nurse Station",
    "subcategory": "Hospital Nurse Station",
    "applications": [
      "Hospital",
      "Clinic",
      "Dental Center"
    ],
    "materials": [
      "MDF",
      "Plywood",
      "Solid Surface",
      "Glass"
    ],
    "style": "Medical / Modular",
    "moq": "2 meters",
    "size": "Custom layout available",
    "color": "White / Blue / Wood Grain / Custom",
    "image": "assets/images/product-ns-modular.svg",
    "scene": "assets/images/scene-clinic-nurse.svg",
    "detail": "assets/images/detail-medical-storage.svg",
    "dimension": "assets/images/dimension-ushape.svg",
    "summary": "A modular nurse station for hospital wards, clinics and medical reception areas.",
    "features": [
      "Workflow-based layout",
      "Privacy screen options",
      "Large storage capacity",
      "Durable commercial surface",
      "Custom U-shape or straight layout"
    ],
    "customOptions": [
      "Layout",
      "Counter height",
      "Privacy panel",
      "Storage module",
      "Cable holes",
      "Color"
    ]
  },
  {
    "id": "QY-NS-002",
    "name": "Clinic Reception & Nurse Counter",
    "category": "Nurse Station",
    "subcategory": "Clinic Reception Desk",
    "applications": [
      "Clinic",
      "Dental Center",
      "Medical Beauty",
      "Pharmacy"
    ],
    "materials": [
      "MDF",
      "Plywood",
      "LED",
      "Acrylic"
    ],
    "style": "Clean / Healthcare",
    "moq": "2 pieces",
    "size": "Custom size available",
    "color": "White / Green / Custom",
    "image": "assets/images/product-ns-clinic.svg",
    "scene": "assets/images/scene-dental-clinic.svg",
    "detail": "assets/images/detail-clinic-logo.svg",
    "dimension": "assets/images/dimension-straight.svg",
    "summary": "A clean medical reception counter for dental clinics, medical beauty centers and pharmacies.",
    "features": [
      "Clinic-friendly design",
      "Optional logo and light box",
      "Document storage",
      "Reception and cashier function",
      "Easy-clean surface"
    ],
    "customOptions": [
      "Width",
      "Color",
      "Logo light box",
      "Storage",
      "Cable management",
      "Surface finish"
    ]
  },
  {
    "id": "QY-OD-001",
    "name": "Executive Office Desk System",
    "category": "Office Desk",
    "subcategory": "Executive Desk",
    "applications": [
      "Office",
      "Manager Room",
      "Corporate Project"
    ],
    "materials": [
      "MDF",
      "Melamine",
      "Metal",
      "Leather Look"
    ],
    "style": "Executive / Modern",
    "moq": "5 pieces",
    "size": "Custom size available",
    "color": "Walnut / Black / Custom",
    "image": "assets/images/product-od-executive.svg",
    "scene": "assets/images/scene-executive-office.svg",
    "detail": "assets/images/detail-cable-drawer.svg",
    "dimension": "assets/images/dimension-straight.svg",
    "summary": "A modern executive office desk system for manager rooms and commercial office projects.",
    "features": [
      "Large desktop layout",
      "Side cabinet option",
      "Cable management",
      "Matching storage available",
      "Custom finish"
    ],
    "customOptions": [
      "Size",
      "Side cabinet",
      "Desktop finish",
      "Cable box",
      "Color",
      "Lockable drawers"
    ]
  },
  {
    "id": "QY-OD-002",
    "name": "Staff Workstation Desk Cluster",
    "category": "Office Desk",
    "subcategory": "Staff Workstation",
    "applications": [
      "Office",
      "Coworking",
      "Corporate Project"
    ],
    "materials": [
      "Melamine",
      "Metal",
      "MDF",
      "Acoustic Screen"
    ],
    "style": "Modular / Space Saving",
    "moq": "10 seats",
    "size": "2/4/6 person layout or custom",
    "color": "White / Wood Grain / Custom",
    "image": "assets/images/product-od-workstation.svg",
    "scene": "assets/images/scene-workstation.svg",
    "detail": "assets/images/detail-screen-wire.svg",
    "dimension": "assets/images/dimension-workstation.svg",
    "summary": "A modular workstation system for open offices, coworking projects and staff work areas.",
    "features": [
      "2/4/6 person configurations",
      "Screen partition available",
      "Cable tray option",
      "Commercial metal frame",
      "Flexible layout"
    ],
    "customOptions": [
      "Seat count",
      "Screen color",
      "Frame finish",
      "Cable tray",
      "Desktop size",
      "Storage cabinet"
    ]
  },
  {
    "id": "QY-BC-001",
    "name": "Commercial Bar Counter Set",
    "category": "Bar Counter",
    "subcategory": "Bar Furniture Sets",
    "applications": [
      "Restaurant",
      "Bar",
      "Hotel",
      "Cafe"
    ],
    "materials": [
      "MDF",
      "Plywood",
      "Stone Look",
      "LED",
      "Metal"
    ],
    "style": "Hospitality / Custom",
    "moq": "2 meters",
    "size": "Custom layout available",
    "color": "Wood Grain / Black / Marble Look / Custom",
    "image": "assets/images/product-bc-bar.svg",
    "scene": "assets/images/scene-restaurant-bar.svg",
    "detail": "assets/images/detail-bar-shelf.svg",
    "dimension": "assets/images/dimension-bar.svg",
    "summary": "A custom commercial bar counter for restaurants, cafes, hotels and hospitality projects.",
    "features": [
      "Front counter and back bar option",
      "LED lighting available",
      "Bottle display shelf",
      "Cashier and service function",
      "Custom layout"
    ],
    "customOptions": [
      "Length",
      "Back bar",
      "Countertop",
      "Lighting",
      "Shelving",
      "Cashier position"
    ]
  },
  {
    "id": "QY-BC-002",
    "name": "Coffee Shop Cashier Counter",
    "category": "Commercial Counter",
    "subcategory": "Cashier Counter",
    "applications": [
      "Cafe",
      "Bakery",
      "Retail",
      "Restaurant"
    ],
    "materials": [
      "MDF",
      "Plywood",
      "Metal",
      "Glass"
    ],
    "style": "Retail / Compact",
    "moq": "2 pieces",
    "size": "Custom size available",
    "color": "Wood Grain / Cream / Custom",
    "image": "assets/images/product-cc-cashier.svg",
    "scene": "assets/images/scene-cafe-counter.svg",
    "detail": "assets/images/detail-cashier-storage.svg",
    "dimension": "assets/images/dimension-straight.svg",
    "summary": "A compact cashier and service counter for cafes, bakeries, restaurants and small retail spaces.",
    "features": [
      "Compact service layout",
      "POS position",
      "Storage shelves",
      "Custom front finish",
      "Commercial durability"
    ],
    "customOptions": [
      "Width",
      "POS area",
      "Shelves",
      "Glass display",
      "Front finish",
      "Color"
    ]
  },
  {
    "id": "QY-SC-001",
    "name": "Glass Retail Display Showcase",
    "category": "Display Showcase",
    "subcategory": "Retail Display Cabinet",
    "applications": [
      "Retail",
      "Jewelry Store",
      "Cosmetic Store",
      "Showroom"
    ],
    "materials": [
      "Tempered Glass",
      "MDF",
      "Metal",
      "LED"
    ],
    "style": "Retail / Display",
    "moq": "2 pieces",
    "size": "Custom size available",
    "color": "White / Black / Gold / Custom",
    "image": "assets/images/product-sc-glass.svg",
    "scene": "assets/images/scene-retail-showcase.svg",
    "detail": "assets/images/detail-glass-led.svg",
    "dimension": "assets/images/dimension-showcase.svg",
    "summary": "A glass display showcase for retail stores, jewelry shops, cosmetic counters and showrooms.",
    "features": [
      "Tempered glass display",
      "Optional LED lighting",
      "Lockable storage",
      "Custom height and width",
      "Brand-color finish"
    ],
    "customOptions": [
      "Size",
      "Glass thickness",
      "LED",
      "Lock",
      "Base color",
      "Shelf height"
    ]
  },
  {
    "id": "QY-SC-002",
    "name": "Cosmetic Display Cabinet System",
    "category": "Display Showcase",
    "subcategory": "Cosmetic Display Cabinet",
    "applications": [
      "Cosmetic Store",
      "Retail",
      "Showroom",
      "Mall Kiosk"
    ],
    "materials": [
      "MDF",
      "Acrylic",
      "Glass",
      "LED"
    ],
    "style": "Brand Display",
    "moq": "2 pieces",
    "size": "Custom size available",
    "color": "White / Pink / Black / Custom",
    "image": "assets/images/product-sc-cosmetic.svg",
    "scene": "assets/images/scene-cosmetic-store.svg",
    "detail": "assets/images/detail-display-shelf.svg",
    "dimension": "assets/images/dimension-showcase.svg",
    "summary": "A customized cosmetic display cabinet system for retail stores, shopping malls and brand showrooms.",
    "features": [
      "Brand display structure",
      "LED shelf lighting",
      "Acrylic or glass modules",
      "Custom logo panel",
      "Retail storage base"
    ],
    "customOptions": [
      "Brand color",
      "Logo",
      "Shelf layout",
      "Lighting",
      "Cabinet size",
      "Material"
    ]
  },
  {
    "id": "QY-CF-001",
    "name": "Custom Commercial Furniture Project",
    "category": "Custom Commercial Furniture",
    "subcategory": "Project Furniture",
    "applications": [
      "Office",
      "Hotel",
      "Clinic",
      "Retail",
      "Restaurant"
    ],
    "materials": [
      "MDF",
      "Plywood",
      "Metal",
      "Glass",
      "Stone Look",
      "LED"
    ],
    "style": "OEM / ODM",
    "moq": "Project based",
    "size": "Made to project drawing",
    "color": "Custom",
    "image": "assets/images/product-cf-project.svg",
    "scene": "assets/images/scene-custom-project.svg",
    "detail": "assets/images/detail-custom-options.svg",
    "dimension": "assets/images/dimension-project.svg",
    "summary": "Custom-made commercial furniture based on buyer drawings, reference images, room size and project requirements.",
    "features": [
      "OEM / ODM supported",
      "Custom drawing and layout",
      "Material and color selection",
      "Project packaging",
      "Suitable for commercial spaces"
    ],
    "customOptions": [
      "Room layout",
      "Material",
      "Color",
      "Logo",
      "Hardware",
      "Packing method"
    ]
  }
];

function $(selector, root = document) { return root.querySelector(selector); }
function $$(selector, root = document) { return Array.from(root.querySelectorAll(selector)); }

function productUrl(id) { return `product-detail.html?id=${encodeURIComponent(id)}`; }
function badge(text) { return `<span class="badge">${text}</span>`; }

function productCard(product) {
  const apps = product.applications.slice(0, 3).join(' / ');
  const materials = product.materials.slice(0, 3).join(' / ');
  return `
    <article class="card product-card" data-category="${product.category}" data-applications="${product.applications.join('|')}" data-materials="${product.materials.join('|')}">
      <a href="${productUrl(product.id)}"><img src="${product.image}" alt="${product.name}"></a>
      <div class="card-body">
        <div class="meta">${badge(product.category)}${badge(product.id)}${badge('Customizable')}</div>
        <h3><a href="${productUrl(product.id)}">${product.name}</a></h3>
        <p>${product.summary}</p>
        <div class="spec-line"><strong>Application:</strong> ${apps}</div>
        <div class="spec-line"><strong>Material:</strong> ${materials}</div>
        <div class="spec-line"><strong>MOQ:</strong> ${product.moq}</div>
        <div class="card-actions">
          <a class="btn primary" href="${productUrl(product.id)}">View Details</a>
          <a class="btn secondary" href="contact.html?product=${encodeURIComponent(product.name)}">Inquiry</a>
        </div>
      </div>
    </article>`;
}

function renderProducts() {
  const grid = $('#productGrid');
  if (!grid) return;
  const featuredOnly = grid.dataset.featured === 'true';
  const pageCategory = grid.dataset.category;
  let list = PRODUCTS.slice();
  if (featuredOnly) list = list.slice(0, 8);
  if (pageCategory) list = list.filter(p => p.category === pageCategory || p.subcategory === pageCategory);
  grid.innerHTML = list.map(productCard).join('');
  updateProductCount();
}

function setupFilters() {
  const form = $('#productFilters');
  const grid = $('#productGrid');
  if (!form || !grid) return;
  form.addEventListener('submit', e => e.preventDefault());
  const apply = () => {
    const search = ($('#filterSearch')?.value || '').trim().toLowerCase();
    const category = $('#filterCategory')?.value || '';
    const application = $('#filterApplication')?.value || '';
    const material = $('#filterMaterial')?.value || '';
    $$('.product-card', grid).forEach(card => {
      const text = card.textContent.toLowerCase();
      const okSearch = !search || text.includes(search);
      const okCategory = !category || card.dataset.category === category;
      const okApplication = !application || card.dataset.applications.includes(application);
      const okMaterial = !material || card.dataset.materials.includes(material);
      card.style.display = (okSearch && okCategory && okApplication && okMaterial) ? '' : 'none';
    });
    updateProductCount();
  };
  form.addEventListener('input', apply);
  $('#resetFilters')?.addEventListener('click', () => { form.reset(); apply(); });
}

function updateProductCount() {
  const count = $('#productCount');
  const grid = $('#productGrid');
  if (!count || !grid) return;
  const visible = $$('.product-card', grid).filter(card => card.style.display !== 'none').length;
  count.textContent = `${visible} products shown`;
}

function renderProductDetail() {
  const holder = $('#productDetail');
  if (!holder) return;
  const id = new URLSearchParams(window.location.search).get('id') || PRODUCTS[0].id;
  const product = PRODUCTS.find(p => p.id === id) || PRODUCTS[0];
  document.title = `${product.name} | QianYang Furniture`;
  holder.innerHTML = `
    <section class="page-hero">
      <div class="container">
        <div class="crumbs"><a href="index.html">Home</a> / <a href="products.html">Products</a> / ${product.name}</div>
        <div class="section-title"><span class="eyebrow">${product.category} / ${product.id}</span><h1>${product.name}</h1><p>${product.summary}</p></div>
      </div>
    </section>
    <section class="section">
      <div class="container two-col">
        <div class="detail-gallery">
          <div class="main-img"><img id="mainProductImage" src="${product.image}" alt="${product.name}"></div>
          <div class="thumb-row">
            <img src="${product.scene}" alt="${product.name} application scene" data-thumb>
            <img src="${product.detail}" alt="${product.name} detail" data-thumb>
            <img src="${product.dimension}" alt="${product.name} dimension drawing" data-thumb>
          </div>
        </div>
        <div class="product-detail-panel">
          <div class="meta">${badge(product.category)}${badge(product.subcategory)}${badge('OEM / ODM')}</div>
          <h1>${product.name}</h1>
          <p>${product.summary} Send us your size, drawing or reference photo. We can customize the design, material, color, logo and packing for your project.</p>
          <ul class="feature-list">${product.features.map(f => `<li>${f}</li>`).join('')}</ul>
          <div class="card-actions" style="margin-top:24px">
            <a class="btn primary" href="contact.html?product=${encodeURIComponent(product.name)}">Request Quotation</a>
            <a class="btn secondary js-whatsapp" href="#" data-product="${product.name}">WhatsApp</a>
            <a class="btn ghost" href="${ALIBABA_STORE}" target="_blank" rel="noopener">Alibaba Store</a>
          </div>
        </div>
      </div>
    </section>
    <section class="section alt">
      <div class="container two-col">
        <div>
          <div class="section-title"><span class="eyebrow">Specifications</span><h2>Product Details</h2><p>Standard information for quotation. All key parameters can be adjusted according to project requirements.</p></div>
        </div>
        <table class="spec-table">
          <tr><th>Product Name</th><td>${product.name}</td></tr>
          <tr><th>Model</th><td>${product.id}</td></tr>
          <tr><th>Category</th><td>${product.category}</td></tr>
          <tr><th>Material</th><td>${product.materials.join(' / ')}</td></tr>
          <tr><th>Size</th><td>${product.size}</td></tr>
          <tr><th>Color</th><td>${product.color}</td></tr>
          <tr><th>Application</th><td>${product.applications.join(' / ')}</td></tr>
          <tr><th>MOQ</th><td>${product.moq}</td></tr>
          <tr><th>Customization</th><td>${product.customOptions.join(' / ')}</td></tr>
          <tr><th>Packing</th><td>Export carton, foam protection and wooden frame options for overseas shipment.</td></tr>
        </table>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div class="section-title"><span class="eyebrow">Applications</span><h2>Built for commercial projects</h2><p>This model is suitable for international project buyers, contractors, designers and distributors.</p></div>
        <div class="grid cols-4">${product.applications.map(app => `<div class="card"><div class="card-body"><h3>${app}</h3><p>Custom layout, finish and packing options for ${app.toLowerCase()} projects.</p></div></div>`).join('')}</div>
      </div>
    </section>
    ${inquirySection('Need a project quotation?', product.name)}
  `;
  $$('[data-thumb]').forEach(thumb => thumb.addEventListener('click', () => { $('#mainProductImage').src = thumb.src; }));
  setupWhatsappLinks();
  setupInquiryForms();
}

function setupTabs() {
  const tabs = $$('.tab[data-solution]');
  if (!tabs.length) return;
  const panels = $$('[data-solution-panel]');
  tabs.forEach(tab => tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    const key = tab.dataset.solution;
    panels.forEach(panel => panel.style.display = panel.dataset.solutionPanel === key ? '' : 'none');
  }));
}

function setupNavigation() {
  $('#mobileToggle')?.addEventListener('click', () => $('#navLinks')?.classList.toggle('open'));
  const current = location.pathname.split('/').pop() || 'index.html';
  $$('.nav-links a').forEach(a => { if (a.getAttribute('href') === current) a.classList.add('active'); });
}

function makeInquirySummary(form) {
  const data = new FormData(form);
  const lines = [];
  for (const [key, value] of data.entries()) {
    if (value && typeof value === 'string') lines.push(`${key}: ${value}`);
  }
  return lines.join('\n');
}

function setupInquiryForms() {
  $$('.inquiry-form').forEach(form => {
    const productParam = new URLSearchParams(window.location.search).get('product');
    if (productParam && form.elements['Product Interested In']) form.elements['Product Interested In'].value = productParam;
    form.addEventListener('submit', e => {
      e.preventDefault();
      const summary = makeInquirySummary(form);
      const subject = encodeURIComponent('QianYang Furniture Quotation Request');
      const body = encodeURIComponent(`Hello QianYang Furniture,

Please check my project requirement below:

${summary}

For drawings/reference images, I will attach them in the email manually.
`);
      window.location.href = `mailto:${CONTACT.email}?subject=${subject}&body=${body}`;
      const alert = form.querySelector('.alert');
      if (alert) {
        alert.textContent = 'Your email app should open with the quotation request. Please attach drawings or reference images manually before sending.';
        alert.classList.add('show');
      }
    });
  });
}

function setupWhatsappLinks() {
  $$('.js-whatsapp').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const product = link.dataset.product || 'commercial furniture project';
      const text = encodeURIComponent(`Hello, I am interested in ${product}. Please send quotation and customization details.`);
      window.open(`https://wa.me/${CONTACT.whatsappNumber}?text=${text}`, '_blank', 'noopener');
    });
  });
}

function inquirySection(title = 'Send your project requirement', productName = '') {
  return `
  <section class="section">
    <div class="container">
      <div class="inquiry-box" id="inquiry">
        <div class="two-col">
          <div>
            <span class="eyebrow" style="color:#d8b16a">Request Quotation</span>
            <h2 style="font-size:42px;line-height:1.05;margin:12px 0">${title}</h2>
            <p>For faster quotation, please provide product size, quantity, destination country and reference photos. Static GitHub Pages forms open your email app; replace the contact settings in assets/js/site.js before launch.</p>
          </div>
          <form class="inquiry-form">
            <div class="form-grid">
              <div class="field"><label>Name</label><input name="Name" required></div>
              <div class="field"><label>Company</label><input name="Company"></div>
              <div class="field"><label>Country</label><input name="Country" required></div>
              <div class="field"><label>Email</label><input type="email" name="Email" required></div>
              <div class="field"><label>WhatsApp</label><input name="WhatsApp"></div>
              <div class="field"><label>Product Interested In</label><input name="Product Interested In" value="${productName}"></div>
              <div class="field"><label>Required Size</label><input name="Required Size" placeholder="e.g. 3000W x 750D x 1050H mm"></div>
              <div class="field"><label>Quantity</label><input name="Quantity" placeholder="e.g. 2 pcs / 10 meters"></div>
              <div class="field full"><label>Project Type</label><select name="Project Type"><option>Office Reception Area</option><option>Hospital / Clinic</option><option>Hotel / Apartment Lobby</option><option>Salon / Spa</option><option>Restaurant / Bar</option><option>Retail Store</option><option>Other Commercial Project</option></select></div>
              <div class="field full"><label>Message</label><textarea name="Message" placeholder="Tell us the design style, material, color, delivery country and target schedule."></textarea></div>
              <div class="field full"><label>Upload Drawing / Reference Image</label><input type="file" name="Reference File"><div class="note">File upload is shown for buyer guidance. Attach files manually after the email app opens.</div></div>
              <div class="full"><button class="btn secondary" type="submit">Get Quotation Within 24 Hours</button><div class="alert"></div></div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>`;
}

function setupCatalogForm() {
  const form = $('#catalogForm');
  if (!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    $('#catalogNotice')?.classList.add('show');
    window.open('assets/catalog/qianyang-commercial-furniture-catalog.pdf', '_blank');
  });
}

document.addEventListener('DOMContentLoaded', () => {
  setupNavigation();
  renderProducts();
  setupFilters();
  renderProductDetail();
  setupTabs();
  setupInquiryForms();
  setupWhatsappLinks();
  setupCatalogForm();
});
