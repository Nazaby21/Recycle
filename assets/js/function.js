const links = document.querySelectorAll('.nav-link.nav-hover');
links.forEach(link => {
  link.addEventListener('click', e => {
    links.forEach(l => l.classList.remove('active'));
    e.currentTarget.classList.add('active');
  });
});
