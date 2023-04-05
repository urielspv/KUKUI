let productos;
let carrito = []; // arreglo para almacenar los productos en el carrito
const URL_MAIN = 'https://back-kukui-production.up.railway.app/kukui/tienda/'; //URL a donde se hace la petición

function addItems(div_Productos) {
  fetch(URL_MAIN, {
    method: 'get'
  }).then(function (response) {
    response.json().then(function (json) {
      productos = json;
      Array.from(json).forEach((p, index) => {
        div_Productos.innerHTML += 
        `<div class="col">
          <div class="card">
            <img id="img__aloe" src="../img/FotosTienda/${p.src_imagen}" class="card-img-top card-tienda__img" alt="...">
            <div class="card-body">
              <h5 class="card-title">${p.nombre}</h5>
              <h6 class="card-subtitle mb-2 text-muted">${p.categoria}</h6>
              <span class="d-flex">$<p class="card-text precio">${p.precio}</p></span>
              <a class="btn btn-primary buy-btn agregar-carrito" data-id="${p.id}">Añadir al carrito</a>
            </div>
          </div>
        </div>`;
      });

      // Agregar evento de clic a los botones "Añadir al carrito"
      let btnsAgregarCarrito = document.querySelectorAll('.agregar-carrito');
      btnsAgregarCarrito.forEach((btnAgregarCarrito) => {
        btnAgregarCarrito.addEventListener('click', () => {
          // Obtener el ID del producto que se agregará al carrito
          let idProducto = btnAgregarCarrito.getAttribute('data-id');
          // Buscar el producto correspondiente en el arreglo "productos"
          let producto = productos.find(p => p.id === idProducto);
          // Agregar el producto al carrito
          let item = {
            id: producto.id,
            nombre: producto.nombre,
            precio: producto.precio,
            cantidad: 1
          };
          carrito.push(item);
          // Actualizar la vista del carrito
          actualizarCarrito();
        });
      });

    });
  }).catch(function (err) {
    console.log(err);
  });
}

function actualizarCarrito() {
  let divCarrito = document.getElementById('div_carrito');
  divCarrito.innerHTML = '';
  // Recorrer el arreglo "carrito" y agregar cada producto a la vista del carrito
  carrito.forEach((item) => {