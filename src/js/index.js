import homePage from "./home.js";
import menuPage from "./menu.js";
import contactPage from "./contact.js";
import creditForImg from "./credit.js";
import "../style.css";

const content = document.querySelector("#content");

(() => {
  content.appendChild(homePage());
})();

document.querySelector("nav").addEventListener("click", renderContent);

function renderContent(e) {
  removeContent();

  const target = e.target;
  let pageContent;
  switch (target.id) {
    case "home":
      pageContent = homePage;
      break;
    case "menu":
      pageContent = menuPage;
      break;
    case "contact":
      pageContent = contactPage;
      break;
  }
  content.appendChild(pageContent());
}

function removeContent() {
  while (content.firstChild) {
    content.firstChild.remove();
  }
}

(() => {
  const footer = document.createElement("footer");
  const credit = document.createElement("p");
  credit.textContent = "Background ";
  credit.appendChild(creditForImg("background"));
  footer.appendChild(credit);
  content.insertAdjacentElement("afterend", footer);
})();
