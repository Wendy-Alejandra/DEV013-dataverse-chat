// En este archivo definirás tus rutas e importarás los componentes que vas a renderizar.
import { Home, Cards, MoreInforCards, GroupChat, IndividualChat } from '.views/Home.js';

/*Ejemplo de definición de rutas:*/

const routes = {
    "/": Home,
    "/Cards": Cards,
    "/MoreInforCards": MoreInforCards,
    "/Api": Api,
    "/GroupChat": GroupChat,
    "/IndividualChat": IndividualChat,
    "/Error": Error  
}


/*
TODO:
1.- Definir rutas en router.
2.- Pasar "root element" a router.
3.- Invocar el router para renderizar la vista correcta.
*/

const root = document.querySelector('#root');
root.appendChild(Home());