import { data } from "../data/dataset.js";
import { Header } from "../components/Header.js";
import { Footer } from "../components/Footer.js";

export const IndividualChat = () => {
    const section = document.createElement("section");
    const div = document.createElement("div");
    // Suggestion: change div class name contenedor-home to white-container because it will not be only used in the home view
    div.innerHTML = `
    <div class="contenedor-home">
        <h2>${data.name}</h2>
        <button><i class="bi bi-x-lg"></i></button>
        <h5><i class="bi bi-dot"></i>Online</h5>
    </div>
    
    <div class="chat-background">
        <div class="message-bar">
        <textarea placeholder="Write a new message"></textarea>
            <button class="send-message"><i class="bi bi-send"></i></button>
        </div>
    </div>
    `;
    section.append(Header(), div, Footer());
    return section;
}