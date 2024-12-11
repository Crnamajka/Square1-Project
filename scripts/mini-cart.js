
function openMiniCart() {
    document.body.classList.add('mini-cart-open');
}

function closeMiniCart() {
    document.body.classList.remove('mini-cart-open');
}

document.getElementById('open-cart-btn').addEventListener('click', openMiniCart);
document.getElementById('close-cart-btn').addEventListener('click', closeMiniCart);