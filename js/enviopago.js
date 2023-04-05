const myForm = document.getElementById("myForm"); // obtiene el elemento del formulario

// selecciona todos los elementos de entrada del formulario
const inputs = myForm.querySelectorAll("input");

// crea un objeto para almacenar los datos del formulario
const formData = {};

// itera a través de los elementos de entrada y agrega sus valores al objeto formData
inputs.forEach(input => {
  formData[input.name] = input.value;
});

console.log(formData); // muestra los datos del formulario en la consola
