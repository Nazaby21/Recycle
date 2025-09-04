//increase and decrease
function changeQty(amount, inputId) {
  let input = document.getElementById(inputId);
  let current = parseInt(input.value);
  current += amount;
  if (current < 1) current = 1;
  input.value = current;
}

const toastEl = document.getElementById('mainToast');
const toastMessage = document.getElementById('toastMessage');
const mainToast = new bootstrap.Toast(toastEl);

// Delete button
document.querySelectorAll('.deleteBtn').forEach((btn) => {
  btn.addEventListener('click', () => {
    toastMessage.textContent = 'អ្នកបានលុបដោយជោគជ័យ ✅';
    mainToast.show();
  });
});

// Edit button → open modal
const editModal = new bootstrap.Modal(document.getElementById('editModal'));
document.querySelectorAll('.editBtn').forEach((btn) => {
  btn.addEventListener('click', () => {
    document.getElementById('modal-product-name').textContent =
      btn.dataset.name;
    document.getElementById('modal-product-quantity').value =
      btn.dataset.quantity;
    editModal.show();
  });
});

// Save button
document.getElementById('saveBtn').addEventListener('click', () => {
  toastMessage.textContent = '✅ ផលិតផលត្រូវបានកែប្រែដោយជោគជ័យ!';
  mainToast.show();
  editModal.hide();
});
