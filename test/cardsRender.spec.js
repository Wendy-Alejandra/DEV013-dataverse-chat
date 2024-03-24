import { CardsRender } from "./../src/components/CardsRender.js";
import { navigateTo } from "./../src/router.js";
import { data as fakeData } from "./data.js";

// Mock de la función navigateTo
jest.mock("./../src/router.js", () => ({
  navigateTo: jest.fn(),
}));

describe("CardsRender component", () => {
  it("CardsRender renders correctly", () => {
    // Renderizar el componente CardsRender con datos de prueba
    const ulElement = CardsRender(fakeData);

    // Verificar que el elemento sea un objeto de tipo HTMLUListElement
    expect(ulElement instanceof HTMLUListElement).toBe(true);

    // Verificar que se han renderizado las tarjetas correctamente
    expect(ulElement.querySelectorAll(".cards").length).toBe(fakeData.length);

    // Verificar que los botones 'See more' tienen los atributos y eventos esperados
    const buttons = ulElement.querySelectorAll(".see-more");
    buttons.forEach((button, index) => {
      expect(button.getAttribute("data-id")).toBe(
        fakeData[index].id.toString()
      );
      button.click();
      expect(navigateTo).toHaveBeenCalledWith("/moreInfoCards", {
        id: fakeData[index].id.toString(),
      });
    });
  });
});
