import projectData from './data.js';
import Popup from './popup.js';

const Article = (project, index) => {
  const article = document.createElement('article');
  article.className = 'portfolio-border';

  const img = document.createElement('img');
  img.className = 'portfolio-image';
  img.setAttribute('src', project.img);
  article.appendChild(img);

  const div = document.createElement('div');
  div.className = 'project-section';
  article.appendChild(div);
  if (index % 2 === 1) {
    div.classList.add('project-section-reverse');
  }

  const h3 = document.createElement('h3');
  h3.className = 'project-name';
  h3.innerText = project.name;
  div.appendChild(h3);

  const div2 = document.createElement('div');
  div2.className = 'project-info';
  div.appendChild(div2);

  const h4 = document.createElement('h4');
  h4.className = 'project-client';
  h4.innerText = project.client;
  div2.appendChild(h4);

  const img2 = document.createElement('img');
  img2.className = 'counter';
  img2.setAttribute('src', './Images/Counter.png');
  div2.appendChild(img2);

  const span = document.createElement('span');
  span.className = 'programming-language';
  span.innerText = 'Back End Dev';
  div2.appendChild(span);

  const img3 = document.createElement('img');
  img3.className = 'counter';
  img3.setAttribute('src', './Images/Counter.png');
  div2.appendChild(img3);

  const span2 = document.createElement('span');
  span2.className = 'year';
  span2.innerText = project.year;
  div2.appendChild(span2);

  const p = document.createElement('p');
  p.className = 'project-details';
  p.innerText = project.paragraph;
  div.appendChild(p);

  const ul = document.createElement('ul');
  ul.className = 'languages';
  div.appendChild(ul);

  project.technologies.forEach((technology) => {
    const li = document.createElement('li');
    li.className = 'dev-tool';
    li.innerText = technology;
    ul.appendChild(li);
  });
  const button = document.createElement('button');
  button.className = 'btn';
  button.innerText = 'See Project';
  button.addEventListener('click', () => {
    Popup(project);
  });
  div.appendChild(button);

  return article;
};

const projects = document.createElement('div');
projects.className = 'portfolio';

projectData.forEach((project, index) => {
  projects.appendChild(Article(project, index));
});

const section = document.querySelector('#portfolio');
section.appendChild(projects);
