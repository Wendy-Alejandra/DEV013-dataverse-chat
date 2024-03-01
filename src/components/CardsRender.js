import { navigateTo } from "../router.js";

export const CardsRender = (data) => {
  /* All cards rendering (Renderizando toda las tarjetas) */
  const ul = document.createElement("ul");
  let html = "";
  data.forEach((card) => {
    html += `<li itemscope="" itemtype="name" class="cards">
      <img itemprop="image" src="${card.imageUrl}" alt="${card.name}">
      <dl itemprop="name">${card.name}</dl>
      <dd itemprop="departureBoatTerminal"> Port: ${card.facts.departurePort}</dd>
      <dd itemprop="totalPrice">${card.facts.cruisePrice}</dd>
      <dd itemprop="description">AVG PER PERSON</dd>
      <button class="see-more" data-id="${card.id}">See more</button>
  </li>`;
  });

  ul.innerHTML = html;

  /* Button selection and listening when clicking each card (seleccionando los botones
    see more y escuchando cuando se hace click en cada tarjeta) */
  const buttons = ul.querySelectorAll(".see-more");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const cardId = button.getAttribute("data-id");
      navigateTo("/moreInfoCards", { id: cardId });
    });
  });

  return ul;
};
