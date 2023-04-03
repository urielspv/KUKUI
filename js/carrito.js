//botones1
// get the quantity input and total price element
const quantityInput1 = document.getElementById('quantity-input1');
const totalPriceEl1 = document.getElementById('total-price1');

// get the initial price value from the total price element
let initialPrice1 = parseFloat(totalPriceEl1.innerText.replace('$', ''));

// add event listeners to the quantity buttons
document.getElementById('decrease-quantity1').addEventListener('click', () => {
  if (quantityInput1.value > 0) {
    quantityInput1.value--;
    updateTotalPrice1();
  }
});

document.getElementById('increase-quantity1').addEventListener('click', () => {
  quantityInput1.value++;
  updateTotalPrice1();
});

// function to update the total price based on the quantity input
function updateTotalPrice1() {
  const quantity = parseInt(quantityInput1.value);
  const totalPrice1 = initialPrice1 * quantity;
  totalPriceEl1.innerText = '$' + totalPrice1.toFixed(1);
}


//botones2
// get the quantity input and total price element
const quantityInput2 = document.getElementById('quantity-input2');
const totalPriceEl2 = document.getElementById('total-price2');

// get the initial price value from the total price element
let initialPrice2 = parseFloat(totalPriceEl2.innerText.replace('$', ''));

// add event listeners to the quantity buttons
document.getElementById('decrease-quantity2').addEventListener('click', () => {
  if (quantityInput2.value > 0) {
    quantityInput2.value--;
    updateTotalPrice2();
  }
});

document.getElementById('increase-quantity2').addEventListener('click', () => {
  quantityInput2.value++;
  updateTotalPrice2();
});

// function to update the total price based on the quantity input
function updateTotalPrice2() {
  const quantity = parseInt(quantityInput2.value);
  const totalPrice2 = initialPrice2 * quantity;
  totalPriceEl2.innerText = '$' + totalPrice2.toFixed(1);
}




//botones3
// get the quantity input and total price element
const quantityInput4 = document.getElementById('quantity-input3');
const totalPriceEl = document.getElementById('total-price');

// get the initial price value from the total price element
let initialPrice = parseFloat(totalPriceEl.innerText.replace('$', ''));

// add event listeners to the quantity buttons
document.getElementById('decrease-quantity3').addEventListener('click', () => {
  if (quantityInput4.value > 0) {
    quantityInput4.value--;
    updateTotalPrice();
  }
});

document.getElementById('increase-quantity3').addEventListener('click', () => {
  quantityInput4.value++;
  updateTotalPrice();
});

// function to update the total price based on the quantity input
function updateTotalPrice() {
  const quantity = parseInt(quantityInput4.value);
  const totalPrice = initialPrice * quantity;
  totalPriceEl.innerText = '$' + totalPrice.toFixed(1);
}



// //
// function updateProductosTotal() {
//   const totalPrice2 = parseFloat(document.getElementById('total-price2').innerText.replace('$', ''));
//   const totalPrice3 = parseFloat(document.getElementById('total-price').innerText.replace('$', ''));
//   const totalPrice1 = parseFloat(document.getElementById('total-price1').innerText.replace('$', ''));
//   const productosTotal = totalPrice2 + totalPrice3 + totalPrice1;
//   document.getElementById('productos').innerText = '$' + productosTotal.toFixed(1);
// }

// function updateTotalPrice2() {
//   // código para actualizar el precio total del producto 2
//   updateProductosTotal();
// }

// function updateTotalPrice() {
//   // código para actualizar el precio total del producto 3
//   updateProductosTotal();
// }
// function updateTotalPrice1() {
//   // código para actualizar el precio total del producto 1
//   updateProductosTotal();
// }







