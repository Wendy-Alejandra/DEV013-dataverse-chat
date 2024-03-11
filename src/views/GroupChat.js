import { data } from "./../data/dataset.js";
import { Header } from "../components/Header.js";
import { Footer } from "../components/Footer.js";
//import { navigateTo } from "../router.js";

export const GroupChat = () => {
  document.title = "Group Chat";
  const container = document.createElement("div");
  const blueContainer= document.createElement('div');
  blueContainer.className = "background-blue";
  const list= document.createElement("div");
  let contacts= "";
  data.forEach((card)=>{
    contacts += `
    <img class="imag-chat" src="${card.imageUrl}" alt="${card.name}">
    <h3 class= "name-cruise">${card.name}</h3>
    <p>Online</p>
    `
  });
  list.innerHTML= contacts;

  const whiteContainer= document.createElement("div");
  whiteContainer.className = "background-white group";
  const whiteContainerSecondPart = document.createElement("div");
  whiteContainerSecondPart.innerHTML= `
    <header>
      <h2>Group Chat</h2>
      <button class="close"><i class="bi bi-x-lg"></i></button>
    </header>
    <article class="chat-background">

      <div class="body-chat">
      </div>

      <section class="container-message">
        <div class="user-msg">
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

 
  return container;
};
