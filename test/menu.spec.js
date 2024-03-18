//Herramienta de prueba que se utiliza para probar el DOM
import { fireEvent } from "@testing-library/dom";
import { Menu } from "./../src/components/Menu.js";
import { navigateTo } from "./../src/router.js"; 

//Simula el navigateTo de nuestro router
jest.mock("./../src/router.js", () => ({
  navigateTo: jest.fn(),
}));

describe('Menu component', () => {
  let menu;
  //Se ejecute antes del estado de prueba para agregar el menu al body
  beforeEach(() => {
    menu = Menu();
    document.body.appendChild(menu);
  });
  //Se ejecuta despues de cada caso de prueba para limpiar el body
  afterEach(() => {
    document.body.removeChild(menu);
  });
  it('renders all necessary elements', () => {
    //Para comprobar que existan los elementos y que fueron creados en el DOM
    expect(menu.querySelector('select[data-testid="select-filter"]')).toBeTruthy();
    expect(menu.querySelector('select[data-testid="select-sort"]')).toBeTruthy();
    expect(menu.querySelector('select[data-testid="select-sort-price"]')).toBeTruthy();
    expect(menu.querySelector('button[data-testid="statistics"]')).toBeTruthy();
    expect(menu.querySelector('button[data-testid="grupal-chat"]')).toBeTruthy();
    expect(menu.querySelector('button[data-testid="button-clear"]')).toBeTruthy();
  });
  it('Clicking on grupal chat button should navigate to "/groupChat"', () => {
    const chatGrupalButton = menu.querySelector('button[data-testid="grupal-chat"]');
    //fireEvent simula eventos del DOM
    fireEvent.click(chatGrupalButton);
    expect(navigateTo).toHaveBeenCalledWith('/groupChat');
  });
});
