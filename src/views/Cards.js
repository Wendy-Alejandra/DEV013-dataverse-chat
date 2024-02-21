import { data } from "./../data/dataset.js";
import { Header } from "./../components/Header.js";
import { Menu } from "./../components/Menu.js";
import { Footer } from "./../components/Footer.js";
import { navigateTo } from "../router.js";
import { filterData } from "./../lib/dataFunctions.js";

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
    <button class="see-more" data-id="${card.id}">See more</button>
</li>`
  });
  
  ul.innerHTML = html;
  div.append(Header(), Menu(), ul, Footer());


  const selectFilter = div.querySelector('select[data-testid="select-filter"]');
  console.log(selectFilter);
  selectFilter.addEventListener("change", (e)=>{
    const filteredData= filterData(data, "cruisePrice", e.target.value);
    ul.textContent="";
    ul.append(filteredData);
    console.log(ul);
  });

  const botones = ul.querySelectorAll(".see-more");
  console.log(botones);
  botones.forEach((boton) => {
    boton.addEventListener("click", () => {
      const cardId = boton.getAttribute("data-id");
      console.log(cardId);
      navigateTo("/moreInfoCards", cardId);
      console.log(navigateTo)
    });
  });
  
  return div;

};

