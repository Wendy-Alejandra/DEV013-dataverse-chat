import { Header } from "../components/Header.js";
import { Footer } from "../components/Footer.js";
import { navigateTo } from "./../router.js";
import { setApiKey, deleteApiKey, getApiKey } from "./../lib/apiStorage.js";

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
            <p class="apiKey-symbol"><i class="bi bi-key-fill"></i></p>
            <h2>API Key needed</h2>
        </div>
        <button class="close"><i class="bi bi-x-lg"></i></button>
    </header>    
    <section class="section-1">
            <input type="text" class="api-key" placeholder="Enter your API Key here!"></input>
            <button class="save button-key">Save</button>
            <button class="delete button-key">Delete</button>
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
    navigateTo("/cards");
  });

  const save = whiteContainer.querySelector(".save");
  const deleteButton = whiteContainer.querySelector(".delete");
  const inputApi = whiteContainer.querySelector('.api-key');
  const incorrectApi = whiteContainer.querySelector(".incorrect-api");

  // Al cargar la vista, comprobamos si hay una API key guardada
  const savedApiKey = getApiKey();
  if (savedApiKey) {
    inputApi.value = savedApiKey;
    save.style.display = "none";
    deleteButton.style.display = "inline";
    deleteButton.style.visibility = "visible";
  }

  save.addEventListener("click", () => {
    const inputApiValue = inputApi.value.trim();

    if (inputApiValue !== "") {
      // Guardamos la API key
      setApiKey(inputApiValue);
      // Actualizamos el botón y guardamos la API key
      save.style.display = "none";
      deleteButton.style.display = "inline";
      if (cardId === null || cardId === undefined) {
        navigateTo("/groupChat");
      } else {
        navigateTo("/individualChat", { id: cardId });
      }

    } else {
      incorrectApi.textContent = "Please enter a valid API Key.";
    }
  });

  deleteButton.addEventListener("click", () => {
    // Eliminamos la API key
    deleteApiKey();
    // Limpiamos el campo de entrada y mostramos el botón "Save"
    inputApi.value = "";
    save.style.display = "inline";
    deleteButton.style.display = "none";
  });
  return container;
};
