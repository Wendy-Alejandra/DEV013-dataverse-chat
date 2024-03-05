import { data } from "./../data/dataset.js";
import { Header } from "../components/Header.js";
import { Footer } from "../components/Footer.js";
import { navigateTo } from "../router.js";

export const GroupChat = ({ id: cardId }) => {
  document.title = "Group Chat";
  const container = document.createElement("div");
  const blueContainer = document.createElement("div");
  blueContainer.className = "background-blue";
  const cruises = data.find((elemento) => elemento.id === cardId);
  const whiteContainer = document.createElement("main");
  whiteContainer.className = "background-white chat";
  whiteContainer.innerHTML = `
    <header class="title-chat">
        <figure>
            <img class="imag-chat" itemprop="image" src="${cruises.imageUrl}" alt="${cruises.name}">
        </figure>
        <div class="header-chat">
            <h2>To: Group Chat</h2>
            <p><i class="bi bi-circle-fill"></i>Online</p>
        </div>
        <button class="close"><i class="bi bi-x-lg"></i></button>
    </header>
    <article class="chat-background">
        <section class="message-bar">
            <textarea placeholder="Write a new message"></textarea>
            <button class="send-message"><i class="bi bi-send"></i></button>
        </section>
    </article>
    `;

  // const asideContainer = document.createElement("aside");
  // asideContainer.innerHTML = `
  // <div class="aside">
  //   <h2>Contacts</h2>
  // </div>
  // <div class="header-chat">
  //   <ul class="contact-list>
  //       <li></li>
  //   </ul>
  // </div>

  // `;
  blueContainer.append(Header(), whiteContainer);
  container.append(blueContainer, Footer());

  const buttonClose = whiteContainer.querySelector(".close");
  buttonClose.addEventListener("click", () => {
    navigateTo("/cards");
  });

  const sendMessage = whiteContainer.querySelector(".send-message");
  sendMessage.addEventListener("click", () => {});

  return container;
};
