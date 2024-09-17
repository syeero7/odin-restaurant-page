import generateCreditForImg from "./credit.js";

export default function createMenuPage() {
  const containerFrag = document.createDocumentFragment();
  const menuHeader = document.createElement("h1");
  const menu = {
    Starter: [
      ["Bruschetta", "$13"],
      ["Caprese-Salad", "$15"],
    ],
    Main: [
      ["Margherita-Pizza", "$15"],
      ["Spaghetti-Bolognese", "$12"],
      ["Fettuccine-Alfredo", "$18"],
    ],
    Dessert: [
      ["Tiramisu", "$8"],
      ["Gelato", "$10"],
    ],
  };

  menuHeader.textContent = "Menu";
  containerFrag.appendChild(menuHeader);

  for (const course in menu) {
    const courseHeader = document.createElement("h2");
    const courseContent = document.createDocumentFragment();
    courseHeader.textContent = course;

    for (const dish of menu[course]) {
      const dishContainer = document.createElement("div");
      const dishImg = document.createElement("div");
      const dishName = document.createElement("h3");
      const dishPrice = document.createElement("p");
      const credit = document.createElement("p");

      dishContainer.classList.add("dish-container");
      dishImg.classList.add("dish-img", `${dish[0].toLowerCase()}`);
      dishName.classList.add("dish-name");
      dishPrice.classList.add("dish-price");
      credit.classList.add("credit");

      dishName.textContent = dish[0].replace("-", " ");
      dishPrice.textContent = dish[1];
      credit.appendChild(generateCreditForImg(dish[0]));

      dishContainer.append(dishName, dishImg, dishPrice, credit);
      courseContent.appendChild(dishContainer);
    }
    containerFrag.append(courseHeader, courseContent);
  }
  return containerFrag;
}
