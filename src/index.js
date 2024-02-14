// En este archivo definirás tus rutas e importarás los componentes que vas a renderizar.
import { Home } from "./views/Home.js";
import { Cards } from "./views/Cards.js";
import { Error } from "./views/Error.js";
import { setRootEl, setRoutes, onURLChange } from './router.js';

/*Ejemplo de definición de rutas:*/
const routes = {
    "/": Home,
    "/Cards": Cards,
    // "/MoreInforCards": MoreInforCards,
    // "/API": Api,
    // "/GroupChat": GroupChat,
    // "/IndividualChat": IndividualChat,
    "/error": Error,  
}

const viewContainer = document.getElementById("root")
setRoutes(routes);
setRootEl(viewContainer);

document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM fully loaded and parsed");
    console.log(event.currentTarget.location);
    onURLChange(event.currentTarget.location);
})


/*
TODO:
1.- Definir rutas en router.
2.- Pasar "root element" a router.
3.- Invocar el router para renderizar la vista correcta.
*/

// const root = document.querySelector('#root');
// root.appendChild(Home());