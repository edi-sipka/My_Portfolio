const menuShow = document.querySelector('.nav-right');
const xButton = document.querySelector('.closing-icon');

menuShow.addEventListener('click', () => {
  document.querySelector('.mobile-menu').classList.add('visible');
});

xButton.addEventListener('click', () => {
  document.querySelector('.mobile-menu').classList.remove('visible');
});
