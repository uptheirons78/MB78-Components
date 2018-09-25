const navToggle = document.querySelectorAll('.nav-toggle');
const mainNav = document.querySelector('.main-navigation');

navToggle.forEach(item => item.addEventListener('click', toggleOpen));

function toggleOpen() {
  mainNav.classList.toggle('open');
}