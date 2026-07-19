const params = new URLSearchParams(window.location.search);

const category = params.get("cat");
const subcategory = params.get("sub");

document.getElementById("title").textContent = subcategory;

document.getElementById("subcategoryName").textContent = subcategory;

const categoryLink = document.getElementById("categoryLink");

categoryLink.href = "category.html?cat=" + encodeURIComponent(category);

categoryLink.textContent = category;

const container = document.getElementById("products");

const list = products.filter(product =>

    product.category === category &&
    product.subcategory === subcategory

);

list.forEach(product=>{

container.innerHTML += `

<div class="card">

<img src="${product.preview}" alt="${product.name}">

<div class="card-body">

<h3>${product.name}</h3>

<p>${product.description}</p>

<div class="price">${product.price}</div>

<a class="more" href="product.html?id=${product.id}&cat=${encodeURIComponent(product.category)}&sub=${encodeURIComponent(product.subcategory)}">
Подробнее
</a>

</div>

</div>

`;

});