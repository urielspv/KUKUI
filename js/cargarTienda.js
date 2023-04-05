//FETCH PARA METODO GET

let productos;
// Aquí se debe cambiar el URL del servicio en el BackEnd
const URL_MAIN = 'https://back-kukui-production.up.railway.app/kukui/tienda/'; //URL a donde se hace la petición
function addItems(div_Productos) { //div_Productos es el div donde se va a agregar los productos



    fetch(URL_MAIN, {
        method: 'get' //tipo de método
    }).then(function (response) {//response es la respuesta del servidor
        response.json().then(function (json) { //json es el objeto que se obtiene del servicio
            console.log(json); //imprime el json
            console.log(json.length); //imprime el tamaño del json
            productos = json; //se guarda el json en la variable productos
            Array.from(json).forEach((p, index) => { //Toma el JSON, si es un arreglo haces el forEach. Si no lo es, mandas el error.
                div_Productos.innerHTML +=
                    `<div class="col">
                      <div class="card rounded-5" id="tienda__card${p.idProducto}">
                          <img src="../img/FotosTienda/${p.src_imagen}" class="rounded-5 card-img-top card-tienda__img"
                              alt="...">
                          <div class="card-body bottomcard rounded-top rounded-5">
                              <h5 class="letrablanca ">${p.nombre}</h5>
                              <h6 class="card-subtitle mb-2 letrablanca">${p.categoria}</h6>
      
                              <span class="d-flex precie">$<p class="card-text precio">${p.precio}</p></span>
                              <a class="btn botoncarrite buy-btn agregar-carrito" data-id="${p.idProducto}">
                                  <span class="material-symbols-outlined">shopping_cart </span> Añadir al carrito
                                </a>
                                
                          </div>
                      </div>
                  </div>`;

            }); // foreach para agregar los productos al div del HTML
        });//then
    }).catch(function (err) { //si hay un error
        console.log(err); //imprime el error
    });
    console.log(document.getElementById("div_Productos")); //imprime el div donde se va a agregar los productos

}// addItems

window.addEventListener("load", function () { //cuando se cargue la página
    let div = document.getElementById("div_Productos"); //div donde se va a agregar los productos
    addItems(div); //se llama a la función addItems

});

