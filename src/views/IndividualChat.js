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
            <h2>${cruises.name}</h2>
            <p><i class="bi bi-circle-fill"></i>Online</p>
        </div>
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
    </article>
    `;
  blueContainer.append(Header(), whiteContainer);
  container.append(blueContainer, Footer());

  const buttonClose = whiteContainer.querySelector(".close");
  buttonClose.addEventListener("click", () => {
    navigateTo("/cards");
  });

  const sendMessageButton = whiteContainer.querySelector(".bi-send");
  const userInput = whiteContainer.querySelector(".text-input");
  //const userInput = whiteContainer.querySelector(".user-msg");
  const chatWindow = whiteContainer.querySelector(".body-chat");

  const sendMessage = async () => {

    /* User message container */
    let userInputValue = userInput.value;
    const userContainer= document.createElement("div");
    userContainer.className = "text-user";
    userContainer.textContent= userInputValue;
    userInput.value = "";

    /* ChatAPI message container */
    const chatAPI = document.createElement("div");
    chatAPI.className= "text-chatAPI";

    const chatAPIResponse= await communicateWithOpenAI(cruises.description, userInputValue);
    console.log(chatAPIResponse);
    if(chatAPIResponse === "error"){
      navigateTo("/error");
    } else{
      chatAPI.innerHTML=`<div class="text-chatAPI">${chatAPIResponse}</div>`;
    }
    chatWindow.append(userContainer, chatAPI);



    // textMessage.textContent = textarea.value;
    // divMessage.append(textMessage);
    // textarea.value = "";
    // userInput.append(divMessage);
  };
  

  /*sendMessageButton.addEventListener("click", ()=>{
    if(userInput){
      communicateWithOpenAI(cruises.name, userMessages.input)
      .then((res)=>res.json())
      .then((data)=>{
        chatWindow.append(cruises, input.value, data.choices[0].message.content)
      }
      )
      .catch((error)=>{
        console.log(error);
      });
    }
   

  });*/
  sendMessageButton.addEventListener("click", sendMessage);
  userInput.addEventListener("keyup", (event)=>{
    if(event.key === "Enter" && userInput.value !==""){
      sendMessage();
    }
  })

  return container;
};
