const Popup = (project) => {
  const popup = document.createElement('div');
  popup.className = 'popup';

  // Backdrop is background outside of popup
  const backdrop = document.createElement('div');
  backdrop.className = 'backdrop';
  backdrop.appendChild(popup);
  document.body.appendChild(backdrop);
  // Close the popup on click
  const exit = document.createElement('a');
  exit.addEventListener('click', () => {
    backdrop.remove();
  });
  popup.appendChild(exit);
  exit.innerHTML = '<img src="./Images/Cancel.png">';
  exit.classList.add('closing');

  const h1 = document.createElement('h1');
  h1.innerText = project.name;
  h1.classList.add('project-name');
  popup.appendChild(h1);

  const div = document.createElement('div');
  div.classList.add('popup-data');
  popup.appendChild(div);

  const h4 = document.createElement('h4');
  h4.className = 'project-client';
  h4.innerText = project.client;
  div.appendChild(h4);

  const img2 = document.createElement('img');
  img2.className = 'counter';
  img2.setAttribute('src', './Images/Counter.png');
  div.appendChild(img2);

  const span = document.createElement('span');
  span.className = 'programming-language';
  span.innerText = 'Back End Dev';
  div.appendChild(span);

  const img3 = document.createElement('img');
  img3.className = 'counter';
  img3.setAttribute('src', './Images/Counter.png');
  div.appendChild(img3);

  const span2 = document.createElement('span');
  span2.className = 'year';
  span2.innerText = project.year;
  div.appendChild(span2);

  const div2 = document.createElement('div');
  div2.classList.add('popup-image');
  popup.appendChild(div2);

  const img = document.createElement('img');
  img.className = 'project-image';
  img.setAttribute('src', project.img);
  div2.appendChild(img);

  const div3 = document.createElement('div');
  div3.classList.add('popup-flex');
  popup.appendChild(div3);

  const p = document.createElement('p');
  p.classList.add('popup-paragraph');
  p.innerText = project.description;
  div3.appendChild(p);

  const div4 = document.createElement('div');
  div4.classList.add('language-flex');
  div3.appendChild(div4);

  const ul = document.createElement('ul');
  ul.classList.add('ul-list');
  div4.appendChild(ul);

  const li = document.createElement('li');
  li.classList.add('dev-tool');
  li.innerText = project.technologies;
  ul.appendChild(li);

  const div5 = document.createElement('div');
  div5.classList.add('button-flex');
  div3.appendChild(div5);

  // location is url navigation
  const button = document.createElement('button');
  button.classList.add('btn');
  button.innerText = 'See Live';
  button.addEventListener('click', function () {
    location = project.liveVersion;
  });
  div5.appendChild(button);

  // location is url navigation
  const button2 = document.createElement('button');
  button2.classList.add('btn');
  button2.innerText = 'See Source';
  button2.addEventListener('click', function () {
    location = project.source;
  });

  div5.appendChild(button2);
};
export default Popup;
