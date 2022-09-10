let cartProducts = document.querySelector(".cart__products");

document.addEventListener("click", e => {
    if(e.target.classList.contains("product__quantity-control_dec")) {
        if(e.target.nextElementSibling.innerText > 1) {
            e.target.nextElementSibling.innerText--
        }
    }
    if(e.target.classList.contains("product__quantity-control_inc")) {
        e.target.previousElementSibling.innerText++
    }
    if(e.target.classList.contains("product__add")) {
        const quantityProduct = e.target.previousElementSibling.querySelector(".product__quantity-value").innerText;
        const id = e.target.closest(".product").dataset.id;
        const img = e.target.closest(".product").querySelector("img").src;
        if (cartProducts.length !== 0 && cartProducts.querySelector(`[data-id="${id}"]`)) {
            cartProducts.querySelector(`[data-id="${id}"]`).querySelector('.cart__product-count').innerText = Number(cartProducts.querySelector(`[data-id="${id}"]`).querySelector('.cart__product-count').innerText) + Number(quantityProduct);
        } else {
            const product = `<div class="cart__product" data-id="${id}">
                                    <img class="cart__product-image" src="${img}">
                                    <div class="cart__product-count">${quantityProduct}</div>
                                    </div>`;

            cartProducts.insertAdjacentHTML("beforeend", product);
        }
    }
}) 