const params = new URLSearchParams(window.location.search);
const category = params.get("cat");

document.getElementById("categoryTitle").textContent = category;
document.getElementById("breadCategory").textContent = category;

const container = document.getElementById("subcategories");

// Получаем все подкатегории без повторов
const subs = [...new Set(
    products
        .filter(p => p.category === category)
        .map(p => p.subcategory)
)];

container.innerHTML = "";

subs.forEach(sub => {

    // Ищем любой товар из этой подкатегории, чтобы взять его фото
    const firstProduct = products.find(
        p => p.category === category && p.subcategory === sub
    );

    container.innerHTML += `
        <a class="subcategory-card"
        href="catalog.html?cat=${encodeURIComponent(category)}&sub=${encodeURIComponent(sub)}">

            <img src="${firstProduct.preview}" alt="${sub}">

            <h3>${sub}</h3>

        </a>
    `;

});