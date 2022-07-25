/* eslint-disable no-undef */
import { empty } from "./reset";
import "./contact.css";

export default function loadContactPage() {
    const page = document.getElementById("container");
    page.classList.add("contact-page");

    const pageHeader = document.createElement("h1");
    pageHeader.innerText = "We're Hiring!"
    const instructions = document.createElement("p");
    instructions.innerText = "Fill out the form below to be apply for a position."
    
    const myForm = document.createElement("form");

    const nameSection = document.createElement("div");
    nameSection.classList.add("name-section");
    const firstLabel = document.createElement("label");
    firstLabel.setAttribute("for", "first-name");
    firstLabel.innerText = "First Name";
    const firstName = document.createElement("input");
    firstName.setAttribute("type", "text");
    firstName.setAttribute("id", "first-name");
    const secondLabel = document.createElement("label");
    secondLabel.setAttribute("for", "second-name");
    secondLabel.innerText = "Last Name";
    const lastName = document.createElement("input");
    lastName.setAttribute("type", "text");
    lastName.setAttribute("id", "second-name")
    nameSection.append(firstLabel, firstName,secondLabel, lastName);

    const emailSection = document.createElement("div");
    emailSection.classList.add("email-section");
    const emailLabel = document.createElement("label");
    emailLabel.setAttribute("for", "email-input");
    emailLabel.innerText = "Email Address"
    const emailInput = document.createElement("input");
    emailInput.setAttribute("type", "email");
    emailSection.append(emailLabel, emailInput);

    const fileSection = document.createElement("input");
    fileSection.setAttribute("type", "file");


    myForm.append(nameSection, emailSection, fileSection);
    empty();
    page.append(pageHeader, instructions ,myForm);
}