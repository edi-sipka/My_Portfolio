const Popup = (project) => {
  // Backdrop
  const backdrop = document.createElement('div');
  backdrop.className = 'backdrop';
  document.body.appendChild(backdrop);

  // Popup
  const popup = document.createElement('div');
  popup.className = 'popup';
  backdrop.appendChild(popup);

  // Close button
  const exit = document.createElement('a');
  exit.addEventListener('click', () => {
    backdrop.remove();
  });
  popup.appendChild(exit);
  exit.innerHTML = '<img src="./Images/Cancel.png">';
  exit.classList.add('closing');

  // Project title
  const h1 = document.createElement('h1');
  h1.innerText = project.name;
  h1.classList.add('project-name');
  popup.appendChild(h1);

  // Project data
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

  // Project image
  const div2 = document.createElement('div');
  div2.classList.add('popup-image');
  popup.appendChild(div2);
  const img = document.createElement('img');
  img.className = 'project-image';
  img.setAttribute('src', project.img);
  div2.appendChild(img);

  // Card body
  const cardBody = document.createElement('div');
  cardBody.classList.add('popup-flex');
  popup.appendChild(cardBody);

  // Project description
  const p = document.createElement('p');
  p.classList.add('popup-paragraph');
  p.innerText = project.description;
  cardBody.appendChild(p);

  // Bottons
  const buttonContainer = document.createElement('div');
  buttonContainer.className = 'button-container';
  cardBody.appendChild(buttonContainer);

  // Project tags
  const ul = document.createElement('ul');
  ul.classList.add('languages');
  buttonContainer.appendChild(ul);
  project.technologies.forEach((technology) => {
    const li = document.createElement('li');
    li.innerText = technology;
    ul.appendChild(li);
  });

  const button = document.createElement('button');
  button.classList.add('btn');
  button.innerText = 'See Live';
  button.addEventListener('click', () => {
    window.location = project.liveVersion;
  });
  const icon = document.createElement('img');
  icon.setAttribute('src', './Images/Brokenlink.png');
  button.append(icon);
  buttonContainer.appendChild(button);

  const button2 = document.createElement('button');
  button2.classList.add('btn');
  button2.innerText = 'See Source';
  button2.addEventListener('click', () => {
    window.location = project.source;
  });
  const icon2 = document.createElement('img');
  icon2.setAttribute('src', './Images/github.png');
  button2.append(icon2);
  buttonContainer.appendChild(button2);
};

export default Popup;
