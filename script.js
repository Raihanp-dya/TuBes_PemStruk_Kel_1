// ========== DATA PRODUK (HARDCODE) ==========
const products = [
  { id: 1, name: "Special", artist: "Skirt", category: "pop", price: 500000, rating: 5, 
    description: "Album pop penuh warna dengan sentuhan elektronik modern.\n\nTrack including\n",
    tracklist: ["Couldnt bear to be special", "special", "ghost of april","..."],
    image: "https://kakubarhythm.com/wordpress/wp-content/uploads/2025/04/f79cf6791405676ecce007fce596bcc0-scaled.jpg" },
  { id: 2, name: "Toho BossaNova 2", artist: "Various Artists", category: "bossanova", price: 899000, rating: 4.8, 
    description: "Kompliasi bossa nova klasik yang menenangkan dari berbagai artis ternama.\n\nTrack including\n",
    tracklist: ["Narkisos ni Sayonara", "Relative Relation", "Tiny Little Adiantum","..."], 
    image: "https://is1-ssl.mzstatic.com/image/thumb/Music113/v4/f2/59/02/f2590200-f760-e13f-dd95-e241b2664e48/4580547323443.jpg/592x592bb.webp" },
  { id: 3, name: "Modal Soul", artist: "Nujabes", category: "lofi", price: 129000, rating: 4.2, 
  description: "Album pop penuh warna dengan sentuhan elektronik modern.\n\nTrack including\n",
  tracklist: ["Couldnt bear to be special", "special", "ghost of april","..."],
    image: "https://img1.wsimg.com/isteam/ip/f0f96534-fcdd-4c54-8453-050cc557d28c/IMG_0032%20-%20Copy%20(4).JPG/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:2046,cg:true" },
  { id: 4, name: "What Do You Really Know?", artist: "Real Estate", category: "rock", price: 599000, rating: 4.6, 
    description: "Rock alternatif dengan melodi dreamy dan lirik reflektif.\n\nTrack including\n", 
    tracklist: ["Couldnt bear to be special", "special", "ghost of april","..."],
    image: "https://i.scdn.co/image/ab67616d0000b273d5091532aed5342508c47a3b" },
  { id: 5, name: "Soft", artist: "Arlo Parks", category: "pop", price: 349000, rating: 4.4, 
    description: "Pop lembut dengan lirik puitis dan aransemen minimalis.\n\nTrack including\n", 
    tracklist: ["Couldnt bear to be special", "special", "ghost of april","..."],
    image: "http://images.genius.com/f75e642ebf36e6b17ea5c0bbe7771112.1000x1000x1.jpg" },
  { id: 6, name: "Lover", artist: "Taylor Swift", category: "pop", price: 279000, rating: 4.3, 
    description: "Album pop romantis penuh hits dari Taylor Swift.\n\nTrack including\n", 
    tracklist: ["Couldnt bear to be special", "special", "ghost of april","..."],
    image: "https://linkstorage.linkfire.com/medialinks/images/612dea5f-3a2c-4745-aea1-8163bc19699f/artwork.jpg" },
  { id: 7, name: "To Pimp a Butterfly", artist: "Kendrick Lamar", category: "hip-hop", price: 420000, rating: 4.9, 
    description: "Album hip-hop konseptual dengan jazz dan funk yang berpengaruh.\n\nTrack including\n", 
    tracklist: ["Couldnt bear to be special", "special", "ghost of april","..."],
    image: "https://upload.wikimedia.org/wikipedia/en/f/f6/Kendrick_Lamar_-_To_Pimp_a_Butterfly.png" },
  { id: 8, name: "Kind of Blue", artist: "Miles Davis", category: "jazz", price: 380000, rating: 5, 
    description: "Album jazz legendaris yang menjadi fondasi jazz modal.\n\nTrack including\n", 
    tracklist: ["Couldnt bear to be special", "special", "ghost of april","..."],
    image: "https://cdn-p.smehost.net/sites/c5d2b1a28fd246bfafed3b8dbafc1352/wp-content/uploads/2021/05/cover-45.jpg" },
  { id: 9, name: "Under The Force of Courage", artist: "Galneryus", category: "rock", price: 449000, rating: 4.7, 
    description: "Power metal epik dengan solo gitar menggebu dan vokal tinggi.\n\nTrack including\n", 
    tracklist: ["Couldnt bear to be special", "special", "ghost of april","..."],
    image: "https://upload.wikimedia.org/wikipedia/en/8/86/Cover_art_for_%22Under_the_Force_of_Courage%22%2C_Galneryus%27_tenth_album.jpg" },
  { id: 10, name: "In Rainbows", artist: "Radiohead", category: "rock", price: 399000, rating: 4.8, 
    description: "Album rock eksperimental dengan tekstur elektronik dan emosi mendalam.\n\nTrack including\n",
    tracklist: ["Couldnt bear to be special", "special", "ghost of april","..."], 
    image: "https://upload.wikimedia.org/wikipedia/en/1/14/Inrainbowscover.png" },
  { id: 11, name: "Blue Train", artist: "John Coltrane", category: "jazz", price: 449000, rating: 4.7, 
    description: "Album jazz hard bop dengan permainan saksofon Coltrane yang ikonik.\n\nTrack including\n",
    tracklist: ["Couldnt bear to be special", "special", "ghost of april","..."], 
    image: "https://upload.wikimedia.org/wikipedia/commons/6/68/John_Coltrane_-_Blue_Train.jpg" },
  { id: 12, name: "Getz/Gilberto", artist: "Stan Getz & João Gilberto", category: "bossanova", price: 399000, rating: 4.9, 
    description: "Album bossa nova klasik pemenang Grammy, termasuk 'The Girl from Ipanema'.\n\nTrack including\n", 
    tracklist: ["Couldnt bear to be special", "special", "ghost of april","..."],
    image: "https://upload.wikimedia.org/wikipedia/en/9/96/Getz-gilberto.jpg" }
];

// STATE 
let cart = [];
let currentCategory = 'all';

// ELEMEN DOM 
const productsContainer = document.getElementById('productsContainer');
const cartToggle = document.getElementById('cartToggle');
const cartDropdown = document.getElementById('cartDropdown');
const closeCartDropdown = document.getElementById('closeCartDropdown');
const cartItems = document.getElementById('cartItems');
const cartFooter = document.getElementById('cartFooter');
const cartTotal = document.getElementById('cartTotal');
const cartBadge = document.getElementById('cartBadge');
const toast = document.getElementById('toast');
const categoryBtns = document.querySelectorAll('.category-btn');
const searchInput = document.getElementById('searchInput');
const themeToggle = document.getElementById('themeToggle');

// RENDER PRODUK 
function renderProducts(filterCategory = 'all', searchQuery = '') {
  let filtered = products;
  if (filterCategory !== 'all') {
    filtered = filtered.filter(p => p.category === filterCategory);
  }
  if (searchQuery) {
    filtered = filtered.filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase()));
  }

  productsContainer.innerHTML = filtered.map((product, index) => `
    <div class="product-card" data-index="${index}">
      <div class="product-image-wrapper">
        <img src="${product.image}" alt="${product.name}" class="product-image" />
        <div class="image-overlay" data-id="${product.id}">
          <i data-lucide="shopping-cart" size="28"></i>
        </div>
      </div>
      <!-- Pop-up deskripsi (akan muncul saat hover) -->
      <div class="product-popup">
        <p class="popup-description">${product.description}</p>
        <ul class="tracklist">
          ${product.tracklist ? product.tracklist.map(track => `<li>${track}</li>`).join('') : ''}
        </ul>
      </div>
      <div class="product-info">
        <span class="product-category">${product.category}</span>
        <h3 class="product-title">${product.name}</h3>
        <p class="product-artist">${product.artist}</p>
        <div class="product-rating">${'★'.repeat(Math.floor(product.rating))} ${product.rating}</div>
        <div class="product-price">Rp ${product.price.toLocaleString('id-ID')}</div>
      </div>
    </div>
  `).join('');

  document.querySelectorAll('.image-overlay').forEach(overlay => {
    overlay.addEventListener('click', () => {
      const id = parseInt(overlay.dataset.id);
      addToCart(id);
    });
  });

  lucide.createIcons();
  updatePopupDirections(); // ⬅️ atur arah pop‑up (kanan/kiri)
  console.log('Jumlah popup:', document.querySelectorAll('.product-popup').length);
}

// ARAH POP-UP 
function updatePopupDirections() {
  const cards = document.querySelectorAll('.product-card');
  if (!cards.length) return;

  const gridStyle = window.getComputedStyle(productsContainer);
  const columns = gridStyle.gridTemplateColumns.split(' ').length; // hitung jumlah kolom

  cards.forEach((card, index) => {
    const popup = card.querySelector('.product-popup');
    if (!popup) return;

    const colIndex = index % columns;
    // Dua kolom pertama → popup ke kanan, sisanya ke kiri
    if (colIndex < 2) {
      popup.classList.add('popup-right');
      popup.classList.remove('popup-left');
    } else {
      popup.classList.add('popup-left');
      popup.classList.remove('popup-right');
    }
  });
}

// KERANJANG 
function addToCart(productId) {
  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.qty += 1;
  } else {
    const product = products.find(p => p.id === productId);
    cart.push({ ...product, qty: 1 });
  }
  updateCartUI();
  showToast();
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  updateCartUI();
}

function changeQty(productId, delta) {
  const item = cart.find(i => i.id === productId);
  if (item) {
    item.qty += delta;
    if (item.qty <= 0) removeFromCart(productId);
  }
  updateCartUI();
}

function updateCartUI() {
  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
  cartBadge.textContent = totalItems;

  if (cart.length === 0) {
    cartItems.innerHTML = '<p class="empty-cart">Keranjang kosong.</p>';
    cartFooter.style.display = 'none';
  } else {
    cartItems.innerHTML = cart.map(item => `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.name}" />
        <div class="cart-item-info">
          <div class="cart-item-title">${item.name}</div>
          <div class="cart-item-price">Rp ${(item.price * item.qty).toLocaleString('id-ID')}</div>
        </div>
        <div class="cart-item-qty">
          <button data-action="decrease" data-id="${item.id}">-</button>
          <span>${item.qty}</span>
          <button data-action="increase" data-id="${item.id}">+</button>
        </div>
        <button class="cart-item-remove" data-action="remove" data-id="${item.id}">
          <i data-lucide="trash-2" size="16"></i>
        </button>
      </div>
    `).join('');
    lucide.createIcons();

    const total = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    cartTotal.textContent = `Rp ${total.toLocaleString('id-ID')}`;
    cartFooter.style.display = 'block';
  }
}

function showToast() {
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2000);
}

// TOGGLE KERANJANG 
function toggleCart(open) {
  if (open) {
    cartDropdown.classList.add('open');
  } else {
    cartDropdown.classList.remove('open');
  }
}

// EVENT LISTENERS 
cartToggle.addEventListener('click', (e) => {
  e.stopPropagation();
  const isOpen = cartDropdown.classList.contains('open');
  toggleCart(!isOpen);
});

closeCartDropdown.addEventListener('click', () => toggleCart(false));

document.addEventListener('click', (e) => {
  if (!cartDropdown.contains(e.target) && e.target !== cartToggle && !cartToggle.contains(e.target)) {
    toggleCart(false);
  }
});

// Tombol dalam keranjang
cartItems.addEventListener('click', (e) => {
  const button = e.target.closest('[data-action]');
  if (!button) return;

  e.stopPropagation();
  const action = button.dataset.action;
  const id = parseInt(button.dataset.id);

  if (action === 'increase') changeQty(id, 1);
  else if (action === 'decrease') changeQty(id, -1);
  else if (action === 'remove') removeFromCart(id);
});

// Filter kategori
categoryBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    categoryBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentCategory = btn.dataset.category;
    renderProducts(currentCategory, searchInput.value);
  });
});

// Pencarian
searchInput.addEventListener('input', () => {
  renderProducts(currentCategory, searchInput.value);
});

// Perbarui arah pop‑up 
let resizeTimer;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    updatePopupDirections();
  }, 100);
});

// DARK MODE TOGGLE 
function applyTheme(theme) {
  if (theme === 'dark') {
    document.body.classList.add('dark');
    themeToggle.innerHTML = '<i data-lucide="sun"></i>';   // matahari
  } else {
    document.body.classList.remove('dark');
    themeToggle.innerHTML = '<i data-lucide="moon"></i>'; //  bulan
  }
  lucide.createIcons();           // render ulang
  localStorage.setItem('theme', theme);
}

// Inisialisasi tema
const savedTheme = localStorage.getItem('theme') || 'light';
applyTheme(savedTheme);

themeToggle.addEventListener('click', () => {
  const current = document.body.classList.contains('dark') ? 'dark' : 'light';
  applyTheme(current === 'dark' ? 'light' : 'dark');
});

// MUAT AWAL 
renderProducts();
updateCartUI();