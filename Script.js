function shopNow() {
    alert("Redirecting to shop page...");
    window.location.href = "#products"; // You can link to your shop page later
}
let cartItems = [];

function addToCart(productName, price) {
    cartItems.push({ name: productName, price: price });
    displayCart();
}

function displayCart() {
    const cartList = document.getElementById("cart");
    cartList.innerHTML = "";

    cartItems.forEach(item => {
        let li = document.createElement("li");
        li.textContent = `${item.name} - $${item.price}`;
        cartList.appendChild(li);
    });
}
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Function to update cart count in the header
function updateCartCount() {
    const cartCount = document.getElementById("cart-count");
    if (cartCount) {
        cartCount.textContent = cart.length;
    }
}

// Listen for clicks on all Add to Cart buttons
document.querySelectorAll(".add-to-cart").forEach(button => {
    button.addEventListener("click", () => {
        const name = button.getAttribute("data-name");
        const price = button.getAttribute("data-price");

        // Add product to cart array
        cart.push({ name, price });

        // Save updated cart to localStorage
        localStorage.setItem("cart", JSON.stringify(cart));

        // Update cart count
        updateCartCount();

        alert(`${name} added to cart!`);
    });
});

updateCartCount();
