// Importa la función para obtener la API KEY desde apiStorage.js
import { getApiKey } from "./apiStorage.js";

// obtener la apikey
const receiveApiKey = getApiKey();
console.log("esta es la api key:", receiveApiKey);


export const communicateWithOpenAI = async (cruiseShips, userMessages) => {
//Aquí es donde debes implementar la petición con fetch o axios
  const respuesta = await fetch ('https://api.openai.com/v1/chat/completions', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer" + receiveApiKey,
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: `You are a cruise ship: ${cruiseShips}, give short answers`,
        },
        {
          role: "user",
          content: userMessages,
        },
      ]
    })
  });
  console.log ("esta es la respues", respuesta);


  return respuesta;
  
};

