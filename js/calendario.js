const cc_number_input = document.getElementById("cc_number");
const validate_button = document.getElementById("validate");
const error_message = document.getElementById("error_message");

validate_button.addEventListener("click", function () {
    const cc_number = cc_number_input.value;
    if (/^[0-9]{13,16}$/.test(cc_number)) {
        // El número de tarjeta de crédito es válido
        error_message.innerText = "";
    } else {
        // El número de tarjeta de crédito no es válido
        error_message.innerText = "Por favor ingrese un número de tarjeta de crédito válido.";
    }
});

var card = new Card({
    form: 'form', // identificador del formulario
    container: '.card-wrapper', // selector CSS del contenedor de la tarjeta
    formatting: true, // activa la formateo automático de los números de tarjeta
    messages: {
        validDate: 'valid\ndate', // mensaje para fecha de caducidad válida
        monthYear: 'mm/yy', // formato de fecha de caducidad
    }
});
