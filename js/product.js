const params = new URLSearchParams(window.location.search);
const category = params.get("cat");
const subcategory = params.get("sub");
const id = Number(params.get("id"));

const product = products.find(p => p.id === id);

if (!product) {

    document.body.innerHTML = "<h1>Товар не найден</h1>";

} else {

    document.getElementById("title").textContent = product.name;

    document.getElementById("price").textContent = product.price;

    document.getElementById("description").textContent = product.description;

    document.getElementById("mainImage").src = product.images[0];

    let specsHtml = "";

    for (const key in product.specs) {
        specsHtml += `<p><b>${key}:</b> ${product.specs[key]}</p>`;
    }

    document.getElementById("sizes").innerHTML = specsHtml;

    const thumbs = document.getElementById("thumbs");

    thumbs.innerHTML = "";

    product.images.forEach(img => {

        thumbs.innerHTML += `<img src="${img}" class="thumb">`;

    });

    document.querySelectorAll(".thumb").forEach(img => {

        img.onclick = function () {

            document.getElementById("mainImage").src = this.src;

        }

    });

}
const backButton = document.getElementById("backButton");

if (backButton && category && subcategory) {

    backButton.href =
        `catalog.html?cat=${encodeURIComponent(category)}&sub=${encodeURIComponent(subcategory)}`;

}