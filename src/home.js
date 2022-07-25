export { homeScreen };
import { empty } from "./reset";
import Image from "./food.jpg";

function homeScreen() {
  const screen = document.getElementById("container");

  const mainImg = document.createElement("img");
  mainImg.setAttribute("src", Image);
  const title = document.createElement("h1");
  title.innerText = "Welcome To My Home Page";

  const intro = document.createElement("p");
  intro.innerText =
    "Hi random person! Thanks for checking out my restaurant project. I tried to use ES6 modules and webpack. Let me know how I did.";

  const list = document.createElement("ul");
  list.innerText = "Skills & Tools Used";
  const item1 = document.createElement("li");
  item1.innerText = "Html, CSS";
  const item2 = document.createElement("li");
  item2.innerText = "ES6 Modules & Webpack";
  const item3 = document.createElement("li");
  item3.innerText = "Npm and git";
  list.append(item1, item2, item3);

  const subNotes = document.createElement("p");
  subNotes.innerText =
    "Try clicking each button to see how they switch between modules.";

  empty();
  screen.append(mainImg, title, intro, list, subNotes);
}
