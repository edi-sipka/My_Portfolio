// Made variable projects in which is stored all about the projecs/works cards.
/* eslint-disable */
const projects = [
  {
    name: 'Budget Rails App',
    client: 'Microverse',
    id: 1,
    year: 2022,
    img: './Images/rails1.png',
    technologies: ['Ruby', 'PostgreSQL', 'Ruby on Rails' ],
    paragraph:
      'Budget Rails is a mobile web application where user can manage their budget with transactions. ',
    description:
      'Budget Rails is a mobile web application where user can manage their budget with transactions. You can check how much your are spending monthly. ',
    liveVersion: 'https://rails-bbb8.onrender.com/',
    source: 'https://github.com/edi-sipka/Budget_Rails',
  },
  {
    name: 'Recipe App',
    client: 'Microverse',
    id: 2,
    paragraph:
      'Recipe app keeps track of all your recipes, ingredients, and inventory.',
    year: 2022,
    img: './Images/rails2.png',
    technologies: ['Ruby', 'PostgreSQL', 'Ruby on Rails' ],
    description:
      'It will allow you to save ingredients, keep track of what you have, create recipes, and generate a shopping list based on what you have and what you are missing from a recipe.',
    liveVersion: 'https://github.com/edi-sipka/Recipe_app',
    source: 'https://github.com/edi-sipka/Recipe_app',
  },

  {
    name: 'Movie Imdb React',
    client: 'Microverse',
    paragraph:
      'Movies_App is React built app that is displaying movies and tv shows. You can find more about their ratings, actors and year release.',
    year: 2022,
    id: 3,
    img: './Images/react1.png',
    technologies: ['Redux', 'React'],
    description:
      'You can find more about their ratings, actors and year release..',
    liveVersion: 'https://github.com/edi-sipka/Movies_App',
    source: 'https://github.com/edi-sipka/Movies_App',
  },

  {
    name: 'Blog Rails App',
    client: 'Microverse',
    year: 2022,
    paragraph:
      'Blog website that allows users to create, edit, comment and delete posts, keeping data in a database. ',
    id: 4,
    img: './Images/rails3.png',
    technologies: ['Ruby', 'PostgreSQL', 'Ruby on Rails' ],
    description:
      'This project implements both authorization and authentication in order to provide extended functionality to logged in and authorized users.',
    liveVersion: 'https://github.com/edi-sipka/Blog_App',
    source: 'https://github.com/edi-sipka/Blog_App',
  },
];

// export projects data to different js files
export default projects;
