import { data } from "./../data/dataset.js";
import { Header } from "./../components/Header.js";
import { Menu } from "./../components/Menu.js";
import { Footer } from "./../components/Footer.js";
import { navigateTo } from "../router.js";

export const Cards = () => {
  const div = document.createElement("div");
  const ul= document.createElement("ul");
  let html = "";
  data.forEach(card => {
    html += `<li itemscope="" itemtype="name" class="cards">
    <img itemprop="image" src="${card.imageUrl}" alt="${card.name}">
    <dl itemprop="name">${card.name}</dl>
    <dd itemprop="departureBoatTerminal"> Port: ${card.facts.departurePort}</dd>
    <dd itemprop="totalPrice">${card.facts.cruisePrice}</dd>
    <dd itemprop="description">AVG PER PERSON</dd>
    <button class="see-more">See more</button>
</li>`
  });
  ul.innerHTML = html;
  div.append(Header(), Menu(), ul, Footer());

  const buttonSeeMore = ul.querySelector(".see-more");
  buttonSeeMore.addEventListener('click', () => navigateTo ("/moreInfoCards", {}));

  return div;


 
};

