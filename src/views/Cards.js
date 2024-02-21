import { data } from "./../data/dataset.js";
import { Header } from "./../components/Header.js";
import { Menu } from "./../components/Menu.js";
import { Footer } from "./../components/Footer.js";
import { navigateTo } from "../router.js";

export const Cards = () => {
  const div = document.createElement("div");
  const ul= document.createElement("ul");
  let html = "";
  data.forEach((card, index) => {
    const cardId = `card-${index}`;
    console.log(cardId);
    const i = `${index}`
    console.log(i);
    html += `<li id="${cardId}" itemscope="" itemtype="name" class="cards">
    <img itemprop="image" src="${card.imageUrl}" alt="${card.name}">
    <dl itemprop="name">${card.name}</dl>
    <dd itemprop="departureBoatTerminal"> Port: ${card.facts.departurePort}</dd>
    <dd itemprop="totalPrice">${card.facts.cruisePrice}</dd>
    <dd itemprop="description">AVG PER PERSON</dd>
    <button class="see-more" data-card-id="${cardId}">See more</button>
</li>`

  });
  ul.innerHTML = html;
  div.append(Header(), Menu(), ul, Footer());
  console.log(typeof ul);
  const buttonsSeeMore = ul.querySelectorAll(".see-more");
  console.log(buttonsSeeMore);
  buttonsSeeMore.forEach(button => {
    button.addEventListener('click', (event) => {
    const cardId = event.target.getAttribute("data-card-id");
    console.log(cardId);
    navigateTo (`/moreInfoCards`, cardId);
    });
  });
 
  return div;
};

