// Obtener el formulario
const form = document.getElementById('myForm');

// Manejar el evento submit del formulario
form.addEventListener('submit', function(event) {
  // Prevenir que el formulario se envíe
  event.preventDefault();

  // Obtener los valores de los campos del formulario
  const direccion = document.getElementById('direccion').value;
  const colonia = document.getElementById('colonia').value;
  const ciudad = document.getElementById('ciudad').value;
  const estado = document.getElementById('estado').value;
  const CP = document.getElementById('CP').value;
  const referencias = document.getElementById('referencias').value;

  // Crear un objeto y asignar los valores de los campos
  const formData = {};
  formData.direccion = direccion;
  formData.colonia = colonia;
  formData.ciudad = ciudad;
  formData.estado = estado;
  formData.CP = CP;
  formData.referencias = referencias;

  // Mostrar el objeto en la consola
  console.log(formData);
});

