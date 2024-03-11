import { Header } from "./../components/Header.js";
import { data } from "./../data/dataset.js";
import { Footer } from "./../components/Footer.js";
import { navigateTo } from "./../router.js";
import { getApiKey } from "./../lib/apiStorage.js";

export const MoreInfoCards = ({ id: cardId }) => {
  /* Web browser tab name */
  document.title = "More Info Cards";
  const container = document.createElement("div");
  const blueContainer = document.createElement("div");
  blueContainer.className = "background-blue";
  const cruise = data.find((elemento) => elemento.id === cardId);
  const whiteContainer = document.createElement("main");
  whiteContainer.className = "background-white";
  whiteContainer.innerHTML = `
    <header class="infor-title">
        <h2>${cruise.name}</h2>
        <button class="close"><i class="bi bi-x-lg"></i></button>
    </header>
    <p class="short-description">${cruise.shortDescription}</p>
    <article class="article-infor">
        <figure>
            <img itemprop="image" src="${cruise.imageUrl}" alt="${cruise.name}">
        </figure>
        <section class="section-price">
            <p class="p-infor"> <strong> Departure Port:</strong>  ${cruise.facts.departurePort}</p>
            <p class="infor-price p-infor">$${cruise.facts.cruisePrice}</p>
            <p class="p-infor">AVG PER PERSON</p>
            <section class="section-infor">
                <p class="p2-infor"><strong>Cruise Date: </strong>${cruise.facts.cruiseDate}</p>
                <p class="p2-infor"><strong>Duration:</strong> ${cruise.facts.durationInDays} nights</p>
            </section>
        </section> 
    </article>    
    <section class="boton-infor">
        <p class="p-boton">If you want more information, chat with me! &ensp;<i class="bi bi-chat-text"></i></p>
    </section> 
    `;
  blueContainer.append(Header(), whiteContainer);
  container.append(blueContainer, Footer());

  const close = whiteContainer.querySelector(".close");
  close.addEventListener("click", () => navigateTo("/cards"));

  const individualChat = whiteContainer.querySelector(".bi-chat-text");
  individualChat.addEventListener("click", () => {
    // navigateTo("/ApiKey", { id: cardId });
    const apiKeySave = getApiKey();
    console.log(apiKeySave);
    if (apiKeySave !== null) {
      navigateTo("/individualChat", { id: cardId });
    } else {
      navigateTo("/ApiKey", { id: cardId }); //See searchParam for ApiKey view
    }
  });
  return container;
};
