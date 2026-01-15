
// add product detail DOM binding layer (#2)
const UNIT_PRICE = 17500; 

function bindSeller(name) {
    const seller = document.querySelector('.seller');
    if (seller) seller.textContent = name;
}

function bindProductName(name) {
    const productName = document.querySelector('.product-name');
    const seoProductName = document.getElementById('seo-product-name');
    if (productName) productName.textContent = name;
    if (seoProductName) seoProductName.textContent = name;
}

function bindPrice(price) {
    const lPriceList = document.querySelectorAll('.L-price');
    lPriceList.forEach((el) => {
        el.innerHTML = `<span class="L-price_value">${price.toLocaleString()}</span>`;
    });
}

function bindShipping(method, fee) {
    const shipping = document.getElementById('shipping');
    if (shipping) shipping.textContent = `${method} / ${fee}`;
}

function bindImage(url) {
    const img = document.querySelector('.product-image');
    if (img) {
        img.src = url;
        img.alt = '상품이미지';
    }
}

// add quantity and price state engine for product detail (#2)
const MAX_QTY = 10;
const MIN_QTY = 1;
let amount = MIN_QTY;

const plusBtn = document.querySelector('.plus');
const minusBtn = document.querySelector('.minus');
const amountDisplay = document.querySelector('.current-amount');
const quantity = document.querySelector('.quantity');
const receipt = document.querySelector('.totalPrice'); 

function updateUI() {
    if (amountDisplay) amountDisplay.innerText = amount;
    if (quantity) quantity.innerText = amount;

    if (receipt) {
        const totalPrice = amount * UNIT_PRICE;
        receipt.textContent = totalPrice.toLocaleString();
    }

    const isMax = amount >= MAX_QTY;
    const isMin = amount <= MIN_QTY;

    plusBtn?.classList.toggle('is-disabled', isMax);
    minusBtn?.classList.toggle('is-disabled', isMin);
}

plusBtn?.addEventListener('click', () => {
    if (amount < MAX_QTY) {
        amount++;
        updateUI();
    }
});

minusBtn?.addEventListener('click', () => {
    if (amount > MIN_QTY) {
        amount--;
        updateUI();
    }
});

