document.querySelector('.submit').addEventListener('click', (event) => {
  const mail = document.getElementById('email').value;
  const errorMail = document.querySelector('.error');
  const makeItLowerCase = (str) => str === str.toLowerCase();

  if (!makeItLowerCase(mail)) {
    event.preventDefault();
    errorMail.textContent = 'Please use lowercase for email';
  }
});
