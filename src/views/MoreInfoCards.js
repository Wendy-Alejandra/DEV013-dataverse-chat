
import { data } from "../data/dataset.js"
import { Header } from "../components/Header.js";
import { Footer } from "../components/Footer.js";

export const More = () => {
    const section = document.createElement("section");
    const div = document.createElement("div");
    div.innerHTML = `
        <h2>${data.name}</h2>
        <p>${data.shortDescription}</p>
            <div>
                <img itemprop="image" src="${data.imageUrl}" alt="${data.name}">
                <div>
                    <p>Departure Port: ${data.departurePort}</p>
                    <p>${data.facts.cruisePrice}</p>
                    <p>AVG PER PERSON</p>
                    <p>Cruise Date: ${data.facts.cruiseDate}</p>
                    <p>Duration: ${data.facts.durationInDays}</p>
                </div>
            </div>
            <div>
                <p>If you want more information, chat with me! <i class="bi bi-chat-text"></i></p>
            </div>       
        `;
    section.append(Header(), div, Footer());

    return div;
}
export const MoreInfoCards = () => {
    const error = document.createElement("h1");
    error.textContent = "mas informacion cards";
    return error;
};