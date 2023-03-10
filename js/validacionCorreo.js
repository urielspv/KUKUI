function validar(){

    const form  = document.getElementsByTagName('form')[0];
    
    const email = document.getElementById('mail');
    const emailError = document.querySelector('#mail + span.error');
    
    email.addEventListener('input', function (event) {
     
      if (email.validity.valid) {
        emailError.innerHTML = ''; // Restablece el contenido del mensaje
        emailError.className = 'error'; // Restablece el estado visual del mensaje
      } else {
        showError();
      }
    });
    
    form.addEventListener('submit', function (event) {
       
      if(!email.validity.valid) {
        // Si no es así, mostramos un mensaje de error apropiado
        showError();
        // Luego evitamos que se envíe el formulario cancelando el evento
        event.preventDefault();
      }
    });
    
    function showError() {
      if(email.validity.valueMissing) {
        // Si el campo está vacío
        // muestra el mensaje de error siguiente.
        emailError.textContent = 'Debe introducir una dirección de correo electrónico.';
      } else if(email.validity.typeMismatch) {
        // Si el campo no contiene una dirección de correo electrónico
        // muestra el mensaje de error siguiente.
        emailError.textContent = 'El valor introducido debe ser una dirección de correo electrónico.';
      } else if(email.validity.tooShort) {
        // Si los datos son demasiado cortos
        // muestra el mensaje de error siguiente.
        emailError.textContent = 'El correo electrónico debe tener al menos ${ email.minLength } caracteres; ha introducido ${ email.value.length }.';
      }
    
      // Establece el estilo apropiado
      emailError.className = 'error activo';
    }
    
    }