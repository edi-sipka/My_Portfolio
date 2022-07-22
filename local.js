const nameUser = document.getElementById('contact-name');
const email = document.getElementById('email');
const message = document.getElementById('message');
const formData = document.querySelector('contact-box');

function store() {
  const storeData = {
    clientName: nameUser.value,
    clientEmail: email.value,
    clientMessage: message.value,
  };
  localStorage.setItem('form', JSON.stringify(storeData));
}

document.addEventListener('DOMContentLoaded', () => {
  const savingData = localStorage.getItem('form');
  if (savingData) {
    const objectData = JSON.parse(savingData);
    nameUser.value = objectData.clientName;
    email.value = objectData.clientEmail;
    message.value = objectData.clientMessage;
  }
});

nameUser.onchange = store;
email.onchange = store;
message.onchange = store;
