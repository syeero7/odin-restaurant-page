export default function generateCreditForImg(imageName) {
  const credits = {
    Bruschetta: [
      "https://pixabay.com/users/newhallpublishing-25658120/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=7006980",
      "Tracey Pocock",
      "https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=7006980",
    ],
    "Caprese-Salad": [
      "https://pixabay.com/users/pastel100-7141960/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=3330889",
      "Julia",
      "https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=3330889",
    ],
    "Margherita-Pizza": [
      "https://pixabay.com/users/zuzi99-7340598/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=3010062",
      "zuzana gazdikova",
      "https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=3010062",
    ],
    "Spaghetti-Bolognese": [
      "https://pixabay.com/users/ritae-19628/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=787043",
      "-Rita-👩‍🍳 und 📷 mit ❤",
      "https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=787043",
    ],
    "Fettuccine-Alfredo": [
      "https://pixabay.com/users/crafterchef-39580535/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=8305773",
      "Crafter Chef",
      "https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=8305773",
    ],
    Tiramisu: [
      "https://pixabay.com/users/anestiev-2736923/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=2157243",
      "Christo Anestev",
      "https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=2157243",
    ],
    Gelato: [
      "https://pixabay.com/users/binamg-4117808/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=1932375",
      "binamg",
      "https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=1932375",
    ],
    background: [
      "https://pixabay.com/users/katamaheen-24851885/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=7248455",
      "Katamaheen",
      "https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=7248455",
    ],
  };

  const creditFrag = document.createDocumentFragment();

  for (const credit in credits) {
    if (credit === imageName) {
      const linkOne = document.createElement("a");
      const linkTwo = document.createElement("a");
      const imgBy = document.createTextNode("Image by ");
      const from = document.createTextNode(" from ");

      linkOne.href = credits[credit][0];
      linkOne.textContent = credits[credit][1];
      linkTwo.href = credits[credit][2];
      linkTwo.textContent = "Pixabay";

      creditFrag.append(imgBy, linkOne, from, linkTwo);
      break;
    }
  }
  return creditFrag;
}
