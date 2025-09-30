const links = document.querySelectorAll(".nav-link.nav-hover");
links.forEach((link) => {
  link.addEventListener("click", (e) => {
    links.forEach((l) => l.classList.remove("active"));
    e.currentTarget.classList.add("active");
  });
});

// animation
var animation = document.getElementById("text-animation");

var typewriter = new Typewriter(animation, {
  loop: true,
});

typewriter.typeString("រួមគ្នាថែរក្សាបរិស្ថាន").pauseFor(2500).start();

// AOS Animation
AOS.init({
  duration: 1000,
  once: false, // run loop
});

document
  .getElementById("showMoreActivity")
  .addEventListener("click", function () {
    let extra = document.getElementById("extraActivity");
    if (extra.classList.contains("d-none")) {
      extra.classList.remove("d-none");
      this.innerText = "View Less";
    } else {
      extra.classList.add("d-none");
      this.innerText = "View More";
    }
  });

document.addEventListener("DOMContentLoaded", function () {
  const tabButtons = document.querySelectorAll("#purchase .custom-tabs .btn");

  // Initialize styles
  tabButtons.forEach((btn) => {
    if (btn.classList.contains("active")) {
      btn.classList.add("text-white", "bg-success");
      btn.classList.remove("text-success", "btn-outline-success");
    } else {
      btn.classList.add("text-success");
      btn.classList.remove("text-white", "bg-success");
    }

    // Hover effect
    btn.addEventListener("mouseenter", () => {
      if (!btn.classList.contains("active")) {
        btn.classList.add("text-white");
      }
    });

    btn.addEventListener("mouseleave", () => {
      if (!btn.classList.contains("active")) {
        btn.classList.remove("text-white");
      }
    });
  });

  // Update styles on tab change
  tabButtons.forEach((btn) => {
    btn.addEventListener("shown.bs.tab", (event) => {
      tabButtons.forEach((b) => {
        b.classList.remove("text-white", "bg-success");
        b.classList.add("text-success", "btn-outline-success");
      });

      event.target.classList.add("text-white", "bg-success");
      event.target.classList.remove("text-success", "btn-outline-success");
    });
  });
});

// makara
//increase and decrease
function changeQty(amount, inputId) {
  let input = document.getElementById(inputId);
  let current = parseInt(input.value);
  current += amount;
  if (current < 1) current = 1;
  input.value = current;
}

const toastEl = document.getElementById("mainToast");
const toastMessage = document.getElementById("toastMessage");
const mainToast = new bootstrap.Toast(toastEl);

// Delete button
document.querySelectorAll(".deleteBtn").forEach((btn) => {
  btn.addEventListener("click", () => {
    toastMessage.textContent = "អ្នកបានលុបដោយជោគជ័យ ✅";
    mainToast.show();
  });
});

// Edit button → open modal
const editModal = new bootstrap.Modal(document.getElementById("editModal"));
document.querySelectorAll(".editBtn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.getElementById("modal-product-name").textContent =
      btn.dataset.name;
    document.getElementById("modal-product-quantity").value =
      btn.dataset.quantity;
    editModal.show();
  });
});

// Save button
document.getElementById("saveBtn").addEventListener("click", () => {
  toastMessage.textContent = "✅ ផលិតផលត្រូវបានកែប្រែដោយជោគជ័យ!";
  mainToast.show();
  editModal.hide();
});

// vuthy
// DataChart
const ctx = document.getElementById("barChart").getContext("2d");
new Chart(ctx, {
  type: "bar",
  data: {
    labels: [
      "អ្នកចុះឈ្មោះចូលរួមព្រឺត្តិការណ៍",
      "អ្នកចូលរួមបរិចា្ចគ",
      "អ្នកចូលរួមព្រឺត្តិការណ៍",
      "អ្នកទស្សនាវីដេអូ",
      "អត្រាលក់ចេញ",
    ],
    datasets: [
      {
        label: "ចំនួនទិន្នន័យ",
        data: [1500, 1900, 3000, 2500, 2000],
        backgroundColor: "rgba(54, 162, 235, 0.6)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
        borderRadius: 8,
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          font: {
            family: "Hanuman",
            size: 14,
          },
        },
      },
    },
    scales: {
      x: {
        ticks: {
          font: {
            family: "Hanuman",
            size: 13,
          },
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 500,
          font: {
            family: "Hanuman",
            size: 13,
          },
        },
      },
    },
  },
});
