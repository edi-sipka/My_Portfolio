const Popup = (project) => {
  const popup = document.createElement('div');
  popup.className = 'popup';

  const backdrop = document.createElement('div');
  backdrop.className = 'backdrop';
  backdrop.appendChild(popup);
  document.body.appendChild(backdrop);

  const exit = document.createElement('a');
  exit.addEventListener('click', () => {
    backdrop.remove();
  });
  popup.appendChild(exit);
  exit.innerHTML = '<img src="./Images/ClosingIcon.png">';
  exit.classList.add('closing');
  const h1 = document.createElement('h1');
  h1.innerText = project.name;
  h1.classList.add('project-name');
  popup.appendChild(h1);

  const h4 = document.createElement('h4');
  h4.className = 'project-client';
  h4.innerText = project.client;
  popup.appendChild(h4);

  const img2 = document.createElement('img');
  img2.className = 'counter';
  img2.setAttribute('src', './Images/Counter.png');
  popup.appendChild(img2);

  const span = document.createElement('span');
  span.className = 'programming-language';
  span.innerText = 'Back End Dev';
  popup.appendChild(span);

  const img3 = document.createElement('img');
  img3.className = 'counter';
  img3.setAttribute('src', './Images/Counter.png');
  popup.appendChild(img3);

  const span2 = document.createElement('span');
  span2.className = 'year';
  span2.innerText = project.year;
  popup.appendChild(span2);
};

export default Popup;
