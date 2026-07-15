const products = [
  {
      id: 6,
      name: "Капри",
      category: "Модульные гостинные",
      price: "8000",
      image: "images/products/photo_2026-02-28_19-57-04.jpg",
      description: "Характеристики: Направляющие-Шариковые, Размер Ш*В*Д(Г) - 2100х1820х420, Материал - ЛДСП/ЛДСП, Размер ниши под телевизор - мм975х825х425, Гарантия - 12 месяцев, Цвет - любой на выбор"
    }
  ];
  
  const container = document.getElementById("products");
  
  function drawProducts(list) {
  
      container.innerHTML = "";
  
      list.forEach(product => {
  
          container.innerHTML += `
  
  <div class="card">
  
  <img src="${product.image}" alt="${product.name}">
  
  <div class="card-body">
  
  <h3>${product.name}</h3>
  
  <p>${product.description}</p>
  
  <div class="price">${product.price}</div>
  
  <a class="more" href="product.html?id=${product.id}">
  Подробнее
  </a>
  
  </div>
  
  </div>
  
  `;
  
      });
  
  }
  
  drawProducts(products);
  
  
function filterProducts(category){

    if(category==="Все"){
    
    drawProducts(products);
    return;
    
    }
    
    const filtered = products.filter(product=>product.category===category);
    
    drawProducts(filtered);
    
    }
    const phoneButton = document.getElementById("copyPhone");

if(phoneButton){

    phoneButton.addEventListener("click", function(){

        const phone = document.getElementById("phoneNumber").innerText;

        if(navigator.clipboard){

            navigator.clipboard.writeText(phone);

        }else{

            const input=document.createElement("input");
            input.value=phone;

            document.body.appendChild(input);

            input.select();

            document.execCommand("copy");

            input.remove();

        }

        phoneButton.innerHTML="✅ Номер скопирован";

        setTimeout(function(){

            phoneButton.innerHTML="📋 Скопировать номер";

        },2000);

    });

}