//Testing tool used to test the DOM
import { fireEvent } from "@testing-library/dom";
import { Menu } from "./../src/components/Menu.js";
import { navigateTo } from "./../src/router.js"; 

//Simulates our navigateTo router
jest.mock("./../src/router.js", () => ({
  navigateTo: jest.fn(),
}));

describe('Menu component', () => {
  let menu;
  //Runs before the test state to add the menu to the body
  beforeEach(() => {
    menu = Menu();
    document.body.appendChild(menu);
  });
  //It is executed after each test case to clean the body
  afterEach(() => {
    document.body.removeChild(menu);
  });
  it('renders all necessary elements', () => {
  //To check all the elements exist and that they were created in the DOM
    expect(menu.querySelector('select[data-testid="select-filter"]')).toBeTruthy();
    expect(menu.querySelector('select[data-testid="select-sort"]')).toBeTruthy();
    expect(menu.querySelector('select[data-testid="select-sort-price"]')).toBeTruthy();
    expect(menu.querySelector('button[data-testid="statistics"]')).toBeTruthy();
    expect(menu.querySelector('button[data-testid="grupal-chat"]')).toBeTruthy();
    expect(menu.querySelector('button[data-testid="button-clear"]')).toBeTruthy();
  });
  it('Clicking on group chat button should navigate to "/groupChat"', () => {
    const chatGrupalButton = menu.querySelector('button[data-testid="grupal-chat"]');
    //fireEvent simulates DOM events
    fireEvent.click(chatGrupalButton);
    expect(navigateTo).toHaveBeenCalledWith('/groupChat');
  });
});
