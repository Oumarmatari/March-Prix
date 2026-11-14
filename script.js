const { markets, products } = window.marketPrixData;

const productGrid = document.querySelector("#product-grid");
const searchInput = document.querySelector("#search-input");
const categoryFilter = document.querySelector("#category-filter");
const sortSelect = document.querySelector("#sort-select");
const resultCount = document.querySelector("#result-count");
const emptyState = document.querySelector("#empty-state");

function formatPrice(price) {
  return `${new Intl.NumberFormat("fr-FR").format(price)} FCFA`;
}

function getLowestPrice(product) {
  return [...product.prices].sort((a, b) => a.price - b.price)[0];
}

function renderProducts() {
  const searchTerm = searchInput.value.trim().toLocaleLowerCase("fr");
  const selectedCategory = categoryFilter.value;
  const visibleProducts = products
    .filter((product) => {
      const matchesSearch = product.name.toLocaleLowerCase("fr").includes(searchTerm);
      const matchesCategory = selectedCategory === "tous" || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      if (sortSelect.value === "price") {
        return getLowestPrice(a).price - getLowestPrice(b).price;
      }
      return a.name.localeCompare(b.name, "fr");
    });
  productGrid.innerHTML = visibleProducts.map((product, index) => {
    const cheapest = getLowestPrice(product);
    const cheapestMarket = markets.find((market) => market.id === cheapest.marketId);

    return `
      <article class="product-card" style="--card-index: ${index}">
        <div class="product-top">
          <img class="product-emoji product-photo" src="${product.image}" alt="Photo de ${product.name}" loading="lazy" decoding="async">
          <div class="product-meta">
            <h3>${product.name}</h3>
            <p>${product.category}</p>
          </div>
        </div>
        <div class="best-price">
          <div>
            <span class="best-price-label">Meilleur prix • ${cheapestMarket.name}</span>
            <strong class="price">${formatPrice(cheapest.price)}<span class="price-unit">/ ${product.unit}</span></strong>
          </div>
          <span class="best-market">Bon plan</span>
        </div>
        <div class="market-prices">
          ${product.prices.map((entry) => `
            <div class="market-price">
              ${markets.find((market) => market.id === entry.marketId).name}
              <strong>${formatPrice(entry.price)}</strong>
            </div>
          `).join("")}
        </div>
      </article>
    `;
  }).join("");

  resultCount.textContent = `${visibleProducts.length} produit${visibleProducts.length > 1 ? "s" : ""} à comparer`;
  emptyState.hidden = visibleProducts.length > 0;
  productGrid.hidden = visibleProducts.length === 0;
}

searchInput.addEventListener("input", renderProducts);
categoryFilter.addEventListener("change", renderProducts);
sortSelect.addEventListener("change", renderProducts);
document.querySelector("#year").textContent = new Date().getFullYear();

renderProducts();

const revealElements = document.querySelectorAll(
  ".comparison .section-heading, .comparison .filters, .comparison .result-count, .tip-section",
);

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealElements.forEach((element) => {
    element.classList.add("reveal-on-scroll");
    revealObserver.observe(element);
  });
} else {
  revealElements.forEach((element) => element.classList.add("is-visible"));
}

if ("serviceWorker" in navigator && window.isSecureContext) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./service-worker.js")
      .catch((error) => console.error("Impossible d’enregistrer le service worker :", error));
  });
}
