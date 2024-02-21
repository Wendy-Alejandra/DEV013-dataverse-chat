
import { data } from "./../data/dataset.js";
import { Header } from "../components/Header.js";
import { Footer } from "../components/Footer.js";

export const MoreInfoCards = (cardId) => {
    const section = document.createElement("section");
    const div = document.createElement("div");
    const cruise = data.find(x => x.id === cardId);
    div.innerHTML = `        
    <h3>${cruise.name}</h3>
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
    </div> `

    section.append(Header(), div, Footer());

    return div;
};