// Variables
const carrito = document.querySelector('#carrito');
// const listaCursos = document.querySelector('#lista-cursos');
const contenedorCarrito = document.querySelector('#lista-carrito');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito'); 
let articulosCarrito = [];
const buyButtons = document.querySelectorAll('.buy-btn');
// Listeners
cargarEventListeners();

function cargarEventListeners() {
     // Dispara cuando se presiona "Agregar Carrito"
    //  listaCursos.addEventListener('click', agregarCurso);
    buyButtons.forEach(function(button) {
        button.addEventListener('click', agregarCurso)});
      
     // Cuando se elimina un curso del carrito
     carrito.addEventListener('click', eliminarCurso);

     // Al Vaciar el carrito
     vaciarCarritoBtn.addEventListener('click', vaciarCarrito);

}

// Funciones
// Función que añade el curso al carrito
function agregarCurso(e) {
     e.preventDefault();
     let carritoContador = document.getElementById('carrito__contador');
     carritoContador.textContent ++;
     // Delegation para agregar-carrito
     if(e.target.classList.contains('agregar-carrito')) {
          const curso = e.target.closest('.card');
          // Enviamos el curso seleccionado para tomar sus datos
          leerDatosCurso(curso);
     }
}

// Lee los datos del curso
function leerDatosCurso(curso) {
    const radioName = curso.querySelector('input').getAttribute('name');
    const radios = document.getElementsByName(radioName);
    let size;
    for (let i = 0; i < radios.length; i++) {
      if (radios[i].checked) {
        size = radios[i].value;
        break;
      }
    }
     const infoCurso = {
          imagen: curso.querySelector('img').src,
          titulo: curso.querySelector('h5').textContent,
          tipo: curso.querySelector('h6').textContent,
          precio: curso.querySelector('.precio').textContent,
          tamaño: size,
          id: `${curso.querySelector('a').getAttribute('data-id')}-${size}`, 
          cantidad: 1
     }


     console.log(infoCurso.id);

     if( articulosCarrito.some( curso => curso.id === infoCurso.id ) ) { 
          const cursos = articulosCarrito.map( curso => {
               if( curso.id === infoCurso.id ) {
                    curso.cantidad++;
                     return curso;
                } else {
                     return curso;
             }
          })
          articulosCarrito = [...cursos];
     }  else {
          articulosCarrito = [...articulosCarrito, infoCurso];
     }

     // console.log(articulosCarrito)

     

     // console.log(articulosCarrito)
     carritoHTML();
}

// Elimina el curso del carrito en el DOM
function eliminarCurso(e) {
     e.preventDefault();
     if(e.target.classList.contains('borrar-curso') ) {
          // e.target.parentElement.parentElement.remove();
          const cursoId = e.target.getAttribute('data-id')
          
          // Eliminar del arreglo del carrito
          articulosCarrito = articulosCarrito.filter(curso => curso.id !== cursoId);

          carritoHTML();
     }
}


// Muestra el curso seleccionado en el Carrito
function carritoHTML() {

     vaciarCarrito();

     articulosCarrito.forEach(curso => {
          const li = document.createElement('li');
          li.setAttribute('class','list-group-item'); 
          li.innerHTML =
          `<div class="fw-bold d-flex justify-content-between">
                   <p class="p-0 m-0">${curso.tipo} ${curso.titulo} ${curso.tamaño}</p>
                   <a href="#" class="borrar-curso material-symbols-outlined cart-items__delete" data-id="${curso.id}">delete</a>
                   </div>
                 <div class="ms-2 me-auto d-flex align-items-center justify-content-between">
                   <img src="${curso.imagen}" alt="" style="width: 100px; height: 100px;">
                     <h5>$${curso.precio}</h5> 
                     <h5 class="quantity">${curso.cantidad}</h5>
                 </div>`



          contenedorCarrito.appendChild(li);
     });

}

// Elimina los cursos del carrito en el DOM
function vaciarCarrito() {
     // forma lenta
     // contenedorCarrito.innerHTML = '';


     // forma rapida (recomendada)
     while(contenedorCarrito.firstChild) {
          contenedorCarrito.removeChild(contenedorCarrito.firstChild);
      }
}



