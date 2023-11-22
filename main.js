let container = document.querySelector(".container");
let button = document.querySelector("button");
let quote = document.querySelector("h3");
let author = document.querySelector("h4");
let type = document.querySelector("p");
let circle = document.querySelector(".circle");
let h1 = document.querySelector("h1");
let check = 0;

const change = async () => {
  const response = await fetch("https://api.quotable.io/random"); //fetch data from the api
  const data = await response.json();
  quote.innerText = data.content;
  author.innerText = data.author;
  type.innerText = data.tags;
};

function ch() {
  if (check == 0) {
    container.style.backgroundColor = "black";
    h1.style.color = "white";
    check = 1;
    circle.style.backgroundImage = "url(sun.png)";
    circle.style.backgroundSize = "100%";
  } else {
    container.style.backgroundColor = "white";
    h1.style.color = "black";
    check = 0;
    circle.style.backgroundImage = "url(png.png)";
    circle.style.backgroundSize = "100%";
  }
}
button.addEventListener("click", change);
circle.addEventListener("click", ch);
