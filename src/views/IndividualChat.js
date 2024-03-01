import { data } from "./../data/dataset.js";

import { Header } from "../components/Header.js";
import { Footer } from "../components/Footer.js";

export const IndividualChat = (cardId) => {
    console.log("SOY CARDID", cardId);
    const container = document.createElement("div");
    const blueContainer = document.createElement("div");
    blueContainer.className= 'background-blue';
    const cruises = data.find( elemento => elemento.id === cardId)
    const whiteContainer = document.createElement("main");
    whiteContainer.className= 'background-white chat';
    // Suggestion: change div class name contenedor-home to white-container because it will not be only used in the home view
    whiteContainer.innerHTML = `
    <header class="title-chat">
        <figure>
            <img class="imag-chat" itemprop="image" src="${cruises.imageUrl}" alt="${cruises.name}">
        </figure>
        <div class="header-chat">
            <h2>${cruises.name}</h2>
            <p><i class="bi bi-circle-fill"></i>Online</p>
        </div>
        <button class="close"><i class="bi bi-x-lg"></i></button>
    </header>
    <article class="chat-background">
        <section class="message-bar">
            <textarea placeholder="Write a new message"></textarea>
            <button class="send-message"><i class="bi bi-send"></i></button>
        </section>
    </article>
    `;
    blueContainer.append(Header(), whiteContainer);
    container.append(blueContainer, Footer());
    return container;
}