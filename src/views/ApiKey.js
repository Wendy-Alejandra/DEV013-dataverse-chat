import { Header } from "../components/Header.js";
import { Footer } from "../components/Footer.js";
import { navigateTo } from "./../router.js";
import { setApiKey } from "./../lib/apiStorage.js";

export const ApiKey = ({ id: cardId }) => {
  document.title = "Api Key";

  const container = document.createElement("div");
  const blueContainer = document.createElement("div");
  blueContainer.className = "background-blue";
  const whiteContainer = document.createElement("main");
  whiteContainer.className = "background-white";
  whiteContainer.innerHTML = `
    <header class="infor-title">
        <div class="header-API">
            <i class="bi bi-key-fill"></i>
            <h2>API Key needed</h2>
        </div>
        <button class="close"><i class="bi bi-x-lg"></i></button>
    </header>    
    <section class="section-1">
            <input type="text" class="api-key" placeholder="Enter your API Key here!"></input>
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
  close.addEventListener("click", () => {
    navigateTo("/moreInfoCards", { id: cardId });
  });

  const save = whiteContainer.querySelector(".save");
  const inputApi= whiteContainer.querySelector('.api-key');
  save.addEventListener("click", () => {
    const inputApiValue = inputApi.value;
    setApiKey(inputApiValue);
    if (inputApiValue !== "") {
      navigateTo("/individualChat", { id: cardId });
    } else {
      const incorrectApi = whiteContainer.querySelector(".incorrect-api");
      incorrectApi.textContent = "Incorrect API Key, Try again!";
    }

    // navigateTo("/individualChat", { id: cardId });
  });
  return container;
};
