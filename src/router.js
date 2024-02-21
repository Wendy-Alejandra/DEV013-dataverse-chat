// Contiene todas las rutas
let ROUTES = {

};

// referencia al elemento HTML en donde vamos a dibujar el contenido de nuestras componentes
let rootEl = "";

export const setRootEl = (newRootElvalue) => {
    rootEl = newRootElvalue;

}

export const setRoutes = (newRoutesValue) => {
    // optional Throw errors if routes isn't an object
  // optional Throw errors if routes doesn't define an /error route
  // assign ROUTES
    if (typeof newRoutesValue === "object") {
        if(newRoutesValue["/error"]) {
            ROUTES = newRoutesValue;
        }
    }
    ROUTES = newRoutesValue;
}

const renderView = (pathname, props={}) => {
    // clear the root element
    const root = rootEl;
    root.innerHTML = "";
    // find the correct view in ROUTES for the pathname
    console.log(pathname, ROUTES);
    if (ROUTES[pathname]) {
        const template = ROUTES[pathname](props);
        root.appendChild(template);
    // in case not found render the error view
    } else {
        root.appendChild(ROUTES["/error"]());
    }

    // render the correct view passing the value of props
    // add the view element to the DOM root element
  } 

  export const navigateTo = (pathname, props={}) => {
    // update window history with pushState
    const URLvisited = window.location.origin + pathname;
    console.log(URLvisited);
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