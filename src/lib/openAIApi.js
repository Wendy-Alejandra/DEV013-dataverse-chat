// Importa la función para obtener la API KEY desde apiKey.js
import { getApiKey } from './apiStorage.js';

export const communicateWithOpenAI = async (cruiseShips, userMessages) => {
  //Aquí es donde debes implementar la petición con fetch o axios
  const receiveApiKey = getApiKey();
  const options = {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${receiveApiKey}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: `You are a cruise ship: ${cruiseShips}, give short answers`,
          // max_tokens: 100
        },
        {
          role: "user",
          content: userMessages,
          // max_tokens: 100
        }
      ]
    })
  }
  
  
  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', options)
    console.log (response);
    const data = await response.json() // .json() is an async method and that's why we have to write await before response.json()
    console.log(data,"respuesta OpenAI");
    return data.choices[0].message.content;

  } catch (error) {
    console.log(error);
    throw error;
  }
};