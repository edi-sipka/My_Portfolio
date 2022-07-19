const projects = [
  {
    name: "Tonic", 
    portfolioPhoto: "Images/Portfolio.png",
  tools: ["html", "css", "javascript"],
  description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the released",
  liveSource:"https://edi-sipka.github.io/My_Portfolio/",
  source:"https://github.com/edi-sipka/My_Portfolio",
  projectImage: "Images/Portfolio1.png",
  },
  {
    name: "Tonic", 
    portfolioPhoto: "Images/Portfolio2.png",
  tools: ["html", "css", "javascript"],
  description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the released",
  liveSource:"https://edi-sipka.github.io/My_Portfolio/",
  source:"https://github.com/edi-sipka/My_Portfolio",
  projectImage: "Images/Portfolio2.png",
  },
  {
  name: "Multi post Stories", 
  portfolioPhoto: "Images/Portfolio3.png",
tools: ["html", "css", "javascript"],
description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the released",
liveSource:"https://edi-sipka.github.io/My_Portfolio/",
source:"https://github.com/edi-sipka/My_Portfolio",
projectImage: "Images/Portfolio3.png",
},

{
  name: "Multi post Stories", 
  portfolioPhoto: "Images/Portfolio4.png",
tools: ["html", "css", "javascript"],
description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the released",
liveSource:"https://edi-sipka.github.io/My_Portfolio/",
source:"https://github.com/edi-sipka/My_Portfolio",
projectImage: "Images/Portfolio4.png",
}
];

projects.forEach(element,i) =>{
  const portfolio = document.querySelector(".portfolio");
  const section = document.createElement("section");
  const navigation = document.createElement("nav");
  const image= document.createElement("img");
  const div = document.createElement("div");
  const h3 = document.createElement("h3");
  const navigation2 = document.createElement("nav");
  const h4 = document.createElement("h2");
  const image2 =document.createElement("img");
  const image3 =document.createElement("img");
  const span =document.createElement("span");
  const span2 = document.createElement("span");
  const p = document.createElement("p");
  const ul = document.createElement("ul");
  const button = document.createElement("button");

portfolio.classList.add(".portfolio")
  
  image.src = element.projectImage;
  image.classList.add("portfolio-image");
  image.setAttribute("alt", "Portfolio project");

  navigation.classList.add("portfolio-border");
  nav.append(image,div,h3,nav,h4,image,image2,image3,span,p,ul,button)

div.classList.add("project-section");
div.append(h3,nav,h4,image2,image3,span,p,ul,button);

h3.classList.add("project-name");
h3.innerText = element.name;

navigation2.classList.add("project-info");


h4.classList.add("project-client");
h4.innerText = "CANOPY";

image2.src="Images/Counter.png";
image2.classList.add("counter");
image2.setAttribute("alt", "Dot")

span.classList.add("programming-language");
span.innerText="Back End Dev"

image3.src="Images/Counter.png";
image3.classList.add("counter");
image3.setAttribute("alt", "Dot")

span2.classList.add("year");
span2.innerText = "2015"

p.classList.add("project-details");
p.innerText = "A daily selection of privately personalized reads; no accounts or sign-ups required."

ul.classList.add("languages");

button.classList.add("btn");
button.innerText = "See Projects"



section.append(image, div);
porfoio.appendChild(section);

}