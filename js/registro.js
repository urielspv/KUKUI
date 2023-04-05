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
    nombre,
    apellido,
    email,
    contrasenia
  };
  
  // Agrega el nuevo registro a la lista de registros
  registros.push(registro);
  
  // Guarda la lista de registros en localStorage
  localStorage.setItem("registros", JSON.stringify(registros));
  
  // Enviar datos a la API
  const url = "https://back-kukui-production.up.railway.app/usuarios";
  fetch(url, {
    method: "POST",
    body: JSON.stringify(registro),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
  .then(response => response.json())
  .then(json => console.log(json))
  .catch(err => console.error(err));
  
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