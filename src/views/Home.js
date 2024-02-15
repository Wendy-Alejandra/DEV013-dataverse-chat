import { navigateTo } from "../router.js";
import { Footer } from "./../components/Footer.js";

export const Home = () => {
  const section = document.createElement("section");
  const div = document.createElement("div");
  div.innerHTML = `        
        <h1 class="title-home">WELCOME TO CRUISE LINES</h1>
        <section class="home-section">
            <img class="img-home" src='https://github.com/Wendy-Alejandra/DEV013-dataverse/blob/main/src/data/images/symphonyOfTheSeasCaribe.jpeg?raw=true'/>
            <div class="text-button">
                <p class="text-home">Please press the GO button and enjoy the Trip</p>
                <button class="go">GO</button>
            </div>
        </section>
    `;
  div.setAttribute("class", "contenedor-home");
  section.append(div, Footer());

  const buttonGo = section.querySelector(".go");
  buttonGo.addEventListener('click', () => navigateTo ("/cards", {}));


  return section;
};
