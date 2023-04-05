// Obtener el formulario
const form = document.getElementById('myForm');

// Manejar el evento submit del formulario
form.addEventListener('submit', function(event) {
  // Prevenir que el formulario se envíe
  event.preventDefault();

  // Obtener los valores de los campos del formulario
  const adireccion = document.getElementById('adireccion').value;
  const bcolonia = document.getElementById('bcolonia').value;
  const cciudad = document.getElementById('cciudad').value;
  const destado = document.getElementById('destado').value;
  const eCP = document.getElementById('eCP').value;
  const freferencias = document.getElementById('freferencias').value;

  // Crear un objeto y asignar los valores de los campos
  const formData = {};
  formData.adireccion = adireccion;
  formData.bcolonia = bcolonia;
  formData.cciudad = cciudad;
  formData.destado = destado;
  formData.eCP = eCP;
  formData.freferencias = freferencias;

  
  // Mostrar el objeto en la consola
  console.log(formData);
});



// Obtener el formulario
const form2 = document.getElementById('myForm2');

// Manejar el evento submit del formulario
form.addEventListener('submit', function(event) {
  // Prevenir que el formulario se envíe
  event.preventDefault();

  // Obtener los valores de los campos del formulario
  const nombre = document.getElementById('nombre').value;
  const apellidos = document.getElementById('apellidos').value;
  const fecha = document.getElementById('fecha').value;
  const celular = document.getElementById('celular').value;
  const email = document.getElementById('email').value;


  // Crear un objeto y asignar los valores de los campos
  const formData = {};
  formData.nombre = nombre;
  formData.apellidos = apellidos;
  formData.fecha = fecha;
  formData.celular = celular;
  formData.email = email;


  // Mostrar el objeto en la consola
  console.log(formData);
});


// Obtener el formulario
const form3 = document.getElementById('myForm3');

// Manejar el evento submit del formulario
form.addEventListener('submit', function(event) {
  // Prevenir que el formulario se envíe
  event.preventDefault();

  // Obtener los valores de los campos del formulario
  const tarjeta = document.getElementById('tarjeta').value;
  const mmaa = document.getElementById('mmaa').value;
  const cvv = document.getElementById('cvv').value;
  const direccion2 = document.getElementById('direccion2').value;
  const ntarjeta = document.getElementById('ntarjeta').value;


  // Crear un objeto y asignar los valores de los campos
  const formData = {};
  formData.tarjeta = tarjeta;
  formData.mmaa = mmaa;
  formData.cvv = cvv;
  formData.direccion2 = direccion2;
  formData.ntarjeta = ntarjeta;


  // Mostrar el objeto en la consola
  console.log(formData);
});






