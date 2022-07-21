import { homeScreen } from "./home";
import { menuScreen } from "./menu";
import "./styles.css";

//header creation

const header = document.getElementById("header");

const topNav = document.createElement("nav");
const headerTitle = document.createElement("h1");
headerTitle.innerText = "Restaurant Page";
topNav.append(headerTitle);

const bottomNav = document.createElement("nav");
const button1 = document.createElement("button");
button1.innerText = "Home";
const button2 = document.createElement("button");
button2.innerText = "Menu";
const button3 = document.createElement("button");
button3.innerText = "Contact";
bottomNav.append(button1, button2, button3);

header.append(topNav, bottomNav);

//footer creation

const footer = document.getElementById("footer");

const footerDiv = document.createElement("div");
const github = document.createElement("a");
github.setAttribute("href", "https://github.com/Davidjustice28");
github.innerText = "GitHub Profile;";
const copyright = document.createElement("p");
copyright.innerText = "Copyright of David Justice";
footerDiv.append( copyright, github);

footer.append(footerDiv);

homeScreen();
button1.addEventListener("click", homeScreen);
button2.addEventListener("click", menuScreen);






