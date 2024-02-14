import { Footer } from "./../components/Footer.js";

export const Cards = () => {
    const section = document.createElement("section");
    section.className = "container-section"
    const div = document.createElement("div");
    div.className = "menu-container";
    div.innerHTML =  `        
          <header>
            <h1>Cruise Line</h1>
            <h2>"Your Dreamed Vacation"</h2>
            <button class="open-menu"><i class="bi bi-list"></i></button>
          </header>
          <nav id="menu" class="hamburguer">
            <button class="close-menu">
              <i class="bi bi-x-lg"></i>
            </button>
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
            <select
              data-testid="select-sort-price"
              name="price-high-low"
              id="3-select"
            >
              <option disable selected value="2">Price</option>
              <option value="low">Low to High</option>
              <option value="high">High to Low</option>
            </select>
            <button data-testid="button-clear">Clear</button>
          </nav>`;

    const main = document.createElement("main");
    main.innerHTML = `         
        <main>
          <div id="statistics">
            <p id="text"></p>
          </div>
          <button data-testid="statistics">Statistics</button>
          <div id="root"></div>
        </main>`;
    
    const cards = `${section.append(div, main)} ${ Footer()}`;
    return cards;
};

// export default Home;