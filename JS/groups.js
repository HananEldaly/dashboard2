
document.querySelector('.profile-btn').addEventListener('click', function (e) {
  e.stopPropagation();
  document.querySelector('.dropdown-content').classList.toggle('show');
});


window.addEventListener('click', function () {
  document.querySelector('.dropdown-content').classList.remove('show');
});


document.querySelector('.dropdown-content').addEventListener('click', function (e) {
  e.stopPropagation();
});
document.querySelector('.menu-toggle').addEventListener('click', () => {
  document.querySelector('.sidebar').classList.toggle('active');
});
function toggleMenu() {
    document.querySelector('nav').classList.toggle('nav-open');
  }
  const toggleBtn = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  toggleBtn.addEventListener("click", () => {
    navLinks.classList.toggle("nav-open");
  });