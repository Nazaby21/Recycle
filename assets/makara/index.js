//increase and decrease
function changeQty(amount, inputId) {
  let input = document.getElementById(inputId);
  let current = parseInt(input.value);
  current += amount;
  if (current < 1) current = 1;
  input.value = current;
}
