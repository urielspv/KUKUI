const registroForm = document.getElementById("registro-form");
const loginForm = document.getElementById("login-form");

let registros = [];

registroForm.addEventListener("submit", function(event) {
  event.preventDefault();
  
  const nombre = document.getElementById("nombre").value;
  const apellido = document.getElementById("apellido").value;
  const email = document.getElementById("email").value;
  const contrasenia = document.getElementById("contrasenia").value;
  
  const registro = {
    nombre: nombre,
    apellido: apellido,
    email: email,
    password:contrasenia
  };
  
  // Agrega el nuevo registro a la lista de registros
  registros.push(registro);
  
  // Guarda la lista de registros en localStorage
  localStorage.setItem("registros", JSON.stringify(registros));
  
  // Enviar datos a la API
  const url = "https://back-kukui-production.up.railway.app/usuarios";
// -----------------------------
fetch(url, { //URL del servicio a donde se hara el POST
  method: 'POST',
   // or 'PUT' 
  headers: { // se agrega el header
    'Content-Type': 'application/json', //tipo de contenido
  },
  body: JSON.stringify(registro), //se agrega el cuerpo del POST
})
.then(response => response.json()) //se obtiene la respuesta del servidor
.then(data => { //se obtiene el json
  console.log('Success:', data); //se imprime el json
})
.catch((error) => { //si hay un error
  console.error('Error:', error); //se imprime el error
});

// Limpia los campos del formulario
registroForm.reset();


});




loginForm.addEventListener("submit", function(event) {
  event.preventDefault();
  
  const emailLogin = document.getElementById("email-login").value;
  const contraseniaLogin = document.getElementById("contrasenia-login").value;
  
  const registro = registros.find(registro => registro.email === emailLogin && registro.contrasenia === contraseniaLogin);
  
  if (registro) {
    alert("¡Bienvenido!");
  } else {
    alert("Email o contraseña incorrectos");
  }
  
  loginForm.reset();
});

window.addEventListener("load", function() {
  const registrosString = localStorage.getItem("registros");
  
  if (registrosString) {
    registros = JSON.parse(registrosString);
  }
});