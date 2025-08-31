//increase and decrease
function changeQty(amount, inputId) {
  let input = document.getElementById(inputId);
  let current = parseInt(input.value);
  current += amount;
  if (current < 1) current = 1;
  input.value = current;
}
//end increase and decrease
// cart
function addToCart(name, price, qtyId) {
  let qty = parseInt(document.getElementById(qtyId).value);
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.push({ name: name, price: price, qty: qty });
  localStorage.setItem('cart', JSON.stringify(cart));
  window.location.href = 'cart.html';
}
// end cart
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// render cart
function renderCart() {
  const cartItems = document.getElementById('cart-items');
  cartItems.innerHTML = '';
  let total = 0;

  cart.forEach((item, index) => {
    let subtotal = item.price * item.qty;
    total += subtotal;

    cartItems.innerHTML += `
        <tr>
          <td style="font-family: 'Kantumruy Pro';">
            <input type="number" value="${
              item.qty
            }" min="1" style="width:60px; font-family: 'Kantumruy Pro';"
              onchange="editQty(${index}, this.value)">
          </td>
          <td style="font-family: 'Kantumruy Pro';">${item.name}</td>
          <td style="font-family: 'Kantumruy Pro';">$${subtotal.toFixed(2)}</td>
          <td style="font-family: 'Kantumruy Pro';">
            <button class="btn btn-danger btn-sm" onclick="deleteItem(${index})">លុប</button>
          </td>
        </tr>
      `;
  });

  document.getElementById('cart-total').innerText = '$' + total.toFixed(2);
  localStorage.setItem('cart', JSON.stringify(cart));
}

// end render cart

//edit
function editQty(index, newQty) {
  let qty = parseInt(newQty);
  if (qty < 1) qty = 1;
  cart[index].qty = qty;
  renderCart();
}
//end edit

//delete
function deleteItem(index) {
  cart.splice(index, 1);
  renderCart();
}
//end delete

function checkout() {
  if (cart.length === 0) {
    alert('Cart is empty!');
    return;
  }
  alert('Thank you for your order!');
  cart = [];
  localStorage.setItem('cart', JSON.stringify(cart));
  renderCart();
}

renderCart();

// end cart
