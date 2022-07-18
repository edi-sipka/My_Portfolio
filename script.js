const menuNavigation = document.querySelector('.nav-right');
const closingButton = document.querySelector('.closing-icon');

menuNavigation.addEventListener('click', () => {
  document.querySelector('.mobile-menu').classList.add('visible');
});

closingButton.addEventListener('click', () => {
  document.querySelector('.mobile-menu').classList.remove('visible');
});
