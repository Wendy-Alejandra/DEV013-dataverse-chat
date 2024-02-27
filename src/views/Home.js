import { navigateTo } from "../router.js";
import { Footer } from "./../components/Footer.js";

export const Home = () => {
  const container = document.createElement("div");
  const blueContainer = document.createElement("div");
  blueContainer.className = 'background-blue';
  const whiteContainer = document.createElement("div");
  whiteContainer.className = 'background-white';
  whiteContainer.innerHTML = `   
    <header class="header-home">       
      <h1 class="title-home">WELCOME TO CRUISE LINES</h1>
    </header>
    <main>
      <figure> 
        <img class="img-home" src='https://github.com/Wendy-Alejandra/DEV013-dataverse/blob/main/src/data/images/symphonyOfTheSeasCaribe.jpeg?raw=true'/>
      </figure>
      <article>
        <p class="text-home">Please press the GO button and enjoy the trip</p>
        <button class="go">GO</button>
      <article>
    </main>
    `;
  
  blueContainer.append(whiteContainer);
  container.append(blueContainer, Footer());


  const buttonGo = whiteContainer.querySelector(".go");
  buttonGo.addEventListener('click', () => navigateTo ("/cards", {}));


  return container;
};
