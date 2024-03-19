import { fireEvent } from "@testing-library/dom"; //Testing tool used to test the DOM
import { Menu } from "./../src/components/Menu.js";
import { navigateTo } from "./../src/router.js"; 
import { getApiKey } from "./../src/lib/apiStorage.js";

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
  // Checks all the elements exist and that they were created in the DOM
    expect(menu.querySelector('select[data-testid="select-filter"]')).toBeTruthy();
    expect(menu.querySelector('select[data-testid="select-sort"]')).toBeTruthy();
    expect(menu.querySelector('select[data-testid="select-sort-price"]')).toBeTruthy();
    expect(menu.querySelector('button[data-testid="statistics"]')).toBeTruthy();
    expect(menu.querySelector('button[data-testid="grupal-chat"]')).toBeTruthy();
    expect(menu.querySelector('button[data-testid="button-clear"]')).toBeTruthy();
  });
  
  it('Clicking on group chat button should navigate to "/groupChat"', () => {
    const chatGrupalButton = menu.querySelector('button[data-testid="grupal-chat"]');
    const apiKeySave = getApiKey();
    fireEvent.click(chatGrupalButton); //fireEvent simulates DOM events
    if (apiKeySave !== null) {
      expect(navigateTo).toHaveBeenCalledWith('/groupChat', { id: null });
    } else {
      expect(navigateTo).toHaveBeenCalledWith('/ApiKey', { id: null });
    }
  });
});
