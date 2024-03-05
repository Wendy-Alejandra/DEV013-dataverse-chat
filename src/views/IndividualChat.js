import { data } from "./../data/dataset.js";
import { Header } from "../components/Header.js";
import { Footer } from "../components/Footer.js";
import { navigateTo } from "../router.js";

export const IndividualChat = ({ id: cardId }) => {
  document.title = "Individual Chat";
  const container = document.createElement("div");
  const blueContainer = document.createElement("div");
  blueContainer.className = "background-blue";
  const cruises = data.find((elemento) => elemento.id === cardId);
  const whiteContainer = document.createElement("main");
  whiteContainer.className = "background-white chat";
  // Suggestion: change div class name contenedor-home to white-container because it will not be only used in the home view
  whiteContainer.innerHTML = `
    <header class="title-chat">
        <figure>
            <img class="imag-chat" itemprop="image" src="${cruises.imageUrl}" alt="${cruises.name}">
        </figure>
        <div class="header-chat">
            <h2>${cruises.name}</h2>
            <p><i class="bi bi-circle-fill"></i>Online</p>
        </div>
        <button class="close"><i class="bi bi-x-lg"></i></button>
    </header>
    <article class="chat-background">
        <section class="container-message">
          <div class="user-msg">
            <p class="user"></p>
          </div>
        </section>
        <section class="message-bar">
            <textarea class="text-input" placeholder="Write a new message"></textarea>
            <button class="send-message"><i class="bi bi-send"></i></button>
        </section>
    </article>
    `;
  blueContainer.append(Header(), whiteContainer);
  container.append(blueContainer, Footer());

  const buttonClose = whiteContainer.querySelector(".close");
  buttonClose.addEventListener("click", () => {
    navigateTo("/cards");
  });


  const sendMessage = whiteContainer.querySelector(".bi-send");
  // const userMessage = whiteContainer.querySelector(".user-msg");
  const placeholder = whiteContainer.querySelector("textarea[placeholder='Write a new message']");
  const textarea = whiteContainer.querySelector(".text-input");
  console.log(textarea);
  const prueba = textarea.value;
  const p = whiteContainer.querySelector(".user");
  sendMessage.addEventListener("click", () => {
    console.log(sendMessage);
    console.log(textarea.value);
    console.log("esta es la pruba:", prueba);
    const containerMessage = textarea.value;
    console.log("este es el contenedor:", containerMessage);
    p.textContent = containerMessage;
  //   if (prueba === "") {
  //     placeholder;
  //   } else {
  //     const containerMessage = prueba;
  //     p.textContent = containerMessage;
  //   }
  })

  return container;
};
