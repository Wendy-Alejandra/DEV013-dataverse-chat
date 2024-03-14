export const getApiKey = () => {
  // Implementa el código para obtener la API KEY desde Local Storageç
  const getApi = localStorage.getItem("apiKey");
  return getApi;

};

export const setApiKey = (key) => {
  // Implementa el código para guardar la API KEY en Local Storage
  const saveApiKey = localStorage.setItem("apiKey", key);
  return saveApiKey;

};

export const deleteApiKey = () => {
  const deleteApiKey = localStorage.removeItem("apiKey");
  return deleteApiKey;
}
