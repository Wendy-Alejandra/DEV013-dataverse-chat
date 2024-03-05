// Importa la función para obtener la API KEY desde apiStorage.js
import { getApiKey } from "./apiStorage.js";


export const communicateWithOpenAI = (messages) => {
//Aquí es donde debes implementar la petición con fetch o axios
  messages = getApiKey();
  return messages;
};