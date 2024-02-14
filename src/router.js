//el objeto que contiene y mapea las rutas de nuestro sitio
let ROUTES = {};

//va hacer la referencia al elemento HTML en donde vamos a dibujar el contenido de nuestros componentes
let rootElement = '';

export const setRootElement = (newRootElementValue) => {
    // validar si newRootElementValue es objeto HTML
    rootElement = newRootElementValue;  
  }
  
  export const setRoutes = (newRoutesValue) => {
    // optional Throw errors if routes isn't an object
    // optional Throw errors if routes doesn't define an /error route
    // assign ROUTES
    if(typeof newRoutesValue === 'object'){
      if(newRoutesValue['/error']){
        ROUTES = newRoutesValue;
      }      
    }     
  }

  const renderView = (pathname, props={}) => {
    // clear the root element
    const root = rootElement;
    root.innerHTML = '';
    // find the correct view in ROUTES for the pathname
    if(ROUTES[pathname]){
        const template = ROUTES[pathname]();
        root.appendChild(template);
    } else {
        root.appendChild(ROUTES['/error']());
    }
    // in case not found render the error view
    // render the correct view passing the value of props
    // add the view element to the DOM root element
  } 
  
  export const navigateTo = (pathname, props={}) => {
    // update window history with pushState
    const URLvisited = window.location.hostname + pathname;
    history.pushState({}, "", URLvisited);
    // render the view with the pathname and props
    renderView(pathname, props);
  }
  
  export const onURLChange = (location) => {
    // parse the location for the pathname and search params
    // convert the search params to an object
    // render the view with the pathname and object
    renderView(location.pathname);
  }