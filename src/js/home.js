export default function createHomePage() {
  const hours = {
    Sunday: "8.30 AM - 9.00 PM",
    Monday: "7.00 AM - 10.30 PM",
    Tuesday: "7.00 AM - 10.30 PM",
    Wednesday: "7.00 AM - 10.30 PM",
    Thursday: "8.30 AM - 10.30 PM",
    Friday: "8.00 AM - 9.30 PM",
    Saturday: "8.30 AM - 9.00 PM",
  };
  const container = document.createElement("div");
  const restaurantName = document.createElement("h1");
  const tagline = document.createElement("h2");
  const description = document.createElement("p");
  const h3hours = document.createElement("h3");
  const hoursContainer = document.createElement("div");

  restaurantName.textContent = "Delizioso";

  tagline.textContent = "Experience the Taste of Italy in Your Hometown";
  tagline.classList.add("tagline");

  description.textContent =
    "Delizioso offers a wide variety of authentic Italian dishes, prepared with fresh ingredients and a lot of love.";
  description.classList.add("description");

  h3hours.textContent = "Hours";
  hoursContainer.classList.add("hours");
  hoursContainer.appendChild(h3hours);

  for (const d in hours) {
    const day = document.createElement("p");
    const time = document.createElement("span");
    time.classList.add("time");

    day.textContent = d;
    time.textContent = hours[d];
    day.appendChild(time);
    hoursContainer.appendChild(day);
  }

  container.append(restaurantName, tagline, description, hoursContainer);
  return container;
}
