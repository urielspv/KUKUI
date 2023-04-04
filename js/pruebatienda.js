// cambia el precio en base al boton
const tamaño40 = document.querySelectorAll('.tamaño40');
// console.log(tamaño40);
const tamaño80 = document.querySelectorAll('.tamaño80');
// console.log(tamaño80);

tamaño40.forEach(function(button) {
  button.addEventListener('click', function(event) {
      const precio = event.target.closest('.card').querySelector('#precio');
      precio.textContent = 60;
  });
});
tamaño80.forEach(function(button) {
  button.addEventListener('click', function(event) {
      const precio = event.target.closest('.card').querySelector('#precio');
      precio.textContent = 120;
  });
});


// Selecciona todos los botones de "Comprar"
const buyButtons = document.querySelectorAll('.buy-btn');
// console.log(buyButtons);
// Agrega un evento de clic a cada botón

buyButtons.forEach(function(button) {
  button.addEventListener('click', function(event) {

    const radioName = event.target.closest('.card').querySelector('input').getAttribute('name');
    const radios = document.getElementsByName(radioName);
    let size;
    for (let i = 0; i < radios.length; i++) {
      if (radios[i].checked) {
        size = radios[i].value;
        break;
      }
    }


    // Obtiene la información del producto
    const product = {
      id: `${event.target.closest('.card').getAttribute('id')}-${size}`,
      img: event.target.closest('.card').querySelector('img').getAttribute('src'),
      name: event.target.parentNode.querySelector('h5').textContent,
      type: event.target.parentNode.querySelector('h6').textContent,
      size: size,
      price: event.target.closest('.card').querySelector('#precio').textContent,
      // otras propiedades del producto
    };
    // console.log(product.id);
    // Agrega el producto al carrito de compra
    addToCart(product);
   console.log(product.id);
  });
});

// const miImagen = document.getElementById('img__aloe').getAttribute('src');
// console.log(miImagen);






// Función para agregar un producto al carrito de compra
function addToCart(product) {
  // Actualiza el icono del carrito con un contador al agregar items
  let carritoContador = document.getElementById('carrito__contador');
  carritoContador.textContent ++;
  
  // Verifica si el producto ya está en el carrito
  const cartItems = document.getElementById('cart-items');
  const cartItemElements = cartItems.getElementsByTagName('li');
  for (let i = 0; i < cartItemElements.length; i++) {
    const cartItemElement = cartItemElements[i];
    const existingProduct = cartItemElement.getAttribute('id');
    if (existingProduct === product.id) {
      // Actualiza la cantidad del producto
      const quantityElement = cartItemElement.querySelector('.quantity');
      let quantity = parseInt(quantityElement.textContent);
      quantity++;
      quantityElement.textContent = quantity;
      return;
    }
  }

    // const carritoLista = document.getElementById('cart-items');
    // console.log("carrito:!!!")
    // console.log(carritoLista);
    cartItems.innerHTML += 
    `
    <li id="${product.id}" class="list-group-item ">
           <div class="fw-bold d-flex justify-content-between">
             <p class="p-0 m-0">${product.type} ${product.name} ${product.size}</p>
             <a class="cart-items__delete text-muted"><span class="material-symbols-outlined ">
             delete
             </span></a>
             </div>
           <div class="ms-2 me-auto d-flex align-items-center justify-content-between">
             <img src="${product.img}" alt="" style="width: 100px; height: 100px;">
               <h5>${product.price}</h5> 
               <h5 class="quantity">1</h5>
           </div>
         </li>
    `

}


const carrito = document.querySelectorAll('.cart-items__delete');



deleteButtons.forEach(function(a) {
  a.addEventListener('click', function(event) {
    alert('hola');




  });
});


