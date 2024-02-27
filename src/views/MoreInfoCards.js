import { Header } from "./../components/Header.js";
import { data } from "./../data/dataset.js"
import { Footer } from "./../components/Footer.js";

export const MoreInfoCards = (cardId) => {
    const container = document.createElement("div");
    const blueContainer = document.createElement("div");
    blueContainer.className = 'background-blue';
    const cruise = data.find( elemento => elemento.id === cardId)
    const whiteContainer = document.createElement("main");
    whiteContainer.className = 'background-white';
    whiteContainer.innerHTML= `
    <header>
        <h2>${cruise.name}</h2>
    </header>
    <p>${cruise.shortDescription}</p>
    <article class="article-infor">
        <figure>
            <img itemprop="image" src="${cruise.imageUrl}" alt="${cruise.name}">
        </figure>
        <section>
            <p> <strong> Departure Port:</strong>  ${cruise.facts.departurePort}</p>
            <p>${cruise.facts.cruisePrice}</p>
            <p>AVG PER PERSON</p>
            <section>
                <p><strong>Cruise Date: </strong>${cruise.facts.cruiseDate}</p>
                <p><strong>Duration:</strong> ${cruise.facts.durationInDays}</p>
            </section>
        </section> 
    </article>    
    <section class="boton-infor">
        <p>If you want more information, chat with me! <i class="bi bi-chat-text"></i></p>
    </section> 
    `;
    blueContainer.append(Header(),whiteContainer);
    container.append(blueContainer, Footer());


    return container;

};