/*window.addEventListener('hashchange', () => {
  console.log(window.location.hash);
  projects.forEach((project) => {
    if (`#${project.id}` === window.location.hash) {
      console.log(project);
    }
  });
});
*/

/*
const projectButton = document.querySelectorAll('.btn');
const popup = document.querySelector('.background-popup');
const showPopup = document.querySelector('.popup');

projectButton.forEach((n) => {
  n.addEventListener('click', (e) => {
    const elements = e.elements.id;
    const project = projects[elementsId];

    showPopup.innerHTML = (
      <div class="card-pop">
        <div class="flex-popup">
          <h1 class="section-title">'${project.name}'</h1>
          <img src="images/canel.png" class="closing-icon" alt="close button" />
        </div>
        <div class="project-section">
          <h4 class="project-client">CANOPY</h4>
          <img src="images/Counter.png" alt="counter" class="counter" />
          <span class="programming-language">Back End Dev</span>
          <img src="images/Counter.png" alt="counter" class="counter" />
          <span class="year">2015</span>
        </div>
        <div class="pic-container">
          <img
            src="${project.portfolioPhoto}"
            alt="card pic"
            class="cards-pic"
          />
        </div>

        <div class="flex-desktop">
          <p>'${project.description}'</p>
          <div>
            <ul class="languages">
              <li class="${project.tools[0]}">html</li>

              <li class="${project.tools[1]}">css</li>

              <li class="${project.tools[2]}">javascript</li>
            </ul>
            <div class="btn-flex">
              <button>
                <a
                  href="${project.liveVersion}"
                  class="btn-flex1"
                  alt="Broken Link"
                >
                  See Live{' '}
                  <img
                    src="images/Brokenlink.png"
                    alt="Broken link"
                    class="size dot"
                  />
                </a>
              </button>
              <button>
                <a href="${project.source}" class="btn-flex1" alt="Broken Link">
                  See Source{' '}
                  <img
                    src="images/github.png"
                    alt="github logo"
                    class="size dot"
                  />
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    );

    popup.append(showPopup);
    popup.classList.add('visible');
  });
});
*/
