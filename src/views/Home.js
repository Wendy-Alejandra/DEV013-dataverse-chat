import { Footer } from "./../components/Footer.js";

export const Home = () => {
    const section = document.createElement("section");
    const div = document.createElement("div");
    div.innerHTML =  `        
        <h1>WELCOME TO CRUISE LINES</h1>
        <img src="adventurOfTheSeasAruba.jpeg"/>
        <p>Please press the GO button and enjoy the Trip</p>
        <button>GO</button>
    `;
    section.append(div, Footer());
    return section;
};

