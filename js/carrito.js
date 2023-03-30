// Get the buttons and inputs for the first item
const btnMinus1 = document.getElementById('botonmenos');
const btnPlus1 = document.getElementById('botonmas');
const input1 = document.querySelector('#form1');

// Get the buttons and inputs for the second item
const btnMinus2 = document.getElementById('botonmenos2');
const btnPlus2 = document.getElementById('botonmas2');
const input2 = document.querySelector('#form2');

// Get the trash buttons for both items
const trash1 = document.getElementById('trash');
const trash2 = document.getElementById('trash2');

// Get the total price element
const totalPrice = document.getElementById('total-price');

// Set the initial total price
let total = 600;

// Update the total price element
function updateTotal() {
  totalPrice.textContent = `$${total.toFixed(2)}`;
}

// Handle the minus button for the first item
btnMinus1.addEventListener('click', () => {
  if (input1.value > 0) {
    input1.stepDown();
    total -= 600;
    updateTotal();
  }
});

// Handle the plus button for the first item
btnPlus1.addEventListener('click', () => {
  input1.stepUp();
  total += 600;
  updateTotal();
});

// Handle the minus button for the second item
btnMinus2.addEventListener('click', () => {
  if (input2.value > 0) {
    input2.stepDown();
    total -= 200;
    updateTotal();
  }
});

// Handle the plus button for the second item
btnPlus2.addEventListener('click', () => {
  input2.stepUp();
  total += 200;
  updateTotal();
});

// Handle the trash button for the first item
trash1.addEventListener('click', () => {
  const item1 = document.querySelector('.row:first-child');
  item1.remove();
  total -= 600 * input1.value;
  updateTotal();
});

// Handle the trash button for the second item
trash2.addEventListener('click', () => {
  const item2 = document.querySelector('.row:last-child');
  item2.remove();
  total -= 200 * input2.value;
  updateTotal();
});

// Initialize the total price
updateTotal();





