//increase and decrease
function changeQty(amount, inputId) {
  let input = document.getElementById(inputId);
  let current = parseInt(input.value);
  current += amount;
  if (current < 1) current = 1;
  input.value = current;
}

// Toast handler
const toastTrigger = document.getElementById('saveBtn');
const toastLiveExample = document.getElementById('save');

if (toastTrigger) {
  toastTrigger.addEventListener('click', () => {
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(
      toastLiveExample,
      { delay: 3000 }
    );
    toastBootstrap.show();
  });
}
//delete
const deleteBtn = document.getElementById('deleteBtn');
    const deleteToastEl = document.getElementById('deleteToast');
    const deleteToast = new bootstrap.Toast(deleteToastEl);

    deleteBtn.addEventListener('click', () => {
      deleteToast.show();
    });
