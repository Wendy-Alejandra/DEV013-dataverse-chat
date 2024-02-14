// En este archivo definirás tus rutas e importarás los componentes que vas a renderizar.


import { setRoutes, setRootElement, onURLChange } from './router.js';
import {Example} from './views/Example.js';
import {Error} from './views/Error.js';

//Ejemplo de definición de rutas:

const routes = {
    "/": Example,
    "/error": Error,  
}

const viewContainer = document.getElementById('root');
setRoutes(routes);



document.addEventListener('DOMContentLoaded', (event)=>{
    console.log("DOM fully loaded and parsed");
    console.log(event.target.location.pathname);
    setRootElement(viewContainer);
    onURLChange(event.currentTarget.location);
});

window.addEventListener("popstate", (event) => {
    onURLChange(window.location);
});
/*
TODO:
1.- Definir rutas en router.
2.- Pasar "root element" a router.
3.- Invocar el router para renderizar la vista correcta.
*/