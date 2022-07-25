/* eslint-disable no-undef */

import { empty } from "./reset";
import "./menu.css";

export default function menuScreen() {
  const display = document.getElementById("container");
  display.classList.add("menu-section");

  //  sections for container structure
  const header1 = document.createElement("h1");
  header1.innerText = "Season Specials";
  const section1 = document.createElement("div");
  const header2 = document.createElement("h2");
  header2.innerText = "Appetizers";
  const section2 = document.createElement("div");
  const header3 = document.createElement("h3");
  header3.innerText = "Entrees";
  const section3 = document.createElement("div");

  // create initial arrays for each section of items
  const specials = [];
  const appetizers = [];
  const entrees = [];

  // create a factory function to create items
  const item = (title, ingredient, cost) => {
    const name = document.createElement("p");
    name.innerText = title;
    const ingredients = document.createElement("p");
    ingredients.innerText = ingredient;
    const price = document.createElement("p");
    price.innerText = `$${cost}`;
    return { name, ingredients, price };
  };

  // create initial items for each section array and display items in designated section
  const special1 = item(
    "Shrimp Scampi",
    "Atlantic Shrimp, pasta, and butter.",
    "24"
  );
  const special2 = item(
    "Chicken Parmesean",
    "Chicken breast, cheese, and pasta.",
    "19"
  );
  const special3 = item(
    "Lasagna",
    "Ground beef, cottage cheese, and pasta.",
    "15"
  );
  specials.push(special1, special2, special3);

  const app1 = item(
    "Fried Zucchini",
    "Breadcrumbs, zucchini, and eggwash.",
    "7"
  );
  const app2 = item(
    "Cheesesteak Eggrolls",
    "Steak, onions, and peppers.",
    "10"
  );
  const app3 = item(
    "Potstickers",
    "Wonton wraps, ground beef, and carrots.",
    "8"
  );
  appetizers.push(app1, app2, app3);

  const entree1 = item(
    "Cheese Pizza",
    "Mozzarella, dough, and maranara.",
    "15"
  );
  const entree2 = item("Spaghetti", "Pasta, meatballs, and sauce", "12");
  const entree3 = item("Stromboli", "Dough, cheese, and pepperonis.", "13");
  entrees.push(entree1, entree2, entree3);

  // push section elements into the container div
  empty();
  display.append(header1, section1, header2, section2, header3, section3);
}
