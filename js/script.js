const phoneButton = document.getElementById("copyPhone");

phoneButton.addEventListener("click", async () => {

    const number = "+7 913 005 03 18";

    try{

        await navigator.clipboard.writeText(number);

        phoneButton.innerHTML = "✅ Номер скопирован!";

        setTimeout(()=>{

            phoneButton.innerHTML="📞 Скопировать номер";

        },2500);

    }

    catch{

        alert("Не удалось скопировать номер.");

    }

});
///
let products = [];

const container = document.getElementById("products");

async function loadProducts(){

    const response = await fetch("data/products.json");

    products = await response.json();

    drawProducts(products);

}

function drawProducts(list){

    container.innerHTML = "";

    list.forEach(product=>{

        container.innerHTML += `

<div class="card">

<img src="${product.preview}" alt="${product.name}">

<div class="card-body">

<h3>${product.name}</h3>

<p class="price">${product.price}</p>

<a class="more" href="product.html?id=${product.id}">

Подробнее

</a>

</div>

</div>

`;

    });

}

loadProducts();