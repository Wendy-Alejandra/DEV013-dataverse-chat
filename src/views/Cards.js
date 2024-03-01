import { data } from "./../data/dataset.js";
import { Header } from "./../components/Header.js";
import { Menu } from "./../components/Menu.js";
import { Statistics } from "../components/Statistics.js";
import { CardsRender } from "./../components/CardsRender.js";
import { Footer } from "./../components/Footer.js";
import {
  filterData,
  sortData,
  sortDataByPrice,
  computeStats,
} from "./../lib/dataFunctions.js";

export const Cards = () => {
  const section = document.createElement("section");
  const div = document.createElement("div");
  div.appendChild(CardsRender(data));

  section.append(Header(), Menu(), Statistics(), div, Footer());

  const selectFilter = section.querySelector(
    'select[data-testid="select-filter"]'
  );
  const selectSort = section.querySelector('select[data-testid="select-sort"]');
  const selectSortByPrice = section.querySelector(
    'select[data-testid="select-sort-price"]'
  );
  const button = section.querySelector('button[data-testid="button-clear"]');
  const buttonStats = section.querySelector('button[data-testid="statistics"]');
  const textStats = section.querySelector(".text");

  /* Filtering and sorting filtered data (filtrando y ordenando la data filtrada) */
  selectFilter.addEventListener("change", (e) => {
    const filteredData = filterData(data, "cruisePrice", e.target.value);
    div.textContent = "";
    div.append(CardsRender(filteredData));
    selectSort.addEventListener("change", function (e) {
      const orderFilterName = sortData(filteredData, "name", e.target.value);
      div.innerHTML = "";
      div.append(CardsRender(orderFilterName));
    });
    selectSortByPrice.addEventListener("change", function (e) {
      const orderPriceFilter = sortDataByPrice(
        filteredData,
        "cruisePrice",
        e.target.value
      );
      div.innerHTML = "";
      div.append(CardsRender(orderPriceFilter));
    });
    textStats.textContent = "";
  });

  /* ordering by ship name only (ordenando solo por nombre de crucero)*/
  selectSort.addEventListener("change", function (e) {
    const orderData = sortData(data, "name", e.target.value);
    div.innerHTML = "";
    div.append(CardsRender(orderData));
  });

  /* ordering by cruise price only (ordenando solo por precio de crucero)*/
  selectSortByPrice.addEventListener("change", function (e) {
    const orderDataByPrice = sortDataByPrice(
      data,
      "cruisePrice",
      e.target.value
    );
    div.innerHTML = "";
    div.appendChild(CardsRender(orderDataByPrice));
  });

  /* resetting all (limpiando todo)*/
  button.addEventListener("click", function () {
    selectSortByPrice.selectedIndex = 0;
    selectSort.selectedIndex = 0;
    selectFilter.selectedIndex = 0;
    textStats.textContent = "";
    div.innerHTML = "";
    div.append(CardsRender(data));
    selectSortByPrice.addEventListener("change", function (e) {
      const orderDataByPrice = sortDataByPrice(
        data,
        "cruisePrice",
        e.target.value
      );
      div.innerHTML = "";
      div.append(CardsRender(orderDataByPrice));
    });
    selectSort.addEventListener("change", function (e) {
      const orderData = sortData(data, "name", e.target.value);
      div.innerHTML = "";
      div.append(CardsRender(orderData));
    });
  });

  /* updating statistics (average price) all cards and filtered cards (actualizando las estadisticas (promedio
  de precios) para todas las tarjetas)*/
  buttonStats.addEventListener("click", function () {
    if (selectFilter.value === "Price") {
      textStats.textContent = computeStats(data);
    } else {
      const filteredData = filterData(data, "cruisePrice", selectFilter.value);
      textStats.textContent = computeStats(filteredData);
    }
  });

  /* opening-closing hamburguer menu for screen devices <600px (abriendo-cerrando el menu hamburguesa para
  dispositivos con pantallas <600px)*/

  return section;
};
