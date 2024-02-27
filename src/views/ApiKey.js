import { Header } from "../components/Header.js";
import { Footer } from "../components/Footer.js";

export const ApiKey = () => {
    const container = document.createElement("div");
    const blueContainer = document.createElement("div");
    blueContainer.className = 'background-blue';
    const whiteContainer = document.createElement("main");
    whiteContainer.className = 'background-white';
    whiteContainer.innerHTML = `
    <header class="api-title">
        <h2 class="title"><i class="bi bi-key-fill"></i>API Key needed</h2>
        <button class="close"><i class="bi bi-x-lg"></i></button>
    </header>    
    <section class="section-1">
        <form>
            <input type="password" placeholder="Enter your API Key here!"></input>
            <button class="save">Save</button>
        </form>
    </section>
    <section class="section-2">
        <div class="incorrect-api"></div>
    </section>
    <section class="section-3">
        <p><strong>Don't have an API Key?</strong></p>
        <a href="https://platform.openai.com/api-keys">Generate one here!</a>
    </section>
    `;
    
    blueContainer.append(Header(), whiteContainer);
    container.append(blueContainer, Footer());

    return container;
}