import { navigateTo } from "../router.js";
import { Footer } from "./../components/Footer.js";

export const Error = () => {
  document.title = "Error 404";
  const container = document.createElement("div");
  const blueContainer = document.createElement("div");
  blueContainer.className = "background-blue";
  const whiteContainer = document.createElement("div");
  whiteContainer.className = "background-white";
  whiteContainer.innerHTML = `
    <h1 class="title-error">ERROR 404</h1>
    <section class="error-container">
      <div class="dont-drown">
        <p class="text-error">Page not fount, Don't Drown!</p>
        <button class="button-go">Get you Cruise</button>
      </div>
        <img class="img-error" src= './error.png'/>
    </section>
    `;
  blueContainer.append(whiteContainer);
  container.append(blueContainer, Footer());

  const buttonGo = whiteContainer.querySelector(".button-go");
  buttonGo.addEventListener("click", () => {
    navigateTo("/cards");
  })
  return container;
};
