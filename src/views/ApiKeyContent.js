import { BlueWhiteContainers } from "../components/BlueWhiteContainers.js";
import { Header } from "../components/Header.js";
import { Footer } from "../components/Footer.js";

export const ApiKeyContent = () => {
    const apiKey = document.createElement("section");
    const div = document.createElement("div");
    const separation = document.createElement("div");
    apiKey.setAttribute("class", "white-container");
    apiKey.innerHTML = `
        <h2><i class="bi bi-key-fill"></i>API Key needed</h2>
        <button class="close"><i class="bi bi-x-lg"></i></button>
    `;
    
    //div.append(Header(), apiKey, Footer());
    div.append(Header(), apiKey);
    separation.append(BlueWhiteContainers(div), Footer());
    return separation;
    //return BlueWhiteContainers( div, Footer());

    // BlueWhiteContainers().append(Header(), apiKey);

    //return div.append(BlueWhiteContainers(), Footer())
    


    //return BlueWhiteContainers(div);
}