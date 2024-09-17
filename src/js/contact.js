import creditForImg from "./credit.js";

export default function createContactPage() {
  const container = document.createDocumentFragment();
  const contactUs = document.createElement("h1");
  const img = document.createElement("div");
  const credit = document.createElement("p");
  const infoContainer = document.createElement("div");
  const manager = document.createElement("h3");
  const email = document.createElement("p");
  const phone = document.createElement("p");
  const address = document.createElement("p");

  img.classList.add("contact-page-img");
  credit.classList.add("credit");
  infoContainer.classList.add("contact-info");

  contactUs.textContent = "Contact Us";
  manager.textContent = "Manager";
  email.textContent = "restuantdelizioso@nomail.com";
  phone.textContent = "101-101-0011";
  address.textContent = "102 Food st. Foodland, Hungry";

  credit.appendChild(creditForImg("Margherita-Pizza"));
  img.appendChild(credit);
  infoContainer.append(manager, email, phone, address);
  container.append(contactUs, img, infoContainer);

  return container;
}
