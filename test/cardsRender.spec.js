// import { CardsRender } from "./../src/components/CardsRender.js";

// // Mock de la función navigateTo
// jest.mock("../router.js", () => ({
//   navigateTo: jest.fn(),
// }));

// describe("CardsRender component", () => {
//   test("CardsRender renders correctly", () => {
//     const testData = [
//       {
//         id: 1,
//         imageUrl: "url1",
//         name: "Card 1",
//         facts: {
//           departurePort: "Port 1",
//           cruisePrice: "$100",
//         },
//       },
//       {
//         id: 2,
//         imageUrl: "url2",
//         name: "Card 2",
//         facts: {
//           departurePort: "Port 2",
//           cruisePrice: "$200",
//         },
//       },
//     ];

//     // Renderizar el componente CardsRender con datos de prueba
//     const ulElement = CardsRender(testData);

//     // Verificar que el elemento sea un objeto de tipo HTMLUListElement
//     expect(ulElement instanceof HTMLUListElement).toBe(true);

//     // Verificar que se han renderizado las tarjetas correctamente
//     expect(ulElement.querySelectorAll(".cards").length).toBe(testData.length);

//     // Verificar que los botones 'See more' tienen los atributos y eventos esperados
//     const buttons = ulElement.querySelectorAll(".see-more");
//     buttons.forEach((button, index) => {
//       expect(button.getAttribute("data-id")).toBe(
//         testData[index].id.toString()
//       );
//       button.click();
//       expect(navigateTo).toHaveBeenCalledWith("/moreInfoCards", {
//         id: testData[index].id,
//       });
//     });
//   });
// });
