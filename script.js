// Made two variables of opening and closing
const menuNavigation = document.querySelector('.nav-right');
const closingButton = document.querySelector('.closing-icon');

// On click make mobile menu visible
menuNavigation.addEventListener('click', () => {
  document.querySelector('.mobile-menu').classList.add('visible');
});
// On click make mobile menu hidden
closingButton.addEventListener('click', () => {
  document.querySelector('.mobile-menu').classList.remove('visible');
});
// On every click of listed item on mobile menu make it hidden.
document.querySelectorAll('.nav-link').forEach((li) => {
  li.addEventListener('click', () => {
    document.querySelector('.mobile-menu').classList.remove('visible');
  });
});
