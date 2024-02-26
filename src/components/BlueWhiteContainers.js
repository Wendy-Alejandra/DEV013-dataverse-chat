export const BlueWhiteContainers = () => {
    const blueDiv = document.createElement("div");
    blueDiv.className = "blue-container";
    const header = document.createElement("header");
    header.innerHTML = `<h1>CRUISES LINES</h1>`;
    const whiteDiv = document.createElement("div")
    whiteDiv. className = "white-container";
    whiteDiv.innerHTML = `<button class="close"><i class="bi bi-x-lg"></i></button>`;
    blueDiv.append(header, whiteDiv);
    return blueDiv;
}

// export const BlueWhiteContainers = () => {
//     const blueDiv = document.createElement("div");
//     blueDiv.className = "blue-container";
//     blueDiv.innerHTML = `<div class="white-container">
//     <button class="close"></button>
//     </div>`;
//     blueDiv.append()
//     return div;
// }