import { data } from "./../data/dataset.js";
import { Header } from "./../components/Header.js";
import { Menu } from "./../components/Menu.js";
import { CardsRender } from "./../components/CardsRender.js"
import { Footer } from "./../components/Footer.js";
import { filterData } from "./../lib/dataFunctions.js";

export const Cards = () => {
  const section = document.createElement("section");
  const div = document.createElement("div");
  div.appendChild(CardsRender(data));

  section.append(Header(), Menu(), div, Footer());

  /* Filtering data (filtrando la data) */
  const selectFilter = section.querySelector('select[data-testid="select-filter"]');
  selectFilter.addEventListener("change", (e)=>{
    const filteredData= filterData(data, "cruisePrice", e.target.value);
    div.textContent="";
    div.append(CardsRender(filteredData));
  });

  return section;
};

