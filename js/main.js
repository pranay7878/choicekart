// ===== CHOICE KART - Premium Grocery Store =====

// Image paths
const DL = 'assets/images/downloads/';
const CAT = 'assets/images/products/';

// ===== PRODUCT DATA WITH YOUR LOCAL IMAGES =====
const products = [
    // --- GROCERY & STAPLES ---
    {
        id: 1,
        name: "Aashirvaad Whole Wheat Atta",
        brand: "Aashirvaad",
        price: 265,
        originalPrice: 310,
        discount: 15,
        weight: "5 kg",
        category: "grocery",
        image: CAT + "flour/aashirvaad-whole-wheat-atta.jpg"
    },
    {
        id: 2,
        name: "India Gate Basmati Rice - Super",
        brand: "India Gate",
        price: 899,
        originalPrice: 999,
        discount: 10,
        weight: "5 kg",
        category: "grocery",
        image: DL + "India Gate Basmati Rice - Super.jpg"
    },
    {
        id: 3,
        name: "Fortune Sunlite Refined Sunflower Oil",
        brand: "Fortune",
        price: 176,
        originalPrice: 210,
        discount: 16,
        weight: "1 Litre",
        category: "grocery",
        image: DL + "Fortune Sunlite Refined Sunflower Oil.jpg"
    },
    {
        id: 4,
        name: "Tata Salt - Iodised",
        brand: "Tata",
        price: 20,
        originalPrice: 28,
        discount: 29,
        weight: "1 kg",
        category: "grocery",
        image: DL + "Tata Salt - Iodised.jpg"
    },
    {
        id: 5,
        name: "Tata Sampann Toor Dal / Arhar Dal",
        brand: "Tata Sampann",
        price: 115,
        originalPrice: 145,
        discount: 21,
        weight: "1 kg",
        category: "grocery",
        image: DL + "Tata Sampann Toor DalArhar Dal.jpg"
    },
    {
        id: 6,
        name: "Aashirvaad Sugar",
        brand: "Aashirvaad",
        price: 42,
        originalPrice: 50,
        discount: 16,
        weight: "1 kg",
        category: "grocery",
        image: DL + "Aashirvaad Sugar.jpg"
    },
    {
        id: 7,
        name: "MDH Garam Masala",
        brand: "MDH",
        price: 85,
        originalPrice: 99,
        discount: 14,
        weight: "100 gm",
        category: "grocery",
        image: CAT + "spices/mdh-garam-masala.jpg"
    },
    {
        id: 8,
        name: "Saffola Gold Oil",
        brand: "Saffola",
        price: 199,
        originalPrice: 235,
        discount: 15,
        weight: "1 Litre",
        category: "grocery",
        image: CAT + "oils/saffola-gold-oil.jpg"
    },
    {
        id: 9,
        name: "Everest Kashmiri Lal Chilli",
        brand: "Everest",
        price: 78,
        originalPrice: 95,
        discount: 18,
        weight: "100 gm",
        category: "grocery",
        image: CAT + "spices/everest-kashmirilal-chilli.jpg"
    },
    {
        id: 10,
        name: "Rajdhani Besan (Gram Flour)",
        brand: "Rajdhani",
        price: 68,
        originalPrice: 80,
        discount: 15,
        weight: "500 gm",
        category: "grocery",
        image: CAT + "flour/rajdhani-besan-gram-flour.jpg"
    },

    // --- VEGETABLES ---
    {
        id: 11,
        name: "Fresh Tomato - Hybrid, Organically Grown",
        brand: "Farm Fresh",
        price: 42,
        originalPrice: 60,
        discount: 30,
        weight: "1 kg",
        category: "vegetables",
        image: DL + "Fresh Tomato - Hybrid, Organically Grown.jpg"
    },
    {
        id: 12,
        name: "Fresh Onion - Premium Quality",
        brand: "Farm Fresh",
        price: 35,
        originalPrice: 50,
        discount: 30,
        weight: "1 kg",
        category: "vegetables",
        image: DL + "Fresh Onion - Premium Quality.jpg"
    },
    {
        id: 13,
        name: "Fresh Potato - Premium",
        brand: "Farm Fresh",
        price: 32,
        originalPrice: 45,
        discount: 29,
        weight: "1 kg",
        category: "vegetables",
        image: DL + "Fresh Potato - Premium.jpg"
    },
    {
        id: 14,
        name: "Green Chilli - Hot & Fresh",
        brand: "Farm Fresh",
        price: 30,
        originalPrice: 40,
        discount: 25,
        weight: "250 gm",
        category: "vegetables",
        image: DL + "Green Chilli - Hot & Fresh.jpg"
    },

    // --- FRUITS ---
    {
        id: 15,
        name: "Apple - Shimla, Premium",
        brand: "Fresho",
        price: 180,
        originalPrice: 220,
        discount: 18,
        weight: "1 kg",
        category: "fruits",
        image: DL + "Apple - Shimla, Premium.jpg"
    },
    {
        id: 16,
        name: "Fresh Banana - Robusta",
        brand: "Farm Fresh",
        price: 49,
        originalPrice: 60,
        discount: 18,
        weight: "1 Dozen",
        category: "fruits",
        image: DL + "Fresh Banana - Robusta.jpg"
    },
    {
        id: 17,
        name: "Pomegranate - Fresh & Juicy",
        brand: "Fresho",
        price: 160,
        originalPrice: 199,
        discount: 20,
        weight: "1 kg (3-4 pcs)",
        category: "fruits",
        image: DL + "Pomegranate - Fresh & Juicy.jpg"
    },

    // --- DAIRY ---
    {
        id: 18,
        name: "Amul Taaza Toned Fresh Milk",
        brand: "Amul",
        price: 29,
        originalPrice: 32,
        discount: 9,
        weight: "500 ml",
        category: "dairy",
        image: DL + "Amul Taaza Toned Fresh Milk.jpg"
    },
    {
        id: 19,
        name: "Amul Pasteurised Butter",
        brand: "Amul",
        price: 56,
        originalPrice: 60,
        discount: 7,
        weight: "100 gm",
        category: "dairy",
        image: DL + "Amul Pasteurised Butter.jpg"
    },
    {
        id: 20,
        name: "Amul Paneer - Fresh",
        brand: "Amul",
        price: 90,
        originalPrice: 105,
        discount: 14,
        weight: "200 gm",
        category: "dairy",
        image: CAT + "dairy/amul-paneer.jpg"
    },
    {
        id: 21,
        name: "Heritage Curd",
        brand: "Heritage",
        price: 30,
        originalPrice: 35,
        discount: 14,
        weight: "400 gm",
        category: "dairy",
        image: CAT + "dairy/heritage-curd.jpg"
    },

    // --- SNACKS ---
    {
        id: 22,
        name: "Lay's Potato Chips - Classic Salted",
        brand: "Lay's",
        price: 20,
        originalPrice: 20,
        discount: 0,
        weight: "52 gm",
        category: "snacks",
        image: DL + "Lay's Potato Chips - Classic Salted.jpg"
    },
    {
        id: 23,
        name: "Maggi 2-Minute Noodles",
        brand: "Maggi",
        price: 14,
        originalPrice: 14,
        discount: 0,
        weight: "70 gm",
        category: "snacks",
        image: CAT + "snacks/maggi-2-minute-noodles.jpg"
    },
    {
        id: 24,
        name: "Haldiram's Aloo Bhujia",
        brand: "Haldiram's",
        price: 75,
        originalPrice: 85,
        discount: 12,
        weight: "200 gm",
        category: "snacks",
        image: CAT + "snacks/haldiram-aloo-bhujia.jpg"
    },
    {
        id: 25,
        name: "Kurkure Masala Munch",
        brand: "Kurkure",
        price: 20,
        originalPrice: 20,
        discount: 0,
        weight: "75 gm",
        category: "snacks",
        image: CAT + "snacks/kurkure-masala-munch.jpg"
    },

    // --- BEVERAGES ---
    {
        id: 26,
        name: "Bru Instant Coffee",
        brand: "Bru",
        price: 110,
        originalPrice: 135,
        discount: 19,
        weight: "50 gm",
        category: "beverages",
        image: DL + "Bru Instant Coffee.jpg"
    },
    {
        id: 27,
        name: "Tata Tea Premium - Rich & Aromatic",
        brand: "Tata Tea",
        price: 129,
        originalPrice: 150,
        discount: 14,
        weight: "250 gm",
        category: "beverages",
        image: DL + "Tata Tea Premium - Rich & Aromatic.jpg"
    },
    {
        id: 28,
        name: "Coca-Cola",
        brand: "Coca-Cola",
        price: 40,
        originalPrice: 40,
        discount: 0,
        weight: "750 ml",
        category: "beverages",
        image: CAT + "beverages/coca-cola.jpg"
    },
    {
        id: 29,
        name: "Bournvita Health Drink",
        brand: "Cadbury",
        price: 235,
        originalPrice: 275,
        discount: 15,
        weight: "500 gm",
        category: "beverages",
        image: DL + "Bournvita Health Drink.jpg"
    },

    // --- HOUSEHOLD ---
    {
        id: 30,
        name: "Surf Excel Matic Top Load Detergent",
        brand: "Surf Excel",
        price: 235,
        originalPrice: 280,
        discount: 16,
        weight: "1 kg",
        category: "household",
        image: DL + "Surf Excel Matic Top Load Detergent.jpg"
    },
    {
        id: 31,
        name: "Vim Dishwash Liquid Gel - Lemon",
        brand: "Vim",
        price: 95,
        originalPrice: 110,
        discount: 14,
        weight: "500 ml",
        category: "household",
        image: DL + "Vim Dishwash Liquid Gel - Lemon.jpg"
    },
    {
        id: 32,
        name: "California Almonds (Badam)",
        brand: "Premium",
        price: 320,
        originalPrice: 399,
        discount: 20,
        weight: "250 gm",
        category: "grocery",
        image: CAT + "dryfruits/california-almonds-badam.jpg"
    },
    {
        id: 33,
        name: "Dabur Honey",
        brand: "Dabur",
        price: 199,
        originalPrice: 250,
        discount: 20,
        weight: "500 gm",
        category: "grocery",
        image: CAT + "sugar/dabur-honey.jpg"
    },
    {
        id: 34,
        name: "Cadbury Dairy Milk",
        brand: "Cadbury",
        price: 50,
        originalPrice: 50,
        discount: 0,
        weight: "50 gm",
        category: "snacks",
        image: CAT + "snacks/cadbury-dairy-milk.jpg"
    },
    {
        id: 35,
        name: "Taj Mahal Tea",
        brand: "Brooke Bond",
        price: 145,
        originalPrice: 170,
        discount: 15,
        weight: "250 gm",
        category: "beverages",
        image: DL + "Taj Mahal Tea.jpg"
    }
];

// ===== CART =====
let cart = JSON.parse(localStorage.getItem('choicekart_cart')) || [];

function saveCart() {
    localStorage.setItem('choicekart_cart', JSON.stringify(cart));
    updateCartUI();
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    const existing = cart.find(item => item.id === productId);
    if (existing) {
        existing.qty += 1;
    } else {
        cart.push({ ...product, qty: 1 });
    }
    saveCart();
    showToast(product.name + ' added to cart!');
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
}

function updateQty(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (!item) return;
    item.qty += change;
    if (item.qty <= 0) removeFromCart(productId);
    else saveCart();
}

function getCartTotal() { return cart.reduce((t, i) => t + i.price * i.qty, 0); }
function getCartCount() { return cart.reduce((c, i) => c + i.qty, 0); }
function getCartSavings() { return cart.reduce((t, i) => t + (i.originalPrice - i.price) * i.qty, 0); }

// ===== UPDATE CART UI =====
function updateCartUI() {
    const count = getCartCount();
    document.querySelectorAll('.cart-badge').forEach(b => {
        b.textContent = count;
        b.style.display = count > 0 ? 'flex' : 'none';
    });

    const cartItems = document.getElementById('cart-items');
    const cartEmpty = document.getElementById('cart-empty');
    const cartFooter = document.getElementById('cart-footer');
    const cartCount = document.getElementById('cart-count');
    if (!cartItems) return;
    if (cartCount) cartCount.textContent = count;

    if (cart.length === 0) {
        cartItems.innerHTML = '';
        if (cartEmpty) cartEmpty.style.display = 'block';
        if (cartFooter) cartFooter.style.display = 'none';
        return;
    }

    if (cartEmpty) cartEmpty.style.display = 'none';
    if (cartFooter) cartFooter.style.display = 'block';

    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div class="cart-item-image">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="cart-item-details">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">\u20B9${item.price} \u00D7 ${item.qty} = \u20B9${(item.price * item.qty).toLocaleString('en-IN')}</div>
            </div>
            <div class="cart-item-qty">
                <button onclick="updateQty(${item.id}, -1)">\u2212</button>
                <span>${item.qty}</span>
                <button onclick="updateQty(${item.id}, 1)">+</button>
            </div>
            <button class="cart-item-remove" onclick="removeFromCart(${item.id})" title="Remove">
                <i class="fas fa-trash-alt"></i>
            </button>
        </div>
    `).join('');

    document.querySelectorAll('.cart-total-amount').forEach(el => {
        el.textContent = '\u20B9' + getCartTotal().toLocaleString('en-IN');
    });
    const savings = document.getElementById('cart-savings');
    if (savings) savings.textContent = '\u20B9' + getCartSavings().toLocaleString('en-IN');

    // Update product card buttons
    document.querySelectorAll('.product-card').forEach(card => {
        const id = parseInt(card.dataset.id);
        const cartItem = cart.find(i => i.id === id);
        const addBtn = card.querySelector('.add-to-cart-btn');
        const qtyCtrl = card.querySelector('.qty-controls');
        const qtySpan = card.querySelector('.qty-value');
        if (cartItem && addBtn && qtyCtrl) {
            addBtn.style.display = 'none';
            qtyCtrl.classList.add('active');
            if (qtySpan) qtySpan.textContent = cartItem.qty;
        } else if (addBtn && qtyCtrl) {
            addBtn.style.display = 'flex';
            qtyCtrl.classList.remove('active');
        }
    });
}

// ===== RENDER PRODUCTS =====
function renderProducts(filterCategory = 'all') {
    const grid = document.getElementById('products-grid');
    if (!grid) return;
    const filtered = filterCategory === 'all' ? products : products.filter(p => p.category === filterCategory);

    grid.innerHTML = filtered.map(product => `
        <div class="product-card" data-id="${product.id}">
            ${product.discount > 0 ? `<span class="product-discount">${product.discount}% OFF</span>` : ''}
            <button class="product-wishlist" onclick="toggleWishlist(this)" title="Add to Wishlist">
                <i class="far fa-heart"></i>
            </button>
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
            </div>
            <div class="product-info">
                <div class="product-brand">${product.brand}</div>
                <div class="product-name">${product.name}</div>
                <div class="product-weight">${product.weight}</div>
                <div class="product-price">
                    <span class="price-current">\u20B9${product.price}</span>
                    ${product.originalPrice > product.price ? `<span class="price-original">\u20B9${product.originalPrice}</span>` : ''}
                    ${product.discount > 0 ? `<span class="price-save">Save \u20B9${product.originalPrice - product.price}</span>` : ''}
                </div>
                <button class="add-to-cart-btn" onclick="addToCart(${product.id})">
                    <i class="fas fa-cart-plus"></i> Add to Cart
                </button>
                <div class="qty-controls">
                    <button onclick="updateQty(${product.id}, -1)">\u2212</button>
                    <span class="qty-value">1</span>
                    <button onclick="updateQty(${product.id}, 1)">+</button>
                </div>
            </div>
        </div>
    `).join('');
    updateCartUI();
}

// ===== WISHLIST =====
function toggleWishlist(btn) {
    btn.classList.toggle('active');
    const icon = btn.querySelector('i');
    if (btn.classList.contains('active')) {
        icon.classList.remove('far'); icon.classList.add('fas');
        showToast('Added to Wishlist \u2764\uFE0F');
    } else {
        icon.classList.remove('fas'); icon.classList.add('far');
        showToast('Removed from Wishlist');
    }
}

// ===== CART SIDEBAR =====
function openCart() {
    document.getElementById('cart-sidebar').classList.add('active');
    document.getElementById('cart-overlay').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeCart() {
    document.getElementById('cart-sidebar').classList.remove('active');
    document.getElementById('cart-overlay').classList.remove('active');
    document.body.style.overflow = '';
}

// ===== TOAST =====
function showToast(message) {
    const existing = document.querySelector('.toast-notification');
    if (existing) existing.remove();
    const toast = document.createElement('div');
    toast.className = 'toast-notification';
    toast.innerHTML = '<i class="fas fa-check-circle"></i> ' + message;
    toast.style.cssText = 'position:fixed;bottom:30px;left:50%;transform:translateX(-50%) translateY(20px);background:#1A1D2E;color:white;padding:14px 28px;border-radius:12px;font-size:14px;font-weight:500;z-index:9999;display:flex;align-items:center;gap:10px;box-shadow:0 8px 30px rgba(0,0,0,0.25);animation:toastSlide 0.4s cubic-bezier(0.4,0,0.2,1) forwards;font-family:Poppins,sans-serif;';
    document.body.appendChild(toast);
    setTimeout(() => { toast.style.animation = 'toastFade 0.3s ease forwards'; setTimeout(() => toast.remove(), 300); }, 2500);
}

const toastStyle = document.createElement('style');
toastStyle.textContent = '@keyframes toastSlide{from{transform:translateX(-50%) translateY(20px);opacity:0}to{transform:translateX(-50%) translateY(0);opacity:1}}@keyframes toastFade{from{transform:translateX(-50%) translateY(0);opacity:1}to{transform:translateX(-50%) translateY(20px);opacity:0}}';
document.head.appendChild(toastStyle);

// ===== SEARCH =====
function handleSearch(e) {
    e.preventDefault();
    const query = document.getElementById('search-input').value.trim().toLowerCase();
    if (!query) { renderProducts('all'); document.getElementById('products-section').scrollIntoView({ behavior: 'smooth' }); return; }
    const filtered = products.filter(p => p.name.toLowerCase().includes(query) || p.brand.toLowerCase().includes(query) || p.category.toLowerCase().includes(query));
    const grid = document.getElementById('products-grid');
    if (filtered.length === 0) {
        grid.innerHTML = '<div style="grid-column:1/-1;text-align:center;padding:80px 20px;color:#9CA3AF;"><i class="fas fa-search" style="font-size:52px;margin-bottom:20px;display:block;"></i><p style="font-size:18px;font-weight:600;color:#5A5D72;margin-bottom:8px;">No products found for "' + query + '"</p><p style="font-size:14px;">Try searching for atta, rice, dal, tomato, milk...</p></div>';
    } else {
        // Temporarily render filtered
        const origProducts = [...products];
        products.length = 0;
        products.push(...filtered);
        renderProducts('all');
        products.length = 0;
        products.push(...origProducts);
    }
    document.getElementById('products-section').scrollIntoView({ behavior: 'smooth' });
}

// ===== CATEGORY FILTER =====
function filterByCategory(category, element) {
    document.querySelectorAll('.category-nav a:not(.all-categories)').forEach(a => a.classList.remove('active'));
    if (element) element.classList.add('active');
    renderProducts(category);
    document.getElementById('products-section').scrollIntoView({ behavior: 'smooth' });
}

// ===== SCROLL EFFECTS =====
function initScrollEffects() {
    const scrollBtn = document.getElementById('scroll-top');
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (scrollBtn) scrollBtn.classList.toggle('visible', window.scrollY > 400);
        if (header) header.classList.toggle('scrolled', window.scrollY > 10);
    });
    if (scrollBtn) scrollBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
    renderProducts('all');
    updateCartUI();
    initScrollEffects();
    document.getElementById('cart-overlay')?.addEventListener('click', closeCart);
    document.getElementById('search-form')?.addEventListener('submit', handleSearch);
    document.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('click', () => { const cat = card.dataset.category; if (cat) filterByCategory(cat); });
    });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeCart(); });

    // === Premium Enhancements Init ===
    initFadeInAnimations();
    initCounterAnimations();
    initOfferAutoRotation();
    initImageLazyLoad();
    initHeaderShrink();
    initProductImageShimmer();
});

// ===== PREMIUM ENHANCEMENT FUNCTIONS =====

// 1. Intersection Observer for Fade-In Animations
function initFadeInAnimations() {
    const fadeElements = document.querySelectorAll('.fade-in-up');
    if (!fadeElements.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px'
    });

    fadeElements.forEach(el => observer.observe(el));
}

// 2. Counter Animation - Numbers Count Up When Visible
function initCounterAnimations() {
    const counters = document.querySelectorAll('.counter-value[data-target]');
    if (!counters.length) return;

    let animated = false;
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !animated) {
                animated = true;
                counters.forEach(counter => animateCounter(counter));
                observer.disconnect();
            }
        });
    }, { threshold: 0.3 });

    counters.forEach(counter => observer.observe(counter));
}

function animateCounter(el) {
    const target = parseInt(el.dataset.target);
    const suffix = el.dataset.suffix || '+';
    const duration = 2000;
    const startTime = performance.now();

    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // Ease out cubic
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = Math.floor(eased * target);
        el.textContent = current.toLocaleString('en-IN') + suffix;
        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }
    requestAnimationFrame(update);
}

// 3. Auto-Rotating Offers - Cards Gently Highlight One at a Time
function initOfferAutoRotation() {
    const offerCards = document.querySelectorAll('.offer-card');
    if (offerCards.length === 0) return;

    let currentIndex = 0;
    setInterval(() => {
        // Remove highlight from all
        offerCards.forEach(card => card.classList.remove('offer-highlight'));
        // Add highlight to current
        offerCards[currentIndex].classList.add('offer-highlight');
        currentIndex = (currentIndex + 1) % offerCards.length;
    }, 3000);
}

// 4. Image Lazy Loading with Fade-In Effect
function initImageLazyLoad() {
    const images = document.querySelectorAll('.product-image img[loading="lazy"]');

    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.style.opacity = '0';
                img.style.transition = 'opacity 0.5s ease';

                if (img.complete) {
                    img.style.opacity = '1';
                    const wrapper = img.closest('.product-image');
                    if (wrapper) wrapper.classList.add('loaded');
                } else {
                    img.addEventListener('load', function() {
                        img.style.opacity = '1';
                        const wrapper = img.closest('.product-image');
                        if (wrapper) wrapper.classList.add('loaded');
                    }, { once: true });
                }

                imageObserver.unobserve(img);
            }
        });
    }, { rootMargin: '100px' });

    images.forEach(img => imageObserver.observe(img));
}

// 5. Header Shrink on Scroll
function initHeaderShrink() {
    const header = document.querySelector('.header');
    if (!header) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 80) {
            header.classList.add('header-shrink');
        } else {
            header.classList.remove('header-shrink');
        }
    });
}

// 6. Product Image Shimmer - Mark Images as Loaded
function initProductImageShimmer() {
    // Observe the products grid for dynamically rendered products
    const grid = document.getElementById('products-grid');
    if (!grid) return;

    const mutationObs = new MutationObserver(() => {
        const productImages = grid.querySelectorAll('.product-image');
        productImages.forEach(wrapper => {
            const img = wrapper.querySelector('img');
            if (!img) return;
            if (img.complete && img.naturalHeight > 0) {
                wrapper.classList.add('loaded');
            } else {
                img.addEventListener('load', () => {
                    wrapper.classList.add('loaded');
                }, { once: true });
                img.addEventListener('error', () => {
                    wrapper.classList.add('loaded');
                }, { once: true });
            }
        });
    });

    mutationObs.observe(grid, { childList: true, subtree: true });

    // Also handle already rendered products
    const existingImages = grid.querySelectorAll('.product-image');
    existingImages.forEach(wrapper => {
        const img = wrapper.querySelector('img');
        if (!img) return;
        if (img.complete && img.naturalHeight > 0) {
            wrapper.classList.add('loaded');
        } else {
            img.addEventListener('load', () => wrapper.classList.add('loaded'), { once: true });
            img.addEventListener('error', () => wrapper.classList.add('loaded'), { once: true });
        }
    });
}
