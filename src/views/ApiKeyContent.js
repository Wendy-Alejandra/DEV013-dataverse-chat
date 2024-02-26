import { BlueWhiteContainers } from "../components/BlueWhiteContainers.js";
import { Footer } from "../components/Footer.js";

export const ApiKeyContent = () => {
    const apiKey = document.createElement("section");
    const div = document.createElement("div");
    div.innerHTML = `
    <div>
        <h2><i class="bi bi-key-fill"></i>API Key needed</h2>
        <button class=></button>
    </div>
    `;




    return apiKey;
}