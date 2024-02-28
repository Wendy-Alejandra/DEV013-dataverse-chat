import { Header } from "../components/Header.js";
import { Footer } from "../components/Footer.js";
import { navigateTo } from "./../router.js";

export const ApiKey = () => {
    const container = document.createElement("div");
    const blueContainer = document.createElement("div");
    blueContainer.className = 'background-blue';
    const whiteContainer = document.createElement("main");
    whiteContainer.className = 'background-white';
    whiteContainer.innerHTML = `
    <header class="infor-title">
        <div class="header-API">
            <i class="bi bi-key-fill"></i>
            <h2>API Key needed</h2>
        </div>
        <button class="close"><i class="bi bi-x-lg"></i></button>
    </header>    
    <section class="section-1">
            <input type="password" placeholder="Enter your API Key here!"></input>
            <button class="save">Save</button>
    </section>
    <section class="section-2">
        <p class="incorrect-api"></p>
    </section>
    <section class="section-3">
        <p><strong>Don't have an API Key?</strong></p>
        <a href="https://platform.openai.com/api-keys">Generate one here!</a>
    </section>
    `;
    
    blueContainer.append(Header(), whiteContainer);
    container.append(blueContainer, Footer());

    const close = whiteContainer.querySelector(".close");
    close.addEventListener('click', () => navigateTo ("/moreInfoCards", {}));

    const save = whiteContainer.querySelector(".save");
    save.addEventListener('click', () => navigateTo ("/individualChat", {}));

    return container;
}