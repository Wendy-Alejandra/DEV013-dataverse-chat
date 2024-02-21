import { Header } from "./../components/Header.js";
import { data } from "./../data/dataset.js"
import { Footer } from "./../components/Footer.js";

export const MoreInfoCards = (cardId) => {
    console.log('cardIq que es', cardId)
    const container = document.createElement("section");
    const cruise = data.find( elemento => elemento.id === cardId)
    console.log("esto es", cruise);
    const div = document.createElement("div");
    div.innerHTML= `
    <h2>${cruise.name}</h2>
    <p>${cruise.shortDescription}</p>
    <div>
        <img itemprop="image" src="${cruise.imageUrl}" alt="${cruise.name}">
        <div>
            <p>Departure Port: ${cruise.facts.departurePort}</p>
            <p>${cruise.facts.cruisePrice}</p>
            <p>AVG PER PERSON</p>
            <p>Cruise Date: ${cruise.facts.cruiseDate}</p>
            <p>Duration: ${cruise.facts.durationInDays}</p>
        </div>
    </div>
    <div>
        <p>If you want more information, chat with me! <i class="bi bi-chat-text"></i></p>
    </div> 
    `;
    container.append(Header(), div, Footer());


    return container;

};