// Variable privada que almacena todas las rutas de la SPA
let ROUTES = {};

// referencia al elemento HTML en donde vamos a dibujar el contenido de nuestras componentes
let rootEl = "";

export const setRootEl = (newRootElvalue) => {
  rootEl = newRootElvalue;
};

export const setRoutes = (newRoutesValue) => {
  // optional Throw errors if routes isn't an object
  // optional Throw errors if routes doesn't define an /error route
  // assign ROUTES
  if (typeof newRoutesValue === "object") {
    if (newRoutesValue["/error"]) {
      ROUTES = newRoutesValue;
    }
  }
  ROUTES = newRoutesValue;
};
const queryStringToObject = (queryString) => {
  // convert query string to URLSearchParams
  const params = new URLSearchParams(queryString);
  // convert URLSearchParams to an object
  const paramsObject = Object.fromEntries(params);
  // return the object
  return paramsObject;
};

const renderView = (pathname, props = {}) => {
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
};

export const navigateTo = (pathname, props) => {
  // update window history with pushState
  const URLvisited =
    window.location.origin +
    pathname +
    `${props ? `?${new URLSearchParams(props)}` : ""}`;
  console.log("ver URLvisited", URLvisited);

  history.pushState({}, "", URLvisited);

  // if(props.id === 'undefined'){
  //   URLvisited = window.location.origin + pathname;
  //   history.pushState({}, "", URLvisited);
  // } else{
  //   URLvisited = window.location.origin + pathname + `?id=${props.id}`;
  //   history.pushState({}, "", URLvisited);
  // }
  // render the view with the pathname and props
  renderView(pathname, props);
};

export const onURLChange = (location) => {
  // parse the location for the pathname and search params
  const searchParam = window.location.search;
  // convert the search params to an object
  const props = queryStringToObject(searchParam);
  // render the view with the pathname and object
  renderView(location.pathname, props);
};
