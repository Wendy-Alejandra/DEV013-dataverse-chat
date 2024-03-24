import { data } from "./../data/dataset.js";
import { Header } from "../components/Header.js";
import { Footer } from "../components/Footer.js";
import { navigateTo } from "../router.js";
import { communicateWithOpenAI } from "./../lib/openAIApi.js";

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
            <h2 class="chat-header">${cruises.name}</h2>
            <p class="online"><i class="bi bi-circle-fill"></i>Online</p>
        </div>
        <div class="container-buttons individual-buttons">
          <button class="apiKey-symbol-chat"><i class="bi bi-key-fill"></i></button>
          <button class="close close-chat close-groupchat"><i class="bi bi-x-lg"></i></button>
        </div>

    </header>
    <article class="chat-background">

      <div class="body-chat">
      </div>

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
  
  /* Api key return to apikey view button added */
  const keyButton = whiteContainer.querySelector(".apiKey-symbol-chat");
  keyButton.addEventListener("click", () => {
    navigateTo("/ApiKey", {id: cardId});
  })

  const sendMessageButton = whiteContainer.querySelector(".bi-send");
  const userInput = whiteContainer.querySelector(".text-input");
  const chatWindow = whiteContainer.querySelector(".body-chat");
  //Scroll
  function scrollToBottom(){
    chatWindow.scrollTop = chatWindow.scrollHeight - chatWindow.clientHeight;
  }
  

  const sendMessage = async () => {

    /* User message container */
    const userInputValue = userInput.value;
    const userContainer= document.createElement("div");
    userContainer.className = "textBubble user";
    userContainer.textContent= userInputValue;
    userInput.value = "";

    /* ChatAPI message container */
    const chatAPI = document.createElement("div");
    chatAPI.className= "textBubble chatAPI";

    const chatAPIResponse= await communicateWithOpenAI(cruises.description, userInputValue);
    console.log(chatAPIResponse);
    if(chatAPIResponse === "error"){
      navigateTo("/error");
    } else{
      chatAPI.innerHTML=`${chatAPIResponse}`;
    }
    chatWindow.append(userContainer, chatAPI);
    scrollToBottom()
  };

  sendMessageButton.addEventListener("click", sendMessage);
  userInput.addEventListener("keyup", (event)=>{
    if(event.key === "Enter" && userInput.value !==""){
      sendMessage();
    }
  })

  return container;
};
