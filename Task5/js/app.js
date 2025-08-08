const products = [
    { id: 1, name: "Classic Leather Handbag", price: 2499, image: "images/handbag1.jpg", description: "Elegant leather handbag for everyday use." },
    { id: 2, name: "Stylish Tote Bag", price: 1899, image: "images/handbag2.jpg", description: "Spacious tote bag with a modern design." },
    { id: 3, name: "Mini Shoulder Bag", price: 1299, image: "images/handbag3.jpg", description: "Compact and trendy shoulder bag for casual outings." },
    { id: 4, name: "Designer Party Handbag", price: 3499, image: "images/handbag4.jpg", description: "Shiny and elegant handbag for parties." },
    { id: 5, name: "Luxury Watch", price: 4999, image: "images/watch1.jpg", description: "Premium watch with stainless steel strap." },
    { id: 6, name: "Casual Watch", price: 2299, image: "images/watch2.jpg", description: "Simple strap watch for everyday wear." },
    { id: 7, name: "Modern Leather Watch", price: 5499, image: "images/watch3.jpg", description: "Simple leather strap watch for occasional wear." },
    { id: 8, name: "Casual Watch", price: 3999, image: "images/watch4.jpg", description: "Classic rosy watch with minimal design." },
    { id: 9, name: "Pearl Drop Earrings", price: 999, image: "images/earring1.jpg", description: "Delicate pearl drop earrings for a graceful look." },
    { id: 10, name: "Golden Hoop Earrings", price: 799, image: "images/earring2.jpg", description: "Trendy golden hoop earrings for casual wear." },
    { id: 11, name: "Diamond Stud Earrings", price: 1499, image: "images/earring3.jpg", description: "Sparkling diamond stud earrings for special events." },
    { id: 12, name: "White Sports Sneakers", price: 2999, image: "images/sneakers1.jpg", description: "Comfortable white sneakers for sports and casual wear." },
    { id: 13, name: "High-Top Sneakers", price: 3199, image: "images/sneakers2.jpg", description: "Stylish high-top sneakers with premium material." },
    { id: 14, name: "Classic Red Sneakers", price: 2799, image: "images/sneakers3.jpg", description: "All-red sneakers with a timeless design." },
    { id: 15, name: "Luxury Lipstick", price: 599, image: "images/cosmetics.jpg", description: "Rich color lipstick with long-lasting formula." },
    { id: 16, name: "Eyeshadow Palette", price: 1199, image: "images/cosmetics1.jpg", description: "Vibrant eyeshadow palette with 12 shades." },
    { id: 17, name: "Makeup Foundation", price: 899, image: "images/cosmetics2.jpg", description: "Smooth matte finish foundation for all skin types." },
    { id: 18, name: "Moisturizing Cream", price: 499, image: "images/skincare.jpg", description: "Hydrating cream for soft and smooth skin." },
    { id: 19, name: "Elegant Gold Necklace", price: 2199, image: "images/necklace.jpg", description: "Beautiful gold necklace for weddings and parties." },
    { id: 20, name: "Silver Diamond Ring", price: 1799, image: "images/ring.jpg", description: "Sparkling silver ring with diamond stone." }
];
const productContainer = document.getElementById("product-list");
if (productContainer) {
    productContainer.innerHTML = "";
    products.forEach(product => {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p class="price">₹${product.price}</p>
            <p class="description">${product.description}</p>
            <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
        `;

        productCard.querySelector(".add-to-cart").addEventListener("click", () => {
            let cart = JSON.parse(localStorage.getItem("cart")) || [];
            let existingProduct = cart.find(item => item.id === product.id);

            if (existingProduct) {
                existingProduct.quantity += 1;
            } else {
                cart.push({ ...product, quantity: 1 });
            }

            localStorage.setItem("cart", JSON.stringify(cart));
            alert(`${product.name} added to cart!`);
        });

        productContainer.appendChild(productCard);
    });
}
