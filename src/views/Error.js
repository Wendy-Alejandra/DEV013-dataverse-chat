import { Header } from "./../components/Header.js";
import { Footer } from "./../components/Footer.js";

export const Error = () => {
    const section = document.createElement("section");
    const div = document.createElement("div");
    div.innerHTML= `
    <img class="img-error" src= './fondo_error.png'/>
    `;
    section.append(Header(), div, Footer());
    return section;
};