import { data } from "./../data/dataset.js";
import { Header } from "../components/Header.js";
import { Footer } from "../components/Footer.js";
import { navigateTo } from "../router.js";

export const GroupChat = () => {
  document.title = "Group Chat";
  const container = document.createElement("div");
  const blueContainer= document.createElement('div');
  blueContainer.className = "background-blue";
  const list= document.createElement("div");
  list.className = "list";
  let contacts= "";
  data.forEach((card)=>{
    contacts += `
    <section class="contacts-style">
      <img class="imag-chat-group" src="${card.imageUrl}" alt="${card.name}">
      <div class= "header-chat-group">
        <h3 class= "name-cruise">${card.name}</h3>
        <p><i class="bi bi-circle-fill"></i>Online</p>
      </div>
    </section>
    `
  });
  list.innerHTML= contacts;

  const whiteContainer= document.createElement("div");
  whiteContainer.className = "background-white group";
  const whiteContainerSecondPart = document.createElement("div");
  whiteContainerSecondPart.className = "chat-group-text";
  whiteContainerSecondPart.innerHTML= `
    <header class="infor-title">
      <h2>Group Chat</h2>
      <button class="close"><i class="bi bi-x-lg"></i></button>
    </header>
    <article class="chat-background">
      <div class="body-chat">
      </div>
      </section>
      <section class="message-bar">
        <textarea class="text-input" placeholder="Write a new message"></textarea>
        <button class="send-message"><i class="bi bi-send"></i></button>
      </section>
    </article>`;

  whiteContainer.append(list, whiteContainerSecondPart);
  blueContainer.append(Header(), whiteContainer);
  container.append(blueContainer, Footer());

  const buttonClose = whiteContainer.querySelector(".close");
  buttonClose.addEventListener("click", () => {
    navigateTo("/cards");
  });

 
  return container;
};
