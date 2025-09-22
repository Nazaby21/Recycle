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