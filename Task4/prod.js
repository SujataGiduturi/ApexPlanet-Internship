const products = [
  { name: "Smartphone", category: "Electronics" },
  { name: "Laptop", category: "Electronics" },
  { name: "T-Shirt", category: "Clothing" },
  { name: "Jeans", category: "Clothing" },
  { name: "Headphones", category: "Electronics" },
  { name: "Jacket", category: "Clothing" }
];

const container = document.getElementById("productContainer");
const filter = document.getElementById("categoryFilter");

function displayProducts(category) {
  container.innerHTML = "";

  const filtered = category === "All"
    ? products
    : products.filter(p => p.category === category);

  filtered.forEach(p => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `<h3>${p.name}</h3><p>${p.category}</p>`;
    container.appendChild(card);
  });
}

// Event Listener
filter.addEventListener("change", () => {
  displayProducts(filter.value);
});

// Initial load
displayProducts("All");
