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
    // Obtiene la información del producto
    const product = {
      id: event.target.closest('.card').getAttribute('id'),
      img:event.target.closest('.card').querySelector('img').getAttribute('src'),
      name: event.target.parentNode.querySelector('h5').textContent,
      size: event.target,
      price: event.target.closest('.card').querySelector('#precio').textContent,
      // otras propiedades del producto
    };
    console.log(product.id);
    // Agrega el producto al carrito de compra
    addToCart(product);
    console.log(product);
  });
});

// const miImagen = document.getElementById('img__aloe').getAttribute('src');
// console.log(miImagen);

// Función para agregar un producto al carrito de compra
function addToCart(product) {
  let carritoContador = document.getElementById('carrito__contador');
  carritoContador.textContent ++;
  console.log(carritoContador.textContent);
  
    const carritoBody = document.getElementById('carrito__body');
    carritoBody.innerHTML += 
    `<tr>
    <th scope="row"><img src="${product.img}" class="img-fluid" style="min-width:100px ; min-height:100px ;" alt=""></th>
    <td>${product.name}</td>
    <td>$${product.price}</td>
    <td>1</td>
    </tr>
    `
    console.log(carritoBody)

}

