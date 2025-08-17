
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

// script.js
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

const students = document.getElementById('students');
if (students) {
  students.addEventListener('click', () => {
    window.location.href = 'students.html';
  });
}
const courses = document.getElementById('courses');
if (courses) {
  courses.addEventListener('click', () => {
    window.location.href = 'courses.html';
  });
}
const groups = document.getElementById('groups');
if (groups) {
  groups.addEventListener('click', () => {
    window.location.href = 'groups.html';
  });
}