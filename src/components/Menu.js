import { navigateTo } from "../router.js";
export const Menu = () => {
  const nav = document.createElement("nav");
  nav.innerHTML = `
    <label for="1-select">Filter by:</label>
        <select data-testid="select-filter" name="price" id="1-select">
            <option hidden id="Ship-price">Price</option>
            <option value="1000-1500">Price $1000-$1500</option>
            <option value="1501-2000">Price $1500-$2000</option>
            <option value="2001-2500">Price $2000-$2500</option>
            <option value="2501-3000">Price $2500-$3000</option>
        </select>
    <label for="2-select">Order by:</label>
        <select data-testid="select-sort" name="name" id="2-select">
            <option disable selected value="1">Ship Name</option>
            <option value="asc">Name: A-Z</option>
            <option value="desc">Name: Z-A</option>
        </select>
    <label for="3-select">Sort by:</label>
        <select data-testid="select-sort-price" name="price-high-low" id="3-select">
            <option disable selected value="2">Price</option>
            <option value="low">Low to High</option>
            <option value="high">High to Low</option>
        </select>
    <button data-testid="statistics"><i class="bi bi-graph-up-arrow"></i></button>
    <button data-testid="grupal-chat"><i class="bi bi-people-fill"></i><p>ChatGrupal</p></button>
    <button data-testid="button-clear">Clear</button>
    `;

  nav.setAttribute("id", "menu");

  const chatGrupalButton = nav.querySelector('button[data-testid="grupal-chat"]');
  chatGrupalButton.addEventListener('click', ()=>{
    navigateTo("/groupChat");

  })
  return nav;
};
